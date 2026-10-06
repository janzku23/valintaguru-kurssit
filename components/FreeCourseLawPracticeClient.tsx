"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import {
  freeCourseLaw2026Questions,
  LAW_EXAM_DURATION_SECONDS,
  LAW_EXAM_ID,
  lawSourceLabels,
  type FreeCourseLawQuestion,
} from "@/data/freeCourseLaw2026";

type AnswerState = Record<string, string[]>;
type SkippedState = Record<string, boolean>;

type SavedExamAttempt = {
  id: string;
  exam_id: string;
  score: number;
  correct_count: number;
  wrong_count: number;
  unanswered_count: number;
  time_used_seconds: number;
  finished_by_time: boolean;
  answers: AnswerState;
  number_answers: Record<string, string>;
  skipped: SkippedState;
  submitted_at: string;
};

const BINARY_LABELS = new Set([
  "Tosi",
  "Epätosi",
  "tosi",
  "epätosi",
  "Oikein",
  "Väärin",
]);

function sameSet(a: string[], b: string[]) {
  if (a.length !== b.length) return false;

  const aa = [...a].sort();
  const bb = [...b].sort();

  return aa.every((value, index) => value === bb[index]);
}

function isBinaryQuestion(question: FreeCourseLawQuestion) {
  return (
    question.options.length === 2 &&
    question.options.every((option) => BINARY_LABELS.has(option.text))
  );
}

function scoreQuestion(
  question: FreeCourseLawQuestion,
  answers: AnswerState,
  skipped: SkippedState,
) {
  if (skipped[question.id]) return 0;

  const selected = answers[question.id] ?? [];

  if (selected.length === 0) {
    return 0;
  }

  return sameSet(selected, question.correctAnswerIds) ? 1 : -1;
}

function correctAnswerText(question: FreeCourseLawQuestion) {
  return question.options
    .filter((option) => question.correctAnswerIds.includes(option.id))
    .map((option) => option.text)
    .join(" • ");
}

function userAnswerText(
  question: FreeCourseLawQuestion,
  answers: AnswerState,
  skipped: SkippedState,
) {
  if (skipped[question.id]) {
    return "Vastaamatta";
  }

  const selected = answers[question.id] ?? [];

  if (selected.length === 0) {
    return "Vastaamatta";
  }

  return question.options
    .filter((option) => selected.includes(option.id))
    .map((option) => option.text)
    .join(" • ");
}

function formatTime(totalSeconds: number) {
  const safe = Math.max(0, totalSeconds);
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const seconds = safe % 60;

  return [hours, minutes, seconds]
    .map((value) => String(value).padStart(2, "0"))
    .join(":");
}

