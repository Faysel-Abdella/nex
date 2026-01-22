import { Check } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

const Principles = () => {
  const t = useTranslations("about.principles");
  const principles = t.raw("items") as string[];

  return (
    <section className=" section-container ">
      <div className="section-content flex max-md:gap-10 max-md:flex-col max-md:items-center ">
        <div className="md:w-1/2 flex flex-col  w-full  justify-center ">
          <p className="font-medium text-3xl  md:text-[40px] text-start">
            {t("mainTitle")}
          </p>
          <p className="text-muted-foreground mt-6 ">{t("combines")}</p>
          <ul className="text-muted-foreground list-disc ps-5 mt-4 max-md:max-w-sm text-start">
            <li>{t("list.crm")}</li>
            <li>{t("list.comm")}</li>
            <li>{t("list.intelligence")}</li>
            <li>{t("list.transaction")}</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 bg-card h-full rounded-3xl border p-8">
          <p className="font-medium text-2xl md:text-[32px] ">
            {t("operatingTitle")}
          </p>
          <div className="flex flex-col mt-10 gap-4.5">
            {principles.map((principle, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-primary/25 size-5 rounded-full shrink-0 flex items-center justify-center">
                  <Check className="size-3 text-primary" />
                </div>
                <span className="text-muted-foreground ">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
