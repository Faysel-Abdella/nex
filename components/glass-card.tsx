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
      <div className="p-6 relative rounded-2xl bg-card border flex overflow-hidden    group-hover:shimmer shimmer-bg  shimmer-repeat-delay-10000 group-hover:-translate-y-1 shimmer-speed-1500    transition-all group-hover:bg-card duration-300   shimmer-color-white/10 shimmer-spread-500 shadow-primary/5 ">
        <div className=" absolute w-full h-full overflow-hidden  top-0 left-0 opacity-8 rounded-2xl ">
          <svg id="noice" className="w-full">
            <filter id="noise-filter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="1.34"
                numOctaves="4"
                stitchTiles="stitch"
              ></feTurbulence>
              <feColorMatrix type="saturate" values="0"></feColorMatrix>
              <feComponentTransfer>
                <feFuncR type="linear" slope="0.46"></feFuncR>
                <feFuncG type="linear" slope="0.46"></feFuncG>
                <feFuncB type="linear" slope="0.46"></feFuncB>
                <feFuncA type="linear" slope="0.56"></feFuncA>
              </feComponentTransfer>
              <feComponentTransfer>
                <feFuncR type="linear" slope="1.47" intercept="-0.23" />
                <feFuncG type="linear" slope="1.47" intercept="-0.23" />
                <feFuncB type="linear" slope="1.47" intercept="-0.23" />
              </feComponentTransfer>
            </filter>
            <rect width="100%" height="100%" filter="url(#noise-filter)"></rect>
          </svg>
        </div>
        <div
          className={cn(
            "h-1/2 w-1/2 bg-primary/15 absolute rounded-full blur-[100px]  left-1/4 pointer-events-none z-0",
            glowDirection == "top" && "-top-1/2",
            glowDirection == "bottom" && "-bottom-1/2",
          )}
          aria-hidden
        />
        <div
          className={cn(
            "w-1/2 left-1/4 h-px  absolute bg-linear-to-r from-transparent via-white/50 to-transparent z-0",
            glowDirection == "top" && "top-0",
            glowDirection == "bottom" && "bottom-0",
          )}
        ></div>
        <div className="mt-1">{<Icon size={28} />}</div>
        <div className="flex flex-col ms-5 w-full">
          <p className="text-xl leading-tight">{title}</p>
          <div className="text-sm text-muted-foreground mt-2.5">{evidence}</div>
          <p className="text-sm font-medium mt-5">{suggestion}</p>
        </div>
        <div className="size-2.5 bg-third-background border-t shrink-0 border-white/40 rounded-full "></div>
      </div>
    </div>
  );
};

export default GlassCard;
