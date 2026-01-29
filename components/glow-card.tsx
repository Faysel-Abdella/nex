import { cn } from "@/lib/utils";
import React from "react";

export type GlowCardDirections = "top" | "left" | "right" | "bottom";
interface GlowCardProps {
  className?: string;
  outerClassName?: string;
  children: React.ReactNode;
  glowDirection?: GlowCardDirections;
  hasGlow?: boolean;
}

const glowDirections = {
  top: {
    border:
      "w-1/2 left-1/4 h-1/2 top-0 absolute bg-gradient-to-r from-transparent via-white/50 to-transparent z-0",
    glow: "h-1/2 w-1/2 bg-primary/15 absolute rounded-full blur-[100px] -top-1/2 left-1/4",
  },
  left: {
    border:
      "h-1/2 top-1/4 w-1/2 left-0 absolute bg-gradient-to-b from-transparent via-white/50 to-transparent z-0",
    glow: "h-1/2 w-1/2 bg-primary/15 absolute rounded-full blur-[100px] -left-1/2 top-1/4",
  },
  right: {
    border:
      "h-1/2 top-1/4 w-1/2 right-0 absolute bg-gradient-to-b from-transparent via-white/50 to-transparent z-0",
    glow: "h-1/2 w-1/2 bg-primary/15 absolute rounded-full blur-[100px] -right-1/2 top-1/4",
  },
  bottom: {
    border:
      "w-1/2 left-1/4 h-1/2 bottom-0 absolute bg-gradient-to-r from-transparent via-white/50 to-transparent z-0",
    glow: "h-1/2 w-1/2 bg-primary/15 absolute rounded-full blur-[100px] -bottom-1/2 left-1/4",
  },
} as const;

const GlowCard = ({
  className,
  children,
  outerClassName,
  glowDirection = "top",
  hasGlow = true,
}: GlowCardProps) => {
  const glow = glowDirections[glowDirection];

  return (
    <div
      className={cn(
        "relative w-full h-full rounded-2xl bg-linear-to-br from-white/10 via-primary/10 to-white/10 p-px overflow-hidden",
        outerClassName,
      )}
    >
      {hasGlow && <div className={glow.border} />}

      <div
        className={cn(
          "relative z-10 w-full h-full rounded-2xl bg-card p-8 overflow-hidden",
          className,
        )}
      >
        {children}

        {hasGlow && (
          <div
            className={cn(glow.glow, "pointer-events-none z-0")}
            aria-hidden
          />
        )}
      </div>
    </div>
  );
};

export default GlowCard;
