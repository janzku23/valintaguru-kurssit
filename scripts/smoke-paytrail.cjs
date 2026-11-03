// Isolated sandbox API test. It NEVER pays, creates Auth users, or connects to Supabase.
const fs = require("node:fs"),
  path = require("node:path"),
  { randomUUID } = require("node:crypto");
const core = require("./shop-test-loader.cjs")()("lib/shop/core.ts");
const env = Object.fromEntries(
  fs
    .readFileSync(path.join(__dirname, "../.env.example"), "utf8")
    .split("\n")
    .filter((l) => l.startsWith("PAYTRAIL_"))
    .map((l) => l.split("=")),
);
if (env.PAYTRAIL_MODE !== "test" || env.PAYTRAIL_MERCHANT_ID !== "375917")
  throw Error("Only official public sandbox credentials are allowed.");
async function call(method, route, body = "", tx) {
  const fields = {
    "checkout-account": env.PAYTRAIL_MERCHANT_ID,
    "checkout-algorithm": "sha256",
    "checkout-method": method,
    "checkout-nonce": randomUUID(),
    "checkout-timestamp": new Date().toISOString(),
  };
  if (tx) fields["checkout-transaction-id"] = tx;
  const r = await fetch("https://services.paytrail.com" + route, {
    method,
    headers: {
      ...fields,
      signature: core.signature(fields, body, env.PAYTRAIL_SECRET_KEY),
      "Content-Type": "application/json; charset=utf-8",
      "platform-name": "valintaguru-integration-test",
    },
    ...(body ? { body } : {}),
    signal: AbortSignal.timeout(20000),
  });
  const raw = await r.text();
  if (
    !core.verifySignature(
      Object.fromEntries(r.headers),
      raw,
      env.PAYTRAIL_SECRET_KEY,
      r.headers.get("signature") || "",
    )
  )
    throw Error("Response HMAC invalid");
  if (!r.ok) throw Error("Paytrail HTTP " + r.status);
  return { data: JSON.parse(raw), requestId: r.headers.get("request-id") };
}
(async () => {
  const stamp = randomUUID();
  const reference = "1";
  const { safePaytrailHref } = require("./shop-test-loader.cjs")()("lib/shop/paytrail.ts");
  const created = await call(
    "POST",
    "/payments",
    JSON.stringify({
      stamp,
      reference,
      amount: 100,
      currency: "EUR",
      language: "FI",
      customer: { email: "test@example.org" },
      items: [
        {
          unitPrice: 100,
          units: 1,
          vatPercentage: 25.5,
          productCode: "isolated-api-test",
        },
      ],
      redirectUrls: {
        success: "https://example.org/return",
        cancel: "https://example.org/return",
      },
    }),
  );
  const tx = created.data.transactionId;
  safePaytrailHref(created.data.href, tx);
  const got = await call("GET", "/payments/" + tx, "", tx);
  core.assertPaymentMatch(got.data, {
    transactionId: tx,
    amount: 100,
    currency: "EUR",
    stamp,
    reference,
  });
  console.log(
    JSON.stringify(
      {
        test: "REAL Paytrail sandbox API create + GET",
        transactionId: tx,
        createRequestId: created.requestId,
        getRequestId: got.requestId,
        status: got.data.status,
        providers: created.data.providers?.length,
        signaturesVerified: true,
        paymentCompleted: false,
        callbackTested: false,
        fullShopE2E: false,
      },
      null,
      2,
    ),
  );
})().catch((e) => {
  console.error("PAYTRAIL_SMOKE_FAILED", e.message);
  process.exitCode = 1;
});
