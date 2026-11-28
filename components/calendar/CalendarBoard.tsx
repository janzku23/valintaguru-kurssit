"use client";

import { useEffect, useId, useMemo, useRef, useState, type CSSProperties, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { addMonths } from "./dateUtils";
import {
  WEEKDAYS, addDays, dateKey, dayMinute, dayOccurrences, editEventDraft, eventDraftTimes,
  formatDuration, layoutDayEvents, monthDays, newEventDraft, occurrenceMinutes, pad,
  periodLabel, timeLabel, timelineHours, weekDays,
  type CalendarOccurrence, type CalendarViewMode, type EventDraft,
} from "./calendarModel";
import type { CalendarCategory, CalendarEvent, CalendarGroup, CalendarNote, CalendarRepeat } from "./types";
import styles from "./CalendarBoard.module.css";

type IconName = "back" | "chevron" | "plus" | "lock" | "calendar" | "notes" | "chart" | "close" | "repeat" | "star" | "trash" | "check" | "sliders";
function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    back: <path d="m12 5-7 7 7 7M5 12h14" />,
    chevron: <path d="m9 5 7 7-7 7" />,
    plus: <path d="M12 5v14M5 12h14" />,
    lock: <><rect x="5" y="10" width="14" height="11" rx="3" /><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M7 3v4m10-4v4M3 11h18m-13 5h.01m4 0h.01m4 0h.01" /></>,
    notes: <><rect x="5" y="3" width="14" height="18" rx="3" /><path d="M9 8h6m-6 4h6m-6 4h4" /></>,
    chart: <><path d="M4 4v16h16M9 15v-4m5 4V7m5 8V3" /></>,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    repeat: <><path d="m16 3 4 4-4 4M4 11V9a2 2 0 0 1 2-2h14M8 21l-4-4 4-4m12 0v2a2 2 0 0 1-2 2H4" /></>,
    star: <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z" />,
    trash: <><path d="M4 6h16M9 6V3h6v3m-9 0 1 15h10l1-15M10 10v6m4-6v6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    sliders: <><path d="M4 7h9m4 0h3M4 17h3m4 0h9" /><circle cx="15" cy="7" r="2" /><circle cx="9" cy="17" r="2" /></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" className={`${styles.icon} ${className}`}>{paths[name]}</svg>;
}

const palettes: Record<string, [string, string, string]> = {
  indigo: ["#7774cf", "#eeedf9", "#45427d"], violet: ["#9b79c2", "#f2edf8", "#674780"],
  rose: ["#c17d8d", "#f9edf0", "#814b5a"], emerald: ["#6c9a86", "#edf5f0", "#3c6855"],
  amber: ["#c4a363", "#faf4e7", "#856a37"], cyan: ["#6f9fa5", "#ecf5f5", "#416c72"],
  sky: ["#7d9cc3", "#eef3fa", "#49698e"], slate: ["#8b95a5", "#eff1f4", "#4f5c70"],
  zinc: ["#a2a3ab", "#f2f2f4", "#5f606a"],
};
function colorStyle(category?: CalendarCategory): CSSProperties {
  const [accent, background, ink] = palettes[category?.color_key ?? "zinc"] ?? palettes.zinc;
  return { "--event-accent": accent, "--event-bg": background, "--event-ink": ink } as CSSProperties;
}
function occurrenceTime(item: CalendarOccurrence) {
  if (item.event.all_day) return "Koko päivä";
  const end = dayMinute(item.end, item.day) === 1440 ? "24:00" : timeLabel(item.end);
  return `${timeLabel(item.start)}–${end}`;
}
const fullDate = (day: Date) => day.toLocaleDateString("fi-FI", { weekday: "long", day: "numeric", month: "long" });

export type CalendarBoardProps = {
  groups: CalendarGroup[];
  categories: CalendarCategory[];
  events: CalendarEvent[];
  notes: CalendarNote[];
  loading?: boolean;
  error?: string;
  initialDate?: string;
  onRetry: () => void;
  onSaveEvent: (draft: EventDraft) => Promise<void>;
  onDeleteEvent: (event: CalendarEvent) => Promise<void>;
  onAddNote: (text: string) => Promise<void>;
  onToggleNote: (note: CalendarNote) => Promise<void>;
  onDeleteNote: (note: CalendarNote) => Promise<void>;
};

