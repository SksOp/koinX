"use client";
import { CoinData } from "@/types/gecko";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import Image from "next/image";
import TradingViewWidget from "./trading-view-widget";
import PercentViewer from "./percent-viewer";
import { numberToIndianString } from "@/lib/utils";

interface TableCardProps extends React.HTMLProps<HTMLDivElement> {
  coin: CoinData;
}

const TableCard: React.FC<TableCardProps> = ({ coin, ...props }) => {
  return (
    <>
      <div
        className="flex flex-col bg-card min-h-[60vh] rounded-2xl "
        {...props}
      >
        <CardHeader className="flex flex-col gap-2 md:gap-8 mb-4">
          <Header
            img={coin.image.large}
            name={coin.name}
            symbol={coin.symbol}
            rank={coin.market_data.market_cap_rank}
          />
          <CoinEvaluation
            usd={coin.market_data.current_price.usd}
            inr={coin.market_data.current_price.inr}
            change_24h={
              coin.market_data.price_change_percentage_24h_in_currency.usd
            }
          />
        </CardHeader>
        {/* <div className="flex-grow"> */}
        <TradingViewWidget symbol={coin.symbol} name={coin.name} />
        {/* </div> */}
      </div>
    </>
  );
};

export default TableCard;

interface HeaderProps {
  img: string;
  name: string;
  symbol: string;
  rank: number;
}
const Header: React.FC<HeaderProps> = (data) => {
  const { img, name, symbol, rank } = data;
  return (
    <div className="flex items-center gap-2">
      <Image
        src={img}
        alt={name}
        className="w-8 h-8 rounded-full"
        width={400}
        height={400}
      />
      <p className=" text-lg font-bold">{name}</p>
      <p className=" text-xs opacity-70 font-semibold">
        {symbol.toUpperCase()}
      </p>
      <div className="p-2 rounded-md bg-slate-500/90 ml-4">
        <p className="text-md text-background font-semibold">Rank: #{rank}</p>
      </div>
    </div>
  );
};

interface CoinEvaluationProps {
  usd: number;
  inr: number;
  change_24h: number;
}
const CoinEvaluation: React.FC<CoinEvaluationProps> = (data) => {
  const { usd, inr, change_24h } = data;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex md:items-center gap-2 md:gap-4 flex-col-reverse md:flex-row items-start">
        <p className="text-md text-4xl font-semibold">
          ${numberToIndianString(usd)}
        </p>
        <div className="w-2" />
        <div className="flex items center gap-4">
          <PercentViewer percent={change_24h} />
          <p className="opacity-40 font-semibold">(24H)</p>
        </div>
      </div>
      <p>₹ {numberToIndianString(inr)}</p>
    </div>
  );
};
