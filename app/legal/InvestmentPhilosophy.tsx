
'use client';

export default function InvestmentPhilosophy() {
  const focusAreas = [
    {
      title: "Artificial Intelligence & Data Infrastructure",
      icon: "robot",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Healthcare Technologies & Human Longevity",
      icon: "heart",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Cross-border Consumer Platforms",
      icon: "globe",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Frontier DeepTech (robotics, new mobility, compute)",
      icon: "rocket",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "robot":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case "heart":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      case "globe":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "rocket":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Investment Philosophy
          </h2>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
            We are a thesis-led venture capital firm investing in early-stage companies across:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className={`w-10 h-10 ${area.color} rounded-lg flex items-center justify-center mr-4`}>
                    {renderIcon(area.icon)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{area.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
            <p className="text-gray-700 leading-relaxed">
              We focus on companies led by technical founders, building defensible IP, and positioned to scale globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