export default function CalendarBoard(props: CalendarBoardProps) {
  const { groups, categories, events, notes, loading = false, error = "", initialDate } = props;
  const [today, setToday] = useState(() => initialDate ? new Date(initialDate) : new Date());
  const [anchor, setAnchor] = useState(today);
  const [miniMonth, setMiniMonth] = useState(today);
  const [view, setView] = useState<CalendarViewMode>("week");
  const [hiddenCalendars, setHiddenCalendars] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [draft, setDraft] = useState<EventDraft | null>(null);
  const [notesOpen, setNotesOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (initialDate) return;
    const timer = window.setInterval(() => setToday(previous => {
      const next = new Date();
      return dateKey(previous) === dateKey(next) ? previous : next;
    }), 60_000);
    return () => window.clearInterval(timer);
  }, [initialDate]);

  const categoryMap = useMemo(() => new Map(categories.map(category => [category.id, category])), [categories]);
  const filteredEvents = useMemo(() => events.filter(event => !hiddenCalendars.includes(event.calendar_id)), [events, hiddenCalendars]);
  const days = weekDays(anchor);
  const week = days.flatMap(day => dayOccurrences(filteredEvents, day));
  const selected = dayOccurrences(filteredEvents, anchor);
  const activeNotes = notes.filter(note => !note.completed);
  const defaultCalendar = groups.find(group => group.kind === "personal")?.id ?? groups[0]?.id ?? "";
  function selectDay(day: Date) { setAnchor(day); setMiniMonth(day); }
  function movePeriod(direction: number) {
    selectDay(view === "month" ? addMonths(anchor, direction) : addDays(anchor, direction * 7));
  }
  function openNew(day = anchor, hour?: number) {
    setFormError("");
    setDraft(newEventDraft(defaultCalendar, day, hour));
  }
  function openEvent(event: CalendarEvent) { setFormError(""); setDraft(editEventDraft(event)); }
  async function saveEvent(event: FormEvent) {
    event.preventDefault();
    if (!draft || busy) return;
    setBusy(true); setFormError("");
    try { await props.onSaveEvent(draft); setDraft(null); }
    catch (failure) { setFormError(failure instanceof Error ? failure.message : "Tapahtumaa ei saatu tallennettua."); }
    finally { setBusy(false); }
  }
  async function removeEvent() {
    const event = events.find(item => item.id === draft?.id);
    if (!event || busy) return;
    const message = event.recurrence === "none" ? "Poistetaanko tapahtuma?" : "Poistetaanko tapahtuma ja sen kaikki toistot?";
    if (!window.confirm(message)) return;
    setBusy(true); setFormError("");
    try { await props.onDeleteEvent(event); setDraft(null); }
    catch (failure) { setFormError(failure instanceof Error ? failure.message : "Tapahtumaa ei saatu poistettua."); }
    finally { setBusy(false); }
  }

  return (
    <main className={styles.root}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}><BrandLogo /><span>ValintaGuru</span></Link>
        <span className={styles.privateLabel}><Icon name="lock" />Vain sinulle</span>
      </header>

      <div className={styles.shell}>
        <div className={styles.pageHeading}>
          <div><h1>Kalenteri</h1><p className={styles.subtitle}>Viikkosi yhdellä silmäyksellä.</p></div>
          <button type="button" onClick={() => openNew()} disabled={loading || !groups.length} className={styles.primaryButton}><Icon name="plus" /><span>Uusi tapahtuma</span></button>
        </div>

        {error && <div role="alert" className={styles.errorBanner}><p>{error}</p><button type="button" onClick={props.onRetry}>Yritä uudelleen</button></div>}
        <button type="button" className={styles.mobileSidebarToggle} aria-expanded={sidebarOpen} aria-controls="calendar-sidebar" onClick={() => setSidebarOpen(value => !value)}><Icon name="sliders" />Kalenterit ja työkalut<Icon name="chevron" className={sidebarOpen ? styles.rotateDown : ""} /></button>

        <div className={styles.workspace}>
          <aside id="calendar-sidebar" className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}>
            <MiniCalendar month={miniMonth} selected={anchor} today={today} onMonth={direction => setMiniMonth(previous => addMonths(previous, direction))} onSelect={day => { selectDay(day); setSidebarOpen(false); }} />
            <section className={styles.railSection}>
              <h2>Kalenterit</h2>
              {groups.map(group => <label key={group.id} className={styles.calendarFilter}><input type="checkbox" checked={!hiddenCalendars.includes(group.id)} onChange={() => setHiddenCalendars(previous => previous.includes(group.id) ? previous.filter(id => id !== group.id) : [...previous, group.id])} /><span>{group.name || "Oma kalenteri"}</span></label>)}
              {!groups.length && <p className={styles.quietText}>{loading ? "Ladataan…" : "Kalentereita ei löytynyt."}</p>}
            </section>
            <div className={styles.railActions}>
              <button type="button" onClick={() => { setNotesOpen(true); setSidebarOpen(false); }}><Icon name="notes" /><span>Muistilista</span>{activeNotes.length > 0 && <span className={styles.count}>{activeNotes.length}</span>}</button>
              <button type="button" aria-pressed={view === "summary"} onClick={() => { setView(previous => previous === "summary" ? "week" : "summary"); setSidebarOpen(false); }}><Icon name="chart" /><span>Viikon yhteenveto</span></button>
            </div>
          </aside>

          <section className={styles.calendarPanel} aria-label="Kalenteri" aria-busy={loading}>
            <div className={styles.toolbar}>
              <div className={styles.period}>
                <div><h2>{view === "summary" ? "Viikon yhteenveto" : periodLabel(anchor, view)}</h2><p className={view === "week" ? styles.selectedDayLabel : ""}>{view === "summary" ? periodLabel(anchor, "week") : view === "month" ? "Kuukausinäkymä" : view === "week" ? `Valittuna ${anchor.toLocaleDateString("fi-FI", { weekday: "long", day: "numeric", month: "numeric" })}` : "Viikon tapahtumat"}</p></div>
                <div className={styles.dateNavigation}><button type="button" onClick={() => movePeriod(-1)} aria-label={view === "month" ? "Edellinen kuukausi" : "Edellinen viikko"}><Icon name="chevron" className={styles.rotateBack} /></button><button type="button" onClick={() => selectDay(today)} className={styles.todayButton}>Tänään</button><button type="button" onClick={() => movePeriod(1)} aria-label={view === "month" ? "Seuraava kuukausi" : "Seuraava viikko"}><Icon name="chevron" /></button></div>
              </div>
              <div className={styles.viewTabs} role="group" aria-label="Kalenterin näkymä">{([["week", "Viikko"], ["month", "Kuukausi"], ["agenda", "Lista"]] as const).map(([mode, label]) => <button type="button" key={mode} aria-pressed={view === mode} onClick={() => setView(mode)}>{label}</button>)}</div>
            </div>

            {loading ? <div className={styles.loading} role="status"><Icon name="calendar" /><p>Ladataan kalenteria…</p></div> : <>
              {view === "week" && <>
                <div className={styles.desktopWeek}><WeekGrid days={days} occurrences={week} categories={categoryMap} today={today} selected={anchor} onSelect={selectDay} onCreate={openNew} onEdit={openEvent} /></div>
                <div className={styles.mobileWeek}><div className={styles.mobileDayPicker}>{days.map(day => <button type="button" key={dateKey(day)} aria-pressed={dateKey(day) === dateKey(anchor)} aria-current={dateKey(day) === dateKey(today) ? "date" : undefined} onClick={() => selectDay(day)}><span>{WEEKDAYS[(day.getDay() + 6) % 7]}</span><strong>{day.getDate()}</strong><i className={dayOccurrences(filteredEvents, day).length ? styles.hasEvents : ""} /></button>)}</div><DayAgenda day={anchor} items={selected} categories={categoryMap} onEdit={openEvent} /></div>
              </>}
              {view === "month" && <><MonthGrid anchor={anchor} events={filteredEvents} categories={categoryMap} today={today} onSelect={selectDay} onEdit={openEvent} /><div className={styles.monthDetail}><DayAgenda day={anchor} items={selected} categories={categoryMap} onEdit={openEvent} /></div></>}
              {view === "agenda" && <div className={styles.agendaView}>{week.length ? days.filter(day => dayOccurrences(filteredEvents, day).length).map(day => <DayAgenda key={dateKey(day)} day={day} items={dayOccurrences(filteredEvents, day)} categories={categoryMap} onEdit={openEvent} />) : <EmptyCalendar />}</div>}
              {view === "summary" && <WeekSummary occurrences={week} categories={categoryMap} onEdit={openEvent} />}
            </>}
            {groups.length > 0 && groups.every(group => hiddenCalendars.includes(group.id)) && <footer className={styles.panelFooter}>Kalenterit on piilotettu. Valitse kalenteri sivupalkista.</footer>}
          </section>
        </div>
      </div>

      {draft && <CalendarDialog title={draft.id ? "Muokkaa tapahtumaa" : "Uusi tapahtuma"} onClose={() => { if (!busy) setDraft(null); }} busy={busy}>
        <form onSubmit={saveEvent}>
          <fieldset disabled={busy} className={styles.dialogBody}>
            <label className={styles.field}><span>Tapahtuman nimi</span><input autoFocus required maxLength={200} value={draft.title} onChange={event => setDraft({ ...draft, title: event.target.value })} placeholder="Esimerkiksi aineistoharjoitus" className={styles.titleInput} /></label>
            <div className={styles.formRow}>
              <label className={styles.field}><span>Päivä</span><input required type="date" value={draft.date} onChange={event => setDraft({ ...draft, date: event.target.value, end_date: draft.end_date === draft.date ? event.target.value : draft.end_date })} /></label>
              {!draft.all_day && <><label className={styles.field}><span>Alkaa</span><input required type="time" value={draft.start} onChange={event => setDraft({ ...draft, start: event.target.value })} /></label><label className={styles.field}><span>Päättyy</span><input required type="time" value={draft.end} onChange={event => setDraft({ ...draft, end: event.target.value })} /></label></>}
            </div>
            <div className={styles.formChecks}><label><input type="checkbox" checked={draft.all_day} onChange={event => setDraft({ ...draft, all_day: event.target.checked })} />Koko päivä</label><label><input type="checkbox" checked={draft.important} onChange={event => setDraft({ ...draft, important: event.target.checked })} /><Icon name="star" />Tärkeä</label></div>
            <OvernightHint draft={draft} />
            <div className={styles.formRow}>
              <label className={styles.field}><span>Kategoria <small>valinnainen</small></span><select value={draft.category_id} onChange={event => setDraft({ ...draft, category_id: event.target.value })}><option value="">Ei kategoriaa</option>{categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}</select></label>
              {groups.length > 1 && <label className={styles.field}><span>Kalenteri</span><select value={draft.calendar_id} onChange={event => setDraft({ ...draft, calendar_id: event.target.value })}>{groups.map(group => <option key={group.id} value={group.id}>{group.name}</option>)}</select></label>}
            </div>
            <details className={styles.extraFields}><summary>Toisto ja lisätiedot<Icon name="chevron" /></summary><div>
              <div className={styles.formRow}><label className={styles.field}><span>Toistuvuus</span><select value={draft.recurrence} onChange={event => setDraft({ ...draft, recurrence: event.target.value as CalendarRepeat })}><option value="none">Ei toistu</option><option value="daily">Joka päivä</option><option value="weekly">Joka viikko</option><option value="biweekly">Joka toinen viikko</option><option value="monthly">Joka kuukausi</option><option value="yearly">Joka vuosi</option></select></label>{draft.recurrence !== "none" && <label className={styles.field}><span>Toistuu asti</span><input type="date" min={draft.date} value={draft.recurrence_until} onChange={event => setDraft({ ...draft, recurrence_until: event.target.value })} /></label>}</div>
              <label className={styles.field}><span>Päättymispäivä</span><input type="date" required min={draft.date} value={draft.end_date} onChange={event => setDraft({ ...draft, end_date: event.target.value })} /></label>
              <label className={styles.field}><span>Lisätiedot</span><textarea rows={3} value={draft.description} onChange={event => setDraft({ ...draft, description: event.target.value })} placeholder="Paikka, linkki tai oma muistiinpano" /></label>
            </div></details>
            {draft.id && draft.recurrence !== "none" && <p className={styles.formHint}><Icon name="repeat" />Muutos koskee myös tapahtuman muita toistoja.</p>}
            {formError && <p role="alert" className={styles.formError}>{formError}</p>}
          </fieldset>
          <div className={styles.dialogFooter}>{draft.id ? <button type="button" className={styles.deleteButton} disabled={busy} onClick={() => void removeEvent()}><Icon name="trash" /><span>Poista</span></button> : <span />}<div><button type="button" className={styles.secondaryButton} disabled={busy} onClick={() => setDraft(null)}>Peruuta</button><button type="submit" className={styles.primaryButton} disabled={busy}>{busy ? "Tallennetaan…" : "Tallenna"}</button></div></div>
        </form>
      </CalendarDialog>}
      {notesOpen && <NotesDialog notes={notes} onClose={() => setNotesOpen(false)} onAdd={props.onAddNote} onToggle={props.onToggleNote} onDelete={props.onDeleteNote} />}
    </main>
  );
}

