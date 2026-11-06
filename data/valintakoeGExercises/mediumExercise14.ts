import type { ValintakoeGExercise } from "./types";

/**
 * Keskivaikea harjoitus 14: käyttäjän toimittamat tehtävät 1–20.
 * Lähdeotteet ovat explanation-kentissä, hakuvinkit learningPoint-kentissä.
 */
export const valintakoeGMediumExercise14Base = {
  "id": "keskivaikea-harjoitus-14",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Keskivaikea harjoitus 14 – Nuorten hyvinvointi ja asumisen mahdollisuudet itsen jalostamisen maisemassa",
  "description": "33 minuutin keskivaikea aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 33,
  "difficulty": "medium",
  "articleId": "nuorten-hyvinvointi-ja-asumisen-mahdollisuudet-itsen-jalostamisen-maisemassa",
  "articleTitle": "Nuorten hyvinvointi ja asumisen mahdollisuudet itsen jalostamisen maisemassa",
  "articleUrl": "https://journal.fi/nuorisotutkimus/article/view/185829",
  "questions": [
    {
      "id": "g-m14-q1",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mitkä seuraavista väittämistä kuvaavat oikein artikkelin tutkimuksellista lähtökohtaa ja nuorten hyvinvoinnin tarkastelua? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Kirjoittajat tarkastelevat nuorten hyvinvointia suhteessa nuoruutta kehystäviin tilallisiin ja affektiivisiin olosuhteisiin sen sijaan, että hyvinvointi ymmärrettäisiin vain yksilön ominaisuutena."
        },
        {
          "id": "b",
          "text": "Artikkelin tavoitteena on selvittää tilastollisesti, kuinka suuri osa suomalaisista nuorista kärsii mielenterveysongelmista ja mitkä yksilölliset ominaisuudet ennustavat niitä."
        },
        {
          "id": "c",
          "text": "Analyysissa hyödynnetään kirjoittajien aiempaa tutkimusta ja jälkihumanistista ihmismaantiedettä nuorten elämää muovaavien voimasuhteiden käsitteellistämiseksi."
        },
        {
          "id": "d",
          "text": "Kirjoittajat pyrkivät osoittamaan, että kaikki Suomessa elävät nuoret kokevat samanlaisia paineita ja reagoivat niihin samalla tavalla."
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
        "articleId": "nuorten-hyvinvointi-ja-asumisen-mahdollisuudet-itsen-jalostamisen-maisemassa",
        "page": "41 ja 43–44"
      },
      "explanation": "A on oikein. Kirjoittajat tarkastelevat hyvinvointia suhteessa ympäröivään maisemaan ja sen voimasuhteisiin.\nB on väärin. Tutkimus on käsitteellinen analyysi eikä nuorten mielenterveysongelmien yleisyyttä mittaava tilastollinen tutkimus.\nC on oikein. Analyysi perustuu aiempaan tutkimukseen sekä jälkihumanistiseen ihmismaantieteeseen.\nD on väärin. Kirjoittajat nimenomaisesti rajaavat pois ajatuksen kaikkien nuorten samanlaisista kokemuksista.\n\nLähde:\nS. 41 ja 43–44, tiivistelmä ja johdanto.\nRatkaiseva lainaus, s. 43: ”Emme väitä, että kaikki nuoret elävät samannäköistä arkea”.",
      "learningPoint": "Opiskelijan tulee erottaa tutkimuksen varsinainen tavoite sellaisista väitteistä, joita tutkijat eivät pyri osoittamaan. Erityisesti on tarkistettava tutkimuksen menetelmä ja yleistettävyyttä koskevat rajaukset.\nHakuvinkki: Ctrl+F: Emme väitä ja käsitteellisen analyysin."
    },
    {
      "id": "g-m14-q2",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Tosi vai epätosi?\nJälkihumanistisessa maisemakäsityksessä maisema ei ole pelkästään ihmisen ulkopuolinen havainnoinnin kohde, vaan muuttuva suhteiden kokonaisuus, jossa ihminen itse kehkeytyy. Tämän vuoksi nuorten hyvinvointia ei voida ymmärtää vain yksilön sisäisten ominaisuuksien perusteella.",
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
        "articleId": "nuorten-hyvinvointi-ja-asumisen-mahdollisuudet-itsen-jalostamisen-maisemassa",
        "page": "42–43"
      },
      "explanation": "Jälkihumanistinen maisemakäsitys kyseenalaistaa ihmisen ja ympäristön erillisyyden. Ihminen muotoutuu osana muuttuvia tilallisia ja affektiivisia suhteita.\nTästä seuraa, ettei hyvinvointia voida palauttaa yksinomaan yksilön ominaisuuksiin tai valintoihin.\n\nLähde:\nS. 42–43, johdanto.\nRatkaiseva lainaus, s. 43: ”Ihminen on osa tätä laajempaa maisemaa.”",
      "learningPoint": "Opiskelijan tulee yhdistää maisemakäsitteen määritelmä sen seurauksiin hyvinvoinnin tarkastelussa. Oikea väittämä ilmaisee useassa kohdassa esitetyn ajatuksen uudelleen.\nHakuvinkki: Ctrl+F: muuttuva ja suhteinen kokonaisuus ja Ihminen on osa."
    },
    {
      "id": "g-m14-q3",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein kirjoittajien aiemmat tutkimushavainnot ja niiden merkityksen artikkelin kysymyksenasettelulle?",
      "options": [
        {
          "id": "a",
          "text": "Brunilan tutkimuksissa nuoret kuvasivat vapaa-aikaansa pääasiassa hyödyttömäksi, kun taas Pyyryn tutkimuksissa tukijärjestelmien asiakkaat korostivat yhteiskunnan vastuuta menestymisestään."
        },
        {
          "id": "b",
          "text": "Pyyryn kaupunkitutkimuksessa nuoret saattoivat kuvata hengailuaankin hyödyllisenä oppimisena, kun taas Brunilan tukijärjestelmiä koskevassa tutkimuksessa nuorten puheessa korostui vastuu omasta menestymisestä."
        },
        {
          "id": "c",
          "text": "Brunilan tutkimuksissa tarkasteltiin ensisijaisesti kaupunkitilan fyysisiä rakenteita, kun taas Pyyryn tutkimuksissa analysoitiin nuorten kuntoutuspalveluiden vaikuttavuutta."
        },
        {
          "id": "d",
          "text": "Molempien tutkijoiden aiemmat tutkimukset osoittivat, että nuorten itsevastuullisuuden korostaminen on poistanut tukijärjestelmiin liittyvät ongelmat."
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
        "articleId": "nuorten-hyvinvointi-ja-asumisen-mahdollisuudet-itsen-jalostamisen-maisemassa",
        "page": "42"
      },
      "explanation": "B on oikein. Pyyryn tutkimuksessa nuoret saattoivat perustella vapaa-aikaansa itsensä kehittämisellä. Brunilan tutkimusaineistosta nostettu nuoren kommentti puolestaan korostaa yksilön vastuuta omasta menestymisestään.\nA on väärin. Se muuttaa havaintojen merkitystä ja liittää niitä väärään tutkimusyhteyteen.\nC on väärin. Pyyryn tutkimus liittyi nuorten arkiseen kaupunkisuhteeseen ja Brunilan tutkimus koulutukseen sekä tukijärjestelmiin.\nD on väärin. Kirjoittajat suhtautuvat kriittisesti itsevastuullisuuden korostamiseen.\n\nLähde:\nS. 42, johdanto.\nRatkaiseva lainaus: ”jopa vapaa-ajan hengailunsa joksikin ’hyödylliseksi’”.",
      "learningPoint": "Opiskelijan tulee yhdistää kahden tutkijan aiemmat tutkimuskohteet oikeisiin havaintoihin ja ymmärtää, miten ne liittyvät yhteiseen tutkimuskysymykseen.\nHakuvinkki: Ctrl+F: Noora Pyyry on vuorostaan ja Kristiina Brunilan tutkimuksesta."
    },
    {
      "id": "g-m14-q4",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Oikein vai väärin?\nNonrepresentational theory (NRT) pyrkii tarkastelemaan arjen käytäntöjä, kohtaamisia ja affektiivisia voimia ilman, että elämä palautetaan pelkästään kielellisiin kuvauksiin. Tämä ei kuitenkaan tarkoita representaatioiden merkityksen täydellistä kiistämistä, sillä myös sanat, kuvat ja kartat voivat vaikuttaa toiminnan ehtoihin.",
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
        "articleId": "nuorten-hyvinvointi-ja-asumisen-mahdollisuudet-itsen-jalostamisen-maisemassa",
        "page": "44–45"
      },
      "explanation": "NRT painottaa arjen tapahtumallisuutta, käytäntöjä ja affektiivisia voimia, joita ei voida kuvata tyhjentävästi sanoilla tai numeroilla.\nSamalla representaatiot ymmärretään aktiivisina maailman rakentajina, eivät vain todellisuuden neutraaleina kuvauksina.\n\nLähde:\nS. 44–45, jälkihumanistisen tutkimuskehyksen esittely.\nRatkaiseva lainaus, s. 44: ”NRT ei kiistä representaatioiden merkitystä”.",
      "learningPoint": "Opiskelijan tulee tunnistaa ero tietyn tutkimustavan kritisoimisen ja sen täydellisen hylkäämisen välillä. NRT:n representaatioihin kohdistuva kritiikki ei tarkoita, ettei niillä olisi merkitystä.\nHakuvinkki: Ctrl+F: NRT ei kiistä ja tekoina."
    },
    {
      "id": "g-m14-q5",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mitkä seuraavista väittämistä kuvaavat oikein asumisen (dwelling) ja kanssa-asumisen (dwelling with) käsitteitä artikkelissa? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Asuminen tarkoittaa kiinnittymisen ja osallistumisen toimintaa, joka ei välttämättä ole sidottu tiettyyn maantieteelliseen paikkaan ja joka voi olla myös ajallisesti hetkellistä."
        },
        {
          "id": "b",
          "text": "Kanssa-asumisen käsitteellä korostetaan yksilön pysyvää kuulumista tiettyyn alueeseen ja hänen riippumattomuuttaan muista toimijoista."
        },
        {
          "id": "c",
          "text": "Mielekäs asuminen sisältää omaehtoisen toiminnan, yhteyden ympäröivään maisemaan sekä osallisuuden tunteen."
        },
        {
          "id": "d",
          "text": "Kanssa-asumisen käsitteen avulla kirjoittajat pyrkivät palauttamaan hyvinvoinnin yksilön henkilökohtaiseksi kokemukseksi, joka on erillinen ympäristön vaikutuksista."
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
        "articleId": "nuorten-hyvinvointi-ja-asumisen-mahdollisuudet-itsen-jalostamisen-maisemassa",
        "page": "45"
      },
      "explanation": "A on oikein. Asuminen ei tarkoita vain fyysistä kotia tai pysyvää paikkaan kuulumista. Se voi olla myös hetkellistä osallistumista ja kiinnittymistä.\nB on väärin. Kanssa-asuminen korostaa jaettua osallistumista ja muuttuvia suhteita, ei pysyvää tai muista riippumatonta kuulumista.\nC on oikein. Mielekkääseen asumiseen liittyvät omaehtoinen toiminta, kiinnittyminen ja osallisuus.\nD on väärin. Kirjoittajat pyrkivät nimenomaan ylittämään yksilön ja ympäristön välisen erottelun.\n\nLähde:\nS. 45, asumisen ja kanssa-asumisen käsitteiden määrittely.\nRatkaiseva lainaus: ”Asumisella (engl. dwelling) viittamme tässä yhteydessä kiinnittymisen ja osallistumisen toimintaan”.",
      "learningPoint": "Opiskelijan tulee erottaa asuminen fyysisenä asuinpaikkana ja asuminen filosofisena osallistumisen käsitteenä. Lisäksi on tunnistettava kanssa-asumisen suhde pysyvään kuulumiseen.\nHakuvinkki: Ctrl+F: dwelling with ja osallisuuden tunteen."
    },
    {
      "id": "g-m14-q6",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein Debordin spektaakkelin yhteiskunnan ja Thriftin Lifeworld Inc -käsitteen välistä yhteyttä?",
      "options": [
        {
          "id": "a",
          "text": "Debord tarkasteli ensisijaisesti digitaalista valvontaa, kun taas Thrift keskittyi materiaalien tuotantoon ennen teollistumista."
        },
        {
          "id": "b",
          "text": "Thriftin Lifeworld Inc hylkää Debordin näkemyksen kokemuksen kaupallistumisesta ja korostaa, ettei kapitalismi vaikuta ihmisten tunteisiin."
        },
        {
          "id": "c",
          "text": "Debordin spektaakkelin yhteiskunnassa ihminen toimii vain kuluttajana, kun taas Lifeworld Inc -ajattelussa ihminen on yksinomaan sisällöntuottaja."
        },
        {
          "id": "d",
          "text": "Debord kuvasi kokemuksen esineellistymistä ja kaupallistumista, kun taas Thriftin Lifeworld Inc voidaan nähdä tämän ajattelun digitaalisena jatkokehittelynä, jossa hallinta ulottuu voimakkaasti affektiiviselle tasolle."
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
        "articleId": "nuorten-hyvinvointi-ja-asumisen-mahdollisuudet-itsen-jalostamisen-maisemassa",
        "page": "46"
      },
      "explanation": "D on oikein. Molemmat käsitteet kuvaavat kapitalismin vaikutusta kokemukseen ja arkielämään. Thrift korostaa erityisesti turvallisuuden, viihteen ja affektiivisen hallinnan yhteenkietoutumista.\nA on väärin. Debordin analyysi julkaistiin vuonna 1967 eikä käsitellyt nykyistä digitaalista valvontaa.\nB on väärin. Lifeworld Inc jatkaa ja päivittää Debordin ajatuksia sen sijaan, että se kiistäisi ne.\nC on väärin. Spektaakkelin yhteiskunnassa ihminen voi olla samanaikaisesti hyödyke ja kuluttaja. Lifeworld Inc ei myöskään rajaa ihmistä yksinomaan sisällöntuottajaksi.\n\nLähde:\nS. 46, Debordin ja Thriftin teorioiden vertailu.\nRatkaiseva lainaus: ”Debordin ajatusten ’päivityksenä’ digitaaliselle ajalle”.",
      "learningPoint": "Opiskelijan tulee yhdistää kahden teorian yhteiset lähtökohdat ja tunnistaa, miten myöhempi teoria kehittää aiempaa.\nHakuvinkki: Ctrl+F: Spektaakkelin yhteiskunta ja Lifeworld Inc."
    },
    {
      "id": "g-m14-q7",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Mitkä seuraavista väittämistä kuvaavat oikein turvallisuuspuheen, valvonnan ja elämystuotannon suhdetta nuorten asumisen mahdollisuuksiin? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Nuoriin kohdistuva pelko voi lisätä valvontaa ja nuorten toiminnan rajaamista, vaikka toimenpiteitä perusteltaisiin turvallisuuden lisäämisellä."
        },
        {
          "id": "b",
          "text": "Kaupalliset toimijat voivat tarjota turvallisia tiloja ja elämyksiä vastauksena vanhempien huoleen, mutta samalla nuorten omaehtoisen toiminnan mahdollisuudet voivat kaventua."
        },
        {
          "id": "c",
          "text": "Turvallisuuden lisääntyminen vahvistaa kirjoittajien mukaan aina nuorten mahdollisuuksia osallistua kaupunkitilaan, sillä valvonta poistaa kaikki toiminnan esteet."
        },
        {
          "id": "d",
          "text": "Lifeworld Inc -ajattelussa turvallisuus ja viihde toimivat toisistaan riippumattomina järjestelminä, joilla ei ole yhteyttä nuorten arjen hallintaan."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "a",
        "b"
      ],
      "source": {
        "articleId": "nuorten-hyvinvointi-ja-asumisen-mahdollisuudet-itsen-jalostamisen-maisemassa",
        "page": "46–47",
        "section": "Asuminen turvallisuuden ja elämysten maisemassa"
      },
      "explanation": "A on oikein. Pelon kulttuurissa nuorten käyttäytyminen voidaan tulkita uhkaavaksi, mikä lisää valvontaa ja kontrollia.\nB on oikein. Turvallisiksi tarkoitetut kaupalliset tilat ja elämykset voivat samalla rajata nuorten omaehtoista toimintaa.\nC on väärin. Kirjoittajien mukaan suojelu ja valvonta voivat myös kaventaa osallistumismahdollisuuksia.\nD on väärin. Lifeworld Inc perustuu juuri turvallisuuden ja viihteen yhteenkietoutumiseen.\n\nLähde:\nS. 46–47, ”Asuminen turvallisuuden ja elämysten maisemassa”.\nRatkaiseva lainaus, s. 47: ”Kaupalliset toimijat vastaavat usein ketterästi vanhempien pelkoon”.",
      "learningPoint": "Opiskelijan tulee yhdistää turvallisuuteen liittyvä pelko, valvonnan lisääntyminen ja nuorten toiminnan rajoittuminen. Erityisesti on tarkistettava, tarkoittaako hyväksi tarkoitettu toimenpide automaattisesti myönteistä lopputulosta.\nHakuvinkki: Ctrl+F: Pelkokierteen kasvaessa ja Kaupalliset toimijat."
    },
    {
      "id": "g-m14-q8",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Oikein vai väärin?\nArtikkelissa nuorten tukijärjestelmillä tarkoitetaan koulutus-, ohjaus-, valmennus- ja kuntoutuspalveluiden kokonaisuutta, johon kuuluu myös virallisten koulutus- ja työmarkkinasiirtymien rinnalla toimivia palveluita. Kirjoittajien mukaan näissä järjestelmissä voidaan kuitenkin painottaa yksilökeskeisiä interventioita tavalla, joka jättää rakenteelliset ongelmat vähälle huomiolle.",
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
        "articleId": "nuorten-hyvinvointi-ja-asumisen-mahdollisuudet-itsen-jalostamisen-maisemassa",
        "page": "48",
        "section": "Nuoret ja heille tarjolla olevat tukijärjestelmät"
      },
      "explanation": "Tukijärjestelmät sisältävät esimerkiksi opiskeluhuollon, ohjaamot, kuntoutuspalvelut, työpajat ja mielenterveyspalvelut.\nKirjoittajien kritiikki kohdistuu erityisesti siihen, että ongelmien ratkaisuja etsitään nuoren omien tunteiden, asenteiden ja toimintatapojen muuttamisesta sen sijaan, että tarkasteltaisiin myös yhteiskunnallisia olosuhteita.\n\nLähde:\nS. 48, ”Nuoret ja heille tarjolla olevat tukijärjestelmät”.\nRatkaiseva lainaus: ”Tukijärjestelmissä korostuvat tyypillisesti erilaiset yksilökeskeiset interventiot”.",
      "learningPoint": "Opiskelijan tulee erottaa tukijärjestelmien laaja määritelmä niissä käytettyjen toimintatapojen kritiikistä. Kaikkia palveluita ei tule tulkita samanlaisiksi, vaikka kirjoittajat tunnistavat niissä yhteisiä hallinnan piirteitä.\nHakuvinkki: Ctrl+F: Nuorille suunnatuilla tukijärjestelmillä ja yksilökeskeiset interventiot."
    },
    {
      "id": "g-m14-q9",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein taloudellistumisen ja terapeuttisen vallan keskinäistä suhdetta?",
      "options": [
        {
          "id": "a",
          "text": "Taloudellistuminen pyrkii ensisijaisesti vapauttamaan nuoret työmarkkinoiden odotuksista, kun taas terapeuttinen valta kohdistuu vain julkisen talouden mittareihin."
        },
        {
          "id": "b",
          "text": "Terapeuttinen valta edellyttää yksilöltä taloudellista kilpailukykyä, mutta taloudellistuminen puolestaan pyrkii poistamaan itsevastuullisuuden vaatimukset."
        },
        {
          "id": "c",
          "text": "Taloudellistuminen korostaa mitattavaa hyötyä ja yksilön vastuuta, kun taas terapeuttinen valta ulottaa ohjausta ihmisen tunteisiin, itsesuhteeseen ja laajempaan elämänpiiriin."
        },
        {
          "id": "d",
          "text": "Taloudellistuminen ja terapeuttinen valta ovat kirjoittajien mukaan toisistaan erillisiä ilmiöitä, joiden välillä ei ole merkittävää yhteyttä."
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
        "articleId": "nuorten-hyvinvointi-ja-asumisen-mahdollisuudet-itsen-jalostamisen-maisemassa",
        "page": "48–49",
        "section": "Nuoret ja heille tarjolla olevat tukijärjestelmät"
      },
      "explanation": "C on oikein. Taloudellistuminen painottaa taloudellista hyötyä, tehokkuutta ja itsevastuullisuutta. Terapeuttinen valta puolestaan ohjaa yksilöä muokkaamaan suhdettaan itseensä ja ympäristöönsä.\nA on väärin. Taloudellistuminen vahvistaa työmarkkinakelpoisuuteen ja kilpailuun liittyviä odotuksia.\nB on väärin. Taloudellistuminen ei poista itsevastuullisuuden vaatimuksia vaan vahvistaa niitä.\nD on väärin. Kirjoittajat pitävät ilmiöiden yhteyttä keskeisenä osana itsen jalostamisen maisemaa.\n\nLähde:\nS. 48–49, ”Nuoret ja heille tarjolla olevat tukijärjestelmät”.\nRatkaiseva lainaus, s. 48: ”Taloudellistuminen ja terapeuttinen valta liittyvät yhteen”.",
      "learningPoint": "Opiskelijan tulee erottaa kahden käsitteen ominaisuudet ja tunnistaa, miten ne vahvistavat toisiaan. Käsitteet eivät tarkoita samaa asiaa, vaikka ne toimivat yhdessä.\nHakuvinkki: Ctrl+F: Taloudellistumista luonnehtii ja Terapeuttisella vallalla tarkoitetaan."
    },
    {
      "id": "g-m14-q10",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Tosi vai epätosi?\nKirjoittajien mukaan terapeuttinen valta voi hyödyntää esimerkiksi toivoa, huolta, syyllisyyttä ja häpeää yksilön ohjaamisessa. Tällöin nuori voi omaksua itseensä kohdistuvan valvonnan ja sopeutumisen ihanteet osaksi omaa toimintaansa, vaikka ohjaus näyttäytyisi hyvinvoinnin tukemisena.",
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
        "articleId": "nuorten-hyvinvointi-ja-asumisen-mahdollisuudet-itsen-jalostamisen-maisemassa",
        "page": "48–49"
      },
      "explanation": "Terapeuttinen valta ei artikkelissa tarkoita vain suoraa ulkopuolista kontrollia. Se toimii myös affektiivisesti, jolloin yksilö alkaa itse tarkkailla ja ohjata omaa toimintaansa vallitsevien ihanteiden mukaisesti.\n\nLähde:\nS. 48–49, terapeuttisen vallan määrittely.\nRatkaiseva lainaus, s. 49: ”tunteita, kuten toivoa, huolta, syyllisyyttä tai häpeää mobilisoidaan”.",
      "learningPoint": "Opiskelijan tulee yhdistää terapeuttisen vallan määritelmä sen toimintamekanismiin. Erityisesti on huomattava ero ulkoisen ohjauksen ja sisäistetyn itsevalvonnan välillä.\nHakuvinkki: Ctrl+F: Terapeuttinen valta toimii ja syyllisyyttä."
    },
    {
      "id": "g-m14-q11",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyä julman optimismin käsitettä ja sen yhteyttä nuorten tukijärjestelmiin? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Julma optimismi liittyy tilanteeseen, jossa nuorelle luvataan hyvinvointia ja menestystä, mutta tarjottu tuki voi samalla ohjata häntä sopeutumaan olosuhteisiin, jotka ovat osaltaan hänen vaikeuksiensa taustalla."
        },
        {
          "id": "b",
          "text": "Julma optimismi tarkoittaa sitä, että tukijärjestelmät pyrkivät ensisijaisesti muuttamaan yhteiskunnallisia rakenteita eivätkä kohdistamaan toimenpiteitä nuoriin."
        },
        {
          "id": "c",
          "text": "Julman optimismin yhteydessä yksinäisyyttä tai riittämättömyyttä kokevalle nuorelle voidaan tarjota hyvinvointiin keskittyvää tukea, joka käytännössä vahvistaa itsevastuullisuuden ja työllistettävyyden vaatimuksia."
        },
        {
          "id": "d",
          "text": "Julma optimismi tarkoittaa kirjoittajien mukaan sitä, että kaikki tukijärjestelmät onnistuvat tavoitteissaan, kunhan nuori suhtautuu tulevaisuuteensa riittävän myönteisesti."
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
        "articleId": "nuorten-hyvinvointi-ja-asumisen-mahdollisuudet-itsen-jalostamisen-maisemassa",
        "page": "49"
      },
      "explanation": "A on oikein. Hyvinvoinnin lupaus voi osoittautua ristiriitaiseksi, jos nuorta ohjataan sopeutumaan juuri niihin kilpailullisiin olosuhteisiin, jotka osaltaan tuottavat pahoinvointia.\nB on väärin. Kirjoittajien kritiikki kohdistuu siihen, että tukitoimet voivat sivuuttaa rakenteelliset ongelmat.\nC on oikein. Hyvinvointia lupaava tuki voi käytännössä vahvistaa itsevastuullisuuden ja työmarkkinakelpoisuuden vaatimuksia.\nD on väärin. Julma optimismi kuvaa juuri lupausten ja todellisten mahdollisuuksien välistä ristiriitaa.\n\nLähde:\nS. 49, taloudellistumisen ja terapeuttisen vallan yhteyden tarkastelu.\nRatkaiseva lainaus: ”Optimismin julmuus liittyy tilanteen lähtökohtaiseen mahdottomuuteen”.",
      "learningPoint": "Opiskelijan tulee yhdistää tukijärjestelmien tavoitteet niiden mahdollisiin ristiriitaisiin seurauksiin. Hyväksi tarkoitettu tuki ei välttämättä muuta niitä olosuhteita, joista ongelmat syntyvät.\nHakuvinkki: Ctrl+F: julman optimismin ja lähtökohtaiseen mahdottomuuteen."
    },
    {
      "id": "g-m14-q12",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelissa esitettyä koulutuksen tulevaisuusorientaatiota ja sen seurauksia?",
      "options": [
        {
          "id": "a",
          "text": "Koulutuksessa korostuva tulevaisuusorientaatio voi johtaa siihen, että lasten ja nuorten toimintaa arvioidaan sen perusteella, miten se kehittää tulevaisuudessa tarvittavia kykyjä ja kompetensseja."
        },
        {
          "id": "b",
          "text": "Hengailu ja päämäärätön toiminta voivat tulla hyväksytyiksi, jos ne tulkitaan esimerkiksi palautumista, luovuutta tai resilienssiä edistäviksi ja siten itsen kehittämistä palveleviksi."
        },
        {
          "id": "c",
          "text": "Koulutuksen tulevaisuuteen liittyvässä ennakoinnissa taloudelliset tavoitteet voivat vaikuttaa siihen, millaisia sisältöjä, menetelmiä ja ihmiskuvaa koulutuksessa painotetaan."
        },
        {
          "id": "d",
          "text": "Tulevaisuusorientaatio on kirjoittajien mukaan vahvistanut nuorten mahdollisuuksia toimia ilman tavoitteita, sillä koulutuksessa on vähennetty hyödyllisyyteen ja työmarkkinakelpoisuuteen liittyviä odotuksia."
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
        "articleId": "nuorten-hyvinvointi-ja-asumisen-mahdollisuudet-itsen-jalostamisen-maisemassa",
        "page": "49–50"
      },
      "explanation": "A on oikein. Jo varhaiskasvatuksesta lähtien toimintaa voidaan suunnitella tulevien kykyjen ja kompetenssien näkökulmasta.\nB on oikein. Hengailu ja päämäärätön toiminta voivat saada hyväksynnän, jos ne esitetään hyödyllisinä itsen jalostamiselle, esimerkiksi palautumisen, luovuuden tai resilienssin vahvistamisen kautta. Kirjoittajien kritiikki kohdistuu juuri siihen, että myös tavoitteettoman toiminnan odotetaan perustelevan hyödyllisyytensä.\nC on oikein. Koulutuksen tavoitteisiin ja sisältöihin vaikuttavat myös taloudelliset ja yhteiskunnalliset intressit.\nD on väärin. Kirjoittajien mukaan tulevaisuusorientaatio nimenomaan vahvistaa hyödyllisyyden ja työmarkkinakelpoisuuden odotuksia.\n\nLähde:\nS. 49–50, koulutuksen taloudellistumista ja tulevaisuusorientaatiota käsittelevät kappaleet.\nRatkaiseva lainaus, s. 50: ”Hengailulle, harhailulle, keskeneräisyydelle ja päämäärättömyydelle ei tässä välineellisyyden imperatiiviin pohjautuvassa elämänprojektissa ole sijaa”.",
      "learningPoint": "Opiskelijan tulee tunnistaa, miten koulutuksen tulevaisuusorientaatio vaikuttaa nuorten nykyhetkeen. Väärässä vaihtoehdossa kehityksen vaikutus omaehtoiseen toimintaan on käännetty päinvastaiseksi.\nHakuvinkki: Ctrl+F: tulevaisuusorientaatio ja Hengailulle, harhailulle."
    },
    {
      "id": "g-m14-q13",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Oikein vai väärin?\nKirjoittajien mukaan nuorten kategorisointi esimerkiksi syrjäytyneiksi, huono-osaisiksi tai oppimishäiriöisiksi voi vaikuttaa siihen, millaisia toiminnan mahdollisuuksia heille tarjotaan. Samalla diagnoosi tai muu nimike voi joissakin tilanteissa olla myös avun saamisen edellytys, vaikka kategorisointi voi vahvistaa yksilökeskeistä ongelmien tulkintaa.",
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
        "articleId": "nuorten-hyvinvointi-ja-asumisen-mahdollisuudet-itsen-jalostamisen-maisemassa",
        "page": "50–51"
      },
      "explanation": "Kirjoittajat tarkastelevat kategorisointia vallankäyttönä, joka vaikuttaa siihen, millaisina nuoret nähdään ja millaisia ratkaisuja heidän tilanteisiinsa tarjotaan.\nSamalla he tunnistavat ristiriidan: luokittelu voi olla avun saamisen edellytys, vaikka se voi myös vahvistaa ongelmien paikantamista yksilöön.\n\nLähde:\nS. 50–51, kategorisoivaa ajattelua käsittelevä osuus.\nRatkaiseva lainaus: ”Diagnoosi tai muu nimike löytyy tarvittaessa, ja toisaalta avun saaminen (esimerkiksi koulussa) usein nykyään myös edellyttää sitä.”",
      "learningPoint": "Opiskelijan tulee tunnistaa, että sama käytäntö voi olla sekä avun saamisen edellytys että kritiikin kohde. Kategorisointia ei tule tulkita yksiselitteisesti vain hyödylliseksi tai haitalliseksi.\nHakuvinkki: Ctrl+F: Diagnoosi tai muu nimike ja Kategorisointiin liittyvillä."
    },
    {
      "id": "g-m14-q14",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein kirjoittajien näkemyksen koulutusjärjestelmän ja itsen jalostamisen maiseman suhteesta?",
      "options": [
        {
          "id": "a",
          "text": "Koulutusjärjestelmä on kirjoittajien mukaan ainoa nuorten itsevastuullisuutta tuottava instituutio, joten sen uudistaminen poistaisi kaikki nuorten hyvinvointiin liittyvät rakenteelliset ongelmat."
        },
        {
          "id": "b",
          "text": "Koulutusjärjestelmä voi pyrkiä tukemaan nuorten hyvinvointia, mutta sen toimintaa muovaavat myös laajemman itsen jalostamisen maiseman taloudelliset ja yksilökeskeiset odotukset."
        },
        {
          "id": "c",
          "text": "Koulutusjärjestelmän vaikutus nuorten hyvinvointiin perustuu yksinomaan opetussisältöihin, eikä koulun arjen käytännöillä tai toiminnan organisoinnilla ole merkitystä."
        },
        {
          "id": "d",
          "text": "Kirjoittajat katsovat, että koulutuksen taloudellistuminen on vähentänyt kilpailullisuutta ja vahvistanut nuorten mahdollisuuksia päämäärättömään toimintaan."
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
        "articleId": "nuorten-hyvinvointi-ja-asumisen-mahdollisuudet-itsen-jalostamisen-maisemassa",
        "page": "52–53",
        "section": "Itsen jalostaminen ja nuorten hyvinvointi"
      },
      "explanation": "B on oikein. Koulutusjärjestelmä voi tavoitella hyvinvointia mutta samalla uusintaa laajempia kilpailuun, tehokkuuteen ja itsevastuullisuuteen liittyviä odotuksia.\nA on väärin. Kirjoittajat eivät pidä koulutusjärjestelmää ongelmien ainoana lähteenä.\nC on väärin. Koulutusjärjestelmä uusintaa yksilösubjektia myös käytäntöjensä ja toimintatapojensa kautta.\nD on väärin. Taloudellistuminen vahvistaa kilpailullisuutta ja välineellisyyttä.\n\nLähde:\nS. 52–53, ”Itsen jalostaminen ja nuorten hyvinvointi”.\nRatkaiseva lainaus, s. 52: ”Ongelma ei siis ole koulutusjärjestelmässä sinänsä, vaan se nousee laajemmasta itsen jalostamisen maisemasta.”",
      "learningPoint": "Opiskelijan tulee erottaa koulutusjärjestelmän omat tavoitteet sen toimintaa muovaavista laajemmista olosuhteista. Ongelmaa ei saa yksinkertaistaa yhden instituution aiheuttamaksi.\nHakuvinkki: Ctrl+F: Ongelma ei siis ole koulutusjärjestelmässä ja laajempi itsen jalostamisen maisema."
    },
    {
      "id": "g-m14-q15",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin sivun 55 käsitekarttaa ja sen taustalla esitettyä analyysia? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Käsitekartassa modernin subjektin elämänprojekti sijoittuu keskeiseksi osaksi itsen jalostamisen maisemaa, jota rakentavat muun muassa terapeuttinen valta, turvallisuusmarkkinat ja kilpailun ilmapiiri."
        },
        {
          "id": "b",
          "text": "Käsitekartassa elämystuotanto ja kokemuksen kaventuminen representaatioksi esitetään maisemaan kuuluvina tekijöinä, jotka liittyvät artikkelin aiempaan spektaakkelin yhteiskuntaa koskevaan tarkasteluun."
        },
        {
          "id": "c",
          "text": "Käsitekartassa nuorten omaehtoinen osallistuminen, kanssa-asuminen ja planetaarinen hyvinvointi esitetään itsen jalostamisen maiseman keskeisinä hallinnan välineinä."
        },
        {
          "id": "d",
          "text": "Käsitekartassa systeemisten ongelmien psykologisointi sijoitetaan maiseman ulkopuolelle, koska kirjoittajien mukaan yksilökeskeiset tulkinnat eivät liity taloudellistumiseen tai terapeuttiseen valtaan."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen."
        }
      ],
      "correctAnswerIds": [
        "a",
        "b"
      ],
      "source": {
        "articleId": "nuorten-hyvinvointi-ja-asumisen-mahdollisuudet-itsen-jalostamisen-maisemassa",
        "page": "55"
      },
      "explanation": "A on oikein. Modernin subjektin elämänprojekti on käsitekartan keskellä, ja sen ympärille on sijoitettu useita maisemaa rakentavia voimia.\nB on oikein. Elämystuotanto ja kokemuksen kaventuminen representaatioksi liittyvät Debordin ja Thriftin teorioiden avulla kuvattuun kokemuksen kaupallistumiseen.\nC on väärin. Kanssa-asuminen ja planetaarinen hyvinvointi liittyvät kirjoittajien hahmottelemiin vaihtoehtoihin, eivät käsitekartan kuvaamiin hallinnan mekanismeihin.\nD on väärin. Systeemisten ongelmien psykologisointi on nimenomaisesti mukana käsitekartassa.\nKäsitekartta on käsitteellinen havainnollistus itsen jalostamisen maisemasta. Se ei sellaisenaan osoita yksittäisten tekijöiden välisiä mitattuja syy-seuraussuhteita.\n\nLähde:\nS. 55, kuva 1 ”Itsen jalostamisen maisema (eli käsitekartta purkutalkoita varten)” sekä s. 46–49.\nKäsitekartassa mainitaan muun muassa ”Modernin subjektin elämänprojekti”, ”Turvallisuusmarkkinat”, ”Elämystuotanto” ja ”Systeemisten ongelmien psykologisointi”.",
      "learningPoint": "Opiskelijan tulee yhdistää käsitekartan elementit artikkelin teoreettiseen analyysiin. Erityisesti on erotettava vallitsevan maiseman hallintamekanismit kirjoittajien ehdottamista vaihtoehtoisista toimintatavoista.\nHakuvinkki: Siirry sivun 55 kuvaan 1. Ctrl+F: Systeemisten ongelmien psykologisointi ja Lifeworld Inc."
    },
    {
      "id": "g-m14-q16",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Tosi vai epätosi?\nKirjoittajien mukaan nuorten hyvinvoinnin haasteita ei voida ratkaista pelkästään lisäämällä yksilöön kohdistuvia tukitoimia, jos samalla sivuutetaan hyvinvointiin vaikuttavat yhteiskunnalliset olosuhteet. Tästä huolimatta artikkelissa ei väitetä, että kaikki nuorten tukemiseen tähtäävät palvelut olisivat tarpeettomia.",
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
        "articleId": "nuorten-hyvinvointi-ja-asumisen-mahdollisuudet-itsen-jalostamisen-maisemassa",
        "page": "51–53",
        "section": "Itsen jalostaminen ja nuorten hyvinvointi"
      },
      "explanation": "Kirjoittajat kritisoivat sitä, että rakenteellisia ongelmia pyritään ratkaisemaan toistuvasti yksilön käyttäytymistä muuttamalla.\nHe eivät kuitenkaan väitä kaikkien tukipalveluiden olevan tarpeettomia. Esimerkiksi terapiatakuu kuvataan sinänsä tarpeelliseksi, mutta sen ei katsota yksin ratkaisevan yhteiskunnallisia ongelmia.\n\nLähde:\nS. 51–53, ”Itsen jalostaminen ja nuorten hyvinvointi”.\nRatkaiseva lainaus, s. 53: ”sinänsä tarpeellisen ’terapiatakuun’ uskotaan ratkaisevan perustavanlaatuisen yhteiskunnallisen ongelman”.",
      "learningPoint": "Opiskelijan tulee erottaa yksilökeskeisten ratkaisujen riittävyyteen kohdistuva kritiikki kaikkien tukitoimien hylkäämisestä. Tutkimuksen rajattua väitettä ei saa muuttaa ehdottomaksi.\nHakuvinkki: Ctrl+F: sinänsä tarpeellisen ja itseään ruokkiva kehä."
    },
    {
      "id": "g-m14-q17",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein nuorten vastarinnan muodot ja niiden merkityksen itsen jalostamisen maisemassa?",
      "options": [
        {
          "id": "a",
          "text": "Opintojen venyttäminen ja päämäärätön hengailu tulkitaan artikkelissa yksinomaan nuoren toimintakyvyn puutteiksi, jotka edellyttävät lisää aktivointia."
        },
        {
          "id": "b",
          "text": "Nuorten osallistumisesta kieltäytyminen tarkoittaa kirjoittajien mukaan aina yhteiskunnallista välinpitämättömyyttä eikä voi avata uusia toiminnan mahdollisuuksia."
        },
        {
          "id": "c",
          "text": "Nuorten vastarinta voi ilmetä esimerkiksi hengailuna, opintojen venyttämisenä tai osallistumisesta kieltäytymisenä, ja tällaiset teot voivat haastaa tehokkuuden sekä jatkuvan kehityksen vaatimuksia."
        },
        {
          "id": "d",
          "text": "Kirjoittajien mukaan nuorten vastarinta on merkityksellistä vain silloin, kun se tapahtuu järjestäytyneessä poliittisessa toiminnassa ja johtaa välittömästi yhteiskunnalliseen muutokseen."
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
        "articleId": "nuorten-hyvinvointi-ja-asumisen-mahdollisuudet-itsen-jalostamisen-maisemassa",
        "page": "54",
        "section": "Lopuksi: avauksia kohti terveempiä nuoruuden maisemia"
      },
      "explanation": "C on oikein. Kirjoittajat ehdottavat, että näennäisesti passiivinen tai tavoitteeton toiminta voidaan nähdä ajan ja tilan haltuunottona sekä vallitsevien vaatimusten haastamisena.\nA on väärin. Kirjoittajat nimenomaan kyseenalaistavat yksilön puutteisiin perustuvat tulkinnat.\nB on väärin. Osallistumisesta kieltäytyminen voi artikkelin mukaan avata uudenlaisia olemisen mahdollisuuksia.\nD on väärin. Vastarinta voi olla myös arkista, kehollista ja epämuodollista.\n\nLähde:\nS. 54, ”Lopuksi: avauksia kohti terveempiä nuoruuden maisemia”.\nRatkaiseva lainaus: ”opintojen tahallinen venyttäminen [...] tai päämäärätön hengailu kaupungilla”.",
      "learningPoint": "Opiskelijan tulee tunnistaa, miten sama toiminta voidaan tulkita joko yksilön ongelmaksi tai vallitsevia olosuhteita haastavaksi toimijuudeksi. Väärissä vaihtoehdoissa toiminnan merkitys muutetaan artikkelin tulkinnan vastaiseksi.\nHakuvinkki: Ctrl+F: opintojen tahallinen venyttäminen ja toiminnasta ja osallistumisesta kieltäytyminen."
    },
    {
      "id": "g-m14-q18",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Oikein vai väärin?\nKirjoittajat pitävät nuorten mielekästä osallistumista tärkeänä, mutta heidän mukaansa osallistumisen tukeminen ei tarkoita, että nuorten pitäisi aina osallistua aikuisten määrittelemiin toimintoihin. Myös passiivisuus tai osallistumisesta kieltäytyminen voidaan nähdä vaihtoehtoisena rytminä, joka haastaa vallitsevaa hallinnan logiikkaa.",
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
        "articleId": "nuorten-hyvinvointi-ja-asumisen-mahdollisuudet-itsen-jalostamisen-maisemassa",
        "page": "55–56",
        "section": "Lopuksi: avauksia kohti terveempiä nuoruuden maisemia"
      },
      "explanation": "Kirjoittajat korostavat nuorten mahdollisuutta vaikuttaa aikuisten ohjaamiin prosesseihin mutta myös oikeutta kieltäytyä osallistumisesta.\nPassiivisuus voidaan nähdä toimintana, joka katkaisee jatkuvan aktivoinnin ja tehokkuuden vaatimuksia.\n\nLähde:\nS. 55–56, ”Lopuksi: avauksia kohti terveempiä nuoruuden maisemia”.\nRatkaiseva lainaus, s. 56: ”aina nuoret eivät halua ’osallistua’”.",
      "learningPoint": "Opiskelijan tulee erottaa osallistumisen mahdollistaminen osallistumisen pakollisuudesta. Kaikille tarjottu osallistumismahdollisuus ei tarkoita, että jokaisen pitäisi käyttää sitä.\nHakuvinkki: Ctrl+F: aina nuoret eivät halua ja passiivisuus nähdä voimana."
    },
    {
      "id": "g-m14-q19",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelissa esitettyjä nuorten hyvinvoinnin ja planetaaristen suhteiden yhteyksiä?",
      "options": [
        {
          "id": "a",
          "text": "Nuorten hyvinvointia voidaan tarkastella suhteessa planetaarisiin prosesseihin, koska esimerkiksi teknologian tuotantoon liittyvät taloudelliset, ekologiset ja sosiaaliset suhteet vaikuttavat elämän mahdollisuuksiin."
        },
        {
          "id": "b",
          "text": "Kirjoittajien mukaan mielekäs asuminen liittyy myös ihmisen suhteisiin muihin elollisiin ja ei-inhimillisiin toimijoihin, eikä hyvinvointi rakennu vain ihmisten välisissä suhteissa."
        },
        {
          "id": "c",
          "text": "Planetaarinen näkökulma tarkoittaa, että nuorten hyvinvointia tulee tarkastella ensisijaisesti yksilön psykologisena ominaisuutena, koska globaalit ekologiset suhteet eivät vaikuta arkisiin toimintamahdollisuuksiin."
        },
        {
          "id": "d",
          "text": "Kännyköiden valmistukseen tarvittavien mineraalien louhinta toimii esimerkkinä siitä, miten paikallinen arkielämä kytkeytyy globaaleihin taloudellisiin ja ekologisiin suhteisiin."
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
        "articleId": "nuorten-hyvinvointi-ja-asumisen-mahdollisuudet-itsen-jalostamisen-maisemassa",
        "page": "56"
      },
      "explanation": "A on oikein. Teknologian tuotantoon liittyvät globaalit suhteet ovat osa nuorten arkielämän mahdollisuuksia.\nB on oikein. Kirjoittajat korostavat ihmisen kytkeytymistä planeetan muihin toimijoihin ja prosesseihin.\nC on väärin. Planetaarinen näkökulma nimenomaan haastaa yksilökeskeisen hyvinvointikäsityksen.\nD on oikein. Mineraalien louhinta mainitaan konkreettisena esimerkkinä globaaleista kytköksistä.\n\nLähde:\nS. 56, artikkelin loppupäätelmät.\nRatkaiseva lainaus: ”Nuorten hyvinvointi ei rakennu vain ihmisyhteisöissä”.",
      "learningPoint": "Opiskelijan tulee yhdistää planetaarisen hyvinvoinnin ajatus konkreettiseen esimerkkiin ja tunnistaa väite, jossa näkökulman keskeinen merkitys on käännetty vastakkaiseksi.\nHakuvinkki: Ctrl+F: mineraalien louhintaa ja planetaariseen hyvinvointiin."
    },
    {
      "id": "g-m14-q20",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mitkä seuraavista päätelmistä ovat perusteltavissa Pyyryn ja Brunilan artikkelin analyysin ja johtopäätösten perusteella? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Nuorten hyvinvoinnin tukeminen voi edellyttää koulutuksen ja tukijärjestelmien toimintatapojen muuttamista siten, että nuorille annetaan enemmän mahdollisuuksia omaehtoiseen toimintaan ja yhteiskunnallisten olosuhteiden haastamiseen."
        },
        {
          "id": "b",
          "text": "Itsen jalostamisen maiseman muuttaminen onnistuu kirjoittajien mukaan ensisijaisesti lisäämällä nuorten itsevastuullisuutta, yksilöllistä valmennusta ja kilpailukykyä vahvistavia tavoitteita."
        },
        {
          "id": "c",
          "text": "Nuorten hyvinvointia voidaan lähestyä mielekkään kanssa-asumisen kysymyksenä, jolloin huomio kohdistuu yksilön ominaisuuksien lisäksi jaettuihin tilallisiin, yhteiskunnallisiin ja planetaarisiin suhteisiin."
        },
        {
          "id": "d",
          "text": "Koska nuorten hyvinvointi rakentuu maisemassa, kirjoittajat katsovat, ettei yksittäisillä nuorilla ole lainkaan mahdollisuuksia vaikuttaa omaan elämäänsä tai haastaa vallitsevia olosuhteita."
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
        "articleId": "nuorten-hyvinvointi-ja-asumisen-mahdollisuudet-itsen-jalostamisen-maisemassa",
        "page": "54–56",
        "section": "Lopuksi: avauksia kohti terveempiä nuoruuden maisemia"
      },
      "explanation": "A on oikein. Kirjoittajat ehdottavat nuorille enemmän aikaa, tilaa ja mahdollisuuksia vaikuttaa aikuisten ohjaamiin prosesseihin sekä haastaa vallitsevia odotuksia.\nB on väärin. Artikkelissa kritisoidaan juuri itsevastuullisuuden ja kilpailukyvyn jatkuvaa korostamista.\nC on oikein. Hyvinvointi ymmärretään osana jaettua, muuttuvaa maisemaa, jossa vaikuttavat myös yhteiskunnalliset ja planetaariset suhteet.\nD on väärin. Kirjoittajat korostavat, etteivät maisemat ole täysin määrääviä. Nuoret voivat myös vastustaa ja muokata niitä.\n\nLähde:\nS. 54–56, ”Lopuksi: avauksia kohti terveempiä nuoruuden maisemia”.\nRatkaiseva lainaus, s. 56: ”nuoret tarvitsevat liittolaisia, jotka ovat valmiita kuuntelemaan heitä”.",
      "learningPoint": "Opiskelijan tulee yhdistää artikkelin kritiikki sen esittämiin vaihtoehtoihin. Erityisesti tulee erottaa olosuhteiden vaikutus täydellisestä määräytymisestä sekä yksilön muuttamiseen keskittyvä tuki yhteisten olosuhteiden muuttamisesta.\nHakuvinkki: Ctrl+F: maisemanpurkutalkoissa, nuoret tarvitsevat liittolaisia ja Mikään maisema ei ole totaalinen."
    }
  ]
} satisfies ValintakoeGExercise;
