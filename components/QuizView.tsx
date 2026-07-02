"use client";

import { useMemo, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { QuizQuestion } from "../data/courseContent";
import { CourseId } from "../data/courses";

type Props = {
  courseId: CourseId;
  questions: QuizQuestion[];
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

function getQuestionArea(question: QuizQuestion): string {
  const questionWithArea = question as QuizQuestion & { area?: string };

  if (questionWithArea.area && questionWithArea.area.trim().length > 0) {
    return questionWithArea.area;
  }

  return "Yleinen";
}

export default function QuizView({ courseId, questions }: Props) {
  const supabase = useMemo(() => {
    return createClient(supabaseUrl, supabaseAnonKey);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswerIds, setSelectedAnswerIds] = useState<string[]>([]);
  const [hasChecked, setHasChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [savedCurrentAnswer, setSavedCurrentAnswer] = useState(false);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const isCorrect = useMemo(() => {
    if (!currentQuestion) {
      return false;
    }

    const selected = [...selectedAnswerIds].sort();
    const correct = [...currentQuestion.correctAnswerIds].sort();

    return (
      selected.length === correct.length &&
      selected.every((id, index) => id === correct[index])
    );
  }, [currentQuestion, selectedAnswerIds]);

  async function saveAttemptToSupabase() {
    if (!currentQuestion) {
      return false;
    }

    if (!supabaseUrl || !supabaseAnonKey) {
      setSaveError(
        "Supabase-asetukset puuttuvat. Tarkista .env.local-tiedoston NEXT_PUBLIC_SUPABASE_URL ja NEXT_PUBLIC_SUPABASE_ANON_KEY."
      );
      return false;
    }

    setIsSaving(true);
    setSaveError(null);

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      setSaveError("Kirjaudu sisään, jotta vastaus voidaan tallentaa.");
      setIsSaving(false);
      return false;
    }

    const { error } = await supabase.from("student_progress_attempts").insert({
      user_id: user.id,
      course_id: courseId,
      question_id: currentQuestion.id,
      question: currentQuestion.question,
      area: getQuestionArea(currentQuestion),
      selected_answer_ids: selectedAnswerIds,
      correct_answer_ids: currentQuestion.correctAnswerIds,
      is_correct: isCorrect,
      answered_at: new Date().toISOString(),
    });

    if (error) {
      setSaveError("Vastauksen tallennus Supabaseen epäonnistui.");
      setIsSaving(false);
      return false;
    }

    setIsSaving(false);
    setSavedCurrentAnswer(true);
    return true;
  }

  function toggleAnswer(answerId: string) {
    if (hasChecked || isSaving) {
      return;
    }

    if (currentQuestion.correctAnswerIds.length === 1) {
      setSelectedAnswerIds([answerId]);
      return;
    }

    setSelectedAnswerIds((current) => {
      if (current.includes(answerId)) {
        return current.filter((id) => id !== answerId);
      }

      return [...current, answerId];
    });
  }

  async function checkAnswer() {
    if (selectedAnswerIds.length === 0 || isSaving) {
      return;
    }

    const saved = await saveAttemptToSupabase();

    if (!saved) {
      return;
    }

    setHasChecked(true);

    if (isCorrect) {
      setCorrectCount((current) => current + 1);
    }
  }

  function nextQuestion() {
    setCurrentIndex((current) => current + 1);
    setSelectedAnswerIds([]);
    setHasChecked(false);
    setSaveError(null);
    setSavedCurrentAnswer(false);
  }

  function restartQuiz() {
    setCurrentIndex(0);
    setSelectedAnswerIds([]);
    setHasChecked(false);
    setCorrectCount(0);
    setSaveError(null);
    setSavedCurrentAnswer(false);
  }

  if (questions.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-extrabold text-slate-950">
          Ei tehtäviä
        </h2>

        <p className="mt-3 leading-8 text-slate-700">
          Tälle kurssille ei ole vielä lisätty tehtäviä.
        </p>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
          Valmis
        </p>

        <h2 className="mt-2 text-3xl font-extrabold text-slate-950">
          Tehtävät tehty
        </h2>

        <p className="mt-4 text-lg leading-8 text-slate-700">
          Sait oikein {correctCount} / {questions.length}. Vastaukset
          tallennettiin kirjautuneelle käyttäjälle Supabaseen.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={restartQuiz}
            className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            Tee uudelleen
          </button>

          <a
            href={`/kurssi/${courseId}/edistyminen`}
            className="rounded-full border border-slate-300 bg-white px-6 py-3 font-bold text-slate-800 transition hover:border-blue-200 hover:text-blue-700"
          >
            Näytä edistyminen
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
            Monivalinta
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-slate-950">
            Kysymys {currentIndex + 1} / {questions.length}
          </h2>

          <p className="mt-2 text-sm font-semibold text-slate-500">
            Osa-alue: {getQuestionArea(currentQuestion)}
          </p>
        </div>

        <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
          Oikein {correctCount}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xl font-extrabold leading-8 text-slate-950">
          {currentQuestion.question}
        </p>

        <p className="mt-3 text-sm font-semibold text-slate-500">
          {currentQuestion.correctAnswerIds.length > 1
            ? "Valitse kaikki oikeat vastaukset."
            : "Valitse yksi oikea vastaus."}
        </p>
      </div>

      <div className="mt-6 space-y-3">
        {currentQuestion.answers.map((answer) => {
          const isSelected = selectedAnswerIds.includes(answer.id);
          const isRightAnswer = currentQuestion.correctAnswerIds.includes(
            answer.id
          );

          let answerClass =
            "border-slate-200 bg-white text-slate-800 hover:border-blue-200 hover:bg-blue-50";

          if (isSelected && !hasChecked) {
            answerClass = "border-blue-300 bg-blue-50 text-blue-800";
          }

          if (hasChecked && isRightAnswer) {
            answerClass = "border-emerald-300 bg-emerald-50 text-emerald-800";
          }

          if (hasChecked && isSelected && !isRightAnswer) {
            answerClass = "border-red-300 bg-red-50 text-red-800";
          }

          return (
            <button
              key={answer.id}
              type="button"
              onClick={() => toggleAnswer(answer.id)}
              disabled={isSaving}
              className={`w-full rounded-2xl border px-4 py-4 text-left font-semibold transition disabled:cursor-not-allowed disabled:opacity-70 ${answerClass}`}
            >
              {answer.text}
            </button>
          );
        })}
      </div>

      {saveError && (
        <div className="mt-6 rounded-2xl bg-red-50 p-5 text-red-900">
          <h3 className="font-extrabold">Tallennus epäonnistui</h3>

          <p className="mt-2 leading-7">{saveError}</p>

          <a
            href="/kirjaudu"
            className="mt-4 inline-flex rounded-full bg-red-600 px-5 py-2 font-bold text-white transition hover:bg-red-700"
          >
            Kirjaudu sisään
          </a>
        </div>
      )}

      {hasChecked && (
        <div
          className={`mt-6 rounded-2xl p-5 ${
            isCorrect
              ? "bg-emerald-50 text-emerald-900"
              : "bg-orange-50 text-orange-900"
          }`}
        >
          <h3 className="font-extrabold">
            {isCorrect ? "Oikein" : "Ei aivan oikein"}
          </h3>

          <p className="mt-2 leading-7">{currentQuestion.explanation}</p>

          {savedCurrentAnswer && (
            <p className="mt-3 text-sm font-bold">
              Vastaus tallennettu Supabaseen.
            </p>
          )}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        {!hasChecked ? (
          <button
            type="button"
            onClick={checkAnswer}
            disabled={selectedAnswerIds.length === 0 || isSaving}
            className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {isSaving ? "Tallennetaan..." : "Tarkista"}
          </button>
        ) : isLastQuestion ? (
          <button
            type="button"
            onClick={nextQuestion}
            className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            Näytä tulos
          </button>
        ) : (
          <button
            type="button"
            onClick={nextQuestion}
            className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            Seuraava
          </button>
        )}
      </div>
    </div>
  );
}