function MiniCalendar({ month, selected, today, onMonth, onSelect }: { month: Date; selected: Date; today: Date; onMonth: (direction: number) => void; onSelect: (day: Date) => void }) {
  return <section className={styles.miniCalendar} aria-label="Valitse päivä"><div className={styles.miniHeading}><h2>{month.toLocaleDateString("fi-FI", { month: "long", year: "numeric" })}</h2><div><button type="button" aria-label="Päivävalitsimen edellinen kuukausi" onClick={() => onMonth(-1)}><Icon name="chevron" className={styles.rotateBack} /></button><button type="button" aria-label="Päivävalitsimen seuraava kuukausi" onClick={() => onMonth(1)}><Icon name="chevron" /></button></div></div><div className={styles.miniDays}>{WEEKDAYS.map(day => <span key={day} className={styles.miniWeekday}>{day}</span>)}{monthDays(month).map(day => <button type="button" key={dateKey(day)} aria-label={fullDate(day)} aria-pressed={dateKey(day) === dateKey(selected)} aria-current={dateKey(day) === dateKey(today) ? "date" : undefined} className={day.getMonth() !== month.getMonth() ? styles.outsideMonth : ""} onClick={() => onSelect(day)}>{day.getDate()}</button>)}</div></section>;
}

function WeekGrid({ days, occurrences, categories, today, selected, onSelect, onCreate, onEdit }: { days: Date[]; occurrences: CalendarOccurrence[]; categories: Map<string, CalendarCategory>; today: Date; selected: Date; onSelect: (date: Date) => void; onCreate: (date: Date, hour: number) => void; onEdit: (event: CalendarEvent) => void }) {
  const range = timelineHours(occurrences), rowHeight = 60;
  const scrollRef = useRef<HTMLDivElement>(null);
  const weekKey = dateKey(days[0]);
  const firstHour = Math.min(8, ...occurrences.filter(item => !item.event.all_day).map(item => Math.floor(dayMinute(item.start, item.day) / 60)));
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (scrollRef.current) scrollRef.current.scrollTop = Math.max(0, (firstHour - range.start) * rowHeight);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [weekKey, firstHour, range.start]);
  const allDay = occurrences.some(item => item.event.all_day);
  return <div ref={scrollRef} className={styles.weekScroll}>
    <div className={styles.weekHeading}><div className={styles.timezone}>AIKA</div>{days.map(day => <button type="button" key={dateKey(day)} onClick={() => onSelect(day)} aria-label={fullDate(day)} aria-pressed={dateKey(day) === dateKey(selected)} aria-current={dateKey(day) === dateKey(today) ? "date" : undefined} className={dateKey(day) === dateKey(today) ? styles.todayHeading : ""}><span>{day.toLocaleDateString("fi-FI", { weekday: "short" })}</span><strong>{day.getDate()}</strong></button>)}</div>
    {allDay && <div className={styles.allDayRow}><span>Koko päivä</span>{days.map(day => <div key={dateKey(day)}>{occurrences.filter(item => item.event.all_day && dateKey(item.day) === dateKey(day)).map(item => <button type="button" key={item.key} style={colorStyle(categories.get(item.event.category_id ?? ""))} className={styles.allDayEvent} onClick={() => onEdit(item.event)}>{item.event.title}</button>)}</div>)}</div>}
    <div className={styles.weekBody} style={{ height: range.hours.length * rowHeight }}><div className={styles.hourLabels}>{range.hours.map(hour => <span key={hour} style={{ height: rowHeight }}>{pad(hour)}<small>:00</small></span>)}</div>{days.map(day => <div key={dateKey(day)} data-selected={dateKey(day) === dateKey(selected)} className={`${styles.dayColumn} ${dateKey(day) === dateKey(today) ? styles.todayColumn : ""} ${dateKey(day) === dateKey(selected) ? styles.selectedColumn : ""}`}>
      {range.hours.map(hour => <button type="button" key={hour} tabIndex={-1} aria-label={`Lisää tapahtuma ${fullDate(day)} kello ${hour}`} className={styles.hourSlot} style={{ height: rowHeight }} onDoubleClick={() => onCreate(day, hour)} />)}
      {layoutDayEvents(occurrences.filter(item => dateKey(item.day) === dateKey(day))).map(item => {
        const start = dayMinute(item.start, day), end = dayMinute(item.end, day), height = Math.max(25, (end - start) - 4);
        return <button type="button" key={item.key} onClick={() => onEdit(item.event)} title={`${item.event.title} · ${occurrenceTime(item)}`} aria-label={`${item.event.title}, ${fullDate(day)}, ${occurrenceTime(item)}`} className={styles.eventCard} style={{ ...colorStyle(categories.get(item.event.category_id ?? "")), top: start - range.start * 60 + 2, height, left: `calc(${item.lane / item.lanes * 100}% + 4px)`, width: `calc(${100 / item.lanes}% - 8px)` }}><span className={styles.eventTitle}>{item.event.title}{item.event.importance !== "normal" && <Icon name="star" />}</span>{height >= 40 && <span className={styles.eventTime}>{item.lanes > 1 ? timeLabel(item.start) : occurrenceTime(item)}</span>}{height >= 65 && item.lanes === 1 && <span className={styles.eventCategory}>{categories.get(item.event.category_id ?? "")?.name}{item.event.recurrence !== "none" && <Icon name="repeat" />}</span>}</button>;
      })}
    </div>)}</div>
  </div>;
}

