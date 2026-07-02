"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { createClient } from "@supabase/supabase-js";
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

type ProgressAttemptRow = {
  id: string;
  user_id: string;
  course_id: string;
  question_id: string;
  question: string;
  area: string;
  selected_answer_ids: string[];
  correct_answer_ids: string[];
  is_correct: boolean;
  answered_at: string;
};

type AreaStats = {
  area: string;
  attempts: number;
  correct: number;
  accuracy: number;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

function mapRowToAttempt(row: ProgressAttemptRow): ProgressAttempt {
  return {
    id: row.id,
    courseId: row.course_id as CourseId,
    questionId: row.question_id,
    question: row.question,
    area: row.area,
    selectedAnswerIds: row.selected_answer_ids ?? [],
    correctAnswerIds: row.correct_answer_ids ?? [],
    isCorrect: row.is_correct,
    answeredAt: row.answered_at,
  };
}

function mapAttemptToRow(
  attempt: ProgressAttempt,
  userId: string
): ProgressAttemptRow {
  return {
    id: attempt.id,
    user_id: userId,
    course_id: attempt.courseId,
    question_id: attempt.questionId,
    question: attempt.question,
    area: attempt.area,
    selected_answer_ids: attempt.selectedAnswerIds ?? [],
    correct_answer_ids: attempt.correctAnswerIds ?? [],
    is_correct: attempt.isCorrect,
    answered_at: attempt.answeredAt,
  };
}

export default function ProgressView({ courseId }: Props) {
  const storageKey = `valintaguru_progress_${courseId}`;
  const migrationKey = `valintaguru_progress_migrated_${courseId}`;

  const supabase = useMemo(() => {
    return createClient(supabaseUrl, supabaseAnonKey);
  }, []);

  const [attempts, setAttempts] = useState<ProgressAttempt[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const loadProgress = useCallback(async () => {
    setHasLoaded(false);
    setErrorMessage(null);

    if (!supabaseUrl || !supabaseAnonKey) {
      setErrorMessage(
        "Supabase-asetukset puuttuvat. Tarkista NEXT_PUBLIC_SUPABASE_URL ja NEXT_PUBLIC_SUPABASE_ANON_KEY."
      );
      setHasLoaded(true);
      return;
    }

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
      setErrorMessage("Käyttäjän kirjautumistietoja ei voitu hakea.");
      setAttempts([]);
      setHasLoaded(true);
      return;
    }

    if (!user) {
      setErrorMessage("Kirjaudu sisään, jotta edistyminen voidaan hakea.");
      setAttempts([]);
      setHasLoaded(true);
      return;
    }

    setUserId(user.id);

    const localSaved = window.localStorage.getItem(storageKey);
    const alreadyMigrated = window.localStorage.getItem(migrationKey);

    if (localSaved && !alreadyMigrated) {
      try {
        const parsed = JSON.parse(localSaved) as ProgressAttempt[];

        if (Array.isArray(parsed) && parsed.length > 0) {
          const rows = parsed.map((attempt) => mapAttemptToRow(attempt, user.id));

          const { error: migrateError } = await supabase
            .from("student_progress_attempts")
            .upsert(rows, {
              onConflict: "id",
            });

          if (!migrateError) {
            window.localStorage.setItem(migrationKey, "true");
          }
        }
      } catch {
        window.localStorage.removeItem(storageKey);
      }
    }

    const { data, error } = await supabase
      .from("student_progress_attempts")
      .select(
        "id, user_id, course_id, question_id, question, area, selected_answer_ids, correct_answer_ids, is_correct, answered_at"
      )
      .eq("user_id", user.id)
      .eq("course_id", courseId)
      .order("answered_at", { ascending: true });

    if (error) {
      setErrorMessage("Edistymisen haku Supabasesta epäonnistui.");
      setAttempts([]);
      setHasLoaded(true);
      return;
    }

    setAttempts((data ?? []).map((row) => mapRowToAttempt(row as ProgressAttemptRow)));
    setHasLoaded(true);
  }, [courseId, migrationKey, storageKey, supabase]);

  useEffect(() => {
    void loadProgress();
  }, [loadProgress]);

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

  async function resetProgress() {
    const confirmed = window.confirm(
      "Haluatko varmasti nollata tämän kurssin edistymisen?"
    );

    if (!confirmed || !userId) {
      return;
    }

    setIsResetting(true);
    setErrorMessage(null);

    const { error } = await supabase
      .from("student_progress_attempts")
      .delete()
      .eq("user_id", userId)
      .eq("course_id", courseId);

    if (error) {
      setErrorMessage("Edistymisen nollaus epäonnistui.");
      setIsResetting(false);
      return;
    }

    window.localStorage.removeItem(storageKey);
    window.localStorage.removeItem(migrationKey);

    setAttempts([]);
    setIsResetting(false);
  }

  if (!hasLoaded) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-extrabold text-slate-950">
          Ladataan edistymistä
        </h2>

        <p className="mt-3 leading-8 text-slate-700">
          Haetaan käyttäjän tallennettuja tehtävätuloksia Supabasesta.
        </p>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wide text-red-700">
          Edistymistä ei voitu näyttää
        </p>

        <h2 className="mt-2 text-3xl font-extrabold text-red-950">
          Tallennuksen haku epäonnistui
        </h2>

        <p className="mt-4 leading-8 text-red-950">{errorMessage}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => void loadProgress()}
            className="rounded-full bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700"
          >
            Yritä uudelleen
          </button>

          <a
            href="/kirjaudu"
            className="rounded-full border border-red-200 bg-white px-6 py-3 font-bold text-red-700 transition hover:bg-red-100"
          >
            Kirjaudu sisään
          </a>
        </div>
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
          Supabaseen. Sen jälkeen näet onnistumisprosentin, heikoimman
          osa-alueen ja viimeisimmät vastaukset myös toisella laitteella.
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
                  <p className="font-extrabold text-slate-950">{area.area}</p>

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

                  <p className="mt-1 text-xs font-semibold text-slate-400">
                    {new Date(attempt.answeredAt).toLocaleString("fi-FI")}
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
          Nollaus poistaa tämän kurssin tehtäväedistymisen Supabasesta
          kirjautuneelta käyttäjältä.
        </p>

        <button
          type="button"
          onClick={resetProgress}
          disabled={isResetting}
          className="mt-6 rounded-full bg-red-50 px-6 py-3 font-bold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isResetting ? "Nollataan..." : "Nollaa edistyminen"}
        </button>
      </div>
    </div>
  );
}