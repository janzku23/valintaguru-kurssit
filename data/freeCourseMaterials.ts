export type FreeCourseMaterial = {
  id: string;
  label: string;
  title: string;
  author?: string;
  scope: string;
  url: string;
  originalUrl?: string;
};

export const freeCourseWebinar = {
  date: "10.11.2026",
  time: "18.00",
  dateTime: "2026-11-10T18:00:00+02:00",
  label: "10.11.2026 klo 18.00",
} as const;

export const freeCourseMaterials: Record<"g" | "law", readonly FreeCourseMaterial[]> = {
  g: [
    {
      id: "aineisto-1",
      label: "Aineisto 1",
      title: "Tutkimustiedon hyödyntäminen valtioneuvoston ja eduskunnan päätöksenteossa ja valmistelussa – kirjallisuuskatsaus",
      author: "Antti Pelkonen",
      scope: "Käytettävissä yhteisen osion kokeen aikana.",
      url: "/aineistot/valintakoe-g-2026/Aineisto-1-1.pdf",
      originalUrl: "https://yliopistovalinnat.fi/wp-content/uploads/2026/06/Aineisto-1-1.pdf",
    },
    {
      id: "aineisto-2",
      label: "Aineisto 2",
      title: "Tiedediplomatian muuttuva kuva 2009–2025 – kaikkia hyödyttävästä yhteistyöstä geopoliittiseen kilpailuun",
      author: "Johanna Ketola",
      scope: "Käytettävissä yhteisen osion kokeen aikana.",
      url: "/aineistot/valintakoe-g-2026/Aineisto-2-1.pdf",
      originalUrl: "https://yliopistovalinnat.fi/wp-content/uploads/2026/06/Aineisto-2-1.pdf",
    },
  ],
  law: [
    {
      id: "oikis-norio",
      label: "Ennakkomateriaali 1 · C1–C15",
      title: "Jaana Norio: Johdatus kuluttajaoikeuteen",
      scope: "Lue luvut 1–5 ja 7. Luku 6 ei kuulunut vuoden 2026 ennakkomateriaaliin.",
      url: "https://yliopistovalinnat.fi/wp-content/uploads/2026/06/Norio-Johdatus-kuluttajaoikeuteen.pdf",
    },
    {
      id: "oikis-rajaesteet",
      label: "Ennakkomateriaali 2 · C16–C30",
      title: "Rajaesteet Pohjoismaissa sosiaali- ja työmarkkinakysymyksissä",
      scope: "Lue julkaisun sivut 7–80.",
      url: "https://yliopistovalinnat.fi/wp-content/uploads/2026/06/Rajaesteet-Pohjoismaissa-sosiaali-ja-tyomarkkinakysymyksissa.pdf#page=7",
    },
  ],
};
