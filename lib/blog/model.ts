export type BlogPost = {
  id: string; slug: string; title: string; excerpt: string; content: string;
  category: string; author: string; published_at: string | null;
  created_at: string; updated_at: string;
};
export const BLOG_FIELDS = "id,slug,title,excerpt,content,category,author,published_at,created_at,updated_at";
export function blogSlug(title: string) {
  return title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 120).replace(/-$/, "");
}
export function validateBlogInput(input: unknown) {
  if (!input || typeof input !== "object") throw new Error("Virheellinen kirjoitus.");
  const source = input as Record<string, unknown>;
  function field(key: string, label: string, max: number) {
    const value = typeof source[key] === "string" ? source[key].trim() : "";
    if (!value || value.length > max) throw new Error(`${label}: täytä kenttä (enintään ${max} merkkiä).`);
    return value;
  }
  const title = field("title", "Otsikko", 200);
  const slug = typeof source.slug === "string" && source.slug.trim() ? source.slug.trim() : blogSlug(title);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug.length > 120) throw new Error("Osoitteessa sallitaan pienet kirjaimet a–z, numerot ja väliviivat (enintään 120 merkkiä).");
  if (typeof source.published !== "boolean") throw new Error("Valitse julkaisutila.");
  const id = source.id;
  if (id !== undefined && (typeof id !== "string" || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id))) throw new Error("Virheellinen kirjoituksen tunniste.");
  if (id && (typeof source.revision !== "string" || !Number.isFinite(Date.parse(source.revision)))) throw new Error("Päivitä kirjoitus ennen tallentamista.");
  return { id: id as string | undefined, revision: source.revision as string | undefined,
    published: source.published, title, slug,
    excerpt: field("excerpt", "Tiivistelmä", 500), content: field("content", "Sisältö", 100000),
    category: field("category", "Aihe", 80), author: field("author", "Kirjoittaja", 100) };
}
export function readingMinutes(content: string) { return Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200)); }
export function blogDate(value: string) {
  return new Intl.DateTimeFormat("fi-FI", { dateStyle: "long", timeZone: "Europe/Helsinki" }).format(new Date(value));
}
