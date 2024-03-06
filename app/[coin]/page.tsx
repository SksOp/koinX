import { searchTranding } from "@/actions/coin-geko";
import AdSection from "@/components/ad-section";
import ArrowDouble from "@/components/icons/arrow-double";
import { Trendings } from "@/types/gecko";
import React from "react";

async function page({ params }: { params: { coin: string } }) {
  const trendings: Trendings = await searchTranding();
  return (
    <>
      <div className="flex justify-start  pt-8 items-center text-lg">
        <p className="opacity-70">Cryptocurrencies</p>
        <ArrowDouble className="w-4 h-4 mx-2" />
        <p>{params.coin[0].toUpperCase() + params.coin.slice(1)}</p>
      </div>
      <div className="md:grid md:grid-cols-7 p-3">
        <div className="md:col-span-5">{}</div>
        <div className="hidden md:block col-span-2">
          <AdSection trendings={trendings} />
        </div>
      </div>
    </>
  );
}

export default page;
