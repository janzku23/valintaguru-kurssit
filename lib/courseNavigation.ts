import type {
  Course,
  CourseModule,
} from "@/data/courses";
import { hasPodcastForCourse } from "@/data/podcasts";
import {
  isCourseFeatureEnabled,
  type CourseFeatureKey,
} from "@/data/courseFeatures";

type StandardFeatureDefinition = {
  feature: CourseFeatureKey;
  title: string;
  href: (courseId: string) => string;
  description: string;
};

const STANDARD_FEATURES: StandardFeatureDefinition[] = [
  {
    feature: "theory",
    title: "Teoria",
    href: (courseId) =>
      `/kurssi/${courseId}/teoria`,
    description:
      "Kurssin teoriaosuudet ja aihekohtaiset materiaalit.",
  },
  {
    feature: "tasks",
    title: "Harjoitukset",
    href: (courseId) =>
      `/kurssi/${courseId}/harjoitukset`,
    description:
      "Kurssin harjoitukset ja koetyyppiset tehtävät.",
  },
  {
    feature: "flashcards",
    title: "Flashcardit",
    href: (courseId) =>
      `/kurssi/${courseId}/flashcardit`,
    description:
      "Keskeiset käsitteet nopeaan kertaamiseen.",
  },
  {
    feature: "podcast",
    title: "Podcast",
    href: (courseId) =>
      `/kurssi/${courseId}/podcast`,
    description:
      "Kuuntele kurssin podcastit, seuraa esitystä ja kertaa teoriaa.",
  },
  {
    feature: "progress",
    title: "Edistyminen",
    href: (courseId) =>
      `/kurssi/${courseId}/edistyminen`,
    description:
      "Seuraa tämän kurssin opiskelun edistymistä.",
  },
  {
    feature: "gurupeli",
    title: "GuruPeli",
    href: (courseId) =>
      `/gurupath/${courseId}`,
    description:
      "Etene kurssin pelillisellä opiskelupolulla.",
  },
];

function featureForModule(
  module: CourseModule
): CourseFeatureKey | null {
  if (module.href.endsWith("/teoria")) {
    return "theory";
  }

  if (
    module.href.endsWith(
      "/harjoitukset"
    )
  ) {
    return "tasks";
  }

  if (
    module.href.endsWith(
      "/flashcardit"
    )
  ) {
    return "flashcards";
  }

  if (
    module.href.endsWith(
      "/podcast"
    )
  ) {
    return "podcast";
  }

  if (
    module.href.endsWith(
      "/edistyminen"
    )
  ) {
    return "progress";
  }

  if (
    module.href.startsWith(
      "/gurupath/"
    )
  ) {
    return "gurupeli";
  }

  return null;
}

/**
 * Keskitetty kurssin moduulilista.
 *
 * data/courseFeatures.ts on jatkossa määräävä:
 *
 * true  -> ominaisuus näytetään
 * false -> ominaisuus piilotetaan
 *
 * Kurssin modules-listan ei tarvitse sisältää kaikkia ominaisuuksia.
 * Jos esimerkiksi Flashcardit-moduuli on kommentoitu pois kurssitiedostosta,
 * mutta courseFeatures.ts sisältää flashcards: true, tämä helper luo
 * Flashcardit-linkin automaattisesti.
 *
 * Jos kurssitiedostossa on oma moduuli, sen title/description/id säilytetään.
 */
export function getAvailableCourseModules(
  course: Course
): CourseModule[] {
  const existingByFeature =
    new Map<
      CourseFeatureKey,
      CourseModule
    >();

  const customModules:
    CourseModule[] = [];

  for (
    const module of course.modules
  ) {
    const feature =
      featureForModule(module);

    if (feature) {
      existingByFeature.set(
        feature,
        module
      );
    } else {
      /**
       * Mahdolliset täysin omat moduulit,
       * joita ei tunnisteta vakio-ominaisuudeksi.
       */
      customModules.push(module);
    }
  }

  const visibleStandardModules =
    STANDARD_FEATURES.flatMap(
      (definition) => {
        const enabled =
          isCourseFeatureEnabled(
            course.id,
            definition.feature
          );

        if (!enabled) {
          return [];
        }

        /**
         * Podcast vaatii lisäksi oikeasti
         * käytössä olevan podcast-sisällön.
         */
        if (
          definition.feature ===
            "podcast" &&
          !hasPodcastForCourse(
            course.id
          )
        ) {
          return [];
        }

        const existing =
          existingByFeature.get(
            definition.feature
          );

        if (existing) {
          return [existing];
        }

        const generated:
          CourseModule = {
          id: `${course.id}-${definition.feature}`,
          title:
            definition.title,
          description:
            definition.description,
          href:
            definition.href(
              course.id
            ),
        };

        return [generated];
      }
    );

  return [
    ...visibleStandardModules,
    ...customModules,
  ];
}
