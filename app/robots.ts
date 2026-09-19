import type { MetadataRoute } from "next";

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
    sitemap: "https://valintaguru.fi/sitemap.xml",
    host: "https://valintaguru.fi",
  };
}
