import type { SupabaseClient } from "@supabase/supabase-js";
import type { ProgressRow } from "@/lib/progressAnalytics";

export async function loadProgressRows(client: SupabaseClient, userId: string, courseId: string, signal?: AbortSignal) {
  const rows: ProgressRow[] = [];
  const pageSize = 500;
  let total: number | null = null;
  while (total == null || rows.length < total) {
    if (signal?.aborted) throw new Error("Haku keskeytettiin.");
    let query = client.from("student_progress_attempts")
      .select("*", { count: "exact" })
      .eq("user_id", userId).eq("course_id", courseId)
      .order("answered_at", { ascending: true }).order("id", { ascending: true })
      .range(rows.length, rows.length + pageSize - 1);
    if (signal) query = query.abortSignal(signal);
    const { data, error, count } = await query;
    if (error) throw new Error(error.message);
    total = count;
    const page = (data ?? []) as ProgressRow[];
    if (!page.length) {
      if (total != null && rows.length < total) throw new Error("Vastaushistoria saatiin vain osittain. Päivitä tiedot uudelleen.");
      break;
    }
    rows.push(...page);
    if (total == null && page.length < pageSize) break;
  }
  return rows;
}
