import { SHOP_SELLER } from "@/data/shop/seller";

export type SettingStatus = {
  name: string;
  label: string;
  configured: boolean;
  secret: boolean;
  instruction: string;
};
export type ShopCheck = {
  id: string;
  label: string;
  ok: boolean;
  detail: string;
};
export type ShopSettingsStatus = {
  deployment: string;
  mode: string;
  merchantId: string | null;
  site: string | null;
  sellerAddress: string;
  settings: SettingStatus[];
  checks: ShopCheck[];
  environmentMatches: boolean;
  canActivate: boolean;
  active: boolean;
};

// Explicit allow-list: secret values, raw environment objects and provider errors never leave the server.
export function shopSettingStatuses(
  env: Record<string, string | undefined>,
): SettingStatus[] {
  const definitions: [string, string, boolean, string][] = [
    [
      "RESEND_API_KEY",
      "Resend-tilausviestit",
      true,
      "Nykyinen Resend API -avain Production-ympäristössä, Secret/Sensitive.",
    ],
    [
      "SUPPORT_FROM_EMAIL",
      "Sähköpostin lähettäjän korvaus",
      false,
      "Valinnainen. Oletuksena nykyisen integraation ValintaGuru <info@valintaguru.fi>. Varmista lähettäjädomain Resendissä.",
    ],
    [
      "PAYTRAIL_MERCHANT_ID",
      "Paytrail merchant ID",
      false,
      "Oma kauppiastunnuksesi Paytrailista.",
    ],
    [
      "PAYTRAIL_SECRET_KEY",
      "Paytrail secret",
      true,
      "Oma Paytrail-secret. Valitse Vercelissä Secret/Sensitive; älä käytä NEXT_PUBLIC-etuliitettä.",
    ],
    [
      "PAYTRAIL_MODE",
      "Maksutila",
      false,
      "Tuotantoon production. Testitunnukset jäävät Development/Preview-ympäristöihin.",
    ],
    [
      "NEXT_PUBLIC_SITE_URL",
      "Kaupan osoite",
      false,
      "https://www.valintaguru.fi",
    ],
    [
      "SHOP_SUPABASE_PROJECT_REF",
      "Supabase-projektiviite",
      false,
      "Tuotantoprojektin viite; sen on vastattava nykyistä Supabase-osoitetta.",
    ],
    [
      "SHOP_INTERNAL_SECRET",
      "Kaupan palvelinsalaisuus",
      true,
      "Oma satunnainen vähintään 32 merkin arvo, Secret/Sensitive.",
    ],
    [
      "CRON_SECRET",
      "Toimitusjonon palvelinsalaisuus",
      true,
      "Eri satunnainen vähintään 32 merkin arvo, Secret/Sensitive.",
    ],
    [
      "SHOP_LEGAL_REVIEWED",
      "Ehtojen vahvistus",
      false,
      "true vasta kun yritys on tarkistanut osto- ja toimitusehdot, ALV:n sekä opetuksen toimitustiedot.",
    ],
    [
      "SHOP_LIVE_ENABLED",
      "Tuotantomaksujen salliminen",
      false,
      "true kun tuotannon käyttöönotto on hyväksytty. Aktivointi tarkistaa lisäksi tunnukset ja tietokannan.",
    ],
  ];
  return definitions.map(([name, label, secret, instruction]) => ({
    name,
    label,
    secret,
    instruction,
    configured: !!env[name]?.trim(),
  }));
}
export function sellerAddress(env: Record<string, string | undefined>) {
  return env.SHOP_SELLER_POSTAL_ADDRESS?.trim() || SHOP_SELLER.postalAddress;
}
