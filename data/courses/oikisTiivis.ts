import type { Course } from "./types";
import { COURSE_PURCHASE_URLS } from "./purchase";

export const oikisTiivisCourse = {
  id: "oikis-tiivis",
  title: "Oikis Tiivis - Ennakkomateriaalin hallintaan",
  label: "Oikis Tiivis",
  description:
    "Oma kurssikokonaisuus ennakkomateriaalin hallintaan: teoria, harjoitukset, flashcardit, edistyminen ja GuruPath.",
  purchaseUrl: COURSE_PURCHASE_URLS["oikis-tiivis"],
  modules: [
    {
      id: "oikis-tiivis-teoria",
      title: "Teoria",
      description: "Oikis Tiiviin oma teoriaosuus.",
      href: "/kurssi/oikis-tiivis/teoria",
    },
    {
      id: "oikis-tiivis-harjoitukset",
      title: "Harjoitukset",
      description: "Oikis Tiiviin omat harjoitukset.",
      href: "/kurssi/oikis-tiivis/harjoitukset",
    },
    {
      id: "oikis-tiivis-flashcardit",
      title: "Flashcardit",
      description: "Oikis Tiiviin omat flashcardit.",
      href: "/kurssi/oikis-tiivis/flashcardit",
    },
    {
      id: "oikis-tiivis-edistyminen",
      title: "Edistyminen",
      description: "Seuraa juuri tämän kurssin edistymistä.",
      href: "/kurssi/oikis-tiivis/edistyminen",
    },
    {
      id: "oikis-tiivis-gurupath",
      title: "GuruPath",
      description: "Oikis Tiiviin oma GuruPath-polku.",
      href: "/gurupath/oikis-tiivis",
    },
  ],
} satisfies Course;
