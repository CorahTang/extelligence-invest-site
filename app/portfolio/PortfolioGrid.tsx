
'use client';

import { useState } from 'react';

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All AI');

  const portfolioCategories = [
    {
      title: "AI Companies",
      companies: [
        { name: "Grandscale.ai", description: "AI‑based solutions for scaling business", website: "https://grandscale.ai", label: "AI", color: "bg-blue-500" },
        { name: "Qualtric.ai", description: "AI‑driven quality control for manufacturing", website: "https://qualtric.ai", label: "QC", color: "bg-indigo-500" },
        { name: "Topvoices.ai", description: "AI‑powered voice recognition and analytics", website: "https://topvoices.ai", label: "VOICE", color: "bg-purple-500" },
        { name: "GoldenEggs.ai", description: "AI-driven company", website: "https://goldeneggs.ai", label: "GOLD", color: "bg-yellow-500" },
        { name: "Arklex.ai", description: "AI-powered legal platform", website: "https://arklex.ai", label: "LAW", color: "bg-gray-600" },
        { name: "Airavana", description: "Data privacy compliance powered by AI", website: "https://airavana.com", label: "PRIVACY", color: "bg-green-600" },
        { name: "Extell Ventures", description: "Investor in Applied AI / DeepTech", website: "https://extellventures.com", label: "VC", color: "bg-slate-600" },
      ]
    },
    {
      title: "Education",
      companies: [
        { name: "NYCDataScience.com", description: "Data science education platform", website: "https://nycdatascience.com", label: "DATA", color: "bg-blue-600" },
        { name: "GetInterns.ai", description: "AI-enabled internship access", website: "https://getinterns.ai", label: "INTERN", color: "bg-orange-500" },
      ]
    },
    {
      title: "Robotics",
      companies: [
        { name: "Warehouserobot.ai", description: "AI-driven warehouse robotics", website: "https://warehouserobot.ai", label: "ROBOT", color: "bg-gray-700" },
      ]
    },
    {
      title: "Healthcare",
      companies: [
        { name: "GoDental.ai", description: "Dental AI assistant", website: "https://godental.ai", label: "DENTAL", color: "bg-teal-500" },
        { name: "theDapway.com", description: "Wellness & healthcare platform", website: "https://thedapway.com", label: "WELLNESS", color: "bg-green-500" },
        { name: "StillSoul.co", description: "Mental wellness & therapy platform", website: "https://stillsoul.co", label: "MENTAL", color: "bg-purple-600" },
        { name: "Navidata.ca", description: "Medical data analytics", website: "https://navidata.ca", label: "MEDDATA", color: "bg-blue-700" },
        { name: "patientreplica.us", description: "Synthetic healthcare data generator", website: "https://patientreplica.us", label: "SYNTH", color: "bg-cyan-600" },
      ]
    },
    {
      title: "FinTech / Data Platforms",
      companies: [
        { name: "NoMad Data", description: "Data platform for finance", website: "https://nomaddata.com", label: "FINDATA", color: "bg-emerald-600" },
        { name: "Levels.FYI", description: "Compensation transparency & benchmarking", website: "https://levels.fyi", label: "COMP", color: "bg-indigo-600" },
      ]
    },
    {
      title: "Insurance",
      companies: [
        { name: "JKids", description: "Digital insurance platform for families", website: "https://jkids.com", label: "INSURE", color: "bg-blue-800" },
      ]
    },
    {
      title: "Media & Communication",
      companies: [
        { name: "Rizzle", description: "Short-form video storytelling platform", website: "https://rizzle.com", label: "VIDEO", color: "bg-red-500" },
        { name: "prworks.ai", description: "AI-driven PR and communication solutions", website: "https://prworks.ai", label: "PR", color: "bg-pink-500" },
      ]
    },
    {
      title: "Consumer / Lifestyle",
      companies: [
        { name: "DrinkLMNT.com", description: "Electrolyte drink for athletes", website: "https://drinklmnt.com", label: "LMNT", color: "bg-orange-600" },
        { name: "drinkJuJu.com", description: "Functional beverage brand", website: "https://drinkjuju.com", label: "JUJU", color: "bg-purple-500" },
        { name: "PacPacSnacks.com", description: "Snack brand", website: "https://pacpacsnacks.com", label: "SNACK", color: "bg-amber-500" },
        { name: "GlobeTasteTrading.com", description: "International food distributor", website: "https://globetastetrading.com", label: "TRADE", color: "bg-emerald-500" },
        { name: "Fit!", description: "Platform for athlete influencer monetization", website: "https://fit.com", label: "FIT", color: "bg-red-600" },
        { name: "Katalyst.Fit", description: "Full‑body EMS fitness technology", website: "https://katalyst.fit", label: "EMS", color: "bg-slate-700" },
      ]
    },
    {
      title: "Fashion",
      companies: [
        { name: "Todaysfashion.ai", description: "Personalized fashion recommendation", website: "https://todaysfashion.ai", label: "STYLE", color: "bg-rose-500" },
      ]
    },
    {
      title: "Dating",
      companies: [
        { name: "Attached Mobile App", description: "Relationship-focused dating app", website: "https://attachedapp.com", label: "LOVE", color: "bg-pink-600" },
      ]
    },
    {
      title: "Non-Profit",
      companies: [
        { name: "Bonjourgirls.com", description: "Non‑profit fashion empowerment platform", website: "https://bonjourgirls.com", label: "EMPOWER", color: "bg-violet-600" },
      ]
    },
  ];

  const filterCategories = [
    'All AI', 
    'Healthcare', 
    'Consumer', 
    'FinTech', 
    'Education', 
    'Robotics', 
    'Fashion', 
    'Dating', 
    'Non-Profit'
  ];

  const getCategoryMapping = (category: string) => {
    const mapping: { [key: string]: string } = {
      'Healthcare': 'Healthcare',
      'Consumer': 'Consumer / Lifestyle',
      'FinTech': 'FinTech / Data Platforms',
      'Education': 'Education',
      'Robotics': 'Robotics',
      'Fashion': 'Fashion',
      'Dating': 'Dating',
      'Non-Profit': 'Non-Profit'
    };
    return mapping[category] || category;
  };

  const filteredCategories = selectedCategory === 'All AI' 
    ? portfolioCategories 
    : portfolioCategories.filter(cat => cat.title === getCategoryMapping(selectedCategory));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              {category.title}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {category.companies.map((company, companyIndex) => (
                <a
                  key={companyIndex}
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100 hover:border-blue-200 group"
                >
                  <div className={`w-20 h-12 ${company.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-xs tracking-wider">
                      {company.label}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-blue-600 transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {company.description}
                  </p>
                  <div className="mt-4 flex items-center justify-center">
                    <i className="ri-external-link-line w-4 h-4 flex items-center justify-center text-gray-400 group-hover:text-blue-500 transition-colors"></i>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
        
        <div className="mt-20 text-center bg-gray-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in Our Portfolio?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn more about our investment approach and how we support transformative technologies across AI, healthcare, and deeptech sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              Contact Our Team
            </a>
            <a
              href="/about"
              className="bg-white text-blue-600 border border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Meet the Partners
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
