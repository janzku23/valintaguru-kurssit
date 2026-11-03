# Todelliset testitulokset – 3.11.2026

Alla ovat valmisteluvaiheen tarkistukset. Virallisen projektikansion siirron jälkeiset ajot ja yhteensopivuuskorjauksen lisätesti kirjataan tiedostoon `SHOP-TRANSFER.md`.

## Paikalliset tarkistukset

| Tarkistus | Todellinen tulos |
|---|---|
| `npm run typecheck` | Hyväksytty, ei TypeScript-virheitä. |
| `npm test` | Hyväksytty: 18 sovellus-/rajapintasopimustestiä, 22 PostgreSQL-testiä, 17 nykyisen ylläpidon regressiotestiä. Yhteensä 57/57. |
| Kaupan uusien tiedostojen, oikeusrajapinnan ja muutetun headerin rajattu ESLint | Hyväksytty, ei virheitä tai varoituksia. |
| `npm run lint` / koko lähdekoodin ESLint | Ei läpäise: 61 virhettä, 17 varoitusta nykyisissä vanhoissa osissa. Erittely: `SHOP-LINT-REMAINING.md`. Kaupan uusissa tiedostoissa ei havaintoja. |
| Tavallinen `npm run build`, Next.js 16.3.5 / Turbopack | Hyväksytty, tuotantokäännös ja reittien generointi valmistuivat. |
| Webpack-tuotantobuild | Myös hyväksytty aikaisemmassa tarkistuksessa. |
| Nykyisen Supabasen PostgREST OpenAPI | Haettu onnistuneesti vain lukutilassa. Kurssioikeustaulujen tunnetut sarakkeet vastaavat sovelluksen oletuksia. Ei haettu asiakasrivejä eikä tehty muutoksia. |

Buildissa käytettiin julkisia käännöspaikkamerkkejä `NEXT_PUBLIC_SUPABASE_URL=https://build-placeholder.supabase.co` ja `NEXT_PUBLIC_SUPABASE_ANON_KEY=build-placeholder`, koska tähän projektikopioon ei määritetty testiympäristöä. Tämä todentaa käännöksen, ei toimivaa kirjautumista. Julkaisua varten build on tehtävä oikean kohdeympäristön asetuksilla. Paytrailin tai Supabasen palveluavaimia ei tarvittu käännökseen.

Projektikopion alkuperäinen node_modules oli linkki alkuperäisen checkoutin riippuvuuksiin. Turbopack hylkäsi sen projektin ulkopuolelle osoittavana linkkinä. Linkki siirrettiin talteen `/tmp/valintaguru-original-node-modules-link-20261103` ja tähän kopioon asennettiin lukitut riippuvuudet `npm ci` -komennolla. Alkuperäisen checkoutin riippuvuuskansiota ei muutettu. PGlite on vain kehitysriippuvuus. Alkuvaiheen SQL-testit ajettiin väliaikaisella moduulipolulla; viimeinen koko testiajo onnistui suoraan projektin omilla riippuvuuksilla ilman tätä poikkeusta.

## Aidosti suoritettu Paytrail-rajapintatesti

Komento: `node scripts/smoke-paytrail.cjs` verkkoyhteydellä. Se lukee ainoastaan `.env.example`-tiedoston julkiset testitunnukset eikä ota yhteyttä Supabaseen.

- `POST /payments`: 100 sentin testimaksupyyntö luotiin.
- Maksutunniste: `b3d12671-e61f-4bd6-af50-abf5f622346c`.
- Luonnin request-id: `9dd826ea-d6f1-4803-b041-305c981e3d05`.
- `GET /payments/{transactionId}`: tila `new`, summa, EUR, stamp ja viite täsmäsivät.
- Haun request-id: `daf29e6a-f13c-4c7b-8078-ffe6979370b6`.
- Molempien HTTP-vastausten HMAC tarkistettiin onnistuneesti.
- Paytrail palautti 21 maksutapaa.
- Maksua EI suoritettu. Testi EI kutsunut julkista callbackia, luonut käyttäjää tai avannut kurssia.

Testitapahtumat poistuvat Paytrailin testipalvelun käytännön mukaan; tunnisteen myöhempi puuttuminen ei tarkoita, ettei testiä tehty. Virallinen dokumentaatio: https://docs.paytrail.com/ .

## Testien sisältö ja rajat

