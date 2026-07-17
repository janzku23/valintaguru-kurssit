import type { CourseContent } from "./types";

export const oikisContent = {
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
} satisfies CourseContent;