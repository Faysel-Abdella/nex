"use client";
import DepthCard from "@/components/depth-card";
import GlowCard, { GlowCardDirections } from "@/components/glow-card";
import StyledIcon from "@/components/styled-icon";
import { Globe, Languages, LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function RegionalFit() {
  const t = useTranslations("about.regionalFit");

  const features: {
    id: number;
    icon: LucideIcon | string;
    content: string;
    glowDirection: GlowCardDirections;
  }[] = [
    {
      id: 1,
      icon: "/icons/WhatsappLogo.svg",
      content: t("features.whatsapp"),
      glowDirection: "top",
    },
    {
      id: 2,
      icon: Globe,
      content: t("features.regionAware"),
      glowDirection: "right",
    },
    {
      id: 3,
      icon: Languages,
      content: t("features.bilingual"),
      glowDirection: "left",
    },
    {
      id: 4,
      icon: "/icons/UsersThree.svg",
      content: t("features.teams"),
      glowDirection: "bottom",
    },
  ];

  return (
    <section className="section-container relative  font-sf-pro">
      <div className="section-content   flex gap-10 items-center flex-col justify-center">
        <div className="full  justify-center">
          <div className="max-w-127 text-center flex flex-col items-center">
            <p className=" text-3xl md:text-[40px] font-semibold md:font-medium   text-center">
              {t("title")}
            </p>
            <p className="text-muted-foreground mt-5 text-center max-w-96">
              {t("description")}
            </p>
          </div>
        </div>
        <div className=" w-full ">
          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {features.map((feature, index) => (
              <GlowCard
                key={feature.id}
                outerClassName="h-full  mb-4 flex-1"
                className="flex   flex-col gap-6   py-5 px-5  items-center"
                glowDirection={feature.glowDirection}
              >
                <StyledIcon Icon={feature.icon} />
                <p className="text-muted-foreground text-center ">
                  {feature.content}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
