import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

function fileToGenerativePart(imageData: string, mimeType: string) {
  return {
    inlineData: {
      data: imageData,
      mimeType
    },
  };
}

export async function POST(req: NextRequest) {
  await new Promise(resolve => setTimeout(resolve, 5000));
  return NextResponse.json({ message: 'Image uploaded successfully' }, { status: 200 });

  const { image } = await req.json();
  
  const generativePart = fileToGenerativePart(image.split(',')[1], 'image/png');
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const prompt = "What is this image about?";
  const generatedContent = await model.generateContent([prompt, generativePart]);
  
  console.log(generatedContent.response.text());
  return NextResponse.json({ message: 'Image uploaded successfully' }, { status: 200 });
}
