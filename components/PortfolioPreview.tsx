
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PortfolioPreview() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const portfolioCompanies = [
    { name: 'Grandscale.ai', category: 'AI Infrastructure', label: 'AI', color: 'bg-blue-500' },
    { name: 'LMNT', category: 'Health Tech', label: 'LMNT', color: 'bg-orange-600' },
    { name: 'Arklex.ai', category: 'AI Platform', label: 'LAW', color: 'bg-gray-600' },
    { name: 'NoMad Data', category: 'Data Analytics', label: 'FINDATA', color: 'bg-emerald-600' },
    { name: 'Fit!', category: 'Fitness Tech', label: 'FIT', color: 'bg-red-600' },
    { name: 'GoDental.ai', category: 'Healthcare AI', label: 'DENTAL', color: 'bg-teal-500' },
    { name: 'Rizzle', category: 'Social Platform', label: 'VIDEO', color: 'bg-red-500' },
    { name: 'Soil Connect', category: 'AgTech', label: 'AGRI', color: 'bg-green-600' },
    { name: 'Katalyst.Fit', category: 'Fitness Tech', label: 'EMS', color: 'bg-slate-700' },
    { name: 'Levels.fyi', category: 'Career Platform', label: 'COMP', color: 'bg-indigo-600' },
  ];

  if (!isClient) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Portfolio Preview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A selection of innovative companies we're proud to support
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {portfolioCompanies.map((company, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className={`w-16 h-10 ${company.color} rounded-md flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-white font-bold text-xs tracking-wider">
                    {company.label}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  {company.name}
                </h3>
                <p className="text-gray-500 text-xs">
                  {company.category}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link 
              href="/portfolio"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              View Full Portfolio
              <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Portfolio Preview
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A selection of innovative companies we're proud to support
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {portfolioCompanies.map((company, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <div className={`w-16 h-10 ${company.color} rounded-md flex items-center justify-center mx-auto mb-3`}>
                <span className="text-white font-bold text-xs tracking-wider">
                  {company.label}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                {company.name}
              </h3>
              <p className="text-gray-500 text-xs">
                {company.category}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/portfolio"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            View Full Portfolio
            <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
