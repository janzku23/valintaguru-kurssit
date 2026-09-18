import { NextResponse } from "next/server";
import { createAdminClient } from "@/utils/supabase/admin";
import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json(
        { error: "Kirjautuminen vaaditaan." },
        { status: 401 }
      );
    }

    const { id } = await params;
    const inquiryId = typeof id === "string" ? id.trim() : "";

    if (!inquiryId) {
      return NextResponse.json(
        { error: "Tiedustelun tunniste puuttuu." },
        { status: 400 }
      );
    }

    const admin = createAdminClient();

    /*
     * Hae ensin tiedustelu ja varmista, että se kuuluu juuri
     * kirjautuneelle käyttäjälle.
     */
    const { data: inquiry, error: fetchError } = await admin
      .from("support_inquiries")
      .select("id,user_id,answered_at,reply_read_at")
      .eq("id", inquiryId)
      .eq("user_id", user.id)
      .maybeSingle();

    if (fetchError) {
      console.error("Tiedustelun haku kuittausta varten epäonnistui:", fetchError);

      return NextResponse.json(
        { error: `Tiedustelun haku epäonnistui: ${fetchError.message}` },
        { status: 500 }
      );
    }

    if (!inquiry) {
      return NextResponse.json(
        { error: "Tiedustelua ei löytynyt." },
        { status: 404 }
      );
    }

    if (!inquiry.answered_at) {
      return NextResponse.json(
        { error: "Tähän tiedusteluun ei ole vielä vastattu." },
        { status: 409 }
      );
    }

    /*
     * Jos vastaus on jo kuitattu, palautetaan onnistuminen.
     * Näin painikkeen tuplaklikkaus ei aiheuta ongelmaa.
     */
    if (inquiry.reply_read_at) {
      return NextResponse.json({
        success: true,
        replyReadAt: inquiry.reply_read_at,
      });
    }

    const replyReadAt = new Date().toISOString();

    const { data, error } = await admin
      .from("support_inquiries")
      .update({
        reply_read_at: replyReadAt,
        updated_at: replyReadAt,
      })
      .eq("id", inquiryId)
      .eq("user_id", user.id)
      .select("id,reply_read_at")
      .single();

    if (error) {
      console.error("Vastauksen kuittaus epäonnistui:", error);

      return NextResponse.json(
        { error: `Vastauksen kuittaus epäonnistui: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      replyReadAt: data.reply_read_at,
    });
  } catch (error) {
    console.error("Vastauksen kuittausreitti kaatui:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Vastauksen kuittaus epäonnistui.",
      },
      { status: 500 }
    );
  }
}