function MonthGrid({ anchor, events, categories, today, onSelect, onEdit }: { anchor: Date; events: CalendarEvent[]; categories: Map<string, CalendarCategory>; today: Date; onSelect: (date: Date) => void; onEdit: (event: CalendarEvent) => void }) {
  return <div className={styles.monthGrid}>{WEEKDAYS.map(day => <div key={day} className={styles.monthWeekday}>{day}</div>)}{monthDays(anchor).map(day => {
    const items = dayOccurrences(events, day), selected = dateKey(day) === dateKey(anchor);
    return <div key={dateKey(day)} className={`${styles.monthCell} ${day.getMonth() !== anchor.getMonth() ? styles.monthOutside : ""} ${selected ? styles.monthSelected : ""}`}><button type="button" className={styles.monthSelectDay} aria-label={fullDate(day)} aria-pressed={selected} onClick={() => onSelect(day)} /><span className={`${styles.monthDayNumber} ${dateKey(day) === dateKey(today) ? styles.monthToday : ""}`}>{day.getDate()}</span><div className={styles.monthEvents}>{items.slice(0, 3).map(item => <button type="button" key={item.key} onClick={() => onEdit(item.event)} style={colorStyle(categories.get(item.event.category_id ?? ""))}><i />{!item.event.all_day && <time>{timeLabel(item.start)}</time>}<span>{item.event.title}</span></button>)}{items.length > 3 && <button type="button" className={styles.moreEvents} onClick={() => onSelect(day)}>+{items.length - 3} muuta</button>}</div><div className={styles.monthDots} aria-hidden="true">{items.slice(0, 3).map(item => <i key={item.key} style={colorStyle(categories.get(item.event.category_id ?? ""))} />)}{items.length > 3 && <span>+{items.length - 3}</span>}</div></div>;
  })}</div>;
}

