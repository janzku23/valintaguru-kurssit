"use client";

import { useMemo, useState } from "react";
import { QuizQuestion } from "../data/courseContent";
import { CourseId } from "../data/courses";

type Props = {
  courseId: CourseId;
  questions: QuizQuestion[];
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

function getQuestionArea(question: QuizQuestion): string {
  const questionWithArea = question as QuizQuestion & { area?: string };

  if (questionWithArea.area && questionWithArea.area.trim().length > 0) {
    return questionWithArea.area;
  }

  return "Yleinen";
}

export default function QuizView({ courseId, questions }: Props) {
  const storageKey = `valintaguru_progress_${courseId}`;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswerIds, setSelectedAnswerIds] = useState<string[]>([]);
  const [hasChecked, setHasChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

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

  function saveAttempt() {
    if (!currentQuestion) {
      return;
    }

    const saved = window.localStorage.getItem(storageKey);
    const previousAttempts: ProgressAttempt[] = saved ? JSON.parse(saved) : [];

    const attempt: ProgressAttempt = {
      id: `${currentQuestion.id}-${Date.now()}`,
      courseId,
      questionId: currentQuestion.id,
      question: currentQuestion.question,
      area: getQuestionArea(currentQuestion),
      selectedAnswerIds,
      correctAnswerIds: currentQuestion.correctAnswerIds,
      isCorrect,
      answeredAt: new Date().toISOString(),
    };

    window.localStorage.setItem(
      storageKey,
      JSON.stringify([...previousAttempts, attempt])
    );
  }

  function toggleAnswer(answerId: string) {
    if (hasChecked) {
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

  function checkAnswer() {
    if (selectedAnswerIds.length === 0) {
      return;
    }

    setHasChecked(true);
    saveAttempt();

    if (isCorrect) {
      setCorrectCount((current) => current + 1);
    }
  }

  function nextQuestion() {
    setCurrentIndex((current) => current + 1);
    setSelectedAnswerIds([]);
    setHasChecked(false);
  }

  function restartQuiz() {
    setCurrentIndex(0);
    setSelectedAnswerIds([]);
    setHasChecked(false);
    setCorrectCount(0);
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
          tallennettiin edistymisnäkymään.
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
              className={`w-full rounded-2xl border px-4 py-4 text-left font-semibold transition ${answerClass}`}
            >
              {answer.text}
            </button>
          );
        })}
      </div>

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
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        {!hasChecked ? (
          <button
            type="button"
            onClick={checkAnswer}
            disabled={selectedAnswerIds.length === 0}
            className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Tarkista
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