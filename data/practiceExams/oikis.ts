import "server-only";
import type { PracticeExam } from "./types";

export const oikisPracticeExams: PracticeExam[] = [
  {
    id: "koe-1",
    version: 1,
    courseId: "oikis",
    title: "Koe 1",
    description: "60 minuutin ajastettu harjoituskoe. Oikein +1 p, väärin -1 p, En osaa sanoa 0 p.",
    durationMinutes: 60,
    sections: [
      {
        id: "oikeudellinen-paattely",
        title: "Osa 1: Oikeudellinen päättely",
        questions: [
          {
            id: "o1-q1",
            prompt: "Mikä kuvaa parhaiten oikeudellisen ongelman ratkaisemisen etenemistä?",
            options: [
              { id: "a", text: "Tunnista ongelma, selvitä soveltuvat oikeuslähteet ja perustele ratkaisu." },
              { id: "b", text: "Valitse lopputulos ensin ja etsi sille perustelu jälkikäteen." },
              { id: "c", text: "Ratkaise asia vain oman oikeustajun perusteella." }
            ],
            correctAnswerId: "a",
            explanation: "Oikeudellinen päättely etenee ongelman tunnistamisesta relevantteihin oikeuslähteisiin ja perusteltuun johtopäätökseen."
          },
          {
            id: "o1-q2",
            prompt: "Mitä oikeudellisen ratkaisun perusteleminen tarkoittaa?",
            options: [
              { id: "a", text: "Ratkaisun oikeudelliset perusteet ja päättelyketju tehdään näkyviksi." },
              { id: "b", text: "Ilmoitetaan vain lopputulos." },
              { id: "c", text: "Perustelu korvataan yleisellä mielipiteellä." }
            ],
            correctAnswerId: "a",
            explanation: "Perustelu osoittaa, mihin oikeuslähteisiin ja päättelyyn johtopäätös perustuu."
          },
          {
            id: "o1-q3",
            prompt: "Kun kaksi säännöstä vaikuttaa soveltuvan samaan tilanteeseen, mitä pitäisi ensin selvittää?",
            options: [
              { id: "a", text: "Sääntöjen soveltamisalat ja keskinäinen suhde." },
              { id: "b", text: "Kumpi sääntö on lyhyempi." },
              { id: "c", text: "Kumpi sääntö löytyy nopeammin." }
            ],
            correctAnswerId: "a"
          }
        ]
      },
      {
        id: "sopimus-ja-vastuu",
        title: "Osa 2: Sopimus ja vastuu",
        questions: [
          {
            id: "o1-q4",
            prompt: "Mitä sopimusvapaus lähtökohtaisesti tarkoittaa?",
            options: [
              { id: "a", text: "Osapuolet voivat lähtökohtaisesti päättää sopimuksen tekemisestä, kumppanista ja ehdoista." },
              { id: "b", text: "Kaikki sopimukset vaativat viranomaisen hyväksynnän." },
              { id: "c", text: "Sopimus voidaan aina perua ilman seuraamuksia." }
            ],
            correctAnswerId: "a"
          },
          {
            id: "o1-q5",
            prompt: "Mitä sopimuksen sitovuudella tarkoitetaan?",
            options: [
              { id: "a", text: "Osapuolten on lähtökohtaisesti noudatettava sovittuja velvoitteita." },
              { id: "b", text: "Sopimus sitoo vain vahvempaa osapuolta." },
              { id: "c", text: "Sopimus lakkaa, jos toinen muuttaa mielensä." }
            ],
            correctAnswerId: "a"
          },
          {
            id: "o1-q6",
            prompt: "Mitä rikoksen tunnusmerkistöllä tarkoitetaan?",
            options: [
              { id: "a", text: "Laissa määriteltyjä edellytyksiä, joiden perusteella tekoa arvioidaan kyseisenä rikoksena." },
              { id: "b", text: "Rikoksesta epäillyn henkilötuntomerkkejä." },
              { id: "c", text: "Tuomioistuimen tunnuksia." }
            ],
            correctAnswerId: "a"
          }
        ]
      }
    ]
  },
  {
    id: "koe-2",
    version: 1,
    courseId: "oikis",
    title: "Koe 2",
    description: "Toinen 60 minuutin harjoituskoe samalla +1 / -1 / 0 -pisteytyksellä.",
    durationMinutes: 60,
    sections: [
      {
        id: "oikeuslahteet",
        title: "Osa 1: Oikeuslähteet ja tulkinta",
        questions: [
          {
            id: "o2-q1",
            prompt: "Mikä on lain soveltamista koskevassa kysymyksessä keskeinen lähtökohta?",
            options: [
              { id: "a", text: "Sovellettavan sääntelyn sisältö." },
              { id: "b", text: "Satunnainen verkkokeskustelu." },
              { id: "c", text: "Mainoslause." }
            ],
            correctAnswerId: "a"
          },
          {
            id: "o2-q2",
            prompt: "Mitä oikeudellisesti relevantin tosiseikan tunnistaminen tarkoittaa?",
            options: [
              { id: "a", text: "Erotetaan tapahtumista ne seikat, joilla on merkitystä sovellettavan säännön kannalta." },
              { id: "b", text: "Kaikki yksityiskohdat ovat aina yhtä tärkeitä." },
              { id: "c", text: "Tosiseikkoja ei tarvita oikeudellisessa arvioinnissa." }
            ],
            correctAnswerId: "a"
          },
          {
            id: "o2-q3",
            prompt: "Mitä subsumptiolla kuvataan?",
            options: [
              { id: "a", text: "Tosiseikkojen arviointia suhteessa oikeussäännön edellytyksiin." },
              { id: "b", text: "Tuomion julkaisemista." },
              { id: "c", text: "Asian siirtämistä automaattisesti toiseen tuomioistuimeen." }
            ],
            correctAnswerId: "a"
          }
        ]
      },
      {
        id: "soveltaminen",
        title: "Osa 2: Soveltaminen",
        questions: [
          {
            id: "o2-q4",
            prompt: "Jos säännöksen kaksi ehtoa ovat kumulatiivisia, milloin sääntö soveltuu?",
            options: [
              { id: "a", text: "Kun molemmat ehdot täyttyvät." },
              { id: "b", text: "Kun vain toinen täyttyy." },
              { id: "c", text: "Riippumatta ehtojen täyttymisestä." }
            ],
            correctAnswerId: "a"
          },
          {
            id: "o2-q5",
            prompt: "Mikä erottaa oikeudellisen argumentin pelkästä mielipiteestä?",
            options: [
              { id: "a", text: "Se kytketään relevantteihin oikeuslähteisiin ja perusteltuun päättelyyn." },
              { id: "b", text: "Se kirjoitetaan aina pidempänä." },
              { id: "c", text: "Se ei tarvitse perusteluja." }
            ],
            correctAnswerId: "a"
          },
          {
            id: "o2-q6",
            prompt: "Mikä on turvallinen tapa käsitellä epävarmaa tulkintakysymystä?",
            options: [
              { id: "a", text: "Tunnista tulkintaongelma ja perustele johtopäätös aineiston avulla." },
              { id: "b", text: "Esitä varma väite ilman perustelua." },
              { id: "c", text: "Jätä aineisto huomiotta." }
            ],
            correctAnswerId: "a"
          }
        ]
      }
    ]
  }
];
