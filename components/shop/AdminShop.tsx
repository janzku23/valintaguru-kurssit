"use client";
import { shopFetch, shopJson } from "./client-api";
import ShopTheme from "./ShopTheme";
import PaymentSettings from "./PaymentSettings";
import Link from "next/link";
import { useCallback, useEffect, useState, type FormEvent } from "react";
import { courses } from "@/data/courses";
import {
  money,
  accessDuration,
  type Product,
  type Discount,
  type Order,
  type OrderItem,
  type Payment,
  type Refund,
} from "@/lib/shop/types";
type Stats = {
  gross: number;
  refunds: number;
  today: number;
  week: number;
  month: number;
  orders: number;
  paid: number;
  failed: number;
  chart: { day: string; amount: number }[];
  top: { name: string; units: number; amount: number }[];
};
type Data = {
  products: Product[];
  discounts: Discount[];
  orders: Order[];
  total: number;
  stats: Stats;
};
type Detail = {
  order: Order;
  items: OrderItem[];
  payments: Payment[];
  refunds: Refund[];
  jobs: {
    id: string;
    kind: string;
    status: string;
    attempts: number;
    last_error: string | null;
  }[];
  events: { kind: string; created_at: string }[];
  rights: {
    course_id: string;
    status: string;
    shop_manual_access: boolean;
    shop_access_until: string | null;
  }[];
};
async function api(body: unknown) {
  const r = await shopFetch("/api/admin/shop", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await shopJson(r);
  if (!r.ok) throw new Error(data.error);
  return data;
}
function values(form: HTMLFormElement) {
  return new FormData(form);
}
function number(form: FormData, key: string) {
  const value = form.get(key);
  return value === "" || value === null ? null : Number(value);
}
function ProductForm({
  product,
  onSave,
}: {
  product: Product | null;
  onSave: () => void;
}) {
  const [unlimited, setUnlimited] = useState(product?.access_days === null);
  const [error, setError] = useState(""),
    [busy, setBusy] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const f = values(e.currentTarget);
    try {
      await api({
        action: "product",
        value: {
          id: product?.id,
          slug: f.get("slug"),
          name: f.get("name"),
          description: f.get("description"),
          category: f.get("category"),
          content: f.get("content"),
          audience: f.get("audience"),
          price_cents: number(f, "price_cents"),
          sale_price_cents: number(f, "sale_price_cents"),
          vat_percentage: number(f, "vat_percentage"),
          access_days: unlimited ? null : number(f, "access_days"),
          access_unlimited: unlimited,
          legal_kind: f.get("legal_kind") || null,
          course_ids: f.getAll("course_ids"),
          published: f.get("published") === "on",
          visible: f.get("visible") === "on",
          reviewed: f.get("reviewed") === "on",
          archived: f.get("archived") === "on",
          sort_order: number(f, "sort_order"),
          image_url: f.get("image_url") || null,
        },
      });
      onSave();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Tallennus epäonnistui.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <form className="vg-shop-form" onSubmit={submit}>
      <h2>{product ? "Muokkaa tuotetta" : "Uusi tuote"}</h2>
      <div className="vg-admin-fields">
        {[
          ["name", "Nimi", 160],
          ["slug", "URL-tunniste (a-z, numerot, yhdysmerkki)", 80],
          ["category", "Kategoria", 100],
        ].map(([key, label, max]) => (
          <label key={key}>
            {label}
            <input
              name={String(key)}
              required={key !== "category"}
              maxLength={Number(max)}
              defaultValue={String(product?.[key as keyof Product] ?? "")}
            />
          </label>
        ))}
      </div>
      {[
        ["description", "Kuvaus"],
        ["content", "Kurssin sisältö"],
        ["audience", "Kenelle kurssi sopii"],
      ].map(([key, label]) => (
        <label key={key}>
          {label}
          <textarea
            name={key}
            rows={3}
            maxLength={key === "content" ? 10000 : 2000}
            defaultValue={String(product?.[key as keyof Product] ?? "")}
          />
        </label>
      ))}
      <div className="vg-admin-fields">
        <label>
          Hinta sentteinä
          <input
            name="price_cents"
            type="number"
            min={1}
            max={99999999}
            required
            defaultValue={product?.price_cents}
          />
        </label>
        <label>
          Kampanjahinta sentteinä
          <input
            name="sale_price_cents"
            type="number"
            min={1}
            max={99999999}
            defaultValue={product?.sale_price_cents ?? ""}
          />
        </label>
        <label>
          ALV % (vahvistettava)
          <input
            name="vat_percentage"
            type="number"
            min={0}
            max={100}
            step="0.1"
            defaultValue={product?.vat_percentage ?? ""}
          />
        </label>
        <label>
          Käyttöoikeus päivinä
          <input
            name="access_days"
            disabled={unlimited}
            required={!unlimited}
            type="number"
            min={1}
            max={3650}
            defaultValue={product?.access_days ?? ""}
          />
        </label>
        <label>
          Järjestysnumero
          <input
            name="sort_order"
            type="number"
            required
            defaultValue={product?.sort_order ?? 0}
          />
        </label>
        <label>
          Toimituslaji
          <select name="legal_kind" defaultValue={product?.legal_kind ?? ""}>
            <option value="">Valitse vahvistettu luokitus</option>
            <option value="digital_content">Digitaalinen sisältö</option>
            <option value="service">Opetus / palvelu</option>
          </select>
        </label>
      </div>
      <label className="vg-shop-check">
        <input
          type="checkbox"
          checked={unlimited}
          onChange={(e) => setUnlimited(e.target.checked)}
        />
        <span>Toistaiseksi voimassa oleva käyttöoikeus</span>
      </label>
      <label>
        Tuotekuvan paikallinen polku
        <input
          name="image_url"
          placeholder="/holvi/kuvat/valintakoeg.png"
          defaultValue={product?.image_url ?? ""}
        />
      </label>
      <fieldset>
        <legend>Avattavat kurssit (paketissa voi olla useita)</legend>
        <div className="vg-admin-fields">
          {courses.map((c) => (
            <label className="vg-shop-check" key={c.id}>
              <input
                type="checkbox"
                name="course_ids"
                value={c.id}
                defaultChecked={product?.course_ids.includes(c.id)}
              />
              <span>
                {c.title} <small>({c.id})</small>
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      {[
        [
          "reviewed",
          "ALV, käyttöoikeuden kesto, sisältö ja oikeudellinen luokitus on vahvistettu.",
        ],
        ["published", "Julkaistu ja ostettavissa"],
        ["visible", "Näkyy kaupan luettelossa"],
        ["archived", "Arkistoitu (ei ostettavissa)"],
      ].map(([key, label]) => (
        <label key={key} className="vg-shop-check">
          <input
            name={key}
            type="checkbox"
            defaultChecked={
              product
                ? Boolean(product[key as keyof Product])
                : key === "visible"
            }
          />
          <span>{label}</span>
        </label>
      ))}
      <button className="vg-shop-btn" disabled={busy}>
        {busy ? "Tallennetaan…" : "Tallenna tuote"}
      </button>
      {error && (
        <p className="vg-shop-error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
function DiscountForm({
  discount,
  products,
  onSave,
}: {
  discount: Discount | null;
  products: Product[];
  onSave: () => void;
}) {
  const [error, setError] = useState(""),
    [busy, setBusy] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    const f = values(e.currentTarget);
    try {
      await api({
        action: "discount",
        value: {
          id: discount?.id,
          code: f.get("code"),
          kind: f.get("kind"),
          value: number(f, "value"),
          starts_at: f.get("starts_at"),
          ends_at: f.get("ends_at") || null,
          max_uses: number(f, "max_uses"),
          product_ids: f.getAll("product_ids"),
          active: f.get("active") === "on",
        },
      });
      onSave();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Tallennus epäonnistui.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <form className="vg-shop-form" onSubmit={submit}>
      <h2>{discount ? "Muokkaa alennuskoodia" : "Uusi alennuskoodi"}</h2>
      <label>
        Koodi
        <input
          name="code"
          required
          minLength={3}
          maxLength={40}
          defaultValue={discount?.code}
        />
      </label>
      <div className="vg-admin-fields">
        <label>
          Tyyppi
          <select name="kind" defaultValue={discount?.kind ?? "percent"}>
            <option value="percent">Prosenttia</option>
            <option value="fixed">Kiinteä summa sentteinä</option>
          </select>
        </label>
        <label>
          Arvo
          <input
            name="value"
            type="number"
            min={1}
            required
            defaultValue={discount?.value}
          />
        </label>
        <label>
          Enintään käyttökertoja (tyhjä = ei rajaa)
          <input
            name="max_uses"
            type="number"
            min={1}
            defaultValue={discount?.max_uses ?? ""}
          />
        </label>
        <label>
          Alkaa (ISO 8601 aikavyöhykkeellä)
          <input
            name="starts_at"
            required
            defaultValue={discount?.starts_at ?? new Date().toISOString()}
          />
        </label>
        <label>
          Päättyy (ISO 8601 aikavyöhykkeellä)
          <input name="ends_at" defaultValue={discount?.ends_at ?? ""} />
        </label>
      </div>
      <fieldset>
        <legend>Tuoterajaus (tyhjä = kaikki)</legend>
        {products.map((p) => (
          <label className="vg-shop-check" key={p.id}>
            <input
              name="product_ids"
              value={p.id}
              type="checkbox"
              defaultChecked={discount?.product_ids.includes(p.id)}
            />
            <span>{p.name}</span>
          </label>
        ))}
      </fieldset>
      <label className="vg-shop-check">
        <input
          name="active"
          type="checkbox"
          defaultChecked={discount?.active ?? true}
        />
        <span>Koodi käytössä</span>
      </label>
      <p className="vg-shop-muted">
        Maksua odottavat tilaukset varaavat käyttökerran. Aloitettua maksua ei
        vapauteta pelkän selaimen sulkemisen perusteella.
      </p>
      <button className="vg-shop-btn" disabled={busy}>
        Tallenna alennuskoodi
      </button>
      {error && (
        <p className="vg-shop-error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
function OrderDetail({
  detail,
  refresh,
}: {
  detail: Detail;
  refresh: () => void;
}) {
  const [error, setError] = useState(""),
    [message, setMessage] = useState(""),
    [busy, setBusy] = useState(false),
    [refundKey, setRefundKey] = useState(() => crypto.randomUUID());
  async function action(body: unknown) {
    setBusy(true);
    setError("");
    try {
      await api(body);
      setMessage("Toiminto käsitelty. Tarkista päivitetty tila.");
      refresh();
      return true;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Toiminto epäonnistui.");
      return false;
    } finally {
      setBusy(false);
    }
  }
  async function refund(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = values(e.currentTarget);
    if (
      await action({
        action: "refund",
        orderId: detail.order.id,
        key: refundKey,
        amount: number(f, "amount"),
        revoke: f.getAll("revoke"),
        confirm: f.get("confirm") === "on",
      })
    )
      setRefundKey(crypto.randomUUID());
  }
  return (
    <div className="vg-shop-form">
      <h2>Tilaus #{detail.order.number}</h2>
      <p>
        {detail.order.email} · {detail.order.customer_name}
        <br />
        {detail.order.status} · Toimitus: {detail.order.fulfillment_status}
        <br />
        Maksettu{" "}
        {detail.order.paid_at
          ? new Date(detail.order.paid_at).toLocaleString("fi-FI")
          : "—"}
      </p>
      {detail.order.cancellation_requested_at && (
        <p className="vg-shop-note">
          Peruuttamisilmoitus:{" "}
          {new Date(detail.order.cancellation_requested_at).toLocaleString(
            "fi-FI",
          )}
          . Käsittele asiakkaan oikeudet ja palautus.
        </p>
      )}
      {detail.items.map((i) => (
        <div className="vg-shop-line" key={i.id}>
          <div>
            <strong>{i.name}</strong>
            <small>
              {i.course_ids.join(", ")} · {accessDuration(i.access_days)} · ALV{" "}
              {i.vat_percentage} %
            </small>
          </div>
          <strong>{money(i.total_cents)}</strong>
        </div>
      ))}
      <p>
        <strong>Yhteensä {money(detail.order.amount_cents)}</strong>
      </p>
      <details>
        <summary>Suostumukset ja ostohetken ehdot</summary>
        <p>
          Välitön toimitus: {String(detail.order.immediate_consent)}.
          Digitaalisen sisällön hyväksyntä:{" "}
          {String(detail.order.withdrawal_ack)}. Versio{" "}
          {detail.order.terms_version}.
        </p>
        {detail.order.terms_snapshot.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </details>
      <h3>Maksutapahtumat</h3>
      {detail.payments.map((p) => (
        <div className="vg-shop-note" key={p.id}>
          <strong>{p.status}</strong>
          <p style={{ overflowWrap: "anywhere" }}>
            Paytrail: {p.transaction_id ?? "Tunniste puuttuu"}
            <br />
            Stamp: {p.stamp}
            <br />
            Maksutapa: {p.provider ?? "—"}
          </p>
          <form
            className="vg-shop-form"
            onSubmit={(e) => {
              e.preventDefault();
              void action({
                action: "reconcile",
                paymentId: p.id,
                transactionId: new FormData(e.currentTarget).get(
                  "transactionId",
                ),
              });
            }}
          >
            <label>
              Paytrail-maksutunniste tilan tarkistamiseen
              <input
                name="transactionId"
                required
                defaultValue={p.transaction_id ?? ""}
              />
            </label>
            <button className="vg-shop-btn secondary" disabled={busy}>
              Tarkista allekirjoitetulla GET-pyynnöllä
            </button>
          </form>
        </div>
      ))}
      <h3>Toimitus ja sähköpostijono</h3>
      {detail.jobs.map((j) => (
        <p key={j.id}>
          {j.kind}: {j.status} · yrityksiä {j.attempts}
          {j.last_error ? ` · ${j.last_error}` : ""}
        </p>
      ))}
      <button
        className="vg-shop-btn secondary"
        disabled={busy}
        onClick={() =>
          void action({ action: "process", orderId: detail.order.id })
        }
      >
        Käsittele toimitusjono uudelleen
      </button>
      <h3>Asiakkaan nykyiset kurssioikeudet</h3>
      {detail.rights.map((r, i) => (
        <p key={i}>
          {r.course_id} · {r.status} ·{" "}
          {r.shop_manual_access
            ? "Manuaalinen oikeus"
            : `Kaupan oikeus ${r.shop_access_until ? new Date(r.shop_access_until).toLocaleString("fi-FI") : "toistaiseksi"}`}
        </p>
      ))}
      <Link href="/admin/oikeudet">
        Lisää tai muokkaa manuaalista oikeutta →
      </Link>
      <h3>Palautukset</h3>
      {detail.refunds.map((r) => (
        <div className="vg-shop-line" key={r.id}>
          <div>
            <strong>
              {money(r.amount_cents)} · {r.status}
            </strong>
            <small style={{ overflowWrap: "anywhere" }}>
              {r.transaction_id ?? r.id}
            </small>
          </div>
        </div>
      ))}
      {detail.order.status !== "unpaid" &&
        detail.order.status !== "refunded" && (
          <form className="vg-shop-form vg-shop-note" onSubmit={refund}>
            <h3>Käynnistä palautus</h3>
            <label>
              Palautettava määrä sentteinä
              <input
                name="amount"
                type="number"
                min={1}
                max={detail.order.amount_cents}
                required
              />
            </label>
            <fieldset>
              <legend>
                Tästä tilauksesta päätettävät oikeudet (jätä tyhjäksi, jos
                oikeudet säilyvät)
              </legend>
              {detail.items.map((i) => (
                <label className="vg-shop-check" key={i.id}>
                  <input type="checkbox" name="revoke" value={i.id} />
                  <span>{i.name}</span>
                </label>
              ))}
            </fieldset>
            <label className="vg-shop-check">
              <input name="confirm" type="checkbox" required />
              <span>
                Olen varmistanut palautussumman, peruuttamisoikeuden ja
                valittujen kurssioikeuksien päättymisen. Palautus käynnistää
                rahansiirron asetetussa Paytrail-ympäristössä.
              </span>
            </label>
            <button className="vg-shop-btn" disabled={busy}>
              Vahvista ja lähetä palautus Paytrailiin
            </button>
            <small>
              Epäselvä palautustila varaa summan. Tarkista tällainen palautus
              Paytrailin hallinnasta; älä lähetä uutta palautusta sen
              korvaamiseksi.
            </small>
          </form>
        )}
      <details>
        <summary>Tapahtumaloki</summary>
        {detail.events.map((e, i) => (
          <p key={i}>
            {new Date(e.created_at).toLocaleString("fi-FI")} · {e.kind}
          </p>
        ))}
      </details>
      {message && <p role="status">{message}</p>}
      {error && (
        <p className="vg-shop-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
export default function AdminShop({
  initialMode = "test",
}: {
  initialMode?: "test" | "production";
}) {
  const [tab, setTab] = useState("overview"),
    [mode, setMode] = useState<string>(initialMode),
    [page, setPage] = useState(0),
    [email, setEmail] = useState("");
  const [data, setData] = useState<Data | null>(null),
    [error, setError] = useState(""),
    [editing, setEditing] = useState<Product | null>(null),
    [discount, setDiscount] = useState<Discount | null>(null),
    [detail, setDetail] = useState<Detail | null>(null);
  const load = useCallback(async () => {
    try {
      const r = await shopFetch(
        `/api/admin/shop?mode=${mode}&page=${page}&email=${encodeURIComponent(email)}`,
      );
      const result = await shopJson(r);
      if (!r.ok) throw new Error(result.error);
      setData(result);
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Hallintaa ei saatu ladattua.");
    }
  }, [mode, page, email]);
  useEffect(() => {
    const timer = setTimeout(() => void load(), 0);
    return () => clearTimeout(timer);
  }, [load]);
  async function openOrder(id: string) {
    try {
      const r = await shopFetch(`/api/admin/shop?order=${id}`);
      const result = await shopJson(r);
      if (!r.ok) throw new Error(result.error);
      setDetail(result);
      setTab("orders");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Tilausta ei saatu ladattua.");
    }
  }
  const stats = data?.stats;
  return (
    <ShopTheme className="vg-admin-shop">
      <header className="vg-shop-panel">
        <p className="vg-shop-eyebrow vg-shop-muted">
          ValintaGuru · Nykyinen Admin Center
        </p>
        <h1>Verkkokaupan hallinta</h1>
        <p className="vg-shop-muted">
          Tuotteet, tilaukset ja toimitukset samassa työtilassa.
        </p>
        <div className="vg-shop-filters">
          {[
            ["overview", "Yleiskatsaus"],
            ["products", "Tuotteet"],
            ["orders", "Tilaukset ja palautukset"],
            ["customers", "Asiakkaat"],
            ["discounts", "Alennuskoodit"],
            ["settings", "Maksuasetukset"],
          ].map(([id, label]) => (
            <button
              key={id}
              aria-pressed={tab === id}
              onClick={() => setTab(id)}
            >
              {label}
            </button>
          ))}
        </div>
        <label>
          Maksuympäristö{" "}
          <select
            value={mode}
            onChange={(e) => {
              setMode(e.target.value);
              setPage(0);
              setDetail(null);
            }}
          >
            <option value="test">Paytrail-testitilaukset</option>
            <option value="production">Oikeat tuotantotilaukset</option>
          </select>
        </label>
      </header>
      {error && (
        <p className="vg-shop-error" role="alert">
          {error}
        </p>
      )}
      {tab === "settings" ? (
        <PaymentSettings />
      ) : !data ? (
        <p className="vg-shop-note">
          Hallinnan lataaminen edellyttää kaupan SQL-migraatiota ja
          palvelinasetuksia.
        </p>
      ) : (
        <>
          {tab === "overview" && stats && (
            <section className="vg-shop-section">
              <div className="vg-admin-stats">
                {[
                  ["Maksettu yhteensä", money(stats.gross)],
                  ["Tänään (Helsinki)", money(stats.today)],
                  ["Viimeiset 7 päivää", money(stats.week)],
                  ["Viimeiset 30 päivää", money(stats.month)],
                  ["Vahvistetut palautukset", money(stats.refunds)],
                  [
                    "Myynti palautusten jälkeen",
                    money(stats.gross - stats.refunds),
                  ],
                  ["Tilauksia", stats.orders],
                  ["Maksettuja tilauksia", stats.paid],
                  ["Epäonnistuneita maksuyrityksiä", stats.failed],
                ].map(([label, value]) => (
                  <div className="vg-shop-panel" key={label}>
                    <small className="vg-shop-muted">{label}</small>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
              <div className="vg-shop-panel" style={{ marginTop: 24 }}>
                <h2>Maksetut tilaukset / 30 päivää</h2>
                <p className="vg-shop-muted">
                  Bruttomyynti sisältää ALV:n. Päivät Suomen ajassa. Palautukset
                  näkyvät erillisessä luvussa.
                </p>
                <div
                  className="vg-admin-chart"
                  role="img"
                  aria-label="Maksettu myynti 30 päivänä. Päiväkohtaiset arvot ovat alla olevassa taulukossa."
                >
                  {stats.chart.map((d) => (
                    <div
                      key={d.day}
                      title={`${d.day}: ${money(d.amount)}`}
                      style={{
                        height: `${Math.max(1, (d.amount / Math.max(1, ...stats.chart.map((c) => c.amount))) * 100)}%`,
                      }}
                    />
                  ))}
                </div>
                <details>
                  <summary>Näytä päiväkohtaiset luvut</summary>
                  {stats.chart.map((d) => (
                    <p key={d.day}>
                      {d.day} · {money(d.amount)}
                    </p>
                  ))}
                </details>
                <h2 style={{ marginTop: 24 }}>Myydyimmät tuotteet</h2>
                {stats.top.length ? (
                  stats.top.map((p, i) => (
                    <div key={i} className="vg-shop-line">
                      <span>
                        {p.name} · {p.units} kpl
                      </span>
                      <strong>{money(p.amount)}</strong>
                    </div>
                  ))
                ) : (
                  <p>Ei vahvistettuja myyntejä tässä ympäristössä.</p>
                )}
              </div>
            </section>
          )}
          {tab === "products" && (
            <div className="vg-shop-columns">
              <section className="vg-shop-panel">
                <h2>Tuotteet ({data.products.length})</h2>
                <button
                  className="vg-shop-btn secondary"
                  onClick={() => setEditing(null)}
                >
                  Lisää uusi tuote
                </button>
                {data.products.map((p) => (
                  <div className="vg-shop-line" key={p.id}>
                    <div>
                      <strong>{p.name}</strong>
                      <small>
                        {p.archived
                          ? "Arkistoitu"
                          : p.published
                            ? "Julkaistu"
                            : "Luonnos"}{" "}
                        · {money(p.sale_price_cents ?? p.price_cents)}
                      </small>
                    </div>
                    <button onClick={() => setEditing(p)}>Muokkaa</button>
                  </div>
                ))}
                {!data.products.length && (
                  <p className="vg-shop-note">
                    Luo ensimmäinen tuote nykyisistä kurssitunnisteista. Hintoja
                    tai ALV:tä ei julkaista automaattisesti.
                  </p>
                )}
              </section>
              <section className="vg-shop-panel">
                <ProductForm
                  key={editing?.id ?? "new-product"}
                  product={editing}
                  onSave={() => {
                    setEditing(null);
                    void load();
                  }}
                />
              </section>
            </div>
          )}
          {(tab === "orders" || tab === "customers") && (
            <section className="vg-shop-section">
              <form
                className="vg-shop-form vg-shop-panel"
                onSubmit={(e) => {
                  e.preventDefault();
                  setPage(0);
                  setEmail(
                    String(new FormData(e.currentTarget).get("email") ?? ""),
                  );
                  setDetail(null);
                }}
              >
                <label>
                  Asiakkaan sähköposti (tyhjä = kaikki tilaukset)
                  <input name="email" type="email" defaultValue={email} />
                </label>
                <button className="vg-shop-btn secondary">
                  Hae ostohistoria
                </button>
                <Link href="/admin/kayttajat">
                  Nykyinen käyttäjä- ja oikeushallinta →
                </Link>
              </form>
              <div className="vg-shop-columns">
                <div className="vg-shop-panel">
                  <h2>Tilaukset ({data.total})</h2>
                  {data.orders.map((o) => (
                    <button
                      className="vg-admin-order"
                      key={o.id}
                      onClick={() => void openOrder(o.id)}
                    >
                      <span>
                        <strong>
                          #{o.number} · {money(o.amount_cents)}
                        </strong>
                        <small>{o.email}</small>
                        <small>
                          {new Date(o.created_at).toLocaleString("fi-FI")} ·{" "}
                          {o.status} · {o.fulfillment_status}
                          {o.cancellation_requested_at
                            ? " · Peruuttamisilmoitus"
                            : ""}
                        </small>
                      </span>
                      <span>→</span>
                    </button>
                  ))}
                  {!data.orders.length && (
                    <p>Ei tilauksia valituilla rajauksilla.</p>
                  )}
                  <div className="vg-shop-actions">
                    <button
                      className="vg-shop-btn secondary"
                      disabled={page === 0}
                      onClick={() => setPage(page - 1)}
                    >
                      Edellinen
                    </button>
                    <button
                      className="vg-shop-btn secondary"
                      disabled={(page + 1) * 30 >= data.total}
                      onClick={() => setPage(page + 1)}
                    >
                      Seuraava
                    </button>
                  </div>
                </div>
                <section className="vg-shop-panel">
                  {detail ? (
                    <OrderDetail
                      key={detail.order.id}
                      detail={detail}
                      refresh={() => {
                        void openOrder(detail.order.id);
                        void load();
                      }}
                    />
                  ) : (
                    <p>
                      Valitse tilaus nähdäksesi sen maksut, tuotteet,
                      kurssioikeudet, toimituksen ja palautukset.
                    </p>
                  )}
                </section>
              </div>
            </section>
          )}
          {tab === "discounts" && (
            <div className="vg-shop-columns">
              <section className="vg-shop-panel">
                <h2>Alennuskoodit</h2>
                <button
                  className="vg-shop-btn secondary"
                  onClick={() => setDiscount(null)}
                >
                  Lisää koodi
                </button>
                {data.discounts.map((d) => (
                  <div className="vg-shop-line" key={d.id}>
                    <div>
                      <strong>{d.code}</strong>
                      <small>
                        {d.kind === "percent" ? `${d.value} %` : money(d.value)}{" "}
                        · {d.active ? "Käytössä" : "Poissa käytöstä"}
                      </small>
                    </div>
                    <button onClick={() => setDiscount(d)}>Muokkaa</button>
                  </div>
                ))}
              </section>
              <section className="vg-shop-panel">
                <DiscountForm
                  key={discount?.id ?? "new-discount"}
                  discount={discount}
                  products={data.products}
                  onSave={() => {
                    setDiscount(null);
                    void load();
                  }}
                />
              </section>
            </div>
          )}
        </>
      )}
    </ShopTheme>
  );
}
