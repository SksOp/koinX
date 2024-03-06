import { CoinData } from "@/types/gecko";
import { Card, CardContent, CardHeader } from "./ui/card";

interface Props extends React.HTMLProps<HTMLDivElement> {
  coin: CoinData;
}

const AboutTab: React.FC<Props> = ({ coin, ...props }) => {
  return (
    <Card className="mt-8 " {...props}>
      <CardHeader>
        <p className="text-xl font-bold">About {coin.name}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <p className="font-semibold">What is {coin.name}?</p>
        <p>{coin.description.en}</p>
        <p className="font-semibold">Lorem ipsum dolor sit amet</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          reprehenderit aspernatur suscipit vitae ea, molestias sequi error
          quaerat ullam culpa impedit adipisci blanditiis commodi a eos, soluta,
          voluptatem saepe officiis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          reprehenderit aspernatur suscipit vitae ea, molestias sequi error
          quaerat ullam culpa impedit adipisci blanditiis commodi a eos, soluta,
          voluptatem saepe officiis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          reprehenderit aspernatur suscipit vitae ea, molestias sequi error
          quaerat ullam culpa impedit adipisci blanditiis commodi a eos, soluta,
          voluptatem saepe officiis?
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutTab;
