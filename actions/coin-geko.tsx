"use server";
const baseUrl = "https://api.coingecko.com/api/v3";
export async function searchTranding() {
  const res = await fetch(`${baseUrl}/search/trending`);
  if (!res.ok) throw new Error("Unable to fetch the coin details");
  return await res.json();
}
