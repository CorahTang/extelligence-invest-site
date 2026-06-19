
'use client';

import Link from 'next/link';

export default function RegulatorySection() {
  return (
    <section className="py-12 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Registered as an Exempt Reporting Adviser (ERA)
          </h2>
          <h3 className="text-lg text-blue-200 mb-4">
            with the U.S. SEC
          </h3>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto mb-6">
            <p className="text-blue-200 leading-relaxed text-sm">
              Our SEC registration demonstrates our commitment to regulatory compliance, 
              transparency, and professional standards in investment management.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="https://adviserinfo.sec.gov/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              SEC IAPD Profile
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <Link 
              href="/legal"
              className="inline-flex items-center bg-transparent border border-white text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              View Our Disclosures
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
