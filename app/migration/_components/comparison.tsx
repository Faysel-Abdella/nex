import { Check } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";
import DepthCard from "@/components/depth-card";
import GlowCard from "@/components/glow-card";

const Comparison = () => {
  const t = useTranslations("migration.comparison");
  const coreObjects = t.raw("coreObjects") as string[];
  const reasons = t.raw("reasons") as string[];

  return (
    <section className=" section-container ">
      <div className="section-content flex gap-10 max-md:flex-col max-md:items-center justify-between ">
        <div className="md:w-1/2 flex flex-col  w-full  justify-center max-w-133 ">
          <p className="font-medium text-3xl  md:text-[40px] text-start tracking-tighter">
            {t("title")}
          </p>
          <p className="text-muted-foreground mt-6 ">{t("sub")}</p>
          <ol className="text-muted-foreground list-decimal ps-5 mt-4 max-md:max-w-sm text-start">
            {reasons.map((reason, i) => (
              <li key={i}>{reason}</li>
            ))}
          </ol>
          <p className="text-muted-foreground mt-5 ">
            {t.rich("description", {
              br: () => <br />,
            })}
          </p>
        </div>
        <GlowCard
          outerClassName="w-full md:w-1/2 bg-card h-full rounded-3xl max-w-133"
          className=" rounded-[23px]   p-8 "
        >
          <p className="font-medium text-2xl md:text-3xl lg:text-[32px] ">
            {t("cardTitle")}
          </p>
          <p className="text-muted-foreground mt-5 ">{t("cardSub")}</p>
          <div className="flex flex-col mt-8 gap-4.5">
            {coreObjects.map((coreObject, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-primary/25 size-5 rounded-full shrink-0 flex items-center justify-center">
                  <Check className="size-3 text-primary" />
                </div>
                <span className="text-muted-foreground ">{coreObject}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-8 ">{t("footer")}</p>
        </GlowCard>
      </div>
    </section>
  );
};

export default Comparison;
