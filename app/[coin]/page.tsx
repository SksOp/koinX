import {
  getCoinData,
  getSingleSimplePrice,
  searchTranding,
} from "@/actions/coin-geko";
import AdSection from "@/components/ad-section";
import ArrowDouble from "@/components/icons/arrow-double";
import TableCard from "@/components/table-card";
import { Trendings } from "@/types/gecko";
import React from "react";

async function page({ params }: { params: { coin: string } }) {
  const trendings = await searchTranding();
  const coin = await getCoinData(params.coin);
  return (
    <>
      <div className="flex justify-start  pt-8 items-center text-lg">
        <CoinPath coin={params.coin} />
      </div>
      <div className="md:grid md:grid-cols-7 p-3 gap-6">
        <div className="md:col-span-5">
          <TableCard coin={coin} />
        </div>
        <div className="hidden md:block col-span-2">
          <AdSection trendings={trendings} />
        </div>
      </div>
    </>
  );
}

export default page;

const CoinPath = ({ coin }: { coin: string }) => (
  <>
    <p className="opacity-70">Cryptocurrencies</p>
    <ArrowDouble className="w-4 h-4 mx-2" />
    <p>{coin[0].toUpperCase() + coin.slice(1)}</p>
  </>
);
