import OpportunitiesSection from "@/components/OpportunitiesSection";
import HiringSection from "@/components/HiringSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PartnershipSection from "@/components/PartnershipSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import BusinessSection from "@/components/BusinessSection";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <BusinessSection />
      <OpportunitiesSection />
      <HiringSection />
      <HowItWorksSection />
      <PartnershipSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
