"use server";
const baseUrl = "https://api.coingecko.com/api/v3";
export async function searchTranding() {
  const res = await fetch(`${baseUrl}/search/trending`);
  if (!res.ok) throw new Error("Unable to fetch the coin details");
  return await res.json();
}

export async function getSimplePrice(ids: string) {
  const vs_currencies = "inr,usd";
  const res = await fetch(
    `${baseUrl}/simple/price?ids=${ids}&vs_currencies=${vs_currencies}`
  );
  if (!res.ok) throw new Error("Unable to fetch the coin details");
  return await res.json();
}
