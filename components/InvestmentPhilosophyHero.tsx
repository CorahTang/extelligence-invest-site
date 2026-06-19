'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function InvestmentPhilosophyHero() {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleContactClick = () => {
    router.push('/contact')
  }

  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-700 to-primary-900 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Investment Philosophy
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
              Empower the next generation of AI ventures by connecting top-tier global talent with strategic capital from emerging markets.
            </p>
          </div>
          
          <div className={`transition-all duration-1000 ease-out delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button 
              onClick={handleContactClick}
              className="btn-primary bg-white text-primary-900 hover:bg-gray-100 mt-8 cursor-pointer transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}