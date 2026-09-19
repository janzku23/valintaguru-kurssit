import type { Course } from "./types";
import { COURSE_PURCHASE_URLS } from "./purchase";

export const oikisTehoCourse = {
  id: "oikis-teho",
  title: "Oikis Teho",
  label: "Oikis Teho",
  description:
    "Oikiksen Teho-valmennuskurssi omana teknisenä kurssinaan, omilla teoria-, harjoitus-, flashcard-, edistymis- ja GuruPeli-sisällöillään.",
  purchaseUrl:
    COURSE_PURCHASE_URLS[
      "oikis-teho"
    ],
  modules: [
    {
      id: "oikis-teho-teoria",
      title: "Teoria",
      description:
        "Oikis Tehon oma teoriaosuus.",
      href:
        "/kurssi/oikis-teho/teoria",
    },
    {
      id:
        "oikis-teho-harjoitukset",
      title: "Harjoitukset",
      description:
        "Oikis Tehon omat harjoitukset.",
      href:
        "/kurssi/oikis-teho/harjoitukset",
    },
    {
      id:
        "oikis-teho-flashcardit",
      title: "Flashcardit",
      description:
        "Oikis Tehon omat flashcardit.",
      href:
        "/kurssi/oikis-teho/flashcardit",
    },
    {
      id:
        "oikis-teho-edistyminen",
      title: "Edistyminen",
      description:
        "Seuraa juuri tämän kurssin edistymistä.",
      href:
        "/kurssi/oikis-teho/edistyminen",
    },
    {
      id:
        "oikis-teho-gurupath",
      title: "GuruPeli",
      description:
        "Oikis Tehon oma pelillinen kurssipolku.",
      href:
        "/gurupath/oikis-teho",
    },
  ],
} satisfies Course;
