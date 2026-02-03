import { Metadata } from "next";
import AboutUsCTA from "./_components/about-us-cta";
import AboutUsHero from "./_components/about-us-hero";
import Founder from "./_components/founder";
import OperatingPrinciples from "./_components/operating-principles";
import Principles from "./_components/principles";
import RegionalFit from "./_components/regional-fit";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  const t = await getTranslations("metadata.migration");

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

const AboutUsPage = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden space-y-24 lg:space-y-30 pt-34 md:pt-45">
      <AboutUsHero />
      <Principles />
      <RegionalFit />
      <Founder />
      <OperatingPrinciples />
      <AboutUsCTA />
    </main>
  );
};

export default AboutUsPage;
