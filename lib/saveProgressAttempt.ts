"use client";

import type { CourseId } from "@/data/courses";
import { createClient } from "@/utils/supabase/client";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";

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

  const { user, error: authError } =
    await getAuthenticatedUser();

  if (authError || !user) {
    throw new Error(
      authError?.message ??
        "Kirjaudu sisään, jotta vastaus voidaan tallentaa."
    );
  }

  const { error } = await supabase
    .from("student_progress_attempts")
    .insert({
      user_id: user.id,
      course_id: input.courseId,
      question_id: input.questionId,
      question: input.question,
      area: input.area,
      selected_answer_ids: input.selectedAnswerIds,
      correct_answer_ids: input.correctAnswerIds,
      is_correct: input.isCorrect,
      answered_at: new Date().toISOString(),
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