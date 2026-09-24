import type { ValintakoeGExercise } from "./types";

/**
 * Harjoitus 4 on muodostettu toimitetusta VALINTAKOE G TEHTÄVÄT HELPPO -dokumentista.
 * Kaikki tehtävät ovat easy-tasoa.
 * HUOM: lähdedokumentti ei ilmoita tälle harjoitukselle aikarajaa.
 * durationMinutes=45 on nykyisen harjoitusmoottorin tekninen oletus.
 */
export const valintakoeGExercise4Base = {
  "id": "harjoitus-4",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Harjoitus 4 – Turvallisuuden näyttämöt muutoksessa – sota informaatiotiloissa vaatii valppautta",
  "description": "Aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 45,
  "difficulty": "easy",
  "articleId": "turvallisuuden-nayttamot-muutoksessa-sota-informaatiotiloissa-vaatii-valppautta",
  "articleTitle": "Turvallisuuden näyttämöt muutoksessa – sota informaatiotiloissa vaatii valppautta",
  "articleUrl": "https://journal.fi/prologi/article/view/157134",
  "questions": [
    {
      "id": "g-h4-q1",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 8,
      "prompt": "Mikä seuraavista kuvaa artikkelin perusteella vahvistusvinoumaa?",
      "options": [
        {
          "id": "a",
          "text": "Arvioimme tapahtuman todennäköisyyttä sen perusteella, kuinka helposti siihen liittyviä esimerkkejä tulee mieleen."
        },
        {
          "id": "b",
          "text": "Nojaudumme erityisen vahvasti ensimmäisenä saamaamme informaatioon."
        },
        {
          "id": "c",
          "text": "Valitsemme ja tulkitsemme informaatiota tavalla, joka tukee aiempia näkemyksiämme."
        },
        {
          "id": "d",
          "text": "Pidämme mediassa korostuvia asioita vähemmän merkittävinä kuin ne todellisuudessa ovat."
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "turvallisuuden-nayttamot-muutoksessa-sota-informaatiotiloissa-vaatii-valppautta",
        "page": "57",
        "section": "kognitiivisia vinoumia käsittelevä kappale"
      },
      "explanation": "Artikkelissa vahvistusvinouma yhdistetään nimenomaan informaation valitsemiseen ja tulkitsemiseen aiempia näkemyksiä tukevalla tavalla. Vaihtoehdot A ja B kuvaavat samassa kappaleessa käsiteltyjä muita vinoumia, joten pelkkä oikean tekstikohdan löytäminen ei riitä, vaan määritelmät täytyy erottaa toisistaan.",
      "learningPoint": "Tarkista, mihin käsitteeseen aineistossa oleva ominaisuus tai määritelmä kuuluu. Lähekkäin esitetyt oikeat tiedot voivat toimia uskottavina häiriövaihtoehtoina. Hakuvinkki: Hae Ctrl+F:llä sanaa ”vahvistusvinouma”."
    },
    {
      "id": "g-h4-q2",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 12,
      "prompt": "Vastaako seuraava väittämä artikkelin sisältöä? Prudentialistisen näkemyksen mukaan turvallisuus voidaan määritellä tilaksi, jossa riskit ja uhat ovat kokonaan poistuneet.",
      "options": [
        {
          "id": "tosi",
          "text": "Tosi"
        },
        {
          "id": "epatosi",
          "text": "Epätosi"
        }
      ],
      "correctAnswerIds": [
        "epatosi"
      ],
      "source": {
        "articleId": "turvallisuuden-nayttamot-muutoksessa-sota-informaatiotiloissa-vaatii-valppautta",
        "page": "54",
        "section": "turvallisuuden määrittelyä käsittelevä ensimmäinen kappale"
      },
      "explanation": "Väite tekee määritelmästä aineistoa ehdottomamman. Artikkelin mukaan riskien ja uhkien ei tarvitse olla kokonaan poistuneita, vaan ne voivat myös olla hallinnassa siten, ettei riski todennäköisesti toteudu. Ratkaiseva kohta on siis väitteen ilmaus ”kokonaan poistuneet”.",
      "learningPoint": "Kiinnitä huomiota sanoihin, jotka tekevät väitteestä aineistoa ehdottomamman. Tarkista, antaako teksti todella perusteen näin vahvalle ilmaukselle. Hakuvinkki: Sanalla ”prudentialistisen” pääsee nopeasti oikeaan tekstikohtaan."
    },
    {
      "id": "g-h4-q3",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 9,
      "prompt": "Mitkä seuraavista väittämistä DIDI-mallista pitävät artikkelin perusteella paikkansa? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Malli kehitettiin Ruotsin turvallisuusviraston toimeksiannosta."
        },
        {
          "id": "b",
          "text": "Malli muodostuu harhauttamisesta, aikomuksista, häiritsevyydestä ja sekaantumisesta."
        },
        {
          "id": "c",
          "text": "Malli kehitettiin vuonna 2021 informaatiopuolustuksen järjestämistä varten."
        },
        {
          "id": "d",
          "text": "Malli kuvaa jatkumoa hyväksyttävästä keskustelusta laittomaan informaatiovaikuttamiseen."
        }
      ],
      "correctAnswerIds": [
        "a",
        "b",
        "d"
      ],
      "source": {
        "articleId": "turvallisuuden-nayttamot-muutoksessa-sota-informaatiotiloissa-vaatii-valppautta",
        "page": "56",
        "section": "DIDI-mallia käsittelevä kappale"
      },
      "explanation": "A, B ja D vastaavat artikkelin kuvausta. C sekoittaa DIDI-mallin vuoden 2018 kehittämisen artikkelissa myöhemmin käsiteltyyn Suomen informaatiopuolustukseen ja vuoteen 2021. Tässä kannattaa tarkistaa erityisesti, mihin ajankohtaantieto kuuluu.",
      "learningPoint": "Aiheeseen liittyvä vuosiluku voi löytyä aineistosta mutta kuulua eri asiaan. Tarkista aina, mihin tapahtumaan ajankohta tekstissä yhdistetään."
    },
    {
      "id": "g-h4-q4",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 3,
      "prompt": "Onko seuraava väittämä artikkelin perusteella oikein vai väärin? Suomen vuoden 2021 puolustusselonteossa informaatiopuolustus rajattiin maanpuolustuksen toimintojen suojaamiseen ulkoa ohjatun ja muun vahingoittamistarkoituksessa tehdyn viestinnän vaikutuksilta.",
      "options": [
        {
          "id": "oikein",
          "text": "Oikein"
        },
        {
          "id": "vaarin",
          "text": "Väärin"
        }
      ],
      "correctAnswerIds": [
        "oikein"
      ],
      "source": {
        "articleId": "turvallisuuden-nayttamot-muutoksessa-sota-informaatiotiloissa-vaatii-valppautta",
        "page": "58",
        "section": "Suomen informaatiopuolustus on ratkaistava"
      },
      "explanation": "Väite säilyttää artikkelissa esitetyn määritelmän olennaisen merkityksen: vuoden 2021 puolustusselonteon määritelmä kohdistui nimenomaan maanpuolustuksen toimintojen suojaamiseen kuvatunlaiselta viestinnältä. Tässä ratkaisevaa on löytää oikea kohta nopeasti ja varmistaa, ettei väitteessä ole muutettu määritelmän kohdetta.",
      "learningPoint": "Tunnista, säilyykö tekstikohdan merkitys, vaikka asia esitetään kysymyksessä hieman tiivistettynä ja eri rakenteessa. Hakuvinkki: Haku ”2021” rajaa aineistosta nopeasti oikean kohdan."
    },
    {
      "id": "g-h4-q5",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 2,
      "prompt": "Mikä seuraavista kuvaa artikkelin perusteella ankkurointivinoumaa?",
      "options": [
        {
          "id": "a",
          "text": "Ihminen valitsee informaatiota erityisesti sen perusteella, kuinka hyvin se tukee hänen aiempia näkemyksiään."
        },
        {
          "id": "b",
          "text": "Ihminen arvioi tapahtumien yleisyyttä sen perusteella, kuinka helposti niistä tulee esimerkkejä mieleen."
        },
        {
          "id": "c",
          "text": "Ihminen nojautuu liian vahvasti tiettyyn informaatioon, useimmiten ensimmäisenä saamaansa."
        },
        {
          "id": "d",
          "text": "Ihminen pitää mediassa usein esillä olevia asioita automaattisesti totuudenmukaisina."
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "turvallisuuden-nayttamot-muutoksessa-sota-informaatiotiloissa-vaatii-valppautta",
        "page": "57",
        "section": "kognitiivisia vinoumia käsittelevä kappale"
      },
      "explanation": "C ilmaisee saman asian eri sanarakenteella kuin artikkeli. A kuvaa vahvistusvinoumaa ja B saatavuusvinoumaa. Tehtävässä olennaista on tunnistaa määritelmän merkitys eikä vain etsiä vaihtoehdosta samoja sanoja kuin aineistosta.",
      "learningPoint": "Tunnista aineiston kanssa samanmerkityksinen ilmaus, vaikka kysymys tai vastausvaihtoehto ei toista tekstiä sanatarkasti. Hakuvinkki: Hae ”ankkurointivinouma” ja vertaa sen määritelmää vaihtoehtoihin."
    },
    {
      "id": "g-h4-q6",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 5,
      "prompt": "Vastaako seuraava väittämä artikkelin sisältöä? Informaatiosodankäynti muodostaa itsenäisen konfliktin, johon ei tarvitse liittyä muuta meneillään olevaa konfliktia.",
      "options": [
        {
          "id": "tosi",
          "text": "Tosi"
        },
        {
          "id": "epatosi",
          "text": "Epätosi"
        }
      ],
      "correctAnswerIds": [
        "epatosi"
      ],
      "source": {
        "articleId": "turvallisuuden-nayttamot-muutoksessa-sota-informaatiotiloissa-vaatii-valppautta",
        "page": "56",
        "section": "Vihamielistä vaikuttamista ja sodankäyntiä"
      },
      "explanation": "Väite kääntää artikkelin esittämän suhteen vastakkaiseksi. Artikkelin mukaan informaatiosodankäynti liittyy aina laajempaan konfliktiin, kun taas väitteessä se esitetään siitä riippumattomana.",
      "learningPoint": "Tarkista väitteen merkityssuunta. Samojen käsitteiden esiintyminen ei riitä, jos niiden avulla ilmaistu sisältö on muutettu vastakkaiseksi. Hakuvinkki: Hae ”itsenäistä informaatiosotaa”."
    },
    {
      "id": "g-h4-q7",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 8,
      "prompt": "Mitkä seuraavista kuuluvat artikkelissa Kööpenhaminan koulukunnan mallin mukaisiin turvallisuuden sektoreihin? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Sotilaallinen turvallisuus"
        },
        {
          "id": "b",
          "text": "Poliittinen turvallisuus"
        },
        {
          "id": "c",
          "text": "Kognitiivinen turvallisuus"
        },
        {
          "id": "d",
          "text": "Ympäristöturvallisuus"
        }
      ],
      "correctAnswerIds": [
        "a",
        "b",
        "d"
      ],
      "source": {
        "articleId": "turvallisuuden-nayttamot-muutoksessa-sota-informaatiotiloissa-vaatii-valppautta",
        "page": "54",
        "section": "laajaa turvallisuuskäsitystä käsittelevä kappale"
      },
      "explanation": "Sotilaallinen, poliittinen ja ympäristöturvallisuus mainitaan turvallisuuden sektoreina. Kognitiivinen turvallisuuspuolestaan esiintyy artikkelissa myöhemmin informaatiopuolustuksen yhteydessä, mutta sitä ei luetella tässä Kööpenhaminan koulukunnan turvallisuuden sektoriksi. Siksi tuttu ja artikkelissa oikeasti esiintyvä käsite voi silti olla tässä yhteydessä väärä.",
      "learningPoint": "Älä tarkista vain, esiintyykö käsite aineistossa. Tarkista myös, kuuluuko se juuri siihen luokkaan tai ryhmään, josta kysytään."
    },
    {
      "id": "g-h4-q8",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 1,
      "prompt": "Onko seuraava väittämä artikkelin perusteella oikein vai väärin? Suomessa informaatiopuolustuksen käsite esiintyi ensimmäisen kerran vuonna 2021 julkaistussa puolustusselonteossa.",
      "options": [
        {
          "id": "oikein",
          "text": "Oikein"
        },
        {
          "id": "vaarin",
          "text": "Väärin"
        }
      ],
      "correctAnswerIds": [
        "oikein"
      ],
      "source": {
        "articleId": "turvallisuuden-nayttamot-muutoksessa-sota-informaatiotiloissa-vaatii-valppautta",
        "page": "58",
        "section": "Suomen informaatiopuolustus on ratkaistava"
      },
      "explanation": "Väite säilyttää aineiston keskeisen tiedon: Suomessa termin ensimmäinen esiintyminen sijoitetaan vuoden 2021 puolustusselontekoon. Tässä tehtävässä ratkaisevaa on paikantaa yksittäinen ajankohtaa koskeva fakta täsmällisesti.",
      "learningPoint": "Paikanna nopeasti yksittäinen täsmällinen tieto ja varmista, että sekä vuosiluku että tapahtuma vastaavat aineistoa. Hakuvinkki: Hakusana ”2021” vie suoraan olennaiseen kohtaan."
    },
    {
      "id": "g-h4-q9",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 8,
      "prompt": "Mikä seuraavista väittämistä pitää artikkelin perusteella paikkansa?",
      "options": [
        {
          "id": "a",
          "text": "Sosiaalis-kulttuurisessa sodankäynnissä vaikuttamisen ensisijaisena kohteena ovat yksilön kognitiiviset vinoumat."
        },
        {
          "id": "b",
          "text": "Mentaalisessa sodankäynnissä vaikuttamisen kohteena ovat vastustajan kansallinen identiteetti ja narratiivi."
        },
        {
          "id": "c",
          "text": "Sosiaalis-kulttuurisessa sodankäynnissä pyritään haurastuttamaan kansallista identiteettiä ja narratiivia kansallisen koheesion vähentämiseksi."
        },
        {
          "id": "d",
          "text": "Mentaalisessa sodankäynnissä pyritään ensisijaisesti vahvistamaan vastustajan kansallista koheesiota."
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "turvallisuuden-nayttamot-muutoksessa-sota-informaatiotiloissa-vaatii-valppautta",
        "page": "57",
        "section": "informaatio­psykologista sodankäyntiä käsittelevä kappale"
      },
      "explanation": "Artikkeli erottaa kaksi ulottuvuutta toisistaan. Sosiaalis-kulttuurisen sodankäynnin kohteena ovat kansallinen identiteetti ja narratiivi, kun taas mentaalisen sodankäynnin kohteena ovat ihmisen mieli, ajattelu ja kognitio. A ja B siirtävät ominaisuuksia väärälle ulottuvuudelle, ja D muuttaa koheesioon kohdistuvan vaikutuksen suunnan.",
      "learningPoint": "Kun aineistossa käsitellään lähekkäin kahta käsitettä, tarkista huolellisesti, mikä ominaisuus kuuluu kummallekin. Oikea tieto muuttuu vääräksi, jos se yhdistetään väärään käsitteeseen."
    },
    {
      "id": "g-h4-q10",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 3,
      "prompt": "Mikä seuraavista väittämistä kuvaa artikkelin perusteella hyväksyttävää informaatiovaikuttamista?",
      "options": [
        {
          "id": "a",
          "text": "Vaikuttamisen lähde voidaan jättää ilmoittamatta, jos toiminnan tavoitteena ei ole vahingoittaa ketään."
        },
        {
          "id": "b",
          "text": "Vaikuttaminen on läpinäkyvää, rakentavaa eikä häiritse kohtuuttomasti yhteiskunnan toimintaa."
        },
        {
          "id": "c",
          "text": "Vaikuttaminen on hyväksyttävää aina, kun vaikuttajalla on asiassa jokin oma intressi."
        },
        {
          "id": "d",
          "text": "Vaikuttaminen voi olla hyväksyttävää, vaikka sen tavoitteena olisi haitallisten vastakkainasettelujen luominen."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "turvallisuuden-nayttamot-muutoksessa-sota-informaatiotiloissa-vaatii-valppautta",
        "page": "56",
        "section": "DIDI-mallia ja hyväksyttävää informaatiovaikuttamista käsittelevä kappale"
      },
      "explanation": "B tiivistää samassa tekstikohdassa luetellut hyväksyttävän informaatiovaikuttamisen ominaisuudet. A, C ja D muuttavat yksittäisiä ehtoja tavalla, jota artikkeli ei tue. Esimerkiksi pelkkä oma intressi ei riitä, vaan sen on oltava legitiimi.",
      "learningPoint": "Yhdistä muutaman läheisen virkkeen keskeinen sisältö ja tunnista vaihtoehto, joka säilyttää kokonaisuuden merkityksen. Hakuvinkki: Hae ”Hyväksyttävä informaatiovaikuttaminen”."
    },
    {
      "id": "g-h4-q11",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 10,
      "prompt": "Informaatiosodankäynnin operaatiot informaatiotilassa aloitetaan tyypillisesti vasta sen jälkeen, kun konflikti on tullut näkyväksi ja vihollisuudet ovat puhjenneet reaalimaailmassa.",
      "options": [
        {
          "id": "tosi",
          "text": "Tosi"
        },
        {
          "id": "epatosi",
          "text": "Epätosi"
        }
      ],
      "correctAnswerIds": [
        "epatosi"
      ],
      "source": {
        "articleId": "turvallisuuden-nayttamot-muutoksessa-sota-informaatiotiloissa-vaatii-valppautta",
        "page": "56–57",
        "section": "informaatiosodankäyntiä käsittelevä kohta"
      },
      "explanation": "Artikkelissa tapahtumien ajallinen järjestys on informaatiotilan operaatiot → konfliktin näkyväksi tuleminen ja vihollisuuksien puhkeaminen. Väitteessä järjestys on käännetty päinvastaiseksi. Ratkaisevaa ei siis ole vain huomata samoja tapahtumia, vaan tarkistaa niiden ajallinen suhde.",
      "learningPoint": "Tarkista prosessin tai tapahtumien ajallinen suunta. Samat tapahtumat voivat esiintyä sekä aineistossa että väitteessä, vaikka niiden järjestys olisi väärä. Hakuvinkki: Hae esimerkiksi ”paljon ennen” tai ”konflikti tulee näkyväksi”."
    }
  ]
} satisfies ValintakoeGExercise;
