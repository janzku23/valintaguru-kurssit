import type { ValintakoeGExercise } from "./types";

/**
 * Harjoitus 8 on muodostettu toimitetusta VALINTAKOE G TEHTÄVÄT HELPPO -dokumentista.
 * Kaikki tehtävät ovat easy-tasoa.
 * HUOM: lähdedokumentti ei ilmoita tälle harjoitukselle aikarajaa.
 * durationMinutes=45 on nykyisen harjoitusmoottorin tekninen oletus.
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
      "categoryId": 3,
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
      "explanation": "Tekstissä paradoksi muodostuu kahdesta yhtäaikaisesta tehtävästä: koulun pitää sekä uusintaa olemassa olevaa yhteiskuntaa että uudistaa sitä tulevaisuutta varten. Vaihtoehto B säilyttää nämä kaksi tehtävää. Muissa vaihtoehdoissa esiintyy artikkelin teemoja, mutta ne eivät kuvaa tekstissä määriteltyä paradoksia.",
      "learningPoint": "Tunnista vaihtoehto, joka säilyttää tekstikohdan koko ajatuksen, vaikka asia ilmaistaan hieman eri sanoin. Älä valitse vaihtoehtoa vain siksi, että siinä esiintyy artikkelista tuttuja käsitteitä. Hakuvinkki: Hae esimerkiksi ”paradoksin” tai ”uusintaa”."
    },
    {
      "id": "g-h8-q2",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 4,
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
      "explanation": "Ratkaisevaa on, että doxa muodostuu ääneen lausumattomista oletuksista, jotka artikkelin mukaan myös pakenevat tietoisuutta. A muuttaa lausumattomat odotukset lausutuiksi ja B tiedostetuiksi. D puolestaan sekoittaa doxan artikkelissa käytettyihin pääoman ja habituksen käsitteisiin.",
      "learningPoint": "Tarkista käsitteen määritelmä erityisen tarkasti. Yksi muutos, kuten lausumaton → lausuttutai tiedostamaton → tiedostettu, voi tehdä muuten uskottavasta vaihtoehdosta väärän. Hakuvinkki: Hae ”doxa”."
    },
    {
      "id": "g-h8-q3",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 8,
      "prompt": "Tosi vai epätosi? Biestan jäsennyksessä sosialisaatio tarkoittaa ensisijaisesti oppisisältöjen omaksumista, kun taas kvalifikaatio liittyy yhteisön jäseneksi kasvamiseen ja sen olemisen tapojen omaksumiseen.",
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
        "articleId": "koulun-ja-opettajan-mahdollisuus-yhteiskunnan-kriittiseen-uudistamiseen",
        "page": "161–162",
        "section": "Biestan koulutuksen tarkoitusta käsittelevä kohta"
      },
      "explanation": "Väitteessä molemmat kuvaukset ovat peräisin artikkelista, mutta ne on yhdistetty vääriin käsitteisiin. Kvalifikaatio liittyy oppisisältöihin ja sosialisaatio yhteisön jäseneksi kasvamiseen. Väitteessä näiden merkitykset on vaihdettu keskenään.",
      "learningPoint": "Kun tekstissä esitellään lähekkäin useita käsitteitä, tarkista tarkasti, mikä määritelmä kuuluu millekin käsitteelle. Se, että molemmat tiedot löytyvät tekstistä, ei vielä tee väitteestä oikeaa. Hakuvinkki: Hae esimerkiksi ”kvalifikaatiolla”."
    },
    {
      "id": "g-h8-q4",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 8,
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
      "explanation": "A ja B kuvaavat tekstissä esitettyä ristiriitaa: julkilausutuissa tavoitteissa huomioidaan monikielinen todellisuus, mutta piiloisella tasolla luokkahuoneita järjestää edelleen oletus sujuvasta suomen kielestä. Myös D pitää paikkansa, sillä systeemisiä puutteita voidaan tekstin mukaan tunnistaa, vaikka niihin vastaaminen on vaikeaa. C vaihtaa tasot keskenään: yksikielisyys sijoitetaan artikkelissa piiloisten odotusten, ei julkilausuttujen opetussuunnitelmatavoitteiden tasolle.",
      "learningPoint": "Tarkista, mille tasolle tai ryhmälle tekstissä esitetty tieto kuuluu. Tässä ratkaisevaa on erottaa toisistaan julkilausutut tavoitteet ja piiloiset odotukset. Hakuvinkki: Hae esimerkiksi ”monikielinen” tai ”yksikielinen”."
    },
    {
      "id": "g-h8-q5",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 3,
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
      "explanation": "Artikkelissa kvalifikaation logiikalla tarkoitetaan sitä, että oppisisältöihin liittyvää mitattavan lopputuloksen logiikkaa sovelletaan myös koulutuksen muihin ulottuvuuksiin. Tällöin myös oppilaan sosiaaliselle toiminnalle ja toimijuudelle voidaan määritellä ikään kuin oikea lopputulos. A on lähellä oikeaa, mutta siinä tämä logiikka rajataan vain oppisisältöihin.",
      "learningPoint": "Tunnista vaihtoehto, joka säilyttää tekstikohdan kokonaismerkityksen eri sanoin. Tarkista erityisesti, koskeeko kuvattu asia vain yhtä koulutuksen ulottuvuutta vai kaikkia niitä. Hakuvinkki: Hae ”kvalifikaation logiikaksi”."
    },
    {
      "id": "g-h8-q6",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 6,
      "prompt": "Tosi vai epätosi? Kun sosialisaatiota arvioidaan ”oikein tai väärin” -logiikalla, oppilaan on artikkelin mukaan sitä helpompi menestyä, mitä luontevammin hänen habituksensa sopii jo ennestään koulun kentälle.",
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
        "tosi"
      ],
      "source": {
        "articleId": "koulun-ja-opettajan-mahdollisuus-yhteiskunnan-kriittiseen-uudistamiseen",
        "page": "163",
        "section": "kvalifikaation logiikan ongelmia käsittelevä kappale"
      },
      "explanation": "Artikkelissa todetaan, että oppilaiden erilaiset taustat merkitsevät erilaisia pääomia ja habituksia, joista osa sopii koulun kentälle paremmin kuin toiset. Kun sosialisaatiota mitataan ”oikein tai väärin” -logiikalla, valmiiksi koulun odotuksiin sopiva habitus voi siksi helpottaa menestymistä.",
      "learningPoint": "Tarkista kahden asian välisen suhteen suunta. Kiinnitä huomiota rakenteisiin kuten ”mitä X, sitä Y”, sillä niiden suunnan muuttaminen voi tehdä lähes oikeasta väitteestä väärän. Hakuvinkki: Hae ”helpompi menestyä”."
    },
    {
      "id": "g-h8-q7",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 4,
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
      "explanation": "D on epätosi, koska ratkaisevaa ei ole vain se, miten oppilas pääsee lopputulokseen. Artikkelin mukaan ongelma syntyy jo siitä, että toivottu lopputulos on määritelty etukäteen. Aidon toimijuuden sekä ajattelun ja harkinnan harjoittelun tulisi sisältää mahdollisuus avoimeen lopputulokseen.",
      "learningPoint": "Kiinnitä huomiota siihen, mikä yksityiskohta tekee muuten uskottavasta väitteestä väärän. Tässä ratkaisevaa on, onko lopputulos ennalta määritelty vai aidosti avoin. Hakuvinkki: Hae ”toivottu lopputulos”."
    },
    {
      "id": "g-h8-q8",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 5,
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
      "explanation": "A ja B vastaavat suoraan kirjoittajan esittämää väitettä. Myös C pitää paikkansa: kvalifikaatioiden logiikka voi ohjata arvioimaan oppilaiden toimijuuden toteuttamista ja koulun sosiaalisten lainalaisuuksien omaksumista. D kääntää seurauksen päinvastaiseksi: artikkelissa korostetaan, että oppilaiden vaihtelevat lähtökohdat voivat jäädä huomaamatta.",
      "learningPoint": "Tarkista vaikutuksen suunta. Väärä vaihtoehto voi käyttää oikeita käsitteitä mutta muuttaa esimerkiksi erojen tasaamisen vaikeutumisen niiden tasaantumiseksi. Hakuvinkki: Hae ”kvalifikaatioiden logiikan korostuminen”."
    },
    {
      "id": "g-h8-q9",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 3,
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
      "explanation": "B yhdistää oikein kaksi lähekkäin esitettyä ajatusta: opettajien arvioidaan keskimäärin sopivan koulun kentän odotuksiin suhteellisen helposti, ja heidän kouluun liittyvät ennakkokäsityksensä voivat näkyä työssä. D on uskottava häiriövaihtoehto, mutta tekstissä helppoutta ei selitetä sillä, että opettajat tiedostaisivat normatiiviset odotukset paremmin.",
      "learningPoint": "Tarkista, mitä tekstissä todella sanotaan ja mitä siinä vain voisi uskottavasti ajatella sanottavan. Älä lisää tekstissä esitetylle havainnolle omaa syytä. Hakuvinkki: Hae ”keskimääräistä helpommin”."
    },
    {
      "id": "g-h8-q10",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 8,
      "prompt": "Tosi vai epätosi? Artikkelissa oppilaiden aloillaan istuminen ja kirjojen oma-aloitteinen esiin ottaminen tulkitaan Biestan käsitteiden avulla ensisijaisesti akateemisiksi valmiuksiksi eli kvalifikaatioksi.",
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
        "articleId": "koulun-ja-opettajan-mahdollisuus-yhteiskunnan-kriittiseen-uudistamiseen",
        "page": "163",
        "section": "kolmatta osatutkimusta käsittelevä kohta"
      },
      "explanation": "Tehtävän ansa on siinä, kenen tulkinnasta puhutaan. Opettaja kuvaa toimintaa akateemisiksi valmiuksiksi, mutta artikkelissa Biestan käsitteillä tehty tulkinta sijoittaa sen pikemminkin sosialisaatioon ja subjektivaatioon. Väite vaihtaa nämä kaksi tulkintatasoa keskenään.",
      "learningPoint": "Tarkista, kuka tai mikä tulkintakehys liittää asian tiettyyn käsitteeseen. Sama toiminta voidaan tekstissä kuvata ensin yhdellä tavalla ja tulkita sen jälkeen toisella tavalla. Hakuvinkki: Hae ”aloillaan istumista” tai ”akateemisiksi valmiuksiksi”."
    },
    {
      "id": "g-h8-q11",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 6,
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
      "explanation": "A säilyttää tekstissä kuvatun suhteen: piiloiset odotukset eivät ole julkilausutuista tavoitteista irrallinen ilmiö, vaan ne vaikuttavat siihen, miten tavoitteet käytännössä toteutuvat. B–D muuttavat tätä suhdetta joko tekemällä julkilausutuista tavoitteista hallitsevia tai erottamalla nämä kaksi tasoa toisistaan.",
      "learningPoint": "Kun tekstissä kuvataan kahden asian välistä suhdetta, selvitä tarkasti, mikä vaikuttaa mihin. Molemmat käsitteet voivat esiintyä vaihtoehdossa oikein, vaikka niiden välinen suhde olisi väärä. Hakuvinkki: Hae ”siivilöityvät”."
    },
    {
      "id": "g-h8-q12",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 4,
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
      "explanation": "A, B ja D vastaavat artikkelin loppupäätelmiä. C on väärin, koska juuri kvalifikaation mitattavan logiikan soveltamista sosialisaatioon ja subjektivaatioon kritisoidaan. Artikkelin mukaan esimerkiksi toimijuuden kehittyminen edellyttää tilaa avoimelle lopputulokselle eikä ennalta määrättyä oikeaa suoritusta.",
      "learningPoint": "Usean oikean vaihtoehdon tehtävässä tarkista jokainen vaihtoehto itsenäisesti. Erityisesti tutulta kuulostava vaihtoehto voi kääntyä vääräksi, jos tekstissä kritisoitu toimintatapa esitetäänkin toivottavana ratkaisuna. Hakuvinkki: Hae esimerkiksi ”yhteiskunnallisia tehtäviä”, ”ajatella itse” ja ”uudistava potentiaali”."
    }
  ]
} satisfies ValintakoeGExercise;
