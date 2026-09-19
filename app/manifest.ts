import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "ValintaGuru",
    short_name: "ValintaGuru",

    description:
      "ValintaGurun valmennuskurssit Valintakoe G:hen ja oikeustieteen eriytyvään osioon.",

    start_url: "/",
    scope: "/",

    display: "standalone",

    background_color: "#ffffff",
    theme_color: "#ffffff",

    lang: "fi-FI",

    categories: ["education"],

    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}