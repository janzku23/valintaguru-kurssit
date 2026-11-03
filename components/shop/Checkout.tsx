"use client";
import { shopFetch, shopJson } from "./client-api";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { useCart } from "./cart";
import {
  accessDuration,
  money,
  type Product,
  type Quote,
} from "@/lib/shop/types";
async function post(path: string, body: unknown) {
  const response = await shopFetch(`/api/shop/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await shopJson(response);
  if (!response.ok) throw new Error(data.error ?? "Pyyntö epäonnistui.");
  return data;
}
export default function Checkout({
  products,
  checkout = false,
  paymentAvailable = true,
}: {
  products: Product[];
  checkout?: boolean;
  paymentAvailable?: boolean;
}) {
  const { ids, setIds, ready } = useCart();
  const [code, setCode] = useState("");
  const [appliedCode, setAppliedCode] = useState("");
  const [quote, setQuote] = useState<Quote | null>(null),
    [quotedKey, setQuotedKey] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const fingerprint = useMemo(
    () => JSON.stringify({ productIds: ids, code: appliedCode }),
    [ids, appliedCode],
  );
  useEffect(() => {
    if (!ids.length) return;
    const controller = new AbortController();
    shopFetch("/api/shop/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: fingerprint,
      signal: controller.signal,
    })
      .then(async (response) => {
        const data = await shopJson(response);
        if (!response.ok)
          throw new Error(data.error ?? "Hintatietoja ei saatu.");
        return data as Quote;
      })
      .then((data) => {
        setQuote(data);
        setQuotedKey(fingerprint);
        setError("");
      })
      .catch((e) => {
        if (!controller.signal.aborted) setError(e.message);
      });
    return () => controller.abort();
  }, [fingerprint, ids.length]);
  const fresh = quotedKey === fingerprint && !!quote;
  const hasDigital =
    quote?.items.some((i) => i.legal_kind === "digital_content") ?? false;
  const unavailable = ids.filter((id) => !products.some((p) => p.id === id));
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!paymentAvailable || !fresh || !quote || busy) return;
    setBusy(true);
    setError("");
    const form = new FormData(e.currentTarget);
    try {
      // Retain idempotency key across an ambiguous network retry; a changed cart gets a new key.
      const storageKey = `vg-checkout:${fingerprint}:${String(form.get("email")).trim().toLowerCase()}`;
      let key = sessionStorage.getItem(storageKey);
      if (!key) {
        key = crypto.randomUUID();
        sessionStorage.setItem(storageKey, key);
      }
      const result = await post("checkout", {
        productIds: ids,
        code: appliedCode,
        email: form.get("email"),
        name: form.get("name"),
        terms: form.get("terms") === "on",
        immediate: form.get("immediate") === "on",
        withdrawalAck: form.get("withdrawalAck") === "on",
        expectedAmount: quote.amount_cents,
        key,
      });
      // Basket intentionally survives failed/cancelled payments; fulfillment never depends on localStorage.
      localStorage.setItem("vg-last-order", result.orderId);
      window.location.assign(
        result.href ?? `/kauppa/tilaus?order=${result.orderId}`,
      );
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Maksun aloittaminen epäonnistui.",
      );
      setBusy(false);
    }
  }
  if (!ready)
    return (
      <main className="vg-shop-loading" role="status">
        Ladataan ostoskoria…
      </main>
    );
  return (
    <main className="vg-shop-section">
      <p className="vg-shop-eyebrow vg-shop-muted">
        {checkout ? "02 / Kassa" : "01 / Ostoskori"}
      </p>
      <h1>{checkout ? "Melkein valmista." : "Oma kurssivalintasi."}</h1>
      <p className="vg-shop-muted">
        {checkout
          ? "Sinun ei tarvitse rekisteröityä. Käytä sähköpostia, jolla haluat kirjautua kursseillesi."
          : "Yksi kurssioikeus riittää. Saman kurssin sisältäviä tuotteita ei voi ostaa samaan tilaukseen."}
      </p>
      {!ids.length ? (
        <div className="vg-shop-note">
          <h2>Ostoskorisi on vielä tyhjä</h2>
          <p>
            Valitse tavoitteeseesi sopiva valmennus ja palaa sitten kassalle.
          </p>
          <div className="vg-shop-actions">
            <Link href="/kauppa" className="vg-shop-btn">
              Tutustu kursseihin →
            </Link>
          </div>
        </div>
      ) : (
        <div className="vg-shop-columns">
          <section className="vg-shop-panel">
            {checkout ? (
              <form className="vg-shop-form" id="vg-checkout" onSubmit={submit}>
                <h2>Asiakastiedot</h2>
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
                <p className="vg-shop-muted">
                  Jos sinulla on jo tunnus, ostamasi kurssit lisätään sille.
                  Tarkista omat kurssisi ennen tilaamista, jotta et osta samaa
                  kurssia tarpeettomasti uudelleen.
                </p>
                <h2>Toimitus ja hyväksynnät</h2>
                <label className="vg-shop-check">
                  <input name="terms" type="checkbox" required />
                  <span>
                    Hyväksyn{" "}
                    <Link href="/kauppa/ehdot" target="_blank">
                      osto- ja toimitusehdot
                    </Link>{" "}
                    ja olen tutustunut{" "}
                    <Link href="/ehdot/tietosuojakaytanto" target="_blank">
                      tietosuojakäytäntöön
                    </Link>
                    .
                  </span>
                </label>
                <label className="vg-shop-check">
                  <input name="immediate" type="checkbox" required />
                  <span>
                    Pyydän kurssin tai palvelun toimituksen aloittamista heti
                    maksun vahvistamisen jälkeen ennen 14 päivän peruuttamisajan
                    päättymistä. Palvelun peruuttamisesta voidaan lain
                    edellytysten täyttyessä periä suoritusta vastaava
                    kohtuullinen korvaus.
                  </span>
                </label>
                {hasDigital && (
                  <label className="vg-shop-check">
                    <input name="withdrawalAck" type="checkbox" required />
                    <span>
                      Hyväksyn, että sähköisesti toimitettavan digitaalisen
                      sisällön peruuttamisoikeus päättyy, kun toimitus
                      aloitetaan suostumuksellani. Tämä ei automaattisesti
                      poista opetusta tai muuta palvelua koskevaa
                      peruuttamisoikeutta.
                    </span>
                  </label>
                )}
                <p className="vg-shop-muted">
                  Vahvistamme nämä suostumukset tilausvahvistuksessa. Tietosi
                  eivät liity markkinointilupaan.
                </p>
              </form>
            ) : (
              <>
                <h2>Valitut kurssit</h2>
                {ids.map((id) => {
                  const p = products.find((p) => p.id === id);
                  return (
                    <div key={id} className="vg-shop-line">
                      <div>
                        <strong>
                          {p?.name ?? "Tuote ei enää ole myynnissä"}
                        </strong>
                        <small className="vg-shop-muted">
                          Määrä 1
                          {p && p.access_days !== null
                            ? ` · Käyttöoikeus ${accessDuration(p.access_days)}`
                            : ""}
                        </small>
                        <br />
                        <button
                          onClick={() => setIds(ids.filter((x) => x !== id))}
                        >
                          Poista korista
                        </button>
                      </div>
                      <strong>
                        {p ? money(p.sale_price_cents ?? p.price_cents) : "—"}
                      </strong>
                    </div>
                  );
                })}
                <div className="vg-shop-actions">
                  <Link href="/kauppa" className="vg-shop-btn secondary">
                    Jatka kurssien selailua
                  </Link>
                </div>
              </>
            )}
          </section>
          <aside className="vg-shop-panel">
            <h2>Tilausyhteenveto</h2>
            {fresh &&
              quote?.items.map((i) => (
                <div className="vg-shop-line" key={i.product_id}>
                  <div>
                    <strong>{i.name}</strong>
                    <small className="vg-shop-muted">
                      {i.access_days !== null &&
                        `${accessDuration(i.access_days)} · `}
                      ALV {i.vat_percentage} %
                      <br />
                      {i.legal_kind === "service"
                        ? "Opetusta / palvelu"
                        : "Digitaalinen sisältö"}
                    </small>
                  </div>
                  <strong>{money(i.total_cents)}</strong>
                </div>
              ))}
            <form
              className="vg-shop-form"
              style={{ marginTop: 20 }}
              onSubmit={(e) => {
                e.preventDefault();
                setAppliedCode(code.trim().toUpperCase());
              }}
            >
              <label htmlFor="vg-discount">Alennuskoodi</label>
              <div style={{ display: "flex", gap: 8 }}>
                <input
                  id="vg-discount"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  maxLength={40}
                  placeholder="Syötä koodi"
                />
                <button className="vg-shop-btn secondary" type="submit">
                  Käytä
                </button>
              </div>
              {appliedCode && (
                <button
                  type="button"
                  onClick={() => {
                    setCode("");
                    setAppliedCode("");
                  }}
                >
                  Poista koodi
                </button>
              )}
            </form>
            {fresh && quote && (
              <>
                <div className="vg-shop-line">
                  <span>Välisumma</span>
                  <span>{money(quote.subtotal_cents)}</span>
                </div>
                {quote.discount_cents > 0 && (
                  <div className="vg-shop-line">
                    <span>Alennus</span>
                    <span>−{money(quote.discount_cents)}</span>
                  </div>
                )}
                <div className="vg-shop-total">
                  <span>Yhteensä</span>
                  <span>{money(quote.amount_cents)}</span>
                </div>
                <small className="vg-shop-muted">
                  Sisältää tuotekohtaisen ALV:n. Ei toimituskuluja.
                </small>
              </>
            )}
            {!fresh && !error && <p role="status">Tarkistetaan hinnat…</p>}
            {error && (
              <p className="vg-shop-error" role="alert">
                {error}
              </p>
            )}
            {unavailable.length > 0 && (
              <div className="vg-shop-error">
                Poista korista tuotteet, jotka eivät enää ole myynnissä.{" "}
                <Link href="/kauppa/ostoskori">Muokkaa ostoskoria</Link>
              </div>
            )}
            {checkout && !paymentAvailable && (
              <p className="vg-shop-note" role="status">
                Maksaminen ei ole vielä käytössä tässä ympäristössä. Voit
                tarkistaa tilauksesi tiedot, mutta maksua ei veloiteta.
              </p>
            )}
            <div className="vg-shop-actions">
              {checkout ? (
                <button
                  className="vg-shop-btn"
                  type="submit"
                  form="vg-checkout"
                  disabled={
                    !paymentAvailable || !fresh || busy || !!unavailable.length
                  }
                >
                  {busy
                    ? "Avataan Paytrailia…"
                    : `Tilaa ja maksa ${quote ? money(quote.amount_cents) : ""}`}
                </button>
              ) : fresh && !unavailable.length ? (
                <Link href="/kauppa/kassa" className="vg-shop-btn">
                  Jatka kassalle →
                </Link>
              ) : (
                <button className="vg-shop-btn" disabled>
                  Jatka kassalle →
                </button>
              )}
            </div>
            {checkout && (
              <p
                className="vg-shop-muted"
                style={{ fontSize: 13, marginTop: 18 }}
              >
                Valitset käytettävissä olevan verkkopankin, kortin tai muun
                maksutavan seuraavaksi Paytrailin suojatulla maksusivulla.
                Maksun jälkeen palaat tilauksesi seurantaan.
              </p>
            )}
          </aside>
        </div>
      )}
    </main>
  );
}
