"use client";
export async function shopFetch(input: RequestInfo | URL, init?: RequestInit) {
  try {
    return await fetch(input, init);
  } catch {
    throw new Error(
      "Yhteys katkesi. Tarkista tilauksen tila ennen uutta maksuyritystä.",
    );
  }
}
export async function shopJson(response: Response) {
  if (!response.headers.get("content-type")?.includes("application/json"))
    throw new Error(
      "Palvelu ei juuri nyt vastaa. Yritä hetken kuluttua uudelleen.",
    );
  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error(
      "Vastausta ei voitu käsitellä. Tarkista tilauksen tila ennen uutta maksuyritystä.",
    );
  }
  if (!response.ok)
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "Pyyntöä ei voitu käsitellä.",
    );
  return data;
}
