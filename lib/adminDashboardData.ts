import "server-only";
import { createAdminClient } from "@/utils/supabase/admin";
import { ADMIN_EMAIL } from "@/lib/adminAccess";
import { courses, COURSE_PRICES } from "@/data/courses";
import { DAY, helsinkiDay, isTeamEmail, portfolio, type DashboardUser, type WorkspaceRecord } from "@/lib/adminDashboardModel";

type Right = { id: string; user_id: string | null; email: string | null; course_id: string | null; course_slug: string | null; status: string | null };
export async function businessUsers() {
  const admin = createAdminClient();
  const authUsers = [];
  for (let page = 1; ; page++) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 1000 });
    if (error) throw new Error("Käyttäjätietoja ei saatu Supabasesta.");
    authUsers.push(...data.users);
    if (data.users.length < 1000) break;
  }
  const rights: Right[] = [];
  for (let from = 0; ; from += 1000) {
    const { data, error } = await admin.from("student_courses")
      .select("id,user_id,email,course_id,course_slug,status").order("id").range(from, from + 999);
    if (error) throw new Error("Kurssiomistuksia ei saatu Supabasesta.");
    rights.push(...(data as Right[]));
    if (data.length < 1000) break;
  }
  // This is a second entitlement source used by the existing course access code.
  // Some installations do not have this optional legacy table.
  for (let from = 0; ; from += 1000) {
    const { data, error } = await admin.from("course_entitlements")
      .select("id,email,course_slug,status").order("id").range(from, from + 999);
    if (error) {
      if (["42P01", "PGRST205"].includes(error.code)) break;
      throw new Error("Kurssien lisäoikeuksia ei saatu Supabasesta.");
    }
    rights.push(...data.map(r => ({ ...r, user_id: null, course_id: null })) as Right[]);
    if (data.length < 1000) break;
  }
  const excluded = authUsers.filter(u => isTeamEmail(u.email ?? "", ADMIN_EMAIL));
  const users: DashboardUser[] = authUsers.filter(u => !isTeamEmail(u.email ?? "", ADMIN_EMAIL)).map(u => ({
    id: u.id, email: u.email ?? "", createdAt: u.created_at,
    courseIds: [...new Set(rights.filter(r =>
      (!r.status || ["active", "enabled", "käytössä", "kaytossa"].includes(r.status.trim().toLowerCase())) &&
      (r.user_id === u.id || (!!u.email && r.email?.trim().toLowerCase() === u.email.trim().toLowerCase()))
    ).map(r => r.course_id ?? r.course_slug).filter((id): id is string => !!id))],
  }));
  return { users, excludedIds: excluded.map(u => u.id), excludedCount: excluded.length };
}

export async function workspaceRecords(): Promise<{ records: WorkspaceRecord[]; available: boolean }> {
  const records: WorkspaceRecord[] = [];
  for (let from = 0; ; from += 1000) {
    const { data, error } = await createAdminClient().from("admin_workspace_records").select("kind,key,data,updated_at")
      .order("kind").order("key").range(from, from + 999);
    if (error) return { records: [], available: false };
    records.push(...data as WorkspaceRecord[]);
    if (data.length < 1000) break;
  }
  return { records, available: true };
}

export async function dashboardData() {
  const admin = createAdminClient();
  const [business, workspace] = await Promise.all([businessUsers(), workspaceRecords()]);
  const since = new Date(Date.now() - 7 * DAY).toISOString();
  const excluded = business.excludedIds;
  function withoutTeam<T extends { not: (column: string, operator: string, value: string) => T }>(query: T): T {
    return excluded.length ? query.not("user_id", "in", `(${excluded.join(",")})`) : query;
  }
  const [answers, exams, inquiries] = await Promise.all([
    withoutTeam(admin.from("student_progress_attempts").select("id", { count: "exact", head: true })),
    withoutTeam(admin.from("practice_exam_attempts").select("id", { count: "exact", head: true })),
    admin.from("support_inquiries").select("id", { count: "exact", head: true }).eq("status", "open"),
  ]);
  const active = new Set<string>();
  let activityAvailable = true;
  for (let from = 0; ; from += 1000) {
    const { data, error } = await admin.from("student_progress_attempts").select("id,user_id").gte("answered_at", since)
      .order("id").range(from, from + 999);
    if (error) { activityAvailable = false; break; }
    for (const row of data) if (!excluded.includes(row.user_id)) active.add(row.user_id);
    if (data.length < 1000) break;
  }
  const registered = new Set(business.users.map(u => u.id));
  const activeCount = [...active].filter(id => registered.has(id)).length;
  const prices = courses.map(c => {
    const stored = workspace.records.find(r => r.kind === "price" && r.key === c.id);
    const listed = COURSE_PRICES[c.id]?.replace(/[^\d,.]/g, "").replace(",", ".");
    return { id: c.id, title: c.title, price: typeof stored?.data.price === "number" ? stored.data.price : listed ? Number(listed) : null };
  });
  const projectRef = (() => { try { return new URL(process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").hostname.split(".")[0]; } catch { return ""; } })();
  return {
    current: portfolio(business.users), prices, records: workspace.records, storageAvailable: workspace.available,
    excludedCount: business.excludedCount,
    stats: { active: activityAvailable ? activeCount : null, answers: answers.error ? null : answers.count,
      exams: exams.error ? null : exams.count, inquiries: inquiries.error ? null : inquiries.count,
      newUsers: business.users.filter(u => u.createdAt >= since).length,
      owners: business.users.filter(u => u.courseIds.length > 0).length,
      withoutCourse: business.users.filter(u => !u.courseIds.length).length },
    links: [
      { id: "supabase", label: "Supabase", url: projectRef ? `https://supabase.com/dashboard/project/${projectRef}` : "https://supabase.com/dashboard" },
      { id: "vercel", label: "Vercel", url: "https://vercel.com/dashboard" },
      { id: "instagram", label: "Instagram", url: "https://www.instagram.com/valintaguru/" },
      { id: "meta", label: "Meta · mainokset", url: "https://adsmanager.facebook.com/" },
      { id: "business", label: "Meta Business Suite", url: "https://business.facebook.com/" },
      { id: "holvi", label: "Holvi · myynti", url: "https://holvi.com/shop/ValintaGuru/" },
      { id: "resend", label: "Resend · sähköpostit", url: "https://resend.com/emails" },
      { id: "site", label: "Valintaguru.fi", url: "https://www.valintaguru.fi" },
    ],
    connections: { instagram: !!(process.env.INSTAGRAM_ACCESS_TOKEN && process.env.INSTAGRAM_USER_ID && process.env.META_GRAPH_VERSION),
      vercel: !!(process.env.VERCEL_ANALYTICS_TOKEN && process.env.VERCEL_ANALYTICS_PROJECT_ID) },
    generatedAt: new Date().toISOString(), today: helsinkiDay(),
  };
}
export type DashboardData = Awaited<ReturnType<typeof dashboardData>>;
