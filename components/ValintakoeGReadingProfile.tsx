"use client";

import { useMemo } from "react";
import {
  VALINTAKOE_G_MIN_SKILL_SAMPLE,
  VALINTAKOE_G_READING_CATEGORIES,
} from "@/data/valintakoeGExercises/categories";
import { getProgressStatus, type ProgressRow } from "@/lib/progressAnalytics";

type Props = { rows: ProgressRow[] };

type SkillStat = {
  id: number;
  name: string;
  description: string;
  studentTip: string;
  correct: number;
  incorrect: number;
  skipped: number;
  resolved: number;
  total: number;
  accuracy: number | null;
  enoughData: boolean;
};

export default function ValintakoeGReadingProfile({ rows }: Props) {
  const stats = useMemo<SkillStat[]>(() => {
    return VALINTAKOE_G_READING_CATEGORIES.map(
      (category) => {
        const categoryRows = rows.filter(
          (row) =>
            row.category_id === category.id
        );

        let correct = 0;
        let incorrect = 0;
        let skipped = 0;

        categoryRows.forEach((row) => {
          const status = getProgressStatus(row);
          if (status === "correct") correct += 1;
          if (status === "incorrect") incorrect += 1;
          if (status === "skipped") skipped += 1;
        });

        const resolved = correct + incorrect;

        return {
          ...category,
          correct,
          incorrect,
          skipped,
          resolved,
          total: categoryRows.length,
          accuracy:
            resolved > 0
              ? Math.round(
                  (correct / resolved) * 100
                )
              : null,
          enoughData:
            resolved >=
            VALINTAKOE_G_MIN_SKILL_SAMPLE,
        };
      }
    );
  }, [rows]);

  const strengths = useMemo(
    () =>
      stats
        .filter(
          (item) =>
            item.enoughData &&
            item.accuracy != null &&
            item.accuracy >= 70
        )
        .sort(
          (a, b) =>
            (b.accuracy ?? 0) -
              (a.accuracy ?? 0) ||
            b.resolved - a.resolved
        )
        .slice(0, 3),
    [stats]
  );

  const practice = useMemo(
    () =>
      stats
        .filter(
          (item) =>
            item.enoughData &&
            item.accuracy != null &&
            item.accuracy < 70
        )
        .sort(
          (a, b) =>
            (a.accuracy ?? 0) -
              (b.accuracy ?? 0) ||
            b.resolved - a.resolved
        )
        .slice(0, 3),
    [stats]
  );

  return (
    <section className="min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700">
            Valintakoe G
          </p>
          <h2 className="mt-1 text-3xl font-black text-slate-950">
            Lukutaitoprofiili
          </h2>
          <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-slate-500">
            Jokaisesta kysymyksestä huomioidaan vain viimeisin vastaus valitulla ajanjaksolla.
            Osaamisprosentti lasketaan kaavalla
            oikein / (oikein + väärin). Jätän
            vastaamatta -vastaukset näytetään
            erikseen. Vahvuus-/heikkousarvio tehdään
            vasta vähintään {VALINTAKOE_G_MIN_SKILL_SAMPLE}{" "}
            ratkaistun tehtävän jälkeen.
          </p>
        </div>

      </div>
        <>
          <div className="mt-6 grid gap-4 xl:grid-cols-2">
            <SummaryCard
              title="Vahvuutesi"
              rows={strengths}
              emptyText="Vahvuus nimetään, kun kategoriassa on vähintään viisi vastattua kysymystä ja vähintään 70 % oikein."
            />
            <SummaryCard
              title="Harjoittele erityisesti"
              rows={practice}
              emptyText="Harjoittelusuositus muodostuu, kun kategoriassa on vähintään viisi vastattua kysymystä ja alle 70 % oikein."
            />
          </div>

          <div className="mt-6 grid gap-3">
            {stats.map((item) => {
              const width = item.accuracy ?? 0;

              return (
                <details
                  key={item.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
                >
                  <summary className="cursor-pointer list-none p-4 sm:p-5">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div className="min-w-0">
                        <p className="font-black text-slate-950">
                          {item.id}. {item.name}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-500">
                          {item.resolved} vastattu ·{" "}
                          {item.skipped} jätetty vastaamatta
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center gap-3">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-black ${
                            item.enoughData
                              ? "bg-blue-100 text-blue-700"
                              : "bg-slate-200 text-slate-600"
                          }`}
                        >
                          {item.enoughData
                            ? "Arvioitavissa"
                            : "Vähän dataa"}
                        </span>
                        <span className="min-w-[68px] text-right text-xl font-black text-blue-700">
                          {item.accuracy == null
                            ? "–"
                            : `${item.accuracy} %`}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-blue-600"
                        style={{ width: `${width}%` }}
                      />
                    </div>
                  </summary>

                  <div className="border-t border-slate-200 bg-white p-4 sm:p-5">
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      <MiniStat
                        label="Oikein"
                        value={item.correct}
                      />
                      <MiniStat
                        label="Väärin"
                        value={item.incorrect}
                      />
                      <MiniStat
                        label="Vastaamatta"
                        value={item.skipped}
                      />
                      <MiniStat
                        label="Tehtäviä yhteensä"
                        value={item.total}
                      />
                    </div>

                    <div className="mt-4 grid gap-3 lg:grid-cols-2">
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                          Mitä tämä tarkoittaa?
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-700">
                          {item.description}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-blue-50 p-4">
                        <p className="text-xs font-black uppercase tracking-wide text-blue-700">
                          Vinkki
                        </p>
                        <p className="mt-2 text-sm leading-6 text-blue-950">
                          {item.studentTip}
                        </p>
                      </div>
                    </div>
                  </div>
                </details>
              );
            })}
          </div>
        </>
    </section>
  );
}

function SummaryCard({
  title,
  rows,
  emptyText,
}: {
  title: string;
  rows: SkillStat[];
  emptyText: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="text-xl font-black text-slate-950">
        {title}
      </h3>

      {rows.length === 0 ? (
        <p className="mt-3 text-sm font-semibold leading-6 text-slate-500">
          {emptyText}
        </p>
      ) : (
        <div className="mt-4 space-y-2">
          {rows.map((row) => (
            <div
              key={row.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white px-3 py-2"
            >
              <span className="text-sm font-bold text-slate-700">
                {row.id}. {row.name}
              </span>
              <span className="font-black text-blue-700">
                {row.accuracy} %
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MiniStat({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">
      <p className="text-xs font-black uppercase tracking-wide text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-2xl font-black text-slate-950">
        {value}
      </p>
    </div>
  );
}
