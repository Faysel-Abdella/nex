import BottomCTA from "@/app/_components/bottom-cta";
import FeatureShowcase from "@/app/_components/feature-showcase";
import HeroSection from "@/app/_components/hero-section";
import MigrationCTA from "@/app/_components/migration-cta";
import PricingCTA from "@/app/_components/pricing-cta";
import RegionalFitSection from "@/app/_components/regional-fit-section";
import YourCRM from "@/app/_components/your-crm";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden space-y-16 lg:space-y-30">
      <HeroSection />
      <YourCRM />
      <RegionalFitSection />
      <FeatureShowcase />
      <MigrationCTA />
      <PricingCTA />
      <BottomCTA />
    </main>
  );
}
