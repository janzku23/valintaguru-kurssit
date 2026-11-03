# Kaupan hienosäätö 3.11.2026

Muutokset tehtiin viralliseen projektiin `/Users/janituomaala/Guruverkkosivu/valintaguru-kurssit`.

- Asiakkaan tuotekorteista, tuotesivuilta, ostoskorista, kassalta, tilausnäkymästä ja vahvistusviesteistä poistettiin päättymättömään kestoon liittyvä toistuva ilmoitus. Mahdollinen määräaikaisen tuotteen kesto säilyy näkyvissä. Tietokannan oikeudet ja kestot eivät muuttuneet. Ylläpidon kestoasetus säilyy sanoilla ”Toistaiseksi voimassa oleva käyttöoikeus”.
- Kauppa ja kauppahallinta seuraavat aina järjestelmän väriteemaa. Valitsin poistettiin; vanha selaimeen tallennettu teemavalinta ei vaikuta.
- ”Peruuta sopimus” poistettiin kaupan navigaatiosta ja alatunnisteesta. Ehtosivu, peruutusreitti ja tilauksen jälkeinen käsittely säilyvät.
- Alkuperäiset kuvat esitetään yhtenäisissä kehyksissä. Oikis-kuvat mahtuvat kokonaisina, Valintakoe G:n kuvien tyhjää ylä-/alareunaa rajataan CSS:llä. Tuotesivulla on nyt myös kuva. Etusivu käyttää Next Imagen kuvakokojen optimointia. Kuvien alkuperäisiä tiedostoja ei muutettu.
- Etusivun hinnat haetaan Supabasesta jokaisella sivupyynnöllä palvelimella ja välitetään minimimuodossa kurssikorteille. Kampanjahinta huomioidaan. Paketin hintaa ei näytetä yksittäisen sisältyvän kurssin hintana. Ilman myytävää tuotetta ei näytetä keksittyä hintaa.
- Nykyisen karusellin kaksi setState-in-effect-lintvirhettä korjattiin siirtämällä suodattimen indeksin nollaus käyttäjän tapahtumaan ja käyttämällä kelvollista johdettua indeksiä.

## Kassalle pääsyn syy ja korjaus

Alun perin `.env.local` sisälsi tuotantosivuston osoitteen mutta ei Paytrailin eikä kaupan sisäisiä asetuksia. Hintahaun guard vaati myös maksupalvelun tunnukset, joten ostoskori ei saanut hintavahvistusta ja kassalinkki jäi pois käytöstä. Lisäksi paikallisen pyynnön alkuperä ei vastannut asetusten tuotanto-osoitetta.

Hintahaun ja istunnon asetukset erotettiin maksupalvelun asetuksista. Alkuperä-, palvelinsalaisuus- ja pyyntömäärän tarkistukset säilyvät. Maksun luominen vaatii edelleen täydet maksutarkistukset ja tietokannan ympäristömerkinnän. Tuotantomaksut vaativat aina HTTPS:n.

Gitistä poissuljettuun `.env.development.local`-tiedostoon lisättiin vain kehityskäyttöön julkiset Paytrail-testitunnukset, testitila, localhost:3000-osoite, nykyinen projektiviite ja satunnaiset palvelinsalaisuudet. Avaimia ei tulostettu raporttiin eikä tuotantomaksuja sallittu. `.env.local` säilyi ennallaan.

Nykyisen Supabasen `shop_environment` on vain lukemalla tarkistettuna tyhjä. Sen vuoksi kassasivu näyttää selkeän ilmoituksen eikä salli maksun luomista. Tuotantokantaa ei muutettu testimaksukannaksi. Oikeita Paytrail-tunnuksia ei tarvita testimaksamiseen; puuttuvat vielä tarkoituksella määritetty maksuympäristö ja julkisesti saavutettava HTTPS-callback. Käyttäjä on aiemmin ilmoittanut, ettei erillistä testiympäristöä ole.

## Todentaminen

- `npm test`: 22 JS-kauppatestiä, 24 PGlite SQL-testiä ja 17 nykyistä admin-testiä = 63 läpäistyä.
- TypeScript: läpäisty. Muutettujen kauppa- ja etusivutiedostojen ESLint: läpäisty.
- Next.js-tuotantobuild: läpäisty; etusivu renderöidään hinnan osalta pyynnön yhteydessä (`connection()` Suspensen sisällä).
- Selaimessa lisättiin Oikis Tiivis, varmistettiin palvelimelta 129 € ja siirryttiin ostoskorin linkistä kassalle. Asiakastiedot ja yhteenveto avautuivat; maksupainike oli odotetusti estetty ympäristömerkinnän puuttuessa. Ei lähetetty tilausta eikä luotu käyttäjää. Tarkistuksessa lisätty tuote poistettiin lopuksi korista.
- Etusivulla varmennettiin Oikis Tiiviin 129 € hinta ja suora Tutustu ja osta -tuotelinkki. Kaupassa ei ollut teeman valitsinta eikä navigaation peruutuslinkkiä.
- Ei Paytrailin päästä päähän -maksutestiä eikä Vercel-julkaisua. Koko projektin aiemmat, tähän muutokseen kuulumattomat lintvirheet on kuvattu erillisessä raportissa.

Uudet lähdetiedostot: `app/home/CoursesSection.tsx`, `lib/shop/offers.ts`. Muutettuja: `app/page.tsx`, `app/home/CoursesClient.tsx`, `components/CourseShowcase.tsx`, kaupan navigaatio/teema/katalogi/kassa/tilaus/hallinta, kaupan layout/etusivu/tuotesivu/kassasivu ja CSS, `lib/shop/config.ts`, `server.ts`, `types.ts`, `email.ts` sekä `scripts/test-shop.cjs`. Ei uusia SQL-migraatioita.
