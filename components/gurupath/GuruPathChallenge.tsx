"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";
import { createClient } from "@/utils/supabase/client";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";
import { awardGuruPath } from "@/lib/gurupath/awardGuruPath";
import type { QuizQuestion } from "@/data/courseContent";
import type { CourseId } from "@/data/courses";

type RewardSource = "path-node" | "vault";

type Props = {
  courseId: CourseId;
  nodeId: string;
  question: QuizQuestion;
  source: RewardSource;
  xpReward: number;
  scoreReward: number;
  onCompleted: (
    sourceId: string,
    source: RewardSource
  ) => void;
  onClose: () => void;
};

export default function GuruPathChallenge({
  courseId,
  nodeId,
  question,
  source,
  xpReward,
  scoreReward,
  onCompleted,
  onClose,
}: Props) {
  const supabase = useMemo(() => createClient(), []);

  const [selectedAnswerIds, setSelectedAnswerIds] =
    useState<string[]>([]);

  const [result, setResult] = useState<
    "idle" | "wrong" | "correct"
  >("idle");

  const [saving, setSaving] = useState(false);

  const [error, setError] = useState<
    string | null
  >(null);

  const [rewarded, setRewarded] = useState(false);

  const [cooldown, setCooldown] = useState(0);

  /*
   * true = ensimmäinen serveritarkistus on valmis.
   *
   * Ennen tätä vastausnappeja ei vapauteta, jotta käyttäjä ei ehdi
   * klikata vastausta ennen kuin palvelimelta on tarkistettu,
   * onko jäähy vielä käynnissä.
   */
  const [cooldownLoaded, setCooldownLoaded] =
    useState(false);

  const [xpLost, setXpLost] = useState(false);

  const isCorrect = useMemo(() => {
    const selected = [...selectedAnswerIds].sort();
    const correct = [...question.correctAnswerIds].sort();

    return (
      selected.length === correct.length &&
      selected.every(
        (id, index) => id === correct[index]
      )
    );
  }, [
    question.correctAnswerIds,
    selectedAnswerIds,
  ]);

  /*
   * TÄRKEÄ KORJAUS:
   *
   * Jäähy tarkistetaan aina palvelimelta, kun tehtävä avataan.
   * Näin:
   * - kartalle palaaminen
   * - tehtävän uudelleen avaaminen
   * - sivun refresh
   *
   * eivät nollaa lukkoa.
   */
  useEffect(() => {
    let cancelled = false;

    async function loadCooldown() {
      setCooldownLoaded(false);
      setError(null);

      try {
        const response = await fetch(
          `/api/gurupath/wrong-answer?courseId=${encodeURIComponent(
            courseId
          )}&nodeId=${encodeURIComponent(nodeId)}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data?.error ??
              "Jäähyn tarkistus epäonnistui."
          );
        }

        if (!cancelled) {
          setCooldown(
            Math.max(
              0,
              Number(data.cooldownSeconds ?? 0)
            )
          );
        }
      } catch (caught) {
        if (!cancelled) {
          setError(
            caught instanceof Error
              ? caught.message
              : "Jäähyn tarkistus epäonnistui."
          );
        }
      } finally {
        if (!cancelled) {
          setCooldownLoaded(true);
        }
      }
    }

    void loadCooldown();

    return () => {
      cancelled = true;
    };
  }, [courseId, nodeId]);

  useEffect(() => {
    if (cooldown <= 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setCooldown((current) =>
        Math.max(0, current - 1)
      );
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [cooldown]);

  function toggleAnswer(answerId: string) {
    if (
      !cooldownLoaded ||
      cooldown > 0 ||
      result !== "idle" ||
      saving
    ) {
      return;
    }

    if (question.correctAnswerIds.length === 1) {
      setSelectedAnswerIds([answerId]);
      return;
    }

    setSelectedAnswerIds((current) =>
      current.includes(answerId)
        ? current.filter((id) => id !== answerId)
        : [...current, answerId]
    );
  }

  async function saveCorrectAttempt() {
    const {
      user,
      error: authError,
    } = await getAuthenticatedUser();

    if (authError || !user) {
      throw new Error(
        authError?.message ??
          "Kirjaudu sisään, jotta GuruPath-vastaus voidaan tallentaa."
      );
    }

    const { error: attemptError } = await supabase
      .from("student_progress_attempts")
      .insert({
        user_id: user.id,
        course_id: courseId,
        question_id: question.id,
        question: question.question,
        area: "GuruPath",
        selected_answer_ids:
          selectedAnswerIds,
        correct_answer_ids:
          question.correctAnswerIds,
        is_correct: true,
        answered_at:
          new Date().toISOString(),
      });

    if (attemptError) {
      throw new Error(
        `Vastauksen tallennus epäonnistui: ${attemptError.message}`
      );
    }
  }

  async function applyWrongAnswerPenalty() {
    const response = await fetch(
      "/api/gurupath/wrong-answer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseId,
          nodeId,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data?.error ??
          "Väärän vastauksen käsittely epäonnistui."
      );
    }

    setCooldown(
      Math.max(
        0,
        Number(data.cooldownSeconds ?? 15)
      )
    );

    setXpLost(Boolean(data.applied));
  }

  async function checkAnswer() {
    if (
      !cooldownLoaded ||
      cooldown > 0 ||
      selectedAnswerIds.length === 0 ||
      saving ||
      result !== "idle"
    ) {
      return;
    }

    setSaving(true);
    setError(null);
    setXpLost(false);

    try {
      /*
       * Tarkistetaan jäähy VIELÄ kerran juuri ennen vastauksen käsittelyä.
       *
       * Tämä sulkee myös pienen race condition -ikkunan tilanteessa,
       * jossa cooldown muuttui toisessa välilehdessä tai toisesta
       * pyynnöstä komponentin avaamisen jälkeen.
       */
      const cooldownResponse = await fetch(
        `/api/gurupath/wrong-answer?courseId=${encodeURIComponent(
          courseId
        )}&nodeId=${encodeURIComponent(nodeId)}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      const cooldownData =
        await cooldownResponse.json();

      if (!cooldownResponse.ok) {
        throw new Error(
          cooldownData?.error ??
            "Jäähyn tarkistus epäonnistui."
        );
      }

      const remaining = Math.max(
        0,
        Number(
          cooldownData.cooldownSeconds ?? 0
        )
      );

      if (remaining > 0) {
        setCooldown(remaining);
        return;
      }

      if (!isCorrect) {
        setResult("wrong");

        await applyWrongAnswerPenalty();

        return;
      }

      await saveCorrectAttempt();

      const sourceId =
        `gurupath:${nodeId}:${question.id}`;

      const award =
        await awardGuruPath({
          courseId,
          source,
          sourceId,
          xp: xpReward,
          score: scoreReward,
        });

      setResult("correct");

      setRewarded(
        Boolean(award.awarded)
      );

      onCompleted(
        sourceId,
        source
      );
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "GuruPath-vastauksen käsittely epäonnistui."
      );
    } finally {
      setSaving(false);
    }
  }

  function retry() {
    if (
      !cooldownLoaded ||
      cooldown > 0
    ) {
      return;
    }

    setSelectedAnswerIds([]);
    setResult("idle");
    setError(null);
    setXpLost(false);
  }

  const interactionLocked =
    !cooldownLoaded ||
    cooldown > 0 ||
    saving;

  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-violet-700">
            {source === "vault"
              ? "GuruPath Vault"
              : "GuruPath-haaste"}
          </p>

          <h2 className="mt-2 text-2xl font-black text-slate-950">
            {question.question}
          </h2>
        </div>

        <div className="rounded-full bg-slate-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-slate-500">
          {source === "vault"
            ? "Vault"
            : "Tehtävä"}
        </div>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {question.correctAnswerIds.length > 1
          ? "Valitse kaikki mielestäsi oikeat vaihtoehdot. Väärä yritys ei paljasta ratkaisua."
          : "Valitse mielestäsi oikea vaihtoehto. Väärä yritys ei paljasta ratkaisua."}
      </p>

      {!cooldownLoaded && (
        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-bold text-slate-600">
            Tarkistetaan, onko tehtävässä aktiivinen jäähy…
          </p>
        </div>
      )}

      {cooldownLoaded &&
        cooldown > 0 &&
        result === "idle" && (
          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-black text-amber-950">
              Tehtävä on vielä jäähyllä.
            </p>

            <p className="mt-2 text-sm leading-6 text-amber-900">
              Voit yrittää uudelleen, kun aikarajoitus päättyy.
              Kartalle poistuminen ei nollaa jäähyä.
            </p>

            <div className="mt-4 flex items-center justify-between rounded-xl border border-amber-200 bg-white/70 px-4 py-3">
              <span className="text-sm font-bold text-amber-900">
                Uusi yritys
              </span>

              <span className="text-xl font-black text-amber-700">
                {cooldown} s
              </span>
            </div>
          </div>
        )}

      <div className="mt-6 grid gap-3">
        {question.answers.map(
          (answer, index) => {
            const selected =
              selectedAnswerIds.includes(
                answer.id
              );

            let classes =
              "border-slate-200 bg-white text-slate-900 hover:border-violet-300 hover:bg-violet-50";

            if (
              result === "wrong" &&
              selected
            ) {
              classes =
                "border-red-300 bg-red-50 text-red-950";
            } else if (
              result === "correct" &&
              selected
            ) {
              classes =
                "border-emerald-300 bg-emerald-50 text-emerald-950";
            } else if (selected) {
              classes =
                "border-violet-400 bg-violet-50 text-violet-950 ring-2 ring-violet-100";
            }

            return (
              <button
                key={answer.id}
                type="button"
                disabled={
                  interactionLocked ||
                  result !== "idle"
                }
                onClick={() =>
                  toggleAnswer(answer.id)
                }
                className={`rounded-2xl border px-5 py-4 text-left font-bold transition disabled:cursor-not-allowed disabled:opacity-60 ${classes}`}
              >
                <span className="flex items-center gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-current/30 text-xs">
                    {selected
                      ? result === "wrong"
                        ? "×"
                        : "✓"
                      : String.fromCharCode(
                          65 + index
                        )}
                  </span>

                  <span>
                    {answer.text}
                  </span>
                </span>
              </button>
            );
          }
        )}
      </div>

      {result === "wrong" && (
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5">
          <p className="font-black text-red-900">
            Väärä vastaus.
          </p>

          <p className="mt-2 leading-7 text-red-900">
            Oikeaa vastausta ei näytetä.
            {xpLost
              ? " Menetit 5 XP:tä."
              : ""}
          </p>

          <div className="mt-4 rounded-xl border border-red-200 bg-white/70 p-4">
            <div className="flex justify-between gap-4">
              <span className="text-sm font-bold text-red-900">
                Uusi yritys
              </span>

              <span className="text-lg font-black text-red-700">
                {cooldown > 0
                  ? `${cooldown} s`
                  : "Valmis"}
              </span>
            </div>

            <div className="mt-2 h-2 overflow-hidden rounded-full bg-red-100">
              <div
                className="h-full rounded-full bg-red-500 transition-[width] duration-1000"
                style={{
                  width: `${Math.max(
                    0,
                    Math.min(
                      100,
                      (cooldown / 15) * 100
                    )
                  )}%`,
                }}
              />
            </div>
          </div>
        </div>
      )}

      {result === "correct" && (
        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <p className="font-black text-emerald-900">
            Oikein – solmu suoritettu!
            {rewarded
              ? ` +${xpReward} XP`
              : ""}
          </p>

          <p className="mt-2 leading-7 text-emerald-900">
            {question.explanation}
          </p>
        </div>
      )}

      {error && (
        <p
          role="alert"
          className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
        >
          {error}
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        {result === "idle" && (
          <button
            type="button"
            onClick={() =>
              void checkAnswer()
            }
            disabled={
              !cooldownLoaded ||
              cooldown > 0 ||
              selectedAnswerIds.length === 0 ||
              saving
            }
            className="rounded-full bg-slate-950 px-6 py-3 font-black text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {!cooldownLoaded
              ? "Tarkistetaan jäähyä…"
              : cooldown > 0
                ? `Jäähy ${cooldown} s`
                : saving
                  ? "Tarkistetaan…"
                  : "Tarkista vastaus"}
          </button>
        )}

        {result === "wrong" && (
          <button
            type="button"
            onClick={retry}
            disabled={
              !cooldownLoaded ||
              cooldown > 0 ||
              saving
            }
            className="rounded-full bg-violet-600 px-6 py-3 font-black text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            {cooldown > 0
              ? `Yritä uudelleen ${cooldown} s`
              : "Yritä uudelleen"}
          </button>
        )}

        {result === "correct" && (
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-emerald-600 px-6 py-3 font-black text-white"
          >
            Jatka polulle
          </button>
        )}
      </div>
    </div>
  );
}
