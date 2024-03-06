import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

interface PercentViewerProps extends React.HTMLProps<HTMLDivElement> {
  percent: number;
}

const PercentViewer = React.forwardRef<HTMLDivElement, PercentViewerProps>(
  ({ percent, ...props }, ref) => {
    const clampedPercent = Math.round(percent * 100) / 100;

    return (
      <div
        className={cn(
          `${percent > 0 ? "bg-green-500/10" : "bg-red-500/10"}`,
          "flex flex-nowrap items-center justify-center rounded-sm w-20 p-1 gap-2 px-3"
        )}
        {...props}
      >
        <Triangle
          className={cn(
            "w-3 h-3 min-w-3",
            percent > 0 ? "" : "rotate-180",
            percent > 0 ? "text-green-500" : "text-red-500"
          )}
        />
        <p
          className={cn(
            "text-sm font-semibold",
            percent > 0 ? "text-green-500" : "text-red-500"
          )}
        >
          {Math.abs(clampedPercent)}%
        </p>
      </div>
    );
  }
);

PercentViewer.displayName = "PercentViewer";

export default PercentViewer;
const Triangle = ({ className }: { className?: ClassValue }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1rem"
      height="1rem"
      viewBox="0 0 24 24"
      className={cn(className)}
    >
      <path fill="currentColor" d="M1 21h22L12 2" />
    </svg>
  );
};