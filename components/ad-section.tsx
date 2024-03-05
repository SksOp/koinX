import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import HeroIllustration from "./assets/illustrations";
import { Button } from "./ui/button";
import Arrow from "./icons/arrow";

interface AdSectionProps extends React.HTMLProps<HTMLDivElement> {}

const AdSection = React.forwardRef<HTMLDivElement, AdSectionProps>(
  ({ ...props }, ref) => {
    const actionCard = (
      <Card className="bg-[#0052FE]">
        <CardHeader>
          <CardHeader>
            <p className="text-2xl font-bold text-center text-card leading-[170%]">
              Get Started with KoinX for FREE
            </p>
          </CardHeader>
          <CardContent className="items-center flex flex-col gap-8">
            <p className="text-sm text-center text-card  leading-[170%]">
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax reports.
            </p>
            <HeroIllustration />
          </CardContent>
          <CardFooter>
            <Button className="bg-card text-foreground m-auto">
              Get Started for FREE
              <Arrow className="w-4 h-4" />
            </Button>
          </CardFooter>
        </CardHeader>
      </Card>
    );
    return (
      <div className="flex flex-col gap-4 " ref={ref} {...props}>
        {actionCard}
        {actionCard}
      </div>
    );
  }
);

AdSection.displayName = "AdSection";

export default AdSection;
