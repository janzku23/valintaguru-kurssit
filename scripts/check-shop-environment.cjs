// Run with: node --env-file=.env.local scripts/check-shop-environment.cjs
const load = require("./shop-test-loader.cjs")();
(async () => {
  try {
    const c = load("lib/shop/config.ts").shopConfig();
    for (const name of [
      "NEXT_PUBLIC_SUPABASE_ANON_KEY",
      "SUPABASE_SERVICE_ROLE_KEY",
      "RESEND_API_KEY",
      "CRON_SECRET",
    ])
      if (!process.env[name]) throw Error("Missing " + name);
    if (process.env.CRON_SECRET.length < 32)
      throw Error("CRON_SECRET needs 32+ characters");
    if (c.site === "http://localhost:3000")
      console.log(
        "LOCAL_ONLY: Paytrail callbacks need a public HTTPS preview URL.",
      );
    const { createClient } = require("@supabase/supabase-js");
    const db = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
      { auth: { persistSession: false, autoRefreshToken: false } },
    );
    const { data, error } = await db.rpc("shop_check_environment", {
      p_mode: c.mode,
      p_merchant: c.merchant,
      p_ref: process.env.SHOP_SUPABASE_PROJECT_REF,
    });
    if (error || data !== true)
      throw Error("Database environment marker/migration does not match.");
    const products = await db
      .from("shop_products")
      .select("id")
      .eq("published", true)
      .eq("archived", false);
    if (products.error) throw Error("Cannot read catalog.");
    const api = load("lib/shop/paytrail.ts");
    const providers = await api.paytrail("GET", "/merchants/payment-providers");
    console.log(
      JSON.stringify(
        {
          mode: c.mode,
          origin: c.site,
          databaseMarkerVerified: true,
          publishedProducts: products.data.length,
          paytrailSignedProvidersVerified: true,
          requestId: providers.requestId,
          notice:
            "SMTP delivery, callback reachability and end-to-end payment still require a real sandbox test.",
        },
        null,
        2,
      ),
    );
  } catch (e) {
    console.error("SHOP_CHECK_FAILED:", e.message);
    process.exitCode = 1;
  }
})();
