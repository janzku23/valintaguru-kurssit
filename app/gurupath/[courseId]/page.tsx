import { notFound, redirect } from "next/navigation";
import GuruPathMap from "@/components/gurupath/GuruPathMap";
import { isGuruGameViewId, getGuruPath, getGuruGameQuestion } from "@/data/gurupath";
import type { GuruPublicQuestion } from "@/data/gurupath/types";
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

  const path = getGuruPath(courseId);
  const publicQuestions: Record<string, GuruPublicQuestion> = {};
  for (const node of path.levels) {
    const question = getGuruGameQuestion(node.questionId);
    if (!question) continue;
    // Explicit allowlist: never send correctAnswerIds or explanation to the browser.
    publicQuestions[question.id] = {
      id: question.id,
      type: question.type,
      selectionMode: question.correctAnswerIds.length > 1 ? "multiple" : "single",
      title: question.title,
      prompt: question.prompt,
      answers: question.answers,
      points: question.points,
      placements: question.placements,
      combinedOrder: question.combinedOrder,
      reading: question.reading,
    };
  }

  return (
    <main className="min-h-screen bg-[#f5f8ff] text-slate-950">
      <GuruPathMap
        viewId={courseId}
        path={path}
        publicQuestions={publicQuestions}
        progressCourseIds={progressCourseIds}
        storageCourseIds={{
          oikis: access.oikis.accessCourseId,
          "valintakoe-g": access.valintakoeG.accessCourseId,
        }}
      />
    </main>
  );
}
