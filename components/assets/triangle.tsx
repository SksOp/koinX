import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

export const Triangle = ({ className }: { className?: ClassValue }) => {
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
