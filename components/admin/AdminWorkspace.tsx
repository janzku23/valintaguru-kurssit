"use client";

import { useEffect, useRef, useState, useTransition, type FormEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import type { DashboardData } from "@/lib/adminDashboardData";
import type { vercelTraffic } from "@/lib/adminDashboardIntegrations";
import { DAY, forecast, valuation, type Portfolio, type WorkspaceRecord } from "@/lib/adminDashboardModel";
import styles from "./AdminWorkspace.module.css";

type Traffic = Awaited<ReturnType<typeof vercelTraffic>>;
const number = (value: number | null) => value === null ? "—" : value.toLocaleString("fi-FI");
const euro = (value: number) => value.toLocaleString("fi-FI", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const date = (value: string) => new Intl.DateTimeFormat("fi-FI", { dateStyle: "medium", timeZone: "Europe/Helsinki" }).format(new Date(value.length === 10 ? value + "T12:00:00Z" : value));
const str = (value: unknown) => typeof value === "string" ? value : "";
const daysBetween = (a: string, b: string) => Math.round((Date.parse(a + "T12:00:00Z") - Date.parse(b + "T12:00:00Z")) / DAY);
const nav = [
  ["/admin/kayttajat", "Käyttäjät", "Opiskelijat ja kurssit"],
  ["/admin/oikeudet", "Kurssioikeudet", "Hallitse käyttöoikeuksia"],
  ["/admin/edistyminen", "Edistyminen", "Oppiminen ja tulokset"],
  ["/admin/valintakoe-g/tehtavapankki", "Tehtäväpankki", "Kategoriat ja vaikeustasot"],
  ["/admin/tiedustelut", "Tiedustelut", "Vastaa yhteydenottoihin"],
  ["/admin/raportit", "Aiempi yleiskuva", "Alkuperäiset raportit"],
];
function Panel({ title, eyebrow, action, children, wide = false }: { title: string; eyebrow: string; action?: ReactNode; children: ReactNode; wide?: boolean }) {
  return <section className={`${styles.panel} ${wide ? styles.wide : ""}`}><div className={styles.panelHead}><div><p className={styles.eyebrow}>{eyebrow}</p><h2>{title}</h2></div>{action}</div>{children}</section>;
}
function Trend({ values, label, color = "#79edbd" }: { values: { x: string; y: number }[]; label: string; color?: string }) {
  if (values.length < 2) return <div className={styles.empty}>Kehityskuvaaja näkyy kahden eri päivän havainnon jälkeen.</div>;
  const ordered = [...values].sort((a, b) => a.x.localeCompare(b.x));
  const min = Math.min(...ordered.map(v => v.y)), max = Math.max(...ordered.map(v => v.y));
  const start = Date.parse(ordered[0].x), span = Date.parse(ordered.at(-1)!.x) - start || 1;
  const points = ordered.map(v => `${12 + (Date.parse(v.x) - start) / span * 576},${115 - (v.y - min) / (max - min || 1) * 95}`).join(" ");
  return <figure className={styles.trend}><svg viewBox="0 0 600 140" role="img" aria-label={`${label}. ${date(ordered[0].x)}: ${number(ordered[0].y)}. ${date(ordered.at(-1)!.x)}: ${number(ordered.at(-1)!.y)}.`}><path d="M12 25H588M12 70H588M12 115H588" stroke="#ffffff12" /><polyline points={points} fill="none" stroke={color} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" /></svg><figcaption><span>{date(ordered[0].x)}</span><span>{date(ordered.at(-1)!.x)}</span></figcaption></figure>;
}
function ServiceIcon({ id }: { id: string }) {
  const paths: Record<string, ReactNode> = {
    supabase: <><path d="M13 2 3 14h8l-1 8 11-13h-8z" fill="currentColor" stroke="none" /></>,
    vercel: <path d="M12 3 23 22H1z" fill="currentColor" stroke="none" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></>,
    meta: <path d="M12 13C8 5 5 4 3 8c-4 8 0 14 4 9l10-10c5-4 9 10 3 12-3 1-6-4-8-6z" />,
    business: <path d="M12 13C8 5 5 4 3 8c-4 8 0 14 4 9l10-10c5-4 9 10 3 12-3 1-6-4-8-6z" />,
    holvi: <><path d="M5 3v18M19 3v18M5 12h14" /></>,
    resend: <><rect x="2" y="5" width="20" height="14" rx="3" /><path d="m3 6 9 7 9-7" /></>,
    site: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2c6 6 6 14 0 20-6-6-6-14 0-20z" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[id] ?? <path d="M5 19 19 5M5 5h14v14" />}</svg>;
}

export default function AdminWorkspace({ data, traffic }: { data: DashboardData; traffic: Traffic }) {
  const router = useRouter();
  const [tab, setTab] = useState("overview");
  const [busy, setBusy] = useState(false);
  const [refreshing, startTransition] = useTransition();
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [taskEdit, setTaskEdit] = useState<WorkspaceRecord | null>(null);
  const [eventEdit, setEventEdit] = useState<WorkspaceRecord | null>(null);
  const [followerEdit, setFollowerEdit] = useState<WorkspaceRecord | null>(null);
  const [linkEdit, setLinkEdit] = useState<WorkspaceRecord | null>(null);
  const [month, setMonth] = useState(data.today.slice(0, 7));
  const [calendarDate, setCalendarDate] = useState("");
  const locked = busy || refreshing;
  const records = data.records;
  const dailySyncStarted = useRef("");
  useEffect(() => {
    if (dailySyncStarted.current === data.today || !data.storageAvailable) return;
    dailySyncStarted.current = data.today;
    const modes = [];
    if (!data.records.some(r => r.kind === "portfolio" && r.key === data.today)) modes.push("portfolio");
    if (data.connections.instagram && !data.records.some(r => r.kind === "follower" && r.key === data.today)) modes.push("instagram");
    if (!modes.length) return;
    Promise.all(modes.map(async mode => {
      const response = await fetch(`/api/admin/workspace/sync?mode=${mode}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: "{}" });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error ?? "Päivän havainnon tallennus epäonnistui.");
    })).then(() => router.refresh()).catch(e => {
      setError(true); setMessage(e instanceof Error ? e.message : "Päivän havaintoa ei saatu tallennettua.");
    });
  }, [data.records, data.today, data.storageAvailable, data.connections.instagram, router]);
  const tasks = records.filter(r => r.kind === "todo").sort((a, b) => Number(a.data.done) - Number(b.data.done) || Number(b.data.priority === "high") - Number(a.data.priority === "high") || (str(a.data.due) || "9999").localeCompare(str(b.data.due) || "9999"));
  const events = records.filter(r => r.kind === "event").sort((a, b) => str(a.data.date).localeCompare(str(b.data.date)));
  const followers = records.filter(r => r.kind === "follower").sort((a, b) => a.key.localeCompare(b.key));
  const latestFollower = followers.at(-1);
  const baselineFollower = latestFollower && [...followers].reverse().find(r => daysBetween(latestFollower.key, r.key) >= 7);
  const prices = data.prices;
  const value = valuation(data.current.counts, prices);
  const history = records.filter(r => r.kind === "portfolio").map(r => r.data as unknown as Portfolio);
  const projection = forecast(data.current, history, prices);
  const links = [...data.links.map(link => {
    const stored = records.find(r => r.kind === "link" && r.key === link.id);
    return { ...link, label: stored ? str(stored.data.label) : link.label, url: stored ? str(stored.data.url) : link.url };
  }), ...records.filter(r => r.kind === "link" && !data.links.some(l => l.id === r.key)).map(r => ({ id: r.key, label: str(r.data.label), url: str(r.data.url) }))];
  async function request(url: string, body?: unknown) {
    setBusy(true); setMessage(""); setError(false);
    try {
      const response = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body ?? {}) });
      if (!response.headers.get("content-type")?.includes("application/json")) throw new Error("Tallennus ei onnistunut. Päivitä sivu ja tarkista kirjautuminen.");
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? "Tallennus epäonnistui.");
      setMessage("Tallennettu yhteiseen työtilaan.");
      startTransition(() => router.refresh());
      return true;
    } catch (e) { setError(true); setMessage(e instanceof Error ? e.message : "Verkkoyhteys katkesi. Yritä uudelleen."); return false; }
    finally { setBusy(false); }
  }
  function save(kind: string, key: string, recordData: Record<string, unknown>, revision?: string, action?: string) {
    return request("/api/admin/workspace", { kind, key, data: recordData, revision, action });
  }
  function remove(record: WorkspaceRecord) { return save(record.kind, record.key, record.data, record.updated_at, "delete"); }
  async function submit(event: FormEvent<HTMLFormElement>, kind: string, editing: WorkspaceRecord | null, reset: () => void) {
    event.preventDefault();
    const form = event.currentTarget, f = new FormData(form);
    const values = Object.fromEntries(f.entries()) as Record<string, unknown>;
    let key = editing?.key ?? crypto.randomUUID();
    if (kind === "todo") values.done = editing?.data.done ?? false;
    if (kind === "follower") { key = String(values.date); delete values.date; values.count = Number(values.count); }
    if (kind === "price") { key = String(values.id); delete values.id; values.price = Number(String(values.price).replace(",", ".")); }
    const existing = records.find(r => r.kind === kind && r.key === key);
    const revision = editing?.key === key && editing.updated_at ? editing.updated_at : existing?.updated_at;
    if (await save(kind, key, values, revision)) { form.reset(); reset(); }
  }
  function exportWorkspace() {
    const blob = new Blob([JSON.stringify({ exportedAt: data.generatedAt, current: data.current, prices, records }, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob), a = document.createElement("a"); a.href = url; a.download = `valintaguru-admin-${data.today}.json`; a.click(); URL.revokeObjectURL(url);
  }
  const monthStart = new Date(month + "-01T12:00:00Z");
  const offset = (monthStart.getUTCDay() + 6) % 7;
  const monthDays = new Date(Date.UTC(monthStart.getUTCFullYear(), monthStart.getUTCMonth() + 1, 0)).getUTCDate();
  const upcoming = events.filter(r => str(r.data.date) >= data.today);
  const selectedEvents = calendarDate ? events.filter(r => r.data.date === calendarDate) : upcoming;
  function moveMonth(amount: number) { const d = new Date(month + "-01T12:00:00Z"); d.setUTCMonth(d.getUTCMonth() + amount); setMonth(d.toISOString().slice(0, 7)); setCalendarDate(""); }
  const tasksPanel = (<Panel title="Tehdään seuraavaksi" eyebrow="Yhteinen tehtävälista" wide action={<span className={styles.badge}>{tasks.filter(t => !t.data.done).length} avoinna</span>}>
        <div className={styles.taskList}>{!tasks.length && <div className={styles.empty}>Tilaa seuraavalle idealle. Lisää ensimmäinen yhteinen tehtävä alle.</div>}{tasks.map(task => <div key={task.key} className={`${styles.task} ${task.data.done ? styles.done : ""}`}>
          <input type="checkbox" aria-label={`Merkitse ${str(task.data.title)} ${task.data.done ? "avoimeksi" : "valmiiksi"}`} checked={Boolean(task.data.done)} disabled={locked || !data.storageAvailable} onChange={() => save("todo", task.key, { ...task.data, done: !task.data.done }, task.updated_at)} />
          <div className={styles.grow}><strong>{str(task.data.title)}</strong><div className={styles.taskMeta}>{task.data.owner ? <span>{str(task.data.owner)}</span> : null}{task.data.due ? <span className={!task.data.done && str(task.data.due) < data.today ? styles.overdue : ""}>{date(str(task.data.due))}</span> : null}{task.data.priority === "high" && <span className={styles.priority}>Tärkeä</span>}</div></div>
          <button className={styles.textButton} disabled={locked} onClick={() => setTaskEdit(task)}>Muokkaa</button><button className={styles.iconButton} aria-label={`Poista tehtävä ${str(task.data.title)}`} disabled={locked || !data.storageAvailable} onClick={() => remove(task)}>×</button>
        </div>)}</div>
        <form key={taskEdit?.key ?? "new-task"} className={styles.form} onSubmit={e => submit(e, "todo", taskEdit, () => setTaskEdit(null))}><fieldset disabled={locked || !data.storageAvailable}><legend>{taskEdit ? "Muokkaa tehtävää" : "+ Uusi tehtävä"}</legend><label>Tehtävä<input name="title" placeholder="Mitä tehdään seuraavaksi?" required maxLength={300} defaultValue={str(taskEdit?.data.title)} /></label><div className={styles.formRow}><label>Vastuuhenkilö<input name="owner" placeholder="Esim. Jani" maxLength={80} defaultValue={str(taskEdit?.data.owner)} /></label><label>Määräpäivä<input name="due" type="date" defaultValue={str(taskEdit?.data.due)} /></label><label>Prioriteetti<select name="priority" defaultValue={str(taskEdit?.data.priority) || "normal"}><option value="normal">Tavallinen</option><option value="high">Tärkeä</option></select></label></div><div className={styles.actions}><button type="submit" className={styles.primary}>{taskEdit ? "Tallenna muutos" : "Lisää tehtävä"}</button>{taskEdit && <button type="button" onClick={() => setTaskEdit(null)}>Peruuta</button>}</div></fieldset></form>
      </Panel>);
  const calendarPanel = (<Panel title="Kalenteri" eyebrow="Pidetään päivät mielessä" action={<span className={styles.badge}>{upcoming.length} tulossa</span>}>
        <div className={styles.calendarHead}><button aria-label="Edellinen kuukausi" onClick={() => moveMonth(-1)}>←</button><strong>{new Intl.DateTimeFormat("fi-FI", { month: "long", year: "numeric", timeZone: "UTC" }).format(monthStart)}</strong><button aria-label="Seuraava kuukausi" onClick={() => moveMonth(1)}>→</button></div>
        <div className={styles.calendar}>{["ma", "ti", "ke", "to", "pe", "la", "su"].map(d => <span key={d} className={styles.dayLabel}>{d}</span>)}{Array.from({ length: offset }, (_, i) => <span key={`blank-${i}`} />)}{Array.from({ length: monthDays }, (_, i) => { const key = `${month}-${String(i + 1).padStart(2, "0")}`; const hasEvent = events.some(r => r.data.date === key); return <button key={key} aria-label={`${date(key)}${hasEvent ? ", tapahtumia" : ""}`} aria-pressed={calendarDate === key} className={`${key === data.today ? styles.today : ""} ${hasEvent ? styles.eventDay : ""}`} onClick={() => { setCalendarDate(key); setEventEdit(null); }}>{i + 1}{hasEvent && <i />}</button>; })}</div>
        <div className={styles.agendaHead}><strong>{calendarDate ? date(calendarDate) : "Seuraavaksi tulossa"}</strong>{calendarDate && <button className={styles.textButton} onClick={() => setCalendarDate("")}>Kaikki tulevat</button>}</div>
        <div className={styles.agenda}>{!selectedEvents.length && <p className={styles.empty}>{calendarDate ? "Ei merkintöjä tälle päivälle." : "Ei tulevia merkintöjä. Lisää tärkeät päivät alle."}</p>}{selectedEvents.map(event => <div className={styles.event} key={event.key}><div className={styles.countdown}>{daysBetween(str(event.data.date), data.today) >= 0 ? daysBetween(str(event.data.date), data.today) : "—"}<small>vrk</small></div><div className={styles.grow}><strong>{str(event.data.title)}</strong><p>{date(str(event.data.date))}</p>{event.data.note ? <p>{str(event.data.note)}</p> : null}</div><button className={styles.textButton} disabled={locked} onClick={() => setEventEdit(event)}>Muokkaa</button><button className={styles.iconButton} aria-label={`Poista tapahtuma ${str(event.data.title)}`} disabled={locked || !data.storageAvailable} onClick={() => remove(event)}>×</button></div>)}</div>
        <form key={eventEdit?.key ?? `new-event-${calendarDate}`} className={styles.form} onSubmit={e => submit(e, "event", eventEdit, () => setEventEdit(null))}><fieldset disabled={locked || !data.storageAvailable}><legend>{eventEdit ? "Muokkaa merkintää" : "+ Uusi merkintä"}</legend><label>Otsikko<input name="title" required maxLength={300} defaultValue={str(eventEdit?.data.title)} /></label><label>Päivämäärä<input name="date" type="date" required defaultValue={str(eventEdit?.data.date) || calendarDate || data.today} /></label><label>Lisätiedot<textarea name="note" maxLength={1000} defaultValue={str(eventEdit?.data.note)} /></label><div className={styles.actions}><button className={styles.primary} type="submit">{eventEdit ? "Tallenna muutos" : "Lisää kalenteriin"}</button>{eventEdit && <button type="button" onClick={() => setEventEdit(null)}>Peruuta</button>}</div></fieldset></form>
        {events.some(r => str(r.data.date) < data.today) && <details className={styles.details}><summary>Menneet merkinnät</summary>{events.filter(r => str(r.data.date) < data.today).reverse().map(r => <p key={r.key}>{date(str(r.data.date))} · {str(r.data.title)} <button className={styles.textButton} onClick={() => { setCalendarDate(str(r.data.date)); setEventEdit(r); }}>Muokkaa</button></p>)}</details>}
      </Panel>);
  const revenuePanel = (<Panel title="Kurssit kasvun takana" eyebrow="Omistukset & arvo" wide action={<span className={styles.badge}>Adminit poistettu</span>}>
        <div className={styles.revenueHero}><div><strong>{euro(value.amount)}</strong><p>Laskennallinen omistusarvo{value.unpriced ? " · osittainen" : ""}</p></div><span className={styles.muted}>{number(Object.values(data.current.counts).reduce((a, b) => a + b, 0))} laskettavaa omistusta</span></div>
        <details className={styles.details}><summary>Miten arvo lasketaan?</summary><p className={styles.explanation}>Oikis sisältää G:n: samaa käyttäjää ei lasketa molempiin. Useasta Oikis-versiosta lasketaan korkein paketti (etäopetus → teho → tiivis → perus); G-versioista samoin korkein. Hinnat vaikuttavat vain tähän arvioon.</p></details>
        <details className={styles.details}><summary>Kurssikohtainen erittely</summary><div className={styles.tableWrap}><table><thead><tr><th>Kurssi</th><th>Omistajia</th><th>Hinta</th><th>Arvo</th></tr></thead><tbody>{prices.filter(p => (data.current.counts[p.id] ?? 0) > 0).map(p => <tr key={p.id}><td>{p.title}</td><td>{number(data.current.counts[p.id] ?? 0)}</td><td>{p.price === null ? "—" : euro(p.price)}</td><td>{p.price === null ? "Hinta puuttuu" : euro((data.current.counts[p.id] ?? 0) * p.price)}</td></tr>)}</tbody></table></div></details>
        <div className={styles.forecastHeader}><div><h3>Jos sama tahti jatkuu</h3><p className={styles.muted}>{projection ? `Muutos ajalta ${date(projection.since)}–${date(data.today)} (${projection.days} vrk).` : "Ennuste avautuu, kun seurannasta on vähintään 7 vrk historiaa ja kaikilla lasketuilla omistuksilla on hinta."}</p></div></div>
        <div className={styles.forecasts}>{[[7, "Viikon päästä"], [30, "30 päivän päästä"], [365, "Vuoden päästä"]].map(([days, label]) => <div key={label}><p>{label}</p><strong>{projection ? euro(Math.max(0, value.amount + projection.dailyRevenue * Number(days))) : "—"}</strong><small>{projection ? `${projection.dailyRevenue >= 0 ? "+" : ""}${euro(projection.dailyRevenue * Number(days))} arvon muutos · noin ${number(Math.max(0, Math.round(data.current.users + projection.dailyUsers * Number(days))))} käyttäjää` : "Odottaa vertailuhistoriaa"}</small></div>)}</div>
        <details className={styles.details}><summary>Ennusteen perusteet</summary><p className={styles.sourceNote}>Lineaarinen skenaario omistuskannan nettomuutoksesta nykyhinnoin. Oikeuksien poistot pienentävät arvoa; alennuksia, palautuksia, veroja, kuluja tai maksutapahtumia ei tunneta. Vuosiarvio ei huomioi hakukauden kausivaihtelua. Päivän havainto tallentuu työtilan avautuessa; voit päivittää sen myös painikkeesta. Historiaa kertyy päiviltä, joina työtila avataan.</p></details>
      </Panel>);
  const instagramPanel = (<Panel title="Yleisö kasvaa täällä" eyebrow="Instagram" action={<a className={styles.textButton} href={links.find(l => l.id === "instagram")!.url} target="_blank" rel="noopener noreferrer">@valintaguru ↗</a>}>
        <div className={styles.audienceHero}><span className={styles.igIcon}>◎</span><div><strong>{latestFollower ? number(Number(latestFollower.data.count)) : "—"}</strong><p className={styles.muted}>seuraajaa{latestFollower ? ` · ${date(latestFollower.key)}` : " · ei vielä havaintoja"}</p></div></div>
        {baselineFollower && latestFollower && <p className={styles.growth}>{Number(latestFollower.data.count) - Number(baselineFollower.data.count) >= 0 ? "+" : ""}{number(Number(latestFollower.data.count) - Number(baselineFollower.data.count))} seuraajaa / {daysBetween(latestFollower.key, baselineFollower.key)} vrk</p>}
        <Trend values={followers.map(r => ({ x: r.key, y: Number(r.data.count) }))} label="Instagram-seuraajien kehitys" color="#c4a7ff" />
        </Panel>);
  const trafficPanel = (<Panel title="Sivuston pulssi" eyebrow="Vercel Web Analytics" wide action={<a href={links.find(l => l.id === "vercel")!.url} target="_blank" rel="noopener noreferrer" className={styles.textButton}>Avaa Vercel ↗</a>}>
        {traffic.available ? <><div className={styles.trafficHeadline}><strong>{number(traffic.rows.reduce((sum, r) => sum + r.pageviews, 0))}</strong><span className={styles.muted}>sivulatausta · viimeiset 7 täyttä UTC-vuorokautta</span></div><Trend values={traffic.rows.map(r => ({ x: r.timestamp, y: r.pageviews }))} label="Sivulataukset päivittäin" /><details className={styles.details}><summary>Päiväkohtaiset kävijätiedot</summary><div className={styles.tableWrap}><table><thead><tr><th>Päivä (UTC)</th><th>Kävijöitä / päivä</th><th>Sivulatauksia</th></tr></thead><tbody>{traffic.rows.map(r => <tr key={r.timestamp}><td>{r.timestamp.slice(0, 10)}</td><td>{number(r.visitors)}</td><td>{number(r.pageviews)}</td></tr>)}</tbody></table></div></details><details className={styles.details}><summary>Tietoa kävijäluvuista</summary><p className={styles.sourceNote}>Kävijät ovat Vercelin anonyymejä päiväkohtaisia kävijöitä; sama henkilö voi esiintyä useana päivänä. Ylläpitotunnuksia ei voi tunnistaa anonyymistä liikennedatasta, joten admin-rajaus koskee Supabasen käyttäjä- ja kurssilukuja.</p></details></> : <div className={styles.connectionEmpty}><span>↗</span><h3>Kävijätiedot samaan näkymään</h3><p>{traffic.error}</p><p className={styles.muted}>Vercelin seuranta on jo sivustolla. Tämän kortin käyttö vaatii analytiikkarajapinnan palvelinasetukset.</p></div>}
      </Panel>);
  const statsPanel = (<Panel title="Opiskelun tilanne" eyebrow="Supabase"><div className={styles.statRows}>{[["Aktiivisia opiskelijoita / 7 vrk", data.stats.active], ["Tallennettuja vastauksia", data.stats.answers], ["Harjoituskoeyrityksiä", data.stats.exams], ["Avoimia tiedusteluja", data.stats.inquiries]].map(([label, amount]) => <div key={String(label)}><span>{label}</span><strong>{number(amount as number | null)}</strong></div>)}</div><p className={styles.sourceNote}>Aktiivisuus perustuu tehtäväsuorituksiin. Käyttäjä- ja suoritusluvut rajaavat ylläpitotunnukset pois. Viiva tarkoittaa, ettei tietoa saatu ladattua.</p><a href="/admin/edistyminen" className={styles.fullLink}>Tutki oppimistuloksia <span>↗</span></a><a href="/admin/tiedustelut" className={styles.fullLink}>Käsittele tiedustelut <span>↗</span></a></Panel>);
  const linksPanel = (<Panel title="Pikalinkkien hallinta" eyebrow="Pikalinkit" wide><div className={styles.links}>{links.map((link, index) => <div className={styles.linkCard} key={link.id}><a href={link.url} target="_blank" rel="noopener noreferrer"><span className={styles.linkIcon}>{["S", "▲", "◎", "∞", "∞", "H", "R", "V"][index] ?? "↗"}</span><strong>{link.label}</strong><span>↗</span></a><button className={styles.textButton} onClick={() => setLinkEdit(records.find(r => r.kind === "link" && r.key === link.id) ?? { kind: "link", key: link.id, data: { label: link.label, url: link.url }, updated_at: "" })}>Muokkaa</button></div>)}</div><details className={styles.details} open={!!linkEdit}><summary>Lisää tai muokkaa linkkejä</summary><form key={linkEdit?.key ?? "new-link"} className={styles.form} onSubmit={e => submit(e, "link", linkEdit, () => setLinkEdit(null))}><fieldset disabled={locked || !data.storageAvailable}><label>Nimi<input name="label" required maxLength={80} defaultValue={str(linkEdit?.data.label)} /></label><label>Osoite<input name="url" type="url" pattern="https://.*" required placeholder="https://…" defaultValue={str(linkEdit?.data.url)} /></label><div className={styles.actions}><button className={styles.primary} type="submit">Tallenna linkki</button>{linkEdit && <button type="button" onClick={() => setLinkEdit(null)}>Peruuta</button>}{linkEdit?.updated_at && !data.links.some(l => l.id === linkEdit.key) && <button type="button" onClick={async () => { if (await remove(linkEdit)) setLinkEdit(null); }}>Poista linkki</button>}</div></fieldset></form></details></Panel>);
  const adminPanel = (<Panel title="Hallinnan työkalut" eyebrow="Nykyiset toiminnot"><div className={styles.adminLinks}>{nav.map(([href, title, note]) => <a key={href} href={href}><div><strong>{title}</strong><small>{note}</small></div><span>↗</span></a>)}</div></Panel>);
  const workQueues = <div className={styles.queueGrid}>
    <Panel title="Seuraavaksi kalenterissa" eyebrow="Kalenteri" action={<span className={styles.badge}>{upcoming.length} tulossa</span>}>
      <ol className={styles.cleanQueue}>{upcoming.length ? upcoming.map(event => <li key={event.key}>
        <div className={styles.dateTile}><strong>{new Date(str(event.data.date) + "T12:00:00Z").getUTCDate()}</strong><span>{new Intl.DateTimeFormat("fi-FI", { month: "short", timeZone: "UTC" }).format(new Date(str(event.data.date) + "T12:00:00Z"))}</span></div>
        <div className={styles.grow}><strong>{str(event.data.title)}</strong><p>{str(event.data.note) || date(str(event.data.date))}</p></div>
        <span className={styles.duePill}>{daysBetween(str(event.data.date), data.today) === 0 ? "Tänään" : `${daysBetween(str(event.data.date), data.today)} vrk`}</span>
      </li>) : <li className={styles.empty}>Ei tulevia merkintöjä. Lisää ensimmäinen alla olevasta hallinnasta.</li>}</ol>
    </Panel>
    <Panel title="Tiimin tehtäväjono" eyebrow="To do" action={<span className={styles.badge}>{tasks.filter(t => !t.data.done).length} avoinna</span>}>
      <ol className={styles.cleanQueue}>{tasks.filter(t => !t.data.done).length ? tasks.filter(t => !t.data.done).map((task, index) => <li key={task.key}>
        <span className={`${styles.queueIndex} ${task.data.priority === "high" ? styles.importantIndex : ""}`}>{String(index + 1).padStart(2, "0")}</span>
        <div className={styles.grow}><strong>{str(task.data.title)}</strong><p>{str(task.data.owner) || "Tiimi"}{task.data.due ? ` · ${date(str(task.data.due))}` : ""}</p></div>
        {task.data.priority === "high" && <span className={styles.priority}>Tärkeä</span>}
      </li>) : <li className={styles.empty}>Kaikki valmista. Uudet tehtävät voit lisätä alla olevasta hallinnasta.</li>}</ol>
    </Panel>
  </div>;
  const tabs = [["overview", "Yleiskuva"], ["work", "Tehtävät & kalenteri"], ["growth", "Kasvu & tuotto"], ["tools", "Työkalut"]];
  return <div className={styles.dashboard}>
    <header className={styles.header}>
      <div><p className={styles.eyebrow}><span className={styles.liveDot} /> VALINTAGURU / TYÖTILA</p><h1>Hyvä päivä kasvulle<span>.</span></h1><p className={styles.muted}>{new Intl.DateTimeFormat("fi-FI", { dateStyle: "full", timeZone: "Europe/Helsinki" }).format(new Date(data.generatedAt))} <span className={styles.separator}>/</span> Teidän yhteinen ohjaamo</p></div>
      <nav className={styles.serviceDock} aria-label="Palveluiden pikalinkit">{links.map(link => <a key={link.id} className={styles.serviceButton} data-service={link.id} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`${link.label}, avaa uudessa välilehdessä`} title={link.label}><span><ServiceIcon id={link.id} /></span><small>{link.label}</small></a>)}</nav>
    </header>
    <div className={styles.tabBar}>
      <div className={styles.tabs} role="tablist" aria-label="Työtilan näkymä">{tabs.map(([id, label], index) => <button key={id} id={`tab-${id}`} type="button" role="tab" aria-selected={tab === id} aria-controls="workspace-content" tabIndex={tab === id ? 0 : -1} onClick={() => setTab(id)} onKeyDown={event => {
        let next = index;
        if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
        else if (event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = tabs.length - 1;
        else return;
        event.preventDefault(); setTab(tabs[next][0]);
        (event.currentTarget.parentElement?.querySelectorAll("button")[next] as HTMLButtonElement | undefined)?.focus();
      }}>{label}</button>)}</div>
      <button disabled={locked} onClick={() => startTransition(() => router.refresh())} className={styles.outline}>{refreshing ? "Päivitetään…" : "↻ Päivitä tiedot"}</button>
    </div>
    <div role={error ? "alert" : "status"} aria-live="polite" className={message ? `${styles.notice} ${error ? styles.warning : ""}` : styles.srOnly}>{message}</div>
    {!data.storageAvailable && <div role="status" className={`${styles.notice} ${styles.warning}`}>Yhteinen työtila odottaa tietokantayhteyden käyttöönottoa. Tilastot ovat luettavissa; tallennus avautuu migraation valmistuttua.</div>}
    <div id="workspace-content" role="tabpanel" aria-labelledby={`tab-${tab}`}>
      {tab === "overview" && <>
    <section id="luvut" className={styles.kpis} aria-label="Tärkeimmät luvut">
      {[
        ["Käyttäjät", number(data.current.users), `+${data.stats.newUsers} rekisteröitynyttä / 7 vrk`, "mint"],
        ["Kurssin omistajia", number(data.stats.owners), `${data.stats.withoutCourse} käyttäjää ilman kurssia`, "blue"],
        ["Kurssiomistusten arvo", euro(value.amount), value.unpriced ? `${value.unpriced} omistusta ilman hintaa · osittainen arvio` : "Arvio annetuilla kurssihinnoilla", "violet"],
        ["Instagram", latestFollower ? number(Number(latestFollower.data.count)) : "—", latestFollower ? `@valintaguru · ${date(latestFollower.key)}` : "Lisää ensimmäinen seuraajahavainto", "pink"],
      ].map(([title, amount, note, color]) => <article key={title} className={`${styles.kpi} ${styles[color]}`}><p>{title}</p><strong>{amount}</strong><small>{note}</small></article>)}
    </section>
    <p className={styles.sourceNote}>Supabase Auth + kurssioikeudet · {data.excludedCount} ylläpitotunnusta rajattu pois. Omistusarvo on laskennallinen arvio, ei maksutosite tai kirjanpidon liikevaihto.</p>

        <div className={styles.grid}>{trafficPanel}{statsPanel}</div>
        {workQueues}
        <div className={styles.grid}>{revenuePanel}{instagramPanel}</div>
      </>}
      {tab === "work" && <><div className={styles.sectionIntro}><p className={styles.eyebrow}>Yhteinen arki</p><h2>Tehtävät & kalenteri</h2><p className={styles.muted}>Tulevat päivät ja seuraavat tehtävät yhdellä silmäyksellä.</p></div>{workQueues}</>}
      {tab === "growth" && <><div className={styles.sectionIntro}><p className={styles.eyebrow}>Kasvun seuranta</p><h2>Kasvu & tuotto</h2><p className={styles.muted}>Kurssiomistukset, ennusteet ja Instagramin kehitys.</p></div><div className={styles.grid}>{revenuePanel}{instagramPanel}</div></>}
      {tab === "tools" && <div className={styles.sectionIntro}><p className={styles.eyebrow}>Yhteinen työkalupakki</p><h2>Työkalut & asetukset</h2><p className={styles.muted}>Palvelut avautuvat yläreunan kuvakkeista. Muokkaa linkkejä ja avaa hallintatoiminnot alta.</p></div>}
      <section className={styles.management} aria-label="Näkymän hallinta">
        <div className={styles.managementHead}><div><p className={styles.eyebrow}>Hallinta</p><h2>Muokkaa työtilaa</h2></div><span className={styles.muted}>Avaa tarvitsemasi työkalu</span></div>
        {(tab === "overview" || tab === "work") && <>
          <details className={styles.managementItem}><summary><span className={styles.manageIcon}>✓</span><span><strong>Tehtävien hallinta</strong><small>Lisää, muokkaa ja merkitse valmiiksi</small></span><span className={styles.expandIcon}>+</span></summary>{tasksPanel}</details>
          <details className={styles.managementItem}><summary><span className={styles.manageIcon}>▦</span><span><strong>Kalenterin hallinta</strong><small>Kuukausinäkymä, päivämäärät ja merkinnät</small></span><span className={styles.expandIcon}>+</span></summary>{calendarPanel}</details>
        </>}
        {(tab === "overview" || tab === "growth") && <>
          <details className={styles.managementItem}><summary><span className={styles.manageIcon}>€</span><span><strong>Kurssihinnat & seuranta</strong><small>Muokkaa laskentahintoja ja tallenna päivän havainto</small></span><span className={styles.expandIcon}>+</span></summary><Panel title="Kurssihintojen hallinta" eyebrow="Laskennan asetukset" wide><div className={styles.tableWrap}><table><caption className={styles.srOnly}>Kurssien omistajat, muokattavat hinnat ja laskennallinen arvo</caption><thead><tr><th>Kurssi</th><th>Omistajia</th><th>Hinta / €</th><th>Arvo</th></tr></thead><tbody>{prices.map(p => { const stored = records.find(r => r.kind === "price" && r.key === p.id); return <tr key={p.id}><td>{p.title}<small>{p.id}</small></td><td>{number(data.current.counts[p.id] ?? 0)}</td><td><form key={`${p.id}-${p.price}`} className={styles.priceForm} onSubmit={e => submit(e, "price", stored ?? null, () => {})}><input type="hidden" name="id" value={p.id} /><input aria-label={`${p.title}: hinta euroina`} name="price" type="number" min="0" max="1000000" step="0.01" required placeholder="Aseta" defaultValue={p.price ?? ""} disabled={locked || !data.storageAvailable} /><button aria-label={`Tallenna kurssin ${p.title} hinta`} disabled={locked || !data.storageAvailable}>✓</button></form></td><td>{p.price === null ? "Hinta puuttuu" : euro((data.current.counts[p.id] ?? 0) * p.price)}</td></tr>; })}</tbody></table></div><div className={styles.actions}><button disabled={locked || !data.storageAvailable} onClick={() => request("/api/admin/workspace/sync?mode=portfolio")}>Tallenna päivän havainto</button></div></Panel></details>
          <details className={styles.managementItem}><summary><span className={styles.manageIcon}>◎</span><span><strong>Instagramin hallinta</strong><small>Hae, lisää tai korjaa seuraajahavaintoja</small></span><span className={styles.expandIcon}>+</span></summary><Panel title="Seuraajahavaintojen hallinta" eyebrow="Instagram"><button className={styles.outline} disabled={locked || !data.storageAvailable || !data.connections.instagram} onClick={() => request("/api/admin/workspace/sync?mode=instagram")}>↻ Hae Instagramista</button><p className={styles.sourceNote}>{data.connections.instagram ? "Meta-yhteys asetettu. Hae-painike tallentaa tämän päivän seuraajamäärän; samana päivänä on yksi havainto." : "Meta-yhteyttä ei ole asetettu. Voit kirjata päivittäisen seuraajamäärän käsin."}</p>
        <form key={followerEdit?.key ?? "new-follower"} className={styles.form} onSubmit={e => submit(e, "follower", followerEdit, () => setFollowerEdit(null))}><fieldset disabled={locked || !data.storageAvailable}><legend>{followerEdit ? "Korjaa havaintoa" : "+ Kirjaa seuraajamäärä"}</legend><div className={styles.formRow}><label>Päivä<input type="date" name="date" required max={data.today} defaultValue={followerEdit?.key ?? data.today} readOnly={!!followerEdit} /></label><label>Seuraajia<input type="number" name="count" min="0" max="1000000000" step="1" required defaultValue={followerEdit ? Number(followerEdit.data.count) : ""} /></label></div><div className={styles.actions}><button type="submit" className={styles.primary}>Tallenna havainto</button>{followerEdit && <button type="button" onClick={() => setFollowerEdit(null)}>Peruuta</button>}</div></fieldset></form>
        <details className={styles.details}><summary>Havainnot ({followers.length})</summary>{[...followers].reverse().map(r => <div className={styles.historyRow} key={r.key}><span>{date(r.key)} · {number(Number(r.data.count))} <small>{r.data.source === "instagram" ? "Meta API" : "Käsin"}</small></span><button className={styles.textButton} onClick={() => setFollowerEdit(r)}>Muokkaa</button><button className={styles.iconButton} aria-label={`Poista seuraajahavainto ${date(r.key)}`} disabled={locked} onClick={() => remove(r)}>×</button></div>)}</details>
      </Panel></details>
        </>}
        {(tab === "overview" || tab === "tools") && <details className={styles.managementItem}><summary><span className={styles.manageIcon}>↗</span><span><strong>Pikalinkkien hallinta</strong><small>Vaihda osoitteita ja lisää palveluita</small></span><span className={styles.expandIcon}>+</span></summary>{linksPanel}</details>}
      </section>
    </div>
    <section className={styles.legacyTools} aria-label="Nykyiset hallintatoiminnot">{adminPanel}</section>
    <footer className={styles.footer}><p>ValintaGuru · Päivitetty {new Intl.DateTimeFormat("fi-FI", { timeStyle: "short", timeZone: "Europe/Helsinki" }).format(new Date(data.generatedAt))}</p><button className={styles.textButton} onClick={exportWorkspace}>Lataa työtilan tiedot ↓</button></footer>
  </div>;
}
