import "server-only";

import type { User } from "@supabase/supabase-js";
import { createAdminClient } from "@/utils/supabase/admin";
import { courses } from "@/data/courses";

type AvailableCourse = (typeof courses)[number];

export type ProvisionStudentInput = {
  email: string;
  courseIds: string[];
  siteUrl: string;
  createdBy: "admin" | "shopify";
};

export type ProvisionStudentResult = {
  user: User;
  email: string;
  invited: boolean;
  courses: Array<{
    id: AvailableCourse["id"];
    title: string;
  }>;
};

type StudentCourseRow = {
  user_id: string;
  email: string;
  course_id: AvailableCourse["id"];
  course_slug: AvailableCourse["id"];
  course_title: string;
  title: string;
  status: "käytössä";
};

function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

function normalizeSiteUrl(value: string) {
  return value.trim().replace(/\/$/, "");
}

async function findUserByEmail(
  email: string
): Promise<User | null> {
  const adminClient = createAdminClient();

  let page = 1;
  const perPage = 1000;

  while (true) {
    const { data, error } =
      await adminClient.auth.admin.listUsers({
        page,
        perPage,
      });

    if (error) {
      throw new Error(
        `Supabase-käyttäjien hakeminen epäonnistui: ${error.message}`
      );
    }

    const matchingUser = data.users.find(
      (user) =>
        normalizeEmail(user.email ?? "") === email
    );

    if (matchingUser) {
      return matchingUser;
    }

    if (data.users.length < perPage) {
      return null;
    }

    page += 1;
  }
}

function resolveCourses(courseIds: string[]) {
  const availableCourses = new Map<
    string,
    AvailableCourse
  >(
    courses.map((course) => [
      course.id.toLowerCase(),
      course,
    ])
  );

  const normalizedCourseIds = Array.from(
    new Set(
      courseIds
        .filter(
          (courseId): courseId is string =>
            typeof courseId === "string" &&
            courseId.trim().length > 0
        )
        .map((courseId) =>
          courseId.trim().toLowerCase()
        )
    )
  );

  const selectedCourses: AvailableCourse[] =
    normalizedCourseIds.flatMap((courseId) => {
      const course =
        availableCourses.get(courseId);

      return course ? [course] : [];
    });

  const invalidCourseIds =
    normalizedCourseIds.filter(
      (courseId) =>
        !availableCourses.has(courseId)
    );

  if (invalidCourseIds.length > 0) {
    throw new Error(
      `Tuntematon kurssi: ${invalidCourseIds.join(", ")}`
    );
  }

  if (selectedCourses.length === 0) {
    throw new Error(
      "Vähintään yksi kurssi pitää valita."
    );
  }

  return selectedCourses;
}

async function saveCourseAccess(
  user: User,
  email: string,
  selectedCourses: AvailableCourse[]
) {
  const adminClient = createAdminClient();

  const courseRows: StudentCourseRow[] =
    selectedCourses.map((course) => ({
      user_id: user.id,
      email,
      course_id: course.id,
      course_slug: course.id,
      course_title: course.title,
      title: course.title,
      status: "käytössä",
    }));

  const { error } = await adminClient
    .from("student_courses")
    .upsert(courseRows, {
      onConflict: "user_id,course_id",
    });

  if (error) {
    throw new Error(
      [
        "Kurssioikeuksien tallentaminen epäonnistui.",
        error.message,
        error.details,
        error.hint,
        error.code
          ? `Virhekoodi: ${error.code}`
          : null,
      ]
        .filter(Boolean)
        .join(" ")
    );
  }
}

export async function provisionStudent(
  input: ProvisionStudentInput
): Promise<ProvisionStudentResult> {
  const adminClient = createAdminClient();

  const email = normalizeEmail(input.email);
  const siteUrl = normalizeSiteUrl(
    input.siteUrl
  );

  const selectedCourses = resolveCourses(
    input.courseIds
  );

  if (!email) {
    throw new Error(
      "Käyttäjän sähköposti puuttuu."
    );
  }

  if (!siteUrl) {
    throw new Error(
      "Sivuston osoite puuttuu."
    );
  }

  let user = await findUserByEmail(email);
  let invited = false;

  /*
   * Uuden käyttäjän kutsu ohjataan suoraan
   * selaimessa toimivalle salasanan asetussivulle.
   *
   * Invite-linkki käyttää Supabasen implicit-flow'ta,
   * jolloin istuntotunnukset tulevat URL:n hash-osassa.
   * Client-puolen Supabase käsittelee ne automaattisesti.
   *
   * Älä ohjaa tätä palvelinpuolen /auth/callback-reitille.
   */
  if (!user) {
    const redirectTo =
      `${siteUrl}/aseta-salasana`;

    const { data, error } =
      await adminClient.auth.admin.inviteUserByEmail(
        email,
        {
          redirectTo,
          data: {
            created_by: input.createdBy,
            account_type: "student",
            selected_courses:
              selectedCourses.map(
                (course) => course.id
              ),
          },
        }
      );

    if (error || !data.user) {
      throw new Error(
        error?.message ||
          "Supabase-käyttäjän luominen ja kutsun lähetys epäonnistui."
      );
    }

    user = data.user;
    invited = true;
  }

  /*
   * Kurssioikeudet tallennetaan aina.
   * Tämä toimii sekä uudelle että olemassa
   * olevalle käyttäjälle.
   */
  await saveCourseAccess(
    user,
    email,
    selectedCourses
  );

  return {
    user,
    email,
    invited,
    courses: selectedCourses.map(
      (course) => ({
        id: course.id,
        title: course.title,
      })
    ),
  };
}