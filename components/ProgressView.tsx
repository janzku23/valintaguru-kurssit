"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";
import type { CourseId } from "../data/courses";
import { UNSURE_ANSWER_ID } from "@/data/practiceExams/types";
import ValintakoeGReadingProfile from "@/components/ValintakoeGReadingProfile";
import type { ValintakoeGCourseId } from "@/data/valintakoeGExercises/types";

type Props = {
  courseId: CourseId;
};

type ProgressAttemptRow = {
  id: string;
  user_id: string;
  course_id: string;
  question_id: string;
  question: string;
  area: string | null;
  category?: string | null;
  selected_answer_ids: string[] | null;
  correct_answer_ids: string[] | null;
  is_correct: boolean;
  answered_at: string;
  answer_time_ms?: number | null;
  answer_time_source?: string | null;
  session_duration_ms?: number | null;
  session_id?: string | null;
  session_type?: string | null;
  session_name?: string | null;
};

type ProgressAttempt = {
  id: string;
  courseId: CourseId;
  questionId: string;
  question: string;
  area: string;
  category: string;
  selectedAnswerIds: string[];
  correctAnswerIds: string[];
  isCorrect: boolean;
  answeredAt: string;
  answerTimeMs: number | null;
  answerTimeSource: string | null;
  sessionDurationMs: number | null;
  sessionId: string | null;
  sessionType: string | null;
  sessionName: string | null;
};

type GroupStats = {
  name: string;
  attempts: number;
  correct: number;
  wrong: number;
  unsure: number;
  accuracy: number;
  avgTimeMs: number | null;
};

type QuestionStats = {
  questionId: string;
  question: string;
  area: string;
  category: string;
  attempts: number;
  correct: number;
  wrong: number;
  unsure: number;
  accuracy: number;
  avgTimeMs: number | null;
  lastCorrect: boolean;
  lastUnsure: boolean;
  lastAnsweredAt: string;
};

type SessionStats = {
  sessionId: string;
  name: string;
  attempts: number;
  correct: number;
  wrong: number;
  unsure: number;
  accuracy: number;
  durationMs: number | null;
  pacePerQuestionMs: number | null;
  activeAnswerTimeMs: number | null;
  startedAt: string;
  finishedAt: string;
};

function normalizeText(value: string | null | undefined, fallback: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

function safeTime(value: unknown): number | null {
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) return null;
  return value;
}

function mapRowToAttempt(row: ProgressAttemptRow): ProgressAttempt {
  return {
    id: row.id,
    courseId: row.course_id as CourseId,
    questionId: row.question_id,
    question: row.question,
    area: normalizeText(row.area, "Yleinen"),
    category: normalizeText(row.category, "Yleinen"),
    selectedAnswerIds: row.selected_answer_ids ?? [],
    correctAnswerIds: row.correct_answer_ids ?? [],
    isCorrect: row.is_correct,
    answeredAt: row.answered_at,
    answerTimeMs: safeTime(row.answer_time_ms),
    answerTimeSource:
      row.answer_time_source ?? null,
    sessionDurationMs:
      safeTime(row.session_duration_ms),
    sessionId: row.session_id ?? null,
    sessionType: row.session_type ?? null,
    sessionName: row.session_name ?? null,
  };
}

function isUnsureAttempt(
  attempt: ProgressAttempt
) {
  return attempt.selectedAnswerIds.includes(
    UNSURE_ANSWER_ID
  );
}

function hasActualQuestionTiming(
  attempt: ProgressAttempt
) {
  if (attempt.answerTimeMs == null) {
    return false;
  }

  // Uudet harjoituskokeet merkitään eksplisiittisesti.
  if (
    attempt.answerTimeSource ===
    "active_question"
  ) {
    return true;
  }

  // Vanhoissa harjoituskokeissa answer_time_ms oli vain
  // koko kokeen kesto / kysymysten määrä. Niitä ei enää
  // näytetä aktiivisena kysymysaikana.
  if (
    attempt.sessionType?.toLowerCase() ===
    "harjoituskoe"
  ) {
    return false;
  }

  // Muissa tehtävätyypeissä vanha answer_time_ms voi olla
  // oikea kysymyskohtainen ajastus.
  return true;
}

function percentage(correct: number, total: number) {
  return total > 0 ? Math.round((correct / total) * 100) : 0;
}

