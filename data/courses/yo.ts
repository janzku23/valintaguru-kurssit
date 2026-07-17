import type { Course } from "./types";

export const yoCourse = {
  id: "yo",
  title: "YO-valmennus",
  label: "YO",
  description:
    "Ylioppilaskokeisiin valmistava kurssikokonaisuus, joka sisältää teoriaa, harjoituksia ja kertaamista eri oppiaineista.",

  modules: [
    {
      id: "yo-teoria",
      title: "Teoria",
      description:
        "Biologian, kemian, fysiikan ja muiden YO-aineiden teoriaosuudet aiheittain.",
      href: "/kurssi/yo/teoria",
    },
    {
      id: "yo-harjoitukset",
      title: "Harjoitukset",
      description:
        "Monivalinnat, minitestit ja oppiainekohtaiset tehtäväkokonaisuudet.",
      href: "/kurssi/yo/harjoitukset",
    },
    {
      id: "yo-flashcardit",
      title: "Flashcardit",
      description:
        "Keskeiset käsitteet, määritelmät ja tärkeät asiat nopeaan kertaukseen.",
      href: "/kurssi/yo/flashcardit",
    },
    {
      id: "yo-kokeet",
      title: "YO-harjoitukset",
      description:
        "Koetyyppiset tehtävät ja laajemmat ylioppilaskoetta jäljittelevät kokonaisuudet.",
      href: "/kurssi/yo/kokeet",
    },
  ],
} satisfies Course;