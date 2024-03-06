"use client";
import { CoinData } from "@/types/gecko";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { cn, numberToIndianString } from "@/lib/utils";
import { Triangle } from "./assets/triangle";
import { Warning } from "./assets/warning";

interface DetailsTabProps extends React.HTMLProps<HTMLDivElement> {
  coin: CoinData;
}

const SECTIONS = [
  "Overview",
  "Fundamanetals",
  "News Insights",
  "Sentimentals",
  "Team",
  "Technicals",
  "Tokenomics",
];

interface Data {
  title: string;
  description?: string;
  additionalPercent?: number;
  value?: number | string;
}

const DetailsTab: React.FC<DetailsTabProps> = ({ coin, ...props }) => {
  const [selected, setSelected] = React.useState(SECTIONS[0]);
  const FUNDAMENTALSDATA: Data[] = [
    {
      title: `${coin.name} Price`,
      value: `$ ${numberToIndianString(coin.market_data.current_price.usd)}`,
    },
    {
      title: "Market Cap",
      value: `$ ${numberToIndianString(coin.market_data.market_cap.usd)}`,
    },
    {
      title: "24h Low / 24h High",
      value: `$ ${numberToIndianString(
        coin.market_data.low_24h.usd
      )} / $ ${numberToIndianString(coin.market_data.high_24h.usd)}`,
    },

    {
      title: "Market Cap Dominance",
      value: "38.343%",
    },
    {
      title: "7d Low / 7d High",
      value: "$16,382.07 / $16,874.12",
    },
    {
      title: "Volume / Market Cap",
      value: "0.0718",
    },
    {
      title: "Trading Volume",
      value: "$16,382.07",
    },
    {
      title: "All-Time High",
      value: "$20,089.00",
      additionalPercent: -75.6,
      description: "Nov 10, 2021 (about 1 year)",
    },
    {
      title: "Market Cap Rank",
      value: coin.market_data.market_cap_rank,
    },

    {
      title: "All-Time Low",
      value: "$67.81",
      additionalPercent: 24000,
      description: "Jul 05, 2013 (about 8 years)",
    },
  ];
  return (
    <div className="mt-8 flex flex-col gap-4" {...props}>
      <ScrollArea className="w-full whitespace-nowrap rounded-md ">
        <div className="flex w-max space-x-4 border-b-2">
          {SECTIONS.map((section) => (
            <div
              key={section}
              className=" cursor-pointer"
              onClick={() => setSelected(section)}
            >
              <p className="p-1 min-w-max">{section}</p>
              {selected === section && <div className="h-1 mt-1 bg-primary" />}
            </div>
          ))}
          {/* for now I am just showing only one card for each section */}
        </div>
        <ScrollBar />
      </ScrollArea>
      <SectionCard section={selected} coin={coin} data={FUNDAMENTALSDATA} />
    </div>
  );
};

export default DetailsTab;

interface SectionCardProps {
  section: string;
  coin: CoinData;
  data: Data[];
}

const SectionCard: React.FC<SectionCardProps> = ({ section, coin, data }) => {
  return (
    <Card>
      <CardHeader>
        <p className="text-xl font-bold">Performance</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <PerformanceMeter coin={coin} period="Today's" />
        <PerformanceMeter coin={coin} period="52W" />
        <div className="flex gap-3 items-center">
          <p className="text-lg font-semibold">Fundamentals</p>
          <Warning className="w-6 h-6" />
        </div>
        <div className="grid grid-cols-1 gap-x-20 gap-4 md:grid-cols-2">
          {data.map((item) => (
            <FundamentalsChild key={item.title} {...item} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const PerformanceMeter: React.FC<{
  coin: CoinData;
  period: "Today's" | "52W";
}> = ({ coin, period }) => {
  const currentHighAndLow =
    (coin.market_data.current_price.usd - coin.market_data.low_24h.usd) /
    (coin.market_data.high_24h.usd - coin.market_data.low_24h.usd);
  const percent = Math.round(currentHighAndLow * 100);
  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-3 flex-col  items-start">
        <p className="text-xs opacity-60 ">{period + " Low"}</p>
        <p className="text-sm">
          $ {numberToIndianString(coin.market_data.low_24h.usd)}
        </p>
      </div>
      <div className="flex-grow relative h-1 bg-gradient-to-r from-red-400 to-green-400 rounded-full">
        {/* add a triangle to point to that percent */}
        <div className={cn("absolute top-2 ")} style={{ left: `${percent}%` }}>
          <Triangle className={cn("w-3 h-2 aspect-[1/5] text-black")} />
        </div>
      </div>
      <div className="flex gap-3 flex-col  items-start">
        <p className="text-xs opacity-60 ">{period + " High"}</p>
        <p className="text-sm">
          $ {numberToIndianString(coin.market_data.high_24h.usd)}
        </p>
      </div>
    </div>
  );
};

const FundamentalsChild: React.FC<Data> = ({
  title,
  value,
  description,
  additionalPercent,
}) => {
  return (
    <div className="flex justify-between items-center border-b-2 h-12 w-full">
      <p className="text-sm  opacity-70">{title}</p>
      <div className="flex flex-col items-end">
        <p className="text-sm font-semibold">
          {value}
          {additionalPercent && (
            <span
              className={cn(
                "text-xs pl-2",
                additionalPercent > 0 ? "text-green-500" : "text-red-500"
              )}
            >
              {additionalPercent > 0 ? "+" : ""}
              {additionalPercent}%
            </span>
          )}
        </p>
        {description && <p className="text-xs opacity-70">{description}</p>}
      </div>
    </div>
  );
};
