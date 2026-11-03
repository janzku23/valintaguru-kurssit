"use client";
import { shopFetch, shopJson } from "./client-api";
import { useState, type FormEvent } from "react";
export default function Cancellation({ id }: { id?: string }) {
  const [confirm, setConfirm] = useState(false),
    [done, setDone] = useState(false),
    [error, setError] = useState(""),
    [busy, setBusy] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!confirm) {
      setConfirm(true);
      return;
    }
    setBusy(true);
    try {
      const form = new FormData(e.currentTarget);
      const r = await shopFetch("/api/shop/cancel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: id,
          name: form.get("name"),
          email: form.get("email"),
          number: form.get("number"),
          confirm: true,
        }),
      });
      const data = await shopJson(r);
      if (!r.ok) throw new Error(data.error);
      setDone(true);
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Ilmoituksen lähetys epäonnistui.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <main className="vg-shop-prose">
      <h1>Peruuta sopimus</h1>
      <p>
        Voit ilmoittaa tässä tilauksesi peruuttamisesta. Ilmoituksen
        vastaanottovahvistus lähetetään tilauksen sähköpostiosoitteeseen.
        Asiakaspalvelu arvioi palautuksen edellytykset ja käsittelee sen
        erikseen. Voit lähettää ilmoituksen myös osoitteeseen
        info@valintaguru.com.
      </p>
      {done ? (
        <div className="vg-shop-note" role="status">
          Ilmoitus on lähetetty käsiteltäväksi. Jos antamillasi tiedoilla löytyy
          maksettu tilaus, saat vastaanottovahvistuksen sen
          sähköpostiosoitteeseen. Jos vahvistusta ei tule, ota yhteyttä
          info@valintaguru.com.
        </div>
      ) : (
        <form
          className="vg-shop-panel vg-shop-form"
          onSubmit={submit}
          onChange={() => setConfirm(false)}
        >
          <label>
            Nimi
            <input name="name" required minLength={2} maxLength={160} />
          </label>
          {!id && (
            <>
              <label>
                Tilausnumero
                <input
                  name="number"
                  inputMode="numeric"
                  pattern="[0-9]+"
                  required
                  maxLength={16}
                />
              </label>
              <label>
                Tilauksen sähköpostiosoite
                <input name="email" type="email" required maxLength={254} />
              </label>
            </>
          )}
          {confirm && (
            <p className="vg-shop-note">
              Vahvista vielä peruuttamisilmoituksen lähettäminen. Ilmoitus
              koskee koko yksilöimääsi tilausta. Mahdollisen osapalautuksen voit
              sopia asiakaspalvelun kanssa.
            </p>
          )}
          <button className="vg-shop-btn" disabled={busy}>
            {busy
              ? "Lähetetään…"
              : confirm
                ? "Vahvista peruuttaminen"
                : "Peruuta sopimus"}
          </button>
          {error && (
            <p className="vg-shop-error" role="alert">
              {error}
            </p>
          )}
        </form>
      )}
    </main>
  );
}
