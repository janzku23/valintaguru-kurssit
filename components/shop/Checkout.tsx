"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import {
  checkoutConsent,
  checkoutConsentVersion,
} from "@/lib/shop/checkout-consent";
import {
  accessDuration,
  money,
  type Product,
  type Quote,
} from "@/lib/shop/types";
import { SHOP_SELLER } from "@/data/shop/seller";
import { shopFetch, shopJson } from "./client-api";
import { useCart } from "./cart";
import PaymentMethods from "./PaymentMethods";

async function post(path: string, body: string, signal?: AbortSignal) {
  const response = await shopFetch(`/api/shop/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    signal,
  });
  return shopJson(response);
}

export default function Checkout({
  products,
  checkout = false,
  paymentAvailable = true,
  sellerAddress = SHOP_SELLER.postalAddress,
}: {
  products: Product[];
  checkout?: boolean;
  paymentAvailable?: boolean;
  sellerAddress?: string;
}) {
  const { ids, setIds, ready } = useCart();
  const [code, setCode] = useState("");
  const [appliedCode, setAppliedCode] = useState("");
  const [quoteResult, setQuoteResult] = useState<{
    key: string;
    quote?: Quote;
    error?: string;
  }>();
  const [quoteVersion, setQuoteVersion] = useState(0);
  const [paymentError, setPaymentError] = useState("");
  const [busy, setBusy] = useState(false);
  const submitting = useRef(false);
  const fingerprint = JSON.stringify({ productIds: ids, code: appliedCode });
  const quoteKey = `${quoteVersion}:${fingerprint}`;
  const quote = quoteResult?.key === quoteKey ? quoteResult.quote : undefined;
  const quoteError =
    quoteResult?.key === quoteKey ? quoteResult.error : undefined;
  const hasDigital = quote?.items.some(
    (item) => item.legal_kind === "digital_content",
  );
  const hasService = quote?.items.some((item) => item.legal_kind === "service");

  useEffect(() => {
    if (!ids.length) return;
    const controller = new AbortController();
    post("quote", fingerprint, controller.signal)
      .then((data: Quote) => {
        if (!controller.signal.aborted)
          setQuoteResult({ key: quoteKey, quote: data });
      })
      .catch((error: unknown) => {
        if (!controller.signal.aborted)
          setQuoteResult({
            key: quoteKey,
            error:
              error instanceof Error
                ? error.message
                : "Hintaa ei saatu tarkistettua.",
          });
      });
    return () => controller.abort();
  }, [fingerprint, ids.length, quoteKey]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!paymentAvailable || !quote || submitting.current) return;
    const form = new FormData(event.currentTarget);
    if (form.get("terms") !== "on" || form.get("immediate") !== "on") return;
    submitting.current = true;
    setBusy(true);
    setPaymentError("");
    try {
      const storageKey = `vg-checkout:${fingerprint}:${String(form.get("email")).trim().toLowerCase()}`;
      let key = sessionStorage.getItem(storageKey);
      if (!key) {
        key = crypto.randomUUID();
        sessionStorage.setItem(storageKey, key);
      }
      const result = await post(
        "checkout",
        JSON.stringify({
          productIds: ids,
          code: appliedCode,
          email: form.get("email"),
          name: form.get("name"),
          terms: true,
          immediate: true,
          withdrawalAck: hasDigital === true,
          serviceAck: hasService === true,
          consentVersion: checkoutConsentVersion,
          expectedAmount: quote.amount_cents,
          key,
        }),
      );
      try {
        localStorage.setItem("vg-last-order", result.orderId);
      } catch {
        // Order navigation remains available if the browser denies storage.
      }
      window.location.assign(
        result.href ?? `/kauppa/tilaus?order=${result.orderId}`,
      );
    } catch (error) {
      setPaymentError(
        error instanceof Error
          ? error.message
          : "Maksun aloittaminen epäonnistui.",
      );
      submitting.current = false;
      setBusy(false);
    }
  }

  if (!ready)
    return (
      <main className="vg-shop-loading" role="status">
        Ladataan ostoskoria…
      </main>
    );
  const rows = ids.map((id) => ({
    id,
    product: products.find((product) => product.id === id),
    item: quote?.items.find((item) => item.product_id === id),
  }));
  const unavailable = rows.some(({ product }) => !product);

  return (
    <main className="vg-shop-section vg-checkout">
      <h1>{checkout ? "Kassa" : "Ostoskori"}</h1>
      {!ids.length ? (
        <div className="vg-checkout-empty">
          <p>Ostoskorisi on tyhjä.</p>
          <Link href="/kauppa" className="vg-shop-btn">
            Katso kursseja
          </Link>
        </div>
      ) : (
        <div
          className={`vg-checkout-grid ${checkout ? "" : "vg-checkout-cart"}`}
        >
          <section
            className="vg-shop-panel vg-checkout-summary"
            aria-labelledby="vg-order-heading"
          >
            <h2 id="vg-order-heading">Tilauksesi</h2>
            {rows.map(({ id, product, item }) => (
              <div className="vg-shop-line" key={id}>
                <div>
                  <strong>
                    {product ? (
                      <Link
                        href={`/kauppa/${product.slug}`}
                        target="_blank"
                        rel="noopener"
                      >
                        {item?.name ?? product.name}
                      </Link>
                    ) : (
                      "Tuote ei enää ole myynnissä"
                    )}
                  </strong>
                  {product && (
                    <small className="vg-shop-muted">
                      Sis. ALV{" "}
                      {new Intl.NumberFormat("fi-FI").format(
                        item?.vat_percentage ?? product.vat_percentage ?? 0,
                      )}{" "}
                      %
                      {item &&
                        ` · ${money(Math.round((item.total_cents * item.vat_percentage) / (100 + item.vat_percentage)))}`}
                      {product.access_days !== null &&
                        ` · Käyttöoikeus ${accessDuration(product.access_days)}`}
                    </small>
                  )}
                  {!checkout && (
                    <button
                      type="button"
                      aria-label={`Poista ${product?.name ?? "tuote"} korista`}
                      onClick={() =>
                        setIds(ids.filter((value) => value !== id))
                      }
                    >
                      Poista
                    </button>
                  )}
                </div>
                {product && (
                  <strong>
                    {money(
                      item?.total_cents ??
                        product.sale_price_cents ??
                        product.price_cents,
                    )}
                  </strong>
                )}
              </div>
            ))}
            {checkout && (
              <details className="vg-checkout-discount">
                <summary>
                  Alennuskoodi{appliedCode ? ` · ${appliedCode}` : ""}
                </summary>
                <form
                  className="vg-shop-form"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setAppliedCode(code.trim().toUpperCase());
                    setQuoteVersion((version) => version + 1);
                    setPaymentError("");
                  }}
                >
                  <label htmlFor="vg-discount">Koodi</label>
                  <div className="vg-checkout-code">
                    <input
                      id="vg-discount"
                      value={code}
                      onChange={(event) => setCode(event.target.value)}
                      maxLength={40}
                      disabled={busy}
                    />
                    <button
                      className="vg-shop-btn secondary"
                      type="submit"
                      disabled={busy}
                    >
                      Käytä
                    </button>
                  </div>
                  {appliedCode && (
                    <button
                      type="button"
                      className="vg-checkout-text-button"
                      disabled={busy}
                      onClick={() => {
                        setCode("");
                        setAppliedCode("");
                        setPaymentError("");
                      }}
                    >
                      Poista koodi
                    </button>
                  )}
                </form>
              </details>
            )}
            {quote ? (
              <>
                {quote.discount_cents > 0 && (
                  <p className="vg-shop-muted">
                    Alennus {money(quote.discount_cents)}
                  </p>
                )}
                <div className="vg-shop-total">
                  <span>Yhteensä</span>
                  <span>{money(quote.amount_cents)}</span>
                </div>
                <small className="vg-shop-muted">Ei toimituskuluja.</small>
              </>
            ) : (
              !quoteError && <p role="status">Tarkistetaan hintaa…</p>
            )}
            {quoteError && (
              <p role="alert" className="vg-shop-error">
                {quoteError}
              </p>
            )}
            {unavailable && checkout && (
              <p>
                <Link href="/kauppa/ostoskori">
                  Poista myynnistä poistuneet tuotteet ostoskorista
                </Link>
              </p>
            )}
            {checkout ? (
              <div className="vg-checkout-seller">
                <small>
                  {SHOP_SELLER.name} · Y-tunnus {SHOP_SELLER.businessId}
                </small>
                <small>
                  {sellerAddress} ·{" "}
                  <a href={`mailto:${SHOP_SELLER.email}`}>
                    {SHOP_SELLER.email}
                  </a>
                </small>
              </div>
            ) : (
              <div className="vg-shop-actions">
                {quote && !unavailable && (
                  <Link href="/kauppa/kassa" className="vg-shop-btn">
                    Siirry kassalle
                  </Link>
                )}
                <Link href="/kauppa" className="vg-shop-btn secondary">
                  Jatka kurssien selailua
                </Link>
              </div>
            )}
          </section>
          {checkout && (
            <form
              className="vg-shop-panel vg-shop-form vg-checkout-form"
              onSubmit={submit}
            >
              <h2>Tilaajan tiedot</h2>
              <label>
                Nimi
                <input
                  name="name"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={160}
                />
              </label>
              <label>
                Sähköpostiosoite
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                />
              </label>
              <small className="vg-shop-muted">
                Kurssioikeus liitetään tähän sähköpostiosoitteeseen.
              </small>
              <h2>Tilausehdot</h2>
              <label className="vg-shop-check">
                <input name="terms" type="checkbox" required />
                <span>
                  Olen lukenut ja hyväksyn{" "}
                  <Link
                    href="/ehdot/palautuskaytanto"
                    target="_blank"
                    rel="noopener"
                  >
                    peruutusehdot
                  </Link>{" "}
                  sekä kurssin{" "}
                  <Link href="/kauppa/ehdot" target="_blank" rel="noopener">
                    käyttöehdot
                  </Link>
                  . Ymmärrän, että kurssi ja sen materiaalit on tarkoitettu vain
                  henkilökohtaiseen käyttööni, eikä materiaaleja tai
                  käyttäjätunnuksia saa jakaa ulkopuolisille.
                </span>
              </label>
              {quote && (
                <label className="vg-shop-check" key={quoteKey}>
                  <input name="immediate" type="checkbox" required />
                  <span>
                    {checkoutConsent.immediate}{" "}
                    {hasDigital && checkoutConsent.digital}{" "}
                    {hasService && checkoutConsent.service}
                  </span>
                </label>
              )}
              <small>
                <Link
                  href="/ehdot/tietosuojakaytanto"
                  target="_blank"
                  rel="noopener"
                >
                  Tietosuojakäytäntö
                </Link>
              </small>
              <h2>Maksaminen</h2>
              {quote && (
                <PaymentMethods
                  key={quote.amount_cents}
                  amount={quote.amount_cents}
                />
              )}
              {!paymentAvailable && (
                <p className="vg-shop-muted" role="status">
                  Maksaminen ei ole käytössä tässä ympäristössä.
                </p>
              )}
              {paymentError && (
                <p className="vg-shop-error" role="alert">
                  {paymentError}
                </p>
              )}
              <button
                className="vg-shop-btn"
                type="submit"
                disabled={!paymentAvailable || !quote || busy || unavailable}
              >
                {busy
                  ? "Avataan Paytrailia…"
                  : `Tilaa ja maksa${quote ? ` ${money(quote.amount_cents)}` : ""}`}
              </button>
            </form>
          )}
        </div>
      )}
    </main>
  );
}
