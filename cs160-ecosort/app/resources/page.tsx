import React from 'react';

const Resources = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Comprehensive Waste Disposal Guide</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Understanding Waste Types</h2>
        <p>
          Waste can be categorized into several types, each requiring specific disposal methods:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Recyclables:</strong> Items like paper, cardboard, glass, and certain plastics. Ensure they are clean and dry before recycling.</li>
          <li><strong>Compostables:</strong> Organic waste such as food scraps and yard waste. Composting reduces landfill waste and enriches soil.</li>
          <li><strong>Hazardous Waste:</strong> Includes batteries, paints, and chemicals. These should be taken to designated disposal facilities to prevent environmental harm.</li>
          <li><strong>Electronic Waste (E-Waste):</strong> Discarded electronic devices. Many electronics stores offer recycling programs for e-waste.</li>
          <li><strong>General Waste:</strong> Non-recyclable and non-hazardous waste that typically goes to landfills.</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Best Practices for Waste Management</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Reduce waste by opting for reusable products and buying in bulk.</li>
          <li>Participate in local recycling programs and stay informed about what can be recycled in your area.</li>
          <li>Compost at home to manage organic waste effectively.</li>
          <li>Properly label waste bins to avoid contamination of recyclables.</li>
          <li>Educate your community about the importance of waste segregation and reduction.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Additional Resources</h2>
        <ul className="list-disc list-inside mt-2">
          <li><a href="https://www.epa.gov/recycle" target="_blank" className="text-blue-500 hover:underline">EPA Recycling Basics</a></li>
          <li><a href="https://www.youtube.com/watch?v=7UuUeoyYmxI" target="_blank" className="text-blue-500 hover:underline">How to Recycle Properly - YouTube</a></li>
          <li><a href="https://www.nrdc.org/stories/recycling-101" target="_blank" className="text-blue-500 hover:underline">Recycling 101 - NRDC</a></li>
          <li><a href="https://www.waste360.com/recycling" target="_blank" className="text-blue-500 hover:underline">Waste360 - Recycling</a></li>
          <li><a href="https://www.who.int/news-room/fact-sheets/detail/waste-management" target="_blank" className="text-blue-500 hover:underline">WHO Waste Management Fact Sheet</a></li>
          <li><a href="https://www.sciencedirect.com/topics/earth-and-planetary-sciences/waste-management" target="_blank" className="text-blue-500 hover:underline">Waste Management - ScienceDirect</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Resources;
