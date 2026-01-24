import { useTranslations } from "next-intl";
import React from "react";

const BillingAndTrials = () => {
  const t = useTranslations("pricingPage.billingAndTrials");
  const billingInfo = t.raw("billingInfo") as string[];
  return (
    <section className="section-container">
      <div className="section-content ">
        <div className="flex w-full justify-center">
          <p className="font-medium text-3xl md:text-[40px] text-start">
            {t("title")}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {billingInfo.map((info, index) => (
            <div
              key={index}
              className="flex items-start h-fit w-full bg-card border rounded-2xl gap-3 p-5 flex-col"
            >
              <div className="bg-third-background size-6 rounded-full shrink-0 flex items-center justify-center mt-1 border-t border-white/25"></div>
              <p className="text-lg text-muted-foreground">{info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BillingAndTrials;