function formatAttemptDate(value: string) {
  return new Intl.DateTimeFormat("fi-FI", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default function FreeCourseLawPracticeClient() {
  const supabase = useMemo(() => createClient(), []);
  const submissionInProgress = useRef(false);

  const [answers, setAnswers] = useState<AnswerState>({});
  const [skipped, setSkipped] = useState<SkippedState>({});
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(LAW_EXAM_DURATION_SECONDS);
  const [finishedByTime, setFinishedByTime] = useState(false);

  const [history, setHistory] = useState<SavedExamAttempt[]>([]);
  const [historyLoading, setHistoryLoading] = useState(true);
  const [viewingAttemptId, setViewingAttemptId] = useState<string | null>(null);

  const [saveStatus, setSaveStatus] = useState<
    "idle" | "saving" | "saved" | "error"
  >("idle");
  const [saveError, setSaveError] = useState("");

  const result = useMemo(() => {
    const values = freeCourseLaw2026Questions.map((question) =>
      scoreQuestion(question, answers, skipped),
    );

    return {
      score: values.reduce<number>((sum, value) => sum + value, 0),
      correct: values.filter((value) => value === 1).length,
      wrong: values.filter((value) => value === -1).length,
      unanswered: values.filter((value) => value === 0).length,
    };
  }, [answers, skipped]);

  const sections = useMemo(
    () => [
      {
        id: "norio",
        title: "C1–C15",
        material: lawSourceLabels.norio,
        questions: freeCourseLaw2026Questions.filter(
          (question) => question.source === "norio",
        ),
      },
      {
        id: "rajaesteet",
        title: "C16–C30",
        material: lawSourceLabels.rajaesteet,
        questions: freeCourseLaw2026Questions.filter(
          (question) => question.source === "rajaesteet",
        ),
      },
    ],
    [],
  );

  useEffect(() => {
    let cancelled = false;

    async function loadHistory() {
      setHistoryLoading(true);

      const { data: authData } = await supabase.auth.getUser();
      const user = authData.user;

      if (!user) {
        if (!cancelled) {
          setHistory([]);
          setHistoryLoading(false);
        }
        return;
      }

      const { data, error } = await supabase
        .from("free_course_exam_attempts")
        .select(
          "id, exam_id, score, correct_count, wrong_count, unanswered_count, time_used_seconds, finished_by_time, answers, number_answers, skipped, submitted_at",
        )
        .eq("user_id", user.id)
        .eq("exam_id", LAW_EXAM_ID)
        .order("submitted_at", { ascending: false })
        .limit(20);

      if (cancelled) {
        return;
      }

      if (error) {
        console.error("Oikeustieteen koesuoritusten haku epäonnistui:", error);
        setHistory([]);
      } else {
        setHistory((data ?? []) as SavedExamAttempt[]);
      }

      setHistoryLoading(false);
    }

    void loadHistory();

    return () => {
      cancelled = true;
    };
  }, [supabase]);

  useEffect(() => {
    if (!started || submitted) {
      return;
    }

    const interval = window.setInterval(() => {
      setTimeLeft((current) => Math.max(0, current - 1));
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, [started, submitted]);

  useEffect(() => {
    if (!started || submitted || timeLeft > 0 || submissionInProgress.current) {
      return;
    }

    void finalizeExam(true);
    // finalizeExam käyttää viimeisintä statea. Tarkoituksella vain ajan loppu laukaisee tämän.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, submitted, timeLeft]);

  function startExam() {
    setAnswers({});
    setSkipped({});
    setStarted(true);
    setSubmitted(false);
    setFinishedByTime(false);
    setViewingAttemptId(null);
    setSaveStatus("idle");
    setSaveError("");
    setTimeLeft(LAW_EXAM_DURATION_SECONDS);

    window.requestAnimationFrame(() => {
      document
        .getElementById("oikeustiede-koe-alku")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function resetExam() {
    submissionInProgress.current = false;
    setAnswers({});
    setSkipped({});
    setStarted(false);
    setSubmitted(false);
    setFinishedByTime(false);
    setViewingAttemptId(null);
    setSaveStatus("idle");
    setSaveError("");
    setTimeLeft(LAW_EXAM_DURATION_SECONDS);

    window.requestAnimationFrame(() => {
      document
        .getElementById("oikeustiede-koe-aloitus")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function toggleOption(questionId: string, optionId: string) {
    if (submitted) {
      return;
    }

    setSkipped((current) => ({
      ...current,
      [questionId]: false,
    }));

    setAnswers((current) => {
      const selected = current[questionId] ?? [];

      return {
        ...current,
        [questionId]: selected.includes(optionId)
          ? selected.filter((id) => id !== optionId)
          : [...selected, optionId],
      };
    });
  }

  function selectBinary(questionId: string, optionId: string) {
    if (submitted) {
      return;
    }

    setSkipped((current) => ({
      ...current,
      [questionId]: false,
    }));

    setAnswers((current) => ({
      ...current,
      [questionId]: [optionId],
    }));
  }

  function leaveBlank(questionId: string) {
    if (submitted) {
      return;
    }

    setAnswers((current) => ({
      ...current,
      [questionId]: [],
    }));

    setSkipped((current) => ({
      ...current,
      [questionId]: true,
    }));
  }

  async function saveAttempt(finishedByTimer: boolean) {
    setSaveStatus("saving");
    setSaveError("");

    const { data: authData, error: authError } =
      await supabase.auth.getUser();
    const user = authData.user;

    if (authError || !user) {
      setSaveStatus("error");
      setSaveError(
        "Koesuoritusta ei voitu tallentaa, koska kirjautumista ei löytynyt.",
      );
      return;
    }

    const payload = {
      user_id: user.id,
      exam_id: LAW_EXAM_ID,
      score: result.score,
      correct_count: result.correct,
      wrong_count: result.wrong,
      unanswered_count: result.unanswered,
      time_used_seconds: LAW_EXAM_DURATION_SECONDS - timeLeft,
      finished_by_time: finishedByTimer,
      answers,
      number_answers: {},
      skipped,
    };

    const { data, error } = await supabase
      .from("free_course_exam_attempts")
      .insert(payload)
      .select(
        "id, exam_id, score, correct_count, wrong_count, unanswered_count, time_used_seconds, finished_by_time, answers, number_answers, skipped, submitted_at",
      )
      .single();

    if (error || !data) {
      console.error("Oikeustieteen koesuorituksen tallennus epäonnistui:", error);
      setSaveStatus("error");
      setSaveError(
        "Koesuorituksen tallennus epäonnistui. Nykyisen free_course_exam_attempts-taulun pitää olla käytössä.",
      );
      return;
    }

    const saved = data as SavedExamAttempt;

    setHistory((current) => [
      saved,
      ...current.filter((attempt) => attempt.id !== saved.id),
    ]);
    setViewingAttemptId(saved.id);
    setSaveStatus("saved");
  }

  async function finalizeExam(finishedByTimer: boolean) {
    if (submissionInProgress.current || submitted) {
      return;
    }

    submissionInProgress.current = true;
    setFinishedByTime(finishedByTimer);
    setSubmitted(true);

    try {
      await saveAttempt(finishedByTimer);
    } finally {
      submissionInProgress.current = false;

      window.requestAnimationFrame(() => {
        document
          .getElementById("oikeustiede-koetulos")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  function submitExam() {
    void finalizeExam(false);
  }

  function openSavedAttempt(attempt: SavedExamAttempt) {
    submissionInProgress.current = false;
    setAnswers(attempt.answers ?? {});
    setSkipped(attempt.skipped ?? {});
    setTimeLeft(
      Math.max(
        0,
        LAW_EXAM_DURATION_SECONDS - (attempt.time_used_seconds ?? 0),
      ),
    );
    setFinishedByTime(Boolean(attempt.finished_by_time));
    setViewingAttemptId(attempt.id);
    setSaveStatus("saved");
    setSaveError("");
    setStarted(true);
    setSubmitted(true);

    window.requestAnimationFrame(() => {
      document
        .getElementById("oikeustiede-koe-alku")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  if (!started) {
    return (
      <section
        id="oikeustiede-koe-aloitus"
        className="scroll-mt-32 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-violet-700">
            Oikeustiede
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700">
            Valintakoe G 2026
          </span>
        </div>

        <h2 className="mt-4 font-serif text-3xl font-semibold text-slate-950 sm:text-4xl">
          Oikeustieteen eriytyvä osio 2026
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-700">
          Vuoden 2026 alkuperäinen oikeustieteen eriytyvä osio. Koe sisältää
          tehtävät C1–C30 yhtenä 60 minuutin kokeena.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-bold text-slate-500">Kesto</p>
            <p className="mt-1 text-2xl font-black text-slate-950">60 min</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-bold text-slate-500">Kysymyksiä</p>
            <p className="mt-1 text-2xl font-black text-slate-950">30</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-bold text-slate-500">Maksimipisteet</p>
            <p className="mt-1 text-2xl font-black text-slate-950">30 p</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-violet-100 bg-violet-50 p-5">
          <h3 className="font-black text-slate-950">Ennen kuin aloitat</h3>

          <p className="mt-2 leading-7 text-slate-700">
            Kun painat Aloita koe, 60 minuutin aika alkaa kulua. C1–C15
            perustuvat Jaana Norion ennakkomateriaaliin ja C16–C30
            Rajaesteet-aineistoon. Ennakkomateriaalit eivät olleet
            alkuperäisessä koetilanteessa käytettävissä.
          </p>

          <p className="mt-3 text-sm font-bold text-violet-900">
            Pisteytys: oikea +1 · väärä −1 · vastaamatta 0.
          </p>
        </div>

        <button
          type="button"
          onClick={startExam}
          className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-violet-700 px-7 py-4 text-base font-black text-white shadow-lg shadow-violet-700/20 transition hover:bg-violet-800 sm:w-auto"
        >
          Aloita koe
        </button>

        <div className="mt-9 border-t border-slate-200 pt-7">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-violet-700">
                Omat suoritukset
              </p>

              <h3 className="mt-1 text-xl font-black text-slate-950">
                Aiemmat oikeustieteen kokeet
              </h3>
            </div>

            {!historyLoading && history.length > 0 && (
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-600">
                {history.length} tallennettua
              </span>
            )}
          </div>

          {historyLoading ? (
            <p className="mt-4 text-sm font-semibold text-slate-500">
              Haetaan aiempia suorituksia...
            </p>
          ) : history.length === 0 ? (
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
              Ei vielä tallennettuja suorituksia.
            </div>
          ) : (
            <div className="mt-4 space-y-3">
              {history.map((attempt) => (
                <div
                  key={attempt.id}
                  className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-black text-slate-950">
                      {attempt.score} / 30 pistettä
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      {formatAttemptDate(attempt.submitted_at)} · käytetty aika{" "}
                      {formatTime(attempt.time_used_seconds)}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => openSavedAttempt(attempt)}
                    className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-black text-slate-800 transition hover:border-violet-500 hover:text-violet-700"
                  >
                    Tarkastele suoritusta
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <div id="oikeustiede-koe-alku" className="space-y-6 scroll-mt-32">
      <section className="sticky top-24 z-20 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-md backdrop-blur sm:px-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-violet-700">
              Oikeustieteen eriytyvä osio 2026
            </p>

            <p className="mt-0.5 text-sm font-semibold text-slate-600">
              30 kysymystä · 30 pistettä
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
              {submitted ? "Käytetty aika" : "Aikaa jäljellä"}
            </p>

            <p
              className={`mt-0.5 font-mono text-2xl font-black tabular-nums ${
                !submitted && timeLeft <= 10 * 60
                  ? "text-rose-600"
                  : "text-slate-950"
              }`}
            >
              {formatTime(
                submitted
                  ? LAW_EXAM_DURATION_SECONDS - timeLeft
                  : timeLeft,
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-violet-700">
            Valintakoe G 2026
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700">
            Yksi koe
          </span>

          {viewingAttemptId && submitted && (
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800">
              Tallennettu suoritus
            </span>
          )}
        </div>

        <h2 className="mt-4 text-2xl font-black text-slate-950 sm:text-3xl">
          Oikeustieteen eriytyvä osio
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-slate-700">
          Oikea vastaus +1 piste, väärä vastaus −1 piste ja vastaamatta
          jätetty kysymys 0 pistettä. Monivalinnassa pisteen saa vain, kun
          kaikki oikeat vaihtoehdot on valittu eikä mukana ole yhtään väärää
          vaihtoehtoa.
        </p>
      </section>

      {sections.map((section) => (
        <section
          key={section.id}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="border-b border-slate-200 bg-slate-50 px-5 py-5 sm:px-7">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-violet-700">
              {section.title}
            </p>

            <h2 className="mt-1 text-lg font-black text-slate-950">
              {section.material}
            </h2>
          </div>

          <div className="space-y-5 p-5 sm:p-7">
            {section.questions.map((question) => {
              const selected = answers[question.id] ?? [];
              const isSkipped = Boolean(skipped[question.id]);
              const binary = isBinaryQuestion(question);
              const points = submitted
                ? scoreQuestion(question, answers, skipped)
                : null;

              return (
                <article
                  key={question.id}
                  className={`rounded-2xl border p-5 ${
                    submitted
                      ? points === 1
                        ? "border-emerald-200 bg-emerald-50/40"
                        : points === -1
                          ? "border-rose-200 bg-rose-50/40"
                          : "border-slate-200 bg-slate-50/60"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-black text-slate-950">
                      {question.id}
                    </h3>

                    {submitted && (
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-black ${
                          points === 1
                            ? "bg-emerald-100 text-emerald-800"
                            : points === -1
                              ? "bg-rose-100 text-rose-800"
                              : "bg-slate-200 text-slate-700"
                        }`}
                      >
                        {points === 1 ? "+1" : points === -1 ? "−1" : "0"}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 whitespace-pre-line leading-7 text-slate-800">
                    {question.question}
                  </p>

                  <div className="mt-4 space-y-2">
                    {question.options.map((option) => {
                      const checked = selected.includes(option.id);

                      return (
                        <label
                          key={option.id}
                          className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 transition ${
                            checked
                              ? "border-violet-300 bg-violet-50"
                              : "border-slate-200 bg-white hover:border-slate-300"
                          } ${submitted ? "cursor-default" : ""}`}
                        >
                          <input
                            type={binary ? "radio" : "checkbox"}
                            name={binary ? question.id : undefined}
                            checked={checked}
                            disabled={submitted}
                            onChange={() =>
                              binary
                                ? selectBinary(question.id, option.id)
                                : toggleOption(question.id, option.id)
                            }
                            className="mt-1 h-4 w-4 accent-violet-700"
                          />

                          <span className="leading-6 text-slate-800">
                            {option.text}
                          </span>
                        </label>
                      );
                    })}
                  </div>

                  {!submitted && (
                    <button
                      type="button"
                      aria-pressed={isSkipped}
                      onClick={() => leaveBlank(question.id)}
                      className={`mt-4 rounded-xl border px-4 py-2.5 text-sm font-bold transition ${
                        isSkipped
                          ? "border-slate-400 bg-slate-100 text-slate-950"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      {isSkipped
                        ? "✓ Jätän vastaamatta"
                        : "Jätän vastaamatta kysymykseen"}
                    </button>
                  )}

                  {submitted && (
                    <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-sm font-bold text-slate-600">
                        Oma vastaus:{" "}
                        {userAnswerText(question, answers, skipped)}
                      </p>

                      <p className="mt-1 font-bold text-slate-950">
                        Oikea vastaus: {correctAnswerText(question)}
                      </p>

                      <p className="mt-1 text-sm text-slate-600">
                        Perustuu ennakkomateriaaliin:{" "}
                        {lawSourceLabels[question.source]}
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      ))}

      {!submitted && (
        <section className="rounded-3xl border border-violet-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-black text-slate-950">Valmis?</h2>

              <p className="mt-1 text-sm text-slate-600">
                Vastaamattomat kysymykset jäävät 0 pisteeseen. Palautuksen
                jälkeen vastauksia ei voi enää muuttaa.
              </p>
            </div>

            <button
              type="button"
              onClick={submitExam}
              className="rounded-full bg-violet-700 px-6 py-3.5 font-black text-white shadow-lg shadow-violet-700/20 transition hover:bg-violet-800"
            >
              Palauta koe
            </button>
          </div>
        </section>
      )}

      {submitted && (
        <section
          id="oikeustiede-koetulos"
          className="scroll-mt-32 space-y-6 rounded-3xl border border-violet-200 bg-white p-6 shadow-sm sm:p-8"
        >
          {finishedByTime && (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 font-bold text-amber-900">
              Koeaika päättyi ja koe palautettiin automaattisesti.
            </div>
          )}

          {saveStatus === "saving" && (
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 font-bold text-blue-900">
              Tallennetaan koesuoritusta...
            </div>
          )}

          {saveStatus === "saved" && (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 font-bold text-emerald-900">
              ✓ Koesuoritus on tallennettu. Voit avata sen myöhemmin samalta
              sivulta kohdasta Omat suoritukset.
            </div>
          )}

          {saveStatus === "error" && (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm font-bold leading-6 text-rose-900">
              {saveError}
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-950 p-5 text-white">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-violet-200">
                Pisteesi
              </p>

              <p className="mt-2 text-4xl font-black">
                {result.score} / 30
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                Käytetty aika
              </p>

              <p className="mt-2 font-mono text-3xl font-black text-slate-950">
                {formatTime(LAW_EXAM_DURATION_SECONDS - timeLeft)}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                Vastaukset
              </p>

              <p className="mt-2 text-sm font-bold leading-7 text-slate-800">
                Oikein {result.correct}
                <br />
                Väärin {result.wrong}
                <br />
                Vastaamatta {result.unanswered}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
            <p className="font-black text-violet-950">
              Oikeustieteen valintakoe muodostui yhteisestä osiosta ja tästä
              eriytyvästä osiosta.
            </p>

            <p className="mt-2 text-sm leading-6 text-violet-900">
              Tämän näkymän 30 pisteen tulos kertoo vain eriytyvän osion
              pistemäärän. Opiskelupaikkaa ei voi arvioida tämän osion
              pistemäärän perusteella yksin.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={resetExam}
              className="rounded-full bg-violet-700 px-5 py-3 font-bold text-white transition hover:bg-violet-800"
            >
              Tee oikeustieteen koe uudelleen
            </button>

            <a
              href="/kurssi/ilmais-kurssi/harjoitukset"
              className="rounded-full border border-slate-300 px-5 py-3 font-bold text-slate-800 transition hover:border-violet-400 hover:text-violet-700"
            >
              Takaisin harjoituskokeisiin
            </a>
          </div>
        </section>
      )}
    </div>
  );
}
