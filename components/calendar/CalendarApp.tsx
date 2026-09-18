"use client";

import {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import logo from "@/assets/logo.png";
import type {
  CalendarCategory,
  CalendarEvent,
  CalendarGroup,
  CalendarInvite,
  CalendarMember,
  CalendarNote,
  CalendarRepeat,
} from "./types";

type ViewMode = "week" | "month" | "stats";

type EventDraft = {
  id?: string;
  calendar_id: string;
  category_id: string;
  title: string;
  description: string;
  date: string;
  start: string;
  end: string;
  all_day: boolean;
  recurrence: CalendarRepeat;
  recurrence_until: string;
  important: boolean;
};

const DAY_MS = 86_400_000;
const HOUR_START = 5;
const HOUR_END = 23;
const HOURS = Array.from(
  { length: HOUR_END - HOUR_START + 1 },
  (_, index) => index + HOUR_START,
);

const COLOR_CLASSES: Record<
  string,
  { bg: string; border: string; text: string; dot: string }
> = {
  indigo: {
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    text: "text-indigo-950",
    dot: "bg-indigo-500",
  },
  slate: {
    bg: "bg-slate-100",
    border: "border-slate-300",
    text: "text-slate-950",
    dot: "bg-slate-600",
  },
  rose: {
    bg: "bg-rose-50",
    border: "border-rose-200",
    text: "text-rose-950",
    dot: "bg-rose-500",
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-950",
    dot: "bg-emerald-500",
  },
  violet: {
    bg: "bg-violet-50",
    border: "border-violet-200",
    text: "text-violet-950",
    dot: "bg-violet-500",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-950",
    dot: "bg-amber-500",
  },
  cyan: {
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    text: "text-cyan-950",
    dot: "bg-cyan-500",
  },
  sky: {
    bg: "bg-sky-50",
    border: "border-sky-200",
    text: "text-sky-950",
    dot: "bg-sky-500",
  },
  zinc: {
    bg: "bg-zinc-100",
    border: "border-zinc-300",
    text: "text-zinc-950",
    dot: "bg-zinc-500",
  },
};

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

function toLocalDateInput(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function startOfDay(date: Date) {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  return next;
}

function startOfWeek(date: Date) {
  const next = startOfDay(date);
  const day = next.getDay() || 7;
  next.setDate(next.getDate() - day + 1);
  return next;
}

function addDays(date: Date, amount: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function addMonths(date: Date, amount: number) {
  const next = new Date(date);
  next.setMonth(next.getMonth() + amount);
  return next;
}

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function minutesBetween(start: string | Date, end: string | Date) {
  return Math.max(
    0,
    Math.round((new Date(end).getTime() - new Date(start).getTime()) / 60_000),
  );
}

function formatDuration(minutes: number) {
  const safe = Math.max(0, Math.round(minutes));
  const hours = Math.floor(safe / 60);
  const mins = safe % 60;

  if (!hours) return `${mins} min`;
  if (!mins) return `${hours} h`;
  return `${hours} h ${mins} min`;
}

function combineLocal(date: string, time: string) {
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  return new Date(year, month - 1, day, hour, minute, 0, 0);
}

function eventOccursOn(event: CalendarEvent, day: Date) {
  const target = startOfDay(day);
  const start = startOfDay(new Date(event.start_at));
  const until = event.recurrence_until
    ? startOfDay(new Date(`${event.recurrence_until}T23:59:59`))
    : null;

  if (target < start || (until && target > until)) return false;

  const diffDays = Math.round((target.getTime() - start.getTime()) / DAY_MS);
  if (diffDays < 0) return false;

  switch (event.recurrence) {
    case "daily":
      return true;
    case "weekly":
      return diffDays % 7 === 0;
    case "biweekly":
      return diffDays % 14 === 0;
    case "monthly":
      return target.getDate() === start.getDate();
    case "yearly":
      return (
        target.getDate() === start.getDate() &&
        target.getMonth() === start.getMonth()
      );
    default:
      return diffDays === 0;
  }
}

function occurrenceForDay(event: CalendarEvent, day: Date) {
  const originalStart = new Date(event.start_at);
  const originalEnd = new Date(event.end_at);
  const duration = originalEnd.getTime() - originalStart.getTime();

  const start = new Date(day);
  start.setHours(
    originalStart.getHours(),
    originalStart.getMinutes(),
    originalStart.getSeconds(),
    0,
  );

  return {
    start,
    end: new Date(start.getTime() + duration),
  };
}

function weekLabel(anchor: Date) {
  const start = startOfWeek(anchor);
  const end = addDays(start, 6);

  return `${start.getDate()}.${start.getMonth() + 1}.–${end.getDate()}.${
    end.getMonth() + 1
  }.${end.getFullYear()}`;
}

function monthLabel(date: Date) {
  return date.toLocaleDateString("fi-FI", {
    month: "long",
    year: "numeric",
  });
}

function memberLabel(
  ownerId: string,
  currentUserId: string,
  members: CalendarMember[],
) {
  if (ownerId === currentUserId) return "Sinä";

  const member = members.find((item) => item.user_id === ownerId);

  return (
    member?.display_name ||
    member?.email?.split("@")[0] ||
    "Perheenjäsen"
  );
}

function recurrenceLabel(event: CalendarEvent) {
  const start = new Date(event.start_at);
  const time = event.all_day
    ? "Koko päivä"
    : `${pad(start.getHours())}:${pad(start.getMinutes())}`;

  const end = new Date(event.end_at);
  const timeRange = event.all_day
    ? "Koko päivä"
    : `${pad(start.getHours())}:${pad(start.getMinutes())}–${pad(
        end.getHours(),
      )}:${pad(end.getMinutes())}`;

  switch (event.recurrence) {
    case "daily":
      return `Joka päivä · ${timeRange}`;
    case "weekly":
      return `Joka ${start
        .toLocaleDateString("fi-FI", { weekday: "long" })
        .toLowerCase()} · ${timeRange}`;
    case "biweekly":
      return `Joka toinen ${start
        .toLocaleDateString("fi-FI", { weekday: "long" })
        .toLowerCase()} · ${timeRange}`;
    case "monthly":
      return `Joka kuukauden ${start.getDate()}. päivä · ${timeRange}`;
    case "yearly":
      return `Joka vuosi ${start.getDate()}.${
        start.getMonth() + 1
      }. · ${timeRange}`;
    default:
      return time;
  }
}

function emptyDraft(calendarId = ""): EventDraft {
  const start = new Date();
  start.setMinutes(0, 0, 0);
  start.setHours(start.getHours() + 1);

  const end = new Date(start.getTime() + 60 * 60_000);

  return {
    calendar_id: calendarId,
    category_id: "",
    title: "",
    description: "",
    date: toLocalDateInput(start),
    start: `${pad(start.getHours())}:00`,
    end: `${pad(end.getHours())}:00`,
    all_day: false,
    recurrence: "none",
    recurrence_until: "",
    important: false,
  };
}

export default function CalendarApp() {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [accessAllowed, setAccessAllowed] = useState(false);
  const [error, setError] = useState("");

  const [viewMode, setViewMode] = useState<ViewMode>("week");
  const [anchor, setAnchor] = useState(new Date());

  const [groups, setGroups] = useState<CalendarGroup[]>([]);
  const [members, setMembers] = useState<CalendarMember[]>([]);
  const [categories, setCategories] = useState<CalendarCategory[]>([]);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [notes, setNotes] = useState<CalendarNote[]>([]);
  const [invites, setInvites] = useState<CalendarInvite[]>([]);
  const [visibleCalendars, setVisibleCalendars] = useState<Set<string>>(
    new Set(),
  );

  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [draft, setDraft] = useState<EventDraft>(emptyDraft());
  const [savingEvent, setSavingEvent] = useState(false);

  const [notesOpen, setNotesOpen] = useState(false);
  const [newNote, setNewNote] = useState("");

  const [familyOpen, setFamilyOpen] = useState(false);
  const [familyName, setFamilyName] = useState("Perhe");
  const [inviteEmail, setInviteEmail] = useState("");
  const [familyBusy, setFamilyBusy] = useState(false);

  const currentUserId = user?.id ?? "";

  const loadAll = useCallback(async () => {
    if (!user) return;

    setError("");

    try {
      const [
        groupsResult,
        membersResult,
        categoriesResult,
        eventsResult,
        notesResult,
        invitesResult,
      ] = await Promise.all([
        supabase
          .from("calendar_groups")
          .select("*")
          .order("kind", { ascending: false })
          .order("created_at", { ascending: true }),
        supabase.from("calendar_member_directory").select("*"),
        supabase
          .from("calendar_categories")
          .select("*")
          .order("created_at", { ascending: true }),
        supabase
          .from("calendar_events_visible")
          .select("*")
          .order("start_at", { ascending: true }),
        supabase
          .from("calendar_notes")
          .select("*")
          .order("completed", { ascending: true })
          .order("important", { ascending: false })
          .order("created_at", { ascending: false }),
    supabase
  .from("calendar_invites")
  .select("*, calendar_groups(name)")
  .eq("status", "pending")
  .eq("invitee_email", user.email?.trim().toLowerCase() ?? "")
          .order("created_at", { ascending: false }),
      ]);

      const loadError =
        groupsResult.error ||
        membersResult.error ||
        categoriesResult.error ||
        eventsResult.error ||
        notesResult.error ||
        invitesResult.error;

      if (loadError) throw loadError;

      const loadedGroups = (groupsResult.data || []) as CalendarGroup[];

      setGroups(loadedGroups);
      setMembers((membersResult.data || []) as CalendarMember[]);
      setCategories((categoriesResult.data || []) as CalendarCategory[]);
      setEvents((eventsResult.data || []) as CalendarEvent[]);
      setNotes((notesResult.data || []) as CalendarNote[]);
      setInvites((invitesResult.data || []) as CalendarInvite[]);

      setVisibleCalendars((previous) => {
        if (previous.size) return previous;
        return new Set(loadedGroups.map((item) => item.id));
      });

      if (!draft.calendar_id && loadedGroups[0]) {
        setDraft((previous) => ({
          ...previous,
          calendar_id: loadedGroups[0].id,
        }));
      }
    } catch (loadError) {
      console.error(loadError);
      setError(
        loadError instanceof Error
          ? loadError.message
          : "Kalenterin tietojen lataaminen epäonnistui.",
      );
    }
  }, [draft.calendar_id, supabase, user]);

  useEffect(() => {
    async function initialize() {
      setLoading(true);
      setError("");

      try {
        const {
          data: { user: currentUser },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError) throw userError;

        if (!currentUser) {
          router.replace("/kirjaudu?next=/kalenteri");
          return;
        }

        setUser(currentUser);

        const { data: allowed, error: accessError } = await supabase.rpc(
          "has_valintaguru_calendar_access",
        );

        if (accessError) throw accessError;

        setAccessAllowed(Boolean(allowed));

        if (!allowed) return;

        const { error: setupError } = await supabase.rpc(
          "ensure_calendar_setup",
          {
            p_display_name:
              currentUser.user_metadata?.full_name ||
              currentUser.user_metadata?.name ||
              currentUser.email?.split("@")[0] ||
              "Käyttäjä",
          },
        );

        if (setupError) throw setupError;
      } catch (initializeError) {
        console.error(initializeError);
        setError(
          initializeError instanceof Error
            ? initializeError.message
            : "Kalenterin avaaminen epäonnistui.",
        );
      } finally {
        setLoading(false);
      }
    }

    void initialize();
  }, [router, supabase]);

  useEffect(() => {
    if (user && accessAllowed && !loading) {
      void loadAll();
    }
  }, [accessAllowed, loadAll, loading, user]);

  const personalCalendar = useMemo(
    () =>
      groups.find(
        (group) =>
          group.kind === "personal" && group.owner_id === currentUserId,
      ) || groups[0],
    [currentUserId, groups],
  );

  const familyCalendars = useMemo(
    () => groups.filter((group) => group.kind === "family"),
    [groups],
  );

  const categoryById = useMemo(
    () => new Map(categories.map((category) => [category.id, category])),
    [categories],
  );

  const filteredEvents = useMemo(
    () => events.filter((event) => visibleCalendars.has(event.calendar_id)),
    [events, visibleCalendars],
  );

  const weekDays = useMemo(() => {
    const start = startOfWeek(anchor);
    return Array.from({ length: 7 }, (_, index) => addDays(start, index));
  }, [anchor]);

  const monthDays = useMemo(() => {
    const first = startOfMonth(anchor);
    const gridStart = startOfWeek(first);
    return Array.from({ length: 42 }, (_, index) =>
      addDays(gridStart, index),
    );
  }, [anchor]);

  const weekOccurrences = useMemo(() => {
    const list: Array<{
      event: CalendarEvent;
      day: Date;
      start: Date;
      end: Date;
    }> = [];

    for (const day of weekDays) {
      for (const event of filteredEvents) {
        if (eventOccursOn(event, day)) {
          list.push({
            event,
            day,
            ...occurrenceForDay(event, day),
          });
        }
      }
    }

    return list;
  }, [filteredEvents, weekDays]);

  const categoryStats = useMemo(() => {
    const totals = new Map<string, number>();

    for (const item of weekOccurrences) {
      const key = item.event.category_id || "__none__";
      totals.set(
        key,
        (totals.get(key) || 0) + minutesBetween(item.start, item.end),
      );
    }

    return Array.from(totals.entries())
      .map(([id, minutes]) => ({
        id,
        minutes,
        category: id === "__none__" ? null : categoryById.get(id) || null,
      }))
      .sort((a, b) => b.minutes - a.minutes);
  }, [categoryById, weekOccurrences]);

  const studyMinutes = useMemo(() => {
    return weekOccurrences.reduce((sum, item) => {
      const category = item.event.category_id
        ? categoryById.get(item.event.category_id)
        : null;

      return (
        sum +
        (category?.kind === "study"
          ? minutesBetween(item.start, item.end)
          : 0)
      );
    }, 0);
  }, [categoryById, weekOccurrences]);


  const importantWeekOccurrences = useMemo(
    () =>
      weekOccurrences.filter(
        (item) => item.event.importance !== "normal",
      ),
    [weekOccurrences],
  );

  const importantByPerson = useMemo(() => {
    const totals = new Map<
      string,
      {
        ownerId: string;
        label: string;
        count: number;
        minutes: number;
      }
    >();

    for (const item of importantWeekOccurrences) {
      const ownerId = item.event.owner_id;
      const current =
        totals.get(ownerId) || {
          ownerId,
          label: memberLabel(ownerId, currentUserId, members),
          count: 0,
          minutes: 0,
        };

      current.count += 1;
      current.minutes += minutesBetween(item.start, item.end);
      totals.set(ownerId, current);
    }

    return Array.from(totals.values()).sort((a, b) => {
      if (a.ownerId === currentUserId) return -1;
      if (b.ownerId === currentUserId) return 1;
      return b.minutes - a.minutes;
    });
  }, [
    currentUserId,
    importantWeekOccurrences,
    members,
  ]);

  const upcomingImportantEvents = useMemo(() => {
    const today = startOfDay(new Date());
    const end = addDays(today, 180);

    const recurring = filteredEvents
      .filter(
        (event) =>
          event.importance !== "normal" &&
          event.recurrence !== "none",
      )
      .filter((event) => {
        const eventStart = startOfDay(new Date(event.start_at));
        const recurrenceEnd = event.recurrence_until
          ? startOfDay(
              new Date(`${event.recurrence_until}T23:59:59`),
            )
          : null;

        return eventStart <= end && (!recurrenceEnd || recurrenceEnd >= today);
      })
      .map((event) => ({
        event,
        day: new Date(event.start_at),
        start: new Date(event.start_at),
        end: new Date(event.end_at),
        ownerLabel: memberLabel(
          event.owner_id,
          currentUserId,
          members,
        ),
        recurring: true,
      }));

    const singleOccurrences: Array<{
      event: CalendarEvent;
      day: Date;
      start: Date;
      end: Date;
      ownerLabel: string;
      recurring: boolean;
    }> = [];

    for (
      let day = new Date(today);
      day <= end;
      day = addDays(day, 1)
    ) {
      for (const event of filteredEvents) {
        if (
          event.importance !== "normal" &&
          event.recurrence === "none" &&
          eventOccursOn(event, day)
        ) {
          const occurrence = occurrenceForDay(event, day);

          singleOccurrences.push({
            event,
            day: new Date(day),
            ...occurrence,
            ownerLabel: memberLabel(
              event.owner_id,
              currentUserId,
              members,
            ),
            recurring: false,
          });
        }
      }
    }

    return [...singleOccurrences, ...recurring]
      .sort((a, b) => a.start.getTime() - b.start.getTime())
      .slice(0, 12);
  }, [
    currentUserId,
    filteredEvents,
    members,
  ]);

  const suggestions = useMemo(() => {
    const result: string[] = [];
    const today = startOfDay(new Date());

    const upcomingDays = weekDays
      .filter((day) => day >= today)
      .map((day) => {
        const items = weekOccurrences.filter(
          (item) =>
            toLocalDateInput(item.day) === toLocalDateInput(day) &&
            !item.event.all_day,
        );

        const totalMinutes = items.reduce(
          (sum, item) => sum + minutesBetween(item.start, item.end),
          0,
        );

        return {
          day,
          items,
          totalMinutes,
        };
      });

    const busiest = [...upcomingDays].sort(
      (a, b) => b.totalMinutes - a.totalMinutes,
    )[0];

    const lightest = [...upcomingDays].sort(
      (a, b) => a.totalMinutes - b.totalMinutes,
    )[0];

    if (lightest) {
      result.push(
        `${lightest.day.toLocaleDateString("fi-FI", {
          weekday: "long",
        })} näyttää viikon väljimmältä päivältä. Siinä on hyvin tilaa lisätä esimerkiksi opiskelua, liikuntaa, asiointia tai vapaa-aikaa.`,
      );
    }

    if (busiest && busiest.totalMinutes >= 6 * 60) {
      result.push(
        `${busiest.day.toLocaleDateString("fi-FI", {
          weekday: "long",
        })} on viikon kuormitetuimpia päiviä (${formatDuration(
          busiest.totalMinutes,
        )} merkittyä aikaa). Uusia menoja kannattaa sijoittaa muualle, jos mahdollista.`,
      );
    }

    const eveningGap = upcomingDays
      .map(({ day, items }) => {
        const eveningStart = new Date(day);
        eveningStart.setHours(16, 0, 0, 0);
        const eveningEnd = new Date(day);
        eveningEnd.setHours(21, 0, 0, 0);

        const relevant = items
          .filter((item) => item.end > eveningStart && item.start < eveningEnd)
          .sort((a, b) => a.start.getTime() - b.start.getTime());

        let cursor = eveningStart;
        let best = 0;
        let bestStart = eveningStart;

        for (const item of relevant) {
          const gap = Math.max(
            0,
            Math.min(item.start.getTime(), eveningEnd.getTime()) -
              cursor.getTime(),
          );

          if (gap > best) {
            best = gap;
            bestStart = new Date(cursor);
          }

          if (item.end > cursor) {
            cursor = new Date(item.end);
          }
        }

        const lastGap = Math.max(
          0,
          eveningEnd.getTime() - cursor.getTime(),
        );

        if (lastGap > best) {
          best = lastGap;
          bestStart = new Date(cursor);
        }

        return {
          day,
          start: bestStart,
          minutes: Math.floor(best / 60_000),
        };
      })
      .sort((a, b) => b.minutes - a.minutes)[0];

    if (eveningGap && eveningGap.minutes >= 60) {
      result.push(
        `${eveningGap.day.toLocaleDateString("fi-FI", {
          weekday: "long",
        })} klo ${pad(eveningGap.start.getHours())}:${pad(
          eveningGap.start.getMinutes(),
        )} alkaen kalenterissa on noin ${formatDuration(
          eveningGap.minutes,
        )} vapaata.`,
      );
    }

    return result.slice(0, 3);
  }, [weekDays, weekOccurrences]);

  function openNewEvent(day?: Date, hour?: number) {
    const next = emptyDraft(personalCalendar?.id || groups[0]?.id || "");

    if (day) {
      next.date = toLocalDateInput(day);
    }

    if (hour !== undefined) {
      next.start = `${pad(hour)}:00`;
      next.end = `${pad(Math.min(hour + 1, 23))}:00`;
    }

    setDraft(next);
    setEventModalOpen(true);
  }

  function openEditEvent(event: CalendarEvent) {
    const start = new Date(event.start_at);
    const end = new Date(event.end_at);

    setDraft({
      id: event.id,
      calendar_id: event.calendar_id,
      category_id: event.category_id || "",
      title: event.title,
      description: event.description || "",
      date: toLocalDateInput(start),
      start: `${pad(start.getHours())}:${pad(start.getMinutes())}`,
      end: `${pad(end.getHours())}:${pad(end.getMinutes())}`,
      all_day: event.all_day,
      recurrence: event.recurrence,
      recurrence_until: event.recurrence_until || "",
      important: event.importance !== "normal",
    });

    setEventModalOpen(true);
  }

  async function saveEvent(event: FormEvent) {
    event.preventDefault();
    if (!user || !draft.calendar_id) return;

    setSavingEvent(true);
    setError("");

    try {
      if (!draft.title.trim()) {
        throw new Error("Anna tapahtumalle nimi.");
      }

      const start = combineLocal(
        draft.date,
        draft.all_day ? "00:00" : draft.start,
      );

      let end = combineLocal(
        draft.date,
        draft.all_day ? "23:59" : draft.end,
      );

      if (!draft.all_day && end <= start) {
        end = new Date(start.getTime() + 60 * 60_000);
      }

      const category = draft.category_id
        ? categoryById.get(draft.category_id)
        : null;

      const payload = {
        calendar_id: draft.calendar_id,
        owner_id: user.id,
        category_id: draft.category_id || null,
        title: draft.title.trim(),
        description: draft.description.trim() || null,
        start_at: start.toISOString(),
        end_at: end.toISOString(),
        all_day: draft.all_day,
        visibility: "shared" as const,
        importance: draft.important ? ("important" as const) : ("normal" as const),
        recurrence: draft.recurrence,
        recurrence_until:
          draft.recurrence === "none" || !draft.recurrence_until
            ? null
            : draft.recurrence_until,
        reminder_minutes: null,
        is_study: category?.kind === "study",
        study_subject:
          category?.kind === "study" ? draft.title.trim() : null,
        actual_minutes: null,
        completed: false,
      };

      const result = draft.id
        ? await supabase
            .from("calendar_events")
            .update(payload)
            .eq("id", draft.id)
        : await supabase.from("calendar_events").insert(payload);

      if (result.error) throw result.error;

      setEventModalOpen(false);
      setDraft(emptyDraft(personalCalendar?.id || groups[0]?.id || ""));
      await loadAll();
    } catch (saveError) {
      console.error(saveError);
      setError(
        saveError instanceof Error
          ? saveError.message
          : "Tallennus epäonnistui.",
      );
    } finally {
      setSavingEvent(false);
    }
  }

  async function deleteEvent(
    clickEvent?: React.MouseEvent<HTMLButtonElement>,
  ) {
    clickEvent?.preventDefault();
    clickEvent?.stopPropagation();

    if (!draft.id) return;

    if (!window.confirm("Poistetaanko tapahtuma?")) return;

    setError("");

    const { error: deleteError } = await supabase.rpc(
      "delete_calendar_event",
      { p_event_id: draft.id },
    );

    if (deleteError) {
      setError(deleteError.message);
      return;
    }

    setEventModalOpen(false);
    setDraft(emptyDraft(personalCalendar?.id || groups[0]?.id || ""));
    await loadAll();
  }

  async function addNote(event: FormEvent) {
    event.preventDefault();

    if (!user || !newNote.trim()) return;

    const { error: noteError } = await supabase
      .from("calendar_notes")
      .insert({
        user_id: user.id,
        text: newNote.trim(),
        due_at: null,
        important: false,
        completed: false,
      });

    if (noteError) {
      setError(noteError.message);
      return;
    }

    setNewNote("");
    await loadAll();
  }

  async function toggleNote(note: CalendarNote) {
    const { error: noteError } = await supabase
      .from("calendar_notes")
      .update({ completed: !note.completed })
      .eq("id", note.id);

    if (noteError) setError(noteError.message);
    else await loadAll();
  }

  async function deleteNote(noteId: string) {
    const { error: noteError } = await supabase
      .from("calendar_notes")
      .delete()
      .eq("id", noteId);

    if (noteError) setError(noteError.message);
    else await loadAll();
  }

  function toggleCalendar(calendarId: string) {
    setVisibleCalendars((previous) => {
      const next = new Set(previous);

      if (next.has(calendarId)) {
        next.delete(calendarId);
      } else {
        next.add(calendarId);
      }

      return next;
    });
  }

  function movePeriod(direction: -1 | 1) {
    setAnchor((previous) =>
      viewMode === "month"
        ? addMonths(previous, direction)
        : addDays(previous, direction * 7),
    );
  }

  async function ensureFamilyCalendar() {
    if (!user) return null;
    if (familyCalendars[0]) return familyCalendars[0];

    const { data, error: createError } = await supabase.rpc(
      "create_family_calendar",
      {
        p_name: familyName.trim() || "Perhe",
      },
    );

    if (createError) throw createError;

    const created = Array.isArray(data) ? data[0] : data;

    if (!created?.id) {
      throw new Error("Yhteistä kalenteria ei voitu luoda.");
    }

    return created as CalendarGroup;
  }

  async function sendFamilyInvite(event: FormEvent) {
    event.preventDefault();

    if (!user || !inviteEmail.trim()) return;

    setFamilyBusy(true);
    setError("");

    try {
      const family = await ensureFamilyCalendar();

      if (!family) {
        throw new Error("Yhteistä kalenteria ei voitu luoda.");
      }

      const { error: inviteError } = await supabase.rpc(
        "create_calendar_invite",
        {
          p_calendar_id: family.id,
          p_invitee_email: inviteEmail.trim().toLowerCase(),
        },
      );

      if (inviteError) throw inviteError;

      setInviteEmail("");
      await loadAll();
    } catch (inviteError) {
      setError(
        inviteError instanceof Error
          ? inviteError.message
          : "Kutsun lähetys epäonnistui.",
      );
    } finally {
      setFamilyBusy(false);
    }
  }

  async function respondInvite(
    invite: CalendarInvite,
    action: "accept" | "decline",
  ) {
    const { error: inviteError } = await supabase.rpc(
      action === "accept"
        ? "accept_calendar_invite"
        : "decline_calendar_invite",
      { p_invite_id: invite.id },
    );

    if (inviteError) setError(inviteError.message);
    else await loadAll();
  }

  const todayKey = toLocalDateInput(new Date());

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f6f8ff]">
        <div className="flex min-h-screen items-center justify-center">
          <p className="font-bold text-slate-600">Avataan kalenteria…</p>
        </div>
      </main>
    );
  }

  if (!accessAllowed) {
    return (
      <main className="min-h-screen bg-[#f6f8ff] px-5 py-12">
        <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <h1 className="text-3xl font-black">Kalenteri</h1>
          <p className="mt-4 leading-7 text-slate-600">
            Kalenteri avautuu, kun käyttäjällä on vähintään yksi aktiivinen
            ValintaGuru-kurssi tai erillinen kalenterioikeus.
          </p>
          <button
            type="button"
            onClick={() => router.push("/")}
            className="mt-6 rounded-full bg-[#3f51e7] px-6 py-3 font-bold text-white"
          >
            Etusivulle
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6f8ff] text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="flex w-full items-center justify-between gap-3 px-3 py-3 sm:px-5 lg:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="flex h-11 w-11 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-white"
              aria-label="Etusivulle"
            >
              <img
                src={logo.src}
                alt="ValintaGuru"
                className="h-full w-full object-cover"
              />
            </button>

            <div className="min-w-0">
              <p className="truncate text-xs font-bold uppercase tracking-[0.16em] text-[#3f51e7]">
                ValintaGuru
              </p>
              <h1 className="truncate text-lg font-black sm:text-xl">
                Kalenteri
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setNotesOpen(true)}
              className="hidden rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold sm:inline-flex"
            >
              Muistiinpanot
              {notes.filter((note) => !note.completed).length > 0 && (
                <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-xs">
                  {notes.filter((note) => !note.completed).length}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setFamilyOpen(true)}
              className="hidden rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold md:inline-flex"
            >
              Perhe
            </button>

            <button
              type="button"
              onClick={() => openNewEvent()}
              className="rounded-full bg-[#3f51e7] px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-indigo-600/20"
            >
              + Lisää
            </button>
          </div>
        </div>

        <div className="flex w-full flex-wrap items-center justify-between gap-3 border-t border-slate-100 px-3 py-2.5 sm:px-5 lg:px-6">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => movePeriod(-1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-bold"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={() => setAnchor(new Date())}
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-bold sm:text-sm"
            >
              Tänään
            </button>

            <button
              type="button"
              onClick={() => movePeriod(1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-bold"
            >
              ›
            </button>

            <p className="ml-1 hidden text-sm font-black sm:block">
              {viewMode === "month" ? monthLabel(anchor) : weekLabel(anchor)}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {groups.length > 1 && (
              <div className="hidden items-center gap-1.5 lg:flex">
                {groups.map((group) => {
                  const active = visibleCalendars.has(group.id);

                  return (
                    <button
                      key={group.id}
                      type="button"
                      onClick={() => toggleCalendar(group.id)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-bold ${
                        active
                          ? "border-indigo-200 bg-indigo-50 text-[#3f51e7]"
                          : "border-slate-200 bg-white text-slate-400"
                      }`}
                    >
                      {group.kind === "personal" &&
                      group.owner_id === currentUserId
                        ? "Oma"
                        : group.name}
                    </button>
                  );
                })}
              </div>
            )}

            <div className="flex rounded-full bg-slate-100 p-1">
              {[
                ["week", "Viikko"],
                ["month", "Kuukausi"],
                ["stats", "Tilastot"],
              ].map(([mode, label]) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setViewMode(mode as ViewMode)}
                  className={`rounded-full px-3 py-1.5 text-xs font-bold sm:px-4 sm:text-sm ${
                    viewMode === mode
                      ? "bg-white text-[#3f51e7] shadow-sm"
                      : "text-slate-500"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {error && (
        <div className="mx-3 mt-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 sm:mx-5 lg:mx-6">
          {error}
        </div>
      )}

      {invites.length > 0 && (
        <div className="mx-3 mt-3 flex flex-wrap items-center gap-3 rounded-2xl border border-indigo-200 bg-indigo-50 px-4 py-3 sm:mx-5 lg:mx-6">
          <span className="text-sm font-bold text-indigo-950">
            Sinulla on kutsu yhteiseen kalenteriin.
          </span>

          {invites.map((invite) => (
            <div key={invite.id} className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => respondInvite(invite, "accept")}
                className="rounded-full bg-[#3f51e7] px-3 py-1.5 text-xs font-bold text-white"
              >
                Hyväksy
              </button>
              <button
                type="button"
                onClick={() => respondInvite(invite, "decline")}
                className="rounded-full border border-indigo-200 bg-white px-3 py-1.5 text-xs font-bold"
              >
                Hylkää
              </button>
            </div>
          ))}
        </div>
      )}

      <section className="w-full px-2 py-3 sm:px-3 lg:px-4">
        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {viewMode === "week" && (
            <div className="overflow-x-auto">
              <div className="min-w-[920px]">
                <div className="grid grid-cols-[58px_repeat(7,minmax(120px,1fr))] border-b border-slate-200">
                  <div />

                  {weekDays.map((day) => {
                    const isToday =
                      toLocalDateInput(day) === todayKey;

                    return (
                      <button
                        key={day.toISOString()}
                        type="button"
                        onClick={() => openNewEvent(day)}
                        className={`border-l border-slate-100 px-2 py-2.5 text-center ${
                          isToday ? "bg-indigo-50" : ""
                        }`}
                      >
                        <span className="block text-[11px] font-black uppercase text-slate-400">
                          {day.toLocaleDateString("fi-FI", {
                            weekday: "short",
                          })}
                        </span>

                        <span
                          className={`mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-black ${
                            isToday
                              ? "bg-[#3f51e7] text-white"
                              : ""
                          }`}
                        >
                          {day.getDate()}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="grid grid-cols-[58px_repeat(7,minmax(120px,1fr))]">
                  <div>
                    {HOURS.map((hour) => (
                      <div
                        key={hour}
                        className="h-[58px] border-b border-slate-100 pr-2 pt-1 text-right text-[11px] font-bold text-slate-400"
                      >
                        {pad(hour)}:00
                      </div>
                    ))}
                  </div>

                  {weekDays.map((day) => {
                    const dayEvents = weekOccurrences.filter(
                      (item) =>
                        toLocalDateInput(item.day) ===
                        toLocalDateInput(day),
                    );

                    return (
                      <div
                        key={day.toISOString()}
                        className="relative border-l border-slate-100"
                        style={{ height: `${HOURS.length * 58}px` }}
                      >
                        {HOURS.map((hour) => (
                          <button
                            key={hour}
                            type="button"
                            onDoubleClick={() => openNewEvent(day, hour)}
                            title="Kaksoisklikkaa lisätäksesi tapahtuman"
                            className="block h-[58px] w-full border-b border-slate-100 hover:bg-indigo-50/40"
                          />
                        ))}

                        {dayEvents
                          .filter((item) => !item.event.all_day)
                          .map((item) => {
                            const startMinutes =
                              item.start.getHours() * 60 +
                              item.start.getMinutes() -
                              HOUR_START * 60;

                            const duration = Math.max(
                              30,
                              minutesBetween(item.start, item.end),
                            );

                            const top = (startMinutes / 60) * 58;
                            const height = Math.max(
                              30,
                              (duration / 60) * 58,
                            );

                            const category = item.event.category_id
                              ? categoryById.get(item.event.category_id)
                              : null;

                            const color =
                              COLOR_CLASSES[
                                category?.color_key || "zinc"
                              ] || COLOR_CLASSES.zinc;

                            return (
                              <button
                                key={`${item.event.id}-${toLocalDateInput(
                                  day,
                                )}`}
                                type="button"
                                onClick={() =>
                                  openEditEvent(item.event)
                                }
                                className={`absolute left-1 right-1 z-10 overflow-hidden rounded-lg border px-2 py-1.5 text-left shadow-sm transition hover:z-20 hover:shadow-md ${color.bg} ${color.border} ${color.text}`}
                                style={{
                                  top: `${Math.max(0, top)}px`,
                                  height: `${height}px`,
                                }}
                              >
                                <span className="block truncate text-xs font-black">
                                  {item.event.importance !== "normal"
                                    ? "★ "
                                    : ""}
                                  {item.event.title}
                                </span>

                                {height >= 42 && (
                                  <span className="mt-0.5 block text-[10px] font-semibold opacity-70">
                                    {pad(item.start.getHours())}:
                                    {pad(item.start.getMinutes())}–
                                    {pad(item.end.getHours())}:
                                    {pad(item.end.getMinutes())}
                                  </span>
                                )}
                              </button>
                            );
                          })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {viewMode === "month" && (
            <div className="grid grid-cols-7">
              {["Ma", "Ti", "Ke", "To", "Pe", "La", "Su"].map(
                (day) => (
                  <div
                    key={day}
                    className="border-b border-slate-200 p-2 text-center text-xs font-black uppercase text-slate-400"
                  >
                    {day}
                  </div>
                ),
              )}

              {monthDays.map((day) => {
                const dayEvents = filteredEvents.filter((event) =>
                  eventOccursOn(event, day),
                );

                const outside =
                  day.getMonth() !== anchor.getMonth();

                const isToday =
                  toLocalDateInput(day) === todayKey;

                return (
                  <button
                    key={day.toISOString()}
                    type="button"
                    onClick={() => openNewEvent(day)}
                    className={`min-h-[120px] border-b border-r border-slate-100 p-2 text-left ${
                      outside
                        ? "bg-slate-50/70 text-slate-400"
                        : "bg-white"
                    }`}
                  >
                    <span
                      className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-black ${
                        isToday
                          ? "bg-[#3f51e7] text-white"
                          : ""
                      }`}
                    >
                      {day.getDate()}
                    </span>

                    <div className="mt-2 space-y-1">
                      {dayEvents.slice(0, 5).map((event) => {
                        const category = event.category_id
                          ? categoryById.get(event.category_id)
                          : null;

                        const color =
                          COLOR_CLASSES[
                            category?.color_key || "zinc"
                          ] || COLOR_CLASSES.zinc;

                        return (
                          <div
                            key={event.id}
                            onClick={(clickEvent) => {
                              clickEvent.stopPropagation();
                              openEditEvent(event);
                            }}
                            className={`truncate rounded-md px-1.5 py-1 text-[10px] font-bold ${color.bg} ${color.text}`}
                          >
                            {event.importance !== "normal"
                              ? "★ "
                              : ""}
                            {event.title}
                          </div>
                        );
                      })}

                      {dayEvents.length > 5 && (
                        <p className="text-[10px] font-bold text-slate-400">
                          +{dayEvents.length - 5} muuta
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {viewMode === "stats" && (
            <div className="p-4 sm:p-6">
              <div className="grid gap-4 md:grid-cols-3">
                <StatCard
                  label="Kalenterissa tällä viikolla"
                  value={formatDuration(
                    weekOccurrences.reduce(
                      (sum, item) =>
                        sum + minutesBetween(item.start, item.end),
                      0,
                    ),
                  )}
                />

                <StatCard
                  label="Opiskelua"
                  value={formatDuration(studyMinutes)}
                />

                <StatCard
                  label="Tärkeitä menoja"
                  value={String(importantWeekOccurrences.length)}
                />
              </div>

              <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_1fr]">
                <section className="rounded-2xl border border-slate-200 p-5">
                  <h2 className="text-lg font-black">
                    Tärkeät menot tällä viikolla
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Näet erikseen omat ja perheenjäsenten tärkeiksi merkityt menot.
                  </p>

                  <div className="mt-5 space-y-3">
                    {importantByPerson.length === 0 ? (
                      <p className="text-sm text-slate-500">
                        Tälle viikolle ei ole merkitty tärkeitä menoja.
                      </p>
                    ) : (
                      importantByPerson.map((person) => (
                        <div
                          key={person.ownerId}
                          className="flex items-center justify-between gap-4 rounded-xl bg-slate-50 p-4"
                        >
                          <div>
                            <p className="font-black">
                              {person.label}
                            </p>
                            <p className="mt-1 text-xs font-semibold text-slate-500">
                              {person.count} tärkeää menoa
                            </p>
                          </div>

                          <p className="text-lg font-black">
                            {formatDuration(person.minutes)}
                          </p>
                        </div>
                      ))
                    )}
                  </div>

                  {importantWeekOccurrences.length > 0 && (
                    <div className="mt-5 border-t border-slate-200 pt-4">
                      <div className="space-y-2">
                        {importantWeekOccurrences
                          .sort(
                            (a, b) =>
                              a.start.getTime() -
                              b.start.getTime(),
                          )
                          .map((item) => (
                            <button
                              key={`${item.event.id}-${item.start.toISOString()}`}
                              type="button"
                              onClick={() =>
                                openEditEvent(item.event)
                              }
                              className="flex w-full items-center justify-between gap-4 rounded-xl border border-slate-200 px-4 py-3 text-left transition hover:border-indigo-200 hover:bg-indigo-50/40"
                            >
                              <div className="min-w-0">
                                <p className="truncate text-sm font-black">
                                  ★ {item.event.title}
                                </p>
                                <p className="mt-1 text-xs font-semibold text-slate-500">
                                  {memberLabel(
                                    item.event.owner_id,
                                    currentUserId,
                                    members,
                                  )}{" "}
                                  ·{" "}
                                  {item.start.toLocaleDateString(
                                    "fi-FI",
                                    {
                                      weekday: "short",
                                      day: "numeric",
                                      month: "numeric",
                                    },
                                  )}
                                </p>
                              </div>

                              <span className="shrink-0 text-xs font-bold text-slate-500">
                                {item.event.all_day
                                  ? "Koko päivä"
                                  : `${pad(
                                      item.start.getHours(),
                                    )}:${pad(
                                      item.start.getMinutes(),
                                    )}–${pad(
                                      item.end.getHours(),
                                    )}:${pad(
                                      item.end.getMinutes(),
                                    )}`}
                              </span>
                            </button>
                          ))}
                      </div>
                    </div>
                  )}
                </section>

                <section className="rounded-2xl border border-slate-200 p-5">
                  <h2 className="text-lg font-black">
                    Tulevat tärkeät menot
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Seuraavat tärkeiksi merkityt menot omasta ja yhteisistä kalentereista.
                  </p>

                  <div className="mt-5 space-y-2">
                    {upcomingImportantEvents.length === 0 ? (
                      <p className="text-sm text-slate-500">
                        Tulevia tärkeitä menoja ei ole merkitty.
                      </p>
                    ) : (
                      upcomingImportantEvents.map((item) => (
                        <div
                          key={`${item.event.id}-${item.start.toISOString()}`}
                          className="flex items-center gap-4 rounded-xl border border-slate-200 p-3"
                        >
                          <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-indigo-50 text-[#3f51e7]">
                            {item.recurring ? (
                              <>
                                <span className="text-lg font-black leading-none">
                                  ↻
                                </span>
                                <span className="mt-0.5 text-[9px] font-black uppercase">
                                  Toistuu
                                </span>
                              </>
                            ) : (
                              <>
                                <span className="text-lg font-black leading-none">
                                  {item.day.getDate()}
                                </span>
                                <span className="mt-0.5 text-[10px] font-black uppercase">
                                  {item.day.toLocaleDateString(
                                    "fi-FI",
                                    {
                                      month: "short",
                                    },
                                  )}
                                </span>
                              </>
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-black">
                              {item.event.title}
                            </p>

                            <p className="mt-1 text-xs font-semibold text-slate-500">
                              {item.ownerLabel}
                              {" · "}
                              {item.recurring
                                ? recurrenceLabel(item.event)
                                : item.event.all_day
                                  ? "Koko päivä"
                                  : `${pad(
                                      item.start.getHours(),
                                    )}:${pad(
                                      item.start.getMinutes(),
                                    )}`}
                            </p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </section>
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-2">
                <section className="rounded-2xl border border-slate-200 p-5">
                  <h2 className="text-lg font-black">
                    Ajankäyttö kategorioittain
                  </h2>

                  <div className="mt-5 space-y-4">
                    {categoryStats.length === 0 && (
                      <p className="text-sm text-slate-500">
                        Tälle viikolle ei ole vielä tapahtumia.
                      </p>
                    )}

                    {categoryStats.map((item) => {
                      const max =
                        categoryStats[0]?.minutes || 1;

                      const color =
                        COLOR_CLASSES[
                          item.category?.color_key ||
                            "zinc"
                        ] || COLOR_CLASSES.zinc;

                      return (
                        <div key={item.id}>
                          <div className="flex items-center justify-between gap-3 text-sm">
                            <span className="flex items-center gap-2 font-bold">
                              <span
                                className={`h-2.5 w-2.5 rounded-full ${color.dot}`}
                              />
                              {item.category?.name ||
                                "Muu"}
                            </span>

                            <span className="font-black">
                              {formatDuration(
                                item.minutes,
                              )}
                            </span>
                          </div>

                          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                            <div
                              className={`h-full rounded-full ${color.dot}`}
                              style={{
                                width: `${Math.max(
                                  3,
                                  Math.round(
                                    (item.minutes /
                                      max) *
                                      100,
                                  ),
                                )}%`,
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                <section className="rounded-2xl border border-slate-200 p-5">
                  <h2 className="text-lg font-black">
                    Kalenterin ehdotukset
                  </h2>

                  <div className="mt-4 space-y-3">
                    {suggestions.length === 0 ? (
                      <p className="text-sm text-slate-500">
                        Lisää viikon menoja, niin kalenteri pystyy
                        hahmottamaan väljät ja kiireiset kohdat.
                      </p>
                    ) : (
                      suggestions.map((suggestion) => (
                        <div
                          key={suggestion}
                          className="rounded-xl bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700"
                        >
                          {suggestion}
                        </div>
                      ))
                    )}
                  </div>
                </section>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="fixed bottom-4 right-4 z-30 flex gap-2 sm:hidden">
        <button
          type="button"
          onClick={() => setNotesOpen(true)}
          className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold shadow-lg"
        >
          Muistiinpanot
        </button>

        <button
          type="button"
          onClick={() => setFamilyOpen(true)}
          className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold shadow-lg"
        >
          Perhe
        </button>
      </div>

      {eventModalOpen && (
        <Modal
          title={draft.id ? "Muokkaa tapahtumaa" : "Lisää tapahtuma"}
          onClose={() => setEventModalOpen(false)}
        >
          <form onSubmit={saveEvent} className="space-y-5">
            <div>
              <label className="text-sm font-black">
                Tapahtuma
              </label>

              <input
                autoFocus
                value={draft.title}
                onChange={(event) =>
                  setDraft((previous) => ({
                    ...previous,
                    title: event.target.value,
                  }))
                }
                placeholder="Mitä kalenteriin lisätään?"
                className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-3 text-base outline-none focus:border-[#3f51e7]"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
              <Field label="Kategoria">
                <select
                  value={draft.category_id}
                  onChange={(event) =>
                    setDraft((previous) => ({
                      ...previous,
                      category_id: event.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-slate-300 px-3 py-3"
                >
                  <option value="">Ei kategoriaa</option>
                  {categories.map((category) => (
                    <option
                      key={category.id}
                      value={category.id}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Kalenteri">
                <select
                  value={draft.calendar_id}
                  onChange={(event) =>
                    setDraft((previous) => ({
                      ...previous,
                      calendar_id: event.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-slate-300 px-3 py-3"
                >
                  {groups.map((group) => (
                    <option key={group.id} value={group.id}>
                      {group.kind === "personal" &&
                      group.owner_id === currentUserId
                        ? "Oma"
                        : group.name}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr_0.8fr]">
              <Field label="Päivä">
                <input
                  type="date"
                  value={draft.date}
                  onChange={(event) =>
                    setDraft((previous) => ({
                      ...previous,
                      date: event.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-slate-300 px-3 py-3"
                />
              </Field>

              {!draft.all_day && (
                <>
                  <Field label="Alkaa">
                    <input
                      type="time"
                      value={draft.start}
                      onChange={(event) =>
                        setDraft((previous) => ({
                          ...previous,
                          start: event.target.value,
                        }))
                      }
                      className="w-full rounded-xl border border-slate-300 px-3 py-3"
                    />
                  </Field>

                  <Field label="Päättyy">
                    <input
                      type="time"
                      value={draft.end}
                      onChange={(event) =>
                        setDraft((previous) => ({
                          ...previous,
                          end: event.target.value,
                        }))
                      }
                      className="w-full rounded-xl border border-slate-300 px-3 py-3"
                    />
                  </Field>
                </>
              )}
            </div>

            <div className="flex flex-wrap gap-5">
              <label className="flex items-center gap-2 text-sm font-bold">
                <input
                  type="checkbox"
                  checked={draft.all_day}
                  onChange={(event) =>
                    setDraft((previous) => ({
                      ...previous,
                      all_day: event.target.checked,
                    }))
                  }
                  className="h-4 w-4 accent-[#3f51e7]"
                />
                Koko päivä
              </label>

              <label className="flex items-center gap-2 text-sm font-bold">
                <input
                  type="checkbox"
                  checked={draft.important}
                  onChange={(event) =>
                    setDraft((previous) => ({
                      ...previous,
                      important: event.target.checked,
                    }))
                  }
                  className="h-4 w-4 accent-[#3f51e7]"
                />
                Tärkeä
              </label>
            </div>

            <details className="rounded-xl border border-slate-200 bg-slate-50">
              <summary className="cursor-pointer px-4 py-3 text-sm font-bold">
                Toistuvuus ja lisätiedot
              </summary>

              <div className="space-y-4 border-t border-slate-200 p-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Toistuvuus">
                    <select
                      value={draft.recurrence}
                      onChange={(event) =>
                        setDraft((previous) => ({
                          ...previous,
                          recurrence:
                            event.target.value as CalendarRepeat,
                        }))
                      }
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3"
                    >
                      <option value="none">Ei toistu</option>
                      <option value="daily">Joka päivä</option>
                      <option value="weekly">Joka viikko</option>
                      <option value="biweekly">
                        Joka toinen viikko
                      </option>
                      <option value="monthly">
                        Joka kuukausi
                      </option>
                      <option value="yearly">Joka vuosi</option>
                    </select>
                  </Field>

                  {draft.recurrence !== "none" && (
                    <Field label="Toistuu asti">
                      <input
                        type="date"
                        value={draft.recurrence_until}
                        onChange={(event) =>
                          setDraft((previous) => ({
                            ...previous,
                            recurrence_until:
                              event.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3"
                      />
                    </Field>
                  )}
                </div>

                <Field label="Lisätiedot">
                  <textarea
                    value={draft.description}
                    onChange={(event) =>
                      setDraft((previous) => ({
                        ...previous,
                        description: event.target.value,
                      }))
                    }
                    rows={3}
                    placeholder="Vapaaehtoinen"
                    className="w-full resize-none rounded-xl border border-slate-300 bg-white px-3 py-3"
                  />
                </Field>
              </div>
            </details>

            <div className="flex items-center justify-between gap-3 border-t border-slate-200 pt-5">
              <div>
                {draft.id && (
                  <button
                    type="button"
                    onClick={(event) => void deleteEvent(event)}
                    className="text-sm font-bold text-red-600"
                  >
                    Poista
                  </button>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setEventModalOpen(false)}
                  className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-bold"
                >
                  Peruuta
                </button>

                <button
                  type="submit"
                  disabled={savingEvent}
                  className="rounded-full bg-[#3f51e7] px-6 py-2.5 text-sm font-black text-white disabled:opacity-60"
                >
                  {savingEvent ? "Tallennetaan…" : "Tallenna"}
                </button>
              </div>
            </div>
          </form>
        </Modal>
      )}

      {notesOpen && (
        <Modal
          title="Muistiinpanot"
          onClose={() => setNotesOpen(false)}
          small
        >
          <form onSubmit={addNote} className="flex gap-2">
            <input
              value={newNote}
              onChange={(event) => setNewNote(event.target.value)}
              placeholder="Lisää muistiinpano…"
              className="min-w-0 flex-1 rounded-xl border border-slate-300 px-3 py-3"
            />

            <button
              type="submit"
              className="rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white"
            >
              Lisää
            </button>
          </form>

          <div className="mt-5 space-y-2">
            {notes.length === 0 && (
              <p className="text-sm text-slate-500">
                Ei muistiinpanoja.
              </p>
            )}

            {notes.map((note) => (
              <div
                key={note.id}
                className="flex items-start gap-3 rounded-xl border border-slate-200 p-3"
              >
                <input
                  type="checkbox"
                  checked={note.completed}
                  onChange={() => toggleNote(note)}
                  className="mt-1 h-4 w-4 accent-[#3f51e7]"
                />

                <p
                  className={`min-w-0 flex-1 text-sm font-semibold ${
                    note.completed
                      ? "text-slate-400 line-through"
                      : "text-slate-800"
                  }`}
                >
                  {note.text}
                </p>

                <button
                  type="button"
                  onClick={() => deleteNote(note.id)}
                  className="text-sm font-bold text-slate-300 hover:text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </Modal>
      )}

      {familyOpen && (
        <Modal
          title="Perhekalenteri"
          onClose={() => setFamilyOpen(false)}
          small
        >
          <div className="space-y-5">
            {familyCalendars.length === 0 && (
              <Field label="Yhteisen kalenterin nimi">
                <input
                  value={familyName}
                  onChange={(event) =>
                    setFamilyName(event.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-3 py-3"
                />
              </Field>
            )}

            <form
              onSubmit={sendFamilyInvite}
              className="space-y-3"
            >
              <Field label="Lisää käyttäjä sähköpostilla">
                <input
                  type="email"
                  value={inviteEmail}
                  onChange={(event) =>
                    setInviteEmail(event.target.value)
                  }
                  placeholder="nimi@email.fi"
                  className="w-full rounded-xl border border-slate-300 px-3 py-3"
                />
              </Field>

              <button
                type="submit"
                disabled={familyBusy}
                className="w-full rounded-full bg-[#3f51e7] px-5 py-3 font-black text-white disabled:opacity-60"
              >
                {familyBusy
                  ? "Lisätään…"
                  : "Lähetä kutsu"}
              </button>
            </form>

            {familyCalendars.map((family) => {
              const familyMembers = members.filter(
                (member) =>
                  member.calendar_id === family.id,
              );

              return (
                <div
                  key={family.id}
                  className="rounded-xl border border-slate-200 p-4"
                >
                  <p className="font-black">{family.name}</p>

                  <div className="mt-3 space-y-2">
                    {familyMembers.map((member) => (
                      <div
                        key={`${member.calendar_id}-${member.user_id}`}
                        className="flex items-center justify-between gap-3 text-sm"
                      >
                        <span className="truncate font-semibold">
                          {member.display_name ||
                            member.email ||
                            "Käyttäjä"}
                        </span>

                        <span className="text-xs text-slate-400">
                          {member.user_id === currentUserId
                            ? "Sinä"
                            : "Jäsen"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Modal>
      )}
    </main>
  );
}

function Modal({
  title,
  onClose,
  children,
  small = false,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  small?: boolean;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-slate-950/45 p-3 py-8 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) {
          onClose();
        }
      }}
    >
      <div
        className={`w-full rounded-[1.7rem] bg-white shadow-2xl ${
          small ? "max-w-xl" : "max-w-2xl"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <h2 className="text-xl font-black">{title}</h2>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-lg font-black"
          >
            ×
          </button>
        </div>

        <div className="p-5 sm:p-6">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-black">
        {label}
      </span>
      {children}
    </label>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
        {label}
      </p>
      <p className="mt-3 text-3xl font-black">{value}</p>
    </div>
  );
}