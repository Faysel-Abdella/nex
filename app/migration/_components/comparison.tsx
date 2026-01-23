import { Check } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

const Comparison = () => {
  const coreObjects = [
    "Contacts and Companies",
    "Deals (pipelines, stages, values)",
    "Activities and notes",
    "Owners / assignments (where applicable)",
    "Basic tags and custom fields (reasonable set)",
  ];

  return (
    <section className=" section-container ">
      <div className="section-content flex gap-10 max-md:flex-col max-md:items-center justify-between ">
        <div className="md:w-1/2 flex flex-col  w-full  justify-center max-w-133 ">
          <p className="font-medium text-3xl  md:text-[40px] text-start">
            Migration isn&apos;t hard. Bad migration is.
          </p>
          <p className="text-muted-foreground mt-6 ">
            Most CRM migrations fail for two reasons:
          </p>
          <ol className="text-muted-foreground list-decimal ps-5 mt-4 max-md:max-w-sm text-start">
            <li>Dirty data</li>
            <li>Broken workflows</li>
          </ol>
          <p className="text-muted-foreground mt-5 ">
            Astrah migration is designed to prevent both.
            <br /> We migrate the data and validate the operating flow so your
            team can actually use it on day one.
          </p>
        </div>
        <div className="w-full md:w-1/2 bg-card h-full rounded-3xl border p-8 max-w-133">
          <p className="font-medium text-2xl md:text-3xl lg:text-[32px] ">
            What we migrate.
          </p>
          <p className="text-muted-foreground mt-5 ">
            For standard migrations, we move and map the core objects you need
            to operate immediately:
          </p>
          <div className="flex flex-col mt-8 gap-4.5">
            {coreObjects.map((coreObject, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-primary/25 size-5 rounded-full shrink-0 flex items-center justify-center">
                  <Check className="size-3 text-primary" />
                </div>
                <span className="text-muted-foreground ">{coreObject}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-8 ">
            If your old system contains extensive custom modules or heavily
            customized objects, we scope those separately.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
