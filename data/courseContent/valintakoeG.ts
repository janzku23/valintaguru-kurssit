import type { CourseContent } from "./types";

export const valintakoeGContent = {
  courseId: "valintakoe-g",

  /**
   * Teoriat ryhmitellään sisällysluettelossa subtitle-kentän mukaan.
   *
   * Esimerkki myöhemmin:
   *
   * {
   *   id: "g-teoria-2-1",
   *   subtitle: "Teoria 2",
   *   title: "2.1 Aineiston tulkinta",
   *   content: `...`,
   * }
   *
   * {
   *   id: "g-teoria-2-2",
   *   subtitle: "Teoria 2",
   *   title: "2.2 Johtopäätökset",
   *   content: `...`,
   * }
   *
   * Tällöin sisällysluettelo näyttää:
   * Teoria
   *   Teoria 2
   *     2.1 Aineiston tulkinta
   *     2.2 Johtopäätökset
   */
  theorySections: [
    {
      id: "g-teoria-1-canva",
      subtitle: "Teoria",
      title: "Valintakoe G 2026",
      content: "",
      embed: {
        type: "canva",
        title: "Valintakoe G 2026",
        url: "https://www.canva.com/design/DAHVn_7CioE/snFTxZEvj9bwKSLS29b71A/view?embed",
      },
    },
  ],

  quizQuestions: [
    {
      id: "g-q1",
      question: "Mikä on yleensä turvallisin tapa vastata aineistotehtävään?",
      answers: [
        {
          id: "a",
          text: "Perustaa vastaus annettuun aineistoon.",
        },
        {
          id: "b",
          text: "Käyttää ensisijaisesti omaa ennakkotietoa.",
        },
        {
          id: "c",
          text: "Valita aina pisin vastausvaihtoehto.",
        },
      ],
      correctAnswerIds: ["a"],
      explanation:
        "Aineistotehtävässä vastaus tulee perustaa annettuun aineistoon. Oma ennakkotieto voi johtaa harhaan, jos sen käyttämistä ei pyydetä.",
    },
    {
      id: "g-q2",
      question: "Mitkä asiat tukevat loogisten tehtävien ratkaisemista?",
      answers: [
        {
          id: "a",
          text: "Tehtävänannon tarkka lukeminen",
        },
        {
          id: "b",
          text: "Annettujen ehtojen kirjoittaminen näkyviin",
        },
        {
          id: "c",
          text: "Kaikkien ehtojen tarkistaminen",
        },
        {
          id: "d",
          text: "Oletusten lisääminen puuttuvien tietojen tilalle",
        },
      ],
      correctAnswerIds: ["a", "b", "c"],
      explanation:
        "Loogisissa tehtävissä auttaa tehtävänannon tarkka lukeminen, ehtojen jäsentäminen ja jokaisen ehdon tarkistaminen. Puuttuvia tietoja ei pidä korvata omilla oletuksilla.",
    },
    {
      id: "g-q3",
      question: "Mitä kaaviota tarkastellessa pitää huomioida?",
      answers: [
        {
          id: "a",
          text: "Asteikko",
        },
        {
          id: "b",
          text: "Mittayksikkö",
        },
        {
          id: "c",
          text: "Selite",
        },
        {
          id: "d",
          text: "Vain pylväiden väri",
        },
      ],
      correctAnswerIds: ["a", "b", "c"],
      explanation:
        "Kaavion tulkinnassa pitää tarkistaa asteikko, mittayksiköt ja selitteet. Väri voi auttaa erottamaan tietoja, mutta se ei yksin ratkaise kaavion merkitystä.",
    },
    {
      id: "g-q4",
      question: "Mikä kuvaa parhaiten tekstin pääajatusta?",
      answers: [
        {
          id: "a",
          text: "Tekstin keskeisin viesti tai väite",
        },
        {
          id: "b",
          text: "Tekstin pisin virke",
        },
        {
          id: "c",
          text: "Ensimmäinen tekstissä mainittu yksityiskohta",
        },
      ],
      correctAnswerIds: ["a"],
      explanation:
        "Pääajatus tarkoittaa tekstin keskeisintä viestiä tai väitettä. Se ei välttämättä sijaitse yhdessä yksittäisessä virkkeessä.",
    },
  ],

  flashcards: [
    {
      id: "g-f1",
      front: "Mikä on aineistotehtävän tärkein periaate?",
      back: "Vastaus perustetaan annettuun aineistoon eikä omiin oletuksiin.",
    },
    {
      id: "g-f2",
      front: "Mitä loogisessa päättelyssä kannattaa varoa?",
      back: "Sellaisia oletuksia, joita tehtävänanto tai aineisto ei tue.",
    },
    {
      id: "g-f3",
      front: "Mitä tarkoittaa johtopäätös?",
      back: "Johtopäätös on päätelmä, joka tehdään annettujen tietojen perusteella.",
    },
    {
      id: "g-f4",
      front: "Mitä kaaviosta tarkistetaan ennen tulkintaa?",
      back: "Otsikko, asteikko, mittayksiköt ja selitteet.",
    },
    {
      id: "g-f5",
      front: "Mitä tarkoittaa tekstin pääajatus?",
      back: "Pääajatus on tekstin keskeisin viesti tai väite.",
    },
  ],
} satisfies CourseContent;
