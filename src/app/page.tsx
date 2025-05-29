import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/sections/AboutSection';
import BeefSection from '@/components/sections/BeefSection';
import ChickenSection from '@/components/sections/ChickenSection';
import CompanySection from '@/components/sections/CompanySection';
import ContactSection from '@/components/sections/ContactSection';
import Hero from '@/components/sections/Hero';
import PorkSection from '@/components/sections/PorkSection';

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <ChickenSection />
      <BeefSection />
      <PorkSection />
      <CompanySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
