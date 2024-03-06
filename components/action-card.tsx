import { Trendings } from "@/types/gecko";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import HeroIllustration from "./assets/illustrations";
import Arrow from "./icons/arrow";
import { Button } from "./ui/button";

interface ActionCards extends React.HTMLProps<HTMLDivElement> {}

const ActionCards: React.FC<ActionCards> = ({ ...props }) => {
  return (
    <Card className="bg-[#0052FE] rounded-2xl" {...props}>
      <CardHeader>
        <p className="text-2xl font-bold text-center text-card leading-[170%]">
          Get Started with KoinX for FREE
        </p>
      </CardHeader>
      <CardContent className="items-center flex flex-col gap-8">
        <p className="text-sm text-center text-card  leading-[170%]">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <HeroIllustration />
      </CardContent>
      <CardFooter>
        <Button variant="secondary" className="bg-card text-foreground m-auto">
          Get Started for FREE
          <Arrow className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ActionCards;
