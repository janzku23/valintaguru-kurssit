import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/adminAccess";
import { BLOG_FIELDS, validateBlogInput } from "@/lib/blog/model";

export async function POST(request: Request) {
  const auth = await requireAdminApi();
  if ("error" in auth) return auth.error;
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return NextResponse.json({ error: "Virheellinen pyynnön alkuperä." }, { status: 403 });
  let input;
  try { input = validateBlogInput(await request.json()); }
  catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : "Virheellinen kirjoitus." }, { status: 400 }); }
  const { id, revision, published, ...fields } = input;
  let publishedAt: string | null = null;
  if (id) {
    const { data, error } = await auth.admin.from("blog_posts").select("published_at").eq("id", id).maybeSingle();
    if (error) return NextResponse.json({ error: "Kirjoitusta ei voitu hakea." }, { status: 500 });
    if (!data) return NextResponse.json({ error: "Kirjoitusta ei löytynyt." }, { status: 404 });
    publishedAt = data.published_at;
  }
  const row = { ...fields, published_at: published ? publishedAt || new Date().toISOString() : null };
  const query = id ? auth.admin.from("blog_posts").update(row).eq("id", id).eq("updated_at", revision!)
    : auth.admin.from("blog_posts").insert(row);
  const { data, error } = await query.select(BLOG_FIELDS).maybeSingle();
  if (error) {
    console.error("Blog save failed", error.code);
    return NextResponse.json({ error: error.code === "23505" ? "Tämä osoite on jo käytössä. Valitse toinen osoite." : "Tallennus epäonnistui. Yritä uudelleen." }, { status: error.code === "23505" ? 409 : 500 });
  }
  if (!data) return NextResponse.json({ error: "Kirjoitusta on muutettu toisessa ikkunassa. Päivitä sivu ennen tallentamista." }, { status: 409 });
  return NextResponse.json({ post: data });
}

export async function DELETE(request: Request) {
  const auth = await requireAdminApi();
  if ("error" in auth) return auth.error;
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return NextResponse.json({ error: "Virheellinen pyynnön alkuperä." }, { status: 403 });
  let input: { id: string; revision: string };
  try {
    const body = await request.json();
    if (!body || typeof body.id !== "string" || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(body.id)
      || typeof body.revision !== "string" || !Number.isFinite(Date.parse(body.revision))) throw new Error();
    input = { id: body.id, revision: body.revision };
  } catch { return NextResponse.json({ error: "Virheellinen poistopyyntö. Päivitä sivu ja yritä uudelleen." }, { status: 400 }); }
  const { data, error } = await auth.admin.from("blog_posts").delete()
    .eq("id", input.id).eq("updated_at", input.revision).select("id").maybeSingle();
  if (error) return NextResponse.json({ error: "Kirjoitusta ei voitu poistaa. Yritä uudelleen." }, { status: 500 });
  if (!data) return NextResponse.json({ error: "Kirjoitusta on muutettu tai se on jo poistettu. Päivitä sivu ennen poistamista." }, { status: 409 });
  return NextResponse.json({ deleted: true });
}
