import type { Course } from "./types";
import { COURSE_PURCHASE_URLS } from "./purchase";

export const yoCourse = {
  id: "yo",
  title: "YO-kokeet",
  label: "YO",
  description:
    "Ylioppilaskokeisiin valmistava kurssikokonaisuus, joka sisältää teoriaa, harjoituksia, flashcardeja, edistymisen ja GuruPeli",
  purchaseUrl: COURSE_PURCHASE_URLS.yo,
  modules: [
    {
      id: "yo-teoria",
      title: "Teoria",
      description: "Biologian, kemian, fysiikan ja muiden YO-aineiden teoriaosuudet aiheittain.",
      href: "/kurssi/yo/teoria",
    },
    {
      id: "yo-harjoitukset",
      title: "Harjoitukset",
      description: "Monivalinnat, minitestit ja oppiainekohtaiset tehtäväkokonaisuudet.",
      href: "/kurssi/yo/harjoitukset",
    },
    {
      id: "yo-flashcardit",
      title: "Flashcardit",
      description: "Keskeiset käsitteet, määritelmät ja tärkeät asiat nopeaan kertaukseen.",
      href: "/kurssi/yo/flashcardit",
    },
    {
      id: "yo-edistyminen",
      title: "Edistyminen",
      description: "Seuraa YO-harjoittelusi edistymistä.",
      href: "/kurssi/yo/edistyminen",
    },
    {
      id: "yo-gurupath",
      title: "GuruPath",
      description: "YO-kokeiden oma GuruPath-polku.",
      href: "/gurupath/yo",
    },
  ],
} satisfies Course;
