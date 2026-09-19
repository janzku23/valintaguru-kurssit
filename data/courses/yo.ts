import type { Course } from "./types";
import { COURSE_PURCHASE_URLS } from "./purchase";

export const yoCourse = {
  id: "yo",
  title: "YO-kokeet",
  label: "YO",
  description:
    "Ylioppilaskokeisiin valmistava kurssikokonaisuus. Kurssi säilyy järjestelmässä, mutta sitä ei tällä hetkellä näytetä ostettavana.",
  purchaseUrl:
    COURSE_PURCHASE_URLS.yo,
  modules: [
    {
      id: "yo-teoria",
      title: "Teoria",
      description:
        "YO-aineiden teoriaosuudet aiheittain.",
      href:
        "/kurssi/yo/teoria",
    },
    {
      id:
        "yo-harjoitukset",
      title: "Harjoitukset",
      description:
        "Monivalinnat, minitestit ja oppiainekohtaiset tehtäväkokonaisuudet.",
      href:
        "/kurssi/yo/harjoitukset",
    },
    {
      id:
        "yo-flashcardit",
      title: "Flashcardit",
      description:
        "Keskeiset käsitteet ja tärkeät asiat nopeaan kertaukseen.",
      href:
        "/kurssi/yo/flashcardit",
    },
    {
      id:
        "yo-edistyminen",
      title: "Edistyminen",
      description:
        "Seuraa YO-harjoittelusi edistymistä.",
      href:
        "/kurssi/yo/edistyminen",
    },
    {
      id:
        "yo-gurupath",
      title: "GuruPeli",
      description:
        "YO-kokeiden oma pelillinen kurssipolku.",
      href:
        "/gurupath/yo",
    },
  ],
} satisfies Course;
