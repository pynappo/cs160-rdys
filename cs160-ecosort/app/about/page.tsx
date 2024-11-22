import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Target, Users } from 'lucide-react';

const AboutPage = () => {
  const sections = [
    {
      title: 'Purpose',
      icon: Leaf,
      content: 'Proper waste disposal simply isn\'t common knowledge. People aren\'t aware of how to sort waste; thus, we wanted a solution that makes waste disposal easy, promoting sustainable practices and reducing environmental detriments.',
    },
    {
      title: 'Goal',
      icon: Target,
      content: 'Through EcoSort,we\'re hoping to educate and empower individuals to make proper, informed decisions about waste management. Ultimately, we\'re aiming to contribute to a cleaner, healthier planet!',
    },
    {
      title: 'About the Developers',
      icon: Users,
      content: 'Made by: Steven Le, Raymond Lin, David Le, Ysabella Dela Cruz',
    },
  ];

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-5xl font-bold mb-12 text-center py-8 font-serif">EcoSort - A Background</h1> 
      <div className="grid gap-8 md:grid-cols-2 [&>*:last-child]:md:col-span-2 [&>*:last-child]:md:max-w-[66%] [&>*:last-child]:md:justify-self-center">
        {sections.map((section, index) => (
          <Card key={index} className="w-full bg-green-100">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <section.icon size={28} />
              </div>
              <CardTitle className="text-2xl">{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-black font-semibold">{section.content}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* <Card className="mt-12">
        <CardHeader>
          <CardTitle className="text-2xl">Join Us in Making a Difference</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            At EcoSort, we believe that small actions can lead to big changes. By using our app, you're not just sorting waste – you're contributing to a global movement towards sustainability.
          </p>
          <p>
            Whether you're a seasoned recycler or just starting your eco-friendly journey, EcoSort is here to guide you every step of the way. Together, we can create a cleaner, greener future for generations to come.
          </p>
        </CardContent>
      </Card> */}
    </div>
  );
};

export default AboutPage;

