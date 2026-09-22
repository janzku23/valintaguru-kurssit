import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.valintaguru.fi";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${siteUrl}/valintakoe-g`,
      changeFrequency: "weekly",
      priority: 0.95,
    },

    {
      url: `${siteUrl}/valintakoe-g-pisterajat`,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${siteUrl}/oikeustiede`,
      changeFrequency: "weekly",
      priority: 0.95,
    },

    {
      url: `${siteUrl}/tietoa-meista`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${siteUrl}/blogi`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}