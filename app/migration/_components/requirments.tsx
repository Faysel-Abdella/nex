"use client";

import StyledIcon from "@/components/styled-icon";
import { FileUp, List, Timer, CheckSquare } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Requirments() {
  const t = useTranslations("migration.requirements");
  const items = t.raw("items") as string[];

  const icons = [FileUp, CheckSquare, List, Timer];

  return (
    <section className="section-container relative font-sf-pro">
      <div className="section-content flex gap-10 items-center max-lg:flex-col max-lg:justify-center">
        <p className=" text-3xl md:text-[40px] font-medium lg:w-1/3 max-lg:text-center">
          {t("title")}
        </p>
        <div className=" w-full lg:w-2/3">
          <div className=" md:columns-2 gap-8 ">
            {items.map((content, index) => (
              <div
                key={index}
                className="flex break-inside-avoid h-full rounded-2xl bg-card border flex-col mb-4 gap-4 flex-1 py-5 px-10.5 items-center"
              >
                <StyledIcon Icon={icons[index]} />
                <p className="text-muted-foreground text-center max-w-68">
                  {content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
