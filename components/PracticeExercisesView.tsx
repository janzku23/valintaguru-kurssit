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
  const isOikisPracticeCourse =
    course.id === "oikis" ||
    course.id === "oikis-teho" ||
    course.id === "oikis-teho-etaope";

  const validInitialExamId =
    exams.find((exam) => exam.id === initialExamId)?.id ?? "";

  const defaultExamId = isOikisPracticeCourse
    ? validInitialExamId
    : validInitialExamId || exams[0]?.id || "";

  const [activeExamId, setActiveExamId] =
    useState(defaultExamId);

  const [showIntro, setShowIntro] =
    useState(isOikisPracticeCourse && !validInitialExamId);

  const [tasksOpen, setTasksOpen] =
    useState(true);

  const [examGroupOpen, setExamGroupOpen] =
    useState(true);

  const activeExam = useMemo(
    () =>
      exams.find(
        (exam) => exam.id === activeExamId
      ) ??
      (!isOikisPracticeCourse
        ? exams[0] ?? null
        : null),
    [
      activeExamId,
      exams,
      isOikisPracticeCourse,
    ]
  );

  const availableModules =
    useMemo(
      () =>
        getAvailableCourseModules(
          course
        ),
      [course]
    );

  function updateUrl(
    examId?: string
  ) {
    const url = new URL(
      window.location.href
    );

    if (examId) {
      url.searchParams.set(
        "koe",
        examId
      );
    } else {
      url.searchParams.delete(
        "koe"
      );
    }

    window.history.replaceState(
      {},
      "",
      `${url.pathname}${url.search}${url.hash}`
    );
  }

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function selectIntro() {
    setShowIntro(true);
    setActiveExamId("");
    setTasksOpen(true);
    setExamGroupOpen(true);

    updateUrl();
    scrollTop();
  }

  function selectExam(
    examId: string
  ) {
    setShowIntro(false);
    setActiveExamId(examId);
    setTasksOpen(true);
    setExamGroupOpen(true);

    updateUrl(examId);
    scrollTop();
  }

  if (exams.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-black text-slate-950">
          Harjoituskokeita ei ole vielä lisätty
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

              if (isTasksModule) {
                return (
                  <div
                    key={module.id}
                    className="overflow-hidden rounded-2xl border border-blue-200 bg-white"
                  >
                    <div className="flex items-center bg-blue-600 text-white">
                      <button
                        type="button"
                        className="flex-1 px-4 py-3 text-left text-sm font-bold"
                        onClick={() => {
                          setTasksOpen(true);

                          if (
                            isOikisPracticeCourse
                          ) {
                            selectIntro();
                          }
                        }}
                      >
                        {module.title}
                      </button>

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
                            (current) =>
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
                              {isOikisPracticeCourse && (
                                <button
                                  type="button"
                                  onClick={
                                    selectIntro
                                  }
                                  className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-3 text-left transition ${
                                    showIntro
                                      ? "bg-blue-600 text-white shadow-sm"
                                      : "text-slate-700 hover:bg-blue-50 hover:text-blue-800"
                                  }`}
                                >
                                  <div>
                                    <p className="text-sm font-extrabold">
                                      Ohjeet harjoitustentteihin
                                    </p>

                                    <p
                                      className={`mt-0.5 text-[11px] font-semibold ${
                                        showIntro
                                          ? "text-blue-100"
                                          : "text-slate-500"
                                      }`}
                                    >
                                      Lue ennen Tentti 1:tä
                                    </p>
                                  </div>

                                  {showIntro && (
                                    <span className="text-sm font-black text-white">
                                      ✓
                                    </span>
                                  )}
                                </button>
                              )}

                              {exams.map(
                                (
                                  exam
                                ) => {
                                  const active =
                                    !showIntro &&
                                    exam.id ===
                                      activeExam?.id;

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

              return (
                <a
                  key={module.id}
                  href={
                    module.href
                  }
                  className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  {module.title}
                </a>
              );
            }
          )}
        </nav>
      </aside>

      <section className="min-w-0 space-y-6">
        {showIntro &&
        isOikisPracticeCourse ? (
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-6 py-8 text-white sm:px-8 sm:py-10">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-blue-100">
                Oikeustieteen eriytyvä osio
              </p>

              <h1 className="mt-3 max-w-4xl text-3xl font-extrabold tracking-tight sm:text-4xl">
                Näin suoritat oikeustieteen eriytyvän osion harjoitustentit
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-blue-50 sm:text-lg">
                Tämä kurssi sisältää harjoitustenttejä, joiden tarkoitus on
                simuloida aitoa pääsykoetilannetta. Jokainen tentti perustuu
                akateemiseen artikkeliin ja sisältää erilaisia kysymystyyppejä,
                jotka vastaavat oikean kokeen rakennetta.
              </p>
            </div>

            <div className="space-y-8 p-6 sm:p-8">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-950">
                  Miten harjoitustentit toimivat?
                </h2>
              </div>

              <div className="grid gap-5">
                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">
                      1
                    </span>

                    <div>
                      <h3 className="text-lg font-extrabold text-slate-950">
                        Valitse tentti sivupalkista
                      </h3>

                      <p className="mt-2 leading-7 text-slate-700">
                        Vasemmassa sivupalkissa (mobiilissa ☰-valikosta)
                        näet kaikki 8 harjoitustenttiä listattuna. Klikkaa
                        haluamaasi tenttiä aloittaaksesi.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">
                      2
                    </span>

                    <div>
                      <h3 className="text-lg font-extrabold text-slate-950">
                        Avaa artikkeli ja lue sitä 2–4 vuorokautta
                      </h3>

                      <p className="mt-2 leading-7 text-slate-700">
                        Jokaisen tentin alussa on linkki akateemiseen
                        artikkeliin. Avaa artikkeli ja lue sitä 2–4
                        vuorokautta. Lue artikkeli useaan otteeseen.
                        Oikeassa koetilanteessa sinulla ei ole
                        ennakkomateriaalia saatavilla, joten suosittelemme
                        jättämään sen myös tässä tenttiä tehtäessä pois
                        näkyvistä.
                      </p>

                      <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 font-bold text-amber-900">
                        Sinulla on rajattu aika (60 minuuttia) vastata
                        kysymyksiin.
                      </div>
                    </div>
                  </div>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">
                      3
                    </span>

                    <div>
                      <h3 className="text-lg font-extrabold text-slate-950">
                        Vastaa kysymyksiin
                      </h3>

                      <p className="mt-2 leading-7 text-slate-700">
                        Kysymykset perustuvat artikkeliin. Älä käytä
                        artikkelia vastatessasi, sillä myöskään oikeassa
                        koetilanteessa sinulla ei ole ennakkomateriaalia
                        näkyvissäsi.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">
                      4
                    </span>

                    <div>
                      <h3 className="text-lg font-extrabold text-slate-950">
                        Tarkista tuloksesi
                      </h3>

                      <p className="mt-2 leading-7 text-slate-700">
                        Tentin jälkeen näet pisteesi ja voit analysoida
                        vahvuuksiasi sekä kehityskohteitasi.
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h2 className="text-2xl font-extrabold text-blue-950">
                  Aloita harjoittelu ja siirry ensimmäiseen tenttiin!
                </h2>

                <p className="mt-3 leading-7 text-blue-950/80">
                  Valitse ensimmäinen tentti sivupalkista ja aloita
                  harjoittelu. Muista: mitä enemmän harjoittelet, sitä
                  varmempi olet koepäivänä!
                </p>

                <p className="mt-4 font-extrabold text-blue-950">
                  Onnea harjoitteluun! 💪
                </p>

                {exams[0] && (
                  <button
                    type="button"
                    onClick={() =>
                      selectExam(
                        exams[0].id
                      )
                    }
                    className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 font-extrabold text-white transition hover:bg-blue-700"
                  >
                    Siirry Tentti 1:een →
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : activeExam ? (
          <>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-blue-700">
                {course.label}
              </p>

              <h1 className="mt-2 text-4xl font-extrabold text-slate-950">
                Harjoitukset
              </h1>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
                Valitse vasemmalta harjoituskoe. Jokaisella kokeella on
                oma historia, ajastin ja tallentuvat tulokset.
              </p>
            </div>

            <PracticeExamRunner
              key={
                activeExam.id
              }
              exam={
                activeExam
              }
            />
          </>
        ) : null}
      </section>
    </div>
  );
}
