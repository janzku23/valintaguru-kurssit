import type { ValintakoeGExercise } from "./types";

/**
 * Harjoitus 1 on muodostettu kollegan toimittamasta dokumentista.
 * Lähdedokumentissa LINKKI-kenttä on tyhjä, joten articleUrl lisätään myöhemmin.
 * Dokumentissa on tehtävät 1–8, 10 ja 11 eli yhteensä 10 tehtävää.
 */
export const valintakoeGExercise1Base = {
  id: "harjoitus-1",
  version: 1,
  courseId: "valintakoe-g",
  title: "Harjoitus 1 – Sosiaalisen median logiikka ja uutismedia",
  description:
    "45 minuutin aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  durationMinutes: 45,
  difficulty: "easy",
  articleId: "sosiaalisen-median-logiikka-ja-uutismedia",
  articleTitle: "Sosiaalisen median logiikka ja uutismedia",
  notice:
    "Aineiston linkki puuttuu vielä lähdedokumentista. Lisää articleUrl, kun artikkelin URL on tiedossa.",
  questions: [
    {
      id: "g-h1-q1",
      questionType: "single",
      difficulty: "easy",
      categoryId: 2,
      prompt:
        "Vastaako seuraava väittämä artikkelin sisältöä? ”Sosiaalisen median logiikalla tarkoitetaan periaatteita, jotka ohjaavat sosiaalisen median alustojen toimintaa ja sisällöntuotantoa.”",
      options: [
        { id: "kylla", text: "Kyllä" },
        { id: "ei", text: "Ei" },
      ],
      correctAnswerIds: ["kylla"],
      source: {
        articleId: "sosiaalisen-median-logiikka-ja-uutismedia",
        page: "272",
        section: "Johdanto",
      },
      explanation:
        "Väite on oikein, vaikka siinä ei käytetä täsmälleen samoja sanoja kuin aineistossa. ”Viitataan” on kysymyksessä ilmaistu sanalla ”tarkoitetaan”, mutta merkitys säilyy samana.",
      learningPoint:
        "Älä etsi vain täsmälleen samoja sanoja. Tarkista, säilyykö merkitys, vaikka asia olisi muotoiltu uudelleen.",
    },
    {
      id: "g-h1-q2",
      questionType: "single",
      difficulty: "easy",
      categoryId: 1,
      prompt:
        "Mikä seuraavista pitää artikkelin mukaan paikkansa Ylen toiminnasta?",
      options: [
        {
          id: "a",
          text: "Yle pyrkii siirtämään mahdollisimman suuren osan tuotannostaan sosiaalisen median alustoille.",
        },
        {
          id: "b",
          text: "Yle pyrkii keskittämään tuotantoaan mahdollisimman paljon omille alustoilleen.",
        },
        {
          id: "c",
          text: "Yle on lopettanut sosiaalisen median käytön ja keskittynyt omiin alustoihinsa.",
        },
        {
          id: "d",
          text: "Yle käyttää sosiaalista mediaa ensisijaisesti tavoittaakseen yleisöt, jotka se tavoittaa jo television ja radion kautta.",
        },
      ],
      correctAnswerIds: ["b"],
      source: {
        articleId: "sosiaalisen-median-logiikka-ja-uutismedia",
        page: "274",
        section: "Tasapainoilua ja jäljittelyä somen logiikalla",
      },
      explanation:
        "Aineisto kertoo suoraan Ylen pyrkivän keskittämään tuotantoaan omille alustoilleen. Vaihtoehto B vastaa tätä tietoa suoraan.",
      learningPoint:
        "Etsi kysymyksen avainsana tekstistä ja tarkista vastaus juuri sitä ympäröivistä virkkeistä.",
    },
    {
      id: "g-h1-q3",
      questionType: "true_false",
      difficulty: "easy",
      categoryId: 11,
      prompt:
        "Artikkelin mukaan Yle pyrkii sosiaalisen median kautta tavoittamaan kaikki suomalaiset yleisöt.",
      options: [
        { id: "tosi", text: "Tosi" },
        { id: "epatosi", text: "Epätosi" },
      ],
      correctAnswerIds: ["epatosi"],
      source: {
        articleId: "sosiaalisen-median-logiikka-ja-uutismedia",
        page: "274",
        section: "Tasapainoilua ja jäljittelyä somen logiikalla",
      },
      explanation:
        "Aineistossa kohdejoukko on rajattu erityisesti niihin, joita Ylen muut kanavat eivät tavoita. Kysymyksessä kohdejoukko on laajennettu kaikkiin suomalaisiin yleisöihin.",
      learningPoint:
        "Tarkista aina, keitä väite koskee. Muuten oikealta kuulostava väite voi muuttua vääräksi pelkästään kohdejoukon laajentamisen vuoksi.",
    },
    {
      id: "g-h1-q4",
      questionType: "single",
      difficulty: "easy",
      categoryId: 8,
      prompt: "Mikä seuraavista on EPÄTOSI?",
      options: [
        {
          id: "a",
          text: "Yli puolet suomalaisnuorista seuraa uutisia TikTokin kautta.",
        },
        {
          id: "b",
          text: "Noin kolmasosa suomalaisnuorista seuraa uutisia Instagramissa.",
        },
        {
          id: "c",
          text: "Nuoret kohtaavat sosiaalisessa mediassa uutistietoa myös sattumanvaraisesti muun sisällön joukossa.",
        },
        {
          id: "d",
          text: "Yli puolet suomalaisnuorista seuraa uutisia Instagramissa.",
        },
      ],
      correctAnswerIds: ["d"],
      source: {
        articleId: "sosiaalisen-median-logiikka-ja-uutismedia",
        page: "275",
        section: "Sisältösekaannus ja uutismedian tunnistettavuuden haaste",
      },
      explanation:
        "Instagramin kohdalla aineistossa puhutaan noin kolmasosasta, ei yli puolesta. TikTokin kohdalla osuus on yli puolet. Vaihtoehto D siirtää TikTokia koskevan oikean määrätiedon Instagramiin.",
      learningPoint:
        "Älä tarkista vain sitä, esiintyykö luku aineistossa. Tarkista myös, mihin alustaan, ryhmään tai käsitteeseen luku kuuluu.",
    },
    {
      id: "g-h1-q5",
      questionType: "single",
      difficulty: "easy",
      categoryId: 5,
      prompt:
        "Vastaako seuraava väittämä artikkelin sisältöä? ”Nuoret hakeutuvat tavallisesti sosiaaliseen mediaan nimenomaan kuluttaakseen uutisia.”",
      options: [
        { id: "kylla", text: "Kyllä" },
        { id: "ei", text: "Ei" },
      ],
      correctAnswerIds: ["ei"],
      source: {
        articleId: "sosiaalisen-median-logiikka-ja-uutismedia",
        page: "275",
        section: "Sisältösekaannus ja uutismedian tunnistettavuuden haaste",
      },
      explanation:
        "Aineistossa sanotaan nimenomaan, etteivät nuoret tavanomaisesti hakeudu someen uutisten vuoksi. Väitteessä merkitys on käännetty vastakkaiseksi.",
      learningPoint:
        "Kiinnitä huomiota kieltoihin ja merkityksen suuntaan. Yksi ei-sana voi ratkaista koko tehtävän.",
    },
    {
      id: "g-h1-q6",
      questionType: "true_false",
      difficulty: "easy",
      categoryId: 3,
      prompt:
        "Sosiaalisen median muotokieltä mukaileva uutissisältö voi aiheuttaa nuorille vaikeuksia erottaa uutiset sosiaalisen median muusta sisällöstä.",
      options: [
        { id: "tosi", text: "Tosi" },
        { id: "epatosi", text: "Epätosi" },
      ],
      correctAnswerIds: ["tosi"],
      source: {
        articleId: "sosiaalisen-median-logiikka-ja-uutismedia",
        page: "275",
        section: "Sisältösekaannus ja uutismedian tunnistettavuuden haaste",
      },
      explanation:
        "Väite tiivistää kappaleen keskeisen ajatuksen. Artikkelissa sisältösekaannus määritellään juuri vaikeudeksi erottaa uutissisältöjä muusta sosiaalisen median sisällöstä.",
      learningPoint:
        "Kun väite tiivistää pidemmän virkkeen, tarkista säilyvätkö alkuperäisen tekstin keskeinen syy, seuraus ja varmuusaste.",
    },
    {
      id: "g-h1-q7",
      questionType: "true_false",
      difficulty: "easy",
      categoryId: 4,
      prompt: "Ylen korttijuttu-formaatti mukailee TikTokin toimintalogiikkaa.",
      options: [
        { id: "oikein", text: "Oikein" },
        { id: "vaarin", text: "Väärin" },
      ],
      correctAnswerIds: ["vaarin"],
      source: {
        articleId: "sosiaalisen-median-logiikka-ja-uutismedia",
        page: "274",
        section: "Tasapainoilua ja jäljittelyä somen logiikalla",
      },
      explanation:
        "Korttijuttu-formaatti yhdistetään aineistossa Instagramiin, ei TikTokiin. Väite on muuten rakenteeltaan oikea, mutta yksi ratkaiseva käsite on vaihdettu.",
      learningPoint:
        "Jos väite näyttää lähes sanatarkasti oikealta, tarkista erityisen huolellisesti nimet ja käsitteet.",
    },
    {
      id: "g-h1-q8",
      questionType: "single",
      difficulty: "easy",
      categoryId: 6,
      prompt:
        "Mikä seuraavista kuvaa oikein artikkelissa esitettyä pysty- ja vaakavideoformaattien suhdetta sisällölliseen yhteistekemiseen?",
      options: [
        {
          id: "a",
          text: "Pystyvideo vaikeutti yhteistekemistä somen ja verkon välillä, mutta vaakavideo helpotti sitä.",
        },
        {
          id: "b",
          text: "Vaakavideo soveltui yhtä hyvin kuin pystyvideo somen ja verkon yhteiskäyttöön.",
        },
        {
          id: "c",
          text: "Pystyvideo helpotti somen ja verkon yhteistekemistä, kun taas television vaakavideo ei juuri soveltunut niiden kanssa yhteiskäyttöön.",
        },
        {
          id: "d",
          text: "Kumpaakaan videoformaattia ei voitu hyödyntää eri alustojen välillä.",
        },
      ],
      correctAnswerIds: ["c"],
      source: {
        articleId: "sosiaalisen-median-logiikka-ja-uutismedia",
        page: "275",
        section: "Sisällöllistä yhteistekemistä käsittelevä kappale",
      },
      explanation:
        "Aineistossa pystyvideo yhdistyy helppoon yhteistekemiseen ja vaakavideo heikompaan yhteiskäyttöön. Vaihtoehto A kääntää näiden välisen suhteen toisin päin.",
      learningPoint:
        "Tarkista, mikä ominaisuus kuuluu millekin käsitteelle. Kahden tutun asian vaihtaminen keskenään voi tehdä vaihtoehdosta väärän.",
    },
    {
      id: "g-h1-q10",
      questionType: "true_false",
      difficulty: "easy",
      categoryId: 9,
      prompt:
        "Vuoden 2022 Yle-lain päivityksen jälkeen kaupalliset mediatoimijat alkoivat pelätä Ylen tekstipohjaisen sisällön aiheuttamaa epäreilua kilpailuasetelmaa.",
      options: [
        { id: "tosi", text: "Tosi" },
        { id: "epatosi", text: "Epätosi" },
      ],
      correctAnswerIds: ["epatosi"],
      source: {
        articleId: "sosiaalisen-median-logiikka-ja-uutismedia",
        page: "274",
      },
      explanation:
        "Aineistossa kaupallisten toimijoiden pelko esitetään lain päivittämistä ajaneena tekijänä. Kysymyksessä sama asia sijoitetaan lain päivittämisen jälkeiseksi seuraukseksi.",
      learningPoint:
        "Tieto voi löytyä tekstistä mutta olla silti väärin, jos se sijoitetaan väärään vaiheeseen tapahtumaketjussa.",
    },
    {
      id: "g-h1-q11",
      questionType: "multiple",
      difficulty: "easy",
      categoryId: 10,
      prompt: "Valitse kaikki artikkelin perusteella oikeat vaihtoehdot.",
      options: [
        { id: "a", text: "Uudempi media vie huomiota vanhalta medialta." },
        {
          id: "b",
          text: "Televisio vie artikkelin mukaan yhä enemmän huomiota sosiaaliselta medialta.",
        },
        { id: "c", text: "Lyhytvideot ja podcastit valtaavat mediatilaa." },
        {
          id: "d",
          text: "Artikkelissa pohditaan, jääkö tulevaisuudessa tilaa perinteisille formaateille.",
        },
      ],
      correctAnswerIds: ["a", "c", "d"],
      source: {
        articleId: "sosiaalisen-median-logiikka-ja-uutismedia",
        page: "275",
      },
      explanation:
        "A vastaa aineistoa. C ja D löytyvät samasta kohdasta, jossa kirjoittajat pohtivat perinteisten formaattien asemaa lyhytvideoiden ja podcastien vallatessa mediatilaa. B kääntää aineistossa kuvatun kehityksen päinvastaiseksi.",
      learningPoint:
        "Kun tekstissä kuvataan muutosta, tarkista aina muutoksen suunta: mikä vie tilaa miltäkin.",
    },
  ],
} satisfies ValintakoeGExercise;
