import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
// import frontLogo from "../../assets/frontlogo.png"; // Palauta alkuperäisen kortin kanssa.
import { Suspense } from "react";
import BlackWeekHeroPrices from "./BlackWeekHeroPrices";
import Etusivulogo from "../../assets/Etusivulogo.png";
import HeroPrimaryAction from "./HeroPrimaryAction";
import HomeHeroPanel from "./HomeHeroPanel";

export default function HomeHero() {
  return (
    <>
<section className="relative h-[260px] w-full overflow-hidden border-b border-slate-200 bg-[#fffdf8] sm:h-[360px] lg:h-[460px]">
  <Image
    src={Etusivulogo}
    alt="ValintaGuru"
    fill
    priority
    sizes="100vw"
    className="object-cover object-center"
  />
</section>

{/* HERO SECTION */}
<section className="relative overflow-hidden border-b border-slate-200 bg-[#fffdf8]">
  <div className="absolute -right-28 -top-28 h-56 w-56 rounded-full bg-[#3f51e7] opacity-90 sm:h-72 sm:w-72" />

  <div className="absolute -bottom-20 -left-12 h-32 w-32 rounded-[2.5rem] border-[8px] border-[#f3a31b] opacity-80 sm:left-8 sm:h-40 sm:w-40 sm:border-[10px]" />

  <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24">

    {/* VASEN PUOLI */}
    <div>
     

    <h1 className="mt-5 max-w-3xl break-words font-serif text-[2rem] font-semibold leading-[1.02] tracking-tight sm:mt-2 sm:text-4xl md:text-6xl">
  Valmennuskurssit valintakoe G:hen ja oikeustieteen eriytyvään osioon
</h1>

 <div className="mt-6 inline-flex max-w-full items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-2 text-xs font-bold leading-5 text-[#3f51e7] sm:px-4 sm:text-sm">
        Verkossa · Omaan tahtiin · Tavoitteellisesti
      </div>

      <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:mt-7 sm:text-lg sm:leading-8 md:text-xl">
        ValintaGurun valmennuskurssit auttavat hallitsemaan valintakokeen rakennetta, päättelyä, 
        tekstianalyysiä ja ajankäyttöä.
      </p>

      <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:mt-7 sm:text-lg sm:leading-8 md:text-xl">
        Kurssimme auttavat sinua valmistautumaan valintakoe G:hen ja oikeustieteen erityvään osioon asiantuntevien opettajien avulla.
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
        <HeroPrimaryAction />

        <a
          href="#kurssit"
          className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3.5 text-center font-bold text-slate-900 transition hover:border-[#3f51e7] hover:text-[#3f51e7] sm:w-auto sm:px-7"
        >
          Tutustu kursseihin
        </a>
      </div>

      <div className="mt-7 grid max-w-xl grid-cols-1 gap-3 text-center text-sm min-[390px]:grid-cols-3 sm:mt-9">
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
          <strong className="block text-lg text-[#3f51e7] sm:text-xl">
            100 %
          </strong>

          <span className="text-xs text-slate-600 sm:text-sm">
            verkossa
          </span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
          <strong className="block text-lg text-[#3f51e7] sm:text-xl">
            24/7
          </strong>

          <span className="text-xs text-slate-600 sm:text-sm">
            käytettävissä
          </span>
        </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
          <strong className="block text-lg text-[#3f51e7] sm:text-xl">
            Vuoden 2027
          </strong>

          <span className="text-xs text-slate-600 sm:text-sm">
            valmennuskurssit
          </span>
        </div>

      
      </div>
    </div>

    <HomeHeroPanel>
    <aside aria-labelledby="black-week-title" className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-[#d9a944]/50 bg-[#0c0d11] text-white shadow-2xl shadow-amber-950/20">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#d9a944]/15 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#3f51e7]/15 blur-3xl" />
      <div className="relative p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.18em]">
          <span className="inline-flex items-center gap-2.5 font-serif text-lg font-bold normal-case tracking-normal text-[#f5cf78]">
            <Image src={logo} alt="" width={36} height={36} className="h-9 w-9 rounded-full bg-white p-0.5" />
            ValintaGuru
          </span>
          <span className="rounded-full border border-[#d9a944]/35 px-3 py-1.5 text-[#f5cf78]">23.–29.11.</span>
        </div>
        <h2 id="black-week-title" className="mt-5 text-[clamp(2.5rem,6vw,4rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]">
          Black <span className="block text-[#f5cf78]">Week.</span>
        </h2>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
          <p className="max-w-40 text-base font-medium leading-6 text-white/80">Valmistaudu unelmiesi opiskelupaikkaan.</p>
          <p className="text-5xl font-black leading-none tracking-tighter text-[#f5cf78] sm:text-6xl">−40<span className="ml-1 text-3xl">%</span></p>
        </div>
        <div className="mt-4 border-t border-white/15 pt-3">
          <Suspense fallback={<p className="py-6 text-sm text-white/70">Ladataan kurssitarjouksia…</p>}>
            <BlackWeekHeroPrices />
          </Suspense>
        </div>
        <p className="mt-3 text-center text-sm text-white/80">Kaikki kurssit −40 % koodilla <strong className="font-black tracking-wider text-[#f5cf78]">BLACKWEEK</strong></p>
        <Link href="/kauppa" className="mt-3 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#f5d78d] to-[#e9b950] px-5 py-3 text-sm font-bold text-[#211808] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5cf78]">
          Hyödynnä Black Week -etu <span aria-hidden="true">→</span>
        </Link>
        <p className="mt-2 text-center text-xs leading-5 text-white/60">Syötä alennuskoodi kassalla. Voimassa 23.–29.11.</p>
      </div>
    </aside>
    </HomeHeroPanel>

{/* ALKUPERÄINEN KURSSIALUSTAKORTTI — palauta kampanjan jälkeen.
<div className="relative mx-auto w-full max-w-xl px-1 sm:px-0">
  <div className="absolute -inset-2 rounded-[1.75rem] bg-[#f3a31b] sm:-inset-4 sm:rounded-[2.25rem]" />

  <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/15 sm:rounded-[2rem] sm:p-3">
    <Image
      src={frontLogo}
      alt="ValintaGurun kurssialusta"
      sizes="(max-width: 1024px) 100vw, 560px"
      className="aspect-[16/10] w-full rounded-[1.1rem] object-cover sm:aspect-[4/2] sm:rounded-[1.4rem]"
    />

    <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-3 shadow-lg backdrop-blur sm:bottom-7 sm:left-7 sm:right-7 sm:rounded-2xl sm:p-4">
      <p className="text-sm font-bold text-[#3f51e7]">
        Uudistunut kurssialusta
      </p>

      <p className="mt-1 text-sm font-semibold leading-5 sm:text-base sm:leading-normal">
        Teoria, harjoitukset ja oma edistyminen yhdessä paikassa.
      </p>
    </div>
  </div>
</div>
*/}
  </div>
</section>
    </>
  );
}
