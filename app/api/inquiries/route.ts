import { NextResponse } from "next/server";
import { createAdminClient } from "@/utils/supabase/admin";
import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";

const NOTIFICATION_EMAIL = "info@valintaguru.fi";

function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/**
 * Kehitysaikainen terveystarkistus.
 *
 * Kun avaat localhostissa:
 * http://localhost:3000/api/inquiries
 *
 * saat JSON-vastauksen, josta näet suoraan:
 * - löytyykö Supabase URL
 * - löytyykö anon key
 * - löytyykö service role key
 * - löytyykö support_inquiries-taulu
 * - löytyykö Resend-avain
 *
 * Avainten arvoja ei koskaan palauteta selaimeen.
 */
export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({
      ok: true,
      route: "/api/inquiries",
    });
  }

  const env = {
    supabaseUrl: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),
    supabaseAnonKey: Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
    serviceRoleKey: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
    resendApiKey: Boolean(process.env.RESEND_API_KEY),
  };

  let table = {
    ok: false,
    error: null as string | null,
  };

  if (env.supabaseUrl && env.serviceRoleKey) {
    try {
      const admin = createAdminClient();

      const { error } = await admin
        .from("support_inquiries")
        .select("id")
        .limit(1);

      if (error) {
        table = {
          ok: false,
          error: error.message,
        };
      } else {
        table = {
          ok: true,
          error: null,
        };
      }
    } catch (error) {
      table = {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "Supabase-tarkistus epäonnistui.",
      };
    }
  }

  const criticalOk =
    env.supabaseUrl &&
    env.supabaseAnonKey &&
    env.serviceRoleKey &&
    table.ok;

  return NextResponse.json({
    ok: criticalOk,
    route: "/api/inquiries",
    environment: env,
    supportInquiriesTable: table,
    note: env.resendApiKey
      ? "Tiedustelut voidaan tallentaa ja sähköpostiheräte on käytössä."
      : "Resend puuttuu, mutta tiedustelun tallennuksen pitäisi silti toimia.",
  });
}

