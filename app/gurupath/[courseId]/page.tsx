import { notFound, redirect } from "next/navigation";
import GuruPathMap from "@/components/gurupath/GuruPathMap";
import { isGuruGameViewId } from "@/data/gurupath";
import { getGuruGameAccessState } from "@/lib/gurupath/hasGuruGameAccess";
import type { CourseId } from "@/data/courses";

export const dynamic = "force-dynamic";

export default async function GuruPathCoursePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  if (!isGuruGameViewId(courseId)) notFound();

  const access = await getGuruGameAccessState();
  if (!access.viewId) redirect("/gurupath");

  if (access.viewId === "combined" && courseId !== "combined") {
    redirect("/gurupath/combined");
  }

  if (courseId === "combined" && access.viewId !== "combined") {
    redirect(`/gurupath/${access.viewId}`);
  }

  if (access.viewId !== "combined" && courseId !== access.viewId) {
    redirect(`/gurupath/${access.viewId}`);
  }

  const progressCourseIds = [
    access.oikis.accessCourseId,
    access.valintakoeG.accessCourseId,
  ].filter((value): value is CourseId => Boolean(value));

  if (!progressCourseIds.length) redirect("/gurupath");

  return (
    <main className="min-h-screen bg-[#f5f8ff] text-slate-950">
      <GuruPathMap
        viewId={courseId}
        progressCourseIds={progressCourseIds}
        storageCourseIds={{
          oikis: access.oikis.accessCourseId,
          "valintakoe-g": access.valintakoeG.accessCourseId,
        }}
      />
    </main>
  );
}
