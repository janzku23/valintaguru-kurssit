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
  const [markingId, setMarkingId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/inquiries/mine", {
        cache: "no-store",
      });

      const data = (await response.json()) as {
        inquiries?: Inquiry[];
        error?: string;
      };

      if (!response.ok) {
        throw new Error(
          data.error ?? "Kysymysten haku epäonnistui."
        );
      }

      setItems(data.inquiries ?? []);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Kysymysten haku epäonnistui."
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

    window.addEventListener(
      "valintaguru:inquiry-created",
      refresh
    );

    return () => {
      window.removeEventListener(
        "valintaguru:inquiry-created",
        refresh
      );
    };
  }, [load]);

  async function markAsRead(id: string) {
    setMarkingId(id);
    setError("");

    try {
      const response = await fetch(
        `/api/inquiries/${encodeURIComponent(id)}/read`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = (await response.json().catch(() => ({}))) as {
        success?: boolean;
        replyReadAt?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(
          data.error ?? "Vastauksen kuittaus epäonnistui."
        );
      }

      const readAt =
        data.replyReadAt ?? new Date().toISOString();

      /*
       * Päivitetään näkymä heti ilman sivun latausta.
       */
      setItems((current) =>
        current.map((item) =>
          item.id === id
            ? {
                ...item,
                reply_read_at: readAt,
              }
            : item
        )
      );

      /*
       * Mahdollistaa muiden komponenttien päivittämisen,
       * jos niihin myöhemmin lisätään tämän eventin kuuntelu.
       */
      window.dispatchEvent(
        new CustomEvent("valintaguru:inquiry-read", {
          detail: { id },
        })
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Vastauksen kuittaus epäonnistui."
      );
    } finally {
      setMarkingId(null);
    }
  }

  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-7 shadow-sm">
        Haetaan kysymyksiä ja vastauksia...
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
        <h3 className="text-xl font-black">
          Ei vielä kysymyksiä
        </h3>

        <p className="mt-2 text-slate-600">
          Kun lähetät kysymyksen yllä olevalla lomakkeella,
          se ilmestyy tähän.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5">
      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 font-bold text-red-700">
          {error}
        </div>
      )}

      {items.map((item) => {
        const hasUnreadReply =
          Boolean(item.answered_at) &&
          Boolean(item.admin_reply) &&
          !item.reply_read_at;

        return (
          <article
            key={item.id}
            className={`rounded-[2rem] border bg-white p-6 shadow-sm sm:p-7 ${
              hasUnreadReply
                ? "border-red-200 ring-2 ring-red-100"
                : "border-slate-200"
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-violet-700">
                    {item.topic}
                  </p>

                  {hasUnreadReply && (
                    <span className="rounded-full bg-red-600 px-2.5 py-1 text-[11px] font-black uppercase tracking-wide text-white">
                      Uusi vastaus
                    </span>
                  )}
                </div>

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
                {item.status === "answered"
                  ? "Vastattu"
                  : "Odottaa vastausta"}
              </span>
            </div>

            <div className="mt-5 whitespace-pre-wrap rounded-2xl bg-slate-50 p-4 leading-7 text-slate-700">
              {item.message}
            </div>

            {item.admin_reply && (
              <div
                className={`mt-5 rounded-2xl border p-5 ${
                  hasUnreadReply
                    ? "border-red-200 bg-red-50/50"
                    : "border-indigo-200 bg-indigo-50"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        hasUnreadReply
                          ? "bg-red-600"
                          : "bg-[#3f51e7]"
                      }`}
                    />

                    <h3 className="font-black text-slate-950">
                      ValintaGurun vastaus
                    </h3>
                  </div>

                  {!hasUnreadReply &&
                    item.reply_read_at && (
                      <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-black text-emerald-700">
                        ✓ Luettu
                      </span>
                    )}
                </div>

                <p className="mt-3 whitespace-pre-wrap leading-7 text-slate-700">
                  {item.admin_reply}
                </p>

                <div className="mt-5 flex flex-col gap-3 border-t border-slate-200/80 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  {item.answered_at && (
                    <p className="text-xs font-semibold text-slate-500">
                      Vastattu{" "}
                      {formatDate(item.answered_at)}
                    </p>
                  )}

                  {hasUnreadReply && (
                    <button
                      type="button"
                      disabled={markingId === item.id}
                      onClick={() =>
                        void markAsRead(item.id)
                      }
                      className="inline-flex items-center justify-center rounded-full bg-[#3f51e7] px-5 py-2.5 text-sm font-black text-white shadow-sm transition hover:bg-[#3142d6] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {markingId === item.id
                        ? "Kuitataan..."
                        : "✓ Kuittaa luetuksi"}
                    </button>
                  )}
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
