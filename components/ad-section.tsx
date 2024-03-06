import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import HeroIllustration from "./assets/illustrations";
import { Button } from "./ui/button";
import Arrow from "./icons/arrow";
import { Trendings } from "@/types/gecko";
import Image from "next/image";
import PercentViewer from "./percent-viewer";
import TrendingCard from "./trending-card";
import ActionCards from "./action-card";

interface AdSectionProps extends React.HTMLProps<HTMLDivElement> {
  trendings: Trendings;
}

const AdSection = React.forwardRef<HTMLDivElement, AdSectionProps>(
  ({ trendings, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-4 " ref={ref} {...props}>
        <ActionCards />
        <TrendingCard trendings={trendings} />
      </div>
    );
  }
);

AdSection.displayName = "AdSection";

export default AdSection;
