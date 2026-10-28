import "server-only";
import { DAY } from "@/lib/adminDashboardModel";

export async function instagramFollowers() {
  const { INSTAGRAM_ACCESS_TOKEN: token, INSTAGRAM_USER_ID: id, META_GRAPH_VERSION: version } = process.env;
  if (!token || !id || !version) throw new Error("Instagram-yhteys puuttuu. Seuraajamäärän voi tallentaa myös käsin.");
  if (!/^v\d+\.\d+$/.test(version) || !/^\d+$/.test(id)) throw new Error("Tarkista Instagram-yhteyden palvelinasetukset.");
  const url = new URL(`https://graph.facebook.com/${version}/${id}`);
  url.searchParams.set("fields", "followers_count,username");
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` }, cache: "no-store", signal: AbortSignal.timeout(12000) });
  if (!res.ok) throw new Error("Meta ei palauttanut seuraajamäärää. Tarkista käyttöoikeudet ja tokenin voimassaolo.");
  const body = await res.json();
  if (!Number.isSafeInteger(body.followers_count) || body.followers_count < 0) throw new Error("Instagram palautti virheellisen seuraajamäärän.");
  if (typeof body.username !== "string" || body.username.toLowerCase() !== "valintaguru") throw new Error("Instagram-yhteys osoittaa eri tiliin kuin @valintaguru.");
  return body.followers_count as number;
}

type TrafficRow = { timestamp: string; pageviews: number; visitors: number };
export async function vercelTraffic() {
  const token = process.env.VERCEL_ANALYTICS_TOKEN;
  const project = process.env.VERCEL_ANALYTICS_PROJECT_ID;
  if (!token || !project) return { available: false as const, error: "Yhdistä Vercel palvelinasetuksista nähdäksesi kävijätiedot.", rows: [] as TrafficRow[] };
  // Last seven complete UTC days, separate from Helsinki business dates.
  const today = new Date(); today.setUTCHours(0, 0, 0, 0);
  const until = new Date(today.getTime() - 1); // Vercel's until is inclusive.
  const since = new Date(today.getTime() - 7 * DAY);
  const url = new URL("https://api.vercel.com/v1/query/web-analytics/visits/aggregate");
  url.searchParams.set("projectId", project);
  if (process.env.VERCEL_ANALYTICS_TEAM_ID) url.searchParams.set("teamId", process.env.VERCEL_ANALYTICS_TEAM_ID);
  url.searchParams.set("since", since.toISOString());
  url.searchParams.set("until", until.toISOString());
  url.searchParams.set("by", "day");
  url.searchParams.set("limit", "7");
  // Aggregate visitors must not be summed into unique weekly visitors.
  try {
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` }, cache: "no-store", signal: AbortSignal.timeout(12000) });
    if (!res.ok) throw new Error();
    const body = await res.json();
    if (!Array.isArray(body.data) || !body.data.every((r: TrafficRow) => Number.isFinite(r.pageviews) && Number.isFinite(r.visitors) && Number.isFinite(Date.parse(r.timestamp)))) throw new Error();
    return { available: true as const, error: "", rows: (body.data as TrafficRow[]).sort((a, b) => a.timestamp.localeCompare(b.timestamp)), since: since.toISOString(), until: until.toISOString() };
  } catch {
    return { available: false as const, error: "Vercelin tietoja ei saatu. Tarkista token, projekti, tiimi ja analytiikan saatavuus.", rows: [] as TrafficRow[] };
  }
}
