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
      title: 'Use San Jose’s residential garbage and recycling services effectively.',
      subtext: 'San Jose provides three bins for waste management: blue for recyclables, green for compostables, and black for general waste. Ensure items are clean and free of food residue before recycling to prevent contamination. Pizza boxes, for instance, should be placed in the compost bin if they are greasy, but clean ones belong in the recycling bin. Take extra care to avoid placing non-recyclable plastics or hazardous materials in any of these bins, as improper sorting can disrupt waste processing systems.'
    },
    {
      title: 'Schedule bulky item pickups for large waste items.',
      subtext: 'San Jose residents can schedule up to two free curbside bulky item collections annually through the city’s waste services. This program accepts items such as furniture, mattresses, large appliances, and even certain e-waste like TVs or monitors. Scheduling a pickup is easy—just contact your waste hauler or submit an online request. Proper disposal of bulky items not only keeps your property clean but also prevents illegal dumping, which harms the community and environment.'
    },
    {
      title: 'Drop off hazardous waste at the San Jose Household Hazardous Waste Facility.',
      subtext: 'Many household products, like cleaning chemicals, paints, batteries, and electronics, are classified as hazardous waste and require special handling. San Jose residents can safely dispose of these items by making an appointment at the San Jose Household Hazardous Waste Facility. Appointments are free, and the facility ensures that toxic materials are handled and recycled or disposed of properly, preventing contamination of soil, air, and water. Learn more about the types of items accepted before visiting.'
    },
    {
      title: 'Donate reusable items to local organizations.',
      subtext: 'Instead of discarding items like gently used furniture, clothing, or electronics, consider donating them to local nonprofits such as Goodwill of Silicon Valley or Habitat for Humanity’s ReStore. These organizations help repurpose usable goods while supporting community programs. Additionally, many donation centers offer pickup services for large items, making it convenient for residents. Donating is not only eco-friendly but also benefits those in need, reducing the overall waste sent to landfills.'
    },
    {
      title: 'Participate in neighborhood cleanup events.',
      subtext: 'San Jose regularly organizes neighborhood cleanup days where volunteers can help remove litter from streets, parks, and public spaces. These events also provide an opportunity to learn more about waste segregation and proper disposal methods. Volunteering at a cleanup event fosters a sense of community, raises awareness about the impact of waste on local ecosystems, and sets an example for others to follow. Check the city’s website or local community boards for upcoming events in your area.'
    },
  ];  

  const additionalResources = [
    { title: 'EPA Recycling Basics', url: 'https://www.epa.gov/recycle' },
    { title: 'How to Recycle Properly - YouTube', url: 'https://www.youtube.com/watch?v=7UuUeoyYmxI' },
    { title: 'Recycling 101 - NRDC', url: 'https://www.nrdc.org/stories/recycling-101' },
    { title: 'San Jose Recycling & Garbage', url: 'https://www.sanjoseca.gov/your-government/departments/environmental-services/your-garbage-recycling' },
    { title: 'San Jose Household Hazardous Waste Program', url: 'https://hhw.sccgov.org/' },
    { title: 'Bulky Item Collection Services', url: 'https://www.sanjoseca.gov/your-government/departments/environmental-services/your-garbage-recycling/large-items' },
    { title: 'Goodwill of Silicon Valley Donation Guidelines', url: 'https://goodwillsv.org/' },
    { title: 'Santa Clara County Recycling & Waste Reduction', url: 'https://www.reducewaste.org/' },
    { title: 'Habitat for Humanity ReStore', url: 'https://www.habitatebsv.org/restore' },
  ];

  return (
    <div className="container mx-auto p-8 max-w-5xl">
      <h1 className="text-5xl font-bold mb-12 text-center py-8 font-serif rounded-full bg-green-100 w-full">
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

      <Card className="mb-12 bg-green-100">
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
                  <span className="bg-green-100 text-green-800 font-semibold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">{index + 1}</span>
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
          <div className="grid gap-6 sm:grid-cols-3 place-items-center">
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
