import React from 'react'

interface InvestmentSectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

export default function InvestmentSection({ 
  title, 
  children, 
  className = '' 
}: InvestmentSectionProps) {
  return (
    <section className={`${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            {title}
          </h2>
        </div>
        <div className="animate-slide-up">
          {children}
        </div>
      </div>
    </section>
  )
} 