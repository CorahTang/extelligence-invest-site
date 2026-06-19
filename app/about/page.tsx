
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutHero from '../../components/AboutHero';
import MissionStatement from '../../components/MissionStatement';
import DetailedPartners from '../../components/DetailedPartners';
import EthosSection from '../../components/EthosSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutHero />
      <MissionStatement />
      <DetailedPartners />
      <EthosSection />
      <Footer />
    </div>
  );
}
