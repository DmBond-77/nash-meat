import AboutSection from "@/components/sections/AboutSection";
import BeefSection from "@/components/sections/BeefSection";
import ChickenSection from "@/components/sections/ChickenSection";
import CompanySection from "@/components/sections/CompanySection";
import ContactSection from "@/components/sections/ContactSection";
import Hero from "@/components/sections/Hero";
import LambSection from "@/components/sections/LambSection";
import MinceSection from "@/components/sections/MinceSection";
import PorkSection from "@/components/sections/PorkSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function page() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ChickenSection />
      <BeefSection />
      <PorkSection />
      <LambSection />
      <MinceSection />
      <CompanySection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
