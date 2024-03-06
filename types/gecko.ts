export interface Trendings {
  coins: Coin[];
}
export interface Coin {
  item: Item;
}
export interface Item {
  id: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  small: string;
  large: string;
  data: Data;
}

export interface Data {
  price_change_percentage_24h: {
    inr: number;
    usd: number;
  };
}

export interface SimplePriceINRandUSD {
  [key: string]: {
    inr: number;
    inr_24h_change: number;
    usd: number;
    usd_24h_change: number;
  };
}
