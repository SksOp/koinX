import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";
import { Triangle } from "./assets/triangle";

interface PercentViewerProps extends React.HTMLProps<HTMLDivElement> {
  percent: number;
  variant?: "mini";
}

const PercentViewer = React.forwardRef<HTMLDivElement, PercentViewerProps>(
  ({ percent, ...props }, ref) => {
    const clampedPercent = Math.round(percent * 100) / 100;
    const isMini = props.variant === "mini";
    return (
      <div
        className={cn(
          `${percent > 0 ? "bg-green-500/10" : "bg-red-500/10"}`,
          "flex flex-nowrap items-center justify-center rounded-sm w-20 gap-2 ",
          isMini ? "p-1 max-w-min" : "p-1  px-3"
        )}
        {...props}
      >
        {!isMini && (
          <Triangle
            className={cn(
              "w-3 h-3 min-w-3",
              percent > 0 ? "" : "rotate-180",
              percent > 0 ? "text-green-500" : "text-red-500"
            )}
          />
        )}
        <p
          className={cn(
            "text-sm",
            isMini && "text-xs",
            !isMini && "font-semibold",
            percent > 0 ? "text-green-500" : "text-red-500"
          )}
        >
          {!isMini ? "" : percent > 0 ? "+" : "-"}
          {Math.abs(clampedPercent)}%
        </p>
      </div>
    );
  }
);

PercentViewer.displayName = "PercentViewer";

export default PercentViewer;
