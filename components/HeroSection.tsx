
'use client';

import Link from 'next/link';

export default function HeroSection() {
  const heroImageUrl = "https://readdy.ai/api/search-image?query=Modern%20professional%20business%20environment%20with%20global%20connectivity%20theme%2C%20featuring%20sophisticated%20technology%20elements%2C%20clean%20minimalist%20office%20space%20with%20world%20map%20visualization%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20lighting%2C%20investment%20and%20finance%20atmosphere%2C%20high-tech%20displays%20showing%20data%20analytics%2C%20contemporary%20architecture%2C%20glass%20and%20steel%20materials%2C%20representing%20cross-border%20investment%20and%20technological%20innovation&width=1920&height=600&seq=hero-investment&orientation=landscape";

  return (
    <section 
      className="relative h-[70vh] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${heroImageUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Backing the Builders of Tomorrow.
            <span className="block text-blue-200">
              Empowering the Investors of Today.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
            We are a cross-border early-stage investment firm focused on transformative technologies in AI, deeptech, and human infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link 
              href="/portfolio"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-center cursor-pointer"
            >
              Explore Our Portfolio
            </Link>
            <Link 
              href="/about"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3 rounded-lg text-base font-semibold hover:bg-white/20 transition-all duration-300 text-center cursor-pointer"
            >
              Meet the Partners
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent text-white border border-blue-300 px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 text-center cursor-pointer"
            >
              <span className="sm:hidden">Contact Us</span>
              <span className="hidden sm:inline">Interested in Investing? Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
