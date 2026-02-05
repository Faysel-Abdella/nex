"use client";

import DepthCard from "@/components/depth-card";
import GlowCard from "@/components/glow-card";
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
        <p className=" text-3xl md:text-[40px] font-semibold md:font-medium lg:w-1/3 max-lg:text-center">
          {t("title")}
        </p>
        <div className=" w-full lg:w-2/3">
          <div className=" md:columns-2 gap-8 ">
            {items.map((content, index) => (
              <GlowCard
                key={index}
                outerClassName="h-full  mb-4 flex-1"
                className="flex     flex-col gap-6  py-5 px-8 items-center"
                glowDirection={index == 0 || index == 3 ? "top" : "bottom"}
              >
                <StyledIcon Icon={icons[index]} />
                <p className="text-muted-foreground text-center ">{content}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
