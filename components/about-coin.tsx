import { CoinData } from "@/types/gecko";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { Button } from "./ui/button";
import Arrow from "./icons/arrow";

interface Props extends React.HTMLProps<HTMLDivElement> {
  coin: CoinData;
}

const AboutTab: React.FC<Props> = ({ coin, ...props }) => {
  const actionCardOne = (
    <div className="flex gap-8 items-center bg-primary rounded-lg p-4  md:flex-grow  bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD]  ">
      <Image
        src="/images/b.png"
        width={300}
        height={300}
        className=" w-32 h-32 md:w-40 md:h-40"
        alt="Calculate profit"
      />
      <div className="flex flex-col gap-2 pr-32 ">
        <p className="text-card font-bold text-xl md:text-3xl">
          Calculate your Profit
        </p>
        <Button
          variant="secondary"
          className="bg-card text-foreground max-w-min"
        >
          Check Now
          <Arrow className="w-8 h-4 hidden md:block" />
        </Button>
      </div>
    </div>
  );
  const actionCardTwo = (
    <div className="flex gap-8 items-center bg-primary rounded-lg p-4  flex-grow  bg-gradient-to-br from-[#FF9865] to-[#EF3031]  ">
      <Image
        src="/images/a.png"
        width={300}
        height={300}
        className="w-32 h-32 md:w-40 md:h-40"
        alt="Calculate profit"
      />
      <div className="flex flex-col gap-2 pr-32 ">
        <p className="text-card font-bold  text-xl md:text-3xl">
          Calculate your tax liability
        </p>
        <Button
          variant="secondary"
          className="bg-card text-foreground max-w-min"
        >
          Check Now
          <Arrow className="w-8 h-4 hidden md:block" />
        </Button>
      </div>
    </div>
  );
  return (
    <Card className="mt-8 " {...props}>
      <CardHeader>
        <p className="text-xl font-bold">About {coin.name}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <p className="font-semibold">What is {coin.name}?</p>
        {/* <p>{coin.description.en}</p> */}
        <p dangerouslySetInnerHTML={{ __html: coin.description.en }} />
        <Separator />
        <p className="font-semibold">Lorem ipsum dolor sit amet</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          reprehenderit aspernatur suscipit vitae ea, molestias sequi error
          quaerat ullam culpa impedit adipisci blanditiis commodi a eos, soluta,
          voluptatem saepe officiis? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Recusandae reprehenderit aspernatur suscipit vitae
          ea, molestias sequi error quaerat ullam culpa impedit adipisci
          blanditiis commodi a eos, soluta, voluptatem saepe officiis?
          <br />
          <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Recusandae reprehenderit aspernatur suscipit vitae ea, molestias sequi
          error quaerat ullam culpa impedit adipisci blanditiis commodi a eos,
          soluta, voluptatem saepe officiis? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Recusandae reprehenderit aspernatur
          suscipit vitae ea, molestias sequi error quaerat ullam culpa impedit
          adipisci blanditiis commodi a eos, soluta, voluptatem saepe officiis?
          <br />
          <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Recusandae reprehenderit aspernatur suscipit vitae ea, molestias sequi
          error quaerat ullam culpa impedit adipisci blanditiis commodi a eos,
          soluta, voluptatem saepe officiis? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Recusandae reprehenderit aspernatur
          suscipit vitae ea, molestias sequi error quaerat ullam culpa impedit
          adipisci blanditiis commodi a eos, soluta, voluptatem saepe officiis?
          <br />
          <br />
        </p>
        <Separator />
        <p className="font-semibold">Already holding Bitcoin</p>
        <div className="flex md:flex-row flex-col gap-4">
          {actionCardOne}
          {actionCardTwo}
        </div>
        <Separator />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          reprehenderit aspernatur suscipit vitae ea, molestias sequi error
          quaerat ullam culpa impedit adipisci blanditiis commodi a eos, soluta,
          voluptatem saepe officiisLorem ipsum dolor sit amet consectetur,
          adipisicing elit. Recusandae reprehenderit aspernatur suscipit vitae
          ea, molestias sequi error quaerat ullam culpa impedit adipisci
          blanditiis commodi a eos, soluta, voluptatem saepe officiis
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutTab;
