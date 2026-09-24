import type { Course } from "./types";
import { COURSE_PURCHASE_URLS } from "./purchase";

export const valintakoeGEtaopetusCourse = {
  id: "valintakoe-g-etaope",
  title:
    "Valintakoe G tehokurssi+ Etäopetus",
  label:
    "Valintakoe G + Etäopetus",
  description:
    "",
  purchaseUrl:
    COURSE_PURCHASE_URLS[
      "valintakoe-g-etaope"
    ],
  modules: [
    {
      id:
        "g-etaope-teoria",
      title: "Teoria",
      description:
        "Etäopetuspaketin oma teoriaosuus.",
      href:
        "/kurssi/valintakoe-g-etaope/teoria",
    },
    {
      id:
        "g-etaope-harjoitukset",
      title: "Harjoitukset",
      description:
        "Etäopetuspaketin omat harjoitukset.",
      href:
        "/kurssi/valintakoe-g-etaope/harjoitukset",
    },
    {
      id:
        "g-etaope-flashcardit",
      title: "Flashcardit",
      description:
        "Etäopetuspaketin omat flashcardit.",
      href:
        "/kurssi/valintakoe-g-etaope/flashcardit",
    },
    {
      id:
        "g-etaope-edistyminen",
      title: "Edistyminen",
      description:
        "Seuraa juuri tämän kurssin edistymistä.",
      href:
        "/kurssi/valintakoe-g-etaope/edistyminen",
    },
    {
      id:
        "g-etaope-gurupath",
      title: "GuruPeli",
      description:
        "Valintakoe G + Etäopetuksen oma pelillinen kurssipolku.",
      href:
        "/gurupath/valintakoe-g-etaope",
    },
  ],
} satisfies Course;
