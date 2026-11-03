"use client";

import type { CourseOffers } from "@/lib/shop/offers";
import CourseShowcase from "../../components/CourseShowcase";
import { courses } from "../../data/courses";
import { useHomeAuth } from "./HomeAuthProvider";

export default function CoursesClient({
  offers = {},
}: {
  offers?: CourseOffers;
}) {
  const { ownedCourseIds } = useHomeAuth();
  return (
    <section
      id="kurssit"
      className="scroll-mt-20 border-y border-slate-200 bg-white py-12 sm:py-16 lg:py-20"
    >
      <CourseShowcase
        courses={courses}
        offers={offers}
        ownedCourseIds={ownedCourseIds}
      />
    </section>
  );
}
