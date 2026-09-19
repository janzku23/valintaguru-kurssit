import { notFound, redirect } from "next/navigation";
import {
  isCourseId,
} from "@/data/courses";
import {
  getPracticeExam,
} from "@/data/practiceExams";

type Props = {
  params: Promise<{
    courseId: string;
    examId: string;
  }>;
};

export default async function LegacyPracticeExamPage({
  params,
}: Props) {
  const { courseId, examId } =
    await params;

  if (!isCourseId(courseId)) {
    notFound();
  }

  const exam = getPracticeExam(
    courseId,
    examId
  );

  if (!exam) {
    notFound();
  }

  /*
   * Kaikki kokeet avataan nyt Harjoitukset-sivun
   * sisällä samalla tavalla kuin teoriaosuudet.
   */
  redirect(
    `/kurssi/${courseId}/harjoitukset?koe=${encodeURIComponent(
      examId
    )}`
  );
}
