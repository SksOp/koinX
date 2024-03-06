import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

export const Analytics = ({ className }: { className?: ClassValue }) => {
  return (
    <svg
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M18.2308 8.12378H25V14.893"
        stroke="white"
        strokeWidth="1.69231"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 8.12378L15.4385 17.6853C15.2803 17.8404 15.0676 17.9272 14.8462 17.9272C14.6247 17.9272 14.412 17.8404 14.2538 17.6853L10.3615 13.793C10.2034 13.638 9.99071 13.5511 9.76923 13.5511C9.54775 13.5511 9.33509 13.638 9.17692 13.793L3 19.9699"
        stroke="white"
        strokeWidth="1.69231"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
