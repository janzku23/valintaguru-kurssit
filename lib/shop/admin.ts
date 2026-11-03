import "server-only";
import { requireAdminApi } from "@/lib/adminAccess";
import { NextResponse } from "next/server";
import { courses } from "@/data/courses";
import { uuid } from "./core";
import type { Product, Discount } from "./types";
export async function shopAdmin() {
  const ctx = await requireAdminApi();
  if ("error" in ctx) return ctx;
  if (!ctx.user.email_confirmed_at)
    return {
      error: NextResponse.json(
        { error: "Vahvista ylläpitäjän sähköpostiosoite." },
        { status: 403 },
      ),
    };
  return ctx;
}
function text(v: unknown, max: number, required = false) {
  if (typeof v !== "string" || v.length > max || (required && !v.trim()))
    throw new Error("Virheellinen kenttä.");
  return v.trim();
}
function integer(v: unknown, min: number, max: number) {
  if (typeof v !== "number" || !Number.isSafeInteger(v) || v < min || v > max)
    throw new Error("Virheellinen lukuarvo.");
  return v;
}
export function validateProduct(b: Record<string, unknown>): Partial<Product> {
  const ids = Array.isArray(b.course_ids) ? b.course_ids : [];
  if (
    !ids.length ||
    new Set(ids).size !== ids.length ||
    !ids.every(
      (id) => typeof id === "string" && courses.some((c) => c.id === id),
    )
  )
    throw new Error("Virheellinen kurssivalinta.");
  const slug = text(b.slug, 80, true);
  if (!/^[a-z0-9-]+$/.test(slug)) throw new Error("Virheellinen slug.");
  const price = integer(b.price_cents, 1, 99999999);
  const sale =
    b.sale_price_cents === null
      ? null
      : integer(b.sale_price_cents, 1, price - 1);
  const vat = b.vat_percentage === null ? null : Number(b.vat_percentage);
  if (
    vat !== null &&
    (!Number.isFinite(vat) ||
      vat < 0 ||
      vat > 100 ||
      Math.round(vat * 10) !== vat * 10)
  )
    throw new Error("Virheellinen ALV.");
  const days =
    b.access_unlimited === true ? null : integer(b.access_days, 1, 3650);
  const kind = b.legal_kind === null ? null : b.legal_kind;
  if (kind !== null && kind !== "digital_content" && kind !== "service")
    throw new Error("Virheellinen toimituslaji.");
  const image = b.image_url ? text(b.image_url, 500) : null;
  if (
    image &&
    (!image.startsWith("/") ||
      image.startsWith("//") ||
      image.includes("..") ||
      !/^\/[a-z0-9/_ .-]+\.(png|jpe?g|webp|avif)$/i.test(image))
  )
    throw new Error("Tuotekuvan on oltava sivuston paikallinen polku.");
  if (b.published === true && (!b.reviewed || vat === null || kind === null))
    throw new Error("Vahvista ALV, kesto ja toimituslaji ennen julkaisua.");
  return {
    slug,
    name: text(b.name, 160, true),
    description: text(b.description, 5000),
    category: text(b.category, 100),
    content: text(b.content, 10000),
    audience: text(b.audience, 2000),
    price_cents: price,
    sale_price_cents: sale,
    vat_percentage: vat,
    course_ids: ids as string[],
    access_days: days,
    legal_kind: kind,
    published: b.published === true,
    visible: b.visible === true,
    reviewed: b.reviewed === true,
    archived: b.archived === true,
    sort_order: integer(b.sort_order, -100000, 100000),
    image_url: image,
    currency: "EUR",
    updated_at: new Date().toISOString(),
  };
}
export function validateDiscount(
  b: Record<string, unknown>,
): Partial<Discount> {
  const code = text(b.code, 40, true).toUpperCase();
  if (!/^[A-Z0-9_-]{3,40}$/.test(code)) throw new Error("Virheellinen koodi.");
  if (b.kind !== "percent" && b.kind !== "fixed")
    throw new Error("Virheellinen alennustyyppi.");
  const ids = b.product_ids;
  if (!Array.isArray(ids) || ids.length > 200 || !ids.every(uuid))
    throw new Error("Virheellinen tuoterajaus.");
  const start = text(b.starts_at, 50, true),
    end = b.ends_at ? text(b.ends_at, 50) : null;
  if (
    !Number.isFinite(Date.parse(start)) ||
    (end &&
      (!Number.isFinite(Date.parse(end)) ||
        Date.parse(end) <= Date.parse(start)))
  )
    throw new Error("Virheellinen voimassaoloaika.");
  return {
    code,
    kind: b.kind,
    value: integer(b.value, 1, b.kind === "percent" ? 100 : 99999999),
    active: b.active === true,
    starts_at: new Date(start).toISOString(),
    ends_at: end ? new Date(end).toISOString() : null,
    max_uses: b.max_uses === null ? null : integer(b.max_uses, 1, 1000000),
    product_ids: ids,
  };
}
