import { createClient } from "@supabase/supabase-js";
import { CourseId } from "../data/courses";

type SaveProgressAttemptInput = {
  courseId: CourseId;
  questionId: string;
  question: string;
  area: string;
  selectedAnswerIds: string[];
  correctAnswerIds: string[];
  isCorrect: boolean;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export async function saveProgressAttempt(input: SaveProgressAttemptInput) {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Supabase-asetukset puuttuvat. Tarkista NEXT_PUBLIC_SUPABASE_URL ja NEXT_PUBLIC_SUPABASE_ANON_KEY."
    );
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw new Error("Käyttäjän tietoja ei voitu hakea.");
  }

  if (!user) {
    throw new Error("Käyttäjä ei ole kirjautunut sisään.");
  }

  const answeredAt = new Date().toISOString();

  const { error } = await supabase.from("student_progress_attempts").insert({
    user_id: user.id,
    course_id: input.courseId,
    question_id: input.questionId,
    question: input.question,
    area: input.area,
    selected_answer_ids: input.selectedAnswerIds,
    correct_answer_ids: input.correctAnswerIds,
    is_correct: input.isCorrect,
    answered_at: answeredAt,
  });

  if (error) {
    throw new Error("Tehtäväyrityksen tallennus epäonnistui.");
  }
}