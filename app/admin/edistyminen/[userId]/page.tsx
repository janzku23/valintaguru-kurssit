import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import { getAdminUserDetail } from "@/lib/adminData";
import UserRightsEditor from "@/components/admin/UserRightsEditor";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ userId: string }> };

type ProgressRow = {
  id: string;
  course_id: string;
  question: string;
  area: string;
  category: string | null;
  category_id: number | null;
  answer_status: string | null;
  is_correct: boolean;
  answered_at: string;
  answer_time_ms: number | null;
  session_duration_ms: number | null;
  session_name: string | null;
};

type ExamRow = {
  id: string;
  course_id: string;
  exam_id: string;
  status: string;
  finished_at: string | null;
  duration_seconds: number | null;
  score: number | null;
  max_score: number | null;
  correct_count: number | null;
  wrong_count: number | null;
  unsure_count: number | null;
};

function date(value: string | null) {
  if (!value) return "-";
  return new Intl.DateTimeFormat("fi-FI", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

function duration(ms: number | null) {
  if (ms == null) return "-";
  const sec = Math.round(ms / 1000);
  if (sec < 60) return `${sec} s`;
  const min = Math.floor(sec / 60);
  return `${min} min ${sec % 60} s`;
}

export default async function AdminStudentProgressPage({ params }: Params) {
  const { userId } = await params;
  const data = await getAdminUserDetail(userId);
  if (!data) notFound();

  const progress = data.progress as ProgressRow[];
  const exams = data.exams as ExamRow[];
  const rights = data.rights as Array<{ course_id?: string | null; course_slug?: string | null; status?: string | null }>;
  const initialCourseIds = Array.from(new Set(rights.map((row) => row.course_id ?? row.course_slug).filter((id): id is string => Boolean(id))));

  const correct = progress.filter((row) => row.is_correct).length;
  const skipped = progress.filter((row) => row.answer_status === "skipped").length;
  const resolved = progress.length - skipped;
  const accuracy = resolved > 0 ? Math.round(correct / resolved * 100) : 0;
  const latest = progress[0]?.answered_at ?? null;

  const byCourse = new Map<string, ProgressRow[]>();
  progress.forEach((row) => {
    const list = byCourse.get(row.course_id) ?? [];
    list.push(row);
    byCourse.set(row.course_id, list);
  });

  const categoryMap = new Map<number, { name: string; correct: number; wrong: number; skipped: number }>();
  progress.filter((row) => (row.course_id === "valintakoe-g" || row.course_id === "valintakoe-g-etaope") && row.category_id != null).forEach((row) => {
    const id = row.category_id!;
    const current = categoryMap.get(id) ?? { name: row.category || `Kategoria ${id}`, correct: 0, wrong: 0, skipped: 0 };
    if (row.answer_status === "skipped") current.skipped += 1;
    else if (row.is_correct) current.correct += 1;
    else current.wrong += 1;
    categoryMap.set(id, current);
  });

  return (
    <div className="space-y-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <a href="/admin/edistyminen" className="text-sm font-black text-indigo-600">← Kaikki opiskelijat</a>
          <h1 className="mt-3 text-3xl font-black">{data.user.name || data.user.email}</h1>
          <p className="mt-1 text-slate-500">{data.user.email}</p>
        </div>
        <div className="rounded-2xl bg-white px-4 py-3 text-sm shadow-sm"><span className="font-bold text-slate-500">Viimeisin aktiivisuus</span><br/><span className="font-black">{date(latest)}</span></div>
      </div>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {[
          ["Vastauksia", progress.length],
          ["Oikein", correct],
          ["Onnistuminen", `${accuracy} %`],
          ["Vastaamatta", skipped],
          ["Harjoituskokeita", exams.length],
        ].map(([label, value]) => <div key={String(label)} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm font-bold text-slate-500">{label}</p><p className="mt-2 text-3xl font-black">{value}</p></div>)}
      </section>

      <div id="oikeudet">
        <UserRightsEditor
          userId={userId}
          userEmail={data.user.email}
          courses={courses.map((course) => ({ id: course.id, title: course.title }))}
          initialCourseIds={initialCourseIds}
        />
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-xl font-black">Kurssikohtainen edistyminen</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {Array.from(byCourse.entries()).map(([courseId, rows]) => {
            const c = rows.filter((row) => row.is_correct).length;
            const s = rows.filter((row) => row.answer_status === "skipped").length;
            const r = rows.length - s;
            return <article key={courseId} className="rounded-2xl border border-slate-200 p-4"><p className="text-xs font-black uppercase tracking-wide text-indigo-600">{courseId}</p><p className="mt-2 text-2xl font-black">{r > 0 ? Math.round(c / r * 100) : 0} %</p><p className="mt-1 text-sm text-slate-500">{c} oikein · {Math.max(0, r - c)} väärin · {s} vastaamatta</p></article>;
          })}
          {byCourse.size === 0 && <p className="text-slate-500">Ei vielä tallennettua edistymistä.</p>}
        </div>
      </section>

      {categoryMap.size > 0 && (
        <section className="rounded-3xl border border-indigo-200 bg-indigo-50/60 p-5 shadow-sm sm:p-6">
          <h2 className="text-xl font-black">Valintakoe G · lukutaitoprofiili</h2>
          <p className="mt-1 text-sm text-slate-600">Admin-yhteenveto niistä kategorioista, joista opiskelijalla on dataa.</p>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {Array.from(categoryMap.entries()).sort((a,b) => a[0]-b[0]).map(([id, item]) => {
              const resolvedCount = item.correct + item.wrong;
              const pct = resolvedCount > 0 ? Math.round(item.correct / resolvedCount * 100) : 0;
              return <article key={id} className="rounded-2xl border border-indigo-100 bg-white p-4"><p className="text-xs font-black text-indigo-600">Kategoria {id}</p><h3 className="mt-1 font-black">{item.name}</h3><div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full bg-indigo-600" style={{ width: `${pct}%` }}/></div><p className="mt-2 text-sm"><strong>{pct} %</strong> · {item.correct} oikein · {item.wrong} väärin · {item.skipped} ohitettu</p></article>;
            })}
          </div>
        </section>
      )}

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-5 sm:p-6"><h2 className="text-xl font-black">Harjoituskoehistoria</h2></div>
        <div className="divide-y divide-slate-100">
          {exams.map((exam) => <div key={exam.id} className="grid gap-2 p-5 sm:grid-cols-[1fr_120px_120px_160px] sm:items-center"><div><p className="font-black">{exam.course_id} · {exam.exam_id}</p><p className="text-sm text-slate-500">{date(exam.finished_at)}</p></div><p className="text-sm font-black">{exam.score ?? "-"}/{exam.max_score ?? "-"} p</p><p className="text-sm">{exam.correct_count ?? 0} O · {exam.wrong_count ?? 0} V</p><p className="text-sm text-slate-500">{exam.duration_seconds != null ? duration(exam.duration_seconds * 1000) : "-"}</p></div>)}
          {exams.length === 0 && <p className="p-6 text-slate-500">Ei harjoituskoesuorituksia.</p>}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-5 sm:p-6"><h2 className="text-xl font-black">Viimeisimmät vastaukset</h2><p className="mt-1 text-sm text-slate-500">Enintään 100 viimeisintä näkyvissä.</p></div>
        <div className="divide-y divide-slate-100">
          {progress.slice(0,100).map((row) => <div key={row.id} className="grid gap-2 p-5 lg:grid-cols-[150px_1fr_130px_130px_170px] lg:items-center"><p className="text-xs font-black uppercase text-indigo-600">{row.course_id}</p><div><p className="font-bold">{row.question}</p><p className="text-xs text-slate-500">{row.area}{row.category ? ` · ${row.category}` : ""}</p></div><span className={`w-fit rounded-full px-2.5 py-1 text-xs font-black ${row.answer_status === "skipped" ? "bg-slate-100 text-slate-600" : row.is_correct ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>{row.answer_status === "skipped" ? "Vastaamatta" : row.is_correct ? "Oikein" : "Väärin"}</span><p className="text-sm text-slate-500">{duration(row.answer_time_ms)}</p><p className="text-sm text-slate-500">{date(row.answered_at)}</p></div>)}
          {progress.length === 0 && <p className="p-6 text-slate-500">Ei vielä vastauksia.</p>}
        </div>
      </section>
    </div>
  );
}
