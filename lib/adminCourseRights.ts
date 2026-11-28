export type AdminCourseRightRow = {
  course_id?: string | null;
  course_slug?: string | null;
  status?: string | null;
  shop_manual_access?: boolean;
  shop_access_until?: string | null;
};

export function getActiveCourseIdsForEditor(
  rows: AdminCourseRightRow[],
  now = Date.now(),
): string[] {
  return Array.from(new Set(rows.filter((row) => {
    const status = row.status?.trim().toLowerCase();
    if (!status || !["active", "enabled", "käytössä", "kaytossa"].includes(status)) {
      return false;
    }
    if (!row.shop_manual_access && row.shop_access_until) {
      const expiresAt = new Date(row.shop_access_until).getTime();
      if (!Number.isFinite(expiresAt) || expiresAt <= now) return false;
    }
    return true;
  }).map((row) => row.course_id ?? row.course_slug)
    .filter((id): id is string => Boolean(id))));
}
