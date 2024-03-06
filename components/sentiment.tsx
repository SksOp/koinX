import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Warning } from "./assets/warning";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { cn } from "@/lib/utils";
import { Analytics } from "./assets/analytics";
import { News } from "./assets/news";
import { ClassValue } from "clsx";

const Sentiment: React.FC<{}> = ({ ...props }) => {
  return (
    <Card className="mt-8 " {...props}>
      <CardHeader>
        <p className="text-xl font-bold">Sentiment</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex gap-3 items-center">
          <p className="text-lg font-semibold">Key Events</p>
          <Warning className="w-6 h-6" />
        </div>
        <SentimentCrosel />
        <div className="flex gap-3 items-center">
          <p className="text-lg font-semibold">Analytics Estimates</p>
          <Warning className="w-6 h-6" />
        </div>
        <AnalyticsEstimates />
      </CardContent>
    </Card>
  );
};

export default Sentiment;

const SentimentCrosel = () => (
  <Carousel>
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, i) => (
        <CarouselItem
          key={i}
          className={cn(
            "flex w-14 items-start  max-w-[28rem] rounded-md ml-4 p-4",
            i % 2 ? " bg-green-400/10" : " bg-blue-400/10"
          )}
        >
          <div
            className={cn(
              "bg-white rounded-full aspect-square p-3",
              i % 2 ? " bg-green-500" : " bg-blue-500"
            )}
          >
            {i % 2 ? (
              <Analytics className="w-8 h-8 " />
            ) : (
              <News className="w-8 h-8  " />
            )}
          </div>
          <div className="flex flex-col gap-2 ml-4">
            <p className="text-lg font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              enim.
            </p>
            <p className="text-sm opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ipsa corrupti ratione magni eum ducimus doloribus deserunt,
              molestias asperiores, praesentium nemo obcaecati dicta illum
              aliquam laborum ea, recusandae enim quaerat?
            </p>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

const AnalyticsEstimates = () => (
  <div className="flex items-center gap-5">
    <div className="w-32 h-32 aspect-square  text-green-500 flex items-center justify-center bg-green-400/10 rounded-full  ">
      <p className="text-4xl font-bold ">76</p>
      <span className="text-lg font-normal">%</span>
    </div>
    <div className="flex flex-col w-full gap-4 mt-4 md:mt-0">
      <BarGraph title="Buy" percent={"76"} colorClass="bg-green-500" />
      <BarGraph title="Hold" percent={"8"} colorClass="bg-gray-500/20" />
      <BarGraph title="Sell" percent={"16"} colorClass="bg-red-500" />
    </div>
  </div>
);

const BarGraph = (data: {
  title: string;
  percent: string;
  colorClass: string;
  className?: ClassValue;
}) => {
  console.log(`w-[${90}%]`);
  return (
    <div className={cn(" gap-4 md:gap-7 w-full flex ", data.className)}>
      <p className="text-sm font-semibold w-6 opacity-35">{data.title}</p>
      <div className="flex relative flex-grow  gap-4 items-center">
        <div
          className={cn(data.colorClass, " h-2 rounded-sm")}
          style={{ width: `${data.percent}%` }}
        />
        <p className="text-sm font-semibold opacity-35">{data.percent}%</p>
      </div>
    </div>
  );
};
