"use client";

import CourseShowcase from "../../components/CourseShowcase";
import { courses } from "../../data/courses";
import { useHomeAuth } from "./HomeAuthProvider";

export default function CoursesClient() {
  const { ownedCourseIds } = useHomeAuth();
  return (
      <section id="kurssit" className="scroll-mt-20 border-y border-slate-200 bg-white py-12 sm:py-16 lg:py-20">
        <CourseShowcase
          courses={courses}
          ownedCourseIds={ownedCourseIds}
        />
      </section>
  );
}
