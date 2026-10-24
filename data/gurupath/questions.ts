import "server-only";

import type {
  GuruGameId,
  GuruGameQuestion,
  GuruGameViewId,
  GuruQuestionCategory,
} from "./types";

/**
 * GURUPELI – AINOA KYSYMYSPANKKI
 *
 * Vain Oikis:
 * placements: { oikis: 10 }
 *
 * Vain Valintakoe G:
 * placements: { "valintakoe-g": 10 }
 *
 * Yhteinen:
 * placements: { oikis: 10, "valintakoe-g": 8 }
 *
 * Yhdistetyn pelin sijainti:
 * combinedOrder: 1, 2, 3...
 *
 * Kategoriat saavat olla täysin sekaisin yhdistetyllä polulla.
 */
export const guruGameQuestions: GuruGameQuestion[] = [
  {
    id: "guru-demo-mc-001",
    type: "multiple-choice",
    title: "Johtopäätös aineistosta",
    prompt: "Kaikki ryhmän A jäsenet kuuluvat ryhmään B. Mikä seuraavista voidaan päätellä varmasti?",
    answers: [
      { id: "a", text: "Kaikki ryhmän A jäsenet kuuluvat ryhmään B." },
      { id: "b", text: "Kaikki ryhmän B jäsenet kuuluvat ryhmään A." },
      { id: "c", text: "Ryhmät A ja B ovat yhtä suuria." },
      { id: "d", text: "Ryhmällä B ei voi olla muita jäseniä." },
    ],
    correctAnswerIds: ["a"],
    explanation: "Annetusta tiedosta seuraa varmasti vain se, että kaikki A:n jäsenet kuuluvat B:hen.",
    points: 1,
    placements: { oikis: 1, "valintakoe-g": 1 },
    combinedOrder: 1,
  },
  {
    id: "guru-demo-tf-001",
    type: "true-false",
    title: "Oikein vai väärin",
    prompt: "Oikeudellisessa päättelyssä johtopäätöksen tulee perustua käytettävissä oleviin oikeuslähteisiin ja annettuihin tosiseikkoihin.",
    answers: [
      { id: "true", text: "Oikein" },
      { id: "false", text: "Väärin" },
    ],
    correctAnswerIds: ["true"],
    explanation: "Oikeudellinen argumentaatio perustuu relevantteihin oikeuslähteisiin ja tapauksessa käytettävissä oleviin tosiseikkoihin.",
    points: 1,
    placements: { oikis: 2 },
    combinedOrder: 2,
  },
  {
    id: "guru-demo-reading-mc-001",
    type: "reading-comprehension",
    title: "Luetun ymmärtäminen",
    prompt: "Mikä oli Aurora-ryhmän ensisijainen tavoite?",
    answers: [
      { id: "a", text: "Lyhentää hakemusten käsittelyaikaa." },
      { id: "b", text: "Lisätä kokousten määrää." },
      { id: "c", text: "Vähentää hakemusten määrää." },
      { id: "d", text: "Keskeyttää toiminta tarkastelujakson jälkeen." },
    ],
    correctAnswerIds: ["a"],
    explanation: "Tekstissä Aurora-ryhmän ensisijaiseksi tavoitteeksi asetettiin hakemusten käsittelyajan lyhentäminen.",
    points: 1,
    reading: {
      seconds: 30,
      answerMode: "multiple-choice",
      text: "Aurora-ryhmä aloitti toimintansa keväällä. Ryhmän ensisijaiseksi tavoitteeksi asetettiin hakemusten käsittelyajan lyhentäminen ilman, että arvioinnin laatua heikennetään. Ryhmä päätti kokoontua kerran viikossa ja seurata käsittelyaikoja kuukausittain. Ensimmäisen kolmen kuukauden aikana hakemusten määrä kasvoi, mutta keskimääräinen käsittelyaika lyheni. Ryhmä päätti jatkaa samaa toimintamallia seuraavan tarkastelujakson ajan.",
    },
    placements: { oikis: 3, "valintakoe-g": 2 },
    combinedOrder: 3,
  },
  {
    id: "guru-demo-reading-tf-001",
    type: "reading-comprehension",
    title: "Muista yksityiskohta",
    prompt: "Tekstin mukaan helmikuun asiakasmäärä oli suurempi kuin maaliskuun asiakasmäärä.",
    answers: [
      { id: "true", text: "Oikein" },
      { id: "false", text: "Väärin" },
    ],
    correctAnswerIds: ["true"],
    explanation: "Helmikuussa asiakkaita oli 145 ja maaliskuussa 138.",
    points: 1,
    reading: {
      seconds: 30,
      answerMode: "true-false",
      text: "Yksikön asiakasmäärä oli tammikuussa 120. Helmikuussa määrä nousi 145 asiakkaaseen. Maaliskuussa määrä laski 138 asiakkaaseen. Huhtikuun asiakasmäärää ei vielä ollut raportin laatimishetkellä vahvistettu.",
    },
    placements: { "valintakoe-g": 3 },
    combinedOrder: 4,
  },
  {
    id: "guru-demo-reading-statement-001",
    type: "reading-comprehension",
    title: "Arvioi väittämä",
    prompt: "Väittämä: Ryhmän toimintamallia päätettiin muuttaa heti ensimmäisen tarkastelujakson jälkeen.",
    answers: [
      { id: "true", text: "Väittämä pitää paikkansa" },
      { id: "false", text: "Väittämä ei pidä paikkaansa" },
    ],
    correctAnswerIds: ["false"],
    explanation: "Tekstin mukaan ryhmä päätti jatkaa samaa toimintamallia myös seuraavan tarkastelujakson ajan.",
    points: 1,
    reading: {
      seconds: 30,
      answerMode: "statement",
      text: "Seurantaryhmä otti tammikuussa käyttöön uuden toimintamallin. Ensimmäisen tarkastelujakson aikana käsittelyajat lyhenivät ja keskeneräisten asioiden määrä väheni. Ryhmä arvioi tulokset maaliskuun lopussa. Tulosten perusteella toimintamallia ei muutettu, vaan sitä päätettiin jatkaa samanlaisena myös seuraavan tarkastelujakson ajan.",
    },
    placements: { oikis: 4, "valintakoe-g": 4 },
    combinedOrder: 5,
  },
  {
    // Todelliseen julkaisuun perustuva alkuperäinen harjoitusteksti, ei suora lainaus.
    id: "guru-article-rights-health-2024-01",
    type: "reading-comprehension",
    title: "Perusoikeudet ja terveydenhuollon tehokkuus",
    prompt: "Mitkä seuraavista väittämistä vastaavat aineistossa kuvattua perusoikeusnäkökulmaa? Valitse kaikki oikeat vaihtoehdot.",
    answers: [
      { id: "a", text: "Tehokkuus voi olla keino toteuttaa perusoikeuksia rajallisilla voimavaroilla." },
      { id: "b", text: "Perusoikeudet eivät koske terveydenhuollon rahoitusta koskevaa päätöksentekoa." },
      { id: "c", text: "Julkisen vallan velvollisuus turvata perus- ja ihmisoikeudet edellyttää myös aktiivisia toimenpiteitä." },
      { id: "d", text: "Kustannusten pienentäminen on terveydenhuollossa aina perusoikeuksien toteutumista tärkeämpi tavoite." },
    ],
    correctAnswerIds: ["a", "c"],
    explanation: "Teksti kuvaa tehokkuutta perusoikeuksien toteuttamisen välineenä, ei itseisarvona. Perustuslain 22 §:n turvaamisvelvoite liittyy myös voimavarojen kohdentamiseen ja edellyttää julkiselta vallalta aktiivista toimintaa. Lähde: Roslin & Ignatius, Oikeus 2–3/2024, s. 162–180.",
    points: 3,
    reading: {
      seconds: 100,
      answerMode: "multiple-choice",
      text: "Julkisen terveydenhuollon toiminnassa puhutaan usein tehokkuudesta, kustannusten hillitsemisestä ja voimavarojen riittävyydestä. Roslinin ja Ignatiuksen artikkeli tarkastelee tehokkuutta oikeudellisesta näkökulmasta ja kytkee keskustelun hyvinvointialueiden toimintaa ohjaavaan sääntelyyn. Sote-uudistuksessa tehokkuus nousi yhdeksi ohjauksen tavoitteeksi, mutta pelkkä taloudellinen tulos ei kuvaa julkisen terveydenhuollon oikeudellisia velvollisuuksia.\n\nPerustuslain 22 § velvoittaa julkisen vallan turvaamaan perus- ja ihmisoikeuksien toteutumisen. Terveyspalvelujen järjestämiseen liittyvässä päätöksenteossa on siksi tarkasteltava sekä käytettävissä olevia resursseja että sitä, miten ratkaisut vaikuttavat oikeuksien toteutumiseen. Voimavarojen kohdentaminen ei tapahdu perusoikeuksista erillään, vaan oikeudet asettavat vaatimuksia myös julkisen vallan ohjaukselle. Tehokkuus voidaan tällöin ymmärtää keinoksi sovittaa yhteen rajallisia resursseja ja perusoikeuksien turvaamista. Sitä ei tule käsitellä tavoitteena, joka itsessään syrjäyttäisi oikeuksien toteutumisen.\n\n(Roslin & Ignatius, Oikeus 2–3/2024, s. 162–180.)\nHarjoitusteksti on laadittu artikkelin pohjalta omin sanoin, eikä se ole suora lainaus.\n\nLähde: Waltter Roslin ja Eveliina Ignatius: Tehokasta terveydenhuoltoa? Sote-uudistuksen analyysi ja huomioita oikeudellistumisesta. Oikeus 2–3/2024, s. 162–180.\nVerkossa: https://www.edilex.fi/oikeus/1001100004",
    },
    placements: { oikis: 5, "valintakoe-g": 5 },
    combinedOrder: 6,
  },
  {
    // Todelliseen julkaisuun perustuva alkuperäinen harjoitusteksti, ei suora lainaus.
    id: "guru-article-social-rights-2024-02",
    type: "reading-comprehension",
    title: "Sosiaaliset oikeudet ja säästöperusteet",
    prompt: "Väittämä: Valtiontalouden säästötavoite ei yksin poista tarvetta arvioida sosiaalisten oikeuksien heikennyksiä perustuslain näkökulmasta.",
    answers: [
      { id: "true", text: "Väittämä pitää paikkansa" },
      { id: "false", text: "Väittämä ei pidä paikkaansa" },
    ],
    correctAnswerIds: ["true"],
    explanation: "Väittämä pitää paikkansa. Rahkonen tutkii juuri sitä, miten taloudellisiin voimavaroihin ja säästöihin vetoaminen suhteutuu perustuslaissa turvattujen sosiaalisten oikeuksien sisältöön ja rajoihin. Lähde: Rahkonen, Oikeus 2–3/2024, s. 140–161.",
    points: 2,
    reading: {
      seconds: 95,
      answerMode: "statement",
      text: "Sosiaaliset oikeudet liittyvät yhteiskunnassa muun muassa toimeentulon turvaamiseen. Niiden toteuttaminen vaatii voimavaroja, minkä vuoksi taloudellisilla olosuhteilla on merkitystä myös oikeudellisessa keskustelussa. Talouden tilanne ja oikeuksien sisältö eivät kuitenkaan ole sama asia: kysymys siitä, kuinka paljon rahaa on käytettävissä, on erotettava kysymyksestä, millaisia velvollisuuksia perustuslaki asettaa julkiselle vallalle.\n\nSusanna Rahkonen tarkastelee artikkelissaan säästöihin perustuvia sosiaalisten oikeuksien heikennyksiä. Erityisenä kiinnostuksen kohteena on perustuslain 19 §:n 2 momentissa turvattu perustoimeentulon suoja. Tutkimusaineistona ovat perustuslakivaliokunnan lausunnot, joissa oikeuksien heikentämistä on perusteltu julkisen talouden tilalla, taloudellisilla voimavaroilla tai säästötavoitteilla. Kirjoittaja selvittää, miten perusoikeusuudistuksen yhteydessä muodostuneet lähtökohdat näkyvät myöhemmässä lausuntokäytännössä.\n\nTarkastelun kannalta olennaista on, ettei säästöperusteen esittäminen vielä ratkaise oikeudellista kysymystä. Sen sijaan on arvioitava, mitä sosiaalinen oikeus suojaa ja millaisia rajoja oikeudellinen järjestelmä asettaa sen heikentämiselle.\n\n(Rahkonen, Oikeus 2–3/2024, s. 140–161.)\nHarjoitusteksti on laadittu artikkelin pohjalta omin sanoin, eikä se ole suora lainaus.\n\nLähde: Susanna Rahkonen: Taloudelliset voimavarat ja sosiaalisten oikeuksien toteutuminen perustuslakivaliokunnan lausuntokäytännössä. Oikeus 2–3/2024, s. 140–161.\nVerkossa: https://oikeus.journal.fi/article/view/159771",
    },
    placements: { oikis: 6, "valintakoe-g": 6 },
    combinedOrder: 7,
  },
  {
    // Todelliseen julkaisuun perustuva alkuperäinen harjoitusteksti, ei suora lainaus.
    id: "guru-article-individual-sovereignty-2024-03",
    type: "reading-comprehension",
    title: "Yksilön suvereniteetti ja demokratia",
    prompt: "Mikä vaihtoehto kuvaa parhaiten artikkelissa esitellyn konstitutionaalisen taloustieteen demokratiakäsitystä?",
    answers: [
      { id: "a", text: "Demokratia on hylättävä kokonaan, koska yksilön valinnoilla ei ole merkitystä." },
      { id: "b", text: "Demokratia tulkitaan yksilölähtöisesti, jolloin suostumus ja yksilön mahdollisuudet vaikuttaa korostuvat." },
      { id: "c", text: "Enemmistöpäätös oikeuttaa rajoittamaan yksilön suvereniteettia ilman ehtoja." },
      { id: "d", text: "Teorian tavoitteena on antaa kaikki verotusvalta yhdelle kansainväliselle toimijalle." },
    ],
    correctAnswerIds: ["b"],
    explanation: "Jaakkolan kuvaamassa tutkimusperinteessä keskeisiä ovat normatiivinen individualismi ja yksilön suvereniteetti. Teoria on jännitteisessä suhteessa enemmistödemokratiaan mutta tulkitsee demokratiaa yksilölähtöisesti, ei välttämättä hylkää sitä. Lähde: Jaakkola, Oikeus 2–3/2024, s. 103–122.",
    points: 3,
    reading: {
      seconds: 105,
      answerMode: "multiple-choice",
      text: "Konstitutionaalinen taloustiede tarkastelee, millaisilla säännöillä poliittinen valta ja taloudellinen toiminta voidaan järjestää. Jaakkolan artikkelissa tämän ajattelutavan keskeiseksi lähtökohdaksi nousevat yksilön suvereniteetti ja normatiivinen individualismi. Niissä painotetaan sitä, että yhteiskunnallisten järjestelyjen oikeutuksen tulisi palautua yksilöiden suostumukseen.\n\nYksilölähtöinen perusta synnyttää jännitteen enemmistödemokratian kanssa. Enemmistö voi tehdä päätöksen, jota kaikki päätöksen kohteena olevat eivät hyväksy. Artikkelissa kuvattu tutkimusperinne ei silti oman tulkintansa mukaan hylkää demokratian ideaa, vaan pyrkii ymmärtämään sitä yksilön näkökulmasta. Kysymys on siitä, millaisissa oikeudellisissa rajoissa poliittista päätösvaltaa tulisi käyttää.\n\nEräs tarkasteltu ajatus koskee kansainvälisesti hajautettua verotusvaltaa. Tällainen järjestelmä voi teorian mukaan tarjota yksilölle mahdollisuuden irtautua tietystä poliittisesta järjestelystä ja siten toimia enemmistövallan vastavoimana. Kyse ei ole kaiken verotusvallan kokoamisesta yhteen paikkaan, vaan hajauttamisen merkityksestä yksilön valinnanmahdollisuuksille.\n\n(Jaakkola, Oikeus 2–3/2024, s. 103–122.)\nHarjoitusteksti on laadittu artikkelin pohjalta omin sanoin, eikä se ole suora lainaus.\n\nLähde: Jussi Jaakkola: Yksilön suvereniteetti ja oikeuden legitimiteetti konstitutionaalisen taloustieteen tutkimusperinteessä. Oikeus 2–3/2024, s. 103–122.\nVerkossa: https://oikeus.journal.fi/article/view/159769",
    },
    placements: { oikis: 7, "valintakoe-g": 7 },
    combinedOrder: 8,
  },
  {
    // Todelliseen julkaisuun perustuva alkuperäinen harjoitusteksti, ei suora lainaus.
    id: "guru-article-authority-disinformation-2024-04",
    type: "reading-comprehension",
    title: "Viranomaisen tilannetietoisuus",
    prompt: "Viranomaisorganisaatio havaitsee verkossa mahdollisesti tarkoituksella levitettyä väärää tietoa. Mitkä toimintatavat ovat aineiston perusteella perusteltuja? Valitse kaikki oikeat.",
    answers: [
      { id: "a", text: "Jokainen väite on oikaistava välittömästi ilman sen taustojen selvittämistä." },
      { id: "b", text: "Tilannetta arvioidaan ja tarvittaessa tietoja tarkistetaan yhteistyössä muiden viranomaisten kanssa." },
      { id: "c", text: "Tilannetietoisuus on yksittäisen työntekijän asia eikä vaikuta viranomaisen päätöksentekoon." },
      { id: "d", text: "Reagointitapa valitaan tapauksen perusteella, jotta toiminta olisi oikeasuhtaista." },
    ],
    correctAnswerIds: ["b", "d"],
    explanation: "Tutkimuksessa korostuvat tilannetietoisuuden muodostaminen, viranomaisten yhteistyö ja tapauskohtainen reagointi. Toimintavaihtoehtoihin voivat kuulua tiedon arviointi ja oikaisu; jokaisen viestin automaattinen oikaiseminen ei ole tutkimuksen johtopäätös. Lähde: Sommarberg ym., Hallinnon Tutkimus 43(2), 2024, s. 6–22.",
    points: 3,
    reading: {
      seconds: 105,
      answerMode: "multiple-choice",
      text: "Viranomaisten päätökset perustuvat tietoon, mutta verkossa leviävä tieto voi olla virheellistä tai tarkoituksella harhaanjohtavaa. Tutkimuksessa erotetaan esimerkiksi misinformaatio, jota voidaan levittää ilman tietoista harhauttamistarkoitusta, ja disinformaatio, jonka levittämiseen liittyy pyrkimys johtaa vastaanottajaa harhaan. Levittäjän tarkoitusta voi kuitenkin olla vaikea päätellä yksittäisestä viestistä.\n\nSommarbergin, Alaraatikan ja Sederholmin tutkimuksessa selvitetään haastattelujen avulla, miten viranomaiset muodostavat tilannekuvaa disinformaatiosta. Tilannetietoisuudessa ei ole kyse vain väärien väitteiden huomaamisesta, vaan myös niiden mahdollisten seurausten arvioinnista. Harhaanjohtava tieto voi vaikuttaa resurssien käyttöön, toimintatapoihin ja päätöksenteon edellytyksiin.\n\nViranomaisilla on erilaisia keinoja vastata ongelmalliseen tietoon. Tiedon taustoja voidaan selvittää, virheellistä tietoa oikaista ja sopiva toimintatapa valita tilanteen mukaan. Tutkimuksessa korostuu myös viranomaisten välinen yhteistyö: yhteisen tilannekuvan rakentaminen voi auttaa varautumaan disinformaation riskeihin paremmin kuin pelkästään erillään tehty seuranta.\n\n(Sommarberg, Alaraatikka & Sederholm, Hallinnon Tutkimus 2024, s. 6–22.)\nHarjoitusteksti on laadittu artikkelin pohjalta omin sanoin, eikä se ole suora lainaus.\n\nLähde: Silvia Sommarberg, Milla Alaraatikka ja Teija Sederholm: Kohti parempaa viranomaisten disinformaatiotilannetietoisuutta. Hallinnon Tutkimus 43(2), 2024, s. 6–22.\nVerkossa: https://doi.org/10.37450/ht.131286",
    },
    placements: { oikis: 8, "valintakoe-g": 8 },
    combinedOrder: 9,
  },
  {
    // Todelliseen julkaisuun perustuva alkuperäinen harjoitusteksti, ei suora lainaus.
    id: "guru-article-factchecking-2025-05",
    type: "reading-comprehension",
    title: "Faktantarkistus ja informaatiohäiriöt",
    prompt: "Mikä johtopäätös vastaa parhaiten Havulan ja Salon puheenvuoron sisältöä?",
    answers: [
      { id: "a", text: "Faktantarkistus on tarpeetonta, koska käyttäjät tunnistavat virheellisen tiedon ilman apua." },
      { id: "b", text: "Sosiaalisen median ongelmat poistuvat kokonaan, kun yksittäisiin julkaisuihin liitetään faktantarkistusmerkintä." },
      { id: "c", text: "Faktantarkistus on tärkeä keino, mutta informaatiohäiriöihin vastaaminen vaatii myös laajempaa huomiota alustojen toimintaan ja rahoitukseen." },
      { id: "d", text: "Alustojen tunnepitoisuutta korostavat toimintatavat parantavat automaattisesti yhteiskunnallista keskustelua." },
    ],
    correctAnswerIds: ["c"],
    explanation: "Kirjoittajat pitävät faktantarkistusta tärkeänä mutta riittämättömänä yksittäisenä keinona: he nostavat esiin myös alustojen tunnepitoisuuteen perustuvat toimintamallit ja faktantarkistajien rahoituksen epävarmuuden. Kyseessä on lehden puheenvuoro, ei tutkimusartikkeli. Lähde: Havula & Salo, Media & viestintä 48(1), 2025, s. 173–176.",
    points: 2,
    reading: {
      seconds: 100,
      answerMode: "multiple-choice",
      text: "Faktantarkistuksen avulla pyritään selvittämään, pitävätkö julkisuudessa esitetyt väitteet paikkansa. Havula ja Salo kirjoittavat, että tutkimusten perusteella virheellisiin tai harhaanjohtaviin julkaisuihin lisätyt faktantarkistusmerkinnät voivat vähentää uskoa tällaisiin sisältöihin ja halukkuutta jakaa niitä. Faktantarkistus on näin ollen merkityksellinen tapa puuttua informaatiohäiriöihin.\n\nKirjoittajat käsittelevät samalla sen käytännön edellytyksiä. Jos suuret verkkoalustat vähentävät ulkopuolisen faktantarkistuksen rahoittamista, osa tarkistustoimintaa harjoittavista organisaatioista voi joutua taloudellisiin vaikeuksiin. Tämä puolestaan voi heikentää niiden mahdollisuuksia jatkaa työtään.\n\nPuheenvuorossa ongelmaksi ei kuitenkaan nähdä vain virheellisiä väitteitä. Kirjoittajien mukaan sosiaalisen median alustojen toimintalogiikka voi korostaa voimakkaita tunteita ja kärjistyneitä reaktioita. Tällöin huolellisen yhteiskunnallisen keskustelun näkyvyys saattaa jäädä vähäiseksi. Faktantarkistus voi auttaa yksittäisten väitteiden arvioinnissa, mutta kaikki alustojen toimintaan liittyvät ongelmat eivät ratkea pelkästään oikeiden ja väärien tietojen merkitsemisellä.\n\n(Havula & Salo, Media & viestintä 48(1), 2025, s. 173–176.)\nHarjoitusteksti on laadittu puheenvuoron pohjalta omin sanoin, eikä se ole suora lainaus.\n\nLähde: Pipsa Havula ja Mikko Salo: Käytännön lääkkeitä informaatiohäiriöihin. Media & viestintä 48(1), 2025, s. 173–176 (puheenvuoro).\nVerkossa: https://doi.org/10.23983/mv.159849",
    },
    placements: { oikis: 9, "valintakoe-g": 9 },
    combinedOrder: 10,
  },
  {
    // Itsenäisesti kirjoitettu oppimisaineisto oikeaan julkaisuun nojautuen; ei artikkelin lainaus.
    id: "guru-article-digital-administration-2020-06",
    type: "reading-comprehension",
    title: "Digitaalinen hallinto ja oikeusturva",
    prompt: "Viranomainen siirtää yksilöä koskevan päätöksen automaattiseen järjestelmään. Mitkä seuraavista kysymyksistä ovat aineiston näkökulmasta olennaisia? Valitse kaikki oikeat vaihtoehdot.",
    answers: [
      { id: "a", text: "Voidaanko automatisoidun ratkaisun perustelut ja päätöksentekotapa arvioida oikeudellisesti?" },
      { id: "b", text: "Poistuuko hyvän hallinnon vaatimus heti, kun päätöksen tekee tietojärjestelmä?" },
      { id: "c", text: "Miten yksilön oikeusturva ja julkisen vallan vastuu toteutuvat automatisoidussa prosessissa?" },
      { id: "d", text: "Onko ohjelmiston nopeus ainoa kriteeri, jonka mukaan järjestelmä tulee hyväksyä?" },
    ],
    correctAnswerIds: ["a", "c"],
    explanation: "Hallinnon digitalisaatio herättää kysymyksiä hyvän hallinnon, oikeusturvan, perustelujen ja julkisen vastuun toteutumisesta. Automaattinen käsittely ei yksin syrjäytä oikeudellisia velvoitteita. Lähde: Koivisto & Koulu, Lakimies 6/2020, s. 798–821.",
    points: 3,
    reading: {
      seconds: 135,
      answerMode: "multiple-choice",
      text: "Julkinen hallinto on siirtänyt asiointia verkkoon ja hyödyntänyt tietojärjestelmiä myös päätöksenteossa. Kehitys voi helpottaa hakemusten käsittelyä ja parantaa palvelujen saatavuutta, mutta samalla se muuttaa tapaa, jolla kansalainen kohtaa viranomaisen. Perinteisessä hallintomenettelyssä päätöksen taustalla ajatellaan olevan virkamies, jonka toimintaa voidaan arvioida esimerkiksi päätöksen perustelujen ja menettelysääntöjen avulla.\n\nKun käsittelyyn osallistuu algoritmi, on pohdittava, miten nämä oikeudelliset takeet toteutuvat uudessa ympäristössä. Tietojärjestelmä voi käsitellä suuren määrän samanlaisia asioita nopeasti, mutta nopeus ei yksin osoita päätöksen olevan lainmukainen. Oikeudellisen arvioinnin kohteeksi nousee myös se, miten järjestelmän säännöt on määritelty, minkälaista tietoa se käyttää ja miten virhetilanteisiin voidaan puuttua.\n\nKoiviston ja Koulun artikkeli tarkastelee hallinnon digitalisaatiota hyvän hallinnon näkökulmasta. Kirjoittajat nostavat esiin sen, että oikeudellisia käsitteitä ja vastuunjakoa on arvioitava uudelleen, kun ihmisen toimintaan perustuneet menettelyt digitalisoituvat. Kysymys ei siis ole vain teknologian toimivuudesta. Merkitystä on myös sillä, miten yksilön oikeusturva, läpinäkyvyys ja julkisen vallan velvollisuudet järjestetään.\n\n(Koivisto & Koulu, Lakimies 6/2020, s. 798–821.)\nHarjoitusteksti on laadittu artikkelin pohjalta omin sanoin, eikä se ole suora lainaus.\n\nLähde: Ida Koivisto ja Riikka Koulu: Miten hyvä hallinto digitalisoidaan? Haaste oikeustieteelliselle tutkimukselle. Lakimies 6/2020, s. 798–821.\nVerkossa: https://journal.fi/lakimies/article/view/94664",
    },
    placements: { oikis: 10, "valintakoe-g": 10 },
    combinedOrder: 11,
  },
  {
    // Itsenäisesti kirjoitettu oppimisaineisto oikeaan julkaisuun nojautuen; ei artikkelin lainaus.
    id: "guru-article-privacy-openness-2022-07",
    type: "reading-comprehension",
    title: "Julkisuusperiaate ja yksityisyys",
    prompt: "Mikä johtopäätös kuvaa parhaiten aineistossa tarkasteltua oikeudellista jännitettä?",
    answers: [
      { id: "a", text: "Tietosuoja tekee kaikista viranomaisten hallussa olevista asiakirjoista salaisia." },
      { id: "b", text: "Avoimuuden ja henkilötietojen suojan välillä voi olla tulkintatilanteita, joissa molemmat näkökulmat on tunnistettava." },
      { id: "c", text: "Julkisuusperiaate tarkoittaa sitä, että jokainen yksityishenkilön tieto on julkaistava internetissä." },
      { id: "d", text: "Yksityisyyden suoja koskee vain yritysten, ei julkisen vallan toimintaa." },
    ],
    correctAnswerIds: ["b"],
    explanation: "Lindroos-Hovinheimo käsittelee julkisuusperiaatteen ja henkilötietojen suojan välistä suhdetta sekä siihen liittyviä tulkintaongelmia. Kumpaakaan periaatetta ei voi kuvata aineistossa täysin poikkeuksettomaksi. Lähde: Lakimies 5/2022, s. 749–773.",
    points: 2,
    reading: {
      seconds: 130,
      answerMode: "multiple-choice",
      text: "Viranomaisten toiminnan avoimuus on demokraattisessa yhteiskunnassa tärkeä periaate. Asiakirjojen julkisuus mahdollistaa vallankäytön arvioinnin, julkisen keskustelun ja viranomaisten toiminnan valvonnan. Avoimuus ei kuitenkaan ole ainoa suojeltava arvo: samassa asiakirjassa voi olla myös yksittäiseen ihmiseen liittyviä tietoja, joiden käsittelyä tietosuojasääntely rajoittaa.\n\nHenkilötietojen suojan vahvistuminen on lisännyt tilanteita, joissa on arvioitava useamman oikeudellisen lähtökohdan suhdetta. Yksi kysymys on, milloin oikeus saada tieto viranomaisen toiminnasta voidaan sovittaa yhteen sen kanssa, ettei henkilöön liittyviä tietoja levitetä tarpeettomasti. Samalla voidaan kysyä, muuttuuko julkisuusperiaatteen käytännön merkitys, jos henkilötietojen suoja saa yhä suuremman painoarvon.\n\nLindroos-Hovinheimo analysoi näitä kysymyksiä oikeustapausten avulla. Artikkelissa käsitellään muun muassa oikeudenkäyntien ja verotietojen julkisuuteen liittyviä tilanteita. Tarkoituksena on hahmottaa, miten kansallinen julkisuusperiaate ja eurooppalainen tietosuoja vaikuttavat toisiinsa. Kyse ei ole yksinkertaisesta valinnasta avoimuuden ja salassapidon välillä, vaan siitä, miten eri säännösten soveltamisalat ja tarkoitukset suhteutuvat toisiinsa.\n\n(Lindroos-Hovinheimo, Lakimies 5/2022, s. 749–773.)\nHarjoitusteksti on laadittu artikkelin pohjalta omin sanoin, eikä se ole suora lainaus.\n\nLähde: Susanna Lindroos-Hovinheimo: Yksityisyyttä vai avoimuutta? Tietosuojan vaikutus julkisuusperiaatteeseen. Lakimies 5/2022, s. 749–773.\nVerkossa: https://journal.fi/lakimies/article/view/154816",
    },
    placements: { oikis: 11, "valintakoe-g": 11 },
    combinedOrder: 12,
  },
  {
    // Itsenäisesti kirjoitettu oppimisaineisto oikeaan julkaisuun nojautuen; ei artikkelin lainaus.
    id: "guru-article-de-lege-ferenda-2023-08",
    type: "reading-comprehension",
    title: "Millaista lakia pitäisi säätää?",
    prompt: "Väittämä: De lege ferenda -tutkimuksessa voidaan arvioida sekä lainsäädännön tavoitteita että vaihtoehtoisia keinoja niiden saavuttamiseksi.",
    answers: [
      { id: "true", text: "Väittämä pitää paikkansa" },
      { id: "false", text: "Väittämä ei pidä paikkaansa" },
    ],
    correctAnswerIds: ["true"],
    explanation: "Jaakko Markus erottelee oikeuspoliittisessa tutkimuksessa tavoitteiden kriittisen tarkastelun ja vaihtoehtoisten sääntelykeinojen arvioinnin. Lähde: Markus, Lakimies 6/2023, s. 895–917.",
    points: 2,
    reading: {
      seconds: 130,
      answerMode: "statement",
      text: "Oikeustieteellisessä tutkimuksessa voidaan kysyä, mitä voimassa oleva laki tarkoittaa ja miten sitä tulisi tulkita. Tämän rinnalla voidaan tutkia sitä, millainen lainsäädäntö olisi tulevaisuudessa perusteltua. Jälkimmäisestä lähestymistavasta käytetään nimitystä de lege ferenda. Siinä tutkija ei ainoastaan kuvaa nykyisiä sääntöjä, vaan tarkastelee mahdollisia muutoksia ja niiden perusteita.\n\nLainsäädännön kehittämistä voidaan lähestyä usealla tavalla. Ensiksi on kysyttävä, mitä uudistuksella tavoitellaan: pyritäänkö esimerkiksi parantamaan oikeusturvaa, vähentämään kustannuksia vai ehkäisemään jokin havaittu ongelma? Tavoitteet eivät aina ole keskenään yhteensopivia, ja myös niiden arvopohjaa voidaan arvioida kriittisesti. Toiseksi voidaan pohtia, millaisilla säännöillä tavoitteet saavutettaisiin ja mitä seurauksia eri vaihtoehdoista voisi aiheutua.\n\nMarkuksen artikkeli käsittelee de lege ferenda -tutkimusta erityisesti prosessi- ja insolvenssioikeuden näkökulmasta. Kirjoittajan mukaan tällainen tutkimus ei muodosta vain yhtä kaavamaista menetelmää. Tutkimukset voivat painottaa eri tavoin tavoitteiden perustelemista ja sääntelykeinojen vertaamista. Yhteistä niille on kiinnostus siihen, miten oikeutta voitaisiin muuttaa, ei pelkästään siihen, miten nykyiset säännökset ovat ymmärrettävissä.\n\n(Markus, Lakimies 6/2023, s. 895–917.)\nHarjoitusteksti on laadittu artikkelin pohjalta omin sanoin, eikä se ole suora lainaus.\n\nLähde: Jaakko Markus: De lege ferenda -tutkimus prosessi- ja insolvenssioikeudessa. Lakimies 6/2023, s. 895–917.\nVerkossa: https://journal.fi/lakimies/article/view/131549",
    },
    placements: { oikis: 12, "valintakoe-g": 12 },
    combinedOrder: 13,
  },
  {
    // Itsenäisesti kirjoitettu oppimisaineisto oikeaan julkaisuun nojautuen; ei artikkelin lainaus.
    id: "guru-article-eu-rule-of-law-2016-09",
    type: "reading-comprehension",
    title: "EU ja oikeusvaltioperiaatteen suoja",
    prompt: "Mitä Leppävirran artikkelin kuvaaman EU:n oikeusvaltiomekanismin luonteesta voidaan aineiston perusteella päätellä?",
    answers: [
      { id: "a", text: "Mekanismi tarkoitti kaikissa tilanteissa jäsenvaltion lakien välitöntä kumoamista." },
      { id: "b", text: "Mekanismilla tavoiteltiin poliittista vaikuttamista vakavassa oikeusvaltiokriisissä, vaikka sen toimivaltaperustasta kiisteltiin." },
      { id: "c", text: "EU:n toimielimet eivät missään tilanteessa voi ottaa kantaa jäsenmaan oikeusvaltion tilaan." },
      { id: "d", text: "Mekanismin keskeinen tarkoitus oli muuttaa jäsenmaiden valuuttajärjestelmää." },
    ],
    correctAnswerIds: ["b"],
    explanation: "Leppävirta tarkastelee komission Puolaan kohdistaman oikeusvaltiokehyksen toimivaltakiistaa ja sen luonnetta poliittisen paineen välineenä. Tehtävä koskee artikkelissa analysoitua historiallista järjestelyä, ei kaikkia myöhemmin käyttöön otettuja EU-menettelyjä. Lähde: Lakimies 7–8/2016, s. 1100–1121.",
    points: 3,
    reading: {
      seconds: 145,
      answerMode: "multiple-choice",
      text: "Euroopan unionin jäsenyys perustuu yhteisiin periaatteisiin, joihin kuuluu oikeusvaltioperiaate. Yksi sen keskeisistä ajatuksista on, että julkinen valta käyttää toimivaltaansa oikeuden asettamissa rajoissa. Myös tuomioistuinten riippumattomuudella on keskeinen merkitys: jos tuomioistuin ei voi ratkaista asioita itsenäisesti, yksilön mahdollisuus saada oikeussuojaa voi heikentyä.\n\nLeppävirran tutkimus käsittelee Euroopan komission aiemmin käyttöön ottamaa oikeusvaltiokehystä tilanteessa, jossa Puolan valtiosääntöjärjestelmän muutokset herättivät huolta. Komissio antoi suosituksia, joiden tavoitteena oli vaikuttaa oikeusvaltiokriisin ratkaisemiseen. Samalla syntyi oikeudellinen kiista: oliko EU:n toimielimillä riittävä perussopimuksiin perustuva toimivalta luoda tällainen menettely? Osa jäsenvaltioista ja EU:n neuvoston oikeudellinen yksikkö suhtautui toimivaltaperustaan kriittisesti.\n\nArtikkelissa näitä väitteitä arvioidaan suhteessa siihen, millaisiin tilanteisiin menettelyä sovellettiin ja millaisia vaikutuksia sillä tavoiteltiin. Kirjoittaja katsoo, että tarkastellussa tapauksessa kehystä käytettiin erityisen vakavan oikeusvaltiouhan yhteydessä ja että sen keskeinen vaikutus oli poliittinen paine. Tämä luonne oli merkityksellinen myös toimivaltakritiikin arvioinnissa. Aineisto kuvaa artikkelin julkaisuajankohdan keskustelua, ei myöhempää EU-sääntelyn kokonaisuutta.\n\n(Leppävirta, Lakimies 7–8/2016, s. 1100–1121.)\nHarjoitusteksti on laadittu artikkelin pohjalta omin sanoin, eikä se ole suora lainaus.\n\nLähde: Liisa Leppävirta: Onko oikeusvaltioperiaatteelle perustuvalla Euroopan unionilla toimivalta suojata oikeusvaltioperiaatetta? Lakimies 7–8/2016, s. 1100–1121.\nVerkossa: https://journal.fi/lakimies/article/view/176678",
    },
    placements: { oikis: 13, "valintakoe-g": 13 },
    combinedOrder: 14,
  },
  {
    // Itsenäisesti kirjoitettu oppimisaineisto oikeaan julkaisuun nojautuen; ei artikkelin lainaus.
    id: "guru-article-prison-speech-2018-10",
    type: "reading-comprehension",
    title: "Sananvapaus vankilassa",
    prompt: "Mitkä väittämät ovat aineiston ja siinä esitellyn kirjoittajan johtopäätöksen mukaisia? Valitse kaikki oikeat.",
    answers: [
      { id: "a", text: "Myös vangilla on lähtökohtaisesti sananvapauteen liittyvä oikeudellinen suoja." },
      { id: "b", text: "Kaikki vankilan henkilökuntaan kohdistuva kritiikki voidaan automaattisesti rangaista eristämisellä." },
      { id: "c", text: "Sananvapauden käyttämisestä määrättävää kurinpitorangaistusta on arvioitava suhteessa oikeuden rajoittamisen edellytyksiin." },
      { id: "d", text: "Vankien perusoikeuksia ei tarvitse tarkastella ihmisoikeussopimusten näkökulmasta." },
    ],
    correctAnswerIds: ["a", "c"],
    explanation: "von Schrowen artikkeli arvioi vankien sananvapauden rajoja ja eristämiseen perustuvaa kurinpitoa. Kirjoittaja pitää sananvapauteen kohdistuvia kurinpitoseuraamuksia poikkeuksellisina ratkaisuina. Lähde: Helsinki Law Review 1/2018, s. 78–105.",
    points: 3,
    reading: {
      seconds: 125,
      answerMode: "multiple-choice",
      text: "Vapausrangaistuksen suorittaminen rajoittaa ihmisen vapautta, mutta se ei tarkoita kaikkien muiden oikeuksien katoamista. Vankilassa tarvitaan järjestystä ja turvallisuutta, mutta samalla tulee arvioida, milloin vangin käyttäytymiseen voidaan puuttua perusoikeuksia rajoittavilla keinoilla. Erityisen vaikea rajanveto liittyy tilanteisiin, joissa vanki arvostelee henkilökuntaa tai käyttää epäasiallista kieltä.\n\nvon Schrowen artikkeli saa lähtökohtansa Mikkelin vankilassa havaituista ongelmista, joihin eduskunnan apulaisoikeusasiamiehen tarkastus kiinnitti huomiota. Eräille vangeille oli määrätty huomattavia kurinpitoseuraamuksia henkilökunnan arvostelusta. Kirjoittaja tutkii, missä tilanteissa tällainen seuraamus voi olla hyväksyttävä sananvapauteen puuttuminen. Arvioinnin taustalla ovat sekä perusoikeuksia koskevat yleiset edellytykset että Euroopan ihmisoikeustuomioistuimen ratkaisukäytäntö.\n\nArtikkelissa esitetty johtopäätös on, että pelkästään sananvapauden käyttämiseen liittyviä kurinpitoseuraamuksia tulisi käyttää poikkeuksellisesti ja rajata vakavimpiin tilanteisiin. Säännösten soveltaminen ei siten voi perustua yksin siihen, että lausuma on henkilökunnasta epämiellyttävä. Olennaista on erottaa viranomaisen perusteltu järjestyksenpito sellaisesta puuttumisesta ilmaisuun, joka ylittää oikeudellisesti hyväksyttävät rajat.\n\n(von Schrowe, Helsinki Law Review 1/2018, s. 78–105.)\nHarjoitusteksti on laadittu artikkelin pohjalta omin sanoin, eikä se ole suora lainaus.\n\nLähde: Anton von Schrowe: Rumista sanoista rundia? Kurinpitorangaistus ja vankien sananvapauden rajoittaminen. Helsinki Law Review 1/2018, s. 78–105.\nVerkossa: https://journal.fi/helsinkilawreview/article/view/HelLRev-2018-1-von_Schrowe",
    },
    placements: { oikis: 14, "valintakoe-g": 14 },
    combinedOrder: 15,
  },
  {
    // Itsenäisesti kirjoitettu oppimisaineisto oikeaan julkaisuun nojautuen; ei artikkelin lainaus.
    id: "guru-article-emu-constitutionalism-2024-11",
    type: "reading-comprehension",
    title: "Euroalueen taloussäännöt ja päätösvalta",
    prompt: "Väittämä: Karin artikkelissa uusi perustuslaillisuus tarkoittaa talouspolitiikan rajaamista säännöillä ja instituutioilla, ei ensisijaisesti yksittäisen valtion perustuslain uudelleenkirjoittamista.",
    answers: [
      { id: "true", text: "Väittämä pitää paikkansa" },
      { id: "false", text: "Väittämä ei pidä paikkaansa" },
    ],
    correctAnswerIds: ["true"],
    explanation: "Kari käyttää uuden perustuslaillisuuden käsitettä talouspolitiikkaa ohjaavista oikeudellisista ja institutionaalisista rajoista. Tutkimuskohteena on euroalue vuosina 2015–2020. Lähde: Poliittinen talous 12(1), 2024, s. 11–43.",
    points: 2,
    reading: {
      seconds: 145,
      answerMode: "statement",
      text: "Euroalueella jäsenvaltiot tekevät omia budjettipäätöksiään, mutta niiden valintoihin vaikuttavat myös yhteiset säännöt ja toimielimet. Tämä herättää kysymyksen siitä, kuinka paljon liikkumavaraa kansallisesti valituilla päättäjillä on silloin, kun taloutta ohjataan yhteisten rajoitteiden kautta. Säännöt voivat vakauttaa talouden toimintaa, mutta niiden voidaan myös arvioida kaventavan poliittisia vaihtoehtoja.\n\nKarin artikkelissa hyödynnetään uuden perustuslaillisuuden käsitettä. Siinä tarkastellaan pyrkimyksiä sitoa talouspolitiikka oikeudellisiin ja institutionaalisiin järjestelyihin, jotka korostavat markkinakuria ja rajoittavat poliittisten päätösten mahdollisuuksia. Käsite ei viittaa vain siihen, että valtion kirjoitettua perustuslakia muutettaisiin, vaan laajempaan tapaan järjestää taloudellista päätösvaltaa.\n\nTutkimus käsittelee euroalueen kehitystä vuosina 2015–2020. Tarkasteluun sisältyvät eurovaltioiden julkisen talouden tunnusluvut, Kreikan kriisiin liittyvät vuoden 2015 tapahtumat sekä Euroopan komission ja keskuspankin toiminta. Kirjoittaja ei kuvaa pelkästään yhdenmukaista ja aukotonta järjestelmää, vaan nostaa esiin myös sen jännitteitä ja ristiriitaisuuksia. Aineistossa talouspoliittiset säännöt näyttäytyvät yhtä aikaa päätöksentekoa ohjaavina välineinä ja poliittisen kiistan kohteina.\n\n(Kari, Poliittinen talous 12(1), 2024, s. 11–43.)\nHarjoitusteksti on laadittu artikkelin pohjalta omin sanoin, eikä se ole suora lainaus.\n\nLähde: Niina Kari: Uusi perustuslaillisuus Euroopan talous- ja rahaliitossa vuosina 2015–2020. Poliittinen talous 12(1), 2024, s. 11–43 (tutkimusartikkeli).\nVerkossa: https://doi.org/10.51810/pt.127176",
    },
    placements: { oikis: 15, "valintakoe-g": 15 },
    combinedOrder: 16,
  },
  {
    // Itsenäisesti kirjoitettu oppimisaineisto oikeaan julkaisuun nojautuen; ei artikkelin lainaus.
    id: "guru-article-ai-political-economy-2024-12",
    type: "reading-comprehension",
    title: "Tekoälyn taloudelliset valtarakenteet",
    prompt: "Tutkija selvittää tekoälyn yhteiskunnallisia vaikutuksia. Mikä lähestymistapa vastaa parhaiten aineistossa kuvattua poliittisen talouden näkökulmaa?",
    answers: [
      { id: "a", text: "Tutkija selvittää vain, onko yksittäinen vastaus kohtelias ja kieliopillisesti oikea." },
      { id: "b", text: "Tutkija rajaa pois teknologiayritysten vallan ja infrastruktuurien omistuksen, koska ne eivät liity tekoälyyn." },
      { id: "c", text: "Tutkija tarkastelee myös tekoälyn tuottamiseen tarvittavia resursseja, instituutioita ja sitä, kenelle taloudellinen hyöty tai vaikutusvalta kasautuu." },
      { id: "d", text: "Tutkija pitää tekoälyn teknistä suorituskykyä ainoana yhteiskunnallisesti merkittävänä kysymyksenä." },
    ],
    correctAnswerIds: ["c"],
    explanation: "Saaren katsaus kehottaa tarkastelemaan tekoälyä myös poliittisen talouden kysymyksenä: algoritmien lisäksi merkitystä on teknologiapolitiikalla, infrastruktuureilla ja taloudellisilla rakenteilla. Lähde: Poliittinen talous 12(1), 2024, s. 44–67.",
    points: 3,
    reading: {
      seconds: 135,
      answerMode: "multiple-choice",
      text: "Tekoälystä keskustellaan usein sen perusteella, miten hyvin järjestelmä suorittaa tietyn tehtävän. Voidaan mitata esimerkiksi tekstin tuottamisen nopeutta, tunnistustarkkuutta tai vastausten virheettömyyttä. Tällaiset mittarit kertovat teknisestä toiminnasta, mutta eivät yksin selitä tekoälyn yhteiskunnallista merkitystä. Laajempaan tarkasteluun kuuluu myös se, millaisia resursseja järjestelmien kehittäminen edellyttää ja kuka pääsee vaikuttamaan niiden käyttöönottoon.\n\nSaaren katsaus sijoittaa tekoälyä koskevia kysymyksiä poliittisen talouden tutkimukseen. Tarkastelun kannalta olennaisia ovat algoritmien lisäksi niiden käyttämiseen tarvittavat infrastruktuurit, teknologiapolitiikka ja taloudelliset suhteet. Tekoälyjärjestelmät eivät synny irrallaan yhteiskunnasta: niiden kehittämiseen liittyvät esimerkiksi laskentakapasiteetin järjestäminen, pääoman käyttö ja valinnat siitä, mihin sovelluksiin panostetaan.\n\nKatsauksessa tuodaan esiin, että tekoälyn eettisten kysymysten tarkastelu ei yksin riitä kattavaksi yhteiskunnalliseksi analyysiksi. On mahdollista arvioida samanaikaisesti järjestelmän vaikutuksia yksilöihin ja sitä, miten teknologia muuttaa organisaatioiden tai markkinoiden valtasuhteita. Poliittisen talouden näkökulma kysyy tällöin myös, millaiset toimijat hyötyvät teknologian kehityksestä ja millä tavoin päätösvalta järjestyy. Nämä eivät ole yksittäisen ohjelman ominaisuuksia, vaan laajempia yhteiskunnallisia kysymyksiä.\n\n(Saari, Poliittinen talous 12(1), 2024, s. 44–67.)\nHarjoitusteksti on laadittu artikkelin pohjalta omin sanoin, eikä se ole suora lainaus.\n\nLähde: Leevi Saari: Algoritmit, infrastruktuurit ja etiikan rajat – näkökulmia tekoälyn poliittiseen talouteen vuonna 2024. Poliittinen talous 12(1), 2024, s. 44–67 (katsausartikkeli).\nVerkossa: https://doi.org/10.51810/pt.142284",
    },
    placements: { oikis: 16, "valintakoe-g": 16 },
    combinedOrder: 17,
  },
  {
    // Itsenäisesti kirjoitettu oppimisaineisto oikeaan julkaisuun nojautuen; ei artikkelin lainaus.
    id: "guru-article-just-transition-2024-13",
    type: "reading-comprehension",
    title: "Kestävyyssiirtymän oikeudenmukaisuus",
    prompt: "Mitkä päätelmät vastaavat aineistossa esiteltyä feminististä ja postkolonialistista tarkastelua? Valitse kaikki oikeat.",
    answers: [
      { id: "a", text: "Ympäristötoimien seuraukset voivat kohdistua eri ihmisryhmiin ja alueisiin epätasaisesti." },
      { id: "b", text: "Kestävyyssiirtymän oikeudenmukaisuutta voi arvioida tarkastelematta taloudellisia valtasuhteita." },
      { id: "c", text: "Sukupuoleen ja globaaliin eriarvoisuuteen liittyvät rakenteet voivat olla olennaisia myös ilmastopolitiikassa." },
      { id: "d", text: "Kaikki ekologisen siirtymän toimet parantavat automaattisesti kaikkien ihmisten asemaa samalla tavalla." },
    ],
    correctAnswerIds: ["a", "c"],
    explanation: "Bhatian ja Lambergin katsaus korostaa ekologisten kriisien sekä siirtymätoimien eriarvoistavia vaikutuksia ja globaaleja, sukupuolittuneita valtasuhteita. Lähde: Poliittinen talous 12(1), 2024, s. 68–88.",
    points: 3,
    reading: {
      seconds: 135,
      answerMode: "multiple-choice",
      text: "Ilmastonmuutoksen torjunnassa suunnitellaan muutoksia energiantuotantoon, kulutukseen ja talouden rakenteisiin. Tavoitteena voi olla päästöjen vähentäminen, mutta muutosten oikeudenmukaisuutta ei voi arvioida pelkästään ympäristövaikutusten kautta. Ratkaisu, joka vähentää yhden alueen päästöjä, voi samalla siirtää kustannuksia tai ympäristöhaittoja toisille ihmisille ja alueille. Siksi on merkitystä sillä, kuka tekee päätöksiä ja kuka kantaa niiden seuraukset.\n\nBhatia ja Lamberg tarkastelevat ekologisia kriisejä feministisen ja postkolonialistisen poliittisen talouden näkökulmista. Feministinen lähestymistapa kiinnittää huomiota muun muassa sukupuolittuneeseen työnjakoon ja hoivaan. Postkolonialistinen tarkastelu puolestaan auttaa tunnistamaan historiallisia ja nykyisiä globaaleja valtasuhteita. Katsaus ehdottaa, että näiden lähestymistapojen yhdistäminen tuottaa monipuolisemman kuvan ekologisista kriiseistä.\n\nMyös kestävyyssiirtymä voi sisältää ristiriitoja. Ympäristön kannalta perusteltu uudistus ei välttämättä poista taloudellista eriarvoisuutta, ja sen toteuttaminen voi nojata jo valmiiksi epätasaisiin suhteisiin. Kirjoittajien mukaan oikeudenmukaisemman siirtymän hahmottaminen edellyttää huomion kiinnittämistä sekä ympäristötavoitteisiin että siihen, miten sukupuoli, työ ja globaalit rakenteet vaikuttavat ihmisten mahdollisuuksiin osallistua muutokseen.\n\n(Bhatia & Lamberg, Poliittinen talous 12(1), 2024, s. 68–88.)\nHarjoitusteksti on laadittu artikkelin pohjalta omin sanoin, eikä se ole suora lainaus.\n\nLähde: Riina Bhatia ja Emma Lamberg: Ekologisista kriiseistä globaalisti oikeudenmukaiseen kestävyyssiirtymään? Feministisiä ja postkolonialistisia näkökulmia. Poliittinen talous 12(1), 2024, s. 68–88 (katsausartikkeli).\nVerkossa: https://doi.org/10.51810/pt.142438",
    },
    placements: { oikis: 17, "valintakoe-g": 17 },
    combinedOrder: 18,
  },
  {
    // Itsenäisesti kirjoitettu oppimisaineisto oikeaan julkaisuun nojautuen; ei artikkelin lainaus.
    id: "guru-article-international-tax-2024-14",
    type: "reading-comprehension",
    title: "Kansainvälinen verokilpailu",
    prompt: "Väittämä: Finérin puheenvuoron mukaan kansainvälisen verotuksen yhteistyöllä voidaan rajoittaa yritysten voitonsiirtoa ja haitallista verokilpailua.",
    answers: [
      { id: "true", text: "Väittämä pitää paikkansa" },
      { id: "false", text: "Väittämä ei pidä paikkaansa" },
    ],
    correctAnswerIds: ["true"],
    explanation: "Finérin vuoden 2024 puheenvuoro käsittelee kansainvälisen verovälttelyn ongelmia ja OECD:n johdolla kehitettyjen uudistusten, myös suuryritysten vähimmäisveron, mahdollista vaikutusta. Lähde: Poliittinen talous 12(1), 2024, s. 89–104.",
    points: 2,
    reading: {
      seconds: 130,
      answerMode: "statement",
      text: "Monikansallisen yrityksen toiminta voi jakautua useaan valtioon. Sen tuotteita voidaan kehittää yhdessä maassa, myydä toisessa ja hallinnoida kolmannessa. Tällainen toimintamalli herättää kysymyksen siitä, mihin valtioon yrityksen voitot verotuksessa kuuluvat. Eri maiden verojärjestelmien erot voivat avata mahdollisuuksia järjestelyihin, joissa voittoja siirretään matalamman verotuksen alueille.\n\nFinérin puheenvuorossa kansainvälistä verokilpailua tarkastellaan osana taloudellisen eriarvoisuuden kehitystä. Kirjoittaja nostaa esiin sekä suurten yritysten että kansainvälisesti toimivien sijoittajien mahdollisuudet hyödyntää valtioiden välisiä eroja. Digitalisoitunut liiketoiminta on tehnyt ongelmasta entistä näkyvämmän, koska yrityksen markkinat ja fyysinen sijainti eivät välttämättä ole samassa maassa.\n\nPuheenvuoro kuvaa kansainvälisen yhteistyön kehitystä erityisesti OECD:n piirissä. Vuoden 2024 tilanteessa yksi keskeinen uudistus oli suurten kansainvälisten yritysten 15 prosentin vähimmäisvero. Sen tavoitteena oli rajoittaa voitonsiirtoon ja haitalliseen verokilpailuun liittyviä ongelmia. Kirjoittajan tulkinnan mukaan tällaiset uudistukset voivat lisätä kansallisvaltioiden mahdollisuuksia toteuttaa veropolitiikkaansa. Aineiston luvut ja arviot kuvaavat puheenvuoron julkaisuajankohtaa, eivät sellaisenaan ennustetta verouudistusten myöhemmistä tuloksista.\n\n(Finér, Poliittinen talous 12(1), 2024, s. 89–104.)\nHarjoitusteksti on laadittu artikkelin pohjalta omin sanoin, eikä se ole suora lainaus.\n\nLähde: Lauri Finér: Kullattu digitaalinen aikakausi ja kansainvälisen verokilpailun käänne. Poliittinen talous 12(1), 2024, s. 89–104 (keskustelupuheenvuoro).\nVerkossa: https://doi.org/10.51810/pt.142464",
    },
    placements: { oikis: 18, "valintakoe-g": 18 },
    combinedOrder: 19,
  },
  {
    // Itsenäisesti kirjoitettu oppimisaineisto oikeaan julkaisuun nojautuen; ei artikkelin lainaus.
    id: "guru-article-syndemic-2025-15",
    type: "reading-comprehension",
    title: "Terveyskriisin hallinta ja eriarvoisuus",
    prompt: "Viranomainen suunnittelee toimenpiteitä tartuntatautitilanteessa. Mikä vaihtoehto vastaa parhaiten aineistossa esitettyä syndeemistä näkökulmaa?",
    answers: [
      { id: "a", text: "Arvioidaan vain tartuntojen kokonaismäärää eikä toimenpiteiden muita vaikutuksia." },
      { id: "b", text: "Jätetään kaikkien haavoittuvassa asemassa olevien ryhmien suoja kokonaan vapaaehtoisten suositusten varaan." },
      { id: "c", text: "Punnitaan terveydellisten vaikutusten lisäksi myös toimenpiteiden oikeusvaikutuksia ja sitä, voivatko ne pahentaa olemassa olevaa eriarvoisuutta." },
      { id: "d", text: "Oletetaan, että kriisitoimet vaikuttavat kaikissa väestöryhmissä täsmälleen samalla tavalla." },
    ],
    correctAnswerIds: ["c"],
    explanation: "Tuovinen tarkastelee pandemiaa syndemiana, jossa terveydelliset ja sosiaaliset haavoittuvuudet voivat vahvistaa toisiaan. Tällöin kriisitoimien perus- ja ihmisoikeusvaikutuksia on arvioitava ennakolta. Lähde: Oikeus 2/2025, s. 160–177.",
    points: 3,
    reading: {
      seconds: 145,
      answerMode: "multiple-choice",
      text: "Tartuntataudin leviämistä voidaan tarkastella terveydenhuollon tilastojen ja epidemiologisten arvioiden perusteella. Kriisin vaikutukset eivät kuitenkaan rajoitu tartuntoihin. Samanaikaisesti ihmisillä voi olla muita sairauksia, taloudellisia vaikeuksia tai ongelmia palveluihin pääsyssä. Jos nämä tekijät vahvistavat toistensa haitallisia vaikutuksia, puhutaan syndemiasta. Tällöin terveysongelmaa ei voida ymmärtää erillään sitä ympäröivistä yhteiskunnallisista olosuhteista.\n\nTuovisen artikkeli vertaa Suomessa ja Ruotsissa koronaviruspandemian aikana vuosina 2020–2022 käytettyjä oikeudellisia keinoja. Suomessa turvauduttiin poikkeusolojen mukaisiin toimivaltuuksiin kahdessa vaiheessa, kun taas Ruotsin ensimmäisiin toimiin sisältyi runsaasti suosituksia ja vapaaehtoista ohjausta. Vertailun pääasia ei ole asettaa maita yksinkertaiseen paremmuusjärjestykseen, vaan tarkastella, miten eri sääntelyratkaisut mahdollistivat haavoittuvuuksien huomioimisen.\n\nSyndeeminen näkökulma korostaa, että myös kriisitoimilla voi olla epätasaisia vaikutuksia. Oikeudellisessa arvioinnissa on pohdittava rajoitusten perustaa ja niiden seurauksia eri väestöryhmille. Kirjoittajan mukaan yksilön oikeuksien ja velvollisuuksien perusteista on säädettävä lailla. Samoin oikeuksien turvaaminen edellyttää enemmän kuin pelkkiä suosituksia silloin, kun suojelun tarve on erityinen. Ennakollinen perus- ja ihmisoikeusvaikutusten arviointi auttaa tunnistamaan tällaisia tilanteita.\n\n(Tuovinen, Oikeus 2/2025, s. 160–177.)\nHarjoitusteksti on laadittu artikkelin pohjalta omin sanoin, eikä se ole suora lainaus.\n\nLähde: Anna-Kaisa Tuovinen: Syndemian sääntely – oppeja Suomesta ja Ruotsista koronapandemian ajalta. Oikeus 2/2025, s. 160–177.\nVerkossa: https://www.edilex.fi/oikeus/1001120002",
    },
    placements: { oikis: 19, "valintakoe-g": 19 },
    combinedOrder: 20,
  },
];

