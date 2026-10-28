# ValintaGuru – admin-työtila

Uusi yleiskuva on osoitteessa `/admin`. Alkuperäinen yleiskuva on säilytetty muuttamattomana osoitteessa `/admin/raportit`. Käyttäjien hallinnan, käyttöoikeuksien, tehtäväpankin, edistymisen ja tiedustelujen sivuja tai niiden rajapintoja ei muuteta. Admin-layoutin navigaatioon lisätään aiempi yleiskuva ja kaikki linkit näytetään myös mobiilissa. Tiedustelut-linkki osoittaa ylläpitäjän sivulle `/admin/tiedustelut`.

## Käyttöönotto

1. Aja Supabasen SQL Editorissa tiedosto `supabase/migrations/20261028_admin_workspace.sql` oikeaan ValintaGuru-projektiin. Migraatio lisää yhden uuden taulun; olemassa olevia tauluja ja käyttöoikeuksia se ei muuta. Uuden taulun RLS on käytössä, ja selaimen anon/authenticated-rooleilta on poistettu oikeudet. Tallennus kulkee palvelimen nykyisen admin-tarkistuksen kautta.
2. Siirrä päivityspaketin tiedostot varsinaiseen sivustoprojektiin samoihin kansioihin. Säilytä nykyiset ympäristömuuttujat. Sovellus ei tarvitse uusia npm-paketteja.
3. Aja `node scripts/test-admin-dashboard.cjs`, `npx tsc --noEmit` ja tavallinen tuotantokäännös `npm run build`.
4. Julkaise normaalin Vercel-käytännön mukaan. Tarkista admin-kirjautuminen sekä tehtävän, kalenterimerkinnän, hinnan ja seuraajahavainnon tallennus oikeassa ympäristössä.

Ennen migraatiota koontiluvut ja aiemmat hallintasivut toimivat. Uusien tietojen tallennus näyttää odotustilan. Jos käyttäjä- tai kurssilähteen haku epäonnistuu, koonti ei esitä osittaista tulosta koko käyttäjäkuntana.

## Vercelin liikennetiedot

Aseta Vercelin palvelinympäristöön (ei NEXT_PUBLIC-muuttujiksi):

- `VERCEL_ANALYTICS_TOKEN`: nykyiseen Vercel-tiliin kuuluva access token, jolla on pääsy projektin Web Analyticsiin.
- `VERCEL_ANALYTICS_PROJECT_ID`: oikean sivustoprojektin tunniste.
- `VERCEL_ANALYTICS_TEAM_ID`: tiimitunniste, jos projekti kuuluu tiimille; henkilökohtaisessa projektissa tämän voi jättää pois.

Sivustolla on jo Vercel Analytics -komponentti. Varmista lisäksi, että Web Analytics on käytössä Vercel-projektissa ja että rajapinta on tilillä saatavilla. Kortti hakee tuotantoympäristön seitsemän viimeisen täyden UTC-päivän sivulataukset ja päiväkohtaiset kävijät. Vercelin `until`-raja on mukaan lukeva. Päivittäisiä kävijöitä ei summata viikon yksilöllisiksi kävijöiksi. Anonyymistä liikennedatasta ei voi poistaa henkilöitä sähköpostiosoitteen perusteella: ylläpitäjien poissulku koskee Supabase-lukuja.

Virallinen toteutusohje: https://vercel.com/docs/analytics/web-analytics-api
Rajapinnan parametrit: https://vercel.com/docs/rest-api/web-analytics/aggregates-page-views

## Instagram

Seuraajamäärän voi tallentaa päivämäärän kanssa käsin heti tietokantamigraation jälkeen. Saman päivän havainto päivitetään, jotta kuvaajaan ei tule kaksoiskappaleita. Havainnon voi korjata tai poistaa.

Meta-yhteyttä varten aseta palvelimelle:

- `INSTAGRAM_USER_ID`: ValintaGurun Instagram Professional -tilin numeerinen tunniste.
- `INSTAGRAM_ACCESS_TOKEN`: kyseiseen tiliin oikeuttava Meta-token, Facebook Login -yhteydellä.
- `META_GRAPH_VERSION`: oman Meta-sovelluksen tukema Graph API -versio muodossa `vNN.0`.

Käytä ammattilaistiliä, joka on yhdistetty Facebook-sivuun, ja varmista Meta-sovelluksen vaatimat käyttöoikeudet. Toteutus lukee `followers_count`- ja `username`-kentät Graph APIsta. Se hyväksyy vain käyttäjänimen `valintaguru`, jotta väärän tilin tilastot eivät tallennu. Tokenien luonti ja uusiminen tehdään Metassa; avaimia ei kirjoiteta koontinäkymään tai selaimeen.

Virallinen Meta-kokoelma: https://www.postman.com/meta/instagram/documentation/6yqw8pt/instagram-api

Kun yhteys on asetettu, päivän ensimmäinen työtilakäynti hakee puuttuvan seuraajahavainnon. Hae Instagramista -painikkeella voi päivittää saman päivän määrän. Seuranta ei pyöri taustalla työtilan ollessa suljettuna. Kuvaaja alkaa tallennetuista havainnoista; menneitä seuraajamääriä ei keksitä tai jälkikäteen päätellä nykyisestä määrästä.

## Tuottoarvion säännöt

