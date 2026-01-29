import { cn } from "@/lib/utils";
import React from "react";

interface DepthCardProps {
  className?: string;
  children: React.ReactNode;
}
const DepthCard = ({ className, children }: DepthCardProps) => {
  return (
    <div
      className={cn(
        "bg-card h-full shadow-[inset_0_0px_25px_rgba(255,255,255,0.05)] rounded-2xl border border-third-background p-8 ",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default DepthCard;
