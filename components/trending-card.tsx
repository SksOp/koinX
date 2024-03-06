import { Trendings } from "@/types/gecko";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import PercentViewer from "./percent-viewer";
import { Separator } from "./ui/separator";
import Link from "next/link";
interface TrendingCardProps extends React.HTMLProps<HTMLDivElement> {
  trendings: Trendings;
}
const TrendingCard: React.FC<TrendingCardProps> = ({ trendings, ...props }) => {
  return (
    <Card className="border-none rounded-2xl" {...props}>
      <CardHeader>Trending Coins (24h)</CardHeader>
      <CardContent className="gap-4 flex flex-col">
        {trendings.coins.splice(0, 3).map((coin) => (
          <Link
            href={`/${coin.item.id}`}
            key={coin.item.id}
            className="flex lg:items-center lg:gap-4 md:gap-1 md:flex-col lg:flex-row md:items-start cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <Image
                src={coin.item.large}
                alt={coin.item.name}
                className="w-6 h-6 rounded-full"
                width={400}
                height={400}
              />
              <div className="flex gap-1 items-center">
                <p className="text-sm font-regular font-medium">
                  {coin.item.name} {`(${coin.item.symbol})`}
                </p>
              </div>
            </div>
            <div className="flex-grow" />
            <PercentViewer
              percent={coin.item.data.price_change_percentage_24h.inr}
            />
            <Separator className="hidden md:block lg:hidden mt-3" />
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};

export default TrendingCard;
