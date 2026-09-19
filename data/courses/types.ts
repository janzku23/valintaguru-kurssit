export type CourseId =
  | "oikis"
  | "oikis-tiivis"
  | "oikis-teho"
  | "valintakoe-g"
  | "valintakoe-g-etaope"
  | "yo";

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
  purchaseUrl?: string;
};
