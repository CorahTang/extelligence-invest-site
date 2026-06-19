
'use client';

export default function LegalHero() {
  return (
    <section 
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20legal%20documents%20and%20regulatory%20compliance%20materials%20arranged%20on%20a%20modern%20desk%20with%20scales%20of%20justice%20symbol%2C%20clean%20minimal%20background%20with%20blue%20and%20white%20corporate%20colors%2C%20professional%20lighting%2C%20high-end%20business%20photography%20style&width=1200&height=600&seq=legal-hero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Legal & Disclosures
        </h1>
        
        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Regulatory compliance, transparency, and professional standards in investment management
        </p>
      </div>
    </section>
  );
}
