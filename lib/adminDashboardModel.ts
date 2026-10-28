// Pure business rules; deliberately separate from course access and payment logic.
export type DashboardUser = { id: string; email: string; createdAt: string; courseIds: string[] };
export type WorkspaceRecord = { kind: string; key: string; data: Record<string, unknown>; updated_at: string };
export type Portfolio = { date: string; users: number; counts: Record<string, number> };
export type CoursePrice = { id: string; title: string; price: number | null };
export const DAY = 86_400_000;

export function helsinkiDay(date = new Date()) {
  return new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Helsinki" }).format(date);
}
export function isTeamEmail(email: string, adminEmail = "admin@valintaguru.fi") {
  const value = email.trim().toLowerCase();
  const local = value.split("@")[0];
  return value === adminEmail.trim().toLowerCase() || value === "admin@valintaguru.fi" ||
    /^info@valintaguru(?:\.|$)/.test(value) ||
    ["jani.tuomaala", "iina.lindholm", "julianna.lintukangas"].includes(local);
}

// Multiple Oikis/G entitlements may be bundled. Count the highest tier once.
// These rules only affect the dashboard estimate; no access rights are modified.
export function billableCourses(ids: string[]) {
  const unique = [...new Set(ids.map(id => id.trim().toLowerCase()))];
  const oikis = ["oikis-teho-etaope", "oikis-teho", "oikis-tiivis", "oikis"].find(id => unique.includes(id));
  const g = ["valintakoe-g-etaope", "valintakoe-g"].find(id => unique.includes(id));
  return [...(oikis ? [oikis] : g ? [g] : []), ...unique.filter(id => !id.startsWith("oikis") && !id.startsWith("valintakoe-g"))];
}
export function portfolio(users: DashboardUser[], date = helsinkiDay()): Portfolio {
  const counts: Record<string, number> = {};
  for (const user of users) for (const id of billableCourses(user.courseIds)) counts[id] = (counts[id] ?? 0) + 1;
  return { date, users: users.length, counts };
}
export function valuation(counts: Record<string, number>, prices: CoursePrice[]) {
  let amount = 0;
  let unpriced = 0;
  for (const [id, count] of Object.entries(counts)) {
    const price = prices.find(p => p.id === id)?.price;
    if (price == null) unpriced += count;
    else amount += price * count;
  }
  return { amount, unpriced };
}
export function forecast(current: Portfolio, history: Portfolio[], prices: CoursePrice[]) {
  // Use the most recent observation at least seven days old, at most 35 days old.
  const now = Date.parse(current.date + "T12:00:00Z");
  const baseline = history.filter(p => {
    const age = (now - Date.parse(p.date + "T12:00:00Z")) / DAY;
    return age >= 7 && age <= 35;
  }).sort((a, b) => b.date.localeCompare(a.date))[0];
  if (!baseline) return null;
  const days = (now - Date.parse(baseline.date + "T12:00:00Z")) / DAY;
  const oldValue = valuation(baseline.counts, prices);
  const newValue = valuation(current.counts, prices);
  if (oldValue.unpriced || newValue.unpriced) return null;
  return { days, since: baseline.date, dailyRevenue: (newValue.amount - oldValue.amount) / days, dailyUsers: (current.users - baseline.users) / days };
}
