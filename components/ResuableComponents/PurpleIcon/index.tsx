import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

function PurpleIcon({ className, children }: Props) {
  return (
    <div className={cn("px-4 py-2 iconBackground", className)}>{children}</div>
  );
}

export default PurpleIcon;
