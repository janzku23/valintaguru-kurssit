import { NextResponse } from "next/server";
import { createAdminClient } from "@/utils/supabase/admin";
import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";
const ADMIN_EMAIL = "admin@valintaguru.fi";

export async function GET(request: Request) {
  const userClient = await createClient();
  const {
    data: { user },
  } = await userClient.auth.getUser();

  if (!user || user.email?.trim().toLowerCase() !== ADMIN_EMAIL) {
    return NextResponse.json({ error: "Ei käyttöoikeutta." }, { status: 403 });
  }

  const admin = createAdminClient();
  const summary = new URL(request.url).searchParams.get("summary") === "1";

  const { count: openCount, error: countError } = await admin
    .from("support_inquiries")
    .select("id", { count: "exact", head: true })
    .eq("status", "open");

  if (countError) {
    return NextResponse.json({ error: countError.message }, { status: 500 });
  }

  if (summary) {
    return NextResponse.json({ openCount: openCount ?? 0 });
  }

  const { data, error } = await admin
    .from("support_inquiries")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ inquiries: data ?? [], openCount: openCount ?? 0 });
}
