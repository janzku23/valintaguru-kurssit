import type { ValintakoeGExercise } from "./types";

/**
 * Harjoitus 2: uusimman tehtävädokumentin tehtävät 1–11.
 * Lähdelainaukset on säilytetty explanation-kentissä.
 */
export const valintakoeGExercise2Base = {
  id: "harjoitus-2",
  version: 1,
  courseId: "valintakoe-g",
  title: "Harjoitus 2 – Julkinen keskustelu Ylestä kaipaa analyyttistä tarkkuutta ja sivistysnäkökulmaa",
  description: "45 minuutin aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  durationMinutes: 45,
  difficulty: "easy",
  articleId: "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
  articleTitle: "Julkinen keskustelu Ylestä kaipaa analyyttistä tarkkuutta ja sivistysnäkökulmaa",
  articleUrl: "https://journal.fi/mediaviestinta/article/view/162494/105986",
  questions: [
    {
      id: "g-h2-q1",
      questionType: "single",
      difficulty: "easy",
      categoryId: 3,
      prompt: "Mikä seuraavista on EPÄTOSI artikkelissa esitetyn julkisen palvelun median yleisösuhteen perusteella?",
      options: [
        {
          id: "a",
          text: "Julkisen palvelun yleisradiotoiminnan tulisi palvella sosiaalisia ja kulttuurisia tavoitteita."
        },
        {
          id: "b",
          text: "Garnhamin mukaan julkisen palvelun median kehittämät sosiaaliset suhteet ovat poliittisia eivätkä taloudellisia."
        },
        {
          id: "c",
          text: "Julkisen palvelun median tulisi kohdella yleisöjään viime kädessä kuluttajina."
        },
        {
          id: "d",
          text: "Julkisen palvelun median suhtautuminen yleisöihin erottaa sen kaupallisista mediayrityksistä."
        },
        {
          id: "e",
          text: "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      correctAnswerIds: [
        "c"
      ],
      source: {
        articleId: "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "269",
        section: "kappale ”Kokoavasti julkisen palvelun yleisradiotoiminnan merkitys…”."
      },
      explanation: "Artikkelissa yleisöt asetetaan vastakkain kansalaisina ja kuluttajina. Julkisen palvelun median tulisi kohdella yleisöjään viime kädessä kansalaisina eikä kuluttajina. Vaihtoehto C kääntää tämän merkityksen vastakkaiseksi.\n\nLähdelainaus:\n”Toisin sanoen se kohtelee (tai sen tulisi kohdella) yleisöjään viime kädessä kansalaisina eikä kuluttajina.”",
      learningPoint: "Kiinnitä huomiota vastakohtiin ja kieltoihin. Väite voi näyttää hyvin tutulta, vaikka yksi käsite muuttaisi sen merkityksen päinvastaiseksi."
    },
    {
      id: "g-h2-q2",
      questionType: "true_false",
      difficulty: "easy",
      categoryId: 3,
      prompt: "Artikkelissa selostetun Hannu Niemisen katsauksen mukaan Yle lain vähittäiset muutokset ovat vieneet lakia markkinaehtoiselle medialle aiempaa epäedullisempaan suuntaan.",
      options: [
        {
          id: "tosi",
          text: "Tosi"
        },
        {
          id: "epatosi",
          text: "Epätosi"
        },
        {
          id: "skip",
          text: "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      correctAnswerIds: [
        "epatosi"
      ],
      source: {
        articleId: "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "265",
        section: "Yle lain muutoksia käsittelevä kohta."
      },
      explanation: "Artikkelissa kehityksen suunnaksi kuvataan markkinaehtoiselle medialle myönteisempi suunta. Kysymyksessä tämä muutetaan epäedullisemmaksi suunnaksi.\n\nLähdelainaus:\n”markkinaehtoiselle medialle myönteisempään suuntaan”",
      learningPoint: "Kun aineistossa kuvataan muutosta, tarkista mihin suuntaan kehitys tapahtuu. Pelkkä muutoksen tunnistaminen ei riitä."
    },
    {
      id: "g-h2-q3",
      questionType: "single",
      difficulty: "easy",
      categoryId: 2,
      prompt: "Mikä seuraavista kuvaa artikkelin mukaan julkisen palvelun kulttuuritarjonnan mahdollisuutta synnyttää yleisössä ennalta odottamattomia elämyksiä?",
      options: [
        {
          id: "a",
          text: "Tarjonta toteuttaa kokemuksia, joiden tarpeen yleisö osaa ilmaista jo ennen niiden kohtaamista."
        },
        {
          id: "b",
          text: "Tarjonta tuottaa kokemuksia, joiden haluttavuuden yleisö tuntee jo etukäteen aiemmasta tarjonnasta."
        },
        {
          id: "c",
          text: "Tarjonta vastaa elämyksiin, jotka yleisö on ennen niiden kokemista tunnistanut itselleen tarpeellisiksi."
        },
        {
          id: "d",
          text: "Tarjonta voi antaa kokemuksia, joita yleisö ei ennen niiden kohtaamista osaa tietää haluavansa."
        },
        {
          id: "e",
          text: "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      correctAnswerIds: [
        "d"
      ],
      source: {
        articleId: "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "268",
        section: "kokemushyödykkeitä käsittelevä kohta."
      },
      explanation: "Vaihtoehto D ilmaisee aineiston ajatuksen eri sanoin. Aineistossa olennaista on, ettei yleisö välttämättä pysty ennakolta tietämään haluavansa tiettyä kokemusta.\n\nLähdelainaus:\n”eli ne tuottavat sellaisia kokemuksia ja elämyksiä, joita yleisön edustajat eivät voi etukäteen edes tietää haluavansa.”",
      learningPoint: "Älä etsi vain samoja sanoja. Selvitä, tarkoittavatko vaihtoehto ja aineisto samaa asiaa, vaikka asia olisi muotoiltu eri tavalla."
    },
    {
      id: "g-h2-q4",
      questionType: "single",
      difficulty: "easy",
      categoryId: 11,
      prompt: "Voiko artikkelin kansalaisluottamusta koskevan kuvauksen perusteella sanoa, että vahvasti Yleen instituutiona luottavien ulkopuolelle jäävä joukko on kansalaisten vähemmistö?",
      options: [
        {
          id: "kylla",
          text: "Kyllä"
        },
        {
          id: "ei",
          text: "Ei"
        },
        {
          id: "skip",
          text: "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      correctAnswerIds: [
        "kylla"
      ],
      source: {
        articleId: "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "267",
        section: "kansalaisaloitetta ja kyselyjä käsittelevä kohta."
      },
      explanation: "Jos vahvasti Yleen luottavat muodostavat suuren enemmistön, tämän joukon ulkopuolelle jäävät muodostavat vähemmistön.\nTästä ei kuitenkaan seuraa, että kaikki vähemmistöön kuuluvat eivät luottaisi Yleen lainkaan. He eivät vain kuulu vahvasti luottavien ryhmään.\n\nLähdelainaus:\n”kyselyjen perusteella kansalaisten suuri enemmistö luottaa edelleen vahvasti Yleen instituutiona”",
      learningPoint: "Mieti tarkasti, mitä aineistossa esitetystä tiedosta seuraa loogisesti. Ryhmän ulkopuolelle jääminen ei automaattisesti tarkoita vastakkaiseen ryhmään kuulumista."
    },
    {
      id: "g-h2-q5",
      questionType: "multiple",
      difficulty: "easy",
      categoryId: 7,
      prompt: "Mitkä seuraavista yhdistävät Yleä koskevan näkemyksen artikkelissa mainittuun oikeaan esittäjään? Valitse kaikki oikeat vaihtoehdot.",
      options: [
        {
          id: "a",
          text: "Mikko Alkio katsoo Ylen ajavan vasemmistolaista ja feminististä agendaa."
        },
        {
          id: "b",
          text: "Monet perussuomalaisten kansanedustajat katsovat Ylen ajavan vasemmistolaista ja feminististä agendaa."
        },
        {
          id: "c",
          text: "Mikko Alkio katsoo Ylen toiminnan heikentävän yksityisten mediayritysten taloudellisia selviytymismahdollisuuksia."
        },
        {
          id: "d",
          text: "Monet perussuomalaisten kansanedustajat katsovat Ylen toiminnan heikentävän yksityisten mediayritysten taloudellisia selviytymismahdollisuuksia."
        },
        {
          id: "e",
          text: "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      correctAnswerIds: [
        "b",
        "c"
      ],
      source: {
        articleId: "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "266",
        section: "peräkkäiset kappaleet ”Näissä kamppailuissa…” ja ”Toinen tekijä…”."
      },
      explanation: "Molemmat näkemykset löytyvät artikkelista, mutta ne kuuluvat eri esittäjille. Taloudellisia selviytymismahdollisuuksia koskeva näkemys yhdistetään Mikko Alkioon. Vasemmistolaista ja feminististä agendaa koskeva näkemys yhdistetään moniin perussuomalaisten kansanedustajiin.\nA ja D vaihtavat näkemysten esittäjät keskenään.\n\nLähdelainauset:\n”Mikko Alkio (2023) toteaa, että Yleisradion toiminta heikentää yksityisten mediayritysten mahdollisuuksia selvitä taloudellisesti”\n”monien perussuomalaisten kansanedustajien mukaan Yle ajaa vasemmistolaista ja feminististä agendaa”",
      learningPoint: "Tarkista sekä väitteen sisältö että se, kuka asian aineistossa esittää. Oikea tieto muuttuu vääräksi, jos se liitetään väärään henkilöön tai lähteeseen."
    },
    {
      id: "g-h2-q6",
      questionType: "single",
      difficulty: "easy",
      categoryId: 6,
      prompt: "Mikä seuraavista on EPÄTOSI loppuviitteessä mainitun Ylen julkaisun ”Uusi EU asetus edellyttää, että valtio turvaa Ylen riippumattomuuden” ajoituksen perusteella?",
      options: [
        {
          id: "a",
          text: "Julkaisun alkuperäiseksi päivämääräksi on merkitty 20.12.2024."
        },
        {
          id: "b",
          text: "Julkaisun lukupäiväksi on merkitty 10.6.2025."
        },
        {
          id: "c",
          text: "Julkaisun alkuperäiseksi päivämääräksi on merkitty 22.5.2024."
        },
        {
          id: "d",
          text: "Julkaisun päivityspäiväksi on merkitty 20.12.2024."
        },
        {
          id: "e",
          text: "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      correctAnswerIds: [
        "a"
      ],
      source: {
        articleId: "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "271",
        section: "loppuviite 3."
      },
      explanation: "Päivämäärä 20.12.2024 löytyy aineistosta, mutta se tarkoittaa päivityspäivää, ei alkuperäistä julkaisupäivää.\nAlkuperäinen julkaisu: 22.5.2024\nPäivitys: 20.12.2024\nLukupäivä: 10.6.2025\n\nLähdelainaus:\n”Yle 22.5.2024 (päivitetty 20.12.2024). Luettu 10.6.2025.”",
      learningPoint: "Tarkista päivämäärän lisäksi, mitä tapahtumaa kyseinen päivämäärä kuvaa. Oikea päivämäärä väärän tapahtuman yhteydessä tekee väitteestä väärän."
    },
    {
      id: "g-h2-q7",
      questionType: "true_false",
      difficulty: "easy",
      categoryId: 1,
      prompt: "Journalistiliiton artikkelissa kuvattu huoli koskee säästöjen kohdentumista Ylen sisältöihin ja media ammattilaisten työhön.",
      options: [
        {
          id: "oikein",
          text: "Oikein"
        },
        {
          id: "vaarin",
          text: "Väärin"
        },
        {
          id: "skip",
          text: "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      correctAnswerIds: [
        "oikein"
      ],
      source: {
        articleId: "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "268",
        section: "kappale ”Kaiken kaikkiaan viime vuosien Yle keskustelua…”."
      },
      explanation: "Kysymyksessä mainitaan samat kaksi säästöjen kohdetta kuin aineistossa: sisällöt ja media ammattilaisten työ. Tieto voidaan tarkistaa suoraan kyseisestä kohdasta.\n\nLähdelainaus:\n”Journalistiliitto on ilmaissut huolensa siitä, että yhtiö on etsinyt säästöjä niin voimallisesti sisällöistä ja media-ammattilaisten työstä.”",
      learningPoint: "Paikanna kysymyksessä mainittu toimija ja tarkista aineistosta täsmällisesti, mitä hänen tai organisaation kerrotaan sanoneen. Jos väitteessä on useita osia, tarkista ne kaikki."
    },
    {
      id: "g-h2-q8",
      questionType: "true_false",
      difficulty: "easy",
      categoryId: 2,
      prompt: "Riku Neuvosen ehdottamiin keinoihin kuuluvat henkilöstön edustajien aseman toteaminen lainsäädännössä sekä selkeä kiintiö Ylen hallintoneuvoston ulkopuolisille jäsenille.",
      options: [
        {
          id: "tosi",
          text: "Tosi"
        },
        {
          id: "epatosi",
          text: "Epätosi"
        },
        {
          id: "skip",
          text: "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      correctAnswerIds: [
        "tosi"
      ],
      source: {
        articleId: "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "267",
        section: "kappale ”Myös julkisoikeuden professori Riku Neuvonen…”."
      },
      explanation: "Molemmat kysymyksessä mainitut keinot löytyvät aineistosta. Niiden järjestys on kysymyksessä erilainen, mutta järjestyksen vaihtaminen ei muuta niiden merkitystä.\n\nLähdelainaus:\n”selkeä kiintiö [Ylen] hallintoneuvoston ulkopuolisille jäsenille ja henkilöstön edustajien aseman toteaminen lainsäädännössä”",
      learningPoint: "Vertaa väitettä aineiston merkitykseen kokonaisuutena. Asioiden esittämisjärjestys voi muuttua ilman, että itse väite muuttuu. Ratkaisevaa on, säilyykö sisältö samana."
    },
    {
      id: "g-h2-q9",
      questionType: "multiple",
      difficulty: "easy",
      categoryId: 2,
      prompt: "Mitkä seuraavista tiivistävät oikein artikkelin perusteluja julkisen palvelun median merkityksestä poliittisten ja ekologisten kriisien yhteydessä? Valitse kaikki oikeat vaihtoehdot.",
      options: [
        {
          id: "a",
          text: "Kriisien ratkaiseminen edellyttää kansalaisia, joilla on monipuoliset tiedolliset ja kulttuuriset valmiudet."
        },
        {
          id: "b",
          text: "Julkisen palvelun median panosta avoimeen julkisuuteen ja demokraattiseen toimintakykyyn ehdotetaan tuettavaksi juridisin keinoin."
        },
        {
          id: "c",
          text: "Kriisien ratkaisemisessa kansalaisten tiedollisten valmiuksien tulisi korvata heidän kulttuuriset valmiutensa."
        },
        {
          id: "d",
          text: "Kirjassa ehdotetaan käytänteitä, joilla Ylen moniäänisyyttä ja kulttuurista arvoa voidaan kehittää."
        },
        {
          id: "e",
          text: "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      correctAnswerIds: [
        "a",
        "b",
        "d"
      ],
      source: {
        articleId: "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "269",
        section: "kappale ”Nämä havainnot sisältävät laajoja yhteiskunnallisia ulottuvuuksia.”"
      },
      explanation: "A tiivistää aineiston ajatuksen kansalaisten tarvitsemista tiedollisista ja kulttuurisista valmiuksista. B ja D tiivistävät samassa yhteydessä esitettyjä keinoja.\nC on väärin, koska aineistossa tiedollisia ja kulttuurisia valmiuksia ei aseteta toistensa vaihtoehdoiksi. Molempia tarvitaan.\n\nLähdelainauset:\n”Kirjassa ehdotetaan juridisia keinoja tämän tukemiseksi sekä käytänteitä, joilla Ylen moniäänisyyttä sekä kulttuurista arvoa voitaisiin jatkossa kehittää ja vahvistaa.”\n”joiden ratkaisuja ei voi kuvitella ilman kompetentteja, tiedollisesti ja kulttuurisesti mahdollisimman monipuolisesti resursoituja kansalaisia.”",
      learningPoint: "Kun vaihtoehto tiivistää useamman virkkeen sisältöä, vertaa sen kokonaismerkitystä aineistoon. Tarkista, ettei tiivistämisen yhteydessä poisteta olennaista asiaa tai muuteta asioiden välistä suhdetta."
    },
    {
      id: "g-h2-q10",
      questionType: "true_false",
      difficulty: "easy",
      categoryId: 9,
      prompt: "Artikkelin mukaan Fideszin vuoden 2010 vaalivoiton jälkeisessä Unkarin julkisen yleisradioyhtiön henkilöstömuutoksessa irtisanottiin täsmälleen 1 600 mediatyöntekijää.",
      options: [
        {
          id: "oikein",
          text: "Oikein"
        },
        {
          id: "vaarin",
          text: "Väärin"
        },
        {
          id: "skip",
          text: "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      correctAnswerIds: [
        "vaarin"
      ],
      source: {
        articleId: "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "266",
        section: "Unkaria käsittelevä kohta."
      },
      explanation: "Aineistossa määrä on yli 1 600, ei täsmälleen 1 600. Itse numero näyttää samalta, mutta määrää rajaava sana muuttaa tiedon.\n\nLähdelainaus:\n”irtisanoi yli 1 600 mediatyöntekijää maan julkisesta yleisradioyhtiöstä”",
      learningPoint: "Tarkista numeron lisäksi sitä määrittävät sanat. Esimerkiksi yli, alle, noin, lähes ja täsmälleen ovat osa määrällistä tietoa."
    },
    {
      id: "g-h2-q11",
      questionType: "single",
      difficulty: "easy",
      categoryId: 8,
      prompt: "Esittääkö kirjoittaja, että vastuu moniarvoisesta kulttuurista ja journalismista kuuluu yksinomaan Ylelle?",
      options: [
        {
          id: "kylla",
          text: "Kyllä"
        },
        {
          id: "ei",
          text: "Ei"
        },
        {
          id: "skip",
          text: "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      correctAnswerIds: [
        "ei"
      ],
      source: {
        articleId: "julkinen-keskustelu-ylesta-kaipaa-analyyttista-tarkkuutta-ja-sivistysnakokulmaa",
        page: "268",
        section: "viimeinen kappale."
      },
      explanation: "Artikkelissa Ylen lisäksi mainitaan muita toimijoita. Kysymyksen sana ”yksinomaan” tekisi vastuusta vain Ylelle kuuluvan, vaikka aineistossa sanotaan päinvastoin, ettei Yle ole yksin vastuussa.\n\nLähdelainaus:\n”Yle ei toki ole yksin vastuussa moniarvoisesta kulttuurista ja journalismista”",
      learningPoint: "Kiinnitä huomiota ehdottomiin sanoihin, kuten kaikki, aina, vain, yksinomaan, täysin ja ei koskaan. Tarkista, onko aineiston ilmaisu todella yhtä ehdoton kuin kysymyksessä"
    }
  ]
} satisfies ValintakoeGExercise;
