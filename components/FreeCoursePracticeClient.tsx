"use client";

import { useEffect, useMemo, useState } from "react";
import {
  freeExam2026Questions,
  freeExamTaskArticles,
  type FreeExamQuestion,
} from "@/data/freeCourse2026";

type AnswerState = Record<string, string[]>;
type NumberAnswerState = Record<string, string>;
type SkippedState = Record<string, boolean>;

type ScoreLimit = {
  name: string;
  firstTime: number;
  allApplicants: number;
};

const EXAM_DURATION_SECONDS = 2 * 60 * 60;

const SCORE_LIMITS_2026: ScoreLimit[] = [
  { name: "Lapin yliopisto – hallintotieteet", firstTime: 23, allApplicants: 32 },
  { name: "Tampereen yliopisto – hallintotieteet", firstTime: 29, allApplicants: 36 },
  { name: "Vaasan yliopisto – hallintotieteet", firstTime: 25, allApplicants: 25 },
  { name: "Jyväskylän yliopisto – liikunnan yhteiskuntatieteet, kandidaatti- ja maisteriohjelma", firstTime: 30, allApplicants: 30 },
  { name: "Jyväskylän yliopisto – liikunnan yhteiskuntatieteet, maisteriohjelma", firstTime: 31, allApplicants: 31 },
  { name: "Helsingin yliopisto – samhällsvetenskaper", firstTime: 21, allApplicants: 28 },
  { name: "Helsingin yliopisto – kriminologia, sosiaalipsykologia, sosiologia ja yhteiskuntapolitiikka", firstTime: 35, allApplicants: 42 },
  { name: "Helsingin yliopisto – politiikka ja viestintä", firstTime: 35, allApplicants: 44 },
  { name: "Helsingin yliopisto – sosiaalityö", firstTime: 33, allApplicants: 41 },
  { name: "Helsingin yliopisto – yhteiskunnallinen muutos", firstTime: 34, allApplicants: 44 },
  { name: "Itä-Suomen yliopisto, Joensuu – julkisoikeus", firstTime: 39, allApplicants: 39 },
  { name: "Itä-Suomen yliopisto, Kuopio – sosiaalipsykologia", firstTime: 25, allApplicants: 32 },
  { name: "Itä-Suomen yliopisto, Kuopio – sosiaalityö", firstTime: 23, allApplicants: 31 },
  { name: "Itä-Suomen yliopisto, Joensuu – yhteiskuntatieteet", firstTime: 25, allApplicants: 25 },
  { name: "Jyväskylän yliopisto – sosiaalityö", firstTime: 28, allApplicants: 34 },
  { name: "Jyväskylän yliopisto – yhteiskuntatieteet", firstTime: 25, allApplicants: 28 },
  { name: "Lapin yliopisto – matkailututkimus", firstTime: 6, allApplicants: 16 },
  { name: "Lapin yliopisto – politiikkatieteet ja sosiologia", firstTime: 21, allApplicants: 30 },
  { name: "Lapin yliopisto – sosiaalityö", firstTime: 19, allApplicants: 33 },
  { name: "LUT-yliopisto – yhteiskuntatieteet", firstTime: 25, allApplicants: 29 },
  { name: "Tampereen yliopisto – politiikan tutkimus", firstTime: 34, allApplicants: 36 },
  { name: "Tampereen yliopisto – sosiaalityö", firstTime: 30, allApplicants: 37 },
  { name: "Turun yliopisto – poliittinen historia ja valtio-oppi", firstTime: 35, allApplicants: 42 },
  { name: "Turun yliopisto – sosiaalitieteet", firstTime: 30, allApplicants: 37 },
  { name: "Turun yliopisto – sosiaalityö", firstTime: 30, allApplicants: 37 },
  { name: "Åbo Akademi, Vasa – samhällsvetenskap", firstTime: 7, allApplicants: 7 },
  { name: "Åbo Akademi, Åbo – samhällsvetenskap", firstTime: 10, allApplicants: 10 },
  { name: "Åbo Akademi, Vasa – socialvetenskap", firstTime: 2, allApplicants: 2 },
];

