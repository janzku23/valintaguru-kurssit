import type { Course } from "./types";

export const oikisCourse = {
  id: "oikis",
  title: "Oikeustiede",
  label: "Oikis",
  description: "Oikeustieteen valintakokeeseen liittyvä teoria, harjoitukset ja koetyyppiset tehtävät.",
  modules: [
    {
      id: "oikis-teoria",
      title: "Teoria",
      description: "Oikiksen teoriaosuudet ja aihekohtaiset materiaalit.",
      href: "/kurssi/oikis/teoria",
    },
    {
      id: "oikis-harjoitukset",
      title: "Harjoitukset",
      description: "Aiheharjoitukset sekä ajastetut Koe 1, Koe 2 ja muut harjoituskokeet.",
      href: "/kurssi/oikis/harjoitukset",
    },
    {
      id: "oikis-flashcardit",
      title: "Flashcardit",
      description: "Keskeiset käsitteet nopeaan kertaamiseen.",
      href: "/kurssi/oikis/flashcardit",
    },
  ],
} satisfies Course;
