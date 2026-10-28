import type { ValintakoeGExercise } from "./types";

/**
 * Harjoitus 8: uusimman tehtävätekstin tehtävät 1–12.
 * Lähdeotteet ovat explanation-kentissä, hakuvinkit learningPoint-kentissä.
 * Uusi teksti ei ilmoita aikarajaa tai linkkiä; nykyiset arvot säilytetään.
 */
export const valintakoeGExercise8Base = {
  "id": "harjoitus-8",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Harjoitus 8 – Koulun ja opettajan mahdollisuus yhteiskunnan kriittiseen uudistamiseen",
  "description": "Aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 45,
  "difficulty": "easy",
  "articleId": "koulun-ja-opettajan-mahdollisuus-yhteiskunnan-kriittiseen-uudistamiseen",
  "articleTitle": "Koulun ja opettajan mahdollisuus yhteiskunnan kriittiseen uudistamiseen",
  "articleUrl": "https://journal.fi/kasvatusjaaika/article/view/146346",
  "questions": [
    {
      "id": "g-h8-q1",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 2,
      "prompt": "Mikä seuraavista kuvaa parhaiten koulun tehtäviin liittyvää paradoksia Juvosen mukaan?",
      "options": [
        {
          "id": "a",
          "text": "Koulun tulee ensisijaisesti säilyttää yhteiskunnan rakenteet, vaikka samalla oppilaiden yksilöllisiä oppimispotentiaaleja pyritään tukemaan."
        },
        {
          "id": "b",
          "text": "Koulun tulee sekä uusintaa yhteiskunnassa tärkeinä pidettyjä arvoja ja rakenteita että valmistaa oppilaita maailmaan, jota ei vielä ole olemassa."
        },
        {
          "id": "c",
          "text": "Koulun tulee tasata oppilaiden taustoista johtuvia eroja ja samalla varmistaa, että kaikki saavuttavat saman koulutustason."
        },
        {
          "id": "d",
          "text": "Koulun tulee samanaikaisesti tuottaa mitattavia oppimistuloksia ja vähentää niiden merkitystä koulutuksen tavoitteena."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "koulun-ja-opettajan-mahdollisuus-yhteiskunnan-kriittiseen-uudistamiseen",
        "page": "160",
        "section": "artikkelin alku"
      },
      "explanation": "Tekstissä paradoksi muodostuu kahdesta yhtäaikaisesta tehtävästä: koulun pitää sekä uusintaa olemassa olevaa yhteiskuntaa että uudistaa sitä tulevaisuutta varten. Vaihtoehto B säilyttää nämä kaksi tehtävää. Muissa vaihtoehdoissa esiintyy artikkelin teemoja, mutta ne eivät kuvaa tekstissä määriteltyä paradoksia.\n\nLähde:\n”Koulun keskeinen tehtävä on tuottaa uudelleen, eli uusintaa yhteiskunnan tärkeinä pidetyt arvot ja rakenteet. Samaan aikaan koulun tulisi myös uudistaa, eli valmistaa oppilaita maailmaan, jota ei vielä ole olemassa.”",
      "learningPoint": "Tunnista tiivistelmä, joka säilyttää koulun molemmat tehtävät: olemassa olevan yhteiskunnan uusintamisen ja tulevaisuuteen valmistavan uudistamisen. Pelkkä tuttujen käsitteiden esiintyminen ei riitä.\n\nHakuvinkki: Hae esimerkiksi ”paradoksin” tai ”uusintaa”."
    },
    {
      "id": "g-h8-q2",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 3,
      "prompt": "Mikä seuraavista kuvaa Bourdieun doxa-käsitettä artikkelissa oikein?",
      "options": [
        {
          "id": "a",
          "text": "Doxa tarkoittaa ääneen lausuttuja sääntöjä, joiden avulla yhteisö määrittelee hyväksyttävän toiminnan rajat."
        },
        {
          "id": "b",
          "text": "Doxa tarkoittaa tiedostettuja käsityksiä, joita yhteisön jäsenet voivat tarkoituksellisesti käyttää toimintansa ohjaamiseen."
        },
        {
          "id": "c",
          "text": "Doxa tarkoittaa ääneen lausumattomia oletuksia siitä, mikä sosiaalisessa kontekstissa näyttäytyy luonnollisena, tavallisena ja odotettavana."
        },
        {
          "id": "d",
          "text": "Doxa tarkoittaa yksilön perheensä kautta saamia resursseja, jotka vaikuttavat hänen mahdollisuuksiinsa vastata koulun odotuksiin."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "koulun-ja-opettajan-mahdollisuus-yhteiskunnan-kriittiseen-uudistamiseen",
        "page": "161",
        "section": "Bourdieun käsitteitä käsittelevä kappale"
      },
      "explanation": "Ratkaisevaa on, että doxa muodostuu ääneen lausumattomista oletuksista, jotka artikkelin mukaan myös pakenevat tietoisuutta. A muuttaa lausumattomat odotukset lausutuiksi ja B tiedostetuiksi. D puolestaan sekoittaa doxan artikkelissa käytettyihin pääoman ja habituksen käsitteisiin.\n\nLähde:\n”jokaisessa sosiaalisessa kontekstissa toimintaa jäsentää doxa, toisin sanoen ne ääneen lausumattomat oletukset siitä, mikä on luonnollista, tavallista ja odotettavaa: eli normaalia.”",
      "learningPoint": "Tarkista määritelmän merkityssuunta. Ääneen lausumattomien oletusten muuttaminen lausutuiksi tai tiedostamattomien oletusten muuttaminen tiedostetuiksi kääntää käsitteen olennaisen ominaisuuden vastakkaiseksi.\n\nHakuvinkki: Hae ”doxa”."
    },
    {
      "id": "g-h8-q3",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 7,
      "prompt": "Tosi vai epätosi? Biestan jäsennyksessä sosialisaatio tarkoittaa ensisijaisesti oppisisältöjen omaksumista, kun taas kvalifikaatio liittyy yhteisön jäseneksi kasvamiseen ja sen olemisen tapojen omaksumiseen.",
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
        "articleId": "koulun-ja-opettajan-mahdollisuus-yhteiskunnan-kriittiseen-uudistamiseen",
        "page": "161–162",
        "section": "Biestan koulutuksen tarkoitusta käsittelevä kohta"
      },
      "explanation": "Väitteessä molemmat kuvaukset ovat peräisin artikkelista, mutta ne on yhdistetty vääriin käsitteisiin. Kvalifikaatio liittyy oppisisältöihin ja sosialisaatio yhteisön jäseneksi kasvamiseen. Väitteessä näiden merkitykset on vaihdettu keskenään.\n\nLähde:\n”Kvalifikaatiolla hän tarkoittaa karkeasti oppisisältöjen ulottuvuutta, ja sosialisaatiolla puolestaan yhteisön jäseneksi kasvamista ja sen olemisen tapojen omaksumista.”",
      "learningPoint": "Yhdistä määritelmä oikeaan käsitteeseen. Oppisisällöt kuuluvat kvalifikaatioon ja yhteisön jäseneksi kasvaminen sosialisaatioon, vaikka molemmat kuvaukset esiintyvät samassa tekstikohdassa.\n\nHakuvinkki: Hae esimerkiksi ”kvalifikaatiolla”."
    },
    {
      "id": "g-h8-q4",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 7,
      "prompt": "Mitkä seuraavista väitteistä vastaavat artikkelissa kuvattuja havaintoja koulujen kielikäytännöistä? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Monikielisyys oli huomioitu koulujen julkilausutuissa tavoitteissa ja monissa käytänteissä."
        },
        {
          "id": "b",
          "text": "Luokkahuoneita järjesti edelleen piiloisesti oletus oppilaasta, joka pystyy opiskelemaan sujuvalla suomen kielellä."
        },
        {
          "id": "c",
          "text": "Koulujen yksikielisyyteen liittyvät odotukset olivat pääasiassa opetussuunnitelmassa julkilausuttuja tavoitteita."
        },
        {
          "id": "d",
          "text": "Systeemisiä puutteita voitiin tunnistaa, vaikka niihin vastaaminen osoittautui vaikeaksi."
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
        "articleId": "koulun-ja-opettajan-mahdollisuus-yhteiskunnan-kriittiseen-uudistamiseen",
        "page": "162",
        "section": "toista osatutkimusta käsittelevä kappale"
      },
      "explanation": "A ja B kuvaavat tekstissä esitettyä ristiriitaa: julkilausutuissa tavoitteissa huomioidaan monikielinen todellisuus, mutta piiloisella tasolla luokkahuoneita järjestää edelleen oletus sujuvasta suomen kielestä. Myös D pitää paikkansa, sillä systeemisiä puutteita voidaan tekstin mukaan tunnistaa, vaikka niihin vastaaminen on vaikeaa. C vaihtaa tasot keskenään: yksikielisyys sijoitetaan artikkelissa piiloisten odotusten, ei julkilausuttujen opetussuunnitelmatavoitteiden tasolle.\n\nLähde:\n”normatiivinen oletus oppilaasta, joka pystyy opiskelemaan sujuvalla suomen kielellä järjestää yhä piiloisesti luokkahuoneita, vaikka monien koulujen monikielinen todellisuus on huomioitu koulujen julkilausutuissa tavoitteissa ja monissa käytänteissä.”",
      "learningPoint": "Tarkista, kummalle tasolle havainto kuuluu. Monikielisyyden huomioiminen liittyy julkilausuttuihin tavoitteisiin, kun taas oletus sujuvalla suomella opiskelevasta oppilaasta vaikuttaa piiloisella tasolla.\n\nHakuvinkki: Hae esimerkiksi ”monikielinen” tai ”yksikielinen”."
    },
    {
      "id": "g-h8-q5",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 2,
      "prompt": "Mikä seuraavista kuvaa artikkelissa esitettyä kvalifikaation logiikkaa oikein?",
      "options": [
        {
          "id": "a",
          "text": "Koulutuksen eri ulottuvuuksia tarkastellaan toisistaan erillisinä siten, että vain oppisisältöjen oppimiselle voidaan määrittää mitattava lopputulos."
        },
        {
          "id": "b",
          "text": "Koulutuksen kaikille ulottuvuuksille voidaan määrittää ennalta mitattava lopputulos, jolloin myös oppilaan sosiaalista toimintaa ja toimijuutta voidaan arvioida oikean ja väärän kautta."
        },
        {
          "id": "c",
          "text": "Oppisisältöjen oppimista arvioidaan mitattavien lopputulosten sijaan ensisijaisesti oppilaan oman toimijuuden ja harkinnan perusteella."
        },
        {
          "id": "d",
          "text": "Sosialisaatiota ja subjektivaatiota arvioidaan oppisisällöistä poiketen ilman ennalta määriteltyjä tavoitteita, jotta oppilaan erilaiset lähtökohdat voidaan huomioida."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "koulun-ja-opettajan-mahdollisuus-yhteiskunnan-kriittiseen-uudistamiseen",
        "page": "163",
        "section": "kvalifikaation logiikkaa käsittelevä kappale"
      },
      "explanation": "Artikkelissa kvalifikaation logiikalla tarkoitetaan sitä, että oppisisältöihin liittyvää mitattavan lopputuloksen logiikkaa sovelletaan myös koulutuksen muihin ulottuvuuksiin. Tällöin myös oppilaan sosiaaliselle toiminnalle ja toimijuudelle voidaan määritellä ikään kuin oikea lopputulos. A on lähellä oikeaa, mutta siinä tämä logiikka rajataan vain oppisisältöihin.\n\nLähde:\n”Tämän logiikan mukaan koulutuksen kaikilla ulottuvuuksilla on ennalta määritelty, mitattava lopputulos: oikein, tai väärin.”",
      "learningPoint": "Vertaa vaihtoehtoa määritelmän kokonaismerkitykseen. Tiivistelmän pitää säilyttää se, että mitattavan lopputuloksen logiikka ulotetaan oppisisältöjen lisäksi muihinkin koulutuksen ulottuvuuksiin.\n\nHakuvinkki: Hae ”kvalifikaation logiikaksi”."
    },
    {
      "id": "g-h8-q6",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 2,
      "prompt": "Tosi vai epätosi? Kun sosialisaatiota arvioidaan ”oikein tai väärin” -logiikalla, oppilaan on artikkelin mukaan sitä helpompi menestyä, mitä luontevammin hänen habituksensa sopii jo ennestään koulun kentälle.",
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
        "tosi"
      ],
      "source": {
        "articleId": "koulun-ja-opettajan-mahdollisuus-yhteiskunnan-kriittiseen-uudistamiseen",
        "page": "163",
        "section": "kvalifikaation logiikan ongelmia käsittelevä kappale"
      },
      "explanation": "Artikkelissa todetaan, että oppilaiden erilaiset taustat merkitsevät erilaisia pääomia ja habituksia, joista osa sopii koulun kentälle paremmin kuin toiset. Kun sosialisaatiota mitataan ”oikein tai väärin” -logiikalla, valmiiksi koulun odotuksiin sopiva habitus voi siksi helpottaa menestymistä.\n\nLähde:\n”oppilaan on sitä helpompi menestyä, mitä luontevammin hänen habituksensa kouluun ennestään sopii.”",
      "learningPoint": "Tunnista saman suhteen ilmaisu eri sanamuodossa. Väite säilyttää aineiston ajatuksen siitä, että koulun kentälle ennestään sopiva habitus helpottaa menestymistä kuvatunlaisessa arvioinnissa.\n\nHakuvinkki: Hae ”helpompi menestyä”."
    },
    {
      "id": "g-h8-q7",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 3,
      "prompt": "Mikä seuraavista on EPÄTOSI artikkelin perusteella?",
      "options": [
        {
          "id": "a",
          "text": "Oppilaan oman toimijuuden mittaaminen ennalta määritellyn oikean lopputuloksen kautta on ongelmallista subjektivaation näkökulmasta."
        },
        {
          "id": "b",
          "text": "Jos toivottu lopputulos määritellään etukäteen, kyse ei välttämättä enää ole oppilaan omasta toimijuudesta vaan opettajan toiveiden suorittamisesta."
        },
        {
          "id": "c",
          "text": "Ajattelun ja harkinnan opettelu edellyttää tilaa aidosti avoimelle lopputulokselle."
        },
        {
          "id": "d",
          "text": "Oppilaan toimijuutta voidaan arvioida ”oikein tai väärin” -periaatteella, jos oppilas saa itse päättää, millä tavalla hän saavuttaa opettajan ennalta määrittelemän lopputuloksen."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "d"
      ],
      "source": {
        "articleId": "koulun-ja-opettajan-mahdollisuus-yhteiskunnan-kriittiseen-uudistamiseen",
        "page": "163",
        "section": "subjektivaatiota käsittelevä kappale"
      },
      "explanation": "D on epätosi, koska ratkaisevaa ei ole vain se, miten oppilas pääsee lopputulokseen. Artikkelin mukaan ongelma syntyy jo siitä, että toivottu lopputulos on määritelty etukäteen. Aidon toimijuuden sekä ajattelun ja harkinnan harjoittelun tulisi sisältää mahdollisuus avoimeen lopputulokseen.\n\nLähde:\n”kun toivottu lopputulos määritellään etukäteen, kyse ei tällöin ole oikeastaan oppilaan toimijuudesta, vaan opettajan esittämien toiveiden suorittamisesta.”\n\nLisäksi:\n\n”Ajattelun ja harkinnan opettelu edellyttää aidosti avointa, määrittelemätöntä lopputulosta”",
      "learningPoint": "Tarkista, esitetäänkö tekstissä ongelmalliseksi kuvattu toiminta vaihtoehdossa hyväksyttävänä. Vapaus valita suoritustapa ei muuta ennalta määrättyä lopputulosta aidosti avoimeksi lopputulokseksi.\n\nHakuvinkki: Hae ”toivottu lopputulos”."
    },
    {
      "id": "g-h8-q8",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 3,
      "prompt": "Mitkä seuraavista vastaavat artikkelissa esitettyä kuvausta kvalifikaatioiden logiikan korostumisen mahdollisista seurauksista? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Se voi heikentää koulun mahdollisuutta toteuttaa tehtäväänsä yhteiskunnan rakenteiden muokkaajana."
        },
        {
          "id": "b",
          "text": "Se voi vaikeuttaa oppilaiden taustoista nousevien erojen tasaamista."
        },
        {
          "id": "c",
          "text": "Se voi ohjata arvioimaan sitä, kuinka hyvin oppilaat toteuttavat toimijuuttaan tai ovat omaksuneet koulun sosiaalisen maailman lainalaisuudet."
        },
        {
          "id": "d",
          "text": "Se voi vähentää oppilaiden taustojen merkitystä, koska kaikille asetettavat samat odotukset tasoittavat heidän erilaisia lähtökohtiaan."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "a",
        "b",
        "c"
      ],
      "source": {
        "articleId": "koulun-ja-opettajan-mahdollisuus-yhteiskunnan-kriittiseen-uudistamiseen",
        "page": "164",
        "section": "artikkelin loppupuoli"
      },
      "explanation": "A ja B vastaavat suoraan kirjoittajan esittämää väitettä. Myös C pitää paikkansa: kvalifikaatioiden logiikka voi ohjata arvioimaan oppilaiden toimijuuden toteuttamista ja koulun sosiaalisten lainalaisuuksien omaksumista. D kääntää seurauksen päinvastaiseksi: artikkelissa korostetaan, että oppilaiden vaihtelevat lähtökohdat voivat jäädä huomaamatta.\n\nLähde:\n”kvalifikaatioiden logiikan korostuminen voi heikentää koulujen mahdollisuutta toteuttaa tehtäväänsä yhteiskunnan rakenteiden muokkaajana ja vaikeuttaa oppilaiden taustoista nousevien erojen tasaamista.”",
      "learningPoint": "Vertaa seurauksen suuntaa aineistoon. Erojen tasaamisen vaikeutumista ei voi muuttaa väitteeksi siitä, että samat odotukset tasoittavat oppilaiden erilaisia lähtökohtia.\n\nHakuvinkki: Hae ”kvalifikaatioiden logiikan korostuminen”."
    },
    {
      "id": "g-h8-q9",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 2,
      "prompt": "Mikä seuraavista kuvaa artikkelin perusteella oikein opettajien ja koulun kentän odotusten välistä suhdetta?",
      "options": [
        {
          "id": "a",
          "text": "Opettajien arvioidaan keskimäärin lunastavan koulun kentän odotukset oppilaita vaikeammin, koska heidän on tietoisesti haastettava koulun vakiintuneita käytäntöjä."
        },
        {
          "id": "b",
          "text": "Opettajien arvioidaan keskimäärin lunastavan koulun kentän odotukset melko helposti, mikä voi vaikuttaa heidän ennakkokäsityksiinsä koulusta, opettajista ja oppilaista."
        },
        {
          "id": "c",
          "text": "Opettajien suhde koulun kenttään muodostuu vasta opettajankoulutuksessa, minkä vuoksi heidän aikaisemmilla koulukokemuksillaan ei nähdä olevan merkitystä."
        },
        {
          "id": "d",
          "text": "Opettajien kyky lunastaa koulun kentän odotukset johtuu ensisijaisesti siitä, että he tiedostavat koulun normatiiviset odotukset oppilaita paremmin."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "koulun-ja-opettajan-mahdollisuus-yhteiskunnan-kriittiseen-uudistamiseen",
        "page": "162",
        "section": "ensimmäistä osatutkimusta käsittelevä kohta"
      },
      "explanation": "B yhdistää oikein kaksi lähekkäin esitettyä ajatusta: opettajien arvioidaan keskimäärin sopivan koulun kentän odotuksiin suhteellisen helposti, ja heidän kouluun liittyvät ennakkokäsityksensä voivat näkyä työssä. D on uskottava häiriövaihtoehto, mutta tekstissä helppoutta ei selitetä sillä, että opettajat tiedostaisivat normatiiviset odotukset paremmin.\n\nLähde:\n”opettajat itse lunastavat koulun kentän odotukset todennäköisesti keskimääräistä helpommin”\n\nMyöhemmin kohdassa käsitellään sitä,\n\n”miten opettajien ennakkokäsitykset koulusta, opettajista ja oppilaista voivat näkyä heidän arjen työssään.”",
      "learningPoint": "Vertaa lähekkäisiä ajatuksia yhdistävää vaihtoehtoa aineistoon. Säilytä opettajien koulusuhdetta ja ennakkokäsityksiä koskevat rajaukset äläkä lisää havainnolle omaa selitystä.\n\nHakuvinkki: Hae ”keskimääräistä helpommin”."
    },
    {
      "id": "g-h8-q10",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 7,
      "prompt": "Tosi vai epätosi? Artikkelissa oppilaiden aloillaan istuminen ja kirjojen oma-aloitteinen esiin ottaminen tulkitaan Biestan käsitteiden avulla ensisijaisesti akateemisiksi valmiuksiksi eli kvalifikaatioksi.",
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
        "articleId": "koulun-ja-opettajan-mahdollisuus-yhteiskunnan-kriittiseen-uudistamiseen",
        "page": "163",
        "section": "kolmatta osatutkimusta käsittelevä kohta"
      },
      "explanation": "Tehtävän ansa on siinä, kenen tulkinnasta puhutaan. Opettaja kuvaa toimintaa akateemisiksi valmiuksiksi, mutta artikkelissa Biestan käsitteillä tehty tulkinta sijoittaa sen pikemminkin sosialisaatioon ja subjektivaatioon. Väite vaihtaa nämä kaksi tulkintatasoa keskenään.\n\nLähde:\n”Eräs opettaja kuvaa oppilaiden aloillaan istumista ja oma-aloitteisesti kirjojen esiin ottamista akateemisiksi valmiuksiksi. Biestan käsitteillä tehdyssä tulkinnassa kyse on pikemminkin sosialisaatiosta ja subjektivaatiosta.”",
      "learningPoint": "Tarkista, kenen tulkinnasta ja mistä käsitteellisestä kehyksestä puhutaan. Opettajan kuvausta akateemisista valmiuksista ei voi esittää Biestan käsitteillä tehdyn tulkinnan sisältönä.\n\nHakuvinkki: Hae ”aloillaan istumista” tai ”akateemisiksi valmiuksiksi”."
    },
    {
      "id": "g-h8-q11",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 2,
      "prompt": "Mikä seuraavista kuvaa tarkimmin artikkelissa esitettyä koulun julkilausuttujen tavoitteiden ja piiloisten odotusten välistä suhdetta?",
      "options": [
        {
          "id": "a",
          "text": "Piiloiset normatiiviset odotukset vaikuttavat siihen, miten julkilausutut tavoitteet toteutuvat koulun arjessa, ja tavoitteiden väliset ristiriidat voivat tuottaa odottamattomia lopputulemia."
        },
        {
          "id": "b",
          "text": "Julkilausutut tavoitteet syrjäyttävät vähitellen koulun piiloiset normatiiviset odotukset, jos tavoitteet kirjataan riittävän tarkasti opetussuunnitelmaan."
        },
        {
          "id": "c",
          "text": "Piiloiset normatiiviset odotukset vaikuttavat koulun arkeen lähinnä silloin, kun opetussuunnitelmassa ei ole määritelty kyseistä asiaa koskevia tavoitteita."
        },
        {
          "id": "d",
          "text": "Julkilausutut tavoitteet ja piiloiset normatiiviset odotukset toimivat koulun arjessa toisistaan riippumatta, vaikka ne voivat kohdistua samoihin oppilaisiin."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
        }
      ],
      "correctAnswerIds": [
        "a"
      ],
      "source": {
        "articleId": "koulun-ja-opettajan-mahdollisuus-yhteiskunnan-kriittiseen-uudistamiseen",
        "page": "163",
        "section": "artikkelin loppupuolen yhteenveto"
      },
      "explanation": "A säilyttää tekstissä kuvatun suhteen: piiloiset odotukset eivät ole julkilausutuista tavoitteista irrallinen ilmiö, vaan ne vaikuttavat siihen, miten tavoitteet käytännössä toteutuvat. B, C ja D muuttavat tätä suhdetta joko tekemällä julkilausutuista tavoitteista hallitsevia tai erottamalla nämä kaksi tasoa toisistaan.\n\nLähde:\n”koulutuksen julkilausutut tavoitteet siivilöityvät koulun arkeen piiloisten, normatiivisten odotusten läpi.”\n\nLisäksi:\n\n”Tavoitteiden ristiriidat voivat tuottaa ennalta odottamattomia lopputulemia.”",
      "learningPoint": "Tunnista kielikuvan merkitys tiivistetystä vaihtoehdosta. Tavoitteiden siivilöityminen piiloisten odotusten läpi tarkoittaa, että odotukset vaikuttavat tavoitteiden toteutumiseen koulun arjessa.\n\nHakuvinkki: Hae ”siivilöityvät”."
    },
    {
      "id": "g-h8-q12",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 3,
      "prompt": "Mitkä seuraavista väitteistä vastaavat artikkelin loppupäätelmiä koulun yhteiskunnallisesta tehtävästä? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Opettajat toteuttavat koulun yhteiskunnallisia tehtäviä opetustyössään riippumatta siitä, mieltävätkö he itse yhteiskunnallisen roolin osaksi työtään."
        },
        {
          "id": "b",
          "text": "Oppisisältöjen oppimisen rinnalla oppilaat tarvitsevat mahdollisuuksia oppia ajattelemaan itse ja toimimaan harkitusti toisin."
        },
        {
          "id": "c",
          "text": "Koulun yhteiskuntaa uudistava tehtävä toteutuu parhaiten silloin, kun sosialisaatiolle ja subjektivaatiolle määritellään yhtä tarkat mitattavat lopputulokset kuin kvalifikaatiolle."
        },
        {
          "id": "d",
          "text": "Kapea keskittyminen oppimistuloksiin ja niiden mittaamiseen voi vahvistaa koulun yhteiskuntaa uudelleen tuottavaa tehtävää samalla, kun uudistava potentiaali jää vähäisemmäksi."
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
        "articleId": "koulun-ja-opettajan-mahdollisuus-yhteiskunnan-kriittiseen-uudistamiseen",
        "page": "163–164",
        "section": "artikkelin loppupäätelmät"
      },
      "explanation": "A, B ja D vastaavat artikkelin loppupäätelmiä. C on väärin, koska juuri kvalifikaation mitattavan logiikan soveltamista sosialisaatioon ja subjektivaatioon kritisoidaan. Artikkelin mukaan esimerkiksi toimijuuden kehittyminen edellyttää tilaa avoimelle lopputulokselle eikä ennalta määrättyä oikeaa suoritusta.\n\nLähde:\n”opettajat toteuttavat väistämättä koulun yhteiskunnallisia tehtäviä opettaessaan: näin tapahtuu riippumatta siitä, mieltävätkö he itse yhteiskunnallisen roolin osaksi työtään.”\n\nSivulla 164 todetaan lisäksi:\n\n”sisältöjen oppimisen rinnalle tarvitaan kykyä myös ajatella itse sekä toimia harkitusti toisin.”\n\nJa myöhemmin:\n\n”Tällainen tulkinta vahvistaa koulun uudelleen tuottavaa tehtävää, mutta yhteiskuntaa uudistava potentiaali jää vähäiseksi.”",
      "learningPoint": "Tarkista, muuttuuko tekstissä kritisoitu toimintatapa vaihtoehdossa suositeltavaksi. Mitattavan lopputuloksen logiikan ulottamista toimijuuteen ei voi esittää koulun uudistavan tehtävän parhaana toteutustapana.\n\nHakuvinkki: Hae esimerkiksi ”yhteiskunnallisia tehtäviä”, ”ajatella itse” ja ”uudistava potentiaali”."
    }
  ]
} satisfies ValintakoeGExercise;
