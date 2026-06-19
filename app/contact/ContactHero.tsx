
'use client';

export default function ContactHero() {
  return (
    <section 
      className="relative py-24 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20professional%20office%20space%20with%20large%20windows%20and%20natural%20light%20streaming%20in%2C%20contemporary%20business%20meeting%20room%20with%20glass%20walls%20and%20minimalist%20design%2C%20clean%20white%20and%20blue%20color%20scheme%2C%20professional%20atmosphere%20for%20business%20conversations%20and%20partnerships&width=1200&height=600&seq=contact-hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Let's Talk
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          For LPs, Founders, and Strategic Partners
        </p>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          We welcome inquiries from institutional investors, founders, co-investors, and press.
        </p>
      </div>
    </section>
  );
}
