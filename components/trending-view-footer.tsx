import { Coin, Trendings } from "@/types/gecko";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import PercentViewer from "./percent-viewer";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  trendings: Trendings;
}

const TrendingViewFooter: React.FC<Props> = ({
  trendings,
  className,
  ...rest
}) => {
  const { coins } = trendings;
  const reversedCoins = coins.map((_, i) => coins[coins.length - 1 - i]);
  return (
    <div className={cn("w-full p-8 bg-card flex flex-col gap-6", className)}>
      <p className="text-xl font-bold mb-4 md:mb-8 "> You May Also Like</p>
      <TrendingCarosel coins={coins} />
      <TrendingCarosel coins={reversedCoins} />
    </div>
  );
};

export default TrendingViewFooter;

interface TrendingCaroselProps {
  coins: Coin[];
}

const TrendingCarosel: React.FC<TrendingCaroselProps> = ({ coins }) => {
  return (
    <Carousel className="my-2">
      <CarouselContent>
        {coins.map((coin) => (
          <CoinConponent key={coin.item.id} coin={coin} />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

interface CoinProps {
  coin: Coin;
}

const CoinConponent: React.FC<CoinProps> = ({ coin }) => {
  return (
    <CarouselItem className="max-w-[18rem]">
      <Link href={`/${coin.item.id}`}>
        <Card>
          <CardHeader className="flex items-center flex-row gap-1 w-full">
            <Image
              width={200}
              height={200}
              src={coin.item.large}
              alt={coin.item.name}
              className="w-8 rounded-full"
            />
            <p>{coin.item.name}</p>
            <PercentViewer
              variant="mini"
              percent={coin.item.data.price_change_percentage_24h.usd}
            />
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">
              {coin.item.data.price.split("<")[0]}
            </p>
            <Image
              width={200}
              height={200}
              className="w-auto h-12 m-auto"
              src={coin.item.data.sparkline}
              alt={coin.item.name}
            />
          </CardContent>
        </Card>
      </Link>
    </CarouselItem>
  );
};
