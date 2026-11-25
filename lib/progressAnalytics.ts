import { UNSURE_ANSWER_ID } from "@/data/practiceExams/types";

export type ProgressRow = {
  id: string;
  user_id?: string;
  course_id: string;
  question_id: string;
  question: string;
  area: string | null;
  category?: string | null;
  category_id?: number | null;
  exercise_id?: string | null;
  answer_status?: "correct" | "incorrect" | "skipped" | null;
  selected_answer_ids: string[] | null;
  correct_answer_ids?: string[] | null;
  is_correct: boolean;
  answered_at: string;
  answer_time_ms?: number | null;
  answer_time_source?: string | null;
  session_duration_ms?: number | null;
  session_id?: string | null;
  session_type?: string | null;
  session_name?: string | null;
};

export type ProgressStatus = "correct" | "incorrect" | "skipped";
export type ProgressPeriod = "all" | "30" | "7";
export type GroupStats = {
  name: string;
  total: number;
  correct: number;
  incorrect: number;
  skipped: number;
  resolved: number;
  accuracy: number | null;
};
export type ProgressSession = GroupStats & {
  id: string;
  finishedAt: string;
  durationMs: number | null;
  paceMs: number | null;
  score: number;
  isReadingExercise: boolean;
  attemptNumber: number;
  scoreChange: number | null;
};

export function getProgressStatus(row: ProgressRow): ProgressStatus {
  // An explicit skip or empty selection must never count as a wrong answer.
  if (row.answer_status === "skipped" || !row.selected_answer_ids?.length ||
      row.selected_answer_ids.includes(UNSURE_ANSWER_ID)) return "skipped";
  if (row.answer_status) return row.answer_status;
  return row.is_correct ? "correct" : "incorrect";
}

export function accuracyOf(correct: number, resolved: number) {
  return resolved > 0 ? Math.round((correct / resolved) * 100) : null;
}

export function summarizeProgress(rows: ProgressRow[]) {
  const correct = rows.filter((row) => getProgressStatus(row) === "correct").length;
  const incorrect = rows.filter((row) => getProgressStatus(row) === "incorrect").length;
  const skipped = rows.length - correct - incorrect;
  return { total: rows.length, correct, incorrect, skipped, resolved: correct + incorrect,
    accuracy: accuracyOf(correct, correct + incorrect) };
}

export function safeProgressTime(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) && value >= 0 ? value : null;
}

export function hasQuestionTiming(row: ProgressRow) {
  if (safeProgressTime(row.answer_time_ms) == null) return false;
  if (row.answer_time_source === "active_question") return true;
  return !["exam", "koe", "test", "mock_exam", "harjoituskoe", "valintakoe_g_harjoitus"].includes(row.session_type?.toLowerCase() ?? "");
}

function chronological(a: ProgressRow, b: ProgressRow) {
  return Date.parse(a.answered_at) - Date.parse(b.answered_at) || a.id.localeCompare(b.id);
}

export function questionKey(row: ProgressRow) {
  return `${row.exercise_id ?? ""}:${row.question_id}`;
}

export function deduplicateProgress(rows: ProgressRow[]) {
  const seen = new Map<string, ProgressRow>();
  for (const row of [...rows].sort(chronological)) {
    // A completed session can be synced again; those are not new attempts.
    const key = row.session_id ? `session:${row.session_id}:${questionKey(row)}` : `row:${row.id}`;
    seen.set(key, row);
  }
  return [...seen.values()].sort(chronological);
}

export function latestQuestionRows(rows: ProgressRow[]) {
  const latest = new Map<string, ProgressRow>();
  for (const row of [...rows].sort(chronological)) latest.set(questionKey(row), row);
  return [...latest.values()];
}

export function groupProgress(rows: ProgressRow[], key: (row: ProgressRow) => string): GroupStats[] {
  const groups = new Map<string, ProgressRow[]>();
  for (const row of rows) {
    const name = key(row).trim() || "Yleinen";
    groups.set(name, [...(groups.get(name) ?? []), row]);
  }
  return [...groups].map(([name, items]) => ({ name, ...summarizeProgress(items) }))
    .sort((a, b) => (a.accuracy ?? 101) - (b.accuracy ?? 101) || b.total - a.total || a.name.localeCompare(b.name, "fi"));
}

const helsinkiDateFormatter = new Intl.DateTimeFormat("sv-SE", {
  timeZone: "Europe/Helsinki", year: "numeric", month: "2-digit", day: "2-digit",
});
export function helsinkiDay(value: string | number | Date) {
  return helsinkiDateFormatter.format(new Date(value));
}

