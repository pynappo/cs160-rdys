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

  const { image } = await req.json();
  
  const generativePart = fileToGenerativePart(image.split(',')[1], 'image/png');
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const prompt = "You are a recycling expert. You are given an image of a recyclable item. Is it recyclable and what type of recyclable item is it? Your response should first be a boolean indicating whether the item is recyclable, and a single word indicating the category of recyclable item (recyclables, compostables, or general waste). Then, give an explanation of why the item is recyclable or not. Return each different answer in a JSON object.";
  const generatedContent = await model.generateContent([prompt, generativePart]);
  const responseText = generatedContent.response.text();
  const jsonString = responseText.match(/```json\n([\s\S]*?)\n```/);
  let jsonResponse;

  if (jsonString && jsonString[1]) {
    jsonResponse = JSON.parse(jsonString[1]);
  } else {
    console.error('Failed to parse JSON from markdown response');
    jsonResponse = { error: 'Failed to parse response' };
  }
  
  console.log(jsonResponse);
  return NextResponse.json(jsonResponse, { status: 200 });
}
