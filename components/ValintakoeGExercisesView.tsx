"use client";

import { useMemo, useState } from "react";
import type { Course } from "@/data/courses";
import type { PublicValintakoeGExercise } from "@/data/valintakoeGExercises/types";
import { getAvailableCourseModules } from "@/lib/courseNavigation";
import ValintakoeGExerciseRunner from "@/components/ValintakoeGExerciseRunner";

type Props = {
  course: Course;
  exercises: PublicValintakoeGExercise[];
  initialExerciseId?: string;
};

function difficultyLabel(value: string) {
  if (value === "easy") return "Helpot harjoitukset";
  if (value === "medium") return "Keskitaso";
  if (value === "hard") return "Vaikeat harjoitukset";
  return value;
}

export default function ValintakoeGExercisesView({
  course,
  exercises,
  initialExerciseId,
}: Props) {
  const defaultExerciseId =
    exercises.find(
      (exercise) =>
        exercise.id === initialExerciseId
    )?.id ??
    exercises[0]?.id ??
    "";

  const [activeExerciseId, setActiveExerciseId] =
    useState(defaultExerciseId);
  const [tasksOpen, setTasksOpen] =
    useState(true);
  const [difficultyOpen, setDifficultyOpen] =
    useState<Record<string, boolean>>({
      easy: true,
      medium: true,
      hard: true,
    });

  const availableModules = useMemo(
    () => getAvailableCourseModules(course),
    [course]
  );

  const activeExercise = useMemo(
    () =>
      exercises.find(
        (exercise) =>
          exercise.id === activeExerciseId
      ) ??
      exercises[0] ??
      null,
    [activeExerciseId, exercises]
  );

  const groups = useMemo(() => {
    const order = ["easy", "medium", "hard"];

    return order
      .map((difficulty) => ({
        difficulty,
        exercises: exercises.filter(
          (exercise) =>
            exercise.difficulty === difficulty
        ),
      }))
      .filter((group) => group.exercises.length > 0);
  }, [exercises]);

  function selectExercise(exerciseId: string) {
    setActiveExerciseId(exerciseId);
    setTasksOpen(true);

    const url = new URL(window.location.href);
    url.searchParams.set("koe", exerciseId);
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

  if (!activeExercise) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-black text-slate-950">
          Harjoituksia ei ole vielä lisätty
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

          {availableModules.map((module) => {
            const isTasksModule =
              module.href ===
              `/kurssi/${course.id}/harjoitukset`;

            if (!isTasksModule) {
              return (
                <a
                  key={module.id}
                  href={module.href}
                  className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  {module.title}
                </a>
              );
            }

            return (
              <div
                key={module.id}
                className="overflow-hidden rounded-2xl border border-blue-200 bg-white"
              >
                <div className="flex items-center bg-blue-600 text-white">
                  <a
                    href={module.href}
                    onClick={(event) => {
                      if (
                        window.location.pathname ===
                        module.href
                      ) {
                        event.preventDefault();
                        setTasksOpen(true);
                      }
                    }}
                    className="flex-1 px-4 py-3 text-sm font-bold"
                  >
                    {module.title}
                  </a>

                  <button
                    type="button"
                    aria-expanded={tasksOpen}
                    onClick={() =>
                      setTasksOpen(
                        (current) => !current
                      )
                    }
                    className="mr-2 flex h-8 w-8 items-center justify-center rounded-xl bg-white/15 font-black transition hover:bg-white/25"
                  >
                    {tasksOpen ? "−" : "+"}
                  </button>
                </div>

                {tasksOpen && (
                  <div className="space-y-2 p-2">
                    {groups.map((group) => {
                      const open =
                        difficultyOpen[
                          group.difficulty
                        ] ?? true;

                      return (
                        <div
                          key={group.difficulty}
                          className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setDifficultyOpen(
                                (current) => ({
                                  ...current,
                                  [group.difficulty]:
                                    !open,
                                })
                              )
                            }
                            className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition hover:bg-slate-50"
                          >
                            <div>
                              <p className="font-extrabold text-slate-900">
                                {difficultyLabel(
                                  group.difficulty
                                )}
                              </p>
                              <p className="mt-0.5 text-xs font-medium text-slate-500">
                                {group.exercises.length}{" "}
                                harjoitus
                                {group.exercises.length ===
                                1
                                  ? ""
                                  : "ta"}
                              </p>
                            </div>
                            <span className="font-black text-slate-400">
                              {open ? "−" : "+"}
                            </span>
                          </button>

                          {open && (
                            <div className="space-y-1 border-t border-slate-100 p-2">
                              {group.exercises.map(
                                (exercise) => {
                                  const active =
                                    exercise.id ===
                                    activeExercise.id;

                                  return (
                                    <button
                                      key={exercise.id}
                                      type="button"
                                      onClick={() =>
                                        selectExercise(
                                          exercise.id
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
                                          {exercise.title}
                                        </p>
                                        <p
                                          className={`mt-0.5 text-[11px] font-semibold ${
                                            active
                                              ? "text-blue-100"
                                              : "text-slate-500"
                                          }`}
                                        >
                                          {
                                            exercise.questionCount
                                          }{" "}
                                          kysymystä ·{" "}
                                          {
                                            exercise.durationMinutes
                                          }{" "}
                                          min
                                        </p>
                                      </div>
                                      {active && (
                                        <span className="font-black">
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
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
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
            Valintakoe G:n harjoitukset käyttävät omaa
            lukutaitoprofiilia. Oikeustieteen
            harjoituskoelogiiikkaa ei käytetä tässä
            näkymässä.
          </p>
        </div>

        <ValintakoeGExerciseRunner
          key={activeExercise.id}
          exercise={activeExercise}
        />
      </section>
    </div>
  );
}
