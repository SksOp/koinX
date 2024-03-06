import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

export const News = ({ className }: { className?: ClassValue }) => {
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
        d="M7 17.2569V14.4569H9.8V17.2569H7ZM21 6.74846C20.9978 6.19296 20.7755 5.66097 20.382 5.26896C19.9884 4.87695 19.4555 4.65686 18.9 4.65686H4.7922C4.23525 4.65686 3.7011 4.87811 3.30728 5.27194C2.91345 5.66576 2.6922 6.19991 2.6922 6.75686V19.3569C2.6922 20.2851 3.06095 21.1754 3.71733 21.8317C4.3737 22.4881 5.26394 22.8569 6.1922 22.8569H21.8078C22.7361 22.8569 23.6263 22.4881 24.2827 21.8317C24.939 21.1754 25.3078 20.2851 25.3078 19.3569V10.9569C25.3078 10.3999 25.0865 9.86576 24.6927 9.47194C24.2989 9.07811 23.7648 8.85686 23.2078 8.85686H22.4V18.9789C22.4 19.1645 22.3263 19.3426 22.195 19.4738C22.0637 19.6051 21.8857 19.6789 21.7 19.6789C21.5143 19.6789 21.3363 19.6051 21.205 19.4738C21.0737 19.3426 21 19.1645 21 18.9789V6.74846ZM5.6 9.55686C5.6 9.37121 5.67375 9.19316 5.80503 9.06189C5.9363 8.93061 6.11435 8.85686 6.3 8.85686H17.5C17.6857 8.85686 17.8637 8.93061 17.995 9.06189C18.1262 9.19316 18.2 9.37121 18.2 9.55686C18.2 9.74251 18.1262 9.92056 17.995 10.0518C17.8637 10.1831 17.6857 10.2569 17.5 10.2569H6.3C6.11435 10.2569 5.9363 10.1831 5.80503 10.0518C5.67375 9.92056 5.6 9.74251 5.6 9.55686ZM13.3 13.0569H17.5C17.6857 13.0569 17.8637 13.1306 17.995 13.2619C18.1262 13.3932 18.2 13.5712 18.2 13.7569C18.2 13.9425 18.1262 14.1206 17.995 14.2518C17.8637 14.3831 17.6857 14.4569 17.5 14.4569H13.3C13.1143 14.4569 12.9363 14.3831 12.805 14.2518C12.6737 14.1206 12.6 13.9425 12.6 13.7569C12.6 13.5712 12.6737 13.3932 12.805 13.2619C12.9363 13.1306 13.1143 13.0569 13.3 13.0569ZM12.6 17.9569C12.6 17.7712 12.6737 17.5932 12.805 17.4619C12.9363 17.3306 13.1143 17.2569 13.3 17.2569H17.5C17.6857 17.2569 17.8637 17.3306 17.995 17.4619C18.1262 17.5932 18.2 17.7712 18.2 17.9569C18.2 18.1425 18.1262 18.3206 17.995 18.4518C17.8637 18.5831 17.6857 18.6569 17.5 18.6569H13.3C13.1143 18.6569 12.9363 18.5831 12.805 18.4518C12.6737 18.3206 12.6 18.1425 12.6 17.9569ZM6.3 13.0569H10.5C10.6857 13.0569 10.8637 13.1306 10.995 13.2619C11.1263 13.3932 11.2 13.5712 11.2 13.7569V17.9569C11.2 18.1425 11.1263 18.3206 10.995 18.4518C10.8637 18.5831 10.6857 18.6569 10.5 18.6569H6.3C6.11435 18.6569 5.9363 18.5831 5.80503 18.4518C5.67375 18.3206 5.6 18.1425 5.6 17.9569V13.7569C5.6 13.5712 5.67375 13.3932 5.80503 13.2619C5.9363 13.1306 6.11435 13.0569 6.3 13.0569Z"
        fill="white"
      />
    </svg>
  );
};