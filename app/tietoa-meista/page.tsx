import type { Metadata } from "next";
import TietoaMeistaClient from "./TietoaMeistaClient";

export const metadata: Metadata = {
  title: "Tietoa meistä | ValintaGuru",
  description: "Tutustu ValintaGurun taustalla oleviin ihmisiin ja tiimiin.",
  alternates: { canonical: "https://www.valintaguru.fi/tietoa-meista" },
  openGraph: {
    title: "Tietoa meistä | ValintaGuru",
    description: "Tutustu ValintaGurun tiimiin.",
    url: "https://www.valintaguru.fi/tietoa-meista",
    type: "website",
  },
};

export default function TietoaMeistaPage() {
  return <TietoaMeistaClient />;
}
