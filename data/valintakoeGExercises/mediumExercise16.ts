import type { ValintakoeGExercise } from "./types";

/**
 * Keskivaikea harjoitus 16: käyttäjän toimittamat tehtävät 1–20.
 * Lähdeotteet ovat explanation-kentissä, hakuvinkit learningPoint-kentissä.
 */
export const valintakoeGMediumExercise16Base = {
  "id": "keskivaikea-harjoitus-16",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Keskivaikea harjoitus 16 – Lasten uutiset, sota ja episteemiset oikeudet: Toimittajien näkemyksiä lasten oikeudesta tietoon ja suojeluun",
  "description": "33 minuutin keskivaikea aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 33,
  "difficulty": "medium",
  "articleId": "lasten-uutiset-sota-ja-episteemiset-oikeudet",
  "articleTitle": "Lasten uutiset, sota ja episteemiset oikeudet: Toimittajien näkemyksiä lasten oikeudesta tietoon ja suojeluun",
  "articleUrl": "https://journal.fi/mediaviestinta/article/view/181399/126181",
  "questions": [
    {
      "id": "g-m16-q1",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mitkä seuraavista väittämistä kuvaavat oikein lasten episteemisiä oikeuksia sekä niiden suhdetta viestinnällisiin ja digitaalisiin oikeuksiin? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Episteemiset oikeudet painottavat tiedon saamisen lisäksi sen ymmärtämistä ja omien mielipiteiden muodostamista, kun taas digitaalisissa oikeuksissa korostuvat muun muassa teknologiset edellytykset ja digitaaliset taidot."
        },
        {
          "id": "b",
          "text": "Digitaaliset oikeudet ovat artikkelissa episteemisiä oikeuksia laajempi käsite, koska niihin sisältyy myös oikeus muodostaa itsenäisesti maailmankuva."
        },
        {
          "id": "c",
          "text": "Episteemiset oikeudet kuuluvat myös lapsille riippumatta heidän kyvystään tietää tai ymmärtää, ja niiden toteutuminen edellyttää myös oikeuksia tukevia yhteiskunnallisia käytäntöjä."
        },
        {
          "id": "d",
          "text": "Episteemiset oikeudet rajoittuvat oikeuteen vastaanottaa luotettavaa informaatiota, kun taas julkiseen keskusteluun osallistuminen kuuluu yksinomaan viestinnällisiin oikeuksiin."
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
        "articleId": "lasten-uutiset-sota-ja-episteemiset-oikeudet",
        "page": "5–7"
      },
      "explanation": "A on oikein. Artikkelissa erotetaan digitaalisten oikeuksien välineellinen painotus episteemisten oikeuksien sisällöllisestä painotuksesta. Episteemisiin oikeuksiin kuuluu tiedon ymmärtäminen.\nB on väärin. Artikkelissa episteemiset oikeudet esitetään viestinnällisiä ja digitaalisia oikeuksia laajempana käsitteenä, ei päinvastoin.\nC on oikein. Episteemiset oikeudet kuuluvat kaikenikäisille lapsille heidän tiedollisista kyvyistään riippumatta. Niihin kuuluvat myös oikeuksien toteutumista tukevat käytännöt.\nD on väärin. Episteemisiin oikeuksiin sisältyy myös oikeus osallistua julkiseen keskusteluun.\n\nLähde:\nS. 5–7, johdanto ja ”Episteemiset oikeudet ja lapset uutisten kohderyhmänä”.\nRatkaiseva lainaus, s. 7: ”digitaalisissa oikeuksissa painottuvat kuitenkin välineelliset oikeudet”.",
      "learningPoint": "Opiskelijan tulee erottaa kolme läheistä oikeuskäsitettä ja tunnistaa, mitä oikeuksia kuhunkin sisältyy. Väärissä vaihtoehdoissa oikeita ominaisuuksia yhdistetään väärään käsitteeseen.\nHakuvinkki: Ctrl+F: välineelliset oikeudet ja sisällölliset oikeudet."
    },
    {
      "id": "g-m16-q2",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Tosi vai epätosi?\nYK:n lapsen oikeuksien sopimuksen 17. artikla korostaa lasten oikeutta saada tietoa monenlaisista lähteistä sekä suojelua vahingolliselta aineistolta. Sopimuksen 13. artikla puolestaan painottaa lasten mahdollisuutta hakea, vastaanottaa ja levittää tietoa. Näin ollen lasten suojeleminen ei ole sopimuksen ainoa tiedonsaantia koskeva lähtökohta.",
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
        "articleId": "lasten-uutiset-sota-ja-episteemiset-oikeudet",
        "page": "4–5"
      },
      "explanation": "Artikla 17 yhdistää tiedonsaannin ja suojelun, kun taas artikla 13 painottaa lapsen ilmaisunvapautta ja toimijuutta. Näiden oikeuksien välillä voi syntyä jännitteitä, mutta lasten tiedollisia oikeuksia ei voida palauttaa yksinomaan suojeluun.\n\nLähde:\nS. 4–5, johdanto.\nRatkaiseva lainaus, s. 4: ”vapauden hakea, vastaanottaa ja levittää kaikenlaisia tietoja ja ajatuksia”.",
      "learningPoint": "Opiskelijan tulee yhdistää kahden sopimusartiklan sisältö ja tunnistaa niiden yhteinen merkitys lasten oikeuksille. Oikea väittämä kokoaa artikloissa esitetyt tiedonsaannin, ilmaisunvapauden ja suojelun periaatteet uudeksi kokonaisuudeksi.\nHakuvinkki: Ctrl+F: 17. artiklan ja 13. artiklassa."
    },
    {
      "id": "g-m16-q3",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein lasten uutisia koskevan aiemman tutkimuksen painotukset ja siinä tunnistetut puutteet?",
      "options": [
        {
          "id": "a",
          "text": "Aiempi tutkimus on keskittynyt erityisesti lasten uutistuotannon työprosesseihin, mutta lasten kielteiset tunnereaktiot ja poliittinen sosialisaatio ovat jääneet vähälle huomiolle."
        },
        {
          "id": "b",
          "text": "Aiemmassa tutkimuksessa on painotettu lasten uutiskulutusta, poliittista sosialisaatiota ja uutisten aiheuttamia kielteisiä tunteita, mutta uutistuotannon näkökulma ja mediaympäristön viimeaikainen muutos ovat jääneet vähälle huomiolle."
        },
        {
          "id": "c",
          "text": "Lasten uutisten tutkimuksessa on tarkasteltu pääasiassa sosiaalisen median algoritmeja, kun taas lasten mielipiteitä uutisista alettiin tutkia vasta 2020-luvulla."
        },
        {
          "id": "d",
          "text": "Aiempi tutkimus on osoittanut, että eri-ikäisten lasten uutistarpeet ovat samanlaisia, minkä vuoksi ikään liittyvää eriarvoisuutta ei ole pidetty tutkimuksellisesti merkittävänä."
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
        "articleId": "lasten-uutiset-sota-ja-episteemiset-oikeudet",
        "page": "5 ja 8"
      },
      "explanation": "B on oikein. Artikkelissa kuvataan kolme vakiintunutta tutkimusaihetta sekä tutkimuksen puutteita, joihin kuuluvat uutistuotannon vähäinen tarkastelu ja mediaympäristön muutoksen riittämätön huomiointi.\nA on väärin. Se vaihtaa tutkimuksen keskeiset painotukset ja puutteet keskenään.\nC on väärin. Lasten mielipiteitä on tutkittu jo aiemmin, eikä sosiaalisen median algoritmien tarkastelu ole ollut tutkimuksen pääpaino.\nD on väärin. Kirjoittajat kritisoivat sitä, että eri-ikäisten lasten väliset erot jäävät tutkimuksessa huomiotta.\n\nLähde:\nS. 5 ja 8, aiemman tutkimuksen kuvaus.\nRatkaiseva lainaus, s. 8: ”Uutistuotannon näkökulma on lasten uutisten tutkimuksessa kuitenkin jäänyt pitkälti paitsioon”.",
      "learningPoint": "Opiskelijan tulee erottaa tutkimuksessa jo käsitellyt aihealueet niistä, joita on tutkittu vähän. Erityisesti on tarkistettava, onko jokin näkökulma ollut tutkimuksen painopiste vai tunnistettu tutkimusaukko.\nHakuvinkki: Ctrl+F: kolmeen aihepiiriin ja jäänyt pitkälti paitsioon."
    },
    {
      "id": "g-m16-q4",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Oikein vai väärin?\nLasten uutisten ymmärrettävyys tarkoittaa aiemman tutkimuksen mukaan sekä kielen selkeyttämistä että sisällön yksinkertaistamista. Sisällön yksinkertaistaminen ei kuitenkaan tarkoita pelkästään taustatiedon vähentämistä, sillä toimittajat voivat jättää yksityiskohtia pois ja samalla selittää uutistapahtumien taustoja perusteellisesti.",
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
        "articleId": "lasten-uutiset-sota-ja-episteemiset-oikeudet",
        "page": "9",
        "section": "Episteemiset oikeudet ja lapset uutisten kohderyhmänä"
      },
      "explanation": "Artikkelissa ymmärrettävyys yhdistetään sekä selkeään kieleen että sisällöllisiin ratkaisuihin. Yksityiskohtia voidaan vähentää, mutta olennaisten asioiden ymmärtämistä tuetaan selittämällä ja taustoittamalla.\n\nLähde:\nS. 9, ”Episteemiset oikeudet ja lapset uutisten kohderyhmänä”.\nRatkaiseva lainaus: ”Yksityiskohtien sijaan toimittajat pyrkivät edistämään uutisten syvempää ymmärtämistä”.",
      "learningPoint": "Opiskelijan tulee erottaa tiedon määrän vähentäminen tiedollisen ymmärryksen heikentämisestä. Tiivis uutinen voi olla samalla perusteellisesti taustoitettu.\nHakuvinkki: Ctrl+F: Yksityiskohtien sijaan ja syvempää ymmärtämistä."
    },
    {
      "id": "g-m16-q5",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mitkä seuraavista väittämistä vastaavat tutkimuksen aineistoa ja toteutusta? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Tutkimusaineisto koostui kahdeksasta Yle Mixin ja HS Lasten uutisten toimittajien yksilöhaastattelusta. Haastateltavien edellytettiin työskennelleen lasten uutisten parissa vähintään noin vuoden ajan Ukrainan sodan alkamisesta lähtien."
        },
        {
          "id": "b",
          "text": "Tutkimuksessa tehtiin kolme haastattelua maaliskuussa 2024 ja viisi helmi–maaliskuun vaihteessa 2023, jotta toimittajien näkemyksiä voitiin vertailla ennen sotaa ja sen jälkeen."
        },
        {
          "id": "c",
          "text": "Haastatteluista kolme toteutettiin helmi–maaliskuun vaihteessa 2023 ja loput viisi maaliskuussa 2024, ja analyysissa hyödynnettiin refleksiivistä teema-analyysia."
        },
        {
          "id": "d",
          "text": "Tutkimuksen varsinainen aineisto muodostui kahdeksasta lasten ryhmähaastattelusta, joita täydennettiin toimittajien julkaisemien uutisten tilastollisella analyysilla."
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
        "articleId": "lasten-uutiset-sota-ja-episteemiset-oikeudet",
        "page": "12–13",
        "section": "Teema-analyysi toimittajien haastatteluista"
      },
      "explanation": "A on oikein. Aineisto koostui kahdeksasta toimittajien teemahaastattelusta. Haastateltavien valintakriteerinä oli vähintään noin vuoden kokemus lasten uutisten tekemisestä Ukrainan sodan alkamisen jälkeen.\nB on väärin. Haastattelumäärät on yhdistetty vääriin ajankohtiin. Lisäksi molemmat haastattelujaksot sijoittuivat sodan alkamisen jälkeiseen aikaan.\nC on oikein. Kolme ensimmäistä haastattelua toteutettiin vuonna 2023 ja viisi vuonna 2024. Aineisto analysoitiin refleksiivisellä teema-analyysilla.\nD on väärin. Haastateltavat olivat toimittajia, eivät lapsia. Julkaistuja uutisia käytettiin tausta-aineistona.\n\nLähde:\nS. 12–13, ”Teema-analyysi toimittajien haastatteluista”.\nRatkaiseva lainaus, s. 12: ”Tutkimuksen aineisto koostuu yhteensä kahdeksasta”.",
      "learningPoint": "Opiskelijan tulee yhdistää haastattelujen lukumäärät, ajankohdat ja tutkimusmenetelmä oikeisiin tietoihin. Väärissä vaihtoehdoissa käytetään artikkelin todellisia lukuja väärissä yhteyksissä.\nHakuvinkki: Ctrl+F: Kolme ensimmäistä haastattelua ja refleksiiviseen teema-analyysiin."
    },
    {
      "id": "g-m16-q6",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein Yle Mixin ja HS Lasten uutisten julkaisukanavien eroa tutkimuksessa?",
      "options": [
        {
          "id": "a",
          "text": "Yle Mix julkaisee uutisia ensisijaisesti painetussa sanomalehdessä, kun taas HS Lasten uutiset toimii yksinomaan sosiaalisen median kanavissa."
        },
        {
          "id": "b",
          "text": "Molemmat uutismediat toimivat yksinomaan suoratoistopalveluissa, mutta Yle Mix käyttää lisäksi painettua sanomalehteä."
        },
        {
          "id": "c",
          "text": "HS Lasten uutiset toimii vain painettuna lehtenä, kun taas Yle Mix julkaisee uutisia television lineaarisessa lähetysverkossa."
        },
        {
          "id": "d",
          "text": "Yle Mix tuottaa uutisia suoratoistopalveluun ja sosiaaliseen mediaan, kun taas HS Lasten uutiset hyödyntää myös sanomalehteä, televisiota ja verkkopalveluita."
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
        "articleId": "lasten-uutiset-sota-ja-episteemiset-oikeudet",
        "page": "13",
        "section": "Teema-analyysi toimittajien haastatteluista"
      },
      "explanation": "D on oikein. Yle Mix julkaisee sisältöjä Yle Areenassa ja useilla sosiaalisen median alustoilla. HS Lasten uutisilla on lisäksi sanomalehti- ja televisiomuotoista uutistoimintaa.\nA on väärin. Yle Mix ei julkaise painettua sanomalehteä, ja HS Lasten uutiset käyttää muitakin kuin sosiaalisen median kanavia.\nB on väärin. HS Lasten uutiset toimii myös perinteisissä medioissa, eikä Yle Mix julkaise painettua sanomalehteä.\nC on väärin. HS Lasten uutiset ei rajoitu painettuun lehteen, eikä Yle Mixin kuvata julkaisevan lineaarisessa televisiossa.\n\nLähde:\nS. 13, ”Teema-analyysi toimittajien haastatteluista”.\nRatkaiseva lainaus: ”HS Lasten uutiset nojaa enemmän perinteiseen mediaan.”",
      "learningPoint": "Opiskelijan tulee yhdistää kahden uutismedian julkaisukanavat oikeisiin toimijoihin ja erottaa perinteisen median sekä digitaalisten kanavien käyttö.\nHakuvinkki: Ctrl+F: Siinä missä Yle Mix ja HS Lasten uutiset toimii."
    },
    {
      "id": "g-m16-q7",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin kuvion 1 pääteemoja ja niiden alateemoja? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Sotauutisten ymmärrettävyyden parantamiseen kuuluvat ymmärrettävyyden rooli sotauutisoinnissa ja ymmärrettävyyden rakentuminen uutistyössä."
        },
        {
          "id": "b",
          "text": "Lasten näkökulman vahvistamiseen kuuluu kolme alateemaa, joista yksi käsittelee toimittajien vastuuta uutisoinnin rakentamasta maailmankuvasta."
        },
        {
          "id": "c",
          "text": "Lasten ääni sotauutisoinnissa sijoittuu kuviossa ymmärrettävyyden parantamisen alateemaksi, koska lasten haastattelut helpottavat uutisten ymmärtämistä."
        },
        {
          "id": "d",
          "text": "Lähestyttävyyden rakentuminen uutistyössä on kuviossa ymmärrettävyyden parantamisen alateema, kun taas aiheen taustoittaminen muodostaa itsenäisen pääteeman."
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
        "articleId": "lasten-uutiset-sota-ja-episteemiset-oikeudet",
        "page": "13–14"
      },
      "explanation": "A on oikein. Ymmärrettävyyden parantaminen on ensimmäinen pääteema, johon kuuluu kaksi mainittua alateemaa.\nB on oikein. Lasten näkökulman vahvistaminen sisältää kolme alateemaa: lähestyttävyyden rakentuminen, toimittajien vastuu uutisoinnin rakentamasta maailmankuvasta ja lasten ääni sotauutisoinnissa.\nC on väärin. Lasten ääni kuuluu lasten näkökulman vahvistamisen pääteemaan, ei ymmärrettävyyden parantamiseen.\nD on väärin. Lähestyttävyyden rakentuminen kuuluu lasten näkökulman vahvistamiseen. Aiheen taustoittaminen on ymmärrettävyyden rakentumiseen liittyvä keino, ei kuvion itsenäinen pääteema.\n\nLähde:\nS. 13–14, teema-analyysin tulokset ja kuvio 1.\nRatkaiseva lainaus, s. 13: ”Aineistosta muodostettiin kaksi pääteemaa”.",
      "learningPoint": "Opiskelijan tulee yhdistää kuvion pääteemat ja alateemat oikein. Erityisesti on tarkistettava, ettei artikkelissa esiintyvää oikeaa käsitettä sijoiteta väärän pääteeman alle.\nHakuvinkki: Siirry sivun 14 kuvioon 1. Ctrl+F: Aineistosta muodostettiin kaksi pääteemaa."
    },
    {
      "id": "g-m16-q8",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Oikein vai väärin?\nToimittajien mukaan lapsille suunnatun sotauutisoinnin tarkoituksena on usein selittää tapahtumia, joista lapset ovat jo kuulleet esimerkiksi aikuisilta tai sosiaalisesta mediasta. Tämän vuoksi sotauutisoinnissa voidaan tarjota yksittäisiä sosiaalisen median julkaisuja kattavampia ja tasapuolisempia selityksiä ilman, että sodan jokaista tapahtumaa käsitellään uutisissa.",
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
        "articleId": "lasten-uutiset-sota-ja-episteemiset-oikeudet",
        "page": "14–15",
        "section": "Ymmärrettävyyden rooli sotauutisoinnissa"
      },
      "explanation": "Haastateltavat katsovat, että lapset kohtaavat sotaan liittyvää tietoa myös lasten uutisten ulkopuolella. Lasten uutisten tehtävänä on auttaa ymmärtämään näitä tietoja ja korjata mahdollisia väärinkäsityksiä.\nVäittämä ei edellytä kaikkien sotatapahtumien uutisoimista, vaan keskeisen tiedon valitsemista ja selittämistä.\n\nLähde:\nS. 14–15, ”Ymmärrettävyyden rooli sotauutisoinnissa”.\nRatkaiseva lainaus, s. 15: ”ikätasoisia selityksiä, jotka on ehkä kattavampia tai tasapuolisempia”.",
      "learningPoint": "Opiskelijan tulee erottaa lasten tiedontarpeisiin vastaaminen kaiken mahdollisen tiedon välittämisestä. On tarkistettava, miten toimittajat perustelevat aihevalinnat ja tiedon rajaamisen.\nHakuvinkki: Ctrl+F: tiedon sirpaleet ja yksittäinen somepostaus."
    },
    {
      "id": "g-m16-q9",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein sotauutisten ymmärrettävyyden kolme osa-aluetta ja niiden käytännön toteutuksen?",
      "options": [
        {
          "id": "a",
          "text": "Tiedon rajaaminen tarkoittaa sodan historiallisten syiden yksityiskohtaista avaamista, kielen yksinkertaistaminen tarkoittaa aiheiden vähentämistä ja taustoittaminen tarkoittaa vaikeiden sanojen korvaamista helpommilla."
        },
        {
          "id": "b",
          "text": "Tiedon rajaamisessa säilytetään kaikki sodan yksityiskohdat, mutta taustoittamisessa vähennetään eri näkökulmia, jotta uutinen olisi mahdollisimman lyhyt."
        },
        {
          "id": "c",
          "text": "Tiedon rajaaminen koskee olennaisen tiedon ja yksityiskohtien valintaa, kielen yksinkertaistaminen selkeää ilmaisua ja taustoittaminen tapahtumien asettamista esimerkiksi historialliseen tai poliittiseen yhteyteen."
        },
        {
          "id": "d",
          "text": "Tiedon rajaaminen tarkoittaa vaikeiden aiheiden poistamista uutisista, kielen yksinkertaistaminen uusien käsitteiden välttämistä kaikissa uutisissa ja taustoittaminen pelkästään tapahtumien ajallista luettelointia."
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
        "articleId": "lasten-uutiset-sota-ja-episteemiset-oikeudet",
        "page": "17–19",
        "section": "Ymmärrettävyyden rakentuminen uutistyössä"
      },
      "explanation": "C on oikein. Se yhdistää ymmärrettävyyden kaikki kolme osa-aluetta niiden oikeisiin tehtäviin.\nA on väärin. Siinä tiedon rajaamisen, kielen yksinkertaistamisen ja taustoittamisen ominaisuudet on liitetty vääriin osa-alueisiin.\nB on väärin. Tiedon rajaamisessa nimenomaan karsitaan yksityiskohtia. Taustoittamisen tarkoituksena ei ole vähentää näkökulmia.\nD on väärin. Vaikeita aiheita ei jätetä automaattisesti käsittelemättä, eikä taustoittaminen rajoitu tapahtumien ajalliseen järjestykseen.\n\nLähde:\nS. 17–19, ”Ymmärrettävyyden rakentuminen uutistyössä”.\nRatkaiseva lainaus, s. 17: ”tiedon rajaamisesta, kielen yksinkertaistamisesta ja aiheen taustoittamisesta”.",
      "learningPoint": "Opiskelijan tulee tunnistaa kolme toisiinsa liittyvää mutta erillistä journalistista toimintatapaa. Väärissä vaihtoehdoissa niiden ominaisuuksia vaihdetaan keskenään.\nHakuvinkki: Ctrl+F: kolmesta osa-alueesta ja historialliseen, kulttuuriseen."
    },
    {
      "id": "g-m16-q10",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 12,
      "prompt": "Tosi vai epätosi?\nHaastateltujen toimittajien mukaan ikätasoinen tieto voi lievittää sotauutisten herättämää pelkoa lisäämällä ymmärrystä ja hallinnan tunnetta. Tämä ei kuitenkaan tarkoita, että pelon pitäisi poistua kokonaan tai että sotauutiset eivät saisi herättää kielteisiä tunteita.",
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
        "articleId": "lasten-uutiset-sota-ja-episteemiset-oikeudet",
        "page": "16–17",
        "section": "Ymmärrettävyyden rooli sotauutisoinnissa"
      },
      "explanation": "Toimittajat pitävät ymmärrettävyyttä keinona auttaa lapsia käsittelemään sotaan liittyviä tunteita. Tiedon lisääntyminen voi vähentää epätietoisuutta ja vahvistaa hallinnan tunnetta.\nArtikkelissa kuitenkin todetaan, että sota itsessään on pelottava asia ja että sotauutiset voivat perustellusti herättää myös kielteisiä tunteita.\n\nLähde:\nS. 16–17, ”Ymmärrettävyyden rooli sotauutisoinnissa”.\nRatkaiseva lainaus, s. 16: ”Se pelko ei välttämättä poistu”.",
      "learningPoint": "Opiskelijan tulee erottaa pelon mahdollinen väheneminen sen täydellisestä poistumisesta. On kiinnitettävä huomiota siihen, esitetäänkö vaikutus mahdollisena vai varmana.\nHakuvinkki: Ctrl+F: Kun ymmärrys lisääntyy ja sota itsessään."
    },
    {
      "id": "g-m16-q11",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mitkä seuraavista väittämistä kuvaavat oikein toimittajien sotauutisoinnissa tekemiä taustoittamiseen liittyviä ratkaisuja? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Sotauutisissa pyritään tavallisesti selittämään tapahtumien taustoja toistuvasti, jotta lapset ymmärtäisivät eri uutisten välisiä yhteyksiä."
        },
        {
          "id": "b",
          "text": "Ydinaseista ja sotarikoksista voidaan kertoa irrottamalla ne käynnissä olevan sodan välittömästä uhkakontekstista, vaikka taustoittamista muuten pidetään tärkeänä."
        },
        {
          "id": "c",
          "text": "Sotauutisten ymmärrettävyys edellyttää toimittajien mukaan, että kaikki sotaan liittyvät käsitteet selitetään niiden täydellisessä historiallisessa ja poliittisessa yhteydessä."
        },
        {
          "id": "d",
          "text": "Ydinaseista uutisoimista vältetään kokonaan, koska toimittajat katsovat lasten tiedontarpeen väistyvän aina mahdollisten pelkoreaktioiden tieltä."
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
        "articleId": "lasten-uutiset-sota-ja-episteemiset-oikeudet",
        "page": "18–19",
        "section": "Ymmärrettävyyden rakentuminen uutistyössä"
      },
      "explanation": "A on oikein. Toimittajat pitävät tärkeänä, että sodan taustasyitä ja aiempia tapahtumia avataan useissa uutisissa, ei vain kerran.\nB on oikein. Ydinaseita ja sotarikoksia voidaan käsitellä yleisellä tasolla ilman, että niitä liitetään suoraan käynnissä olevan sodan uhkiin.\nC on väärin. Vaikka taustoittamista korostetaan, joidenkin aiheiden yhteydessä ajankohtaista kontekstia nimenomaan häivytetään lasten suojelemiseksi.\nD on väärin. Toimittajat pitävät näistäkin aiheista uutisoimista tarpeellisena, koska lapset saattavat kohdata niitä muualla mediassa.\n\nLähde:\nS. 18–19, ”Ymmärrettävyyden rakentuminen uutistyössä”.\nRatkaiseva lainaus, s. 19: ”Ajankohtaisen kontekstin häivyttäminen toimii keinona etäännyttää lapsia”.",
      "learningPoint": "Opiskelijan tulee tunnistaa yleisen toimintaperiaatteen poikkeus. Taustoittamisen tärkeys ei tarkoita, että kaikkien aiheiden kohdalla käytettäisiin samanlaista kontekstointia.\nHakuvinkki: Ctrl+F: ydinaseista ja sotarikoksista ja jutusta toiseen."
    },
    {
      "id": "g-m16-q12",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista väittämistä EI vastaa tutkimuksessa esitettyjä lasten uutisten kohderyhmää koskevia havaintoja?",
      "options": [
        {
          "id": "a",
          "text": "Yle Mixin ja HS Lasten uutisten julkilausuttu kohderyhmä on noin 7–12-vuotiaat alakoululaiset, mutta käytännön uutistyössä painottuvat noin 10–12-vuotiaat lapset."
        },
        {
          "id": "b",
          "text": "Toimittajat katsovat, että ensimmäisen ja kuudennen luokan oppilaiden tietämyksessä ja elämänkokemuksessa on niin suuri ero, että koko ikähaarukan huomioiminen on vaikeaa."
        },
        {
          "id": "c",
          "text": "Uutisissa käsiteltävien pelottavien asioiden valintaan vaikuttaa nuorin yleisö, vaikka uutisten ymmärrettävyyttä arvioidaan käytännössä vanhempien alakoululaisten perusteella."
        },
        {
          "id": "d",
          "text": "Toimittajat mitoittavat sekä uutisten tietotason että pelottavien sisältöjen valinnan ensisijaisesti nuorimpien alakoululaisten mukaan, jotta koko kohderyhmälle voidaan tarjota samantasoisesti ymmärrettäviä uutisia."
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
        "articleId": "lasten-uutiset-sota-ja-episteemiset-oikeudet",
        "page": "20–21",
        "section": "Lähestyttävyyden rakentuminen uutistyössä"
      },
      "explanation": "A on oikein. Julkilausuttu kohderyhmä kattaa alakoululaiset, mutta käytännössä toimittajat ajattelevat vanhempia alakoululaisia.\nB on oikein. Toimittajat pitävät eri-ikäisten lasten tiedollisia ja kokemuksellisia eroja merkittävinä.\nC on oikein. Pelottavuuden arvioinnissa huomioidaan nuorimmat, mutta tiedollinen taso suunnataan pääosin vanhemmille lapsille.\nD on väärin. Se väittää sekä tietotason että pelottavuuden määräytyvän nuorimman yleisön mukaan, vaikka artikkelissa näiden kahden ratkaisun perusteet eroavat toisistaan.\n\nLähde:\nS. 20–21, ”Lähestyttävyyden rakentuminen uutistyössä”.\nRatkaiseva lainaus, s. 21: ”kuinka pelottavia tai ahdistavia asioita uutisissa käsitellään, määräytyy haastatteluiden perusteella nuorimman yleisön mukaan”.",
      "learningPoint": "Opiskelijan tulee erottaa julkilausuttu kohderyhmä käytännön toimitustyötä ohjaavasta kohderyhmästä. Lisäksi tulee tarkistaa, minkä ikäryhmän perusteella tehdään tiedollisia ja suojelemiseen liittyviä ratkaisuja.\nHakuvinkki: Ctrl+F: 10–12-vuotiasta ja nuorimman yleisön mukaan."
    },
    {
      "id": "g-m16-q13",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Oikein vai väärin?\nLasten uutisten toimittajat pyrkivät rajoittamaan synkkien uutisaiheiden määrää, koska he pitävät sotaa lapsille lähtökohtaisesti epäkiinnostavana aiheena. Tästä syystä sotauutisointia vähennetään myös sodan alkuvaiheessa, jolloin lasten tiedontarve on toimittajien mukaan pienimmillään.",
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
        "articleId": "lasten-uutiset-sota-ja-episteemiset-oikeudet",
        "page": "21–22",
        "section": "Toimittajien vastuu uutisoinnin rakentamasta maailmankuvasta"
      },
      "explanation": "Väittämä on väärin kahdesta syystä. Toimittajat eivät perustele synkkien uutisten rajoittamista sillä, etteivät lapset olisi niistä kiinnostuneita. Perusteluna on erityisesti lasten arjen huomioiminen ja vastuu uutisoinnin rakentamasta maailmankuvasta.\nLisäksi sodan alkuvaiheessa lasten tiedontarpeen katsotaan olevan suurimmillaan, minkä vuoksi tavallista runsaampi uutisointi voi olla perusteltua.\n\nLähde:\nS. 21–22, ”Toimittajien vastuu uutisoinnin rakentamasta maailmankuvasta”.\nRatkaiseva lainaus, s. 22: ”Sodan alkuvaiheessa ’tuhdimpi’ uutisointi on heidän mielestään perusteltua”.",
      "learningPoint": "Opiskelijan tulee erottaa uutisaiheiden määrän rajoittamisen todelliset perustelut virheellisistä syyselityksistä. Samalla on tarkistettava, miten sodan vaihe vaikuttaa uutisoinnin määrään.\nHakuvinkki: Ctrl+F: epäkiinnostavuudella ja tiedontarve on silloin suurimmillaan."
    },
    {
      "id": "g-m16-q14",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä sotauutisten lohduttavia näkökulmia ja narratiiveja? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Auttamisnarratiivissa kerrotaan esimerkiksi siitä, mitä Suomessa ja muualla Euroopassa tehdään sodasta kärsivien auttamiseksi."
        },
        {
          "id": "b",
          "text": "Pakolaistarinoiden avulla voidaan havainnollistaa sodan vakavuutta ja seurauksia näyttämättä suoraan taistelukenttien väkivaltaa."
        },
        {
          "id": "c",
          "text": "Auttamisnarratiivin keskeinen tavoite on esittää sotatoimet yksityiskohtaisesti, kun taas pakolaistarinoissa vältetään sodan vaikutusten käsittelemistä kokonaan."
        },
        {
          "id": "d",
          "text": "Pakolaistarinoita käytetään ensisijaisesti siksi, etteivät Suomessa asuvat lapset voi kohdata sotaa paenneita lapsia omassa arjessaan."
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
        "articleId": "lasten-uutiset-sota-ja-episteemiset-oikeudet",
        "page": "22–23",
        "section": "Toimittajien vastuu uutisoinnin rakentamasta maailmankuvasta"
      },
      "explanation": "A on oikein. Auttamisnarratiivi tuo esiin toimia, joilla sodasta kärsiviä autetaan Suomessa ja muualla Euroopassa.\nB on oikein. Pakolaistarinat näyttävät sodan seurauksia ihmisten arjessa ilman taistelukenttien väkivaltaista kuvastoa.\nC on väärin. Auttamisnarratiivissa ei keskitytä sotatoimien yksityiskohtaiseen esittämiseen, eivätkä pakolaistarinat jätä sodan seurauksia käsittelemättä.\nD on väärin. Artikkelissa mainitaan nimenomaan, että Suomessa asuvat lapset ovat voineet saada ukrainalaisia luokkakavereita.\n\nLähde:\nS. 22–23, ”Toimittajien vastuu uutisoinnin rakentamasta maailmankuvasta”.\nRatkaiseva lainaus, s. 23: ”Pakolaistarinoiden kautta toimittajat pyrkivät tuomaan sodan vaikutuksia lapsiin lähemmäs yleisöä”.",
      "learningPoint": "Opiskelijan tulee yhdistää kaksi uutisoinnissa käytettyä narratiivia niiden oikeisiin tavoitteisiin. On tarkistettava, miten molemmat voivat vahvistaa toivoa ja tehdä sotauutisista lähestyttävämpiä.\nHakuvinkki: Ctrl+F: auttamisnarratiivi ja pakolaistarinoiden."
    },
    {
      "id": "g-m16-q15",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mitkä seuraavista väittämistä kuvaavat oikein lasten äänen kuulumista sotauutisoinnissa sekä siihen liittyviä käytännön rajoituksia? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Toimittajat pitävät Ukrainasta Suomeen paenneiden lasten uudesta arjesta kertovia juttuja onnistuneina, koska niissä lapset voivat esiintyä tiedon tuottajina ja juttujen päähenkilöinä."
        },
        {
          "id": "b",
          "text": "Lasten ääni kuuluu sotauutisoinnissa enemmän kuin muissa lasten uutisissa, koska sota-aiheissa toimituksilla on tavallista paremmat mahdollisuudet haastatella lapsia paikan päällä."
        },
        {
          "id": "c",
          "text": "Sotauutisoinnissa lasten äänen kuulumista rajoittavat pienet resurssit ja riippuvuus aikuisille suunnatusta uutismateriaalista, vaikka toimittajat pitävät lasten kokemusten esittämistä tärkeänä."
        },
        {
          "id": "d",
          "text": "Toimittajat pitävät uutistoimistojen lyhyitä lasten haastatteluja riittävinä, koska niiden avulla lapset voidaan esittää aktiivisina toimijoina ilman taustatarinoita."
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
        "articleId": "lasten-uutiset-sota-ja-episteemiset-oikeudet",
        "page": "23–24",
        "section": "Lasten ääni sotauutisoinnissa"
      },
      "explanation": "A on oikein. Toimittajat pitävät pakolaislasten uudesta arjesta kertovia uutisia onnistuneina, koska ne tuovat lasten omia kokemuksia esiin ja vahvistavat heidän toimijuuttaan.\nB on väärin. Lasten ääni kuuluu sotauutisissa tavallista vähemmän, eikä toimituksilla ole yleensä mahdollisuutta tehdä juttuja paikan päällä sota-alueilla.\nC on oikein. Resurssien vähäisyys ja riippuvuus aikuisille suunnatusta materiaalista rajoittavat lasten omien kokemusten esittämistä.\nD on väärin. Toimittajat pitävät pinnallisia kommentteja ongelmallisina, koska ne eivät välttämättä tuo lasten taustatarinoita ja aktiivista toimijuutta näkyviin.\n\nLähde:\nS. 23–24, ”Lasten ääni sotauutisoinnissa”.\nRatkaiseva lainaus, s. 24: ”lasten ääni kuuluu sotauutisissa vähemmän kuin lasten uutisissa yleensä”.",
      "learningPoint": "Opiskelijan tulee erottaa toimittajien tavoitteet niiden käytännön toteutumisesta. Lasten äänen vahvistamista voidaan pitää tärkeänä, vaikka sen toteuttaminen on sotauutisoinnissa muita uutisaiheita vaikeampaa.\nHakuvinkki: Ctrl+F: hyvin rajalliset ja pienten resurssien vuoksi."
    },
    {
      "id": "g-m16-q16",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Tosi vai epätosi?\nHaastatteluiden perusteella toimittajat pitävät tapauskohtaista journalistista harkintaa tärkeänä, koska sodat ja muut kriisit eroavat toisistaan. Vaikka sotauutisointiin ei ole juurikaan vakiintuneita toimintatapoja, haastateltavat eivät katso tarkkojen ulkopuolisten ohjeiden välttämättä helpottavan työtään.",
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
        "articleId": "lasten-uutiset-sota-ja-episteemiset-oikeudet",
        "page": "24",
        "section": "Lasten ääni sotauutisoinnissa"
      },
      "explanation": "Toimittajat kertovat, ettei sotauutisointiin ole kovin vakiintuneita toimintatapoja. Tästä huolimatta he eivät kaipaa yksityiskohtaista ulkopuolista ohjeistusta, sillä tarkkojen linjausten koetaan voivan rajoittaa ja hankaloittaa työtä.\nRatkaisut tehdään tapauskohtaisesti, jotta lapsille voidaan välittää olennainen tieto ilman tarpeettoman järkyttäviä yksityiskohtia.\n\nLähde:\nS. 24, ”Lasten ääni sotauutisoinnissa”.\nRatkaiseva lainaus: ”tapauskohtainen harkinta on niistä uutisoitaessa välttämätöntä”.",
      "learningPoint": "Opiskelijan tulee erottaa toimintatapojen vakiintumattomuus ulkopuolisen ohjeistuksen tarpeesta. Ensimmäinen ei automaattisesti tarkoita, että toimittajat haluaisivat lisää sitovia ohjeita.\nHakuvinkki: Ctrl+F: ulkopuolista ohjeistusta ja tapauskohtainen harkinta."
    },
    {
      "id": "g-m16-q17",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein lasten uutisten kohderyhmää koskevan rajauksen ja sen mahdolliset seuraukset lasten suojelemiselle?",
      "options": [
        {
          "id": "a",
          "text": "Kun uutisten tietotaso suunnataan nuorimmille alakoululaisille ja pelottavat sisällöt valitaan vanhimpien perusteella, nuorimpien lasten ymmärtäminen vahvistuu mutta heidän suojelemisensa heikkenee."
        },
        {
          "id": "b",
          "text": "Kun uutisten ymmärrettävyys ja pelottavuus arvioidaan molemmat 10–12-vuotiaiden perusteella, nuoremmat lapset jäävät kokonaan sotauutisten ulkopuolelle."
        },
        {
          "id": "c",
          "text": "Kun uutisten tietotaso suunnataan vanhemmille alakoululaisille, mutta pelottavien sisältöjen valinnassa huomioidaan nuorimmat, nuorimpien lasten mahdollinen ymmärtämisvaikeus voi jäädä ristiriitaan suojelemisen tavoitteen kanssa."
        },
        {
          "id": "d",
          "text": "Kun uutisten sisältö rajataan nuorimpien lasten tiedollisten valmiuksien perusteella, toimittajat voivat käsitellä kaikkia sota-aiheita yhtä perusteellisesti ilman riskiä väärinkäsityksistä."
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
        "articleId": "lasten-uutiset-sota-ja-episteemiset-oikeudet",
        "page": "20–21",
        "section": "Lähestyttävyyden rakentuminen uutistyössä"
      },
      "explanation": "C on oikein. Toimittajat suunnittelevat uutisten tiedollista tasoa käytännössä vanhempia alakoululaisia ajatellen, mutta pelottavuuden arvioinnissa huomioidaan nuorimmat. Kirjoittajat tunnistavat ristiriidan, koska juuri ymmärtämisen vaikeus voi lisätä pelkoa.\nA on väärin. Se vaihtaa tietotason ja pelottavuuden arvioinnissa käytetyt ikäryhmät keskenään.\nB on väärin. Molempia ratkaisuja ei tehdä vanhempien lasten perusteella, eikä nuorempia lapsia suljeta uutisten yleisöstä kokonaan pois.\nD on väärin. Uutisten sisältöä ei mitoiteta kaikilta osin nuorimpien tiedollisen tason mukaan, eikä kaikkien aiheiden käsitteleminen yhtä perusteellisesti ole artikkelissa esitetty ratkaisu.\n\nLähde:\nS. 20–21, ”Lähestyttävyyden rakentuminen uutistyössä”.\nRatkaiseva lainaus, s. 21: ”Tämä on kuitenkin ristiriidassa haastateltavien esittämän näkemyksen kanssa”.",
      "learningPoint": "Opiskelijan tulee yhdistää kohderyhmän rajaaminen, ymmärtämisen vaikeus ja mahdollinen pelon lisääntyminen. Tehtävässä tulee tunnistaa, miksi suojelemiseen tähtäävä ratkaisu voi jäädä osittain ristiriitaiseksi.\nHakuvinkki: Ctrl+F: ristiriidassa haastateltavien ja epävarman ja ahdistuneen."
    },
    {
      "id": "g-m16-q18",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä lasten verkkoturvallisuutta koskevia tutkimustietoja ja niiden tulkintaa? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Suomessa noin kolme neljäsosaa 4.–9.-luokkalaisista ilmoitti, ettei kohtaa juuri koskaan tai koskaan vaivaavia tai järkyttäviä sisältöjä verkossa, vaikka joka kolmas lapsi ei tuntenut oloaan turvalliseksi verkossa."
        },
        {
          "id": "b",
          "text": "Lähes kaksi kolmasosaa kaikista 4.–9.-luokkalaisista ilmoitti kohdanneensa haitallista sisältöä tarkoituksetta, minkä vuoksi lähes kaikki lapset kokivat verkkoympäristön turvattomaksi."
        },
        {
          "id": "c",
          "text": "Haitallista sisältöä nähneistä lapsista lähes kaksi kolmasosaa kertoi kohdanneensa sitä tarkoituksetta, joten tätä osuutta ei voi suoraan yleistää kaikkiin lapsiin."
        },
        {
          "id": "d",
          "text": "Noin kolme neljäsosaa lapsista ilmoitti tuntevansa olonsa turvattomaksi verkossa, vaikka vain joka kolmas kertoi kohdanneensa järkyttäviä sisältöjä."
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
        "articleId": "lasten-uutiset-sota-ja-episteemiset-oikeudet",
        "page": "26"
      },
      "explanation": "A on oikein. Artikkelissa esitetään sekä noin kolmen neljäsosan osuus harvoin tai ei koskaan haitallisia sisältöjä kohtaavista että joka kolmannen lapsen turvattomuuden kokemus.\nB on väärin. Lähes kahden kolmasosan osuus koskee haitallista sisältöä nähneitä lapsia, ei kaikkia 4.–9.-luokkalaisia. Väittämän johtopäätöstä lähes kaikkien lasten turvattomuudesta ei myöskään tueta.\nC on oikein. Väittämä säilyttää tutkimustuloksen olennaisen kohdejoukkorajauksen.\nD on väärin. Kolmen neljäsosan osuus koskee vaivaavien tai järkyttävien sisältöjen harvinaista kohtaamista, ei turvattomuuden kokemusta.\n\nLähde:\nS. 26, johtopäätökset, Heikkiniemen ym. (2026) tutkimustietojen käsittely.\nRatkaiseva lainaus: ”haitallista sisältöä nähneistä lapsista lähes kaksi kolmasosaa”.",
      "learningPoint": "Opiskelijan tulee yhdistää tutkimuksessa esitetyt prosenttiosuudet oikeisiin kohdejoukkoihin. Erityisesti tulee tarkistaa, koskeeko tulos kaikkia vastaajia vai vain tietyn kokemuksen ilmoittaneita lapsia.\nHakuvinkki: Ctrl+F: kolme neljäsosaa, joka kolmas ja kaksi kolmasosaa."
    },
    {
      "id": "g-m16-q19",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelin johtopäätöksiä lasten uutisten saavutettavuudesta ja digitaalisista oikeuksista?",
      "options": [
        {
          "id": "a",
          "text": "Sosiaalinen media voi helpottaa lasten tavoittamista, mutta sen kautta julkaistut uutiset kilpailevat huomiosta myös mahdollisesti haitallisten sisältöjen kanssa."
        },
        {
          "id": "b",
          "text": "Lasten episteemisten ja digitaalisten oikeuksien turvaaminen edellyttää, että digitaalinen ympäristö tukee sekä osallistumista että turvallisuutta."
        },
        {
          "id": "c",
          "text": "Lasten uutisten julkaiseminen verkossa ei automaattisesti takaa niiden yhdenvertaista saavutettavuutta, sillä esimerkiksi maksumuurit ja lasten median käytön rajoitukset voivat vaikuttaa uutisten äärelle pääsyyn."
        },
        {
          "id": "d",
          "text": "Kun lasten uutisia julkaistaan sosiaalisessa mediassa, niiden yhdenvertainen saavutettavuus toteutuu ilman muita toimenpiteitä, koska digitaaliset julkaisukanavat poistavat taloudelliset ja käyttöön liittyvät esteet."
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
        "articleId": "lasten-uutiset-sota-ja-episteemiset-oikeudet",
        "page": "26"
      },
      "explanation": "A on oikein. Sosiaalinen media on toimittajille tärkeä mutta ristiriitainen julkaisukanava, jossa lasten uutiset esiintyvät muun sisällön rinnalla.\nB on oikein. Artikkelissa painotetaan sekä osallistavaa että turvallista digitaalista viestintäympäristöä.\nC on oikein. Maksumuurit ja digitaalisen median käytön rajoittaminen voivat estää tai vaikeuttaa uutisten saavuttamista.\nD on väärin. Se muuttaa rajatun mahdollisuuden ehdottomaksi väitteeksi ja sivuuttaa artikkelissa mainitut saavutettavuuden esteet.\n\nLähde:\nS. 26, johtopäätökset.\nRatkaiseva lainaus: ”verkossa julkaiseminen [ei] tee lasten uutisista kaikille yhtäläisesti saavutettavia”.",
      "learningPoint": "Opiskelijan tulee erottaa digitaalisten julkaisukanavien tarjoama tavoittavuus kaikkien lasten yhdenvertaisesta pääsystä uutisten äärelle. Mahdollisuutta ei saa tulkita automaattisesti toteutuvaksi oikeudeksi.\nHakuvinkki: Ctrl+F: maksumuurit ja yhtäläisesti saavutettavia."
    },
    {
      "id": "g-m16-q20",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mitkä seuraavista päätelmistä ovat perusteltavissa Mikkolan ja Pantin tutkimustulosten ja johtopäätösten perusteella? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Lasten oikeus tietoon ja suojeluun voivat tukea toisiaan, kun sotauutisissa keskitytään olennaiseen tietoon, ymmärrettävään esitystapaan ja lasten mahdollisuuteen käsitellä uutisten herättämiä tunteita."
        },
        {
          "id": "b",
          "text": "Koska toimittajat pitävät lasten oikeutta tietoon tärkeänä, heidän mukaansa jokaisesta käynnissä olevasta sodasta tulee uutisoida lapsille yhtä laajasti ja samoilla journalistisilla ratkaisuilla."
        },
        {
          "id": "c",
          "text": "Lasten näkökulman vahvistaminen voi tukea heidän episteemisiä oikeuksiaan, mutta sotauutisoinnin resurssit, kohderyhmän ikäerot ja mediaympäristön muutokset asettavat tämän toteutumiselle rajoituksia."
        },
        {
          "id": "d",
          "text": "Lasten episteemisten oikeuksien toteutuminen voidaan varmistaa pelkästään julkaisemalla uutisia sosiaalisessa mediassa, koska lasten osallistuminen ja tiedon ymmärtäminen seuraavat automaattisesti digitaalisesta saatavuudesta."
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
        "articleId": "lasten-uutiset-sota-ja-episteemiset-oikeudet",
        "page": "24–26",
        "section": "Johtopäätökset"
      },
      "explanation": "A on oikein. Tutkimuksen keskeinen johtopäätös on, että ymmärrettävä ja ikätasoisesti esitetty tieto voi samanaikaisesti vahvistaa lasten tiedollisia oikeuksia ja auttaa suojelemaan heitä haitalliselta informaatiolta.\nB on väärin. Toimittajat eivät pidä jokaisesta konfliktista uutisoimista välttämättömänä, ja journalistiset ratkaisut tehdään tapauskohtaisesti.\nC on oikein. Lasten näkökulman vahvistaminen on tutkimuksen toinen pääteema, mutta sen toteutumista rajoittavat esimerkiksi resurssit ja käytännön kohderyhmävalinnat. Myös muuttuva mediaympäristö asettaa uusia haasteita.\nD on väärin. Pelkkä digitaalinen julkaiseminen ei takaa tiedon ymmärtämistä, osallisuutta tai yhdenvertaista saavutettavuutta.\n\nLähde:\nS. 24–26, ”Johtopäätökset”, sekä s. 20–24, kohderyhmää ja lasten ääntä koskevat tutkimustulokset.\nRatkaiseva lainaus, s. 25: ”lasten oikeus tietoon ja suojeluun eivät siten ole ristiriidassa keskenään”.",
      "learningPoint": "Opiskelijan tulee yhdistää tutkimuksen kaksi pääteemaa niiden toteutumista rajoittaviin tekijöihin. Erityisesti tulee erottaa toimittajien tavoitteet siitä, mitä käytännön uutistyössä voidaan varmasti saavuttaa.\nHakuvinkki: Ctrl+F: eivät siten ole ristiriidassa, kapeammat mahdollisuudet ja jatkuvaa kehitystyötä."
    }
  ]
} satisfies ValintakoeGExercise;
