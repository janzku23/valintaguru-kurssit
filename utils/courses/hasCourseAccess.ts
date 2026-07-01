import { createClient } from "@/utils/supabase/client";

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

  const normalizedEmail = user.email.toLowerCase();
  const normalizedCourseSlug = courseSlug.toLowerCase();

  const hasEntitlementAccess = await checkCourseEntitlements(
    normalizedEmail,
    normalizedCourseSlug
  );

  if (hasEntitlementAccess) {
    return true;
  }

  const hasStudentCourseAccess = await checkStudentCourses(
    user.id,
    normalizedEmail,
    normalizedCourseSlug
  );

  return hasStudentCourseAccess;
}

async function checkCourseEntitlements(email: string, courseSlug: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("course_entitlements")
    .select("id")
    .eq("email", email)
    .eq("course_slug", courseSlug)
    .eq("status", "active")
    .maybeSingle<AccessRow>();

  if (error) {
    return false;
  }

  return Boolean(data);
}

async function checkStudentCourses(
  userId: string,
  email: string,
  courseSlug: string
) {
  const supabase = createClient();

  const byUserId = await supabase
    .from("student_courses")
    .select("id")
    .eq("user_id", userId)
    .or(`course_id.eq.${courseSlug},course_slug.eq.${courseSlug}`)
    .eq("status", "active")
    .maybeSingle<AccessRow>();

  if (!byUserId.error && byUserId.data) {
    return true;
  }

  const byEmail = await supabase
    .from("student_courses")
    .select("id")
    .eq("email", email)
    .or(`course_id.eq.${courseSlug},course_slug.eq.${courseSlug}`)
    .eq("status", "active")
    .maybeSingle<AccessRow>();

  if (!byEmail.error && byEmail.data) {
    return true;
  }

  return false;
}