import type { Course } from "./types";
import { COURSE_PURCHASE_URLS } from "./purchase";

export const oikisCourse = {
  id: "oikis",
  title: "Kyssäripankki (Oikis)",
  label: "Oikis · Kyssäripankki",
  description:
    "Oikeustieteen valintakokeeseen liittyvä teoria, harjoitukset, flashcardit ja oma GuruPath-polku.",
  purchaseUrl: COURSE_PURCHASE_URLS.oikis,
  modules: [
    {
      id: "oikis-teoria",
      title: "Teoria",
      description: "Kurssin omat teoriaosuudet ja aihekohtaiset materiaalit.",
      href: "/kurssi/oikis/teoria",
    },
    {
      id: "oikis-harjoitukset",
      title: "Harjoitukset",
      description: "Monivalinnat, aineistotehtävät ja minitestit.",
      href: "/kurssi/oikis/harjoitukset",
    },
    {
      id: "oikis-flashcardit",
      title: "Flashcardit",
      description: "Keskeiset käsitteet nopeaan kertaamiseen.",
      href: "/kurssi/oikis/flashcardit",
    },
    {
      id: "oikis-edistyminen",
      title: "Edistyminen",
      description: "Seuraa tämän kurssin tehtävistä kertyvää edistymistä.",
      href: "/kurssi/oikis/edistyminen",
    },
    {
      id: "oikis-gurupath",
      title: "GuruPath",
      description: "Etene Kyssäripankin omalla pelillisellä kurssipolulla.",
      href: "/gurupath/oikis",
    },
  ],
} satisfies Course;
