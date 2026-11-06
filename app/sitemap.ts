import type { MetadataRoute } from "next";
import { catalog } from "@/lib/shop/server";

// Read the current public catalog at request time, including unpublishing.
export const dynamic = "force-dynamic";

const siteUrl = "https://www.valintaguru.fi";

const LAST_UPDATED = "2026-10-14";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await catalog();
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}/kauppa/${encodeURIComponent(product.slug)}`,
    lastModified: product.updated_at,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [
    {
      url: siteUrl,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/valintakoe-g`,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/valintakoe-g-pisterajat`,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/oikeustiede`,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/tietoa-meista`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/kauppa`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...productPages,
    {
      url: `${siteUrl}/blogi`,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
