import type { Course } from "./types";

export const valintakoeGCourse = {
  id: "valintakoe-g",
  title: "Valintakoe G",
  label: "Valintakoe G",
  description:
    "Yhteisen valintakoeosion päättelyyn, aineiston tulkintaan ja tekstinymmärtämiseen valmistava kurssikokonaisuus.",

  modules: [
    {
      id: "g-teoria",
      title: "Teoria",
      description:
        "Valintakoe G:n päättelyä, aineiston lukemista ja tekstinymmärtämistä tukevat teoriaosuudet.",
      href: "/kurssi/valintakoe-g/teoria",
    },
    {
      id: "g-harjoitukset",
      title: "Harjoitukset",
      description:
        "Päättely-, aineisto-, taulukko- ja tekstinymmärrystehtävät.",
      href: "/kurssi/valintakoe-g/harjoitukset",
    },
    {
      id: "g-flashcardit",
      title: "Flashcardit",
      description:
        "Keskeiset käsitteet ja toimintatavat nopeaan kertaamiseen.",
      href: "/kurssi/valintakoe-g/flashcardit",
    },
    {
      id: "g-kokeet",
      title: "Harjoituskokeet",
      description:
        "Koetyyppiset tehtäväkokonaisuudet ja ajastetut harjoituskokeet.",
      href: "/kurssi/valintakoe-g/kokeet",
    },
  ],
} satisfies Course;