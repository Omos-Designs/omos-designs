import { Hero } from "@/components/Hero";
import { ServicesOverview } from "@/components/ServicesOverview";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesOverview />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}