import type { Metadata } from "next";
import { HomeAuthProvider } from "./home/HomeAuthProvider";
import HomeHeaderClient from "./home/HomeHeaderClient";
import HomeHero from "./home/HomeHero";
import FreeCoursePromoBar from "./home/FreeCoursePromoBar";
import FreeCourseSignup from "./home/FreeCourseSignup";
import FreeCourseAccessCard from "./home/FreeCourseAccessCard";
import OwnedCoursesClient from "./home/OwnedCoursesClient";
import CoursesClient from "./home/CoursesClient";
import HomeWhy from "./home/HomeWhy";
import HomeScoreLimits from "./home/HomeScoreLimits";
import HomeSocialClient from "./home/HomeSocialClient";
import HomeFooterClient from "./home/HomeFooterClient";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.valintaguru.fi";

export const metadata: Metadata = {
  title: {
    absolute: "ValintaGuru – Valintakoe G ja oikeustieteen valmennuskurssit",
  },
  description:
    "ValintaGurun valmennuskurssit Valintakoe G:hen ja oikeustieteen eriytyvään osioon. Harjoittele päättelyä, aineistojen analysointia, tekstinymmärtämistä ja ajankäyttöä tehokkaasti verkossa.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fi_FI",
    siteName: "ValintaGuru",
    url: siteUrl,
    title: "ValintaGuru – Valintakoe G ja oikeustieteen valmennuskurssit",
    description:
      "Valmennuskurssit Valintakoe G:hen ja oikeustieteen eriytyvään osioon. Teoria, harjoitukset ja opiskelun seuranta yhdessä palvelussa.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ValintaGuru – Valintakoe G ja oikeustieteen valmennuskurssit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ValintaGuru – Valintakoe G ja oikeustieteen valmennuskurssit",
    description:
      "Valmennuskurssit Valintakoe G:hen ja oikeustieteen eriytyvään osioon.",
    images: ["/og-image.png"],
  },
};

const homePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  url: siteUrl,
  name: "ValintaGuru – Valintakoe G ja oikeustieteen valmennuskurssit",
  description:
    "ValintaGurun valmennuskurssit Valintakoe G:hen ja oikeustieteen eriytyvään osioon.",
  inLanguage: "fi-FI",
  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },
  about: [
    {
      "@type": "Thing",
      name: "Valintakoe G",
      url: `${siteUrl}/valintakoe-g`,
    },
    {
      "@type": "Thing",
      name: "Oikeustiede",
      url: `${siteUrl}/oikeustiede`,
    },
  ],
};


export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <HomeAuthProvider>
        <main className="min-h-screen overflow-x-hidden bg-[#fffdf8] text-slate-950">
          <HomeHeaderClient />
          <FreeCoursePromoBar />
          <HomeHero />
          <OwnedCoursesClient />
          <FreeCourseAccessCard />
          <CoursesClient />
          <FreeCourseSignup />
          <HomeWhy />
          <HomeScoreLimits />
          <HomeSocialClient />
          <HomeFooterClient />
        </main>
      </HomeAuthProvider>
    </>
  );
}
