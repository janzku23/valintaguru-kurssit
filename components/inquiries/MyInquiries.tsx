"use client";

import { useCallback, useEffect, useState } from "react";

type Inquiry = {
  id: string;
  topic: string;
  message: string;
  status: "open" | "answered";
  admin_reply: string | null;
  answered_at: string | null;
  reply_read_at: string | null;
  created_at: string;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("fi-FI", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default function MyInquiries() {
  const [items, setItems] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/inquiries/mine", { cache: "no-store" });
      const data = (await response.json()) as {
        inquiries?: Inquiry[];
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "Kysymysten haku epäonnistui.");
      }

      const inquiries = data.inquiries ?? [];
      setItems(inquiries);

      const unread = inquiries.filter(
        (item) => item.answered_at && !item.reply_read_at,
      );

      await Promise.allSettled(
        unread.map((item) =>
          fetch(`/api/inquiries/${item.id}/read`, { method: "POST" }),
        ),
      );
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Kysymysten haku epäonnistui.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();

    const refresh = () => {
      void load();
    };

    window.addEventListener("valintaguru:inquiry-created", refresh);

    return () => {
      window.removeEventListener("valintaguru:inquiry-created", refresh);
    };
  }, [load]);

  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-7 shadow-sm">
        Haetaan kysymyksiä ja vastauksia...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-6 font-bold text-red-700">
        {error}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
        <h3 className="text-xl font-black">Ei vielä kysymyksiä</h3>
        <p className="mt-2 text-slate-600">
          Kun lähetät kysymyksen yllä olevalla lomakkeella, se ilmestyy tähän.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5">
      {items.map((item) => (
        <article
          key={item.id}
          className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-violet-700">
                {item.topic}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-500">
                Lähetetty {formatDate(item.created_at)}
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-black ${
                item.status === "answered"
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-amber-100 text-amber-800"
              }`}
            >
              {item.status === "answered" ? "Vastattu" : "Odottaa vastausta"}
            </span>
          </div>

          <div className="mt-5 whitespace-pre-wrap rounded-2xl bg-slate-50 p-4 leading-7 text-slate-700">
            {item.message}
          </div>

          {item.admin_reply && (
            <div className="mt-5 rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#3f51e7]" />
                <h3 className="font-black text-slate-950">
                  ValintaGurun vastaus
                </h3>
              </div>

              <p className="mt-3 whitespace-pre-wrap leading-7 text-slate-700">
                {item.admin_reply}
              </p>

              {item.answered_at && (
                <p className="mt-4 text-xs font-semibold text-slate-500">
                  Vastattu {formatDate(item.answered_at)}
                </p>
              )}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
