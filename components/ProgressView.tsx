"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { createClient } from "@/utils/supabase/client";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";
import type { CourseId } from "@/data/courses";
import ValintakoeGReadingProfile from "@/components/ValintakoeGReadingProfile";
import { loadProgressRows } from "@/lib/loadProgress";
import { subscribeToProgressRefresh } from "@/lib/progressRefresh";
import {
  buildProgressAnalytics, buildProgressSessions, formatProgressDuration,
  getProgressStatus, progressForPeriod, questionKey,
  type GroupStats, type ProgressPeriod, type ProgressRow, type ProgressStatus,
} from "@/lib/progressAnalytics";
import { buildPracticeReviews, nextPracticeStep, practiceForProgressRow, type ProgressPractice } from "@/lib/progressRecommendations";
import { VALINTAKOE_G_READING_CATEGORIES } from "@/data/valintakoeGExercises/categories";

const card = "min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6";
const action = "inline-flex min-h-11 items-center justify-center rounded-xl px-4 py-2.5 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600";
const percent = (value: number | null) => value == null ? "–" : `${value} %`;
const dateLabel = (value: string) => new Intl.DateTimeFormat("fi-FI", { timeZone: "Europe/Helsinki", dateStyle: "short", timeStyle: "short" }).format(new Date(value));

