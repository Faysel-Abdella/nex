import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

interface GlassCardsProps {
  Icon: LucideIcon;
  title: string;
  evidence: React.ReactNode;
  suggestion: string;
  glowDirection?: "top" | "bottom";
}
const GlassCard = ({
  Icon,
  title,
  evidence,
  suggestion,
  glowDirection = "top",
}: GlassCardsProps) => {
  return (
    <div className="group w-full">
      <div className="group-hover:translate-y-1 transition-all duration-300 scale-85 blur-xs text-muted-foreground p-6 rounded-2xl bg-card border flex ">
        <div className="mt-1">{<Icon />}</div>
        <div className="flex flex-col ms-5 w-full">
          <p className="text-xl leading-tight">{title}</p>

          <div className="text-sm text-muted-foreground mt-2.5">{evidence}</div>
          <p className="text-sm font-medium mt-5">{suggestion}</p>
        </div>
        <div className="size-2.5 bg-third-background border-t shrink-0 border-white/40 rounded-full "></div>
      </div>
      <div
        className={cn(
          "relative w-full h-fit rounded-2xl bg-linear-to-br  shadow-xl from-white/10 via-primary/35 to-white/10 p-px  overflow-hidden group-hover:-translate-y-1",
        )}
      >
        <div className="p-3.5 md:p-6 relative rounded-2xl bg-card  overflow-hidden  flex  shadow-[inset_0_0px_20px_rgba(255,255,255,1)]    group-hover:shimmer shimmer-bg  shimmer-repeat-delay-10000  shimmer-speed-1500    transition-all group-hover:bg-card duration-300   shimmer-color-white/10 shimmer-spread-500 shadow-primary/5 ">
          <div className=" absolute w-full h-full overflow-hidden  top-0 left-0 opacity-10 rounded-2xl ">
            <img src={"/noise.png"} className="w-full h-full object-cover" />
          </div>
          <div
            className={cn(
              "h-1/2 w-1/2 bg-cyan-300/40 absolute rounded-full blur-[100px]  left-1/4 pointer-events-none z-0",
              glowDirection == "top" && "-top-1/2",
              glowDirection == "bottom" && "-bottom-1/2",
            )}
            aria-hidden
          />
          <div
            className={cn(
              "w-1/2 left-1/4 h-px  absolute bg-linear-to-r from-transparent via-cyan-200/50 to-transparent z-0",
              glowDirection == "top" && "-top-px",
              glowDirection == "bottom" && "-bottom-px",
            )}
          ></div>
          <div className="">{<Icon className="size-5 md:size-7" />}</div>
          <div className="flex flex-col ms-3 md:ms-5 w-full">
            <p className="text-lg md:text-xl leading-tight">{title}</p>
            <div className="text-sm text-muted-foreground mt-1.5 md:mt-2.5">
              {evidence}
            </div>
            <p className="text-sm font-medium mt-3 md:mt-5">{suggestion}</p>
          </div>
          <div className="size-2.5 bg-third-background border-t shrink-0 border-white/40 rounded-full "></div>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