export function progressForPeriod(rows: ProgressRow[], period: ProgressPeriod, now = Date.now()) {
  if (period === "all") return rows;
  // Calendar days in the student's timezone, including today (also across DST).
  const date = new Date(`${helsinkiDay(now)}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() - (Number(period) - 1));
  const firstDay = date.toISOString().slice(0, 10);
  const today = helsinkiDay(now);
  const sessionFinished = new Map<string, string>();
  for (const row of rows) {
    if (row.session_id && (!sessionFinished.has(row.session_id) || Date.parse(row.answered_at) > Date.parse(sessionFinished.get(row.session_id)!))) {
      sessionFinished.set(row.session_id, row.answered_at);
    }
  }
  return rows.filter((row) => {
    // Include an entire session by its completion day, even across midnight.
    const day = helsinkiDay(row.session_id ? sessionFinished.get(row.session_id)! : row.answered_at);
    return day >= firstDay && day <= today;
  });
}

export function buildProgressSessions(input: ProgressRow[], period: ProgressPeriod = "all", now = Date.now()): ProgressSession[] {
  const rows = deduplicateProgress(input);
  const groups = new Map<string, ProgressRow[]>();
  for (const row of rows) {
    if (!row.session_id || !["exam", "koe", "test", "mock_exam", "harjoituskoe", "valintakoe_g_harjoitus"].includes(row.session_type?.toLowerCase() ?? "")) continue;
    groups.set(row.session_id, [...(groups.get(row.session_id) ?? []), row]);
  }
  const sessions = [...groups].map(([id, items]) => {
    const sorted = [...items].sort(chronological);
    const last = sorted[sorted.length - 1];
    const summary = summarizeProgress(items);
    const explicit = items.map((row) => safeProgressTime(row.session_duration_ms)).filter((time): time is number => time != null);
    const legacy = items.filter((row) => row.session_type === "harjoituskoe" && row.answer_time_source !== "active_question")
      .map((row) => safeProgressTime(row.answer_time_ms)).filter((time): time is number => time != null);
    // Session duration repeats on every row: count it once, never sum it.
    const durationMs = explicit.length ? Math.max(...explicit) : legacy.length === items.length ? legacy.reduce((sum, time) => sum + time, 0) : null;
    const isReadingExercise = last.session_type === "valintakoe_g_harjoitus";
    return { id, name: last.session_name || "Harjoituskoe", ...summary, finishedAt: last.answered_at,
      durationMs, paceMs: durationMs == null ? null : Math.round(durationMs / items.length),
      score: summary.correct - (isReadingExercise ? 0 : summary.incorrect), isReadingExercise,
      practiceKey: `${last.session_type}:${last.exercise_id || last.session_name || id}`,
    };
  }).sort((a, b) => Date.parse(a.finishedAt) - Date.parse(b.finishedAt) || a.id.localeCompare(b.id));
  const previous = new Map<string, ProgressSession>();
  const numbered = sessions.map((session) => {
    const prior = previous.get(session.practiceKey);
    const result: ProgressSession = {
      ...session,
      attemptNumber: (prior?.attemptNumber ?? 0) + 1,
      scoreChange: prior && prior.total === session.total ? session.score - prior.score : null,
    };
    previous.set(session.practiceKey, result);
    return result;
  }).reverse();
  if (period === "all") return numbered;
  const included = new Set(progressForPeriod(rows, period, now).map((row) => row.session_id));
  return numbered.filter((session) => included.has(session.id));
}

export function buildProgressAnalytics(input: ProgressRow[]) {
  const rows = deduplicateProgress(input);
  const latest = latestQuestionRows(rows);
  const summary = summarizeProgress(rows);
  const groups = groupProgress(latest, (row) => row.area ?? "Yleinen");
  const categories = groupProgress(latest, (row) => row.category ?? "Yleinen");
  const review = latest.filter((row) => getProgressStatus(row) !== "correct")
    .sort((a, b) => Number(getProgressStatus(a) === "skipped") - Number(getProgressStatus(b) === "skipped") || chronological(b, a));
  const recent = rows.filter((row) => getProgressStatus(row) !== "skipped").slice(-40);
  const recentSummary = summarizeProgress(recent.slice(-20));
  const previousSummary = summarizeProgress(recent.slice(0, -20));
  const trend = recent.length === 40 && recentSummary.accuracy != null && previousSummary.accuracy != null
    ? recentSummary.accuracy - previousSummary.accuracy : null;
  const timed = rows.filter(hasQuestionTiming);
  const activeTimeMs = timed.length ? timed.reduce((sum, row) => sum + (row.answer_time_ms ?? 0), 0) : null;
  return { rows, latest, summary, groups, categories, review, trend,
    latestSummary: summarizeProgress(latest),
    weakest: groups.find((group) => group.resolved >= 5 && (group.accuracy ?? 100) < 70) ?? null,
    strongest: [...groups].filter((group) => group.resolved >= 5 && (group.accuracy ?? 0) >= 70).sort((a, b) => (b.accuracy ?? 0) - (a.accuracy ?? 0))[0] ?? null,
    activeDays: new Set(rows.map((row) => helsinkiDay(row.answered_at))).size,
    sessions: buildProgressSessions(rows), activeTimeMs,
    averageTimeMs: activeTimeMs == null ? null : Math.round(activeTimeMs / timed.length), timedCount: timed.length,
  };
}

export function formatProgressDuration(ms: number | null) {
  if (ms == null) return "Ei aikatietoa";
  if (ms < 1000) return "< 1 s";
  const seconds = Math.round(ms / 1000);
  if (seconds >= 3600) return `${Math.floor(seconds / 3600)} h ${Math.floor(seconds % 3600 / 60)} min`;
  if (seconds >= 60) return `${Math.floor(seconds / 60)} min ${seconds % 60} s`;
  return `${seconds} s`;
}
