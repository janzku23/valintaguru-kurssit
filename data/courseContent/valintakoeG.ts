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
    // 1. Valintakoe G tutuksi
    {
      id: "g-teoria-1-canva",
      subtitle: "1. Valintakoe G tutuksi",
      title: "Valintakoe G 2026",
      content: "",
      embed: {
        type: "canva",
        title: "Valintakoe G 2026",
        url: "https://www.canva.com/design/DAHVn_7CioE/snFTxZEvj9bwKSLS29b71A/view?embed",
      },
    },
    {
      id: "g-teoria-2-canva",
      subtitle: "1. Valintakoe G tutuksi",
      title: "Valintakoe G 2027",
      content: "",
      embed: {
        type: "canva",
        title: "Valintakoe G 2027",
        url: "https://www.canva.com/design/DAHVi86tdTs/wr7Ukops8Rb_qaCbNIflJg/view?embed",
      },
    },
    // 2. Tehokas aineiston käsittely
    {
      id: "g-2-tieteellisen-artikkelin-rakenne",
      subtitle: "2. Tehokas aineiston käsittely",
      title: "Tieteellisen artikkelin rakenne",
      content: "",
      disabled: true,
    },
    {
      id: "g-2-tiedon-paikantaminen-ctrl-f",
      subtitle: "2. Tehokas aineiston käsittely",
      title: "Tiedon paikantaminen ja Ctrl+F",
      content: "",
      disabled: true,
    },
    {
      id: "g-2-tieteellisen-aineiston-haltuunotto",
      subtitle: "2. Tehokas aineiston käsittely",
      title: "Miten tieteellinen aineisto otetaan nopeasti haltuun?",
      content: "",
      disabled: true,
    },

    // 3. Kriittinen ja analyyttinen lukeminen
    {
      id: "g-3-vaitteet-perustelut-argumentaatio",
      subtitle: "3. Kriittinen ja analyyttinen lukeminen",
      title: "Väitteet, perustelut ja argumentaatio",
      content: "",
      disabled: true,
    },
    {
      id: "g-3-kuka-sanoo-mita",
      subtitle: "3. Kriittinen ja analyyttinen lukeminen",
      title: "Kuka sanoo mitä – ja mitä voidaan päätellä?",
      content: "",
      disabled: true,
    },
    {
      id: "g-3-usean-aineiston-vertailu",
      subtitle: "3. Kriittinen ja analyyttinen lukeminen",
      title: "Usean aineiston vertailu ja soveltaminen",
      content: "",
      disabled: true,
    },

    // 4. Tutkimustiedon ja tilastojen ymmärtäminen
    {
      id: "g-4-tutkimustiedon-ymmartaminen",
      subtitle: "4. Tutkimustiedon ja tilastojen ymmärtäminen",
      title: "Tutkimustiedon ymmärtäminen",
      content: "",
      disabled: true,
    },
    {
      id: "g-4-tilastot-taulukot-kuviot",
      subtitle: "4. Tutkimustiedon ja tilastojen ymmärtäminen",
      title: "Tilastot, taulukot ja kuviot",
      content: "",
      disabled: true,
    },
    {
      id: "g-4-tulkinnan-sudenkuopat",
      subtitle: "4. Tutkimustiedon ja tilastojen ymmärtäminen",
      title: "Tutkimustulosten ja lukujen tulkinnan sudenkuopat",
      content: "",
      disabled: true,
    },

    // 5. Vastaustekniikka ja kysymystyypit
    {
      id: "g-5-tosi-epatosi-oikein-vaarin-monivalinnat",
      subtitle: "5. Vastaustekniikka ja kysymystyypit",
      title: "Tosi/Epätosi ja Oikein/Väärin / Monivalinnat ja muut kysymystyypit",
      content: "",
      disabled: true,
    },
    {
      id: "g-5-kysymysmuodot-2026",
      subtitle: "5. Vastaustekniikka ja kysymystyypit",
      title: "Viime vuoden kysymysmuodot 2026 ja mitä oppia niistä",
      content: "",
      disabled: false,
      embed: {
        type: "canva",
        title: "Valintakoe G 2027",
        url: "https://www.canva.com/design/DAHX5wV2tl0/wMu85YLtMTTC5cBScLGpCg/view?embed",
         paddingTop: "172.0842%",
      },
    },
    {
      id: "g-5-valintakokeen-harhauttajat",
      subtitle: "5. Vastaustekniikka ja kysymystyypit",
      title: "Valintakokeen harhauttajat",
      content: "",
      disabled: true,
    },

    // 6. Ajankäyttö ja koestrategia
    {
      id: "g-teoria-3-canva",
      subtitle: "6. Ajankäyttö ja koestrategia",
      title: "Kolme tapaa suorittaa valintakoe G",
      content: "",
      embed: {
        type: "canva",
        title: "3 tapaa suorittaa valintakoe G",
        url: "https://www.canva.com/design/DAHWYEqgCg4/dKkl0xZL4AaYiTjbRRwCXw/view?embed",
        paddingTop: "175.0842%",
      },
    },
    {
      id: "g-6-ajankaytto-ja-stressi",
      subtitle: "6. Ajankäyttö ja koestrategia",
      title: "Ajankäyttö ja stressi",
      content: "",
      disabled: true,
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
