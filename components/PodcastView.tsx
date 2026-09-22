"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type {
  CoursePodcastContent,
  PodcastAudioTrack,
  PodcastEpisode,
} from "@/data/podcasts/types";
import {
  getCachedPodcastAudio,
  warmPodcastAudioCache,
} from "@/lib/podcastAudioCache";

type Props = {
  content: CoursePodcastContent;
};

function getCanvaEmbedUrl(
  url?: string
) {
  const value = url?.trim();

  return value || null;
}


const THEORY_HEADINGS = new Set([
  "Oikeustieteen keskeiset perusteet ja käsitteet",
  "Lain rakenne: pykälät, momentit ja artiklat",
  "Oikeudelliset peruskäsitteet",
  "Oikeusteoriat",
  "Oikeusvaltioperiaate",
  "Oikeusvaltioperiaatteen keskeiset lähtökohdat",
  "Oikeusvaltioperiaatteen merkitys yksilölle",
  "Oikeusvaltioperiaate ja demokratia",
  "Vallan kolmijako - oppi",
  "Lainsäädäntövalta",
  "Hallitusvalta",
  "Tuomiovalta",
  "Vallan kolmijaon merkitys",
  "Oikeuslähdeoppi",
  "Oikeuslähteiden väliset ristiriidat",
  "Oikeudelliset tulkintateoriat",
  "Suomen tuomioistuinjärjestelmä",
  "Eurooppalainen tuomiovalta",
  "Kansainvälinen tuomiovalta",
  "Kansainvälinen oikeus ja ihmisoikeudet",
  "Suomen täysivaltaisuus",
]);

function isTheoryHeading(
  paragraph: string
) {
  return THEORY_HEADINGS.has(
    paragraph.trim()
  );
}

export default function PodcastView({
  content,
}: Props) {
  const [
    activeEpisodeId,
    setActiveEpisodeId,
  ] = useState(
    content.episodes[0]?.id ?? ""
  );

  const activeEpisode = useMemo(
    () =>
      content.episodes.find(
        (episode) =>
          episode.id ===
          activeEpisodeId
      ) ??
      content.episodes[0] ??
      null,
    [
      activeEpisodeId,
      content.episodes,
    ]
  );

  if (!activeEpisode) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-extrabold text-slate-950">
          Podcast-sisältöä ei ole vielä
          lisätty
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {content.episodes.length >
        1 && (
        <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="px-2 text-xs font-black uppercase tracking-[0.14em] text-blue-700">
            Valitse jakso
          </p>

          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {content.episodes.map(
              (episode) => {
                const active =
                  episode.id ===
                  activeEpisode.id;

                return (
                  <button
                    key={episode.id}
                    type="button"
                    onClick={() =>
                      setActiveEpisodeId(
                        episode.id
                      )
                    }
                    className={`shrink-0 rounded-full px-4 py-2 text-sm font-black transition ${
                      active
                        ? "bg-blue-600 text-white"
                        : "border border-slate-200 bg-slate-50 text-slate-600 hover:border-blue-200 hover:text-blue-700"
                    }`}
                  >
                    {
                      episode.title
                    }
                  </button>
                );
              }
            )}
          </div>
        </section>
      )}

      <EpisodeView
        key={activeEpisode.id}
        episode={activeEpisode}
      />
    </div>
  );
}

