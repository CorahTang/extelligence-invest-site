
'use client';

export default function AboutHero() {
  const heroImageUrl = "https://readdy.ai/api/search-image?query=Professional%20investment%20team%20meeting%20in%20modern%20conference%20room%2C%20global%20business%20atmosphere%20with%20world%20map%20displays%2C%20diverse%20professionals%20collaborating%2C%20sophisticated%20office%20environment%2C%20blue%20and%20white%20color%20scheme%2C%20natural%20lighting%20through%20large%20windows%2C%20financial%20charts%20and%20analytics%20on%20screens%2C%20representing%20cross-border%20investment%20expertise%20and%20long-term%20value%20creation&width=1920&height=500&seq=about-hero&orientation=landscape";

  return (
    <section 
      className="relative h-[60vh] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${heroImageUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-blue-700/70"></div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Backed by Experience.
            <span className="block text-blue-200">
              Built for Long-Term Value.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-6 max-w-3xl">
            <strong>Extelligence Invest</strong> is a cross-border early-stage investment firm with a mission to generate long-term alpha through disciplined, thesis-driven investing in transformative technologies.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-3xl">
            <h3 className="text-xl font-semibold text-white mb-4">Our team combines decades of global experience across:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-blue-100 text-sm">
              <div className="flex items-center space-x-3">
                <i className="ri-funds-line w-4 h-4 flex items-center justify-center"></i>
                <span>Private equity and venture capital</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-shield-check-line w-4 h-4 flex items-center justify-center"></i>
                <span>Capital markets and regulatory compliance</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-rocket-line w-4 h-4 flex items-center justify-center"></i>
                <span>Technology operations and cross-border expansion</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-global-line w-4 h-4 flex items-center justify-center"></i>
                <span>Deep networks in the U.S., Greater China, and Asia-Pacific</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
