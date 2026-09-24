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
    ? body.courseIds.filter((value): value is string => typeof value === "string")
    : [];

  const available = new Map<string, (typeof courses)[number]>(
    courses.map((course) => [course.id, course])
  );
  const courseIds = Array.from(new Set(requested.map((id) => id.trim()).filter((id) => available.has(id))));

  const { data: authData, error: authError } = await ctx.admin.auth.admin.getUserById(userId);
  if (authError || !authData.user) {
    return NextResponse.json({ error: "Käyttäjää ei löytynyt." }, { status: 404 });
  }

  const email = authData.user.email?.trim().toLowerCase() ?? "";

  const { error: deleteError } = await ctx.admin
    .from("student_courses")
    .delete()
    .eq("user_id", userId);

  if (deleteError) {
    return NextResponse.json({ error: `Vanhojen oikeuksien poisto epäonnistui: ${deleteError.message}` }, { status: 500 });
  }

  if (courseIds.length > 0) {
    const rows = courseIds.map((courseId) => {
      const course = available.get(courseId)!;
      return {
        user_id: userId,
        email,
        course_id: course.id,
        course_slug: course.id,
        course_title: course.title,
        title: course.title,
        status: "käytössä",
      };
    });

    const { error } = await ctx.admin
      .from("student_courses")
      .upsert(rows, { onConflict: "user_id,course_id" });

    if (error) {
      return NextResponse.json({ error: `Kurssioikeuksien tallennus epäonnistui: ${error.message}` }, { status: 500 });
    }
  }

  return NextResponse.json({ success: true, courseIds });
}
