export class CoinGeko {
  baseUrl = "https://api.coingecko.com/api/v3";
  vs_currencies = "inr,usd";
  getSimplePrice(ids: string) {
    return `${this.baseUrl}/simple/price?ids=${ids}&vs_currencies=${this.vs_currencies}`;
  }
  searchTranding() {
    return `${this.baseUrl}/search/trending`;
  }
}
