
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PortfolioHero from './PortfolioHero';
import PortfolioGrid from './PortfolioGrid';

export default function PortfolioPage() {
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  return (
    <div className="min-h-screen">
      <Header />
      <PortfolioHero />
      <PortfolioGrid />
      <Footer />
    </div>
  );
}
