import React from "react";
import { Button } from "../../components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

const PricingCTA = () => {
  const t = useTranslations("landing.pricing");

  return (
    <section className="w-full font-sf-pro section-container">
      <div className="relative min-h-100 md:min-h-90 w-full max-w-175  flex items-center justify-center  mx-auto overflow-hidden">
        <div className="absolute w-full h-full bg-card border  rounded-3xl top-20 "></div>
        <div className="absolute w-[90%] h-full bg-card border rounded-3xl max-w-157.5 mx-auto top-10 "></div>
        <div className="w-full h-96 md:h-86 bg-linear-to-b bottom-0  absolute from-transparent  to-background"></div>

        <div className="z-10 w-[80%] max-md:text-center h-fit bg-card border rounded-3xl  mx-auto flex flex-col p-6 items-center  ">
          <img
            src="/icons/pricing.png"
            alt="Pricing icon"
            className="w-16 h-16 object-cover rounded-3xl"
          />
          <p className=" text-2xl md:text-[32px] font-medium mt-8">
            {t("title")}
          </p>
          <div className="mt-6">
            {t("startAt")} <span className="text-primary">{t("price")}</span>
            {t("trial")}
            <div className="w-full h-px  mt-8 bg-linear-to-r shrink-0 from-transparent via-border to-transparent" />
          </div>
          <Button className="mt-8 font-gilroy h-11.5 px-7" asChild>
            <Link href="/pricing">{t("cta")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
