"use client";

import { useHomeAuth } from "./HomeAuthProvider";

export default function HeroPrimaryAction() {
  const { isLoggedIn } = useHomeAuth();

  return (
    <a
      href={isLoggedIn ? "#omat-kurssit" : "/kirjaudu"}
      className="inline-flex w-full items-center justify-center rounded-full bg-[#3f51e7] px-5 py-3.5 text-center font-bold text-white shadow-xl shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-[#3142d6] sm:w-auto sm:px-7"
    >
      {isLoggedIn ? "Jatka opiskelua" : "Kirjaudu kurssialustalle"}
    </a>
  );
}
