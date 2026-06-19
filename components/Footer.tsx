
'use client';

import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Logo showText={true} className="text-white" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A cross-border early-stage investment firm focused on transformative technologies in AI, deeptech, and human infrastructure.
            </p>
            <div className="mt-6">
              <a 
                href="https://www.linkedin.com/company/extelligence-invest" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <i className="ri-linkedin-fill w-6 h-6 flex items-center justify-center"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/investment-philosophy" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Investment Philosophy
                </Link>
              </li>
              <li>
                <Link href="/lp" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  For LPs
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  About
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Disclosures
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/legal" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Legal & Terms
                </Link>
              </li>
              <li>
                <a 
                  href="https://adviserinfo.sec.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  SEC IAPD Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Extelligence Invest. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              SEC Registered Exempt Reporting Adviser (ERA)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
