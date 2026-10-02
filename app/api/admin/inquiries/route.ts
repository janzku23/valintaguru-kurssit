import { NextResponse } from "next/server";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { createAdminClient } from "@/utils/supabase/admin";
import { createClient as createServerClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";

const ADMIN_EMAIL = "admin@valintaguru.fi";

function getBearerToken(request: Request) {
  const authorization = request.headers.get("authorization");
  if (!authorization?.startsWith("Bearer ")) return null;
  return authorization.slice("Bearer ".length).trim();
}

async function getRequestUser(request: Request) {
  const token = getBearerToken(request);

  if (token) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !anonKey) {
      throw new Error("Supabase-ympäristömuuttujat puuttuvat palvelimelta.");
    }

    const authenticatedClient = createSupabaseClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: `Bearer ${token}` } },
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false,
      },
    });

    const {
      data: { user },
      error,
    } = await authenticatedClient.auth.getUser(token);

    if (error) return null;
    return user;
  }

  const serverClient = await createServerClient();
  const {
    data: { user },
  } = await serverClient.auth.getUser();
  return user;
}

export async function GET(request: Request) {
  try {
    const user = await getRequestUser(request);

    if (!user) {
      return NextResponse.json(
        { error: "Admin-kirjautuminen ei ole enää voimassa." },
        { status: 401 },
      );
    }

    if (user.email?.trim().toLowerCase() !== ADMIN_EMAIL) {
      return NextResponse.json(
        { error: "Sinulla ei ole oikeutta nähdä tiedusteluja." },
        { status: 403 },
      );
    }

    const admin = createAdminClient();
    const { data, error } = await admin
      .from("support_inquiries")
      .select(
        "id,user_id,email,name,topic,message,status,admin_reply,answered_at,answered_by,reply_read_at,reply_email_sent_at,created_at,updated_at",
      )
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Admin-tiedustelujen haku epäonnistui:", error);
      return NextResponse.json(
        { error: `Tiedustelujen haku epäonnistui: ${error.message}` },
        { status: 500 },
      );
    }

    return NextResponse.json({ inquiries: data ?? [] });
  } catch (error) {
    console.error("Admin-tiedustelureitti kaatui:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Tiedustelujen haku epäonnistui.",
      },
      { status: 500 },
    );
  }
}
