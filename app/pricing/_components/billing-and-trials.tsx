import DepthCard from "@/components/depth-card";
import { useTranslations } from "next-intl";
import React from "react";

const BillingAndTrials = () => {
  const t = useTranslations("pricingPage.billingAndTrials");
  const billingInfo = [
    "Monthly and annual plans available",
    "Annual billing = price of 10 months (≈2 months free)",
    "7-day free trial on Starter, Business, Pro",
    "Auto-converts unless canceled",
    "Enterprise: no trial",
  ];
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
            <DepthCard
              key={index}
              className="flex items-start h-full w-full bg-card border rounded-2xl gap-3 p-5 flex-col"
            >
              <div className="bg-third-background size-6 rounded-full shrink-0 flex items-center justify-center mt-1 border-t border-white/25"></div>
              <p className="text-lg text-muted-foreground ">{info}</p>
            </DepthCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BillingAndTrials;
