import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "ValintaGuru – Valmennuskurssit valintakoe G ja oikeustieteen eriytyvä osio",
  },
  description:
    "ValintaGuru auttaa valmistautumaan valintakokeisiin. Teoria, harjoituksia, monivalintoja ja opiskelun seurantaa yhdessä palvelussa.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
  },
};

// Lisää yllä oleva metadata nykyiseen app/page.tsx-tiedostoosi.
// Älä korvaa varsinaista etusivukomponenttia tällä esimerkkitiedostolla.
