import "server-only";
import type { PracticeExam } from "./types";

export const valintakoeGPracticeExams: PracticeExam[] = [
  {
    id: "koe-1",
    version: 1,
    courseId: "valintakoe-g",
    title: "Koe 1",
    description: "60 minuutin ajastettu Valintakoe G -harjoituskoe. Oikein +1 p, väärin -1 p, En osaa sanoa 0 p.",
    durationMinutes: 60,
    sections: [
      {
        id: "looginen-paattely",
        title: "Osa 1: Looginen päättely",
        questions: [
          {
            id: "g1-q1",
            prompt: "Kaikki A:t ovat B:itä. Yksikään B ei ole C. Mikä seuraa varmasti?",
            options: [
              { id: "a", text: "Yksikään A ei ole C." },
              { id: "b", text: "Kaikki C:t ovat A:ita." },
              { id: "c", text: "Jotkin A:t ovat C:itä." }
            ],
            correctAnswerId: "a"
          },
          {
            id: "g1-q2",
            prompt: "Jos 'Jos P, niin Q' on tosi ja P on tosi, mitä seuraa?",
            options: [
              { id: "a", text: "Q on tosi." },
              { id: "b", text: "Q on epätosi." },
              { id: "c", text: "P on epätosi." }
            ],
            correctAnswerId: "a"
          },
          {
            id: "g1-q3",
            prompt: "Sarja on 2, 5, 11, 23, 47. Mikä tulee seuraavaksi samalla säännöllä?",
            options: [
              { id: "a", text: "71" },
              { id: "b", text: "95" },
              { id: "c", text: "96" }
            ],
            correctAnswerId: "b",
            explanation: "Jokainen luku saadaan kertomalla edellinen kahdella ja lisäämällä yksi."
          }
        ]
      },
      {
        id: "aineisto-ja-luvut",
        title: "Osa 2: Aineisto ja numeerinen päättely",
        questions: [
          {
            id: "g1-q4",
            prompt: "Hinta nousee 80 eurosta 100 euroon. Kuinka suuri prosentuaalinen nousu on?",
            options: [
              { id: "a", text: "20 %" },
              { id: "b", text: "25 %" },
              { id: "c", text: "80 %" }
            ],
            correctAnswerId: "b"
          },
          {
            id: "g1-q5",
            prompt: "Ryhmässä on 30 henkilöä ja 18 valitsee vaihtoehdon A. Mikä osuus ryhmästä valitsee A:n?",
            options: [
              { id: "a", text: "40 %" },
              { id: "b", text: "60 %" },
              { id: "c", text: "70 %" }
            ],
            correctAnswerId: "b"
          },
          {
            id: "g1-q6",
            prompt: "Tekstissä todetaan, että toimenpide 'saattaa vähentää kustannuksia'. Mikä tulkinta on perustelluin?",
            options: [
              { id: "a", text: "Kustannusten väheneminen on mahdollinen mutta ei varma seuraus." },
              { id: "b", text: "Kustannukset vähenevät varmasti." },
              { id: "c", text: "Kustannukset kasvavat varmasti." }
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
    courseId: "valintakoe-g",
    title: "Koe 2",
    description: "Toinen 60 minuutin harjoituskoe samalla +1 / -1 / 0 -pisteytyksellä.",
    durationMinutes: 60,
    sections: [
      {
        id: "paattelyketjut",
        title: "Osa 1: Päättelyketjut",
        questions: [
          {
            id: "g2-q1",
            prompt: "Jos kaikki X:t ovat Y:itä ja kaikki Y:t ovat Z:ia, mikä seuraa varmasti?",
            options: [
              { id: "a", text: "Kaikki X:t ovat Z:ia." },
              { id: "b", text: "Kaikki Z:t ovat X:iä." },
              { id: "c", text: "Yksikään X ei ole Z." }
            ],
            correctAnswerId: "a"
          },
          {
            id: "g2-q2",
            prompt: "Väite 'Joko A tai B, mutta eivät molemmat' on tosi. A on tosi. Mitä B:stä seuraa?",
            options: [
              { id: "a", text: "B on epätosi." },
              { id: "b", text: "B on tosi." },
              { id: "c", text: "B:n arvoa ei voi päätellä." }
            ],
            correctAnswerId: "a"
          },
          {
            id: "g2-q3",
            prompt: "Sarja on 81, 27, 9, 3. Mikä tulee seuraavaksi?",
            options: [
              { id: "a", text: "0" },
              { id: "b", text: "1" },
              { id: "c", text: "1,5" }
            ],
            correctAnswerId: "b"
          }
        ]
      },
      {
        id: "suhteet-ja-aineisto",
        title: "Osa 2: Suhteet ja aineistopäättely",
        questions: [
          {
            id: "g2-q4",
            prompt: "Suhde A:B on 3:2. Jos A = 24, mikä on B?",
            options: [
              { id: "a", text: "12" },
              { id: "b", text: "16" },
              { id: "c", text: "18" }
            ],
            correctAnswerId: "b"
          },
          {
            id: "g2-q5",
            prompt: "Raportissa kahden muuttujan välillä havaitaan yhteys. Mitä tästä yksin voidaan päätellä?",
            options: [
              { id: "a", text: "Yhteys havaittiin, mutta syy-seuraussuhde ei seuraa siitä automaattisesti." },
              { id: "b", text: "Ensimmäinen muuttuja aiheuttaa varmasti toisen." },
              { id: "c", text: "Toinen muuttuja aiheuttaa varmasti ensimmäisen." }
            ],
            correctAnswerId: "a"
          },
          {
            id: "g2-q6",
            prompt: "Jos aineistosta ei voida päätellä vaihtoehdon olevan oikea eikä väärä, mikä on tämän koemuodon riskitön valinta?",
            options: [
              { id: "a", text: "Arvataan." },
              { id: "b", text: "En osaa sanoa." },
              { id: "c", text: "Valitaan useita vaihtoehtoja." }
            ],
            correctAnswerId: "b"
          }
        ]
      }
    ]
  }
];
