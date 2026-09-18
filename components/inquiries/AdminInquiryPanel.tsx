"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

type Inquiry = {
  id: string;
  user_id: string | null;
  email: string;
  name: string | null;
  topic: string;
  message: string;
  status: "open" | "answered";
  admin_reply: string | null;
  answered_at: string | null;
  reply_read_at: string | null;
  reply_email_sent_at: string | null;
  created_at: string;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("fi-FI", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

export default function AdminInquiryPanel() {
  const [items, setItems] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<"open" | "all">("open");
  const [replies, setReplies] = useState<Record<string, string>>({});
  const [sendingId, setSendingId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/inquiries", { cache: "no-store" });
      const data = (await response.json()) as { inquiries?: Inquiry[]; error?: string };
      if (!response.ok) throw new Error(data.error ?? "Tiedustelujen haku epäonnistui.");
      setItems(data.inquiries ?? []);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Tiedustelujen haku epäonnistui.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const visible = useMemo(
    () => (filter === "open" ? items.filter((item) => item.status === "open") : items),
    [filter, items],
  );
  const openCount = items.filter((item) => item.status === "open").length;

  async function replyTo(item: Inquiry) {
    const reply = (replies[item.id] ?? item.admin_reply ?? "").trim();
    if (reply.length < 2) return;

    setSendingId(item.id);
    setError("");
    try {
      const response = await fetch(`/api/admin/inquiries/${item.id}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reply }),
      });
      const data = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(data.error ?? "Vastauksen lähettäminen epäonnistui.");
      setReplies((current) => ({ ...current, [item.id]: "" }));
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Vastauksen lähettäminen epäonnistui.");
    } finally {
      setSendingId(null);
    }
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <button onClick={() => setFilter("open")} className={`rounded-full px-4 py-2 text-sm font-black ${filter === "open" ? "bg-violet-700 text-white" : "border border-slate-200 bg-white text-slate-700"}`}>Avoimet ({openCount})</button>
          <button onClick={() => setFilter("all")} className={`rounded-full px-4 py-2 text-sm font-black ${filter === "all" ? "bg-violet-700 text-white" : "border border-slate-200 bg-white text-slate-700"}`}>Kaikki ({items.length})</button>
        </div>
        <button onClick={() => void load()} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700">Päivitä</button>
      </div>

      {error && <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 p-4 font-bold text-red-700">{error}</div>}
      {loading ? <div className="rounded-3xl bg-white p-7">Haetaan tiedusteluja...</div> : visible.length === 0 ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-7"><h2 className="text-xl font-black">Ei avoimia tiedusteluja</h2></div>
      ) : (
        <div className="grid gap-5">
          {visible.map((item) => (
            <article key={item.id} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <div className="flex flex-wrap justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-3 py-1 text-xs font-black ${item.status === "open" ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-800"}`}>{item.status === "open" ? "Avoin" : "Vastattu"}</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">{item.user_id ? "Kirjautunut" : "Vierailija"}</span>
                  </div>
                  <h2 className="mt-3 text-xl font-black">{item.topic}</h2>
                  <p className="mt-1 text-sm text-slate-500">{item.name || "Ei nimeä"} · {item.email} · {formatDate(item.created_at)}</p>
                </div>
              </div>

              <div className="mt-5 whitespace-pre-wrap rounded-2xl bg-slate-50 p-4 leading-7 text-slate-700">{item.message}</div>

              {item.admin_reply && item.status === "answered" && (
                <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                  <p className="font-black text-emerald-900">Lähetetty vastaus</p>
                  <p className="mt-2 whitespace-pre-wrap leading-7 text-emerald-950/80">{item.admin_reply}</p>
                  <p className="mt-3 text-xs font-bold text-emerald-800">
                    {item.user_id
                      ? item.reply_read_at ? "Käyttäjä on avannut vastauksen." : "Käyttäjä ei ole vielä avannut vastausta."
                      : item.reply_email_sent_at ? "Vastaus lähetettiin sähköpostiin." : "Sähköpostikuittausta ei löytynyt."}
                  </p>
                </div>
              )}

              {item.status === "open" && (
                <div className="mt-5">
                  <label className="grid gap-2 text-sm font-black text-slate-800">
                    Vastaus
                    <textarea
                      rows={5}
                      value={replies[item.id] ?? ""}
                      onChange={(event) => setReplies((current) => ({ ...current, [item.id]: event.target.value }))}
                      className="resize-y rounded-2xl border border-slate-300 px-4 py-3 leading-7 outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                      placeholder={item.user_id ? "Vastaus näkyy käyttäjän omissa viesteissä..." : "Vastaus lähetetään tähän sähköpostiin..."}
                    />
                  </label>
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs font-semibold text-slate-500">{item.user_id ? "Toimitus: käyttäjätilille" : `Toimitus: ${item.email}`}</p>
                    <button
                      onClick={() => void replyTo(item)}
                      disabled={sendingId === item.id || !(replies[item.id] ?? "").trim()}
                      className="rounded-full bg-violet-700 px-5 py-3 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {sendingId === item.id ? "Lähetetään..." : "Lähetä vastaus"}
                    </button>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
