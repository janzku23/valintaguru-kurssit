import { NextResponse } from "next/server";
import { createAdminClient } from "@/utils/supabase/admin";
import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";

const ADMIN_EMAIL = "admin@valintaguru.fi";
const RESEND_ENDPOINT = "https://api.resend.com/emails";

function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value
  );
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function paragraphs(value: string) {
  return escapeHtml(value)
    .split(/\n{2,}/)
    .map(
      (paragraph) =>
        `<p style="margin:0 0 16px;line-height:1.65">${paragraph.replaceAll(
          "\n",
          "<br />"
        )}</p>`
    )
    .join("");
}

function buildGuestReplyEmail(input: {
  name: string | null;
  topic: string;
  originalMessage: string;
  reply: string;
}) {
  const greeting = input.name
    ? `Hei ${escapeHtml(input.name)},`
    : "Hei,";

  return `
    <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#0f172a">
      <p style="font-size:17px">${greeting}</p>
      <p>ValintaGuru on vastannut tiedusteluusi.</p>

      <h3 style="margin-top:28px">Vastaus</h3>
      <div style="padding:20px;border-radius:16px;background:#eef2ff;border:1px solid #c7d2fe">
        ${paragraphs(input.reply)}
      </div>

      <h3 style="margin-top:28px">Alkuperäinen tiedustelusi</h3>
      <p><strong>${escapeHtml(input.topic)}</strong></p>

      <div style="padding:18px;border-radius:16px;background:#f8fafc;border:1px solid #e2e8f0;color:#475569">
        ${paragraphs(input.originalMessage)}
      </div>

      <p style="margin-top:28px;color:#64748b;font-size:13px">
        Tämä viesti on lähetetty ValintaGurun tiedustelupalvelusta.
      </p>
    </div>
  `;
}

async function sendGuestReply(input: {
  to: string;
  subject: string;
  html: string;
}) {
  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY puuttuu. Vierailijalle ei voida lähettää vastausta sähköpostiin ennen kuin Resend on määritetty."
    );
  }

  const from =
    process.env.SUPPORT_FROM_EMAIL?.trim() ||
    "ValintaGuru <info@valintaguru.fi>";

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [input.to],
      subject: input.subject,
      html: input.html,
    }),
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message =
      typeof payload?.message === "string"
        ? payload.message
        : typeof payload?.error === "string"
          ? payload.error
          : `Resend palautti virheen ${response.status}.`;

    throw new Error(message);
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    /*
     * 1. Varmista admin-käyttäjä.
     */
    const userClient = await createClient();

    const {
      data: { user },
      error: userError,
    } = await userClient.auth.getUser();

    if (
      userError ||
      !user ||
      user.email?.trim().toLowerCase() !== ADMIN_EMAIL
    ) {
      return NextResponse.json(
        { error: "Ei käyttöoikeutta." },
        { status: 403 }
      );
    }

    /*
     * 2. Tarkista reitin tiedustelu-ID.
     */
    const { id } = await params;
    const inquiryId = typeof id === "string" ? id.trim() : "";

    if (!inquiryId) {
      return NextResponse.json(
        { error: "Tiedustelun tunniste puuttuu." },
        { status: 400 }
      );
    }

    if (!isUuid(inquiryId)) {
      return NextResponse.json(
        {
          error: `Virheellinen tiedustelun tunniste: ${inquiryId}`,
        },
        { status: 400 }
      );
    }

    /*
     * 3. Tarkista vastaus.
     */
    const body = await request.json().catch(() => ({}));

    const reply =
      typeof body?.reply === "string"
        ? body.reply.trim()
        : "";

    if (reply.length < 2 || reply.length > 6000) {
      return NextResponse.json(
        {
          error: "Vastauksen pitää olla 2–6000 merkkiä pitkä.",
        },
        { status: 400 }
      );
    }

    const admin = createAdminClient();

    /*
     * 4. Hae alkuperäinen tiedustelu.
     */
    const { data: inquiry, error: fetchError } = await admin
      .from("support_inquiries")
      .select(
        "id,user_id,email,name,topic,message,status"
      )
      .eq("id", inquiryId)
      .maybeSingle();

    if (fetchError) {
      console.error(
        "Tiedustelun haku vastausta varten epäonnistui:",
        fetchError
      );

      return NextResponse.json(
        {
          error: `Tiedustelun haku epäonnistui: ${fetchError.message}`,
        },
        { status: 500 }
      );
    }

    if (!inquiry) {
      return NextResponse.json(
        { error: "Tiedustelua ei löytynyt." },
        { status: 404 }
      );
    }

    if (inquiry.status === "answered") {
      return NextResponse.json(
        {
          error: "Tähän tiedusteluun on jo vastattu.",
        },
        { status: 409 }
      );
    }

    /*
     * 5. Vierailija:
     * vastaus pitää ensin saada sähköpostiin onnistuneesti.
     *
     * Kirjautunut käyttäjä:
     * Resendiä EI tarvita, koska vastaus näkyy hänen /kysy-sivullaan.
     */
    let emailSentAt: string | null = null;

    if (!inquiry.user_id) {
      try {
        await sendGuestReply({
          to: inquiry.email,
          subject: `ValintaGuru vastasi tiedusteluusi: ${inquiry.topic}`,
          html: buildGuestReplyEmail({
            name: inquiry.name,
            topic: inquiry.topic,
            originalMessage: inquiry.message,
            reply,
          }),
        });

        emailSentAt = new Date().toISOString();
      } catch (emailError) {
        const message =
          emailError instanceof Error
            ? emailError.message
            : "Sähköpostin lähettäminen epäonnistui.";

        console.error(
          "Vierailijan tiedusteluvastauksen sähköposti epäonnistui:",
          emailError
        );

        return NextResponse.json(
          {
            error: message,
            requiresResend: !process.env.RESEND_API_KEY?.trim(),
          },
          {
            status: process.env.RESEND_API_KEY?.trim()
              ? 502
              : 503,
          }
        );
      }
    }

    /*
     * 6. Tallenna vastaus vasta kun toimitustapa on kunnossa.
     */
    const now = new Date().toISOString();

    const { data, error } = await admin
      .from("support_inquiries")
      .update({
        admin_reply: reply,
        status: "answered",
        answered_at: now,
        answered_by: user.id,
        reply_read_at: null,
        reply_email_sent_at: emailSentAt,
        updated_at: now,
      })
      .eq("id", inquiryId)
      .select("*")
      .single();

    if (error) {
      console.error(
        "Admin-vastauksen tallennus epäonnistui:",
        error
      );

      return NextResponse.json(
        {
          error: `Vastauksen tallennus epäonnistui: ${error.message}`,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      delivery: inquiry.user_id ? "account" : "email",
      inquiry: data,
    });
  } catch (error) {
    console.error(
      "Adminin tiedusteluvastaus kaatui:",
      error
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? `Vastauksen käsittely epäonnistui: ${error.message}`
            : "Vastauksen käsittely epäonnistui.",
      },
      { status: 500 }
    );
  }
}