function EpisodeView({
  episode,
}: {
  episode: PodcastEpisode;
}) {
  const canvaEmbedUrl =
    getCanvaEmbedUrl(
      episode.canvaUrl
    );

  const audioTracks = useMemo(
    () =>
      episode.audioTracks?.filter(
        (
          track: PodcastAudioTrack
        ) =>
          track.url.trim().length >
          0
      ) ?? [],
    [episode.audioTracks]
  );

  /**
   * Automaattinen taustalataus:
   *
   * - sivu renderöidään heti
   * - ensimmäinen kuuntelu voi käyttää Firebasea normaalisti
   * - kaikki puuttuvat äänitteet tallennetaan taustalla IndexedDB:hen
   * - seuraavalla sivun avauksella CachedAudioPlayer käyttää paikallista Blobia
   *
   * Pieni viive antaa käyttöliittymän ja Canvan renderöityä ensin.
   */
  useEffect(() => {
    if (
      audioTracks.length === 0
    ) {
      return;
    }

    const timer =
      window.setTimeout(() => {
        void warmPodcastAudioCache(
          audioTracks.map(
            (track) => ({
              id: track.id,
              url: track.url,
            })
          )
        );
      }, 350);

    return () => {
      window.clearTimeout(
        timer
      );
    };
  }, [audioTracks]);

  return (
    <>
      <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-blue-700">
              Podcast
            </span>

            {episode.duration && (
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                {
                  episode.duration
                }
              </span>
            )}
          </div>

          <h2 className="mt-4 font-serif text-3xl font-semibold text-slate-950 sm:text-4xl">
            {episode.title}
          </h2>

          {episode.subtitle && (
            <p className="mt-2 text-lg font-bold text-slate-700">
              {
                episode.subtitle
              }
            </p>
          )}

          {episode.description && (
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              {
                episode.description
              }
            </p>
          )}
        </div>

        <div className="p-4 sm:p-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.13em] text-blue-700">
                  Esitys
                </p>

                <h3 className="mt-1 font-extrabold text-slate-950">
                  Canva-esitys
                </h3>
              </div>

              <span className="text-xl">
                ◫
              </span>
            </div>

            {canvaEmbedUrl ? (
              <div
                className="relative w-full overflow-hidden rounded-lg bg-slate-100"
                style={{
                  height: 0,
                  paddingTop:
                    "56.25%",
                  paddingBottom: 0,
                  boxShadow:
                    "0 2px 8px 0 rgba(63,69,81,0.16)",
                  willChange:
                    "transform",
                }}
              >
                <iframe
                  loading="lazy"
                  src={
                    canvaEmbedUrl
                  }
                  title={`${episode.title} – Canva-esitys`}
                  allowFullScreen
                  allow="fullscreen"
                  style={{
                    position:
                      "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    border: "none",
                    padding: 0,
                    margin: 0,
                  }}
                />
              </div>
            ) : (
              <div className="flex aspect-[16/9] min-h-[220px] items-center justify-center p-8 text-center">
                <div>
                  <p className="font-extrabold text-slate-800">
                    Canva-esitys
                    lisätään tähän
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Lisää jakson{" "}
                    <code className="rounded bg-white px-1.5 py-0.5">
                      canvaUrl
                    </code>
                    , niin esitys
                    näkyy suoraan tässä.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white shadow-sm">
            ▶
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-xs font-black uppercase tracking-[0.13em] text-blue-700">
              Kuuntele
            </p>

            <h3 className="mt-1 text-2xl font-extrabold text-slate-950">
              Podcast
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Voit kuunnella
              podcastia samalla kun
              seuraat yllä olevaa
              esitystä.
            </p>

            {audioTracks.length >
            0 ? (
              <div className="mt-5 space-y-4">
                {audioTracks.map(
                  (
                    track:
                      PodcastAudioTrack,
                    index: number
                  ) => (
                    <div
                      key={
                        track.id
                      }
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5"
                    >
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.13em] text-blue-700">
                            Äänite{" "}
                            {index +
                              1}
                          </p>

                          <h4 className="mt-1 font-extrabold text-slate-900">
                            {
                              track.title
                            }
                          </h4>
                        </div>

                        {track.duration && (
                          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-500">
                            {
                              track.duration
                            }
                          </span>
                        )}
                      </div>

                      <CachedAudioPlayer
                        track={
                          track
                        }
                      />
                    </div>
                  )
                )}
              </div>
            ) : (
              <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5">
                <p className="font-bold text-slate-700">
                  Äänitteitä ei ole
                  vielä lisätty
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Lisää Firebase
                  Storage -linkit
                  jakson{" "}
                  <code className="rounded bg-white px-1.5 py-0.5">
                    audioTracks
                  </code>
                  -listaan.
                  Äänitteiden määrää ei
                  ole rajoitettu.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-black uppercase tracking-[0.13em] text-blue-700">
          Tiivis teoria
        </p>

        <h3 className="mt-2 text-2xl font-extrabold text-slate-950">
          {episode.theoryTitle ||
            "Jakson tärkeimmät asiat"}
        </h3>

        <div className="mt-5 space-y-4 leading-8 text-slate-700">
          {episode.theory
            .split(/\n\s*\n/)
            .filter(Boolean)
            .map(
              (
                paragraph:
                  string,
                index: number
              ) => {
                const trimmed =
                  paragraph.trim();

                if (
                  isTheoryHeading(
                    trimmed
                  )
                ) {
                  return (
                    <h4
                      key={index}
                      className="pt-4 text-lg font-black leading-7 text-slate-950 first:pt-0 sm:text-xl"
                    >
                      {trimmed}
                    </h4>
                  );
                }

                return (
                  <p
                    key={index}
                    className="text-slate-700"
                  >
                    {paragraph}
                  </p>
                );
              }
            )}
        </div>
      </section>
    </>
  );
}

/**
 * Soitin käyttää sivua avatessa paikallista IndexedDB-kopiota,
 * jos sellainen löytyy ja sen sourceUrl vastaa nykyistä Firebase-URL:ia.
 *
 * Jos kopiota ei vielä ole, soitin käyttää Firebasea normaalisti.
 * EpisodeView lataa puuttuvan tiedoston samalla taustalla seuraavia
 * käyttökertoja varten.
 */
function CachedAudioPlayer({
  track,
}: {
  track: PodcastAudioTrack;
}) {
  const audioRef =
    useRef<HTMLAudioElement | null>(
      null
    );

  const [sourceUrl, setSourceUrl] =
    useState(track.url);

  useEffect(() => {
    let cancelled = false;
    let objectUrl: string | null =
      null;

    setSourceUrl(
      track.url
    );

    void (async () => {
      const cachedBlob =
        await getCachedPodcastAudio(
          track.id,
          track.url
        );

      if (
        cancelled ||
        !cachedBlob
      ) {
        return;
      }

      const audio =
        audioRef.current;

      /**
       * Jos käyttäjä ehti jo aloittaa Firebase-version kuuntelun,
       * emme vaihda lähdettä kesken toiston. Paikallinen tiedosto
       * otetaan käyttöön seuraavalla komponentin avauksella.
       */
      if (
        audio &&
        (!audio.paused ||
          audio.currentTime > 0)
      ) {
        return;
      }

      objectUrl =
        URL.createObjectURL(
          cachedBlob
        );

      setSourceUrl(
        objectUrl
      );
    })();

    return () => {
      cancelled = true;

      if (objectUrl) {
        URL.revokeObjectURL(
          objectUrl
        );
      }
    };
  }, [
    track.id,
    track.url,
  ]);

  return (
    <audio
      ref={audioRef}
      controls
      preload="none"
      src={sourceUrl}
      className="w-full"
    >
      Selaimesi ei tue äänen
      toistoa.
    </audio>
  );
}
