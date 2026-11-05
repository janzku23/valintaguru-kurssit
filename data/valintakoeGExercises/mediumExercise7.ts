import type { ValintakoeGExercise } from "./types";

/**
 * Keskivaikea harjoitus 7: käyttäjän toimittamat tehtävät 1–20.
 * Lähdeotteet ovat explanation-kentissä, hakuvinkit learningPoint-kentissä.
 */
export const valintakoeGMediumExercise7Base = {
  "id": "keskivaikea-harjoitus-7",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Keskivaikea harjoitus 7 – Kieltäytyminen rakkauden tekona – Hetkiä pakolaisuuden, nuoruuden ja yhdenvertaisuuden toivon risteymissä",
  "description": "28 minuutin keskivaikea aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 28,
  "difficulty": "medium",
  "articleId": "kieltaytyminen-rakkauden-tekona",
  "articleTitle": "Kieltäytyminen rakkauden tekona – Hetkiä pakolaisuuden, nuoruuden ja yhdenvertaisuuden toivon risteymissä",
  "articleUrl": "https://journal.fi/nuorisotutkimus/article/view/176561",
  "notice": "Avaa lähdelinkin sivulta artikkelin PDF-versio. Tehtävien sivunumerot viittaavat artikkelin painettuihin sivunumeroihin.",
  "questions": [
    {
      "id": "g-m7-q1",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Tosi vai epätosi?\nKauhasen artikkelissa kieltäytyminen rakkauden tekona ymmärretään toimintana, jossa yksilö voi vastustaa eriarvoistavia käytäntöjä ja samalla edistää yhteisön hyvinvointia. Tämän vuoksi kieltäytyminen ei välttämättä tarkoita pelkkää kielteistä vastausta tai osallistumisesta luopumista.",
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
        "articleId": "kieltaytyminen-rakkauden-tekona",
        "page": "22–24"
      },
      "explanation": "Väittämä yhdistää kaksi artikkelin keskeistä ajatusta: kieltäytyminen voi horjuttaa epäoikeudenmukaisia normeja ja rakkaus ymmärretään kollektiivisena vastuuna toimia yhteisen hyvän puolesta. Kieltäytyminen voi siten ilmetä myös uudenlaisten toimintatapojen luomisena.\n\nLähde:\nS. 22–24, artikkelin abstrakti ja johdanto. Sivulla 22 todetaan: \"Kieltäytyminen ei viittaa ainoastaan sanaan 'ei'\". Sivulla 24 rakkaus yhdistetään kollektiiviseen toimintaan ja eriarvoisuuksien vastustamiseen.",
      "learningPoint": "Opiskelijan tulee yhdistää kieltäytymisen ja rakkauden käsitteiden merkitykset sekä tunnistaa niiden yhteinen toimintaperiaate.\nHakuvinkki: Ctrl+F: Kieltäytyminen ei viittaa ja yhteisen hyväksi."
    },
    {
      "id": "g-m7-q2",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein artikkelissa esitetyt kieltäytymisen kolme muotoa ja niiden keskeiset sisällöt?",
      "options": [
        {
          "id": "a",
          "text": "Jaettu ilo tarkoittaa ensisijaisesti institutionaalisten sääntöjen muuttamista, vastavuoroinen myönteinen tunnistaminen väkivallasta poistumista ja yhdenvertainen tila yksilöllisen onnellisuuden tavoittelua."
        },
        {
          "id": "b",
          "text": "Jaettu ilo liittyy yhteisöllisyyteen ja uhrinarratiivista kieltäytymiseen, vastavuoroinen myönteinen tunnistaminen merkityksellisenä yhteisön jäsenenä kohtaamiseen ja yhdenvertainen tila eriarvoistavista tilallisista käytännöistä kieltäytymiseen."
        },
        {
          "id": "c",
          "text": "Jaettu ilo tarkoittaa pakolaisnuorilta odotettua kiitollisuutta, vastavuoroinen myönteinen tunnistaminen viranomaisten määrittämien sääntöjen hyväksymistä ja yhdenvertainen tila yksinomaan asumisyksiköiden fyysisiä ominaisuuksia."
        },
        {
          "id": "d",
          "text": "Jaettu ilo liittyy yksilölliseen pärjäämiseen, vastavuoroinen myönteinen tunnistaminen yhteiskunnallisesta osallistumisesta vetäytymiseen ja yhdenvertainen tila vain koulutukseen pääsemiseen."
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
        "articleId": "kieltaytyminen-rakkauden-tekona",
        "page": "27–34"
      },
      "explanation": "B yhdistää kaikki kolme teemaa niiden oikeisiin painotuksiin. A vaihtaa teemojen sisältöjä keskenään. C sekoittaa nuorten omaehtoisen ilon heiltä vaadittuun kiitollisuuteen ja kaventaa yhdenvertaisen tilan fyysiseksi ominaisuudeksi. D puolestaan esittää yhteisöllisen toiminnan yksilökeskeisenä ja rajaa yhdenvertaisuuden liian kapeasti.\n\nLähde:\nS. 27–34, erityisesti sivun 27 loppu ja kolmen tulosluvun otsikot. Sivulla 28 luetellaan \"jaettu ilo\", \"vastavuoroinen, myönteinen tunnistaminen\" ja \"yhdenvertainen tila\".",
      "learningPoint": "Opiskelijan tulee erottaa läheiset tulosteemat toisistaan ja yhdistää niihin oikeat tutkimushavainnot.\nHakuvinkki: Ctrl+F: kolme keskeistä teemaa."
    },
    {
      "id": "g-m7-q3",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Oikein vai väärin?\nTutkimuksen mukaan pakolaisina Suomeen saapuneiden nuorten kieltäytyminen eriarvoisesta kohtelusta osoittaa ennen kaikkea heidän haluttomuuttaan osallistua yhteiskuntaan. Nuorten toiminnan seurauksena heidän mahdollisuutensa vaikuttaa yhteisiin asioihin heikkenevät.",
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
        "articleId": "kieltaytyminen-rakkauden-tekona",
        "page": "22–23 ja 34–35"
      },
      "explanation": "Väittämä kääntää kieltäytymisen merkityksen päinvastaiseksi. Nuorten toiminta ei osoita haluttomuutta osallistua, vaan pyrkimystä tulla kohdatuiksi yhdenvertaisina ja merkityksellisinä yhteisön jäseninä. Artikkeli ei myöskään osoita, että kieltäytyminen itsessään heikentäisi heidän osallistumismahdollisuuksiaan.\n\nLähde:\nS. 22–23 ja 34–35. Sivulla 23 todetaan nuorten \"aktiivisesti kieltäytyvät hyväksymästä eriarvoista kohtelua\". Sivulla 35 kieltäytymisen kuvataan tuovan esiin kollektiivisen muutoksen tarpeen.",
      "learningPoint": "Opiskelijan tulee tunnistaa, tulkitaanko kieltäytyminen passiivisuudeksi vai aktiiviseksi yhteiskunnalliseksi toiminnaksi.\nHakuvinkki: Ctrl+F: aktiivisesti kieltäytyvät ja kollektiivisen tarpeen."
    },
    {
      "id": "g-m7-q4",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 8,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin käsityksiä rakkaudesta ja kieltäytymisestä? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Rakkaus ymmärretään muun muassa vastavuoroisena luottamuksena, kunnioituksena ja vastuuna, joka voi ilmetä yhteisen hyvinvoinnin edistämisenä."
        },
        {
          "id": "b",
          "text": "Kieltäytyminen edellyttää aina avointa vastakkainasettelua ja vallan auktoriteetin tunnustamista ennen sen haastamista."
        },
        {
          "id": "c",
          "text": "Kieltäytyminen voi merkitä normatiivisista osallistumisen säännöistä vetäytymistä, jolloin tehdään tilaa vaihtoehtoisille yhteisöllisille toimintatavoille."
        },
        {
          "id": "d",
          "text": "Rakkaus tarkoittaa ensisijaisesti yksilön oman aseman vahvistamista riippumatta siitä, miten toiminta vaikuttaa muihin yhteisön jäseniin."
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
        "articleId": "kieltaytyminen-rakkauden-tekona",
        "page": "23–24"
      },
      "explanation": "A kuvaa artikkelin kollektiivista rakkauskäsitystä. C kuvaa kieltäytymisen suhdetta normatiivisiin odotuksiin. B on väärin, koska kieltäytyminen ei edellytä vallan auktoriteetin hyväksymistä. D on väärin, koska rakkauden keskeinen lähtökohta on yhteisöllinen hyvä, ei pelkkä yksilöllinen etu.\n\nLähde:\nS. 23–24, johdanto. Sivulla 23 kieltäytymisen kuvataan jättävän \"tunnustamatta vallan auktorisoivan voiman\". Sivulla 24 rakkauteen liitetään vastavuoroinen luottamus, kunnioitus ja vastuu.",
      "learningPoint": "Opiskelijan tulee tarkistaa, milloin rajallinen tai vaihtoehtoisia toimintatapoja salliva määritelmä muutetaan ehdottomaksi. Erityisesti on kiinnitettävä huomiota sanoihin \"aina\" ja \"ensisijaisesti\".\nHakuvinkki: Ctrl+F: auktorisoivan voiman ja vastavuoroista luottamusta."
    },
    {
      "id": "g-m7-q5",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mikä seuraavista väittämistä kuvaa oikein Kauhasen tutkimukseen osallistuneiden nuorten taustoja ja artikkelissa käytettyä aineistoa?",
      "options": [
        {
          "id": "a",
          "text": "Kaikki kahteen tutkimusprosessiin osallistuneet nuoret olivat saapuneet Suomeen alaikäisinä ilman huoltajaa, mutta artikkelissa käsiteltiin yksityiskohtaisesti vain seitsemän nuoren kertomuksia."
        },
        {
          "id": "b",
          "text": "Tutkimusprosessien osallistujista kaksi oli saapunut Suomeen perheenyhdistämisen kautta ja muut 15 alaikäisinä ilman huoltajaa. Artikkeliin valittiin keskusteluhetkiä seitsemän nuoren kanssa."
        },
        {
          "id": "c",
          "text": "Tutkimusprosessien osallistujista seitsemän oli saapunut Suomeen perheenyhdistämisen kautta, ja loput olivat saapuneet alaikäisinä ilman huoltajaa. Kaikkien kertomuksia käsiteltiin artikkelissa yksityiskohtaisesti."
        },
        {
          "id": "d",
          "text": "Kaikki tutkimukseen osallistuneet nuoret olivat saapuneet Suomeen perheenyhdistämisen kautta, mutta seitsemän heistä oli asunut Suomessa ilman huoltajaa."
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
        "articleId": "kieltaytyminen-rakkauden-tekona",
        "page": "25–26",
        "section": "Ajattelua teorian ja nuorten kertomusten kanssa"
      },
      "explanation": "B vastaa menetelmäosuudessa esitettyä osallistujien taustojen jakaumaa ja artikkeliin valittujen keskustelujen rajausta.\nA on väärin, koska kaikki nuoret eivät saapuneet ilman huoltajaa. C on väärin, koska perheenyhdistämisen kautta saapuneita oli kaksi, ei seitsemän, eikä kaikkien kertomuksia esitetty yksityiskohtaisesti. D on väärin, koska suurin osa oli saapunut alaikäisinä ilman huoltajaa.\n\nLähde:\nS. 25–26, \"Ajattelua teorian ja nuorten kertomusten kanssa\".\nSivulla 26 todetaan: \"Kaksi nuorta oli saapunut Suomeen pakolaisena perheenyhdistämisen kautta\". Samalla sivulla kerrotaan, että artikkeliin valikoitui keskusteluhetkiä seitsemän eri nuoren kanssa.",
      "learningPoint": "Opiskelijan tulee erottaa osallistujien taustatiedot ja artikkeliin valitut esimerkit. Erityisesti tulee tarkistaa, koskeeko väite kaikkia osallistujia vai vain tiettyä osaa.\nHakuvinkki: Ctrl+F: Kaksi nuorta ja seitsemän eri nuoren."
    },
    {
      "id": "g-m7-q6",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 6,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein artikkelin kahden tutkimusprosessin ajankohtia ja aineistonkeruumenetelmiä?",
      "options": [
        {
          "id": "a",
          "text": "Vuonna 2018 toteutettiin kävelymenetelmään perustunut tutkimus neljän nuoren kanssa, ja vuonna 2022 tehtiin monipaikkainen feministinen etnografia 13 nuoren kanssa."
        },
        {
          "id": "b",
          "text": "Vuonna 2018 toteutettiin monipaikkainen feministinen etnografia 13 nuoren kanssa, ja vuonna 2022 neljä nuorta osallistui kävelymenetelmillä toteutettuun tutkimukseen."
        },
        {
          "id": "c",
          "text": "Vuonna 2018 toteutettiin monipaikkainen feministinen etnografia neljän nuoren kanssa, ja vuonna 2022 toteutettiin kävelymenetelmään perustunut tutkimus 13 nuoren kanssa."
        },
        {
          "id": "d",
          "text": "Vuonna 2018 toteutettiin 49 kävelyä neljän nuoren kanssa, ja vuonna 2022 toteutettiin 13 vierailua perheryhmäkodeissa asuvien nuorten kanssa."
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
        "articleId": "kieltaytyminen-rakkauden-tekona",
        "page": "25–26",
        "section": "Ajattelua teorian ja nuorten kertomusten kanssa"
      },
      "explanation": "B yhdistää tutkimusvuodet, osallistujamäärät ja menetelmät oikein. A vaihtaa tutkimusten ajankohdat ja menetelmät. C vaihtaa osallistujamäärät. D sekoittaa vuoden 2018 etnografian 49 vierailua vuoden 2022 kävelytutkimukseen.\n\nLähde:\nS. 25–26, \"Ajattelua teorian ja nuorten kertomusten kanssa\". Sivulla 25 todetaan: \"Vuonna 2018 toteutettuun etnografiaan osallistui 13 nuorta\". Samalla sivulla kuvataan vuoden 2022 kävelymenetelmiin perustunut tutkimus.",
      "learningPoint": "Opiskelijan tulee yhdistää kahden tutkimusprosessin ajankohdat niiden osallistujamääriin ja menetelmiin. Oikea vastaus edellyttää kaikkien kolmen tiedon tarkistamista.\nHakuvinkki: Ctrl+F: Vuonna 2018 ja vuonna 2022."
    },
    {
      "id": "g-m7-q7",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä tulkintoja jaetusta ilosta kieltäytymisen muotona? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Mohammadin vitsaileminen ja ilon jakaminen voidaan tulkita keinoksi keventää vaikeiden elämäntilanteiden aiheuttamaa kuormitusta ja kieltäytyä pelkästä haavoittuvan autettavan roolista."
        },
        {
          "id": "b",
          "text": "Pakolaisnuorilta odotettu kiitollisuus Suomeen pääsemisestä on artikkelin mukaan aina kieltäytymistä, koska se vahvistaa heidän myönteisiä tunteitaan."
        },
        {
          "id": "c",
          "text": "Jaettu ilo voi toimia kieltäytymisenä yksilökeskeisyydestä silloin, kun se vahvistaa yhteisöllisyyttä ja ihmisten keskinäistä huolenpitoa."
        },
        {
          "id": "d",
          "text": "Mohammadin kertomus osoittaa, että ilon jakaminen poistaa nuorten elämästä huolenaiheet ja tekee eriarvoisuuden vastustamisen tarpeettomaksi."
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
        "articleId": "kieltaytyminen-rakkauden-tekona",
        "page": "28–29",
        "section": "Jaettu ilo: yksilökeskeisyydestä ja uhrinarratiivista kieltäytyminen"
      },
      "explanation": "A on oikein, sillä Mohammad kertoo tiedostavansa elämässään olevat vaikeudet mutta pyrkivänsä olemaan ajattelematta niitä jatkuvasti. Tutkija tulkitsee tämän kieltäytymiseksi asettua pelkästään haavoittuvan autettavan asemaan.\nC on oikein, koska artikkelissa jaettu ilo yhdistetään yhteisölliseen hyvinvointiin ja vastavuoroiseen huolenpitoon.\nB on väärin, koska ulkopuolelta vaadittu ilo ja kiitollisuus voivat perustua hierarkkisiin valtasuhteisiin. D on väärin, sillä Mohammad ei väitä huolten kadonneen, vaan pyrkii keventämään niiden aiheuttamaa kuormitusta.\n\nLähde:\nS. 28–29, \"Jaettu ilo: yksilökeskeisyydestä ja uhrinarratiivista kieltäytyminen\". Sivulla 29 tutkija toteaa Mohammadin valitsevan \"keventää tuskaansa jaetun ilon kautta\".",
      "learningPoint": "Opiskelijan tulee erottaa omaehtoisen ilon merkitys ulkopuolelta asetetusta vaatimuksesta. Lisäksi on tunnistettava ero vaikeuksien käsittelemisen ja niiden poistumisen välillä.\nHakuvinkki: Ctrl+F: keventää tuskaansa ja kiitollisuus voi olla."
    },
    {
      "id": "g-m7-q8",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 12,
      "prompt": "Tosi vai epätosi?\nArtikkelissa jaettu ilo tulkitaan mahdolliseksi kieltäytymisen muodoksi, mutta tutkija erottaa nuorten omaehtoisen ilon heiltä odotetusta kiitollisuudesta. Siten iloinen käyttäytyminen ei kaikissa tilanteissa tarkoita eriarvoisten odotusten vastustamista.",
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
        "articleId": "kieltaytyminen-rakkauden-tekona",
        "page": "28",
        "section": "Jaettu ilo: yksilökeskeisyydestä ja uhrinarratiivista kieltäytyminen"
      },
      "explanation": "Tutkija erottaa yhteisössä ja yksilössä syntyvän omaehtoisen ilon tilanteista, joissa iloa ja kiitollisuutta vaaditaan. Pakolaisina Suomeen saapuneilta nuorilta voidaan odottaa kiitollisuutta huomioimatta heidän kokemaansa rasismia ja eriarvoisuutta.\nSiksi ilo voi sekä haastaa yhteiskunnallisia odotuksia että ilmentää niihin mukautumista.\n\nLähde:\nS. 28, \"Jaettu ilo: yksilökeskeisyydestä ja uhrinarratiivista kieltäytyminen\". Ratkaiseva lainaus: \"ilo voidaan nähdä kieltäytymisen muotona vain, kun ilo on luonnollinen tunne\".",
      "learningPoint": "Opiskelijan tulee tarkistaa, millä ehdoilla tutkija tulkitsee ilon kieltäytymiseksi. Mahdollinen tulkinta ei tarkoita, että kaikki ilon ilmaukset olisivat samanlaisia.\nHakuvinkki: Ctrl+F: vain, kun ilo ja alistumisena."
    },
    {
      "id": "g-m7-q9",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa oikein Faridin ja muiden tukiasumisyksikön nuorten yhteisöllisen toiminnan suhdetta heihin kohdistuneisiin itsenäistymisodotuksiin?",
      "options": [
        {
          "id": "a",
          "text": "Tukiasumisyksikköön siirtyminen vähensi nuorten tarvetta yhteisölliseen toimintaan, minkä seurauksena he luopuivat yhteisistä arkiaskareista ja keskinäisestä avusta."
        },
        {
          "id": "b",
          "text": "Nuoret kokivat tukiasumisyksikön itsenäistymisodotukset ongelmattomiksi, minkä vuoksi he siirsivät arkiaskareidensa järjestämisen kokonaan henkilökunnan vastuulle."
        },
        {
          "id": "c",
          "text": "Nuoret pyrkivät palaamaan perheryhmäkotiin, koska tukiasumisyksikön olosuhteet estivät heitä järjestämästä arkeaan yhteisöllisesti."
        },
        {
          "id": "d",
          "text": "Nuoret vastasivat yksin pärjäämisen odotuksiin kehittämällä yhteisiä arjen toimintatapoja, joissa tehtävät jaettiin ja toiminta palveli koko ryhmän hyvinvointia."
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
        "articleId": "kieltaytyminen-rakkauden-tekona",
        "page": "29–30",
        "section": "Jaettu ilo: yksilökeskeisyydestä ja uhrinarratiivista kieltäytyminen"
      },
      "explanation": "D on oikein. Farid kertoi, kuinka tukiasumisyksikköön muuttaminen teki arjesta aiempaa itsenäisempää ja vaikeampaa. Nuoret olivat kuitenkin tottuneet huolehtimaan toisistaan ja jatkoivat yhteisöllistä toimintaa myös uudessa asumisympäristössä.\nHe keräsivät yhteisiä ruokarahoja ja jakoivat kaupassakäynnin, ruoanlaiton sekä siivouksen tehtäviä.\nA on väärin, koska nuoret eivät luopuneet yhteisöllisyydestä vaan jatkoivat sitä.\nB on väärin, koska nuoret järjestivät arkeaan itse sen sijaan, että olisivat siirtäneet tehtävät henkilökunnalle.\nC on väärin, koska artikkelissa ei kerrota nuorten pyrkineen palaamaan perheryhmäkotiin. Yhteisölliset käytännöt toteutuivat myös tukiasumisyksikössä.\n\nLähde:\nS. 29–30, \"Jaettu ilo: yksilökeskeisyydestä ja uhrinarratiivista kieltäytyminen\".\nSivulla 30 todetaan: \"Jokaisella oli vastuullinen tehtävä, joka palveli yhteistä hyvää, ei vain yksilön etua.\"",
      "learningPoint": "Opiskelijan tulee yhdistää nuoriin kohdistuneet itsenäistymisodotukset heidän kehittämiinsä toimintatapoihin. Erityisesti on tarkistettava, johtiko uusi asumistilanne yhteisöllisyydestä luopumiseen vai sen jatkamiseen uudessa muodossa.\nHakuvinkki: Ctrl+F: kerättiin rahaa ja yhteistä hyvää."
    },
    {
      "id": "g-m7-q10",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 3,
      "prompt": "Oikein vai väärin?\nJahidin ja Mohammadin kokemukset osoittavat, että perheryhmäkodin kutsuminen perheeksi riitti luomaan nuorille perheenomaisen kokemuksen asumisesta, vaikka ruokailuajat ja muut institutionaaliset säännöt olivat joustamattomia.",
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
        "articleId": "kieltaytyminen-rakkauden-tekona",
        "page": "30–31",
        "section": "Vastavuoroinen myönteinen tunnistaminen: merkityksettömyydestä kieltäytyminen"
      },
      "explanation": "Väittämä on ristiriidassa nuorten kokemusten kanssa. Jahid kyseenalaisti asumisyksikön perheretoriikan tilanteessa, jossa hän ei saanut ruokaa hieman ruokailuajan päättymisen jälkeen. Mohammad puolestaan kritisoi sääntöjä, jotka vaikeuttivat hänen harrastuksiinsa osallistumistaan.\nNuoret kaipasivat perheenomaista, joustavaa ja kunnioittavaa kohtelua. Pelkkä yhteisön kutsuminen perheeksi ei toteuttanut näitä odotuksia.\n\nLähde:\nS. 30–31, \"Vastavuoroinen myönteinen tunnistaminen: merkityksettömyydestä kieltäytyminen\". Sivulla 30 todetaan, että \"perheen ja kodin tunnun syntymiseen tarvitaan muutakin kuin yhteisön nimeäminen perheeksi\".",
      "learningPoint": "Opiskelijan tulee verrata institutionaalista tavoitetta nuorten kokemaan todellisuuteen. Erityisesti on tarkistettava, vastaavatko käytännön toimintatavat organisaation käyttämää retoriikkaa.\nHakuvinkki: Ctrl+F: nimeäminen perheeksi."
    },
    {
      "id": "g-m7-q11",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelin tutkimusaineiston muodostamista ja raportointia koskevia tietoja? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Vuoden 2018 etnografiassa tutkija teki 49 vierailua kymmenen kuukauden aikana ja kirjoitti niiden jälkeen tutkimuspäiväkirjamerkintöjä."
        },
        {
          "id": "b",
          "text": "Vuoden 2022 kävelytutkimuksessa kaikki neljä nuorta valokuvasivat merkityksellisiä paikkoja, ja näitä valokuvia käytettiin myöhemmissä keskusteluissa."
        },
        {
          "id": "c",
          "text": "Artikkelin seitsemän nuoren kertomuksiin perustuvat esimerkit muodostavat osan laajemmasta aineistosta, johon analyysin johtopäätökset perustuvat."
        },
        {
          "id": "d",
          "text": "Molemmissa tutkimusprosesseissa käytettiin ennalta laadittua yksityiskohtaista haastattelurunkoa, jotta nuorilta saatiin samat vastaukset samoihin kysymyksiin."
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
        "articleId": "kieltaytyminen-rakkauden-tekona",
        "page": "25–26",
        "section": "Ajattelua teorian ja nuorten kertomusten kanssa"
      },
      "explanation": "A on oikein, koska vuoden 2018 etnografiassa toteutettiin 49 vierailua ja tutkija kirjoitti jokaisen jälkeen päiväkirjamerkintöjä.\nC on oikein, sillä artikkelin esimerkit on valittu seitsemän nuoren keskusteluista, mutta johtopäätökset perustuvat koko aineistoon.\nB on väärin, koska valokuvia otti kolme neljästä nuoresta. D on väärin, koska tutkija ei käyttänyt valmista yksityiskohtaista kysymysrunkoa kummassakaan tutkimusprosessissa.\n\nLähde:\nS. 25–26, \"Ajattelua teorian ja nuorten kertomusten kanssa\". Sivulla 26 todetaan: \"Tähän artikkeliin valikoitui hetkiä keskusteluista seitsemän eri nuoren kanssa\".",
      "learningPoint": "Opiskelijan tulee erottaa osallistujamäärät, vierailut, valokuvia ottaneet osallistujat ja artikkeliin valitut esimerkit. Samalla tulee tarkistaa aineistonkeruun menetelmälliset rajaukset.\nHakuvinkki: Ctrl+F: 49 vierailua, Kolme nuorta ja seitsemän eri nuoren."
    },
    {
      "id": "g-m7-q12",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 7,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelissa esitettyjä nuorten kokemuksia ja niiden tulkintoja?",
      "options": [
        {
          "id": "a",
          "text": "Jahid kyseenalaisti asumisyksikön perheenomaisuuden tilanteessa, jossa häneltä evättiin ruoka tiukan ruokailuajan vuoksi."
        },
        {
          "id": "b",
          "text": "Mohammad kritisoi asumisyksikön sääntöjä, jotka vaikeuttivat koulun jälkeisiin harrastuksiin osallistumista."
        },
        {
          "id": "c",
          "text": "Farid kertoi, kuinka tukiasumisyksikössä asuvat nuoret järjestivät ruokailua ja arkiaskareita yhdessä."
        },
        {
          "id": "d",
          "text": "Ifrah kertoi joutuneensa muuttamaan perheryhmäkodista tukiasumisyksikköön, jossa hän kehitti yhteisen ruokarahajärjestelmän muiden nuorten kanssa."
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
        "articleId": "kieltaytyminen-rakkauden-tekona",
        "page": "29–33"
      },
      "explanation": "D on väärin, sillä yhteisen ruokarahajärjestelmän kuvasi Farid, ei Ifrah. Ifrahin kertomus liittyi koulutilan kokemiseen ahtaana muiden katseiden vuoksi.\nA on oikein Jahidin ruokailua koskevan kokemuksen perusteella. B vastaa Mohammadin harrastuksiin ja asumisyksikön sääntöihin liittyvää kertomusta. C kuvaa Faridin ja muiden nuorten yhteisöllistä toimintaa.\n\nLähde:\nS. 29–33, erityisesti Faridin, Jahidin, Mohammadin ja Ifrahin kertomukset.",
      "learningPoint": "Opiskelijan tulee yhdistää oikeat tutkimushavainnot oikeisiin nuoriin. Vaihtoehdot sisältävät artikkelissa esiintyviä todellisia tapahtumia, mutta yhdessä vaihtoehdossa toimija on vaihdettu.\nHakuvinkki: Ctrl+F: Farid, Jahid, Mohammad ja Ifrah."
    },
    {
      "id": "g-m7-q13",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 2,
      "prompt": "Kyllä vai ei?\nVoidaanko artikkelin perusteella katsoa, että rasistisesti käyttäytyvien henkilöiden kohtaamisesta poistuminen voi olla aktiivista kieltäytymistä ja itsestä huolehtimista, vaikka henkilö ei jäisi tilanteeseen puolustamaan oikeuksiaan?",
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
        "articleId": "kieltaytyminen-rakkauden-tekona",
        "page": "32–33",
        "section": "Yhdenvertainen tila: väkivallasta ja ahtaudesta kieltäytyminen"
      },
      "explanation": "Farzad ja Kabeer kieltäytyivät väkivallasta poistumalla uhkaavista tilanteista tai jatkamalla matkaansa. Tutkija tulkitsee tämän aktiiviseksi toiminnaksi, jolla nuoret suojelivat itseään ja muita.\nKieltäytyminen ei siis välttämättä edellytä suoraa vastakkainasettelua tai tilanteeseen jäämistä.\n\nLähde:\nS. 32–33, \"Yhdenvertainen tila: väkivallasta ja ahtaudesta kieltäytyminen\". Sivulla 33 todetaan: \"Paikalta poistuminen ei siten ole vain alistumista.\"",
      "learningPoint": "Opiskelijan tulee tunnistaa, miten tutkija tulkitsee nuorten konkreettista toimintaa teoreettisen kieltäytymisen käsitteen avulla.\nHakuvinkki: Ctrl+F: Paikalta poistuminen."
    },
    {
      "id": "g-m7-q14",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 14,
      "prompt": "Mikä seuraavista vaihtoehdoista kuvaa tarkimmin artikkelissa esitettyä yhdenvertaisen tilan käsitettä ja Ifrahin kokemusta koulussa?",
      "options": [
        {
          "id": "a",
          "text": "Yhdenvertainen tila tarkoittaa ensisijaisesti sitä, että kaikilla on muodollinen oikeus käyttää samoja sisäänkäyntejä, minkä vuoksi Ifrahin kokemus osoittaa koulun olleen yhdenvertainen."
        },
        {
          "id": "b",
          "text": "Ifrahin kokemus osoittaa, että koulun eriarvoisuus poistui kokonaan, kun hän alkoi myöhemmin käyttää samaa sisäänkäyntiä muiden oppilaiden kanssa."
        },
        {
          "id": "c",
          "text": "Yhdenvertainen tila liittyy myös siihen, miten turvalliseksi ja saavutettavaksi ihmiset kokevat ympäristönsä. Ifrahin valinta käyttää hiljaisempaa sisäänkäyntiä kuvasi pyrkimystä välttää jatkuvien katseiden aiheuttamaa ahtautta."
        },
        {
          "id": "d",
          "text": "Yhdenvertainen tila tarkoittaa artikkelissa vain fyysisesti esteettömiä rakennuksia, joten Ifrahin kokemusta ei voida liittää tilalliseen eriarvoisuuteen."
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
        "articleId": "kieltaytyminen-rakkauden-tekona",
        "page": "33–34",
        "section": "Yhdenvertainen tila: väkivallasta ja ahtaudesta kieltäytyminen"
      },
      "explanation": "C yhdistää yhdenvertaisen tilan kokemuksellisen ulottuvuuden Ifrahin toimintaan. Ifrah käytti aluksi hiljaisempaa sisäänkäyntiä välttääkseen katseita, jotka saivat hänet tuntemaan itsensä erilaiseksi ja ulkopuoliseksi.\nA on väärin, koska muodollinen pääsy tilaan ei vielä takaa yhdenvertaista kokemusta. B on väärin, sillä tutkijan mukaan tila pysyi eriarvoisena, vaikka Ifrah myöhemmin liikkui siellä vapaammin. D kaventaa yhdenvertaisuuden pelkäksi fyysiseksi esteettömyydeksi.\n\nLähde:\nS. 33–34, \"Yhdenvertainen tila: väkivallasta ja ahtaudesta kieltäytyminen\". Sivulla 33 todetaan Ifrahin tehneen \"aktiivisen valinnan olla olematta jatkuvasti katseiden kohteena\".",
      "learningPoint": "Opiskelijan tulee erottaa muodollinen mahdollisuus käyttää tilaa sen tosiasiallisesta ja koetusta yhdenvertaisuudesta. Yksilön toimintatavan muuttuminen ei välttämättä tarkoita ympäristön rakenteellisen eriarvoisuuden poistumista.\nHakuvinkki: Ctrl+F: hiljaisemmasta ovesta ja pysyivät eriarvoisina."
    },
    {
      "id": "g-m7-q15",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 9,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä tietoja kahden tutkimusprosessin osallistujista, toteutuksesta ja aineistonkeruumenetelmistä? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Vuoden 2018 etnografiaan osallistui yli kolminkertainen määrä nuoria vuoden 2022 kävelytutkimukseen verrattuna, ja ensimmäisessä tutkimuksessa toteutettiin 49 vierailua."
        },
        {
          "id": "b",
          "text": "Vuoden 2022 tutkimuksessa kaikki neljä osallistujaa valokuvasivat kävelyiden aikana, mutta vain kolme heistä osallistui myöhempään keskusteluun."
        },
        {
          "id": "c",
          "text": "Vuoden 2018 tutkimuksen osallistujat olivat tutkimuksen alkaessa nuorempia kuin vuoden 2022 tutkimuksen osallistujat, ja tutkimuksissa käytettiin erilaisia aineiston tuottamisen menetelmiä."
        },
        {
          "id": "d",
          "text": "Artikkelin seitsemän nuoren kertomukset valittiin 49 haastattelusta, jotka oli toteutettu vuoden 2022 Mobile Futures -hankkeessa."
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
        "articleId": "kieltaytyminen-rakkauden-tekona",
        "page": "25–26",
        "section": "Ajattelua teorian ja nuorten kertomusten kanssa"
      },
      "explanation": "A on oikein. Vuoden 2018 tutkimuksessa oli 13 osallistujaa ja vuoden 2022 tutkimuksessa neljä.\n\n13/4=3,25\nVuoden 2018 osallistujamäärä oli siis yli kolminkertainen. Lisäksi tutkija teki kyseisessä etnografiassa 49 vierailua kymmenen kuukauden aikana.\nB on väärin. Vuoden 2022 tutkimuksessa kolme neljästä nuoresta valokuvasi kävelyiden aikana. Jokaisen osallistujan kanssa tavattiin myöhemmin uudelleen.\nC on oikein. Vuoden 2018 tutkimukseen osallistuneet olivat tutkimuksen alkaessa 15–19-vuotiaita ja vuoden 2022 tutkimuksen osallistujat 20–25-vuotiaita. Ensimmäinen tutkimus toteutettiin monipaikkaisena feministisenä etnografiana ja toinen kävelymenetelmillä.\nD on väärin. Luku 49 tarkoittaa vuoden 2018 etnografian vierailuja, ei vuoden 2022 haastatteluja. Artikkeliin valittiin keskusteluhetkiä seitsemän nuoren kanssa kahden tutkimusprosessin aineistosta.\n\nLähde:\nS. 25–26, \"Ajattelua teorian ja nuorten kertomusten kanssa\".\nSivulla 25 todetaan: \"Vuonna 2018 toteutettuun etnografiaan osallistui 13 nuorta\".\nSamalla sivulla kerrotaan vuoden 2022 tutkimuksen neljästä osallistujasta sekä vuoden 2018 etnografian 49 vierailusta.",
      "learningPoint": "Opiskelijan tulee yhdistää kahden tutkimusprosessin osallistujamäärät, ikäjakaumat, vierailujen määrät ja menetelmät. Erityisesti tulee tarkistaa, mitä kukin luku kuvaa ja mihin tutkimusprosessiin se kuuluu.\nHakuvinkki: Ctrl+F: 13 nuorta, 49 vierailua ja neljä 20–25-vuotiasta."
    },
    {
      "id": "g-m7-q16",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 13,
      "prompt": "Tosi vai epätosi?\nJahidin ja Mohammadin kokemuksissa asumisyksiköiden tiukat säännöt vaikeuttivat nuorten mahdollisuuksia vaikuttaa omaan arkeensa. Tutkija tulkitsee heidän sääntöihin kohdistamansa kritiikin kieltäytymiseksi merkityksettömyydestä, vaikka nuorten vaatimukset eivät välttämättä johtaneet institutionaalisten käytäntöjen muuttumiseen.",
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
        "articleId": "kieltaytyminen-rakkauden-tekona",
        "page": "30–32 ja 34",
        "section": "Vastavuoroinen myönteinen tunnistaminen: merkityksettömyydestä kieltäytyminen"
      },
      "explanation": "Väittämä yhdistää kolme artikkelissa esitettyä asiaa.\nEnsinnäkin Jahid ja Mohammad kokivat asumisyksiköiden säännöt joustamattomiksi. Jahidin kohdalla kyse oli ruokailuajoista ja Mohammadin kohdalla erityisesti harrastusten sekä asumisyksikön aikataulujen yhteensovittamisesta.\nToiseksi nuoret vaativat oikeutta tulla kuulluiksi ja kohdatuiksi merkityksellisinä yhteisön jäseninä.\nKolmanneksi tutkija huomauttaa, ettei kieltäytyminen aina muuttanut institutionaalisia käytäntöjä. Tästä huolimatta toiminta teki näkyväksi eriarvoisuuksia ja muutoksen tarpeita.\n\nLähde:\nS. 30–32 ja 34, \"Vastavuoroinen myönteinen tunnistaminen: merkityksettömyydestä kieltäytyminen\" sekä \"Kohti kollektiivista rakkautta\".\nSivulla 34 todetaan nuorten kieltäytyneen institutionaalisen hallinnan toimista, \"vaikka kieltäytymisestä ei aina seurannut hallinnan käytänteiden purkamista\".",
      "learningPoint": "Opiskelijan tulee erottaa toiminnan tarkoitus sen toteutuneista seurauksista. Epäoikeudenmukaisuuden vastustaminen ei välttämättä johda välittömään muutokseen, vaikka se voi tehdä ongelman näkyväksi.\nHakuvinkki: Ctrl+F: ei aina seurannut ja merkityksettömyydestä."
    },
    {
      "id": "g-m7-q17",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 5,
      "prompt": "Mikä seuraavista vaihtoehdoista yhdistää oikein artikkelissa käytetyt teoreettiset näkökulmat ja nuorten kokemuksista tehdyt tulkinnat?",
      "options": [
        {
          "id": "a",
          "text": "Sara Ahmedin ajattelussa kieltäytyminen tarkoittaa ensisijaisesti yksilöllisen menestyksen tavoittelua, minkä vuoksi Faridin yhteisöllinen arjen järjestäminen tulkitaan yksilön itsenäistymisen osoitukseksi."
        },
        {
          "id": "b",
          "text": "bell hooksin rakkauskäsityksessä korostuu kollektiivinen hyvinvointi, mikä auttaa tulkitsemaan Faridin ja muiden nuorten yhteisiä arjen käytäntöjä yksilökeskeisistä odotuksista kieltäytymiseksi."
        },
        {
          "id": "c",
          "text": "Sandy Granden näkökulmassa kieltäytyminen perustuu ensisijaisesti yhteiskunnallisen auktoriteetin hyväksymiseen, minkä vuoksi Jahidin institutionaalisten sääntöjen kyseenalaistaminen nähdään rakkauden vastaisena toimintana."
        },
        {
          "id": "d",
          "text": "Sara Ahmedin näkökulmassa väkivallasta poistuminen tarkoittaa aina alistumista, minkä vuoksi Farzadin ja Kabeerin toiminta tulkitaan epäonnistuneeksi kieltäytymiseksi."
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
        "articleId": "kieltaytyminen-rakkauden-tekona",
        "page": "23–24, 29–30 ja 32–33"
      },
      "explanation": "B on oikein. bell hooksin rakkauskäsityksessä korostuvat yhteisöllisyys, vastavuoroinen huolenpito ja kollektiivinen hyvä. Faridin ja muiden nuorten yhteinen ruokarahajärjestelmä sekä arkiaskareiden jakaminen ilmensivät näitä periaatteita.\nA on väärin. Ahmedin ajattelua ei artikkelissa yhdistetä ensisijaisesti yksilöllisen menestyksen tavoitteluun. Faridin toiminta tulkitaan yksilökeskeisyyden haastamiseksi.\nC on väärin. Granden näkökulma liittyy muun muassa yhteisöllisiin tietämisen ja osallistumisen tapoihin sekä kolonialististen valtasuhteiden haastamiseen, ei auktoriteetin hyväksymiseen.\nD on väärin. Ahmedin ajattelun avulla tutkija tulkitsee tilanteesta poistumisen mahdolliseksi aktiiviseksi kieltäytymiseksi ja itsestä huolehtimiseksi.\n\nLähde:\nS. 23–24, 29–30 ja 32–33. Sivulla 30 Faridin ja muiden nuorten toimintaa kuvataan yhteisen hyvinvoinnin edistämisenä. Sivulla 33 puolestaan käsitellään Ahmedin ajattelua tilanteesta poistumisesta.",
      "learningPoint": "Opiskelijan tulee yhdistää teoreettiset käsitteet oikeisiin tutkijoihin ja aineistoesimerkkeihin. Ratkaiseminen edellyttää sekä teoreettisen näkökulman että konkreettisen toiminnan tulkinnan tarkistamista.\nHakuvinkki: Ctrl+F: hooks (2006), Grande ja Ahmed (2017)."
    },
    {
      "id": "g-m7-q18",
      "questionType": "true_false",
      "difficulty": "medium",
      "categoryId": 12,
      "prompt": "Oikein vai väärin?\nArtikkelin mukaan nuorten kieltäytyminen eriarvoistavista käytännöistä teki näkyväksi yhteiskunnallisia epäoikeudenmukaisuuksia. Tutkimus kuitenkin osoittaa, että tällainen toiminta johti kaikissa tarkastelluissa tilanteissa yhdenvertaisempaan kohteluun ja institutionaalisten sääntöjen muuttumiseen.",
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
        "articleId": "kieltaytyminen-rakkauden-tekona",
        "page": "31–35"
      },
      "explanation": "Väittämän ensimmäinen osa on oikein. Nuorten toiminta nosti esiin institutionaalisia ja yhteiskunnallisia eriarvoisuuksia sekä kyseenalaisti vakiintuneita käytäntöjä.\nJälkimmäinen osa on väärin. Tutkija ei osoita, että nuorten toiminta olisi kaikissa tilanteissa johtanut sääntöjen muuttumiseen tai yhdenvertaisuuden toteutumiseen.\nEsimerkiksi Jahid ja Mohammad kritisoivat asumisyksiköiden sääntöjä, mutta artikkelissa ei todeta heidän vaatimustensa johtaneen kaikkien käytäntöjen muuttamiseen. Samoin Ifrah alkoi myöhemmin liikkua koulussa vapaammin, mutta tutkijan mukaan tila pysyi eriarvoisena.\n\nLähde:\nS. 31–35, erityisesti \"Kohti kollektiivista rakkautta\". Sivulla 34 todetaan, ettei kieltäytymisestä aina seurannut hallinnan käytänteiden purkamista.",
      "learningPoint": "Opiskelijan tulee erottaa tutkijan esittämä havainto sen mahdollisista seurauksista. Erityisesti on tarkistettava, esitetäänkö muutoksen toteutuminen varmana vai kuvataanko vain sen tavoittelua ja epäkohtien näkyväksi tekemistä.\nHakuvinkki: Ctrl+F: ei aina seurannut ja pysyivät eriarvoisina."
    },
    {
      "id": "g-m7-q19",
      "questionType": "single",
      "difficulty": "medium",
      "categoryId": 10,
      "prompt": "Mikä seuraavista väittämistä EI vastaa artikkelissa esitettyjä vertailuja nuorten kokemusten ja institutionaalisten käytäntöjen välillä?",
      "options": [
        {
          "id": "a",
          "text": "Faridin kokemuksessa perheryhmäkodin asumisolosuhteet olivat ahtaammat mutta yhteisöllisemmät kuin tukiasumisyksikössä, jossa itsenäisen arjen järjestäminen tuntui aluksi vaikeammalta."
        },
        {
          "id": "b",
          "text": "Jahidin kokemuksessa perheryhmäkodin perheenomaisuutta korostava puhe oli ristiriidassa tiukkojen ruokailusääntöjen kanssa, mikä vaikeutti kodinomaisuuden kokemusta."
        },
        {
          "id": "c",
          "text": "Mohammadin kokemuksessa asumisyksikön ruokailusäännöt joustivat harrastusten vuoksi enemmän kuin nuoren omat aikataulut, minkä vuoksi hän pystyi osallistumaan harjoituksiinsa ilman ristiriitoja."
        },
        {
          "id": "d",
          "text": "Ifrahin kokemuksessa koulun sisäänkäyntien käyttäminen muuttui hänen turvallisuuden tunteensa vahvistuessa, mutta tämä ei tutkijan mukaan tarkoittanut koulutilan eriarvoisuuden poistumista."
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
        "articleId": "kieltaytyminen-rakkauden-tekona",
        "page": "29–34"
      },
      "explanation": "A on oikein. Farid kertoi perheryhmäkodissa olleen vähän tilaa mutta enemmän yhteisöllisyyttä. Tukiasumisyksikössä itsenäinen arki tuntui aluksi vaikeammalta.\nB on oikein. Jahid koki ristiriitaisena sen, että asumisyksikköä kutsuttiin perheeksi, mutta sen säännöt eivät vastanneet hänen käsitystään perheenomaisesta huolenpidosta.\nC on väärin. Asumisyksikön ruokailusäännöt olivat joustamattomia, ja Mohammad joutui kyseenalaistamaan niitä voidakseen osallistua harrastuksiinsa. Vaihtoehto kääntää joustavuuden ja ristiriidan suhteen päinvastaiseksi.\nD on oikein. Ifrah käytti aluksi hiljaisempaa sisäänkäyntiä välttääkseen katseita, mutta myöhemmin hän uskalsi liikkua koulussa vapaammin. Tutkijan mukaan koulutila pysyi silti eriarvoisena.\n\nLähde:\nS. 29–34, erityisesti Faridin, Jahidin, Mohammadin ja Ifrahin kertomukset.\nSivulla 31 kuvataan Mohammadin tilannetta, jossa koulun jälkeinen harjoitusaikataulu oli ristiriidassa asumisyksikön ruokailuaikojen kanssa.",
      "learningPoint": "Opiskelijan tulee vertailla nuorten kokemuksia eri ympäristöissä ja tunnistaa, missä tilanteessa jokin ominaisuus korostui enemmän tai vähemmän. Erityisesti on tarkistettava, kenen toiminnalta edellytettiin joustavuutta ja toteutuiko sitä käytännössä.\nHakuvinkki: Ctrl+F: Farid, ruokailu, harjoittelen ja hiljaisemmasta ovesta."
    },
    {
      "id": "g-m7-q20",
      "questionType": "multiple",
      "difficulty": "medium",
      "categoryId": 11,
      "prompt": "Mitkä seuraavista päätelmistä ovat perusteltavissa Kauhasen tutkimuksen havaintojen ja johtopäätösten perusteella? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Koska nuoret kieltäytyivät eriarvoisesta kohtelusta eri tavoin, kieltäytymistä voidaan tarkastella aktiivisena toimintana myös silloin, kun se ei ilmene suorana vastakkainasetteluna tai välittömänä institutionaalisena muutoksena."
        },
        {
          "id": "b",
          "text": "Koska osa nuorista valitsi poistumisen rasistisista tilanteista, voidaan päätellä, etteivät he enää tavoitelleet yhdenvertaista kohtelua yhteiskunnassa."
        },
        {
          "id": "c",
          "text": "Vaikka nuoret vaativat oikeuksia itselleen, heidän toimintansa saattoi samalla nostaa esiin laajemman yhteisön tarpeita ja pyrkimystä kollektiiviseen hyvinvointiin."
        },
        {
          "id": "d",
          "text": "Koska tutkimuksessa tunnistettiin kolme kieltäytymisen muotoa, jokainen nuorten kertoma kokemus kuului yksiselitteisesti vain yhteen niistä eikä muotojen välillä ollut yhteisiä tavoitteita."
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
        "articleId": "kieltaytyminen-rakkauden-tekona",
        "page": "27–35"
      },
      "explanation": "A on oikein. Kieltäytyminen voi ilmetä esimerkiksi yhteisöllisten toimintatapojen rakentamisena, epäkunnioittavan kohtelun kyseenalaistamisena tai väkivaltaisesta tilanteesta poistumisena. Kaikki nämä voivat olla aktiivisia tekoja, vaikka ne eivät johtaisi välittömään yhteiskunnalliseen muutokseen.\nB on väärin. Rasistisesta tilanteesta poistuminen ei tarkoita yhdenvertaisuuden tavoittelusta luopumista. Tutkija tulkitsee poistumisen mahdolliseksi itsestä ja muista huolehtimisen muodoksi.\nC on oikein. Nuorten toiminta ei kohdistunut vain heidän oman asemansa parantamiseen. Esimerkiksi asumisyksiköiden sääntöjen kyseenalaistaminen toi esiin myös muiden nuorten tarpeita ja oikeuksia.\nD on väärin. Kolme kieltäytymisen muotoa ovat analyyttisiä teemoja, joita yhdistää kollektiivisen hyvinvoinnin tavoittelu. Artikkelissa ei esitetä niitä toisensa poissulkevina luokkina.\n\nLähde:\nS. 27–35, erityisesti \"Kohti kollektiivista rakkautta\".\nSivulla 28 todetaan kaikkia kieltäytymisen tapoja yhdistäneen \"pyrkimys kollektiiviseen hyvinvointiin\". Sivulla 35 puolestaan korostetaan yhteisössä näkyvien eriarvoisuuksien vastustamista.",
      "learningPoint": "Opiskelijan tulee erottaa toisistaan yksittäinen toimintatapa, yhteinen tavoite ja kaikkia tilanteita koskeva yleistys. Lisäksi tulee arvioida, mitä tutkimuksen havainnoista voidaan päätellä ilman, että nuorten toiminnan merkitystä rajataan perusteettomasti.\nHakuvinkki: Ctrl+F: kollektiiviseen hyvinvointiin, ei aina seurannut ja Kohti kollektiivista rakkautta."
    }
  ]
} satisfies ValintakoeGExercise;
