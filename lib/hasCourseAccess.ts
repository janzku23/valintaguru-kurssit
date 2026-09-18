import { createClient } from "@/utils/supabase/client";

const ACTIVE_STATUSES = ["käytössä", "active", "enabled"];

type AccessRow = {
  id: string;
};

export async function hasCourseAccess(courseSlug: string) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    return false;
  }

  const normalizedEmail = user.email.trim().toLowerCase();
  const normalizedCourseSlug = courseSlug.trim().toLowerCase();

  const entitlement = await supabase
    .from("course_entitlements")
    .select("id")
    .eq("email", normalizedEmail)
    .eq("course_slug", normalizedCourseSlug)
    .eq("status", "active")
    .maybeSingle<AccessRow>();

  if (!entitlement.error && entitlement.data) {
    return true;
  }

  const byUserId = await supabase
    .from("student_courses")
    .select("id")
    .eq("user_id", user.id)
    .or(
      `course_id.eq.${normalizedCourseSlug},course_slug.eq.${normalizedCourseSlug}`
    )
    .in("status", ACTIVE_STATUSES)
    .limit(1);

  if (!byUserId.error && byUserId.data && byUserId.data.length > 0) {
    return true;
  }

  const byEmail = await supabase
    .from("student_courses")
    .select("id")
    .eq("email", normalizedEmail)
    .or(
      `course_id.eq.${normalizedCourseSlug},course_slug.eq.${normalizedCourseSlug}`
    )
    .in("status", ACTIVE_STATUSES)
    .limit(1);

  return Boolean(!byEmail.error && byEmail.data && byEmail.data.length > 0);
}
