import type { CalendarEvent, CalendarRepeat } from "./types";

export type CalendarViewMode = "week" | "month" | "agenda" | "summary";
export type EventDraft = {
  id?: string;
  calendar_id: string;
  category_id: string;
  title: string;
  description: string;
  date: string;
  end_date: string;
  start: string;
  end: string;
  all_day: boolean;
  recurrence: CalendarRepeat;
  recurrence_until: string;
  important: boolean;
};

export type CalendarOccurrence = {
  key: string;
  occurrenceId: string;
  event: CalendarEvent;
  day: Date;
  start: Date;
  end: Date;
  continuesBefore: boolean;
  continuesAfter: boolean;
};

export const WEEKDAYS = ["Ma", "Ti", "Ke", "To", "Pe", "La", "Su"];
export const pad = (n: number) => String(n).padStart(2, "0");
export const dateKey = (date: Date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
export const timeLabel = (date: Date) => `${pad(date.getHours())}:${pad(date.getMinutes())}`;
export const startOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());
export function addDays(date: Date, amount: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}
export function startOfWeek(date: Date) {
  return addDays(startOfDay(date), -((date.getDay() + 6) % 7));
}
export function weekDays(date: Date) {
  const start = startOfWeek(date);
  return Array.from({ length: 7 }, (_, i) => addDays(start, i));
}
export function monthDays(date: Date) {
  const first = new Date(date.getFullYear(), date.getMonth(), 1);
  const start = startOfWeek(first);
  // Use only the rows that the month needs.
  const last = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const count = Math.ceil((calendarDaysApart(start, last) + 1) / 7) * 7;
  return Array.from({ length: count }, (_, i) => addDays(start, i));
}
function calendarDaysApart(start: Date, end: Date) {
  return Math.round((Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) -
    Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) / 86_400_000);
}
export function periodLabel(date: Date, view: CalendarViewMode) {
  if (view === "month") return date.toLocaleDateString("fi-FI", { month: "long", year: "numeric" });
  const days = weekDays(date), first = days[0], last = days[6];
  if (first.getMonth() === last.getMonth()) {
    return `${first.getDate()}.–${last.toLocaleDateString("fi-FI", { day: "numeric", month: "long", year: "numeric" })}`;
  }
  return `${first.getDate()}.${first.getMonth() + 1}.–${last.getDate()}.${last.getMonth() + 1}.${last.getFullYear()}`;
}
export function formatDuration(minutes: number) {
  const safe = Math.max(0, Math.round(minutes));
  const hours = Math.floor(safe / 60), rest = safe % 60;
  if (!hours) return `${rest} min`;
  return rest ? `${hours} h ${rest} min` : `${hours} h`;
}
export const occurrenceMinutes = (item: CalendarOccurrence) => Math.max(0, (item.end.getTime() - item.start.getTime()) / 60_000);

function repeatsOn(event: CalendarEvent, day: Date) {
  const original = startOfDay(new Date(event.start_at));
  const diff = calendarDaysApart(original, day);
  if (diff < 0 || (event.recurrence_until && dateKey(day) > event.recurrence_until)) return false;
  switch (event.recurrence) {
    case "daily": return true;
    case "weekly": return diff % 7 === 0;
    case "biweekly": return diff % 14 === 0;
    case "monthly": return day.getDate() === original.getDate();
    case "yearly": return day.getDate() === original.getDate() && day.getMonth() === original.getMonth();
    default: return diff === 0;
  }
}

/** Clip each occurrence to its visible day, including overnight and all-day events. */
export function dayOccurrences(events: CalendarEvent[], day: Date): CalendarOccurrence[] {
  const from = startOfDay(day), until = addDays(from, 1);
  const result: CalendarOccurrence[] = [];
  for (const event of events) {
    const originalStart = new Date(event.start_at), originalEnd = new Date(event.end_at);
    if (!Number.isFinite(originalStart.getTime()) || !Number.isFinite(originalEnd.getTime()) || originalEnd <= originalStart) continue;
    const span = Math.max(0, calendarDaysApart(originalStart, originalEnd));
    const addOccurrence = (start: Date, end: Date) => {
      if (start >= until || end <= from) return;
      result.push({
        key: `${event.id}:${start.toISOString()}:${dateKey(from)}`,
        occurrenceId: `${event.id}:${start.toISOString()}`,
        event, day: from,
        start: new Date(Math.max(start.getTime(), from.getTime())),
        end: new Date(Math.min(end.getTime(), until.getTime())),
        continuesBefore: start < from,
        continuesAfter: end > until,
      });
    };
    if (event.recurrence === "none") {
      addOccurrence(originalStart, originalEnd);
      continue;
    }
    for (let offset = span; offset >= 0; offset -= 1) {
      const candidate = addDays(from, -offset);
      if (!repeatsOn(event, candidate)) continue;
      const start = new Date(candidate);
      start.setHours(originalStart.getHours(), originalStart.getMinutes(), originalStart.getSeconds(), 0);
      const end = addDays(candidate, span);
      end.setHours(originalEnd.getHours(), originalEnd.getMinutes(), originalEnd.getSeconds(), 0);
      addOccurrence(start, end);
    }
  }
  return result.sort((a, b) => Number(b.event.all_day) - Number(a.event.all_day) ||
    a.start.getTime() - b.start.getTime() || a.event.title.localeCompare(b.event.title, "fi"));
}