- Käyttäjälähde on Supabase Auth. Kurssilähteinä ovat `student_courses` ja sivuston käyttämä valinnainen `course_entitlements`. Molemmat luetaan sivutettuina, jotta 1 000 rivin oletusraja ei vääristä lukuja. Sama oikeus lasketaan kerran käyttäjää kohden.
- Ylläpidon rajaaminen koskee uuden koontinäkymän käyttäjiä, omistuksia, aktiivisuutta, suorituksia ja ennusteita. Pois rajataan `admin@valintaguru.fi`, ympäristön `VALINTAGURU_ADMIN_EMAIL`, `info@valintaguru`-alkuisen verkkotunnuksen info-osoite sekä sähköpostin alkuosat `jani.tuomaala`, `iina.lindholm` ja `julianna.lintukangas` verkkotunnuksesta riippumatta. Tämä ei muuta kenenkään kirjautumis- tai ylläpito-oikeuksia.
- Oikis-omistajalta ei lasketa lisäksi G-kurssia. Useista Oikis-oikeuksista valitaan korkein paketti järjestyksessä `oikis-teho-etaope`, `oikis-teho`, `oikis-tiivis`, `oikis`. Pelkistä G-oikeuksista vastaavasti etäopetus ennen tavallista G:tä. Tämä on arviointisääntö; erillisiä ostotapahtumia tai päivitysostoja ei voi päätellä oikeustaulusta.
- Nykyiset listahinnat alustavat hinnat silloin, kun sellainen löytyy. Jokaisen kurssin hinnan voi muuttaa yhteiseen työtilaan. Muutokset eivät vaikuta verkkokaupan hintoihin. Puuttuva hinta näytetään puuttuvana. Nolla on sallittu, jos kurssi on maksuton.
- Omistusarvo = laskettavat omistukset × annetut hinnat. Mukana voi olla käsin myönnettyjä oikeuksia. Tämä on käyttäjän pyytämä tuottoarvio; toteutunut liikevaihto vaatii Holvin tai maksujärjestelmän tapahtumatiedot.
- Päivän kurssiomistushavainto tallentuu työtilan avautuessa ja päivittyy Tallenna päivän havainto -painikkeella. Havainnot eivät sisällä nimiä tai sähköpostiosoitteita.
- Ennuste vertaa nykytilannetta uusimpaan 7–35 vuorokautta vanhaan havaintoon. Molemmat arvot lasketaan nykyhinnoilla, jotta hinnan korotus ei näytä uusilta omistuksilta. Päiväkohtainen nettomuutos jatketaan 7, 30 ja 365 päivälle. Myös poistuneiden oikeuksien vaikutus huomioidaan. Ennustetta ei näytetä ilman riittävää historiaa tai kun lasketuista omistuksista puuttuu hintoja.
- Arviossa ei huomioida alennuksia, veroja, kuluja, palautuksia tai hakukauden kausivaihtelua. Vuosiluku on lineaarinen skenaario.

## Yhteinen työskentely

Tehtävillä on vastuuhenkilö, määräpäivä, prioriteetti ja valmistumistila. Kalenterissa päivää painamalla näkee sen merkinnät ja saa päivän valmiiksi lisäyslomakkeeseen. Tulevat merkinnät näkyvät aikajärjestyksessä ja menneet omassa avattavassa listassa. Tiedot ovat yhteisiä nykyisellä admin-tunnuksella kirjautuneille. Nykyistä yhden admin-osoitteen kirjautumissääntöä ei laajenneta.

Pikalinkeissä on valmiina Supabase, Vercel, Instagram, Meta Ads Manager, Meta Business Suite, Holvi, Resend ja sivusto. Voitte korvata palveluiden yleisosoitteet omilla projektikohtaisilla osoitteilla sekä lisätä muita https-linkkejä. Supabase-linkki johdetaan nykyisestä projektiosoitteesta.

Tietuekohtainen versiotarkistus estää vanhan välilehden tallennusta toisen tekemän muutoksen päälle. Virheen sattuessa lomakkeen sisältö säilyy. Sivun alareunan Lataa työtilan tiedot vie työtilan tiedot JSON-tiedostoksi.

## Tarkistusten tulos 28.10.2026

- 17/17 sääntö-, validointi-, rajapinta- ja integraatiotestiä läpi. Ulkoiset palvelut ja tietokanta on rajapintatesteissä korvattu testivastauksilla.
- Koko työkopion TypeScript-tarkistus läpi.
- Next.js-tuotantokäännös onnistui koodin kääntämisen ja Nextin tyyppitarkistuksen osalta. Koko käännös jäi kesken: ensimmäinen verkkoyhteydellinen ajo pysähtyi työkopion puuttuviin ympäristöasetuksiin, ja korjatun ajon suorituslupa evättiin. Lopullinen tuotantokäännös on ajettava ennen julkaisua.
- Selaimessa tarkistettu työpöytä- ja 390 pikselin mobiiliasettelu, kuukauden vaihto, päivän valinta, tehtävän muokkaus sekä lomakesisällön säilyminen tallennusvirheessä.
- Esikatselu käyttää merkittyjä esimerkkilukuja ja on erillään varsinaisesta sivustosta. Esimerkkidataa ei toimiteta tuotannon reiteille.
- Oikeaan Supabaseen ei ole ajettu migraatiota eikä integraatioita ole todennettu oikeilla Vercel/Meta-avaimilla. Näitä avaimia ei ollut käytettävissä.
