import React from "react";

interface ArrowProps extends React.SVGProps<SVGSVGElement> {}

const Arrow = React.forwardRef<SVGSVGElement, ArrowProps>(
  ({ ...props }, ref) => {
    return (
      <svg
        ref={ref}
        {...props}
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.9583 9.9952H4.45834"
          stroke="#0F1629"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.9168 4.97479L16.9585 9.99479L11.9168 15.0156"
          stroke="#0F1629"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

Arrow.displayName = "Arrow";

export default Arrow;