function average(values: number[]) {
  if (values.length === 0) return null;
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function formatDuration(ms: number | null) {
  if (ms == null) return "Ei dataa";
  if (ms < 1000) return "< 1 s";

  const totalSeconds = Math.round(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) return `${hours} h ${minutes} min`;
  if (minutes > 0) return `${minutes} min ${seconds} s`;
  return `${seconds} s`;
}

function getStrengthLabel(accuracy: number, attempts: number) {
  if (attempts < 3) return "Vähän dataa";
  if (accuracy >= 85) return "Vahva";
  if (accuracy >= 70) return "Hyvä";
  if (accuracy >= 55) return "Kehittyvä";
  return "Harjoittele";
}

function buildGroupStats(
  attempts: ProgressAttempt[],
  keyGetter: (attempt: ProgressAttempt) => string
): GroupStats[] {
  const grouped = new Map<string, ProgressAttempt[]>();

  for (const attempt of attempts) {
    const key = keyGetter(attempt);
    const current = grouped.get(key) ?? [];
    current.push(attempt);
    grouped.set(key, current);
  }

  return Array.from(grouped.entries()).map(([name, rows]) => {
    const correct = rows.filter(
      (row) => row.isCorrect
    ).length;

    const unsure = rows.filter(
      isUnsureAttempt
    ).length;

    const wrong = rows.filter(
      (row) =>
        !row.isCorrect &&
        !isUnsureAttempt(row)
    ).length;

    const resolved = correct + wrong;

    const times = rows
      .filter(hasActualQuestionTiming)
      .map((row) => row.answerTimeMs)
      .filter(
        (value): value is number =>
          value != null
      );

    return {
      name,
      attempts: rows.length,
      correct,
      wrong,
      unsure,
      accuracy: percentage(
        correct,
        resolved
      ),
      avgTimeMs: average(times),
    };
  });
}

export default function ProgressView({ courseId }: Props) {
  const router = useRouter();
  const isValintakoeG =
    courseId === "valintakoe-g" ||
    courseId === "valintakoe-g-etaope";
  const supabase = useMemo(() => createClient(), []);

  const [attempts, setAttempts] = useState<ProgressAttempt[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [historyLimit, setHistoryLimit] = useState(20);

  const loadProgress = useCallback(async () => {
    setHasLoaded(false);
    setErrorMessage(null);

    const { user, error: authError } = await getAuthenticatedUser();

    if (authError || !user) {
      setUserId(null);
      setAttempts([]);
      setErrorMessage(
        authError?.message ??
          "Kirjautumista ei löytynyt. Kirjaudu sisään, jotta edistyminen voidaan hakea."
      );
      setHasLoaded(true);
      return;
    }

    setUserId(user.id);

    // select("*") pitää näkymän taaksepäin yhteensopivana ja ottaa samalla
    // automaattisesti käyttöön uudet analytiikkakentät, kun SQL-migraatio on ajettu.
    const { data, error } = await supabase
      .from("student_progress_attempts")
      .select("*")
      .eq("user_id", user.id)
      .eq("course_id", courseId)
      .order("answered_at", { ascending: true });

    if (error) {
      console.error("Progress fetch failed:", error);
      setErrorMessage(`Edistymisen haku epäonnistui: ${error.message}`);
      setAttempts([]);
      setHasLoaded(true);
      return;
    }

    setAttempts(((data ?? []) as ProgressAttemptRow[]).map(mapRowToAttempt));
    setHasLoaded(true);
  }, [courseId, supabase]);

  useEffect(() => {
    void loadProgress();
  }, [loadProgress]);

  const totalAttempts = attempts.length;

  const correctAttempts = attempts.filter(
    (attempt) => attempt.isCorrect
  ).length;

  const unsureAttempts = attempts.filter(
    isUnsureAttempt
  ).length;

  const wrongAttempts = attempts.filter(
    (attempt) =>
      !attempt.isCorrect &&
      !isUnsureAttempt(attempt)
  ).length;

  const resolvedAttempts =
    correctAttempts + wrongAttempts;

  const accuracy = percentage(
    correctAttempts,
    resolvedAttempts
  );

  const uniqueQuestionsDone = useMemo(
    () => new Set(attempts.map((attempt) => attempt.questionId)).size,
    [attempts]
  );

  const repeatedAttempts = Math.max(0, totalAttempts - uniqueQuestionsDone);

  const activeDays = useMemo(() => {
    return new Set(
      attempts.map((attempt) => new Date(attempt.answeredAt).toISOString().slice(0, 10))
    ).size;
  }, [attempts]);

  const timedAttempts = useMemo(
    () =>
      attempts.filter(
        hasActualQuestionTiming
      ),
    [attempts]
  );

  const avgAnswerTimeMs = useMemo(
    () => average(timedAttempts.map((attempt) => attempt.answerTimeMs as number)),
    [timedAttempts]
  );

  const totalStudyTimeMs = useMemo(() => {
    if (timedAttempts.length === 0) return null;
    return timedAttempts.reduce((sum, attempt) => sum + (attempt.answerTimeMs ?? 0), 0);
  }, [timedAttempts]);

  const areaStats = useMemo(
    () =>
      buildGroupStats(attempts, (attempt) => attempt.area).sort((a, b) => {
        if (a.accuracy !== b.accuracy) return a.accuracy - b.accuracy;
        return b.attempts - a.attempts;
      }),
    [attempts]
  );

  const categoryStats = useMemo(
    () =>
      buildGroupStats(attempts, (attempt) => attempt.category).sort((a, b) => {
        if (a.accuracy !== b.accuracy) return a.accuracy - b.accuracy;
        return b.attempts - a.attempts;
      }),
    [attempts]
  );

  const questionStats = useMemo<QuestionStats[]>(() => {
    const grouped = new Map<string, ProgressAttempt[]>();

    for (const attempt of attempts) {
      const current = grouped.get(attempt.questionId) ?? [];
      current.push(attempt);
      grouped.set(attempt.questionId, current);
    }

    return Array.from(grouped.entries()).map(([questionId, rows]) => {
      const sorted = [...rows].sort(
        (a, b) => new Date(a.answeredAt).getTime() - new Date(b.answeredAt).getTime()
      );
      const latest = sorted[sorted.length - 1];

      const correct = rows.filter(
        (row) => row.isCorrect
      ).length;

      const unsure = rows.filter(
        isUnsureAttempt
      ).length;

      const wrong = rows.filter(
        (row) =>
          !row.isCorrect &&
          !isUnsureAttempt(row)
      ).length;

      const resolved = correct + wrong;

      const times = rows
        .filter(hasActualQuestionTiming)
        .map((row) => row.answerTimeMs)
        .filter(
          (value): value is number =>
            value != null
        );

      return {
        questionId,
        question: latest.question,
        area: latest.area,
        category: latest.category,
        attempts: rows.length,
        correct,
        wrong,
        unsure,
        accuracy: percentage(
          correct,
          resolved
        ),
        avgTimeMs: average(times),
        lastCorrect: latest.isCorrect,
        lastUnsure: isUnsureAttempt(
          latest
        ),
        lastAnsweredAt: latest.answeredAt,
      };
    });
  }, [attempts]);

  const questionsToReview = useMemo(
    () =>
      [...questionStats]
        .filter((question) => question.wrong > 0)
        .sort((a, b) => {
          if (a.lastCorrect !== b.lastCorrect) return a.lastCorrect ? 1 : -1;
          if (a.accuracy !== b.accuracy) return a.accuracy - b.accuracy;
          if (a.wrong !== b.wrong) return b.wrong - a.wrong;
          return new Date(b.lastAnsweredAt).getTime() - new Date(a.lastAnsweredAt).getTime();
        })
        .slice(0, 8),
    [questionStats]
  );

  const weakestArea = useMemo(() => {
    const enoughData = areaStats.filter((item) => item.attempts >= 3);
    return enoughData[0] ?? areaStats[0] ?? null;
  }, [areaStats]);

  const strongestArea = useMemo(() => {
    const enoughData = areaStats
      .filter((item) => item.attempts >= 3)
      .sort((a, b) => b.accuracy - a.accuracy || b.attempts - a.attempts);
    return enoughData[0] ?? [...areaStats].sort((a, b) => b.accuracy - a.accuracy)[0] ?? null;
  }, [areaStats]);

  const weakestCategory = useMemo(() => {
    const realCategories = categoryStats.filter((item) => item.name !== "Yleinen");
    const enoughData = realCategories.filter((item) => item.attempts >= 3);
    return enoughData[0] ?? realCategories[0] ?? null;
  }, [categoryStats]);

  const strongestCategory = useMemo(() => {
    const realCategories = categoryStats.filter((item) => item.name !== "Yleinen");
    const enoughData = realCategories
      .filter((item) => item.attempts >= 3)
      .sort((a, b) => b.accuracy - a.accuracy || b.attempts - a.attempts);
    return enoughData[0] ?? [...realCategories].sort((a, b) => b.accuracy - a.accuracy)[0] ?? null;
  }, [categoryStats]);

  const recentTrend = useMemo(() => {
    const recent = attempts.slice(-20);
    const previous = attempts.slice(-40, -20);

    const recentCorrect = recent.filter(
      (item) => item.isCorrect
    ).length;
    const recentWrong = recent.filter(
      (item) =>
        !item.isCorrect &&
        !isUnsureAttempt(item)
    ).length;

    const previousCorrect = previous.filter(
      (item) => item.isCorrect
    ).length;
    const previousWrong = previous.filter(
      (item) =>
        !item.isCorrect &&
        !isUnsureAttempt(item)
    ).length;

    const recentResolved =
      recentCorrect + recentWrong;
    const previousResolved =
      previousCorrect + previousWrong;

    const recentAccuracy = percentage(
      recentCorrect,
      recentResolved
    );
    const previousAccuracy = percentage(
      previousCorrect,
      previousResolved
    );

    return {
      recentAccuracy,
      previousAccuracy,
      change:
        previousResolved > 0
          ? recentAccuracy -
            previousAccuracy
          : null,
      sampleSize: recent.length,
    };
  }, [attempts]);

  const last7Days = useMemo(() => {
    const cutoff = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const rows = attempts.filter(
      (attempt) =>
        new Date(
          attempt.answeredAt
        ).getTime() >= cutoff
    );

    const correct = rows.filter(
      (row) => row.isCorrect
    ).length;

    const unsure = rows.filter(
      isUnsureAttempt
    ).length;

    const wrong = rows.filter(
      (row) =>
        !row.isCorrect &&
        !isUnsureAttempt(row)
    ).length;

    return {
      attempts: rows.length,
      correct,
      wrong,
      unsure,
      accuracy: percentage(
        correct,
        correct + wrong
      ),
    };
  }, [attempts]);

  const sessions = useMemo<SessionStats[]>(() => {
    const grouped = new Map<string, ProgressAttempt[]>();

    for (const attempt of attempts) {
      if (!attempt.sessionId) continue;
      const type = attempt.sessionType?.toLowerCase() ?? "";
      if (type && !["exam", "koe", "test", "mock_exam", "harjoituskoe"].includes(type)) {
        continue;
      }
      const current = grouped.get(attempt.sessionId) ?? [];
      current.push(attempt);
      grouped.set(attempt.sessionId, current);
    }

    return Array.from(grouped.entries())
      .map(([sessionId, rows]) => {
        const sorted = [...rows].sort(
          (a, b) => new Date(a.answeredAt).getTime() - new Date(b.answeredAt).getTime()
        );
        const correct = rows.filter(
          (row) => row.isCorrect
        ).length;

        const unsure = rows.filter(
          isUnsureAttempt
        ).length;

        const wrong = rows.filter(
          (row) =>
            !row.isCorrect &&
            !isUnsureAttempt(row)
        ).length;

        const actualQuestionTimes = rows
          .filter(hasActualQuestionTiming)
          .map((row) => row.answerTimeMs)
          .filter(
            (value): value is number =>
              value != null
          );

        const first = sorted[0];
        const last = sorted[sorted.length - 1];

        const explicitSessionDuration =
          rows
            .map(
              (row) =>
                row.sessionDurationMs
            )
            .find(
              (value): value is number =>
                value != null
            ) ?? null;

        // Taaksepäin yhteensopivuus:
        // vanhoissa harjoituskokeissa answer_time_ms oli
        // kokeen kokonaisaika jaettuna kysymysten määrällä.
        // Niiden summa vastaa siis likimain koko kokeen aikaa.
        const legacyPracticeTimes = rows
          .filter(
            (row) =>
              row.sessionType?.toLowerCase() ===
                "harjoituskoe" &&
              row.answerTimeSource !==
                "active_question" &&
              row.answerTimeMs != null
          )
          .map(
            (row) =>
              row.answerTimeMs as number
          );

        const legacySessionDuration =
          legacyPracticeTimes.length > 0
            ? legacyPracticeTimes.reduce(
                (sum, value) =>
                  sum + value,
                0
              )
            : null;

        const durationMs =
          explicitSessionDuration ??
          legacySessionDuration;

        return {
          sessionId,
          name: last.sessionName || "Koe",
          attempts: rows.length,
          correct,
          wrong,
          unsure,
          accuracy: percentage(
            correct,
            correct + wrong
          ),
          durationMs,
          pacePerQuestionMs:
            durationMs != null &&
            rows.length > 0
              ? Math.round(
                  durationMs /
                    rows.length
                )
              : null,
          activeAnswerTimeMs:
            average(
              actualQuestionTimes
            ),
          startedAt: first.answeredAt,
          finishedAt: last.answeredAt,
        };
      })
      .sort((a, b) => new Date(b.finishedAt).getTime() - new Date(a.finishedAt).getTime());
  }, [attempts]);

  const averageExamTimeMs = useMemo(() => {
    const durations = sessions
      .map((session) => session.durationMs)
      .filter((value): value is number => value != null);
    return average(durations);
  }, [sessions]);

  const averageExamPacePerQuestionMs = useMemo(() => {
    const validSessions = sessions.filter(
      (session) =>
        session.durationMs != null &&
        session.attempts > 0
    );

    if (validSessions.length === 0) {
      return null;
    }

    const totalDuration = validSessions.reduce(
      (sum, session) =>
        sum + (session.durationMs ?? 0),
      0
    );

    const totalQuestions = validSessions.reduce(
      (sum, session) =>
        sum + session.attempts,
      0
    );

    return totalQuestions > 0
      ? Math.round(
          totalDuration / totalQuestions
        )
      : null;
  }, [sessions]);

  const visibleHistory = useMemo(
    () => [...attempts].reverse().slice(0, historyLimit),
    [attempts, historyLimit]
  );

  async function resetProgress() {
    const confirmed = window.confirm(
      "Haluatko varmasti nollata tämän kurssin edistymisen? Tämä poistaa kaikki tallennetut vastausyritykset tältä kurssilta."
    );

    if (!confirmed) return;

    setErrorMessage(null);
    const { user, error: authError } = await getAuthenticatedUser();

    if (authError || !user) {
      setUserId(null);
      setErrorMessage(
        authError?.message ??
          "Kirjautumista ei löytynyt. Kirjaudu sisään, jotta edistyminen voidaan nollata."
      );
      return;
    }

    setUserId(user.id);
    setIsResetting(true);

    const { error } = await supabase
      .from("student_progress_attempts")
      .delete()
      .eq("user_id", user.id)
      .eq("course_id", courseId);

    if (error) {
      console.error("Progress reset failed:", error);
      setErrorMessage(`Edistymisen nollaus epäonnistui: ${error.message}`);
      setIsResetting(false);
      return;
    }

    setAttempts([]);
    setIsResetting(false);
  }

  function goToLogin() {
    router.push(`/kirjaudu?next=/kurssi/${courseId}/edistyminen`);
  }

  if (!hasLoaded) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-extrabold text-slate-950">Ladataan edistymistä</h2>
        <p className="mt-3 leading-8 text-slate-700">Haetaan käyttäjän tallennettuja tehtävätuloksia</p>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wide text-red-700">Edistymistä ei voitu näyttää</p>
        <h2 className="mt-2 text-3xl font-extrabold text-red-950">Tallennuksen haku epäonnistui</h2>
        <p className="mt-4 leading-8 text-red-950">{errorMessage}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={() => void loadProgress()} className="rounded-full bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700">
            Yritä uudelleen
          </button>
          {errorMessage.toLowerCase().includes("kirjaut") && (
            <button type="button" onClick={goToLogin} className="rounded-full border border-red-200 bg-white px-6 py-3 font-bold text-red-700 transition hover:bg-red-100">
              Kirjaudu sisään
            </button>
          )}
        </div>
      </div>
    );
  }

  if (attempts.length === 0) {
    return (
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-700">Ei dataa vielä</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-950">Et ole tehnyt vielä tehtäviä tällä kurssilla.</h2>
          <p className="mt-4 leading-8 text-slate-700">Kun teet harjoituksia, tulokset tallentuvat automaattisesti</p>
          <a href={`/kurssi/${courseId}/harjoitukset`} className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700">
            Siirry harjoituksiin
          </a>
        </div>

        {isValintakoeG && (
          <ValintakoeGReadingProfile
            courseId={courseId as ValintakoeGCourseId}
          />
        )}
      </div>
    );
  }

  return (
    <div className="min-w-0 max-w-full space-y-6 overflow-x-hidden">
      <section className="rounded-[32px] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-6 text-white shadow-lg md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-100">Oppimisanalytiikka</p>
        <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl font-black md:text-4xl">Edistyminen ja osaamisprofiili</h2>
            <p className="mt-3 max-w-3xl text-blue-50">Näet vastausmäärät, tarkkuuden, heikot ja vahvat alueet, kysymyskohtaiset ongelmakohdat, trendin sekä aika-analytiikan silloin kun ajankäyttö on tallennettu.</p>
          </div>
          <button type="button" onClick={() => void loadProgress()} className="w-fit rounded-full bg-white/15 px-5 py-3 font-extrabold text-white ring-1 ring-white/30 transition hover:bg-white/25">
            Päivitä data
          </button>
        </div>
      </section>

      {isValintakoeG && (
        <ValintakoeGReadingProfile
          courseId={courseId as ValintakoeGCourseId}
        />
      )}

      <section className="grid min-w-0 gap-4 sm:grid-cols-2 2xl:grid-cols-4">
        <MetricCard
          label="Vastauksia yhteensä"
          value={totalAttempts.toString()}
          detail={`${uniqueQuestionsDone} eri kysymystä`}
        />
        <MetricCard
          label="Oikein"
          value={correctAttempts.toString()}
          detail={`${accuracy} % ratkaistuista`}
          tone="green"
        />
        <MetricCard
          label="Väärin"
          value={wrongAttempts.toString()}
          detail={
            resolvedAttempts > 0
              ? `${percentage(
                  wrongAttempts,
                  resolvedAttempts
                )} % ratkaistuista`
              : "Ei ratkaistuja vastauksia"
          }
          tone="red"
        />
        <MetricCard
          label="En osaa sanoa"
          value={unsureAttempts.toString()}
          detail={
            totalAttempts > 0
              ? `${percentage(
                  unsureAttempts,
                  totalAttempts
                )} % kaikista vastauksista`
              : "0 % kaikista vastauksista"
          }
        />
        <MetricCard
          label="Uusintayrityksiä"
          value={repeatedAttempts.toString()}
          detail="Sama kysymys vastattu uudelleen"
        />
        <MetricCard label="Aktiivisia päiviä" value={activeDays.toString()} detail={`${last7Days.attempts} vastausta viimeisen 7 vrk aikana`} />
        <MetricCard
          label="Viimeiset 7 vrk"
          value={`${last7Days.accuracy} %`}
          detail={`${last7Days.correct} oikein · ${last7Days.wrong} väärin · ${last7Days.unsure} en osaa sanoa`}
        />
        <MetricCard
          label="Keskim. koeaika / kysymys"
          value={formatDuration(averageExamPacePerQuestionMs)}
          detail={
            sessions.length
              ? "Koko kokeen kesto ÷ kokeen kysymykset"
              : "Muodostuu suoritetuista harjoituskokeista"
          }
        />
        <MetricCard
          label="Keskim. aktiivinen vastausaika"
          value={formatDuration(avgAnswerTimeMs)}
          detail={
            timedAttempts.length
              ? `${timedAttempts.length} aidosti ajoitettua vastausta`
              : "Uusi kysymyskohtainen ajastus näkyy uusista suorituksista"
          }
        />
        <MetricCard
          label="Aktiivinen työskentelyaika"
          value={formatDuration(totalStudyTimeMs)}
          detail="Kysymysten aktiivisten vastausaikojen summa"
        />
      </section>

      <section className="grid min-w-0 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
        <InsightCard
          eyebrow="Heikoin osa-alue"
          title={weakestArea?.name ?? "Ei vielä dataa"}
          value={weakestArea ? `${weakestArea.accuracy} %` : "–"}
          detail={
            weakestArea
              ? `${weakestArea.correct} oikein · ${weakestArea.wrong} väärin · ${weakestArea.unsure} en osaa sanoa`
              : ""
          }
          tone="orange"
        />
        <InsightCard
          eyebrow="Vahvin osa-alue"
          title={strongestArea?.name ?? "Ei vielä dataa"}
          value={strongestArea ? `${strongestArea.accuracy} %` : "–"}
          detail={
            strongestArea
              ? `${strongestArea.correct} oikein · ${strongestArea.wrong} väärin · ${strongestArea.unsure} en osaa sanoa`
              : ""
          }
          tone="green"
        />
        <InsightCard
          eyebrow="Viimeaikainen suunta"
          title={recentTrend.sampleSize ? `Viimeiset ${recentTrend.sampleSize} vastausta` : "Ei vielä dataa"}
          value={`${recentTrend.recentAccuracy} %`}
          detail={
            recentTrend.change == null
              ? "Vertailu muodostuu, kun vastauksia kertyy lisää."
              : recentTrend.change > 0
                ? `+${recentTrend.change} prosenttiyksikköä edellisiin 20 vastaukseen`
                : recentTrend.change < 0
                  ? `${recentTrend.change} prosenttiyksikköä edellisiin 20 vastaukseen`
                  : "Sama tarkkuus kuin edellisissä 20 vastauksessa"
          }
          tone={recentTrend.change != null && recentTrend.change < 0 ? "orange" : "blue"}
        />
      </section>

      {!isValintakoeG && (weakestCategory || strongestCategory) && (
        <section className="grid min-w-0 gap-4 xl:grid-cols-2">
          <InsightCard
            eyebrow="Heikoin kategoria"
            title={weakestCategory?.name ?? "Ei kategoriadataa"}
            value={weakestCategory ? `${weakestCategory.accuracy} %` : "–"}
            detail={
              weakestCategory
                ? `${weakestCategory.correct} oikein · ${weakestCategory.wrong} väärin · ${weakestCategory.unsure} en osaa sanoa`
                : ""
            }
            tone="orange"
          />
          <InsightCard
            eyebrow="Vahvin kategoria"
            title={strongestCategory?.name ?? "Ei kategoriadataa"}
            value={strongestCategory ? `${strongestCategory.accuracy} %` : "–"}
            detail={
              strongestCategory
                ? `${strongestCategory.correct} oikein · ${strongestCategory.wrong} väärin · ${strongestCategory.unsure} en osaa sanoa`
                : ""
            }
            tone="green"
          />
        </section>
      )}

      <StatsTable title="Osa-alueet" subtitle="Tulokset osa-alueittain. Vahvuusarvio muuttuu luotettavammaksi, kun vastauksia kertyy vähintään kolme." rows={areaStats} />

      {!isValintakoeG && (
        <StatsTable title="Kategoriat" subtitle="Esimerkiksi Oikis: Luetun ymmärtäminen. Jos kysymyksellä ei ole kategoriaa, se näkyy ryhmässä Yleinen." rows={categoryStats} />
      )}

      <section className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-red-700">Kertaa nämä</p>
            <h2 className="mt-1 text-3xl font-black text-slate-950">Kysymykset, joissa tulee eniten virheitä</h2>
            <p className="mt-2 text-sm font-semibold text-slate-500">Järjestys painottaa viimeisintä väärää vastausta, heikkoa tarkkuutta ja toistuvia virheitä.</p>
          </div>
        </div>

        {questionsToReview.length === 0 ? (
          <p className="mt-6 rounded-2xl bg-emerald-50 p-4 font-bold text-emerald-800">Tällä hetkellä ei ole väärin vastattuja kysymyksiä.</p>
        ) : (
          <div className="mt-6 grid gap-3">
            {questionsToReview.map((item) => (
              <div key={item.questionId} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <p className="font-extrabold text-slate-950">{item.question}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-500">{item.area} · {item.category}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-400">Viimeksi {new Date(item.lastAnsweredAt).toLocaleString("fi-FI")}</p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2">
                    <Pill text={`${item.correct} oikein`} />
                    <Pill
                      text={`${item.wrong} väärin`}
                      tone="red"
                    />
                    {item.unsure > 0 && (
                      <Pill
                        text={`${item.unsure} en osaa sanoa`}
                        tone="blue"
                      />
                    )}
                    <Pill text={`${item.accuracy} %`} tone={item.accuracy >= 70 ? "green" : "orange"} />
                    {item.avgTimeMs != null && (
                      <Pill
                        text={`Ø aktiivinen ${formatDuration(item.avgTimeMs)}`}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <p className="text-sm font-black uppercase tracking-wide text-blue-700">Kysymyskohtainen analyysi</p>
        <h2 className="mt-1 text-3xl font-black text-slate-950">Kaikki vastatut kysymykset</h2>
        <div className="mt-6 max-w-full overflow-x-auto overscroll-x-contain">
          <table className="min-w-[900px] w-full border-separate border-spacing-y-2 text-left">
            <thead>
              <tr className="text-xs font-black uppercase tracking-wide text-slate-500">
                <th className="px-3 py-2">Kysymys</th>
                <th className="px-3 py-2">Osa-alue</th>
                <th className="px-3 py-2">Kategoria</th>
                <th className="px-3 py-2">Vastauksia</th>
                <th className="px-3 py-2">Oikein</th>
                <th className="px-3 py-2">Väärin</th>
                <th className="px-3 py-2">En osaa sanoa</th>
                <th className="px-3 py-2">Tarkkuus</th>
                <th className="px-3 py-2">Ø aktiivinen aika</th>
                <th className="px-3 py-2">Tila</th>
              </tr>
            </thead>
            <tbody>
              {[...questionStats]
                .sort((a, b) => a.accuracy - b.accuracy || b.wrong - a.wrong)
                .map((item) => (
                  <tr key={item.questionId} className="bg-slate-50 text-sm font-semibold text-slate-700">
                    <td className="max-w-[360px] rounded-l-2xl px-3 py-3 font-bold text-slate-950">{item.question}</td>
                    <td className="px-3 py-3">{item.area}</td>
                    <td className="px-3 py-3">{item.category}</td>
                    <td className="px-3 py-3">{item.attempts}</td>
                    <td className="px-3 py-3 text-emerald-700">{item.correct}</td>
                    <td className="px-3 py-3 text-red-700">{item.wrong}</td>
                    <td className="px-3 py-3 text-slate-500">{item.unsure}</td>
                    <td className="px-3 py-3 font-black">{item.accuracy} %</td>
                    <td className="px-3 py-3">{formatDuration(item.avgTimeMs)}</td>
                    <td className="rounded-r-2xl px-3 py-3"><Pill text={getStrengthLabel(item.accuracy, item.attempts)} tone={item.accuracy >= 70 ? "green" : item.attempts < 3 ? "blue" : "orange"} /></td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            label="Kokeita"
            value={sessions.length.toString()}
            detail="Koe-/testisessiot"
          />
          <MetricCard
            label="Keskim. koko koeaika"
            value={formatDuration(averageExamTimeMs)}
            detail={
              sessions.length
                ? "Koko kokeen suorittamiseen käytetty aika"
                : "Näkyy suoritetuista harjoituskokeista"
            }
          />
          <MetricCard
            label="Keskim. koeaika / kysymys"
            value={formatDuration(averageExamPacePerQuestionMs)}
            detail="Kokonaiskoeaika jaettuna kysymysten määrällä"
          />
          <MetricCard
            label="Koevastauksia"
            value={sessions
              .reduce(
                (sum, item) =>
                  sum + item.attempts,
                0
              )
              .toString()}
            detail="Koesessioihin liitetyt vastaukset"
          />
        </div>

        {sessions.length > 0 && (
          <div className="mt-6 grid gap-3">
            {sessions.slice(0, 10).map((session) => (
              <div key={session.sessionId} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-extrabold text-slate-950">{session.name}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-500">{new Date(session.finishedAt).toLocaleString("fi-FI")}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Pill
                      text={`${session.correct} oikein`}
                      tone="green"
                    />
                    <Pill
                      text={`${session.wrong} väärin`}
                      tone="red"
                    />
                    {session.unsure > 0 && (
                      <Pill
                        text={`${session.unsure} en osaa sanoa`}
                      />
                    )}
                    <Pill text={`${session.accuracy} %`} />
                    <Pill
                      text={`Koe ${formatDuration(session.durationMs)}`}
                    />
                    {session.pacePerQuestionMs != null && (
                      <Pill
                        text={`Tahti ${formatDuration(session.pacePerQuestionMs)} / kysymys`}
                      />
                    )}
                    {session.activeAnswerTimeMs != null && (
                      <Pill
                        text={`Ø aktiivinen ${formatDuration(session.activeAnswerTimeMs)}`}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-black uppercase tracking-wide text-blue-700">Vastaushistoria</p>
        <h2 className="mt-1 text-3xl font-black text-slate-950">Yksittäiset vastaukset</h2>
        <p className="mt-2 text-sm font-semibold text-slate-500">Näet jokaisen yrityksen, tuloksen, osa-alueen, kategorian ja vastausajan, jos se on tallennettu.</p>

        <div className="mt-6 space-y-3">
          {visibleHistory.map((attempt) => (
            <div key={attempt.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0">
                  <p className="font-bold text-slate-950">{attempt.question}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">{attempt.area} · {attempt.category}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-400">{new Date(attempt.answeredAt).toLocaleString("fi-FI")}
                    {hasActualQuestionTiming(attempt)
                      ? ` · aktiivinen ${formatDuration(attempt.answerTimeMs)}`
                      : ""}</p>
                </div>
                <span
                  className={`w-fit shrink-0 rounded-full px-3 py-1 text-sm font-bold ${
                    attempt.isCorrect
                      ? "bg-emerald-100 text-emerald-700"
                      : isUnsureAttempt(attempt)
                        ? "bg-slate-200 text-slate-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {attempt.isCorrect
                    ? "Oikein"
                    : isUnsureAttempt(attempt)
                      ? "En osaa sanoa"
                      : "Väärin"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {historyLimit < attempts.length && (
          <button type="button" onClick={() => setHistoryLimit((current) => current + 20)} className="mt-5 rounded-full bg-blue-50 px-5 py-3 font-extrabold text-blue-700 transition hover:bg-blue-100">
            Näytä lisää
          </button>
        )}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Hallinta</p>
        <h2 className="mt-2 text-2xl font-extrabold text-slate-950">Edistymisen nollaus</h2>
        <p className="mt-3 leading-8 text-slate-700">Nollaus poistaa tämän kurssin monivalintaedistymisen kirjautuneelta käyttäjältä.</p>
        <button type="button" onClick={() => void resetProgress()} disabled={isResetting || !userId} className="mt-6 rounded-full bg-red-50 px-6 py-3 font-bold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60">
          {isResetting ? "Nollataan..." : "Nollaa edistyminen"}
        </button>
      </section>
    </div>
  );
}

function MetricCard({ label, value, detail, tone = "blue" }: { label: string; value: string; detail: string; tone?: "blue" | "green" | "red" }) {
  const valueClass = tone === "green" ? "text-emerald-700" : tone === "red" ? "text-red-700" : "text-blue-700";
  return (
    <div className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
      <p className={`mt-2 break-words text-3xl font-black ${valueClass}`}>{value}</p>
      <p className="mt-2 text-xs font-semibold leading-5 text-slate-500">{detail}</p>
    </div>
  );
}

function InsightCard({ eyebrow, title, value, detail, tone }: { eyebrow: string; title: string; value: string; detail: string; tone: "orange" | "green" | "blue" }) {
  const classes = tone === "orange"
    ? "border-orange-200 bg-orange-50 text-orange-950"
    : tone === "green"
      ? "border-emerald-200 bg-emerald-50 text-emerald-950"
      : "border-blue-200 bg-blue-50 text-blue-950";
  const eyebrowClass = tone === "orange" ? "text-orange-700" : tone === "green" ? "text-emerald-700" : "text-blue-700";
  return (
    <div className={`min-w-0 overflow-hidden rounded-3xl border p-5 shadow-sm sm:p-6 ${classes}`}>
      <p className={`text-xs font-black uppercase tracking-wide ${eyebrowClass}`}>{eyebrow}</p>
      <h3 className="mt-2 break-words text-xl font-black leading-snug sm:text-2xl">{title}</h3>
      <p className="mt-3 text-3xl font-black sm:text-4xl">{value}</p>
      <p className="mt-3 text-sm font-semibold leading-6 opacity-80">{detail}</p>
    </div>
  );
}

function StatsTable({ title, subtitle, rows }: { title: string; subtitle: string; rows: GroupStats[] }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-black uppercase tracking-wide text-blue-700">Analyysi</p>
      <h2 className="mt-1 text-3xl font-black text-slate-950">{title}</h2>
      <p className="mt-2 text-sm font-semibold text-slate-500">{subtitle}</p>
      <div className="mt-6 space-y-4">
        {rows.map((row) => (
          <div key={row.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="min-w-0">
                <p className="break-words font-extrabold text-slate-950">{row.name}</p>
                <p className="mt-1 text-sm font-semibold text-slate-500">
                  {row.correct} oikein · {row.wrong} väärin · {row.unsure} en osaa sanoa
                  {row.avgTimeMs != null
                    ? ` · Ø ${formatDuration(row.avgTimeMs)}`
                    : ""}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Pill
                  text={getStrengthLabel(
                    row.accuracy,
                    row.correct + row.wrong
                  )}
                  tone={
                    row.accuracy >= 70
                      ? "green"
                      : row.correct + row.wrong < 3
                        ? "blue"
                        : "orange"
                  }
                />
                <span className="min-w-[64px] text-right text-lg font-black text-blue-700">{row.accuracy} %</span>
              </div>
            </div>
            <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-blue-600" style={{ width: `${row.accuracy}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pill({ text, tone = "blue" }: { text: string; tone?: "blue" | "green" | "red" | "orange" }) {
  const className = tone === "green"
    ? "bg-emerald-100 text-emerald-700"
    : tone === "red"
      ? "bg-red-100 text-red-700"
      : tone === "orange"
        ? "bg-orange-100 text-orange-700"
        : "bg-blue-100 text-blue-700";
  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-black ${className}`}>{text}</span>;
}
