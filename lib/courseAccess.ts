import "server-only";

import { createClient } from "@/utils/supabase/server";
import type { CourseId } from "@/data/courses";

type AccessRow = {
  id: string;
};

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

  if (userError) {
    console.error(
      "Kirjautuneen käyttäjän hakeminen epäonnistui:",
      userError
    );

    return false;
  }

  if (!user) {
    console.error(
      "Kurssioikeutta tarkistettaessa käyttäjä ei ollut kirjautunut."
    );

    return false;
  }

  const normalizedCourseId = courseId
    .trim()
    .toLowerCase();

  const normalizedEmail = user.email
    ? normalizeEmail(user.email)
    : null;

  /*
   * Ensisijainen taulu.
   *
   * provisionStudent tallentaa student_courses-rivien
   * status-arvoksi "käytössä", joten tarkistuksen pitää
   * käyttää samaa arvoa eikä "active".
   */
  const { data: userCourseRows, error: userCourseError } =
    await supabase
      .from("student_courses")
      .select("id")
      .eq("user_id", user.id)
      .or(
        `course_id.eq.${normalizedCourseId},course_slug.eq.${normalizedCourseId}`
      )
      .eq("status", "käytössä")
      .limit(1);

  if (userCourseError) {
    console.error(
      "Kurssioikeuden tarkistus käyttäjätunnuksella epäonnistui:",
      userCourseError
    );
  }

  if (userCourseRows && userCourseRows.length > 0) {
    return true;
  }

  /*
   * Varatarkistus sähköpostilla.
   *
   * Tämä kattaa myös tilanteen, jossa käyttöoikeusrivi
   * on luotu sähköpostille ennen käyttäjän lopullista
   * kirjautumista.
   */
  if (normalizedEmail) {
    const {
      data: emailCourseRows,
      error: emailCourseError,
    } = await supabase
      .from("student_courses")
      .select("id")
      .ilike("email", normalizedEmail)
      .or(
        `course_id.eq.${normalizedCourseId},course_slug.eq.${normalizedCourseId}`
      )
      .eq("status", "käytössä")
      .limit(1);

    if (emailCourseError) {
      console.error(
        "Kurssioikeuden tarkistus sähköpostilla epäonnistui:",
        emailCourseError
      );
    }

    if (
      emailCourseRows &&
      emailCourseRows.length > 0
    ) {
      return true;
    }
  }

  /*
   * Mahdollinen vanha course_entitlements-taulu.
   * Tässä voidaan edelleen käyttää active-arvoa,
   * jos kyseinen taulu on rakennettu englanninkielisellä
   * status-arvolla.
   */
  if (normalizedEmail) {
    const {
      data: entitlementRows,
      error: entitlementError,
    } = await supabase
      .from("course_entitlements")
      .select("id")
      .ilike("email", normalizedEmail)
      .eq("course_slug", normalizedCourseId)
      .eq("status", "active")
      .limit(1);

    if (entitlementError) {
      console.error(
        "course_entitlements-tarkistus epäonnistui:",
        entitlementError
      );
    }

    if (
      entitlementRows &&
      entitlementRows.length > 0
    ) {
      return true;
    }
  }

  console.error("Kurssioikeutta ei löytynyt:", {
    userId: user.id,
    email: normalizedEmail,
    courseId: normalizedCourseId,
  });

  return false;
}