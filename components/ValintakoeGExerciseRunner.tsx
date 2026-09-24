"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { UNSURE_ANSWER_ID } from "@/data/practiceExams/types";
import type {
  PublicValintakoeGExercise,
  ValintakoeGOption,
} from "@/data/valintakoeGExercises/types";

 type HistoryItem = {
  id: string;
  status: "finished" | "expired";
  startedAt: string;
  finishedAt: string | null;
  durationSeconds: number | null;
  correctCount: number | null;
  incorrectCount: number | null;
  skippedCount: number | null;
  questionCount: number | null;
};

type ActiveAttempt = {
  id: string;
  startedAt: string;
  expiresAt: string;
  answers: Record<string, string[]>;
  questionTimes: Record<string, number>;
  serverNow: string;
};

type Result = {
  correctCount: number;
  incorrectCount: number;
  skippedCount: number;
  questionCount: number;
  percentage: number;
  durationSeconds: number | null;
};

type ReviewItem = {
  questionId: string;
  prompt: string;
  options: ValintakoeGOption[];
  selectedAnswerIds: string[];
  correctAnswerIds: string[];
  status: "correct" | "incorrect" | "skipped";
  isCorrect: boolean;
  categoryId: number;
  categoryName: string;
  difficulty: string;
  questionType: string;
  sourcePage: string | null;
  sourceSection: string | null;
  explanation: string | null;
  learningPoint: string | null;
};

type Mode = "lobby" | "exercise" | "result";

type Props = {
  exercise: PublicValintakoeGExercise;
};

function formatClock(ms: number) {
  const total = Math.max(
    0,
    Math.ceil(ms / 1000)
  );

  return `${String(
    Math.floor(total / 60)
  ).padStart(2, "0")}:${String(
    total % 60
  ).padStart(2, "0")}`;
}

function formatDuration(seconds: number | null) {
  if (seconds == null) return "–";

  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;

  return rest === 0
    ? `${minutes} min`
    : `${minutes} min ${rest} s`;
}

