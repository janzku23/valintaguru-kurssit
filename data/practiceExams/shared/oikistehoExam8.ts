import "server-only";
import type { PracticeExam } from "../types";

export const OIKISTEHO_EXAM_8_ARTICLE_URL =
  "https://www.edilex.fi/artikkelit/100019.pdf";

/**
 * Yhteinen Koe 8 OikisTeho-kurssille.
 *
 * Huom:
 * - Sama 2–4 vuorokauden valmistautumisohjeistus kuin muissa OikisTeho-kokeissa.
 * - Pitkä ohjeistus EI ole description-kentässä.
 * - intro sisältää näkymässä renderöitävän ohjeistuksen.
 * - "Jätän vastaamatta" poistetaan lähdevaihtoehdoista, koska
 *   PracticeExamRunner näyttää erillisen neutraalin "En osaa sanoa" -valinnan.
 */
export const oikisTehoExam8 = {
  id: "koe-8",
  version: 1,
  title: "Harjoitustentti 8",
  description:
    "60 minuutin ajastettu harjoitustentti, joka perustuu ennakkoon luettavaan akateemiseen artikkeliin.",
  durationMinutes: 60,

  articleUrl: OIKISTEHO_EXAM_8_ARTICLE_URL,

  intro: {
    eyebrow: "Oikeustieteen eriytyvä osio",
    title:
      "Näin suoritat oikeustieteen eriytyvän osion harjoitustentin",
    lead:
      "Harjoitustentin tarkoitus on simuloida aitoa pääsykoetilannetta. Tentti perustuu akateemiseen artikkeliin ja sisältää oikean kokeen rakennetta vastaavia kysymystyyppejä.",

    article: {
      label: "Koe 8:n ennakkomateriaali",
      title: "Lue artikkeli ennen harjoitustenttiä",
      description:
        "Avaa artikkeli alla olevasta painikkeesta ja tutustu siihen 2–4 vuorokauden ajan. Lue materiaali useaan otteeseen. Kun aloitat varsinaisen kokeen, sulje artikkeli pois näkyvistä.",
      url: OIKISTEHO_EXAM_8_ARTICLE_URL,
      buttonText: "Avaa artikkeli",
    },

    instructionsTitle:
      "Miten harjoitustentti suoritetaan?",

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
      id: "koe-8-kysymykset",
      title: "Koe 8 – Aggressiivinen verosuunnittelu",
      questions: [
        {
          id: "oikis-koe-8-q1",
          prompt: "Mikä on artikkelin mukaan \"aggressiivisen verosuunnittelun\" keskeisin tunnusmerkki?",
          options: [
            {
              id: "a",
              text: "Verolainsäädännön suora rikkominen ja veronkierto.",
            },
            {
              id: "b",
              text: "Verolainsäädännön kirjainta noudattava, mutta sen tarkoituksen vastainen toiminta veroedun saamiseksi.",
            },
            {
              id: "c",
              text: "Kansainvälisten verosopimusten noudattamatta jättäminen.",
            },
            {
              id: "d",
              text: "Yrityksen pyrkimys minimoida verot hallinnollisin keinoin.",
            },
          ],
          correctAnswerId: "b",
          explanation: "Artikkelissa todetaan, että aggressiivisella verosuunnittelulla tarkoitetaan lainsäädännön kirjaimen mukaista mutta sen tarkoituksen vastaista toimintaa, jolla tavoitellaan veroetuja, joita lainsäätäjä ei ole tarkoittanut annettavaksi (s. 3). “Kysymys on ennen kaikkea veropoliittisesta käsiteestä, jolla on haluttu nostaa keskusteluun verovelvollisten sinällään oikeudellisesti hyväksyttäviä verosuunnittelutoimia, jotka eivät ole verolainsäädännön tarkoituksen tai tavoitteen mukaisia tai niitä ei pidetä muuten hyväksyttävinä.”",
        },

        {
          id: "oikis-koe-8-q2",
          prompt: "Minkä lainsäädännön esitöissä aggressiivisen verosuunnittelun käsite on määritelty artikkelin mukaan?",
          options: [
            {
              id: "a",
              text: "Ei minkään",
            },
            {
              id: "b",
              text: "Poronhoitolain",
            },
            {
              id: "c",
              text: "Erämaalain",
            },
            {
              id: "d",
              text: "Kaivosmineraaliverolain",
            },
          ],
          correctAnswerId: "d",
          explanation: "“Tyypillisesti aggressiivisen verosuunnittelun käsitettä ei ole määritelty kotimaisessa lainvalmisteluaineistossa, vaikka aggressiiviseen verosuunnitteluun on viitattu viime vuosina useissa hallituksen esityksissä. Poikkeuksena on kaivosmineraaliverolain (3.3.2023/314) hallituksen esitys.” (s. 4)",
        },

        {
          id: "oikis-koe-8-q3",
          prompt: "Mitkä seuraavista ovat oikein?",
          options: [
            {
              id: "a",
              text: "Verosuunnittelun käsitettä ei käytetä unionin oikeudessa",
            },
            {
              id: "b",
              text: "Aggressiiviisen verosuunnittelun käsitettä ei käytetä verosopimuksissa",
            },
            {
              id: "c",
              text: "Aggressiiviisen verosuunnittelun käsitettä käytetään Suomen kansallisessa verolainsäädännössä",
            },
            {
              id: "d",
              text: "Verosuunnittelun käsitettä ei käytetä Suomen kansallisessa verolainsäädännössä.",
            },
          ],
          correctAnswerId: "a",
          correctAnswerIds: ["a", "b", "d"],
          explanation: "Verosuunnittelun tai aggressiivinen verosuunnittelun käsitteitä ei käytetä eikä niitä ole määritelty unionin oikeudessa, verosopimuksissa eikä Suomen kansallisessa verolainsäädännössä, joten ne eivät ole oikeudellisia (s. 3)",
        },

        {
          id: "oikis-koe-8-q4",
          prompt: "Mikä on yleinen veronkiertosäännös (GAAR)?",
          options: [
            {
              id: "a",
              text: "Säännös, joka kieltää kaikki yritysjärjestelyt.",
            },
            {
              id: "b",
              text: "Joustava säännös, jonka perusteella verotus voidaan toimittaa asiantilan todellisen luonteen mukaan, jos muoto ei vastaa tarkoitusta.",
            },
            {
              id: "c",
              text: "Säännös, joka koskee vain arvonlisäverotusta.",
            },
            {
              id: "d",
              text: "Laki, jolla määrätään veroparatiisit kielletyiksi.",
            },
          ],
          correctAnswerId: "b",
          explanation: "VML 28 § on Suomen yleinen veronkiertosäännös, jolla puututaan toimiin, joille on annettu asiantilan varsinaista luonnetta vastaamaton oikeudellinen muoto verosta vapautumiseksi. (s. 7). Huom! Sivulla 7 tämä pitää yhdistää alaviitteeseen, toki kyseiseen pykälään viitataan tekstissä useamman kerran. Tämä on siis aika vaikea kysymys, joka vaatii taitoa lukea hieman rivien välistä sekä poissulkea vaihtoehtoja.",
        },

        {
          id: "oikis-koe-8-q5",
          prompt: "Mitkä ovat hyvän verojärjestelmän ominaisuuksia artikkelin mukaan?",
          options: [
            {
              id: "a",
              text: "Oikeudenmukaisuus",
            },
            {
              id: "b",
              text: "Säännösten tarkka muoto",
            },
            {
              id: "c",
              text: "Ennakoitavuus",
            },
            {
              id: "d",
              text: "Oikeusvarmuus",
            },
          ],
          correctAnswerId: "c",
          correctAnswerIds: ["c", "d"],
          explanation: "Hyvän verojärjestelmän ominaisuuksiin kuuluvat kiistatta oikeusvarmuus ja ennakoitavuus (s. 24).",
        },

        {
          id: "oikis-koe-8-q6",
          prompt: "Miten EU-tuomioistuin (EUT) määrittelee puhtaasti keinotekoisen järjestelyn?",
          options: [
            {
              id: "a",
              text: "Järjestely, jolla ei ole lainkaan taloudellista todellisuutta tai liiketaloudellista perustetta.",
            },
            {
              id: "b",
              text: "Järjestely, joka on tehty vain osittain verosyistä.",
            },
            {
              id: "c",
              text: "Mikä tahansa ulkomaille tehty investointi.",
            },
            {
              id: "d",
              text: "Järjestely, jossa käytetään tietokonealgoritmeja.",
            },
          ],
          correctAnswerId: "a",
          explanation: "EUT:n oikeuskäytännössä (esim. Cadbury Schweppes) on vakiintunut kanta, että veronkiertosäännökset saavat rajoittaa perusvapauksia vain, jos kyse on puhtaasti keinotekoisista järjestelyistä (s. 17-18).",
        },

        {
          id: "oikis-koe-8-q7",
          prompt: "Oikein vai väärin: Aggressiivinen verosuunnittelu on legaalitermi.",
          options: [
            {
              id: "a",
              text: "Oikein",
            },
            {
              id: "b",
              text: "Väärin",
            },
          ],
          correctAnswerId: "b",
          explanation: "Aggressiivinen verosuunnittelu ei ole legaalitermi (s. 3). Muistahan lukea myös otsikot huolella varsinaisesta ennakkoaineistosta.",
        },

        {
          id: "oikis-koe-8-q8",
          prompt: "Mikä on suhteellisuusperiaatteen merkitys veronkiertosäännösten säädännössä?",
          options: [
            {
              id: "a",
              text: "Veroprosentin on oltava suhteessa tuloon.",
            },
            {
              id: "b",
              text: "Säännös ei saa rajoittaa perusvapauksia enempää kuin on välttämätöntä tavoitteen saavuttamiseksi.",
            },
            {
              id: "c",
              text: "Kaikkien veronmaksajien on saatava sama vähennys.",
            },
            {
              id: "d",
              text: "Veron on oltava suhteessa valtion menoihin.",
            },
          ],
          correctAnswerId: "b",
          explanation: "Suhteellisuusperiaate vaatii, että rajoitustoimenpiteet ovat tarkoituksenmukaisia eivätkä mene pidemmälle kuin on tarpeen (s. 16-17).",
        },

        {
          id: "oikis-koe-8-q9",
          prompt: "Mitä kirjoittaja tarkoittaa verokilpailulla?",
          options: [
            {
              id: "a",
              text: "Valtioiden pyrkimystä houkutella investointeja alhaisella verotuksella.",
            },
            {
              id: "b",
              text: "Verovirastojen välistä kilpailua asiakkaista.",
            },
            {
              id: "c",
              text: "Yritysten kilpailua verovähennyksistä.",
            },
            {
              id: "d",
              text: "Veronmaksajien yritystä maksaa mahdollisimman vähän veroa.",
            },
          ],
          correctAnswerId: "a",
          explanation: "Osa verosääntelyn aggressiivisen verosuunnittelun kannalta heikoista kohdista on syntynyt valtioiden tietoisen toiminnan tuloksena, mutta osa aggressiivisen verosuunnittelun mahdollistamista rakenteista on muodostunut huomaamatta, kun kansallista ja kansainvälistä verojärjestelmää on muokattu. Ensin mainitussa on tyypillisesti kysymys verokilpailun tuloksena syntyneistä sääntelymalleista, joilla valtiot pyrkivät houkuttelemaan yrityksiä ja myös luonnollisia henkilöitä sekä näiden sijoituksia tarjoamalla erilaisia veroetuja (s. 5).",
        },

        {
          id: "oikis-koe-8-q10",
          prompt: "Mikä on oikeusvarmuusperiaatteen keskeinen sisältö verotuksessa?",
          options: [
            {
              id: "a",
              text: "Verovelvollisella on oikeus saada liikaa maksetut veronsa takaisin.",
            },
            {
              id: "b",
              text: "Verotuksen on perustuttava lakiin ja oltava ennakoitavaa.",
            },
            {
              id: "c",
              text: "Tuomioistuinten on aina päätettävä verottajan eduksi epäselvissä tilanteissa.",
            },
            {
              id: "d",
              text: "Verolait on kirjoitettava molemmilla kotimaisilla kielillä, jotta ne ovat kaikkien kansalaisten saatavilla.",
            },
          ],
          correctAnswerId: "b",
          explanation: "Oikeusvarmuus edellyttää, että säädökset ovat selkeitä ja niiden soveltaminen on johdonmukaista (kappale 6.3, alkaa sivulta 24).",
        },

        {
          id: "oikis-koe-8-q11",
          prompt: "Mitä ovat erityiset veronkiertosäännökset (SAAR)?",
          options: [
            {
              id: "a",
              text: "Säännökset, jotka koskevat vain pörssiyhtiöitä.",
            },
            {
              id: "b",
              text: "Kohdennettuja säännöksiä, jotka on säädetty tiettyä tunnistettua veronkiertotapaa varten.",
            },
            {
              id: "c",
              text: "Säännökset, jotka on säädetty vain poikkeustilan aikana.",
            },
            {
              id: "d",
              text: "Verohallinnon antamat epäviralliset ohjeet.",
            },
          ],
          correctAnswerId: "b",
          explanation: "SAAR-säännökset (Specific Anti-Avoidance Rules) kohdistuvat tarkasti tiettyihin tilanteisiin, kuten korkovähennyksiin tai holding-yhtiöihin (s. 8)",
        },

        {
          id: "oikis-koe-8-q12",
          prompt: "Miten KHO suhtautuu aggressiiviseen verosuunnitteluun?",
          options: [
            {
              id: "a",
              text: "KHO:n ratkaisuissa on muutamia kertoja mainittu aggressiivinen verosuunnittelu.",
            },
            {
              id: "b",
              text: "KHO:n ratkaisuissa on useasti mainittu aggressiivinen verosuunnittelu.",
            },
            {
              id: "c",
              text: "KHO:n ratkaisuissa on kerran viitattu aggressiiviseen verosuunnitteluun.",
            },
            {
              id: "d",
              text: "KHO:n ratkaisuissa ei ole viitattu aggressiiviseen verosuunnitteluun.",
            },
          ],
          correctAnswerId: "d",
          explanation: "Korkeimman hallinto-oikeuden tai hallinto-oikeuksien julkaistussa oikeuskäytännössä ei ole viitattu aggressiiviseen verosuunnitteluun (s. 5).",
        },

        {
          id: "oikis-koe-8-q13",
          prompt: "Mikä on BEPS-hanke?",
          options: [
            {
              id: "a",
              text: "Suomen sisäinen verouudistus.",
            },
            {
              id: "b",
              text: "OECD:n hanke veropohjan rapautumisen ja voitonsiirtojen estämiseksi.",
            },
            {
              id: "c",
              text: "Euroopan keskuspankin hanke inflaation torjumiseksi.",
            },
            {
              id: "d",
              text: "Yksityisten konsulttiyritysten liitto.",
            },
          ],
          correctAnswerId: "b",
          explanation: "BEPS (Base Erosion and Profit Shifting) on OECD:n johtama laaja kansainvälinen hanke aggressiivisen verosuunnittelun suitsimiseksi (s. 3).",
        },

        {
          id: "oikis-koe-8-q14",
          prompt: "Mitkä seuraavista ovat verosuunnittelun tunnuspiirteitä?",
          options: [
            {
              id: "a",
              text: "Veroriskien ennakointia",
            },
            {
              id: "b",
              text: "Verotuksen laillisuuden tarkastelua",
            },
            {
              id: "c",
              text: "Veroriskien hallintaa",
            },
            {
              id: "d",
              text: "Päätöksentekoa, jossa otetaan huomioon veroseuraamukset",
            },
          ],
          correctAnswerId: "a",
          correctAnswerIds: ["a", "c", "d"],
          explanation: "Verosuunnittelun tunnuspiirteitä: Verosuunnitteluna on pidetty liiketoimintaan ja muuhun taloudelliseen toimintaan liittyvää päätöksentekoa, jossa otetaan huomioon toimeen liittyvien muiden taloudellisten ja oikeudellisten reunaehtojen lisäksi veroseuraamukset. Kysymys on toimintaan liittyvien veroriskien ennakoinnista ja hallinnasta. Tällainen toiminta on luonnollinen osa kaikkien yritysten ja luonnollisten henkilöiden taloudellista päätöksentekoa. Verosuunnitteluun liittyy myös eri toimintavaihtoehtojen veroseuraamusten vertailu (s. 5)",
        },

        {
          id: "oikis-koe-8-q15",
          prompt: "Mitä artikkelissa sanotaan verosuunnittelun hyväksyttävyydestä?",
          options: [
            {
              id: "a",
              text: "Kaikki veron minimointi on rikollista.",
            },
            {
              id: "b",
              text: "Verovelvollisella on oikeus valita edullisin vaihtoehto, jos se ei ole keinotekoinen.",
            },
            {
              id: "c",
              text: "Vain pienituloisilla on oikeus verosuunnitteluun.",
            },
            {
              id: "d",
              text: "Hyväksyttävyys riippuu yrityksen koosta.",
            },
          ],
          correctAnswerId: "b",
          explanation: "Kirjallisuudessa ja myös oikeuskäytännössä on hyväksytty se lähtökohta, että verovelvollisella on oikeus valita erilaisista toimintavaihtoehdoista verotuksellisesti edullisin menettely. (s. 5)",
        },

        {
          id: "oikis-koe-8-q16",
          prompt: "Mikä on korkovähennysrajoitusten tarkoitus?",
          options: [
            {
              id: "a",
              text: "Estää pankkeja saamasta voittoa.",
            },
            {
              id: "b",
              text: "Estää verosuunnittelukeinona toimiva voittojen siirtäminen maasta toiseen korkomenojen avulla.",
            },
            {
              id: "c",
              text: "Kannustaa yrityksiä ottamaan enemmän velkaa.",
            },
            {
              id: "d",
              text: "Laskea yleistä korkotasoa.",
            },
          ],
          correctAnswerId: "b",
          explanation: "Sääntelyn tarkoituksena on aggressiivisen verosuunnittelun torjuminen. Mietinnössä todetaan, että koron vähennysoikeuden rajoitus on laajavaikutteinen ja se kattaa myös tilanteet, joissa ei ole kysymys aggressiivisesta verosuunnittelusta. Sääntely kohdistuu siten myös aloille ja toimijoihin, joiden korkojen vähennysoikeutta ei lähtökohtaisesti ole tarvetta rajoittaa (s. 15).",
        },

        {
          id: "oikis-koe-8-q17",
          prompt: "Oikein vai väärin: Aggresiivisen verosuunnittelun torjuntaa säätelee muun muassa laki suurten konsernien vähimmäisverosta.",
          options: [
            {
              id: "a",
              text: "Oikein",
            },
            {
              id: "b",
              text: "Väärin",
            },
          ],
          correctAnswerId: "a",
          explanation: "Laki suurten konsernien vähimmäisverosta liittyy muun ohessa aggressiivisen verosuunnittelun torjuntaan (s. 9).",
        },

        {
          id: "oikis-koe-8-q18",
          prompt: "Mitkä seuraavista väittämistä on oikein?",
          options: [
            {
              id: "a",
              text: "Tuloveroraportointia koskevat säännökset ovat osakeyhtiölaissa.",
            },
            {
              id: "b",
              text: "Tuloveroraportti tulee laatia, mikäli konsernissa on yli 100 työntekijää.",
            },
            {
              id: "c",
              text: "Tuloveroraportti tulee laatia, jos konsernin liikevaihto ylittää 750 miljoonaa euroa.",
            },
            {
              id: "d",
              text: "Raportointivelvollisuus ei koske pankkialaa.",
            },
          ],
          correctAnswerId: "c",
          correctAnswerIds: ["c", "d"],
          explanation: "Kirjanpitolain (30.12.1997/1336) 7 b lukuun on otettu maakohtaista tuloveroraportointia koskevat säännökset, joita sovelletaan 22.5.2024 ja sen jälkeen alkaviin tilikausiin. Sääntely perustuu tilinpäätösdirektiivin muuttamisesta 24.11.2021 annettuun direktiiviin. Sääntelyn perusteella konsernin perimmäisen emoyhtiön tulee laatia, julkaista ja asettaa saataville maakohtainen tuloveroraportti, jos konsernin liikevaihto ylittää 750 miljoonaa euroa. Sama koskee itsenäistä yhtiötä. Raportointivelvollisuus ei koske pankkialaa, jota koskevat kuitenkin pitkälti samanlaiset velvollisuudet luottolaitostoiminnasta annetun lain säännösten mukaisesti (s. 14).",
        },

        {
          id: "oikis-koe-8-q19",
          prompt: "Milloin kirjanpitolaki on säädetty?",
          options: [
            {
              id: "a",
              text: "1976",
            },
            {
              id: "b",
              text: "1988",
            },
            {
              id: "c",
              text: "1997",
            },
            {
              id: "d",
              text: "2004",
            },
          ],
          correctAnswerId: "c",
          explanation: "Sivulla 14 kerrotaan asia, mainitaan “Kirjanpitolain (30.12.1997/1336) 7 b lukuun on..”. Vuosiluku tulee ilmi lain numerosta.",
        },

        {
          id: "oikis-koe-8-q20",
          prompt: "Mitä tarkoitetaan artikkelilla PPT:lla?",
          options: [
            {
              id: "a",
              text: "Verosopimusten väärinkäytösten vastaista määräystä",
            },
            {
              id: "b",
              text: "Verotuksen on oltava täysin näkymätöntä.",
            },
            {
              id: "c",
              text: "Kaikkia tuotteita on verotettava samalla prosentilla.",
            },
            {
              id: "d",
              text: "Verosopimukset koskevat vain niitä allekirjoittaneita maita.",
            },
          ],
          correctAnswerId: "a",
          explanation: "Verosopimusten väärinkäytösten vastainen määräys (PPT, principal purpose test) on puolestaan verosopimusten tulkintaa koskeva yleinen veron kiertämistä estävä sääntö (s. 8).",
        },

        {
          id: "oikis-koe-8-q21",
          prompt: "Mitä seuraavista voidaan artikkelin mukaan tavoitella aggressiivisella verosuunnittelulla kansainvälisissä tilanteissa?",
          options: [
            {
              id: "a",
              text: "Veron kiertämistä harmaalla taloudella.",
            },
            {
              id: "b",
              text: "Aiheettomia kaksinkertaisia vähennyksiä.",
            },
            {
              id: "c",
              text: "Liikevoiton piilottamista siirtämällä varat yrityksen omistajan omalle pankkitilille.",
            },
            {
              id: "d",
              text: "Tulon verottamatta jäämistä niin lähdevaltiossa kuin asuinvaltiossa.",
            },
          ],
          correctAnswerId: "b",
          correctAnswerIds: ["b", "d"],
          explanation: "Erityisesti kansainvälisissä tilanteissa aggressiivisella verosuunnittelulla voidaan tavoitella muun muassa aiheettomia kaksinkertaisia vähennyksiä (double dip) tai tulon verottamatta jäämistä niin lähdevaltiossa kuin asuinvaltiossa (double non taxation (s. 6).",
        },

        {
          id: "oikis-koe-8-q22",
          prompt: "Oikein vai väärin: Tatkaisussa KKO 2017:78 kohdeyhtiön osakkeiden hankintamenon kasvua pidettiin järjestelystä johtuvana tavanomaisena seuraamuksena",
          options: [
            {
              id: "a",
              text: "Oikein",
            },
            {
              id: "b",
              text: "Väärin",
            },
          ],
          correctAnswerId: "b",
          explanation: "Sivulta 22 ilmenee, että kyseessä on ratkaisu KHO 2017:78.",
        },

        {
          id: "oikis-koe-8-q23",
          prompt: "Mitkä seuraavista unionin ratkaisuista koskevat aggressiivista verosuunnittelua?",
          options: [
            {
              id: "a",
              text: "C-852/21, Provic",
            },
            {
              id: "b",
              text: "C-484/19, Lexel",
            },
            {
              id: "c",
              text: "C-268/23, Rench",
            },
            {
              id: "d",
              text: "C-623/22, Belgian Association of Tax Laywers",
            },
          ],
          correctAnswerId: "b",
          correctAnswerIds: ["b", "d"],
          explanation: "Tapaukset esitellään sivulla 16.",
        },

        {
          id: "oikis-koe-8-q24",
          prompt: "Oikein vai väärin: Suomen verolainsäädäntö on immuuni aggressiiviselle verosuunnittelulle.",
          options: [
            {
              id: "a",
              text: "Oikein",
            },
            {
              id: "b",
              text: "Väärin",
            },
          ],
          correctAnswerId: "b",
          explanation: "Tämä ei kuitenkaan tarkoita, että Suomen verolainsäädäntö olisi immuuni aggressiiviselle verosuunnittelulle, vaan verolainsäädäntöön sisältyy erilaisia rakenteellisia heikkouksia, joita voidaan käyttää hyödyksi aggressiivisessa verosuunnittelussa (s. 18)",
        },

        {
          id: "oikis-koe-8-q25",
          prompt: "Oikein vai väärin: Elinkeinotoimintaan liittyvä korkomeno on maksajalleen vähennyskelpoinen meno.",
          options: [
            {
              id: "a",
              text: "Oikein",
            },
            {
              id: "b",
              text: "Väärin",
            },
          ],
          correctAnswerId: "a",
          explanation: "Elinkeinotoimintaan liittyvä korkomeno on maksajalleen vähennyskelpoinen meno (s. 19).",
        },

      ],
    },
  ],
} satisfies Omit<PracticeExam, "courseId">;
