"use client";

import StyledIcon from "@/components/styled-icon";
import { FileUp, List, Timer } from "lucide-react";
import { useTranslations } from "next-intl";

const features = [
  {
    id: 1,
    icon: FileUp,
    content: "Access to exports (CSV) or admin access to your existing CRM",
  },
  {
    id: 2,
    icon: "/icons/tick-square.svg",
    content: "One point of contact for quick approvals",
  },
  {
    id: 3,
    icon: List,
    content: "Your pipeline stages and deal definitions (simple list)",
  },
  {
    id: 4,
    icon: Timer,
    content:
      "30-60 minutes for a final validation call (optional but recommended)",
  },
];

export default function Requirments() {
  return (
    <section className="section-container relative  font-sf-pro">
      <div className="section-content   flex gap-10 items-center max-lg:flex-col max-lg:justify-center">
        <p className=" text-3xl md:text-[40px] font-medium  lg:w-1/3 max-lg:text-center">
          What we need from you.
        </p>
        <div className=" w-full lg:w-2/3">
          <div className="  md:columns-2 gap-8 ">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex break-inside-avoid h-full rounded-2xl  bg-card border flex-col  mb-4 gap-4  flex-1 py-5 px-10.5  items-center"
              >
                <StyledIcon Icon={feature.icon} />
                <p className="text-muted-foreground text-center max-w-68">
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
