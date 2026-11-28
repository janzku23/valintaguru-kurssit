"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import CalendarBoard from "./CalendarBoard";
import { eventDraftTimes, type EventDraft } from "./calendarModel";
import type { CalendarCategory, CalendarEvent, CalendarGroup, CalendarNote } from "./types";

type CalendarData = {
  groups: CalendarGroup[];
  categories: CalendarCategory[];
  events: CalendarEvent[];
  notes: CalendarNote[];
};
const emptyData: CalendarData = { groups: [], categories: [], events: [], notes: [] };

export default function CalendarApp() {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [accessAllowed, setAccessAllowed] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<CalendarData>(emptyData);

  const fetchData = useCallback(async (userId: string): Promise<CalendarData> => {
    const [groups, categories, events, notes] = await Promise.all([
      supabase.from("calendar_groups").select("*").eq("owner_id", userId)
        .order("kind", { ascending: false }).order("created_at", { ascending: true }),
      supabase.from("calendar_categories").select("*").eq("user_id", userId)
        .order("created_at", { ascending: true }),
      supabase.from("calendar_events").select("*").eq("owner_id", userId)
        .order("start_at", { ascending: true }),
      supabase.from("calendar_notes").select("*").eq("user_id", userId)
        .order("completed", { ascending: true }).order("created_at", { ascending: false }),
    ]);
    if (groups.error || categories.error || events.error || notes.error) {
      throw new Error("Kalenterin tietoja ei saatu ladattua. Yritä uudelleen.");
    }
    const ownedGroups = (groups.data ?? []) as CalendarGroup[];
    const ownedIds = new Set(ownedGroups.map(group => group.id));
    return {
      groups: ownedGroups,
      categories: (categories.data ?? []) as CalendarCategory[],
      events: ((events.data ?? []) as CalendarEvent[]).filter(event => ownedIds.has(event.calendar_id)),
      notes: (notes.data ?? []) as CalendarNote[],
    };
  }, [supabase]);

  useEffect(() => {
    let cancelled = false;
    async function initialize() {
      try {
        const { data: { user: currentUser }, error: authError } = await supabase.auth.getUser();
        if (cancelled) return;
        if (authError || !currentUser) {
          router.replace("/kirjaudu?next=/kalenteri");
          return;
        }
        const { data: allowed, error: accessError } = await supabase.rpc("has_valintaguru_calendar_access");
        if (cancelled) return;
        if (accessError) throw new Error("Kalenterin käyttöoikeutta ei voitu tarkistaa. Yritä uudelleen.");
        if (allowed !== true) return;
        setAccessAllowed(true);
        setUser(currentUser);
        const { error: setupError } = await supabase.rpc("ensure_private_calendar_setup", {
          p_display_name: currentUser.user_metadata?.full_name || currentUser.user_metadata?.name ||
            currentUser.email?.split("@")[0] || "Käyttäjä",
        });
        if (setupError) throw new Error("Kalenteria ei saatu valmisteltua. Yritä hetken kuluttua uudelleen.");
        const loaded = await fetchData(currentUser.id);
        if (!cancelled) setData(loaded);
      } catch (failure) {
        if (!cancelled) setError(failure instanceof Error ? failure.message : "Kalenterin avaaminen epäonnistui.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void initialize();
    return () => { cancelled = true; };
  }, [fetchData, router, supabase]);

  const refresh = useCallback(async () => {
    if (!user) { router.refresh(); return; }
    setError("");
    try { setData(await fetchData(user.id)); }
    catch (failure) { setError(failure instanceof Error ? failure.message : "Tietojen päivittäminen epäonnistui."); }
  }, [fetchData, router, user]);

  async function saveEvent(draft: EventDraft) {
    if (!user || !accessAllowed) throw new Error("Kirjaudu uudelleen tallentaaksesi tapahtuman.");
    if (!draft.title.trim()) throw new Error("Anna tapahtumalle nimi.");
    if (!data.groups.some(group => group.id === draft.calendar_id && group.owner_id === user.id)) {
      throw new Error("Valittu kalenteri ei kuulu käyttäjälle.");
    }
    const category = data.categories.find(item => item.id === draft.category_id && item.user_id === user.id);
    if (draft.category_id && !category) throw new Error("Valittu kategoria ei kuulu käyttäjälle.");
    const { start, end } = eventDraftTimes(draft);
    const payload = {
      calendar_id: draft.calendar_id, owner_id: user.id, category_id: draft.category_id || null,
      title: draft.title.trim(), description: draft.description.trim() || null,
      start_at: start.toISOString(), end_at: end.toISOString(), all_day: draft.all_day,
      visibility: "private" as const, importance: draft.important ? "important" : "normal",
      recurrence: draft.recurrence,
      recurrence_until: draft.recurrence === "none" ? null : draft.recurrence_until || null,
      is_study: category?.kind === "study", study_subject: category?.kind === "study" ? draft.title.trim() : null,
    };
    // Editing preserves completion, reminders and recorded study minutes.
    const result = draft.id
      ? await supabase.from("calendar_events").update(payload).eq("id", draft.id).eq("owner_id", user.id).select("id").single()
      : await supabase.from("calendar_events").insert({ ...payload, completed: false, actual_minutes: null, reminder_minutes: null });
    if (result.error) throw new Error("Tapahtumaa ei saatu tallennettua. Yritä uudelleen.");
    await refresh();
  }

  async function deleteEvent(event: CalendarEvent) {
    if (!user) throw new Error("Kirjautuminen vaaditaan.");
    const { data: deleted, error } = await supabase.from("calendar_events").delete()
      .eq("id", event.id).eq("owner_id", user.id).select("id");
    if (error || !deleted?.length) throw new Error("Tapahtumaa ei saatu poistettua. Yritä uudelleen.");
    await refresh();
  }

  async function addNote(text: string) {
    if (!user) throw new Error("Kirjautuminen vaaditaan.");
    if (!text.trim()) return;
    const { error } = await supabase.from("calendar_notes").insert({
      user_id: user.id, text: text.trim(), due_at: null, important: false, completed: false,
    });
    if (error) throw new Error("Muistiinpanoa ei saatu tallennettua. Yritä uudelleen.");
    await refresh();
  }
  async function toggleNote(note: CalendarNote) {
    if (!user) throw new Error("Kirjautuminen vaaditaan.");
    const { error } = await supabase.from("calendar_notes").update({ completed: !note.completed })
      .eq("id", note.id).eq("user_id", user.id).select("id").single();
    if (error) throw new Error("Muistiinpanoa ei saatu päivitettyä. Yritä uudelleen.");
    await refresh();
  }
  async function deleteNote(note: CalendarNote) {
    if (!user) throw new Error("Kirjautuminen vaaditaan.");
    const { data: deleted, error } = await supabase.from("calendar_notes").delete()
      .eq("id", note.id).eq("user_id", user.id).select("id");
    if (error || !deleted?.length) throw new Error("Muistiinpanoa ei saatu poistettua. Yritä uudelleen.");
    await refresh();
  }

  if (!loading && !accessAllowed) {
    return <main className="flex min-h-svh items-center justify-center bg-[#f7f7f4] px-5 py-12"><section className="max-w-lg rounded-2xl border border-slate-200 bg-white p-8"><h1 className="font-serif text-3xl text-slate-800">Oma kalenteri</h1><p className="mt-4 text-sm leading-7 text-slate-500">{error || "Kalenteri on käytössäsi, kun tililläsi on aktiivinen maksullinen kurssioikeus tai erillinen kalenterioikeus."}</p><Link href="/" className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-[#5452b9]">Takaisin kurssialustalle →</Link></section></main>;
  }

  return <CalendarBoard {...data} loading={loading} error={error} onRetry={() => void refresh()}
    onSaveEvent={saveEvent} onDeleteEvent={deleteEvent} onAddNote={addNote}
    onToggleNote={toggleNote} onDeleteNote={deleteNote} />;
}
