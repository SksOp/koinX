"use server";

import { CoinData, SimplePriceINRandUSD, Trendings } from "@/types/gecko";

const baseUrl = "https://api.coingecko.com/api/v3";
/**
 *
 *
 * @export
 * @return {Promise<Trendings>}
 * @throws {Error} If there is a failure in fetching data from the external API.
 */
export async function searchTranding() {
  const res = await fetch(`${baseUrl}/search/trending`);
  if (!res.ok) throw new Error("Unable to fetch the coin details");
  return (await res.json()) as Trendings;
}
/**
 * * A function to fetch simple price one at a time
 * for both usd and inr. I changed this based on our wn use case
 *
 * @export
 * @param {string} id A single currncy name
 * @returns {Promise<SimplePriceINRandUSD >} A promise that resolves to the price data in INR and USD
 * @throws {Error} If the input `id` contains a comma  or if there is a failure in fetching data from the external API.
 */
export async function getSingleSimplePrice(id: string) {
  const vs_currencies = "inr,usd";
  if (id.includes(","))
    throw new Error("This function just fetch one at a time");

  const res = await fetch(
    `${baseUrl}/simple/price?ids=${id}&vs_currencies=${vs_currencies}&include_24hr_change=true`
  );
  if (!res.ok) throw new Error("Unable to fetch the coin details");
  const data = (await res.json()) as SimplePriceINRandUSD;

  return data;
}
/**
 *
 *
 * @export
 * @param {string} id The id of the coin
 * @return {CoinData} Contains Market information of the coina and simple details like logo
 */
export async function getCoinData(id: string) {
  const res = await fetch(
    `${baseUrl}/coins/${id}?localization=en&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`
  );
  if (!res.ok) throw new Error("Unable to fetch the coin details");
  return (await res.json()) as CoinData;
}