function DayAgenda({ day, items, categories, onEdit }: { day: Date; items: CalendarOccurrence[]; categories: Map<string, CalendarCategory>; onEdit: (event: CalendarEvent) => void }) {
  return <section className={styles.dayAgenda}><div className={styles.agendaHeading}><h3>{fullDate(day)}</h3><span>{items.length ? `${items.length} tapahtuma${items.length === 1 ? "" : "a"}` : "Vapaa päivä"}</span></div>{items.length ? <div className={styles.agendaItems}>{items.map(item => <button type="button" key={item.key} onClick={() => onEdit(item.event)} className={styles.agendaItem} style={colorStyle(categories.get(item.event.category_id ?? ""))}><div className={styles.agendaTime}>{item.event.all_day ? <span>Koko<br />päivä</span> : <><strong>{timeLabel(item.start)}</strong><span>{dayMinute(item.end, day) === 1440 ? "24:00" : timeLabel(item.end)}</span></>}</div><div className={styles.agendaEventBody}><strong>{item.event.title}</strong><span>{categories.get(item.event.category_id ?? "")?.name || "Oma tapahtuma"}{item.event.recurrence !== "none" && <Icon name="repeat" />}{item.event.importance !== "normal" && <Icon name="star" />}</span></div><Icon name="chevron" /></button>)}</div> : <p className={styles.dayEmpty}>Tälle päivälle ei ole merkitty tapahtumia.</p>}</section>;
}

