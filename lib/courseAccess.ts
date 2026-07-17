import { createClient } from "@/utils/supabase/client";
import type { CourseId } from "@/data/courses";

type AccessRow = {
  id: string;
};

type CourseEntitlementRow = AccessRow & {
  status?: string | null;
};

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function normalizeCourseId(courseId: string) {
  return courseId.trim().toLowerCase();
}

export async function hasCourseAccess(
  courseId: CourseId | string
): Promise<boolean> {
  const supabase = createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    console.error("Käyttäjän hakeminen epäonnistui:", userError);
    return false;
  }

  if (!user?.id || !user.email) {
    return false;
  }

  const normalizedEmail = normalizeEmail(user.email);
  const normalizedCourseId = normalizeCourseId(courseId);

  const entitlementAccess = await checkCourseEntitlements(
    normalizedEmail,
    normalizedCourseId
  );

  if (entitlementAccess) {
    return true;
  }

  return checkStudentCourses(
    user.id,
    normalizedEmail,
    normalizedCourseId
  );
}

async function checkCourseEntitlements(
  email: string,
  courseId: string
): Promise<boolean> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("course_entitlements")
    .select("id, status")
    .eq("email", email)
    .eq("course_slug", courseId)
    .eq("status", "active")
    .limit(1)
    .maybeSingle<CourseEntitlementRow>();

  if (error) {
    console.error(
      `course_entitlements-tarkistus epäonnistui kurssille ${courseId}:`,
      error
    );

    return false;
  }

  return Boolean(data?.id);
}

async function checkStudentCourses(
  userId: string,
  email: string,
  courseId: string
): Promise<boolean> {
  const supabase = createClient();

  const byUserIdAndCourseId = await supabase
    .from("student_courses")
    .select("id")
    .eq("user_id", userId)
    .eq("course_id", courseId)
    .eq("status", "active")
    .limit(1)
    .maybeSingle<AccessRow>();

  if (!byUserIdAndCourseId.error && byUserIdAndCourseId.data?.id) {
    return true;
  }

  const byUserIdAndCourseSlug = await supabase
    .from("student_courses")
    .select("id")
    .eq("user_id", userId)
    .eq("course_slug", courseId)
    .eq("status", "active")
    .limit(1)
    .maybeSingle<AccessRow>();

  if (!byUserIdAndCourseSlug.error && byUserIdAndCourseSlug.data?.id) {
    return true;
  }

  const byEmailAndCourseId = await supabase
    .from("student_courses")
    .select("id")
    .eq("email", email)
    .eq("course_id", courseId)
    .eq("status", "active")
    .limit(1)
    .maybeSingle<AccessRow>();

  if (!byEmailAndCourseId.error && byEmailAndCourseId.data?.id) {
    return true;
  }

  const byEmailAndCourseSlug = await supabase
    .from("student_courses")
    .select("id")
    .eq("email", email)
    .eq("course_slug", courseId)
    .eq("status", "active")
    .limit(1)
    .maybeSingle<AccessRow>();

  if (!byEmailAndCourseSlug.error && byEmailAndCourseSlug.data?.id) {
    return true;
  }

  if (
    byUserIdAndCourseId.error &&
    byUserIdAndCourseSlug.error &&
    byEmailAndCourseId.error &&
    byEmailAndCourseSlug.error
  ) {
    console.error("student_courses-tarkistukset epäonnistuivat:", {
      courseId,
      userId,
      email,
      byUserIdAndCourseId: byUserIdAndCourseId.error,
      byUserIdAndCourseSlug: byUserIdAndCourseSlug.error,
      byEmailAndCourseId: byEmailAndCourseId.error,
      byEmailAndCourseSlug: byEmailAndCourseSlug.error,
    });
  }

  return false;
}