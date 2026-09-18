import type { Course } from "./types";
import { COURSE_PURCHASE_URLS } from "./purchase";

export const oikisTehoCourse = {
  id: "oikis-teho",
  title: "Oikis Teho + Etäopetus",
  label: "Oikis Teho",
  description:
    "Oikis Teho + Etäopetus omana teknisenä kurssinaan, omilla teoria-, harjoitus- ja GuruPeli",
  purchaseUrl: COURSE_PURCHASE_URLS["oikis-teho"],
  modules: [
    {
      id: "oikis-teho-teoria",
      title: "Teoria",
      description: "Oikis Tehon oma teoriaosuus.",
      href: "/kurssi/oikis-teho/teoria",
    },
    {
      id: "oikis-teho-harjoitukset",
      title: "Harjoitukset",
      description: "Oikis Tehon omat harjoitukset.",
      href: "/kurssi/oikis-teho/harjoitukset",
    },
    {
      id: "oikis-teho-flashcardit",
      title: "Flashcardit",
      description: "Oikis Tehon omat flashcardit.",
      href: "/kurssi/oikis-teho/flashcardit",
    },
    {
      id: "oikis-teho-edistyminen",
      title: "Edistyminen",
      description: "Seuraa juuri tämän kurssin edistymistä.",
      href: "/kurssi/oikis-teho/edistyminen",
    },
    {
      id: "oikis-teho-gurupath",
      title: "GuruPath",
      description: "Oikis Tehon oma GuruPath-polku.",
      href: "/gurupath/oikis-teho",
    },
  ],
} satisfies Course;
