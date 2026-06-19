
'use client';

export default function RegistrationStatus() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Registration Status
          </h2>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            <strong className="text-blue-600">Extelligence Invest</strong> is a private investment firm and operates as an <strong>Exempt Reporting Adviser (ERA)</strong> under the Investment Advisers Act of 1940.
          </p>
          
          <div className="bg-white rounded-lg p-6 mb-6">
            <p className="text-gray-600">
              You can view our public adviser profile on the SEC's Investment Adviser Public Disclosure (IAPD) system.
            </p>
          </div>

          <div className="text-center">
            <a 
              href="https://adviserinfo.sec.gov/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              👉 View Our Profile on SEC IAPD
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
