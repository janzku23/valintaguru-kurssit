import "server-only";
import { SHOP_SELLER } from "@/data/shop/seller";
import { createHash } from "node:crypto";
function required(name: string) {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Puuttuva palvelinasetus: ${name}`);
  return value;
}
export function shopRequestConfig() {
  const site = new URL(required("NEXT_PUBLIC_SITE_URL"));
  if (
    site.pathname !== "/" ||
    site.search ||
    site.hash ||
    site.username ||
    site.password
  )
    throw new Error("NEXT_PUBLIC_SITE_URL tarvitsee pelkän alkuperän.");
  if (
    site.protocol !== "https:" &&
    !(
      (process.env.PAYTRAIL_MODE === "test" ||
        process.env.NODE_ENV === "development") &&
      site.protocol === "http:" &&
      site.hostname === "localhost"
    )
  )
    throw new Error("Kauppa tarvitsee HTTPS-osoitteen.");
  const internalSecret = required("SHOP_INTERNAL_SECRET");
  if (internalSecret.length < 32)
    throw new Error("SHOP_INTERNAL_SECRET tarvitsee vähintään 32 merkkiä.");
  return { site: site.origin, internalSecret };
}
export function shopConfig() {
  const merchant = required("PAYTRAIL_MERCHANT_ID"),
    secret = required("PAYTRAIL_SECRET_KEY");
  const mode = required("PAYTRAIL_MODE");
  if (mode !== "test" && mode !== "production")
    throw new Error("PAYTRAIL_MODE ei kelpaa.");
  if (!/^\d+$/.test(merchant))
    throw new Error("Virheellinen Paytrail-kauppiastunnus.");
  const { site: origin, internalSecret } = shopRequestConfig();
  if (mode === "production" && !origin.startsWith("https://"))
    throw new Error("Kauppa tarvitsee HTTPS-osoitteen.");
  // Fingerprint is validation only; usable merchant credentials always come from protected environment variables.
  const isOfficialSandbox =
    createHash("sha256").update(`${merchant}:${secret}`).digest("hex") ===
    "04bdf724142d886ec7281c3df9e4f1c3fde02e4d3e5dd56ef1ca867db2a56ecd";
  if (mode === "test" && !isOfficialSandbox)
    throw new Error(
      "Testitila sallii vain Paytrailin julkisen testikauppiaan.",
    );
  if (
    mode === "production" &&
    (isOfficialSandbox ||
      process.env.SHOP_LIVE_ENABLED !== "true" ||
      process.env.VERCEL_ENV === "preview")
  )
    throw new Error("Oikea rahaliikenne on estetty julkaisuasetuksilla.");
  const supabase = new URL(required("NEXT_PUBLIC_SUPABASE_URL"));
  if (supabase.hostname.split(".")[0] !== required("SHOP_SUPABASE_PROJECT_REF"))
    throw new Error(
      "Supabase-ympäristö ei vastaa kaupan vahvistettua projektia.",
    );
  if (mode === "production" && process.env.SHOP_LEGAL_REVIEWED !== "true")
    throw new Error("Osto- ja toimitusehdot on vahvistettava ennen tuotantoa.");
  if (
    mode === "production" &&
    !(
      process.env.SHOP_SELLER_POSTAL_ADDRESS?.trim() ||
      SHOP_SELLER.postalAddress
    )
  )
    throw new Error("Myyjän postiosoite on vahvistettava ennen tuotantoa.");
  return { merchant, secret, mode, site: origin, internalSecret } as const;
}
