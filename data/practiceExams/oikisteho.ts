import "server-only";
import type { PracticeExam } from "./types";

import { oikisTehoExam1 } from "./shared/oikistehoExam1";
import { oikisTehoExam2 } from "./shared/oikistehoExam2";
import { oikisTehoExam3 } from "./shared/oikistehoExam3";
import { oikisTehoExam4 } from "./shared/oikistehoExam4";
import { oikisTehoExam5 } from "./shared/oikistehoExam5";
import { oikisTehoExam6 } from "./shared/oikistehoExam6";
import { oikisTehoExam7 } from "./shared/oikistehoExam7";
import { oikisTehoExam8 } from "./shared/oikistehoExam8";

const sharedExams = [
  oikisTehoExam1,
  oikisTehoExam2,
  oikisTehoExam3,
  oikisTehoExam4,
  oikisTehoExam5,
  oikisTehoExam6,
  oikisTehoExam7,
  oikisTehoExam8,
];

export const oikisTehoPracticeExams: PracticeExam[] =
  sharedExams.map((exam) => ({
    ...exam,
    courseId: "oikis-teho",
  }));
