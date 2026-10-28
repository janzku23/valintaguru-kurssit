"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import type { GuruPublicQuestion, ValintakoeGCategoryId } from "@/data/gurupath/types";
import { getGuruValintakoeGCategoryInfo } from "@/data/gurupath/valintakoeGCategoryNames";

import type {
  CourseId,
} from "@/data/courses";

type RewardSource =
  | "path-node"
  | "vault";

type Props = {
  courseId: CourseId;
  nodeId: string;
  levelNumber: number;
  question: GuruPublicQuestion;
  valintakoeGCategoryId?: ValintakoeGCategoryId;
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
  question: GuruPublicQuestion
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

/** Näkyy vain vastauksen tarkistamisen JÄLKEEN ja vain merkityillä kysymyksillä. */
function ValintakoeGCategoryFeedback({
  categoryId,
}: {
  categoryId?: ValintakoeGCategoryId;
}) {
  const categoryInfo = getGuruValintakoeGCategoryInfo(categoryId);
  if (!categoryInfo) return null;

  return (
    <aside className="mt-4 rounded-2xl border border-violet-200 bg-violet-50 p-4 text-left sm:p-5" aria-label="Valintakoe G:n kysymyskategoria ja opiskeluvinkki">
      <p className="text-[11px] font-black uppercase tracking-[0.12em] text-violet-700">
        Valintakoe G · kysymyskategoria {categoryId}/20
      </p>
      <p className="mt-1 text-base font-black leading-6 text-slate-900">
        {categoryInfo.name}
      </p>
      <div className="mt-3 border-t border-violet-200/70 pt-3">
        <p className="text-xs font-black uppercase tracking-[0.1em] text-violet-700">
          Opiskeluvinkki
        </p>
        <p className="mt-1 text-sm font-medium leading-6 text-slate-700">
          {categoryInfo.studentTip}
        </p>
      </div>
    </aside>
  );
}

export default function GuruPathChallenge({
  courseId,
  nodeId,
  levelNumber,
  question,
  valintakoeGCategoryId,
  source,
  pointReward,
  hasNextLevel,
  onCompleted,
  onAdvance,
  onClose,
}: Props) {
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

  const [verifiedExplanation, setVerifiedExplanation] = useState("");
  const [verifiedPoints, setVerifiedPoints] = useState(0);

  // Väärän vastauksen jälkeen uutta yritystä ei sallita samassa näkymässä.
  const [returnToMapAfterCooldown, setReturnToMapAfterCooldown] = useState(false);
  const hasReturnedToMap = useRef(false);
  const cooldownDeadline = useRef(0);

  const resetReadingAttempt = useCallback(() => {
    if (!isReadingTask) return;
    // Uudella yrityksellä aineisto näytetään jälleen alusta lähtien.
    window.sessionStorage.removeItem(`gurupeli:reading-consumed:${nodeId}`);
    window.sessionStorage.removeItem(`gurupeli:reading-deadline:${nodeId}`);
  }, [isReadingTask, nodeId]);

  function updateCooldown(seconds: number) {
    const duration = Math.max(0, Math.ceil(Number(seconds) || 0));
    cooldownDeadline.current = Date.now() + duration * 1000;
    setCooldown(duration);
  }

  function startReturnToMap(seconds: number) {
    resetReadingAttempt();
    updateCooldown(seconds);
    setReturnToMapAfterCooldown(true);
  }

  // Vahvistus tarvitaan vain, jos lukuaika on vielä kesken.
  const [confirmEarlyContinue, setConfirmEarlyContinue] = useState(false);

  function continueToQuestionEarly() {
    if (!isReadingTask || phase !== "reading" || !readingReady) return;

    // Sama merkintä kuin ajastimen päättyessä: lukutekstiin ei voi palata
    // sulkemalla tehtävää tai päivittämällä sivua saman istunnon aikana.
    window.sessionStorage.setItem(`gurupeli:reading-consumed:${nodeId}`, "1");
    window.sessionStorage.removeItem(`gurupeli:reading-deadline:${nodeId}`);

    setConfirmEarlyContinue(false);
    setReadingSeconds(0);
    setPhase("answering");
  }

  /**
   * LUETUN YMMÄRTÄMINEN
   *
   * Lukuaika jatkuu, vaikka käyttäjä sulkisi tehtävän
   * tai päivittäisi sivun saman selainistunnon aikana.
   */
  useEffect(() => {
    if (
      !isReadingTask ||
      !question.reading ||
      phase !== "reading" ||
      returnToMapAfterCooldown
    ) {
      setReadingReady(
        true
      );
      return;
    }

    const deadlineKey =
      `gurupeli:reading-deadline:${nodeId}`;

    const consumedKey =
      `gurupeli:reading-consumed:${nodeId}`;

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
    nodeId,
    isReadingTask,
    question.reading,
    phase,
    returnToMapAfterCooldown,
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
              courseId
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
          const remaining = Math.max(0, Number(data.cooldownSeconds ?? 0));
          updateCooldown(remaining);
          if (remaining > 0) {
            // Myös sivun lataaminen kesken jäähyn palauttaa kartalle.
            resetReadingAttempt();
            setReturnToMapAfterCooldown(true);
          }
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
    courseId,
    nodeId,
    resetReadingAttempt,
  ]);

  // Kellonaikaan perustuva jäähy toimii myös, jos välilehti on taustalla.
  const cooldownRunning = cooldown > 0;
  useEffect(() => {
    if (!cooldownRunning) return;

    const timer = window.setInterval(() => {
      setCooldown(Math.max(0, Math.ceil((cooldownDeadline.current - Date.now()) / 1000)));
    }, 250);

    return () => window.clearInterval(timer);
  }, [cooldownRunning]);

  useEffect(() => {
    if (!returnToMapAfterCooldown || !cooldownLoaded || cooldown > 0) return;
    if (hasReturnedToMap.current) return;
    hasReturnedToMap.current = true;
    resetReadingAttempt();
    onClose();
  }, [returnToMapAfterCooldown, cooldownLoaded, cooldown, resetReadingAttempt, onClose]);

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
      question.selectionMode === "single"
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

  async function checkAnswer() {
    if (
      phase !== "answering" || !cooldownLoaded || cooldown > 0 ||
      selectedAnswerIds.length === 0 || saving || result !== "idle"
    ) return;

    setSaving(true);
    setError(null);
    setPenaltyPoints(0);
    try {
      const response = await fetch("/api/gurupath/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId, nodeId, selectedAnswerIds }),
      });
      const data = await response.json();
      if (!response.ok) {
        if (response.status === 429 && data.cooldownSeconds) {
          startReturnToMap(Number(data.cooldownSeconds));
          return;
        }
        throw new Error(data?.error ?? "Vastauksen tarkistaminen epäonnistui.");
      }
      if (!data.correct) {
        setResult("wrong");
        startReturnToMap(Number(data.cooldownSeconds ?? 15));
        setPenaltyPoints(Number(data.penaltyPoints ?? 0));
        return;
      }
      setVerifiedExplanation(String(data.explanation ?? ""));
      setVerifiedPoints(Number(data.pointsAwarded ?? 0));
      setResult("correct");
      setRewarded(Boolean(data.awarded));
      onCompleted(`gurupeli:${question.id}`, source);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Vastauksen käsittely epäonnistui.");
    } finally {
      setSaving(false);
    }
  }

  // Näytetään vain jäähy ja paluu kartalle; vastausvaihtoehtoja ei
  // voi yrittää uudelleen saman avauskerran aikana.
  if (returnToMapAfterCooldown && cooldownLoaded) {
    return (
      <div className="mx-auto w-full max-w-4xl">
        <button
          type="button"
          onClick={onClose}
          className="mb-4 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-black text-slate-600 shadow-sm transition hover:border-violet-300 hover:text-violet-700"
        >
          ← Kartalle
        </button>
        <section className="rounded-[2rem] border border-amber-200 bg-white p-6 shadow-xl shadow-amber-100/50 sm:p-10">
          <div className="mx-auto max-w-xl text-center">
            <div className="mb-5 text-4xl" aria-hidden="true">⏳</div>
            <h1 className="text-2xl font-black text-slate-950 sm:text-3xl">
              {result === "wrong" ? "Väärä vastaus" : "Jäähy on käynnissä"}
            </h1>
            {result === "wrong" && (
              <p className="mt-3 text-sm font-semibold leading-7 text-red-800">
                Oikeaa vastausta ei paljasteta.
                {penaltyPoints > 0 ? ` Menetit ${penaltyPoints} pistettä.` : ""}
              </p>
            )}
            {result === "wrong" && (
              <ValintakoeGCategoryFeedback categoryId={valintakoeGCategoryId} />
            )}
            <p className="mt-4 text-base leading-7 text-slate-600">
              {isReadingTask
                ? "Seuraavalla yrityksellä luet aineiston uudelleen ennen kysymystä."
                : "Voit yrittää tehtävää uudelleen kartalta jäähyn päätyttyä."}
            </p>
            <div className="mx-auto mt-7 flex w-fit items-center gap-3 rounded-2xl bg-amber-50 px-6 py-4 text-amber-900">
              <span className="text-3xl font-black tabular-nums" aria-live="polite">{cooldown} s</span>
              <span className="text-sm font-bold">jäähyä jäljellä</span>
            </div>
            <p className="mt-5 text-sm font-semibold text-slate-500">
              Siirryt automaattisesti kartalle, kun jäähy päättyy.
            </p>
          </div>
        </section>
      </div>
    );
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
              Lue teksti huolellisesti. Kysymys avautuu automaattisesti ajan päättyessä, mutta voit halutessasi jatkaa jo aiemmin.
            </div>

            <article className="whitespace-pre-line rounded-[1.5rem] bg-slate-50 p-5 text-base leading-8 text-slate-800 sm:p-8 sm:text-lg">
              {
                question
                  .reading
                  .text
              }
            </article>

            <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-violet-100 bg-violet-50/60 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <p className="text-sm font-semibold leading-6 text-slate-700">
                Luitko aineiston jo? Voit siirtyä kysymykseen odottamatta ajan loppumista.
              </p>
              <button
                type="button"
                onClick={() => setConfirmEarlyContinue(true)}
                className="min-h-12 shrink-0 rounded-xl bg-violet-700 px-6 py-3 text-sm font-black text-white transition hover:bg-violet-800 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
              >
                Jatka kysymykseen →
              </button>
            </div>
          </div>
        </section>

        {confirmEarlyContinue && (
          <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/60 p-4" role="presentation">
            <div
              role="alertdialog"
              aria-modal="true"
              aria-labelledby="guru-reading-confirm-title"
              aria-describedby="guru-reading-confirm-description"
              className="w-full max-w-md rounded-[1.75rem] border border-violet-100 bg-white p-6 shadow-2xl sm:p-8"
            >
              <h2 id="guru-reading-confirm-title" className="text-xl font-black text-slate-950 sm:text-2xl">
                Oletko valmis siirtymään kysymykseen?
              </h2>
              <p id="guru-reading-confirm-description" className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                Olethan lukenut aineiston huolellisesti? Kun jatkat tehtävään, lukuteksti poistuu näkyvistä etkä voi enää palata siihen.
              </p>
              <p className="mt-3 text-xs font-semibold text-violet-700">
                Lukuaika jatkuu myös vahvistuksen aikana.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setConfirmEarlyContinue(false)}
                  className="min-h-12 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
                >
                  Jatka lukemista
                </button>
                <button
                  type="button"
                  onClick={continueToQuestionEarly}
                  className="min-h-12 rounded-xl bg-violet-700 px-4 py-3 text-sm font-black text-white transition hover:bg-violet-800 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
                >
                  Kyllä, siirry kysymykseen
                </button>
              </div>
            </div>
          </div>
        )}
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
                  ? ` · +${verifiedPoints} pistettä`
                  : ""}
              </p>

              <p className="mt-2 leading-7 text-emerald-900">
                {
                  verifiedExplanation
                }
              </p>
            </div>
          )}

          {result === "correct" && (
            <ValintakoeGCategoryFeedback categoryId={valintakoeGCategoryId} />
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
