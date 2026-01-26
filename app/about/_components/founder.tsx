import { Dot } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const Founder = () => {
  const t = useTranslations("about.founder");
  const list = t.raw("list") as string[];

  return (
    <section className="section-container relative  font-sf-pro">
      <div className="section-content   flex gap-20 items-center max-md:flex-col max-md:justify-center">
        <div className=" md:w-1/2 shrink-0 justify-center ">
          <div className="">
            <div className="flex text-muted-foreground text-sm md:text-base items-center">
              <Dot size={26} /> <span>{t("label")}</span>
            </div>
            <p className=" text-3xl md:text-[53px] font-medium   mt-5 ">
              {t("name")}
            </p>
            <p className="text-muted-foreground mt-6">{t("title")}</p>
            <p className="text-muted-foreground mt-6">{t("bio")}</p>
            <p className="text-muted-foreground mt-6">{t("designedTo")}</p>
            <ul className="text-muted-foreground list-disc ps-5 mt-4 max-md:max-w-sm text-start">
              {list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-6">{t("entity")}</p>
          </div>
        </div>
        <div className=" md:w-1/2  w-full flex justify-center">
          <div
            className="relative rounded-2xl overflow-hidden w-full h-100 md:h-125     max-w-114
"
          >
            <Image
              src="/images/image.png"
              alt="Founder"
              fill
              className="object-cover rtl:scale-x-[-1]"
            />
            <div className="absolute inset-0 bg-background h-full w-full mix-blend-color" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
