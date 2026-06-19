'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function LPPage() {
    // State for collapsible sections in Competitive Edge
    const [expandedEdge, setExpandedEdge] = useState<number | null>(null);

    const toggleEdge = (index: number) => {
        setExpandedEdge(expandedEdge === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 lg:py-32">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Partner with the Future of AI
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                        Join leading institutional investors in backing the next generation of transformative AI ventures
                    </p>
                </div>
            </section>

            {/* Core Mission */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                        Our Core Mission
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Empower the next generation of AI ventures by connecting global talent with strategic capital from emerging markets,
                        creating a bridge between innovation and opportunity across continents.
                    </p>
                </div>
            </section>

            {/* Investment Thesis */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
                        Investment Thesis
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Global Strategic Triangle */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Strategic Triangle</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Talent</h4>
                                        <p className="text-gray-600">Access to elite AI talent in the U.S. and China via academic/institutional ties</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Capital</h4>
                                        <p className="text-gray-600">Connections with sovereign/family office investors in the Middle East and Southeast Asia</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Markets</h4>
                                        <p className="text-gray-600">Networks across U.S., Asia, and emerging hubs for strategic partnerships</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dual Investment Tracks */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Dual Investment Tracks</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Venture Creation</h4>
                                        <p className="text-gray-600">Launch AI startups with founders, providing capital, teams, and IPO/SPAC readiness</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">AI Transformation</h4>
                                        <p className="text-gray-600">Acquire and transform legacy businesses (logistics, healthcare, B2B) with proprietary AI</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Creation Capabilities */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
                        Value Creation Capabilities
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Early Access</h3>
                            <p className="text-gray-600 text-sm">Engage AI founders pre-incorporation, like Arklex.ai in agentic AI</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Founder Support</h3>
                            <p className="text-gray-600 text-sm">Operational support including GTM strategy and productization</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Global Insights</h3>
                            <p className="text-gray-600 text-sm">Track founders and research across U.S., Asia, and open-source ecosystems</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Capital Planning</h3>
                            <p className="text-gray-600 text-sm">Cross-border structuring and fundraising aligned with global capital</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Competitive Edge */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
                        Competitive Edge
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Elite Talent Network",
                                description: "Ties to world-class advisors including Turing Award and Fields Medal winners",
                                details: "Our advisory network includes Yao Qizhi (Turing Award winner), Shing-Tung Yau (Fields Medal recipient), and Terrence Tao, providing unparalleled access to cutting-edge AI research and talent."
                            },
                            {
                                title: "Proven Track Record",
                                description: "30+ ventures built and exited across U.S., Asia, and MENA regions",
                                details: "Our team has successfully built and exited over 30 ventures across multiple continents, with deep operational expertise in scaling AI companies from inception to IPO readiness."
                            },
                            {
                                title: "Strategic Leadership",
                                description: "Advisors include former BlackRock executives and SPAC/PE operators",
                                details: "Our leadership team includes former BlackRock executives, SPAC operators, and PE professionals with direct access to IPO, SPAC, and acquisition opportunities for accelerated exits."
                            }
                        ].map((edge, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{edge.title}</h3>
                                <p className="text-gray-600 mb-6">{edge.description}</p>

                                <button
                                    onClick={() => toggleEdge(index)}
                                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center transition-colors"
                                    aria-expanded={expandedEdge === index}
                                    aria-controls={`edge-details-${index}`}
                                >
                                    Learn More
                                    <svg
                                        className={`ml-2 w-4 h-4 transition-transform ${expandedEdge === index ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {expandedEdge === index && (
                                    <div
                                        id={`edge-details-${index}`}
                                        className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-700 leading-relaxed"
                                    >
                                        {edge.details}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investment Style */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
                        Investment Style
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Focused</h3>
                            <p className="text-gray-600 text-sm">Targeted bets with high value-add and strategic alignment</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">End-to-End</h3>
                            <p className="text-gray-600 text-sm">Comprehensive support: capital, technology, and GTM strategy</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Accelerated Exits</h3>
                            <p className="text-gray-600 text-sm">Optimized for 2-4 year exit cycles with clear pathways</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Control-Focused</h3>
                            <p className="text-gray-600 text-sm">Majority stakes in AI PE deals for maximum impact</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Partner with Us?
                    </h2>
                    <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                        Join our network of institutional investors and help shape the future of AI innovation
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="/contact"
                            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                        >
                            Contact Us
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>

                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSf99QlEnYl06raKsobg7njPg3t2yemm64Buumjcqe46Qs-MQA/viewform?usp=header"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
                        >
                            Startup Intake Form
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}