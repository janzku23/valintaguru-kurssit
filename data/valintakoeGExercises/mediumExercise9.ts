import type { ValintakoeGExercise } from "./types";

/**
 * Keskivaikea harjoitus 9: käyttäjän toimittamat tehtävät 1–20.
 * Lähdeotteet ovat explanation-kentissä, hakuvinkit learningPoint-kentissä.
 */
export const valintakoeGMediumExercise9Base = {
  "id": "keskivaikea-harjoitus-9",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Keskivaikea harjoitus 9 – Kolmantena osapuolena valtion ja kansalaisten välisessä suhteessa: tapaustutkimus järjestön digitaalisten julkisten sosiaali- ja terveyspalvelujen käyttöön tarjoamasta asiointiavusta",
  "description": "33 minuutin keskivaikea aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 33,
  "difficulty": "medium",
  "articleId": "kolmantena-osapuolena-valtion-ja-kansalaisten-valisessa-suhteessa",
  "articleTitle": "Kolmantena osapuolena valtion ja kansalaisten välisessä suhteessa: tapaustutkimus järjestön digitaalisten julkisten sosiaali- ja terveyspalvelujen käyttöön tarjoamasta asiointiavusta",
  "articleUrl": "https://journal.fi/janus/article/view/153326/125967",
  "questions": [
    {
      "id": "g-m9-q1",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Tosi vai epätosi?\nJulkisten sosiaali- ja terveyspalvelujen digitalisointi on lisännyt kansalaisten vastuuta omien asioidensa hoitamisesta samalla, kun mahdollisuuksia asioida suoraan julkisten palvelujen ammattilaisten kanssa on vähennetty. Tämä voi vaikeuttaa erityisesti sellaisten kansalaisten sosiaalisten oikeuksien toteutumista, joilla ei ole riittäviä digitaalisia, kielellisiä tai hallinnollisia taitoja.",
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
        "articleId": "kolmantena-osapuolena-valtion-ja-kansalaisten-valisessa-suhteessa",
        "page": "160–161"
      },
      "explanation": "Digitalisointi on siirtänyt kansalaisille tehtäviä, joita julkisten palvelujen ammattilaiset ovat aiemmin hoitaneet. Samalla henkilökohtaisia asiointimahdollisuuksia on vähennetty. Digitaalinen asiointi edellyttää teknisten taitojen lisäksi riittävää kielitaitoa ja palvelujärjestelmän ymmärtämistä. Näiden taitojen puuttuminen voi vaikeuttaa palveluihin ja etuuksiin pääsyä.\n\nLähde:\nS. 160–161, johdanto. Sivulla 160 todetaan: \"Palvelujen digitalisointi on lisännyt kansalaisten omaa vastuuta asioinnista ja sen onnistumisesta.\"",
      "learningPoint": "Opiskelijan tulee yhdistää palvelujärjestelmässä tapahtunut muutos sen mahdollisiin seurauksiin. Pelkkä digitalisaation lisääntymisen tunnistaminen ei riitä.\nHakuvinkki: Ctrl+F: omaa vastuuta ja hallinnollista ymmärrystä."
    },
    {
      "id": "g-m9-q2",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein julkisten palvelujen ammattilaisten ja järjestöjen neuvojien aseman suhteessa kansalaisten asiointiin?",
      "options": [
        {
          "id": "a",
          "text": "Julkisten palvelujen ammattilaiset toimivat ilman poliittista mandaattia, kun taas järjestöjen neuvojilla on lakisääteinen oikeus käyttää julkista valtaa asiakkaidensa puolesta."
        },
        {
          "id": "b",
          "text": "Sekä julkisten palvelujen ammattilaiset että järjestöjen neuvojat toimivat saman julkisia palveluja koskevan sääntelyn piirissä, mutta järjestöjen neuvojilla on laajempi harkintavalta."
        },
        {
          "id": "c",
          "text": "Julkisten palvelujen ammattilaisilla on virallinen mandaatti edustaa julkista valtaa, kun taas järjestöjen neuvojat voivat käytännössä hoitaa samankaltaisia välitystehtäviä ilman vastaavaa mandaattia ja julkisen palvelutoiminnan sääntelyä."
        },
        {
          "id": "d",
          "text": "Järjestöjen neuvojien tehtävänä on ainoastaan tekninen digituki, kun taas julkisten palvelujen ammattilaiset yksin tulkitsevat asiakkaiden palvelutarpeita ja välittävät niitä valtiolle."
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
        "articleId": "kolmantena-osapuolena-valtion-ja-kansalaisten-valisessa-suhteessa",
        "page": "162–164",
        "section": "Kansalaisten sosiaalisten oikeuksien toteutuminen palvelujen asiakastyössä"
      },
      "explanation": "C on oikein. Julkisten palvelujen ammattilaiset toimivat virallisen mandaatin ja julkista palvelutoimintaa koskevan sääntelyn puitteissa. Järjestöjen neuvojat voivat käytännössä hoitaa samankaltaisia tehtäviä ilman vastaavaa asemaa.\nA on väärin, koska toimijoiden asemat on vaihdettu keskenään.\nB on väärin, koska järjestöjen epävirallinen asiointiapu ei kuulu saman julkisia palveluja koskevan sääntelyn piiriin.\nD on väärin, sillä järjestön neuvoja tutkii ja tulkitsee asiakkaan tarpeita sekä välittää niitä valtiolle.\n\nLähde:\nS. 162–164, \"Kansalaisten sosiaalisten oikeuksien toteutuminen palvelujen asiakastyössä\" ja \"Järjestöjen digitaalisten julkisten palvelujen käyttöön tarjoama asiointiapu\". Sivulla 164 todetaan, ettei avun tarjoamiselle ole \"julkisen sektorin mandaattia\".",
      "learningPoint": "Opiskelijan tulee erottaa virallisesti valtuutettu julkisten palvelujen ammattilainen epävirallisesta asiointiavun tarjoajasta. Samankaltaiset käytännön tehtävät eivät tarkoita samanlaista oikeudellista asemaa.\nHakuvinkki: Ctrl+F: poliittinen mandaatti ja julkisen sektorin mandaattia."
    },
    {
      "id": "g-m9-q3",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Oikein vai väärin?\nArtikkelin mukaan järjestöjen mahdollisuudet auttaa kansalaisia julkisten sosiaali- ja terveyspalvelujen käytössä ovat parantuneet digitalisaation myötä, koska järjestöjen työntekijät voivat nykyisin ottaa aiempaa helpommin suoraan yhteyttä julkisten palvelujen ammattilaisiin.",
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
        "articleId": "kolmantena-osapuolena-valtion-ja-kansalaisten-valisessa-suhteessa",
        "page": "163–164",
        "section": "Järjestöjen digitaalisten julkisten palvelujen käyttöön tarjoama asiointiapu"
      },
      "explanation": "Väittämä kääntää artikkelissa esitetyn kehityssuunnan päinvastaiseksi. Aiemmin järjestöjen työntekijät saattoivat soittaa julkisten palvelujen ammattilaisille tai mennä asiakkaiden mukaan tapaamisiin. Digitalisaation myötä mahdollisuudet tällaiseen yhteydenpitoon ovat kaventuneet, ja apua joudutaan antamaan yhä enemmän digitaalisten järjestelmien kautta.\n\nLähde:\nS. 163–164, \"Järjestöjen digitaalisten julkisten palvelujen käyttöön tarjoama asiointiapu\". Sivulla 163 todetaan, etteivät järjestöjen työntekijät \"saa enää yhteyttä palvelujen ammattilaisiin\".",
      "learningPoint": "Opiskelijan tulee tunnistaa, onko kuvattu muutos lisännyt vai vähentänyt tiettyjä toimintamahdollisuuksia. Digitalisaation lisääntyminen ei tarkoita kaikkien asiointitapojen helpottumista.\nHakuvinkki: Ctrl+F: eivät saa enää yhteyttä."
    },
    {
      "id": "g-m9-q4",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mitkä seuraavista väittämistä yhdistävät oikein tutkimuksessa tunnistetut neuvontatapaamisen vaiheet ja niihin liittyvät tehtävät? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Asiakkaan tarpeiden tutkimisen ja tulkitsemisen vaiheessa neuvoja selvittää asiakkaan tilanteen ja päättelee, mitä palveluja tai etuuksia tämä tarvitsee."
        },
        {
          "id": "b",
          "text": "Valtion edustaminen asiakkaalle tarkoittaa ensisijaisesti sitä, että neuvoja syöttää asiakkaan tiedot digitaalisiin hakemuksiin ja välittää ne viranomaisille."
        },
        {
          "id": "c",
          "text": "Valtion edustamisen vaiheessa neuvoja voi joutua selittämään asiakkaalle julkisten palvelujen päätöksiä, toimintatapoja ja ongelmatilanteita."
        },
        {
          "id": "d",
          "text": "Lopetuksen ja jatkotoimien määräytymisen vaiheessa neuvoja tekee asiakkaan sosiaalietuuksia koskevat viralliset päätökset ja vastaa niiden toimeenpanosta."
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
        "articleId": "kolmantena-osapuolena-valtion-ja-kansalaisten-valisessa-suhteessa",
        "page": "165–166 ja 168–171"
      },
      "explanation": "A on oikein. Neuvoja selvittää asiakkaan tilanteen ja tulkitsee, millaista apua tämä tarvitsee.\nB on väärin. Asiakkaan tietojen kirjaaminen ja välittäminen viranomaisille liittyy asiakkaan tarpeiden välittämiseen valtiolle.\nC on oikein. Neuvoja välittää asiakkaalle tietoa viranomaisten toimintatavoista ja selittää esimerkiksi kielteisiä päätöksiä.\nD on väärin. Järjestön neuvoja ei tee virallisia etuuspäätöksiä, vaan auttaa asiakasta asioinnissa.\n\nLähde:\nS. 165–166 ja 168–171, neuvontatapaamisten analyysivaiheet. Sivulla 166 esitellään neljä vaihetta, joihin kuuluvat asiakkaan tarpeiden tutkiminen ja valtion edustaminen asiakkaalle.",
      "learningPoint": "Opiskelijan tulee erottaa toisistaan asiakkaan tarpeiden välittäminen valtiolle ja valtion toiminnan selittäminen asiakkaalle. Väärä vaihtoehto voi sisältää oikean tehtävän mutta liittää sen väärään analyysivaiheeseen.\nHakuvinkki: Ctrl+F: neljä vaihetta ja Valtion edustaminen asiakkaalle."
    },
    {
      "id": "g-m9-q5",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein tutkimuksen aineistonkeruuta ja analyysia?",
      "options": [
        {
          "id": "a",
          "text": "Tutkimuksessa havainnoitiin kolmen järjestön neuvontaa noin 50 tuntia vuonna 2022, ja aineisto analysoitiin kuuden alkuperäisen vaiheen mukaisesti."
        },
        {
          "id": "b",
          "text": "Tutkimuksessa havainnoitiin yhden järjestön neuvontatapaamisia noin 50 tuntia syksyllä 2022. Havainnoista kertyi 27 sivua muistiinpanoja, ja analyysissa tunnistettiin neljä neuvontatapaamisen vaihetta."
        },
        {
          "id": "c",
          "text": "Tutkimuksessa kerättiin 27 tuntia havainnointiaineistoa keväällä 2022 ja muodostettiin 50 sivua muistiinpanoja, jotka jaettiin neljään analyysivaiheeseen."
        },
        {
          "id": "d",
          "text": "Tutkimuksessa havainnoitiin yhden järjestön neuvontaa noin 50 tuntia vuonna 2023, ja analyysin lopulliseksi tulokseksi muodostui kuusi vaihetta."
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
        "articleId": "kolmantena-osapuolena-valtion-ja-kansalaisten-valisessa-suhteessa",
        "page": "164–166",
        "section": "Tapaustutkimus järjestön ikääntyneille maahanmuuttajille tarjoamasta asiointiavusta"
      },
      "explanation": "B yhdistää tutkimuskohteen, aineistonkeruun ajankohdan, havainnointimäärän, muistiinpanojen laajuuden ja analyysin tuloksen oikein.\nA on väärin, koska tutkimus koski yhtä järjestöä ja lopullisia vaiheita oli neljä.\nC vaihtaa tunti- ja sivumäärät keskenään sekä muuttaa vuodenajan.\nD muuttaa aineistonkeruun vuoden ja sekoittaa alkuperäisen kuusivaiheisen mallin lopulliseen nelivaiheiseen analyysiin.\n\nLähde:\nS. 164–166, \"Tapaustutkimus järjestön ikääntyneille maahanmuuttajille tarjoamasta asiointiavusta\". Sivulla 164 todetaan havainnointia tehdyn \"noin 50 tunnin ajan syksyllä 2022\".",
      "learningPoint": "Opiskelijan tulee erottaa aineistonkeruun määrä, muistiinpanojen laajuus ja analyysivaiheiden lukumäärä. Kaikki vaihtoehdon tiedot tulee tarkistaa.\nHakuvinkki: Ctrl+F: 50 tunnin, 27 sivua ja neljä vaihetta."
    },
    {
      "id": "g-m9-q6",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Tosi vai epätosi?\nTutkimuksessa neuvontatapaamisten etenemistä analysoitiin aluksi Byrne ja Longin kuusivaiheisen mallin avulla. Lopullinen analyysi kuitenkin muokkasi vaiheiden määrää ja sisältöä, eikä neuvontatapaamisten havaittu aina etenevän lineaarisesti vaiheesta toiseen.",
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
        "articleId": "kolmantena-osapuolena-valtion-ja-kansalaisten-valisessa-suhteessa",
        "page": "165–166"
      },
      "explanation": "Tutkijat hyödynsivät aluksi Byrne ja Longin kuusivaiheista vastaanottotilanteiden mallia. Aineiston analyysin perusteella vaiheita muokattiin neljäksi. Erityisesti asiakkaan tarpeiden välittäminen valtiolle ja valtion edustaminen asiakkaalle saattoivat limittyä toisiinsa.\n\nLähde:\nS. 165–166, tutkimuksen analyysimenetelmä. Sivulla 166 todetaan: \"Neuvonta ei aina edennyt lineaarisesti vaiheesta toiseen\".",
      "learningPoint": "Opiskelijan tulee erottaa analyysin alkuperäinen teoreettinen malli aineiston perusteella muodostetusta lopullisesta jäsennyksestä. Lisäksi on huomattava, ettei nelivaiheinen malli tarkoita kaikkien tapaamisten etenevän täsmälleen samassa järjestyksessä.\nHakuvinkki: Ctrl+F: kuuden vaiheen ja lineaarisesti."
    },
    {
      "id": "g-m9-q7",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä syitä siihen, miksi julkisten palvelujen digitalisointi voi lisätä ulkopuolisen asiointiavun tarvetta? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Digitaalinen asiointi edellyttää teknisen osaamisen lisäksi kielitaitoa ja palvelujärjestelmän ymmärtämistä, minkä vuoksi pelkkä digitaitojen kehittäminen ei välttämättä ratkaise kaikkia asiointivaikeuksia."
        },
        {
          "id": "b",
          "text": "Digi- ja väestötietoviraston koordinoima digituki kattaa myös kaikki kielelliseen haavoittuvuuteen ja palvelujärjestelmän ymmärtämiseen liittyvät ongelmat, joten järjestöjen asiointiapua tarvitaan vain poikkeustapauksissa."
        },
        {
          "id": "c",
          "text": "Henkilökohtaisten asiointimahdollisuuksien vähentäminen voi lisätä riippuvuutta ulkopuolisista auttajista, jos kansalainen ei kykene hoitamaan asioitaan itsenäisesti digitaalisesti."
        },
        {
          "id": "d",
          "text": "Julkisten palvelujen digitalisointi on vähentänyt kansalaisten tarvetta selvittää itse oikeutensa etuuksiin, koska digitaaliset järjestelmät hoitavat tämän tehtävän automaattisesti."
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
        "articleId": "kolmantena-osapuolena-valtion-ja-kansalaisten-valisessa-suhteessa",
        "page": "160–161"
      },
      "explanation": "A on oikein. Digitaalinen asiointi edellyttää teknisten taitojen lisäksi kielitaitoa ja hallinnollista ymmärrystä. Pelkkä digituki ei ratkaise kaikkia näihin liittyviä ongelmia.\nB on väärin. Artikkelissa nimenomaan todetaan, ettei nykyinen digituki vastaa kaikkiin kielellisiin ja hallinnollisiin asiointivaikeuksiin.\nC on oikein. Kun henkilökohtaisia asiointimahdollisuuksia vähennetään, itsenäiseen digitaaliseen asiointiin kykenemättömät kansalaiset voivat joutua turvautumaan ulkopuolisiin auttajiin.\nD on väärin. Digitalisointi on lisännyt kansalaisten vastuuta selvittää itse oikeutensa, palvelutarpeensa ja asiointiprosessinsa.\n\nLähde:\nS. 160–161, johdanto. Sivulla 161 todetaan digitukea koskevasta rajauksesta: \"se ei auta kansalaisia, joiden digitaalisen asioinnin ongelmat johtuvat digiongelmien sijaan tai ohella suomen kielen taidosta\".",
      "learningPoint": "Opiskelijan tulee yhdistää digitalisoinnin vaikutukset kansalaisilta edellytettäviin taitoihin ja vaihtoehtoisten asiointitapojen saatavuuteen. On tarkistettava, ratkaiseeko jokin tukimuoto kaikki asioinnin esteet vai vain osan niistä.\nHakuvinkki: Ctrl+F: hallinnollista ymmärrystä ja digitukea."
    },
    {
      "id": "g-m9-q8",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Oikein vai väärin?\nJärjestön tarjoama asiointiapu voi olla asiakkaalle kokonaisvaltaista, koska neuvoja pystyy tarvittaessa käsittelemään samalla tapaamisella useiden hallinnonalojen asioita. Tämä ei kuitenkaan tarkoita, että neuvojalla olisi virallinen oikeus tehdä asiakkaan puolesta julkisten palvelujen päätöksiä.",
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
        "a"
      ],
      "source": {
        "articleId": "kolmantena-osapuolena-valtion-ja-kansalaisten-valisessa-suhteessa",
        "page": "172–173",
        "section": "Pohdinta"
      },
      "explanation": "Artikkelin mukaan järjestön asiointiavun vahvuuksia ovat kokonaisvaltaisuus, asiakkaalle tuttu kieli ja mahdollisuus käsitellä useita asioita yhdellä käynnillä. Neuvojan toiminta ei kuitenkaan perustu julkisen vallan antamaan mandaattiin, eikä hänellä ole julkisten palvelujen ammattilaisten virallista päätösvaltaa.\n\nLähde:\nS. 172–173, \"Pohdinta\". Sivulla 172 todetaan neuvojan hoitavan tarvittaessa \"samalla käynnillä useille julkisen sektorin hallinnonaloille kuuluvia asioita\".",
      "learningPoint": "Opiskelijan tulee erottaa neuvojan käytännön mahdollisuudet hänen virallisesta toimivallastaan. Useiden hallinnonalojen asioiden hoitaminen ei merkitse oikeutta tehdä niitä koskevia viranomaispäätöksiä.\nHakuvinkki: Ctrl+F: samalla käynnillä ja ilman virallista."
    },
    {
      "id": "g-m9-q9",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 4,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein järjestön neuvojan kaksisuuntaista roolia asiakkaan ja valtion välisessä suhteessa?",
      "options": [
        {
          "id": "a",
          "text": "Neuvoja edustaa valtiota silloin, kun hän selvittää asiakkaan tarpeita ja kirjaa niitä hakemuksiin, mutta edustaa asiakasta silloin, kun hän selittää viranomaisten päätöksiä ja toimintatapoja."
        },
        {
          "id": "b",
          "text": "Neuvoja toimii ainoastaan asiakkaan edustajana, sillä valtion edustaminen edellyttää aina virallista poliittista mandaattia."
        },
        {
          "id": "c",
          "text": "Neuvoja välittää asiakkaalle valtion toimintatapoja vain silloin, kun viranomainen on nimenomaisesti antanut hänelle siihen luvan."
        },
        {
          "id": "d",
          "text": "Neuvoja välittää asiakkaan tarpeita valtiolle esimerkiksi tulkitsemalla niitä ja täyttämällä hakemuksia sekä edustaa valtiota asiakkaalle selittäessään palvelujen toimintatapoja ja päätöksiä."
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
        "articleId": "kolmantena-osapuolena-valtion-ja-kansalaisten-valisessa-suhteessa",
        "page": "168–170",
        "section": "Asiakkaan tarpeiden tutkiminen, tulkitseminen ja välittäminen valtiolle"
      },
      "explanation": "D on oikein. Neuvojan rooli on kaksisuuntainen: hän muotoilee asiakkaan tarpeita viranomaisjärjestelmän ymmärtämään muotoon ja tulkitsee viranomaisjärjestelmän toimintaa asiakkaalle.\nA vaihtaa näiden tehtävien suunnat keskenään.\nB on väärin, koska artikkelin keskeinen havainto on juuri se, että neuvoja edustaa käytännössä valtiota ilman virallista mandaattia.\nC on väärin, koska valtion toimintatapojen välittäminen syntyy asiointiavun käytännön tilanteissa eikä edellytä erillistä viranomaisen antamaa valtuutusta.\n\nLähde:\nS. 168–170, \"Asiakkaan tarpeiden tutkiminen, tulkitseminen ja välittäminen valtiolle\" sekä \"Valtion edustaminen asiakkaalle\". Sivulla 169 todetaan: \"Neuvoja ei kuitenkaan ainoastaan välitä asiakkaan asioita valtiolle, vaan edustaa samalla myös valtiota asiakkaalle.\"",
      "learningPoint": "Opiskelijan tulee tunnistaa, kuka välittää kenen tietoja ja kenelle. Asiakkaan tarpeiden välittäminen valtiolle on eri asia kuin valtion toimintatapojen välittäminen asiakkaalle.\nHakuvinkki: Ctrl+F: edustaa samalla myös valtiota."
    },
    {
      "id": "g-m9-q10",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Tosi vai epätosi?\nArtikkelin mukaan neuvontatapaamisten asiakkaiden asiointivaikeudet johtuvat aina ensisijaisesti puutteellisista digitaidoista. Siksi asiakkaat pystyisivät hoitamaan kaikki asiansa itsenäisesti, jos he oppisivat kirjautumaan digitaalisiin palveluihin.",
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
        "articleId": "kolmantena-osapuolena-valtion-ja-kansalaisten-valisessa-suhteessa",
        "page": "167–168",
        "section": "Aloitus ja käynnin syyn selvittäminen"
      },
      "explanation": "Asiakkaiden asiointivaikeudet voivat liittyä puutteellisten digitaitojen lisäksi suomen kielen lukemiseen ja kirjoittamiseen, palvelujärjestelmän tuntemattomuuteen sekä terveydellisiin ongelmiin. Myös muistisairaudet voivat vaikeuttaa asiointia. Siksi kirjautumisen oppiminen ei yksin poistaisi kaikkia asioinnin esteitä.\n\nLähde:\nS. 167–168, \"Aloitus ja käynnin syyn selvittäminen\". Sivulla 167 todetaan: \"Vaikeuksiin on tavallisesti monia syitä\".",
      "learningPoint": "Opiskelijan tulee tunnistaa, milloin useista mahdollisista selittävistä tekijöistä tehdään yksi kaikkia tilanteita koskeva syy. Kiinnitä huomiota ilmauksiin \"aina\" ja \"kaikki\".\nHakuvinkki: Ctrl+F: monia syitä ja muistisairaudet."
    },
    {
      "id": "g-m9-q11",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin havaintoja järjestön neuvontatapaamisten käytännön järjestämisestä? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Neuvontaan varataan yleensä aika etukäteen, mutta tapaamiseen voi päästä ilman ajanvarausta, jos varattujen aikojen jälkeen jää neuvonta-aikaa."
        },
        {
          "id": "b",
          "text": "Neuvontatapaamisten kesto on ennalta tarkasti määritelty, minkä vuoksi varatuista aloitusajoista poikkeaminen on harvinaista."
        },
        {
          "id": "c",
          "text": "Neuvontatapaamisten aikana järjestön muissa tiloissa voi olla ryhmätoimintaa, jonka äänet ja liikkuminen saattavat häiritä asiakkaan asioiden käsittelyä."
        },
        {
          "id": "d",
          "text": "Neuvontaa järjestetään päivittäin myös lomakausina, koska asiakkaiden avuntarpeet ovat usein luonteeltaan pysyviä."
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
        "articleId": "kolmantena-osapuolena-valtion-ja-kansalaisten-valisessa-suhteessa",
        "page": "166–167 ja 171",
        "section": "Neuvontatapaamiset osana järjestön toimintaa"
      },
      "explanation": "A on oikein. Ajanvaraus on tavallinen käytäntö, mutta ilman ajanvarausta asiointi on mahdollista, jos aikaa jää.\nB on väärin. Tapaamisten kesto voi vaihdella muutamasta minuutista yli tuntiin, joten aikataulujen tarkka ennakointi on vaikeaa.\nC on oikein. Ryhmätoiminnan äänet, ovella käyvät asiakkaat ja toimistotarvikkeita hakevat työntekijät voivat keskeyttää neuvonnan.\nD on väärin. Neuvontaa järjestetään tavallisesti kerran viikossa, ja tapaamisia voidaan perua esimerkiksi neuvojan sairastumisen vuoksi. Lomakausina neuvontaa ei järjestetä.\n\nLähde:\nS. 166–167 ja 171, \"Neuvontatapaamiset osana järjestön toimintaa\" ja \"Tapaamisen lopetus ja jatkotoimien määräytyminen\". Sivulla 167 todetaan: \"Neuvontaan voi päästä myös ilman ajanvarausta, jos varattujen aikojen jälkeen jää vielä neuvonta-aikaa.\"",
      "learningPoint": "Opiskelijan tulee erottaa neuvonnan tavanomaiset käytännöt poikkeuksista. Erityisesti on tarkistettava, milloin ajanvarauksesta voidaan poiketa ja milloin neuvontaa ei ole saatavilla.\nHakuvinkki: Ctrl+F: ilman ajanvarausta ja lomakausien aikana."
    },
    {
      "id": "g-m9-q12",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelissa esitettyjä havaintoja asiakkaiden tietosuojasta ja ulkopuolisen asiointiavun riskeistä?",
      "options": [
        {
          "id": "a",
          "text": "Neuvontahuoneen puutteellinen äänieristys ja ulkopuolisten aiheuttamat keskeytykset voivat vaarantaa asiakkaiden oikeuden asioidensa luottamukselliseen käsittelyyn."
        },
        {
          "id": "b",
          "text": "Asiakkaiden turvautuminen useisiin eri auttajiin voi johtaa tilanteisiin, joissa pankkitunnuksia ja muita henkilökohtaisia tietoja päätyy ulkopuolisten käyttöön."
        },
        {
          "id": "c",
          "text": "Julkisten palvelujen ammattilaisilla on käytössään sääntelyä, suojattuja järjestelmiä ja ammatillisia toimintatapoja, jotka tukevat asiakkaiden yksityisyyden suojaa."
        },
        {
          "id": "d",
          "text": "Järjestön neuvojalla on sama virallinen poliittinen mandaatti ja julkisen vallan käyttöön liittyvä toimivalta kuin julkisten palvelujen ammattilaisilla, koska asiointi tapahtuu julkisissa digipalveluissa."
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
        "articleId": "kolmantena-osapuolena-valtion-ja-kansalaisten-valisessa-suhteessa",
        "page": "162–164, 171 ja 173"
      },
      "explanation": "A on oikein. Neuvontahuoneessa tapahtuvat keskeytykset ja riittämätön äänieristys voivat paljastaa arkaluonteisia tietoja sivullisille.\nB on oikein. Artikkelissa kuvataan tilanteita, joissa asiakkaan pankkitunnuksia on käyttänyt useita henkilöitä tai niitä on annettu tuntemattomalle auttajalle.\nC on oikein. Julkisten palvelujen ammattilaisten työtä ohjaavat tietosuojaa ja luottamuksellisuutta koskevat velvollisuudet sekä työnantajan tarjoamat suojatut järjestelmät.\nD on väärin. Järjestön neuvojalla ei ole vastaavaa virallista poliittista mandaattia tai julkisen vallan käyttöön liittyvää toimivaltaa. Julkisen digitaalisen palvelun käyttäminen asiakkaan puolesta ei anna tällaista asemaa.\n\nLähde:\nS. 162–164, 171 ja 173, erityisesti \"Pohdinta\". Sivulla 173 todetaan neuvojan toimivan \"ilman virallista poliittista mandaattia\".",
      "learningPoint": "Opiskelijan tulee erottaa julkisten palvelujen ammattilaisen virallinen asema järjestön epävirallisen asiointiavun tarjoajan asemasta. Väärässä vaihtoehdossa julkisen palvelun ammattilaiselle kuuluva toimivalta liitetään järjestön neuvojaan.\nHakuvinkki: Ctrl+F: virallista poliittista mandaattia ja äänieristys."
    },
    {
      "id": "g-m9-q13",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Oikein vai väärin?\nTutkimuksen havainnointiaineistossa neuvoja osallistui asiakkaiden asioiden hoitamisen lisäksi tapaamisten sisällön tulkintaan tutkijalle. Tämä oli erityisen tärkeää, koska suuri osa neuvonnasta käytiin kielellä, jota havainnoiva tutkija ei ymmärtänyt.",
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
        "a"
      ],
      "source": {
        "articleId": "kolmantena-osapuolena-valtion-ja-kansalaisten-valisessa-suhteessa",
        "page": "165"
      },
      "explanation": "Tutkija havainnoi neuvontatapaamisia, mutta neuvonta tapahtui pääosin hänelle vieraalla kielellä. Neuvoja selitti asiakkaan suostumuksella tapaamisten sisältöä jälkikäteen. Näin hän osallistui paitsi asiointiavun antamiseen myös tutkimusaineiston tulkintaan.\n\nLähde:\nS. 165, tutkimusaineiston kuvaus. Ratkaiseva lainaus: \"Näin neuvoja osallistui kanssatutkijan ominaisuudessa myös tapahtumien tulkintaan.\"",
      "learningPoint": "Opiskelijan tulee yhdistää aineistonkeruuseen liittyvä kielirajoite ja neuvojan rooli tutkimuksen toteutuksessa. Neuvojan tehtävä ei rajoittunut tutkittavan toiminnan kohteena olemiseen.\nHakuvinkki: Ctrl+F: kanssatutkijan ja vieraalla kielellä."
    },
    {
      "id": "g-m9-q14",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa tarkimmin artikkelissa esitettyä toimeentulotukihakemusta koskevaa esimerkkiä ja sen merkitystä?",
      "options": [
        {
          "id": "a",
          "text": "Asiakkaan toimeentulotukihakemus hylättiin, koska hänellä ei ollut oikeutta etuuteen, vaikka järjestön neuvoja onnistui toimittamaan kaikki tarvittavat liitteet."
        },
        {
          "id": "b",
          "text": "Asiakkaalla oli oikeus toimeentulotukeen, mutta sähköisen hakemuksen edellyttämien tiliotteiden hankkiminen ja liittäminen muodostui asioinnin esteeksi, vaikka Kela oli neuvonut asiakasta asiassa."
        },
        {
          "id": "c",
          "text": "Asiakkaan toimeentulotuki myönnettiin välittömästi, kun hän toimitti pankkitilinsä saldon neuvojalle ilman sähköisiä liitteitä."
        },
        {
          "id": "d",
          "text": "Asiakkaan ongelma johtui yksinomaan siitä, ettei hän ymmärtänyt Kelan päätöksen sisältöä, sillä tiliotteiden lataaminen ja liittäminen onnistui häneltä itsenäisesti."
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
        "articleId": "kolmantena-osapuolena-valtion-ja-kansalaisten-valisessa-suhteessa",
        "page": "169–170",
        "section": "Valtion edustaminen asiakkaalle"
      },
      "explanation": "B on oikein. Asiakkaan etuusoikeutta ei kiistetty, mutta hakemuksen täydentäminen edellytti digitaalisia taitoja, joita asiakkaalla ei ollut. Myöskään Kelan ehdottama kuvakaappausratkaisu ei onnistunut hänen nettipankissaan.\nA on väärin, koska asiakkaalla oli oikeus etuuteen eikä kaikkia liitteitä ollut saatu toimitettua.\nC on väärin, koska aineistoesimerkissä ei kuvata välitöntä myönteistä etuuspäätöstä.\nD on väärin, koska ongelma liittyi nimenomaan tiliotteiden hankkimiseen ja sähköiseen toimittamiseen, ei vain päätöksen ymmärtämiseen.\n\nLähde:\nS. 169–170, \"Valtion edustaminen asiakkaalle\". Sivulla 170 asiakkaan todetaan olevan \"oikeutettu toimeentulotukeen\", mutta tiliotteiden liittäminen hakemukseen oli ongelmallista.",
      "learningPoint": "Opiskelijan tulee erottaa oikeus sosiaalietuuteen sen hakemisen käytännön edellytyksistä. Etuuden saamisen este voi liittyä asiointiprosessiin, vaikka etuuden aineelliset edellytykset täyttyisivät.\nHakuvinkki: Ctrl+F: tiliotteet, 1,22 euroa ja takautuvasti."
    },
    {
      "id": "g-m9-q15",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä tutkimuksen toteutuksen ja analyysiprosessin vaiheita? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Neuvontatapaamisten havainnointi toteutettiin syksyllä 2022, minkä jälkeen tutkijat hyödynsivät aineiston analyysissa Byrne ja Longin aiemmin kehittämää kuusivaiheista mallia."
        },
        {
          "id": "b",
          "text": "Tutkimuksen nelivaiheinen analyysimalli muodostettiin ennen vuoden 2022 havainnointia, ja Byrne ja Longin kuusivaiheinen malli otettiin käyttöön vasta lopullisten tulosten tarkistamisessa."
        },
        {
          "id": "c",
          "text": "Tutkijat sijoittivat ensin aineistosta keräämänsä havainnot kuusivaiheisen mallin otsikoiden alle ja muokkasivat tämän jälkeen vaiheiden määrää ja sisältöä aineiston perusteella."
        },
        {
          "id": "d",
          "text": "Tutkimuksessa muodostettiin ensin nelivaiheinen malli, jonka pohjalta toteutettiin havainnointi syksyllä 2022. Havainnoinnin jälkeen mallia laajennettiin kuusivaiheiseksi."
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
        "articleId": "kolmantena-osapuolena-valtion-ja-kansalaisten-valisessa-suhteessa",
        "page": "164–166",
        "section": "Tapaustutkimus järjestön ikääntyneille maahanmuuttajille tarjoamasta asiointiavusta"
      },
      "explanation": "A on oikein. Tutkija teki osallistuvaa havainnointia noin 50 tuntia syksyllä 2022. Aineiston analyysissa hyödynnettiin Byrne ja Longin aiemmin kehittämää kuusivaiheista mallia.\nB on väärin. Nelivaiheinen malli ei ollut käytössä ennen havainnointia, vaan se muodostettiin aineiston analyysin tuloksena. Kuusivaiheinen malli oli analyysin lähtökohta, ei vasta lopullisten tulosten tarkistamiseen käytetty väline.\nC on oikein. Tutkijat sijoittivat aluksi havainnot alkuperäisen mallin vaiheisiin ja muokkasivat tämän jälkeen jäsennystä aineiston perusteella. Lopputuloksena muodostui neljä vaihetta.\nD on väärin. Vaiheiden ajallinen järjestys on käännetty päinvastaiseksi. Nelivaiheista mallia ei laajennettu kuusivaiheiseksi, vaan alkuperäistä kuusivaiheista mallia muokattiin nelivaiheiseksi.\n\nLähde:\nS. 164–166, \"Tapaustutkimus järjestön ikääntyneille maahanmuuttajille tarjoamasta asiointiavusta\".\nSivulla 165 todetaan, että tutkijat sijoittivat ensin havainnot mallin otsikoiden alle, \"minkä jälkeen muokkasimme otsikoiden määrän ja sisällöt\".",
      "learningPoint": "Opiskelijan tulee erottaa aineistonkeruun, alkuperäisen analyysimallin käyttöönoton ja lopullisen mallin muodostamisen ajankohdat. Väärissä vaihtoehdoissa tutkimusprosessin vaiheiden järjestystä on muutettu.\nHakuvinkki: Ctrl+F: syksyllä 2022, kuuden vaiheen ja minkä jälkeen muokkasimme."
    },
    {
      "id": "g-m9-q16",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Tosi vai epätosi?\nJärjestön neuvojan antama asiointiapu voi mahdollistaa asiakkaan pääsyn palveluihin ja etuuksiin, joihin tämä ei ilman apua pääsisi. Samalla asiointiavun järjestäminen julkisten palvelujen ulkopuolella voi aiheuttaa tietosuojaan ja työn kuormittavuuteen liittyviä ongelmia, koska toiminnasta puuttuu julkisten palvelujen asiakastyötä tukevia rakenteita.",
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
        "articleId": "kolmantena-osapuolena-valtion-ja-kansalaisten-valisessa-suhteessa",
        "page": "172–173",
        "section": "Pohdinta"
      },
      "explanation": "Väittämä yhdistää kolme artikkelissa esitettyä havaintoa.\nEnsinnäkin järjestön neuvojan apu voi olla asiakkaalle välttämätöntä, koska ilman sitä asiakas saattaa jäädä tarvitsemiensa palvelujen ja etuuksien ulkopuolelle.\nToiseksi asiointiavun toteuttaminen järjestön tiloissa voi vaarantaa asiakkaan yksityisyyden. Ulkopuolisten läsnäolo, keskeytykset ja riittämätön äänieristys voivat vaikeuttaa asioiden luottamuksellista käsittelyä.\nKolmanneksi neuvoja joutuu käsittelemään asiakkaiden turhautumista ja ahdistusta ilman samanlaisia työtä tukevia rakenteita kuin julkisissa palveluissa.\nVäittämä olisi väärin, jos järjestön tarjoaman avun hyödyllisyydestä pääteltäisiin, ettei toimintaan voi liittyä tietosuoja- tai kuormitusongelmia.\n\nLähde:\nS. 172–173, \"Pohdinta\".\nSivulla 172 todetaan: \"Järjestön neuvojan tarjoama asiointiapu on tärkeää asiakkaille\". Sivulla 173 kuvataan yksityisyyden suojaan ja neuvojan tunnekuormitukseen liittyviä ongelmia.",
      "learningPoint": "Opiskelijan tulee yhdistää asiointiavun hyödyt ja ongelmat niiden taustalla oleviin olosuhteisiin. Sama toimintatapa voi sekä mahdollistaa palveluihin pääsyn että aiheuttaa uusia riskejä.\nHakuvinkki: Ctrl+F: tärkeää asiakkaille, äänieristys ja tunnekuormasta."
    },
    {
      "id": "g-m9-q17",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein artikkelissa käytetyt tutkimukselliset lähestymistavat ja niiden merkityksen analyysissa?",
      "options": [
        {
          "id": "a",
          "text": "Dorothy Smithin institutionaalista etnografiaa käytettiin neuvontatapaamisten kuuden vaiheen määrittelyyn, kun taas Byrne ja Longin mallin avulla tarkasteltiin valtion ja kansalaisten välisiä hallinnan suhteita."
        },
        {
          "id": "b",
          "text": "Geertzin tiheää kuvausta käytettiin ensisijaisesti neuvontatapaamisten määrälliseen vertailuun, kun taas Dorothy Smithin institutionaalinen etnografia rajasi tarkastelun yksilöiden henkilökohtaisiin kokemuksiin."
        },
        {
          "id": "c",
          "text": "Byrne ja Longin mallin tarkoituksena oli selittää digitaalisten palvelujen yhteiskunnallisia vaikutuksia, kun taas Geertzin tiheän kuvauksen avulla muodostettiin tutkimuksen alkuperäinen kuusivaiheinen malli."
        },
        {
          "id": "d",
          "text": "Dorothy Smithin institutionaalinen etnografia ohjasi tarkastelemaan arkikokemusten kautta instituutioita ja hallinnan suhteita, Byrne ja Longin malli auttoi jäsentämään tapaamisten etenemistä ja Geertzin tiheä kuvaus niiden tapahtumia."
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
        "articleId": "kolmantena-osapuolena-valtion-ja-kansalaisten-valisessa-suhteessa",
        "page": "165–166"
      },
      "explanation": "D on oikein. Institutionaalinen etnografia ohjasi tutkimaan arkisten asiointitilanteiden yhteyttä instituutioihin. Byrne ja Longin vastaanottomalli tarjosi lähtökohdan tapaamisten vaiheiden analyysille. Geertzin tiheää kuvausta käytettiin asiointiavun tapahtumien yksityiskohtaiseen esittämiseen.\nA vaihtaa Smithin sekä Byrne ja Longin mallien tehtävät keskenään.\nB on väärin, koska tiheä kuvaus ei tarkoita määrällistä vertailua eikä institutionaalinen etnografia rajannut tarkastelua vain yksilökokemuksiin.\nC on väärin, koska alkuperäinen kuusivaiheinen malli oli Byrne ja Longin kehittämä.\n\nLähde:\nS. 165–166, tutkimuksen analyysimenetelmä. Sivulla 165 tutkijat kertovat kohdistaneensa analyysinsa yksilöiden kokemusten sijaan \"instituutioihin ja niitä määrittäviin 'hallinnan suhteisiin'\".",
      "learningPoint": "Opiskelijan tulee yhdistää kolme tutkimuksellista lähestymistapaa niiden oikeisiin käyttötarkoituksiin. Väärissä vaihtoehdoissa artikkelissa esiintyvät menetelmät liitetään toistensa tehtäviin.\nHakuvinkki: Ctrl+F: Dorothy Smithin, Byrnen ja Longin ja Geertz."
    },
    {
      "id": "g-m9-q18",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 12,
      "prompt": "Oikein vai väärin?\nTutkimuksen perusteella ulkopuolisen asiointiavun ongelmat liittyvät ainoastaan tilanteisiin, joissa auttajalla ei ole sosiaali- ja terveysalan koulutusta. Siksi asianmukaisesti koulutetun järjestöneuvojan toiminta takaa asiakkaan sosiaalisten oikeuksien ja yksityisyyden suojan toteutumisen samalla tavalla kuin julkisissa palveluissa.",
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
        "articleId": "kolmantena-osapuolena-valtion-ja-kansalaisten-valisessa-suhteessa",
        "page": "173",
        "section": "Pohdinta"
      },
      "explanation": "Väittämä muuttaa tutkijoiden varauksellisen johtopäätöksen ehdottomaksi.\nTutkimuksen kohteena olleella neuvojalla oli soveltuvaa ammatillista osaamista, mutta asiointiapuun liittyi silti tietosuojaa, virallisen mandaatin puuttumista ja työn kuormittavuutta koskevia ongelmia.\nTutkijat arvioivat ongelmien olevan todennäköisesti vielä vakavampia silloin, kun auttajalla ei ole koulutusta, tietosuojaosaamista tai hyväntahtoisia tarkoitusperiä. Tämä ei tarkoita, että koulutus poistaisi kaikki ongelmat.\n\nLähde:\nS. 173, \"Pohdinta\". Sivulla 173 todetaan asiointiavun ongelmien olevan todennäköisesti vakavampia tilanteissa, joissa auttajalla ei ole asianmukaista koulutusta tai tietosuojaosaamista.",
      "learningPoint": "Opiskelijan tulee erottaa riskin mahdollinen lisääntyminen riskin täydellisestä poistumisesta. Erityisesti on tarkistettava, tekeekö kysymys tutkijoiden todennäköisyyttä koskevasta arviosta ehdottoman väitteen.\nHakuvinkki: Ctrl+F: todennäköisesti vielä vakavammiksi."
    },
    {
      "id": "g-m9-q19",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelissa esitettyjä julkisten palvelujen ja järjestöjen asiointiavun välisiä eroja?",
      "options": [
        {
          "id": "a",
          "text": "Julkisten palvelujen ammattilaisten työtä säätelevät lait ja ammattieettiset velvollisuudet, kun taas järjestön asiointiapua voidaan tarjota ilman vastaavaa virallista mandaattia."
        },
        {
          "id": "b",
          "text": "Julkisissa palveluissa asiakkaan yksityisyyttä pyritään suojaamaan esimerkiksi erillisillä tapaamistiloilla ja suojatuilla digitaalisilla järjestelmillä, kun taas järjestön neuvonnassa ulkopuoliset voivat keskeyttää asiointitilanteita."
        },
        {
          "id": "c",
          "text": "Järjestön neuvoja voi käsitellä samalla käynnillä useiden hallinnonalojen asioita, mikä voi olla asiakkaalle tehokasta, vaikka neuvojalla ei ole julkisten palvelujen ammattilaisen virallista asemaa."
        },
        {
          "id": "d",
          "text": "Järjestön asiointiavussa asiakkaiden tietosuoja toteutuu julkisia palveluja varmemmin, koska neuvoja voi käyttää asiakkaan henkilökohtaisia tunnuksia ilman julkisen sektorin toimintaa rajoittavaa sääntelyä."
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
        "articleId": "kolmantena-osapuolena-valtion-ja-kansalaisten-valisessa-suhteessa",
        "page": "163–164 ja 172–174"
      },
      "explanation": "A on oikein. Julkisten palvelujen ammattilaiset toimivat virallisen mandaatin ja sääntelyn piirissä, kun taas järjestöjen epävirallinen asiointiapu ei kuulu vastaavien rakenteiden piiriin.\nB on oikein. Julkisissa palveluissa tietosuojaa tukevat muun muassa suojatut järjestelmät ja luottamukselliset tapaamistilat. Havainnoidun järjestön tiloissa keskeytykset ja riittämätön äänieristys aiheuttivat riskejä.\nC on oikein. Järjestön neuvojan mahdollisuus auttaa useiden hallinnonalojen asioissa samalla tapaamisella on artikkelissa tunnistettu asiakkaan kannalta myönteiseksi.\nD on väärin. Virallisen julkisen palvelutoiminnan sääntelyn puuttuminen ei paranna asiakkaan tietosuojaa, vaan voi vaarantaa sen. Asiakkaan henkilökohtaisten tunnusten käyttäminen ulkopuolisen toimesta aiheuttaa myös muita turvallisuusriskejä.\n\nLähde:\nS. 163–164 ja 172–174, erityisesti \"Pohdinta\" ja \"Johtopäätökset\". Sivulla 173 todetaan ulkopuolisten läsnäolon ja keskeytysten vaarantavan asiakkaiden yksityisyyden suojan.",
      "learningPoint": "Opiskelijan tulee vertailla kahden toimintaympäristön oikeudellisia ja käytännöllisiä eroja. Väärässä vaihtoehdossa tietosuojaa vaarantava tekijä esitetään tietosuojaa vahvistavana.\nHakuvinkki: Ctrl+F: suojattuja yhteyksiä, keskeytykset ja poliittista mandaattia."
    },
    {
      "id": "g-m9-q20",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Mitkä seuraavista päätelmistä ovat perusteltavissa Buchertin ja Kulmalan tutkimuksen havaintojen ja johtopäätösten perusteella? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Vaikka järjestöjen tarjoama asiointiapu voi mahdollistaa heikossa asemassa olevien kansalaisten pääsyn julkisiin palveluihin, se ei poista ongelmaa, joka syntyy julkisten palvelujen tehtävien siirtymisestä epävirallisten auttajien hoidettavaksi."
        },
        {
          "id": "b",
          "text": "Koska järjestön neuvoja pystyy hoitamaan useiden hallinnonalojen asioita samalla tapaamisella, julkisen sektorin ei enää tarvitse järjestää henkilökohtaiseen kontaktiin perustuvaa asiointiapua."
        },
        {
          "id": "c",
          "text": "Kansalaisten sosiaalisten oikeuksien yhdenvertainen toteutuminen voi vaarantua, jos pääsy palveluihin ja etuuksiin riippuu ulkopuolisen auttajan osaamisesta, saatavuudesta ja toimintatavoista."
        },
        {
          "id": "d",
          "text": "Koska tutkimuksessa tarkasteltiin yhden järjestön neuvontaa, tutkijat osoittavat kaikkien järjestöjen asiointiavun olevan yhtä laadukasta ja turvallista."
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
        "articleId": "kolmantena-osapuolena-valtion-ja-kansalaisten-valisessa-suhteessa",
        "page": "172–175",
        "section": "Pohdinta"
      },
      "explanation": "A on oikein. Järjestön tarjoama apu voi olla asiakkaalle välttämätöntä ja tehokasta, mutta sen avulla hoidetaan käytännössä julkisen sektorin tehtäviä ilman vastaavaa mandaattia, sääntelyä ja ammatillisia tukirakenteita. Apu ei siten poista palvelujärjestelmän rakenteellista ongelmaa.\nB on väärin. Tutkijat esittävät päinvastaisen johtopäätöksen: julkisen sektorin tulisi itse ottaa vastuu hallinnonalojen rajat ylittävän, ammatillisen ja turvallisen asiointiavun tarjoamisesta.\nC on oikein. Jos asioinnin onnistuminen riippuu epävirallisen auttajan taidoista ja mahdollisuuksista auttaa, kansalaisten yhdenvertainen pääsy palveluihin ja etuuksiin voi vaarantua.\nD on väärin. Tutkimus koski yhtä järjestöä, eikä sen perusteella voida todeta kaikkien järjestöjen toimivan samalla tavalla. Tutkijat päinvastoin arvioivat riskien voivan olla vakavampia tilanteissa, joissa auttajalta puuttuu koulutus tai tietosuojaosaaminen.\n\nLähde:\nS. 172–175, \"Pohdinta\" ja \"Johtopäätökset\".\nSivulla 174 todetaan: \"Auttajien tiedoista, osaamisesta ja toiminnasta riippuu, miten hyvin tai huonosti asiointiapua tarvitsevan kansalaisen pääsy palveluihin ja etuuksiin toteutuu.\"",
      "learningPoint": "Opiskelijan tulee erottaa yksittäisen tapaustutkimuksen havainnot laajemmista johtopäätöksistä ja perusteettomista yleistyksistä. Lisäksi on ymmärrettävä, ettei yksittäisen asiakkaan saama hyöty automaattisesti tarkoita koko järjestelmän yhdenvertaisuutta.\nHakuvinkki: Ctrl+F: Auttajien tiedoista, hallinnonalojen väliset rajat ja yhdenvertaisesti."
    }
  ]
} satisfies ValintakoeGExercise;
