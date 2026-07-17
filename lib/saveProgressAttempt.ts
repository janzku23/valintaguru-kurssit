"use client";

import { createClient } from "@/utils/supabase/client";
import type { CourseId } from "@/data/courses";

type SaveProgressAttemptInput = {
  courseId: CourseId;
  questionId: string;
  question: string;
  area: string;
  selectedAnswerIds: string[];
  correctAnswerIds: string[];
  isCorrect: boolean;
};

export async function saveProgressAttempt(
  input: SaveProgressAttemptInput
) {
  const supabase = createClient();

  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError) {
    console.error(
      "Istunnon hakeminen epäonnistui:",
      sessionError
    );

    throw new Error(
      "Kirjautumistietoja ei voitu tarkistaa."
    );
  }

  const user = session?.user;

  if (!user) {
    throw new Error(
      "Kirjaudu sisään, jotta vastaus voidaan tallentaa."
    );
  }

  const answeredAt = new Date().toISOString();

  const { error } = await supabase
    .from("student_progress_attempts")
    .insert({
      user_id: user.id,
      course_id: input.courseId,
      question_id: input.questionId,
      question: input.question,
      area: input.area,
      selected_answer_ids:
        input.selectedAnswerIds,
      correct_answer_ids:
        input.correctAnswerIds,
      is_correct: input.isCorrect,
      answered_at: answeredAt,
    });

  if (error) {
    console.error(
      "Tehtäväyrityksen tallennus epäonnistui:",
      error
    );

    throw new Error(
      `Tehtäväyrityksen tallennus epäonnistui: ${error.message}`
    );
  }
}