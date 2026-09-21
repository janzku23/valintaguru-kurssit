"use client";

import { useMemo, useState } from "react";
import type { Course } from "@/data/courses";
import type { PublicPracticeExam } from "@/data/practiceExams/types";
import PracticeExamRunner from "@/components/PracticeExamRunner";

type Props = {
  course: Course;
  exams: PublicPracticeExam[];
  initialExamId?: string;
};

type PracticeExamIntroStep = {
  number: number;
  title: string;
  text: string;
};

type PracticeExamIntroData = {
  eyebrow?: string;
  title?: string;
  lead?: string;
  article?: {
    label?: string;
    title?: string;
    description?: string;
    url: string;
    buttonText?: string;
  };
  instructionsTitle?: string;
  steps?: PracticeExamIntroStep[];
  notice?: string;
  closing?: string;
};

type PracticeExamWithIntro = PublicPracticeExam & {
  articleUrl?: string;
  intro?: PracticeExamIntroData;
};

type RunnerMode = "lobby" | "exam" | "result";

function ExamPreparationCard({
  exam,
}: {
  exam: PracticeExamWithIntro;
}) {
  const intro = exam.intro;

  const articleUrl =
    intro?.article?.url ??
    exam.articleUrl;

  const hasPreparationContent =
    Boolean(articleUrl) ||
    Boolean(intro?.title) ||
    Boolean(intro?.lead) ||
    Boolean(intro?.steps?.length);

  if (!hasPreparationContent) {
    return null;
  }

  const steps =
    intro?.steps?.length
      ? intro.steps
      : [
          {
            number: 1,
            title: "Tutustu ennakkomateriaaliin",
            text:
              "Lue ennakkomateriaali huolellisesti ennen harjoituskokeen aloittamista.",
          },
          {
            number: 2,
            title: "Sulje materiaali ennen koetta",
            text:
              "Tee varsinainen harjoituskoe ilman ennakkomateriaalia näkyvissä.",
          },
          {
            number: 3,
            title: `Tee ${exam.durationMinutes} minuutin koe`,
            text:
              "Kun olet valmis, käynnistä ajastettu koe ja vastaa kysymyksiin annetussa ajassa.",
          },
          {
            number: 4,
            title: "Tarkista tuloksesi",
            text:
              "Kokeen jälkeen voit tarkastella tuloksia ja käydä läpi kehityskohteesi.",
          },
        ];

  return (
    <div className="space-y-5">
      <section className="overflow-hidden rounded-3xl border border-blue-200 bg-white shadow-sm">
        <div className="px-6 py-6 sm:px-8 sm:py-7">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
            <div className="max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-700">
                {intro?.eyebrow ??
                  "Oikeustieteen eriytyvä osio"}
              </p>

              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                {intro?.title ??
                  `${exam.title} – valmistautuminen`}
              </h2>

              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
                {intro?.lead ??
                  exam.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-extrabold text-blue-700">
                  {exam.durationMinutes} min
                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-extrabold text-slate-700">
                  {exam.questionCount} kysymystä
                </span>
              </div>
            </div>
          </div>
        </div>

        {articleUrl ? (
          <div className="border-t border-blue-100 bg-blue-50/70 px-6 py-6 sm:px-8">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-blue-700">
                  {intro?.article?.label ??
                    `${exam.title}:n ennakkomateriaali`}
                </p>

                <h3 className="mt-2 text-xl font-extrabold text-slate-950">
                  {intro?.article?.title ??
                    "Lue artikkeli ennen harjoituskokeen aloittamista"}
                </h3>

                <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
                  {intro?.article?.description ??
                    "Tutustu artikkeliin huolellisesti ennen koetta. Kun aloitat varsinaisen harjoituskokeen, sulje artikkeli pois näkyvistä, jotta harjoitus vastaa mahdollisimman hyvin oikeaa koetilannetta."}
                </p>
              </div>

              <a
                href={articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                {intro?.article?.buttonText ?? "Avaa artikkeli"} ↗
              </a>
            </div>
          </div>
        ) : null}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-blue-700">
              Ennen kuin aloitat
            </p>

            <h3 className="mt-2 text-xl font-extrabold text-slate-950 sm:text-2xl">
              {intro?.instructionsTitle ??
                "Miten harjoitustentti suoritetaan?"}
            </h3>
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={`${exam.id}-step-${step.number}`}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">
                  {step.number}
                </div>

                <div>
                  <h4 className="font-extrabold text-slate-950">
                    {step.title}
                  </h4>

                  <p className="mt-1.5 text-sm leading-6 text-slate-600">
                    {step.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {intro?.notice ? (
          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
            <p className="text-sm font-semibold leading-6 text-amber-950">
              {intro.notice}
            </p>
          </div>
        ) : articleUrl ? (
          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
            <p className="text-sm font-semibold leading-6 text-amber-950">
              Älä aloita koetta ennen kuin olet tutustunut
              ennakkomateriaaliin. Kun käynnistät kokeen,
              tarkoitus on vastata ilman artikkelia näkyvissä.
            </p>
          </div>
        ) : null}

        {intro?.closing ? (
          <p className="mt-5 text-sm font-extrabold text-slate-700">
            {intro.closing}
          </p>
        ) : null}
      </section>
    </div>
  );
}

export default function PracticeExercisesView({
  course,
  exams,
  initialExamId,
}: Props) {
  const defaultExamId =
    exams.find((exam) => exam.id === initialExamId)?.id ??
    exams[0]?.id ??
    "";

  const [activeExamId, setActiveExamId] =
    useState(defaultExamId);

  const [runnerMode, setRunnerMode] =
    useState<RunnerMode>("lobby");

  const [tasksOpen, setTasksOpen] =
    useState(true);

  const [examGroupOpen, setExamGroupOpen] =
    useState(true);

  const activeExam = useMemo(
    () =>
      exams.find(
        (exam) => exam.id === activeExamId
      ) ??
      exams[0] ??
      null,
    [activeExamId, exams]
  );

  function selectExam(examId: string) {
    setActiveExamId(examId);
    setRunnerMode("lobby");
    setTasksOpen(true);
    setExamGroupOpen(true);

    const url = new URL(
      window.location.href
    );

    url.searchParams.set(
      "koe",
      examId
    );

    window.history.replaceState(
      {},
      "",
      `${url.pathname}${url.search}${url.hash}`
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!activeExam) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-black text-slate-950">
          Harjoituskokeita ei ole vielä lisätty
        </h2>
      </div>
    );
  }

  const activeExamWithIntro =
    activeExam as PracticeExamWithIntro;

  return (
    <div className="grid gap-6 lg:grid-cols-[380px_minmax(0,1fr)]">
      <aside className="w-full rounded-3xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-6 lg:self-start">
        <div className="mb-5">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
            {course.label}
          </p>

          <h2 className="mt-1 text-xl font-extrabold text-slate-950">
            Sisällysluettelo
          </h2>
        </div>

        <nav className="space-y-2">
          <a
            href={`/kurssi/${course.id}`}
            className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
          >
            Kurssin etusivu
          </a>

          <a
            href={`/kurssi/${course.id}/teoria`}
            className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
          >
            Teoria
          </a>

          <div className="overflow-hidden rounded-2xl border border-blue-200 bg-white">
            <div className="flex items-center bg-blue-600 text-white">
              <a
                href={`/kurssi/${course.id}/harjoitukset`}
                className="flex-1 px-4 py-3 text-sm font-bold"
                onClick={(event) => {
                  if (
                    window.location.pathname ===
                    `/kurssi/${course.id}/harjoitukset`
                  ) {
                    event.preventDefault();
                    setTasksOpen(true);
                  }
                }}
              >
                Harjoitukset
              </a>

              <button
                type="button"
                aria-label={
                  tasksOpen
                    ? "Pienennä Harjoitukset"
                    : "Avaa Harjoitukset"
                }
                aria-expanded={tasksOpen}
                onClick={() =>
                  setTasksOpen(
                    (current) => !current
                  )
                }
                className="mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/15 text-base font-black transition hover:bg-white/25"
              >
                {tasksOpen ? "−" : "+"}
              </button>
            </div>

            {tasksOpen && (
              <div className="p-2">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() =>
                        setExamGroupOpen(
                          (current) =>
                            !current
                        )
                      }
                      aria-expanded={
                        examGroupOpen
                      }
                      className="flex flex-1 items-center justify-between gap-3 px-4 py-3 text-left transition hover:bg-slate-50"
                    >
                      <div>
                        <p className="font-extrabold text-slate-900">
                          Harjoituskokeet
                        </p>

                        <p className="mt-0.5 text-xs font-medium text-slate-500">
                          {exams.length} koetta
                        </p>
                      </div>

                      <span className="text-sm font-black text-slate-400">
                        {examGroupOpen
                          ? "−"
                          : "+"}
                      </span>
                    </button>
                  </div>

                  {examGroupOpen && (
                    <div className="space-y-1 border-t border-slate-100 bg-white p-2">
                      {exams.map(
                        (exam) => {
                          const active =
                            exam.id ===
                            activeExam.id;

                          return (
                            <button
                              key={
                                exam.id
                              }
                              type="button"
                              onClick={() =>
                                selectExam(
                                  exam.id
                                )
                              }
                              className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-3 text-left transition ${
                                active
                                  ? "bg-blue-600 text-white shadow-sm"
                                  : "text-slate-700 hover:bg-blue-50 hover:text-blue-800"
                              }`}
                            >
                              <div>
                                <p className="text-sm font-extrabold">
                                  {
                                    exam.title
                                  }
                                </p>

                                <p
                                  className={`mt-0.5 text-[11px] font-semibold ${
                                    active
                                      ? "text-blue-100"
                                      : "text-slate-500"
                                  }`}
                                >
                                  {
                                    exam.questionCount
                                  }{" "}
                                  kysymystä ·{" "}
                                  {
                                    exam.durationMinutes
                                  }{" "}
                                  min
                                </p>
                              </div>

                              {active && (
                                <span className="text-sm font-black text-white">
                                  ✓
                                </span>
                              )}
                            </button>
                          );
                        }
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <a
            href={`/kurssi/${course.id}/flashcardit`}
            className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
          >
            Flashcardit
          </a>

          <a
            href={`/kurssi/${course.id}/edistyminen`}
            className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
          >
            Edistyminen
          </a>
        </nav>
      </aside>

      <section className="min-w-0 space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-blue-700">
            {course.label}
          </p>

          <h1 className="mt-2 text-4xl font-extrabold text-slate-950">
            Harjoitukset
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Valitse vasemmalta harjoituskoe. Jokaisella
            kokeella on oma historia, ajastin ja tallentuvat
            tulokset.
          </p>
        </div>

        {runnerMode === "lobby" && (
          <ExamPreparationCard
            key={`prep-${activeExam.id}`}
            exam={activeExamWithIntro}
          />
        )}

        <PracticeExamRunner
          key={activeExam.id}
          exam={activeExam}
          onModeChange={setRunnerMode}
        />
      </section>
    </div>
  );
}
