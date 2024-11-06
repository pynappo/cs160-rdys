import { Button } from "@/components/ui/button";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Leaf, Smartphone, ThumbsUp } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="flex-1 w-full">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-100">
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Dispose Waste Properly with EcoSort
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Promoting proper waste disposal by providing assistance to
                  those unaware of how to appropriately throw away their waste.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 m-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Why Choose EcoSort?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="flex flex-col items-center p-6 space-y-4">
                  <Leaf className="h-12 w-12 text-green-600" />
                  <h3 className="text-2xl font-bold text-center">
                    Eco-Friendly
                  </h3>
                  <p className="text-center text-gray-600">
                    Reduce your environmental impact by disposing of waste
                    correctly.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6 space-y-4">
                  <Smartphone className="h-12 w-12 text-green-600" />
                  <h3 className="text-2xl font-bold text-center">
                    Easy to Use
                  </h3>
                  <p className="text-center text-gray-600">
                    Our app makes it simple to identify and sort your waste
                    properly.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6 space-y-4">
                  <ThumbsUp className="h-12 w-12 text-green-600" />
                  <h3 className="text-2xl font-bold text-center">
                    Community Impact
                  </h3>
                  <p className="text-center text-gray-600">
                    Join a community of eco-conscious individuals making a
                    difference.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 m-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Scan Your Waste</h3>
                <p className="text-center text-gray-600">
                  Use our app to scan the item you want to dispose of.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Get Sorting Instructions</h3>
                <p className="text-center text-gray-600">
                  Receive clear instructions on how to properly sort the item.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Dispose Correctly</h3>
                <p className="text-center text-gray-600">
                  Follow the instructions to dispose of your waste properly.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 m-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    "EcoSort has made it so easy for me to properly dispose of
                    my waste. I feel like I'm making a real difference!"
                  </p>
                  <p className="font-bold">- Sarah J.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    "I never knew how much of my waste could be recycled until I
                    started using EcoSort. It's eye-opening!"
                  </p>
                  <p className="font-bold">- Mike T.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-100">
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Start Sorting Smarter?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Join EcoSort today and make a positive impact on the
                  environment.
                </p>
              </div>
              <div className="space-x-4">
                <Button>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