18 sovellustestiä kattavat HMAC SHA-256/SHA-512:n, tarkat UTF-8-tavut, uudet checkout-kentät, duplikaattiparametrit, maksun vastaavuuden, ostoskorin päällekkäisyydet, HTML-escapingin, Paytrail-HTTP-sopimuksen, turvallisen redirectin, ylläpidon pääsyneston, uuden/olemassa olevan/samanaikaisesti syntyvän käyttäjän käsittelyn, SMTP-kutsun, Resendin virheen ja idempotenssiavaimen, ympäristösuojauksen, ymmärrettävät verkkovirheet, katalogin julkaisu-/näkyvyyssuodatuksen ja toisen selainistunnon tilauspääsyn eston.

HTTP, Supabase Auth, SMTP ja Resend ovat näissä paikallisissa sopimustesteissä nimenomaisesti mockattuja. Ne eivät todista sähköpostin saapumista tai oikean Auth-käyttäjän luontia.

22 SQL-testiä suorittavat varsinaista migraatiota ja PL/pgSQL-funktioita PGliten PostgreSQL-moottorissa. Testiskeema sisältää nykyisestä koodista ja OpenAPIsta tunnetun oikeustaulun sopimuksen sekä hallitun Auth-fixturen. Testit kattavat hintasnapshotit, vanhentuneen/väärennetyn summan, paketit, myynnistä poiston, prosentti-/senttialennuksen, koodin voimassaolon ja käyttörajan, idempotentin tilauksen, suostumuksen, odottavat/viivästyneet/hylätyt maksut, toistetun maksuvahvistuksen, väärät tunnisteet, käyttäjän sähköpostin vastaavuuden, oikeuksien toimituksen, manuaaliset lähteet, koko-/osapalautukset, ylisuuren palautuksen eston, palautuksen ennen toimitusta, oikeuksien vanhenemisen, RLS-roolit, vahvistamattoman sähköpostin, selainkirjoitusten eston, jonon vuokralukot, rajoituslaskurit, peruuttamisvahvistuksen, myyntitilastot ja ympäristömerkinnän.

PGlite-testi ei ole testi nykyisen Supabasen kaikilla vanhoilla indekseillä, triggereillä ja RLS-säännöillä. Oikeaa samanaikaista palvelinkuormaa tai Vercelin prosessin katkeamista ei ole kuormatestattu. SQL-lukkojen ja vuokralukon käyttäytyminen tarkistettiin paikallisissa sopimustapauksissa; moniyhteyskuormitus on testattava erikseen.

## Käyttöliittymän selaintarkistus

Nykyisen `qa/admin-preview`-projektin lisätty shop-sivu renderöi samoja kaupan komponentteja selvästi merkittyjen testituotteiden avulla. Tuotteet eivät siirry tuotantoon, eikä sivulla ole onnistunutta maksua emuloivaa rajapintaa.

- 390 px mobiilileveys: yksi tuotekorttisarake, dokumentin leveys 390 px, ei vaakaylivuotoa.
- Vaalea ja tumma teema tarkistettu selaimessa; vaalean taustan mitattu väri rgb(245,248,255), tumman rgb(15,23,42).
- 1280 px työpöytäleveys: kolme korttisarakketta, dokumentin leveys 1280 px.
- Tuotteen lisääminen, ostoskorin säilyminen sivunvaihdossa ja poistaminen tarkistettu. Määrä pysyy yhtenä.
- Tallenne: `shop-qa/desktop-light.jpg`. Tämä on komponenttien visuaalinen testi, ei aito ostotapahtuma.
- Havaitut teeman kontrasti- ja verkkovirheviestien ongelmat korjattiin. Selaimen alustuksessa lisättiin ostoskorin lataustila ja estettiin keskeneräisen alustuksen painallukset.
- Lopun lisäkuvien tallentamista rajoitti selaintyökalun yhteyden katoaminen. Selaimen tilapäinen kokomuutos palautettiin. Mobiilin toiminnallista maksamista tai oikeaa admin-kirjautumista ei väitetä testatuksi.

## Edelleen tekemättä

Todellinen koko ketju Paytrailin testimaksusta allekirjoitetun callbackin kautta oikeaan Supabase Auth -tunnukseen, Resend-sähköpostin saapumiseen ja kurssille kirjautumiseen. Samoin todellinen peruttu/epäonnistunut/viivästynyt maksu, API-palautukset eri maksutavoilla ja virheestä toipuminen oikeissa palveluissa.

Käyttäjän mukaan erillistä testiympäristöä ei ole. Nykyiseen kantaan ei asennettu migraatiota tai luotu testiasiakkaita. Tuotantojulkaisua ei tehty. Näiden rajojen vuoksi toteutusta ei ole merkitty tuotantovalmiiksi.
