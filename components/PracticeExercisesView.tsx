"use client";

import { useMemo, useState } from "react";
import type { Course } from "@/data/courses";
import type { PublicPracticeExam } from "@/data/practiceExams/types";
import PracticeExamRunner from "@/components/PracticeExamRunner";
import { getAvailableCourseModules } from "@/lib/courseNavigation";

type Props = {
  course: Course;
  exams: PublicPracticeExam[];
  initialExamId?: string;
};

export default function PracticeExercisesView({
  course,
  exams,
  initialExamId,
}: Props) {
  const defaultExamId =
    exams.find(
      (exam) =>
        exam.id === initialExamId
    )?.id ??
    exams[0]?.id ??
    "";

  const [
    activeExamId,
    setActiveExamId,
  ] = useState(defaultExamId);

  const [
    tasksOpen,
    setTasksOpen,
  ] = useState(true);

  const [
    examGroupOpen,
    setExamGroupOpen,
  ] = useState(true);

  const activeExam = useMemo(
    () =>
      exams.find(
        (exam) =>
          exam.id ===
          activeExamId
      ) ??
      exams[0] ??
      null,
    [
      activeExamId,
      exams,
    ]
  );

  /**
   * TÄRKEÄ:
   *
   * Harjoitussivun sisällysluettelo EI enää määritä
   * Teoriaa, Flashcardeja, Podcastia, Edistymistä jne.
   * itse.
   *
   * Sama getAvailableCourseModules(course) lukee
   * data/courseFeatures.ts:n asetuksia kuin muu
   * kurssin navigaatio.
   *
   * Näin esim. flashcards:false piilottaa Flashcardit
   * myös tältä Harjoitukset-sivulta.
   */
  const availableModules =
    useMemo(
      () =>
        getAvailableCourseModules(
          course
        ),
      [course]
    );

  function selectExam(
    examId: string
  ) {
    setActiveExamId(examId);
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
          Harjoituskokeita ei
          ole vielä lisätty
        </h2>
      </div>
    );
  }

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

          {availableModules.map(
            (module) => {
              const isTasksModule =
                module.href ===
                `/kurssi/${course.id}/harjoitukset`;

              /**
               * Harjoitukset tarvitsee oman
               * avattavan valikon, koska sen alla
               * näytetään kaikki harjoituskokeet.
               */
              if (
                isTasksModule
              ) {
                return (
                  <div
                    key={
                      module.id
                    }
                    className="overflow-hidden rounded-2xl border border-blue-200 bg-white"
                  >
                    <div className="flex items-center bg-blue-600 text-white">
                      <a
                        href={
                          module.href
                        }
                        className="flex-1 px-4 py-3 text-sm font-bold"
                        onClick={(
                          event
                        ) => {
                          if (
                            window
                              .location
                              .pathname ===
                            module.href
                          ) {
                            event.preventDefault();
                            setTasksOpen(
                              true
                            );
                          }
                        }}
                      >
                        {
                          module.title
                        }
                      </a>

                      <button
                        type="button"
                        aria-label={
                          tasksOpen
                            ? "Pienennä Harjoitukset"
                            : "Avaa Harjoitukset"
                        }
                        aria-expanded={
                          tasksOpen
                        }
                        onClick={() =>
                          setTasksOpen(
                            (
                              current
                            ) =>
                              !current
                          )
                        }
                        className="mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/15 text-base font-black transition hover:bg-white/25"
                      >
                        {tasksOpen
                          ? "−"
                          : "+"}
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
                                  (
                                    current
                                  ) =>
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
                                  {
                                    exams.length
                                  }{" "}
                                  koetta
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
                                (
                                  exam
                                ) => {
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
                                          kysymystä
                                          ·{" "}
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
                );
              }

              /**
               * Kaikki muut linkit tulevat suoraan
               * keskitetystä näkyvyyslogiikasta.
               *
               * Jos esimerkiksi flashcards:false,
               * Flashcardit-moduulia ei ole tässä
               * availableModules-listassa lainkaan.
               */
              return (
                <a
                  key={
                    module.id
                  }
                  href={
                    module.href
                  }
                  className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  {
                    module.title
                  }
                </a>
              );
            }
          )}
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
            Valitse vasemmalta
            harjoituskoe.
            Jokaisella kokeella on
            oma historia, ajastin ja
            tallentuvat tulokset.
          </p>
        </div>

        <PracticeExamRunner
          key={activeExam.id}
          exam={activeExam}
        />
      </section>
    </div>
  );
}