/** Give overlapping appointments separate lanes instead of covering each other. */
export function layoutDayEvents(items: CalendarOccurrence[]) {
  const sorted = items.filter(item => !item.event.all_day)
    .sort((a, b) => a.start.getTime() - b.start.getTime() || b.end.getTime() - a.end.getTime());
  const result: (CalendarOccurrence & { lane: number; lanes: number })[] = [];
  let group: typeof result = [], laneEnds: number[] = [], groupEnd = 0;
  const flush = () => {
    group.forEach(item => result.push({ ...item, lanes: laneEnds.length }));
    group = []; laneEnds = []; groupEnd = 0;
  };
  for (const item of sorted) {
    if (group.length && item.start.getTime() >= groupEnd) flush();
    let lane = laneEnds.findIndex(end => end <= item.start.getTime());
    if (lane < 0) lane = laneEnds.length;
    laneEnds[lane] = item.end.getTime();
    groupEnd = Math.max(groupEnd, item.end.getTime());
    group.push({ ...item, lane, lanes: 1 });
  }
  flush();
  return result;
}

export function dayMinute(date: Date, day: Date) {
  return dateKey(date) > dateKey(day) ? 1440 : date.getHours() * 60 + date.getMinutes();
}
export function timelineHours(items: CalendarOccurrence[]) {
  const timed = items.filter(item => !item.event.all_day);
  const start = Math.min(7, ...timed.map(item => Math.floor(dayMinute(item.start, item.day) / 60)));
  const end = Math.max(22, ...timed.map(item => Math.ceil(dayMinute(item.end, item.day) / 60)));
  return { start, end: Math.min(24, end), hours: Array.from({ length: Math.min(24, end) - start }, (_, i) => start + i) };
}

export function newEventDraft(calendarId: string, day = new Date(), hour?: number, now = new Date()): EventDraft {
  const start = startOfDay(day);
  if (hour !== undefined) start.setHours(hour);
  else if (dateKey(day) === dateKey(now)) start.setHours(now.getHours(), Math.ceil((now.getMinutes() + 1) / 30) * 30);
  else start.setHours(9);
  const end = new Date(start.getTime() + 60 * 60_000);
  return {
    calendar_id: calendarId, category_id: "", title: "", description: "",
    date: dateKey(start), end_date: dateKey(end), start: timeLabel(start), end: timeLabel(end),
    all_day: false, recurrence: "none", recurrence_until: "", important: false,
  };
}

export function editEventDraft(event: CalendarEvent): EventDraft {
  const start = new Date(event.start_at), end = new Date(event.end_at);
  const inclusiveEnd = event.all_day && timeLabel(end) === "00:00" ? addDays(end, -1) : end;
  return {
    id: event.id, calendar_id: event.calendar_id, category_id: event.category_id ?? "",
    title: event.title, description: event.description ?? "",
    date: dateKey(start), end_date: dateKey(inclusiveEnd), start: timeLabel(start), end: timeLabel(end),
    all_day: event.all_day, recurrence: event.recurrence, recurrence_until: event.recurrence_until ?? "",
    important: event.importance !== "normal",
  };
}

export function eventDraftTimes(draft: EventDraft) {
  const parse = (date: string, time: string) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^\d{2}:\d{2}$/.test(time)) throw new Error("Tarkista tapahtuman päivä ja kellonajat.");
    const value = new Date(`${date}T${time}:00`);
    if (!Number.isFinite(value.getTime()) || dateKey(value) !== date) throw new Error("Tarkista tapahtuman päivä.");
    return value;
  };
  const start = parse(draft.date, draft.all_day ? "00:00" : draft.start);
  let end = parse(draft.end_date || draft.date, draft.all_day ? "00:00" : draft.end);
  if (draft.all_day) end = addDays(end, 1);
  else if (dateKey(end) === dateKey(start) && end < start) end = addDays(end, 1);
  if (end <= start) throw new Error("Päättymisajan tulee olla alkamisajan jälkeen.");
  if (draft.recurrence !== "none" && draft.recurrence_until && draft.recurrence_until < draft.date) {
    throw new Error("Toiston päättymispäivä ei voi olla ennen tapahtumaa.");
  }
  return { start, end };
}
