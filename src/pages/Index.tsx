import HeroSection from "@/components/HeroSection";
import AudienceSection from "@/components/AudienceSection";
import ServicesSection from "@/components/ServicesSection";
import CasesPreview from "@/components/CasesPreview";
import KPISection from "@/components/KPISection";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import SiteLayout from "@/components/SiteLayout";

const Index = () => {
  return (
    <SiteLayout>
      <HeroSection />
      <div className="section-divider" />
      <AudienceSection />
      <div className="section-divider" />
      <ServicesSection />
      <div className="section-divider" />
      <CasesPreview />
      <div className="section-divider" />
      <KPISection />
      <div className="section-divider" />
      <ProcessSection />
      <div className="section-divider" />
      <WhyUsSection />
      <div className="section-divider" />
      <ContactSection />
      <div className="section-divider" />
      <FinalCTA />
    </SiteLayout>
  );
};

export default Index;
