import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InvestmentPhilosophyHero from '@/components/InvestmentPhilosophyHero'
import InvestmentSection from '@/components/InvestmentSection'

export const metadata: Metadata = {
  title: 'Investment Philosophy',
  description: 'Empower the next generation of AI ventures by connecting top-tier global talent with strategic capital from emerging markets.',
}

export default function InvestmentPhilosophyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <InvestmentPhilosophyHero />
        
        <main className="max-w-7xl mx-auto">
          {/* Core Mission */}
          <InvestmentSection
            title="Core Mission"
            className="section-padding"
          >
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
                <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                  Empower the next generation of AI ventures by connecting top-tier global talent with strategic capital from emerging markets.
                </p>
              </div>
            </div>
          </InvestmentSection>

          {/* Investment Thesis */}
          <InvestmentSection
            title="Investment Thesis"
            className="section-padding bg-white/50"
          >
            <div className="space-y-12">
              {/* Global Strategic Triangle */}
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2L3 7v6l7 5 7-5V7l-7-5z"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">1. Global Strategic Triangle</h3>
                </div>
                <p className="text-xl text-center text-gray-700 mb-8 font-medium">Talent – Capital – Opportunity</p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-blue-800 mb-3">Talent</h4>
                    <p className="text-gray-700 leading-relaxed">The U.S. and China continue to be among the most active hubs for frontier AI talent. We maintain privileged access to both ecosystems through deep academic and institutional relationships.</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-6 shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-purple-800 mb-3">Capital</h4>
                    <p className="text-gray-700 leading-relaxed">Emerging markets, including but not limited to the Middle East and Southeast Asia, are increasingly eager to deploy capital into frontier technologies. We are well-connected with these regions' sovereign and family office investors.</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-6 shadow-lg border border-amber-200 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-amber-800 mb-3">Markets</h4>
                    <p className="text-gray-700 leading-relaxed">While the U.S. remains a dominant tech ecosystem, Asia and other emerging innovation markets are rapidly opening up. Our team has deep networks across both, enabling strategic deployment and local partnerships.</p>
                  </div>
                </div>
                
                <div className="text-center mt-12 space-y-4">
                  <div className="bg-gradient-to-r from-slate-100 to-gray-100 p-6 rounded-xl border border-gray-200">
                    <p className="text-lg text-gray-800 font-semibold">We are uniquely positioned at the intersection of global capital, deep talent networks, and cross-border market access.</p>
                    <p className="text-lg text-gray-800 font-semibold mt-2">We serve as the bridge between capital, talent, and opportunity.</p>
                  </div>
                </div>
              </div>

              {/* Dual Investment Tracks */}
              <div className="space-y-8">
                <div className="flex items-center justify-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">2. Dual Investment Tracks</h3>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-lg border border-green-200">
                    <h4 className="text-2xl font-bold text-green-800 mb-4">Venture Creation</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">We actively participate in founding and building companies from the ground up, leveraging our global networks to assemble world-class teams and secure strategic partnerships.</p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Co-founding with exceptional entrepreneurs</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Building cross-border teams</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Strategic market entry planning</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg border border-blue-200">
                    <h4 className="text-2xl font-bold text-blue-800 mb-4">AI Transformation</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">We invest in and support existing companies undergoing AI transformation, providing both capital and strategic guidance for technology adoption and market expansion.</p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>AI technology integration</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Market expansion strategies</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Operational optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </InvestmentSection>

          {/* Value Creation Capabilities */}
          <InvestmentSection
            title="End-to-End Value Creation Capabilities"
            className="section-padding"
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Capability</th>
                    <th className="px-6 py-4 text-left font-semibold">Description</th>
                    <th className="px-6 py-4 text-left font-semibold">Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">Talent Sourcing</td>
                    <td className="px-6 py-4 text-gray-700">Global network access to top AI researchers and engineers</td>
                    <td className="px-6 py-4 text-gray-700">Accelerated team building and technical execution</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">Capital Access</td>
                    <td className="px-6 py-4 text-gray-700">Strategic relationships with emerging market investors</td>
                    <td className="px-6 py-4 text-gray-700">Enhanced funding opportunities and valuation</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">Market Entry</td>
                    <td className="px-6 py-4 text-gray-700">Cross-border market knowledge and local partnerships</td>
                    <td className="px-6 py-4 text-gray-700">Faster international expansion and market penetration</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">Strategic Partnerships</td>
                    <td className="px-6 py-4 text-gray-700">Industry connections and ecosystem relationships</td>
                    <td className="px-6 py-4 text-gray-700">Enhanced business development and customer acquisition</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </InvestmentSection>

          {/* Competitive Edge */}
          <InvestmentSection
            title="Competitive Edge"
            className="section-padding bg-white/50"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900">Global Network</h4>
                <p className="text-gray-700">Deep connections across U.S., China, and emerging markets</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900">Strategic Capital</h4>
                <p className="text-gray-700">Access to emerging market sovereign and family office capital</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900">Market Access</h4>
                <p className="text-gray-700">Cross-border market knowledge and local partnerships</p>
              </div>
            </div>
          </InvestmentSection>

          {/* Investment Style */}
          <InvestmentSection
            title="Investment Style"
            className="section-padding"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Active Partnership</h4>
                <p className="text-gray-700 leading-relaxed">We take an active role in our portfolio companies, providing strategic guidance, operational support, and access to our global networks.</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Board participation and strategic guidance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Operational support and best practices</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Network introductions and partnerships</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Long-term Vision</h4>
                <p className="text-gray-700 leading-relaxed">We focus on building sustainable, long-term value rather than short-term gains, supporting companies through multiple funding rounds and market cycles.</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Patient capital with extended time horizons</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Support through multiple funding rounds</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Strategic planning for market cycles</span>
                  </li>
                </ul>
              </div>
            </div>
          </InvestmentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  )
}