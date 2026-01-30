import GlassCard from "@/components/glass-card";
import { TriangleAlert } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

const FEATURE_SAMPLE_IMAGE = "/images/feature-sample.webp";
const FeatureShowcase = () => {
  const t = useTranslations("landing.featureShowcase");

  const outputs = [
    {
      Icon: TriangleAlert,
      title: "Silence detected",
      evidence: <div>Last inbound WhatsApp: 6 days ago</div>,
      suggestion: "Suggested: draft follow-up",
    },
    {
      Icon: TriangleAlert,
      title: "Pricing inquiry detected",
      evidence: <div>Client asked about pricing + timeline</div>,
      suggestion: "Suggested: clarify scope + send offer",
    },
    {
      Icon: TriangleAlert,
      title: "Thread requires follow-up",
      evidence: <div>Pricing & timeline mentioned </div>,
      suggestion: "Suggested: clarify scope + send offer",
    },
    {
      Icon: TriangleAlert,
      title: "Payment Request",
      evidence: <div>Amount: 50,000 AED</div>,
      suggestion: "Suggested: send secure payment link",
    },
    {
      Icon: TriangleAlert,
      title: "High-intent lead detected",
      evidence: <div>Match score: 84/100 · High intent signals</div>,
      suggestion: "Suggested: draft outreach message",
    },
  ];

  return (
    <section id="product" className="relative section-container  font-sf-pro">
      <div className="section-content  flex flex-col gap-30 items-center ">
        <div className="flex w-full gap-10 md:gap-20 max-md:flex-col md:justify-between  ">
          <div className="md:w-1/2 flex flex-col  justify-center  ">
            <p className="font-medium text-3xl md:text-[40px]">
              {t("demand.title")}
            </p>
            <p className="text-muted-foreground mt-6 max-w-133">
              {t("demand.desc")}
            </p>
            <ul className="text-muted-foreground list-disc ps-5 mt-4 max-md:max-w-sm text-start">
              <li>{t("demand.list1")}</li>
              <li>{t("demand.list2")}</li>
              <li>{t("demand.list3")}</li>
            </ul>
          </div>
          <div className="md:w-1/2  ">
            <GlassCard
              Icon={outputs[0].Icon}
              evidence={outputs[0].evidence}
              suggestion={outputs[0].suggestion}
              title={outputs[0].title}
              glowDirection={"top"}
            />
          </div>
        </div>
        <div className="flex w-full gap-10 md:gap-20  flex-row-reverse max-md:flex-col ">
          <div className="md:w-1/2 flex flex-col  justify-center  ">
            <p className="font-medium text-3xl md:text-[40px]">
              {t("revenue.title")}
            </p>
            <p className="text-muted-foreground mt-6">{t("revenue.desc")}</p>
            <ul className="text-muted-foreground list-disc ps-5 mt-4 max-md:max-w-sm text-start">
              <li>{t("revenue.list1")}</li>
              <li>{t("revenue.list2")}</li>
              <li>{t("revenue.list3")}</li>
            </ul>
            <p className="text-muted-foreground mt-6">{t("revenue.footer")}</p>
          </div>
          <div className="md:w-1/2">
            <GlassCard
              Icon={outputs[1].Icon}
              evidence={outputs[1].evidence}
              suggestion={outputs[1].suggestion}
              title={outputs[1].title}
              glowDirection={"bottom"}
            />
          </div>
        </div>
        <div className="flex w-full gap-10 md:gap-20  max-md:flex-col ">
          <div className="md:w-1/2 flex flex-col  justify-center  ">
            <p className="font-medium text-3xl md:text-[40px]">
              {t("inbox.title")}
            </p>
            <p className="text-muted-foreground mt-6">{t("inbox.desc")}</p>
          </div>
          <div className="md:w-1/2 flex items-center">
            <GlassCard
              Icon={outputs[2].Icon}
              evidence={outputs[2].evidence}
              suggestion={outputs[2].suggestion}
              title={outputs[2].title}
              glowDirection={"top"}
            />
          </div>
        </div>
        <div className="flex w-full gap-10 md:gap-20 flex-row-reverse max-md:flex-col ">
          <div className="md:w-1/2 flex flex-col  justify-center  ">
            <p className="font-medium text-3xl md:text-[40px]  mt-6 md:mt-8 lg:mt-10">
              {t("cash.title")}
            </p>
            <p className="text-muted-foreground mt-6">{t("cash.desc")}</p>
            <ul className="text-muted-foreground list-disc ps-5 mt-4 max-md:max-w-sm text-start">
              <li>{t("cash.list1")}</li>
              <li>{t("cash.list2")}</li>
              <li>{t("cash.list3")}</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex items-center">
            <GlassCard
              Icon={outputs[3].Icon}
              evidence={outputs[3].evidence}
              suggestion={outputs[3].suggestion}
              title={outputs[3].title}
              glowDirection={"bottom"}
            />
          </div>
        </div>
        <div className="flex w-full  gap-10 md:gap-20 max-md:flex-col ">
          <div className="md:w-1/2 flex flex-col  justify-center  ">
            <p className="font-medium  text-3xl md:text-[40px]">
              {t("alive.title")}
            </p>
            <p className="text-muted-foreground mt-6">{t("alive.desc1")}</p>
            <p className="text-muted-foreground mt-6">{t("alive.desc2")}</p>
          </div>
          <div className="md:w-1/2">
            <GlassCard
              Icon={outputs[4].Icon}
              evidence={outputs[4].evidence}
              suggestion={outputs[4].suggestion}
              title={outputs[4].title}
              glowDirection={"top"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
