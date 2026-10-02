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

async function sendReplyEmail(input: {
  to: string;
  topic: string;
  reply: string;
}) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.warn(
      "RESEND_API_KEY puuttuu. Vierailijan vastaus tallennettiin, mutta sähköpostia ei lähetetty.",
    );
    return false;
  }

  const from =
    process.env.SUPPORT_FROM_EMAIL?.trim() ||
    "ValintaGuru <info@valintaguru.fi>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [input.to],
      subject: `ValintaGurun vastaus: ${input.topic}`,
      text: [
        "Hei!",
        "",
        "ValintaGuru on vastannut kysymykseesi:",
        "",
        input.reply,
        "",
        "Ystävällisin terveisin",
        "ValintaGuru",
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    console.error(
      "Tiedusteluvastauksen sähköpostilähetys epäonnistui:",
      response.status,
      errorText,
    );
    return false;
  }

  return true;
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
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
        { error: "Sinulla ei ole oikeutta vastata tiedusteluihin." },
        { status: 403 },
      );
    }

    const { id } = await params;
    const inquiryId = typeof id === "string" ? id.trim() : "";

    if (!inquiryId) {
      return NextResponse.json(
        { error: "Tiedustelun tunniste puuttuu." },
        { status: 400 },
      );
    }

    const body = (await request.json().catch(() => null)) as
      | { reply?: unknown }
      | null;
    const reply =
      body && typeof body.reply === "string" ? body.reply.trim() : "";

    if (reply.length < 2) {
      return NextResponse.json(
        { error: "Kirjoita vähintään kaksi merkkiä pitkä vastaus." },
        { status: 400 },
      );
    }

    if (reply.length > 8000) {
      return NextResponse.json(
        { error: "Vastaus on liian pitkä." },
        { status: 400 },
      );
    }

    const admin = createAdminClient();
    const { data: inquiry, error: fetchError } = await admin
      .from("support_inquiries")
      .select("id,user_id,email,topic,status")
      .eq("id", inquiryId)
      .maybeSingle();

    if (fetchError) {
      return NextResponse.json(
        { error: `Tiedustelun haku epäonnistui: ${fetchError.message}` },
        { status: 500 },
      );
    }

    if (!inquiry) {
      return NextResponse.json(
        { error: "Tiedustelua ei löytynyt." },
        { status: 404 },
      );
    }

    const answeredAt = new Date().toISOString();
    let replyEmailSentAt: string | null = null;

    if (!inquiry.user_id) {
      const sent = await sendReplyEmail({
        to: inquiry.email,
        topic: inquiry.topic,
        reply,
      });
      if (sent) replyEmailSentAt = answeredAt;
    }

    const { data, error } = await admin
      .from("support_inquiries")
      .update({
        status: "answered",
        admin_reply: reply,
        answered_at: answeredAt,
        answered_by: user.id,
        reply_read_at: null,
        reply_email_sent_at: replyEmailSentAt,
        updated_at: answeredAt,
      })
      .eq("id", inquiryId)
      .select(
        "id,user_id,email,name,topic,message,status,admin_reply,answered_at,answered_by,reply_read_at,reply_email_sent_at,created_at,updated_at",
      )
      .single();

    if (error) {
      console.error("Tiedusteluvastauksen tallennus epäonnistui:", error);
      return NextResponse.json(
        { error: `Vastauksen tallennus epäonnistui: ${error.message}` },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      inquiry: data,
      delivery: inquiry.user_id ? "account" : "email",
      emailSent: inquiry.user_id ? null : Boolean(replyEmailSentAt),
    });
  } catch (error) {
    console.error("Tiedustelun vastausreitti kaatui:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Vastauksen lähettäminen epäonnistui.",
      },
      { status: 500 },
    );
  }
}
