"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { PracticeExamOption, PublicPracticeExam } from "@/data/practiceExams/types";
import { UNSURE_ANSWER_ID } from "@/data/practiceExams/types";
import { createClient } from "@/utils/supabase/client";

type HistoryItem = {
  id: string;
  status: "finished" | "expired";
  startedAt: string;
  finishedAt: string | null;
  durationSeconds: number | null;
  score: number | null;
  maxScore: number | null;
  correctCount: number | null;
  wrongCount: number | null;
  unsureCount: number | null;
};

type ActiveAttempt = {
  id: string;
  startedAt: string;
  expiresAt: string;
  answers: Record<string, string>;
  serverNow: string;
};

type Result = {
  score: number | null;
  maxScore: number | null;
  correctCount: number | null;
  wrongCount: number | null;
  unsureCount: number | null;
  durationSeconds: number | null;
};

type ReviewItem = {
  sectionId: string;
  sectionTitle: string;
  questionId: string;
  prompt: string;
  selectedAnswerId: string;
  correctAnswerId: string;
  explanation: string | null;
  options: PracticeExamOption[];
};

type ProgressSyncState =
  | { status: "idle" }
  | { status: "saving" }
  | { status: "saved"; count: number }
  | { status: "error"; message: string };

function formatDuration(seconds: number | null) {
  if (seconds === null) return "-";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return s === 0 ? `${m} min` : `${m} min ${s} s`;
}

