export class CoinGeko {
  baseUrl = "https://api.coingecko.com/api/v3";
  vs_currencies = "inr,usd";
  async getSimplePrice(ids: string) {
    const res = await fetch(
      `${this.baseUrl}/simple/price?ids=${ids}&vs_currencies=${this.vs_currencies}`
    );
    return await res.json();
  }
  async searchTranding() {
    console.log("fetching trending");
    const res = await fetch(`${this.baseUrl}/search/trending`);
    if (!res.ok) throw new Error("Unable to fetch the coin details");
    return await res.json();
  }
}
