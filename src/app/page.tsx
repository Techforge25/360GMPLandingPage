import OpportunitiesSection from "@/components/OpportunitiesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PartnershipSection from "@/components/PartnershipSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import BusinessSection from "@/components/BusinessSection";
import BenefitsSection from "@/components/BenefitsSection";
import FaqsSection from "@/components/FaqsSection";
import GlobalPositioningSection from "@/components/GlobalPositioningSection";
import PlatformOverviewSection from "@/components/PlatformOverviewSection";
import TrustSecuritySection from "@/components/TrustSecuritySection";
import MissionVisionSection from "@/components/MissionVisionSection";
import ValuesFrameworkSection from "@/components/ValuesFrameworkSection";
import CorporatePurposeSection from "@/components/CorporatePurposeSection";
import FinalCTASection from "@/components/FinalCTASection";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <GlobalPositioningSection />
      <PlatformOverviewSection />
      <TrustSecuritySection />
      <BusinessSection />
      <OpportunitiesSection />
      <HowItWorksSection />
      <MissionVisionSection />
      <ValuesFrameworkSection />
      <CorporatePurposeSection />
      <BenefitsSection />
      <PartnershipSection />
      <ContactSection />
      <FinalCTASection />
      <FaqsSection />
    </>
  );
};

export default HomePage;

