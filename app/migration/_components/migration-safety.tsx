import { useTranslations } from "next-intl";
import StyledIcon from "@/components/styled-icon";
import {
  Activity,
  CircleCheck,
  Languages,
  LocateFixed,
  Network,
  SlidersHorizontal,
  ToggleLeft,
} from "lucide-react";

const MigrationSafety = () => {
  const t = useTranslations("about.operatingPrinciples");

  const safetyPrinciples = [
    {
      icon: Network,
      label: "Data integrity checks",
    },
    {
      icon: SlidersHorizontal,
      label: "Controlled mapping (no guesswork)",
    },
    {
      icon: CircleCheck,
      label: "Validation before go-live",
    },
    {
      icon: LocateFixed,
      label: "Clear scope boundaries",
    },
  ];

  return (
    <section className="section-container w-full font-sf-pro">
      <div className="  section-content flex flex-col items-center">
        <p className=" font-medium text-3xl md:text-[40px] text-center">
          Migration with control.
        </p>
        <p className="text-center text-muted-foreground mt-5 max-w-md">
          Astrah is built to run your business. Migration must be safe.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-7">
          {safetyPrinciples.map((principle) => (
            <div
              key={principle.label}
              className="flex break-inside-avoid h-fit rounded-2xl  bg-card border flex-col    p-5 "
            >
              <StyledIcon Icon={principle.icon} />
              <p className="text-lg font-medium mt-6 ">{principle.label}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 max-w-md">
          Astrah never auto-sends messages during migration. Your communication
          stays under your control.
        </p>
      </div>
    </section>
  );
};

export default MigrationSafety;
