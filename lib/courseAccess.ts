import { CourseId } from "../data/courses";

const demoOwnedCourseIds: CourseId[] = ["oikis"];

export function getOwnedCourseIds(): CourseId[] {
  return demoOwnedCourseIds;
}

export function hasCourseAccess(courseId: CourseId): boolean {
  return demoOwnedCourseIds.includes(courseId);
}