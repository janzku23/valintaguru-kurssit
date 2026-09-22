import "server-only";
import type { PracticeExam } from "../types";

export const OIKISTEHO_EXAM_4_ARTICLE_URL =
  "https://journal.fi/oikeustiede-jurisprudentia/article/view/157073/118579";

/**
 * Yhteinen Koe 4 OikisTeho-kurssille.
 *
 * Huom:
 * - Sama 2–4 vuorokauden valmistautumisohjeistus kuin muissa OikisTeho-kokeissa.
 * - Pitkä ohjeistus EI ole description-kentässä.
 * - intro sisältää näkymässä renderöitävän ohjeistuksen.
 * - "Jätän vastaamatta" poistetaan lähdevaihtoehdoista, koska
 *   PracticeExamRunner näyttää erillisen neutraalin "En osaa sanoa" -valinnan.
 */
export const oikisTehoExam4 = {
  id: "koe-4",
  version: 1,
  title: "Harjoitustentti 4",
  description:
    "60 minuutin ajastettu harjoitustentti, joka perustuu ennakkoon luettavaan akateemiseen artikkeliin.",
  durationMinutes: 60,

  articleUrl: OIKISTEHO_EXAM_4_ARTICLE_URL,

  intro: {
    eyebrow: "Oikeustieteen eriytyvä osio",
    title:
      "Näin suoritat oikeustieteen eriytyvän osion harjoitustentin",
    lead:
      "Harjoitustentin tarkoitus on simuloida aitoa pääsykoetilannetta. Tentti perustuu akateemiseen artikkeliin ja sisältää oikean kokeen rakennetta vastaavia kysymystyyppejä.",

    article: {
      label: "Koe 4:n ennakkomateriaali",
      title: "Lue artikkeli ennen harjoitustenttiä",
      description:
        "Avaa artikkeli alla olevasta painikkeesta ja tutustu siihen 2–4 vuorokauden ajan. Lue materiaali useaan otteeseen. Kun aloitat varsinaisen kokeen, sulje artikkeli pois näkyvistä.",
      url: OIKISTEHO_EXAM_4_ARTICLE_URL,
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
      id: "koe-4-kysymykset",
      title: "Koe 4 – Oikeus terveyteen Suomessa",
      questions: [
        {
          id: "oikis-koe-4-q1",
          prompt: "Miten oikeus terveyteen sijoittuu suomalaisessa perusoikeusjärjestelmässä artikkelin mukaan?",
          options: [
            {
              id: "a",
              text: "Se on selkeästi rajattu, yksi ja yhtenäinen perusoikeuspykälä.",
            },
            {
              id: "b",
              text: "Se on \"hajautunut\" useisiin eri säännöksiin, kuten PL 7 §:ään ja PL 19 §:ään.",
            },
            {
              id: "c",
              text: "Sitä ei tunnusteta perusoikeudeksi, vaan se on pelkkä lainsäädännöllinen tavoite.",
            },
            {
              id: "d",
              text: "Se kuuluu vain perustuslain 1 §:n yleislausekkeen piiriin.",
            },
          ],
          correctAnswerId: "b",
          explanation: "Artikkeli toteaa, että oikeus terveyteen ei palaudu vain yhteen perusoikeussäännökseen, vaan se rakentuu useiden säännösten varaan. Mm. sivulla 96 todetaan, että “terveysoikeutta koskevassa tutkimuksessa on todettu, että terveyteen liittyvät oikeudet on meillä turvattu niin perus- kuin ihmisoikeutenakin”. Keskeisimpiä ovat PL 19.3 § (palvelut) ja PL 7.1 § (elämä ja koskemattomuus).",
        },

        {
          id: "oikis-koe-4-q2",
          prompt: "Mitkä ovat PL 19 § 3 momentin mukaisia julkisen vallan ydintehtäviä?",
          options: [
            {
              id: "a",
              text: "Taata jokaiselle terveys.",
            },
            {
              id: "b",
              text: "Turvata jokaiselle riittävät sosiaali- ja terveyspalvelut.",
            },
            {
              id: "c",
              text: "Edistää väestön terveyttä.",
            },
            {
              id: "d",
              text: "Turvattava lasten hyvinvointi",
            },
          ],
          correctAnswerId: "b",
          correctAnswerIds: ["b", "c", "d"],
          explanation: "Perustuslain 19.3 §:n mukaan \"Julkisen vallan on turvattava jokaiselle, sen mukaan kuin lailla tarkemmin säädetään, riittävät sosiaali- ja terveyspalvelut ja edistettävä väestön terveyttä. Julkisen vallan on myös tuettava perheen ja muiden lapsen huolenpidosta vastaavien mahdollisuuksia turvata lapsen hyvinvointi ja yksilöllinen kasvu.\" (s. 98).",
        },

        {
          id: "oikis-koe-4-q3",
          prompt: "Mikä on kansainvälisten ihmisoikeussopimusten (kuten TSS-sopimus) merkitys Suomen terveysoikeudessa?",
          options: [
            {
              id: "a",
              text: "Ne velvoittavat valtiota edistämään terveyttä \"käytettävissä olevien voimavarojen sallimissa rajoissa\".",
            },
            {
              id: "b",
              text: "Niillä ei ole oikeudellista merkitystä, ne ovat vain suosituksia.",
            },
            {
              id: "c",
              text: "Ne vaativat välitöntä ja täydellistä maksutonta terveydenhuoltoa.",
            },
            {
              id: "d",
              text: "Ne koskevat vain kehitysmaita.",
            },
          ],
          correctAnswerId: "a",
          explanation: "Muun muassa TSS-sopimuksen 12 artiklan 1 kohta velvoittaa sopimusvaltiot tunnustamaan jokaiselle oikeuden nauttia korkeimmasta saavutettavissa olevasta ruumiin- ja mielen terveydestä. YK:n sosiaalisten oikeuksien komitea on korostanut säännöksen tulkinnassa, että terveys riippuu monista tekijöistä, joista vain osaan valtio voi vaikuttaa. Yksilöön kytkeytyvien tekijöiden lisäksi korkeimpaan mahdolliseen terveydentilaan vaikuttavat yhteiskunnassa käytettävissä olevat resurssit (s. 83-84).",
        },

        {
          id: "oikis-koe-4-q4",
          prompt: "Oikein vai väärin: Oikeutta terveyteen käsitellään kattavasti myös YK:n vammaisten henkilöiden oikeuksista tehdyssä yleissopimuksessa.",
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
          explanation: "Tämä käy ilmi suoraan artikkelin sivulta 86.",
        },

        {
          id: "oikis-koe-4-q5",
          prompt: "Mihin seuraavista perusoikeuksista potilaan itsemääräämisoikeus ensisijaisesti kytkeytyy?",
          options: [
            {
              id: "a",
              text: "PL 18 §",
            },
            {
              id: "b",
              text: "PL 20 §",
            },
            {
              id: "c",
              text: "PL 12 §",
            },
            {
              id: "d",
              text: "PL 7 §",
            },
          ],
          correctAnswerId: "d",
          explanation: "Perustuslakivaliokunta on kehittänyt PL 7 §:ssä säädetyistä oikeuksista henkilön itsemääräämisoikeuden käsitteen (s. 115) Itsemääräämisoikeuden on katsottu kiinnittyvän PL 7 §:n ohella useisiin muihin perusoikeuksiin, erityisesti PL 10 §:ään yksityiselämän suojasta (s. 116).",
        },

        {
          id: "oikis-koe-4-q6",
          prompt: "Mikä seuraavista vaihtoehdoista on oikein?",
          options: [
            {
              id: "a",
              text: "Potilaan itsemääräämisoikeudesta voidaan poiketa aina kun lääkäri katsoo sen tarpeelliseksi.",
            },
            {
              id: "b",
              text: "Potilaan itsemääräämisoikeudesta voidaan poiketa vain niiltä osin, kuin perustuslain esitöissä yksilöidään.",
            },
            {
              id: "c",
              text: "Potilaan itsemääräämisoikeudesta voidaan poiketa vain lailla säädetyissä tilanteissa, kuten mielenterveyslaissa määritellyn pakkohoidon kohdalla.",
            },
            {
              id: "d",
              text: "Potilaan itsemääräämisoikeudesta ei voida milloinkaan poiketa, se on ehdoton oikeus.",
            },
          ],
          correctAnswerId: "c",
          explanation: "Perusoikeuksien rajoittamisen on perustuttava lakiin, oltava täsmällistä ja tarkkarajaista sekä välttämätöntä. Jokaisella on lähtökohtainen oikeus päättää omasta terveydestään ja vastaavasti myös vapaus toimia terveytensä vastaisesti. Kyse on monien oikeuksien käytön perustana olevasta yksilön itsemääräämisoikeudesta eli vapaudesta määrätä itsestään ja toimistaan, minkä myös PL 1.2 §:n maininta yksilön oikeuksien ja vapauden turvaamisesta kattaa. Vapaudenriiston piiriin kuuluu ihmisen sulkeminen lukittuun tilaan tämän omasta tahdosta riippumatta. Sen alaan voi kuulua myös tätä lievempiä toimenpiteitä, jos vapaudenrajoitus kestonsa, asteensa ja aikaansaamansa sosiaalisten suhteiden estymisen vuoksi rinnastuu lukittuun tilaan sulkemiseen. Tulkintakäytännössä esimerkiksi mielenterveyspotilaan eristäminen on merkinnyt puuttumista ihmisen henkilökohtaiseen vapauteen mutta ei ole sen sijaan tarkoittanut vapaudenriistoa. Lailla on säädettävä esimerkiksi tahdosta riippumattomaan hoitoon ottamisen edellytyksistä ja potilaaseen hoidon aikana kohdistettavista henkilökohtaisen koskemattomuuden rajoituksista (s. 120-121).",
        },

        {
          id: "oikis-koe-4-q7",
          prompt: "Mitkä seuraavista ovat oikein?",
          options: [
            {
              id: "a",
              text: "Euroopan ihmisoikeussopimus ei sisällä nimenomaisia määräyksiä oikeudesta terveyteen.",
            },
            {
              id: "b",
              text: "Euroopan ihmisoikeustuomioistuin ei käsittele terveyttä koskevia oikeuksia.",
            },
            {
              id: "c",
              text: "Suomen korkein hallinto-oikeus on katsonut, ettei korona-viruksen torjumiseksi tehdyistä valtiollisista toimenpiteistä voi valittaa yleisellä tasolla.",
            },
            {
              id: "d",
              text: "Suomen korkein oikeus on oikea taho käsittelemään terveyttä koskevia valtiollisia päätöksiä, mikäli niistä ilmenee erimielisyyksiä yleisellä tasolla.",
            },
          ],
          correctAnswerId: "a",
          correctAnswerIds: ["a", "c"],
          explanation: "Euroopan ihmisoikeussopimus eli ihmisoikeuksien ja perusvapauksien suojaamiseksi tehty yleissopimus ei sisällä nimenomaisia määräyksiä oikeudesta terveyteen. Euroopan ihmisoikeustuomioistuin on ottanut kantaa moninaisiin terveyttä koskevaan oikeuteen liittyviin tekijöihin esimerkiksi oikeutta elämään koskevissa tuomioissaan (s. 87). Niin EIT kuin Suomen korkein hallinto-oikeuskin ovat johdonmukaisesti katsoneet, ettei korona-viruksen torjumiseksi tehdyistä valtiollisista toimenpiteistä voi valittaa yleisellä tasolla (actio popularis) vaan valituksen tutkiminen on edellyttänyt sen osoittamista, että toimenpiteet ovat suoraan koskeneet valittajaa (s. 89-90).",
        },

        {
          id: "oikis-koe-4-q8",
          prompt: "Oikein vai väärin: Mikäli potilas ei ole itse kykenevä päättämään hoidostaan esimerkiksi huonon yleistilan vuoksi, tulisi DNR-päätös (elvyttämättäjättämispäätös) jättää tekemättä.",
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
          explanation: "Mikäli potilas ei ole itse kykenevä päättämään hoidostaan esimerkiksi huonon yleistilan vuoksi, tulisi DNR-päätös tehdä yhteisymmärryksessä esimerkiksi hänen laillisen edustajansa tai lähiomaisensa kanssa (s. 117).",
        },

        {
          id: "oikis-koe-4-q9",
          prompt: "Mitkä seuraavista väittämistä ovat oikein liittyen tuomioon Le Mailloux v. Ranska?",
          options: [
            {
              id: "a",
              text: "Valittaja ei ollut tyytyväinen siitä, miten valtio oli ehkäissyt koronaviruksen leviämistä",
            },
            {
              id: "b",
              text: "Valittaja ei ollut tyytyväinen siihen, miten häntä kohdeltiin.",
            },
            {
              id: "c",
              text: "Valittaja ei ollut tyytyväinen siihen, millaisia rajoituksia valtio asetti hänelle.",
            },
            {
              id: "d",
              text: "Valittajan olisi tullut kyetä osoittamaan, miten valtion toimenpiteet vaikuttivat hänen terveyteensä.",
            },
          ],
          correctAnswerId: "a",
          correctAnswerIds: ["a", "d"],
          explanation: "Tuomiossa Le Mailloux v. Ranska (2020) valittaja oli valittanut yleisellä tasolla siitä, millaisiin toimiin Ranskan valtio oli ryhtynyt koronaviruksen leviämisen ehkäisemiseksi. Tuomioistuin katsoi, että valittajan olisi tullut kyetä osoittamaan, miten koronaviruksen torjumista koskevat valtion toimenpiteet ovat koskettaneet juuri häntä ja vaikuttaneet hänen terveyteensä (s. 90)",
        },

        {
          id: "oikis-koe-4-q10",
          prompt: "Mikä seuraavista on artikkelin mukaan oikein liittyen terveydenhuoltopalveluiden riittävyyden arviointiin?",
          options: [
            {
              id: "a",
              text: "Riittävyyden arviointia ei ole käsitelty.",
            },
            {
              id: "b",
              text: "Riittävyyttä voidaan arvioida aluekohtaisesti.",
            },
            {
              id: "c",
              text: "Perustuslakivaliokunnan mukaan yhdenvertaisuus on keskeistä riittävyyden arvioinnissa.",
            },
            {
              id: "d",
              text: "Riittävyyden arviointi on sidottu kuntien taloudelliseen tilanteeseen.",
            },
          ],
          correctAnswerId: "c",
          explanation: "Perustuslakivaliokunnan tulkintakäytännössä yhdenvertaisuus on vakiintuneesti yhdistetty etenkin terveydenhuoltopalveluiden riittävyyden arviointiin. Yhdenvertaisuus ja syrjimättömyys ovat keskeisiä osia PL 19.3, 6 ja 22 §:n muodostamassa normikokonaisuudessa. Valiokunta on vakiintuneesti katsonut, että julkisen vallan tulee varmistaa, että riittäviä sosiaali- ja terveydenhuollon palveluja on tarjolla erilaisiin terveyteen ja hyvinvointiin liittyviin tarpeisiin yhdenvertaisin perustein eri väestöryhmille ja maan eri osissa asuville (s. 124). HUOM! Perustuslaki ei edellytä, että kaikkialla Suomessa olisi tarjolla täysin samanlaiset palvelut, vaan että kaikilla alueilla on tarjolla palveluja yhdenmukaisten perusteiden mukaisesti siellä asuvien ihmisten tarpeita vastaavasti.",
        },

        {
          id: "oikis-koe-4-q11",
          prompt: "Miten PL 6 § (Yhdenvertaisuus) vaikuttaa terveydenhuoltoon?",
          options: [
            {
              id: "a",
              text: "Esimerkiksi lääkkeiden tulee olla saman hintaisia kaikille, asuinpaikasta riippumatta.",
            },
            {
              id: "b",
              text: "Ihmisiä ei saa asettaa eri asemaan asuinpaikan perusteella palvelujen saatavuudessa ilman hyväksyttävää syytä.",
            },
            {
              id: "c",
              text: "PL 6 § rajoittaa yksityisen terveydenhuollon toimialaa, sillä se asettaa kansalaiset eri asemaan keskenään.",
            },
            {
              id: "d",
              text: "Yhdenvertaisuusvaatimus velvoittaa pääsemään vuosittaiseen terveystarkastukseen, henkilön niin itse halutessaan.",
            },
          ],
          correctAnswerId: "b",
          explanation: "Valiokunta on vakiintuneesti katsonut, että julkisen vallan tulee varmistaa, että riittäviä sosiaali- ja terveydenhuollon palveluja on tarjolla erilaisiin terveyteen ja hyvinvointiin liittyviin tarpeisiin yhdenvertaisin perustein eri väestöryhmille ja maan eri osissa asuville. Ihmisillä on oltava asuinpaikastaan riippumatta tosiasiallinen mahdollisuus palveluihin pääsyyn (s. 124)",
        },

        {
          id: "oikis-koe-4-q12",
          prompt: "Mikä on PL 19 § 3 momentin ja 1 momentin välinen suhde artikkelin mukaan?",
          options: [
            {
              id: "a",
              text: "1 momentti takaa viimesijaisen toimeentulon ja huolenpidon, 3 momentti taas riittävät palvelut.",
            },
            {
              id: "b",
              text: "Ne tarkoittavat täysin samaa asiaa.",
            },
            {
              id: "c",
              text: "3 momentti kumoaa 1 momentin terveydenhuollossa.",
            },
            {
              id: "d",
              text: "1 momentti koskee vain rahaa, 3 momentti vain hoitoa.",
            },
          ],
          correctAnswerId: "a",
          explanation: "PL 19 §:n mukainen oikeus sosiaaliturvaan sisältää useita itsenäisiä sosiaalisia perusoikeuksia, jotka on jaettu pykälän eri momentteihin. Pykälän 1 momentin mukaan jokaisella, joka ei kykene hankkimaan ihmis- arvoisen elämän edellyttämää turvaa, on oikeus välttämättömään toimeentuloon ja huolenpitoon. PL 19.2 §:n mukaan lailla taataan jokaiselle oikeus perustoimeentulon turvaan työttömyyden, sairauden, työkyvyttömyyden ja vanhuuden aikana sekä lapsen syntymän ja huoltajan menetyksen perusteella. Lisäksi 3 momentin mukaan julkisen vallan on turvattava, sen mukaan kuin lailla tarkemmin säädetään, jokaiselle riittävät sosiaali- ja terveyspalvelut ja edistettävä väestön terveyttä. Julkisen vallan on myös tuettava perheen ja muiden lapsen huolenpidosta vastaavien mahdollisuuksia turvata lapsen hyvinvointi ja yksilöllinen kasvu (s. 98).",
        },

        {
          id: "oikis-koe-4-q13",
          prompt: "Oikein vai väärin: Tartuntataudin levittämisellä voi syyllistyä pahoinpitelyyn.",
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
          explanation: "Tartuntataudin tahallisella levittämisellä on mahdollista syyllistyä esimerkiksi pahoinpitelyyn (rikoslaki 39/1889, RL 21:5 ja 6), vaaran aiheuttamiseen (RL 21:13), terveyden vaarantamiseen (RL 34:4 ja 5) tai terveydensuojelurikkomukseen (RL 44:2) (s. 119).",
        },

        {
          id: "oikis-koe-4-q14",
          prompt: "Mikä seuraavista on oikein koskien kiireellistä hoitoa?",
          options: [
            {
              id: "a",
              text: "Kiireellistä hoitoa on odotettava vähintään viikko.",
            },
            {
              id: "b",
              text: "Kiireellinen hoito kytkeytyy PL 19.1 §:n välttämättömään huolenpitoon.",
            },
            {
              id: "c",
              text: "Kiireellisen hoidon järjestäminen on vapaaehtoista kunnille.",
            },
            {
              id: "d",
              text: "Oikeus kiireelliseen hoitoon koskee vain Suomen kansalaisia.",
            },
          ],
          correctAnswerId: "b",
          explanation: "Useammasta kohdasta artikkelia käy ilmi, että PL 19.1 §:n säännöksen turvaaman suojan piiriin kuuluu esimerkiksi kiireellinen sairaanhoito (s. 101).",
        },

        {
          id: "oikis-koe-4-q15",
          prompt: "Miten oikeus terveyteen liittyy ympäristöön (PL 20 §)?",
          options: [
            {
              id: "a",
              text: "Niillä ei ole laissa mitään yhteyttä.",
            },
            {
              id: "b",
              text: "Ympäristö on tärkeämpi kuin terveys.",
            },
            {
              id: "c",
              text: "Terveellinen ympäristö nähdään yhtenä terveyden edellytyksenä ja julkisen vallan velvoitteena.",
            },
            {
              id: "d",
              text: "PL 20 § liittyy terveyteen, sillä yksi sen päätavoitteista on vähentää ilmansaasteiden määrää.",
            },
          ],
          correctAnswerId: "c",
          explanation: "PL 20.2 §:ssä todetaan, että julkisen vallan on pyrittävä turvaamaan jokaiselle oikeus terveelliseen ympäristöön ja mahdollisuus vaikuttaa elinympäristöään koskevaan päätöksentekoon (s. 126)",
        },

        {
          id: "oikis-koe-4-q16",
          prompt: "Mitä artikkelissa tarkoitetaan heikennyskiellolla?",
          options: [
            {
              id: "a",
              text: "Lait eivät saa muuttua siten, että ne heikentäisivät kansalaisten asemaa.",
            },
            {
              id: "b",
              text: "Perusoikeuksien suojan tasoa ei saa merkittävästi heikentää ilman erittäin painavia perusteita.",
            },
            {
              id: "c",
              text: "Julkisen terveydenhuollon tasoa ei saa laskea millään osa-alueella.",
            },
            {
              id: "d",
              text: "Mikäli Suomen kansalaiselle on myönnetty jokin tuki, ei sitä saa enää lakkauttaa.",
            },
          ],
          correctAnswerId: "b",
          explanation: "Jos säännöksessä edellytetään tietyn tason turvaamista, on heikennyskiellon näkökulmasta kiellettyä mennä tämän tason alapuolelle. Perustuslakivaliokunnan mukaan heikennyskielto ei kuitenkaan ole ehdoton (s. 137).",
        },

        {
          id: "oikis-koe-4-q17",
          prompt: "Kuka valvoo ensisijaisesti perusoikeuksien toteutumista terveydenhuollon arjessa?",
          options: [
            {
              id: "a",
              text: "Potilas itse.",
            },
            {
              id: "b",
              text: "Lääkäriliitto.",
            },
            {
              id: "c",
              text: "YK:n pääsihteeri.",
            },
            {
              id: "d",
              text: "Aluehallintovirastot (AVI), Valvira ja ylimmät laillisuusvalvojat.",
            },
          ],
          correctAnswerId: "d",
          explanation: "Artikkelissa viitataan siihen, että valvontaviranomaisilla on velvollisuus puuttua tilanteisiin, joissa palvelujen riittävyys vaarantuu. Mm. sivun 134 alaviitteessä mainitaan, että “Lähtökohtaisesti ensisijaiset laillisuusvalvojat sote-kentällä ovat organisaatioiden oma-valvonnan jälkeen aluehallintovirastot sekä Valvira, joissa tehdään terveydenhuoltojärjestelmän lainmukaisuuden arvioimista, hoitoon pääsyn valvontaa sekä yksittäisen potilaan oikeuksien arvioimista.",
        },

        {
          id: "oikis-koe-4-q18",
          prompt: "Mitkä seuraavista on oikein liittyen haavoittuvassa asemassa olevien ryhmien suojeluun?",
          options: [
            {
              id: "a",
              text: "Valtiolla on korostettu velvollisuus huolehtia esimerkiksi lasten, vanhusten ja vammaisten oikeuksien toteutumisesta.",
            },
            {
              id: "b",
              text: "Haavoittuvassa asemassa olevia ei tarvitse kuulla päätöksenteossa.",
            },
            {
              id: "c",
              text: "Haavoittuvassa asemassa olevilla saattaa olla jo valmiiksi rajallinen kyky tehdä erilaisia valintoja.",
            },
            {
              id: "d",
              text: "Haavoittuvuus tarkoittaa vain fyysistä vammaa.",
            },
          ],
          correctAnswerId: "a",
          correctAnswerIds: ["a", "c"],
          explanation: "Valiokunta on painottanut, että sosiaali- ja terveydenhuollon alalla asiakkaan asema ei rinnastu tavanomaiseen kuluttajaan vaan asiakaskunnassa on runsaasti haavoittuvassa asemassa olevia henkilöitä. Oikeusturvan asianmukaisuuteen on kiinnitettävä huomiota erityisesti niiden yhteydessä, joilla on jo lähtökohtaisesti rajallinen kyky tehdä erilaisia valintoja, kuten kehitysvammaisilla tai lapsilla (s. 129).",
        },

        {
          id: "oikis-koe-4-q19",
          prompt: "Oikein vai väärin: Koronapandemian aikana tehdyt perusoikeusrajoitukset eivät edellyttäneen perusoikeuksien välistä punnintaa, sillä terveys on niin vahva perusoikeus.",
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
          explanation: "Koronapandemian aikana tehdyt perusoikeusrajoitukset edellyttivät usein eri perusoikeuksien välistä punnintaa, mikä ei ole muutoinkaan ollut perustuslainmukaisuuden ennakkovalvonnassa poikkeuksellista. Pandemian aikana elämään ja terveyteen liittyvät oikeudet saivat suuren painoarvon esimerkiksi liikkumisvapauteen nähden (s. 131). Punnintaa tuli kuitenkin tehdä kaikessa päätöksenteossa.",
        },

        {
          id: "oikis-koe-4-q20",
          prompt: "Mikä seuraavista väittämistä ei ole oikein?",
          options: [
            {
              id: "a",
              text: "Oikeudella terveyteen on olennaisia liityntöjä ihmisarvon loukkaamattomuuteen.",
            },
            {
              id: "b",
              text: "Sosiaalisten perusoikeuksien toteutuminen riippuu pitkälti valtion taloudellisista resursseista.",
            },
            {
              id: "c",
              text: "Oikeus terveyteen linkittyy yksilön oikeuteen vaikuttaa elinympäristönsä kehittämiseen.",
            },
            {
              id: "d",
              text: "Perus- ja ihmisoikeuksille on tunnusomaista se, että ne ovat pääosin koko kollektiivin oikeuksia.",
            },
          ],
          correctAnswerId: "d",
          explanation: "Oikeudella terveyteen on olennaisia liityntöjä ihmisarvon loukkaamattomuuteen (1.2 §). Oikeus terveyteen linkittyy yksilön oikeuteen osallistua ja vaikuttaa yhteiskunnan ja elinympäristönsä kehittämiseen (2.2 §). Perus- ja ihmisoikeuksille on tunnusomaista se, että ne ovat pääosin yksilön, eivät niinkään kollektiivin, oikeuksia (s. 135). Taloudellisten ja sosiaalisten perusoikeuksien toteutuminen riippuu pitkälti valtion taloudellisista resursseista ja niiden kohdentamisesta (s. 137)",
        },

        {
          id: "oikis-koe-4-q21",
          prompt: "Mikä on Euroopan ihmisoikeussopimuksen (EIS) 2 artiklan merkitys terveydenhuollossa?",
          options: [
            {
              id: "a",
              text: "Se turvaa potilaiden sananvapauden.",
            },
            {
              id: "b",
              text: "Se turvaa potilaiden turvallisuuden sairaanhoidossa.",
            },
            {
              id: "c",
              text: "Se turvaa oikeuden elämään, mikä velvoittaa valtiota järjestämään terveydenhuollon niin, ettei henki vaarannu huolimattomuuden vuoksi.",
            },
            {
              id: "d",
              text: "Se kieltää kidutuksen.",
            },
          ],
          correctAnswerId: "c",
          explanation: "EIS ei sisällä nimenomaisia määräyksiä oikeudesta terveyteen. Sopimus kuitenkin sisältää määräyksiä muun muassa oikeudesta elämään (2 artikla) (s. 87). Tapauksissa, joissa 2 artiklaa on katsottu loukatun, korostuvat erityisesti ihmisen henkeä uhkaavat tilanteet ja kiireellisen terveydenhuollon merkitys (s. 88)",
        },

        {
          id: "oikis-koe-4-q22",
          prompt: "Mikä seuraavista käsitteli potilaan itsemääräämisoikeuden toteutumista?",
          options: [
            {
              id: "a",
              text: "KHO 2022:38",
            },
            {
              id: "b",
              text: "KHO 2020:46",
            },
            {
              id: "c",
              text: "KKO 2015:64",
            },
            {
              id: "d",
              text: "KKO 2019:98",
            },
          ],
          correctAnswerId: "d",
          explanation: "Potilaan itsemääräämisoikeuden toteutumista on tarkasteltu oikeuskäytännössä. Ennakkopäätöksessä KKO 2019:98 käsiteltiin tuottamuksellista virkavelvollisuuden rikkomista sekä kuolemantuottamusta. Asiassa punnittiin itsemääräämisoikeuden osatekijöiden täyttymistä tilanteessa, jossa potilas kieltäytyi hoidosta, minkä seurauksena hoidon aloitus viivästyi ja johti myöhemmin potilaan kuolemaan. Hoidon aloittamisen viivästymisen ei tulkittu johtuneen potilaan itsemääräämisoikeudesta, sillä potilaan ei katsottu saaneen tarpeeksi tietoa tilansa vakavuudesta. Huomaathan eron KKO:n ja KHO:n ratkaisuilla.",
        },

        {
          id: "oikis-koe-4-q23",
          prompt: "Mitkä terveyden osa-alueet määritellään ihmisoikeusasiakirjoissa?",
          options: [
            {
              id: "a",
              text: "Psyykkinen terveys",
            },
            {
              id: "b",
              text: "Henkinen terveys",
            },
            {
              id: "c",
              text: "Fyysinen terveys",
            },
            {
              id: "d",
              text: "Sosiaalinen terveys",
            },
          ],
          correctAnswerId: "a",
          correctAnswerIds: ["a", "c", "d"],
          explanation: "Ihmisoikeusasiakirjoissa terveydelle määritellään kolme osa-aluetta: fyysinen, psyykkinen ja sosiaalinen terveys (s. 92).",
        },

        {
          id: "oikis-koe-4-q24",
          prompt: "Mitä EIT:n tapaus Pasquinelli ja muut v. San Marino (2024) käsitteli?",
          options: [
            {
              id: "a",
              text: "Tarvitsiko sosiaali- ja terveydenhuoltoalan työntekijöiden tulla töihin silloin, kun heidän lähipiirissään ilmeni vakavia sairauksia, joihin koronavirus olisi saattanut vaikuttaa kohtalokkaasti.",
            },
            {
              id: "b",
              text: "Rikkoivatko koronaviruksen aiheuttamat liikkumisrajoitteet perusoikeuksia.",
            },
            {
              id: "c",
              text: "Rikkoivatko sosiaali- ja terveydenhuoltoalan työntekijöille asetetut koronarokotusehdot ihmisoikeuksia.",
            },
            {
              id: "d",
              text: "Oliko valtiolla oikeus vaatia kaikkia terveydenhuoltoalan ammattilaisia avustamaan koronarokotuksien jakamisessa.",
            },
          ],
          correctAnswerId: "c",
          explanation: "Pasquinelli ja muut v. San Marino (2024) Euroopan ihmisoikeustuomioistuin arvioi, rikkoivatko sosiaali- ja terveydenhuoltoalan työntekijöille asetetut koronarokotusehdot ihmisoikeuksia (s. 90)",
        },

        {
          id: "oikis-koe-4-q25",
          prompt: "Mikä on PL 22 §:n velvoite julkiselle vallalle?",
          options: [
            {
              id: "a",
              text: "Velvollisuus kerätä veroja rahoittaakseen terveydenhuolto.",
            },
            {
              id: "b",
              text: "Velvollisuus turvata perusoikeuksien ja ihmisoikeuksien toteutuminen.",
            },
            {
              id: "c",
              text: "Velvollisuus turvata sairaanhoidon toteutuminen yhdenvertaisena perusoikeutena.",
            },
            {
              id: "d",
              text: "Velvollisuus huolehtia terveydenhuollon infrastruktuurin järkevästä toteuttamisesta.",
            },
          ],
          correctAnswerId: "b",
          explanation: "Perus- ja ihmisoikeuksien toteutuminen on asetettu julkisen vallan velvoitteeksi myös PL 22 §:ssä. Tämä perus- ja ihmisoikeuksien turvaamisvelvollisuus tarkoittaa, että julkisella vallalla, erityisesti valtiolla, hyvinvointialueilla ja kunnilla, on positiivinen velvollisuus perusoikeuksien turvaamiseen (s. 101)",
        },

        {
          id: "oikis-koe-4-q26",
          prompt: "Oikein vai väärin: Terveydenhuollon oikeudellinen viitekehys muodostuu pelkästään perus- ja ihmisoikeuksista.",
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
          explanation: "Terveydenhuollon oikeudellinen viitekehys muodostuu paitsi perus- ja ihmisoikeuksista myös hyvin laajasta alemman asteisten säädösten kokonaisuudesta (s. 76)",
        },

        {
          id: "oikis-koe-4-q27",
          prompt: "Mitä tarkoitetaan yksityiselämän suojalla (PL 10 §) terveydenhuollossa?",
          options: [
            {
              id: "a",
              text: "Potilastietojen salassapitoa ja tietosuojaa.",
            },
            {
              id: "b",
              text: "Kieltoa kertoa potilaan nimeä sairaanhoitajille.",
            },
            {
              id: "c",
              text: "Oikeutta pääsääntöisesti itse päättää siitä, mitä hoitotoimenpiteitä tehdään.",
            },
            {
              id: "d",
              text: "Potilastietojen saamiseksi tarvitaan viranomaisen päätös, vaikka tiedot koskisivat itseä.",
            },
          ],
          correctAnswerId: "c",
          explanation: "PL 10.1 §:n mukaan jokaisen yksityiselämä on turvattu. Yksityiselämän suoja lähtee siitä, että yksilöllä on oikeus elää omaa elämäänsä ilman viranomaisten tai muiden ulkopuolisten tahojen mielivaltaista tai aiheetonta puuttumista hänen yksityiselämäänsä. Yksityiselämän suoja kattaa muun muassa yksilön oikeuden määrätä itsestään ja ruumiistaan, mutta sen piirin tarkka määritteleminen on vaikeaa.",
        },

        {
          id: "oikis-koe-4-q28",
          prompt: "Oikein vai väärin: Terveys käsitteenä ei rajoitu pelkästään lääketietelliseen merkitykseen.",
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
          explanation: "Sosiaali- ja terveysvaliokunta painotti väestön terveyden edistämisvelvollisuudesta säädettäessä laaja-alaista terveyskäsitystä, joka ei rajoitu ahtaaseen lääketieteelliseen merkitykseen vaan kuvaa sitä monipuolisemmin ihmisen hyvinvointia ja toimintakykyä (s. 102)",
        },

        {
          id: "oikis-koe-4-q29",
          prompt: "Mitä artikkelissa tarkoitetaan välttämättömällä toimeentulolla?",
          options: [
            {
              id: "a",
              text: "Tiettyä rahamäärää, joka jokaisen tulisi saada kuukaudessa.",
            },
            {
              id: "b",
              text: "Sellaista terveydenhuoltoa, johon jokaisella on oikeus päästä määräajassa.",
            },
            {
              id: "c",
              text: "Sosiaalitukia, joita Kansaneläkelaitos myöntää kansalaisille.",
            },
            {
              id: "d",
              text: "Sellaista tulotasoa ja palveluja, joilla turvataan ihmisarvoisen elämän vähimmäistaso.",
            },
          ],
          correctAnswerId: "d",
          explanation: "Välttämättömällä toimeentulolla ja huolenpidolla tarkoitetaan sellaista tulotasoa ja palveluja, joilla turvataan ihmisarvoisen elämän edellytysten vähimmäistaso (s. 98)",
        },

        {
          id: "oikis-koe-4-q30",
          prompt: "Mikä on artikkelin loppupäätelmä oikeudesta terveyteen Suomessa?",
          options: [
            {
              id: "a",
              text: "Se on monitasoinen ja vahvasti perustuslakiin ankkuroitu kokonaisuus.",
            },
            {
              id: "b",
              text: "Se on suppea, mutta merkityksellinen kokonaisuus.",
            },
            {
              id: "c",
              text: "Terveys Suomessa on vahvasti kiinni perustuslaissa, vaikka sen tulisi olla sidottu enemmän EU-oikeuteen.",
            },
            {
              id: "d",
              text: "Se koskee pitkälti sairaalahoitoa.",
            },
          ],
          correctAnswerId: "a",
          explanation: "Artikkelin mukaan oikeus terveyteen on dynaaminen perusoikeus, jonka sisältöä muovataan jatkuvasti lainsäädännössä ja valvonnassa. Terveys liikkuu vahvasti perustuslain ympärillä, mutta siinä on paljon eri tasoja. Tämä käy ilmi pitkin artikkelia.",
        },

      ],
    },
  ],
} satisfies Omit<PracticeExam, "courseId">;
