import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default Index;
