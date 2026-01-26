import { useTranslations } from "next-intl";
import StyledIcon from "@/components/styled-icon";
import { Activity, Languages, ToggleLeft } from "lucide-react";

const OperatingPrinciples = () => {
  const t = useTranslations("about.operatingPrinciples");

  const principles = [
    {
      icon: "/icons/WhatsappLogo.svg",
      title: t("cards.whatsapp.title"),
      description: t("cards.whatsapp.desc"),
    },
    {
      icon: ToggleLeft,
      title: t("cards.control.title"),
      description: t("cards.control.desc"),
    },
    {
      icon: Activity,
      title: t("cards.execution.title"),
      description: t("cards.execution.desc"),
    },
    {
      icon: Languages,
      title: t("cards.reality.title"),
      description: t("cards.reality.desc"),
    },
  ];

  return (
    <section className="section-container w-full font-sf-pro">
      <div className="  section-content ">
        <p className=" font-medium text-3xl md:text-[40px] text-center">
          {t("title")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-14 gap-7">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="flex break-inside-avoid h-full rounded-2xl  bg-card border flex-col    p-5 "
            >
              <StyledIcon Icon={principle.icon} />
              <p className="text-lg font-medium mt-6 ">{principle.title}</p>
              <p className="text-muted-foreground  mt-4 lg:max-w-52 ">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperatingPrinciples;
