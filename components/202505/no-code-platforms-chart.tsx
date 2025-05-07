import React from 'react';

const NoCodePlatformsChart = () => {
  // Combined data from all rankings
  const platforms = [
    {
      name: "Bubble",
      rank1: 1,
      rank2: 1, 
      rank3: 1,
      bestFor: "Web apps, marketplaces, SaaS",
      demand: "Very High",
      keyStrengths: "Broad applicability, extensive functionality, strong community support"
    },
    {
      name: "Webflow",
      rank1: 2,
      rank2: 2,
      rank3: 2, 
      bestFor: "Custom websites, landing pages",
      demand: "Very High",
      keyStrengths: "Visual design tools, responsive websites, designer community"
    },
    {
      name: "Airtable",
      rank1: 3,
      rank2: 7,
      rank3: 4,
      bestFor: "Workflow automation, internal tools, data management",
      demand: "High",
      keyStrengths: "Database functionality, collaboration features, integrations"
    },
    {
      name: "Zapier",
      rank1: 4,
      rank2: null,
      rank3: 3,
      bestFor: "Automation, integrations",
      demand: "High",
      keyStrengths: "5,000+ app integrations, workflow automation, cross-industry utility"
    },
    {
      name: "Zoho Creator",
      rank1: 5,
      rank2: null,
      rank3: null,
      bestFor: "Business process automation",
      demand: "Moderate",
      keyStrengths: "Business apps, Zoho ecosystem integration, small-to-mid business focus"
    },
    {
      name: "Caspio",
      rank1: 6,
      rank2: null,
      rank3: null,
      bestFor: "Database-driven business applications",
      demand: "Moderate",
      keyStrengths: "Data-driven applications, secure solutions, niche market"
    },
    {
      name: "Thunkable",
      rank1: 7,
      rank2: null,
      rank3: null,
      bestFor: "Mobile app prototypes, MVPs",
      demand: "Moderate",
      keyStrengths: "Mobile app creation, simple interface, prototyping"
    },
    {
      name: "Adalo",
      rank1: null,
      rank2: 3,
      rank3: null,
      bestFor: "Mobile applications",
      demand: "Good",
      keyStrengths: "User-friendly interface, templates, mobile app focus"
    },
    {
      name: "Microsoft Power Apps",
      rank1: null,
      rank2: 4,
      rank3: null,
      bestFor: "Business applications, Microsoft ecosystem",
      demand: "Good",
      keyStrengths: "Microsoft integration, enterprise solutions, internal tools"
    },
    {
      name: "OutSystems",
      rank1: null,
      rank2: 5,
      rank3: null,
      bestFor: "Enterprise applications",
      demand: "Niche",
      keyStrengths: "Rapid development, enterprise focus, scalability"
    },
    {
      name: "Mendix",
      rank1: null,
      rank2: 6,
      rank3: null,
      bestFor: "Enterprise solutions",
      demand: "Niche",
      keyStrengths: "Complex applications, technical capabilities, enterprise market"
    },
    {
      name: "Appian",
      rank1: null,
      rank2: 8,
      rank3: null,
      bestFor: "Business process management",
      demand: "Limited",
      keyStrengths: "Process automation, enterprise-focused, specialized"
    },
    {
      name: "Retool",
      rank1: null,
      rank2: null,
      rank3: 5,
      bestFor: "Internal tools, dashboards, admin panels",
      demand: "Moderate",
      keyStrengths: "Internal tool building, technical audience, growing adoption"
    }
  ];

  // Sort platforms by average ranking (treating null as lower priority)
  const sortedPlatforms = [...platforms].sort((a, b) => {
    const aRanks = [a.rank1, a.rank2, a.rank3].filter(r => r !== null);
    const bRanks = [b.rank1, b.rank2, b.rank3].filter(r => r !== null);
    
    const aAvg = aRanks.length > 0 ? aRanks.reduce((sum, r) => sum + r, 0) / aRanks.length : 999;
    const bAvg = bRanks.length > 0 ? bRanks.reduce((sum, r) => sum + r, 0) / bRanks.length : 999;
    
    return aAvg - bAvg;
  });

  // Helper function to display ranking or dash
  const displayRank = (rank) => {
    return rank !== null ? rank : "—";
  };

  return (
    <div className="max-w-full overflow-hidden">
      <h2 className="text-xl font-bold mb-4">No-Code/Low-Code Platforms Ranked by Freelance Job Prospects</h2>
      
      <div className="text-sm mb-3">
        <span className="font-semibold">Note:</span> This chart consolidates three different rankings. 
        Rank 1 and Rank 2 are from the first and second analyses shared, while Rank 3 is from the third analysis.
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b border-r border-gray-200 text-left font-semibold">Platform</th>
              <th className="py-2 px-4 border-b border-r border-gray-200 text-center font-semibold w-16">Rank 1</th>
              <th className="py-2 px-4 border-b border-r border-gray-200 text-center font-semibold w-16">Rank 2</th>
              <th className="py-2 px-4 border-b border-r border-gray-200 text-center font-semibold w-16">Rank 3</th>
              <th className="py-2 px-4 border-b border-r border-gray-200 text-left font-semibold">Best For</th>
              <th className="py-2 px-4 border-b border-r border-gray-200 text-left font-semibold">Freelance Demand</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left font-semibold">Key Strengths</th>
            </tr>
          </thead>
          <tbody>
            {sortedPlatforms.map((platform, index) => (
              <tr key={platform.name} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="py-3 px-4 border-b border-r border-gray-200 font-medium">{platform.name}</td>
                <td className="py-3 px-4 border-b border-r border-gray-200 text-center">{displayRank(platform.rank1)}</td>
                <td className="py-3 px-4 border-b border-r border-gray-200 text-center">{displayRank(platform.rank2)}</td>
                <td className="py-3 px-4 border-b border-r border-gray-200 text-center">{displayRank(platform.rank3)}</td>
                <td className="py-3 px-4 border-b border-r border-gray-200">{platform.bestFor}</td>
                <td className="py-3 px-4 border-b border-r border-gray-200">{platform.demand}</td>
                <td className="py-3 px-4 border-b border-gray-200">{platform.keyStrengths}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-sm">
        <div className="font-semibold">Summary:</div>
        <ul className="list-disc pl-5 mt-2">
          <li><strong>Bubble and Webflow</strong> consistently rank as the top platforms across all analyses, suggesting they offer the strongest freelance opportunities.</li>
          <li><strong>Airtable and Zapier</strong> also appear frequently with high rankings, particularly for workflow automation and integration projects.</li>
          <li>Platforms focused on enterprise solutions (OutSystems, Mendix, Appian) tend to rank lower for freelance prospects despite their power.</li>
          <li>Mobile app development platforms like Thunkable and Adalo show moderate demand but aren't ranked as highly as web application platforms.</li>
        </ul>
      </div>
    </div>
  );
};

export default NoCodePlatformsChart;
