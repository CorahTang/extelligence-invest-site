
'use client';

export default function PortfolioHero() {
  const heroImageUrl = "https://readdy.ai/api/search-image?query=Modern%20technology%20innovation%20landscape%20with%20AI%20and%20deeptech%20elements%2C%20featuring%20futuristic%20startup%20office%20environment%2C%20clean%20professional%20workspace%20with%20holographic%20displays%2C%20blue%20and%20purple%20gradient%20color%20scheme%2C%20high-tech%20visualization%20of%20data%20networks%2C%20contemporary%20glass%20architecture%2C%20representing%20investment%20portfolio%20and%20technological%20advancement%2C%20minimalist%20design%20with%20sophisticated%20lighting&width=1920&height=600&seq=portfolio-hero&orientation=landscape";

  return (
    <section 
      className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${heroImageUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-600/70"></div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Our portfolio spans high-impact startups defining the future of AI, healthcare, and deeptech.
          </p>
        </div>
      </div>
    </section>
  );
}
