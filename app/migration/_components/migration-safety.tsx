import { useTranslations } from "next-intl";
import StyledIcon from "@/components/styled-icon";
import {
  CircleCheck,
  LocateFixed,
  Network,
  SlidersHorizontal,
} from "lucide-react";
import DepthCard from "@/components/depth-card";

const MigrationSafety = () => {
  const t = useTranslations("migration.safety");
  const principlesLabels = t.raw("principles") as string[];

  const icons = [Network, SlidersHorizontal, CircleCheck, LocateFixed];

  return (
    <section className="section-container w-full font-sf-pro">
      <div className="section-content flex flex-col items-center">
        <p className=" font-medium text-3xl md:text-[40px] text-center tracking-tighter">
          {t("title")}
        </p>
        <p className="text-center text-muted-foreground mt-5 max-w-md">
          {t("description")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-7">
          {principlesLabels.map((label, index) => (
            <DepthCard
              key={label}
              className="flex break-inside-avoid h-full rounded-2xl bg-card border flex-col p-5 "
            >
              <StyledIcon Icon={icons[index]} />
              <p className="text-lg font-medium mt-6 ">{label}</p>
            </DepthCard>
          ))}
        </div>
        <p className="text-center mt-12 max-w-132 md:text-lg lg:text-xl text-white font-semibold">
          {t("footer")}
        </p>
      </div>
    </section>
  );
};

export default MigrationSafety;
