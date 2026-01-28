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
      <div className="section-content   flex gap-10 items-center flex-col justify-center">
        <div className="full  justify-center">
          <div className="max-w-127 text-center flex flex-col items-center">
            <p className=" text-3xl md:text-[40px] font-medium   text-center">
              {t("title")}
            </p>
            <p className="text-muted-foreground mt-5 text-center max-w-96">
              {t("description")}
            </p>
          </div>
        </div>
        <div className=" w-full ">
          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex break-inside-avoid h-full lg:h-fit rounded-2xl  bg-card border flex-col  mb-4 gap-4  flex-1 py-5 px-10.5  items-center"
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
