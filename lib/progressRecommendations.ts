import {
  deduplicateProgress,
  getProgressStatus,
  latestQuestionRows,
  type ProgressRow,
} from "@/lib/progressAnalytics";

export type ProgressPractice = {
  id: string;
  title: string;
  href: string;
  questionIds: string[];
};

export type PracticeReview = {
  key: string;
  practice: ProgressPractice | null;
  rows: ProgressRow[];
  incorrect: number;
  skipped: number;
  totalQuestions: number;
};

export function practiceForProgressRow(row: ProgressRow, practices: ProgressPractice[]) {
  if (row.exercise_id) {
    return practices.find((practice) => practice.id === row.exercise_id) ?? null;
  }
  // Question IDs identify older law exam rows even when session names are missing.
  return practices.find((practice) => practice.questionIds.includes(row.question_id))
    ?? practices.find((practice) => practice.title === row.session_name)
    ?? null;
}

export function buildPracticeReviews(rows: ProgressRow[], practices: ProgressPractice[]): PracticeReview[] {
  const groups = new Map<string, PracticeReview>();
  for (const row of latestQuestionRows(deduplicateProgress(rows))) {
    const practice = practiceForProgressRow(row, practices);
    const key = practice?.id ?? "unknown";
    let group = groups.get(key);
    if (!group) {
      group = { key, practice, rows: [], incorrect: 0, skipped: 0, totalQuestions: 0 };
      groups.set(key, group);
    }
    group.totalQuestions += 1;
    const status = getProgressStatus(row);
    if (status === "correct") continue;
    group.rows.push(row);
    if (status === "incorrect") group.incorrect += 1;
    else group.skipped += 1;
  }
  return [...groups.values()].filter((group) => group.rows.length > 0).sort((a, b) =>
    Number(b.practice != null) - Number(a.practice != null)
    || b.rows.length - a.rows.length
    || b.incorrect - a.incorrect
    || (a.practice?.title ?? "").localeCompare(b.practice?.title ?? "", "fi")
  );
}

export type NextPracticeStep =
  | { kind: "review"; practice: ProgressPractice; review: PracticeReview }
  | { kind: "new"; practice: ProgressPractice }
  | { kind: "unknown" | "complete"; practice: null };

export function nextPracticeStep(rows: ProgressRow[], practices: ProgressPractice[]): NextPracticeStep {
  const reviews = buildPracticeReviews(rows, practices);
  const review = reviews.find((group) => group.practice != null);
  if (review?.practice) return { kind: "review", practice: review.practice, review };
  if (reviews.length) return { kind: "unknown", practice: null };

  // Use the entire course history, so changing the date filter never labels
  // an earlier completed exercise as new or resurrects a corrected mistake.
  const attempted = new Set(latestQuestionRows(deduplicateProgress(rows))
    .map((row) => practiceForProgressRow(row, practices)?.id));
  const next = practices.find((practice) => !attempted.has(practice.id));
  return next ? { kind: "new", practice: next } : { kind: "complete", practice: null };
}
