import React from "react";
import LegalPageContents from "../_components/legal-page-contents";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  const t = await getTranslations("metadata.legal.refunds");

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
const RefundsPage = () => {
  return <LegalPageContents title="refunds" />;
};

export default RefundsPage;
