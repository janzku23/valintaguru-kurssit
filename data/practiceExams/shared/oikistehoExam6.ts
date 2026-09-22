import "server-only";
import type { PracticeExam } from "../types";

export const OIKISTEHO_EXAM_6_ARTICLE_URL =
  "https://www.edilex.fi/artikkelit/27627.pdf";

/**
 * Yhteinen Koe 6 OikisTeho-kurssille.
 *
 * Huom:
 * - Sama 2–4 vuorokauden valmistautumisohjeistus kuin muissa OikisTeho-kokeissa.
 * - Pitkä ohjeistus EI ole description-kentässä.
 * - intro sisältää näkymässä renderöitävän ohjeistuksen.
 * - "Jätän vastaamatta" poistetaan lähdevaihtoehdoista, koska
 *   PracticeExamRunner näyttää erillisen neutraalin "En osaa sanoa" -valinnan.
 */
export const oikisTehoExam6 = {
  id: "koe-6",
  version: 1,
  title: "Harjoitustentti 6",
  description:
    "60 minuutin ajastettu harjoitustentti, joka perustuu ennakkoon luettavaan akateemiseen artikkeliin.",
  durationMinutes: 60,

  articleUrl: OIKISTEHO_EXAM_6_ARTICLE_URL,

  intro: {
    eyebrow: "Oikeustieteen eriytyvä osio",
    title:
      "Näin suoritat oikeustieteen eriytyvän osion harjoitustentin",
    lead:
      "Harjoitustentin tarkoitus on simuloida aitoa pääsykoetilannetta. Tentti perustuu akateemiseen artikkeliin ja sisältää oikean kokeen rakennetta vastaavia kysymystyyppejä.",

    article: {
      label: "Koe 6:n ennakkomateriaali",
      title: "Lue artikkeli ennen harjoitustenttiä",
      description:
        "Avaa artikkeli alla olevasta painikkeesta ja tutustu siihen 2–4 vuorokauden ajan. Lue materiaali useaan otteeseen. Kun aloitat varsinaisen kokeen, sulje artikkeli pois näkyvistä.",
      url: OIKISTEHO_EXAM_6_ARTICLE_URL,
      buttonText: "Avaa artikkeli",
    },

    instructionsTitle:
      "Miten harjoitustentti suoritetaan?",

    steps: [
      {
        number: 1,
        title: "Tutustu ennakkomateriaaliin",
        text:
          "Avaa artikkeli ja lue sitä 2–4 vuorokautta. Lue artikkeli useaan otteeseen ennen kokeen aloittamista.",
      },
      {
        number: 2,
        title: "Sulje artikkeli ennen koetta",
        text:
          "Oikeassa koetilanteessa ennakkomateriaali ei ole käytettävissä. Tee myös tämä harjoitustentti ilman artikkelia näkyvissä.",
      },
      {
        number: 3,
        title: "Tee 60 minuutin harjoitustentti",
        text:
          "Kun olet valmis, käynnistä koe. Sinulla on 60 minuuttia aikaa vastata artikkeliin perustuviin kysymyksiin.",
      },
      {
        number: 4,
        title: "Tarkista tuloksesi",
        text:
          "Tentin jälkeen näet pisteesi ja voit käydä läpi vastauksesi, vahvuutesi sekä kehityskohteesi.",
      },
    ],

    notice:
      "Älä aloita koetta ennen kuin olet lukenut ennakkomateriaalin. Kun koe käynnistyy, tarkoitus on vastata ilman artikkelia.",
    closing: "Onnea harjoitteluun! 💪",
  },

  sections: [
    {
      id: "koe-6-kysymykset",
      title: "Koe 6 – Yrityssaneeraus ja viivyttelyluonteiset hakemukset",
      questions: [
        {
          id: "oikis-koe-6-q1",
          prompt: "Mitkä ovat yrityssaneerauslain tarkoitukset?",
          options: [
            {
              id: "a",
              text: "Vahvistaa velkojien asemaa velallisen ksutannuksella.",
            },
            {
              id: "b",
              text: "Asettaa velallisille mahdollisuus tervehdyttää yritystoimintansa",
            },
            {
              id: "c",
              text: "Ehkäistä velallisen mahdollisuuksia oman edun tavoitteluun velkojien kustannuksella",
            },
            {
              id: "d",
              text: "Luoda tasapainoa velallisen ja velkojen etujen välille",
            },
          ],
          correctAnswerId: "b",
          correctAnswerIds: ["b", "c", "d"],
          explanation: "Jo alkuperäisessä laissa pyrittiin luomaan tasapainoa velallisen ja velkojien etujen välillä ja pyrittiin ehkäisemään velallisen mahdollisuuksia menettelyn väärinkäyttöön ja oman edun tavoitteluun velkojien kustannuksella. Menettely oli tuolloin – ja on edelleen – suunnattu rehellisille velallisille, jotka vilpittömästi pyrkivät tervehdyttämään toimintansa (s. 1).",
        },

        {
          id: "oikis-koe-6-q2",
          prompt: "Yrityssaneerauslain mukainen saneeraushakemus aiheuttaa lähtökohtaisesti",
          options: [
            {
              id: "a",
              text: "automaattisen konkurssin",
            },
            {
              id: "b",
              text: "täytäntöönpanokiellon",
            },
            {
              id: "c",
              text: "verovelan anteeksiannon",
            },
            {
              id: "d",
              text: "rikosoikeudellisen tutkinnan",
            },
          ],
          correctAnswerId: "b",
          explanation: "Artikkelin sivuilla 1-2 todetaan, että saneeraushakemushakemus estää velkojien perintätoimet ja esimerkiksi estää konkurssin hakemisen (s. 1-2).",
        },

        {
          id: "oikis-koe-6-q3",
          prompt: "Mikä on artikkelin mukaan viivyttelyluonteiselle saneeraushakemukselle ominaista?",
          options: [
            {
              id: "a",
              text: "realistinen tervehdyttämissuunnitelma",
            },
            {
              id: "b",
              text: "selkeä maksukyky",
            },
            {
              id: "c",
              text: "maksukyvyttömyys ilman todellista saneerausmahdollisuutta",
            },
            {
              id: "d",
              text: "velkojien yksimielinen tuki",
            },
          ],
          correctAnswerId: "c",
          explanation: "Viivyttelyluontoinen saneeraus - termillä viitataankin yrityssaneeraukseen tai saneeraushakemukseen, jolle ei ilmeisesti ole muuta tarkoitusta kuin konkurssiin asettamisen estäminen. Tällä tarkoitetaan kaikkia menettelyyn hakeutuvia yrityksiä, riippumatta siitä, aloitetaanko saneerausmenettely vai hylätäänkö saneeraushakemus. Näitä menettelyn piirteitä velallisyritys saattaa pyrkiä hyödyntämään. Velallinen pitää itsellään määräysvallan ja konkurssiin asettaminen estyy hakemuksen vireilläoloajan (s. 2). Tästä artikkelin kohdasta on luettavissa, että kyse on siis saneerausmenettelyn hakemisesta, vaikka todellisuudessa tarkoitus on vain viivytellä konkurssin kanssa.",
        },

        {
          id: "oikis-koe-6-q4",
          prompt: "Mitä tarkoittaa keinotteluluonteinen saneeraus?",
          options: [
            {
              id: "a",
              text: "saneeraushakemusta, jossa velallinen käyttää myönnettyä menettelyä oman edun tavoitteluun",
            },
            {
              id: "b",
              text: "saneeraushakemusta, johon tarvitaan velkojien suostumus",
            },
            {
              id: "c",
              text: "saneeraushakemusta, jossa velallisen henkilökohtainen varallisuus koitetaan piilottaa ennen mahdollista konkurssihakemusta",
            },
            {
              id: "d",
              text: "saneeraushakemusta, jossa yrityksen pääoma määrittelee, myönnetäänkö menettely vai ei",
            },
          ],
          correctAnswerId: "a",
          explanation: "Keinotteluluonteinen saneeraus tarkoittaa sellaista yrityssaneerausta, jossa velallinen tai joku velallisen organisaatiosta käyttää saneeraushakemusta tai myönnettyä menettelyä oman edun tavoitteluun eikä elinkelpoisen yritystoiminnan tervehdyttämiseen (s. 2)",
        },

        {
          id: "oikis-koe-6-q5",
          prompt: "Mikä on YSL:n nykytilan keskeinen ongelma artikkelin mukaan?",
          options: [
            {
              id: "a",
              text: "saneeraushakemusten vähäinen määrä",
            },
            {
              id: "b",
              text: "hakemusten käsittelyn nopeus",
            },
            {
              id: "c",
              text: "perusteettomien hakemusten mahdollisuus viivyttää konkurssia",
            },
            {
              id: "d",
              text: "velkojien liian vahva asema",
            },
          ],
          correctAnswerId: "c",
          explanation: "Kappaleessa 1 käydään tätä problematiikkaa lävitse (s. 1-3)",
        },

        {
          id: "oikis-koe-6-q6",
          prompt: "Mikä on yrityssaneeraustyöryhmän muutosehdotus lakiin viivyttelyyn puuttumiseksi?",
          options: [
            {
              id: "a",
              text: "Että konkurssihakemusta ei voi pistää vireille ennen kuin on haettu saneerausmenettelyn aloittamista",
            },
            {
              id: "b",
              text: "Että konkurssihakemusta ei voi pistää vireille ennen kuin saneerausmenettelystä on ratkaisu",
            },
            {
              id: "c",
              text: "Että konkurssihakemuksen voisi ratkaista ennen saneeraushakemuksen ratkaisua, mikäli edellytykset täyttyisivät",
            },
            {
              id: "d",
              text: "Että konkurssihakemusta voisi käsitellä yhtäaikaisesti saneeraushakemuksen kanssa",
            },
          ],
          correctAnswerId: "d",
          explanation: "Yrityssaneeraustyöryhmä on ehdottanut viivyttelyyn puuttumiseksi, että YSL 24 §:n sanamuotoa muutettaisiin siten, että konkurssihakemuksen käsittelyä on jatkettava mutta hakemusta ei saa ratkaista ennen kuin päätös saneerausmenettelyn aloittamisesta on tehty (s. 6)",
        },

        {
          id: "oikis-koe-6-q7",
          prompt: "Mistä artikkelin tilastoja on hankittu?",
          options: [
            {
              id: "a",
              text: "Oikeusrekisterikeskuksen maksukyvyttömyysrekisteristä",
            },
            {
              id: "b",
              text: "PRH:n järjestelmästä",
            },
            {
              id: "c",
              text: "Finanssivalvonnan rekisteriyksiköstä",
            },
            {
              id: "d",
              text: "Aluehallintovirastojen järjestelmistä",
            },
          ],
          correctAnswerId: "a",
          correctAnswerIds: ["a", "b"],
          explanation: "Kerätyn aineiston lisäksi tilastojen laatimisessa on käytetty hyväksi julkisen vallan tarjoamia tiedonhakupalveluja. Enimmäkseen on käytetty Oikeusrekisterikeskuksen tarjoamaa maksukyvyttömyysrekisteriä sekä Patentti- ja rekisterihallituksen yritys- ja yhteisötietojärjestelmän yrityshakua (s. 4)",
        },

        {
          id: "oikis-koe-6-q8",
          prompt: "Mihin viivyttelytarkoituksessa tehty hakemus voi johtaa?",
          options: [
            {
              id: "a",
              text: "velkojien oikeuksien merkittävään heikentymiseen",
            },
            {
              id: "b",
              text: "automaattiseen velkojen anteeksiantoon",
            },
            {
              id: "c",
              text: "rikostuomioon",
            },
            {
              id: "d",
              text: "yrityksen välittömään elpymiseen",
            },
          ],
          correctAnswerId: "a",
          explanation: "Viivyttely on mahdollista, koska YSL 24 §:n mukaisesti vireillä oleva saneeraushakemus estää tuomioistuinta tekemästä ratkaisua konkurssiasiassa ennen kuin saneeraushakemus on ratkaistu. Merkityksellinen on myös YSL 29.1 §, jonka mukaan velallisella säilyy menettelyn alkamisen jälkeenkin valta määrätä omaisuudestaan ja toiminnastaan. Konkurssissa velallisen edustajat puolestaan menettävät määräysvaltansa. Näitä menettelyn piirteitä velallisyritys saattaa pyrkiä hyödyntämään. Velallinen saattaa pyrkiä oman määräysvaltansa säilyttämiseen monesta syystä. Velallinen pitää itsellään määräysvallan ja konkurssiin asettaminen estyy hakemuksen vireilläoloajan. Velallinen saattaa pyrkiä siirtämään liiketoimintansa uuteen yhtiöön, siirtämään arvokasta omaisuutta pois velkojien ulottuvilta, kerryttämään velvoitteita velkojien vahingoksi tai tekemään aiempien väärinkäytösten selvittämistä haittaavia toimia. (s. 2).",
        },

        {
          id: "oikis-koe-6-q9",
          prompt: "Milloin YSL:n mukaan hakemus voidaan hylätä?",
          options: [
            {
              id: "a",
              text: "Jos velkojat vastustavat hakemusta",
            },
            {
              id: "b",
              text: "Jos yrityksellä ei ole liiketoimintaa",
            },
            {
              id: "c",
              text: "Jos yrityksellä ei ole edellytyksiä saneeraukseen",
            },
            {
              id: "d",
              text: "Jos yritys on pieni",
            },
          ],
          correctAnswerId: "c",
          explanation: "YSL:n tarkoituksena ei ole antaa mahdollisuutta sellaisen yritystoiminnan ylläpitämiseen, jonka jatkumiselle ei ole liiketaloudellisia edellytyksiä, joten tällaista menettelyä voidaan pitää haitallisena (s. 2)",
        },

        {
          id: "oikis-koe-6-q10",
          prompt: "Mikä on viivyttelysaneerauksen keskeinen vaikutus konkurssiin tämän hetkisen lainsäädännön mukaan?",
          options: [
            {
              id: "a",
              text: "konkurssin automaattinen raukeaminen",
            },
            {
              id: "b",
              text: "konkurssin lykkääntyminen",
            },
            {
              id: "c",
              text: "konkurssivelkojen mitätöityminen",
            },
            {
              id: "d",
              text: "konkurssituomarin vaihtuminen",
            },
          ],
          correctAnswerId: "b",
          explanation: "Viivyttely on mahdollista, koska YSL 24 §:n mukaisesti vireillä oleva saneeraushakemus estää tuomioistuinta tekemästä ratkaisua konkurssiasiassa ennen kuin saneeraushakemus on ratkaistu (s. 2).",
        },

        {
          id: "oikis-koe-6-q11",
          prompt: "Mihin artikkelin kriittinen arvio erityisesti kohdistuu?",
          options: [
            {
              id: "a",
              text: "velallisiin",
            },
            {
              id: "b",
              text: "velkojiin",
            },
            {
              id: "c",
              text: "sääntelyjärjestelmän rakenteeseen",
            },
            {
              id: "d",
              text: "pankkeihin",
            },
          ],
          correctAnswerId: "c",
          explanation: "Artikkelissa kritisoidaan suuresti sitä, että konkurssihakemuksen viivyttäminen on mahdollista saneeraushakemuksella. Tämä vaikuttaa heikentävästi velkojien asemaan.",
        },

        {
          id: "oikis-koe-6-q12",
          prompt: "Mikä lainkohta säätää konkurssihakemuksen ratkaisemisen lykkäyksestä, kunnes saneerausmenettelyn aloittamisesta on päätetty?",
          options: [
            {
              id: "a",
              text: "YSL 18 §",
            },
            {
              id: "b",
              text: "YSL 20 §",
            },
            {
              id: "c",
              text: "YSL 22 §",
            },
            {
              id: "d",
              text: "YSL 24 §",
            },
          ],
          correctAnswerId: "d",
          explanation: "Nykyisin konkurssihakemuksen käsittelyn jatkamista ei lain sanamuodossa estetä, mutta ratkaisemista on lykättävä, kunnes saneerausmenettelyn aloittamisesta on päätetty (YSL 24 §) (s. 6).",
        },

        {
          id: "oikis-koe-6-q13",
          prompt: "Mihin artikkelissa käsitelty oikeusministeriön ehdotus pyrkii?",
          options: [
            {
              id: "a",
              text: "poistamaan saneerausmenettelyn kokonaan",
            },
            {
              id: "b",
              text: "vahvistamaan velallisen asemaa",
            },
            {
              id: "c",
              text: "estämään perusteettomien hakemusten strategisen käytön",
            },
            {
              id: "d",
              text: "rajoittamaan konkurssimenettelyä",
            },
          ],
          correctAnswerId: "c",
          explanation: "Näiden muuttujien ja niistä johdettavissa olevien pohjalta arvioidaankin oikeusministeriön mietinnössä 2022:18 ehdotettuja lainmuutoksia ja niiden toimivuutta viivyttelyluonteisiin saneeraushakemuksiin puuttumiseksi (s. 6)",
        },

        {
          id: "oikis-koe-6-q14",
          prompt: "Montako yritystä jätti vuonna 2019 vähintään kaksi saneeraushakemusta?",
          options: [
            {
              id: "a",
              text: "6",
            },
            {
              id: "b",
              text: "10",
            },
            {
              id: "c",
              text: "12",
            },
            {
              id: "d",
              text: "16",
            },
          ],
          correctAnswerId: "c",
          explanation: "Aineistossa oli 12 yritystä, jotka jättivät vähintään kaksi saneeraushakemusta (s. 9).",
        },

        {
          id: "oikis-koe-6-q15",
          prompt: "Mitä on saalistusluonteinen saneerauspalvelu?",
          options: [
            {
              id: "a",
              text: "Saneerauspalvelun tarjoaja houkuttelee velallisen jättämään saneeraushakemuksen",
            },
            {
              id: "b",
              text: "Saneerauspalvelun tarjoaja pakottaa velallisen jättämään saneeraushakemuksen",
            },
            {
              id: "c",
              text: "Saneerauspalvelun tarjoaja tekee saneeraushakemuksen velallisen puolesta",
            },
            {
              id: "d",
              text: "Saneerauspalvelun tarjoaja tekee saneeraushakemuksen yhdessä velallisen kanssa.",
            },
          ],
          correctAnswerId: "a",
          explanation: "Mietinnössä esitetään melko huolestunut kannanotto ns. saalistusluonteisesta saneerauspalvelujen markkinoinnista velallisille, joita velkoja on hakenut konkurssiin. Tällöin hakemusta ei laadita aidosti velallisen aloitteesta, vaan saneerauspalvelun tarjoaja houkuttelee velallisen jättämään saneeraushakemuksen (s. 11).",
        },

        {
          id: "oikis-koe-6-q16",
          prompt: "Suurimmassa osassa saneeraushakemuksien laadinnassa käytetään velallisyrityksen ulkopuolista asiamiestä.",
          options: [
            {
              id: "a",
              text: "Oikein",
            },
            {
              id: "b",
              text: "Väärin",
            },
          ],
          correctAnswerId: "a",
          explanation: "Aineistosta huomataan, että saneeraushakemuksen tekemiseen käytetään velallisyrityksen ulkopuolista asiamiestä 74,6 % (N=319) hakemuksista (s. 11).",
        },

        {
          id: "oikis-koe-6-q17",
          prompt: "Oikein vai väärin: Saneeraushakemusten laadinnassa auttavat asiamiehet ovat artikkelin mukaan useimmiten juristeja.",
          options: [
            {
              id: "a",
              text: "Oikein",
            },
            {
              id: "b",
              text: "Väärin",
            },
          ],
          correctAnswerId: "b",
          explanation: "Näiden toimijoiden kotisivuja ja hakemuksia tutkimalla selviää nopeasti, että kyseessä ovat kuvattuja saneerauspalveluja tarjoavat niin sanotut saneerauskonsultit. Näitä toimijoita voidaan luonnehtia yrityksen kriiseihin keskittyneiksi konsultointipalveluiksi tai puhtaasti saneeraushakemuksiin keskittyneiksi palveluntarjoajiksi (s. 11). Artikkelissa ei puhuta aiheesta sen enempää, eli ei voida olettaa näiden palveluntarjoajien olevan juristeja.",
        },

        {
          id: "oikis-koe-6-q18",
          prompt: "Mitkä seuraavista väittämistä ovat oikein liittyen saneerauskonsultteihin?",
          options: [
            {
              id: "a",
              text: "Saneeraushakemus vaatii aina saneerauskonsultin konsultointia.",
            },
            {
              id: "b",
              text: "Saneerauskonsulttien käyttö edellyttää yrityksen mahdollisuutta liiketoiminnan tervehdyttämiseen.",
            },
            {
              id: "c",
              text: "Saneerauskonsulttien palvelun käyttö lisää todennäköisyyksiä saneeraushakemuksen hyväksymiseen.",
            },
            {
              id: "d",
              text: "Saneerauskonsultit käyttävät “saalistavaa” toimintamallia.",
            },
          ],
          correctAnswerId: "c",
          correctAnswerIds: ["c", "d"],
          explanation: "Näyttäisi siis aineiston valossa siltä, että saneerauskonsulttien palvelun käyttö nostaa todennäköisyyksiä saneeraushakemuksen hyväksymisestä. Syy-yhteys saneerausohjelman vahvistamiseen ja konkurssin välttämiseen ei ole yhtä suora, sillä saneerausmenettelyn alettua konsulttipalvelulla ei ole enää roolia (s. 13) Mietinnössä esitetty ”saalistava” toimintamalli on olemassa ja suhteellisen yleinen (s. 12)",
        },

        {
          id: "oikis-koe-6-q19",
          prompt: "Mitä seuraavista artikkelin kriittinen analyysi käsittelee eniten?",
          options: [
            {
              id: "a",
              text: "Velallisen asema on liian heikko",
            },
            {
              id: "b",
              text: "Sääntely ei riittävästi erottele elinkelpoisia ja elinkelvottomia yrityksiä",
            },
            {
              id: "c",
              text: "Velkojat käyttävät järjestelmää väärin",
            },
            {
              id: "d",
              text: "Konkurssi on liian harvinainen",
            },
          ],
          correctAnswerId: "b",
          explanation: "Koko artikkeli pohjautuu siihen, kuinka saneerausta haetaan välillä tilanteissa, joissa konkurssin tiedetään olevan välttämätön, mutta halutaan hieman ns. lisäaikaa ja pitää yrityksen hallinto omistajalla.",
        },

        {
          id: "oikis-koe-6-q20",
          prompt: "Mitä YSL 93 § sääntelee?",
          options: [
            {
              id: "a",
              text: "Vahingonkorvausvelvollisuudesta, mikäli saneerausmenettely laitetaan vireille perusteettomasti.",
            },
            {
              id: "b",
              text: "Velkojien velvollisuudesta saneerausmenettelyssä.",
            },
            {
              id: "c",
              text: "Velkojien asemasta saneerausmenettelyssä.",
            },
            {
              id: "d",
              text: "Velallisen maksukyvyn palautumisesta saneerausmenettelyn alkamisen jälkeen.",
            },
          ],
          correctAnswerId: "a",
          explanation: "YSL 93 §: Artikkelin mukaan nykyisin YSL 93 §:ssä säädetään, että se, joka tahallaan tai huolimattomuudesta panee vireille ilmeisen perusteettoman hakemuksen saneerausmenettelystä, on velvollinen korvaamaan vahingon, joka velalliselle tai velkojalle tämän vuoksi aiheutuu (s. 13).",
        },

        {
          id: "oikis-koe-6-q21",
          prompt: "Missä ajassa hakijan tulee korjata puutteellista saneeraushakemustaan?",
          options: [
            {
              id: "a",
              text: "Kahden viikon kuluessa pyynnöstä",
            },
            {
              id: "b",
              text: "Kuukauden kuluessa pyynnöstä",
            },
            {
              id: "c",
              text: "Kohtuullisessa ajassa",
            },
            {
              id: "d",
              text: "Määräajassa",
            },
          ],
          correctAnswerId: "d",
          explanation: "Jos hakemus on jäänyt puutteelliseksi taikka on epäselvä tai sekava, käräjäoikeus kehottaa hakijaa määräajassa korjaamaan hakemustaan, jos se on asian käsittelemiseksi välttämätöntä. Samalla hakijalle ilmoitetaan, millä tavalla hakemus on puutteellinen, epäselvä tai sekava, ja että hakemus voidaan jättää tutkimatta tai hylätä, jos hakija ei noudata täydentämiskehotust (s. 15)",
        },

        {
          id: "oikis-koe-6-q22",
          prompt: "Oikein vai väärin: Velallisen toiminnan aiheettomasta jatkamisesta aiheutuneita velkojien tappioita tai konkurssiin asettamisen viivästymisen vuoksi vähentynyttä jako-osuutta voidaan vaatia korvattavaksi.",
          options: [
            {
              id: "a",
              text: "Oikein",
            },
            {
              id: "b",
              text: "Väärin",
            },
          ],
          correctAnswerId: "b",
          explanation: "Artikkelin mukaan: “Epäselväksi jää vielä, voidaanko esimerkiksi velallisen toiminnan aiheettomasta jatkamisesta aiheutuneita velkojien tappioita tai konkurssiin asettamisen viivästymisen vuoksi vähentynyttä jako-osuutta vaatia korvattavaksi” (s. 14-15).",
        },

        {
          id: "oikis-koe-6-q23",
          prompt: "Mikä seuraavista on oikein? Artikkelin mukaan velallisen maksukyvyttömyys yksinään…",
          options: [
            {
              id: "a",
              text: "riittää aina saneeraukseen",
            },
            {
              id: "b",
              text: "estää saneerauksen",
            },
            {
              id: "c",
              text: "ei riitä ilman tervehdyttämismahdollisuutta",
            },
            {
              id: "d",
              text: "poistaa konkurssin",
            },
          ],
          correctAnswerId: "c",
          explanation: "Menettely oli tuolloin – ja on edelleen – suunnattu rehellisille velallisille, jotka vilpittömästi pyrkivät tervehdyttämään toimintansa. Menettelyyn ei tulisi päästä, jos on perusteltua syytä olettaa, että hakemuksen pääasiallisena tarkoituksena on velkojan perintätoimien estäminen tai muu velkojan taikka velallisen oikeuden loukkaaminen (YSL 7.1 §:n 4 kohta) (s. 1-2).",
        },

        {
          id: "oikis-koe-6-q24",
          prompt: "Oikein vai väärin: Suurimmassa osassa aineiston tapauksista tuomioistuin esitti saneeraushakemuksen täydennyskehotuksen.",
          options: [
            {
              id: "a",
              text: "Oikein",
            },
            {
              id: "b",
              text: "Väärin",
            },
          ],
          correctAnswerId: "a",
          explanation: "Aineiston 319 tapauksesta tuomioistuin esitti hakemuksen täydennyskehotuksen 189 (59,2 %) tapauksessa (s. 16)",
        },

        {
          id: "oikis-koe-6-q25",
          prompt: "Artikkelin mukaan sääntelyn kehittämisessä on huomioitava",
          options: [
            {
              id: "a",
              text: "yksinomaan velallisen etu",
            },
            {
              id: "b",
              text: "tasapaino velallisen ja velkojien välillä",
            },
            {
              id: "c",
              text: "osakkeenomistajien etu",
            },
            {
              id: "d",
              text: "pankkien etu",
            },
          ],
          correctAnswerId: "b",
          explanation: "Näin ollen, kun on rajattu pois ohjelman vahvistamiseen päättyneet tapaukset, huomataan, että lisäaikapyynnöillä saavutettava aikaetu kasvaa. Tämä itsessään viittaa vahvasti siihen, että lisäaikapyynnöillä konkurssin viivyttäminen on todellinen toimintamalli. Päätelmää tukee myös se havainto, että konkurssihakemus on selkeästi useammin vireillä ennen saneeraushakemusta tapauksissa, joissa myös esitetään lisäaikapyyntö (s. 18-19)",
        },

        {
          id: "oikis-koe-6-q26",
          prompt: "Oikein vai väärin: Saneeraushakemuksen vireilletulosta konkurssiin asettamiseen kului keskimäärin 138 päivää.",
          options: [
            {
              id: "a",
              text: "Oikein",
            },
            {
              id: "b",
              text: "Väärin",
            },
          ],
          correctAnswerId: "b",
          explanation: "Saneeraushakemuksen vireilletulosta konkurssiin asettamiseen kului keskimäärin 205 päivää (s. 18)",
        },

        {
          id: "oikis-koe-6-q27",
          prompt: "Mikä on artikkelin keskeinen johtopäätös?",
          options: [
            {
              id: "a",
              text: "Saneerauslaki tulee kumota",
            },
            {
              id: "b",
              text: "Järjestelmää tulee kehittää tarkentamalla edellytysarviointia",
            },
            {
              id: "c",
              text: "Velkojien asema tulee poistaa",
            },
            {
              id: "d",
              text: "Konkurssi tulee ensisijaiseksi kaikissa tilanteissa",
            },
          ],
          correctAnswerId: "b",
          explanation: "Tämä käy ilmi artikkelin sivun 19-20 johtopäätöksistä.",
        },

      ],
    },
  ],
} satisfies Omit<PracticeExam, "courseId">;