function formatDate(value: string | null) {
  if (!value) return "–";

  return new Intl.DateTimeFormat("fi-FI", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function answerTexts(
  options: ValintakoeGOption[],
  ids: string[]
) {
  if (
    ids.length === 0 ||
    ids.includes(UNSURE_ANSWER_ID)
  ) {
    return "Jätin vastaamatta";
  }

  return ids
    .map(
      (id) =>
        options.find(
          (option) => option.id === id
        )?.text ?? id
    )
    .join(", ");
}

function difficultyLabel(value: string) {
  if (value === "easy") return "Helppo";
  if (value === "medium") return "Keskitaso";
  if (value === "hard") return "Vaikea";
  return value;
}

export default function ValintakoeGExerciseRunner({
  exercise,
}: Props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [activeAttempt, setActiveAttempt] =
    useState<ActiveAttempt | null>(null);
  const [answers, setAnswers] = useState<
    Record<string, string[]>
  >({});
  const [multipleDrafts, setMultipleDrafts] =
    useState<Record<string, string[]>>({});
  const [mode, setMode] =
    useState<Mode>("lobby");
  const [remainingMs, setRemainingMs] =
    useState(
      exercise.durationMinutes * 60_000
    );
  const [starting, setStarting] =
    useState(false);
  const [finishing, setFinishing] =
    useState(false);
  const [savingQuestionId, setSavingQuestionId] =
    useState<string | null>(null);
  const [result, setResult] =
    useState<Result | null>(null);
  const [review, setReview] =
    useState<ReviewItem[]>([]);
  const [historyLoadingId, setHistoryLoadingId] =
    useState<string | null>(null);

  const answersRef = useRef<
    Record<string, string[]>
  >({});
  const questionTimesRef = useRef<
    Record<string, number>
  >({});
  const questionVisibilityRef = useRef<
    Map<string, number>
  >(new Map());
  const activeQuestionIdRef =
    useRef<string | null>(null);
  const activeQuestionStartedAtRef =
    useRef<number | null>(null);
  const initialRemainingRef = useRef(0);
  const timerStartRef = useRef<number | null>(
    null
  );
  const autoFinishRef = useRef(false);

  const apiUrl = `/api/valintakoe-g/${exercise.courseId}/${exercise.id}`;

  const answeredCount = useMemo(
    () =>
      Object.values(answers).filter(
        (ids) => ids.length > 0
      ).length,
    [answers]
  );

  const flushActiveQuestionTime =
    useCallback(() => {
      const questionId =
        activeQuestionIdRef.current;
      const startedAt =
        activeQuestionStartedAtRef.current;

      if (!questionId || startedAt == null) {
        activeQuestionIdRef.current = null;
        activeQuestionStartedAtRef.current = null;
        return;
      }

      if (!answersRef.current[questionId]) {
        const elapsed = Math.max(
          0,
          performance.now() - startedAt
        );

        questionTimesRef.current[questionId] =
          (questionTimesRef.current[questionId] ??
            0) + elapsed;
      }

      activeQuestionIdRef.current = null;
      activeQuestionStartedAtRef.current = null;
    }, []);

  const activateMostVisibleQuestion =
    useCallback(() => {
      if (
        mode !== "exercise" ||
        document.visibilityState !== "visible"
      ) {
        flushActiveQuestionTime();
        return;
      }

      let bestId: string | null = null;
      let bestRatio = 0;

      questionVisibilityRef.current.forEach(
        (ratio, questionId) => {
          if (answersRef.current[questionId]) {
            return;
          }

          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = questionId;
          }
        }
      );

      if (bestRatio < 0.18) {
        bestId = null;
      }

      if (
        bestId === activeQuestionIdRef.current
      ) {
        return;
      }

      flushActiveQuestionTime();

      if (bestId) {
        activeQuestionIdRef.current = bestId;
        activeQuestionStartedAtRef.current =
          performance.now();
      }
    }, [flushActiveQuestionTime, mode]);

  const loadLobby = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(apiUrl, {
        cache: "no-store",
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ??
            "Harjoituksen tietojen haku epäonnistui."
        );
      }

      setHistory(data.history ?? []);
      setActiveAttempt(
        data.activeAttempt ?? null
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Harjoituksen tietojen haku epäonnistui."
      );
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  useEffect(() => {
    void loadLobby();
  }, [loadLobby]);

  function enterExercise(
    attempt: ActiveAttempt
  ) {
    const left = Math.max(
      0,
      new Date(attempt.expiresAt).getTime() -
        new Date(attempt.serverNow).getTime()
    );

    const restoredAnswers =
      attempt.answers ?? {};

    setActiveAttempt(attempt);
    setAnswers(restoredAnswers);
    answersRef.current = restoredAnswers;
    questionTimesRef.current =
      attempt.questionTimes ?? {};

    const drafts: Record<string, string[]> = {};
    exercise.questions.forEach((question) => {
      if (question.allowsMultipleAnswers) {
        const existing =
          restoredAnswers[question.id];
        if (
          existing &&
          !existing.includes(UNSURE_ANSWER_ID)
        ) {
          drafts[question.id] = existing;
        }
      }
    });
    setMultipleDrafts(drafts);

    setRemainingMs(left);
    initialRemainingRef.current = left;
    timerStartRef.current = performance.now();
    autoFinishRef.current = false;
    setMode("exercise");
  }

  async function startExercise() {
    setStarting(true);
    setError("");

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
      });
      const data = await response.json();

      if (!response.ok || !data.attempt) {
        throw new Error(
          data.error ??
            "Harjoituksen aloittaminen epäonnistui."
        );
      }

      enterExercise(data.attempt);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Harjoituksen aloittaminen epäonnistui."
      );
    } finally {
      setStarting(false);
    }
  }

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  useEffect(() => {
    if (
      mode !== "exercise" ||
      !activeAttempt
    ) {
      flushActiveQuestionTime();
      questionVisibilityRef.current.clear();
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-g-question-id]"
      )
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element =
            entry.target as HTMLElement;
          const id =
            element.dataset.gQuestionId;

          if (!id) return;

          questionVisibilityRef.current.set(
            id,
            entry.isIntersecting
              ? entry.intersectionRatio
              : 0
          );
        });

        activateMostVisibleQuestion();
      },
      {
        threshold: [
          0,
          0.18,
          0.35,
          0.5,
          0.7,
          0.9,
          1,
        ],
        rootMargin: "-12% 0px -28% 0px",
      }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );

    const handleVisibility = () => {
      if (
        document.visibilityState === "hidden"
      ) {
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
  }, [
    activeAttempt,
    activateMostVisibleQuestion,
    flushActiveQuestionTime,
    mode,
  ]);

  async function saveAnswer(
    questionId: string,
    answerIds: string[]
  ) {
    if (!activeAttempt) return;

    const firstAnswer =
      !answersRef.current[questionId];

    if (
      firstAnswer &&
      activeQuestionIdRef.current ===
        questionId
    ) {
      flushActiveQuestionTime();
    }

    const nextAnswers = {
      ...answersRef.current,
      [questionId]: answerIds,
    };

    answersRef.current = nextAnswers;
    setAnswers(nextAnswers);
    setSavingQuestionId(questionId);

    try {
      const response = await fetch(
        `/api/valintakoe-g/attempt/${activeAttempt.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            questionId,
            answerIds,
            answerTimeMs:
              firstAnswer
                ? questionTimesRef.current[
                    questionId
                  ]
                : undefined,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        if (
          response.status === 409 &&
          data.finished
        ) {
          setResult(data.result ?? null);
          setReview(data.review ?? []);
          setMode("result");
          await loadLobby();
          return;
        }

        throw new Error(
          data.error ??
            "Vastauksen tallennus epäonnistui."
        );
      }

      if (firstAnswer) {
        window.setTimeout(
          activateMostVisibleQuestion,
          0
        );
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Vastauksen tallennus epäonnistui."
      );
    } finally {
      setSavingQuestionId(null);
    }
  }

  function toggleMultipleDraft(
    questionId: string,
    optionId: string
  ) {
    setMultipleDrafts((current) => {
      const previous = current[questionId] ?? [];
      const next = previous.includes(optionId)
        ? previous.filter((id) => id !== optionId)
        : [...previous, optionId];

      return {
        ...current,
        [questionId]: next,
      };
    });
  }

  const finishExercise = useCallback(
    async (automatic = false) => {
      if (!activeAttempt || finishing) return;

      if (
        !automatic &&
        !window.confirm(
          "Haluatko varmasti päättää harjoituksen? Vastauksia ei voi sen jälkeen muuttaa."
        )
      ) {
        return;
      }

      flushActiveQuestionTime();
      setFinishing(true);
      setError("");

      try {
        const response = await fetch(
          `/api/valintakoe-g/attempt/${activeAttempt.id}`,
          { method: "POST" }
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error ??
              "Harjoituksen päättäminen epäonnistui."
          );
        }

        setResult(data.result ?? null);
        setReview(data.review ?? []);
        setMode("result");
        await loadLobby();
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Harjoituksen päättäminen epäonnistui."
        );
      } finally {
        setFinishing(false);
      }
    }, [
      activeAttempt,
      finishing,
      flushActiveQuestionTime,
      loadLobby,
    ]
  );

  useEffect(() => {
    if (
      mode !== "exercise" ||
      !activeAttempt
    ) {
      return;
    }

    const tick = () => {
      if (timerStartRef.current == null) {
        return;
      }

      const next = Math.max(
        0,
        initialRemainingRef.current -
          (performance.now() -
            timerStartRef.current)
      );

      setRemainingMs(next);

      if (
        next <= 0 &&
        !autoFinishRef.current
      ) {
        autoFinishRef.current = true;
        void finishExercise(true);
      }
    };

    tick();
    const interval = window.setInterval(
      tick,
      250
    );

    return () =>
      window.clearInterval(interval);
  }, [
    activeAttempt,
    finishExercise,
    mode,
  ]);

  async function openHistoryAttempt(
    attemptId: string
  ) {
    setHistoryLoadingId(attemptId);
    setError("");

    try {
      const response = await fetch(
        `/api/valintakoe-g/attempt/${attemptId}`,
        { cache: "no-store" }
      );
      const data = await response.json();

      if (!response.ok || !data.result) {
        throw new Error(
          data.error ??
            "Suorituksen tarkastelu epäonnistui."
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
          : "Suorituksen tarkastelu epäonnistui."
      );
    } finally {
      setHistoryLoadingId(null);
    }
  }

  if (loading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        Haetaan harjoitusta ja historiaa...
      </div>
    );
  }

  if (mode === "result" && result) {
    return (
      <div className="space-y-6">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.15em] text-blue-700">
            Harjoituksen tulos
          </p>

          <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-serif text-4xl font-semibold">
                {result.correctCount}/
                {result.questionCount} oikein
              </h2>
              <p className="mt-2 text-lg font-black text-blue-700">
                {result.percentage} %
              </p>
             
            </div>

            <button
              type="button"
              onClick={() => {
                setMode("lobby");
                setResult(null);
                setReview([]);
                setActiveAttempt(null);
              }}
              className="rounded-full bg-blue-600 px-6 py-3 font-black text-white transition hover:bg-blue-700"
            >
              Takaisin
            </button>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Stat
              label="Oikein"
              value={result.correctCount}
            />
            <Stat
              label="Väärin"
              value={result.incorrectCount}
            />
            <Stat
              label="Jätetty vastaamatta"
              value={result.skippedCount}
            />
            <Stat
              label="Kesto"
              value={formatDuration(
                result.durationSeconds
              )}
            />
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-2xl font-black">
            Miten pärjäsit eri tehtävätyypeissä?
          </h3>
          <p className="mt-2 text-slate-600">
            Jokaisen tehtävän yhteydessä näkyy sen
            lukutaitokategoria, perustelu ja
            harjoittelun tavoite.
          </p>

          <div className="mt-6 space-y-4">
            {review.map((item, index) => (
              <article
                key={item.questionId}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-black text-blue-700">
                    {item.categoryId}.{" "}
                    {item.categoryName}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-black ${
                      item.status === "correct"
                        ? "bg-emerald-100 text-emerald-700"
                        : item.status === "skipped"
                          ? "bg-slate-200 text-slate-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status === "correct"
                      ? "Oikein"
                      : item.status === "skipped"
                        ? "Jätetty vastaamatta"
                        : "Väärin"}
                  </span>
                  <span className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-slate-500">
                    {difficultyLabel(
                      item.difficulty
                    )}
                  </span>
                </div>

                <h4 className="mt-3 font-black leading-7">
                  {index + 1}. {item.prompt}
                </h4>

                <p className="mt-3 text-sm">
                  <strong>Vastauksesi:</strong>{" "}
                  {answerTexts(
                    item.options,
                    item.selectedAnswerIds
                  )}
                </p>
                <p className="mt-1 text-sm">
                  <strong>Oikea vastaus:</strong>{" "}
                  {answerTexts(
                    item.options,
                    item.correctAnswerIds
                  )}
                </p>

                {(item.sourcePage ||
                  item.sourceSection) && (
                  <p className="mt-3 text-sm font-semibold text-blue-700">
                    Mistä vastaus löytyy:{" "}
                    {item.sourcePage
                      ? `sivu ${item.sourcePage}`
                      : ""}
                    {item.sourcePage &&
                    item.sourceSection
                      ? ", "
                      : ""}
                    {item.sourceSection ?? ""}
                  </p>
                )}

                {item.explanation && (
                  <div className="mt-3 rounded-xl bg-white p-4 text-sm leading-6 text-slate-700">
                    <strong>
                      Miksi tämä on oikein?
                    </strong>{" "}
                    {item.explanation}
                  </div>
                )}

                {item.learningPoint && (
                  <div className="mt-3 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-blue-950">
                    <strong>
                      Mitä tässä harjoitellaan?
                    </strong>{" "}
                    {item.learningPoint}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (mode === "exercise" && activeAttempt) {
    return (
      <div className="space-y-6">
        <div className="sticky top-3 z-30 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-blue-700">
                {exercise.title}
              </p>
              <p className="mt-1 text-sm font-bold text-slate-500">
                Vastattu {answeredCount}/
                {exercise.questionCount}
                {savingQuestionId
                  ? " · Tallennetaan..."
                  : " · Tallennettu"}
              </p>
            </div>

            <div
              className={`rounded-xl px-4 py-2 font-mono text-2xl font-black ${
                remainingMs <= 300_000
                  ? "bg-red-50 text-red-700"
                  : "bg-slate-950 text-white"
              }`}
            >
              {formatClock(remainingMs)}
            </div>
          </div>
        </div>

        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-4 font-bold text-red-700">
            {error}
          </div>
        )}

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-950">
          <strong>Harjoittelulogiikka:</strong>{" "}
          oikea vastaus kasvattaa harjoitustulosta.
          Väärästä vastauksesta ei tule miinuspistettä.
          ”Jätän vastaamatta” tallennetaan omana tilanaan
          eikä sitä lasketa lukutaitoprofiilin
          osaamisprosentin nimittäjään.
        </div>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <div className="divide-y divide-slate-200">
            {exercise.questions.map(
              (question, index) => {
                const saved =
                  answers[question.id] ?? [];
                const draft =
                  multipleDrafts[question.id] ??
                  (saved.includes(
                    UNSURE_ANSWER_ID
                  )
                    ? []
                    : saved);

                return (
                  <article
                    key={question.id}
                    data-g-question-id={
                      question.id
                    }
                    className="py-7"
                  >
                    <h3 className="font-bold leading-7">
                      {index + 1}.{" "}
                      {question.prompt}
                    </h3>

                    {question.allowsMultipleAnswers && (
                      <p className="mt-2 text-sm font-bold text-blue-700">
                        Valitse kaikki oikeat
                        vaihtoehdot ja paina sen
                        jälkeen ”Tallenna valinnat”.
                      </p>
                    )}

                    <div className="mt-4 grid gap-2">
                      {question.options.map(
                        (option) => {
                          const checked =
                            question.allowsMultipleAnswers
                              ? draft.includes(
                                  option.id
                                )
                              : saved.includes(
                                  option.id
                                );

                          return (
                            <label
                              key={option.id}
                              className={`flex cursor-pointer gap-3 rounded-xl border p-3.5 ${
                                checked
                                  ? "border-blue-600 bg-blue-50"
                                  : "border-slate-200 bg-white"
                              }`}
                            >
                              <input
                                type={
                                  question.allowsMultipleAnswers
                                    ? "checkbox"
                                    : "radio"
                                }
                                name={
                                  question.id
                                }
                                checked={checked}
                                onChange={() => {
                                  if (
                                    question.allowsMultipleAnswers
                                  ) {
                                    toggleMultipleDraft(
                                      question.id,
                                      option.id
                                    );
                                  } else {
                                    void saveAnswer(
                                      question.id,
                                      [option.id]
                                    );
                                  }
                                }}
                                className="mt-1 accent-blue-600"
                              />
                              <span>
                                {option.text}
                              </span>
                            </label>
                          );
                        }
                      )}

                      {question.allowsMultipleAnswers && (
                        <button
                          type="button"
                          disabled={
                            draft.length === 0 ||
                            savingQuestionId ===
                              question.id
                          }
                          onClick={() =>
                            void saveAnswer(
                              question.id,
                              draft
                            )
                          }
                          className="mt-2 w-fit rounded-full bg-blue-600 px-5 py-2.5 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          {savingQuestionId ===
                          question.id
                            ? "Tallennetaan..."
                            : "Tallenna valinnat"}
                        </button>
                      )}

                      <label
                        className={`mt-2 flex cursor-pointer gap-3 rounded-xl border border-dashed p-3.5 ${
                          saved.includes(
                            UNSURE_ANSWER_ID
                          )
                            ? "border-slate-600 bg-slate-100"
                            : "border-slate-300 bg-slate-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`${question.id}-skip`}
                          checked={saved.includes(
                            UNSURE_ANSWER_ID
                          )}
                          onChange={() =>
                            void saveAnswer(
                              question.id,
                              [UNSURE_ANSWER_ID]
                            )
                          }
                          className="mt-1 accent-slate-700"
                        />
                        <span className="font-bold">
                          Jätän vastaamatta tähän
                          kysymykseen
                        </span>
                      </label>
                    </div>
                  </article>
                );
              }
            )}
          </div>
        </section>

        <div className="flex flex-col gap-3 rounded-3xl bg-slate-950 p-5 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-black">
              Vastattu {answeredCount}/
              {exercise.questionCount}
            </p>
            <p className="mt-1 text-sm text-slate-300">
              Voit päättää harjoituksen myös ennen
              ajan loppumista.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              void finishExercise(false)
            }
            disabled={finishing}
            className="rounded-full bg-white px-6 py-3 font-black text-slate-950 disabled:opacity-60"
          >
            {finishing
              ? "Päätetään..."
              : "Päätä harjoitus"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 font-bold text-red-700">
          {error}
        </div>
      )}

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.15em] text-blue-700">
              Valintakoe G ·{" "}
              {difficultyLabel(
                exercise.difficulty
              )}
            </p>
            <h2 className="mt-2 font-serif text-4xl font-semibold">
              {exercise.title}
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              {exercise.description}
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              activeAttempt
                ? enterExercise(activeAttempt)
                : void startExercise()
            }
            disabled={starting}
            className="rounded-full bg-blue-600 px-7 py-3.5 font-black text-white disabled:opacity-60"
          >
            {starting
              ? "Aloitetaan..."
              : activeAttempt
                ? "Jatka harjoitusta"
                : "Aloita harjoitus"}
          </button>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          <Info
            label="Aikaraja"
            value={`${exercise.durationMinutes} min`}
          />
          <Info
            label="Kysymyksiä"
            value={`${exercise.questionCount}`}
          />
          <Info
            label="Vaikeustaso"
            value={difficultyLabel(
              exercise.difficulty
            )}
          />
        </div>

        {exercise.articleUrl ? (
          <a
            href={exercise.articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-black text-blue-700 transition hover:bg-blue-100"
          >
            Avaa aineisto: {exercise.articleTitle} ↗
          </a>
        ) : exercise.notice ? (
          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-semibold text-amber-900">
            {exercise.notice}
          </div>
        ) : null}

        {activeAttempt && (
          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-bold text-amber-900">
            Sinulla on käynnissä oleva yritys.
            Jatkaminen ei nollaa aikaa eikä
            vastauksia.
          </div>
        )}
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.15em] text-slate-400">
          Historia
        </p>
        <h3 className="mt-2 text-2xl font-black">
          Aiemmat suoritukset
        </h3>

        {history.length === 0 ? (
          <div className="mt-6 rounded-2xl bg-slate-50 p-5 text-slate-600">
            Ei vielä suorituksia.
          </div>
        ) : (
          <div className="mt-6 space-y-3">
            {history.map((attempt) => {
              const total =
                attempt.questionCount ?? 0;
              const correct =
                attempt.correctCount ?? 0;
              const percentage =
                total > 0
                  ? Math.round(
                      (correct / total) * 100
                    )
                  : 0;

              return (
                <article
                  key={attempt.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                    <div>
                      <p className="text-xl font-black text-slate-950">
                        {correct}/{total} oikein ·{" "}
                        {percentage} %
                      </p>
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
                      <p className="mt-2 text-sm font-bold text-slate-600">
                        {attempt.correctCount ?? 0}{" "}
                        oikein ·{" "}
                        {attempt.incorrectCount ?? 0}{" "}
                        väärin ·{" "}
                        {attempt.skippedCount ?? 0}{" "}
                        jätetty vastaamatta
                      </p>
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
                      className="rounded-full border border-blue-200 bg-white px-5 py-2.5 text-sm font-black text-blue-700 transition hover:bg-blue-600 hover:text-white disabled:opacity-60"
                    >
                      {historyLoadingId ===
                      attempt.id
                        ? "Avataan..."
                        : "Tarkastele"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-xl font-black">
        {value}
      </p>
    </div>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-2xl font-black">
        {value}
      </p>
    </div>
  );
}
