import React from "react";
import { useTranslations } from "next-intl";
import DepthCard from "@/components/depth-card";
import GlowCard, { GlowCardDirections } from "@/components/glow-card";
import Pricing from "@/app/pricing/_components/pricing";

interface Step {
  id: string;
  label: string;
  title: string;
  steps: string[];
}

const LiveProgress = () => {
  const t = useTranslations("migration.progress");
  const principles = t.raw("days") as Step[];

  const glowDirection: GlowCardDirections[] = ["top", "bottom", "top"];
  return (
    <section className="section-container w-full font-sf-pro">
      <div className="section-content flex flex-col items-center">
        <p className=" font-medium text-3xl md:text-[40px] text-center tracking-tighter">
          {t("title")}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-14 gap-7">
          {principles.map((principle, index) => (
            <GlowCard
              key={principle.title}
              className="flex h-full rounded-2xl  border-0 flex-col p-5  shadow-[inset_0_0px_10px_rgba(255,255,255,0.05)]"
              glowDirection={glowDirection[index]}
            >
              <div className="w-full items-center justify-between flex">
                <p className="text-[40px] font-medium">{principle.id}</p>
                <p className="text-xl text-white/40">{principle.label}</p>
              </div>
              <p className="text-lg font-medium mt-6 ">{principle.title}</p>
              <ul className="text-muted-foreground list-disc mt-4 ps-6 ">
                {principle.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </GlowCard>
          ))}
        </div>
        <p className="text-center mt-12 max-w-100 md:text-lg lg:text-xl text-white font-semibold">
          {t("footer")}
        </p>
      </div>
    </section>
  );
};

export default LiveProgress;
