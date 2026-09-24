import type { Course } from "./types";
import { COURSE_PURCHASE_URLS } from "./purchase";

export const oikisTehoEtaopetusCourse = {
  id: "oikis-teho-etaope",
  title:
    "Oikis Teho + Etäopetus",
  label:
    "Oikis Teho + Etäopetus",
  description:
    "",
  purchaseUrl:
    COURSE_PURCHASE_URLS[
      "oikis-teho-etaope"
    ],
  modules: [
    {
      id:
        "oikis-teho-etaope-teoria",
      title: "Teoria",
      description:
        "Oikis Teho + Etäopetus -kurssin teoriaosuus.",
      href:
        "/kurssi/oikis-teho-etaope/teoria",
    },
    {
      id:
        "oikis-teho-etaope-harjoitukset",
      title: "Harjoitukset",
      description:
        "Oikis Teho + Etäopetus -kurssin harjoitukset.",
      href:
        "/kurssi/oikis-teho-etaope/harjoitukset",
    },
    /*{
      id:
        "oikis-teho-etaope-flashcardit",
      title: "Flashcardit",
      description:
        "Oikis Teho + Etäopetus -kurssin flashcardit.",
      href:
        "/kurssi/oikis-teho-etaope/flashcardit",
    },*/
    {
      id:
        "oikis-teho-etaope-edistyminen",
      title: "Edistyminen",
      description:
        "Seuraa juuri tämän kurssin edistymistä.",
      href:
        "/kurssi/oikis-teho-etaope/edistyminen",
    },
    {
      id:
        "oikis-teho-etaope-gurupath",
      title: "GuruPeli",
      description:
        "Oikis Teho + Etäopetus -kurssin oma pelillinen kurssipolku.",
      href:
        "/gurupath/oikis-teho-etaope",
    },
  ],
} satisfies Course;
