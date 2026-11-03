import { connection } from "next/server";
import CoursesClient from "./CoursesClient";
import { courses } from "@/data/courses";
import { catalog } from "@/lib/shop/server";
import { courseOffers, type CourseOffers } from "@/lib/shop/offers";

export default async function CoursesSection() {
  await connection();
  let offers: CourseOffers = {};
  try {
    offers = courseOffers(
      await catalog(),
      courses.map((course) => course.id),
    );
  } catch {
    // Keep the existing course showcase available during a catalog outage.
  }
  return <CoursesClient offers={offers} />;
}
