import type { Course } from "./types";

import { oikisCourse } from "./oikis";
import { oikisTiivisCourse } from "./oikisTiivis";
import { oikisTehoCourse } from "./oikisTeho";
import { valintakoeGCourse } from "./valintakoeG";
import { valintakoeGEtaopetusCourse } from "./valintakoeGEtaopetus";
import { yoCourse } from "./yo";

export * from "./types";
export * from "./purchase";

export const courses: Course[] = [
  oikisCourse,
  oikisTiivisCourse,
  oikisTehoCourse,
  valintakoeGCourse,
  valintakoeGEtaopetusCourse,
  yoCourse,
];

export function isCourseId(
  value: string
): value is import("./types").CourseId {
  return courses.some((course) => course.id === value);
}

export function getCourseById(courseId: string) {
  return courses.find((course) => course.id === courseId);
}
