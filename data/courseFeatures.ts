import type { CourseId } from "@/data/courses";

export type CourseFeatureKey =
  | "theory"
  | "tasks"
  | "flashcards"
  | "podcast"
  | "progress"
  | "gurupeli";

export type CourseFeatureFlags = Record<
  CourseFeatureKey,
  boolean
>;

/**
 * KURSSIEN OMINAISUUKSIEN NÄKYVYYS
 *
 * true  = näytetään opiskelijalle
 * false = piilotetaan opiskelijalta
 *
 * Tämä tiedosto on jatkossa YKSI paikka, josta säädät
 * kurssien sisällön näkyvyyttä.
 *
 * Itse sisältö ja testidata voivat silti olla olemassa
 * data/courses- ja muissa sisältötiedostoissa.
 */
export const COURSE_FEATURES: Record<
  CourseId,
  CourseFeatureFlags
> = {
  oikis: {
    theory: false,
    tasks: false,
    flashcards: false,
    podcast: false,
    progress: false,
    gurupeli: false,
  },

  "oikis-tiivis": {
    theory: false,
    tasks: false,
    flashcards: false,
    podcast: false,
    progress: false,
    gurupeli: false,
  },

  "oikis-teho": {
    theory: false,
    tasks: true,
    flashcards: false,
    podcast: true,
    progress: true,
    gurupeli: false,
  },

  "oikis-teho-etaope": {
    theory: false,
    tasks: true,
    flashcards: false,
    podcast: true,
    progress: true,
    gurupeli: false,
  },

  "valintakoe-g": {
    theory: true,
    tasks: true,
    flashcards: false,
    podcast: false,
    progress: true,
    gurupeli: false,
  },

  "valintakoe-g-etaope": {
    theory: true,
    tasks: true,
    flashcards: false,
    podcast: false,
    progress: true,
    gurupeli: false,
  },

  yo: {
    theory: false,
    tasks: false,
    flashcards: false,
    podcast: false,
    progress: false,
    gurupeli: false,
  },
};

export function isCourseFeatureEnabled(
  courseId: CourseId,
  feature: CourseFeatureKey
): boolean {
  return COURSE_FEATURES[courseId][feature];
}
