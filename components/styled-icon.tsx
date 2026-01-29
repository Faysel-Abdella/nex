import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import React from "react";

interface StyledIconProps {
  Icon: LucideIcon | string;
  className?: string;
}

const StyledIcon = ({ Icon, className }: StyledIconProps) => {
  return (
    <div
      className={cn(
        "rounded-full shrink-0 size-14 bg-white/5 border-x border-primary/15 shadow-[inset_0_0px_25px_rgba(128,237,249,0.1)] -rotate-45 flex items-center justify-center",
      )}
    >
      <div className="rotate-45">
        {typeof Icon === "string" ? (
          <img src={Icon} alt="" className="w-6 h-6" />
        ) : (
          <Icon className="w-6 h-6 text-white opacity-80" />
        )}
      </div>
    </div>
  );
};

export default StyledIcon;
