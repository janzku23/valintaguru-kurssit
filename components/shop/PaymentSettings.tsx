"use client";
import { useCallback, useEffect, useState } from "react";
import type { ShopSettingsStatus } from "@/lib/shop/settings-model";
import { shopFetch, shopJson } from "./client-api";

export default function PaymentSettings() {
  const [status, setStatus] = useState<ShopSettingsStatus | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const refresh = useCallback(async () => {
    setBusy(true);
    try {
      const response = await shopFetch("/api/admin/shop/settings");
      const data = await shopJson(response);
      if (!response.ok) throw new Error(data.error);
      setStatus(data);
      setError("");
    } catch {
      setError("Maksuasetusten tilaa ei saatu ladattua. Yritä uudelleen.");
    } finally {
      setBusy(false);
    }
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => void refresh(), 0);
    return () => clearTimeout(timer);
  }, [refresh]);
  async function activate() {
    if (!confirm || !status?.canActivate || busy) return;
    setBusy(true);
    try {
      const response = await shopFetch("/api/admin/shop/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "activate", confirm: true }),
      });
      const data = await shopJson(response);
      if (!response.ok) throw new Error(data.error);
      setStatus(data);
      setConfirm(false);
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Aktivointi epäonnistui.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <section className="vg-shop-section">
      <div className="vg-shop-panel">
        <p className="vg-shop-eyebrow vg-shop-muted">Paytrail · Käyttöönotto</p>
        <h2>Maksuasetukset</h2>
        <p>
          Lisää oma Paytrail merchant ID ja secret Vercelin nykyisen
          ValintaGuru-projektin{" "}
          <strong>Settings → Environment Variables</strong> -kohtaan. Valitse{" "}
          <strong>Production</strong> ja tallenna secret suojattuna
          Secret/Sensitive-muuttujana. Julkaise sen jälkeen uudelleen.
        </p>
        <p>
          Salaiset arvot eivät tallennu hallintapaneeliin eikä niitä palauteta
          selaimeen. Kehityksen testiasetukset ovat erilliset tuotannosta.
        </p>
        <div className="vg-shop-actions">
          <a
            className="vg-shop-btn"
            href="https://vercel.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            Avaa Vercel →
          </a>
          <button
            className="vg-shop-btn secondary"
            onClick={() => void refresh()}
            disabled={busy}
          >
            {busy ? "Tarkistetaan…" : "Päivitä asetusten tila"}
          </button>
        </div>
        {error && (
          <p className="vg-shop-error" role="alert">
            {error}
          </p>
        )}
        {!status && !error && <p role="status">Ladataan asetusten tilaa…</p>}
      </div>
      {status && (
        <>
          <div className="vg-shop-panel">
            <h2>
              {status.active
                ? "Tuotannon asetukset käytössä"
                : "Tuotannon käyttöönotto"}
            </h2>
            <p className="vg-shop-muted">
              Tämä näkymä: {status.deployment} ·{" "}
              {status.mode === "production"
                ? "tuotantomaksutila"
                : "testimaksutila"}
            </p>
            {status.site && <p>Kaupan osoite: {status.site}</p>}
            {status.merchantId && (
              <p>Tämän ympäristön kauppiastunnus: {status.merchantId}</p>
            )}
            <p>Myyjä: ValintaGuru Oy · {status.sellerAddress}</p>
            {status.checks.map((check) => (
              <div className="vg-shop-note" key={check.id}>
                <strong>
                  {check.ok ? "✓" : "○"} {check.label}
                </strong>
                <p className="vg-shop-muted">{check.detail}</p>
              </div>
            ))}
            {!status.environmentMatches && (
              <>
                <label className="vg-shop-check">
                  <input
                    type="checkbox"
                    checked={confirm}
                    onChange={(e) => setConfirm(e.target.checked)}
                    disabled={!status.canActivate || busy}
                  />
                  <span>
                    Haluan kytkeä tämän tuotantokannan omiin
                    Paytrail-tunnuksiini ja avata maksamisen.
                  </span>
                </label>
                <div className="vg-shop-actions">
                  <button
                    className="vg-shop-btn"
                    disabled={!status.canActivate || !confirm || busy}
                    onClick={() => void activate()}
                  >
                    {busy
                      ? "Tarkistetaan…"
                      : "Tarkista tunnukset ja aktivoi tuotantokauppa"}
                  </button>
                </div>
              </>
            )}
            <p className="vg-shop-muted">
              Aktivointi tarkistaa Paytrail-tunnukset allekirjoitetulla
              lukupyynnöllä ja tallentaa tietokannan maksuympäristön. Se ei tee
              veloitusta. Asetusten tarkistus ei korvaa maksun, toimituksen,
              sähköpostin ja kirjautumisen päästä päähän -testiä.
            </p>
          </div>
          <div className="vg-shop-panel">
            <h2>Vercelin Production-muuttujat</h2>
            {status.settings.map((setting) => (
              <div className="vg-shop-note" key={setting.name}>
                <strong>{setting.label}</strong>
                <br />
                <code>{setting.name}</code>
                <p>
                  {setting.configured
                    ? setting.secret
                      ? "Salainen arvo asetettu — arvoa ei näytetä."
                      : "Arvo asetettu. Tarkista yllä olevasta käyttöönoton tilasta, onko se oikea."
                    : "Puuttuu tästä julkaisusta."}
                </p>
                <p className="vg-shop-muted">{setting.instruction}</p>
              </div>
            ))}
            <p>
              Nykyiset Supabase- ja Resend-asetukset säilyvät. Postiosoite on
              kaupan julkisissa yritystiedoissa; sen voi tarvittaessa korvata
              muuttujalla <code>SHOP_SELLER_POSTAL_ADDRESS</code>.
            </p>
          </div>
        </>
      )}
    </section>
  );
}
