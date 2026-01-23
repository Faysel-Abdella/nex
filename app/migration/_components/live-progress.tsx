import React from "react";
import { useTranslations } from "next-intl";

const LiveProgress = () => {
  const t = useTranslations("about.operatingPrinciples");

  const principles = [
    {
      icon: "01",
      label: "Day 1",
      title: "Export + data audit",
      steps: [
        "You provide exports from your current CRM (or we guide you).",
        "We audit for duplicates, missing fields, and structural issues.",
      ],
    },
    {
      icon: "02",
      label: "Day 2",
      title: "Mapping + import",
      steps: [
        "Field mapping to Astrah data model",
        "Import and integrity checks",
        "Pipeline + stage alignment",
      ],
    },
    {
      icon: "03",
      label: "Day 3",
      title: "Validation + go-live",
      steps: [
        "Quick validation of records, pipelines, and core workflows",
        "Your team is ready to operate in Astrah",
      ],
    },
  ];

  return (
    <section className="section-container w-full font-sf-pro">
      <div className="  section-content flex flex-col items-center">
        <p className=" font-medium text-3xl md:text-[40px] text-center">
          The standard go-live process.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3  mt-14 gap-7">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="flex  h-full rounded-2xl  bg-card border flex-col    p-5 "
            >
              <div className="w-full items-center justify-between flex">
                <p className="text-[40px] font-medium">{principle.icon}</p>
                <p className="text-xl text-white/40">{principle.label}</p>
              </div>
              <p className="text-lg font-medium mt-6 ">{principle.title}</p>
              <ul className="text-muted-foreground list-disc  mt-4  ps-6 ">
                {principle.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 max-w-md">
          No surprises. No silent changes. Everything is validated before
          go-live.
        </p>
      </div>
    </section>
  );
};

export default LiveProgress;
