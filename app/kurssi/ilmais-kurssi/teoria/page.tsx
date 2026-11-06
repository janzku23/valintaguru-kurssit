import { redirect } from "next/navigation";

// Keep existing bookmarks working; materials now live with each exam.
export default function FreeCourseTheoryPage() {
  redirect("/kurssi/ilmais-kurssi/harjoitukset");
}
