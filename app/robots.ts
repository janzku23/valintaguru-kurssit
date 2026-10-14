import type { MetadataRoute } from "next";

const siteUrl = "https://www.valintaguru.fi";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",

        disallow: [
          "/api/",
          "/admin/",
          "/dashboard/",
          "/profiili/",
          "/kirjaudu/",
          "/aseta-salasana/",
        ],
      },
    ],

    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}