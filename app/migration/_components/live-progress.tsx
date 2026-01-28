import React from "react";
import { useTranslations } from "next-intl";

interface Step {
  id: string;
  label: string;
  title: string;
  steps: string[];
}

const LiveProgress = () => {
  const t = useTranslations("migration.progress");
  const principles = t.raw("days") as Step[];

  return (
    <section className="section-container w-full font-sf-pro">
      <div className="section-content flex flex-col items-center">
        <p className=" font-medium text-3xl md:text-[40px] text-center">
          {t("title")}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-14 gap-7">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="flex h-full rounded-2xl bg-card border flex-col p-5 "
            >
              <div className="w-full items-center justify-between flex">
                <p className="text-[40px] font-medium">{principle.id}</p>
                <p className="text-xl text-white/40">{principle.label}</p>
              </div>
              <p className="text-lg font-medium mt-6 ">{principle.title}</p>
              <ul className="text-muted-foreground list-disc mt-4 ps-6 ">
                {principle.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 max-w-100 text-xl text-white font-semibold">
          {t("footer")}
        </p>
      </div>
    </section>
  );
};

export default LiveProgress;
