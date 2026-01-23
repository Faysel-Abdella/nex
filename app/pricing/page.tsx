import React from "react";
import PricingHero from "./_components/pricing-hero";
import Pricing from "./_components/pricing";
import PricingFaq from "./_components/pricing-faq";
import PricingCTA from "./_components/pricing-cta";

const PricingPage = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden space-y-30">
      <PricingHero />
      <Pricing />
      <PricingFaq />

      <PricingCTA />
    </main>
  );
};

export default PricingPage;
