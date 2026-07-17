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