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

export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  market_data: {
    current_price: {
      inr: number;
      usd: number;
    };
    price_change_percentage_24h_in_currency: {
      inr: number;
      usd: number;
    };
    market_cap_rank: number;
    market_cap: {
      inr: number;
      usd: number;
    };
    // 24h Low / 24h High
    low_24h: {
      inr: number;
      usd: number;
    };
    high_24h: {
      inr: number;
      usd: number;
    };
  };
}
