import type { ValintakoeGExercise } from "./types";
/**
 * Harjoitus 1: uusimman tehtävädokumentin tehtävät 1–10.
 * Lähdelainaukset on säilytetty explanation-kentissä.
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
  articleUrl:
    "https://journal.fi/mediaviestinta/article/view/162494/105986",
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
        "Kysymyksessä asia ilmaistaan hieman eri sanoin kuin aineistossa. Aineiston ilmaus ”viitataan” on muutettu muotoon ”tarkoitetaan”, mutta väitteen merkitys ei muutu.\n\nLähdelainaus: ”Sosiaalisen median logiikalla viitataan sosiaalisen median alustojen toimintaa ja sisällöntuotantoa ohjaaviin periaatteisiin.”",
      learningPoint:
        "Älä ratkaise kysymystä vain vertaamalla yksittäisiä sanoja. Tarkista, tarkoittavatko kysymys ja aineisto sisällöllisesti samaa asiaa, vaikka asia olisi kirjoitettu eri tavalla.",
    },
    {
      id: "g-h1-q2",
      questionType: "single",
      difficulty: "easy",
      categoryId: 1,
      prompt:
        "Mikä seuraavista pitää artikkelin mukaan paikkansa Ylen toiminnasta?",
      options: [
        { id: "a", text: "Yle pyrkii siirtämään mahdollisimman suuren osan tuotannostaan sosiaalisen median alustoille." },
        { id: "b", text: "Yle pyrkii keskittämään tuotantoaan mahdollisimman paljon omille alustoilleen." },
        { id: "c", text: "Yle on lopettanut sosiaalisen median käytön ja keskittynyt omiin alustoihinsa." },
        { id: "d", text: "Yle käyttää sosiaalista mediaa ensisijaisesti tavoittaakseen yleisöt, jotka se tavoittaa jo television ja radion kautta." },
      ],
      correctAnswerIds: ["b"],
      source: {
        articleId: "sosiaalisen-median-logiikka-ja-uutismedia",
        page: "274",
        section: "Tasapainoilua ja jäljittelyä somen logiikalla",
      },
      explanation:
        "Aineisto kertoo suoraan Ylen pyrkivän keskittämään tuotantoaan omille alustoilleen. B vastaa tätä tietoa suoraan. Tehtävässä ei tarvitse yhdistellä useita tekstikohtia tai tehdä pitkälle meneviä päätelmiä.\n\nLähdelainaus: ”Isossa kuvassa kuitenkin vaikuttaa siltä, että Yle pyrkii keskittämään tuotantoaan mahdollisimman paljon omille alustoilleen.”",
      learningPoint:
        "Poimi kysymyksestä yksilöllinen hakusana, paikanna oikea kohta aineistosta ja varmista vastaus sitä ympäröivistä virkkeistä.",
    },
    {
      id: "g-h1-q3",
      questionType: "true_false",
      difficulty: "easy",
      categoryId: 7,
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
        "Aineistossa havainto koskee rajattua kohdejoukkoa. Yle pyrkii tavoittamaan erityisesti niitä, joita sen muut kanavat eivät tavoita. Kysymyksessä kohdejoukoksi on vaihdettu kaikki suomalaiset yleisöt.\n\nAineisto: erityisesti ne, joita muut kanavat eivät tavoita\nKysymys: kaikki suomalaiset yleisöt\n\nLähdelainaus: ”Yle pyrkii omalla toiminnallaan tavoittamaan somen kautta erityisesti ne, joita Ylen muut kanavat [...] eivät tavoita.”",
      learningPoint:
        "Tarkista aina, ketä tai mitä aineistossa esitetty tieto koskee. Oikeakin tieto muuttuu vääräksi, jos se yhdistetään väärään kohteeseen tai ryhmään.",
    },
    {
      id: "g-h1-q4",
      questionType: "single",
      difficulty: "easy",
      categoryId: 7,
      prompt: "Mikä seuraavista on EPÄTOSI?",
      options: [
        { id: "a", text: "Yli puolet suomalaisnuorista seuraa uutisia TikTokin kautta." },
        { id: "b", text: "Noin kolmasosa suomalaisnuorista seuraa uutisia Instagramissa." },
        { id: "c", text: "Nuoret kohtaavat sosiaalisessa mediassa uutistietoa myös sattumanvaraisesti muun sisällön joukossa." },
        { id: "d", text: "Yli puolet suomalaisnuorista seuraa uutisia Instagramissa." },
      ],
      correctAnswerIds: ["d"],
      source: {
        articleId: "sosiaalisen-median-logiikka-ja-uutismedia",
        page: "275",
        section: "Sisältösekaannus ja uutismedian tunnistettavuuden haaste",
      },
      explanation:
        "Väitteessä käytetty määrätieto ”yli puolet” löytyy aineistosta, mutta se kuuluu TikTokiin. Kysymyksessä sama tieto on yhdistetty Instagramiin.\n\nTämä tekee vaihtoehdosta uskottavan, koska sekä Instagram että kyseinen määrätieto ovat aineistosta tuttuja. Ratkaisevaa on tarkistaa, mihin kohteeseen tieto kuuluu.\n\nLähdelainaus: ”Yli puolet suomalaisnuorista seuraa uutisia TikTokin kautta [...] ja noin kolmasosa Instagramissa...”",
      learningPoint:
        "Älä tarkista vain sitä, löytyykö tieto aineistosta. Tarkista myös, mihin henkilöön, ryhmään, alustaan tai muuhun kohteeseen tieto liittyy.",
    },
    {
      id: "g-h1-q5",
      questionType: "single",
      difficulty: "easy",
      categoryId: 3,
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
        "Kysymys muistuttaa hyvin paljon aineiston alkuperäistä lausetta, mutta merkitys on käännetty vastakkaiseksi.\n\nAineisto: eivät tavanomaisesti hakeudu\nKysymys: hakeutuvat tavallisesti\n\nYksi kielto muuttaa koko väitteen merkityksen.\n\nLähdelainaus: ”Nuoret yleisöt eivät tavanomaisesti hakeudu sosiaalisen median pariin kuluttaakseen uutisia...”",
      learningPoint:
        "Tarkista erityisesti kiellot, verbit ja muut merkityksen suuntaa muuttavat sanat. Väite voi näyttää lähes samalta kuin aineisto, vaikka se tarkoittaisi päinvastaista asiaa.",
    },
    {
      id: "g-h1-q6",
      questionType: "true_false",
      difficulty: "easy",
      categoryId: 2,
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
        "Kysymys tiivistää aineiston pidemmän kuvauksen lyhyemmäksi väitteeksi. Sanamuoto ei ole täysin sama, mutta keskeinen merkitys säilyy.\n\nLähdelainaus: ”Sosiaalisen median muotokieltä mukaileva uutissisältö houkuttelee nuoria lukemaan uutisia, mutta aiheuttaa sisältösekaannusta eli vaikeutta erottaa uutissisältöjä sosiaalisen median muusta sisällöstä...”",
      learningPoint:
        "Selvitä ensin, mitä väitteessä todella sanotaan, ja vertaa sitä aineiston merkitykseen. Älä oleta, että oikean vastauksen pitäisi löytyä aineistosta täsmälleen samoilla sanoilla.",
    },
    {
      id: "g-h1-q7",
      questionType: "true_false",
      difficulty: "easy",
      categoryId: 7,
      prompt: "Ylen korttijuttuformaatti mukailee TikTokin toimintalogiikkaa.",
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
        "Väitteen rakenne vastaa aineistoa, mutta oikea alusta on vaihdettu toiseksi. Korttijuttuformaatti mukailee Instagramin, ei TikTokin, toimintalogiikkaa.\n\nLähdelainaus: ”Ylen omille alustoilleen kehittämä Instagramin toimintalogiikkaa mukaileva korttijuttu-formaatti...”",
      learningPoint:
        "Kun väite näyttää hyvin tutulta, tarkista erityisen huolellisesti nimet, henkilöt, organisaatiot, alustat ja muut kohteet. Oikea ominaisuus voi olla yhdistetty väärään kohteeseen.",
    },
    {
      id: "g-h1-q8",
      questionType: "single",
      difficulty: "easy",
      categoryId: 4,
      prompt:
        "Mikä seuraavista kuvaa oikein artikkelissa esitettyä pystyvideo ja vaakavideoformaattien suhdetta sisällölliseen yhteistekemiseen?",
      options: [
        { id: "a", text: "Pystyvideo vaikeutti yhteistekemistä somen ja verkon välillä, mutta vaakavideo helpotti sitä." },
        { id: "b", text: "Vaakavideo soveltui yhtä hyvin kuin pystyvideo somen ja verkon yhteiskäyttöön." },
        { id: "c", text: "Pystyvideo helpotti somen ja verkon yhteistekemistä, kun taas television vaakavideo ei juuri soveltunut niiden kanssa yhteiskäyttöön." },
        { id: "d", text: "Kumpaakaan videoformaattia ei voitu hyödyntää eri alustojen välillä." },
      ],
      correctAnswerIds: ["c"],
      source: {
        articleId: "sosiaalisen-median-logiikka-ja-uutismedia",
        page: "275",
        section: "Sisällöllistä yhteistekemistä käsittelevä kappale",
      },
      explanation:
        "Aineistossa pystyvideo yhdistetään helppoon yhteistekemiseen ja vaakavideo heikompaan yhteiskäyttöön. Esimerkiksi vaihtoehdossa A näiden kahden formaatin suhteet on vaihdettu keskenään.\n\nLähdelainaus: ”sisällöllinen yhteistekeminen oli helppoa someen ja verkkoon, koska molemmissa hyödynnetään pystyvideoformaattia. Television suosima vaakavideoformaatti ei sitä vastoin juurikaan soveltunut yhteiskäyttöön...”",
      learningPoint:
        "Kun kysymyksessä esiintyy kaksi toisiinsa liittyvää asiaa, tarkista niiden roolit erikseen. Älä tarkista vain sitä, löytyvätkö molemmat aineistosta. Tarkista myös, kumpaan ominaisuuteen tai seuraukseen kumpikin liittyy.",
    },
    {
      id: "g-h1-q9",
      questionType: "true_false",
      difficulty: "easy",
      categoryId: 6,
      prompt:
        "Vuoden 2022 Yle lain päivityksen jälkeen kaupalliset mediatoimijat alkoivat pelätä Ylen tekstipohjaisen sisällön aiheuttamaa epäreilua kilpailuasetelmaa.",
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
        "Sekä kaupallisten mediatoimijoiden pelko että vuoden 2022 lain päivitys ovat aineistosta oikein. Kysymyksessä niiden ajallinen järjestys on kuitenkin muutettu.\n\nAineistossa: pelko vaikutti lain päivittämiseen.\nKysymyksessä: pelko syntyi lain päivittämisen jälkeen.\n\nLähdelainaus: ”Vuonna 2022 päivitettyä Yle-lakia on ajanut vahvasti kaupallisten mediatoimijoiden pelko siitä, että tekstipohjaisella sisällöllään Yle on epäreilussa kilpailuasetelmassa...”",
      learningPoint:
        "Tarkista tapahtuman lisäksi myös sen ajankohta ja paikka tapahtumaketjussa. Kaksi oikeaa asiaa voivat muodostaa väärän väitteen, jos niiden ajallinen suhde on väärä.",
    },
    {
      id: "g-h1-q10",
      questionType: "multiple",
      difficulty: "easy",
      categoryId: 3,
      prompt: "Valitse kaikki artikkelin perusteella oikeat vaihtoehdot.",
      options: [
        { id: "a", text: "Uudempi media vie huomiota vanhalta medialta." },
        { id: "b", text: "Televisio vie artikkelin mukaan yhä enemmän huomiota sosiaaliselta medialta." },
        { id: "c", text: "Lyhytvideot ja podcastit valtaavat mediatilaa." },
        { id: "d", text: "Artikkelissa pohditaan, jääkö tulevaisuudessa tilaa perinteisille formaateille." },
      ],
      correctAnswerIds: ["a", "c", "d"],
      source: {
        articleId: "sosiaalisen-median-logiikka-ja-uutismedia",
        page: "275",
      },
      explanation:
        "A vastaa aineistossa kuvattua kehitystä. C ja D löytyvät samasta kohdasta, jossa käsitellään lyhytvideoiden ja podcastien kasvavaa asemaa sekä perinteisten formaattien tulevaisuutta.\n\nB on väärin, koska siinä kehityksen suunta on käännetty. Aineistossa uudempi media vie huomiota vanhalta medialta, ei päinvastoin.\n\nLähdelainaus: ”uudempi media (verkko ja sosiaalinen media) vie huomiota vanhalta medialta (televisio).”",
      learningPoint:
        "Kun aineistossa kuvataan muutosta, tarkista tarkasti sen suunta. Selvitä, mikä lisääntyy, mikä vähenee, mikä vahvistuu ja mikä menettää asemaansa. Älä vastaa vain sen perusteella, että kaikki kysymyksessä mainitut asiat löytyvät aineistosta.\n\nMuistisääntö: Tarkista aina, kulkeeko kysymyksen kuvaama muutos samaan suuntaan kuin aineistossa.",
    },
  ],
} satisfies ValintakoeGExercise;
