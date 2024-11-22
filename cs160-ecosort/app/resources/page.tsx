import React from 'react';
import { Recycle, Apple, Skull, Cpu, Trash2, CheckCircle, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Resources = () => {
  const wasteTypes = [
    { icon: Recycle, title: 'Recyclables', description: 'Items like paper, cardboard, glass, and certain plastics. Ensure they are clean and dry before recycling.', color: 'bg-blue-500' },
    { icon: Apple, title: 'Compostables', description: 'Organic waste such as food scraps and yard waste. Composting reduces landfill waste and enriches soil.', color: 'bg-green-500' },
    { icon: Skull, title: 'Hazardous Waste', description: 'Includes batteries, paints, and chemicals. These should be taken to designated disposal facilities to prevent environmental harm.', color: 'bg-red-500' },
    { icon: Cpu, title: 'Electronic Waste (E-Waste)', description: 'Discarded electronic devices. Many electronics stores offer recycling programs for e-waste.', color: 'bg-yellow-500' },
    { icon: Trash2, title: 'General Waste', description: 'Non-recyclable and non-hazardous waste that typically goes to landfills.', color: 'bg-gray-500' },
  ];

  const bestPractices = [
    {
      title: 'Reduce waste by opting for reusable products and buying in bulk.',
      subtext: 'This approach minimizes packaging waste and often saves money in the long run.'
    },
    {
      title: 'Participate in local recycling programs and stay informed about what can be recycled in your area.',
      subtext: 'Recycling guidelines can vary by location, so it\'s important to know what\'s accepted in your community.'
    },
    {
      title: 'Compost at home to manage organic waste effectively.',
      subtext: 'Composting not only reduces waste but also creates nutrient-rich soil for gardening.'
    },
    {
      title: 'Properly label waste bins to avoid contamination of recyclables.',
      subtext: 'Clear labeling helps ensure that recyclables aren\'t contaminated with non-recyclable items.'
    },
    {
      title: 'Educate your community about the importance of waste segregation and reduction.',
      subtext: 'Spreading awareness can lead to collective action and more significant environmental impact.'
    },
  ];

  const additionalResources = [
    { title: 'EPA Recycling Basics', url: 'https://www.epa.gov/recycle' },
    { title: 'How to Recycle Properly - YouTube', url: 'https://www.youtube.com/watch?v=7UuUeoyYmxI' },
    { title: 'Recycling 101 - NRDC', url: 'https://www.nrdc.org/stories/recycling-101' },
    { title: 'Waste360 - Recycling', url: 'https://www.waste360.com/recycling' },
    { title: 'WHO Waste Management Fact Sheet', url: 'https://www.who.int/news-room/fact-sheets/detail/waste-management' },
    { title: 'Waste Management - ScienceDirect', url: 'https://www.sciencedirect.com/topics/earth-and-planetary-sciences/waste-management' },
  ];

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-5xl font-bold mb-12 text-center py-8 font-serif">
        EcoSort&apos;s &quot;Comprehensive&quot; Waste Disposal Guide
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Understanding Waste Types</h2>
        <div className="grid gap-6 md:grid-cols-2 [&>*:last-child]:md:col-span-2 [&>*:last-child]:md:place-self-center [&>*:last-child]:md:max-w-[50%]">
          {wasteTypes.map((type, index) => (
            <Card key={index} className="w-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className={`${type.color} text-white p-3 rounded-full`}>
                  <type.icon size={28} />
                </div>
                <CardTitle className="text-xl">{type.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{type.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <CheckCircle className="text-green-500" size={28} />
            Best Practices for Waste Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-6">
            {bestPractices.map((practice, index) => (
              <li key={index} className="flex flex-col">
                <div className="flex items-start">
                  <span className="inline-block bg-green-100 text-green-800 font-semibold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">{index + 1}</span>
                  <span className="font-medium text-lg">{practice.title}</span>
                </div>
                <p className="mt-2 ml-11 text-gray-600">{practice.subtext}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <ExternalLink className="text-blue-500" size={28} />
            Additional Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2 place-items-center">
            {additionalResources.map((resource, index) => (
              <div key={index} className="w-full max-w-xs">
                <h3 className="font-semibold mb-2 text-lg">{resource.title}</h3>
                <p className="mb-3 text-sm text-gray-600">Learn more about {resource.title.toLowerCase()}:</p>
                <Button asChild variant="outline" className="w-full">
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    Visit Resource
                    <ExternalLink size={18} />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Resources;
