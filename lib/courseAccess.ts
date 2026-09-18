import "server-only";

import { createClient } from "@/utils/supabase/server";
import type { CourseId } from "@/data/courses";

const ACTIVE_STATUSES = ["käytössä", "active", "enabled"];

function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

export async function hasCourseAccess(
  courseId: CourseId
): Promise<boolean> {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return false;
  }

  const normalizedCourseId = courseId.trim().toLowerCase();
  const normalizedEmail = user.email ? normalizeEmail(user.email) : null;

  const byUserId = await supabase
    .from("student_courses")
    .select("id")
    .eq("user_id", user.id)
    .or(
      `course_id.eq.${normalizedCourseId},course_slug.eq.${normalizedCourseId}`
    )
    .in("status", ACTIVE_STATUSES)
    .limit(1);

  if (!byUserId.error && byUserId.data && byUserId.data.length > 0) {
    return true;
  }

  if (normalizedEmail) {
    const byEmail = await supabase
      .from("student_courses")
      .select("id")
      .ilike("email", normalizedEmail)
      .or(
        `course_id.eq.${normalizedCourseId},course_slug.eq.${normalizedCourseId}`
      )
      .in("status", ACTIVE_STATUSES)
      .limit(1);

    if (!byEmail.error && byEmail.data && byEmail.data.length > 0) {
      return true;
    }

    const entitlement = await supabase
      .from("course_entitlements")
      .select("id")
      .ilike("email", normalizedEmail)
      .eq("course_slug", normalizedCourseId)
      .eq("status", "active")
      .limit(1);

    if (!entitlement.error && entitlement.data && entitlement.data.length > 0) {
      return true;
    }
  }

  if (process.env.NODE_ENV === "development") {
    console.debug("Kurssioikeutta ei löytynyt:", {
      courseId: normalizedCourseId,
    });
  }

  return false;
}
