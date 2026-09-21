import "server-only";
import type { PracticeExam } from "./types";
import { oikisTehoExam1 } from "./shared/oikistehoExam1";
import { oikisTehoExam2 } from "./shared/oikistehoExam2";

export const oikisTehoPracticeExams: PracticeExam[] = [
  {
    ...oikisTehoExam1,
    courseId: "oikis-teho",
  },
    {
    ...oikisTehoExam2,
    courseId: "oikis-teho",
  },
];
