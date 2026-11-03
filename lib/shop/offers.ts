import type { Product } from "./types";

export type CourseOffer = { priceCents: number; href: string };
export type CourseOffers = Record<string, CourseOffer>;

export function courseOffers(
  products: Product[],
  courseIds: string[],
): CourseOffers {
  const offers: CourseOffers = {};
  for (const id of courseIds) {
    const product =
      products.find((p) => p.slug === id && p.course_ids.includes(id)) ??
      products.find((p) => p.course_ids.length === 1 && p.course_ids[0] === id);
    if (product)
      offers[id] = {
        priceCents: product.sale_price_cents ?? product.price_cents,
        href: `/kauppa/${product.slug}`,
      };
  }
  return offers;
}
