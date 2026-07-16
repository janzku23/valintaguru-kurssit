import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createAdminClient } from "@/utils/supabase/admin";
import { courses } from "@/data/courses";

const ADMIN_EMAIL = "admin@valintaguru.fi";

type RequestBody = {
  email?: unknown;
  courseIds?: unknown;
};

type AvailableCourse = (typeof courses)[number];

type StudentCourseInsertRow = {
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

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getSiteUrl(request: NextRequest) {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (configuredUrl) {
    return configuredUrl.replace(/\/$/, "");
  }

  return request.nextUrl.origin;
}

function getBearerToken(request: NextRequest) {
  const authorization = request.headers.get("authorization");

  if (!authorization?.startsWith("Bearer ")) {
    return null;
  }

  return authorization.slice("Bearer ".length).trim();
}

export async function POST(request: NextRequest) {
  let createdUserId: string | null = null;

  try {
    const accessToken = getBearerToken(request);

    if (!accessToken) {
      return NextResponse.json(
        {
          error: "Kirjautumistietoa ei löytynyt.",
        },
        {
          status: 401,
        }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !anonKey) {
      return NextResponse.json(
        {
          error: "Supabase-ympäristömuuttujat puuttuvat palvelimelta.",
        },
        {
          status: 500,
        }
      );
    }

    /*
     * Tarkistetaan, että API-kutsun tekijä on oikeasti kirjautunut
     * admin@valintaguru.fi-käyttäjällä.
     */
    const authenticatedClient = createClient(supabaseUrl, anonKey, {
      global: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false,
      },
    });

    const {
      data: { user: adminUser },
      error: adminUserError,
    } = await authenticatedClient.auth.getUser(accessToken);

    if (adminUserError || !adminUser) {
      console.error("Admin-käyttäjän tarkistus epäonnistui:", adminUserError);

      return NextResponse.json(
        {
          error: "Kirjautuminen ei ole enää voimassa.",
        },
        {
          status: 401,
        }
      );
    }

    const adminEmail = normalizeEmail(adminUser.email ?? "");

    if (adminEmail !== ADMIN_EMAIL) {
      return NextResponse.json(
        {
          error: "Sinulla ei ole oikeutta käyttää admin-toimintoja.",
        },
        {
          status: 403,
        }
      );
    }

    const body = (await request.json()) as RequestBody;

    const email =
      typeof body.email === "string" ? normalizeEmail(body.email) : "";

    const requestedCourseIds = Array.isArray(body.courseIds)
      ? body.courseIds.filter(
          (courseId): courseId is string =>
            typeof courseId === "string" &&
            courseId.trim().length > 0
        )
      : [];

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        {
          error: "Anna kelvollinen sähköpostiosoite.",
        },
        {
          status: 400,
        }
      );
    }

    if (email === ADMIN_EMAIL) {
      return NextResponse.json(
        {
          error: "Admin-käyttäjää ei voi luoda uudelleen.",
        },
        {
          status: 400,
        }
      );
    }

    if (requestedCourseIds.length === 0) {
      return NextResponse.json(
        {
          error: "Valitse vähintään yksi avattava kurssi.",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * Rakennetaan kurssikartta käytössä olevista kursseista.
     */
    const availableCourses = new Map<string, AvailableCourse>(
      courses.map((course) => [
        course.id.toLowerCase(),
        course,
      ])
    );

    /*
     * Poistetaan valituista kursseista duplikaatit.
     */
    const uniqueRequestedCourseIds = Array.from(
      new Set(
        requestedCourseIds.map((courseId) =>
          courseId.trim().toLowerCase()
        )
      )
    );

    /*
     * flatMap takaa, ettei selectedCourses-taulukkoon jää
     * undefined-arvoja.
     */
    const selectedCourses: AvailableCourse[] =
      uniqueRequestedCourseIds.flatMap((courseId) => {
        const course = availableCourses.get(courseId);

        return course ? [course] : [];
      });

    if (selectedCourses.length !== uniqueRequestedCourseIds.length) {
      const invalidCourseIds = uniqueRequestedCourseIds.filter(
        (courseId) => !availableCourses.has(courseId)
      );

      return NextResponse.json(
        {
          error: `Yksi tai useampi valittu kurssi ei ole kelvollinen: ${invalidCourseIds.join(
            ", "
          )}`,
        },
        {
          status: 400,
        }
      );
    }

    const adminClient = createAdminClient();

    /*
     * Tarkistetaan, onko sähköpostilla jo olemassa käyttäjä.
     */
    let existingUserId: string | null = null;
    let page = 1;
    const perPage = 1000;

    while (!existingUserId) {
      const {
        data: usersData,
        error: listUsersError,
      } = await adminClient.auth.admin.listUsers({
        page,
        perPage,
      });

      if (listUsersError) {
        console.error(
          "Käyttäjälistan hakeminen epäonnistui:",
          listUsersError
        );

        return NextResponse.json(
          {
            error: "Käyttäjien tarkistaminen epäonnistui.",
            technicalError: {
              message: listUsersError.message,
            },
          },
          {
            status: 500,
          }
        );
      }

      const existingUser = usersData.users.find(
        (user) =>
          normalizeEmail(user.email ?? "") === email
      );

      if (existingUser) {
        existingUserId = existingUser.id;
        break;
      }

      if (usersData.users.length < perPage) {
        break;
      }

      page += 1;
    }

    if (existingUserId) {
      return NextResponse.json(
        {
          error:
            "Tällä sähköpostilla on jo käyttäjä Supabasessa.",
          existingUser: {
            id: existingUserId,
            email,
          },
        },
        {
          status: 409,
        }
      );
    }

    const siteUrl = getSiteUrl(request);

    /*
     * Käyttäjä ohjataan ensin callback-reitille ja sen jälkeen
     * salasanan asetussivulle.
     */
    const redirectTo =
      `${siteUrl}/auth/callback?next=/aseta-salasana`;

    console.log("Luodaan Supabase-kutsu:", {
      email,
      redirectTo,
      selectedCourses: selectedCourses.map((course) => course.id),
    });

    const {
      data: inviteData,
      error: inviteError,
    } = await adminClient.auth.admin.inviteUserByEmail(email, {
      redirectTo,
      data: {
        created_by: ADMIN_EMAIL,
        account_type: "student",
        selected_courses: selectedCourses.map(
          (course) => course.id
        ),
      },
    });

    if (inviteError || !inviteData.user) {
      console.error("Kutsun lähetys epäonnistui:", {
        message: inviteError?.message,
        status: inviteError?.status,
        code: inviteError?.code,
        email,
        redirectTo,
      });

      return NextResponse.json(
        {
          error:
            inviteError?.message ||
            "Käyttäjän luominen ja kutsun lähettäminen epäonnistui.",
          technicalError: {
            message: inviteError?.message,
            status: inviteError?.status,
            code: inviteError?.code,
          },
        },
        {
          status: inviteError?.status ?? 400,
        }
      );
    }

    const invitedUser = inviteData.user;

    createdUserId = invitedUser.id;

    console.log("Supabase Auth -käyttäjä luotiin:", {
      id: invitedUser.id,
      email: invitedUser.email,
    });

    const courseRows: StudentCourseInsertRow[] =
      selectedCourses.map((course) => ({
        user_id: invitedUser.id,
        email,
        course_id: course.id,
        course_slug: course.id,
        course_title: course.title,
        title: course.title,
        status: "käytössä",
      }));

    const {
      data: insertedCourses,
      error: courseInsertError,
    } = await adminClient
      .from("student_courses")
      .upsert(courseRows, {
        onConflict: "user_id,course_id",
      })
      .select();

    if (courseInsertError) {
      console.error(
        "Kurssioikeuksien tallennus epäonnistui:",
        {
          message: courseInsertError.message,
          details: courseInsertError.details,
          hint: courseInsertError.hint,
          code: courseInsertError.code,
          createdUserId: invitedUser.id,
          email,
          courseRows,
        }
      );

      /*
       * Käyttäjää ei poisteta automaattisesti.
       * Näin Auth-käyttäjä jää Supabaseen näkyviin ja varsinainen
       * tietokantavirhe voidaan korjata erikseen.
       */
      createdUserId = null;

      return NextResponse.json(
        {
          error:
            "Käyttäjä ja kutsu luotiin, mutta kurssioikeuksien tallentaminen epäonnistui.",
          technicalError: {
            message: courseInsertError.message,
            details: courseInsertError.details,
            hint: courseInsertError.hint,
            code: courseInsertError.code,
          },
          createdUser: {
            id: invitedUser.id,
            email,
          },
        },
        {
          status: 500,
        }
      );
    }

    createdUserId = null;

    console.log("Käyttäjä ja kurssioikeudet luotiin:", {
      userId: invitedUser.id,
      email,
      courses: insertedCourses,
    });

    return NextResponse.json({
      success: true,
      message: `Käyttäjä luotiin ja kutsu lähetettiin osoitteeseen ${email}.`,
      user: {
        id: invitedUser.id,
        email,
      },
      courses: selectedCourses.map((course) => ({
        id: course.id,
        title: course.title,
      })),
      insertedCourses: insertedCourses ?? [],
    });
  } catch (error) {
    console.error(
      "Admin-käyttäjän luonti epäonnistui odottamattomasti:",
      error
    );

    /*
     * Käyttäjää ei poisteta automaattisesti, vaikka kutsun jälkeinen
     * käsittely epäonnistuisi.
     */
    if (createdUserId) {
      console.error(
        "Auth-käyttäjä ehdittiin luoda ennen virhettä:",
        createdUserId
      );
    }

    const message =
      error instanceof Error
        ? error.message
        : "Tuntematon palvelinvirhe.";

    return NextResponse.json(
      {
        error:
          "Käyttäjän luominen epäonnistui odottamattoman virheen vuoksi.",
        technicalError: {
          message,
        },
        createdUserId,
      },
      {
        status: 500,
      }
    );
  }
}