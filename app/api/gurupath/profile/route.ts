import "server-only";
import { NextResponse } from "next/server";
import { createSupabaseServerUser } from "@/lib/supabase/server-user";
import { createSupabaseAdmin } from "@/lib/supabase/server-admin";
import { getGuruGameAccessState } from "@/lib/gurupath/hasGuruGameAccess";
import { validateGuruName } from "@/lib/gurupath/moderation";

export const dynamic = "force-dynamic";

const PROFILE_SELECT = "user_id,display_name,is_public,level,xp,lifetime_xp,best_level,total_score";

async function authenticatedPaidUser() {
  const supabase = await createSupabaseServerUser();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) return { user: null, status: 401 as const };
  const access = await getGuruGameAccessState();
  if (!access.viewId) return { user: null, status: 403 as const };
  return { user, status: 200 as const };
}

async function ensureProfile(userId: string) {
  const admin = createSupabaseAdmin();
  const { error } = await admin.from("guru_game_profiles")
    .upsert({ user_id: userId }, { onConflict: "user_id", ignoreDuplicates: true });
  return { admin, error };
}

export async function GET() {
  const auth = await authenticatedPaidUser();
  if (!auth.user) return NextResponse.json({ error: "Ei pelioikeutta." }, { status: auth.status });
  const { admin, error } = await ensureProfile(auth.user.id);
  if (error) return NextResponse.json({ error: "Profiilin alustaminen epäonnistui." }, { status: 500 });
  const { data, error: selectError } = await admin.from("guru_game_profiles")
    .select(PROFILE_SELECT).eq("user_id", auth.user.id).single();
  if (selectError) return NextResponse.json({ error: "Profiilin lukeminen epäonnistui." }, { status: 500 });
  return NextResponse.json({ profile: data }, { headers: { "Cache-Control": "no-store" } });
}

export async function PATCH(request: Request) {
  const auth = await authenticatedPaidUser();
  if (!auth.user) return NextResponse.json({ error: "Ei pelioikeutta." }, { status: auth.status });
  const body: unknown = await request.json().catch(() => null);
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Virheellinen profiilipyyntö." }, { status: 400 });
  }
  const input = body as Record<string, unknown>;
  if (typeof input.isPublic !== "boolean") {
    return NextResponse.json({ error: "Virheellinen näkyvyysasetus." }, { status: 400 });
  }
  if (input.displayName !== undefined && typeof input.displayName !== "string") {
    return NextResponse.json({ error: "Virheellinen nimimerkki." }, { status: 400 });
  }
  const patch: { is_public: boolean; display_name?: string; display_name_normalized?: string } = {
    is_public: input.isPublic,
  };
  if (input.isPublic || input.displayName !== undefined) {
    const validation = validateGuruName(input.displayName);
    if (!validation.ok) return NextResponse.json({ error: validation.error }, { status: 400 });
    patch.display_name = validation.name;
    patch.display_name_normalized = validation.normalized;
  }

  const { admin, error: ensureError } = await ensureProfile(auth.user.id);
  if (ensureError) return NextResponse.json({ error: "Profiilin alustaminen epäonnistui." }, { status: 500 });
  const { data, error } = await admin.from("guru_game_profiles")
    .update(patch).eq("user_id", auth.user.id).select(PROFILE_SELECT).single();
  if (error?.code === "23505") {
    return NextResponse.json({ error: "Tämä nimimerkki on jo käytössä." }, { status: 409 });
  }
  if (error) return NextResponse.json({ error: "Profiilin tallennus epäonnistui." }, { status: 500 });
  return NextResponse.json({ profile: data }, { headers: { "Cache-Control": "no-store" } });
}
