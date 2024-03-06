"use server";

import { SimplePriceINRandUSD, Trendings } from "@/types/gecko";

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
 * @returns {Promise<SimplePriceINRandUSD | null>} A promise that resolves to the price data in INR and USD
 *                                                 if the query is successful and the currency is found.
 *                                                 Returns null if the currency is not found or the identifier is invalid.
 * @throws {Error} If the input `id` contains a comma  or if there is a failure in fetching data from the external API.
 */
export async function getSingleSimplePrice(id: string) {
  const vs_currencies = "inr,usd";
  if (id.includes(","))
    throw new Error("This function just fetch one at a time");

  const res = await fetch(
    `${baseUrl}/simple/price?ids=${id}&vs_currencies=${vs_currencies}`
  );
  if (!res.ok) throw new Error("Unable to fetch the coin details");
  const data = (await res.json()) as SimplePriceINRandUSD;
  if (!data[id]) {
    // coin geko simply return empty object for unknown values
    return null;
  }
  return data;
}