function EmptyCalendar() {
  return <div className={styles.emptyCalendar}><div><Icon name="calendar" /></div><h3>Viikko on vielä avoin.</h3><p>Merkityt tapahtumat näkyvät tässä aikajärjestyksessä.</p></div>;
}

function WeekSummary({ occurrences, categories, onEdit }: { occurrences: CalendarOccurrence[]; categories: Map<string, CalendarCategory>; onEdit: (event: CalendarEvent) => void }) {
  const timed = occurrences.filter(item => !item.event.all_day);
  const study = timed.filter(item => item.event.is_study || categories.get(item.event.category_id ?? "")?.kind === "study");
  const total = timed.reduce((sum, item) => sum + occurrenceMinutes(item), 0), studyMinutes = study.reduce((sum, item) => sum + occurrenceMinutes(item), 0);
  const totals = new Map<string, number>();
  timed.forEach(item => { const key = item.event.category_id ?? ""; totals.set(key, (totals.get(key) ?? 0) + occurrenceMinutes(item)); });
  const breakdown = [...totals].sort((a, b) => b[1] - a[1]);
  const unique = [...new Map(occurrences.map(item => [item.occurrenceId, item])).values()];
  const important = unique.filter(item => item.event.importance !== "normal").slice(0, 5);
  return <div className={styles.summary}><p className={styles.summaryIntro}>Viikolle merkitty aika. Luvut kertovat suunnitelmastasi.</p><div className={styles.summaryMetrics}>{[["Opiskelua", formatDuration(studyMinutes)], ["Muita menoja", formatDuration(total - studyMinutes)], ["Tapahtumia", String(unique.length)]].map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><div className={styles.summaryColumns}><section><h3>Ajankäyttö</h3>{breakdown.length ? breakdown.map(([id, minutes]) => <div key={id} className={styles.breakdown} style={colorStyle(categories.get(id))}><div><span><i />{categories.get(id)?.name ?? "Muu"}</span><strong>{formatDuration(minutes)}</strong></div><div className={styles.bar}><span style={{ width: `${minutes / (total || 1) * 100}%` }} /></div></div>) : <p className={styles.quietText}>Ei vielä ajastettuja tapahtumia.</p>}</section><section><h3>Tärkeät tällä viikolla</h3>{important.length ? important.map(item => <button type="button" key={item.key} onClick={() => onEdit(item.event)} className={styles.importantItem}><Icon name="star" /><span><strong>{item.event.title}</strong><small>{item.day.toLocaleDateString("fi-FI", { weekday: "short", day: "numeric", month: "numeric" })} · {occurrenceTime(item)}</small></span><Icon name="chevron" /></button>) : <p className={styles.quietText}>Ei tärkeiksi merkittyjä tapahtumia.</p>}</section></div></div>;
}

function OvernightHint({ draft }: { draft: EventDraft }) {
  let overnightEnd: Date | null = null;
  try {
    const { start, end } = eventDraftTimes(draft);
    if (!draft.all_day && dateKey(start) !== dateKey(end)) overnightEnd = end;
  } catch { /* Incomplete date fields are validated when saving. */ }
  if (!overnightEnd) return null;
  return <p className={styles.formHint}>Päättyy {overnightEnd.toLocaleDateString("fi-FI", { weekday: "short", day: "numeric", month: "numeric" })} klo {timeLabel(overnightEnd)}.</p>;
}

function CalendarDialog({ title, children, onClose, busy = false }: { title: string; children: ReactNode; onClose: () => void; busy?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null), titleId = useId();
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    dialog.showModal();
    dialog.querySelector<HTMLElement>("input:not([type='checkbox']), textarea")?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { dialog.close(); document.body.style.overflow = previousOverflow; };
  }, []);
  return <dialog ref={ref} aria-labelledby={titleId} className={styles.dialog} onCancel={event => { event.preventDefault(); if (!busy) onClose(); }} onClick={event => { if (event.target === event.currentTarget && !busy) onClose(); }}><div className={styles.dialogInner}><div className={styles.dialogHeader}><div><p>OMA KALENTERI</p><h2 id={titleId}>{title}</h2></div><button type="button" disabled={busy} onClick={onClose} aria-label="Sulje ikkuna"><Icon name="close" /></button></div>{children}</div></dialog>;
}

