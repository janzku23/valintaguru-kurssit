import "server-only";
import type { PracticeExam } from "../types";

export const OIKISTEHO_EXAM_1_ARTICLE_URL =
  "https://oikeus.journal.fi/article/view/152411/98116";

/**
 * Yhteinen Koe 1 OikisTeho- ja OikisTeho + Etäopetus -kursseille.
 *
 * Huom:
 * - Pitkä ohjeistus EI ole description-kentässä.
 * - intro sisältää näkymässä renderöitävän ohjeistuksen.
 * - artikkeli kuuluu juuri tähän kokeeseen.
 * - kysymyksissä 3, 4 ja 26 on useampi oikea vastaus.
 */
export const oikisTehoExam1 = {
  id: "koe-1",
  version: 1,
  title: "Koe 1",
  description:
    "60 minuutin ajastettu harjoitustentti, joka perustuu ennakkoon luettavaan akateemiseen artikkeliin.",
  durationMinutes: 60,

  articleUrl: OIKISTEHO_EXAM_1_ARTICLE_URL,

  intro: {
    eyebrow: "Oikeustieteen eriytyvä osio",
    title: "Näin suoritat oikeustieteen eriytyvän osion harjoitustentin",
    lead:
      "Harjoitustentin tarkoitus on simuloida aitoa pääsykoetilannetta. Tentti perustuu akateemiseen artikkeliin ja sisältää oikean kokeen rakennetta vastaavia kysymystyyppejä.",

    article: {
      label: "Koe 1:n ennakkomateriaali",
      title: "Lue artikkeli ennen harjoitustenttiä",
      description:
        "Avaa artikkeli alla olevasta painikkeesta ja tutustu siihen 2–4 vuorokauden ajan. Lue materiaali useaan otteeseen. Kun aloitat varsinaisen kokeen, sulje artikkeli pois näkyvistä.",
      url: OIKISTEHO_EXAM_1_ARTICLE_URL,
      buttonText: "Avaa artikkeli",
    },

    instructionsTitle: "Miten harjoitustentti suoritetaan?",

    steps: [
      {
        number: 1,
        title: "Tutustu ennakkomateriaaliin",
        text:
          "Avaa artikkeli ja lue sitä 2–4 vuorokautta. Lue artikkeli useaan otteeseen ennen kokeen aloittamista.",
      },
      {
        number: 2,
        title: "Sulje artikkeli ennen koetta",
        text:
          "Oikeassa koetilanteessa ennakkomateriaali ei ole käytettävissä. Tee myös tämä harjoitustentti ilman artikkelia näkyvissä.",
      },
      {
        number: 3,
        title: "Tee 60 minuutin harjoitustentti",
        text:
          "Kun olet valmis, käynnistä koe. Sinulla on 60 minuuttia aikaa vastata artikkeliin perustuviin kysymyksiin.",
      },
      {
        number: 4,
        title: "Tarkista tuloksesi",
        text:
          "Tentin jälkeen näet pisteesi ja voit käydä läpi vastauksesi, vahvuutesi sekä kehityskohteesi.",
      },
    ],

    notice:
      "Älä aloita koetta ennen kuin olet lukenut ennakkomateriaalin. Kun koe käynnistyy, tarkoitus on vastata ilman artikkelia.",
    closing: "Onnea harjoitteluun! 💪",
  },

  sections: [
    {
      id: "koe-1-kysymykset",
      title: "Koe 1 – Lapsen etu Suomen lainsäädännössä",
      questions: [
          {
            id: "oikis-koe-1-q1",
            prompt: "Milloin lapsen etu mainitaan ensimmäisen kerran Suomen lainsäädännössä?",
            options: [
              { id: "a", text: "1910" },
              { id: "b", text: "1922" },
              { id: "c", text: "1925" },
              { id: "d", text: "1936" },
              { id: "e", text: "Jätän vastaamatta tähän kysymykseen" }
            ],
            correctAnswerId: "b",
            explanation: "Ensimmäinen maininta on vuoden 1922 laissa avioliiton ulkopuolella syntyneistä lapsista, tämä käy ilmi esimerkiksi otsikosta sekä itse tekstistä (s. 51–52)."
          },
          {
            id: "oikis-koe-1-q2",
            prompt: "Mitä kautta lapsen edun periaate on tullut kansainvälisesti käyttöön?",
            options: [
              { id: "a", text: "EU:n asetuksesta" },
              { id: "b", text: "EU:n direktiivistä" },
              { id: "c", text: "Euroopan ihmisoikeussopimuksesta" },
              { id: "d", text: "YK:n lapsen oikeuksien sopimuksesta" },
              { id: "e", text: "Jätän vastaamatta tähän kysymykseen" }
            ],
            correctAnswerId: "b",
            explanation: "Lapsen edun periaate tuli kansainvälisesti käyttöön YK:n lapsen oikeuksien sopimuksessa (SopS 59 ja 60/1991) vuonna 1989 (s. 51)."
          },
          {
            id: "oikis-koe-1-q3",
            prompt: "Millä eri tasoilla De Godzinskyn mukaan lapsen etua voidaan tarkastella?",
            options: [
              { id: "a", text: "Poliittisella tasolla" },
              { id: "b", text: "Yleisellä tasolla" },
              { id: "c", text: "Tapauskohtaisella konkreettisella tasolla" },
              { id: "d", text: "Taloudellisella tasolla" },
              { id: "e", text: "Jätän vastaamatta tähän kysymykseen" }
            ],
            correctAnswerId: "a",
            correctAnswerIds: ["a", "b", "c"],
            explanation: "De Godzinskyn mukaan lapsen etua voi tarkastella yleisellä, poliittisella ja tapauskohtaisella konkreettisella tasolla, mutta käsitteellä on muitakin ulottuvuuksia (s. 53)."
          },
          {
            id: "oikis-koe-1-q4",
            prompt: "Missä seuraavista laeista on viitattu lapsen etuun vuosina 1922–1983?",
            options: [
              { id: "a", text: "Isyyslaki" },
              { id: "b", text: "Äitiyslaki" },
              { id: "c", text: "Laki lapsen huollosta ja tapaamisoikeudesta" },
              { id: "d", text: "Lastensuojelulaki" },
              { id: "e", text: "Jätän vastaamatta tähän kysymykseen" }
            ],
            correctAnswerId: "a",
            correctAnswerIds: ["a", "b", "d"],
            explanation: "Kts. artikkelin taulukko sivulla 54."
          },
          {
            id: "oikis-koe-1-q5",
            prompt: "Oikein vai väärin: Tapauksen KKO 1949-II-248 mukaan lapsen huolto tuomittiin siirrettäväksi isälle, koska äiti oli viettänyt elämää, jota ei voinut pitää lapsen edun mukaisena.",
            options: [
              { id: "a", text: "Oikein" },
              { id: "b", text: "Väärin" },
              { id: "c", text: "Jätän vastaamatta tähän kysymykseen" }
            ],
            correctAnswerId: "a",
            explanation: "KKO 1949-II-248 mukaan lapsen huolto tuomittiin siirrettäväksi isälle, koska äiti oli viettänyt elämää, jota ei voinut pitää lapsen edun mukaisena (s. 55)."
          },
          {
            id: "oikis-koe-1-q6",
            prompt: "Mitä seuraavista vuoden 1979 adoptiolaki korosti?",
            options: [
              { id: "a", text: "Vanhempien oikeuksia" },
              { id: "b", text: "Valtion valvontaa" },
              { id: "c", text: "Lapsen parasta ja etua" },
              { id: "d", text: "Perintöoikeutta" },
              { id: "e", text: "Jätän vastaamatta" }
            ],
            correctAnswerId: "c",
            explanation: "Lastensuojelulain 683/1983 sijaan lapsen etu näyttäisi esiintyvän Suomessa periaatteena ensimmäisen kerran laissa ottolapsista vuodelta 1979. Sen 1 §:n mukaan lapseksiottamisen tulee edistää lapsen parasta ja 2 §:n mukaan lapseksiottamisen tulee olla lapsen edun mukaista (s. 52)."
          },
          {
            id: "oikis-koe-1-q7",
            prompt: "Mikä seuraavista väittämistä on oikein?",
            options: [
              { id: "a", text: "Lapsen oikeuksien sopimus määrittelee lapsiksi kaikki alle 16-vuotiaat." },
              { id: "b", text: "Lapsen oikeuksien sopimus määrittelee lapsiksi kaikki alle 17-vuotiaat." },
              { id: "c", text: "Lapsen oikeuksien sopimus määrittelee lapsiksi kaikki alle 18-vuotiaat." },
              { id: "d", text: "Lapsen oikeuksien sopimus määrittelee lapsiksi kaikki alle 21-vuotiaat." },
              { id: "e", text: "Jätän vastaamatta tähän kysymykseen" }
            ],
            correctAnswerId: "c",
            explanation: "Lapsi on rajattavissa määritelmällisesti, esimerkiksi lapsen oikeuksien sopimus määrittelee lapsiksi kaikki alle 18-vuotiaat (s. 56)."
          },
          {
            id: "oikis-koe-1-q8",
            prompt: "Oikein vai väärin: Lapsen edun käsite tuli Suomeen vasta YK:n sopimuksen jälkeen.",
            options: [
              { id: "a", text: "Oikein" },
              { id: "b", text: "Väärin" },
              { id: "c", text: "Jätän vastaamatta tähän kysymykseen" }
            ],
            correctAnswerId: "b",
            explanation: "Käsite oli käytössä jo 1920-luvulla (s. 51–52)."
          },
          {
            id: "oikis-koe-1-q9",
            prompt: "Mikä seuraavista väittämistä on oikein?",
            options: [
              { id: "a", text: "Lapsen oikeuksien sopimuksen mukaan adoptio on aina lapsen edun mukainen." },
              { id: "b", text: "Lapsen oikeuksien sopimuksen mukaan adoptio on lapsen edun mukainen, jos se on osa sopimuksen ratifioineen valtion oikeusjärjestelmää." },
              { id: "c", text: "Lapsen oikeuksien sopimuksen mukaan adoptio ei yleensä ole lapsen edun mukaista." },
              { id: "d", text: "Lapsen oikeuksien sopimuksen mukaan adoptio on lapsen edun mukainen, jos adoptiomaan bruttokansantuote on pienempi kuin adoptoivan maan." },
              { id: "e", text: "Jätän vastaamatta tähän kysymykseen." }
            ],
            correctAnswerId: "b",
            explanation: "Vuoden 1989 lapsen oikeuksien sopimuksen 21 artiklan mukaan adoptio on lapsen edun mukainen, jos se on osa sopimuksen ratifioineen valtion oikeusjärjestelmää – mutta ei ole, jos adoptio ei oikeusjärjestelmään kuulu (s. 56)."
          },
          {
            id: "oikis-koe-1-q10",
            prompt: "Millä vuosikymmenellä lapsen edun käyttö lainsäädännössä alkaa selvästi lisääntyä?",
            options: [
              { id: "a", text: "1930-luku" },
              { id: "b", text: "1950-luku" },
              { id: "c", text: "1970-luku" },
              { id: "d", text: "1990-luku" },
              { id: "e", text: "Jätän vastaamatta tähän kysymykseen" }
            ],
            correctAnswerId: "c",
            explanation: "Tutkimus paikantaa käytön lisääntymisen 1970-luvulle (s. 53)."
          },
          {
            id: "oikis-koe-1-q11",
            prompt: "Oikein vai väärin: Lapsen etu on adoptiota ja lastensuojelua ohjaava perusperiaate.",
            options: [
              { id: "a", text: "Oikein" },
              { id: "b", text: "Väärin" },
              { id: "c", text: "Jätän vastaamatta tähän kysymykseen" }
            ],
            correctAnswerId: "a",
            explanation: "Lapsen etu on vakiintunut Suomen kansalliseen lainsäädäntöön adoptiota ja lastensuojelua ohjaavana perusperiaatteena (s. 56)."
          },
          {
            id: "oikis-koe-1-q12",
            prompt: "Varhaisessa oikeuskäytännössä lapsen etu vaikutti ratkaisuun tapauksessa:",
            options: [
              { id: "a", text: "KKO 1936" },
              { id: "b", text: "KKO 1946" },
              { id: "c", text: "KKO 1978" },
              { id: "d", text: "KKO 1985" },
              { id: "e", text: "Jätän vastaamatta tähän kysymykseen" }
            ],
            correctAnswerId: "c",
            explanation: "Vuoden 1978 ratkaisu perustui lapsen etuun, 1978-II-80 (s. 55). HUOM! Kysymys on tarkoituksella tarkka, myös oikeassa pääsykokeessa nippelitiedon ulkoa muistamisella saattaa olla merkitystä."
          },
          {
            id: "oikis-koe-1-q13",
            prompt: "Mikä on ensimmäinen laki jossa lapsen etu mainitaan?",
            options: [
              { id: "a", text: "Lastensuojelulaki" },
              { id: "b", text: "Adoptiolaki" },
              { id: "c", text: "Laki lapsen huollosta ja tapaamisoikeudesta" },
              { id: "d", text: "Laki avioliiton ulkopuolella syntyneistä lapsista" },
              { id: "e", text: "Jätän vastaamatta tähän kysymykseen" }
            ],
            correctAnswerId: "d",
            explanation: "Tähän viitataan artikkelissa useasti, esimerkiksi sivulla 54 taulukossa."
          },
          {
            id: "oikis-koe-1-q14",
            prompt: "Mikä oli adoption merkitys lapsen kannalta (peilaten lakiin lapseksiottamisesta)?",
            options: [
              { id: "a", text: "Taloudellinen hyöty" },
              { id: "b", text: "Yhteiskunnallinen kontrolli" },
              { id: "c", text: "Turvan ja kodin saaminen" },
              { id: "d", text: "Oikeudellinen formaliteetti" },
              { id: "e", text: "Jätän vastaamatta" }
            ],
            correctAnswerId: "c",
            explanation: "Lain 2 §:n mukaan alaikäisen lapseksiottaminen voidaan vahvistaa, jos sen harkitaan olevan lapsen edun mukaista ja on selvitetty, että lapsi tulee saamaan hyvän hoidon ja kasvatuksen (s. 59)."
          },
          {
            id: "oikis-koe-1-q15",
            prompt: "Mikä seuraavista on oikein vuoden 1910 Lainvalmistelukunnan esityksen mukaan? Lapsen oikeus on etualalla, koska…",
            options: [
              { id: "a", text: "Lapsi ei ole syypää olemassaoloonsa" },
              { id: "b", text: "Lapsi ei osaa puolustaa itseään" },
              { id: "c", text: "Lapsi ei ole oikeustoimikelpoinen itse" },
              { id: "d", text: "Lapsi ei vielä ymmärrä lainsäädännön merkitystä" },
              { id: "e", text: "Jätän vastaamatta tähän kysymykseen" }
            ],
            correctAnswerId: "a",
            explanation: "Lapsen oikeus astuu etualalle, koska lapsi ei ole syypää olemassaoloonsa (Lainvalmistelukunta 1910, s. 25) (s. 57)."
          },
          {
            id: "oikis-koe-1-q16",
            prompt: "Mikä seuraavista korostui 1970-luvun lainsäädäntökehityksessä?",
            options: [
              { id: "a", text: "Vanhempien auktoriteetti" },
              { id: "b", text: "Lapsen subjektiivinen asema" },
              { id: "c", text: "Kuntien päätösvalta" },
              { id: "d", text: "Tuomioistuinten rooli" },
              { id: "e", text: "Jätän vastaamatta" }
            ],
            correctAnswerId: "b",
            explanation: "Harrikarin mukaan lapsen subjektiivisen edun käsitteen lanseeraus oli virstanpylväs ja ajoittuu lain 523/1975 valmistelun yhteyteen (s. 61)."
          },
          {
            id: "oikis-koe-1-q17",
            prompt: "Vuoden 1925 adoptiolaki oli yhteydessä:",
            options: [
              { id: "a", text: "Saksalaiseen oikeuteen" },
              { id: "b", text: "Pohjoismaiseen yhteistyöhön" },
              { id: "c", text: "Englannin lainsäädäntöön" },
              { id: "d", text: "Kansainliiton sopimukseen" },
              { id: "e", text: "Jätän vastaamatta" }
            ],
            correctAnswerId: "b",
            explanation: "Vuoden 1925 ottolapsilain yhtenä tavoitteena oli avioliiton ulkopuolella syntyneiden lasten aseman parantaminen. Se perustui Ruotsissa, Norjassa ja Tanskassa tehtyyn yhteiseen lainvalmisteluun (s. 57–58)."
          },
          {
            id: "oikis-koe-1-q18",
            prompt: "Suojeluvalvonnan tarkoitus oli:",
            options: [
              { id: "a", text: "Rangaista vanhempia" },
              { id: "b", text: "Tukea lasta kotona" },
              { id: "c", text: "Valvoa kuntia" },
              { id: "d", text: "Siirtää huolto" },
              { id: "e", text: "Jätän vastaamatta" }
            ],
            correctAnswerId: "b",
            explanation: "Komitean mietinnössä ehdotetaan uutta oikeusmenettelyä, suojeluvalvontaa, jonka tarkoitus olisi ”huolehtia lapsen edusta erottamatta häntä omasta kodista” (s. 57)."
          },
          {
            id: "oikis-koe-1-q19",
            prompt: "Artikkelin keskeinen johtopäätös on, että lapsen edun kehitys oli:",
            options: [
              { id: "a", text: "Äkillinen murros" },
              { id: "b", text: "Kansainvälinen pakko" },
              { id: "c", text: "Vaiheittainen prosessi" },
              { id: "d", text: "Tuomioistuinlähtöinen muutos" },
              { id: "e", text: "Jätän vastaamatta tähän kysymykseen" }
            ],
            correctAnswerId: "c",
            explanation: "Kehitys tapahtui asteittain adoptio- ja lastensuojelulainsäädännössä (s. 51–52)."
          },
          {
            id: "oikis-koe-1-q20",
            prompt: "Adoptioon liittyvässä keskustelussa korostui:",
            options: [
              { id: "a", text: "Valtion talous" },
              { id: "b", text: "Viranomaisvalvonta" },
              { id: "c", text: "Koulutusjärjestelmä" },
              { id: "d", text: "Perheoikeus" },
              { id: "e", text: "Jätän vastaamatta tähän kysymykseen" }
            ],
            correctAnswerId: "b",
            explanation: "Muun muassa Melanderin mukaan viranomaisten tulee valvoa, että lapseksiottamisella todella edistetään lapsen parasta (s. 58)."
          },
          {
            id: "oikis-koe-1-q21",
            prompt: "Mitä vuoden 1983 lastensuojelulaki teki lapsen edun käsitteelle?",
            options: [
              { id: "a", text: "Poisti käsitteen" },
              { id: "b", text: "Vakiinnutti periaatteen" },
              { id: "c", text: "Rajoitti soveltamista" },
              { id: "d", text: "Ei viitannut lapseen" },
              { id: "e", text: "Jätän vastaamatta tähän kysymykseen" }
            ],
            correctAnswerId: "b",
            explanation: "Periaate vahvistui lainsäädännössä (mm. s. 52, mutta tulee esiin artikkelin ns. rivien välistä muissakin kohdin)."
          },
          {
            id: "oikis-koe-1-q22",
            prompt: "Mihin seuraavista lapsen etu liitettiin?",
            options: [
              { id: "a", text: "Isyyden vahvistamiseen" },
              { id: "b", text: "Verotukseen" },
              { id: "c", text: "Koulupolitiikkaan" },
              { id: "d", text: "Rikosoikeuteen" },
              { id: "e", text: "Jätän vastaamatta tähän kysymykseen" }
            ],
            correctAnswerId: "a",
            explanation: "Isyyden vahvistamisessa tuli huomioida lapsen etu (mm. s. 54 taulukko)."
          },
          {
            id: "oikis-koe-1-q23",
            prompt: "Minkälaista lapsen etu oli luonteeltaan varhaisessa sääntelyssä?",
            options: [
              { id: "a", text: "Filosofista" },
              { id: "b", text: "Käytännöllistä" },
              { id: "c", text: "Teoreettista" },
              { id: "d", text: "Symbolista" },
              { id: "e", text: "Jätän vastaamatta tähän kysymykseen" }
            ],
            correctAnswerId: "b",
            explanation: "Se liittyi konkreettisiin elatus- ja huoltokysymyksiin (mm. s. 54 taulukko, mutta tulee esiin pitkin tekstiä)."
          },
          {
            id: "oikis-koe-1-q24",
            prompt: "Oikein vai väärin: Lapsen edun periaate oli kirjattu YK:n lapsen oikeuksien julistukseen.",
            options: [
              { id: "a", text: "Oikein" },
              { id: "b", text: "Väärin" },
              { id: "c", text: "Jätän vastaamatta tähän kysymykseen" }
            ],
            correctAnswerId: "a",
            explanation: "YK:n lapsen oikeuksien julistus (UN 1959), johon lapsen edun periaate oli kirjattu (s. 60)."
          },
          {
            id: "oikis-koe-1-q25",
            prompt: "Oikein vai väärin: Sukulaisadoptioissa ei tarvitse valvoa lapsen etua.",
            options: [
              { id: "a", text: "Oikein" },
              { id: "b", text: "Väärin" },
              { id: "c", text: "Jätän vastaamatta tähän kysymykseen" }
            ],
            correctAnswerId: "b",
            explanation: "Sukulaisadoptioissa tulisi myös valvoa lapsen etua (s. 61)."
          },
          {
            id: "oikis-koe-1-q26",
            prompt: "Mihin seuraavista Rautanen jaottelee länsimaisen adoption lähtökohdat?",
            options: [
              { id: "a", text: "anglosaksisten maiden adoptiot" },
              { id: "b", text: "Eurooppalaiset adoptiot" },
              { id: "c", text: "Skandinavian adoptiot" },
              { id: "d", text: "Code Napoleon -maiden adoptiot" },
              { id: "e", text: "Jätän vastaamatta tähän kysymykseen" }
            ],
            correctAnswerId: "a",
            correctAnswerIds: ["a", "b", "d"],
            explanation: "Lainvalmisteluun liittyneessä kansainvälisiä adoptioita koskevassa selvityksessä (Rautanen) lapsen etu nousee periaatteena adoption lähtökohdaksi. Rautanen jaottelee länsimaisen adoption lähtökohdat 1) anglosaksisten ja Skandinavian maiden adoptioihin ja 2) Code Napoleon -maiden adoptioihin (s. 61)."
          },
          {
            id: "oikis-koe-1-q27",
            prompt: "Mihin seuraavista vuoden 1979 adoptiolaki vaikutti?",
            options: [
              { id: "a", text: "Rikoslakiin" },
              { id: "b", text: "1983 lastensuojelulain valmisteluun" },
              { id: "c", text: "Perustuslakiin" },
              { id: "d", text: "Verolakiin" },
              { id: "e", text: "Jätän vastaamatta tähän kysymykseen" }
            ],
            correctAnswerId: "b",
            explanation: "Valmistelut olivat yhteydessä toisiinsa (s. 63)."
          },
          {
            id: "oikis-koe-1-q28",
            prompt: "Oikein vai väärin: Lainsäädännössä periaatteeksi nostettu lapsen etu lisäsi viranomaisten mahdollisuuksia lakien tulkintaan, sillä sen sisältöä saattoi vaihdella ilman tarvetta muuttaa lainsäädäntöä.",
            options: [
              { id: "a", text: "Oikein" },
              { id: "b", text: "Väärin" },
              { id: "c", text: "Jätän vastaamatta tähän kysymykseen" }
            ],
            correctAnswerId: "a",
            explanation: "Tämä todetaan sivulla 64."
          }
      ]
    }
  ]
} satisfies Omit<PracticeExam, "courseId">;
