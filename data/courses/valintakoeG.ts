import type { Course } from "./types";
import { COURSE_PURCHASE_URLS } from "./purchase";

export const valintakoeGCourse = {
  id: "valintakoe-g",
  title: "Valintakoe G tehokurssi",
  label: "Valintakoe G",
  description:
    "Yhteisen valintakoeosion päättelyyn, aineiston tulkintaan ja tekstinymmärtämiseen valmistava kurssikokonaisuus.",
  purchaseUrl:
    COURSE_PURCHASE_URLS[
      "valintakoe-g"
    ],
  modules: [
    {
      id: "g-teoria",
      title: "Teoria",
      description:
        "Valintakoe G:n omat teoriaosuudet.",
      href:
        "/kurssi/valintakoe-g/teoria",
    },
    {
      id: "g-harjoitukset",
      title: "Harjoitukset",
      description:
        "Päättely-, aineisto-, taulukko- ja tekstinymmärrystehtävät.",
      href:
        "/kurssi/valintakoe-g/harjoitukset",
    },
    {
      id: "g-flashcardit",
      title: "Flashcardit",
      description:
        "Keskeiset käsitteet ja toimintatavat nopeaan kertaamiseen.",
      href:
        "/kurssi/valintakoe-g/flashcardit",
    },
    {
      id: "g-edistyminen",
      title: "Edistyminen",
      description:
        "Seuraa Valintakoe G -harjoittelusi edistymistä.",
      href:
        "/kurssi/valintakoe-g/edistyminen",
    },
    {
      id: "g-gurupath",
      title: "GuruPeli",
      description:
        "Valintakoe G:n oma pelillinen kurssipolku.",
      href:
        "/gurupath/valintakoe-g",
    },
  ],
} satisfies Course;
