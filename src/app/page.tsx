import Navbar from "@/components/Navbar";
import ContactSection from "@/components/sections/ContactSection";
import Hero from "@/components/sections/Hero";
export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ContactSection />
    </div>
  );
}
