"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  createClient,
} from "@/utils/supabase/client";

import {
  getAuthenticatedUser,
} from "@/lib/getAuthenticatedUser";

import {
  awardGuruPath,
} from "@/lib/gurupath/awardGuruPath";

import type {
  GuruGameId,
  GuruGameQuestion,
} from "@/data/gurupath";

type RewardSource =
  | "path-node"
  | "vault";

type Props = {
  gameId: GuruGameId;
  nodeId: string;
  levelNumber: number;
  question: GuruGameQuestion;
  source: RewardSource;
  pointReward: number;
  hasNextLevel: boolean;

  onCompleted: (
    sourceId: string,
    source: RewardSource
  ) => void;

  onAdvance: () => void;
  onClose: () => void;
};

function typeLabel(
  question: GuruGameQuestion
) {
  if (
    question.type ===
    "true-false"
  ) {
    return "Oikein / väärin";
  }

  if (
    question.type ===
    "reading-comprehension"
  ) {
    if (
      question.reading
        ?.answerMode ===
      "statement"
    ) {
      return "Luetun ymmärtäminen · väittämä";
    }

    if (
      question.reading
        ?.answerMode ===
      "true-false"
    ) {
      return "Luetun ymmärtäminen · oikein/väärin";
    }

    return "Luetun ymmärtäminen · monivalinta";
  }

  return "Monivalinta";
}

