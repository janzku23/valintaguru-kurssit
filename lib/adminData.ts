import "server-only";

import type { User } from "@supabase/supabase-js";
import { createAdminClient } from "@/utils/supabase/admin";
import { courses } from "@/data/courses";

export type AdminCourseRight = {
  courseId: string;
  title: string;
};

export type AdminUserOverview = {
  id: string;
  email: string;
  name: string | null;
  createdAt: string;
  lastSignInAt: string | null;
  courseRights: AdminCourseRight[];
  attempts: number;
  correct: number;
  accuracy: number;
  latestActivityAt: string | null;
};

type CourseRow = {
  user_id: string | null;
  email: string | null;
  course_id: string | null;
  course_slug: string | null;
  course_title: string | null;
  title: string | null;
  status: string | null;
};

type ProgressRow = {
  user_id: string;
  is_correct: boolean;
  answered_at: string;
};

function isActiveStatus(status: string | null) {
  if (!status) return true;
  const normalized = status.trim().toLowerCase();
  return ["active", "enabled", "käytössä", "kaytossa"].includes(normalized);
}

async function listAllAuthUsers(): Promise<User[]> {
  const admin = createAdminClient();
  const result: User[] = [];
  let page = 1;
  const perPage = 1000;

  while (true) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage });
    if (error) throw new Error(`Käyttäjien haku epäonnistui: ${error.message}`);

    result.push(...data.users);
    if (data.users.length < perPage) break;
    page += 1;
  }

  return result;
}

async function readProgressRows() {
  const admin = createAdminClient();
  const rows: ProgressRow[] = [];
  const pageSize = 1000;

  for (let from = 0; ; from += pageSize) {
    const { data, error } = await admin
      .from("student_progress_attempts")
      .select("user_id,is_correct,answered_at")
      .range(from, from + pageSize - 1);

    if (error) {
      // Admin-paneeli toimii myös ennen oppimisanalytiikan käyttöönottoa.
      console.warn("student_progress_attempts fetch failed:", error.message);
      break;
    }

    const batch = (data ?? []) as ProgressRow[];
    rows.push(...batch);
    if (batch.length < pageSize) break;
  }

  return rows;
}

export async function getAdminUsersOverview(): Promise<AdminUserOverview[]> {
  const admin = createAdminClient();
  const [users, courseResult, progressRows] = await Promise.all([
    listAllAuthUsers(),
    admin
      .from("student_courses")
      .select("user_id,email,course_id,course_slug,course_title,title,status"),
    readProgressRows(),
  ]);

  if (courseResult.error) {
    throw new Error(`Kurssioikeuksien haku epäonnistui: ${courseResult.error.message}`);
  }

  const courseRows = (courseResult.data ?? []) as CourseRow[];
  const courseTitleMap = new Map<string, string>(
    courses.map((course) => [course.id, course.title])
  );

  return users
    .map((user) => {
      const normalizedEmail = user.email?.trim().toLowerCase() ?? "";
      const rights = courseRows.filter((row) => {
        if (!isActiveStatus(row.status)) return false;
        return (
          row.user_id === user.id ||
          (!!normalizedEmail && row.email?.trim().toLowerCase() === normalizedEmail)
        );
      });

      const uniqueRights = new Map<string, AdminCourseRight>();
      rights.forEach((row) => {
        const courseId = row.course_id ?? row.course_slug;
        if (!courseId) return;
        uniqueRights.set(courseId, {
          courseId,
          title:
            courseTitleMap.get(courseId) ??
            row.course_title ??
            row.title ??
            courseId,
        });
      });

      const attempts = progressRows.filter((row) => row.user_id === user.id);
      const correct = attempts.filter((row) => row.is_correct).length;
      const latestActivityAt = attempts.reduce<string | null>((latest, row) => {
        if (!latest) return row.answered_at;
        return new Date(row.answered_at) > new Date(latest) ? row.answered_at : latest;
      }, null);

      const name =
        typeof user.user_metadata?.full_name === "string"
          ? user.user_metadata.full_name
          : typeof user.user_metadata?.name === "string"
            ? user.user_metadata.name
            : null;

      return {
        id: user.id,
        email: user.email ?? "",
        name,
        createdAt: user.created_at,
        lastSignInAt: user.last_sign_in_at ?? null,
        courseRights: Array.from(uniqueRights.values()),
        attempts: attempts.length,
        correct,
        accuracy: attempts.length > 0 ? Math.round((correct / attempts.length) * 100) : 0,
        latestActivityAt,
      };
    })
    .sort((a, b) => {
      const aTime = a.latestActivityAt ?? a.createdAt;
      const bTime = b.latestActivityAt ?? b.createdAt;
      return new Date(bTime).getTime() - new Date(aTime).getTime();
    });
}

export async function getAdminUserDetail(userId: string) {
  const admin = createAdminClient();
  const { data: userData, error: userError } = await admin.auth.admin.getUserById(userId);
  if (userError || !userData.user) return null;

  const user = userData.user;
  const normalizedEmail = user.email?.trim().toLowerCase() ?? "";

  const [rightsResult, progressResult, examsResult] = await Promise.all([
    admin
      .from("student_courses")
      .select("user_id,email,course_id,course_slug,course_title,title,status,created_at")
      .or(`user_id.eq.${userId}${normalizedEmail ? `,email.eq.${normalizedEmail}` : ""}`),
    admin
      .from("student_progress_attempts")
      .select(
        "id,course_id,question_id,question,area,category,category_id,answer_status,selected_answer_ids,correct_answer_ids,is_correct,answered_at,answer_time_ms,session_duration_ms,session_id,session_type,session_name,exercise_id,difficulty,question_type,source_page",
      )
      .eq("user_id", userId)
      .order("answered_at", { ascending: false })
      .limit(2000),
    admin
      .from("practice_exam_attempts")
      .select(
        "id,course_id,exam_id,status,started_at,finished_at,duration_seconds,score,max_score,correct_count,wrong_count,unsure_count",
      )
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(500),
  ]);

  const rights = rightsResult.error ? [] : rightsResult.data ?? [];
  const progress = progressResult.error ? [] : progressResult.data ?? [];
  const exams = examsResult.error ? [] : examsResult.data ?? [];

  // Valintakoe G:n oma taulu on valinnainen. Jos migraatiota ei ole vielä ajettu,
  // hallintapaneeli ei kaadu.
  let gExercises: unknown[] = [];
  const gResult = await admin
    .from("valintakoe_g_exercise_attempts")
    .select(
      "id,course_id,exercise_id,status,started_at,finished_at,duration_seconds,correct_count,incorrect_count,skipped_count,question_count",
    )
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(500);

  if (!gResult.error) gExercises = gResult.data ?? [];

  return {
    user: {
      id: user.id,
      email: user.email ?? "",
      createdAt: user.created_at,
      lastSignInAt: user.last_sign_in_at ?? null,
      name:
        typeof user.user_metadata?.full_name === "string"
          ? user.user_metadata.full_name
          : typeof user.user_metadata?.name === "string"
            ? user.user_metadata.name
            : null,
    },
    rights,
    progress,
    exams,
    gExercises,
  };
}
