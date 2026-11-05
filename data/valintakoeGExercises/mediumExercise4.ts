import type { ValintakoeGExercise } from "./types";

/**
 * Keskivaikea harjoitus 4: käyttäjän toimittamat tehtävät 1–20.
 * Lähdeotteet ovat explanation-kentissä, hakuvinkit learningPoint-kentissä.
 */
export const valintakoeGMediumExercise4Base = {
  "id": "keskivaikea-harjoitus-4",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Keskivaikea harjoitus 4 – Huumori eduskunnan täysistunnossa",
  "description": "32 minuutin keskivaikea aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 32,
  "difficulty": "medium",
  "articleId": "huumori-eduskunnan-taysistunnossa",
  "articleTitle": "Huumori eduskunnan täysistunnossa",
  "articleUrl": "https://journal.fi/politiikka/article/view/136527",
  "questions": [
    {
      "id": "g-m4-q1",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Zareffin tutkimuksessa humoristisen lausahduksen määrittely perustui sekä puheenvuoroon että huumorin kohteeseen. Tämän vuoksi saman kansanedustajan yksittäisestä puheenvuorosta voitiin tunnistaa useampi humoristinen lausahdus, jos huumorin kohde vaihtui puheenvuoron aikana.",
      "options": [
        {
          "id": "a",
          "text": "Tosi"
        },
        {
          "id": "b",
          "text": "Epätosi"
        },
        {
          "id": "c",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "a"
      ],
      "source": {
        "articleId": "huumori-eduskunnan-taysistunnossa",
        "page": "145,",
        "section": "Aineisto ja tutkimuskysymykset"
      },
      "explanation": "Tutkimuksessa yksi humoristinen lausahdus tarkoittaa yhdessä puheenvuorossa yhteen kohteeseen kohdistuvaa huumoria. Siksi puheenvuorojen ja humorististen lausahdusten lukumäärät eivät välttämättä vastaa toisiaan. Epätosi olisi oikein, jos jokaisesta puheenvuorosta olisi voitu laskea enintään yksi lausahdus.\n\nLähde:\nS. 145, \"Aineisto ja tutkimuskysymykset\". Ratkaiseva lainaus: \"Yksittäinen puheenvuoro voi siis pitää sisällään useamman kuin yhden humoristisen lausahduksen\".",
      "learningPoint": "Tutkimuksessa käytetyn analyysiyksikön määritelmä täytyy yhdistää siihen, miten havaintoja lasketaan. Pelkkä käsitteen tunnistaminen ei riitä.\nHakuvinkki: Ctrl+F: yhdeksi humoristiseksi lausahdukseksi."
    },
    {
      "id": "g-m4-q2",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein tutkimuksen tuloksia suhteessa puolueiden huumorin käyttöä koskeviin hypoteeseihin?",
      "options": [
        {
          "id": "a",
          "text": "Perussuomalaiset erottuivat selvästi muista puolueista huumorin suhteellisessa käytössä, mutta keskustan huumorin käyttö jäi odotettua vähäisemmäksi."
        },
        {
          "id": "b",
          "text": "Tutkimuksessa oletettiin keskustan käyttävän eniten huumoria, mutta tulokset osoittivat perussuomalaisten käyttäneen sitä suhteellisesti eniten."
        },
        {
          "id": "c",
          "text": "Perussuomalaiset käyttivät määrällisesti eniten huumoria, mikä vahvisti hypoteesin niiden poikkeuksellisen runsaasta huumorin käytöstä suhteessa puheenvuoroihin."
        },
        {
          "id": "d",
          "text": "Huumorin runsaus vastasi tutkimuksen hypoteesia, mutta perussuomalaiset eivät erottuneet suhteellisessa käytössä erityisesti, kun taas keskusta erottui huumorin tiheydellä."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "d"
      ],
      "source": {
        "articleId": "huumori-eduskunnan-taysistunnossa",
        "page": "146 ja 152–153,",
        "section": "Aineisto ja tutkimuskysymykset"
      },
      "explanation": "D erottaa kaksi hypoteesia ja niiden tulokset. Huumoria käytettiin runsaasti, mutta perussuomalaiset eivät erottuneet suhteellisessa käytössä poikkeuksellisesti. Keskustan 0,67 humoristista lausahdusta puheenvuoroa kohden oli korkein useamman edustajan puolueista. A ja B vaihtavat puolueiden asemia. C sekoittaa absoluuttisen lausahdusmäärän ja suhteellisen käyttötiheyden.\n\nLähde:\nS. 146 ja 152–153, \"Aineisto ja tutkimuskysymykset\" sekä \"Havaintoja aineistosta: Huumoria käytetään paljon\". Sivulla 152 todetaan perussuomalaisten käyttömääristä: \"Tämä tutkimuksen hypoteesi siis osoittautui vääräksi.\"",
      "learningPoint": "Opiskelijan tulee yhdistää tutkimuksen hypoteesi oikeaan puolueeseen ja verrata sitä toteutuneeseen tulokseen. Samalla on erotettava kokonaismäärä suhteellisesta määrästä.\nHakuvinkki: Ctrl+F: hypoteesi siis osoittautui vääräksi ja 0,67."
    },
    {
      "id": "g-m4-q3",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Oikein vai väärin?\nArtikkelin mukaan eduskunnan täysistunnon tärkein merkitys on vaikuttaa suoraan valmisteltavien päätösten sisältöön, kun taas valiokunnissa korostuvat julkinen esiintyminen, medianäkyvyys ja kannattajien tavoittaminen.",
      "options": [
        {
          "id": "a",
          "text": "Oikein"
        },
        {
          "id": "b",
          "text": "Väärin"
        },
        {
          "id": "c",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "huumori-eduskunnan-taysistunnossa",
        "page": "143–144,",
        "section": "Puhe eduskunnan täysistunnossa"
      },
      "explanation": "Väittämä kääntää täysistunnon ja valiokuntien keskeiset tehtävät päinvastaisiksi. Täysistunnossa tehdään viralliset päätökset, mutta niiden sisältöön vaikutetaan artikkelin mukaan merkittävästi jo valmisteluvaiheessa. Täysistunnossa korostuvat julkinen argumentointi, poliittisten näkemysten esittäminen ja näkyvyyden saaminen.\n\nLähde:\nS. 143–144, \"Puhe eduskunnan täysistunnossa\". Sivulla 143 todetaan valiokunnissa tehtävän vaikuttamisen olevan monien kansanedustajien mukaan eduskuntatyön tärkeimpiä osia. Täysistunnon puheenvuoroilla taas tavoitellaan muun muassa näkyvyyttä.",
      "learningPoint": "Opiskelijan tulee verrata kahden parlamentaarisen toimintaympäristön rooleja. Erityisesti on huomattava ero päätöksen virallisen tekemisen ja sen sisällöllisen valmistelun välillä.\nHakuvinkki: Ctrl+F: valiokunnissa ja median."
    },
    {
      "id": "g-m4-q4",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin määritelmiä huumorista ja sen lähikäsitteistä? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Inkongruenssiteoriassa huumorin keskeinen piirre on odotuksen ja toteutuneen asiantilan välinen ristiriita, mutta kaikki ristiriidat eivät itsessään ole humoristisia."
        },
        {
          "id": "b",
          "text": "Ylemmyysteoriassa huumorin keskeinen piirre on kahden toisensa poissulkevan merkityksen nopea vaihtuminen, eikä huumorin kohteen asemalla ole olennaista merkitystä."
        },
        {
          "id": "c",
          "text": "Sarkasmi liittyy erityisesti huumorin kohteeseen ja pyrkimykseen halventaa sitä, kun taas ironiaa tarkastellaan muun muassa sanotun ja tarkoitetun sisällön ristiriidan kautta."
        },
        {
          "id": "d",
          "text": "Hyperbola tarkoittaa ilmaisun siirtämistä uuteen asiayhteyteen, kun taas metafora perustuu ilmeiseen liioitteluun."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "a",
        "c"
      ],
      "source": {
        "articleId": "huumori-eduskunnan-taysistunnossa",
        "page": "147–151,",
        "section": "Huumori"
      },
      "explanation": "A kuvaa inkongruenssiteorian perusajatusta ja sen rajausta. C erottaa sarkasmin kohteen merkityksen ironian rakenteellisista piirteistä. B liittää vitsin ja inkongruenssin rakenteen virheellisesti ylemmyysteoriaan. D vaihtaa metaforan ja hyperbolan määritelmät keskenään.\n\nLähde:\nS. 147–151, \"Huumori\", \"Ironia\", \"Huumorista erotettavat ilmiöt\" ja \"Huumorin kohteen merkitys: sarkasmi\". Sivulla 151 todetaan: \"sarkasmi liittyy sen kohteeseen\".",
      "learningPoint": "Tehtävässä tunnistetaan käsitteiden välisiä eroja. Väärissä vaihtoehdoissa esiintyy artikkelin oikeita määritelmiä, mutta ne on yhdistetty väärään käsitteeseen.\nHakuvinkki: Ctrl+F: inkongruenssiteoriat, ylemmyysteoriat ja hyperbola."
    },
    {
      "id": "g-m4-q5",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Kyllä vai ei?\nVoidaanko tutkimuksen perusteella päätellä, että kaikki eduskunnan täysistunnoissa käytetyt metaforat ja kärjistykset luokiteltiin humoristisiksi, jos ne sisälsivät kirjaimellisen ja tarkoitetun merkityksen välisen eron?",
      "options": [
        {
          "id": "a",
          "text": "Kyllä"
        },
        {
          "id": "b",
          "text": "Ei"
        },
        {
          "id": "c",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "huumori-eduskunnan-taysistunnossa",
        "page": "145–146 ja 150–151",
        "section": "Likikään kaikki metaforinen ja hyperbolinen ei kuitenkaan ole humoristista"
      },
      "explanation": "Metaforat ja hyperbolat voivat toimia huumorin aineksina, mutta niiden humoristisuus edellyttää riittävän inkongruentin rakenteen muodostumista. Tutkimuksessa osa metaforista ja kärjistyksistä rajattiin aineiston ulkopuolelle, koska ne eivät olleet humoristisia.\n\nLähde:\nS. 145–146 ja 150–151. Sivulla 150 todetaan: \"Likikään kaikki metaforinen ja hyperbolinen ei kuitenkaan ole humoristista\".",
      "learningPoint": "Opiskelijan pitää erottaa huumorissa mahdollisesti käytettävä kielellinen keino varsinaisesta huumorista. Väittämässä poistetaan artikkelin olennainen rajaus.\nHakuvinkki: Ctrl+F: Likikään kaikki ja inkongruenssia."
    },
    {
      "id": "g-m4-q6",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein tutkimusaineiston muodostamista ja täysistuntojen ajallista sijoittumista?",
      "options": [
        {
          "id": "a",
          "text": "Tutkimus käsitteli kolmea kesäkuun 2023 täysistuntoa, ja kaikki 420 mahdollisesti humoristista kohtaa hyväksyttiin lopulliseen aineistoon."
        },
        {
          "id": "b",
          "text": "Tutkimus käsitteli kesäkuun 2023 täysistuntoja, mutta lopullinen aineisto muodostettiin ennen verkkolähetystallenteiden ja pöytäkirjojen vertailua."
        },
        {
          "id": "c",
          "text": "Tutkimus käsitteli 21., 22. ja 27.6.2023 pidettyjä täysistuntoja, ja 420 mahdollisesti humoristisesta kohdasta hyväksyttiin lähiluvun jälkeen 283."
        },
        {
          "id": "d",
          "text": "Tutkimus käsitteli 21., 22. ja 27.6.2024 pidettyjä täysistuntoja, ja aineistosta poistettiin lähiluvussa 283 kohtaa."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "huumori-eduskunnan-taysistunnossa",
        "page": "144–145,",
        "section": "Aineisto ja tutkimuskysymykset"
      },
      "explanation": "C yhdistää oikeat tutkimuspäivät, alustavan havaintomäärän ja lopullisen aineiston. A jättää aineiston karsinnan huomioimatta. B vaihtaa aineiston keruun ja tarkastelun järjestyksen. D muuttaa tutkimusvuoden ja sekoittaa poistettujen sekä hyväksyttyjen havaintojen määrät.\n\nLähde:\nS. 144–145, \"Aineisto ja tutkimuskysymykset\". Sivulla 145 todetaan: \"Näistä karsiutui lähiluvussa pois 137, joten lopullinen aineisto koostuu 283 humoristisesta lausahduksesta.\"",
      "learningPoint": "Opiskelijan tulee yhdistää tutkimuksen ajallinen rajaus aineiston muodostamisen vaiheisiin ja tarkistaa myös lukumäärät.\nHakuvinkki: Ctrl+F: 420 kohtaa ja 21.6.."
    },
    {
      "id": "g-m4-q7",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä perusteluja sille, miksi juuri kesäkuun 2023 hallitusohjelmakeskustelut valittiin tutkimusaineistoksi? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Hallitusohjelman käsittelyyn odotettiin liittyvän voimakkaita vastakkainasetteluja, koska siinä käsiteltiin hallituksen koko toimikauden tavoitteita."
        },
        {
          "id": "b",
          "text": "Keskustelujen odotettiin olevan tavanomaista sovinnollisempia, koska istunnoissa käsiteltiin myös runsaasti rutiiniasioita."
        },
        {
          "id": "c",
          "text": "Keskustan ja perussuomalaisten kilpailu samoista äänestäjistä oli yksi poliittista jännitettä lisäävistä tekijöistä."
        },
        {
          "id": "d",
          "text": "Aineisto valittiin, koska aiemmat tutkimukset olivat jo osoittaneet juuri näiden kolmen istunnon sisältävän enemmän huumoria kuin muut täysistunnot."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "a",
        "c"
      ],
      "source": {
        "articleId": "huumori-eduskunnan-taysistunnossa",
        "page": "144–145,",
        "section": "Aineisto ja tutkimuskysymykset"
      },
      "explanation": "A vastaa aineiston valinnan perustelua: hallitusohjelma kokoaa hallituskauden tavoitteet ja tarjoaa siten vastakkainasetteluille otollisen tilanteen. C kuvaa yhtä jännitteen taustatekijää. B on väärin, koska istunnoissa ei käsitelty rutiiniasioita, vaan keskustelun oletettiin olevan kärjekästä. D muuttaa ennakko-oletuksen jo todistetuksi tutkimustulokseksi.\n\nLähde:\nS. 144–145, \"Aineisto ja tutkimuskysymykset\". Sivulla 144 todetaan, että \"erilaiset vastakkainasettelut näkyisivät retoriikassa erityisen voimakkaasti\". Samassa yhteydessä kuvataan keskustan vaalitappiota ja äänestäjien siirtymistä perussuomalaisille.",
      "learningPoint": "Opiskelijan tulee tunnistaa tutkimusaineiston valinnan perusteet ja erottaa ne tutkimuksessa myöhemmin tehdyistä havainnoista.\nHakuvinkki: Ctrl+F: Juuri nämä eduskunnan istunnot."
    },
    {
      "id": "g-m4-q8",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Tosi vai epätosi?\nTutkimuksessa huumorin tunnistaminen perustui ensisijaisesti sanotun rakenteiden analysointiin eikä yleisön nauruun. Tämän perusteella voidaan päätellä, että nauru oli tutkimuksessa kokonaan poissuljettu humoristisen tai sarkastisen viestinnän ilmenemismuotona.",
      "options": [
        {
          "id": "a",
          "text": "Tosi"
        },
        {
          "id": "b",
          "text": "Epätosi"
        },
        {
          "id": "c",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "huumori-eduskunnan-taysistunnossa",
        "page": "147 ja 151,",
        "section": "Huumori"
      },
      "explanation": "Ensimmäinen osa vastaa tutkimuksen menetelmällistä lähtökohtaa: yleisön nauru ei yksin ole luotettava huumorin tunnistamisen peruste. Jälkimmäinen osa on kuitenkin väärin, sillä tutkimukseen sisällytettiin yhdeksän sarkastiseksi tulkittua naurua. Naurua ei siis suljettu kokonaan analyysin ulkopuolelle.\n\nLähde:\nS. 147 ja 151, \"Huumori\" ja \"Huumorin kohteen merkitys: sarkasmi\". Sivulla 151 todetaan poikkeuksesta: \"nauru sarkasmina\".",
      "learningPoint": "Opiskelijan tulee erottaa pääsääntö ja sitä koskeva poikkeus. Erityisesti on tarkistettava, muuttaako ilmaus \"kokonaan\" artikkelissa esitetyn rajallisen väitteen virheelliseksi.\nHakuvinkki: Ctrl+F: nauru sarkasmina."
    },
    {
      "id": "g-m4-q9",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 4,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein inkongruenssi- ja ylemmyysteorioiden suhdetta Zareffin huumorianalyysissa?",
      "options": [
        {
          "id": "a",
          "text": "Ylemmyysteoria selittää huumorin ensisijaisesti odotusten ja toteutuneen asiantilan ristiriidalla, kun taas inkongruenssiteoria tarkastelee humoristin valta-asemaa suhteessa kohteeseen."
        },
        {
          "id": "b",
          "text": "Inkongruenssiteoria selittää huumorin rakenteellista ristiriitaa, ja ylemmyysteoria tarkastelee huumoriin liittyvää alemmuuden osoittamista; teoriat täydentävät toisiaan."
        },
        {
          "id": "c",
          "text": "Inkongruenssiteoria selittää huumorin yleisön naurureaktioiden avulla, kun taas ylemmyysteoria perustuu ainoastaan vitsien kielelliseen rakenteeseen."
        },
        {
          "id": "d",
          "text": "Ylemmyysteoria selittää kaiken huumorin hyväntahtoiseksi, kun taas inkongruenssiteoria rajaa humoristisen viestinnän tarkoituksellisiin loukkauksiin."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "huumori-eduskunnan-taysistunnossa",
        "page": "147–148,",
        "section": "Huumori"
      },
      "explanation": "B yhdistää molemmat teoriat niiden oikeisiin selityskohteisiin. Inkongruenssi koskee ristiriitaa ja yllättävää oivallusta, ylemmyys puolestaan huumorin sosiaalista ja usein aggressiivista ulottuvuutta. A vaihtaa selitysten suunnan. C liittää teorioihin vääriä tunnistamiskriteerejä. D on ristiriidassa artikkelin kanssa, sillä huumori voi olla myös julmaa eikä inkongruenssi rajoitu loukkauksiin.\n\nLähde:\nS. 147–148, \"Huumori\". Sivulla 147 teorioita kuvataan \"komiikan eri aspekteja korostavina lähestymistapoina\".",
      "learningPoint": "Opiskelijan tulee tunnistaa, mikä teoria selittää mitäkin huumorin ominaisuutta. Väärä vaihtoehto voi vaihtaa kahden käsitteen selitystehtävät keskenään.\nHakuvinkki: Ctrl+F: inkongruenssista ja ylemmyydestä."
    },
    {
      "id": "g-m4-q10",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Oikein vai väärin?\nArtikkelin mukaan kaikki tutkimuksessa havaitut sarkastiset ilmaisut sisälsivät ironialle ominaisen ristiriidan sanotun ja tarkoitetun välillä, eikä pelkkää pilkkanaurua voitu sisällyttää sarkastisen viestinnän analyysiin.",
      "options": [
        {
          "id": "a",
          "text": "Oikein"
        },
        {
          "id": "b",
          "text": "Väärin"
        },
        {
          "id": "c",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "huumori-eduskunnan-taysistunnossa",
        "page": "151,",
        "section": "Huumorin kohteen merkitys: sarkasmi"
      },
      "explanation": "Sarkasmi ei välttämättä sisällä ironialle tai muulle huumorille tyypillistä inkongruenttia rakennetta. Tutkimuksessa sarkasmi hyväksyttiin yleensä aineistoon vain huumorin osana, mutta sarkastinen pilkkanauru muodosti poikkeuksen. Väittämän molemmat ehdottomat rajaukset ovat virheellisiä.\n\nLähde:\nS. 151, \"Huumorin kohteen merkitys: sarkasmi\". Ratkaiseva lainaus: \"Se ei itsessään kuitenkaan välttämättä sisällä inkongruentteja rakenteita\".",
      "learningPoint": "Opiskelijan tulee tarkistaa, onko käsitteen ominaisuus välttämätön vai vain mahdollinen. Lisäksi tulee tunnistaa aineiston luokitteluun liittyvä poikkeus.\nHakuvinkki: Ctrl+F: ei itsessään kuitenkaan ja pilkkanaurulla."
    },
    {
      "id": "g-m4-q11",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Mitkä seuraavista päätelmistä voidaan tehdä artikkelin taulukoiden 2 ja 3 perusteella? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Keskustan edustajista suurempi osuus käytti huumoria kuin SDP:n edustajista, ja keskustalla oli myös enemmän humoristisia lausahduksia puheenvuoroa kohden."
        },
        {
          "id": "b",
          "text": "Koska perussuomalaisilla oli enemmän humoristisia lausahduksia kuin keskustalla, perussuomalaisilla oli myös suurempi huumoria käyttäneiden edustajien prosenttiosuus."
        },
        {
          "id": "c",
          "text": "RKP:n edustajista ainakin yksi käytti huumoria, vaikka puolueen humorististen lausahdusten määrä puheenvuoroa kohden oli taulukon pienin."
        },
        {
          "id": "d",
          "text": "Liike Nytin huumoria käyttäneiden edustajien osuus oli 100 prosenttia, joten puolueella oli myös eniten humoristisia lausahduksia koko aineistossa."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "a",
        "c"
      ],
      "source": {
        "articleId": "huumori-eduskunnan-taysistunnossa",
        "page": "153,"
      },
      "explanation": "A on oikein molemmilla mittareilla. C on oikein, sillä RKP:llä oli kaksi huumorin käyttäjää mutta alhaisin suhteellinen käyttötiheys. B on väärin: perussuomalaisilla oli enemmän lausahduksia, mutta huumoria käyttäneiden osuus oli 54 %, keskustalla 83 %. D on väärin: Liike Nytin ainoa edustaja käytti huumoria, mutta puolueen lausahduksia oli vain kolme.\n\nLähde:\nS. 153, taulukot 2 ja 3.\nRatkaisevat tiedot: keskustan huumorin käyttötiheys oli 0,67 ja käyttäjien osuus 83 %, SDP:n vastaavat luvut 0,55 ja 42 %. RKP:n käyttötiheys oli 0,13, ja kaksi sen edustajaa käytti huumoria.",
      "learningPoint": "Opiskelijan tulee erottaa toisistaan absoluuttinen määrä, suhteellinen käyttötiheys ja huumoria käyttäneiden osuus. Yhdestä mittarista ei voi automaattisesti päätellä toisen mittarin arvoa.\nHakuvinkki: Ctrl+F: Taulukko 2 ja Taulukko 3."
    },
    {
      "id": "g-m4-q12",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelissa esitettyä huumorin esimerkkien luokittelua?",
      "options": [
        {
          "id": "a",
          "text": "Veronmaksajien selkärankaa koskeva ilmaus tulkittiin metaforaksi, mutta sitä ei hyväksytty humoristiseksi lausahdukseksi."
        },
        {
          "id": "b",
          "text": "Hallitusohjelman vertaaminen taloyhtiön hallituksen ohjelmaan tulkittiin humoristiseksi hyperbolaksi."
        },
        {
          "id": "c",
          "text": "Vahvaa ja välittävää Suomea koskeva sanaleikki tulkittiin kriittiseksi huumoriksi, joka ei kuitenkaan ollut sarkastista."
        },
        {
          "id": "d",
          "text": "Juhannussaunan alkukierroksia koskeva ilmaus tulkittiin sarkastiseksi huumoriksi, koska se kohdistui erityisesti opposition edustajiin."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "d"
      ],
      "source": {
        "articleId": "huumori-eduskunnan-taysistunnossa",
        "page": "145–146 ja 150–152",
        "section": "koskee koko läsnä olevaa edustajistoa"
      },
      "explanation": "D on virheellinen, koska juhannussaunavertaus ei kohdistunut erityisesti oppositioon eikä pyrkinyt erottamaan tiettyä ihmisryhmää muista. Se kuvasi koko istuntosalin tunnelmaa ja saattoi jopa yhdistää yleisöä. A, B ja C vastaavat artikkelissa esitettyjä luokitteluja.\n\nLähde:\nS. 145–146 ja 150–152. Sivulla 152 juhannussaunaesimerkistä todetaan, että sen kohde \"koskee koko läsnä olevaa edustajistoa\".",
      "learningPoint": "Opiskelijan tulee yhdistää artikkelissa esitetty esimerkki oikeaan huumorin luokkaan ja tarkistaa, mihin ilmaus kohdistuu.\nHakuvinkki: Ctrl+F: juhannussaunan ja heikko ja valittava."
    },
    {
      "id": "g-m4-q13",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Kyllä vai ei?\nVoidaanko artikkelin perusteella katsoa, että eduskunnan täysistuntopuheella voi olla poliittista merkitystä myös silloin, kun puheenvuoro ei muuta käsiteltävän päätöksen sisältöä?",
      "options": [
        {
          "id": "a",
          "text": "Kyllä"
        },
        {
          "id": "b",
          "text": "Ei"
        },
        {
          "id": "c",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "a"
      ],
      "source": {
        "articleId": "huumori-eduskunnan-taysistunnossa",
        "page": "143–144,",
        "section": "Puhe eduskunnan täysistunnossa"
      },
      "explanation": "Artikkelissa erotetaan päätösten sisällöllinen valmistelu ja parlamentaarisen puheen julkinen merkitys. Täysistuntopuhe voi tuoda esiin vähemmistön näkemyksiä, muokata julkisia tulkintoja ja nostaa poliittisia kysymyksiä keskusteluun, vaikka päätöksen sisältö pysyisi samana.\n\nLähde:\nS. 143–144, \"Puhe eduskunnan täysistunnossa\". Sivulla 144 todetaan, että keskustelu \"voi muuttaa esimerkiksi lain luonteen ja merkityksen osalle suuresta yleisöstä, vaikka laki itsessään ei muuttuisi\".",
      "learningPoint": "Opiskelijan tulee yhdistää artikkelissa eri tavoin kuvatut parlamentaarisen puheen tehtävät yleisemmäksi johtopäätökseksi.\nHakuvinkki: Ctrl+F: vaikka laki itsessään ei muuttuisi."
    },
    {
      "id": "g-m4-q14",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa tarkimmin tutkimuksen tulosten yleistettävyyttä?",
      "options": [
        {
          "id": "a",
          "text": "Tutkimus osoittaa, että huumoria käytetään kaikissa eduskunnan täysistunnoissa yhtä paljon kuin hallitusohjelmakeskusteluissa kesäkuussa 2023."
        },
        {
          "id": "b",
          "text": "Tutkimus osoittaa, että perussuomalaiset ja keskusta ovat kaikissa parlamentaarisissa tilanteissa yleisimmät huumorin kohteet."
        },
        {
          "id": "c",
          "text": "Tutkimuksen tulokset koskevat vain yksittäisten kansanedustajien henkilökohtaisia ominaisuuksia, eikä niiden perusteella voida tarkastella laajempia poliittisia jännitteitä."
        },
        {
          "id": "d",
          "text": "Tutkimus perustuu poikkeuksellisen jännitteiseen aineistoon, mutta sen pohjalta esitetään myös mahdollisesti laajemmin sovellettavia tulkintoja huumorin kohteeksi joutumisesta."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "d"
      ],
      "source": {
        "articleId": "huumori-eduskunnan-taysistunnossa",
        "page": "145 ja 156–157,",
        "section": "Analyysi: Huumori osana parlamentaarista puhetta"
      },
      "explanation": "D huomioi sekä aineiston erityisluonteen että tutkijan esittämän teoreettisen tulkinnan. A ja B yleistävät yksittäisen tutkimusaineiston havainnot perusteettomasti kaikkiin istuntoihin ja tilanteisiin. C puolestaan sivuuttaa artikkelin pyrkimyksen selittää huumoria parlamentaaristen jännitteiden avulla.\n\nLähde:\nS. 145 ja 156–157, erityisesti \"Analyysi: Huumori osana parlamentaarista puhetta\". Sivulla 156 todetaan aineiston pohjalta voitavan tehdä \"ainakin yksi todennäköisesti laajasti yleistettävissä oleva huomio\".",
      "learningPoint": "Opiskelijan tulee erottaa aineistosta suoraan tehdyt havainnot tutkijan laajemmista tulkinnoista. Mahdollinen yleistettävyys ei tarkoita kaikkia tilanteita koskevaa varmaa tulosta.\nHakuvinkki: Ctrl+F: yleistettävissä ja keskimääräisissä."
    },
    {
      "id": "g-m4-q15",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin taulukoissa 1 ja 4 esitettyjä lukumääriä ja osuuksia? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Ironiaa esiintyi aineistossa enemmän kuin vitsejä ja metaforaan perustuvaa huumoria yhteensä."
        },
        {
          "id": "b",
          "text": "Sarkastisen huumorin osuus oli SDP:llä suurempi kuin perussuomalaisilla, vaikka perussuomalaisilla oli enemmän sarkastisia lausahduksia."
        },
        {
          "id": "c",
          "text": "Vihreillä sarkastisen huumorin osuus oli suurempi kuin vasemmistoliitolla, mutta vasemmistoliitolla oli enemmän sarkastisia lausahduksia."
        },
        {
          "id": "d",
          "text": "Tutkimuksen kaikista 283 humoristisesta lausahduksesta 138 oli sarkastisia ja 121 ironisia."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "a",
        "b",
        "c"
      ],
      "source": {
        "articleId": "huumori-eduskunnan-taysistunnossa",
        "page": "150,"
      },
      "explanation": "A on oikein, sillä 138 on enemmän kuin 57 + 25 = 82.\nB on oikein, sillä SDP:n sarkastisen huumorin osuus (55 %) oli suurempi kuin perussuomalaisten (47 %), vaikka perussuomalaisilla oli enemmän sarkastisia lausahduksia (36) kuin SDP:llä (30).\nC on oikein, sillä vihreiden sarkastisen huumorin osuus oli 70 % ja vasemmistoliiton 60 %. Sarkastisia lausahduksia oli kuitenkin vihreillä seitsemän ja vasemmistoliitolla yhdeksän.\nD on väärin, sillä luvut on yhdistetty vääriin käsitteisiin. Ironiaa esiintyi 138 kertaa, kun taas taulukossa 4 sarkastisia lausahduksia oli 121. Lisäksi taulukon 4 tarkastelussa on 257 puolueille kohdistettua lausahdusta, ei koko 283 lausahduksen aineisto.\n\nLähde:\nS. 150, taulukko 1, ja s. 154, taulukko 4.\nTaulukossa 1 ironiaa esiintyy 138, vitsejä 57 ja metaforia 25 kertaa. Taulukossa 4 SDP:n sarkastisen huumorin osuus on 55 %, perussuomalaisten 47 %, vihreiden 70 % ja vasemmistoliiton 60 %.",
      "learningPoint": "Opiskelijan tulee yhdistää kahden taulukon tietoja ja erottaa absoluuttiset määrät prosenttiosuuksista. Samalla tulee tarkistaa, mitä havaintojoukkoa kukin luku kuvaa.\nHakuvinkki: Ctrl+F: Taulukko 1 ja Taulukko 4. Vertaa erityisesti sarakkeita \"Sarkastinen\" ja \"Osuus\"."
    },
    {
      "id": "g-m4-q16",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Tosi vai epätosi?\nZareffin analyysin mukaan keskustan ja perussuomalaisten runsas joutuminen huumorin kohteiksi voidaan tulkita osittain niiden ristiriitaisten parlamentaaristen asemien kautta. Tutkimus ei kuitenkaan osoita, että nämä ristiriidat olisivat yksinään aiheuttaneet puolueisiin kohdistuneen huumorin määrän.",
      "options": [
        {
          "id": "a",
          "text": "Tosi"
        },
        {
          "id": "b",
          "text": "Epätosi"
        },
        {
          "id": "c",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "a"
      ],
      "source": {
        "articleId": "huumori-eduskunnan-taysistunnossa",
        "page": "156–157,",
        "section": "Analyysi: Huumori osana parlamentaarista puhetta"
      },
      "explanation": "Tutkija esittää teoreettisen tulkinnan, jonka mukaan keskusta ja perussuomalaiset olivat poliittisen asemansa vuoksi otollisia huumorin kohteita.\nKeskusta jakoi näkemyksiä hallituspuolueiden kanssa mutta jäi oppositioon. Perussuomalaiset puolestaan olivat esiintyneet poliittisten eliittien vastustajina mutta nousivat itse hallitukseen.\nNämä ristiriidat tarjoavat mahdollisen selityksen huumorin kohdistumiselle. Tutkimuksessa ei kuitenkaan osoiteta yksiselitteistä syy-seuraussuhdetta eikä suljeta pois muita vaikuttavia tekijöitä.\n\nLähde:\nS. 156–157, \"Analyysi: Huumori osana parlamentaarista puhetta\". Sivulla 156 todetaan molempien puolueiden toiminnan olleen mahdollista nähdä \"itsessään inkongruenttina\". Sivulla 157 todetaan myös: \"Aiheesta kuitenkin tarvittaisiin lisää tutkimusta.\"",
      "learningPoint": "Opiskelijan tulee erottaa tutkimusaineistosta havaittu ilmiö ja sille esitetty teoreettinen selitys. Erityisesti on tarkistettava, esitetäänkö yhteys mahdollisena selityksenä vai todistettuna syynä.\nHakuvinkki: Ctrl+F: inkongruentteina ja lisää tutkimusta."
    },
    {
      "id": "g-m4-q17",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein artikkelissa esitetyt huumorin muodot, niiden ominaisuudet ja esimerkit?",
      "options": [
        {
          "id": "a",
          "text": "Ironia perustuu aina tarkoitukselliseen liioitteluun, minkä vuoksi hallitusohjelman vertaaminen taloyhtiön hallituksen ohjelmaan luokiteltiin ensisijaisesti ironiaksi."
        },
        {
          "id": "b",
          "text": "Sarkasmi määritellään ensisijaisesti kahden merkityksen väliseksi ristiriidaksi, minkä vuoksi hallitusohjelmaan kohdistuva sanaleikki luokiteltiin sarkastiseksi huumoriksi."
        },
        {
          "id": "c",
          "text": "Hyperbola perustuu ilmeiseen liioitteluun, ja hallitusohjelman vertaaminen taloyhtiön hallituksen ohjelmaan oli humoristista, koska liioittelu muodosti absurdin mutta ymmärrettävän rinnastuksen."
        },
        {
          "id": "d",
          "text": "Metafora perustuu aina henkilöön kohdistuvaan ivallisuuteen, minkä vuoksi juhannussaunaa koskeva vertaus luokiteltiin sarkastiseksi huumoriksi."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "huumori-eduskunnan-taysistunnossa",
        "page": "150–152,",
        "section": "Huumorista erotettavat ilmiöt: metafora ja hyperbola"
      },
      "explanation": "C yhdistää hyperbolan määritelmän oikeaan esimerkkiin. Taloyhtiön hallituksen ja valtion hallituksen ohjelmien vertaaminen synnyttää humoristisen ristiriidan, koska niiden mittakaavat ovat hyvin erilaiset mutta niillä on myös yhteinen piirre.\nA on väärin, koska liioittelu ei ole ironian määrittelevä ominaisuus ja kyseinen esimerkki luokitellaan hyperbolaksi.\nB on väärin, koska sarkasmi liittyy erityisesti huumorin kohteeseen. Hallitusohjelmaa koskeva sanaleikki oli kriittinen mutta ei sarkastinen.\nD on väärin, koska metafora ei edellytä henkilöön kohdistuvaa ivallisuutta. Juhannussaunavertaus kuvasi yleistä tilannetta eikä erityisesti halventanut ihmisryhmää.\n\nLähde:\nS. 150–152, \"Huumorista erotettavat ilmiöt: metafora ja hyperbola\" sekä \"Huumorin kohteen merkitys: sarkasmi\". Sivulla 150 hyperbola määritellään \"ilmeisen liioittelun käyttämiseksi tehokeinona\".",
      "learningPoint": "Opiskelijan tulee yhdistää käsitteen määritelmä, esimerkin rakenne ja tutkijan tekemä luokittelu. Tehtävässä ei riitä yhden käsitteen muistaminen, vaan on tunnistettava myös sen ero lähikäsitteisiin.\nHakuvinkki: Ctrl+F: taloyhtiön ja hyperbola."
    },
    {
      "id": "g-m4-q18",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 12,
      "prompt": "Oikein vai väärin?\nArtikkelin johtopäätösten perusteella huumorin käyttö eduskunnan täysistunnoissa parantaa poliittisten vähemmistönäkemysten näkyvyyttä mediassa, mutta samalla se väistämättä lisää poliittista polarisaatiota ja henkilökohtaisia ristiriitoja.",
      "options": [
        {
          "id": "a",
          "text": "Oikein"
        },
        {
          "id": "b",
          "text": "Väärin"
        },
        {
          "id": "c",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "huumori-eduskunnan-taysistunnossa",
        "page": "157,",
        "section": "Johtopäätökset"
      },
      "explanation": "Väittämä muuttaa kaksi artikkelissa varauksellisesti esitettyä mahdollisuutta varmoiksi seurauksiksi.\nTutkimuksessa ei osoiteta, että huumori todella parantaisi medianäkyvyyttä. Päinvastoin tutkija ehdottaa tämän selvittämistä jatkotutkimuksessa.\nSamoin polarisaation voimistuminen esitetään mahdollisena vaarana, ei väistämättömänä seurauksena. Artikkelissa korostetaan huumorin mahdollisia myönteisiä ja kielteisiä vaikutuksia.\n\nLähde:\nS. 157, \"Johtopäätökset\". Artikkelissa todetaan, että huumorilla \"voikin olla parlamentaarisessa puheessa potentiaalia tuoda vaihtoehtoisia näkemyksiä näkyviin\". Lisäksi esitetään, että \"on olemassa vaara, että huumori polarisoi keskustelua\".",
      "learningPoint": "Opiskelijan tulee erottaa toisistaan tutkimuksessa osoitettu tulos, mahdollinen vaikutus ja jatkotutkimusta edellyttävä kysymys. Kiinnitä huomiota erityisesti sanoihin \"voi\", \"potentiaalia\", \"vaara\" ja \"väistämättä\".\nHakuvinkki: Ctrl+F: potentiaalia ja polarisoi."
    },
    {
      "id": "g-m4-q19",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 10,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelin taulukossa 5 ja sitä seuraavassa analyysissa esitettyjä huumorin kohteiden välisiä suuruussuhteita?",
      "options": [
        {
          "id": "a",
          "text": "Hallitusohjelma oli yksittäisenä aiheena useammin huumorin kohteena kuin eduskunnan istuntosalin puhetavat."
        },
        {
          "id": "b",
          "text": "Keskusta edustajineen oli useammin huumorin kohteena kuin SDP edustajineen."
        },
        {
          "id": "c",
          "text": "Hallitukseen, sen puolueisiin ja edustajiin kohdistuvaa huumoria tunnistettiin kokonaisuutena enemmän kuin vastaavasti oppositioon kohdistuvaa huumoria."
        },
        {
          "id": "d",
          "text": "Kokoomus edustajineen ja ministereineen oli useammin huumorin kohteena kuin perussuomalaiset edustajineen ja ministereineen."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "d"
      ],
      "source": {
        "articleId": "huumori-eduskunnan-taysistunnossa",
        "page": "154–155,"
      },
      "explanation": "A on oikein, sillä hallitusohjelma oli huumorin kohteena 33 kertaa ja puhetavat salissa 30 kertaa.\nB on oikein, sillä keskusta edustajineen oli huumorin kohteena 21 kertaa ja SDP edustajineen 11 kertaa.\nC on oikein, sillä tutkijan yhteenlaskun mukaan hallitukseen kohdistui suoraan tai välillisesti ainakin 113 humoristista lausahdusta ja oppositioon vastaavasti 63.\nD on väärin, koska se kääntää perussuomalaisten ja kokoomuksen välisen suuruussuhteen päinvastaiseksi. Perussuomalaiset olivat selvästi useammin huumorin kohteena.\n\nLähde:\nS. 154–155, taulukko 5 ja sitä seuraava analyysi.\nSivulla 155 todetaan perussuomalaisten edustajineen ja ministereineen olleen huumorin kohteena yhteensä 40 kertaa, kun kokoomuksen vastaava määrä oli 19.",
      "learningPoint": "Opiskelijan tulee verrata eri huumorin kohteiden määriä ja huomata, milloin tarkastellaan yksittäistä taulukon luokkaa ja milloin useista luokista muodostettua kokonaisuutta.\nHakuvinkki: Ctrl+F: Taulukko 5 ja ainakin 113 kertaa."
    },
    {
      "id": "g-m4-q20",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Mitkä seuraavista päätelmistä ovat perusteltavissa Zareffin tutkimuksen havaintojen ja johtopäätösten perusteella? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Koska huumoria käytettiin kaikissa tutkituissa puolueissa, voidaan päätellä, ettei se ollut ainoastaan yhden puolueen tai pienen edustajaryhmän käyttämä retorinen keino."
        },
        {
          "id": "b",
          "text": "Koska suurin osa aineiston huumorista liittyi poliittiseen vastakkainasetteluun, tutkimus osoittaa, ettei eduskunnan täysistunnoissa esiintynyt lainkaan yhteistä kokemusta vahvistavaa huumoria."
        },
        {
          "id": "c",
          "text": "Vaikka suuri osa huumorista kohdistui poliittiseen vastapuoleen, huumorin kohteena saattoivat olla myös asiantilat, jolloin kaikki humoristinen kritiikki ei ollut sarkastista."
        },
        {
          "id": "d",
          "text": "Koska perussuomalaiset ja keskusta olivat erityisen usein huumorin kohteina, voidaan päätellä, että parlamentaarisen huumorin kohteet määräytyvät aina puolueiden koon perusteella."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "a",
        "c"
      ],
      "source": {
        "articleId": "huumori-eduskunnan-taysistunnossa",
        "page": "151–157,",
        "section": "Havaintoja aineistosta"
      },
      "explanation": "A on oikein. Kaikki tutkimuksessa mukana olleet puolueet käyttivät huumoria, ja lähes kaikista puolueista löytyi useita huumorin käyttäjiä. Tutkimus tukee siten käsitystä huumorista laajemmin hallittuna parlamentaarisena retorisena keinona.\nB on väärin. Vaikka huumorin keskeinen käyttötarkoitus oli poliittisen vastapuolen pilkkaaminen, aineistossa esiintyi myös muunlaista huumoria. Esimerkiksi juhannussaunaa koskeva vertaus saattoi yhdistää yleisöä yhteisen kokemuksen kautta.\nC on oikein. Tutkimuksessa erotetaan ihmisiin ja ihmisryhmiin kohdistuva sarkastinen huumori muusta huumorista. Esimerkiksi hallitusohjelmaan kohdistuva kriittinen huumori ei välttämättä ollut sarkastista, vaikka se oli poliittisesti vastapuolelle epäedullista.\nD on väärin. Tutkimuksessa ei esitetä puolueen koon yksin määräävän huumorin kohteeksi joutumista. Tutkija tarkastelee erityisesti puolueiden poliittisiin asemiin ja odotuksiin liittyviä ristiriitoja mahdollisena selittävänä tekijänä.\n\nLähde:\nS. 151–157, erityisesti \"Havaintoja aineistosta\", \"Analyysi: Huumori osana parlamentaarista puhetta\" ja \"Johtopäätökset\".\nSivulla 153 todetaan: \"Huumori ei selvästikään ole vain pienen edustajaryhmän erikoistaito\". Sivulla 152 puolestaan erotetaan kriittinen mutta ei-sarkastinen huumori sarkasmista.",
      "learningPoint": "Opiskelijan tulee erottaa toisistaan ilmaisut \"suurin osa\", \"kaikki\", \"osa\" ja \"ei välttämättä\". Lisäksi tulee arvioida, mitä tutkimuksen havainnoista voidaan päätellä ilman perusteettomia yleistyksiä.\nHakuvinkki: Ctrl+F: vain pienen edustajaryhmän, sarkastinen ja johtopäätökset."
    }
  ]
} satisfies ValintakoeGExercise;
