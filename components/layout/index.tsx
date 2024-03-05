import React from "react";
import Navbar from "./navbar";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ children, ...props }, ref) => {
    return (
      <div {...props} ref={ref}>
        <Navbar />
        {children}
      </div>
    );
  }
);

Layout.displayName = "Layout";

export * from "./navbar";
export default Layout;
