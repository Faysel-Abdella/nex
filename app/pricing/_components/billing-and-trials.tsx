import DepthCard from "@/components/depth-card";
import GlowCard from "@/components/glow-card";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React from "react";

const BillingAndTrials = () => {
  const t = useTranslations("pricingPage.billingAndTrials");
  const billingInfo = t.raw("billingInfo") as string[];
  return (
    <section className="section-container">
      <div className="section-content ">
        <div className="flex w-full justify-center">
          <p className="font-semibold md:font-medium text-3xl md:text-[40px] text-start">
            {t("title")}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-12 w-full max-w-6xl mx-auto">
          {billingInfo.map((info, index) => (
            <GlowCard
              key={index}
              outerClassName={cn(
                "w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] md:min-h-34 ",
                index > 2 && "ltr:xl:min-h-10",
              )}
              className={cn(
                "flex items-start flex-col  gap-3 p-5 h-full md:min-h-34 ",
                index > 2 && "ltr:xl:min-h-10",
              )}
              glowDirection={index % 2 == 0 ? "bottom" : "top"}
            >
              <div className="bg-third-background size-6 rounded-full shrink-0 flex items-center justify-center mt-1 border-t border-white/25"></div>
              <p className="text-lg text-muted-foreground ">{info}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BillingAndTrials;
