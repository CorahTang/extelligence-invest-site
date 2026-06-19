
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ValuePropositions from '../components/ValuePropositions';
import WhyPartner from '../components/WhyPartner';
import PortfolioPreview from '../components/PortfolioPreview';
import GPIntroduction from '../components/GPIntroduction';
import RegulatorySection from '../components/RegulatorySection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ValuePropositions />
      <WhyPartner />
      <PortfolioPreview />
      <GPIntroduction />
      <RegulatorySection />
      <Footer />
    </div>
  );
}
