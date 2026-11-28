import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/adminAccess";
import {
  ANNOUNCEMENT_FIELDS,
  isAnnouncementId,
  validateAnnouncementInput,
} from "@/lib/announcements/model";

function hasInvalidOrigin(request: Request) {
  const origin = request.headers.get("origin");
  return origin !== null && origin !== new URL(request.url).origin;
}

export async function POST(request: Request) {
  const auth = await requireAdminApi();
  if ("error" in auth) return auth.error;
  if (hasInvalidOrigin(request)) {
    return NextResponse.json({ error: "Virheellinen pyynnön alkuperä." }, { status: 403 });
  }

  let input;
  try {
    input = validateAnnouncementInput(await request.json());
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Tarkista tiedotteen tiedot." }, { status: 400 });
  }

  const { data, error } = await auth.admin.from("announcements")
    .insert(input).select(ANNOUNCEMENT_FIELDS).single();
  if (error) {
    console.error("Announcement creation failed", error.code);
    return NextResponse.json({ error: "Tiedotetta ei voitu julkaista. Yritä uudelleen." }, { status: 500 });
  }
  return NextResponse.json({ announcement: data }, { status: 201 });
}

export async function DELETE(request: Request) {
  const auth = await requireAdminApi();
  if ("error" in auth) return auth.error;
  if (hasInvalidOrigin(request)) {
    return NextResponse.json({ error: "Virheellinen pyynnön alkuperä." }, { status: 403 });
  }

  let id: string;
  try {
    const body = await request.json();
    if (!isAnnouncementId(body?.id)) throw new Error();
    id = body.id;
  } catch {
    return NextResponse.json({ error: "Virheellinen poistopyyntö." }, { status: 400 });
  }

  const { data, error } = await auth.admin.from("announcements")
    .delete().eq("id", id).select("id").maybeSingle();
  if (error) {
    return NextResponse.json({ error: "Tiedotetta ei voitu poistaa. Yritä uudelleen." }, { status: 500 });
  }
  if (!data) return NextResponse.json({ error: "Tiedote on jo poistettu. Päivitä lista." }, { status: 404 });
  return NextResponse.json({ deleted: true });
}
