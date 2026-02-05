import { useTranslations } from "next-intl";
import StyledIcon from "@/components/styled-icon";
import { Activity, Languages, LucideIcon, ToggleLeft } from "lucide-react";
import GlowCard, { GlowCardDirections } from "@/components/glow-card";

const OperatingPrinciples = () => {
  const t = useTranslations("about.operatingPrinciples");

  const principles: {
    icon: LucideIcon | string;
    title: string;
    description: string;
    glowDirection: GlowCardDirections;
  }[] = [
    {
      icon: "/icons/WhatsappLogo.svg",
      title: t("cards.whatsapp.title"),
      description: t("cards.whatsapp.desc"),
      glowDirection: "top",
    },
    {
      icon: ToggleLeft,
      title: t("cards.control.title"),
      description: t("cards.control.desc"),
      glowDirection: "right",
    },
    {
      icon: Activity,
      title: t("cards.execution.title"),
      description: t("cards.execution.desc"),
      glowDirection: "left",
    },
    {
      icon: Languages,
      title: t("cards.reality.title"),
      description: t("cards.reality.desc"),
      glowDirection: "bottom",
    },
  ];

  return (
    <section className="section-container w-full font-sf-pro">
      <div className="  section-content ">
        <p className=" font-semibold md:font-medium text-3xl md:text-[40px] text-center">
          {t("title")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-14 gap-6">
          {principles.map((principle) => (
            <GlowCard
              key={principle.title}
              className="flex break-inside-avoid h-full rounded-2xl  bg-card  flex-col    p-5 "
              glowDirection={principle.glowDirection}
            >
              <StyledIcon Icon={principle.icon} />
              <p className="text-lg font-medium mt-6 text-nowrap">
                {principle.title}
              </p>
              <p className="text-muted-foreground  mt-4  ">
                {principle.description}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperatingPrinciples;
