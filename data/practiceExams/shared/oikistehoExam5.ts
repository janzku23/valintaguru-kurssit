import "server-only";
import type { PracticeExam } from "../types";

export const OIKISTEHO_EXAM_5_ARTICLE_URL =
  "https://www.edilex.fi/artikkelit/100055.pdf";

/**
 * Yhteinen Koe 5 OikisTeho-kurssille.
 *
 * Huom:
 * - Sama 2–4 vuorokauden valmistautumisohjeistus kuin muissa OikisTeho-kokeissa.
 * - Pitkä ohjeistus EI ole description-kentässä.
 * - intro sisältää näkymässä renderöitävän ohjeistuksen.
 * - "Jätän vastaamatta" poistetaan lähdevaihtoehdoista, koska
 *   PracticeExamRunner näyttää erillisen neutraalin "En osaa sanoa" -valinnan.
 */
export const oikisTehoExam5 = {
  id: "koe-5",
  version: 1,
  title: "Harjoitustentti 5",
  description:
    "60 minuutin ajastettu harjoitustentti, joka perustuu ennakkoon luettavaan akateemiseen artikkeliin.",
  durationMinutes: 60,

  articleUrl: OIKISTEHO_EXAM_5_ARTICLE_URL,

  intro: {
    eyebrow: "Oikeustieteen eriytyvä osio",
    title:
      "Näin suoritat oikeustieteen eriytyvän osion harjoitustentin",
    lead:
      "Harjoitustentin tarkoitus on simuloida aitoa pääsykoetilannetta. Tentti perustuu akateemiseen artikkeliin ja sisältää oikean kokeen rakennetta vastaavia kysymystyyppejä.",

    article: {
      label: "Koe 5:n ennakkomateriaali",
      title: "Lue artikkeli ennen harjoitustenttiä",
      description:
        "Avaa artikkeli alla olevasta painikkeesta ja tutustu siihen 2–4 vuorokauden ajan. Lue materiaali useaan otteeseen. Kun aloitat varsinaisen kokeen, sulje artikkeli pois näkyvistä.",
      url: OIKISTEHO_EXAM_5_ARTICLE_URL,
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
      id: "koe-5-kysymykset",
      title: "Koe 5 – Lyhytvuokrauksen käyttötarkoitussääntely",
      questions: [
        {
          id: "oikis-koe-5-q1",
          prompt: "Mikä oikeudellinen ongelma liittyy lyhytvuokrauksen sääntelyyn artikkelin mukaan?",
          options: [
            {
              id: "a",
              text: "Vuokrasopimusoikeuden tulkintaan",
            },
            {
              id: "b",
              text: "Rakennusvalvonnan toimivallan puutteeseen",
            },
            {
              id: "c",
              text: "Käyttötarkoituksen muutoksen rajanvetoon asumisen ja majoitustoiminnan välillä",
            },
            {
              id: "d",
              text: "Verotukselliseen epäselvyyteen",
            },
          ],
          correctAnswerId: "c",
          explanation: "Koko artikkelissa korostetaan, että keskeinen kysymys on, milloin lyhytvuokraus muodostaa majoitustoimintaa ja siten käyttötarkoituksen muutoksen (asuminen → majoitus). Matkailun ja asunto- ja majoitusmarkkinoiden vastakkainasettelun käyttötarkoitussääntelystä ja RakL:n uudistamista koskevasta lainvalmistelusta on tullut kamppailevien intressien näyttämö, jossa lyhytvuokraukseen eri tavoin asemoituvat intressiryhmät pyrkivät vaikuttamaan itse ilmiöön ja vastapuoliin sääntelyn välityksellä (s. 5).",
        },

        {
          id: "oikis-koe-5-q2",
          prompt: "Mihin käyttötarkoitussääntely perustuu ensisijaisesti artikkelin mukaan?",
          options: [
            {
              id: "a",
              text: "Huoneenvuokralakiin",
            },
            {
              id: "b",
              text: "Rakennuslakiin / rakentamislakiin",
            },
            {
              id: "c",
              text: "Kuntalakiin",
            },
            {
              id: "d",
              text: "Maankäyttösopimuksiin",
            },
          ],
          correctAnswerId: "b",
          explanation: "Käyttötarkoitus määräytyy rakentamista koskevan lainsäädännön perusteella (rakennuslaki/rakentamislaki) Tämä käy ilmi ensimmäisen kerran esimerkiksi sivulta 3, jossa todetaan, että tämän artikkelin tavoitteena on rakentaa kokonaiskuvaa RakL:ssa toteutettavan lyhytvuokraussääntelyn oikeudellisista ja yhteiskunnallisista reunaehdoista, jotka kumpuavat käyttötarkoitussääntelyn järjestelmästä ja pyrkimyksestä hallita asuntojen matkailukäytön kielteisiä vaikutuksia (s. 3-4).",
        },

        {
          id: "oikis-koe-5-q3",
          prompt: "Mitkä edellytykset rakennuskohteen on täytettävä RakL 5.1 §:n mukaan?",
          options: [
            {
              id: "a",
              text: "Kohteen on oltava viihtyisä",
            },
            {
              id: "b",
              text: "Kohteen on oltava sosiaalisesti toimiva",
            },
            {
              id: "c",
              text: "Kohteen on oltava järkevien etäisyyksien päässä palveluista",
            },
            {
              id: "d",
              text: "Kohteen on oltava turvallinen",
            },
          ],
          correctAnswerId: "a",
          correctAnswerIds: ["a", "b", "d"],
          explanation: "Rakennuskohteen on muun ohella RakL 5.1 §:n mukaan oltava käyttötarkoitukseensa soveltuva ja edistettävä terveellisen, turvallisen ja viihtyisän, korkealaatuisen, sosiaalisesti toimivan ja esteettisesti tasapainoisen elinympäristön aikaansaamista (s. 7)",
        },

        {
          id: "oikis-koe-5-q4",
          prompt: "Mitä käyttötarkoituksen muutos lähtökohtaisesti edellyttää artikkelin mukaan?",
          options: [
            {
              id: "a",
              text: "Ilmoitusta taloyhtiölle",
            },
            {
              id: "b",
              text: "Rakennuslupaa tai muuta viranomaismenettelyä",
            },
            {
              id: "c",
              text: "Verohallinnon hyväksyntää",
            },
            {
              id: "d",
              text: "Naapureiden suostumusta",
            },
          ],
          correctAnswerId: "b",
          explanation: "Majoitusliiketoiminnan harjoittaminen asuinkäyttöön kaavoitetuilla alueilla ja luvitetuissa rakennuksissa tai huoneistossa edellyttää rakennuslupaa, käyttötarkoituksen muutosta, tyypillisesti myös poikkeamislupaa (RakL 27 §; kumottu MRL 171 §) tai, jos poikkeamiselle ei ole edellytyksiä, jopa kaavamuutosta. Korjaamiseen tarvitaan aina rakentamislupa, jos muutetaan rakennuksen tai sen osan käyttötarkoitusta olennaisesti (RakL 42.3 §:n 3 kohta) (s. 8-9).",
        },

        {
          id: "oikis-koe-5-q5",
          prompt: "Mihin lyhytvuokrauksen sääntely erityisesti artikkelin mukaan liittyy?",
          options: [
            {
              id: "a",
              text: "EU-oikeuden esteisiin",
            },
            {
              id: "b",
              text: "Perusoikeuksien ja kunnallisen itsehallinnon tasapainoon",
            },
            {
              id: "c",
              text: "Yksityisoikeudellisten sopimusten tulkintaan",
            },
            {
              id: "d",
              text: "Vuokravakuuden määrään",
            },
          ],
          correctAnswerId: "b",
          explanation: "Käyttötarkoitussääntely ei tue kategorisia tai esimerkiksi vuokrasuhteen kestoon perustuvia kaavamaisia kieltoja tai yleistyksiä, joissa sallittavuuden arviointi irrotetaan yksittäistapauksen tosiseikastosta. Perustuslailliseen omaisuudensuojaan (PL 15§), sen turvaamiseen (PL 22 §) sekä viranomaistoiminnan lainalaisuuden ja lakisidonnaisuuden vaatimukseenkin (PL 2.3 §, PL 80.1 §) nojaavaa lähtökohtaa KHO on korostanut vuosikirjapäätöksessään KHO 2024:75.77 KHO totesi, että ”[p]erusoikeuksiin kuuluva omaisuudensuoja edellyttää lähtökohtaisesti sitä, että asunto-osakeyhtiön osakkeenomistaja voi vuokrata hallinnassaan olevia asuinhuoneistoja myös lyhytaikaisesti (s. 11-12)",
        },

        {
          id: "oikis-koe-5-q6",
          prompt: "Millainen lyhytvuokrauksen sääntelyä koskeva oikeustila on artikkelin mukaan?",
          options: [
            {
              id: "a",
              text: "Yksiselitteinen ja vakiintunut",
            },
            {
              id: "b",
              text: "Täysin säätelemätön",
            },
            {
              id: "c",
              text: "Oikeuskäytännön kautta täsmentyvä ja osin epäselvä",
            },
            {
              id: "d",
              text: "EU:n yksinomaan säätelemä",
            },
          ],
          correctAnswerId: "c",
          explanation: "Tämä käy ilmi kappaleista 2.2. ja 2.3. artikkelista, jossa tuodaan esiin täsmentävää oikeuskäytäntöä. Ennen tätä käydään läpi lainsäädäntöä aiheesta, josta voi huomata, ettei se vielä ole kovin yksiselitteistä, vakiintunutta ja selkeää. Jotain sääntelyä aiheesta kuitenkin on.",
        },

        {
          id: "oikis-koe-5-q7",
          prompt: "Mitä ovat KHO:n epätyypillisinä pitämät konkreettisen vaikutuksen lyhytvuokrauksessa?",
          options: [
            {
              id: "a",
              text: "Sosiaalisia vaikutuksia",
            },
            {
              id: "b",
              text: "Taloudellisia vaikutuksia",
            },
            {
              id: "c",
              text: "Meluvaikutuksia",
            },
            {
              id: "d",
              text: "Toiminnallisia vaikutuksia",
            },
          ],
          correctAnswerId: "a",
          explanation: "Lyhytvuokrauskontekstissa KHO:n epätyypillisinä pitämät konkreettiset vaikutukset ovat lähinnä sosiaalisia vaikutuksia (s. 10)",
        },

        {
          id: "oikis-koe-5-q8",
          prompt: "Mitä tarkoittaa artikkelissa esitetty de lege ferenda -näkökulma?",
          options: [
            {
              id: "a",
              text: "Voimassa olevan lain systematisointia",
            },
            {
              id: "b",
              text: "Lain soveltamista tuomioistuimessa",
            },
            {
              id: "c",
              text: "Tulevaa lainsäädäntöä koskevaa ehdotusta",
            },
            {
              id: "d",
              text: "Oikeustapausanalyysiä",
            },
          ],
          correctAnswerId: "c",
          explanation: "Artikkelin sivulla 4 todetaan, että tutkimuksessa toteutetaan oikeuden muutokseen suuntautuvaa de lege ferenda -tutkimusta. Kappaleessa 5 käydään läpi suositukset lyhytvuokraussääntelystä de lege ferenda.",
        },

        {
          id: "oikis-koe-5-q9",
          prompt: "Mikä rakentamislain valmistelussa on lyhytvuokrauksen osalta keskeistä?",
          options: [
            {
              id: "a",
              text: "Poistaa käyttötarkoitussääntely",
            },
            {
              id: "b",
              text: "Selkeyttää asumisen ja majoituksen rajanvetoa",
            },
            {
              id: "c",
              text: "Kieltää kaikki lyhytvuokraus",
            },
            {
              id: "d",
              text: "Siirtää toimivalta valtiolle",
            },
          ],
          correctAnswerId: "b",
          explanation: "Viimeisin ympäristöministeriön valmistelema luonnos 5.2.2025 Hallituksen esitykseksi eduskunnalle rakentamislain muuttamisesta (jälj. HE-luonnos) tuli lausuntokierrokselle helmikuussa 2025. Esitysluonnoksen tarkoituksena on yhtäältä puuttua koettuun lyhytaikaisvuokrauksen epäselvään oikeustilaan, ja toisaalta toteuttaa pääministeri Petteri Orpon hallitusohjelman mukaisia kirjauksia lyhytvuokrauksen sääntelystä. Hallitusohjelmassa kirjattuna tavoitteena on ensinnäkin selkeyttää asuntojen vuokrausta ja majoitusliiketoimintaa koskevaa sääntelyä nykypäivän tarpeita ja käytäntöjä vastaavaksi (s. 3). Tätä käydään enemmän lävitse vielä kappaleessa 3.",
        },

        {
          id: "oikis-koe-5-q10",
          prompt: "Oikein vai väärin: Rakennusministeriö on valmistellut 1.1.2025 voimaan tulleen rakentamislain muutosesitystä.",
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
          explanation: "Ympäristöministeriö onkin parin viimeisen vuoden aikana pyrkinyt valmistelemaan 1.1.2025 voimaan tulleen rakentamislain (751/2023, jälj. myös RakL) muutosesitystä, jolla lyhytvuokrauksen sallittavuutta selkeytettäisiin (s. 3). Kyseessä on siis ympäristöministeriö, ei rakennusministeriö.",
        },

        {
          id: "oikis-koe-5-q11",
          prompt: "Mistä oli kyse tapauksessa KHO 2014:143?",
          options: [
            {
              id: "a",
              text: "Loma-asunnon vuokraaminen Lapissa oli katsottava lyhytvuokraukseksi ja siihen oli haettava uutta rakennuslupaa.",
            },
            {
              id: "b",
              text: "Kerrostaloasunnon vuokraaminen kerran viikossa oli katsottava alivuokrasuhteeksi.",
            },
            {
              id: "c",
              text: "Rivitalon rakentaminen lyhytvuokrausta varten ei saanut rakennuslupaa.",
            },
            {
              id: "d",
              text: "Omakotitalon vuokraaminen loma-asuntokäyttöön ei vastannut asemakaavan ja rakennusluvan sallimaa käyttötarkoitusta.",
            },
          ],
          correctAnswerId: "d",
          explanation: "Tapauksessa KHO 2014:143 KHO katsoi, että yhtiön harjoittama omakotitalokiinteistön laajamittainen vuokraaminen loma-asuntokäyttöön ei vastannut tyypillisiltään vaikutuksiltaan asemakaavan ja rakennusluvan sallimaa käyttötarkoitusta. Toistuvat lyhytkestoiset majoitusjaksot aiheuttivat epätyypillisiä vaikutuksia verrattuna pysyvään omakotiasumiseen (s. 9).",
        },

        {
          id: "oikis-koe-5-q12",
          prompt: "Mikä artikkelin mukaan on ministeriön ehdotus jatkuvan asumisen kriteerille?",
          options: [
            {
              id: "a",
              text: "Vähintään kahden viikon vuorasopimus",
            },
            {
              id: "b",
              text: "Vähintään neljän viikon vuokrasopimus",
            },
            {
              id: "c",
              text: "Vähintään kuuden viikon vuokrasopimus",
            },
            {
              id: "d",
              text: "Vähintään kahdeksan viikon vuokrasopimus",
            },
          ],
          correctAnswerId: "b",
          explanation: "Luonnoksessa ehdotetaan säädettäväksi kokonaan uusi säännös RakL 141 b § Asuminen ja majoittaminen, jossa määriteltäisiin asuminen ja asumiseen rinnastuva asuinrakennuksen käyttö. Luonnostellun RakL 141 b §:n 1 momentin mukaan asumisella tarkoitetaan jatkuvaa asumista. Jatkuvan asumisen määritelmä sidotaan säännöksessä määrällisiin kriteereihin. Saman momentin mukaan jatkuvaa asumista on asuinhuoneiston tai asuinrakennuksen vuokraus vähintään neljä viikkoa kestävillä sopimuksilla. Jatkossa pidempiaikaisen eli jatkuvan asumisen ja majoittamisen määritelmällinen rajanveto perustuisi käyttöoikeuden luovutuksen kestoon, jolloin alle neljän viikon vuokrasuhteet olisivat lähtökohtaisesti majoittamista tai muuta kuin asumista (s. 17).",
        },

        {
          id: "oikis-koe-5-q13",
          prompt: "Mitkä seuraavista ovat oikein koskien hallituksen esitystä rakentamislain muutoksiin?",
          options: [
            {
              id: "a",
              text: "Hallituksen esitys ei ota kantaa oikeshenkilöiden harjoittamaan lyhytvuokraukseen.",
            },
            {
              id: "b",
              text: "RakL perusteluiden mukaan lyhytvuokrauksesta tulisi tehdä kunnissa ohjesäännöt.",
            },
            {
              id: "c",
              text: "RakL mukaan asumisena pidettäisiin myös asuinhuoneiston luovuttamista alle neljän viikon jaksoissa enintään 90 päivänä kalenterivuodessa.",
            },
            {
              id: "d",
              text: "Yksi asumisen kriteeri on, että asuinhuoneiston haltijan asuinpaikka on merkitty asuinhuoneistoon väestötietojärjestelmään",
            },
          ],
          correctAnswerId: "a",
          correctAnswerIds: ["a", "c", "d"],
          explanation: "Asumisena pidettäisiin ensinnäkin RakL:n 141 b §:n 2 momentin 1 kohdan mukaan ”asuinrakennuksen tai asuinhuoneiston luovuttamista alle neljä viikkoa kestävissä jaksoissa, jos asuinrakennuksen tai asuinhuoneiston haltijan asuinpaikka on merkitty asuinrakennukseen tai asuinhuoneistoon Digi- ja väestötietoviraston varmennepalveluista annetussa laissa (661/2009) tarkoitettuun väestötietojärjestelmään” Toiseksi RakL 141 b §:n 2 momentin 2 kohdan mukaan asumisena pidettäisiin myös ”asuinrakennuksen ja asuinhuoneiston luovuttamista alle neljän viikon jaksoissa enintään 90 päivänä kalenterivuodessa.” Luonnostellun RakL 141 b §:n perusteluista ilmenee, että saman lainkohdan 2 momentin tilanteita erottavana tekijänä on haltijan asuminen lyhytvuokrattavassa asuintilassa. Lyhytvuokraus rinnastetaan rakentamisluvan mukaiseksi asuinkäytöksi, jos asunnon haltija asuu asuintilassa tosiasiallisesti. Jos haltija ei taas asu asunnossa, lyhytvuokraus on sallittua 90 päivää vuodessa. Jälkimmäisessä tilanteessa kyse olisi sijoitusasunnon tai kakkosasunnon lyhytvuokraamisesta. HE-luonnos vaikenee oikeushenkilöiden harjoittaman lyhytvuokrauksen, kuten liiketoiminnassa tapahtuvasta kalustettujen asuntojen vuokraamisen sallittavuudesta (s. 17-18).",
        },

        // LÄHDEHUOMIO:
        // Lähdedokumentin vastausavain on C. Perusteluteksti painottaa
        // rakentamisluvan viranomaiskontrollia ja teknisten vaatimusten
        // arviointia; lähdeavain on silti säilytetty sellaisenaan.
        {
          id: "oikis-koe-5-q14",
          prompt: "Mitkä ovat oikein koskien rakentamislupaa?",
          options: [
            {
              id: "a",
              text: "Viranomaisella on velvollisuus hyväksyä asemakaava-alueelle haetut rakennusluvat.",
            },
            {
              id: "b",
              text: "Lupaharkinnassa viranomaisen arvioi rakennusten teknisten vaatimusten täyttymisen.",
            },
            {
              id: "c",
              text: "Rakentamislupa voidaan hakea, mikäli hakijalla on suuntaa antavat piirrustukset haettavasta kohteesta.",
            },
            {
              id: "d",
              text: "Se on keskeinen viranomaiskontrollin keino",
            },
          ],
          correctAnswerId: "c",
          explanation: "Rakentamislupa (ent. rakennuslupa) on keskeinen rakentamisen ja rakennusten käytön ennakkovalvonnan ja viranomaiskontrollin keino. Lupaharkinnassa viranomainen ennakollisesti arvioi rakennushankkeen alueidenkäytöllisten eli sijoittamista koskevien ja rakennusten teknisten vaatimusten täyttymisen (s. 23)",
        },

        // LÄHDEHUOMIO:
        // Lähdedokumentin vastausavaimessa on C = "Jätän vastaamatta tähän kysymykseen", mutta perustelu tukee vaihtoehtoa B (Väärin). Koska neutraali 'En osaa sanoa' ei voi olla oikea vastaus, koodissa käytetään perustelun mukaista B:tä.
        {
          id: "oikis-koe-5-q15",
          prompt: "Oikein vai väärin: Asuinhuoneistonvuokralakia sovelletaan silloin, kun huoneistoa luovutetaan majoitustoiminnassa.",
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
          explanation: "Asuinhuoneiston tai muun asuintilan käyttöoikeuden luovutukseen sovelletaan AHVL:ia silloin, kun huoneiston käyttötarkoitus on pääasiallisesti asuminen (AHVL 1.1 §). Asuinkäyttöä ei puolestaan ole huoneiden luovuttaminen majoitustoiminnassa (AHVL 2.1§) (s. 18)",
        },

        {
          id: "oikis-koe-5-q17",
          prompt: "Mitkä seuraavista ovat oikein viitaten artikkelissa mainittuihin oikeustapauksiin?",
          options: [
            {
              id: "a",
              text: "Asuinkäyttönä katsottiin olevan omakotitalon käyttäminen päihderiippuvaisten yksinhuoltajaäitien tuettuna asumisena.",
            },
            {
              id: "b",
              text: "Asuinkäyttönä pidettiin omakotitalon käyttämistä mielenterveyskuntoutujien asumispalveluyksikkönä",
            },
            {
              id: "c",
              text: "Asuinkäyttönä ei pidetty omakotitalon käyttämistä psykiatrisena kuntoutusyksikkönä.",
            },
            {
              id: "d",
              text: "Omakotitalon autotallissa harjoitettu autokorjaamotoiminta poikkesi rakennusluvan mukaisesta käytöstä.",
            },
          ],
          correctAnswerId: "a",
          correctAnswerIds: ["a", "b", "d"],
          explanation: "Asuinkäyttönä ja tavanomaiseen asumiseen rinnastuvana on KHO:n ratkaisukäytännössä pidetty esimerkiksi omakotitalon käyttämistä psykiatrisena kuntoutusyksikkönä kuudelle potilaalle (KHO 16.8.1991 t. 2640)125 tai päihderiippuvaisten yksinhuoltajaäitien tuettuun asumiseen (KHO 1.12.2000 t. 3143)126 sekä mielenterveyskuntoutujien asumispalveluyksikköä (KHO 2014:42 ja 2014:43).12 Sitä vastoin ratkaisussa KHO 10.3.1988 n:o 937 omakotitalon autotallissa harjoitettu ansiotoiminta oli siinä määrin laajaa, jotta se olennaisesti poikkesi rakennusluvan mukaisesta käytöstä. Yli 10 vuotta jatkunut autokorjaamotoiminta aiheutti naapureille jatkuvaa häiriötä pakokaasujen, melun ja ympäristöä rumentavien varastojen vuoksi (s. 19-20)",
        },

        {
          id: "oikis-koe-5-q18",
          prompt: "Mikä on artikkelin De lege ferenda -ehdotusten tavoitteena?",
          options: [
            {
              id: "a",
              text: "Poistaa kaikki rajoitukset",
            },
            {
              id: "b",
              text: "Selventää normistoa ja oikeustilaa",
            },
            {
              id: "c",
              text: "Lisätä tuomioistuinten työmäärää",
            },
            {
              id: "d",
              text: "Siirtää sääntely yksityisoikeuteen",
            },
          ],
          correctAnswerId: "b",
          explanation: "De lege ferenda -ehdotukset ovat listattuna sivuilla 31-32.",
        },

        {
          id: "oikis-koe-5-q19",
          prompt: "Oikein vai väärin: Lyhytvuokrausilmiö on viimeisen kymmenen vuoden aikana muuttunut jakamistaloudellisesta oman asunnon joustavasta käytöstä ammattimaiseksi majoitustoiminnaksi.",
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
          explanation: "Lyhytvuokrausilmiö on viimeisen kymmenen vuoden aikana muuttunut jakamistaloudellisesta oman asunnon joustavasta käytöstä, perinteisestä asuntosijoittamisesta tai lyhytaikaisen asumisen tarpeita palvelevasta toiminnasta ammattimaiseksi ja korostuneen kaupalliseksi matkailijoiden majoitustoiminnaksi (s. 26).",
        },

        {
          id: "oikis-koe-5-q20",
          prompt: "Artikkelin keskeinen johtopäätös on, että:",
          options: [
            {
              id: "a",
              text: "Lyhytvuokraus tulee kieltää",
            },
            {
              id: "b",
              text: "Nykyinen sääntely on riittävä",
            },
            {
              id: "c",
              text: "Rakentamislain valmistelussa tulee täsmentää käyttötarkoitussääntelyä",
            },
            {
              id: "d",
              text: "Asia kuuluu yksinomaan markkinoille",
            },
          ],
          correctAnswerId: "c",
          explanation: "Tämä teema kulkee läpi koko artikkelin, lähinnä siltä kannalta, että käyttötarkoitussääntely ei ole vielä riittävää vaan sitä tulisi täsmentää.",
        },

        {
          id: "oikis-koe-5-q21",
          prompt: "Mitä ei-toivottavia turistifikaation vaikutuksia on havaittu Rovaniemellä?",
          options: [
            {
              id: "a",
              text: "Jätteiden palvelun laiminlyönti",
            },
            {
              id: "b",
              text: "Arkirytmien rikkoontuminen",
            },
            {
              id: "c",
              text: "Kotirauhan menetys",
            },
            {
              id: "d",
              text: "Terveyspalveluiden kasvava tarve",
            },
          ],
          correctAnswerId: "a",
          correctAnswerIds: ["a", "b", "c"],
          explanation: "Ei-toivottavia turistifikaation vaikutuksia ovat paikallisten kokemukset kotirauhan menetyksestä ja arkirytmien rikkoontumisesta, erilaisten yhteisten tilojen käytön ja muiden taloyhtiösääntöjen kuten jätteiden lajittelun ohjeistusten laiminlyönneistä sekä asuinyhteisöissä vakiintuneiden sosiaalisten verkostojen haurastumisesta. Lisäksi asukkaiden vuorovaikutuksen on koettu osin korvautuneen matkailijoiden neuvonnalla ja opastuksella (s. 27)",
        },

        {
          id: "oikis-koe-5-q22",
          prompt: "Mitä tarkoitetaan asuntomarkkinoiden finansialisaatiolla?",
          options: [
            {
              id: "a",
              text: "Asunnoista ja kiinteistöistä tulee taloudellisen tuoton välineitä.",
            },
            {
              id: "b",
              text: "Asuntojen hintojen nousua räjähdysmäisesti",
            },
            {
              id: "c",
              text: "Asunto-osakeyhtiöiden arvon alenemista vuokraustoiminnasta johtuen",
            },
            {
              id: "d",
              text: "Kiinteistöihin syntyvää korjausvelkaa.",
            },
          ],
          correctAnswerId: "a",
          explanation: "Asuntomarkkinoiden finansialisaatiossa asunnoista ja kiinteistöistä tulee ensisijaisesti sijoituskohteita ja taloudellisen tuoton välineitä asumisen ja muiden näkökohtien kustannuksella (s. 27)",
        },

        {
          id: "oikis-koe-5-q23",
          prompt: "Mitä vaikutuksia gentrifikaatiolla on?",
          options: [
            {
              id: "a",
              text: "Alueen yrittäjät vaurastuvat",
            },
            {
              id: "b",
              text: "Alkuperäiset asukkaat syrjäytyvät",
            },
            {
              id: "c",
              text: "Alueen kulttuuri rikastuu",
            },
            {
              id: "d",
              text: "Vuokrahinnat nousevat",
            },
          ],
          correctAnswerId: "b",
          correctAnswerIds: ["b", "d"],
          explanation: "Maailmalla on runsaasti esimerkkejä myös alueellisesta gentrifikaatiosta, jossa kokonaiset kaupungit ja kaupunginosat muuttuvat, kun asuinalueilla asuntoja ostetaan ja kohdennetaan matkailusidonnaisen lyhytvuokraus- ja sijoituskäyttöön. Ilmiö johtaa usein alkuperäisten asukkaiden alueelliseen syrjäytymiseen, alueiden kulttuuriseen köyhtymiseen sekä asuntojen ja vuokrahintojen nousuun.",
        },

        {
          id: "oikis-koe-5-q24",
          prompt: "Oikein vai väärin: Lyhytvuokrauksen toimiva säänteleminen edellyttää paikallistason harkintavaltaa.",
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
          explanation: "Kansainväliset tutkimushavainnot osoittavat, että lyhytvuokrauksen toimiva säänteleminen edellyttää paikallistason harkintavaltaa sekä keinoja sopeuttaa sääntelyä paikallisiin olosuhteisiin (s. 28)",
        },

        {
          id: "oikis-koe-5-q25",
          prompt: "Mikä seuraavista on oikein?",
          options: [
            {
              id: "a",
              text: "Yksittäinen satunnainen lyhytvuokraus ei välttämättä edellytä käyttötarkoituksen muutosta.",
            },
            {
              id: "b",
              text: "Yksittäinen satunnainen lyhytvuokraus on aina kiellettyä.",
            },
            {
              id: "c",
              text: "Yksittäinen satunnainen lyhytvuokraus muuttaa aina käyttötarkoituksen",
            },
            {
              id: "d",
              text: "Yksittäinen satunnainen lyhytvuokraus edellyttää aina rakennuslupaa.",
            },
          ],
          correctAnswerId: "a",
          explanation: "Tämä käy ilmi esimerkiksi artikkelin kappaleesta 3.3.",
        },

      ],
    },
  ],
} satisfies Omit<PracticeExam, "courseId">;
