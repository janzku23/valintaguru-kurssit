import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { createAdminClient } from "@/utils/supabase/admin";
import { getValintakoeGExercises } from "@/data/valintakoeGExercises";
import { VALINTAKOE_G_READING_CATEGORIES } from "@/data/valintakoeGExercises/categories";
import type {
  ValintakoeGDifficulty,
  ValintakoeGQuestionType,
} from "@/data/valintakoeGExercises/types";

export const dynamic = "force-dynamic";

const ADMIN_EMAIL = "admin@valintaguru.fi";

type MetadataRow = {
  question_id: string;
  exercise_id: string;
  category_id: number;
  difficulty: ValintakoeGDifficulty;
  question_type: ValintakoeGQuestionType;
  article_id: string | null;
  source_page: string | null;
  source_section: string | null;
};

async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return {
      error: NextResponse.json(
        { error: "Kirjautuminen vaaditaan." },
        { status: 401 }
      ),
    };
  }

  if (
    user.email?.trim().toLowerCase() !==
    ADMIN_EMAIL
  ) {
    return {
      error: NextResponse.json(
        { error: "Ei admin-oikeutta." },
        { status: 403 }
      ),
    };
  }

  return { user };
}

export async function GET() {
  const auth = await requireAdmin();
  if ("error" in auth) return auth.error;

  const exercises = getValintakoeGExercises(
    "valintakoe-g"
  );

  const admin = createAdminClient();
  const { data, error } = await admin
    .from("valintakoe_g_question_metadata")
    .select(
      "question_id,exercise_id,category_id,difficulty,question_type,article_id,source_page,source_section"
    );

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  const overrides = new Map(
    ((data ?? []) as MetadataRow[]).map((row) => [
      `${row.exercise_id}:${row.question_id}`,
      row,
    ])
  );

  const questions = exercises.flatMap(
    (exercise) =>
      exercise.questions.map((question) => {
        const row = overrides.get(
          `${exercise.id}:${question.id}`
        );

        return {
          exerciseId: exercise.id,
          exerciseTitle: exercise.title,
          questionId: question.id,
          prompt: question.prompt,
          categoryId:
            row?.category_id ??
            question.categoryId,
          difficulty:
            row?.difficulty ??
            question.difficulty,
          questionType:
            row?.question_type ??
            question.questionType,
          articleId:
            row?.article_id ??
            question.source?.articleId ??
            null,
          sourcePage:
            row?.source_page ??
            question.source?.page ??
            null,
          sourceSection:
            row?.source_section ??
            question.source?.section ??
            null,
        };
      })
  );

  return NextResponse.json({
    categories:
      VALINTAKOE_G_READING_CATEGORIES,
    questions,
  });
}

export async function PATCH(request: Request) {
  const auth = await requireAdmin();
  if ("error" in auth) return auth.error;

  const body = (await request.json()) as {
    exerciseId?: string;
    questionId?: string;
    categoryId?: number;
    difficulty?: ValintakoeGDifficulty;
  };

  const exerciseId =
    body.exerciseId?.trim() ?? "";
  const questionId =
    body.questionId?.trim() ?? "";
  const categoryId = Number(body.categoryId);
  const difficulty = body.difficulty;

  const exercise = getValintakoeGExercises(
    "valintakoe-g"
  ).find((item) => item.id === exerciseId);
  const question = exercise?.questions.find(
    (item) => item.id === questionId
  );

  if (!exercise || !question) {
    return NextResponse.json(
      { error: "Tuntematon tehtävä." },
      { status: 400 }
    );
  }

  if (
    !Number.isInteger(categoryId) ||
    categoryId < 1 ||
    categoryId > 20
  ) {
    return NextResponse.json(
      { error: "categoryId pitää olla 1–20." },
      { status: 400 }
    );
  }

  if (
    difficulty !== "easy" &&
    difficulty !== "medium" &&
    difficulty !== "hard"
  ) {
    return NextResponse.json(
      { error: "Tuntematon vaikeustaso." },
      { status: 400 }
    );
  }

  const admin = createAdminClient();
  const { error } = await admin
    .from("valintakoe_g_question_metadata")
    .upsert(
      {
        exercise_id: exercise.id,
        question_id: question.id,
        category_id: categoryId,
        difficulty,
        question_type: question.questionType,
        article_id:
          question.source?.articleId ?? null,
        source_page:
          question.source?.page ?? null,
        source_section:
          question.source?.section ?? null,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "exercise_id,question_id",
      }
    );

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
