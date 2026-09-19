import type { Course } from "./types";

import { oikisCourse } from "./oikis";
import { oikisTiivisCourse } from "./oikisTiivis";
import { oikisTehoCourse } from "./oikisTeho";
import { oikisTehoEtaopetusCourse } from "./oikisTehoEtaopetus";
import { valintakoeGCourse } from "./valintakoeG";
import { valintakoeGEtaopetusCourse } from "./valintakoeGEtaopetus";
import { yoCourse } from "./yo";
import { isCoursePurchasable } from "./purchase";

export * from "./types";
export * from "./purchase";

export const courses: Course[] = [
  oikisCourse,
  oikisTiivisCourse,
  oikisTehoCourse,
  oikisTehoEtaopetusCourse,
  valintakoeGCourse,
  valintakoeGEtaopetusCourse,
  yoCourse,
];

export const purchasableCourses:
  Course[] = courses.filter(
  (course) =>
    isCoursePurchasable(
      course.id
    )
);

export function isCourseId(
  value: string
): value is import("./types").CourseId {
  return courses.some(
    (course) =>
      course.id === value
  );
}

export function getCourseById(
  courseId: string
) {
  return courses.find(
    (course) =>
      course.id === courseId
  );
}
