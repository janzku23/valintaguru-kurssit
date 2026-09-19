import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "ValintaGuru – Valmennuskurssit, valintakokeet ja YO-harjoittelu",
  },
  description:
    "ValintaGuru auttaa valmistautumaan valintakokeisiin ja ylioppilaskirjoituksiin. Teoriaa, harjoituksia, monivalintoja ja opiskelun seurantaa yhdessä palvelussa.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
  },
};

// Lisää yllä oleva metadata nykyiseen app/page.tsx-tiedostoosi.
// Älä korvaa varsinaista etusivukomponenttia tällä esimerkkitiedostolla.
