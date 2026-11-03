"use client";
import { shopFetch, shopJson } from "./client-api";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { accessDuration, money, type PublicOrder } from "@/lib/shop/types";
export default function OrderStatus({ id }: { id: string }) {
  const [order, setOrder] = useState<PublicOrder | null>(null),
    [error, setError] = useState(""),
    [busy, setBusy] = useState(false);
  const refresh = useCallback(
    async (check = false) => {
      try {
        const r = await shopFetch("/api/shop/status", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orderId: id, refresh: check }),
        });
        const data = await shopJson(r);
        if (!r.ok) throw new Error(data.error);
        setOrder(data);
        setError("");
      } catch (e) {
        setError(e instanceof Error ? e.message : "Tilaa ei saatu haettua.");
      }
    },
    [id],
  );
  useEffect(() => {
    const first = setTimeout(() => void refresh(), 0);
    const timer = setInterval(() => void refresh(), 15000);
    return () => {
      clearTimeout(first);
      clearInterval(timer);
    };
  }, [refresh]);
  async function retry() {
    setBusy(true);
    try {
      const r = await shopFetch("/api/shop/retry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId: id }),
      });
      const data = await shopJson(r);
      if (!r.ok) throw new Error(data.error);
      window.location.assign(data.href);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Uusi yritys epäonnistui.");
      setBusy(false);
    }
  }
  const paid = !!order && order.status !== "unpaid",
    failed = order?.payment_status === "fail",
    refunded = order?.status === "refunded";
  return (
    <main className="vg-shop-section">
      <section
        className="vg-shop-panel"
        style={{ maxWidth: 760, margin: "20px auto" }}
      >
        <div className="vg-shop-status-icon">
          {paid ? (refunded ? "↩" : "✓") : failed ? "!" : "…"}
        </div>
        <p className="vg-shop-eyebrow vg-shop-muted">
          Tilauksen seuranta {order ? `#${order.number}` : ""}
        </p>
        <h1>
          {!order
            ? "Tarkistetaan tilausta…"
            : refunded
              ? "Maksu on palautettu."
              : paid
                ? "Maksusi on vahvistettu."
                : failed
                  ? "Maksu ei onnistunut."
                  : "Maksu odottaa vahvistusta."}
        </h1>
        {order && (
          <>
            {order.mode === "test" && (
              <p className="vg-shop-note">Tämä on testitilaus.</p>
            )}
            <p className="vg-shop-muted">
              {refunded
                ? "Katso palautuksen tiedot sähköpostistasi. Muista tilauksista ja ylläpidolta saamasi oikeudet säilyvät."
                : paid
                  ? order.fulfillment_status === "delivered"
                    ? "Kurssioikeutesi on lisätty käyttäjätunnuksellesi."
                    : "Valmistelemme kurssioikeuksiasi. Jos toimitus viivästyy, järjestelmä yrittää automaattisesti uudelleen."
                  : failed
                    ? "Maksu keskeytettiin tai maksunvälittäjä hylkäsi sen. Voit yrittää uudelleen. Ostoskorisi on säilytetty."
                    : "Maksunvälittäjä ei ole vielä vahvistanut maksua. Kurssia ei ole avattu. Voit sulkea selaimen: vahvistus käsitellään palvelimella ja saat sähköpostin maksun vahvistuttua."}
            </p>
            {order.status === "partially_refunded" && (
              <p className="vg-shop-note">
                Osa maksusta on palautettu. Tarkemmat tiedot ovat
                palautusvahvistuksessa.
              </p>
            )}
            {order.items.map((i, n) => (
              <div className="vg-shop-line" key={n}>
                <div>
                  <strong>{i.name}</strong>
                  {i.access_days !== null && (
                    <small className="vg-shop-muted">
                      Käyttöoikeus {accessDuration(i.access_days)} maksun
                      vahvistamisesta
                    </small>
                  )}
                </div>
                <strong>{money(i.total_cents)}</strong>
              </div>
            ))}
            <div className="vg-shop-total">
              <span>Tilauksen summa</span>
              <span>{money(order.amount_cents)}</span>
            </div>
            {paid && !refunded && (
              <div className="vg-shop-note">
                <strong>Kirjautuminen kursseille</strong>
                <p>
                  {order.access_email_sent
                    ? "Kirjautumislinkin lähetys on hyväksytty. Tarkista myös roskapostikansio."
                    : "Kirjautumislinkki lähetetään tilauksella annettuun sähköpostiin. Sähköpostin lähetys ei vaikuta maksuun tai toimitettuihin oikeuksiin."}
                </p>
                <p>
                  Jos sinulla on jo tunnus, voit käyttää nykyistä salasanaasi.
                  Vanhentuneen linkin voit uusia kirjautumissivulta.
                </p>
                <div className="vg-shop-actions">
                  <Link href="/kirjaudu" className="vg-shop-btn">
                    Kirjaudu ValintaGuruun →
                  </Link>
                </div>
              </div>
            )}
            <div className="vg-shop-actions">
              <button
                className="vg-shop-btn secondary"
                onClick={() => void refresh(true)}
              >
                Tarkista maksun tila
              </button>
              {!paid && (failed || order.payment_status === "new") && (
                <button
                  className="vg-shop-btn"
                  disabled={busy}
                  onClick={() => void retry()}
                >
                  {busy
                    ? "Avataan…"
                    : failed
                      ? "Yritä maksamista uudelleen"
                      : "Jatka maksamista Paytrailissa"}
                </button>
              )}
            </div>
            {paid && (
              <p style={{ marginTop: 20 }}>
                <Link href={`/kauppa/peruuta?order=${id}`}>
                  Peruuta sopimus
                </Link>
                {order.cancellation_requested &&
                  " · Peruuttamisilmoitus vastaanotettu"}
              </p>
            )}
          </>
        )}
        {error && (
          <p className="vg-shop-error" role="alert">
            {error}
          </p>
        )}
        <p style={{ marginTop: 20, fontSize: 13 }} className="vg-shop-muted">
          Tarvitsetko apua? info@valintaguru.com. Tilauksen tietojen katselu
          edellyttää samaa selainta, jossa ostit kurssin.
        </p>
      </section>
    </main>
  );
}
