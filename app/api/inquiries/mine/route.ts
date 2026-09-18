import { NextResponse } from "next/server";
import { createAdminClient } from "@/utils/supabase/admin";
import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";

// Pidetään admin-tunniste vain palvelinpuolella.
const ADMIN_EMAIL = "admin@valintaguru.fi";

export async function GET(request: Request) {
  const userClient = await createClient();
  const {
    data: { user },
  } = await userClient.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Kirjautuminen vaaditaan." }, { status: 401 });
  }

  const admin = createAdminClient();
  const summary = new URL(request.url).searchParams.get("summary") === "1";
  const isAdmin = user.email?.trim().toLowerCase() === ADMIN_EMAIL;

  if (isAdmin && summary) {
    const { count: openCount, error } = await admin
      .from("support_inquiries")
      .select("id", { count: "exact", head: true })
      .eq("status", "open");

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      isAdmin: true,
      openCount: openCount ?? 0,
    });
  }

  const { count: unreadCount, error: unreadError } = await admin
    .from("support_inquiries")
    .select("id", { count: "exact", head: true })
    .eq("user_id", user.id)
    .not("answered_at", "is", null)
    .is("reply_read_at", null);

  if (unreadError) {
    return NextResponse.json({ error: unreadError.message }, { status: 500 });
  }

  if (summary) {
    return NextResponse.json({
      isAdmin: false,
      unreadCount: unreadCount ?? 0,
    });
  }

  const { data, error } = await admin
    .from("support_inquiries")
    .select(
      "id,email,name,topic,message,status,admin_reply,answered_at,reply_read_at,created_at,updated_at",
    )
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    inquiries: data ?? [],
    unreadCount: unreadCount ?? 0,
  });
}
