"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, memo } from "react";
import { Button } from "./ui/button";

function TradingViewWidget({
  className,
  symbol,
  name,
}: {
  className?: string;
  symbol: string;
  name: string;
}) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "width": "100%",
          "height": "500",
          "symbol": "BITSTAMP:${symbol ?? "BTC"}USD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "gridColor": "rgba(182, 215, 168, 0.06)",
          "hide_top_toolbar": true,
          "hide_legend": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    const currentContainer = container.current;

    if (currentContainer) {
      currentContainer.appendChild(script);
    }
    return () => {
      if (currentContainer && script.parentNode === currentContainer) {
        currentContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <div>
      <div className="flex justify-between flex-col lg:flex-row px-5 items-start lg:items-center">
        <h2 className="text-xl font-semibold my-2">
          {" "}
          {name} Price Chart (USD)
        </h2>
        <div className="flex items-center gap-2  ml-auto lg:ml-none">
          {["1H", "24H", "7D", "1M", "3M"].map((time) => (
            <Button
              variant="ghost"
              className={cn(
                " p-1  px-3 leading-3 rounded-full h-auto hover:bg-primary/20",
                time === "7D" && "bg-primary/10 text-primary"
              )}
              key={time}
            >
              {time}
            </Button>
          ))}
        </div>
      </div>
      <div
        className={cn(
          "tradingview-widget-container bg-white border border-transparent px-5 ",
          className
        )}
        ref={container}
        style={{
          height: "40vh",
          width: "100%",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{
            width: "100%",
          }}
        ></div>
        <div className="tradingview-widget-copyright"></div>
      </div>
    </div>
  );
}
export default memo(TradingViewWidget);
