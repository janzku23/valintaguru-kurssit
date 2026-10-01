import Image from "next/image";
import frontLogo from "../../assets/frontlogo.png";
import Etusivulogo from "../../assets/Etusivulogo.png";
import HeroPrimaryAction from "./HeroPrimaryAction";

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
  Valmennuskurssit oikeustieteen eriytyvään osioon ja valintakoe G:hen
</h1>

 <div className="mt-6 inline-flex max-w-full items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-2 text-xs font-bold leading-5 text-[#3f51e7] sm:px-4 sm:text-sm">
        Verkossa · Omaan tahtiin · Tavoitteellisesti
      </div>

      <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:mt-7 sm:text-lg sm:leading-8 md:text-xl">
        ValintaGurun valmennuskurssit auttavat hallitsemaan valintakokeen rakennetta, päättelyä, 
        tekstianalyysiä ja ajankäyttöä.
         Sisällöt kattavat valintakoe G:n ja oikeustieteen eriytyvän osion asiantuntevien opettajien johdolla
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

    {/* OIKEA PUOLI */}
{/* OIKEA PUOLI */}
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
  </div>
</section>
    </>
  );
}
