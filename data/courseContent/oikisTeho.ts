import type { CourseContent } from "./types";

// Kurssisisältö on itsenäinen: tätä tiedostoa ei kloonata oikis.ts-tiedostosta.
// Kysymysten ja flashcardien nykyiset tekstit on säilytetty, mutta niiden ID:t ja
// sisältö voidaan muokata kurssikohtaisesti ilman muutoksia muihin kursseihin.
export const oikisTehoContent = {
  courseId: "oikis-teho",

  // Oikis Tehon oma teoria. Muutokset tässä eivät muuta Oikis- tai Tiivis-kurssia.
  // Etäopetus perii tämän teoria-aineiston oikisTehoEtaopetus.ts-tiedoston kautta.
  theorySections: [
    // Tällä hetkellä ainoa käytössä oleva Oikis Tehon teoria.
    {
      id: "oikis-teho-canva-teoria",
      title: "Kysymysmuodot",
      content: "",
      embed: {
        type: "canva",
        title: "Kysymysmuodot",
        url: "https://www.canva.com/design/DAHZOIXXASQ/OkQ-fSUZK1aRNfY_i1EBjA/view?embed",
        paddingTop: "303.0303%",
      },
    },

    // Tyhjät paikat tuleville teorioille. disabled estää avaamisen.
    // ID:t säilytetty, jotta kurssin mahdollinen edistymistieto ei sekoitu.
    {
      id: "oikis-teho-johdanto",
      title: "Teoriaosio 1 – tulossa",
      content: "",
      disabled: true,
    },
    {
      id: "oikis-teho-sopimusoikeus",
      title: "Teoriaosio 2 – tulossa",
      content: "",
      disabled: true,
    },
    {
      id: "oikis-teho-rikosoikeus",
      title: "Teoriaosio 3 – tulossa",
      content: "",
      disabled: true,
    },
    {
      id: "oikis-teho-pdf-teoria",
      title: "Teoriaosio 4 – tulossa",
      content: "",
      disabled: true,
    },
  ],

  quizQuestions: [
    {
      id: "oikis-teho-q1",
      question: "Mikä kuvaa parhaiten sopimusvapautta?",
      answers: [
        {
          id: "a",
          text: "Osapuolet voivat lähtökohtaisesti päättää tekevätkö sopimuksen ja millaisin ehdoin.",
        },
        {
          id: "b",
          text: "Sopimus on aina pätemätön, jos sitä ei tehdä kirjallisesti.",
        },
        {
          id: "c",
          text: "Sopimusvapaus tarkoittaa, ettei sopimus voi koskaan olla kohtuuton.",
        },
      ],
      correctAnswerIds: ["a"],
      explanation:
        "Sopimusvapauden lähtökohtana on osapuolten vapaus päättää sopimuksen tekemisestä ja ehdoista.",
    },
    {
      id: "oikis-teho-q2",
      question: "Mitkä kuuluvat rikosoikeuden keskeisiin käsitteisiin?",
      answers: [
        { id: "a", text: "Tunnusmerkistö" },
        { id: "b", text: "Tahallisuus" },
        { id: "c", text: "Solukalvo" },
        { id: "d", text: "Tuottamus" },
      ],
      correctAnswerIds: ["a", "b", "d"],
      explanation:
        "Materiaalissa rikosoikeuden keskeisiksi käsitteiksi mainitaan tunnusmerkistö, tahallisuus, tuottamus ja syy-yhteys.",
    },
    {
      id: "oikis-teho-q3",
      question: "Mitä oikeustiede materiaalin mukaan tutkii?",
      answers: [
        {
          id: "a",
          text: "Oikeusjärjestystä, oikeudellisia sääntöjä ja niiden soveltamista.",
        },
        {
          id: "b",
          text: "Ainoastaan rikosten seuraamuksia.",
        },
        {
          id: "c",
          text: "Vain sopimusten laatimista.",
        },
      ],
      correctAnswerIds: ["a"],
      explanation:
        "Johdanto-osuuden mukaan oikeustiede tutkii oikeusjärjestystä, oikeudellisia sääntöjä ja niiden soveltamista.",
    },
    {
      id: "oikis-teho-q4",
      question: "Mitkä vaiheet kuuluvat materiaalin kuvaamaan oikeudelliseen ajatteluun?",
      answers: [
        { id: "a", text: "Ongelman tunnistaminen" },
        { id: "b", text: "Soveltuvien oikeuslähteiden löytäminen" },
        { id: "c", text: "Ratkaisun johdonmukainen perusteleminen" },
        { id: "d", text: "Vastauksen arvaaminen ilman aineistoa" },
      ],
      correctAnswerIds: ["a", "b", "c"],
      explanation:
        "Materiaalissa korostetaan ongelman tunnistamista, soveltuvien oikeuslähteiden löytämistä ja ratkaisun johdonmukaista perustelemista.",
    },
    {
      id: "oikis-teho-q5",
      question: "Mikä korostuu valintakokeessa materiaalin mukaan?",
      answers: [
        {
          id: "a",
          text: "Kyky lukea aineistoa tarkasti ja soveltaa annettua tietoa.",
        },
        {
          id: "b",
          text: "Mahdollisimman nopea vastaaminen ilman perustelua.",
        },
        {
          id: "c",
          text: "Ainoastaan ulkoa muistaminen.",
        },
      ],
      correctAnswerIds: ["a"],
      explanation:
        "Johdannossa todetaan, että valintakokeessa korostuu erityisesti aineiston tarkka lukeminen ja annetun tiedon soveltaminen.",
    },
    {
      id: "oikis-teho-q6",
      question: "Mitä sopimusoikeus käsittelee materiaalin mukaan?",
      answers: [
        { id: "a", text: "Sopimusten syntymistä" },
        { id: "b", text: "Sopimusten sitovuutta" },
        { id: "c", text: "Sopimusten tulkintaa" },
        { id: "d", text: "Solujen jakautumista" },
      ],
      correctAnswerIds: ["a", "b", "c"],
      explanation:
        "Sopimusoikeuden teoriaosuudessa mainitaan sopimusten syntyminen, sitovuus ja tulkinta.",
    },
    {
      id: "oikis-teho-q7",
      question: "Mistä osapuolet voivat sopimusvapauden lähtökohdan mukaan päättää?",
      answers: [
        { id: "a", text: "Tehdäänkö sopimus" },
        { id: "b", text: "Kenen kanssa sopimus tehdään" },
        { id: "c", text: "Millaisin ehdoin sopimus tehdään" },
        { id: "d", text: "Siitä, ettei sopimusta tarvitse koskaan noudattaa" },
      ],
      correctAnswerIds: ["a", "b", "c"],
      explanation:
        "Materiaalissa sopimusvapauteen liitetään vapaus päättää sopimuksen tekemisestä, sopimuskumppanista ja ehdoista.",
    },
    {
      id: "oikis-teho-q8",
      question: "Mitä sopimuksen sitovuus tarkoittaa?",
      answers: [
        {
          id: "a",
          text: "Osapuolten on lähtökohtaisesti noudatettava sitä, mihin he ovat sitoutuneet.",
        },
        {
          id: "b",
          text: "Sopimuksen voi aina sivuuttaa ilman seuraamuksia.",
        },
        {
          id: "c",
          text: "Sopimus koskee vain toista osapuolta.",
        },
      ],
      correctAnswerIds: ["a"],
      explanation:
        "Sopimuksen sitovuus tarkoittaa materiaalin mukaan sitä, että osapuolten on lähtökohtaisesti noudatettava sovittua.",
    },
    {
      id: "oikis-teho-q9",
      question: "Mitä rikosoikeus materiaalin mukaan määrittää?",
      answers: [
        {
          id: "a",
          text: "Mitkä teot ovat rangaistavia ja millaisia seuraamuksia niistä voidaan määrätä.",
        },
        {
          id: "b",
          text: "Miten kaikki yksityisoikeudelliset sopimukset laaditaan.",
        },
        {
          id: "c",
          text: "Miten biologiset organismit luokitellaan.",
        },
      ],
      correctAnswerIds: ["a"],
      explanation:
        "Rikosoikeuden teoriaosuudessa rikosoikeuden tehtäväksi kuvataan rangaistavien tekojen ja niiden seuraamusten määrittäminen.",
    },
    {
      id: "oikis-teho-q10",
      question: "Mitä rangaistavuus yleensä edellyttää materiaalin mukaan?",
      answers: [
        {
          id: "a",
          text: "Teko täyttää laissa säädetyn rikoksen tunnusmerkistön.",
        },
        {
          id: "b",
          text: "Teko on jonkun mielestä epäkohtelias.",
        },
        {
          id: "c",
          text: "Teko liittyy aina sopimukseen.",
        },
      ],
      correctAnswerIds: ["a"],
      explanation:
        "Materiaalissa todetaan, että rangaistavuus edellyttää yleensä laissa säädetyn rikoksen tunnusmerkistön täyttymistä.",
    },
    {
      id: "oikis-teho-q11",
      question: "Mikä seuraavista on rikosoikeuden keskeinen käsite materiaalissa?",
      answers: [
        { id: "a", text: "Syy-yhteys" },
        { id: "b", text: "Fotosynteesi" },
        { id: "c", text: "Elektronikuori" },
        { id: "d", text: "Mitoosi" },
      ],
      correctAnswerIds: ["a"],
      explanation:
        "Syy-yhteys mainitaan materiaalissa yhtenä rikosoikeuden keskeisistä käsitteistä.",
    },
    {
      id: "oikis-teho-q12",
      question: "Mikä yhdistelmä vastaa parhaiten materiaalin oikeudellisen ajattelun ideaa?",
      answers: [
        {
          id: "a",
          text: "Tunnista ongelma → etsi soveltuvat oikeuslähteet → perustele ratkaisu johdonmukaisesti.",
        },
        {
          id: "b",
          text: "Valitse ensin ratkaisu → etsi sille jälkikäteen perustelu.",
        },
        {
          id: "c",
          text: "Ohita aineisto → vastaa oman oletuksen perusteella.",
        },
      ],
      correctAnswerIds: ["a"],
      explanation:
        "Materiaalissa oikeudellisen ajattelun perusketju muodostuu ongelman tunnistamisesta, oikeuslähteiden löytämisestä ja ratkaisun perustelemisesta.",
    },
  ],

  flashcards: [
    {
      id: "oikis-teho-f1",
      front: "Mitä sopimusvapaus tarkoittaa?",
      back: "Sopimusvapaus tarkoittaa, että osapuolet voivat lähtökohtaisesti päättää tekevätkö sopimuksen, kenen kanssa ja millaisin ehdoin.",
    },
    {
      id: "oikis-teho-f2",
      front: "Mitä sopimuksen sitovuus tarkoittaa?",
      back: "Sopimuksen sitovuus tarkoittaa, että osapuolten on lähtökohtaisesti noudatettava sitä, mihin he ovat sopimuksella sitoutuneet.",
    },
    {
      id: "oikis-teho-f3",
      front: "Mitä rikosoikeuden tunnusmerkistö tarkoittaa?",
      back: "Tunnusmerkistö tarkoittaa niitä laissa määriteltyjä edellytyksiä, joiden täyttyessä teko voi olla rikos.",
    },
  ],
} satisfies CourseContent;
