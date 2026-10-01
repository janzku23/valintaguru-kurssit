"use client";

import Image from "next/image";
import logo from "../../assets/logo.png";
import { courses, HOLVI_STORE_URL } from "../../data/courses";
import type { CourseId } from "../../data/courses";
import { useHomeAuth } from "./HomeAuthProvider";

export default function HomeFooterClient() {
  const { isLoggedIn, ownedCourseIds } = useHomeAuth();
  const ownedCourses = courses.filter((course) =>
    ownedCourseIds.includes(course.id.toLowerCase() as CourseId),
  );

  return (
      <footer className="border-t border-slate-200 bg-[#fffdf8]">
  <div className="mx-auto grid max-w-7xl gap-9 px-4 py-10 sm:px-5 sm:py-12 md:grid-cols-2 md:px-8 lg:grid-cols-4">
    <div>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 overflow-hidden rounded-full border border-slate-950 bg-white">
          <Image
            src={logo}
            alt="ValintaGuru"
            width={40}
            height={40}
            className="h-full w-full object-cover"
          />
        </span>

        <span className="font-serif text-2xl font-semibold">
          ValintaGuru
        </span>
      </div>

      <p className="mt-4 max-w-sm leading-7 text-slate-600">
        Valmennuskurssit valintakoe G:hen ja oikeustieteen
        eriytyvään osioon.
   
      </p>

        <p className="mt-4 max-w-sm leading-7 text-slate-600">
        Versio 1.0.0
      </p>
      <p className="mt-4 max-w-sm leading-7 text-slate-600">
        Päivitetty: 1.10 klo 21.09
      </p>
    </div>

    <div>
      <p className="font-extrabold">Kurssialusta</p>

      <div className="mt-4 flex flex-col gap-3 text-slate-600">
        <a
          href="#omat-kurssit"
          className="transition hover:text-[#3f51e7]"
        >
          Omat kurssit
        </a>

        {isLoggedIn && ownedCourses.length > 0 && (
          <>
            <a
              href="/kalenteri"
              className="transition hover:text-[#3f51e7]"
            >
              Kalenteri
            </a>

            <a
              href="/gurupath"
              className="transition hover:text-[#3f51e7]"
            >
              GuruPeli
            </a>
          </>
        )}

        <a
          href="/kysy"
          className="transition hover:text-[#3f51e7]"
        >
          Yhteydenottolomake
        </a>

        <a
          href={HOLVI_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-[#3f51e7]"
        >
          Verkkokauppa ↗
        </a>

        {isLoggedIn && (
          <a
            href="/profiili"
            className="transition hover:text-[#3f51e7]"
          >
            Profiili
          </a>
        )}
      </div>
    </div>

    <div>
      <p className="font-extrabold">Ehdot</p>

      <div className="mt-4 flex flex-col gap-3 text-slate-600">
        <a
          href="/ehdot/tietosuojakaytanto"
          className="transition hover:text-[#3f51e7]"
        >
          Tietosuojakäytäntö
        </a>

        <a
          href="/ehdot/palautuskaytanto"
          className="transition hover:text-[#3f51e7]"
        >
          Palautuskäytäntö
        </a>

        <a
          href="/ehdot/kayttoehdot"
          className="transition hover:text-[#3f51e7]"
        >
          Käyttöehdot
        </a>

        <a
          href="/ehdot/toimituskaytanto"
          className="transition hover:text-[#3f51e7]"
        >
          Toimituskäytäntö
        </a>
      </div>
    </div>

    <div>
      <p className="font-extrabold">ValintaGuru Oy</p>

      <div className="mt-4 flex flex-col gap-3 text-slate-600">
        <p>Y-tunnus 3573013-4</p>

        <a
          href="mailto:info@valintaguru.com"
          className="transition hover:text-[#3f51e7]"
        >
          info@valintaguru.com
        </a>

        <a
          href="/ehdot/yhteystiedot"
          className="transition hover:text-[#3f51e7]"
        >
          Yhteystiedot
        </a>

        <a
          href="/ehdot/oikeudellinen-huomautus"
          className="transition hover:text-[#3f51e7]"
        >
          Oikeudellinen huomautus
        </a>
      </div>
    </div>
  </div>

  <div className="border-t border-slate-200 px-4 py-5 sm:px-5">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 sm:flex-row">
      <p>© 2026 ValintaGuru Oy</p>

      <a
        href="/ehdot"
        className="font-semibold transition hover:text-[#3f51e7]"
      >
        Kaikki ehdot ja yritystiedot
      </a>
    </div>
  </div>
</footer>
  );
}
