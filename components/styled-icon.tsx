import type { LucideIcon } from "lucide-react";
import React from "react";

interface StyledIconProps {
  Icon: LucideIcon | string;
}

const StyledIcon = ({ Icon }: StyledIconProps) => {
  return (
    <div className="rounded-full shrink-0 size-14 bg-white/10 border-t-2 border-t-white/20 flex items-center justify-center">
      {typeof Icon === "string" ? (
        <img src={Icon} alt="" className="w-6 h-6" />
      ) : (
        <Icon className="w-6 h-6 text-white opacity-80" />
      )}
    </div>
  );
};

export default StyledIcon;
