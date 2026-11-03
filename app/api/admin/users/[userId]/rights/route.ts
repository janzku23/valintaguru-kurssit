import { NextResponse } from "next/server";
import { courses } from "@/data/courses";
import { requireAdminApi } from "@/lib/adminAccess";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ userId: string }> };

export async function PUT(request: Request, { params }: Params) {
  const ctx = await requireAdminApi();
  if ("error" in ctx) return ctx.error;

  const { userId } = await params;
  const body = (await request.json()) as { courseIds?: unknown };
  const requested = Array.isArray(body.courseIds)
    ? body.courseIds.filter(
        (value): value is string => typeof value === "string",
      )
    : [];

  const available = new Map<string, (typeof courses)[number]>(
    courses.map((course) => [course.id, course]),
  );
  const courseIds = Array.from(
    new Set(requested.map((id) => id.trim()).filter((id) => available.has(id))),
  );

  const { data: authData, error: authError } =
    await ctx.admin.auth.admin.getUserById(userId);
  if (authError || !authData.user) {
    return NextResponse.json(
      { error: "Käyttäjää ei löytynyt." },
      { status: 404 },
    );
  }

  const { error } = await ctx.admin.rpc("shop_manual_rights", {
    p_user: userId,
    p_courses: courseIds.map((id) => ({ id, title: available.get(id)!.title })),
  });
  if (error) {
    // Before the shop migration, preserve the existing manual-rights workflow.
    // Never bypass the provenance-aware RPC if any shop schema is present or its state is unknown.
    if (error.code !== "PGRST202") {
      return NextResponse.json(
        {
          error:
            "Kurssioikeuksia ei voitu tallentaa. Maksettuja oikeuksia ei poistettu.",
        },
        { status: 500 },
      );
    }
    const { error: schemaError } = await ctx.admin
      .from("shop_orders")
      .select("id")
      .limit(1);
    if (!schemaError || !["PGRST205", "42P01"].includes(schemaError.code)) {
      return NextResponse.json(
        {
          error:
            "Kaupan oikeushallinta odottaa tietokannan rajapinnan päivitystä. Yritä myöhemmin uudelleen.",
        },
        { status: 503 },
      );
    }
    const { error: deleteError } = await ctx.admin
      .from("student_courses")
      .delete()
      .eq("user_id", userId);
    if (deleteError) {
      return NextResponse.json(
        { error: "Manuaalisten oikeuksien tallennus epäonnistui." },
        { status: 500 },
      );
    }
    if (courseIds.length) {
      const email = authData.user.email?.trim().toLowerCase() ?? "";
      const rows = courseIds.map((id) => ({
        user_id: userId,
        email,
        course_id: id,
        course_slug: id,
        course_title: available.get(id)!.title,
        title: available.get(id)!.title,
        status: "käytössä",
      }));
      const { error: saveError } = await ctx.admin
        .from("student_courses")
        .upsert(rows, { onConflict: "user_id,course_id" });
      if (saveError)
        return NextResponse.json(
          { error: "Manuaalisten oikeuksien tallennus epäonnistui." },
          { status: 500 },
        );
    }
  }

  return NextResponse.json({ success: true, courseIds });
}
