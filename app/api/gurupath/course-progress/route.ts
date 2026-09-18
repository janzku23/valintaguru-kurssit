import { NextResponse } from "next/server";
import { createSupabaseServerUser } from "@/lib/supabase/server-user";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
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

  const { searchParams } = new URL(request.url);
  const courseId =
    searchParams.get("courseId")?.trim();

  if (!courseId) {
    return NextResponse.json(
      { error: "courseId puuttuu." },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("guru_game_events")
    .select("source,source_id,created_at")
    .eq("user_id", user.id)
    .eq("course_id", courseId)
    .in("source", ["path-node", "vault"])
    .order("created_at", {
      ascending: true,
    });

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    completed: (data ?? [])
      .filter(
        (
          row
        ): row is {
          source: "path-node" | "vault";
          source_id: string;
          created_at: string;
        } =>
          (row.source === "path-node" ||
            row.source === "vault") &&
          typeof row.source_id === "string"
      )
      .map((row) => ({
        source: row.source,
        sourceId: row.source_id,
      })),
  });
}