export default function GuruPathChallenge({
  gameId,
  nodeId,
  levelNumber,
  question,
  source,
  pointReward,
  hasNextLevel,
  onCompleted,
  onAdvance,
  onClose,
}: Props) {
  const supabase =
    useMemo(
      () => createClient(),
      []
    );

  const isReadingTask =
    question.type ===
      "reading-comprehension" &&
    Boolean(
      question.reading
    );

  const [
    readingReady,
    setReadingReady,
  ] = useState(
    !isReadingTask
  );

  const [
    phase,
    setPhase,
  ] = useState<
    "reading" | "answering"
  >(
    isReadingTask
      ? "reading"
      : "answering"
  );

  const [
    readingSeconds,
    setReadingSeconds,
  ] = useState(
    question.reading
      ?.seconds ?? 0
  );

  const [
    selectedAnswerIds,
    setSelectedAnswerIds,
  ] = useState<string[]>(
    []
  );

  const [
    result,
    setResult,
  ] = useState<
    "idle" |
    "wrong" |
    "correct"
  >("idle");

  const [
    saving,
    setSaving,
  ] = useState(false);

  const [
    error,
    setError,
  ] = useState<
    string | null
  >(null);

  const [
    rewarded,
    setRewarded,
  ] = useState(false);

  const [
    cooldown,
    setCooldown,
  ] = useState(0);

  const [
    cooldownLoaded,
    setCooldownLoaded,
  ] = useState(false);

  const [
    penaltyPoints,
    setPenaltyPoints,
  ] = useState(0);

  const isCorrect =
    useMemo(() => {
      const selected = [
        ...selectedAnswerIds,
      ].sort();

      const correct = [
        ...question.correctAnswerIds,
      ].sort();

      return (
        selected.length ===
          correct.length &&
        selected.every(
          (
            id,
            index
          ) =>
            id ===
            correct[index]
        )
      );
    }, [
      question.correctAnswerIds,
      selectedAnswerIds,
    ]);

  /**
   * LUETUN YMMÄRTÄMINEN
   *
   * Lukuaika jatkuu, vaikka käyttäjä sulkisi tehtävän
   * tai päivittäisi sivun saman selainistunnon aikana.
   */
  useEffect(() => {
    if (
      !isReadingTask ||
      !question.reading
    ) {
      setReadingReady(
        true
      );
      return;
    }

    const deadlineKey =
      `gurupeli:reading-deadline:${gameId}:${nodeId}`;

    const consumedKey =
      `gurupeli:reading-consumed:${gameId}:${nodeId}`;

    const consumed =
      window.sessionStorage.getItem(
        consumedKey
      ) === "1";

    if (consumed) {
      setReadingSeconds(
        0
      );
      setPhase(
        "answering"
      );
      setReadingReady(
        true
      );
      return;
    }

    const storedDeadline =
      Number(
        window.sessionStorage.getItem(
          deadlineKey
        ) ?? "0"
      );

    const now =
      Date.now();

    const deadline =
      storedDeadline > now
        ? storedDeadline
        : now +
          question.reading
            .seconds *
            1000;

    if (
      storedDeadline <= now
    ) {
      window.sessionStorage.setItem(
        deadlineKey,
        String(deadline)
      );
    }

    const syncTimer =
      () => {
        const remaining =
          Math.max(
            0,
            Math.ceil(
              (deadline -
                Date.now()) /
                1000
            )
          );

        setReadingSeconds(
          remaining
        );

        if (
          remaining <= 0
        ) {
          window.sessionStorage.setItem(
            consumedKey,
            "1"
          );

          window.sessionStorage.removeItem(
            deadlineKey
          );

          setPhase(
            "answering"
          );
        }
      };

    syncTimer();
    setReadingReady(
      true
    );

    const timer =
      window.setInterval(
        syncTimer,
        250
      );

    return () => {
      window.clearInterval(
        timer
      );
    };
  }, [
    gameId,
    nodeId,
    isReadingTask,
    question.reading,
  ]);

  /**
   * Nykyinen server-side väärän vastauksen jäähy säilyy.
   */
  useEffect(() => {
    let cancelled =
      false;

    async function loadCooldown() {
      setCooldownLoaded(
        false
      );
      setError(null);

      try {
        const response =
          await fetch(
            `/api/gurupath/wrong-answer?courseId=${encodeURIComponent(
              gameId
            )}&nodeId=${encodeURIComponent(
              nodeId
            )}`,
            {
              cache:
                "no-store",
            }
          );

        const data =
          await response.json();

        if (
          !response.ok
        ) {
          throw new Error(
            data?.error ??
              "Jäähyn tarkistus epäonnistui."
          );
        }

        if (!cancelled) {
          setCooldown(
            Math.max(
              0,
              Number(
                data.cooldownSeconds ??
                  0
              )
            )
          );
        }
      } catch (caught) {
        if (!cancelled) {
          setError(
            caught instanceof
              Error
              ? caught.message
              : "Jäähyn tarkistus epäonnistui."
          );
        }
      } finally {
        if (!cancelled) {
          setCooldownLoaded(
            true
          );
        }
      }
    }

    void loadCooldown();

    return () => {
      cancelled = true;
    };
  }, [
    gameId,
    nodeId,
  ]);

  useEffect(() => {
    if (
      cooldown <= 0
    ) {
      return;
    }

    const timer =
      window.setInterval(
        () => {
          setCooldown(
            (current) =>
              Math.max(
                0,
                current -
                  1
              )
          );
        },
        1000
      );

    return () => {
      window.clearInterval(
        timer
      );
    };
  }, [cooldown]);

  function toggleAnswer(
    answerId: string
  ) {
    if (
      phase !==
        "answering" ||
      !cooldownLoaded ||
      cooldown > 0 ||
      result !== "idle" ||
      saving
    ) {
      return;
    }

    if (
      question
        .correctAnswerIds
        .length === 1
    ) {
      setSelectedAnswerIds(
        [answerId]
      );
      return;
    }

    setSelectedAnswerIds(
      (current) =>
        current.includes(
          answerId
        )
          ? current.filter(
              (id) =>
                id !==
                answerId
            )
          : [
              ...current,
              answerId,
            ]
    );
  }

  async function saveCorrectAttempt() {
    const {
      user,
      error: authError,
    } =
      await getAuthenticatedUser();

    if (
      authError ||
      !user
    ) {
      throw new Error(
        authError?.message ??
          "Kirjaudu sisään, jotta vastaus voidaan tallentaa."
      );
    }

    const {
      error:
        attemptError,
    } =
      await supabase
        .from(
          "student_progress_attempts"
        )
        .insert({
          user_id:
            user.id,

          /**
           * Canonical game id:
           * kaikki Oikis-paketit tallentavat samaan "oikis"-peliin.
           */
          course_id:
            gameId,

          question_id:
            question.id,

          question:
            question.prompt,

          area:
            "GuruPeli",

          selected_answer_ids:
            selectedAnswerIds,

          correct_answer_ids:
            question.correctAnswerIds,

          is_correct:
            true,

          answered_at:
            new Date().toISOString(),
        });

    if (attemptError) {
      throw new Error(
        `Vastauksen tallennus epäonnistui: ${attemptError.message}`
      );
    }
  }

  async function applyWrongPenalty() {
    const response =
      await fetch(
        "/api/gurupath/wrong-answer",
        {
          method:
            "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body:
            JSON.stringify({
              courseId:
                gameId,

              nodeId,
            }),
        }
      );

    const data =
      await response.json();

    if (!response.ok) {
      throw new Error(
        data?.error ??
          "Väärän vastauksen käsittely epäonnistui."
      );
    }

    setCooldown(
      Math.max(
        0,
        Number(
          data.cooldownSeconds ??
            15
        )
      )
    );

    setPenaltyPoints(
      Boolean(
        data.applied
      )
        ? Number(
            data.penaltyPoints ??
              data.xpLost ??
              5
          )
        : 0
    );
  }

  async function checkAnswer() {
    if (
      phase !==
        "answering" ||
      !cooldownLoaded ||
      cooldown > 0 ||
      selectedAnswerIds.length ===
        0 ||
      saving ||
      result !== "idle"
    ) {
      return;
    }

    setSaving(true);
    setError(null);
    setPenaltyPoints(0);

    try {
      const cooldownResponse =
        await fetch(
          `/api/gurupath/wrong-answer?courseId=${encodeURIComponent(
            gameId
          )}&nodeId=${encodeURIComponent(
            nodeId
          )}`,
          {
            cache:
              "no-store",
          }
        );

      const cooldownData =
        await cooldownResponse.json();

      if (
        !cooldownResponse.ok
      ) {
        throw new Error(
          cooldownData?.error ??
            "Jäähyn tarkistus epäonnistui."
        );
      }

      const remaining =
        Math.max(
          0,
          Number(
            cooldownData.cooldownSeconds ??
              0
          )
        );

      if (
        remaining > 0
      ) {
        setCooldown(
          remaining
        );
        return;
      }

      if (!isCorrect) {
        setResult(
          "wrong"
        );

        await applyWrongPenalty();
        return;
      }

      await saveCorrectAttempt();

      const sourceId =
        `gurupath:${nodeId}:${question.id}`;

      /**
       * Backendin nykyiset xp-kentät säilyvät sisäisesti.
       * UI:ssa nämä ovat pisteitä.
       */
      const award =
        await awardGuruPath({
          courseId:
            gameId,
          source,
          sourceId,
          xp:
            pointReward,
          score:
            pointReward,
        });

      setResult(
        "correct"
      );

      setRewarded(
        Boolean(
          award.awarded
        )
      );

      onCompleted(
        sourceId,
        source
      );
    } catch (caught) {
      setError(
        caught instanceof
          Error
          ? caught.message
          : "Vastauksen käsittely epäonnistui."
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

    setSelectedAnswerIds(
      []
    );

    setResult(
      "idle"
    );

    setError(null);
    setPenaltyPoints(0);
  }

  if (
    isReadingTask &&
    !readingReady
  ) {
    return (
      <div className="mx-auto grid min-h-[460px] w-full max-w-4xl place-items-center rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <div className="text-center">
          <div className="mx-auto h-11 w-11 animate-spin rounded-full border-4 border-violet-200 border-t-violet-600" />
          <p className="mt-4 font-black text-slate-600">
            Valmistellaan lukutehtävää…
          </p>
        </div>
      </div>
    );
  }

  if (
    phase ===
      "reading" &&
    question.reading
  ) {
    const total =
      question.reading
        .seconds;

    const progress =
      total > 0
        ? Math.max(
            0,
            Math.min(
              100,
              (readingSeconds /
                total) *
                100
            )
          )
        : 0;

    return (
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-4">
          <button
            type="button"
            onClick={
              onClose
            }
            className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-black text-slate-600 shadow-sm transition hover:border-violet-300 hover:text-violet-700"
          >
            ← Kartalle
          </button>
        </div>

        <section className="overflow-hidden rounded-[2rem] border border-violet-100 bg-white shadow-xl shadow-violet-100/50">
          <div className="border-b border-violet-100 bg-gradient-to-r from-violet-50 via-white to-indigo-50 p-5 sm:p-8">
            <div className="flex items-center justify-between gap-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-violet-600">
                  Taso{" "}
                  {
                    levelNumber
                  }
                </p>

                <h1 className="mt-1 text-2xl font-black text-slate-950 sm:text-3xl">
                  Luetun ymmärtäminen
                </h1>
              </div>

              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-slate-950 text-lg font-black text-white shadow-lg">
                {
                  readingSeconds
                }
                s
              </div>
            </div>

            <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-violet-100">
              <div
                className="h-full rounded-full bg-violet-600 transition-[width] duration-500"
                style={{
                  width:
                    `${progress}%`,
                }}
              />
            </div>
          </div>

          <div className="p-5 sm:p-8">
            <div className="mb-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-bold leading-6 text-amber-950">
              Lue teksti huolellisesti. Kun aika loppuu, teksti katoaa ja kysymys avautuu.
            </div>

            <article className="rounded-[1.5rem] bg-slate-50 p-5 text-base leading-8 text-slate-800 sm:p-8 sm:text-lg">
              {
                question
                  .reading
                  .text
              }
            </article>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="mb-4 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-black text-slate-600 shadow-sm transition hover:border-violet-300 hover:text-violet-700"
        >
          ← Kartalle
        </button>

        <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-black text-violet-700">
          Taso{" "}
          {
            levelNumber
          }
        </span>
      </div>

      <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
        <header className="border-b border-slate-100 p-5 sm:p-8">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-violet-100 px-3 py-1.5 text-xs font-black text-violet-700">
              {
                typeLabel(
                  question
                )
              }
            </span>

            <span className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-black text-amber-800">
              +
              {
                pointReward
              }{" "}
              p
            </span>
          </div>

          <h1 className="mt-5 max-w-3xl text-2xl font-black leading-snug text-slate-950 sm:text-3xl">
            {
              question.prompt
            }
          </h1>
        </header>

        <div className="p-5 sm:p-8">
          {!cooldownLoaded && (
            <div className="mb-5 rounded-2xl bg-slate-50 p-4 text-sm font-bold text-slate-500">
              Tarkistetaan tehtävän tila…
            </div>
          )}

          {cooldownLoaded &&
            cooldown > 0 &&
            result ===
              "idle" && (
              <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-black text-amber-950">
                      Uusi yritys avautuu pian
                    </p>

                    <p className="mt-1 text-sm text-amber-900">
                      Väärän vastauksen jälkeen on lyhyt jäähy.
                    </p>
                  </div>

                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-lg font-black text-amber-700 shadow-sm">
                    {
                      cooldown
                    }
                    s
                  </div>
                </div>
              </div>
            )}

          <div className="grid gap-4">
            {question.answers.map(
              (
                answer,
                index
              ) => {
                const selected =
                  selectedAnswerIds.includes(
                    answer.id
                  );

                let classes =
                  "border-slate-200 bg-white hover:border-violet-400 hover:bg-violet-50/60 hover:shadow-md";

                if (
                  selected &&
                  result ===
                    "idle"
                ) {
                  classes =
                    "border-violet-500 bg-violet-50 ring-4 ring-violet-100";
                }

                if (
                  selected &&
                  result ===
                    "wrong"
                ) {
                  classes =
                    "border-red-300 bg-red-50";
                }

                if (
                  selected &&
                  result ===
                    "correct"
                ) {
                  classes =
                    "border-emerald-300 bg-emerald-50";
                }

                return (
                  <button
                    key={
                      answer.id
                    }
                    type="button"
                    disabled={
                      !cooldownLoaded ||
                      cooldown >
                        0 ||
                      saving ||
                      result !==
                        "idle"
                    }
                    onClick={() =>
                      toggleAnswer(
                        answer.id
                      )
                    }
                    className={`group min-h-[82px] w-full rounded-[1.35rem] border-2 p-4 text-left transition sm:min-h-[92px] sm:p-5 ${classes}`}
                  >
                    <span className="flex items-center gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-slate-200 bg-slate-50 text-sm font-black text-slate-700 transition group-hover:border-violet-300 group-hover:bg-white group-hover:text-violet-700">
                        {selected
                          ? "✓"
                          : String.fromCharCode(
                              65 +
                                index
                            )}
                      </span>

                      <span className="text-base font-bold leading-6 text-slate-900 sm:text-lg">
                        {
                          answer.text
                        }
                      </span>
                    </span>
                  </button>
                );
              }
            )}
          </div>

          {result ===
            "wrong" && (
            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="text-lg font-black text-red-950">
                Väärin
              </p>

              <p className="mt-2 leading-7 text-red-900">
                Oikeaa vastausta ei paljasteta.
                {penaltyPoints >
                0
                  ? ` Menetit ${penaltyPoints} pistettä.`
                  : ""}
              </p>
            </div>
          )}

          {result ===
            "correct" && (
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-lg font-black text-emerald-950">
                Oikein
                {rewarded
                  ? ` · +${pointReward} pistettä`
                  : ""}
              </p>

              <p className="mt-2 leading-7 text-emerald-900">
                {
                  question.explanation
                }
              </p>
            </div>
          )}

          {error && (
            <p
              role="alert"
              className="mt-5 rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-700"
            >
              {error}
            </p>
          )}

          <div className="mt-7">
            {result ===
              "idle" && (
              <button
                type="button"
                onClick={() =>
                  void checkAnswer()
                }
                disabled={
                  !cooldownLoaded ||
                  cooldown >
                    0 ||
                  selectedAnswerIds.length ===
                    0 ||
                  saving
                }
                className="min-h-[60px] w-full rounded-2xl bg-slate-950 px-6 py-4 text-base font-black text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-40 sm:text-lg"
              >
                {saving
                  ? "Tarkistetaan…"
                  : cooldown >
                      0
                    ? `Jäähy ${cooldown} s`
                    : "Vastaa"}
              </button>
            )}

            {result ===
              "wrong" && (
              <button
                type="button"
                onClick={retry}
                disabled={
                  cooldown >
                  0
                }
                className="min-h-[60px] w-full rounded-2xl bg-violet-600 px-6 py-4 text-base font-black text-white transition hover:bg-violet-700 disabled:opacity-40"
              >
                {cooldown >
                0
                  ? `Yritä uudelleen ${cooldown} s`
                  : "Yritä uudelleen"}
              </button>
            )}

            {result ===
              "correct" && (
              <button
                type="button"
                onClick={
                  hasNextLevel
                    ? onAdvance
                    : onClose
                }
                className="min-h-[60px] w-full rounded-2xl bg-emerald-600 px-6 py-4 text-base font-black text-white transition hover:bg-emerald-700"
              >
                {hasNextLevel
                  ? "Seuraava taso →"
                  : "Takaisin kartalle"}
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
