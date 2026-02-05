import { Metadata } from "next";
import ContactUsCTA from "./_components/contact-us-cta";
import Hero from "./_components/hero";
import NextSteps from "./_components/next-steps";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  const t = await getTranslations("metadata.contact");

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
const ContactUsPage = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden space-y-28 lg:space-y-30 pt-34 md:pt-45">
      <Hero />
      <NextSteps />
      <ContactUsCTA />
    </main>
  );
};

export default ContactUsPage;
