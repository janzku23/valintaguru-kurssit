import "server-only";
import { shopSender } from "@/data/shop/seller";
import { db } from "./server";
import { shopConfig } from "./config";
import { paytrail } from "./paytrail";
import {
  sellerAddress,
  shopSettingStatuses,
  type ShopSettingsStatus,
} from "./settings-model";

export async function shopSettingsStatus(): Promise<ShopSettingsStatus> {
  const env = process.env;
  let configurationOk = false;
  let configurationDetail =
    "Täydennä tuotannon asetukset Vercelissä ja julkaise uudelleen.";
  try {
    shopConfig();
    configurationOk = true;
    configurationDetail = "Palvelinasetusten tarkistus läpäisty.";
  } catch {
    // Return only our own stable message, never raw configuration/provider/database errors.
  }
  const production =
    env.PAYTRAIL_MODE === "production" && env.VERCEL_ENV === "production";
  let databaseOk = false,
    environmentMatches = false,
    environmentEmpty = false,
    products = 0,
    incompatibleOrders = true;
  try {
    const client = db();
    const [environment, catalog, conflicting] = await Promise.all([
      client
        .from("shop_environment")
        .select("mode,project_ref,merchant_id")
        .eq("id", true)
        .maybeSingle(),
      client
        .from("shop_products")
        .select("id", { count: "exact", head: true })
        .eq("published", true)
        .eq("visible", true)
        .eq("reviewed", true)
        .eq("archived", false),
      client
        .from("shop_orders")
        .select("id", { count: "exact", head: true })
        .or(
          `mode.neq.production,merchant_id.neq.${/^\d+$/.test(env.PAYTRAIL_MERCHANT_ID ?? "") ? env.PAYTRAIL_MERCHANT_ID : "unset"}`,
        ),
    ]);
    databaseOk = !environment.error && !catalog.error && !conflicting.error;
    if (databaseOk) {
      const marker = environment.data;
      environmentEmpty = !marker;
      environmentMatches =
        !!marker &&
        marker.mode === env.PAYTRAIL_MODE &&
        marker.merchant_id === env.PAYTRAIL_MERCHANT_ID?.trim() &&
        marker.project_ref === env.SHOP_SUPABASE_PROJECT_REF?.trim();
      products = catalog.count ?? 0;
      incompatibleOrders = (conflicting.count ?? 0) > 0;
    }
  } catch {}
  const emailOk =
    !!env.RESEND_API_KEY?.trim() && !!shopSender(env.SUPPORT_FROM_EMAIL);
  const workerOk = (env.CRON_SECRET?.trim().length ?? 0) >= 32;
  const canRun =
    production &&
    configurationOk &&
    databaseOk &&
    !incompatibleOrders &&
    products > 0 &&
    emailOk &&
    workerOk;
  return {
    deployment:
      env.VERCEL_ENV === "production"
        ? "Vercel Production"
        : env.VERCEL_ENV === "preview"
          ? "Vercel Preview"
          : "Paikallinen kehitys",
    mode: env.PAYTRAIL_MODE === "production" ? "production" : "test",
    merchantId: /^\d+$/.test(env.PAYTRAIL_MERCHANT_ID?.trim() ?? "")
      ? env.PAYTRAIL_MERCHANT_ID!.trim()
      : null,
    site: safeOrigin(env.NEXT_PUBLIC_SITE_URL),
    sellerAddress: sellerAddress(env),
    settings: shopSettingStatuses(env),
    checks: [
      {
        id: "deployment",
        label: "Tuotantoympäristö",
        ok: production,
        detail: production
          ? "Production-julkaisu ja tuotantomaksutila."
          : "Tee käyttöönotto Vercelin Production-julkaisussa; paikallinen tai Preview-julkaisu ei aktivoi tuotantomaksuja.",
      },
      {
        id: "configuration",
        label: "Palvelinasetukset",
        ok: configurationOk,
        detail: configurationDetail,
      },
      {
        id: "database",
        label: "Tietokantayhteys",
        ok: databaseOk && !incompatibleOrders,
        detail: !databaseOk
          ? "Kaupan tietokantatarkistus epäonnistui."
          : incompatibleOrders
            ? "Kannassa on eri maksuympäristön tai kauppiaan tilauksia. Ympäristöä ei vaihdeta automaattisesti."
            : "Kaupan taulut löytyvät eikä kannassa ole ristiriitaisia tilauksia.",
      },
      {
        id: "marker",
        label: "Maksuympäristön kytkentä",
        ok: environmentMatches,
        detail: environmentMatches
          ? "Tietokanta vastaa tämän julkaisun maksuympäristöä ja kauppiasta."
          : environmentEmpty
            ? "Kytkentä puuttuu. Aktivoi tuotantokauppa, kun muut kohdat ovat kunnossa."
            : "Tietokannan kytkentä poikkeaa asetuksista. Nykyistä kytkentää ei korvata.",
      },
      {
        id: "products",
        label: "Julkaistut tuotteet",
        ok: products > 0,
        detail: `${products} julkaistua tuotetta.`,
      },
      {
        id: "email",
        label: "Tilaussähköpostien asetukset",
        ok: emailOk,
        detail: emailOk
          ? "Resend-avain ja lähettäjä asetettu. Viestin saapuminen ja Auth SMTP on testattava erikseen."
          : "RESEND_API_KEY puuttuu.",
      },
      {
        id: "worker",
        label: "Toimitusjonon suojaus",
        ok: workerOk,
        detail: workerOk
          ? "CRON_SECRET asetettu. Varmista lisäksi viiden minuutin ajastimen toiminta. Nykyinen Vercel-ajastus vaatii Pro-/Enterprise-tason; Hobby ei tue tätä ajoväliä."
          : "Aseta erillinen vähintään 32 merkin CRON_SECRET.",
      },
    ],
    environmentMatches,
    canActivate: canRun && environmentEmpty,
    active: canRun && environmentMatches,
  };
}
function safeOrigin(value: string | undefined) {
  try {
    const url = new URL(value ?? "");
    return ["https:", "http:"].includes(url.protocol) ? url.origin : null;
  } catch {
    return null;
  }
}

// An explicit owner action only. No payment, refund, user account or entitlement is created here.
export async function activateProductionShop() {
  const before = await shopSettingsStatus();
  if (before.active) return before;
  if (!before.canActivate)
    throw new Error(
      "Tuotannon asetukset eivät ole vielä valmiit. Tarkista käyttöönoton kohdat.",
    );
  const config = shopConfig();
  // A signed read-only provider request proves that these credentials work before binding the database.
  await paytrail("GET", "/merchants/payment-providers");
  const client = db();
  const result = await client.from("shop_environment").insert({
    id: true,
    mode: "production",
    merchant_id: config.merchant,
    project_ref: process.env.SHOP_SUPABASE_PROJECT_REF!.trim(),
  });
  if (result.error) {
    // A concurrent identical activation is safe; a different binding is never overwritten.
    const concurrent = await shopSettingsStatus();
    if (concurrent.active) return concurrent;
    throw new Error(
      "Tuotantokytkentää ei voitu tallentaa. Nykyisiä asetuksia ei korvattu.",
    );
  }
  const event = await client.from("shop_events").insert({
    kind: "production_environment_initialized",
    reference_id: config.merchant,
  });
  if (event.error) console.error("shop_environment_audit_failed");
  return shopSettingsStatus();
}
