export const ANNOUNCEMENT_PAGE_SIZE = 5;
export const ANNOUNCEMENT_TITLE_LIMIT = 120;
export const ANNOUNCEMENT_CONTENT_LIMIT = 1000;
export const ANNOUNCEMENT_FIELDS = "id,title,content,created_at";

export type Announcement = {
  id: string;
  title: string;
  content: string;
  created_at: string;
};

export type AnnouncementPage = {
  announcements: Announcement[];
  nextCursor: string | null;
  canManage: boolean;
};

export function isAnnouncementId(value: unknown): value is string {
  return typeof value === "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
}

export function validateAnnouncementInput(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error("Tarkista tiedotteen otsikko ja teksti.");
  }
  const input = value as Record<string, unknown>;
  const title = typeof input.title === "string" ? input.title.trim() : "";
  const content = typeof input.content === "string" ? input.content.trim() : "";
  if (!title || title.length > ANNOUNCEMENT_TITLE_LIMIT) {
    throw new Error(`Kirjoita otsikko (1–${ANNOUNCEMENT_TITLE_LIMIT} merkkiä).`);
  }
  if (!content || content.length > ANNOUNCEMENT_CONTENT_LIMIT) {
    throw new Error(`Kirjoita lyhyt tiedote (1–${ANNOUNCEMENT_CONTENT_LIMIT} merkkiä).`);
  }
  return { title, content };
}

export function announcementCursor(announcement: Announcement) {
  return `${announcement.created_at}|${announcement.id}`;
}

export function parseAnnouncementCursor(value: string | null) {
  if (value === null) return null;
  const [createdAt, id, extra] = value.split("|");
  // Preserve PostgreSQL's microseconds and allow only literal filter values.
  if (extra !== undefined || !isAnnouncementId(id)
    || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,6})?(?:Z|[+-]\d{2}:\d{2})$/.test(createdAt)
    || !Number.isFinite(Date.parse(createdAt))) {
    throw new Error("Virheellinen sivupyyntö. Palaa uusimpiin tiedotteisiin.");
  }
  return { createdAt, id };
}

export function formatAnnouncementDate(value: string) {
  return new Intl.DateTimeFormat("fi-FI", {
    day: "numeric", month: "numeric", year: "numeric",
    hour: "2-digit", minute: "2-digit", timeZone: "Europe/Helsinki",
  }).format(new Date(value));
}
