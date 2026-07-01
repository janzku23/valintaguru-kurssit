"use client";

import { useEffect, useMemo, useState } from "react";
import { CourseId } from "../data/courses";

type Props = {
  courseId: CourseId;
};

type ProgressAttempt = {
  id: string;
  courseId: CourseId;
  questionId: string;
  question: string;
  area: string;
  selectedAnswerIds: string[];
  correctAnswerIds: string[];
  isCorrect: boolean;
  answeredAt: string;
};

type AreaStats = {
  area: string;
  attempts: number;
  correct: number;
  accuracy: number;
};

export default function ProgressView({ courseId }: Props) {
  const storageKey = `valintaguru_progress_${courseId}`;

  const [attempts, setAttempts] = useState<ProgressAttempt[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);

    if (!saved) {
      setHasLoaded(true);
      return;
    }

    try {
      const parsed = JSON.parse(saved) as ProgressAttempt[];
      setAttempts(parsed);
    } catch {
      window.localStorage.removeItem(storageKey);
    }

    setHasLoaded(true);
  }, [storageKey]);

  const totalAttempts = attempts.length;

  const correctAttempts = attempts.filter((attempt) => attempt.isCorrect).length;

  const accuracy =
    totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0;

  const uniqueQuestionsDone = useMemo(() => {
    return new Set(attempts.map((attempt) => attempt.questionId)).size;
  }, [attempts]);

  const areaStats = useMemo<AreaStats[]>(() => {
    const grouped = new Map<string, { attempts: number; correct: number }>();

    attempts.forEach((attempt) => {
      const current = grouped.get(attempt.area) ?? {
        attempts: 0,
        correct: 0,
      };

      grouped.set(attempt.area, {
        attempts: current.attempts + 1,
        correct: current.correct + (attempt.isCorrect ? 1 : 0),
      });
    });

    return Array.from(grouped.entries())
      .map(([area, value]) => ({
        area,
        attempts: value.attempts,
        correct: value.correct,
        accuracy:
          value.attempts > 0
            ? Math.round((value.correct / value.attempts) * 100)
            : 0,
      }))
      .sort((a, b) => a.accuracy - b.accuracy);
  }, [attempts]);

  const weakestArea = areaStats.length > 0 ? areaStats[0] : null;
  const strongestArea =
    areaStats.length > 0 ? areaStats[areaStats.length - 1] : null;

  const latestAttempts = [...attempts].reverse().slice(0, 8);

  function resetProgress() {
    const confirmed = window.confirm(
      "Haluatko varmasti nollata tämän kurssin edistymisen?"
    );

    if (!confirmed) {
      return;
    }

    window.localStorage.removeItem(storageKey);
    setAttempts([]);
  }

  if (!hasLoaded) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-extrabold text-slate-950">
          Ladataan edistymistä
        </h2>

        <p className="mt-3 leading-8 text-slate-700">
          Haetaan tallennettuja tehtävätuloksia.
        </p>
      </div>
    );
  }

  if (attempts.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
          Ei dataa vielä
        </p>

        <h2 className="mt-2 text-3xl font-extrabold text-slate-950">
          Et ole tehnyt vielä tehtäviä tällä kurssilla.
        </h2>

        <p className="mt-4 leading-8 text-slate-700">
          Kun teet monivalintatehtäviä, tulokset tallentuvat automaattisesti
          tänne. Sen jälkeen näet onnistumisprosentin, heikoimman osa-alueen ja
          viimeisimmät vastaukset.
        </p>

        <a
          href={`/kurssi/${courseId}/harjoitukset`}
          className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
        >
          Siirry harjoituksiin
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
            Vastauksia
          </p>

          <p className="mt-2 text-4xl font-extrabold text-slate-950">
            {totalAttempts}
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
            Oikein
          </p>

          <p className="mt-2 text-4xl font-extrabold text-emerald-700">
            {correctAttempts}
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
            Tarkkuus
          </p>

          <p className="mt-2 text-4xl font-extrabold text-blue-700">
            {accuracy} %
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-slate-600">
            Eri kysymyksiä
          </p>

          <p className="mt-2 text-4xl font-extrabold text-slate-950">
            {uniqueQuestionsDone}
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-orange-200 bg-orange-50 p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-700">
            Heikoin osa-alue
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-orange-950">
            {weakestArea?.area ?? "Ei vielä dataa"}
          </h2>

          <p className="mt-4 leading-8 text-orange-950">
            Onnistuminen {weakestArea?.accuracy ?? 0} %. Tätä osa-aluetta
            kannattaa harjoitella seuraavaksi.
          </p>

          <a
            href={`/kurssi/${courseId}/harjoitukset`}
            className="mt-6 inline-flex rounded-full bg-orange-600 px-6 py-3 font-bold text-white transition hover:bg-orange-700"
          >
            Harjoittele lisää
          </a>
        </div>

        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
            Vahvin osa-alue
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-emerald-950">
            {strongestArea?.area ?? "Ei vielä dataa"}
          </h2>

          <p className="mt-4 leading-8 text-emerald-950">
            Onnistuminen {strongestArea?.accuracy ?? 0} %. Tämä alue näyttää
            tällä hetkellä vahvimmalta.
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
          Osa-alueet
        </p>

        <h2 className="mt-2 text-3xl font-extrabold text-slate-950">
          Tulokset aiheittain
        </h2>

        <div className="mt-6 space-y-4">
          {areaStats.map((area) => (
            <div key={area.area}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-extrabold text-slate-950">
                    {area.area}
                  </p>

                  <p className="text-sm font-semibold text-slate-500">
                    {area.correct} / {area.attempts} oikein
                  </p>
                </div>

                <p className="font-extrabold text-blue-700">
                  {area.accuracy} %
                </p>
              </div>

              <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-blue-600"
                  style={{ width: `${area.accuracy}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
          Viimeisimmät vastaukset
        </p>

        <h2 className="mt-2 text-3xl font-extrabold text-slate-950">
          Tehtävähistoria
        </h2>

        <div className="mt-6 space-y-3">
          {latestAttempts.map((attempt) => (
            <div
              key={attempt.id}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="font-bold text-slate-950">
                    {attempt.question}
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    {attempt.area}
                  </p>
                </div>

                <span
                  className={`w-fit rounded-full px-3 py-1 text-sm font-bold ${
                    attempt.isCorrect
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {attempt.isCorrect ? "Oikein" : "Väärin"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
          Hallinta
        </p>

        <h2 className="mt-2 text-2xl font-extrabold text-slate-950">
          Edistymisen nollaus
        </h2>

        <p className="mt-3 leading-8 text-slate-700">
          Nollaus poistaa vain tämän kurssin paikallisesti tallennetun
          tehtäväedistymisen.
        </p>

        <button
          type="button"
          onClick={resetProgress}
          className="mt-6 rounded-full bg-red-50 px-6 py-3 font-bold text-red-700 transition hover:bg-red-100"
        >
          Nollaa edistyminen
        </button>
      </div>
    </div>
  );
}