function NotesDialog({ notes, onClose, onAdd, onToggle, onDelete }: { notes: CalendarNote[]; onClose: () => void; onAdd: (text: string) => Promise<void>; onToggle: (note: CalendarNote) => Promise<void>; onDelete: (note: CalendarNote) => Promise<void> }) {
  const [text, setText] = useState(""), [error, setError] = useState(""), [busy, setBusy] = useState(false);
  async function action(run: () => Promise<void>) {
    if (busy) return;
    setBusy(true); setError("");
    try { await run(); } catch (failure) { setError(failure instanceof Error ? failure.message : "Muutos ei onnistunut."); } finally { setBusy(false); }
  }
  const active = notes.filter(note => !note.completed), completed = notes.filter(note => note.completed);
  const noteRow = (note: CalendarNote) => <div key={note.id} className={`${styles.noteRow} ${note.completed ? styles.noteCompleted : ""}`}><label><input type="checkbox" disabled={busy} checked={note.completed} onChange={() => void action(() => onToggle(note))} /><span>{note.text}</span></label><button type="button" disabled={busy} aria-label={`Poista muistiinpano: ${note.text}`} onClick={() => void action(() => onDelete(note))}><Icon name="trash" /></button></div>;
  return <CalendarDialog title="Muistilista" onClose={onClose} busy={busy}><div className={styles.dialogBody}><p className={styles.notesIntro}>Pienet muistettavat asiat, ilman paikkaa aikataulussa.</p><form className={styles.noteForm} onSubmit={event => { event.preventDefault(); if (text.trim()) void action(async () => { await onAdd(text.trim()); setText(""); }); }}><input autoFocus required aria-label="Uusi muistiinpano" value={text} onChange={event => setText(event.target.value)} placeholder="Kirjoita muistiin…" /><button type="submit" disabled={busy || !text.trim()} aria-label="Lisää muistiinpano"><Icon name="plus" /></button></form>{error && <p role="alert" className={styles.formError}>{error}</p>}<div className={styles.noteList}>{active.map(noteRow)}{!notes.length && <p className={styles.quietText}>Ei vielä muistiinpanoja.</p>}</div>{completed.length > 0 && <details className={styles.completedNotes}><summary>Valmiit ({completed.length})</summary>{completed.map(noteRow)}</details>}</div><div className={styles.dialogFooter}><span /><button type="button" className={styles.secondaryButton} onClick={onClose} disabled={busy}>Valmis</button></div></CalendarDialog>;
}
