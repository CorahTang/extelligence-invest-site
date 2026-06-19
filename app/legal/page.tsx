
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LegalHero from './LegalHero';
import RegistrationStatus from './RegistrationStatus';
import ReportingExemption from './ReportingExemption';
import InvestmentPhilosophy from './InvestmentPhilosophy';
import ContactLegal from './ContactLegal';
import ImportantDisclosure from './ImportantDisclosure';

export default function LegalPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <LegalHero />
      <RegistrationStatus />
      <ReportingExemption />
      <InvestmentPhilosophy />
      <ContactLegal />
      <ImportantDisclosure />
      <Footer />
    </div>
  );
}
