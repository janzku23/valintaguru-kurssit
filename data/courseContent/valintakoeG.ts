import type { CourseContent } from "./types";

export const valintakoeGContent = {
  courseId: "valintakoe-g",

  theorySections: [
    {
      id: "g-paattely",
      title: "Päättely ja looginen ajattelu",
      content: `Valintakoe G:ssä päättely tarkoittaa kykyä tunnistaa sääntöjä, johtopäätöksiä ja ristiriitoja annetusta aineistosta.

Tärkeää on lukea tehtävänanto tarkasti ja vastata vain siihen, mitä kysytään.

Usein väärät vastausvaihtoehdot perustuvat oletuksiin, joita aineisto tai tehtävänanto ei tue.`,
    },
    {
      id: "g-aineiston-lukeminen",
      title: "Aineiston lukeminen",
      content: `Aineistotehtävissä vastaukset perustuvat annettuun tekstiin, kuvaan, taulukkoon tai kaavioon.

Aineistosta kannattaa erottaa toisistaan faktat, tulkinnat ja johtopäätökset.

Vastauksessa ei pidä käyttää sellaista tietoa, jota aineistossa ei ole annettu, ellei tehtävänanto erikseen pyydä hyödyntämään ennakkotietoa.`,
    },
    {
      id: "g-tekstinymmartaminen",
      title: "Tekstin ymmärtäminen",
      content: `Tekstinymmärtämisessä keskeistä on tunnistaa tekstin pääajatus, perustelut ja kirjoittajan tekemät johtopäätökset.

Yksittäistä virkettä ei kannata irrottaa asiayhteydestään.

Vastausvaihtoehtoja vertaillessa on hyvä tarkistaa, vastaako vaihtoehto täsmällisesti tekstin sisältöä vai sisältääkö se liioittelua tai liian laajan yleistyksen.`,
    },
    {
      id: "g-loogiset-suhteet",
      title: "Loogiset suhteet",
      content: `Loogisissa tehtävissä voidaan tarkastella esimerkiksi ehtoja, järjestyksiä, ryhmittelyä ja syy-seuraussuhteita.

Tehtävän tiedot kannattaa tarvittaessa kirjoittaa näkyviin lyhyinä sääntöinä.

Kun ratkaisu perustuu useaan ehtoon, jokaisen ehdon täyttyminen on tarkistettava ennen vastauksen valitsemista.`,
    },
    {
      id: "g-taulukot-ja-kaaviot",
      title: "Taulukot ja kaaviot",
      content: `Taulukoissa ja kaavioissa on tärkeää tarkistaa otsikot, yksiköt, asteikot ja selitteet.

Pelkkä kuvion silmämääräinen tarkastelu voi johtaa virheeseen, jos asteikko ei ala nollasta tai jos luvut esitetään eri yksiköissä.

Laskutoimitukset kannattaa tehdä vain niillä tiedoilla, jotka aineistossa annetaan.`,
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