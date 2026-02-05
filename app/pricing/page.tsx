import React from "react";
import PricingHero from "./_components/pricing-hero";
import Pricing from "./_components/pricing";
import PricingFaq from "./_components/pricing-faq";
import PricingCTA from "./_components/pricing-cta";
import BillingAndTrials from "./_components/billing-and-trials";
import OnTheRoadmap from "./_components/on-roadmap";
import PlanComparison from "./_components/plan-comparison";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  const t = await getTranslations("metadata.pricing");

  const title = t("title");
  const description = t("description");

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      locale: locale === "ar" ? "ar_AE" : "en_US",
      type: "website",
    },

    twitter: {
      title,
      description,
    },
  };
}

const PricingPage = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden space-y-28 lg:space-y-30 pt-34 md:pt-45">
      <PricingHero />
      <Pricing />
      <PlanComparison />
      <OnTheRoadmap />
      <BillingAndTrials />
      <PricingFaq />
      <PricingCTA />
    </main>
  );
};

export default PricingPage;
