import { Check } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

const MigrationPlan = () => {
  const t = useTranslations("migration.plan");
  const environments = t.raw("environments") as string[];

  return (
    <section className=" section-container ">
      <div className="section-content flex gap-10 max-md:flex-col max-md:items-center justify-between ">
        <div className="md:w-1/2 flex flex-col w-full justify-center max-w-133 ">
          <p className="font-medium text-3xl md:text-[40px] text-start">
            {t("title")}
          </p>
        </div>
        <div className="w-full md:w-1/2 bg-card h-full rounded-3xl border p-8 max-w-156">
          <p className="text-muted-foreground">{t("description")}</p>
          <div className="flex flex-col mt-6 gap-4.5">
            {environments.map((environment, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-primary/25 size-5 rounded-full shrink-0 flex items-center justify-center">
                  <Check className="size-3 text-primary" />
                </div>
                <span className="text-muted-foreground ">{environment}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-6 ">{t("footer")}</p>
        </div>
      </div>
    </section>
  );
};

export default MigrationPlan;
