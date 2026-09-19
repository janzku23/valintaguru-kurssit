import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ValintaGuru",
    short_name: "ValintaGuru",
    description:
      "Valmennuskurssit ja opiskelupalvelu valintakokeisiin sekä ylioppilaskirjoituksiin.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    lang: "fi",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
