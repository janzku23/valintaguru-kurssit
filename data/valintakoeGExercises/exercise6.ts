import type { ValintakoeGExercise } from "./types";

/**
 * Harjoitus 6: uusimman tehtävätekstin tehtävät 1–8. Aikaraja 40 min.
 * Lähdelainaukset ovat explanation-kentissä, hakuvinkit learningPoint-kentissä.
 */
export const valintakoeGExercise6Base = {
  "id": "harjoitus-6",
  "version": 1,
  "courseId": "valintakoe-g",
  "title": "Harjoitus 6 – Miten tekoäly vaikuttaa työmarkkinoihin lähitulevaisuudessa?",
  "description": "40 minuutin aineistoharjoitus. Tuloksessa seurataan sekä kokonaisosumaa että lukutaitokategorioita.",
  "durationMinutes": 40,
  "difficulty": "easy",
  "articleId": "miten-tekoaly-vaikuttaa-tyomarkkinoihin-lahitulevaisuudessa",
  "articleTitle": "Miten tekoäly vaikuttaa työmarkkinoihin lähitulevaisuudessa?",
  "articleUrl": "https://journal.fi/kak/article/view/164354/118611",
  "questions": [
    {
      "id": "g-h6-q1",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 3,
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
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
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
      "explanation": "A ja B säilyttävät tekstissä kuvatut kaksi erilaista vaikutusketjua. Korkeakoulutusta vaativien tehtävien korvautuminen voi laskea ammatin vaatimustasoa ja lisätä sekä työn kysyntää että tarjontaa. Vähän koulutusta vaativien tehtävien korvautuminen puolestaan voi vähentää ihmistyön tarvetta mutta nostaa työn vaativuustasoa.\n\nC:n ratkaiseva ansa on sana ”välttämättä”. Teksti ei sano, että ihmistyön tarve tällöin aina vähenee. D taas kääntää vaativuustason muutoksen väärään suuntaan.\n\nLähde:\nTekstissä sanotaan:\n\n”Joissakin ammateissa on mahdollista, että tekoäly korvaa korkeakoulutusta vaativia työtehtäviä laskien kyseisen ammatin vaatimustasoa. Tämä voi lisätä sekä työn kysyntää että tarjontaa kyseisissä ammateissa.”\n\nTämän jälkeen tekstissä kuvataan toinen tilanne:\n\n”Vastaavasti toisissa ammateissa tekoäly voi korvata sellaisia tehtäviä, jotka eivät vaadi paljoa koulutusta tai osaamista. Tämä taas vähentää ihmistyön tarvetta, mutta nostaa työn vaativuustasoa.”",
      "learningPoint": "Tarkista, mihin suuntaan työn vaativuus ja ihmistyön tarve muuttuvat kummassakin tilanteessa. Vaihtoehto D kääntää vaativuustason muutoksen laskuksi, vaikka aineistossa vähän koulutusta vaativien tehtävien korvautuminen nostaa jäljelle jäävän työn vaativuutta.\n\nHakuvinkki: Hae esimerkiksi ”vaatimustasoa” ja lue koko sitä ympäröivä kappale."
    },
    {
      "id": "g-h6-q2",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 7,
      "prompt": "Kauhasen ja Rouvisen (2024) tulosten perusteella generatiiviselle tekoälylle altistuneiden ja ei-altistuneiden ammattien kehitys Suomessa erosi sekä ansioiden että työllisyyden osalta.",
      "options": [
        {
          "id": "tosi",
          "text": "Tosi"
        },
        {
          "id": "epatosi",
          "text": "Epätosi"
        },
        {
          "id": "skip",
          "text": "Jätän vastaamatta tähän kysymykseen"
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
      "explanation": "Ryhmien välillä havaittiin ero ansiokehityksessä, mutta ei työllisyyskehityksessä. Väite on siis epätosi, koska se laajentaa havaitun eron koskemaan molempia.\n\nTehtävässä ei riitä sen huomaaminen, että tutkimuksessa todella havaittiin ryhmien välinen ero. Pitää tarkistaa, missä muuttujassa ero havaittiin ja missä sitä ei havaittu.\n\nLähde:\nTekstissä sanotaan:\n\n”ansiokehitys on ollut generatiiviselle tekoälylle altistuneissa ammateissa nopeampaa kuin ei-altistuneissa ammateissa. Työllisyyskehityksessä ei ole ollut eroja näiden ryhmien välillä.”",
      "learningPoint": "Yhdistä tutkimushavainto oikeaan mittariin. Ansiokehityksessä havaittua eroa ei saa siirtää työllisyyskehitykseen, jossa ryhmien välillä ei havaittu eroa.\n\nHakuvinkki: Hae esimerkiksi ”ansiokehitys” tai ”Kauhanen”."
    },
    {
      "id": "g-h6-q3",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 6,
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
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
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
      "explanation": "B säilyttää sekä tapahtumien oikean järjestyksen että uusien työpaikkojen kohdentumisen. Ensin teknologia korvaa työvoimaa ja lisää työttömyyttä. Vasta myöhemmin tuottavuuden kasvu sekä uudet tuotteet ja palvelut synnyttävät uusia työpaikkoja.\n\nA kääntää vaiheiden järjestyksen. C on lähellä oikeaa, mutta vaihtaa yhden ratkaisevan asian: uudet työpaikat syntyvät tekstin mukaan eri aloille ja eri tehtäviin, eivät samoihin. D on väärin, sillä artikkelissa teknologisiin murroksiin liittyvien muutosten kuvataan voivan kestää pitkään.\n\nLähde:\nTekstissä sanotaan:\n\n”Aiemmissa teollisissa vallankumouksissa on toistunut kaava, jossa uusi teknologia ensin korvaa työvoimaa aiheuttaen työttömyyden kasvua.”\n\nTämän jälkeen:\n\n”Seuraavassa vaiheessa tuottavuuden kasvu ja uudet tuotteet ja palvelut synnyttävät uusia työpaikkoja, mutta eri aloille ja eri tehtäviin kuin aiemmat menetetyt työpaikat.”",
      "learningPoint": "Tarkista, mihin vaiheeseen kukin tapahtuma kuuluu. Sekä työvoiman korvautuminen että uusien työpaikkojen syntyminen mainitaan aineistossa, mutta niiden järjestystä ei voi vaihtaa.\n\nHakuvinkki: Hae esimerkiksi ”teknologiseksi työttömyydeksi” tai ”eri aloille”."
    },
    {
      "id": "g-h6-q4",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 3,
      "prompt": "Mikä seuraavista on EPÄTOSI Autorin ja muiden (2024) tutkimuksesta artikkelissa esitetyn kuvauksen perusteella?",
      "options": [
        {
          "id": "a",
          "text": "Nykyisin enemmistö työpaikoista perustuu vuoden 1940 jälkeen syntyneisiin uusiin työtehtäviin tai -kategorioihin."
        },
        {
          "id": "b",
          "text": "Vuosien 1940 ja 1980 välisenä aikana uusia työpaikkoja syntyi pitkälti keskipalkkaisiin ammatteihin."
        },
        {
          "id": "c",
          "text": "Vuoden 1980 jälkeen uusien työpaikkojen syntymisessä on tapahtunut hajaantumista pieni- ja korkeapalkkaisiin ammatteihin."
        },
        {
          "id": "d",
          "text": "Työvoimaa korvaavien teknologioiden vaikutus on heikentynyt viime vuosikymmenien aikana."
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
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
      "explanation": "D on epätosi, koska siinä kehityksen suunta on käännetty. Artikkelissa työvoimaa korvaavan vaikutuksen sanotaan voimistuneen, ei heikentyneen.\n\nTämä on tarkoituksella melko lähellä oikeaa tietoa: toimija, ilmiö ja ajanjakso ovat oikeita. Ratkaiseva ero on vain muutoksen suunnassa.\n\nLähde:\nTekstissä sanotaan:\n\n”Autor ja muut (2024) havaitsevat myös, että jälkimmäinen työvoimaa korvaava vaikutus on voimistunut viime vuosikymmenten aikana.”\n\nSamassa kohdassa todetaan myös, että enemmistö nykyisistä työpaikoista perustuu vuoden 1940 jälkeen syntyneisiin uusiin työtehtäviin tai -kategorioihin ja että vuosien 1940 ja 1980 välisenä aikana uusia työpaikkoja syntyi pitkälti keskipalkkaisiin ammatteihin. Sen jälkeen kehitys hajaantui pieni- ja korkeapalkkaisiin ammatteihin.",
      "learningPoint": "Vertaa muutosta kuvaavaa verbiä aineistoon. Voimistuminen ja heikentyminen ilmaisevat vastakkaiset kehityssuunnat, vaikka väitteen ilmiö ja ajanjakso olisivat muuten oikein.\n\nHakuvinkki: Hae esimerkiksi ”korvaava vaikutus” tai ”voimistunut”."
    },
    {
      "id": "g-h6-q5",
      "questionType": "multiple",
      "difficulty": "easy",
      "categoryId": 7,
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
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
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
      "explanation": "A ja B säilyttävät artikkelissa kuvatut erot eri työtehtävien välillä. C kääntää kokemustasoa koskevan havainnon: kysyntä painottuu kokeneisiin, ei junioreihin. D taas tekee vaikutuksen kokonaisvoimakkuudesta liian suuren, sillä artikkelissa todetaan nimenomaisesti vaikutuksen olevan toistaiseksi pieni.\n\nLähde:\nTekstissä sanotaan:\n\n”Kysyntä on vähentynyt eräissä ohjelmointitehtävissä, mutta vastaavasti työvoiman kysyntä on kasvanut joissakin muissa IT-alan tehtävissä (mm. koneoppiminen, chatbot-kehittäminen) generatiivisen tekoälyn käyttöönoton jälkeen.”\n\nSeuraavalla sivulla todetaan:\n\n”Kirjoittamisen osalta työn kysyntä näyttää vahvasti vähenevän rutiininomaisessa asiakirjoitustehtävissä [...] mutta vahvistuvan luovassa kirjoittamisessa. Vaikutus on toistaiseksi pieni.”\n\nLisäksi kysynnän kerrotaan kohdistuvan vahvasti kokeneeseen työvoimaan, kun taas junioritason osaajille on vähemmän kysyntää.",
      "learningPoint": "Tarkista, mihin työtehtävään tai työntekijäryhmään kukin havainto liittyy. Kokeneeseen työvoimaan kohdistuvaa kysyntää ei saa siirtää junioritason osaajiin, eikä yhden tehtävätyypin kehitystä yleistää koko alalle.\n\nHakuvinkki: Hae esimerkiksi ”chatbot”, ”junioritason” tai ”luovassa kirjoittamisessa”."
    },
    {
      "id": "g-h6-q6",
      "questionType": "true_false",
      "difficulty": "easy",
      "categoryId": 6,
      "prompt": "Tony Blair Institute on Global Changen tarkastelemissa skenaarioissa tekoälykehityksen aiheuttaman teknologisen työttömyyden huippu ajoittui ennen sitä ajankohtaa, jolloin työllisyysvaikutus voisi aikaisintaan muuttua positiiviseksi.",
      "options": [
        {
          "id": "tosi",
          "text": "Tosi"
        },
        {
          "id": "epatosi",
          "text": "Epätosi"
        },
        {
          "id": "skip",
          "text": "Jätän vastaamatta tähän kysymykseen"
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
      "explanation": "Väite on epätosi, koska työttömyyden huipun mahdollinen aikaväli ulottuu vuoteen 2048, kun taas työllisyysvaikutus voisi kääntyä positiiviseksi aikaisintaan vuonna 2040. Näin ollen aineiston perusteella ei voida sanoa, että työttömyyden huippu olisi kaikissa skenaarioissa ennen positiivisen työllisyysvaikutuksen mahdollista alkamista.\n\nRatkaisevaa on verrata kahta ajallista tietoa toisiinsa eikä poimia vain vuosilukuja erikseen.\n\nLähde:\nTekstissä sanotaan:\n\n”teknologisen työttömyyden huippu ajoittuu kunkin skenaarion mukaan vuosien 2035 ja 2048 välille.”\n\nTämän jälkeen:\n\n”Työllisyysvaikutus kääntyisi positiiviseksi näissä skenaarioissa aikaisintaan vuonna 2040, mahdollisesti merkittävästi myöhemmin.”",
      "learningPoint": "Vertaa työttömyyden huipun aikaväliä positiivisen työllisyysvaikutuksen aikaisimpaan mahdolliseen ajankohtaan. Sana ”aikaisintaan” ei lupaa muutosta juuri vuonna 2040, eikä vuosien 2035 ja 2048 väliin sijoittuva huippu välttämättä edellä sitä.\n\nHakuvinkki: Hae esimerkiksi ”2035” tai ”työllisyysvaikutus”."
    },
    {
      "id": "g-h6-q7",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 7,
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
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
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
      "explanation": "B säilyttää sekä 19 prosentin kohteen että artikkelissa tehdyn varovaisen tulkinnan. Kyse ei ole siitä, että 19 % suomalaisista työtehtävistä olisi altistunut, vaan että 19 % suomalaisista työskentelee tietynlaisissa ammateissa.\n\nLisäksi altistuminen ei tarkoita samaa kuin työtehtävän korvautuminen. C muuttaa mahdollisen tulevan kehityksen varmaksi, ja D siirtää 19 prosentin osuuden väärään kohteeseen.\n\nLähde:\nTekstissä sanotaan:\n\n”vain 19 % suomalaisista työskentelee ammateissa, joiden työtehtävistä yli puolet on altistunut generatiiviselle tekoälylle.”\n\nTämän jälkeen todetaan:\n\n”Tämä havainto ei tue käsitystä työpaikkojen massiivisesta korvautumisesta tekoälyllä, mutta joissakin ammateissa sellaista voi tulevaisuudessa tapahtua.”",
      "learningPoint": "Tarkista, mistä joukosta prosenttiosuus on laskettu. Tässä 19 prosenttia kuvaa suomalaisia, jotka työskentelevät tietynlaisissa ammateissa, eikä suomalaisten työtehtävien osuutta.\n\nHakuvinkki: Hae ”19” ja lue koko virke sekä sitä seuraava virke."
    },
    {
      "id": "g-h6-q8",
      "questionType": "single",
      "difficulty": "easy",
      "categoryId": 10,
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
        },
        {
          "id": "e",
          "text": "Jätän vastaamatta tähän kysymykseen"
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
      "explanation": "C kääntää ryhmien välisen suuruussuhteen. Artikkelin mukaan vaikutukset olivat kaikkein kokeneimmilla työntekijöillä merkittävästi heikommat, eivät voimakkaammat.\n\nA, B ja D kuvaavat saman tutkimuskohdan sisältöä oikein. Tässä kannattaa huomata erityisesti sana ”mutta”, koska sen jälkeen tekstissä tehdään ratkaiseva ero työntekijäryhmien välille.\n\nLähde:\nTekstissä sanotaan:\n\n”tekoälyavustajat ovat parantaneet sekä työn nopeutta että laatua kokemattomilla ja matalan osaamistason työntekijöillä, mutta vaikutukset ovat olleet merkittävästi heikommat kaikkein kokeneimpien työntekijöiden kohdalla.”",
      "learningPoint": "Tarkista, kummassa työntekijäryhmässä vaikutus on suurempi ja kummassa pienempi. Vaihtoehto C kääntää ryhmien vertailun, sillä aineiston mukaan kaikkein kokeneimpien työntekijöiden vaikutukset olivat heikompia."
    }
  ]
} satisfies ValintakoeGExercise;
