import { Trendings } from "@/types/gecko";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import PercentViewer from "./percent-viewer";
interface TrendingCardProps extends React.HTMLProps<HTMLDivElement> {
  trendings: Trendings;
}
const TrendingCard: React.FC<TrendingCardProps> = ({ trendings, ...props }) => {
  return (
    <Card className="border-none rounded-2xl" {...props}>
      <CardHeader>Trending Coins (24h)</CardHeader>
      <CardContent className="gap-4 flex flex-col">
        {trendings.coins.splice(0, 3).map((coin) => (
          <div key={coin.item.id} className="flex items-center  gap-4">
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
            <div className="flex-grow" />
            <PercentViewer
              percent={coin.item.data.price_change_percentage_24h.inr}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TrendingCard;
