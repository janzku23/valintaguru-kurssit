import { helsinkiDay } from "@/lib/adminDashboardModel";

function text(value: unknown, max: number, optional = false): string {
  if (optional && (value === undefined || value === "")) return "";
  if (typeof value !== "string" || !value.trim() || value.trim().length > max) throw new Error("Tarkista tekstikentät.");
  return value.trim();
}
function day(value: unknown, optional = false): string {
  if (optional && !value) return "";
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value) ||
    !Number.isFinite(Date.parse(value)) || new Date(value).toISOString().slice(0, 10) !== value) throw new Error("Tarkista päivämäärä.");
  return value;
}
export function validateRecord(body: Record<string, unknown>, courseIds: string[]): { kind: string; key: string; data: Record<string, string | number | boolean> } {
  const kind = text(body.kind, 20);
  const key = text(body.key, 100);
  const data = body.data;
  if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("Virheelliset tiedot.");
  const d = data as Record<string, unknown>;
  if (kind === "todo") {
    if (typeof d.done !== "boolean" || !["normal", "high"].includes(String(d.priority))) throw new Error("Tarkista tehtävän tiedot.");
    return { kind, key, data: { title: text(d.title, 300), owner: text(d.owner, 80, true), due: day(d.due, true), priority: String(d.priority), done: d.done } };
  }
  if (kind === "event") return { kind, key, data: { title: text(d.title, 300), date: day(d.date), note: text(d.note, 1000, true) } };
  if (kind === "follower") {
    day(key);
    if (key > helsinkiDay() || typeof d.count !== "number" || !Number.isSafeInteger(d.count) || d.count < 0 || d.count > 1e9) throw new Error("Tarkista seuraajamäärä ja päivämäärä.");
    return { kind, key, data: { count: d.count, source: "manual" } };
  }
  if (kind === "price") {
    if (!courseIds.includes(key) || typeof d.price !== "number" || !Number.isFinite(d.price) || d.price < 0 || d.price > 1e6 || Math.abs(Math.round(d.price * 100) - d.price * 100) > 1e-6) throw new Error("Hinnan tulee olla 0–1 000 000 euroa, enintään kaksi desimaalia.");
    return { kind, key, data: { price: Math.round(d.price * 100) / 100 } };
  }
  if (kind === "link") {
    const url = new URL(text(d.url, 2000));
    if (url.protocol !== "https:" || url.username || url.password) throw new Error("Anna turvallinen https-osoite.");
    return { kind, key, data: { label: text(d.label, 80), url: url.toString() } };
  }
  throw new Error("Tuntematon tietotyyppi.");
}
