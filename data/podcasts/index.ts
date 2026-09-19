import type { CourseId } from "@/data/courses";
import type { CoursePodcastContent } from "./types";

export * from "./types";

/*
 * PODCAST-SISÄLLÖT
 *
 * Lisää jokaisen kurssin Canva-linkki ja Firebase Storage
 * -äänitiedoston download URL tähän.
 *
 * Yhdessä jaksossa voi olla rajaton määrä äänitteitä:
 * audioTracks: [
 *   { id: "osa-1", title: "Osa 1", url: "FIREBASE_URL_1" },
 *   { id: "osa-2", title: "Osa 2", url: "FIREBASE_URL_2" },
 * ]
 *
 * Firebase-esimerkki:
 * audioUrl:
 *   "https://firebasestorage.googleapis.com/v0/b/.../o/...mp3?alt=media&token=..."
 *
 * Canva:
 * canvaUrl: "https://www.canva.com/design/XXXX/YYYY/view"
 */

const podcastContent: Partial<Record<CourseId, CoursePodcastContent>> = {
  oikis: {
    courseId: "oikis",
    enabled: true,
    title: "Oikis Podcast",
    description:
      "Kuuntele keskeiset asiat podcastina, seuraa samalla Canva-esitystä ja kertaa lopuksi tärkeimmät asiat tiiviistä teoriaosuudesta.",
    episodes: [
      {
        id: "oikis-podcast-1",
        title: "Podcast 1",
        subtitle: "Oikeudellisen ajattelun perusteet",
        description:
          "Ensimmäinen Oikis-podcast kokoaa keskeiset lähtökohdat oikeudelliseen ajatteluun ja opiskeluun.",
        canvaUrl:
          "https://www.canva.com/design/DAG9RpTThY8/mzhLBDzVIYiLGGbOGo9wxg/view?embed",
        audioTracks: [
          // Lisää tähän niin monta Firebase-äänitettä kuin haluat.
          // Esimerkki:
          // {
          //   id: "oikis-podcast-1-osa-1",
          //   title: "Osa 1",
          //   url: "https://firebasestorage.googleapis.com/...",
          //   duration: "12 min",
          // },
          // {
          //   id: "oikis-podcast-1-osa-2",
          //   title: "Osa 2",
          //   url: "https://firebasestorage.googleapis.com/...",
          // },
             {
             id: "oikis-podcast-1-osa-1",
             title: "Osa 1",
             url: "https://firebasestorage.googleapis.com/v0/b/gonalaakis.firebasestorage.app/o/Lain%20rakenne%2C%20oikeustoimi%20ja%20kelpoisuus.m4a?alt=media&token=8d83cc45-dc10-4a28-926a-6e8a19fb92c9",
             duration: "12 min",
           },
           {
             id: "oikis-podcast-1-osa-2",
             title: "Osa 2",
             url: "https://firebasestorage.googleapis.com/v0/b/gonalaakis.firebasestorage.app/o/Oikeuslähdeoppi%20ja%20tulkintateoriat.m4a?alt=media&token=d94196f8-16c7-4bf0-8c8c-64c18dc818b2",
           },
            {
             id: "oikis-podcast-1-osa-3",
             title: "Osa 2",
             url: "https://firebasestorage.googleapis.com/v0/b/gonalaakis.firebasestorage.app/o/Oikeusvaltioperiaate%20ja%20tuomiovalta.m4a?alt=media&token=d204488f-fcca-4766-82db-93a8e42e15ef",
           },
        ],
        theoryTitle: "Muista nämä",
        theory: `Oikeudellisessa ajattelussa keskeistä on tunnistaa ratkaistava oikeudellinen kysymys, löytää asiaan liittyvät oikeuslähteet ja perustella johtopäätös johdonmukaisesti.

Podcastin tarkoituksena on tukea teoriaopiskelua. Kuuntele jakso esimerkiksi ennen harjoituksia tai käytä sitä kertauksena teoriaosuuden jälkeen.

Canva-esityksen avulla voit seurata jakson pääkohtia samalla kun kuuntelet podcastia.`,
      },
    ],
  },

  "valintakoe-g": {
    courseId: "valintakoe-g",
    enabled: false,
    title: "Valintakoe G Podcast",
    description:
      "Kertaa Valintakoe G:n keskeisiä taitoja podcastin, Canva-esityksen ja tiiviin teoriaosuuden avulla.",
    episodes: [
      {
        id: "valintakoe-g-podcast-1",
        title: "Podcast 1",
        subtitle: "Päättely ja aineiston tulkinta",
        description:
          "Johdanto Valintakoe G:n päättelyyn, aineistojen lukemiseen ja olennaisen tiedon tunnistamiseen.",
        canvaUrl: "",
        audioTracks: [],
        theoryTitle: "Jakson ydinkohdat",
        theory: `Valintakoe G:ssä olennaista on lukea annettu tieto täsmällisesti ja erottaa aineistosta se, mitä voidaan varmasti päätellä siitä, mitä ei voida päätellä.

Päättelytehtävissä kannattaa välttää oletuksia, joita aineisto ei tue. Numeerisissa ja taulukollisissa tehtävissä huomio kannattaa kiinnittää yksiköihin, prosentteihin, suhteisiin ja siihen, mitä kysymyksessä tosiasiassa pyydetään.

Podcastia voi käyttää ennen harjoituskoetta nopeana kertauksena tai teoriaosuuden rinnalla.`,
      },
    ],
  },

  /*
   * Kun haluat podcastit myös näihin kursseihin,
   * lisää vastaava sisältö:
   *
   * "oikis-tiivis": { ... }
   * "oikis-teho": { ... }
   * "valintakoe-g-etaope": { ... }
   * yo: { ... }
   */
};

export function hasPodcastForCourse(
  courseId: CourseId
): boolean {
  const content = podcastContent[courseId];

  return Boolean(
    content?.enabled &&
      content.episodes.length > 0
  );
}

export function getPodcastContent(
  courseId: CourseId
): CoursePodcastContent | null {
  const content = podcastContent[courseId];

  if (
    !content?.enabled ||
    content.episodes.length === 0
  ) {
    return null;
  }

  return content;
}
