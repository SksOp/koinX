import {
  getCoinData,
  getSingleSimplePrice,
  searchTranding,
} from "@/actions/coin-geko";
import AboutTab from "@/components/about-coin";
import AdSection from "@/components/ad-section";
import DetailsTab from "@/components/details-tab";
import ArrowDouble from "@/components/icons/arrow-double";
import Sentiment from "@/components/sentiment";
import TableCard from "@/components/table-card";
import React from "react";

async function page({ params }: { params: { coin: string } }) {
  const trendings = await searchTranding();
  const coin = await getCoinData(params.coin);
  return (
    <>
      <div className="flex justify-start px-4 pt-4  md:pt-8 items-center text-lg">
        <CoinPath coin={params.coin} />
      </div>
      <div className="md:grid md:grid-cols-7 p-3 gap-6">
        <div className="md:col-span-5">
          <TableCard coin={coin} />
          <DetailsTab coin={coin} />
          <Sentiment />
          <AboutTab coin={coin} />
        </div>

        <div className="mt-4 md:mt-0 md:block col-span-2">
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
