import { CourseId } from "./courses";

export type TheoryEmbed = {
  type: "canva";
  title: string;
  url: string;
};

export type TheorySection = {
  id: string;
  title: string;
  content: string;
  embed?: TheoryEmbed;
};

export type QuizAnswer = {
  id: string;
  text: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  answers: QuizAnswer[];
  correctAnswerIds: string[];
  explanation: string;
};

export type Flashcard = {
  id: string;
  front: string;
  back: string;
};

export type CourseContent = {
  courseId: CourseId;
  theorySections: TheorySection[];
  quizQuestions: QuizQuestion[];
  flashcards: Flashcard[];
};

export type TheoryCourse = {
  id: CourseId;
  title: string;
  sections: TheorySection[];
};

export const courseContent: Record<CourseId, CourseContent> = {

















  oikis: {
    courseId: "oikis",
    theorySections: [
      {
        id: "oikis-johdanto",
        title: "Johdanto oikeustieteeseen",
        content: `Oikeustiede tutkii oikeusjärjestystä, oikeudellisia sääntöjä ja niiden soveltamista.

Oikeudellisessa ajattelussa tärkeää on tunnistaa ongelma, löytää siihen soveltuvat oikeuslähteet ja perustella ratkaisu johdonmukaisesti.

Valintakokeessa korostuu erityisesti kyky lukea aineistoa tarkasti ja soveltaa annettua tietoa.`,
      },
      {
        id: "oikis-canva-teoria",
        title: "Oikiksen teoria visuaalisesti",
        content: `Tässä osiossa voit käydä Oikiksen teoriaa läpi visuaalisessa muodossa.

Upotus näkyy suoraan ValintaGurun teoriaosiossa, joten opiskelijan ei tarvitse siirtyä pois sivulta.`,
        embed: {
          type: "canva",
          title: "Oikiksen teoria",
          url: "https://www.canva.com/design/DAG_mgumrEg/nRDRle0lVglT1XzsMyxo3Q/view?embed",
        },
      },
      {
        id: "oikis-sopimusoikeus",
        title: "Sopimusoikeus",
        content: `Sopimusoikeus käsittelee sopimusten syntymistä, sitovuutta ja tulkintaa.

Lähtökohtana on sopimusvapaus. Osapuolet voivat päättää, tekevätkö he sopimuksen, kenen kanssa sopimus tehdään ja millaisin ehdoin.

Sopimuksen sitovuus tarkoittaa, että osapuolten on lähtökohtaisesti noudatettava sitä, mihin he ovat sitoutuneet.`,
      },
      {
        id: "oikis-rikosoikeus",
        title: "Rikosoikeus",
        content: `Rikosoikeus määrittää, mitkä teot ovat rangaistavia ja millaisia seuraamuksia niistä voidaan määrätä.

Rangaistavuus edellyttää yleensä, että teko täyttää laissa säädetyn rikoksen tunnusmerkistön.

Keskeisiä käsitteitä ovat tunnusmerkistö, tahallisuus, tuottamus ja syy-yhteys.`,
      },
    ],
    quizQuestions: [
      {
        id: "oikis-q1",
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
          "Sopimusvapauden lähtökohtana on osapuolten vapaus päättää sopimuksen tekemisestä ja ehdoista. Tätä vapautta voivat kuitenkin rajoittaa esimerkiksi pakottava lainsäädäntö ja kohtuuttomuussäännökset.",
      },
      {
        id: "oikis-q2",
        question: "Mitkä kuuluvat rikosoikeuden keskeisiin käsitteisiin?",
        answers: [
          {
            id: "a",
            text: "Tunnusmerkistö",
          },
          {
            id: "b",
            text: "Tahallisuus",
          },
          {
            id: "c",
            text: "Solukalvo",
          },
          {
            id: "d",
            text: "Tuottamus",
          },
        ],
        correctAnswerIds: ["a", "b", "d"],
        explanation:
          "Rikosoikeudessa keskeisiä käsitteitä ovat muun muassa tunnusmerkistö, tahallisuus ja tuottamus. Solukalvo liittyy biologiaan.",
      },
    ],
    flashcards: [
      {
        id: "oikis-f1",
        front: "Mitä sopimusvapaus tarkoittaa?",
        back: "Sopimusvapaus tarkoittaa, että osapuolet voivat lähtökohtaisesti päättää tekevätkö sopimuksen, kenen kanssa ja millaisin ehdoin.",
      },
      {
        id: "oikis-f2",
        front: "Mitä sopimuksen sitovuus tarkoittaa?",
        back: "Sopimuksen sitovuus tarkoittaa, että osapuolten on lähtökohtaisesti noudatettava sitä, mihin he ovat sopimuksella sitoutuneet.",
      },
      {
        id: "oikis-f3",
        front: "Mitä rikosoikeuden tunnusmerkistö tarkoittaa?",
        back: "Tunnusmerkistö tarkoittaa niitä laissa määriteltyjä edellytyksiä, joiden täyttyessä teko voi olla rikos.",
      },
    ],
  },





















  "valintakoe-g": {
    courseId: "valintakoe-g",
    theorySections: [
      {
        id: "g-paattely",
        title: "Päättely ja looginen ajattelu",
        content: `Valintakoe G:ssä päättely tarkoittaa kykyä tunnistaa sääntöjä, johtopäätöksiä ja ristiriitoja annetusta aineistosta.

Tärkeää on lukea tehtävänanto tarkasti ja vastata vain siihen, mitä kysytään.

Usein väärät vaihtoehdot perustuvat liian pitkälle meneviin oletuksiin.`,
      },
      {
        id: "g-aineisto",
        title: "Aineiston lukeminen",
        content: `Aineistotehtävissä vastaukset löytyvät yleensä annetusta tekstistä, kuvasta, taulukosta tai kaaviosta.

Hyvä vastaaja erottaa faktat, tulkinnat ja johtopäätökset toisistaan.

Aineistosta ei pidä päätellä asioita, joita siinä ei oikeasti sanota.`,
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
            text: "Valita pisin vastausvaihtoehto.",
          },
        ],
        correctAnswerIds: ["a"],
        explanation:
          "Aineistotehtävässä vastaus pitää perustaa annettuun aineistoon. Oma ennakkotieto voi johtaa harhaan, jos sitä ei kysytä.",
      },
      {
        id: "g-q2",
        question: "Mitkä asiat auttavat loogisen päättelyn tehtävissä?",
        answers: [
          {
            id: "a",
            text: "Tehtävänannon tarkka lukeminen",
          },
          {
            id: "b",
            text: "Oletusten erottaminen faktoista",
          },
          {
            id: "c",
            text: "Vastaaminen mahdollisimman nopeasti ilman tarkistusta",
          },
        ],
        correctAnswerIds: ["a", "b"],
        explanation:
          "Päättelytehtävissä olennaista on lukea tehtävänanto tarkasti ja erottaa faktat oletuksista. Pelkkä nopeus ei riitä.",
      },
    ],
    flashcards: [
      {
        id: "g-f1",
        front: "Mikä on aineistotehtävän tärkein periaate?",
        back: "Vastaus pitää perustaa annettuun aineistoon, ei omiin oletuksiin.",
      },
      {
        id: "g-f2",
        front: "Mitä loogisessa päättelyssä kannattaa varoa?",
        back: "Liian pitkälle meneviä oletuksia, joita tehtävänanto tai aineisto ei tue.",
      },
      {
        id: "g-f3",
        front: "Mitä tarkoittaa johtopäätös?",
        back: "Johtopäätös on päätelmä, joka tehdään annettujen tietojen perusteella.",
      },
    ],
  },





  











  yo: {
    courseId: "yo",
    theorySections: [
      {
        id: "yo-biologia-solu",
        title: "Biologia: Solun rakenne",
        content: `Solu on elämän perusyksikkö.

Solussa on useita rakenteita, kuten solukalvo, solulima, tuma ja mitokondriot.

Tuma sisältää perintöaineksen eli DNA:n. Mitokondriot osallistuvat energian tuotantoon.`,
      },
      {
        id: "yo-kemia-atomi",
        title: "Kemia: Atomin rakenne",
        content: `Atomi koostuu ytimestä ja elektroneista.

Ytimessä on protoneja ja neutroneja. Elektronit sijaitsevat ytimen ympärillä elektronikuorilla.

Alkuaine määräytyy protonien lukumäärän perusteella.`,
      },
      {
        id: "yo-fysiikka-liike",
        title: "Fysiikka: Liike",
        content: `Liikkeen kuvaamisessa tarkastellaan esimerkiksi paikkaa, nopeutta ja kiihtyvyyttä.

Tasaisessa liikkeessä nopeus pysyy samana.

Kiihtyvässä liikkeessä nopeus muuttuu ajan kuluessa.`,
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
        question: "Mitkä liittyvät atomin rakenteeseen?",
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
            text: "Sopimusvapaus",
          },
        ],
        correctAnswerIds: ["a", "b", "c"],
        explanation:
          "Atomi koostuu ytimestä ja elektroneista. Ytimessä on protoneja ja neutroneja. Sopimusvapaus liittyy oikeustieteeseen.",
      },
    ],
    flashcards: [
      {
        id: "yo-f1",
        front: "Mikä on solu?",
        back: "Solu on elämän perusyksikkö.",
      },
      {
        id: "yo-f2",
        front: "Mitä tuma sisältää?",
        back: "Tuma sisältää perintöaineksen eli DNA:n.",
      },
      {
        id: "yo-f3",
        front: "Mistä atomi koostuu?",
        back: "Atomi koostuu ytimestä ja elektroneista. Ytimessä on protoneja ja neutroneja.",
      },
    ],
  },
};






















export const theoryCourses: TheoryCourse[] = [
  {
    id: "oikis",
    title: "Oikis",
    sections: courseContent.oikis.theorySections,
  },
  {
    id: "valintakoe-g",
    title: "Valintakoe G",
    sections: courseContent["valintakoe-g"].theorySections,
  },
  {
    id: "yo",
    title: "YO-kokeet",
    sections: courseContent.yo.theorySections,
  },
];















export function getCourseContent(courseId: CourseId) {
  return courseContent[courseId];
}