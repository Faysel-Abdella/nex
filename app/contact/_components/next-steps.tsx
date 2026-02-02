import DepthCard from "@/components/depth-card";
import GlowCard, { GlowCardDirections } from "@/components/glow-card";
import StyledIcon from "@/components/styled-icon";
import { CornerDownRight, FileSearch, SquareCheck, Wifi } from "lucide-react";
import { useTranslations } from "next-intl";

const NextSteps = () => {
  const t = useTranslations("contactUs.nextSteps");
  const principlesLabels = t.raw("steps") as string[];

  const icons = [FileSearch, SquareCheck, CornerDownRight, Wifi];
  const glowDirections: GlowCardDirections[] = [
    "top",
    "right",
    "left",
    "bottom",
  ];

  return (
    <section className="section-container w-full font-sf-pro">
      <div className="section-content flex flex-col items-center">
        <p className=" font-medium text-3xl md:text-[40px] text-center tracking-tighter">
          {t("title")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-12 gap-7">
          {principlesLabels.map((label, index) => (
            <GlowCard
              key={label}
              className="flex justify-center  items-center  h-full  flex-col p-5 "
              glowDirection={glowDirections[index]}
            >
              <StyledIcon Icon={icons[index]} />
              <p className=" mt-6  text-center  text-muted-foreground md:max-w-71">
                {label}
              </p>
            </GlowCard>
          ))}
        </div>
        <p className="text-center mt-12 max-w-118 text-xl font-semibold">
          {t("footer")}
        </p>
      </div>
    </section>
  );
};

export default NextSteps;
