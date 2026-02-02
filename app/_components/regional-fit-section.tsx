"use client";

import DepthCard from "@/components/depth-card";
import GlowCard from "@/components/glow-card";
import StyledIcon from "@/components/styled-icon";
import { Languages } from "lucide-react";
import { useTranslations } from "next-intl";

const features = [
  {
    id: 1,
    icon: "/icons/WhatsappLogo.svg",
    contentKey: "whatsapp",
  },
  {
    id: 2,
    icon: "/icons/CompassRose.svg",
    contentKey: "gccNative",
  },
  {
    id: 3,
    icon: Languages,
    contentKey: "bilingual",
  },
  {
    id: 4,
    icon: "/icons/ai.svg",
    contentKey: "ai",
  },
];

export default function RegionalFitSection() {
  const t = useTranslations("landing.regionalFit");

  return (
    <section className="section-container relative  font-sf-pro">
      <div className="section-content   flex gap-10 items-center max-lg:flex-col max-lg:justify-center">
        <p className=" text-3xl md:text-[40px] font-medium  lg:w-1/3 max-lg:text-center">
          {t("title")}
        </p>
        <div className=" w-full lg:w-2/3">
          <div className="  md:columns-2  gap-6 ">
            {features.map((feature, index) => (
              <GlowCard
                key={feature.id}
                className="flex break-inside-avoid   flex-col   gap-4   py-5 px-10.5  items-center"
                outerClassName="mb-6 h-full flex-1 flex "
                glowDirection={index == 0 || index == 3 ? "top" : "bottom"}
              >
                <StyledIcon Icon={feature.icon} />
                <p className="text-muted-foreground text-center max-w-68">
                  {t(feature.contentKey)}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