export default function ProgressView({ courseId, practices = [] }: {
  courseId: CourseId;
  practices?: ProgressPractice[];
}) {
  const client = useMemo(() => createClient(), []);
  const [rows, setRows] = useState<ProgressRow[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [resetting, setResetting] = useState(false);
  const [period, setPeriod] = useState<ProgressPeriod>("all");
  const [historyLimit, setHistoryLimit] = useState(10);
  const [sessionLimit, setSessionLimit] = useState(5);
  const [reviewLimit, setReviewLimit] = useState(4);
  const [historyFilter, setHistoryFilter] = useState<"all" | ProgressStatus>("all");
  const requestId = useRef(0);
  const historyFilterId = useId();
  const isReadingCourse = courseId === "valintakoe-g" || courseId === "valintakoe-g-etaope";

  const load = useCallback(async (signal?: AbortSignal) => {
    const id = ++requestId.current;
    setRefreshing(true);
    setError(null);
    try {
      const { user, error: authError } = await getAuthenticatedUser();
      if (authError || !user) {
        if (!signal?.aborted && id === requestId.current) { setRows([]); setUserId(null); }
        throw new Error("Kirjaudu sisään, jotta voit nähdä oman edistymisesi.");
      }
      const data = await loadProgressRows(client, user.id, courseId, signal);
      if (signal?.aborted || id !== requestId.current) return;
      setRows(data);
      setUserId(user.id);
    } catch (err) {
      if (signal?.aborted || id !== requestId.current) return;
      setError(err instanceof Error ? err.message : "Edistymisen haku epäonnistui.");
    } finally {
      if (!signal?.aborted && id === requestId.current) {
        setLoaded(true);
        setRefreshing(false);
      }
    }
  }, [client, courseId]);

  useEffect(() => {
    const controller = new AbortController();
    void Promise.resolve().then(() => {
      if (!controller.signal.aborted) return load(controller.signal);
    });
    const unsubscribe = subscribeToProgressRefresh(() => { void load(controller.signal); });
    return () => { unsubscribe(); controller.abort(); requestId.current += 1; };
  }, [load]);

  const filteredRows = useMemo(() => progressForPeriod(rows, period), [rows, period]);
  const data = useMemo(() => buildProgressAnalytics(filteredRows), [filteredRows]);
  const history = useMemo(() => [...data.rows].reverse().filter((row) => historyFilter === "all" || getProgressStatus(row) === historyFilter), [data.rows, historyFilter]);
  const practiceReviews = useMemo(() => buildPracticeReviews(filteredRows, practices), [filteredRows, practices]);
  const nextStep = useMemo(() => nextPracticeStep(rows, practices), [rows, practices]);
  const recommended = nextStep.kind === "review" ? nextStep.review : null;
  const [recommendedLabel, ...recommendedTopicParts] = nextStep.practice?.title.split(/\s+[–—]\s+/) ?? [];
  const recommendedTopic = recommendedTopicParts.join(" – ");
  const sessions = useMemo(() => buildProgressSessions(rows, period), [rows, period]);
  const repeatSessions = sessions.filter((session) => session.attemptNumber > 1).length;
  const enoughData = data.groups.some((group) => group.resolved >= 5);
  const tipRow = recommended?.rows.find((row) => getProgressStatus(row) === "incorrect") ?? recommended?.rows[0];
  const readingTip = isReadingCourse && tipRow
    ? VALINTAKOE_G_READING_CATEGORIES.find((category) => category.id === tipRow.category_id)?.studentTip
    : null;
  const practiceHref = `/kurssi/${courseId}/harjoitukset`;

  async function resetProgress() {
    if (!window.confirm("Poistetaanko tämän kurssin vastaushistoria? Harjoitusten ja kokeiden suoritukset säilyvät erikseen. Toimintoa ei voi perua.")) return;
    setResetting(true);
    setError(null);
    try {
      const { user, error: authError } = await getAuthenticatedUser();
      if (authError || !user) throw new Error("Kirjaudu sisään uudelleen ennen nollausta.");
      const { error: resetError } = await client.from("student_progress_attempts").delete().eq("user_id", user.id).eq("course_id", courseId);
      if (resetError) throw new Error(resetError.message);
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Vastaushistorian nollaus epäonnistui.");
    } finally { setResetting(false); }
  }

  if (!loaded) return <div className={card} role="status"><h2 className="text-xl font-bold">Haetaan edistymistä…</h2><p className="mt-2 text-sm text-slate-500">Kootaan kurssin vastaushistoriaa.</p></div>;

  return (
    <div className="min-w-0 space-y-5 [overflow-wrap:anywhere]">
      <section className={card} aria-label="Edistymisen rajaus">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Oma oppimisesi</p>
            <h2 className="mt-1 text-xl font-bold text-slate-950">Miten harjoittelusi etenee?</h2>
          </div>
          <button type="button" aria-label={refreshing ? "Päivitetään tietoja" : "Päivitä tiedot"} disabled={refreshing || resetting} onClick={() => void load()} className={`${action} shrink-0 gap-2 border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50`}>
            <span aria-hidden="true" className="text-lg">↻</span><span className="hidden sm:inline">{refreshing ? "Päivitetään…" : "Päivitä tiedot"}</span>
          </button>
        </div>
        <fieldset className="mt-5">
          <legend className="mb-2 text-xs font-semibold text-slate-500">Näytettävä ajanjakso</legend>
          <div className="flex flex-wrap gap-2">
            {([ ["all", "Kaikki"], ["30", "30 päivää"], ["7", "7 päivää"] ] as const).map(([value, label]) => (
              <button key={value} type="button" aria-pressed={period === value} onClick={() => { setPeriod(value); setHistoryLimit(10); setSessionLimit(5); setReviewLimit(4); }} className={`${action} ${period === value ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>{label}</button>
            ))}
          </div>
        </fieldset>
      </section>

      {error && <div role="alert" className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-950">
        <p className="font-bold">Tietoja ei voitu päivittää</p><p className="mt-1">{error}</p>
        {rows.length > 0 && <p className="mt-1">Alla näkyvät aiemmin haetut tiedot.</p>}
        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" disabled={refreshing} onClick={() => void load()} className={`${action} bg-white`}>Yritä uudelleen</button>
          {error.toLowerCase().includes("kirjaudu") && <a href={`/kirjaudu?next=${encodeURIComponent(`/kurssi/${courseId}/edistyminen`)}`} className={`${action} bg-white`}>Kirjaudu sisään</a>}
        </div>
      </div>}

      {!data.rows.length ? (
        !error && <section className={`${card} py-10 sm:py-12`}>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Tästä se alkaa</p>
          <h2 className="mt-3 text-2xl font-bold">{rows.length ? "Ei suorituksia tällä ajanjaksolla" : "Ensimmäinen harjoitus kertoo lähtötasosi"}</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">{rows.length ? "Valitse pidempi ajanjakso nähdäksesi aiemmat tuloksesi." : "Tee harjoitus ja päätä suoritus. Näet täällä tuloksesi, harjoiteltavat osa-alueet ja konkreettiset vinkit jatkoon."}</p>
          {rows.length ? <button type="button" onClick={() => setPeriod("all")} className={`${action} mt-5 bg-blue-600 text-white`}>Näytä kaikki suoritukset</button> : <a href={practiceHref} className={`${action} mt-5 bg-blue-600 text-white hover:bg-blue-700`}>Aloita harjoittelu <span aria-hidden="true" className="ml-2">→</span></a>}
        </section>
      ) : <>
        <section aria-label="Edistyminen lukuina" className="grid min-w-0 grid-cols-2 gap-3 xl:grid-cols-4">
          <Metric label="Vastaustarkkuus" value={percent(data.summary.accuracy)} detail={`${data.summary.correct} oikein / ${data.summary.resolved} vastattua`} />
          <Metric label="Eri kysymyksiä" value={String(data.latest.length)} detail={`${data.latestSummary.correct} viimeksi oikein · ${data.review.length} kerrattavaa`} />
          <Metric label="Harjoittelupäiviä" value={String(data.activeDays)} detail="Päivät Suomen ajassa" />
          <Metric label="Suorituksia" value={String(sessions.length)} detail={`${repeatSessions} ${repeatSessions === 1 ? "uusintasuoritus" : "uusintasuoritusta"} mukana`} />
        </section>

        <div className="grid min-w-0 gap-4 xl:grid-cols-2">
          <section aria-label="Seuraava askel" className="min-w-0 rounded-3xl bg-slate-950 p-5 text-white sm:p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">Seuraava askel</p>
            <h2 className="mt-3 text-2xl font-bold leading-snug">{nextStep.kind === "review" ? `Kertaa: ${recommendedLabel}` : nextStep.kind === "new" ? `Seuraavaksi: ${recommendedLabel}` : nextStep.kind === "unknown" ? "Valitse harjoitus kertausta varten" : "Hyvä pohja. Jatka harjoittelua."}</h2>
            {recommendedTopic && <p className="mt-2 text-sm font-semibold leading-6 text-white">{recommendedTopic}</p>}
            <p className="mt-3 text-sm leading-7 text-slate-300">{recommended ? `Viimeisimmissä vastauksissasi tästä ${isReadingCourse ? "harjoituksesta" : "kokeesta"} on ${recommended.incorrect} väärin ja ${recommended.skipped} vastaamatta.` : nextStep.kind === "unknown" ? "Kerrattavaa löytyi vanhoista vastauksistasi. Valitse harjoitus sisällysluettelosta ja tarkista lopuksi vastausten perustelut." : nextStep.kind === "new" ? "Aiempien harjoitusten viimeisimmät vastauksesi ovat oikein. Jatka tähän tekemättömään harjoitukseen ja laajenna osaamistasi." : "Viimeisimmissä vastauksissasi ei ole kerrattavaa. Olet jo harjoitellut kaikkia kurssin harjoituksia. Voit vahvistaa osaamistasi tekemällä niitä uudelleen."}</p>
            {recommended && <p className="mt-3 text-sm leading-7 text-slate-300">{isReadingCourse ? "Kertaa harjoituksen aineisto ja tee harjoitus uudelleen. Käy lopuksi läpi väärien ja vastaamatta jätettyjen tehtävien perustelut." : "Kertaa kokeen ennakkomateriaali ja tee sama harjoituskoe uudelleen. Tarkista sen jälkeen vastausten perustelut tulosnäkymästä."}</p>}
            {readingTip && <p className="mt-3 rounded-xl bg-white/10 p-3 text-sm leading-6"><strong>Kokeile näin:</strong> {readingTip}</p>}
            <p className="mt-4 text-xs leading-5 text-slate-400">Suositus perustuu koko kurssin viimeisimpiin vastauksiisi.</p>
            <a href={nextStep.practice?.href ?? practiceHref} className={`${action} mt-5 bg-white text-slate-950 hover:bg-blue-50`}>{nextStep.practice ? (isReadingCourse ? "Avaa harjoitus" : "Avaa harjoituskoe") : "Valitse harjoitus"}<span className="ml-2" aria-hidden="true">→</span></a>
          </section>

          <section className={card}>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Tulosten tulkinta</p>
            <h2 className="mt-3 text-xl font-bold">Jokainen yritys auttaa eteenpäin</h2>
            <div className="mt-4 flex flex-wrap gap-2"><StatusCount status="correct" count={data.summary.correct} /><StatusCount status="incorrect" count={data.summary.incorrect} /><StatusCount status="skipped" count={data.summary.skipped} /></div>
            <p className="mt-4 text-sm leading-6 text-slate-600">Tarkkuus = oikein / (oikein + väärin). Vastaamatta jätetyt näytetään erikseen. Tarkkuus ei ole koepistemäärä.</p>
            <div className="mt-4 border-t border-slate-100 pt-4">
              <p className="text-sm font-bold text-slate-900">{data.trend == null ? "Suunta tarkentuu harjoitellessa" : data.trend > 0 ? `Tarkkuus noussut ${data.trend} prosenttiyksikköä` : data.trend < 0 ? `Tarkkuus laskenut ${Math.abs(data.trend)} prosenttiyksikköä` : "Tarkkuus pysynyt samana"}</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">{data.trend == null ? "Vertailu muodostuu 40 vastatusta yrityksestä. Vastaamatta jätettyjä ei käytetä vertailuun." : "Viimeiset 20 vastattua yritystä verrattuna niitä edeltäviin 20 yritykseen valitulla ajanjaksolla."}</p>
            </div>
          </section>
        </div>

        <section id="progress-skills" className={card}>
          <SectionHeading eyebrow="Nykyinen osaaminen" title="Mihin kannattaa keskittyä?" detail="Kustakin kysymyksestä huomioidaan viimeisin vastaus valitulla ajanjaksolla. Osa-alueita arvioidaan, kun vastattuja kysymyksiä on vähintään viisi." />
          {!enoughData && <p className="mt-4 rounded-xl bg-blue-50 p-4 text-sm leading-6 text-blue-900">Tulokset ovat vielä suuntaa antavia. Jatka harjoittelua, jotta osa-alueista kertyy kattavampi kuva.</p>}
          {data.strongest && <p className="mt-4 text-sm text-emerald-800"><strong>Vahvuutesi:</strong> {data.strongest.name} · {data.strongest.accuracy} % oikein.</p>}
          <div className="mt-5 space-y-3">{data.groups.map((group) => <GroupRow key={group.name} group={group} />)}</div>
          {!isReadingCourse && data.categories.some((group) => !["Yleinen", "Harjoituskoe"].includes(group.name)) && <details className="mt-5 border-t border-slate-100 pt-4"><summary className="min-h-11 cursor-pointer py-2 text-sm font-bold text-blue-700">Näytä tulokset kategorioittain</summary><div className="mt-3 space-y-3">{data.categories.map((group) => <GroupRow key={group.name} group={group} />)}</div></details>}
        </section>

        {isReadingCourse && <details className="min-w-0 rounded-3xl border border-slate-200 bg-white p-1 shadow-sm">
          <summary className="min-h-11 cursor-pointer p-4 text-base font-bold text-slate-950 sm:p-5">Lukutaitoprofiili <span className="ml-2 text-sm font-normal text-slate-500">{VALINTAKOE_G_READING_CATEGORIES.length} taitoa ja harjoitteluvinkit</span></summary>
          <ValintakoeGReadingProfile rows={data.latest} />
        </details>}

        <section id="progress-review" className={card}>
          <SectionHeading eyebrow="Kertaa seuraavaksi" title={isReadingCourse ? "Kerrattavat harjoitukset" : "Kerrattavat harjoituskokeet"} detail="Harjoitukset on järjestetty kerrattavien tehtävien määrän mukaan. Kustakin kysymyksestä huomioidaan viimeisin vastaus valitulla ajanjaksolla. Jo korjattu virhe poistuu listalta." />
          {practiceReviews.length ? <div className="mt-5 space-y-3">{practiceReviews.slice(0, reviewLimit).map((group) => <article key={group.key} className="rounded-2xl border border-slate-200 p-4">
            <h3 className="text-base font-bold leading-7 text-slate-900">{group.practice?.title ?? "Muut kerrattavat vastaukset"}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{group.incorrect} väärin · {group.skipped} vastaamatta</p>
            <a href={group.practice?.href ?? practiceHref} className={`${action} mt-3 bg-blue-50 text-blue-700 hover:bg-blue-100`}>{group.practice ? (isReadingCourse ? "Avaa harjoitus" : "Avaa harjoituskoe") : "Valitse harjoitus"} →</a>
            <details className="mt-3 border-t border-slate-100 pt-2">
              <summary className="min-h-11 cursor-pointer py-2 text-sm font-semibold text-slate-600">Näytä kerrattavat tehtävät ({group.rows.length})</summary>
              <div className="mt-2 space-y-3">{group.rows.map((row) => <div key={questionKey(row)} className="rounded-xl bg-slate-50 p-3">
                <StatusBadge status={getProgressStatus(row)} /><p className="mt-2 text-sm leading-6 text-slate-900">{row.question}</p>
              </div>)}</div>
            </details>
          </article>)}</div> : <p className="mt-4 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-800">Viimeisimmissä vastauksissa ei ole kerrattavaa. Hienoa työtä!</p>}
          {practiceReviews.length > reviewLimit && <button type="button" onClick={() => setReviewLimit((limit) => limit + 4)} className={`${action} mt-4 bg-slate-100 text-slate-700`}>Näytä lisää kerrattavia harjoituksia</button>}
        </section>

        <section id="progress-sessions" aria-label="Suoritushistoria" className={card}>
          <SectionHeading eyebrow="Suoritushistoria" title={isReadingCourse ? "Aineistoharjoituksesi" : "Harjoituskokeesi"} detail={isReadingCourse ? "Oikeasta vastauksesta +1, väärästä tai vastaamatta jätetystä 0 pistettä." : "Koepisteet lasketaan: oikein +1, väärin −1, vastaamatta 0. Osumat huomioivat myös vastaamatta jätetyt tehtävät."} />
          {sessions.length ? <div className="mt-5 space-y-3">{sessions.slice(0, sessionLimit).map((session) => <article key={session.id} className="rounded-2xl border border-slate-200 p-4">
            <div className="flex flex-wrap items-start justify-between gap-3"><div className="min-w-0"><h3 className="text-sm font-bold leading-6">{session.name}</h3><p className="mt-1 text-xs text-slate-500">{dateLabel(session.finishedAt)}</p><p className="mt-1 text-xs font-semibold text-blue-700">{session.attemptNumber === 1 ? "Ensimmäinen suoritus" : `${session.attemptNumber}. suoritus · uusintayritys`}</p></div><p className="text-lg font-bold text-slate-950">{session.score} / {session.total} <span className="text-xs font-normal text-slate-500">p</span></p></div>
            {session.scoreChange != null && <p className="mt-3 text-xs font-semibold text-slate-600">{session.scoreChange > 0 ? `+${session.scoreChange} p edelliseen suoritukseen` : session.scoreChange < 0 ? `${session.scoreChange} p edelliseen suoritukseen` : "Sama pistemäärä kuin edellisessä suorituksessa"}</p>}
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100" role="img" aria-label={`${session.correct} oikein ${session.total} tehtävästä`}><div className="h-full rounded-full bg-blue-600" style={{width:`${Math.round(session.correct / session.total * 100)}%`}} /></div>
            <p className="mt-2 text-xs leading-6 text-slate-500">{session.correct} oikein · {session.incorrect} väärin · {session.skipped} vastaamatta</p>
            <p className="mt-1 text-xs leading-6 text-slate-500">Kesto: {formatProgressDuration(session.durationMs)}{session.paceMs != null ? ` · Tahti: ${formatProgressDuration(session.paceMs)} / tehtävä` : ""}</p>
          </article>)}</div> : <p className="mt-4 text-sm leading-6 text-slate-500">Tällä ajanjaksolla ei ole suoritustietoja. Yksittäiset vastaukset näkyvät vastaushistoriassa.</p>}
          {sessionLimit < sessions.length && <button type="button" onClick={() => setSessionLimit((n) => n + 5)} className={`${action} mt-4 bg-slate-100 text-slate-700`}>Näytä lisää suorituksia</button>}
        </section>

        <details className={card}>
          <summary className="min-h-11 cursor-pointer py-2 font-bold text-slate-950">Ajankäyttö <span className="ml-2 text-xs font-normal text-slate-500">{data.timedCount} ajoitettua yritystä</span></summary>
          <div className="mt-4 grid gap-3 sm:grid-cols-2"><Metric label="Aktiivinen vastausaika" value={formatProgressDuration(data.activeTimeMs)} detail="Ajoitettujen kysymysten aikojen summa" /><Metric label="Keskimäärin / kysymys" value={formatProgressDuration(data.averageTimeMs)} detail="Vain aidosti kysymyskohtaiset ajat" /></div>
          <p className="mt-4 text-xs leading-6 text-slate-500">Aktiivinen vastausaika ei sisällä kaikkea aineiston lukemiseen käytettyä aikaa. Kokeen kokonaiskesto näkyy suoritushistoriassa. Puuttuvaa aikatietoa ei käsitellä nollana eikä vanhaa kokeen keskitahtia yksittäisen vastauksen aikana.</p>
        </details>

        <details className={card}>
          <summary className="min-h-11 cursor-pointer py-2 font-bold text-slate-950">Vastaushistoria <span className="ml-2 text-xs font-normal text-slate-500">{data.rows.length} yritystä</span></summary>
          <div className="mt-4 text-sm font-semibold text-slate-600">
            <label htmlFor={historyFilterId}>Näytä vastaukset</label>
            <select id={historyFilterId} value={historyFilter} onChange={(event) => { setHistoryFilter(event.target.value as typeof historyFilter); setHistoryLimit(10); }} className="mt-2 block min-h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm sm:max-w-xs">
              <option value="all">Kaikki vastaukset</option><option value="correct">Oikein</option><option value="incorrect">Väärin</option><option value="skipped">Vastaamatta</option>
            </select>
          </div>
          <div className="mt-4 space-y-3">{history.slice(0, historyLimit).map((row) => <article key={row.id} className="rounded-2xl bg-slate-50 p-4">
            <StatusBadge status={getProgressStatus(row)} /><h3 className="mt-2 text-sm font-bold leading-6">{row.question}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{practiceForProgressRow(row, practices)?.title ?? row.area ?? "Yleinen"} · {dateLabel(row.answered_at)}</p>
          </article>)}</div>
          {!history.length && <p className="mt-4 text-sm text-slate-500">Tällä rajauksella ei ole vastauksia.</p>}
          {historyLimit < history.length && <button type="button" onClick={() => setHistoryLimit((n) => n + 10)} className={`${action} mt-4 bg-slate-100 text-slate-700`}>Näytä lisää vastauksia</button>}
        </details>
      </>}

      {rows.length > 0 && <details className={card}>
        <summary className="min-h-11 cursor-pointer py-2 text-sm font-semibold text-slate-500">Vastaushistorian hallinta</summary>
        <p className="mt-3 text-sm leading-6 text-slate-600">Nollaus poistaa tämän kurssin vastaushistorian. Harjoitusten ja kokeiden suoritushistoria säilyy erikseen. Kokeiden tiedot voivat palautua edistymiseen, kun avaat suorituksen uudelleen.</p>
        <button type="button" disabled={resetting || refreshing || !userId} onClick={() => void resetProgress()} className={`${action} mt-4 bg-red-50 text-red-700 disabled:opacity-50`}>{resetting ? "Nollataan…" : "Nollaa vastaushistoria"}</button>
      </details>}
    </div>
  );
}

function SectionHeading({ eyebrow, title, detail }: { eyebrow: string; title: string; detail: string }) {
  return <div><p className="text-xs font-bold uppercase tracking-widest text-blue-700">{eyebrow}</p><h2 className="mt-2 text-xl font-bold text-slate-950 sm:text-2xl">{title}</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">{detail}</p></div>;
}
function Metric({ label, value, detail }: { label: string; value: string; detail: string }) {
  return <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5"><p className="text-xs font-semibold leading-5 text-slate-500">{label}</p><p className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{value}</p><p className="mt-2 text-xs leading-5 text-slate-500">{detail}</p></div>;
}
function Badge({children, tone}: {children: ReactNode; tone: "green" | "red" | "slate"}) {
  const classes = {green:"bg-emerald-50 text-emerald-800",red:"bg-rose-50 text-rose-800",slate:"bg-slate-100 text-slate-600"};
  return <span className={`inline-flex rounded-lg px-2.5 py-1 text-xs font-semibold ${classes[tone]}`}>{children}</span>;
}
function StatusBadge({status}: {status: ProgressStatus}) {
  return <Badge tone={status === "correct" ? "green" : status === "incorrect" ? "red" : "slate"}>{status === "correct" ? "Oikein" : status === "incorrect" ? "Väärin" : "Vastaamatta"}</Badge>;
}
function StatusCount({status,count}: {status: ProgressStatus; count: number}) {
  return <Badge tone={status === "correct" ? "green" : status === "incorrect" ? "red" : "slate"}>{count} {status === "correct" ? "oikein" : status === "incorrect" ? "väärin" : "vastaamatta"}</Badge>;
}
function GroupRow({group}: {group: GroupStats}) {
  const label = group.resolved < 5 ? "Vähän dataa" : (group.accuracy ?? 0) >= 70 ? "Vahva pohja" : "Harjoittele lisää";
  return <article className="rounded-2xl bg-slate-50 p-4">
    <div className="flex flex-wrap items-start justify-between gap-3"><h3 className="min-w-0 text-sm font-bold leading-6 text-slate-900">{group.name}</h3><span className="shrink-0 text-lg font-bold text-slate-950">{percent(group.accuracy)}</span></div>
    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200" role="img" aria-label={`${percent(group.accuracy)} oikein, ${group.resolved} vastattua kysymystä`}><div className="h-full rounded-full bg-blue-600" style={{width:`${group.accuracy ?? 0}%`}} /></div>
    <div className="mt-3 flex flex-wrap items-center justify-between gap-2"><p className="text-xs leading-5 text-slate-500">{group.correct} oikein · {group.incorrect} väärin · {group.skipped} vastaamatta</p><Badge tone={group.resolved >= 5 && (group.accuracy ?? 0) >= 70 ? "green" : "slate"}>{label}</Badge></div>
  </article>;
}
