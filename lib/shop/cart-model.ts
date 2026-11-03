export function cartWithoutOverlap(
  ids: string[],
  incoming: { id: string; course_ids: string[] },
  products: { id: string; course_ids: string[] }[],
) {
  if (ids.includes(incoming.id)) return ids;
  if (
    products.some(
      (p) =>
        ids.includes(p.id) &&
        p.course_ids.some((c) => incoming.course_ids.includes(c)),
    )
  )
    throw new Error("Tämä kurssioikeus sisältyy jo ostoskoriisi.");
  return [...ids, incoming.id];
}
