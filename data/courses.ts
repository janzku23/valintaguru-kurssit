export type CourseId = "oikis" | "valintakoe-g" | "yo";

export type CourseModule = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export type Course = {
  id: CourseId;
  title: string;
  label: string;
  description: string;
  modules: CourseModule[];
};

export const courses: Course[] = [
  {
    id: "oikis",
    title: "Oikeustiede",
    label: "Oikis",
    description:
      "Oikeustieteen valintakokeeseen liittyvä teoria, harjoitukset ja koetyyppiset tehtävät.",
    modules: [
      {
        id: "oikis-teoria",
        title: "Teoria",
        description: "Oikiksen teoriaosuudet ja aihekohtaiset materiaalit.",
        href: "/kurssi/oikis/teoria",
      },
      {
        id: "oikis-harjoitukset",
        title: "Harjoitukset",
        description: "Monivalinnat, aineistotehtävät ja minitestit.",
        href: "/kurssi/oikis/harjoitukset",
      },
      {
        id: "oikis-flashcardit",
        title: "Flashcardit",
        description: "Keskeiset käsitteet nopeaan kertaamiseen.",
        href: "/kurssi/oikis/flashcardit",
      },
    ],
  },
  {
    id: "valintakoe-g",
    title: "Valintakoe G",
    label: "Valintakoe G",
    description:
      "Yhteisen osion harjoitteluun tarkoitettu kurssikokonaisuus.",
    modules: [
      {
        id: "g-teoria",
        title: "Teoria",
        description: "Valintakoe G:n teoria ja päättelyä tukevat materiaalit.",
        href: "/kurssi/valintakoe-g/teoria",
      },
      {
        id: "g-harjoitukset",
        title: "Harjoitukset",
        description: "Päättely-, aineisto- ja tekstinymmärrystehtävät.",
        href: "/kurssi/valintakoe-g/harjoitukset",
      },
      {
        id: "g-kokeet",
        title: "Harjoituskokeet",
        description: "Koetyyppiset kokonaisuudet ajastuksella.",
        href: "/kurssi/valintakoe-g/kokeet",
      },
    ],
  },
  {
    id: "yo",
    title: "YO-valmennus",
    label: "YO",
    description:
      "YO-kokeisiin valmistava kokonaisuus eri oppiaineiden opiskeluun.",
    modules: [
      {
        id: "yo-teoria",
        title: "Teoria",
        description: "YO-aineiden teoriaosuudet aiheittain.",
        href: "/kurssi/yo/teoria",
      },
      {
        id: "yo-harjoitukset",
        title: "Harjoitukset",
        description: "Monivalinnat, minitestit ja tehtäväkokonaisuudet.",
        href: "/kurssi/yo/harjoitukset",
      },
      {
        id: "yo-flashcardit",
        title: "Flashcardit",
        description: "Käsitteet ja tärkeät asiat nopeaan kertaukseen.",
        href: "/kurssi/yo/flashcardit",
      },
    ],
  },
];

export function isCourseId(value: string): value is CourseId {
  return value === "oikis" || value === "valintakoe-g" || value === "yo";
}

export function getCourseById(courseId: string) {
  return courses.find((course) => course.id === courseId);
}