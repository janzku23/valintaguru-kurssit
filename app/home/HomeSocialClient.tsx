"use client";

import { useState } from "react";
import Script from "next/script";
import logo from "../../assets/logo.png";

export default function HomeSocialClient() {
  const instagramProfileUrl = "https://www.instagram.com/valintaguru/";
  const tiktokProfileUrl = "https://www.tiktok.com/@valintaguru";
  const [instagramSlide, setInstagramSlide] = useState(0);

  const instagramPosts = [
    { image: logo.src, alt: "ValintaGurun Instagram-julkaisu 1" },
    { image: logo.src, alt: "ValintaGurun Instagram-julkaisu 2" },
    { image: logo.src, alt: "ValintaGurun Instagram-julkaisu 3" },
    { image: logo.src, alt: "ValintaGurun Instagram-julkaisu 4" },
    { image: logo.src, alt: "ValintaGurun Instagram-julkaisu 5" },
  ];

  const previousInstagramSlide = () => {
    setInstagramSlide((current) =>
      current === 0 ? instagramPosts.length - 1 : current - 1,
    );
  };

  const nextInstagramSlide = () => {
    setInstagramSlide((current) =>
      current === instagramPosts.length - 1 ? 0 : current + 1,
    );
  };

  const getInstagramPosition = (index: number) => {
    const total = instagramPosts.length;
    let position = (index - instagramSlide + total) % total;
    if (position > Math.floor(total / 2)) position -= total;
    return position;
  };

  return (
    <>
      <section id="ajankohtaista" className="scroll-mt-20 bg-[#3f51e7] py-12 text-white sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
            <div className="flex flex-col justify-center text-center lg:text-left">
              <p className="font-bold uppercase tracking-[0.18em] text-indigo-100">Ajankohtaista</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">
                Seuraa ValintaGurun uusimpia vinkkejä
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-indigo-100 lg:mx-0">
                Katso uusimmat sisällöt Instagramista ja TikTokista.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
                <a
                  href={instagramProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-center font-bold text-[#3f51e7] sm:w-auto"
                >
                  Avaa Instagram
                </a>
                <a
                  href={tiktokProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-center font-bold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto"
                >
                  Avaa TikTok
                </a>
              </div>
            </div>

            <div className="flex min-w-0 items-center justify-center lg:justify-end">
              <div className="w-full min-w-0 max-w-[560px] rounded-[1.5rem] bg-white p-3 text-slate-950 shadow-2xl shadow-indigo-950/20 sm:rounded-[2rem] sm:p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-[#3f51e7]">Instagram</p>
                    <p className="mt-0.5 text-sm font-semibold text-slate-600">@valintaguru</p>
                  </div>
                  <a
                    href={instagramProfileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold transition hover:border-[#3f51e7] hover:text-[#3f51e7]"
                  >
                    Seuraa
                  </a>
                </div>

                <div className="relative mt-4 h-[210px] overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 min-[390px]:h-[230px] sm:h-[270px]">
                  <div className="absolute inset-0 flex items-center justify-center [perspective:1200px]">
                    {instagramPosts.map((post, index) => {
                      const position = getInstagramPosition(index);
                      const isVisible = Math.abs(position) <= 2;
                      const isActive = position === 0;

                      const transform =
                        position === 0
                          ? "translateX(0) translateZ(80px) scale(1) rotateY(0deg)"
                          : position === -1
                            ? "translateX(-46%) translateZ(0) scale(0.82) rotateY(12deg)"
                            : position === 1
                              ? "translateX(46%) translateZ(0) scale(0.82) rotateY(-12deg)"
                              : position === -2
                                ? "translateX(-76%) translateZ(-90px) scale(0.66) rotateY(18deg)"
                                : "translateX(76%) translateZ(-90px) scale(0.66) rotateY(-18deg)";

                      return (
                        <button
                          key={post.alt}
                          type="button"
                          onClick={() => setInstagramSlide(index)}
                          aria-label={`Näytä Instagram-kuva ${index + 1}`}
                          aria-current={isActive ? "true" : undefined}
                          className={`absolute aspect-[4/3] w-[180px] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-2xl transition-all duration-500 ease-out min-[390px]:w-[205px] sm:w-[285px] ${
                            isVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                          } ${isActive ? "z-30" : Math.abs(position) === 1 ? "z-20" : "z-10"}`}
                          style={{
                            transform,
                            filter: isActive
                              ? "brightness(1)"
                              : Math.abs(position) === 1
                                ? "brightness(0.84)"
                                : "brightness(0.67)",
                          }}
                        >
                          <img
                            src={post.image}
                            alt={post.alt}
                            className="h-full w-full object-cover"
                          />
                          {!isActive && (
                            <span className="absolute inset-0 bg-slate-950/10" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={previousInstagramSlide}
                    aria-label="Edellinen Instagram-kuva"
                    className="absolute left-3 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-xl font-semibold text-slate-950 shadow-lg transition hover:scale-105"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={nextInstagramSlide}
                    aria-label="Seuraava Instagram-kuva"
                    className="absolute right-3 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-xl font-semibold text-slate-950 shadow-lg transition hover:scale-105"
                  >
                    ›
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-center gap-2">
                  {instagramPosts.map((post, index) => (
                    <button
                      key={post.alt}
                      type="button"
                      onClick={() => setInstagramSlide(index)}
                      aria-label={`Näytä Instagram-kuva ${index + 1}`}
                      className={`h-2.5 rounded-full transition-all ${
                        instagramSlide === index
                          ? "w-7 bg-[#3f51e7]"
                          : "w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 min-w-0 overflow-hidden rounded-[1.5rem] bg-white p-2 text-slate-950 shadow-2xl shadow-indigo-950/20 sm:rounded-[2rem] sm:p-4 md:p-5">
            <blockquote
              className="tiktok-embed"
              cite={tiktokProfileUrl}
              data-unique-id="valintaguru"
              data-embed-type="creator"
              style={{
                margin: "0 auto",
                maxWidth: "100%",
                minWidth: "0",
                width: "100%",
              }}
            >
              <section className="flex min-h-[360px] items-center justify-center p-5 text-center sm:min-h-[420px] sm:p-8">
                <div>
                  <p className="text-lg font-extrabold">Ladataan TikTok-profiilia…</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`${tiktokProfileUrl}?refer=creator_embed`}
                    className="mt-4 inline-flex rounded-full bg-[#3f51e7] px-5 py-2.5 text-sm font-bold text-white"
                  >
                    @valintaguru TikTokissa
                  </a>
                </div>
              </section>
            </blockquote>
          </div>
        </div>
      </section>
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </>
  );
}
