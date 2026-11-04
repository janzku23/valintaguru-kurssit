import "server-only";
import { shopSender } from "@/data/shop/seller";
import { shopConfig } from "./config";
import { html } from "./core";
import {
  accessDuration,
  money,
  type Job,
  type Order,
  type OrderItem,
} from "./types";
import { db } from "./server";
export async function sendOrderEmail(
  job: Job,
  order: Order,
  items: OrderItem[],
) {
  const key = process.env.RESEND_API_KEY,
    from = shopSender(process.env.SUPPORT_FROM_EMAIL);
  if (!key || !from) throw new Error("email_configuration");
  const config = shopConfig();
  let subject = `Tilausvahvistus #${order.number}`,
    intro = order.new_user
      ? "Kiitos tilauksestasi! Maksusi on vahvistettu. Saat erillisen sähköpostikutsun, jonka kautta voit asettaa salasanasi."
      : "Kiitos tilauksestasi! Maksusi on vahvistettu ja ostamasi kurssit on lisätty tunnuksellesi.";
  if (job.kind === "pending") {
    subject = `Maksu odottaa vahvistusta #${order.number}`;
    intro =
      "Maksusi käsittely on kesken. Kurssioikeus avataan vahvistuksen jälkeen. Älä maksa tilausta uudelleen odottaessasi.";
  }
  if (job.kind === "cancel") {
    subject = `Peruuttamisilmoitus vastaanotettu #${order.number}`;
    intro = `Olemme vastaanottaneet tilauksesi peruuttamisilmoituksen ${order.cancellation_requested_at}. Asiakaspalvelu käsittelee ilmoituksesi ja ilmoittaa palautuksesta erikseen.`;
  }
  let refundAmount: number | null = null;
  if (job.kind === "refund") {
    const { data, error } = await db()
      .from("shop_refunds")
      .select("amount_cents,revoke_item_ids")
      .eq("id", job.refund_id)
      .single();
    if (error || !data) throw new Error("refund_email_data");
    refundAmount = data.amount_cents;
    const revoked = items
      .filter((item) => data.revoke_item_ids.includes(item.id))
      .map((item) => item.name);
    subject = `Maksunpalautus #${order.number}`;
    intro = `Palautus ${money(data.amount_cents)} on vahvistettu Paytrailissa. Palautus näkyy maksutavallasi sen käsittelyajan mukaisesti. ${revoked.length ? `Tästä tilauksesta päättyvät oikeudet: ${revoked.join(", ")}. Muusta lähteestä saadut oikeutesi säilyvät.` : "Kurssioikeuksiasi ei muutettu tämän osapalautuksen yhteydessä."}`;
  }
  let consent = `Välitön toimitus pyydetty: ${order.immediate_consent ? "kyllä" : "ei"}. Digitaalisen sisällön peruuttamisoikeuden menettäminen toimituksen alettua hyväksytty: ${order.withdrawal_ack ? "kyllä" : "ei / ei sovellu"}. Palvelun peruuttamisoikeutta arvioidaan erikseen. Ehtoversio ${order.terms_version}.`;
  if (order.terms_snapshot.checkout_consents?.length) {
    consent = `Hyväksytyt käyttö- ja peruutusehdot: ${order.terms_version}. ${order.terms_snapshot.checkout_consents.join(" ")}`;
  }
  const summary = items
    .map(
      (item) =>
        `${item.name}: ${money(item.total_cents)} (sis. ALV ${item.vat_percentage} %${item.access_days === null ? "" : `, käyttöoikeus ${accessDuration(item.access_days)} maksun vahvistamisesta`})`,
    )
    .join("\n");
  const text = [
    intro,
    `Tilaus #${order.number}`,
    summary,
    `Tilauksen summa ${money(order.amount_cents)}`,
    refundAmount === null ? "" : `Palautus ${money(refundAmount)}`,
    consent,
    ...order.terms_snapshot.paragraphs,
    `Peruuta sopimus: ${config.site}/kauppa/peruuta`,
    "Asiakaspalvelu: info@valintaguru.com",
  ].join("\n\n");
  const markup = `<div style="background:#f5f8ff;padding:32px 16px;font-family:Arial,sans-serif;color:#0f172a"><div style="max-width:620px;margin:auto;background:white;border-radius:28px;padding:32px"><img src="${config.site}/logo.png" alt="ValintaGuru" width="52" height="52"><h1 style="font-family:Georgia,serif">${html(subject)}</h1><p>${html(intro)}</p><p>Tilaus #${order.number}</p><ul>${items.map((i) => `<li>${html(i.name)} – ${money(i.total_cents)}<br>sis. ALV ${i.vat_percentage} %${i.access_days === null ? "" : `, ${accessDuration(i.access_days)}`}</li>`).join("")}</ul><p><strong>Tilauksen summa ${money(order.amount_cents)}</strong></p><p>${html(consent)}</p><details><summary>Osto- ja toimitusehdot</summary>${order.terms_snapshot.paragraphs.map((p) => `<p>${html(p)}</p>`).join("")}</details><p><a href="${config.site}/kauppa/peruuta">Peruuta sopimus</a></p><p>info@valintaguru.com · <a href="${config.site}">ValintaGuru</a></p></div></div>`;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      "Idempotency-Key": `shop-${job.id}`,
    },
    body: JSON.stringify({
      from,
      to: [order.email],
      reply_to: "info@valintaguru.com",
      subject: `${config.mode === "test" ? "[TESTI] " : ""}${subject}`,
      text,
      html: markup,
    }),
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error(`email_http_${response.status}`);
}
