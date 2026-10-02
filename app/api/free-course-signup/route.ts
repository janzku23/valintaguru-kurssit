import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/utils/supabase/admin";

export const runtime = "nodejs";

type RequestBody = {
  email?: unknown;
  marketingConsent?: unknown;
  website?: unknown;
};

function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getSiteUrl(request: NextRequest) {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return (configuredSiteUrl || request.nextUrl.origin).replace(/\/$/, "");
}

async function saveNewsletterConsent(
  email: string,
  authUserId: string | null,
  consentGiven: boolean
) {
  if (!consentGiven) return;

  const adminClient = createAdminClient();
  const now = new Date().toISOString();

  const { error } = await adminClient
    .from("newsletter_preferences")
    .upsert(
      {
        email,
        auth_user_id: authUserId,
        subscribed: true,
        subscribed_at: now,
        updated_at: now,
      },
      { onConflict: "email" }
    );

  if (error) {
    throw new Error(
      `Uutiskirjeluvan tallentaminen epäonnistui: ${error.message}`
    );
  }
}

async function findUserByEmail(email: string) {
  const adminClient = createAdminClient();
  let page = 1;
  const perPage = 1000;

  while (true) {
    const { data, error } = await adminClient.auth.admin.listUsers({ page, perPage });
    if (error) {
      throw new Error(`Käyttäjän tarkistaminen epäonnistui: ${error.message}`);
    }

    const matchingUser = data.users.find(
      (user) => normalizeEmail(user.email ?? "") === email
    );
    if (matchingUser) return matchingUser;
    if (data.users.length < perPage) return null;
    page += 1;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RequestBody;
    const email = typeof body.email === "string" ? normalizeEmail(body.email) : "";
    const marketingConsent = body.marketingConsent === true;
    const website = typeof body.website === "string" ? body.website.trim() : "";

    // Honeypot boteille. Ei paljasteta, että pyyntö ohitettiin.
    if (website) return NextResponse.json({ success: true, invited: false });

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Anna kelvollinen sähköpostiosoite." },
        { status: 400 }
      );
    }

    const adminClient = createAdminClient();
    const { data: existingSignup, error: existingSignupError } = await adminClient
      .from("free_course_signups")
      .select("email, marketing_consent, marketing_consent_at")
      .eq("email", email)
      .maybeSingle();

    if (existingSignupError) {
      throw new Error(
        `Ilmoittautumistiedon tarkistaminen epäonnistui: ${existingSignupError.message}`
      );
    }

    const alreadyConsented = Boolean(existingSignup?.marketing_consent);
    const nextConsent = alreadyConsented || marketingConsent;
    const now = new Date().toISOString();
    const consentAt = alreadyConsented
      ? existingSignup?.marketing_consent_at ?? now
      : marketingConsent
        ? now
        : null;

    const user = await findUserByEmail(email);

    const { error: signupError } = await adminClient
      .from("free_course_signups")
      .upsert(
        {
          email,
          marketing_consent: nextConsent,
          marketing_consent_at: consentAt,
          auth_user_id: user?.id ?? null,
          updated_at: now,
        },
        { onConflict: "email" }
      );

    if (signupError) {
      throw new Error(`Ilmoittautumisen tallennus epäonnistui: ${signupError.message}`);
    }

    if (user) {
      await saveNewsletterConsent(email, user.id, marketingConsent);

      return NextResponse.json({
        success: true,
        invited: false,
        existingUser: true,
        message:
          "Tällä sähköpostilla on jo ValintaGuru-tunnus. Ilmainen kurssi on käytössäsi heti kirjautumisen jälkeen.",
      });
    }

    const redirectTo = `${getSiteUrl(request)}/aseta-salasana`;
    const { data, error: inviteError } = await adminClient.auth.admin.inviteUserByEmail(
      email,
      {
        redirectTo,
        data: {
          created_by: "free-course",
          account_type: "student",
          signup_source: "free-course-homepage",
        },
      }
    );

    if (inviteError || !data.user) {
      throw new Error(
        inviteError?.message ?? "Käyttäjätunnuksen kutsun lähettäminen epäonnistui."
      );
    }

    const { error: linkError } = await adminClient
      .from("free_course_signups")
      .update({
        auth_user_id: data.user.id,
        invite_sent_at: now,
        updated_at: now,
      })
      .eq("email", email);

    if (linkError) {
      console.error("Ilmaiskurssin auth_user_id-tallennus epäonnistui:", linkError);
    }

    await saveNewsletterConsent(email, data.user.id, marketingConsent);

    return NextResponse.json({
      success: true,
      invited: true,
      existingUser: false,
      message:
        "Ilmoittautuminen onnistui. Lähetimme sähköpostiisi kutsun, jonka kautta voit asettaa salasanan.",
    });
  } catch (error) {
    console.error("Ilmaiskurssille ilmoittautuminen epäonnistui:", error);
    const message = error instanceof Error ? error.message : "Tuntematon palvelinvirhe.";
    const status = message.toLowerCase().includes("email rate limit exceeded") ? 429 : 500;
    return NextResponse.json(
      {
        error:
          status === 429
            ? "Sähköpostikutsuja on lähetetty hetkellisesti liikaa. Yritä myöhemmin uudelleen."
            : message,
      },
      { status }
    );
  }
}
