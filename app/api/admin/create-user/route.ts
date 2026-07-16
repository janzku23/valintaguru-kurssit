import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { provisionStudent } from "@/utils/supabase/provisionStudent";

export const runtime = "nodejs";

const ADMIN_EMAIL = "admin@valintaguru.fi";

type RequestBody = {
  email?: unknown;
  courseIds?: unknown;
};

function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getBearerToken(request: NextRequest) {
  const authorization =
    request.headers.get("authorization");

  if (!authorization?.startsWith("Bearer ")) {
    return null;
  }

  return authorization
    .slice("Bearer ".length)
    .trim();
}

function getSiteUrl(request: NextRequest) {
  const configuredSiteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (configuredSiteUrl) {
    return configuredSiteUrl.replace(/\/$/, "");
  }

  return request.nextUrl.origin;
}

export async function POST(request: NextRequest) {
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

    const supabaseUrl =
      process.env.NEXT_PUBLIC_SUPABASE_URL;

    const anonKey =
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !anonKey) {
      return NextResponse.json(
        {
          error:
            "Supabase-ympäristömuuttujat puuttuvat palvelimelta.",
        },
        {
          status: 500,
        }
      );
    }

    /*
     * Tarkistetaan, että API-kutsun tekijä on kirjautunut
     * admin@valintaguru.fi-käyttäjällä.
     */
    const authenticatedClient = createClient(
      supabaseUrl,
      anonKey,
      {
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
      }
    );

    const {
      data: {
        user: adminUser,
      },
      error: adminUserError,
    } = await authenticatedClient.auth.getUser(
      accessToken
    );

    if (adminUserError || !adminUser) {
      console.error(
        "Admin-käyttäjän tarkistus epäonnistui:",
        adminUserError
      );

      return NextResponse.json(
        {
          error:
            "Kirjautuminen ei ole enää voimassa.",
        },
        {
          status: 401,
        }
      );
    }

    const adminEmail = normalizeEmail(
      adminUser.email ?? ""
    );

    if (adminEmail !== ADMIN_EMAIL) {
      return NextResponse.json(
        {
          error:
            "Sinulla ei ole oikeutta käyttää admin-toimintoja.",
        },
        {
          status: 403,
        }
      );
    }

    const body =
      (await request.json()) as RequestBody;

    const email =
      typeof body.email === "string"
        ? normalizeEmail(body.email)
        : "";

    const courseIds =
      Array.isArray(body.courseIds)
        ? body.courseIds.filter(
            (courseId): courseId is string =>
              typeof courseId === "string" &&
              courseId.trim().length > 0
          )
        : [];

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        {
          error:
            "Anna kelvollinen sähköpostiosoite.",
        },
        {
          status: 400,
        }
      );
    }

    if (email === ADMIN_EMAIL) {
      return NextResponse.json(
        {
          error:
            "Admin-käyttäjää ei voi luoda uudelleen.",
        },
        {
          status: 400,
        }
      );
    }

    if (courseIds.length === 0) {
      return NextResponse.json(
        {
          error:
            "Valitse vähintään yksi avattava kurssi.",
        },
        {
          status: 400,
        }
      );
    }

    const result = await provisionStudent({
      email,
      courseIds,
      siteUrl: getSiteUrl(request),
      createdBy: "admin",
    });

    return NextResponse.json({
      success: true,
      message: result.invited
        ? `Käyttäjä luotiin ja kutsu lähetettiin osoitteeseen ${result.email}.`
        : `Käyttäjä oli jo olemassa. Valitut kurssit lisättiin osoitteelle ${result.email}.`,
      invited: result.invited,
      user: {
        id: result.user.id,
        email: result.email,
      },
      courses: result.courses,
    });
  } catch (error) {
    console.error(
      "Admin-käyttäjän luonti epäonnistui:",
      error
    );

    const message =
      error instanceof Error
        ? error.message
        : "Tuntematon palvelinvirhe.";

    const normalizedMessage =
      message.toLowerCase();

    const status =
      normalizedMessage.includes(
        "email rate limit exceeded"
      )
        ? 429
        : normalizedMessage.includes(
              "already been registered"
            )
          ? 409
          : 500;

    return NextResponse.json(
      {
        error: message,
      },
      {
        status,
      }
    );
  }
}