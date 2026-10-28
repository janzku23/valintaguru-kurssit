export type SiteUpdate = {
  date: string;
  title: string;
  changes: string[];
};

/*
 * LISÄÄ UUSI PÄIVITYS TÄHÄN LISTAAN.
 * Päivämäärä kirjoitetaan muodossa VVVV-KK-PP.
 * Voit lisätä changes-listaan niin monta kohtaa kuin tarvitset.
 * Sivulla päivitykset järjestetään automaattisesti uusin ensin.
 * Saman päivän päivitykset näytetään tässä kirjoitetussa järjestyksessä.
 * Tallenna tiedosto ja julkaise sivusto, jotta muutokset näkyvät kävijöille.
 *
 * Kopioitava pohja (lisää listaan ennen edellistä päivitystä):
 * {
 *   date: "2026-10-29",
 *   title: "Kirjoita päivityksen otsikko tähän",
 *   changes: [
 *     "Ensimmäinen muutos.",
 *     "Toinen muutos.",
 *   ],
 * },
 */
const entries: SiteUpdate[] = [
  {
    date: "2026-10-27",
    title: "Sivuston päivityshistoria",
    changes: [
      "Etusivun alareunaan lisätty painike, josta pääsee katsomaan sivuston päivitykset.",
      "Päivityshistoriassa näkyvät muutosten päivämäärät, otsikot ja kuvaukset uusimmasta alkaen.",
    ],
  },
    {
    date: "2026-10-28",
    title: "Sivuston päivityshistoria",
    changes: [
      "Gurupeli on saanut uusia kysymyksiä",
      "Valintakoe G -kurssin harjoituksia päivitetty",
      "Oikis Teho - kurssi saanut lisää teoriaa",
      "Yleisiä parannuksia ja korjauksia"
      
    ],
  },
];

export const siteUpdates = [...entries].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function formatUpdateDate(date: string) {
  return new Intl.DateTimeFormat("fi-FI", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    timeZone: "Europe/Helsinki",
  }).format(new Date(`${date}T12:00:00Z`));
}
