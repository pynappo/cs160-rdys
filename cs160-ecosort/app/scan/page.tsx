"use client";

import React, { useState, useRef } from 'react';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, RefreshCw, Upload } from 'lucide-react';
import Image from 'next/image';

const ScanPage = () => {
  const [imageData, setImageData] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const startCamera = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    }
  };

  const captureImage = () => {
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const dataUrl = canvasRef.current.toDataURL('image/png');
        setImageData(dataUrl);
      }
    }
  };

  const sendImageToServer = async () => {
    if (imageData) {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageData }),
      });
      if (response.ok) {
        console.log('Image successfully sent to the server');
      } else {
        console.error('Failed to send image to the server');
      }
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-5xl font-bold mb-12 text-center py-8 font-serif">
        Scan Your Waste
      </h1>
      <SignedIn>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Let&apos;s &quot;sort&quot; your waste!</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`flex ${imageData ? 'flex-row' : 'flex-col'} items-center justify-center gap-8`}>
              <div className="flex flex-col items-center">
                <video
                  ref={videoRef}
                  width="480"
                  height="360"
                  className="mb-4 bg-gray-200 rounded-lg shadow-md"
                />
                <canvas
                  ref={canvasRef}
                  width="480"
                  height="360"
                  className="hidden"
                />
                <div className="flex gap-4 mt-4">
                  <Button onClick={startCamera} className="flex items-center gap-2">
                    <Camera size={18} />
                    Start Camera
                  </Button>
                  <Button onClick={captureImage} variant="secondary" className="flex items-center gap-2">
                    <Camera size={18} />
                    Capture Image
                  </Button>
                </div>
              </div>
              {imageData && (
                <div className="flex flex-col items-center">
                  <Image
                    src={imageData}
                    alt="Captured"
                    className="w-[480px] h-[360px] object-cover rounded-lg shadow-md mb-4"
                  />
                  <div className="flex gap-4">
                    <Button onClick={() => setImageData(null)} variant="outline" className="flex items-center gap-2">
                      <RefreshCw size={18} />
                      Retake
                    </Button>
                    <Button onClick={sendImageToServer} className="flex items-center gap-2">
                      <Upload size={18} />
                      Send to Server
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </SignedIn>
      <SignedOut>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Please Sign In</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-6">You need to be signed in to access the scan functionality.</p>
            <SignInButton mode="modal">
              <Button>Sign In</Button>
            </SignInButton>
          </CardContent>
        </Card>
      </SignedOut>
    </div>
  );
};

export default ScanPage;
