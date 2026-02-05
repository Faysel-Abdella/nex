import { Metadata } from "next";
import Comparison from "./_components/comparison";
import LiveProgress from "./_components/live-progress";
import MigrationCTA from "./_components/migration-cta";
import MigrationFaq from "./_components/migration-faq";
import MigrationHero from "./_components/migration-hero";
import MigrationPlan from "./_components/migration-plan";
import MigrationSafety from "./_components/migration-safety";
import Requirments from "./_components/requirments";
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
const MigrationPage = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden space-y-28 lg:space-y-30 pt-34 md:pt-45 ">
      <MigrationHero />
      <Comparison />
      <LiveProgress />
      <Requirments />
      <MigrationPlan />
      <MigrationSafety />
      <MigrationFaq />
      <MigrationCTA />
    </main>
  );
};

export default MigrationPage;