function isPositiveOrder(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value) && value > 0;
}

export function getGuruQuestionCategory(question: GuruGameQuestion): GuruQuestionCategory {
  const hasOikis = isPositiveOrder(question.placements.oikis);
  const hasG = isPositiveOrder(question.placements["valintakoe-g"]);
  if (hasOikis && hasG) return "shared";
  if (hasOikis) return "oikis";
  return "valintakoe-g";
}

function automaticCombinedOrder(question: GuruGameQuestion) {
  const values = [
    question.placements.oikis,
    question.placements["valintakoe-g"],
  ].filter(isPositiveOrder);
  return values.length ? Math.min(...values) : Number.MAX_SAFE_INTEGER;
}

export function getGuruGameQuestion(questionId: string): GuruGameQuestion | null {
  return guruGameQuestions.find((q) => q.id === questionId) ?? null;
}

export function getGuruQuestionSourceId(questionId: string) {
  return `gurupeli:${questionId}`;
}

/** Tunnistaa sekä uuden että vanhan GuruPath-suorituksen samalle kysymykselle. */
export function isCompletedSourceForQuestion(sourceId: string, questionId: string) {
  return sourceId === getGuruQuestionSourceId(questionId) || sourceId.endsWith(`:${questionId}`);
}

export function getGuruGameQuestionsForView(viewId: GuruGameViewId) {
  const seen = new Set<string>();
  const selected = guruGameQuestions
    .filter((question) => {
      if (seen.has(question.id)) return false;
      const belongs =
        viewId === "combined"
          ? isPositiveOrder(question.placements.oikis) || isPositiveOrder(question.placements["valintakoe-g"])
          : isPositiveOrder(question.placements[viewId as GuruGameId]);
      if (belongs) seen.add(question.id);
      return belongs;
    })
    .map((question) => ({
      question,
      category: getGuruQuestionCategory(question),
      sortOrder:
        viewId === "combined"
          ? isPositiveOrder(question.combinedOrder)
            ? question.combinedOrder
            : automaticCombinedOrder(question)
          : question.placements[viewId as GuruGameId]!,
    }));

  return selected.sort((a, b) => {
    if (a.sortOrder !== b.sortOrder) return a.sortOrder - b.sortOrder;
    return a.question.id.localeCompare(b.question.id, "fi");
  });
}
