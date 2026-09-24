import type { ValintakoeGExercise } from "./types";

/**
 * Harjoitus 6 on muodostettu toimitetusta VALINTAKOE G TEHTÄVÄT HELPPO -dokumentista.
 * Kaikki tehtävät ovat easy-tasoa.
 * HUOM: lähdedokumentti ei ilmoita tälle harjoitukselle aikarajaa.
 * durationMinutes=45 on nykyisen harjoitusmoottorin tekninen oletus.
 */
export const valintakoeGExercise6Base = {
  "id": "harjoitus-6",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Harjoitus 6 – Miten tekoäly vaikuttaa työmarkkinoihin lähitulevaisuudessa?",
  "description": "Aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 45,
  "difficulty": "easy",
  "articleId": "miten-tekoaly-vaikuttaa-tyomarkkinoihin-lahitulevaisuudessa",
  "articleTitle": "Miten tekoäly vaikuttaa työmarkkinoihin lähitulevaisuudessa?",
  "articleUrl": "https://journal.fi/kak/article/view/164354",
  "questions": [
    {
      "id": "g-h6-q1",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 6,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa kuvattuja tekoälyn vaikutuksia työn vaativuuteen ja työvoiman tarpeeseen? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Jos tekoäly korvaa ammatissa korkeakoulutusta vaativia tehtäviä, ammatin vaatimustaso voi laskea ja sekä työn kysyntä että tarjonta voivat kasvaa."
        },
        {
          "id": "b",
          "text": "Jos tekoäly korvaa ammatissa vähän koulutusta vaativia tehtäviä, ihmistyön tarve voi vähentyä samalla kun jäljelle jäävän työn vaativuustaso nousee."
        },
        {
          "id": "c",
          "text": "Jos tekoäly korvaa ammatissa korkeakoulutusta vaativia tehtäviä, ihmistyön tarve vähenee välttämättä, vaikka ammatin vaatimustaso laskisi."
        },
        {
          "id": "d",
          "text": "Jos tekoäly korvaa vähän koulutusta vaativia tehtäviä, ammatin vaatimustaso voi laskea, koska jäljelle jäävät tehtävät edellyttävät vähemmän osaamista."
        }
      ],
      "correctAnswerIds": [
        "a",
        "b"
      ],
      "source": {
        "articleId": "miten-tekoaly-vaikuttaa-tyomarkkinoihin-lahitulevaisuudessa",
        "page": "278",
        "section": "osio Työtehtävät korvautuvat, mutta (useimmat) ammatit luultavasti säilyvät"
      },
      "explanation": "A ja B säilyttävät tekstissä kuvatut kaksi erilaista vaikutusketjua. Korkeakoulutusta vaativien tehtävien korvautuminen voi laskea ammatin vaatimustasoa ja lisätä sekä työn kysyntää että tarjontaa. Vähän koulutusta vaativien tehtävien korvautuminen puolestaan voi vähentää ihmistyön tarvetta mutta nostaa työn vaativuustasoa. C:n ratkaiseva ansa on sana ”välttämättä”. Teksti ei sano, että ihmistyön tarve tällöin aina vähenee. D taas kääntää vaativuustason muutoksen väärään suuntaan.",
      "learningPoint": "Kun samassa kohdassa kuvataan kahta erilaista vaikutusketjua, tarkista tarkasti, mikä lähtötilanne johtaa mihinkin seuraukseen. Lähekkäisten kuvausten seurauksia ei saa sekoittaa keskenään. Hakuvinkki: Hae esimerkiksi ”vaatimustasoa” ja lue koko sitä ympäröivä kappale."
    },
    {
      "id": "g-h6-q2",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 11,
      "prompt": "Kauhasen ja Rouvisen (2024) tulosten perusteella generatiiviselle tekoälylle altistuneiden ja ei-altistuneiden ammattien kehitys Suomessa erosi sekä ansioiden että työllisyyden osalta.",
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
        "articleId": "miten-tekoaly-vaikuttaa-tyomarkkinoihin-lahitulevaisuudessa",
        "page": "280",
        "section": "Suomen tähänastisia työmarkkinavaikutuksia käsittelevä kappale"
      },
      "explanation": "Ryhmien välillä havaittiin ero ansiokehityksessä, mutta ei työllisyyskehityksessä. Väite on siis epätosi, koska se laajentaa havaitun eron koskemaan molempia. Tehtävässä ei riitä sen huomaaminen, että tutkimuksessa todella havaittiin ryhmien välinen ero. Pitää tarkistaa, missä muuttujassa ero havaittiin ja missä sitä ei havaittu.",
      "learningPoint": "Tarkista, mihin havaintoon tutkimustulos todella kohdistuu. Samassa kohdassa voidaan käsitellä useita mittareita, vaikka tulos ei olisi niiden kaikkien kohdalla sama. Hakuvinkki: Hae esimerkiksi ”ansiokehitys” tai ”Kauhanen”."
    },
    {
      "id": "g-h6-q3",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 9,
      "prompt": "Mikä seuraavista kuvaa oikein artikkelissa esitettyä aiempien teollisten vallankumousten tyypillistä työmarkkinakehitystä?",
      "options": [
        {
          "id": "a",
          "text": "Uusi teknologia on ensin synnyttänyt uusia työpaikkoja, minkä jälkeen vanhojen tehtävien automatisoituminen on lisännyt työttömyyttä."
        },
        {
          "id": "b",
          "text": "Uusi teknologia on ensin korvannut työvoimaa, minkä jälkeen tuottavuuden kasvu sekä uudet tuotteet ja palvelut ovat synnyttäneet työpaikkoja eri aloille ja tehtäviin."
        },
        {
          "id": "c",
          "text": "Uusi teknologia on ensin korvannut työvoimaa, minkä jälkeen uudet työpaikat ovat syntyneet pääasiassa samoille aloille ja samoihin tehtäviin kuin aiemmin menetetyt työpaikat."
        },
        {
          "id": "d",
          "text": "Uusi teknologia on ensin korvannut työvoimaa, mutta tästä aiheutunut työttömyys on tyypillisesti poistunut nopeasti työvoiman siirtyessä uusiin tehtäviin."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "miten-tekoaly-vaikuttaa-tyomarkkinoihin-lahitulevaisuudessa",
        "page": "277",
        "section": "aiempien teollisten vallankumousten vaikutuksia käsittelevä kohta"
      },
      "explanation": "B säilyttää sekä tapahtumien oikean järjestyksen että uusien työpaikkojen kohdentumisen. Ensin teknologia korvaa työvoimaa ja lisää työttömyyttä. Vasta myöhemmin tuottavuuden kasvu sekä uudet tuotteet ja palvelut synnyttävät uusia työpaikkoja. A kääntää vaiheiden järjestyksen. C on lähellä oikeaa, mutta vaihtaa yhden ratkaisevan asian: uudet työpaikat syntyvät tekstin mukaan eri aloille ja eri tehtäviin, eivät samoihin. D on väärin, sillä artikkelissa teknologisiin murroksiin liittyvien muutosten kuvataan voivan kestää pitkään.",
      "learningPoint": "Kun tekstissä kuvataan vaiheittainen prosessi, tarkista sekä tapahtumat että niiden ajallinen järjestys. Molemmat vaihtoehdossa mainitut asiat voivat löytyä tekstistä, vaikka niiden järjestys olisi väärä. Hakuvinkki: Hae esimerkiksi ”teknologiseksi työttömyydeksi” tai ”eri aloille”."
    },
    {
      "id": "g-h6-q4",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 10,
      "prompt": "Mikä seuraavista on EPÄTOSI Autorin ja muiden (2024) tutkimuksesta artikkelissa esitetyn kuvauksen perusteella?",
      "options": [
        {
          "id": "a",
          "text": "Nykyisin enemmistö työpaikoista perustuu vuoden 1940 jälkeen syntyneisiin uusiin työtehtäviin tai -kategorioihin."
        },
        {
          "id": "b",
          "text": "Vuosina 1940–1980 uusia työpaikkoja syntyi pitkälti keskipalkkaisiin ammatteihin."
        },
        {
          "id": "c",
          "text": "Vuoden 1980 jälkeen uusien työpaikkojen syntymisessä on tapahtunut hajaantumista pieni- ja korkeapalkkaisiin ammatteihin."
        },
        {
          "id": "d",
          "text": "Työvoimaa korvaavien teknologioiden vaikutus on heikentynyt viime vuosikymmenien aikana."
        }
      ],
      "correctAnswerIds": [
        "d"
      ],
      "source": {
        "articleId": "miten-tekoaly-vaikuttaa-tyomarkkinoihin-lahitulevaisuudessa",
        "page": "279",
        "section": "osio Tekoäly lisää työn kysyntää joissain ammateissa ja vähentää sitä toisissa"
      },
      "explanation": "D on epätosi, koska siinä kehityksen suunta on käännetty. Artikkelissa työvoimaa korvaavan vaikutuksen sanotaan voimistuneen, ei heikentyneen. Tämä on tarkoituksella melko lähellä oikeaa tietoa: toimija, ilmiö ja ajanjakso ovat oikeita. Ratkaiseva ero on vain muutoksen suunnassa.",
      "learningPoint": "Tarkista muutosta kuvaavat sanat erityisen huolellisesti. Vaihtoehto voi sisältää muuten täysin oikeat toimijat, käsitteet ja ajankohdan, mutta yksi verbi muuttaa koko väitteen vääräksi. Hakuvinkki: Hae esimerkiksi ”korvaava vaikutus” tai ”voimistunut”."
    },
    {
      "id": "g-h6-q5",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 8,
      "prompt": "Mitkä seuraavista väittämistä vastaavat artikkelissa esitettyjä havaintoja generatiivisen tekoälyn vaikutuksista kirjoittamiseen ja IT-alan työvoiman kysyntään? Valitse kaikki oikeat vaihtoehdot.",
      "options": [
        {
          "id": "a",
          "text": "Työn kysyntä näyttää vähenevän rutiininomaisissa asiakirjoitustehtävissä mutta vahvistuvan luovassa kirjoittamisessa."
        },
        {
          "id": "b",
          "text": "IT-alalla työvoiman kysyntä on vähentynyt eräissä ohjelmointitehtävissä mutta kasvanut esimerkiksi koneoppimiseen ja chatbot-kehittämiseen liittyvissä tehtävissä."
        },
        {
          "id": "c",
          "text": "Generatiivisen tekoälyn käyttöönoton jälkeen IT-alan työvoiman kysynnän kasvu on kohdistunut erityisesti junioritason osaajiin."
        },
        {
          "id": "d",
          "text": "Kirjoittamiseen liittyvä työn kysynnän väheneminen on ollut niin voimakasta, että artikkelissa sitä kuvataan jo merkittäväksi työmarkkinavaikutukseksi."
        }
      ],
      "correctAnswerIds": [
        "a",
        "b"
      ],
      "source": {
        "articleId": "miten-tekoaly-vaikuttaa-tyomarkkinoihin-lahitulevaisuudessa",
        "page": "279–280",
        "section": "osio Tekoäly lisää työn kysyntää joissain ammateissa ja vähentää sitä toisissa"
      },
      "explanation": "A ja B säilyttävät artikkelissa kuvatut erot eri työtehtävien välillä. C kääntää kokemustasoa koskevan havainnon: kysyntä painottuu kokeneisiin, ei junioreihin. D taas tekee vaikutuksen kokonaisvoimakkuudesta liian suuren, sillä artikkelissa todetaan nimenomaisesti vaikutuksen olevan toistaiseksi pieni.",
      "learningPoint": "Samalla toimialalla tekoälyn vaikutus voi olla erilainen eri tehtävissä ja työntekijäryhmissä. Tarkista, mihin tehtävätyyppiin tai osaajaryhmään kukin havainto kuuluu. Hakuvinkki: Hae esimerkiksi ”chatbot”, ”junioritason” tai ”luovassa kirjoittamisessa”."
    },
    {
      "id": "g-h6-q6",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 9,
      "prompt": "Tony Blair Institute on Global Changen tarkastelemissa skenaarioissa tekoälykehityksen aiheuttaman teknologisen työttömyyden huippu ajoittui ennen sitä ajankohtaa, jolloin työllisyysvaikutus voisi aikaisintaan muuttua positiiviseksi.",
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
        "articleId": "miten-tekoaly-vaikuttaa-tyomarkkinoihin-lahitulevaisuudessa",
        "page": "277",
        "section": "Tony Blair Institute on Global Changen skenaarioita käsittelevä kappale"
      },
      "explanation": "Väite on epätosi, koska työttömyyden huipun mahdollinen aikaväli ulottuu vuoteen 2048, kun taas työllisyysvaikutus voisi kääntyä positiiviseksi aikaisintaan vuonna 2040. Näin ollen aineiston perusteella ei voida sanoa, että työttömyyden huippu olisi kaikissa skenaarioissa ennen positiivisen työllisyysvaikutuksen mahdollista alkamista. Ratkaisevaa on verrata kahta ajallista tietoa toisiinsa eikä poimia vain vuosilukuja erikseen.",
      "learningPoint": "Kun samassa kohdassa annetaan aikaväli ja toinen ajankohta, vertaa niitä tarkasti. Sana ”aikaisintaan” on ratkaiseva: se ei tarkoita, että muutos tapahtuisi juuri kyseisenä vuonna. Hakuvinkki: Hae esimerkiksi ”2035” tai ”työllisyysvaikutus”."
    },
    {
      "id": "g-h6-q7",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 11,
      "prompt": "Mikä seuraavista kuvaa parhaiten Kauhasen ja muiden (2023) tutkimushavainnon merkitystä artikkelissa?",
      "options": [
        {
          "id": "a",
          "text": "Suurin osa suomalaisista työskentelee ammateissa, joissa yli puolet työtehtävistä on jo korvattu generatiivisella tekoälyllä."
        },
        {
          "id": "b",
          "text": "Noin viidennes suomalaisista työskentelee ammateissa, joissa yli puolet työtehtävistä on altistunut generatiiviselle tekoälylle, eikä havainto tue käsitystä työpaikkojen laajamittaisesta korvautumisesta tällä hetkellä."
        },
        {
          "id": "c",
          "text": "Noin viidennes suomalaisista työskentelee ammateissa, joissa yli puolet työtehtävistä tulee tutkimuksen mukaan varmasti korvautumaan generatiivisella tekoälyllä."
        },
        {
          "id": "d",
          "text": "19 prosenttia suomalaisista työtehtävistä on altistunut generatiiviselle tekoälylle, mutta altistuminen ei ole vielä vaikuttanut työpaikkojen määrään."
        }
      ],
      "correctAnswerIds": [
        "b"
      ],
      "source": {
        "articleId": "miten-tekoaly-vaikuttaa-tyomarkkinoihin-lahitulevaisuudessa",
        "page": "280",
        "section": "Kauhasen ja muiden (2023) tutkimusta käsittelevä kappale"
      },
      "explanation": "B säilyttää sekä 19 prosentin kohteen että artikkelissa tehdyn varovaisen tulkinnan. Kyse ei ole siitä, että 19 % suomalaisista työtehtävistä olisi altistunut, vaan että 19 % suomalaisista työskentelee tietynlaisissa ammateissa. Lisäksi altistuminen ei tarkoita samaa kuin työtehtävän korvautuminen. C muuttaa mahdollisen tulevan kehityksen varmaksi, ja D siirtää 19 prosentin osuuden väärään kohteeseen.",
      "learningPoint": "Prosenttiluvun löytäminen ei vielä ratkaise tehtävää. Tarkista aina, mistä joukosta prosentti on laskettu ja mitä ominaisuutta se kuvaa. Hakuvinkki: Hae ”19” ja lue koko virke sekä sitä seuraava virke."
    },
    {
      "id": "g-h6-q8",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 14,
      "prompt": "Mikä seuraavista on EPÄTOSI Brynjolfssonin, Lin ja Raymondin (2025) tutkimuksesta artikkelissa esitetyn kuvauksen perusteella?",
      "options": [
        {
          "id": "a",
          "text": "Tekoälyavustajien vaikutukset työn tuottavuuteen vaihtelivat työntekijöiden välillä."
        },
        {
          "id": "b",
          "text": "Tekoälyavustajat paransivat kokemattomien työntekijöiden työn nopeutta ja laatua."
        },
        {
          "id": "c",
          "text": "Tekoälyavustajien vaikutukset olivat kaikkein kokeneimmilla työntekijöillä voimakkaampia kuin kokemattomilla työntekijöillä."
        },
        {
          "id": "d",
          "text": "Tekoälyavustajista hyötyivät työn nopeuden ja laadun osalta myös matalan osaamistason työntekijät."
        }
      ],
      "correctAnswerIds": [
        "c"
      ],
      "source": {
        "articleId": "miten-tekoaly-vaikuttaa-tyomarkkinoihin-lahitulevaisuudessa",
        "page": "280",
        "section": "työntekijäkohtaisia tuottavuusvaikutuksia käsittelevä kappale"
      },
      "explanation": "C kääntää ryhmien välisen suuruussuhteen. Artikkelin mukaan vaikutukset olivat kaikkein kokeneimmilla työntekijöillä merkittävästi heikommat, eivät voimakkaammat. A, B ja D kuvaavat saman tutkimuskohdan sisältöä oikein. Tässä kannattaa huomata erityisesti sana ”mutta”, koska sen jälkeen tekstissä tehdään ratkaiseva ero työntekijäryhmien välille.",
      "learningPoint": "Kun tutkimuksessa vertaillaan ryhmiä, tarkista kumpaan ryhmään suurempi tai pienempi vaikutus liittyy. Molemmat ryhmät voivat esiintyä vaihtoehdossa oikein, vaikka niiden välinen vertailu olisi käännetty. Hakuvinkki: Hae esimerkiksi ”kokeneimpien” tai ”työn nopeutta”."
    }
  ]
} satisfies ValintakoeGExercise;
