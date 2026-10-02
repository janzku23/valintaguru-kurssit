import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createAdminClient } from "@/utils/supabase/admin";

export const runtime = "nodejs";
const ADMIN_EMAIL = "admin@valintaguru.fi";

function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

function getBearerToken(request: NextRequest) {
  const authorization = request.headers.get("authorization");
  if (!authorization?.startsWith("Bearer ")) return null;
  return authorization.slice("Bearer ".length).trim();
}

async function verifyAdmin(request: NextRequest) {
  const accessToken = getBearerToken(request);
  if (!accessToken) {
    return { error: "Kirjautumistietoa ei löytynyt.", status: 401 } as const;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !anonKey) {
    return {
      error: "Supabase-ympäristömuuttujat puuttuvat palvelimelta.",
      status: 500,
    } as const;
  }

  const authenticatedClient = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: `Bearer ${accessToken}` } },
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  });

  const {
    data: { user },
    error,
  } = await authenticatedClient.auth.getUser(accessToken);

  if (error || !user) {
    return { error: "Kirjautuminen ei ole enää voimassa.", status: 401 } as const;
  }

  if (normalizeEmail(user.email ?? "") !== ADMIN_EMAIL) {
    return {
      error: "Sinulla ei ole oikeutta käyttää admin-toimintoja.",
      status: 403,
    } as const;
  }

  return { ok: true } as const;
}

export async function GET(request: NextRequest) {
  try {
    const verification = await verifyAdmin(request);

    if (!("ok" in verification)) {
      return NextResponse.json(
        { error: verification.error },
        { status: verification.status }
      );
    }

    const adminClient = createAdminClient();

    const [freeCourseResult, newsletterResult] = await Promise.all([
      adminClient
        .from("free_course_signups")
        .select("id", { count: "exact" }),
      adminClient
        .from("newsletter_preferences")
        .select("email, subscribed, subscribed_at, updated_at")
        .eq("subscribed", true)
        .order("updated_at", { ascending: false }),
    ]);

    if (freeCourseResult.error) {
      throw new Error(
        `Ilmaiskurssin ilmoittautumisten hakeminen epäonnistui: ${freeCourseResult.error.message}`
      );
    }

    if (newsletterResult.error) {
      throw new Error(
        `Uutiskirjelistan hakeminen epäonnistui: ${newsletterResult.error.message}`
      );
    }

    const marketingEmails = Array.from(
      new Set(
        (newsletterResult.data ?? [])
          .map((row) => normalizeEmail(row.email ?? ""))
          .filter(Boolean)
      )
    );

    return NextResponse.json({
      success: true,
      totalSignups: freeCourseResult.count ?? 0,
      marketingConsentCount: marketingEmails.length,
      marketingEmails,
    });
  } catch (error) {
    console.error("Adminin uutiskirjelistan haku epäonnistui:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Tuntematon palvelinvirhe.",
      },
      { status: 500 }
    );
  }
}
