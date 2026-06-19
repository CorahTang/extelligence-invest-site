
'use client';

import Link from 'next/link';

export default function GPIntroduction() {
  const partners = [
    {
      name: 'Yann LeCun',
      role: 'Non-Managing General Partner. Turing Award Laureate. Pioneer of Deep Learning.',
      description: 'Professor of Computer Science at New York University (NYU) and Vice President & Chief AI Scientist at Meta. Dr. LeCun was awarded the Turing Award in 2018 for his foundational breakthroughs in deep learning. As the Founding Father of Convolutional Neural Networks (CNNs), his pioneering work has fundamentally reshaped computer vision, robotics, and natural language processing. He is currently leading the exploration of Autonomous Intelligence and World Models, bridging world-class academic research with global, industrial-scale technology innovation.',
      image: '/yann-lecun.jpeg'
    },
    {
      name: 'Tony F. Chan',
      role: 'Non-Managing General Partner. Mathematician. University Leader. Global Innovation Strategist.',
      description: 'Former President of KAUST and HKUST with Ph.D. from Stanford. Leading global academic and innovation partnerships in science, education, and deep tech across Asia and beyond.',
      image: 'https://static.readdy.ai/image/8b42f51d86df85f19e4c8e1d8749312d/641bb57b85f5ed9a9dc05658f5ad27fa.jfif'
    },
    {
      name: 'Vivian Zhang',
      role: 'Investor. AI Strategist. VC & Growth Advisor.',
      description: 'Over 20 years in frontier AI with graduate degrees in CS, Applied Math, and Statistics. Columbia University instructor and advisor bridging innovation between China and the U.S.',
      image: 'https://static.readdy.ai/image/8b42f51d86df85f19e4c8e1d8749312d/1e5a9322945da0e36586355de991fe5b.jfif'
    },
    {
      name: 'Amy Hu',
      role: 'Venture Partner. Investment Operations & Financial Valuation Professional.',
      description: 'Over 20 years across private equity, asset management, and endowment institutions, with expertise in investment operations, valuation, and financial modeling.',
      image: '/amy-hu.jpeg'
    },
    {
      name: 'Corah Tang',
      role: 'Analyst.',
      description: 'Corah supports Extelligence Invest with research, market analysis, and team operations, helping organize diligence materials and track emerging venture opportunities.',
      image: '/corah-tang.jpg'
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Meet Our Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experienced leaders bringing diverse expertise and global perspectives
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src={partner.image} 
                  alt={partner.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-blue-600 font-medium mb-3 text-sm">
                {partner.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/about"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            Meet the Partners
            <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
