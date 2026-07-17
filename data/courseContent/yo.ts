import type { CourseContent } from "./types";

export const yoContent = {
  courseId: "yo",

  theorySections: [
    {
      id: "yo-biologia-solu",
      title: "Biologia: Solun rakenne",
      content: `Solu on elämän rakenteellinen ja toiminnallinen perusyksikkö.

Solussa on useita rakenteita, kuten solukalvo, solulima, tuma ja mitokondriot.

Tuma sisältää solun perintöaineksen eli DNA:n. Mitokondriot osallistuvat solun energiantuotantoon.`,
    },
    {
      id: "yo-biologia-perinnollisyys",
      title: "Biologia: Perinnöllisyys",
      content: `Perinnöllinen tieto sijaitsee DNA:ssa.

Geeni on DNA:n jakso, joka sisältää tietoa esimerkiksi tietyn proteiinin valmistamisesta.

Yksilö saa perintöainesta sekä äidiltään että isältään.`,
    },
    {
      id: "yo-kemia-atomi",
      title: "Kemia: Atomin rakenne",
      content: `Atomi koostuu ytimestä ja ydintä ympäröivistä elektroneista.

Ytimessä on positiivisesti varautuneita protoneja ja sähköisesti neutraaleja neutroneja.

Alkuaine määräytyy atomin protonien lukumäärän perusteella.`,
    },
    {
      id: "yo-kemia-kemiallinen-sidos",
      title: "Kemia: Kemialliset sidokset",
      content: `Atomit voivat liittyä toisiinsa kemiallisilla sidoksilla.

Kovalenttisessa sidoksessa atomit jakavat elektroneja keskenään.

Ionisidos muodostuu positiivisesti ja negatiivisesti varautuneiden ionien välille.`,
    },
    {
      id: "yo-fysiikka-liike",
      title: "Fysiikka: Liike",
      content: `Liikkeen kuvaamisessa tarkastellaan esimerkiksi paikkaa, matkaa, aikaa, nopeutta ja kiihtyvyyttä.

Tasaisessa liikkeessä nopeus pysyy muuttumattomana.

Kiihtyvässä liikkeessä nopeus muuttuu ajan kuluessa.`,
    },
    {
      id: "yo-fysiikka-energia",
      title: "Fysiikka: Energia",
      content: `Energiaa esiintyy eri muodoissa, kuten liike-energiana, potentiaalienergiana, lämpöenergiana ja sähköenergiana.

Energia voi muuttua muodosta toiseen.

Energian säilymislain mukaan energiaa ei synny eikä häviä, vaan se muuntuu muodosta toiseen.`,
    },
  ],

  quizQuestions: [
    {
      id: "yo-q1",
      question: "Mikä rakenne sisältää solun perintöaineksen?",
      answers: [
        {
          id: "a",
          text: "Tuma",
        },
        {
          id: "b",
          text: "Solukalvo",
        },
        {
          id: "c",
          text: "Mitokondrio",
        },
      ],
      correctAnswerIds: ["a"],
      explanation: "Tuma sisältää solun perintöaineksen eli DNA:n.",
    },
    {
      id: "yo-q2",
      question: "Mitkä hiukkaset sijaitsevat atomin ytimessä?",
      answers: [
        {
          id: "a",
          text: "Protonit",
        },
        {
          id: "b",
          text: "Neutronit",
        },
        {
          id: "c",
          text: "Elektronit",
        },
        {
          id: "d",
          text: "Fotonit",
        },
      ],
      correctAnswerIds: ["a", "b"],
      explanation:
        "Atomin ytimessä sijaitsevat protonit ja neutronit. Elektronit sijaitsevat ydintä ympäröivällä elektroniverholla.",
    },
    {
      id: "yo-q3",
      question: "Mikä määrittää alkuaineen?",
      answers: [
        {
          id: "a",
          text: "Protonien lukumäärä",
        },
        {
          id: "b",
          text: "Neutronien lukumäärä",
        },
        {
          id: "c",
          text: "Atomin koko",
        },
      ],
      correctAnswerIds: ["a"],
      explanation:
        "Alkuaine määräytyy atomin ytimen protonien lukumäärän eli järjestysluvun perusteella.",
    },
    {
      id: "yo-q4",
      question: "Mitä tapahtuu tasaisessa liikkeessä?",
      answers: [
        {
          id: "a",
          text: "Nopeus pysyy samana.",
        },
        {
          id: "b",
          text: "Nopeus kasvaa jatkuvasti.",
        },
        {
          id: "c",
          text: "Kappaleen massa pienenee.",
        },
      ],
      correctAnswerIds: ["a"],
      explanation:
        "Tasaisessa liikkeessä kappaleen nopeus pysyy muuttumattomana.",
    },
    {
      id: "yo-q5",
      question: "Mitkä ovat energian muotoja?",
      answers: [
        {
          id: "a",
          text: "Liike-energia",
        },
        {
          id: "b",
          text: "Lämpöenergia",
        },
        {
          id: "c",
          text: "Potentiaalienergia",
        },
        {
          id: "d",
          text: "Protoniluku",
        },
      ],
      correctAnswerIds: ["a", "b", "c"],
      explanation:
        "Liike-energia, lämpöenergia ja potentiaalienergia ovat energian muotoja. Protoniluku ilmaisee atomin protonien määrän.",
    },
    {
      id: "yo-q6",
      question: "Mitä kovalenttisessa sidoksessa tapahtuu?",
      answers: [
        {
          id: "a",
          text: "Atomit jakavat elektroneja.",
        },
        {
          id: "b",
          text: "Atomit menettävät kaikki protoninsa.",
        },
        {
          id: "c",
          text: "Neutronit siirtyvät atomista toiseen.",
        },
      ],
      correctAnswerIds: ["a"],
      explanation:
        "Kovalenttisessa sidoksessa atomit jakavat yhden tai useampia elektronipareja.",
    },
  ],

  flashcards: [
    {
      id: "yo-f1",
      front: "Mikä on solu?",
      back: "Solu on elämän rakenteellinen ja toiminnallinen perusyksikkö.",
    },
    {
      id: "yo-f2",
      front: "Mitä tuma sisältää?",
      back: "Tuma sisältää solun perintöaineksen eli DNA:n.",
    },
    {
      id: "yo-f3",
      front: "Mikä on geeni?",
      back: "Geeni on DNA:n jakso, joka sisältää perinnöllistä tietoa.",
    },
    {
      id: "yo-f4",
      front: "Mistä atomin ydin koostuu?",
      back: "Atomin ydin koostuu protoneista ja neutroneista.",
    },
    {
      id: "yo-f5",
      front: "Mikä määrittää alkuaineen?",
      back: "Alkuaineen määrittää atomin protonien lukumäärä.",
    },
    {
      id: "yo-f6",
      front: "Mitä tasainen liike tarkoittaa?",
      back: "Tasaisessa liikkeessä nopeus pysyy muuttumattomana.",
    },
    {
      id: "yo-f7",
      front: "Mitä energian säilymislaki tarkoittaa?",
      back: "Energiaa ei synny eikä häviä, vaan se muuntuu muodosta toiseen.",
    },
  ],
} satisfies CourseContent;