
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm relative z-50">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex min-w-0 flex-1 items-center">
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/investment-philosophy" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                Investment Philosophy
              </Link>
              <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                Portfolio
              </Link>
              <Link href="/lp" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                For LPs
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                About
              </Link>
              <Link href="/legal" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                Disclosures
              </Link>
              <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0">
            <button 
              onClick={toggleMenu}
              className="flex h-11 w-11 items-center justify-center rounded-md text-gray-600 hover:text-gray-900 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
            <div className="px-4 py-2 space-y-1">
              <Link 
                href="/" 
                className="block text-gray-900 hover:text-blue-600 hover:bg-gray-50 px-3 py-3 text-base font-medium transition-colors cursor-pointer rounded-md"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                href="/investment-philosophy" 
                className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-3 text-base font-medium transition-colors cursor-pointer rounded-md"
                onClick={closeMenu}
              >
                Investment Philosophy
              </Link>
              <Link 
                href="/portfolio" 
                className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-3 text-base font-medium transition-colors cursor-pointer rounded-md"
                onClick={closeMenu}
              >
                Portfolio
              </Link>
              <Link 
                href="/lp" 
                className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-3 text-base font-medium transition-colors cursor-pointer rounded-md"
                onClick={closeMenu}
              >
                For LPs
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-3 text-base font-medium transition-colors cursor-pointer rounded-md"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                href="/legal" 
                className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-3 text-base font-medium transition-colors cursor-pointer rounded-md"
                onClick={closeMenu}
              >
                Disclosures
              </Link>
              <Link 
                href="/contact" 
                className="block bg-blue-600 text-white px-4 py-3 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors cursor-pointer text-center mx-3 my-2"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
