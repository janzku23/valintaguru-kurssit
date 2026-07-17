"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";
import type { Flashcard } from "../data/courseContent";
import type { CourseId } from "../data/courses";

type Props = {
  courseId: CourseId;
  flashcards: Flashcard[];
};

type RoundMode = "all" | "practice";

type FlashcardProgressRow = {
  flashcard_id: string;
  status: "known" | "needs_practice";
};

export default function FlashcardView({
  courseId,
  flashcards,
}: Props) {
  const router = useRouter();

  const supabase = useMemo(() => createClient(), []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownIds, setKnownIds] = useState<string[]>([]);
  const [needsPracticeIds, setNeedsPracticeIds] = useState<string[]>([]);
  const [roundMode, setRoundMode] = useState<RoundMode>("all");
  const [hasLoadedSavedState, setHasLoadedSavedState] = useState(false);
  const [isRoundFinished, setIsRoundFinished] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function loadFlashcardProgress() {
    setHasLoadedSavedState(false);
    setErrorMessage(null);

    const {
      user,
      error: authError,
    } = await getAuthenticatedUser();

    if (authError || !user) {
      setUserId(null);
      setErrorMessage(
        authError?.message ??
          "Kirjautumista ei löytynyt. Kirjaudu sisään, jotta flashcard-edistyminen voidaan hakea ja tallentaa."
      );
      setHasLoadedSavedState(true);
      return;
    }

    setUserId(user.id);

    const validFlashcardIds = flashcards.map((card) => card.id);

    const { data, error } = await supabase
      .from("student_flashcard_progress")
      .select("flashcard_id, status")
      .eq("user_id", user.id)
      .eq("course_id", courseId);

    if (error) {
      console.error("Flashcard progress fetch failed:", error);

      setErrorMessage(
        `Flashcard-edistymisen haku Supabasesta epäonnistui: ${error.message}`
      );

      setHasLoadedSavedState(true);
      return;
    }

    const rows = (data ?? []) as FlashcardProgressRow[];

    const savedKnownIds = rows
      .filter((row) => row.status === "known")
      .map((row) => row.flashcard_id)
      .filter((id) => validFlashcardIds.includes(id));

    const savedNeedsPracticeIds = rows
      .filter((row) => row.status === "needs_practice")
      .map((row) => row.flashcard_id)
      .filter((id) => validFlashcardIds.includes(id));

    setKnownIds(savedKnownIds);
    setNeedsPracticeIds(savedNeedsPracticeIds);

    if (savedNeedsPracticeIds.length > 0) {
      setRoundMode("practice");
    } else {
      setRoundMode("all");
    }

    setCurrentIndex(0);
    setIsFlipped(false);
    setIsRoundFinished(false);
    setHasLoadedSavedState(true);
  }

  useEffect(() => {
    void loadFlashcardProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId]);

  const practiceFlashcards = useMemo(() => {
    return flashcards.filter((card) =>
      needsPracticeIds.includes(card.id)
    );
  }, [flashcards, needsPracticeIds]);

  const visibleFlashcards = useMemo(() => {
    if (
      roundMode === "practice" &&
      practiceFlashcards.length > 0
    ) {
      return practiceFlashcards;
    }

    return flashcards;
  }, [flashcards, practiceFlashcards, roundMode]);

  const currentCard = visibleFlashcards[currentIndex];

  async function saveFlashcardStatus(
    flashcardId: string,
    status: "known" | "needs_practice"
  ) {
    setErrorMessage(null);

    const {
      user,
      error: authError,
    } = await getAuthenticatedUser();

    if (authError || !user) {
      setUserId(null);
      setErrorMessage(
        authError?.message ??
          "Kirjautumista ei löytynyt. Kirjaudu sisään, jotta flashcard voidaan tallentaa."
      );
      return false;
    }

    setUserId(user.id);
    setIsSaving(true);

    const { error } = await supabase
      .from("student_flashcard_progress")
      .upsert(
        {
          user_id: user.id,
          course_id: courseId,
          flashcard_id: flashcardId,
          status,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "user_id,course_id,flashcard_id",
        }
      );

    if (error) {
      console.error("Flashcard status save failed:", error);

      setErrorMessage(
        `Flashcard-tilan tallennus Supabaseen epäonnistui: ${error.message}`
      );

      setIsSaving(false);
      return false;
    }

    setIsSaving(false);
    return true;
  }

  function finishRound() {
    setIsFlipped(false);
    setIsRoundFinished(true);
  }

  function moveToNextCard() {
    setIsFlipped(false);

    if (currentIndex >= visibleFlashcards.length - 1) {
      finishRound();
      return;
    }

    setCurrentIndex((current) => current + 1);
  }

  async function markNeedsPractice() {
    if (!currentCard || isSaving) {
      return;
    }

    const saved = await saveFlashcardStatus(
      currentCard.id,
      "needs_practice"
    );

    if (!saved) {
      return;
    }

    setNeedsPracticeIds((current) =>
      current.includes(currentCard.id)
        ? current
        : [...current, currentCard.id]
    );

    setKnownIds((current) =>
      current.filter((id) => id !== currentCard.id)
    );

    moveToNextCard();
  }

  async function markKnown() {
    if (!currentCard || isSaving) {
      return;
    }

    const saved = await saveFlashcardStatus(
      currentCard.id,
      "known"
    );

    if (!saved) {
      return;
    }

    const nextNeedsPracticeIds = needsPracticeIds.filter(
      (id) => id !== currentCard.id
    );

    setKnownIds((current) =>
      current.includes(currentCard.id)
        ? current
        : [...current, currentCard.id]
    );

    setNeedsPracticeIds(nextNeedsPracticeIds);
    setIsFlipped(false);

    if (roundMode === "practice") {
      const nextPracticeFlashcards = flashcards.filter((card) =>
        nextNeedsPracticeIds.includes(card.id)
      );

      if (nextPracticeFlashcards.length === 0) {
        finishRound();
        return;
      }

      if (currentIndex >= nextPracticeFlashcards.length) {
        setCurrentIndex(nextPracticeFlashcards.length - 1);
      }

      return;
    }

    moveToNextCard();
  }

  function restartCurrentRound() {
    if (needsPracticeIds.length > 0) {
      setRoundMode("practice");
    } else {
      setRoundMode("all");
    }

    setCurrentIndex(0);
    setIsFlipped(false);
    setIsRoundFinished(false);
    setErrorMessage(null);
  }

  async function resetEverything() {
    setErrorMessage(null);

    const {
      user,
      error: authError,
    } = await getAuthenticatedUser();

    if (authError || !user) {
      setUserId(null);
      setErrorMessage(
        authError?.message ??
          "Kirjautumista ei löytynyt. Kirjaudu sisään, jotta flashcard-edistyminen voidaan nollata."
      );
      return;
    }

    const confirmed = window.confirm(
      "Haluatko varmasti nollata tämän kurssin flashcard-edistymisen?"
    );

    if (!confirmed) {
      return;
    }

    setIsSaving(true);

    const { error } = await supabase
      .from("student_flashcard_progress")
      .delete()
      .eq("user_id", user.id)
      .eq("course_id", courseId);

    if (error) {
      console.error("Flashcard progress reset failed:", error);

      setErrorMessage(
        `Flashcard-edistymisen nollaus epäonnistui: ${error.message}`
      );

      setIsSaving(false);
      return;
    }

    setKnownIds([]);
    setNeedsPracticeIds([]);
    setRoundMode("all");
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsRoundFinished(false);
    setIsSaving(false);
  }

  function goToLogin() {
    router.push(
      `/kirjaudu?next=/kurssi/${courseId}/flashcardit`
    );
  }

  if (!hasLoadedSavedState) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-extrabold text-slate-950">
          Ladataan flashcardeja
        </h2>

        <p className="mt-3 leading-8 text-slate-700">
          Haetaan käyttäjän flashcard-edistymistä Supabasesta.
        </p>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wide text-red-700">
          Tallennusvirhe
        </p>

        <h2 className="mt-2 text-2xl font-extrabold text-red-950">
          Flashcard-edistymistä ei voitu käsitellä
        </h2>

        <p className="mt-3 leading-8 text-red-950">
          {errorMessage}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => void loadFlashcardProgress()}
            className="rounded-full bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700"
          >
            Yritä uudelleen
          </button>

          {errorMessage.toLowerCase().includes("kirjaut") && (
            <button
              type="button"
              onClick={goToLogin}
              className="rounded-full border border-red-200 bg-white px-6 py-3 font-bold text-red-700 transition hover:bg-red-100"
            >
              Kirjaudu sisään
            </button>
          )}
        </div>
      </div>
    );
  }

  if (flashcards.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-extrabold text-slate-950">
          Ei flashcardeja
        </h2>

        <p className="mt-3 leading-8 text-slate-700">
          Tälle kurssille ei ole vielä lisätty flashcardeja.
        </p>
      </div>
    );
  }

  if (isRoundFinished) {
    return (
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
            Kierros valmis
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-slate-950">
            Hyvä, kaikki tämän kierroksen kortit on käyty läpi.
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-emerald-50 p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
                Osaan
              </p>

              <p className="mt-2 text-4xl font-extrabold text-emerald-800">
                {knownIds.length}
              </p>
            </div>

            <div className="rounded-3xl bg-orange-50 p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-orange-700">
                Kertaukseen jäi
              </p>

              <p className="mt-2 text-4xl font-extrabold text-orange-800">
                {needsPracticeIds.length}
              </p>
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-700">
            Flashcard-edistyminen on tallennettu Supabaseen.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={restartCurrentRound}
              className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              Aloita nykyinen kierros alusta
            </button>

            <button
              type="button"
              onClick={() => void resetEverything()}
              disabled={isSaving}
              className="rounded-full bg-red-50 px-6 py-3 font-bold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSaving ? "Nollataan..." : "Nollaa"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentCard) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-extrabold text-slate-950">
          Kortteja ei löytynyt
        </h2>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={restartCurrentRound}
            className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            Aloita nykyinen kierros alusta
          </button>

          <button
            type="button"
            onClick={() => void resetEverything()}
            disabled={isSaving}
            className="rounded-full bg-red-50 px-6 py-3 font-bold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSaving ? "Nollataan..." : "Nollaa"}
          </button>
        </div>
      </div>
    );
  }

  const isPracticeRound =
    roundMode === "practice" &&
    practiceFlashcards.length > 0;

  return (
    <div className="space-y-6">
      {isPracticeRound && (
        <div className="rounded-3xl border border-orange-200 bg-orange-50 p-5 shadow-sm">
          <p className="font-extrabold text-orange-900">
            Kertauskierros
          </p>

          <p className="mt-2 leading-7 text-orange-900">
            Näet nyt ne kortit, joihin olet aiemmin painanut
            Kertaa vielä.
          </p>
        </div>
      )}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
              Flashcardit
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-950">
              Kortti {currentIndex + 1} / {visibleFlashcards.length}
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 text-sm font-bold">
            <span className="rounded-full bg-emerald-50 px-4 py-2 text-emerald-700">
              Osaan {knownIds.length}
            </span>

            <span className="rounded-full bg-orange-50 px-4 py-2 text-orange-700">
              Kertaa {needsPracticeIds.length}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsFlipped((current) => !current)}
          className="mt-6 min-h-[280px] w-full rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 text-left shadow-inner transition hover:border-blue-200"
        >
          <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
            {isFlipped ? "Vastaus" : "Kysymys"}
          </p>

          <div className="mt-6 flex min-h-[150px] items-center">
            <p className="text-3xl font-extrabold leading-tight text-slate-950">
              {isFlipped ? currentCard.back : currentCard.front}
            </p>
          </div>

          <p className="mt-6 text-sm font-semibold text-slate-500">
            Klikkaa korttia kääntääksesi sen.
          </p>
        </button>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <button
            type="button"
            onClick={() => void markNeedsPractice()}
            disabled={isSaving}
            className="rounded-full bg-orange-100 px-6 py-4 font-bold text-orange-800 transition hover:bg-orange-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSaving ? "Tallennetaan..." : "Kertaa vielä"}
          </button>

          <button
            type="button"
            onClick={() => void markKnown()}
            disabled={isSaving}
            className="rounded-full bg-emerald-100 px-6 py-4 font-bold text-emerald-800 transition hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSaving ? "Tallennetaan..." : "Osaan tämän"}
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
          Kertauksen hallinta
        </p>

        <h3 className="mt-2 text-2xl font-extrabold text-slate-950">
          Kierroksen asetukset
        </h3>

        <p className="mt-3 leading-8 text-slate-700">
          Aloita nykyinen kierros alusta näyttää kertauskortit,
          jos niitä on. Nollaa poistaa tämän kurssin
          flashcard-tilan Supabasesta.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={restartCurrentRound}
            className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            Aloita nykyinen kierros alusta
          </button>

          <button
            type="button"
            onClick={() => void resetEverything()}
            disabled={isSaving || !userId}
            className="rounded-full bg-red-50 px-6 py-3 font-bold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSaving ? "Nollataan..." : "Nollaa"}
          </button>
        </div>
      </div>
    </div>
  );
}