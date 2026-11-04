import { paytrail } from "@/lib/shop/paytrail";
import { bodyOf, guardRequest } from "@/lib/shop/server";

export const runtime = "nodejs";

// The official banner includes nine banks, Visa, Mastercard, MobilePay, Walley and Klarna.
const bannerLogos = [
  "osuuspankki",
  "nordea",
  "danske",
  "spankki",
  "pop",
  "omasp",
  "aktia",
  "saastopankki",
  "alandsbanken",
  "visa",
  "mastercard",
  "mobilepay",
  "walley",
  "klarna",
];
const mobileLogoIds = new Set(["siirto", "apple-pay", "google-pay"]);
const headers = { "Cache-Control": "no-store" };

export async function POST(request: Request) {
  try {
    await guardRequest(request, "payment-methods", 60);
    const { amount } = await bodyOf(request);
    if (
      typeof amount !== "number" ||
      !Number.isSafeInteger(amount) ||
      amount < 1 ||
      amount > 99999998
    )
      return Response.json(
        { banner: false, logos: [] },
        { status: 400, headers },
      );
    const { data } = await paytrail<{ name: string; svg: string }[]>(
      "GET",
      `/merchants/payment-providers?amount=${amount}`,
    );
    const logos = data
      .filter(
        ({ name, svg }) =>
          typeof name === "string" &&
          typeof svg === "string" &&
          /^https:\/\/resources\.paytrail\.com\/images\/payment-method-logos\/[a-z0-9-]+\.svg(?:\?v=\d+)?$/.test(
            svg,
          ),
      )
      .map(({ name, svg }) => ({ name, svg }));
    const logoId = ({ svg }: (typeof logos)[number]) =>
      new URL(svg).pathname.split("/").pop()?.replace(/\.svg$/, "") ?? "";
    const available = new Set(logos.map(logoId));
    const banner = bannerLogos.every((logo) => available.has(logo));
    const individualLogos = banner
      ? logos.filter((logo) => mobileLogoIds.has(logoId(logo)))
      : logos;
    return Response.json({ banner, logos: individualLogos }, { headers });
  } catch {
    return Response.json({ banner: false, logos: [] }, { headers });
  }
}
