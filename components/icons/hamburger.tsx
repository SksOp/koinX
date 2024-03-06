import React from "react";

interface HamburgerMenuIconProps extends React.SVGProps<SVGSVGElement> {}

const HamburgerMenuIcon = React.forwardRef<
  SVGSVGElement,
  HamburgerMenuIconProps
>(({ ...props }, ref) => {
  return (
    <svg
      ref={ref}
      {...props}
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.01196 9.80613V7.52148H24.5738V9.80613H4.01196ZM4.01196 15.518H24.5738V13.2334H4.01196V15.518ZM4.01196 21.2299H24.5738V18.9452H4.01196V21.2299Z"
        fill="#0B182F"
      />
    </svg>
  );
});

HamburgerMenuIcon.displayName = "HamburgerMenuIcon";

export default HamburgerMenuIcon;
