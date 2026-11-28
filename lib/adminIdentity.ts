import "server-only";

export const ADMIN_EMAIL =
  process.env.VALINTAGURU_ADMIN_EMAIL?.trim().toLowerCase() ||
  "admin@valintaguru.fi";

export function isAdminEmail(email: string | null | undefined): boolean {
  return email?.trim().toLowerCase() === ADMIN_EMAIL;
}