async function sendNotificationEmail(input: {
  inquiryId: string;
  email: string;
  name: string | null;
  topic: string;
  message: string;
}) {
  const resendApiKey = process.env.RESEND_API_KEY;

  /*
   * Resend EI saa estää tiedustelun tallentamista.
   * Localhostissa ominaisuutta voidaan testata ilman Resendiä.
   */
  if (!resendApiKey) {
    console.warn(
      "RESEND_API_KEY puuttuu. Tiedustelu tallennettiin, mutta sähköpostiherätettä ei lähetetty."
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
      to: [NOTIFICATION_EMAIL],
      subject: `Uusi tiedustelu ValintaGurussa: ${input.topic}`,
      text: [
        "ValintaGuruun on saapunut uusi tiedustelu.",
        "",
        `Tiedustelun ID: ${input.inquiryId}`,
        `Nimi: ${input.name || "Ei ilmoitettu"}`,
        `Sähköposti: ${input.email}`,
        `Aihe: ${input.topic}`,
        "",
        "Viesti:",
        input.message,
        "",
        "Kirjaudu ValintaGurun admin-näkymään vastataksesi.",
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");

    console.error(
      "Tiedustelun sähköpostiheräte epäonnistui:",
      response.status,
      errorText
    );

    return false;
  }

  return true;
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Virheellinen pyyntö." },
        { status: 400 }
      );
    }

    /*
     * Honeypot bottien varalle.
     */
    const company =
      typeof body.company === "string"
        ? body.company.trim()
        : "";

    if (company) {
      return NextResponse.json(
        {
          success: true,
          delivery: "email",
          message: "Tiedustelu lähetettiin onnistuneesti.",
        },
        { status: 201 }
      );
    }

    const name =
      typeof body.name === "string" && body.name.trim()
        ? body.name.trim().slice(0, 100)
        : null;

    const topic =
      typeof body.topic === "string" && body.topic.trim()
        ? body.topic.trim().slice(0, 160)
        : "Muu kysymys";

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    const submittedEmail =
      typeof body.email === "string"
        ? normalizeEmail(body.email)
        : "";

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Kirjoita vähintään 10 merkkiä pitkä kysymys." },
        { status: 400 }
      );
    }

    if (message.length > 4000) {
      return NextResponse.json(
        { error: "Kysymys on liian pitkä. Enimmäispituus on 4000 merkkiä." },
        { status: 400 }
      );
    }

    /*
     * Tarkistetaan käyttäjä. Vierailija saa olla kirjautumatta.
     */
    let user: { id: string; email?: string | null } | null = null;

    try {
      const userClient = await createClient();

      const {
        data: { user: currentUser },
        error: userError,
      } = await userClient.auth.getUser();

      if (userError) {
        console.warn(
          "Käyttäjää ei saatu tarkistettua, jatketaan vierailijana:",
          userError.message
        );
      }

      user = currentUser;
    } catch (error) {
      console.warn(
        "Supabase user client -tarkistus epäonnistui:",
        error
      );
    }

    const email = user?.email
      ? normalizeEmail(user.email)
      : submittedEmail;

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        {
          error:
            "Anna kelvollinen sähköpostiosoite, jotta voimme vastata kysymykseesi.",
        },
        { status: 400 }
      );
    }

    /*
     * Tämä on tiedustelun kannalta kriittinen kohta.
     * Jos service role puuttuu tai taulua ei ole, palautetaan
     * siitä suora selkokielinen virhe.
     */
    let admin;

    try {
      admin = createAdminClient();
    } catch (error) {
      const detail =
        error instanceof Error
          ? error.message
          : "Supabase admin clientin luonti epäonnistui.";

      console.error(detail);

      return NextResponse.json(
        {
          error:
            `Palvelimen Supabase-asetukset eivät ole kunnossa: ${detail}`,
        },
        { status: 500 }
      );
    }

    const { data, error } = await admin
      .from("support_inquiries")
      .insert({
        user_id: user?.id ?? null,
        email,
        name,
        topic,
        message,
        status: "open",
        admin_reply: null,
        answered_at: null,
        answered_by: null,
        reply_read_at: null,
        reply_email_sent_at: null,
      })
      .select(
        "id,user_id,email,name,topic,message,status,admin_reply,answered_at,reply_read_at,created_at,updated_at"
      )
      .single();

    if (error) {
      console.error(
        "Tiedustelun tallennus Supabaseen epäonnistui:",
        error
      );

      let friendlyError =
        `Supabase ei hyväksynyt tiedustelua: ${error.message}`;

      const lower = error.message.toLowerCase();

      if (
        lower.includes("relation") &&
        lower.includes("support_inquiries")
      ) {
        friendlyError =
          "Supabase-taulua support_inquiries ei löydy. Aja tiedustelujen SQL Supabasen SQL Editorissa.";
      } else if (
        lower.includes("column") &&
        lower.includes("does not exist")
      ) {
        friendlyError =
          `support_inquiries-taulun rakenne ei vastaa koodia: ${error.message}`;
      } else if (
        lower.includes("not-null") ||
        lower.includes("null value")
      ) {
        friendlyError =
          `support_inquiries-taulusta puuttuu pakollinen arvo: ${error.message}`;
      }

      return NextResponse.json(
        {
          error: friendlyError,
          supabaseCode: error.code ?? null,
        },
        { status: 500 }
      );
    }

    let notificationSent = false;

    try {
      notificationSent = await sendNotificationEmail({
        inquiryId: data.id,
        email,
        name,
        topic,
        message,
      });
    } catch (emailError) {
      console.error(
        "Tiedustelu tallennettiin, mutta sähköpostiheräte epäonnistui:",
        emailError
      );
    }

    return NextResponse.json(
      {
        success: true,
        delivery: user ? "account" : "email",
        notificationSent,
        message: "Tiedustelu lähetettiin onnistuneesti.",
        inquiry: data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Tiedustelun POST-reitti kaatui:",
      error
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? `Palvelinvirhe: ${error.message}`
            : "Tiedustelun lähettäminen epäonnistui tuntemattoman palvelinvirheen vuoksi.",
      },
      { status: 500 }
    );
  }
}