function formatDate(value: string | null) {
  if (!value) return "-";
  return new Intl.DateTimeFormat("fi-FI", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function formatClock(ms: number) {
  const total = Math.max(0, Math.ceil(ms / 1000));
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(
    total % 60
  ).padStart(2, "0")}`;
}

function answerText(options: PracticeExamOption[], id: string) {
  if (id === UNSURE_ANSWER_ID) return "En osaa sanoa";
  return options.find((option) => option.id === id)?.text ?? "Ei vastausta";
}

type PracticeExamRunnerMode =
  | "lobby"
  | "exam"
  | "result";

type PracticeExamRunnerProps = {
  exam: PublicPracticeExam;
  onModeChange?: (
    mode: PracticeExamRunnerMode
  ) => void;
};

export default function PracticeExamRunner({
  exam,
  onModeChange,
}: PracticeExamRunnerProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [activeAttempt, setActiveAttempt] = useState<ActiveAttempt | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [mode, setMode] = useState<"lobby" | "exam" | "result">("lobby");
  const [remainingMs, setRemainingMs] = useState(exam.durationMinutes * 60_000);
  const [starting, setStarting] = useState(false);
  const [finishing, setFinishing] = useState(false);
  const [savingCount, setSavingCount] = useState(0);
  const [result, setResult] = useState<Result | null>(null);
  const [review, setReview] = useState<ReviewItem[]>([]);
  const [historyLoadingId, setHistoryLoadingId] = useState<string | null>(null);
  const [progressSync, setProgressSync] =
    useState<ProgressSyncState>({ status: "idle" });

  const supabase = useMemo(() => createClient(), []);

  useEffect(() => {
    onModeChange?.(mode);
  }, [mode, onModeChange]);

  const timerStartRef = useRef<number | null>(null);
  const initialRemainingRef = useRef(0);
  const autoFinishRef = useRef(false);

  /**
   * Estää saman koesuorituksen tallentamisen kahdesti
   * student_progress_attempts-tauluun saman sivuistunnon aikana.
   */
  const progressSyncedAttemptsRef = useRef<Set<string>>(new Set());

  /**
   * Kysymyskohtainen aktiivinen aika.
   *
   * Aika kertyy vain sille VIELÄ VASTAAMATTOMALLE kysymykselle,
   * joka on parhaiten näkyvissä käyttäjän viewportissa.
   * Kun käyttäjä vastaa ensimmäisen kerran, kyseisen kysymyksen
   * ajastus pysähtyy.
   */
  const answersRef = useRef<Record<string, string>>({});
  const questionTimesRef = useRef<Record<string, number>>({});
  const questionVisibilityRef = useRef<Map<string, number>>(new Map());
  const activeQuestionIdRef = useRef<string | null>(null);
  const activeQuestionStartedAtRef = useRef<number | null>(null);

  const apiUrl = `/api/practice-exams/${exam.courseId}/${exam.id}`;
  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);

  function timingStorageKey(attemptId: string) {
    return `valintaguru:practice-exam-timing:${attemptId}`;
  }

  function persistQuestionTimes(attemptId?: string | null) {
    const id = attemptId ?? activeAttempt?.id;
    if (!id) return;

    try {
      window.localStorage.setItem(
        timingStorageKey(id),
        JSON.stringify(questionTimesRef.current)
      );
    } catch {
      // localStorage ei ole kriittinen kokeen toiminnalle.
    }
  }

  function loadQuestionTimes(attemptId: string) {
    try {
      const raw = window.localStorage.getItem(
        timingStorageKey(attemptId)
      );

      if (!raw) {
        questionTimesRef.current = {};
        return;
      }

      const parsed = JSON.parse(raw) as Record<string, unknown>;
      const safe: Record<string, number> = {};

      Object.entries(parsed).forEach(([questionId, value]) => {
        if (
          typeof value === "number" &&
          Number.isFinite(value) &&
          value >= 0
        ) {
          safe[questionId] = value;
        }
      });

      questionTimesRef.current = safe;
    } catch {
      questionTimesRef.current = {};
    }
  }

  function flushActiveQuestionTime() {
    const questionId = activeQuestionIdRef.current;
    const startedAt = activeQuestionStartedAtRef.current;

    if (!questionId || startedAt == null) {
      activeQuestionIdRef.current = null;
      activeQuestionStartedAtRef.current = null;
      return;
    }

    // Ensimmäisen vastauksen jälkeen aikaa ei enää kasvateta.
    if (!answersRef.current[questionId]) {
      const elapsed = Math.max(
        0,
        performance.now() - startedAt
      );

      questionTimesRef.current[questionId] =
        (questionTimesRef.current[questionId] ?? 0) +
        elapsed;

      persistQuestionTimes();
    }

    activeQuestionIdRef.current = null;
    activeQuestionStartedAtRef.current = null;
  }

  function activateMostVisibleQuestion() {
    if (
      mode !== "exam" ||
      document.visibilityState !== "visible"
    ) {
      flushActiveQuestionTime();
      return;
    }

    let bestQuestionId: string | null = null;
    let bestRatio = 0;

    questionVisibilityRef.current.forEach(
      (ratio, questionId) => {
        if (answersRef.current[questionId]) {
          return;
        }

        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestQuestionId = questionId;
        }
      }
    );

    // Ei lasketa aikaa kysymykselle, joka on käytännössä poissa näkymästä.
    if (bestRatio < 0.18) {
      bestQuestionId = null;
    }

    if (
      bestQuestionId === activeQuestionIdRef.current
    ) {
      return;
    }

    flushActiveQuestionTime();

    if (bestQuestionId) {
      activeQuestionIdRef.current = bestQuestionId;
      activeQuestionStartedAtRef.current =
        performance.now();
    }
  }

  const loadLobby = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(apiUrl, { cache: "no-store" });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Kokeen tietojen haku epäonnistui.");
      }

      setHistory(data.history ?? []);
      setActiveAttempt(data.activeAttempt ?? null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Kokeen tietojen haku epäonnistui.");
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  useEffect(() => {
    void loadLobby();
  }, [loadLobby]);

  function enterExam(attempt: ActiveAttempt) {
    const left = Math.max(
      0,
      new Date(attempt.expiresAt).getTime() - new Date(attempt.serverNow).getTime()
    );

    setActiveAttempt(attempt);

    const restoredAnswers = attempt.answers ?? {};
    setAnswers(restoredAnswers);
    answersRef.current = restoredAnswers;

    loadQuestionTimes(attempt.id);

    setRemainingMs(left);
    initialRemainingRef.current = left;
    timerStartRef.current = performance.now();
    autoFinishRef.current = false;
    setProgressSync({ status: "idle" });
    setMode("exam");
  }

  useEffect(() => {
    if (mode !== "exam" || !activeAttempt) {
      flushActiveQuestionTime();
      questionVisibilityRef.current.clear();
      return;
    }

    answersRef.current = answers;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-practice-question-id]"
      )
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          const questionId =
            element.dataset.practiceQuestionId;

          if (!questionId) return;

          questionVisibilityRef.current.set(
            questionId,
            entry.isIntersecting
              ? entry.intersectionRatio
              : 0
          );
        });

        activateMostVisibleQuestion();
      },
      {
        threshold: [0, 0.18, 0.35, 0.5, 0.7, 0.9, 1],
        rootMargin: "-12% 0px -28% 0px",
      }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );

    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        flushActiveQuestionTime();
      } else {
        activateMostVisibleQuestion();
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    activateMostVisibleQuestion();

    return () => {
      flushActiveQuestionTime();
      observer.disconnect();
      questionVisibilityRef.current.clear();
      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
    };
    // answers käsitellään answersRefin kautta, jotta observeria ei luoda
    // uudelleen jokaisella vastauksella.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, activeAttempt?.id]);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  async function startExam() {
    setStarting(true);
    setError("");

    try {
      const response = await fetch(apiUrl, { method: "POST" });
      const data = await response.json();

      if (!response.ok || !data.attempt) {
        throw new Error(data.error ?? "Kokeen aloittaminen epäonnistui.");
      }

      enterExam(data.attempt);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Kokeen aloittaminen epäonnistui.");
    } finally {
      setStarting(false);
    }
  }

  const syncFinishedAttemptToProgress = useCallback(
    async (
      attemptId: string,
      reviewItems: ReviewItem[],
      resultData: Result | null
    ) => {
      if (
        progressSyncedAttemptsRef.current.has(
          attemptId
        )
      ) {
        return true;
      }

      if (reviewItems.length === 0) {
        setProgressSync({
          status: "error",
          message:
            "Koesuoritus valmistui, mutta vastaustietoja ei saatu Edistyminen-näkymää varten.",
        });
        return false;
      }

      setProgressSync({ status: "saving" });

      try {
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
          throw new Error(
            userError?.message ??
              "Kirjautunutta käyttäjää ei löytynyt."
          );
        }

        const answeredAt =
          new Date().toISOString();

        // Varmistetaan, että juuri ennen kokeen päättämistä
        // aktiivisena ollut kysymys saa viimeiset millisekuntinsa.
        flushActiveQuestionTime();

        const sessionDurationMs =
          resultData?.durationSeconds != null
            ? Math.max(
                0,
                resultData.durationSeconds * 1000
              )
            : null;

        const rows = reviewItems.map(
          (item) => {
            const selectedAnswerId =
              item.selectedAnswerId ?? "";

            const isUnsure =
              selectedAnswerId ===
              UNSURE_ANSWER_ID;

            const isCorrect =
              !isUnsure &&
              selectedAnswerId ===
                item.correctAnswerId;

            return {
              user_id: user.id,

              // Tärkeä: OikisTeho tallentuu
              // kurssille "oikis-teho", ei "oikis".
              course_id: exam.courseId,

              // Sama kysymys-ID säilytetään eri
              // koeyrityksillä, jotta Edistyminen
              // tunnistaa uusintayritykset oikein.
              question_id: item.questionId,

              question: item.prompt,

              // Näkyy Edistyminen-näkymän
              // osa-aluekohtaisissa tilastoissa.
              area: `${exam.title} · ${item.sectionTitle}`,

              category: "Harjoituskoe",

              selected_answer_ids:
                selectedAnswerId
                  ? [selectedAnswerId]
                  : [],

              correct_answer_ids:
                item.correctAnswerId
                  ? [item.correctAnswerId]
                  : [],

              is_correct: isCorrect,
              answered_at: answeredAt,

              // Todellinen kysymyskohtainen aktiivinen aika:
              // aika kertyy vain, kun kysymys on aktiivisesti näkyvissä
              // ennen ensimmäistä vastausta.
              answer_time_ms:
                questionTimesRef.current[
                  item.questionId
                ] != null
                  ? Math.round(
                      questionTimesRef.current[
                        item.questionId
                      ]
                    )
                  : null,
              answer_time_source:
                questionTimesRef.current[
                  item.questionId
                ] != null
                  ? "active_question"
                  : null,

              // Koko koesuorituksen todellinen kesto tallennetaan
              // erikseen. Näin koetahti ja aktiivinen kysymysaika
              // eivät mene enää sekaisin.
              session_duration_ms:
                sessionDurationMs,
              session_id: attemptId,
              session_type: "harjoituskoe",
              session_name: exam.title,
            };
          }
        );

        const { error: insertError } =
          await supabase
            .from(
              "student_progress_attempts"
            )
            .insert(rows);

        if (insertError) {
          throw insertError;
        }

        progressSyncedAttemptsRef.current.add(
          attemptId
        );

        try {
          window.localStorage.removeItem(
            timingStorageKey(attemptId)
          );
        } catch {
          // Ei kriittinen.
        }

        setProgressSync({
          status: "saved",
          count: rows.length,
        });

        return true;
      } catch (err) {
        const message =
          err instanceof Error
            ? err.message
            : "Edistymisen tallennus epäonnistui.";

        console.error(
          "Practice exam progress sync failed:",
          err
        );

        setProgressSync({
          status: "error",
          message,
        });

        return false;
      }
    },
    [
      exam.courseId,
      exam.title,
      supabase,
    ]
  );

  async function saveAnswer(questionId: string, answerId: string) {
    if (!activeAttempt) return;

    const isFirstAnswer =
      !answersRef.current[questionId];

    if (
      isFirstAnswer &&
      activeQuestionIdRef.current === questionId
    ) {
      flushActiveQuestionTime();
    }

    const nextAnswers = {
      ...answersRef.current,
      [questionId]: answerId,
    };

    answersRef.current = nextAnswers;
    setAnswers(nextAnswers);

    if (isFirstAnswer) {
      persistQuestionTimes(activeAttempt.id);
      window.setTimeout(
        activateMostVisibleQuestion,
        0
      );
    }

    setSavingCount((value) => value + 1);

    try {
      const response = await fetch(`/api/practice-exams/attempt/${activeAttempt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionId, answerId }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 409 && data.finished) {
          const finishedReview =
            (data.review ?? []) as ReviewItem[];

          setResult(data.result ?? null);
          setReview(finishedReview);
          setMode("result");

          await syncFinishedAttemptToProgress(
            activeAttempt.id,
            finishedReview,
            data.result ?? null
          );

          void loadLobby();
          return;
        }

        throw new Error(data.error ?? "Vastauksen tallennus epäonnistui.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Vastauksen tallennus epäonnistui.");
    } finally {
      setSavingCount((value) => Math.max(0, value - 1));
    }
  }


  async function openHistoryAttempt(
    attemptId: string
  ) {
    setHistoryLoadingId(attemptId);
    setError("");
    setProgressSync({ status: "idle" });

    try {
      const response = await fetch(
        `/api/practice-exams/attempt/${attemptId}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      const data =
        (await response.json()) as {
          error?: string;
          result?: Result;
          review?: ReviewItem[];
        };

      if (!response.ok) {
        throw new Error(
          data.error ??
            "Koesuorituksen tarkastelu epäonnistui."
        );
      }

      if (!data.result) {
        throw new Error(
          "Koesuorituksen tulosta ei löytynyt."
        );
      }

      setResult(data.result);
      setReview(data.review ?? []);
      setMode("result");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Koesuorituksen tarkastelu epäonnistui."
      );
    } finally {
      setHistoryLoadingId(null);
    }
  }

  const finishExam = useCallback(
    async (automatic = false) => {
      if (!activeAttempt || finishing) return;

      if (
        !automatic &&
        !window.confirm("Haluatko varmasti päättää kokeen? Vastauksia ei voi sen jälkeen muuttaa.")
      ) {
        return;
      }

      setFinishing(true);
      setError("");

      try {
        const response = await fetch(`/api/practice-exams/attempt/${activeAttempt.id}`, {
          method: "POST",
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error ?? "Kokeen päättäminen epäonnistui.");
        }

        const finishedReview =
          (data.review ?? []) as ReviewItem[];

        setResult(data.result ?? null);
        setReview(finishedReview);
        setMode("result");

        await syncFinishedAttemptToProgress(
          activeAttempt.id,
          finishedReview,
          data.result ?? null
        );

        await loadLobby();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Kokeen päättäminen epäonnistui.");
      } finally {
        setFinishing(false);
      }
    },
    [
      activeAttempt,
      finishing,
      loadLobby,
      syncFinishedAttemptToProgress,
    ]
  );

  useEffect(() => {
    if (mode !== "exam" || !activeAttempt) return;

    const tick = () => {
      if (timerStartRef.current === null) return;

      const next = Math.max(
        0,
        initialRemainingRef.current - (performance.now() - timerStartRef.current)
      );
      setRemainingMs(next);

      if (next <= 0 && !autoFinishRef.current) {
        autoFinishRef.current = true;
        void finishExam(true);
      }
    };

    tick();
    const interval = window.setInterval(tick, 250);
    return () => window.clearInterval(interval);
  }, [mode, activeAttempt, finishExam]);

  if (loading) {
    return <div className="rounded-3xl border border-slate-200 bg-white p-8">Haetaan koetta ja historiaa...</div>;
  }

  if (mode === "result" && result) {
    return (
      <div className="space-y-6">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.15em] text-blue-700">Koesuoritus</p>
          <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-serif text-4xl font-semibold">
                {result.score}/{result.maxScore} pistettä
              </h2>
              <p className="mt-2 text-slate-600">Oikeat − väärät. En osaa sanoa = 0 pistettä.</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setMode("lobby");
                setResult(null);
                setReview([]);
                setActiveAttempt(null);
                setProgressSync({ status: "idle" });
              }}
              className="rounded-full bg-blue-600 px-6 py-3 font-black text-white transition hover:bg-blue-700"
            >
              Takaisin
            </button>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Stat label="Oikein" value={result.correctCount ?? 0} />
            <Stat label="Väärin" value={result.wrongCount ?? 0} />
            <Stat label="En osaa sanoa" value={result.unsureCount ?? 0} />
            <Stat label="Kesto" value={formatDuration(result.durationSeconds)} />
          </div>
        </section>

        {progressSync.status === "saving" && (
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm font-bold text-blue-800">
            Tallennetaan koesuoritusta Edistyminen-näkymään...
          </div>
        )}

        {progressSync.status === "saved" && (
          <div className="flex flex-col gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-bold text-emerald-800">
              ✓ Koesuoritus tallennettiin Edistymiseen ({progressSync.count} vastausta).
            </p>

            <a
              href={`/kurssi/${exam.courseId}/edistyminen`}
              className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-4 py-2 text-sm font-black text-white transition hover:bg-emerald-800"
            >
              Avaa Edistyminen
            </a>
          </div>
        )}

        {progressSync.status === "error" && (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-bold text-amber-900">
              Koe tallentui koehistoriaan, mutta Edistyminen-synkronointi epäonnistui.
            </p>
            <p className="mt-1 text-sm text-amber-800">
              {progressSync.message}
            </p>
          </div>
        )}

        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-2xl font-black">Vastausten tarkistus</h3>
          <p className="mt-2 text-slate-600">Oikeat vastaukset näkyvät vasta kokeen päätyttyä.</p>

          <div className="mt-6 space-y-4">
            {review.map((item, index) => {
              const unsure = item.selectedAnswerId === UNSURE_ANSWER_ID;
              const correct = item.selectedAnswerId === item.correctAnswerId;

              return (
                <article key={item.questionId} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-black uppercase text-slate-500">{item.sectionTitle}</span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-black ${
                        unsure
                          ? "bg-slate-200 text-slate-700"
                          : correct
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {unsure ? "En osaa sanoa" : correct ? "Oikein" : "Väärin"}
                    </span>
                  </div>

                  <h4 className="mt-3 font-black">{index + 1}. {item.prompt}</h4>
                  <p className="mt-3 text-sm"><strong>Vastauksesi:</strong> {answerText(item.options, item.selectedAnswerId)}</p>
                  <p className="mt-1 text-sm"><strong>Oikea:</strong> {answerText(item.options, item.correctAnswerId)}</p>
                  {item.explanation && <p className="mt-2 text-sm leading-6 text-slate-600">{item.explanation}</p>}
                </article>
              );
            })}
          </div>
        </section>
      </div>
    );
  }

  if (mode === "exam" && activeAttempt) {
    return (
      <div className="space-y-6">
        <div className="sticky top-3 z-30 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#3f51e7]">{exam.title}</p>
              <p className="mt-1 text-sm font-bold text-slate-500">
                Vastattu {answeredCount}/{exam.questionCount}
                {savingCount > 0 ? " · Tallennetaan..." : " · Tallennettu"}
              </p>
            </div>

            <div
              className={`rounded-xl px-4 py-2 font-mono text-2xl font-black ${
                remainingMs <= 300_000 ? "bg-red-50 text-red-700" : "bg-slate-950 text-white"
              }`}
            >
              {formatClock(remainingMs)}
            </div>
          </div>
        </div>

        {error && <div className="rounded-2xl border border-red-200 bg-red-50 p-4 font-bold text-red-700">{error}</div>}

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
          <strong>Pisteytys:</strong> oikein +1, väärin -1, En osaa sanoa 0. Ajan päättyessä vastaamatta jäänyt kysymys käsitellään 0 pisteen vastauksena.
        </div>

        {exam.sections.map((section, sectionIndex) => {
          const previousCount = exam.sections
            .slice(0, sectionIndex)
            .reduce((sum, item) => sum + item.questions.length, 0);

          return (
            <section key={section.id} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="border-b border-slate-200 pb-5">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#3f51e7]">Osa {sectionIndex + 1}</p>
                <h2 className="mt-2 text-2xl font-black">{section.title}</h2>
                {section.description && <p className="mt-2 text-slate-600">{section.description}</p>}
              </div>

              <div className="divide-y divide-slate-200">
                {section.questions.map((question, questionIndex) => {
                  const selected = answers[question.id];

                  return (
                    <article
                      key={question.id}
                      data-practice-question-id={question.id}
                      className="py-6"
                    >
                      <h3 className="font-bold leading-7">
                        {previousCount + questionIndex + 1}. {question.prompt}
                      </h3>

                      <div className="mt-4 grid gap-2">
                        {question.options.map((option) => (
                          <label
                            key={option.id}
                            className={`flex cursor-pointer gap-3 rounded-xl border p-3.5 ${
                              selected === option.id
                                ? "border-[#3f51e7] bg-indigo-50"
                                : "border-slate-200 bg-white"
                            }`}
                          >
                            <input
                              type="radio"
                              name={question.id}
                              checked={selected === option.id}
                              onChange={() => void saveAnswer(question.id, option.id)}
                              className="mt-1 accent-[#3f51e7]"
                            />
                            <span>{option.text}</span>
                          </label>
                        ))}

                        <label
                          className={`flex cursor-pointer gap-3 rounded-xl border border-dashed p-3.5 ${
                            selected === UNSURE_ANSWER_ID
                              ? "border-slate-600 bg-slate-100"
                              : "border-slate-300 bg-slate-50"
                          }`}
                        >
                          <input
                            type="radio"
                            name={question.id}
                            checked={selected === UNSURE_ANSWER_ID}
                            onChange={() => void saveAnswer(question.id, UNSURE_ANSWER_ID)}
                            className="mt-1 accent-slate-700"
                          />
                          <span className="font-bold">En osaa sanoa <span className="font-normal text-slate-400">0 p</span></span>
                        </label>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}

        <div className="flex flex-col gap-3 rounded-3xl bg-slate-950 p-5 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-black">Vastattu {answeredCount}/{exam.questionCount}</p>
            <p className="mt-1 text-sm text-slate-300">Voit päättää kokeen myös ennen ajan loppumista.</p>
          </div>
          <button
            type="button"
            onClick={() => void finishExam(false)}
            disabled={finishing}
            className="rounded-full bg-white px-6 py-3 font-black text-slate-950 disabled:opacity-60"
          >
            {finishing ? "Päätetään..." : "Päätä koe"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && <div className="rounded-2xl border border-red-200 bg-red-50 p-4 font-bold text-red-700">{error}</div>}

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.15em] text-[#3f51e7]">Harjoituskoe</p>
            <h2 className="mt-2 font-serif text-4xl font-semibold">{exam.title}</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">{exam.description}</p>
          </div>

          <button
            type="button"
            onClick={() => (activeAttempt ? enterExam(activeAttempt) : void startExam())}
            disabled={starting}
            className="rounded-full bg-[#3f51e7] px-7 py-3.5 font-black text-white disabled:opacity-60"
          >
            {starting ? "Aloitetaan..." : activeAttempt ? "Jatka koetta" : "Aloita koe"}
          </button>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          <Info label="Aikaraja" value={`${exam.durationMinutes} min`} />
          <Info label="Kysymyksiä" value={`${exam.questionCount}`} />
          <Info label="Pisteytys" value="+1 / -1 / 0" />
        </div>

        {activeAttempt && (
          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-bold text-amber-900">
            Sinulla on käynnissä oleva yritys. Jatkaminen ei nollaa aikaa eikä vastauksia.
          </div>
        )}
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.15em] text-slate-400">Historia</p>
        <h3 className="mt-2 text-2xl font-black">Aiemmat suoritukset</h3>

        {history.length === 0 ? (
          <div className="mt-6 rounded-2xl bg-slate-50 p-5 text-slate-600">
            Ei vielä suorituksia.
          </div>
        ) : (
          <div className="mt-6 space-y-3">
            {history.map((attempt) => (
              <article
                key={attempt.id}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50/40"
              >
                <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-xl font-black text-slate-950">
                        {attempt.score}/{attempt.maxScore} pistettä
                      </p>

                      {attempt.status === "expired" && (
                        <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-black text-amber-800">
                          Aika päättyi
                        </span>
                      )}
                    </div>

                    <p className="mt-1 text-sm font-semibold text-slate-500">
                      {formatDate(
                        attempt.finishedAt ??
                          attempt.startedAt
                      )}{" "}
                      · kesto{" "}
                      {formatDuration(
                        attempt.durationSeconds
                      )}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-3 text-sm font-bold">
                      <span className="text-emerald-700">
                        Oikein{" "}
                        {attempt.correctCount ??
                          0}
                      </span>

                      <span className="text-red-700">
                        Väärin{" "}
                        {attempt.wrongCount ??
                          0}
                      </span>

                      <span className="text-slate-500">
                        En osaa sanoa{" "}
                        {attempt.unsureCount ??
                          0}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      void openHistoryAttempt(
                        attempt.id
                      )
                    }
                    disabled={
                      historyLoadingId ===
                      attempt.id
                    }
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2.5 text-sm font-black text-blue-700 transition hover:bg-blue-600 hover:text-white disabled:cursor-wait disabled:opacity-60"
                  >
                    {historyLoadingId ===
                    attempt.id
                      ? "Avataan..."
                      : "Tarkastele"}
                    <span aria-hidden="true">
                      →
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-400">{label}</p>
      <p className="mt-1 text-xl font-black">{value}</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-400">{label}</p>
      <p className="mt-1 text-2xl font-black">{value}</p>
    </div>
  );
}
