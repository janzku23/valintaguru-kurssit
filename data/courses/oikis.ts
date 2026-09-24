import type { Course } from "./types";
import { COURSE_PURCHASE_URLS } from "./purchase";

export const oikisCourse = {
  id: "oikis",
  title: "Kyssäripankki",
  label: "Oikis · Kyssäripankki",
  description:
    "",
  purchaseUrl:
    COURSE_PURCHASE_URLS.oikis,
  modules: [
    {
      id: "oikis-teoria",
      title: "Teoria",
      description:
        "",
      href: "/kurssi/oikis/teoria",
    },
    {
      id: "oikis-harjoitukset",
      title: "Harjoitukset",
      description:
        "Oikiksen harjoitukset ja koetyyppiset tehtävät.",
      href:
        "/kurssi/oikis/harjoitukset",
    },
    {
      id: "oikis-flashcardit",
      title: "Flashcardit",
      description:
        "Keskeiset käsitteet nopeaan kertaamiseen.",
      href:
        "/kurssi/oikis/flashcardit",
    },
    {
      id: "oikis-edistyminen",
      title: "Edistyminen",
      description:
        "Seuraa tämän kurssin tehtävistä kertyvää edistymistä.",
      href:
        "/kurssi/oikis/edistyminen",
    },
    {
      id: "oikis-gurupath",
      title: "GuruPeli",
      description:
        "Etene Kyssäripankin omalla pelillisellä kurssipolulla.",
      href: "/gurupath/oikis",
    },
  ],
} satisfies Course;