const BINARY_LABELS = new Set([
  "Tosi",
  "Epätosi",
  "Kyllä",
  "Ei",
  "Oikein",
  "Väärin",
]);

function sameSet(a: string[], b: string[]) {
  if (a.length !== b.length) return false;
  const aa = [...a].sort();
  const bb = [...b].sort();
  return aa.every((value, index) => value === bb[index]);
}

function isBinaryQuestion(question: FreeExamQuestion) {
  return (
    question.type === "choice" &&
    question.options.length === 2 &&
    question.options.every((option) => BINARY_LABELS.has(option.text))
  );
}

function scoreQuestion(
  question: FreeExamQuestion,
  answers: AnswerState,
  numberAnswers: NumberAnswerState,
  skipped: SkippedState,
) {
  if (skipped[question.id]) return 0;

  if (question.type === "number") {
    const raw = (numberAnswers[question.id] ?? "").trim();
    if (!raw) return 0;
    const value = Number(raw.replace(",", ".").replace("%", "").trim());
    return value === question.correctNumber ? 1 : -1;
  }

  const selected = answers[question.id] ?? [];
  if (selected.length === 0) return 0;
  return sameSet(selected, question.correctAnswerIds) ? 1 : -1;
}

function correctAnswerText(question: FreeExamQuestion) {
  if (question.type === "number") return `${question.correctNumber} %`;
  return question.options
    .filter((option) => question.correctAnswerIds.includes(option.id))
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

export default function FreeCoursePracticeClient() {
  const [answers, setAnswers] = useState<AnswerState>({});
  const [numberAnswers, setNumberAnswers] = useState<NumberAnswerState>({});
  const [skipped, setSkipped] = useState<SkippedState>({});
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION_SECONDS);
  const [finishedByTime, setFinishedByTime] = useState(false);

  const tasks = useMemo(
    () =>
      Array.from({ length: 14 }, (_, index) => {
        const task = index + 1;
        return {
          task,
          article: freeExamTaskArticles[task],
          questions: freeExam2026Questions.filter(
            (question) => question.task === task,
          ),
        };
      }),
    [],
  );

  const result = useMemo(() => {
    const values = freeExam2026Questions.map((question) =>
      scoreQuestion(question, answers, numberAnswers, skipped),
    );

    return {
      score: values.reduce<number>((sum, value) => sum + value, 0),
      correct: values.filter((value) => value === 1).length,
      wrong: values.filter((value) => value === -1).length,
      unanswered: values.filter((value) => value === 0).length,
    };
  }, [answers, numberAnswers, skipped]);

  const admissionComparison = useMemo(() => {
    const firstTime = SCORE_LIMITS_2026.filter(
      (limit) => result.score >= limit.firstTime,
    );
    const allApplicants = SCORE_LIMITS_2026.filter(
      (limit) => result.score >= limit.allApplicants,
    );

    return { firstTime, allApplicants };
  }, [result.score]);

  useEffect(() => {
    if (!started || submitted) return;

    const timer = window.setInterval(() => {
      setTimeLeft((current) => Math.max(0, current - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [started, submitted]);

  useEffect(() => {
    if (!started || submitted || timeLeft > 0) return;

    setFinishedByTime(true);
    setSubmitted(true);

    window.setTimeout(() => {
      document
        .getElementById("koetulos")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, [started, submitted, timeLeft]);

  function choose(question: FreeExamQuestion, optionId: string) {
    if (!started || submitted) return;

    setSkipped((current) => ({ ...current, [question.id]: false }));

    if (question.type === "select" || isBinaryQuestion(question)) {
      setAnswers((current) => ({ ...current, [question.id]: [optionId] }));
      return;
    }

    setAnswers((current) => {
      const selected = current[question.id] ?? [];
      return {
        ...current,
        [question.id]: selected.includes(optionId)
          ? selected.filter((id) => id !== optionId)
          : [...selected, optionId],
      };
    });
  }

  function leaveBlank(questionId: string) {
    if (!started || submitted) return;

    setAnswers((current) => ({ ...current, [questionId]: [] }));
    setNumberAnswers((current) => ({ ...current, [questionId]: "" }));
    setSkipped((current) => ({ ...current, [questionId]: true }));
  }

  function startExam() {
    setAnswers({});
    setNumberAnswers({});
    setSkipped({});
    setSubmitted(false);
    setFinishedByTime(false);
    setTimeLeft(EXAM_DURATION_SECONDS);
    setStarted(true);

    window.setTimeout(() => {
      document
        .getElementById("koe-alku")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  function resetExam() {
    setAnswers({});
    setNumberAnswers({});
    setSkipped({});
    setSubmitted(false);
    setFinishedByTime(false);
    setTimeLeft(EXAM_DURATION_SECONDS);
    setStarted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function submitExam() {
    if (!started || submitted) return;

    const confirmed = window.confirm(
      "Haluatko varmasti palauttaa kokeen? Palautuksen jälkeen vastauksia ei voi enää muuttaa.",
    );

    if (!confirmed) return;

    setFinishedByTime(false);
    setSubmitted(true);

    window.setTimeout(() => {
      document
        .getElementById("koetulos")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  if (!started) {
    return (
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-5 sm:px-8">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-700">
            Harjoituskoe
          </p>
          <h2 className="mt-2 text-3xl font-black text-slate-950">
            Valintakoe G 2026
          </h2>
        </div>

        <div className="p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-bold text-slate-500">Kesto</p>
              <p className="mt-1 text-2xl font-black text-slate-950">2 tuntia</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-bold text-slate-500">Kysymyksiä</p>
              <p className="mt-1 text-2xl font-black text-slate-950">70</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-bold text-slate-500">Maksimipisteet</p>
              <p className="mt-1 text-2xl font-black text-slate-950">70 p</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
            <h3 className="font-black text-slate-950">Ennen kuin aloitat</h3>
            <p className="mt-2 leading-7 text-slate-700">
              Kun painat Aloita koe, kahden tunnin aika alkaa kulua. Koe sisältää
              vuoden 2026 Valintakoe G:n yhteisen osion tehtävät A1–A14 yhtenä
              kokeena. Ajan päättyessä koe palautetaan automaattisesti.
            </p>
          </div>

          <button
            type="button"
            onClick={startExam}
            className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-[#3f51e7] px-7 py-4 text-base font-black text-white shadow-lg shadow-indigo-600/20 transition hover:bg-[#3142d6] sm:w-auto"
          >
            Aloita koe
          </button>
        </div>
      </section>
    );
  }

  return (
    <div id="koe-alku" className="space-y-6 scroll-mt-32">
      <section className="sticky top-24 z-20 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-md backdrop-blur sm:px-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-blue-700">
              Valintakoe G 2026
            </p>
            <p className="mt-0.5 text-sm font-semibold text-slate-600">
              Yhteinen osio · 70 kysymystä · 70 pistettä
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
              Aikaa jäljellä
            </p>
            <p
              className={`mt-0.5 font-mono text-2xl font-black tabular-nums ${
                timeLeft <= 10 * 60 ? "text-rose-600" : "text-slate-950"
              }`}
            >
              {formatTime(timeLeft)}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-[#3f51e7]">
            Valintakoe G 2026
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700">
            Yksi koe
          </span>
        </div>
        <h2 className="mt-4 text-2xl font-black text-slate-950 sm:text-3xl">
          Yhteinen osio
        </h2>
        <p className="mt-3 max-w-3xl leading-7 text-slate-700">
          Pisteytys on sama kuin alkuperäisessä kokeessa: oikea vastaus +1,
          väärä −1 ja vastaamatta jätetty 0 pistettä. Monivalinnassa saat pisteen
          vain täysin oikeasta vastausyhdistelmästä.
        </p>
      </section>

      {tasks.map(({ task, article, questions }) => (
        <section
          key={task}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="border-b border-slate-200 bg-slate-50 px-5 py-4 sm:px-7">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-blue-700">
              {article}
            </p>
            <h2 className="mt-1 text-xl font-black text-slate-950">
              Tehtävä {task}
            </h2>
          </div>

          <div className="divide-y divide-slate-100">
            {questions.map((question) => {
              const selected = answers[question.id] ?? [];
              const isSkipped = Boolean(skipped[question.id]);
              const score = submitted
                ? scoreQuestion(question, answers, numberAnswers, skipped)
                : null;

              return (
                <article key={question.id} className="p-5 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base font-extrabold leading-7 text-slate-950 sm:text-lg">
                      <span className="mr-2 text-blue-700">{question.id}</span>
                      {question.question}
                    </h3>
                    {submitted && (
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-black ${
                          score === 1
                            ? "bg-emerald-100 text-emerald-800"
                            : score === -1
                              ? "bg-rose-100 text-rose-800"
                              : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {score === 1 ? "+1" : score === -1 ? "−1" : "0"}
                      </span>
                    )}
                  </div>

                  {question.type === "number" ? (
                    <div className="mt-4 max-w-xs">
                      <label className="text-sm font-bold text-slate-700">
                        Vastauksesi (%)
                      </label>
                      <input
                        type="text"
                        inputMode="decimal"
                        value={numberAnswers[question.id] ?? ""}
                        disabled={isSkipped || submitted}
                        onChange={(event) => {
                          if (submitted) return;
                          setSkipped((current) => ({
                            ...current,
                            [question.id]: false,
                          }));
                          setNumberAnswers((current) => ({
                            ...current,
                            [question.id]: event.target.value,
                          }));
                        }}
                        placeholder="Esim. 7"
                        className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-semibold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:bg-slate-100 disabled:text-slate-400"
                      />
                    </div>
                  ) : question.type === "select" ? (
                    <div className="mt-4 max-w-sm">
                      <select
                        value={isSkipped ? "" : selected[0] ?? ""}
                        disabled={isSkipped || submitted}
                        onChange={(event) => {
                          if (event.target.value) choose(question, event.target.value);
                        }}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:bg-slate-100"
                      >
                        <option value="">Valitse vastaus</option>
                        {question.options.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.text}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <div className="mt-4 grid gap-2.5">
                      {question.options.map((option) => {
                        const checked = !isSkipped && selected.includes(option.id);
                        const binary = isBinaryQuestion(question);

                        return (
                          <label
                            key={option.id}
                            className={`flex items-start gap-3 rounded-xl border px-4 py-3 transition ${
                              submitted
                                ? "cursor-default"
                                : "cursor-pointer"
                            } ${
                              checked
                                ? "border-blue-300 bg-blue-50"
                                : "border-slate-200 hover:border-blue-200 hover:bg-blue-50/40"
                            }`}
                          >
                            <input
                              type={binary ? "radio" : "checkbox"}
                              name={binary ? question.id : undefined}
                              checked={checked}
                              disabled={submitted}
                              onChange={() => choose(question, option.id)}
                              className="mt-1 h-4 w-4 accent-blue-600"
                            />
                            <span className="leading-6 text-slate-800">
                              {option.text}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  )}

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
                      <p className="font-bold text-slate-950">
                        Oikea vastaus: {correctAnswerText(question)}
                      </p>
                      {question.sourceNote && (
                        <p className="mt-1 text-sm text-slate-600">
                          Arvosteluperuste: {question.sourceNote}
                        </p>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      ))}

      {!submitted && (
        <section className="rounded-3xl border border-indigo-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-black text-slate-950">Valmis?</h2>
              <p className="mt-1 text-sm text-slate-600">
                Vastaamattomat kysymykset jäävät 0 pisteeseen. Palautuksen jälkeen
                vastauksia ei voi enää muuttaa.
              </p>
            </div>
            <button
              type="button"
              onClick={submitExam}
              className="rounded-full bg-[#3f51e7] px-6 py-3.5 font-black text-white shadow-lg shadow-indigo-600/20 hover:bg-[#3142d6]"
            >
              Palauta koe
            </button>
          </div>
        </section>
      )}

      {submitted && (
        <section
          id="koetulos"
          className="scroll-mt-32 space-y-6 rounded-3xl border border-indigo-200 bg-white p-6 shadow-sm sm:p-8"
        >
          {finishedByTime && (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 font-bold text-amber-900">
              Koeaika päättyi ja koe palautettiin automaattisesti.
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-950 p-5 text-white sm:col-span-1">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-indigo-200">
                Pisteesi
              </p>
              <p className="mt-2 text-4xl font-black">{result.score} / 70</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                Käytetty aika
              </p>
              <p className="mt-2 font-mono text-3xl font-black text-slate-950">
                {formatTime(EXAM_DURATION_SECONDS - timeLeft)}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                Vastaukset
              </p>
              <p className="mt-2 text-sm font-bold leading-7 text-slate-800">
                Oikein {result.correct}<br />
                Väärin {result.wrong}<br />
                Vastaamatta {result.unanswered}
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5 sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-700">
              Olisiko pistemäärä riittänyt vuonna 2026?
            </p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">
              Yhteisen osion pisterajoihin verrattuna
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-sm font-bold text-slate-500">Ensikertalaisena</p>
                <p className="mt-1 text-3xl font-black text-emerald-700">
                  {admissionComparison.firstTime.length} / {SCORE_LIMITS_2026.length}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  vertailussa olevasta hakukohteesta
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-sm font-bold text-slate-500">Kaikkien hakijoiden kiintiössä</p>
                <p className="mt-1 text-3xl font-black text-emerald-700">
                  {admissionComparison.allApplicants.length} / {SCORE_LIMITS_2026.length}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  vertailussa olevasta hakukohteesta
                </p>
              </div>
            </div>

            <details className="mt-5 rounded-2xl border border-emerald-200 bg-white">
              <summary className="cursor-pointer px-4 py-3 font-black text-slate-900">
                Näytä hakukohteet, joiden vuoden 2026 rajan pisteesi ylittivät
              </summary>
              <div className="border-t border-emerald-100 p-4">
                <p className="text-sm font-black text-slate-900">Ensikertalaiset</p>
                {admissionComparison.firstTime.length > 0 ? (
                  <ul className="mt-2 space-y-1.5 text-sm leading-6 text-slate-700">
                    {admissionComparison.firstTime.map((limit) => (
                      <li key={`first-${limit.name}`}>
                        • {limit.name} – raja {limit.firstTime} p
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm text-slate-600">
                    Pistemäärä ei ylittänyt tämän vertailun ensikertalaisten rajoja.
                  </p>
                )}

                <p className="mt-5 text-sm font-black text-slate-900">
                  Kaikki hakijat
                </p>
                {admissionComparison.allApplicants.length > 0 ? (
                  <ul className="mt-2 space-y-1.5 text-sm leading-6 text-slate-700">
                    {admissionComparison.allApplicants.map((limit) => (
                      <li key={`all-${limit.name}`}>
                        • {limit.name} – raja {limit.allApplicants} p
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm text-slate-600">
                    Pistemäärä ei ylittänyt tämän vertailun kaikkien hakijoiden rajoja.
                  </p>
                )}
              </div>
            </details>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              Vertailu käyttää vuoden 2026 lopullisia pisterajoja niissä
              hakukohteissa, joissa Valintakoe G:n yhteinen 70 pisteen osio oli
              vertailukelpoinen sellaisenaan. Tämä on pisterajavertailu, ei
              opiskelupaikkapäätös. Oikeustiede ei ole mukana, koska siihen
              käytettiin lisäksi oikeustieteen eriytyvää osiota.
            </p>

            <a
              href="/valintakoe-g-pisterajat"
              className="mt-4 inline-flex font-black text-[#3f51e7] hover:underline"
            >
              Katso kaikki Valintakoe G:n pisterajat 2026 →
            </a>
          </div>

          <button
            type="button"
            onClick={resetExam}
            className="rounded-full border border-slate-300 px-5 py-3 font-bold text-slate-800 transition hover:border-blue-400 hover:text-blue-700"
          >
            Tee Valintakoe G 2026 uudelleen
          </button>
        </section>
      )}
    </div>
  );
}
