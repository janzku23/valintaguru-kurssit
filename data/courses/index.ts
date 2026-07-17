import type { Course } from "./types";

import { oikisCourse } from "./oikis";
import { valintakoeGCourse } from "./valintakoeG";
import { yoCourse } from "./yo";

export * from "./types";

export const courses: Course[] = [
  oikisCourse,
  valintakoeGCourse,
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