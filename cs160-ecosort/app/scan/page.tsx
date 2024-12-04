"use client";

import React, { useState, useRef } from 'react';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, RefreshCw, Upload, Recycle, Trash2 } from 'lucide-react';
import Image from 'next/image';

const ScanPage = () => {
  const [imageData, setImageData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [category, setCategory] = useState<string | null>(null);
  const [recyclable, setRecyclable] = useState<boolean | null>(null);
  const [explanation, setExplanation] = useState<string | null>(null);
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
      setLoading(true);
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageData }),
      });
      const data = await response.json();
      setCategory(data.category);
      setRecyclable(data.recyclable);
      setExplanation(data.explanation);
      setLoading(false);
      if (response.ok) {
        console.log('Image successfully sent to the server');
      } else {
        console.error('Failed to send image to the server');
      }
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      plastic: 'bg-blue-500',
      paper: 'bg-yellow-500',
      glass: 'bg-green-500',
      metal: 'bg-red-500',
      organic: 'bg-brown-500',
      electronic: 'bg-purple-500',
      default: 'bg-gray-500'
    };
    return colors[category as keyof typeof colors] || colors.default;
  };

  return (
    <div className="container mx-auto p-8 max-w-4xl relative">
      {loading && (
        <div className="absolute inset-0 bg-white opacity-80 flex items-center justify-center z-50">
          <div role="status" className="border-t-transparent border-solid animate-spin mx-auto rounded-full m-5 border-black border-8 h-24 w-24">
          </div>
        </div>
      )}
      <h1 className="text-5xl font-bold mb-12 text-center py-8 font-serif">
        Scan Your Waste
      </h1>
      <SignedIn>
        {!loading && category && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Scan Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                  <div className={`${getCategoryColor(category)} p-4 rounded-full`}>
                    {recyclable ? <Recycle size={48} className="text-white" /> : <Trash2 size={48} className="text-white" />}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                    <p className="text-lg font-semibold">{recyclable ? 'Recyclable' : 'Not Recyclable'}</p>
                  </div>
                </div>
                <div className="flex-1 max-w-md">
                  <h3 className="text-xl font-semibold mb-2">Explanation:</h3>
                  <p>{explanation}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Let&apos;s &quot;sort&quot; your waste!</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center gap-8">
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
                    width={480}
                    height={360}
                    className="object-cover rounded-lg shadow-md mb-4"
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
