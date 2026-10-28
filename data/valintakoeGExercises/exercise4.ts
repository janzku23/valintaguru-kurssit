import type { ValintakoeGExercise } from "./types";

/**
 * Harjoitus 4: uusimman tehtävätekstin tehtävät 1–11.
 * Lähdelainaukset ovat explanation-kentissä, hakuvinkit learningPoint-kentissä.
 * Lähdeteksti ei ilmoita aikarajaa; nykyinen 45 minuutin oletus säilytetään.
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
  "articleUrl": "https://journal.fi/prologi/article/view/157134/102515",
  "questions": [
    {
      "id": "g-h4-q1",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 7,
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
        "articleId": "turvallisuuden-nayttamot-muutoksessa-sota-informaatiotiloissa-vaatii-valppautta",
        "page": "57",
        "section": "kognitiivisia vinoumia käsittelevä kappale"
      },
      "explanation": "Artikkelissa vahvistusvinouma yhdistetään nimenomaan informaation valitsemiseen ja tulkitsemiseen aiempia näkemyksiä tukevalla tavalla. Vaihtoehdot A ja B kuvaavat samassa kappaleessa käsiteltyjä muita vinoumia, joten pelkkä oikean tekstikohdan löytäminen ei riitä, vaan määritelmät täytyy erottaa toisistaan.\n\nLähde:\n”Usein valitsemme ja tulkitsemme informaatiota niin, että se tukee aiempia näkemyksiämme. Tätä kutsutaan vahvistusvinoumaksi.”",
      "learningPoint": "Tarkista, mihin käsitteeseen kukin määritelmä kuuluu. Vaihtoehdon tieto voi löytyä aineistosta mutta kuvata vahvistusvinouman sijasta toista vinoumaa.\n\nHakuvinkki: Hae Ctrl+F:llä sanaa ”vahvistusvinouma”."
    },
    {
      "id": "g-h4-q2",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 8,
      "prompt": "Vastaako seuraava väittämä artikkelin sisältöä? Prudentialistisen näkemyksen mukaan turvallisuus voidaan määritellä tilaksi, jossa riskit ja uhat ovat kokonaan poistuneet.",
      "options": [
        {
          "id": "tosi",
          "text": "Tosi"
        },
        {
          "id": "epatosi",
          "text": "Epätosi"
        },
        {
          "id": "skip",
          "text": "Jätän vastaamatta tähän kysymykseen"
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
      "explanation": "Väite tekee määritelmästä aineistoa ehdottomamman. Artikkelin mukaan riskien ja uhkien ei tarvitse olla kokonaan poistuneita, vaan ne voivat myös olla hallinnassa siten, ettei riski todennäköisesti toteudu. Ratkaiseva kohta on siis väitteen ilmaus ”kokonaan poistuneet”.\n\nLähde:\n”turvallisuus voidaan määritellä tilaksi, jossa tiettyjä riskejä ja uhkia ei ole tai ne ovat hallinnassa siten, että riski ei todennäköisesti toteudu.”",
      "learningPoint": "Tarkista, tekeekö väite aineiston kuvauksesta ehdottoman. Ilmaus ”kokonaan poistuneet” sulkee pois tekstissä mainitun mahdollisuuden, että riskit ja uhat ovat olemassa mutta hallinnassa.\n\nHakuvinkki: Sanalla ”prudentialistisen” pääsee nopeasti oikeaan tekstikohtaan."
    },
    {
      "id": "g-h4-q3",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 6,
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
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
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
      "explanation": "A, B ja D vastaavat artikkelin kuvausta. C sekoittaa DIDI-mallin vuoden 2018 kehittämisen artikkelissa myöhemmin käsiteltyyn Suomen informaatiopuolustukseen ja vuoteen 2021. Tässä kannattaa tarkistaa erityisesti, mihin ajankohtaan tieto kuuluu.\n\nLähde:\n”Lundin yliopiston tutkijaryhmä on vuonna 2018 kehittänyt Ruotsin turvallisuusviraston (MSB) toimeksiannosta mallin”\n\n”Malli on jatkumo hyväksyttävästä, avoimesta keskustelusta ei-hyväksyttävän informaatiovaikuttamisen kautta laittomaan informaatiovaikuttamiseen.”\n\n”Mallin komponentteja ovat harhauttaminen (deception), aikomukset (intentions), häiritsevyys (disruption) ja sekaantuminen (interference).”",
      "learningPoint": "Yhdistä vuosiluku juuri siihen tapahtumaan, jota kysymys koskee. Vuosi 2021 liittyy Suomen informaatiopuolustukseen, kun taas DIDI-malli kehitettiin vuonna 2018."
    },
    {
      "id": "g-h4-q4",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 2,
      "prompt": "Onko seuraava väittämä artikkelin perusteella oikein vai väärin? Suomen vuoden 2021 puolustusselonteossa informaatiopuolustus rajattiin maanpuolustuksen toimintojen suojaamiseen ulkoa ohjatun ja muun vahingoittamistarkoituksessa tehdyn viestinnän vaikutuksilta.",
      "options": [
        {
          "id": "oikein",
          "text": "Oikein"
        },
        {
          "id": "vaarin",
          "text": "Väärin"
        },
        {
          "id": "skip",
          "text": "Jätän vastaamatta tähän kysymykseen"
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
      "explanation": "Väite säilyttää artikkelissa esitetyn määritelmän olennaisen merkityksen: vuoden 2021 puolustusselonteon määritelmä kohdistui nimenomaan maanpuolustuksen toimintojen suojaamiseen kuvatunlaiselta viestinnältä. Tässä ratkaisevaa on löytää oikea kohta nopeasti ja varmistaa, ettei väitteessä ole muutettu määritelmän kohdetta.\n\nLähde:\n”informaatiopuolustus määriteltiin hyvin suppeasti siten, että se rajattiin vain ’maanpuolustuksen toimintojen suojaamiseksi ulkoa ohjatun ja muun vahingoittamistarkoituksessa tehdyn viestinnän vaikutuksilta’.”",
      "learningPoint": "Vertaa väitteen merkitystä aineiston määritelmään. Tiivistetynkin ilmauksen pitää säilyttää, mitä suojataan ja millaisen viestinnän vaikutuksilta.\n\nHakuvinkki: Haku ”2021” rajaa aineistosta nopeasti oikean kohdan."
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
        "articleId": "turvallisuuden-nayttamot-muutoksessa-sota-informaatiotiloissa-vaatii-valppautta",
        "page": "57",
        "section": "kognitiivisia vinoumia käsittelevä kappale"
      },
      "explanation": "C ilmaisee saman asian eri sanarakenteella kuin artikkeli. A kuvaa vahvistusvinoumaa ja B saatavuusvinoumaa. Tehtävässä olennaista on tunnistaa määritelmän merkitys eikä vain etsiä vaihtoehdosta samoja sanoja kuin aineistosta.\n\nLähde:\n”Ankkurointivinouma taas tarkoittaa sitä, että nojaudumme liian vahvasti johonkin tiettyyn informaatioon, useimmiten siihen, jonka olemme saaneet ensimmäisenä.”",
      "learningPoint": "Tunnista sama määritelmä eri sanamuodossa. Tarkista, että ankkurointivinoumaan yhdistetään liian vahva nojautuminen tiettyyn, tavallisesti ensimmäisenä saatuun informaatioon.\n\nHakuvinkki: Hae ”ankkurointivinouma” ja vertaa sen määritelmää vaihtoehtoihin."
    },
    {
      "id": "g-h4-q6",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 3,
      "prompt": "Vastaako seuraava väittämä artikkelin sisältöä? Informaatiosodankäynti muodostaa itsenäisen konfliktin, johon ei tarvitse liittyä muuta meneillään olevaa konfliktia.",
      "options": [
        {
          "id": "tosi",
          "text": "Tosi"
        },
        {
          "id": "epatosi",
          "text": "Epätosi"
        },
        {
          "id": "skip",
          "text": "Jätän vastaamatta tähän kysymykseen"
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
      "explanation": "Väite kääntää artikkelin esittämän suhteen vastakkaiseksi. Artikkelin mukaan informaatiosodankäynti liittyy aina laajempaan konfliktiin, kun taas väitteessä se esitetään siitä riippumattomana.\n\nLähde:\n”ettei itsenäistä informaatiosotaa ole olemassa, vaan informaatiosodankäynti liittyy aina johonkin laajempaan meneillään olevaan konfliktiin.”",
      "learningPoint": "Tarkista, ilmaiseeko väite saman vai vastakkaisen sisällön kuin aineisto. Riippumattomuus muusta konfliktista on vastakkainen väite sille, että informaatiosodankäynti liittyy aina laajempaan konfliktiin.\n\nHakuvinkki: Hae ”itsenäistä informaatiosotaa”."
    },
    {
      "id": "g-h4-q7",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 7,
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
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
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
      "explanation": "Sotilaallinen, poliittinen ja ympäristöturvallisuus mainitaan turvallisuuden sektoreina. Kognitiivinen turvallisuus puolestaan esiintyy artikkelissa myöhemmin informaatiopuolustuksen yhteydessä, mutta sitä ei luetella tässä Kööpenhaminan koulukunnan turvallisuuden sektoriksi. Siksi tuttu ja artikkelissa oikeasti esiintyvä käsite voi silti olla tässä yhteydessä väärä.\n\nLähde:\n”turvallisuuden sektoreina, joita ovat sotilaallisen, poliittisen, taloudellisen, yhteiskunnallisen ja ympäristöturvallisuuden sektorit.”",
      "learningPoint": "Tarkista, mihin luokitteluun käsite kuuluu. Kognitiivinen turvallisuus esiintyy aineistossa, mutta sitä ei luetella Kööpenhaminan koulukunnan mallin turvallisuuden sektoriksi."
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
        },
        {
          "id": "skip",
          "text": "Jätän vastaamatta tähän kysymykseen"
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
      "explanation": "Väite säilyttää aineiston keskeisen tiedon: Suomessa termin ensimmäinen esiintyminen sijoitetaan vuoden 2021 puolustusselontekoon. Tässä tehtävässä ratkaisevaa on paikantaa yksittäinen ajankohtaa koskeva fakta täsmällisesti.\n\nLähde:\n”Suomessa vastaava informaatiopuolustuksen termi esiintyi ensimmäisen kerran vasta vuonna 2021 julkaistussa puolustusselonteossa.”",
      "learningPoint": "Paikanna termin ensimmäistä esiintymistä koskeva tieto. Varmista erikseen, että maa, vuosi ja asiakirja vastaavat aineistoa.\n\nHakuvinkki: Hakusana ”2021” vie suoraan olennaiseen kohtaan."
    },
    {
      "id": "g-h4-q9",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 7,
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
        "articleId": "turvallisuuden-nayttamot-muutoksessa-sota-informaatiotiloissa-vaatii-valppautta",
        "page": "57",
        "section": "informaatiopsykologista sodankäyntiä käsittelevä kappale"
      },
      "explanation": "Artikkeli erottaa kaksi ulottuvuutta toisistaan. Sosiaalis-kulttuurisen sodankäynnin kohteena ovat kansallinen identiteetti ja narratiivi, kun taas mentaalisen sodankäynnin kohteena ovat ihmisen mieli, ajattelu ja kognitio. A ja B siirtävät ominaisuuksia väärälle ulottuvuudelle, ja D muuttaa koheesioon kohdistuvan vaikutuksen suunnan.\n\nLähde:\n”Sosiaalis-kulttuurisen sodankäynnin kohteena ovat vastustajan kansallinen identiteetti ja narratiivi, joita pyritään haurastuttamaan kansallisen koheesion vähentämiseksi.”",
      "learningPoint": "Yhdistä vaikuttamisen kohde oikeaan sodankäynnin ulottuvuuteen. Kansallinen identiteetti ja narratiivi kuuluvat sosiaalis-kulttuuriseen sodankäyntiin, kun taas mieli, ajattelu ja kognitio kuuluvat mentaaliseen sodankäyntiin."
    },
    {
      "id": "g-h4-q10",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 2,
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
        "articleId": "turvallisuuden-nayttamot-muutoksessa-sota-informaatiotiloissa-vaatii-valppautta",
        "page": "56",
        "section": "DIDI-mallia ja hyväksyttävää informaatiovaikuttamista käsittelevä kappale"
      },
      "explanation": "B tiivistää samassa tekstikohdassa luetellut hyväksyttävän informaatiovaikuttamisen ominaisuudet. A, C ja D muuttavat yksittäisiä ehtoja tavalla, jota artikkeli ei tue. Esimerkiksi pelkkä oma intressi ei riitä, vaan sen on oltava legitiimi.\n\nLähde:\n”Hyväksyttävä informaatiovaikuttaminen on aina läpinäkyvää: sen lähde, kohde ja tavoitteet ovat tiedossa. Se on myös rakentavaa, eikä sen tavoitteena ole vahingoittaa ketään.”\n\nArtikkelissa todetaan lisäksi, ettei hyväksyttävä vaikuttaminen häiritse kohtuuttomasti yhteiskunnan toimintaa.",
      "learningPoint": "Tunnista usean läheisen virkkeen sisältöä tiivistävä vaihtoehto. Varmista, että tiivistelmä säilyttää hyväksyttävän vaikuttamisen ehdot eikä poista tai muuta niitä.\n\nHakuvinkki: Hae ”Hyväksyttävä informaatiovaikuttaminen”."
    },
    {
      "id": "g-h4-q11",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 6,
      "prompt": "Informaatiosodankäynnin operaatiot informaatiotilassa aloitetaan tyypillisesti vasta sen jälkeen, kun konflikti on tullut näkyväksi ja vihollisuudet ovat puhjenneet reaalimaailmassa.",
      "options": [
        {
          "id": "tosi",
          "text": "Tosi"
        },
        {
          "id": "epatosi",
          "text": "Epätosi"
        },
        {
          "id": "skip",
          "text": "Jätän vastaamatta tähän kysymykseen"
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
      "explanation": "Artikkelissa tapahtumien ajallinen järjestys on informaatiotilan operaatiot → konfliktin näkyväksi tuleminen ja vihollisuuksien puhkeaminen. Väitteessä järjestys on käännetty päinvastaiseksi. Ratkaisevaa ei siis ole vain huomata samoja tapahtumia, vaan tarkistaa niiden ajallinen suhde.\n\nLähde:\n”tyypillisesti operaatiot informaatiotilassa aloitetaan jo paljon ennen kuin konflikti tulee näkyväksi ja vihollisuudet puhkeavat reaalimaailmassa.”",
      "learningPoint": "Vertaa tapahtumien ajallista suhdetta. Ilmaukset ”jo paljon ennen” ja ”vasta sen jälkeen” sijoittavat samat operaatiot eri vaiheeseen suhteessa konfliktin näkyväksi tulemiseen.\n\nHakuvinkki: Hae esimerkiksi ”paljon ennen” tai ”konflikti tulee näkyväksi”."
    }
  ]
} satisfies ValintakoeGExercise;
