"use client";

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
    icon: "/icons/Translate.svg",
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
          <div className="  md:columns-2 gap-8 ">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex break-inside-avoid h-full rounded-2xl  bg-card border flex-col  mb-4 gap-4  flex-1 py-5 px-10.5  items-center"
              >
                <div className=" rounded-full  shrink-0 size-14 bg-white/10 border-t-2 border-t-white/20 flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={t(feature.contentKey)}
                    className="w-6 h-6 "
                  />
                </div>
                <p className="text-muted-foreground text-center max-w-68">
                  {t(feature.contentKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
