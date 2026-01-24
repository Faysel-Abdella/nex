import React from "react";
import PricingHero from "./_components/pricing-hero";
import Pricing from "./_components/pricing";
import PricingFaq from "./_components/pricing-faq";
import PricingCTA from "./_components/pricing-cta";
import BillingAndTrials from "./_components/billing-and-trials";

const PricingPage = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden space-y-30 pt-24 md:pt-32">
      <PricingHero />
      <Pricing />
      <BillingAndTrials />
      <PricingFaq />
      <PricingCTA />
    </main>
  );
};

export default PricingPage;
