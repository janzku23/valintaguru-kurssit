import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { createAdminClient } from "@/utils/supabase/admin";

export const runtime = "nodejs";

function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

async function getAuthenticatedUser() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user?.email) {
    return null;
  }

  return user;
}

export async function GET() {
  try {
    const user = await getAuthenticatedUser();

    if (!user) {
      return NextResponse.json(
        { error: "Kirjautuminen vaaditaan." },
        { status: 401 }
      );
    }

    const email = normalizeEmail(user.email ?? "");
    const admin = createAdminClient();

    const { data, error } = await admin
      .from("newsletter_preferences")
      .select("subscribed, subscribed_at, updated_at")
      .or(`auth_user_id.eq.${user.id},email.eq.${email}`)
      .limit(1)
      .maybeSingle();

    if (error) {
      throw new Error(`Uutiskirjeasetuksen hakeminen epäonnistui: ${error.message}`);
    }

    return NextResponse.json({
      success: true,
      subscribed: Boolean(data?.subscribed),
      subscribedAt: data?.subscribed_at ?? null,
      updatedAt: data?.updated_at ?? null,
    });
  } catch (error) {
    console.error("Uutiskirjeasetuksen haku epäonnistui:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Uutiskirjeasetuksen hakeminen epäonnistui.",
      },
      { status: 500 }
    );
  }
}

type PatchBody = {
  subscribed?: unknown;
};

export async function PATCH(request: NextRequest) {
  try {
    const user = await getAuthenticatedUser();

    if (!user) {
      return NextResponse.json(
        { error: "Kirjautuminen vaaditaan." },
        { status: 401 }
      );
    }

    const body = (await request.json()) as PatchBody;

    if (typeof body.subscribed !== "boolean") {
      return NextResponse.json(
        { error: "Virheellinen uutiskirjeasetus." },
        { status: 400 }
      );
    }

    const subscribed = body.subscribed;
    const email = normalizeEmail(user.email ?? "");
    const now = new Date().toISOString();
    const admin = createAdminClient();

    const { data: existing, error: existingError } = await admin
      .from("newsletter_preferences")
      .select("id, subscribed, subscribed_at")
      .or(`auth_user_id.eq.${user.id},email.eq.${email}`)
      .limit(1)
      .maybeSingle();

    if (existingError) {
      throw new Error(
        `Uutiskirjeasetuksen tarkistaminen epäonnistui: ${existingError.message}`
      );
    }

    const nextSubscribedAt = subscribed
      ? existing?.subscribed && existing?.subscribed_at
        ? existing.subscribed_at
        : now
      : null;

    if (existing?.id) {
      const { error: updateError } = await admin
        .from("newsletter_preferences")
        .update({
          email,
          auth_user_id: user.id,
          subscribed,
          subscribed_at: nextSubscribedAt,
          updated_at: now,
        })
        .eq("id", existing.id);

      if (updateError) {
        throw new Error(
          `Uutiskirjeasetuksen tallentaminen epäonnistui: ${updateError.message}`
        );
      }
    } else {
      const { error: insertError } = await admin
        .from("newsletter_preferences")
        .insert({
          email,
          auth_user_id: user.id,
          subscribed,
          subscribed_at: nextSubscribedAt,
          updated_at: now,
        });

      if (insertError) {
        throw new Error(
          `Uutiskirjeasetuksen tallentaminen epäonnistui: ${insertError.message}`
        );
      }
    }

    return NextResponse.json({
      success: true,
      subscribed,
      subscribedAt: nextSubscribedAt,
      message: subscribed
        ? "Uutiskirje on nyt käytössä."
        : "Uutiskirje on poistettu käytöstä.",
    });
  } catch (error) {
    console.error("Uutiskirjeasetuksen tallennus epäonnistui:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Uutiskirjeasetuksen tallentaminen epäonnistui.",
      },
      { status: 500 }
    );
  }
}
