export type FreeCourseLawOption = {
  id: string;
  text: string;
};

export type FreeCourseLawQuestion = {
  id: string;
  question: string;
  options: FreeCourseLawOption[];
  correctAnswerIds: string[];
  source: "norio" | "rajaesteet";
};

export const LAW_EXAM_ID = "oikeustiede-eriytyva-2026";
export const LAW_EXAM_DURATION_SECONDS = 60 * 60;

export const lawSourceLabels = {
  norio: "Jaana Norio: Johdatus kuluttajaoikeuteen",
  rajaesteet: "Rajaesteet Pohjoismaissa sosiaali- ja työmarkkinakysymyksissä",
} as const;

export const freeCourseLaw2026Questions: FreeCourseLawQuestion[] = [
  {
    id: "C1",
    source: "norio",
    question:
      "Kuluttajansuojalainsäädäntö perustuu ennen kaikkea liberalistiseen sopimuskäsitykseen, jonka mukaan sopimuksissa on aina heikompi osapuoli, jota tulee suojella.",
    options: [
      { id: "a", text: "Oikein" },
      { id: "b", text: "Väärin" },
    ],
    correctAnswerIds: ["b"],
  },
  {
    id: "C2",
    source: "norio",
    question:
      "Euroopan unionin kuluttajaoikeudessa on pitkään ollut keskeinen ajatus, että aktiiviselle ja rationaalisesti toimivalle kuluttajalle pyritään turvaamaan mahdollisimman paljon ja mahdollisimman hyvin hänen tarvettaan vastaavaa tietoa, jonka perusteella kuluttaja voi tehdä omalta kannaltaan parhaita mahdollisia kulutusvalintoja.",
    options: [
      { id: "a", text: "Oikein" },
      { id: "b", text: "Väärin" },
    ],
    correctAnswerIds: ["a"],
  },
  {
    id: "C3",
    source: "norio",
    question:
      "Kuluttajaneuvonnan neuvontapalvelut ovat myös elinkeinonharjoittajien käytettävissä, mikä tarkoittaa, että yksittäisessä riidassa avustetaan sekä kuluttajaa että elinkeinonharjoittajaa.",
    options: [
      { id: "a", text: "Oikein" },
      { id: "b", text: "Väärin" },
    ],
    correctAnswerIds: ["b"],
  },
  {
    id: "C4",
    source: "norio",
    question: "Markkinatuomioistuin ei voi tuomita rangaistuksia.",
    options: [
      { id: "a", text: "Oikein" },
      { id: "b", text: "Väärin" },
    ],
    correctAnswerIds: ["a"],
  },
  {
    id: "C5",
    source: "norio",
    question:
      "Kuluttajat ja elinkeinonharjoittajat voivat saattaa asioita kuluttajariitalautakunnan käsiteltäväksi.",
    options: [
      { id: "a", text: "Oikein" },
      { id: "b", text: "Väärin" },
    ],
    correctAnswerIds: ["b"],
  },
  {
    id: "C6",
    source: "norio",
    question:
      "Suomessa on perinteisesti lähdetty ajatuksesta, että kuluttajat tutustuvat markkinointiin pintapuolisesti, kun taas EU:n kuluttajakäsityksen mukaan kuluttaja on aktiivinen tiedonetsijä.",
    options: [
      { id: "a", text: "Oikein" },
      { id: "b", text: "Väärin" },
    ],
    correctAnswerIds: ["a"],
  },
  {
    id: "C7",
    source: "norio",
    question:
      "Arvioitaessa sitä, onko sopimusehto kuluttajan kannalta kohtuuton, tai vaikkei olisi, johtaisiko sen soveltaminen kuitenkin tarkasteltavana olevassa tapauksessa kohtuuttomuuteen, on otettava huomioon kaikki asiaan vaikuttavat seikat. Kaikkia ihmisiä tulee kuitenkin kohdella samalla tavalla, mikä tarkoittaa, että esimerkiksi alaikäisten ja vanhusten osalta sovittelu ei voi tulla muita helpommin kyseeseen.",
    options: [
      { id: "a", text: "Oikein" },
      { id: "b", text: "Väärin" },
    ],
    correctAnswerIds: ["b"],
  },
  {
    id: "C8",
    source: "norio",
    question:
      "Kuluttajansuojariidoissa asiaa ei voi käsitellä käräjäoikeudessa, ellei asia ole ensin ollut käsiteltävänä kuluttajariitalautakunnassa.",
    options: [
      { id: "a", text: "Oikein" },
      { id: "b", text: "Väärin" },
    ],
    correctAnswerIds: ["b"],
  },
  {
    id: "C9",
    source: "norio",
    question: "Valitse väittämät, jotka pitävät paikkansa.",
    options: [
      {
        id: "a",
        text: "Lakiin perustuva velvollisuus antaa sopimuksentekotilanteessa tietoja toiselle osapuolelle ei sovi liberalistiseen sopimuskäsitykseen.",
      },
      {
        id: "b",
        text: "Kuluttajansuojalaissa on alusta asti ollut markkinointia koskevia säännöksiä.",
      },
      {
        id: "c",
        text: "Kuluttajansuojalaissa markkinoinnilla tarkoitetaan mm. sitä, mitä elinkeinonharjoittaja kertoo yksittäiselle kuluttajalle kaupantekotilanteessa.",
      },
      {
        id: "d",
        text: "Markkinointi ei ole hyvän tavan vastaista sillä perusteella, että joku yksittäinen kuluttaja tai jokin kuluttajaryhmä pitää markkinointia loukkaavana.",
      },
    ],
    correctAnswerIds: ["a", "b", "c", "d"],
  },
  {
    id: "C10",
    source: "norio",
    question: "Mikä seuraavista väittämistä pitää paikkansa?",
    options: [
      {
        id: "a",
        text: "Mainos, jonka mukaan kaikki haluavat olla mainostettavaa virvoitusjuomaa toisille tarjoavan ystäviä, ei voi olla hyvän tavan vastainen.",
      },
      {
        id: "b",
        text: "Kuluttajansuojalain mukainen sopimaton menettely liittyy ainoastaan markkinointiin.",
      },
      {
        id: "c",
        text: "Kuluttajansuojalain mukaan pelkkä totuudenvastaisten tai harhaanjohtavien tietojen antaminen ei ole kiellettyä itsessään vaan vain siinä tapauksessa, jos tällaiset tiedot ovat omiaan johtamaan siihen, että kuluttaja tekee ostopäätöksen tai muun kulutushyödykkeeseen liittyvän päätöksen, jota hän ei ilman annettuja tietoja olisi tehnyt.",
      },
      {
        id: "d",
        text: "KSL 2 luvun 8 a § (1211/2013) sisältää luettelon niistä tiedoista, jotka elinkeinonharjoittajan on ennen sopimuksen tekemistä annettava. Luettelo perustuu kuluttajaoikeusdirektiiviin (2011/83/EU). Kyse on tiedoista, jotka kuluttajalla on oltava ennen kulutushyödykesopimuksen tekemistä. Tiedot tulee aina antaa kuluttajalle henkilökohtaisesti.",
      },
    ],
    correctAnswerIds: ["c"],
  },
  {
    id: "C11",
    source: "norio",
    question: "Mikä seuraavista väittämistä pitää paikkansa?",
    options: [
      {
        id: "a",
        text: "Vaikka elinkeinonharjoittajat käyttävät kuluttajasopimuksissaan tyypillisesti vakiosopimusehtoja, yleiset vakiosopimusoikeuden säännöt ja periaatteet eivät voi tulla sovellettaviksi kuluttajasopimuksiin.",
      },
      {
        id: "b",
        text: "Kuluttajansuojalain kohtuuttomuussäännöstä sovellettaessa on lisäksi otettava huomioon sen taustalla oleva kuluttajasopimusten kohtuuttomista ehdoista annettu direktiivi (93/13/ETY), ns. sopimusehtodirektiivi. Direktiivin liitteenä on luettelo ehdoista, joita voidaan pitää kohtuuttomina. Kyseinen luettelo on tyhjentävä.",
      },
      {
        id: "c",
        text: "Kiellon käyttää kohtuutonta sopimusehtoa määrää kuluttaja-asiamiehen vaatimuksesta käräjäoikeus, joka voi myös antaa kiellon väliaikaisena, jolloin kielto on voimassa, kunnes asia on lopullisesti ratkaistu.",
      },
      {
        id: "d",
        text: "Sopimusten sitovuuden periaate tarkoittaa, että tehty sopimus pysyy sellaisenaan voimassa. Kun sopimuksen sovittelu merkitsee sopimuksen muuttumista, sovittelu on ristiriidassa mainitun periaatteen kanssa. Siitä huolimatta oikeusjärjestyksemme mukaan sopimusten sovittelu on mahdollista, eikä vain kuluttajasopimuksissa vaan sopimuksissa yleisestikin.",
      },
    ],
    correctAnswerIds: ["d"],
  },
  {
    id: "C12",
    source: "norio",
    question: "Mitkä seuraavista väittämistä pitävät paikkansa?",
    options: [
      {
        id: "a",
        text: "Kuluttajaneuvonta on nykyään valtakunnallinen, asiakkaille maksuton palvelu. Se on osa Kilpailu- ja kuluttajavirastoa (KKV).",
      },
      {
        id: "b",
        text: "Kuluttajariitalautakunta on riippumaton ja puolueeton kuluttajariita-asioita käsittelevä oikeussuojaelin.",
      },
      {
        id: "c",
        text: "Kuluttajan kannalta kuluttajariitalautakuntamenettelyn suuri etu tuomioistuinprosessiin verrattuna on, että menettely lautakunnassa on maksutonta.",
      },
      {
        id: "d",
        text: "Toisin kuin tuomioistuimilla, kuluttajariitalautakunnalla ei ole ratkaisupakkoa eli pakkoa ratkaista asia.",
      },
      {
        id: "e",
        text: "Kuluttajariitalautakunnan lisäksi on olemassa muitakin lautakuntia, jotka ratkovat kuluttajien välisiä rikoksia. Tällaisia ovat Vakuutuslautakunta, Pankkilautakunta ja Sijoituslautakunta.",
      },
    ],
    correctAnswerIds: ["a", "b", "c", "d"],
  },
  {
    id: "C13",
    source: "norio",
    question: "Mitkä seuraavista väittämistä pitävät paikkansa?",
    options: [
      {
        id: "a",
        text: "Kuluttajaoikeus voidaan jakaa kollektiiviseen (markkinaoikeudelliseen) ja individuaaliseen (sopimusoikeudelliseen) sääntelyyn sen perusteella, ketä sääntelyllä suojataan. Kollektiivista sääntelyä ei sovelleta yksittäisiin kuluttajan ja elinkeinonharjoittajan suhteisiin. Toisaalta kaikki kuluttajat voivat hyötyä siitä, että jokin lainvastainen menettely on kielletty.",
      },
      {
        id: "b",
        text: "Individuaalinen sääntely koostuu rajattua kuluttajaryhmää koskevista pakottavista velvoitteista, jotka määritetään valtioneuvoston asetuksella.",
      },
      {
        id: "c",
        text: "Vuosituhannen vaihteen jälkeen Euroopan unionissa on siirrytty enenevässä määrin käyttämään kuluttajansuojalainsäädännössä täys- eli maksimiharmonisointia. Se tarkoittaa, että direktiivi määrittää kuluttajansuojan tason, jota ei saa alittaa, mutta ei myöskään ylittää. Viime aikoina kuluttajaoikeutta on ruvettu kehittämään lisääntyvässä määrin myös EU:n asetuksin.",
      },
      {
        id: "d",
        text: "Yksi modernin sopimusoikeuden kehityspiirre on siirtyminen sopijapuolten välisestä yhteistoiminnasta kohti sopijapuolten vastakkainasettelua, jota on korostettu etenkin 1900-luvun jälkipuoliskolla Pohjoismaissa.",
      },
      {
        id: "e",
        text: "Kuluttajansuojalain (KSL) mukaan luonnollinen henkilö on aina kuluttaja, mutta kuluttaja ei ole aina luonnollinen henkilö.",
      },
    ],
    correctAnswerIds: ["a", "c"],
  },
  {
    id: "C14",
    source: "norio",
    question: "Mikä seuraavista väittämistä ei pidä paikkaansa?",
    options: [
      {
        id: "a",
        text: "Vaikka kuluttaja-asiamies on varsinaisesti valvontaviranomainen, hän voi omasta aloitteestaan saattaa kuluttajariitalautakunnan käsiteltäväksi ryhmävalituksena riita-asian, joka kuuluu lautakunnan toimivaltaan ja joka voidaan käsitellä lautakunnassa ryhmävalituksena.",
      },
      {
        id: "b",
        text: "Kuluttaja-asiamies määrittelee sen kuluttajaryhmän, jota ryhmävalitus koskee.",
      },
      {
        id: "c",
        text: "Kuluttaja-asiamiehelle on annettu oikeus panna vireille ryhmäkanne.",
      },
      {
        id: "d",
        text: "Kuluttaja ei automaattisesti pääse mukaan ryhmävalitukseen, vaan hänen tulee ilmoittaa halukkuudestaan olla valituksessa mukana (opt in -malli).",
      },
      {
        id: "e",
        text: "Ryhmäkanteella tarkoitetaan kannetta, jota kuluttaja-asiamies ajaa kanteessa määritellyn ryhmän puolesta siten, että asiassa annettava tuomio tulee myös ryhmän jäseniä sitovaksi.",
      },
    ],
    correctAnswerIds: ["d"],
  },
  {
    id: "C15",
    source: "norio",
    question: "Mitkä seuraavista väittämistä pitävät paikkansa?",
    options: [
      {
        id: "a",
        text: "Kuluttajien kannalta sopimattomasta menettelystä markkinoinnissa ja asiakassuhteissa annetulla valtioneuvoston asetuksella (601/2008) on saatettu kansallisesti voimaan sopimattomia kaupallisia menettelyjä koskevan direktiivin (2005/29/EY) liitteen I ns. musta lista eli luettelo kaupallisista menettelyistä, joita pidetään kaikissa olosuhteissa sopimattomina.",
      },
      {
        id: "b",
        text: "Kuluttajansuojalain (KSL) 4 luvun 3 §:ään (1259/1994) on otettu ennalta laadittuja sopimusehtoja koskeva niin sanottu epäselvyyssääntö: ”Jos tässä laissa tarkoitetun sopimuksen ehto on laadittu etukäteen ilman, että kuluttaja on voinut vaikuttaa sen sisältöön, ja ehdon merkityksestä syntyy epätietoisuutta, ehtoa on tulkittava kuluttajan hyväksi.”",
      },
      {
        id: "c",
        text: "Kuluttajansuojalaki (KSL) tulee sovellettavaksi vain elinkeinonharjoittajan ja kuluttajan väliseen suhteeseen ja vain niissä tilanteissa, joissa myyjänä tai markkinoijana on elinkeinonharjoittaja ja ostajana tai markkinoinnin kohteena kuluttaja.",
      },
      {
        id: "d",
        text: "Kuluttajansuojalain (KSL) elinkeinonharjoittajan käsite on tarkoitettu laajaksi. Ajatuksena on, että kyse on taloudelliseen tulokseen tähtäävästä toiminnasta, johon liittyy yrittäjäriski. Taloudellisen voiton tavoittelu itselle tai toiselle ei ole välttämätöntä, mutta yleensä elinkeinotoimintaan liittyy ansiotarkoitus.",
      },
      {
        id: "e",
        text: "Kuluttajansuojalain (KSL) mukaiset asiat on keskitetty käsiteltäväksi Vaasan hallinto-oikeudessa, jossa on myös tekniikan ja kaupan alaan perehtyneitä hallinto-oikeustuomareita. Myös kuluttajariitalautakunnan ratkaisuista voi valittaa Vaasan hallinto-oikeuteen.",
      },
    ],
    correctAnswerIds: ["a", "b", "c", "d"],
  },
  {
    id: "C16",
    source: "rajaesteet",
    question: "Mitkä seuraavista rajaesteisiin liittyvistä väittämistä pitävät paikkansa?",
    options: [
      {
        id: "a",
        text: "Ongelmat johtuvat pohjimmiltaan yleensä siitä, että eri maiden välillä liikkuviin henkilöihin sovelletaan usean eri maan lainsäädäntöä.",
      },
      {
        id: "b",
        text: "EU:n yhteensovittamisasetuksen (883/2004) 5 artiklassa määrätään toisen maan ”etuuksien, tulojen, tosiseikkojen tai tapahtumien rinnastamisesta”. Määräyksen laajentava tulkinta voi lisätä rajaesteitä.",
      },
      {
        id: "c",
        text: "Rajaesteitä esiintyy ainoastaan Pohjoismaiden välillä.",
      },
      {
        id: "d",
        text: "Sosiaaliturvajärjestelmien yhteensovittamisen hallintotoimikunta tulkitsee viime kädessä, mikä lainsäädäntö kuuluu EU:n yhteensovittamisasetusten soveltamisalaan ja mikä jää niiden ulkopuolelle.",
      },
      {
        id: "e",
        text: "Avoimia ja joustavia työmarkkinoita voidaan turvata muun muassa esteettömällä pääsyllä sosiaaliturvan piiriin.",
      },
    ],
    correctAnswerIds: ["a", "e"],
  },
  {
    id: "C17",
    source: "rajaesteet",
    question: "Mitkä niin sanottua neljän kuukauden sääntöä koskevat väittämät pitävät paikkansa?",
    options: [
      {
        id: "a",
        text: "Neljän kuukauden sääntö koskee Kelan hallinnoimien etuuksien lisäksi ansiosidonnaista työttömyysturvaa.",
      },
      {
        id: "b",
        text: "Neljän kuukauden säännön soveltamisalaan kuuluvat henkilöt, joiden oikeus Kelan etuuksiin määräytyy asumisen perusteella.",
      },
      {
        id: "c",
        text: "Neljän kuukauden sääntö tarkoittaa käytännössä neljän kuukauden odotusaikaa maahanmuuttoajankohdasta siihen saakka, että henkilö on oikeutettu asumisperusteiseen sosiaaliturvaan.",
      },
      {
        id: "d",
        text: "Neljän kuukauden sääntöön sisältyy vaatimus vähimmäispalkasta.",
      },
      {
        id: "e",
        text: "Neljän kuukauden sääntö vaikuttaa huomattavasti matkailun parissa työskenteleviin pohjoismaisiin kausityöntekijöihin.",
      },
    ],
    correctAnswerIds: ["d", "e"],
  },
  {
    id: "C18",
    source: "rajaesteet",
    question: "Mitä vientikelpoisuusperiaate tarkoittaa?",
    options: [
      {
        id: "a",
        text: "Henkilö voi maasta toiseen muuttaessaan viedä vammaisajoneuvonsa toiseen maahan samalla tavalla kuin muutkin omistamansa ajoneuvot.",
      },
      {
        id: "b",
        text: "Sosiaalietuuksien maksaminen turvataan riippumatta siitä, missä henkilö asuu.",
      },
      {
        id: "c",
        text: "Henkilökohtaista avustajaa tarvitsevan henkilön muuttaessa pysyvästi maasta toiseen avustajan työehdot säilyvät ennallaan, jos avustaja muuttaa henkilön mukana.",
      },
      {
        id: "d",
        text: "Pitkäaikaisen hoidon tarpeessa oleva henkilö voidaan siirtää Ruotsista Suomeen hoitotarpeen perusteella.",
      },
    ],
    correctAnswerIds: ["b"],
  },
  {
    id: "C19",
    source: "rajaesteet",
    question:
      "Perhekäsite on vakiintunut itsenäinen unionioikeudellinen käsite, joka rajoittaa jäsenvaltioiden mahdollisuutta määritellä käsitteen sisältöä jäsenvaltiokohtaisesti.",
    options: [
      { id: "a", text: "tosi" },
      { id: "b", text: "epätosi" },
    ],
    correctAnswerIds: ["b"],
  },
  {
    id: "C20",
    source: "rajaesteet",
    question:
      "Norja ja Islanti ovat ilmoittaneet, että eivät aio saattaa voimaan EU:n yhteensovittamisasetuksia 883/2004 ja 987/2009, koska Pohjoismainen sosiaalipalvelusopimus ja sosiaaliturvasopimus korvaavat edellä mainitut asetukset.",
    options: [
      { id: "a", text: "tosi" },
      { id: "b", text: "epätosi" },
    ],
    correctAnswerIds: ["b"],
  },
  {
    id: "C21",
    source: "rajaesteet",
    question:
      "Opiskelijan asuinmaan määräytyminen on yksiselitteistä, koska asuinmaa määräytyy ensisijaisesti EU:n yhteensovittamisasetuksen 883/2004 perusteella.",
    options: [
      { id: "a", text: "tosi" },
      { id: "b", text: "epätosi" },
    ],
    correctAnswerIds: ["b"],
  },
  {
    id: "C22",
    source: "rajaesteet",
    question:
      "Työperusteiset sosiaalietuudet määräytyvät työntekijän asuinmaan mukaan, jos työntekijä on asunut nykyisessä asuinmaassaan yhtäjaksoisesti vähintään kolme vuotta.",
    options: [
      { id: "a", text: "tosi" },
      { id: "b", text: "epätosi" },
    ],
    correctAnswerIds: ["b"],
  },
  {
    id: "C23",
    source: "rajaesteet",
    question:
      "EU:n yhteensovittamisasetusten 883/2004 ja 987/2009 tarkoituksena on sovittaa yhteen jäsenvaltioiden välillä liikkuvien henkilöiden oikeus sosiaaliturvaan.",
    options: [
      { id: "a", text: "tosi" },
      { id: "b", text: "epätosi" },
    ],
    correctAnswerIds: ["a"],
  },
  {
    id: "C24",
    source: "rajaesteet",
    question:
      "Työhön liittyvää kuntoutusta tarvitsevalla henkilöllä on EU-asetusten säännösten mukaisesti oikeus siihen, että hän voi saada toimenpiteitä asuinmaassaan ja samanaikaisesti rahaetuuksia aikaisemmasta työskentelymaastaan.",
    options: [
      { id: "a", text: "tosi" },
      { id: "b", text: "epätosi" },
    ],
    correctAnswerIds: ["a"],
  },
  {
    id: "C25",
    source: "rajaesteet",
    question: "Mitkä seuraavista perhe-etuuksiin liittyvistä väitteistä pitävät paikkansa?",
    options: [
      {
        id: "a",
        text: "Henkilö, joka ei asu vakituisesti Suomessa, voi olla oikeutettu Kelan hallinnoimiin etuuksiin työnteon perusteella.",
      },
      {
        id: "b",
        text: "EU-asetusten mukaan perhe saa perhe-etuuksia ensisijaisesti lapsen asuinmaasta, kun työskentelymaita on kaksi.",
      },
      {
        id: "c",
        text: "On EU:n yhteensovittamisasetusten vastaista, jos Suomen vanhempainrahan määrää laskettaessa ei oteta huomioon toisesta Pohjoismaasta saatua opintotukea.",
      },
      {
        id: "d",
        text: "Vanhempainvapaan korvauspäivät vähennetään eri Pohjoismaissa eri tavoin.",
      },
      {
        id: "e",
        text: "Mikään väitteistä ei pidä paikkaansa.",
      },
    ],
    correctAnswerIds: ["a", "b", "d"],
  },
  {
    id: "C26",
    source: "rajaesteet",
    question: "Mikä seuraavista palvelukoiriin liittyvistä väitteistä pitää paikkansa?",
    options: [
      {
        id: "a",
        text: "Kaikissa Pohjoismaissa palvelukoirien (pelastus-, räjähde- ja huumekoirien ja näkö- ja kuulovammaisten ja liikuntarajoitteisten opaskoirien) maahantuomista koskevat samat vaatimukset kuin seurakoiria. Myös maahantulon jälkeiset vaatimukset mm. rokotusten ja karanteenien osalta on yhdenmukaistettu Pohjoismaiden välillä.",
      },
      {
        id: "b",
        text: "Suomessa ja Tanskassa palvelukoirien (pelastus-, räjähde- ja huumekoirien ja näkö- ja kuulovammaisten ja liikuntarajoitteisten opaskoirien) maahantuomista koskevat samat vaatimukset kuin seurakoiria. Muissa Pohjoismaissa palvelukoirien maahantuonnille on asetettu eri vaatimukset kuin seurakoirien maahantuonnille.",
      },
      {
        id: "c",
        text: "Kaikissa Pohjoismaissa palvelukoirien (pelastus-, räjähde- ja huumekoirien ja näkö- ja kuulovammaisten ja liikuntarajoitteisten opaskoirien) maahantuomista koskevat samat vaatimukset kuin seurakoiria. Maahantulon jälkeisissä vaatimuksissa mm. rokotusten ja karanteenien osalta on eroja eri Pohjoismaiden välillä.",
      },
      {
        id: "d",
        text: "Kaikissa muissa Pohjoismaissa paitsi Islannissa palvelukoirien (pelastus-, räjähde- ja huumekoirien ja näkö- ja kuulovammaisten ja liikuntarajoitteisten opaskoirien) maahantuomista koskevat samat vaatimukset kuin seurakoiria. Islannissa palvelukoirien maahantuonnille ei ole asetettu yhtä tiukkoja vaatimuksia kuin seurakoirien maahantuonnille.",
      },
      {
        id: "e",
        text: "Mikään väitteistä ei pidä paikkaansa.",
      },
    ],
    correctAnswerIds: ["c"],
  },
  {
    id: "C27",
    source: "rajaesteet",
    question: "Täydennä siten, että lause on tosi. Sosiaaliturvaa koordinoiva EU-säännöstö…",
    options: [
      {
        id: "a",
        text: "ei ole voimassa Islannissa ja Norjassa miltään osin.",
      },
      {
        id: "b",
        text: "koskee vain ns. aktiivisia henkilöitä, jotka ovat työelämässä työntekijöinä tai itsenäisinä ammatinharjoittajina.",
      },
      {
        id: "c",
        text: "sisältää sähköistä tiedonvaihtoa koskevia säännöksiä.",
      },
      {
        id: "d",
        text: "ei ole suoraan toimeenpanokelpoista sääntelyä, koska sosiaaliturva kuuluu jäsenvaltioiden kansalliseen päätöksentekovaltaan.",
      },
    ],
    correctAnswerIds: ["c"],
  },
  {
    id: "C28",
    source: "rajaesteet",
    question: "Niin sanotun neljän kuukauden säännön mukaan…",
    options: [
      {
        id: "a",
        text: "Tanskasta Suomeen vakituisesti asumaan muuttanut henkilö on oikeutettu asumisperusteiseen sosiaaliturvaan sen jälkeen, kun muuttoajankohdasta on kulunut neljä kuukautta.",
      },
      {
        id: "b",
        text: "Norjassa asuva ja Suomessa työskentelevä henkilö voi saada oikeuden Kelan etuuksiin työnteon perusteella vasta sen jälkeen, kun hän on työskennellyt Suomessa vähintään neljä kuukautta keskimäärin vähintään 18 tuntia viikossa ja hänen saamansa palkka on vähintään alan työehtosopimuksen mukainen.",
      },
      {
        id: "c",
        text: "Ruotsissa asuva ja Suomessa työskentelevä henkilö voi saada oikeuden Kelan etuuksiin työnteon perusteella, vaikka olisi työskennellyt Suomessa alle neljä kuukautta, jos muut työperusteiset edellytykset täyttyvät.",
      },
      {
        id: "d",
        text: "työehtosopimuksiin kuulumattomalla alalla työskentelevä henkilö ei voi saada oikeutta Kelan etuuksiin työnteon perusteella.",
      },
      {
        id: "e",
        text: "henkilö ei voi saada työnteon perusteella oikeutta Kelan etuuksiin, jos hän on osa-aikaisessa alle neljä kuukautta kestävässä työsuhteessa.",
      },
    ],
    correctAnswerIds: ["c"],
  },
  {
    id: "C29",
    source: "rajaesteet",
    question:
      "Henkilön muuttaessa Suomeen ______päättää, kuuluuko asianomainen ______ hallinnoiman asumisperusteisen sosiaaliturvan piiriin.",
    options: [
      { id: "a", text: "asuinkunta; asuinkunnan" },
      { id: "b", text: "valtioneuvosto; valtioneuvoston" },
      { id: "c", text: "hyvinvointialue; hyvinvointialueen" },
      { id: "d", text: "Kela; Kelan" },
      { id: "e", text: "THL; THL:n" },
    ],
    correctAnswerIds: ["d"],
  },
  {
    id: "C30",
    source: "rajaesteet",
    question:
      "Suomessa henkilön, joka saapuu _________ ja tulee Suomessa työttömyyskassan jäseneksi, on liityttävä kassaan kuukauden kuluessa siitä, kun kyseisen _________toimeentuloturvajärjestelmän mukainen työttömyysturva on lakannut.",
    options: [
      { id: "a", text: "kolmannesta valtiosta; kolmannen valtion" },
      { id: "b", text: "BRICS-valtiosta; BRICS-valtion" },
      { id: "c", text: "EU- tai ETA-maasta; EU- tai ETA-maan" },
    ],
    correctAnswerIds: ["c"],
  },
];
