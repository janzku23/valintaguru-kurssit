import { NextResponse } from "next/server";
import { createSupabaseServerUser } from "@/lib/supabase/server-user";
import { validateGuruName } from "@/lib/gurupath/moderation";

export const dynamic = "force-dynamic";

const PROFILE_SELECT =
  "user_id,display_name,is_public,level,xp,lifetime_xp,best_level,total_score";

export async function GET() {
  const supabase = await createSupabaseServerUser();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { error: "Kirjautuminen vaaditaan." },
      { status: 401 }
    );
  }

  // Ensimmäinen haku.
  const { data: existing, error: existingError } = await supabase
    .from("guru_game_profiles")
    .select(PROFILE_SELECT)
    .eq("user_id", user.id)
    .maybeSingle();

  if (existingError) {
    return NextResponse.json(
      { error: existingError.message },
      { status: 500 }
    );
  }

  if (existing) {
    return NextResponse.json({ profile: existing });
  }

  /*
   * TÄRKEÄ KORJAUS:
   * Vanha versio teki tavallisen insertin. Jos samaan aikaan
   * esimerkiksi ranking- ja profiilikomponentti pyysivät profiilia,
   * kaksi GET-pyyntöä saattoi molemmat yrittää luoda saman user_id:n.
   *
   * Käytetään upsertia + onConflict=user_id, jolloin profiilin luonti
   * on idempotentti eikä duplicate primary key -virhettä synny.
   */
  const { error: createError } = await supabase
    .from("guru_game_profiles")
    .upsert(
      {
        user_id: user.id,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "user_id",
        ignoreDuplicates: true,
      }
    );

  if (createError && createError.code !== "23505") {
    return NextResponse.json(
      { error: createError.message },
      { status: 500 }
    );
  }

  // Haetaan lopullinen rivi riippumatta siitä, kumpi rinnakkainen pyyntö loi sen.
  const { data: profile, error: profileError } = await supabase
    .from("guru_game_profiles")
    .select(PROFILE_SELECT)
    .eq("user_id", user.id)
    .single();

  if (profileError) {
    return NextResponse.json(
      { error: profileError.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ profile });
}

export async function PATCH(request: Request) {
  const supabase = await createSupabaseServerUser();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { error: "Kirjautuminen vaaditaan." },
      { status: 401 }
    );
  }

  const body = await request.json().catch(() => ({}));
  const isPublic = Boolean(body.isPublic);

  let displayName: string | null = null;
  let normalized: string | null = null;

  if (isPublic || typeof body.displayName === "string") {
    const result = validateGuruName(body.displayName);

    if (!result.ok) {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      );
    }

    displayName = result.name;
    normalized = result.normalized;
  }

  /*
   * Varmistetaan ensin, että profiili on olemassa.
   * ignoreDuplicates tekee tästä turvallisen myös rinnakkaisissa pyynnöissä.
   */
  const { error: ensureError } = await supabase
    .from("guru_game_profiles")
    .upsert(
      {
        user_id: user.id,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "user_id",
        ignoreDuplicates: true,
      }
    );

  if (ensureError && ensureError.code !== "23505") {
    return NextResponse.json(
      { error: ensureError.message },
      { status: 500 }
    );
  }

  const patch: Record<string, unknown> = {
    is_public: isPublic,
    updated_at: new Date().toISOString(),
  };

  if (displayName) {
    patch.display_name = displayName;
    patch.display_name_normalized = normalized;
  }

  const { data, error } = await supabase
    .from("guru_game_profiles")
    .update(patch)
    .eq("user_id", user.id)
    .select(PROFILE_SELECT)
    .single();

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "Tämä nimimerkki on jo käytössä." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ profile: data });
}
