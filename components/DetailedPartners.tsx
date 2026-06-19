
'use client';

export default function DetailedPartners() {
  const partners = [
    {
      name: 'Yann LeCun',
      title: 'Non-Managing General Partner. Turing Award Laureate. Pioneer of Deep Learning.',
      description: 'Professor of Computer Science at New York University (NYU) and Vice President & Chief AI Scientist at Meta. Dr. LeCun was awarded the Turing Award in 2018 for his foundational breakthroughs in deep learning. As the Founding Father of Convolutional Neural Networks (CNNs), his pioneering work has fundamentally reshaped computer vision, robotics, and natural language processing. He is currently leading the exploration of Autonomous Intelligence and World Models, bridging world-class academic research with global, industrial-scale technology innovation.',
      wikipedia: 'https://en.wikipedia.org/wiki/Yann_LeCun',
      image: '/yann-lecun.jpeg'
    },
    {
      name: 'Tony F. Chan',
      title: 'Non-Managing General Partner. Mathematician. University Leader. Global Innovation Strategist.',
      description: 'Former President of King Abdullah University of Science and Technology (KAUST) and of HKUST, Tony brings global academic and innovation leadership. He holds a Ph.D. in Computer Science from Stanford University, has spearheaded cross-border research partnerships, and continues to shape the future of science, education, and deep tech in Asia and beyond.',
      wikipedia: 'https://en.m.wikipedia.org/wiki/Tony_F._Chan',
      image: 'https://static.readdy.ai/image/8b42f51d86df85f19e4c8e1d8749312d/641bb57b85f5ed9a9dc05658f5ad27fa.jfif'
    },
    {
      name: 'Vivian Zhang',
      title: 'Investor. AI Strategist. VC & Growth Advisor.',
      description: 'Vivian is a seasoned investor and growth strategist with over 20 years of hands-on technology experience, particularly in frontier AI. She holds graduate degrees in Computer Science, Applied Mathematics, and Statistics. Vivian brings experience from multiple leading funds and has served as an advisor to startups at the intersection of deep tech and global expansion. In addition to her investment work, she teaches at the Data Science Institute at Columbia University and regularly gives workshops at Tsinghua University, National Taiwan University, and other leading institutions. She is passionate about empowering founders and bridging innovation between China and the U.S.',
      linkedin: 'https://www.linkedin.com/in/vivianszhang/',
      image: 'https://static.readdy.ai/image/8b42f51d86df85f19e4c8e1d8749312d/1e5a9322945da0e36586355de991fe5b.jfif'
    },
    {
      name: 'Amy Hu',
      title: 'Venture Partner. Investment Operations & Financial Valuation Professional.',
      description: 'Amy Hu is an investment operations and financial valuation professional with over 20 years of experience across private equity, asset management, and endowment institutions. She currently serves as a Senior Operations Associate at Columbia Investment Management Company, specializing in asset valuation and financial modeling.\n\nPreviously, Amy held roles at Stanford Management Company, Hellman & Friedman, Credit Suisse, and Deloitte, building deep expertise in fund administration, middle-office operations, corporate finance, and accounting. She holds an MBA from Columbia Business School, a BBA in Accounting from Baruch College, and is a licensed Certified Public Accountant (CPA).',
      linkedin: 'https://www.linkedin.com/in/amyhu26/',
      image: '/amy-hu.jpeg'
    },
    {
      name: 'Corah Tang',
      title: 'Analyst.',
      description: 'Corah Tang is an Analyst at Extelligence Invest, where she supports the team across investment research, market analysis, and day-to-day operations. She helps organize diligence materials, track emerging venture opportunities, and coordinate information across founders, partners, and internal workflows. Her work contributes to the firm\'s ability to evaluate new ideas, understand market dynamics, and support cross-border venture initiatives with clear research and careful execution.',
      linkedin: 'https://www.linkedin.com/in/corah-tang',
      image: '/corah-tang.jpg'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leaders with proven track records and deep expertise across global markets
          </p>
        </div>

        <div className="space-y-12">
          {partners.map((partner, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-shrink-0">
                <div className="w-64 h-72 rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="flex-1 lg:max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {partner.name}
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-4 italic whitespace-pre-line">
                  {partner.title}
                </p>

                {(partner as any).location && (
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{(partner as any).location}</span>
                    {(partner as any).email && (
                      <>
                        <span>|</span>
                        <a href={`mailto:${(partner as any).email}`} className="text-blue-600 hover:text-blue-800 cursor-pointer">
                          {(partner as any).email}
                        </a>
                      </>
                    )}
                  </div>
                )}

                <p className="text-base text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                  {partner.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {partner.wikipedia && (
                    <a 
                      href={partner.wikipedia}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap text-sm"
                    >
                      <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.386.059 2.053.131.673.077 1.33.187 1.984.31C21.307 6.025 22 7.548 22 9.286c0 1.427-.49 2.746-1.67 3.853-.58.56-1.362.988-2.084 1.284-.723.295-1.453.442-2.012.442-.688 0-1.386-.059-2.053-.131-.673-.077-1.33-.187-1.984-.31C16.307 13.975 16 12.452 16 10.714c0-1.427.49-2.746 1.67-3.853.58-.56 1.362-.988 2.084-1.284.723-.295 1.453-.442 2.012-.442zm-5.01 0c-.688 0-1.386.059-2.053.131-.673.077-1.33.187-1.984.31C6.307 6.025 6 7.548 6 9.286c0 1.427.49 2.746 1.67 3.853.58.56 1.362.988 2.084 1.284.723.295 1.453.442 2.012.442.688 0 1.386-.059 2.053-.131.673-.077 1.33-.187 1.984-.31C17.693 13.975 18 12.452 18 10.714c0-1.427-.49-2.746-1.67-3.853-.58-.56-1.362-.988-2.084-1.284-.723-.295-1.453-.442-2.012-.442z"/>
                      </svg>
                      Wikipedia Profile
                    </a>
                  )}
                  {partner.linkedin && (
                    <a 
                      href={partner.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors cursor-pointer whitespace-nowrap text-sm"
                    >
                      <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
