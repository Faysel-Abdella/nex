"use client";
import StyledIcon from "@/components/styled-icon";
import { Globe, Languages } from "lucide-react";
import { useTranslations } from "next-intl";

export default function RegionalFit() {
  const t = useTranslations("about.regionalFit");

  const features = [
    {
      id: 1,
      icon: "/icons/WhatsappLogo.svg",
      content: t("features.whatsapp"),
    },
    {
      id: 2,
      icon: Globe,
      content: t("features.regionAware"),
    },
    {
      id: 3,
      icon: Languages,
      content: t("features.bilingual"),
    },
    {
      id: 4,
      icon: "/icons/UsersThree.svg",
      content: t("features.teams"),
    },
  ];

  return (
    <section className="section-container relative  font-sf-pro">
      <div className="section-content   flex gap-10 items-center max-lg:flex-col max-lg:justify-center">
        <div className="lg:w-1/3  justify-center">
          <div className="max-w-80">
            <p className=" text-3xl md:text-[40px] font-medium   max-lg:text-center">
              {t("title")}
            </p>
            <p className="text-muted-foreground mt-6 max-lg:text-center">
              {t("description")}
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-2/3">
          <div className="  md:columns-2 gap-8 ">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex break-inside-avoid h-full rounded-2xl  bg-card border flex-col  mb-4 gap-4  flex-1 py-5 px-10.5  items-center"
              >
                <StyledIcon Icon={feature.icon} />
                <p className="text-muted-foreground text-center max-w-60">
                  {feature.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
