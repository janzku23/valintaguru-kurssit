import { connection } from "next/server";
import Link from "next/link";
import { catalog } from "@/lib/shop/server";
import { courseOffers } from "@/lib/shop/offers";
import { money } from "@/lib/shop/types";

const featuredCourses = [
  { id: "valintakoe-g", label: "Valintakoe G tehokurssi" },
  { id: "oikis-teho", label: "Oikis Teho" },
];

export default async function BlackWeekHeroPrices() {
  await connection();

  let products: Awaited<ReturnType<typeof catalog>> = [];
  try {
    products = await catalog();
  } catch {
    // Never show historical or invented prices when the catalog is unavailable.
  }
  const offers = courseOffers(
    products,
    featuredCourses.map((course) => course.id),
  );
  const available = featuredCourses.filter((course) => offers[course.id]);

  if (available.length) {
    return (
      <>
        <p className="mb-2 text-xs text-white/60">Esimerkiksi nämä kurssit:</p>
        <div className="grid grid-cols-1 gap-2 min-[390px]:grid-cols-2">
          {available.map((course) => {
            const offer = offers[course.id];
            // Match checkout: a percentage discount is truncated to whole cents.
            const discounted = offer.priceCents - Math.floor(offer.priceCents * 40 / 100);
            return (
              <Link key={course.id} href={offer.href} className="rounded-2xl border border-white/15 bg-white/5 p-3 transition hover:border-[#f5cf78]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5cf78]">
                <h3 className="min-h-10 text-sm font-semibold leading-5 text-white/90">{course.label}</h3>
                <p className="mt-2 text-sm text-white/60"><span className="sr-only">Hinta ennen alennuskoodia: </span><s>{money(offer.priceCents)}</s></p>
                <p className="mt-1 whitespace-nowrap text-3xl font-black tracking-tight text-[#f5cf78]"><span className="sr-only">Koodilla BLACKWEEK: </span>{money(discounted)}</p>
                <p className="mt-1 text-xs text-white/60">koodilla BLACKWEEK</p>
              </Link>
            );
          })}
        </div>
      </>
    );
  }

  return <p className="py-3 text-sm leading-6 text-white/75">Katso ajantasaiset kurssihinnat kaupasta ja käytä kassalla alennuskoodia BLACKWEEK.</p>;
}
