import { NextResponse } from "next/server";
import { ADMIN_EMAIL } from "@/lib/adminAccess";
import { createClient } from "@/utils/supabase/server";
import {
  ANNOUNCEMENT_FIELDS,
  ANNOUNCEMENT_PAGE_SIZE,
  announcementCursor,
  parseAnnouncementCursor,
  type Announcement,
} from "@/lib/announcements/model";

function json(body: unknown, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "private, no-store", Vary: "Cookie" },
  });
}

export async function GET(request: Request) {
  const supabase = await createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return json({ error: "Kirjaudu sisään lukeaksesi tiedotteet." }, 401);
  }

  let cursor;
  try {
    cursor = parseAnnouncementCursor(new URL(request.url).searchParams.get("cursor"));
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : "Virheellinen sivupyyntö." }, 400);
  }

  let query = supabase.from("announcements").select(ANNOUNCEMENT_FIELDS)
    .order("created_at", { ascending: false })
    .order("id", { ascending: false })
    .limit(ANNOUNCEMENT_PAGE_SIZE + 1);

  if (cursor) {
    query = query.or(`created_at.lt.${cursor.createdAt},and(created_at.eq.${cursor.createdAt},id.lt.${cursor.id})`);
  }

  const { data, error } = await query;
  if (error) {
    console.error("Announcement fetch failed", error.code);
    return json({ error: "Tiedotteita ei saatu ladattua. Yritä uudelleen." }, 500);
  }

  const rows = (data ?? []) as Announcement[];
  const announcements = rows.slice(0, ANNOUNCEMENT_PAGE_SIZE);
  return json({
    announcements,
    nextCursor: rows.length > ANNOUNCEMENT_PAGE_SIZE
      ? announcementCursor(announcements[announcements.length - 1]) : null,
    canManage: user.email?.trim().toLowerCase() === ADMIN_EMAIL,
  });
}
