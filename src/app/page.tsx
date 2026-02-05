import OpportunitiesSection from "@/components/OpportunitiesSection";
import HiringSection from "@/components/HiringSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PartnershipSection from "@/components/PartnershipSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import BusinessSection from "@/components/BusinessSection";
import RoleSwitchSection from "@/components/RoleSwitchSection";
import BenefitsSection from "@/components/BenefitsSection";
import FaqsSection from "@/components/FaqsSection";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <BusinessSection />
      <OpportunitiesSection />
      <HiringSection />
      <HowItWorksSection />
      <RoleSwitchSection />
      <BenefitsSection />
      <PartnershipSection />
      <ContactSection />
      <FaqsSection />
    </>
  );
};

export default HomePage;
