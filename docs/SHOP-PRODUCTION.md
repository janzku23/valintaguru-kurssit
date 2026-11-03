# Oman Paytrail-kauppiaan käyttöönotto

Tilanne 3.11.2026: koodi on virallisessa projektissa. Omistaja ilmoitti julkaisevansa itse. Tässä työvaiheessa ei tehty Git-committia, pushia, Vercel-julkaisua, tuotantoaktivointia, maksua tai tietokantamuutosta. Tuotantotunnuksia ei ole annettu eikä tarkistettu. Kauppaa ei väitetä avatuksi.

## 1. Varmista julkaisun ajastus

Nykyinen `vercel.json` kutsuu `/api/shop/worker`-reittiä viiden minuutin välein. Tämä ajastus vaatii Vercel Pro-/Enterprise-tason. Hobby-tasolla näin tiheä cron estää julkaisun. Jos käytät Hobbyä, tarvitaan erikseen toteutettu luotettava ulkoinen ajastin ja sen mukainen Vercel-kokoonpano ennen avaamista; sellaista ei ole tässä muutoksessa otettu käyttöön. Älä oleta kerran vuorokaudessa tapahtuvan ajon vastaavan tätä toimitus- ja palautumismallia.

Vercelin oma ohje: https://vercel.com/docs/cron-jobs/usage-and-pricing

## 2. Lisää tunnukset nykyisen projektin Vercel-asetuksiin

Avaa Vercelistä nykyinen ValintaGuru-projekti ja **Settings → Environment Variables**. Valitse kohteeksi **Production**. Älä kirjoita salaisuuksia lähdekoodiin, tietokannan tuotetauluun tai chattiin. Secret-arvot tallennetaan Vercelin **Secret**-tyyppisinä (vanha nimitys Sensitive). Vercelin ohje: https://vercel.com/docs/environment-variables/sensitive-environment-variables

| Muuttuja | Arvo Production-ympäristössä | Tyyppi |
| --- | --- | --- |
| `PAYTRAIL_MERCHANT_ID` | Oma Paytrail-kauppiastunnuksesi | Config |
| `PAYTRAIL_SECRET_KEY` | Oman kauppiaasi secret | Secret |
| `PAYTRAIL_MODE` | `production` | Config |
| `NEXT_PUBLIC_SITE_URL` | `https://www.valintaguru.fi` | Config |
| `SHOP_SUPABASE_PROJECT_REF` | `xymsfvgzfkoolxejfbxi`, kun käytät nykyistä tuotantokantaa | Config |
| `SHOP_INTERNAL_SECRET` | Itse luotu satunnainen vähintään 32 merkin palvelinsalaisuus | Secret |
| `CRON_SECRET` | Eri satunnainen vähintään 32 merkin palvelinsalaisuus | Secret |
| `SHOP_LEGAL_REVIEWED` | `true` vasta kun olet tarkistanut ehdot, ALV:n sekä opetuksen toimitustiedot | Config |
| `SHOP_LIVE_ENABLED` | `true`, kun hyväksyt oikean rahaliikenteen käyttöönoton | Config |

Voit luoda kumpaankin palvelinsalaisuuteen eri arvon ajamalla omassa terminaalissasi erikseen `openssl rand -hex 32`. Älä kopioi tuloksia tähän keskusteluun.

Säilytä nykyiset Production-ympäristön `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` ja `RESEND_API_KEY`. Anon-, service role- ja projektiviitteen on kuuluttava samaan tuotantoprojektiin. `SUPPORT_FROM_EMAIL` on valinnainen: lähettäjä käyttää samaa oletusta kuin nykyiset tiedustelu- ja admin-vastaussähköpostit, `ValintaGuru <info@valintaguru.fi>`. Varmista, että lähettäjädomain on hyväksytty Resendissä. Supabasen kirjautumisviestit käyttävät nykyistä erillistä Auth SMTP -määritystä.

Yrityksen vahvistettu julkinen osoite **Purolantie 3, 65300 Vaasa** on nyt yhteisessä `data/shop/seller.ts`-tiedostossa ja näkyy kaupan ehdoissa sekä nykyisellä yhteystietosivulla. Sen voi tarvittaessa korvata kaupan ehdoissa muuttujalla `SHOP_SELLER_POSTAL_ADDRESS`. Oletusosoitetta varten ei tarvita uutta ympäristömuuttujaa.

Kehityksen `.env.development.local` jää testikäyttöön eikä kuulu julkaistavaan versionhallintaan. Vercelin Production-arvot ovat erilliset. Omien tunnusten käyttöönotto ei vaadi Paytrail-integraation lähdekoodimuutosta.

## 3. Julkaise nykyinen projekti

Julkaise koko tämän projektin muutoskokonaisuus nykyisellä Git/Vercel-työnkulullasi. Pelkkä vanhan Vercel-version Redeploy ei lisää paikallisia uusia tiedostoja: ensin uuden lähdekoodin täytyy olla julkaisussa mukana. Tämän työn paikallisia muutoksia ei ole commitattu tai pushattu puolestasi.

Asetusmuutokset tulevat voimaan uudessa julkaisussa. Tarkista, että Vercelin Production-domain on `www.valintaguru.fi`; ohjaa muut domainit samaan kanoniseen osoitteeseen. Origin-tarkistusta ei poisteta.

Varmista myös, että Vercelin System Environment Variables ovat käytössä: tuotantoaktivointi edellyttää automaattista `VERCEL_ENV=production`-arvoa. Preview tai localhost ei aktivoi tuotantokantaa.

## 4. Aktivoi omat tunnukset hallinnasta

1. Avaa julkaistulla sivustolla `/admin/kauppa` nykyisellä ylläpitäjätunnuksella. Ylläpitäjän sähköpostin on oltava vahvistettu. Nykyisiä roolitarkistuksia ei muutettu.
2. Valitse **Maksuasetukset**. Näet tämän julkaisun tilan, kauppiastunnuksen, palvelinasetusten olemassaolon ja tietokantakytkennän. Secret-arvoja ei palauteta selaimeen.
3. Tarkista käyttöönoton kohdat. Paikallisen näkymän testitunnukset eivät kuvaa Vercelin Production-asetuksia.
4. Kun muut kohdat ovat kunnossa ja tietokannan ympäristömerkintä puuttuu, valitse vahvistus ja paina **Tarkista tunnukset ja aktivoi tuotantokauppa**.
5. Palvelin varmistaa Paytrail-tunnukset allekirjoitetulla `GET /merchants/payment-providers` -pyynnöllä. Se ei luo veloitusta.
6. Vasta onnistuneen tarkistuksen jälkeen palvelin lisää `shop_environment`-tauluun tuotantotilan, nykyisen projektiviitteen ja oman kauppiastunnuksesi. Tapahtuma tallennetaan `shop_events`-tauluun. Aktivointi ei luo tilausta, käyttäjää tai kurssioikeutta.
7. Tietokannan nykyistä eri kytkentää ei korvata. Myös eri maksuympäristön tai kauppiaan tilaukset estävät uuden kytkennän. Toistettu saman kytkennän aktivointi on turvallinen.
8. Päivitä kassasivu. Maksupainike avautuu vasta, kun palvelinasetukset ja tietokannan kytkentä vastaavat toisiaan.

Alkuperäinen ja päättymättömän käyttöoikeuden migraatio ovat jo nykyisessä kannassa. Tämä muutos ei tarvitse uutta SQL-migraatiota eikä vanhoja migraatioita pidä ajaa uudestaan. Aktivoinnin yksi ympäristörivi korvaa tässä vaiheessa aiemmin tarvittavan käsin kirjoitetun ympäristömerkinnän, ei muita tauluja tai oikeuksia.

## 5. Varmista todellinen toimitus ennen yleistä myyntiä

- Callbackit ovat `https://www.valintaguru.fi/api/shop/callback`; selaimen paluu on `/api/shop/return`. Molempien on oltava julkisesti saavutettavissa ilman Preview-kirjautumisporttia. Selaimen paluu yksin ei avaa kurssia.
- Tarkista Supabase Authin Site URL ja `/aseta-salasana`-paluuosoite sekä nykyinen Resend SMTP.
- Varmista maksun, callbackin, kurssioikeuden, tilausviestin, kirjautumislinkin ja kirjautumisen koko ketju. Testaa myös selain suljettuna sekä palautus. Älä väitä paikallisia mock-testejä oikeaksi maksutestiksi.
- Varmista Vercel Cronin onnistunut `/api/shop/worker`-ajo ja epäonnistuneiden töiden seuranta. Pelkkä `CRON_SECRET`-arvon olemassaolo ei todenna ajastinta.

Erillistä Supabase-testiympäristöä ei käyttäjän mukaan ole. Omien tuotantotunnusten maksun suorittaminen on oikea veloitus, ei Paytrailin julkinen testimaksu. Tässä työssä ei ole suoritettu uutta päästä päähän -maksutestiä eikä oikeaa veloitusta.

## Muutokset ja todennus

Uudet: `components/shop/PaymentSettings.tsx`, `app/api/admin/shop/settings/route.ts`, `lib/shop/settings-model.ts`, `lib/shop/readiness.ts`, `data/shop/seller.ts` ja tämä ohje.

Muutetut: nykyinen `components/shop/AdminShop.tsx`, `app/admin/kauppa/page.tsx`, `lib/shop/config.ts`, `lib/shop/terms.ts`, `lib/shop/email.ts`, `data/legalPages.ts`, `.env.example`, `scripts/check-shop-environment.cjs` ja `scripts/test-shop.cjs` sekä dokumenttiluettelo. Tuotantohallinta avaa oletuksena tuotantotilaukset, testihallinta testitilaukset.

- 28 JS-kauppatestiä + 24 PGlite SQL-testiä + 17 nykyistä admin-testiä = **69 läpäistyä testiä**.
- Uudet testit kattavat salaisuuksien poissulkemisen asetusten vastauksesta, admin-tarkistukset, vahvistuksen, Preview-/kehitysestot, väärän tietokantakytkennän, ristiriitaiset tilaukset, epäkelvot Paytrail-tunnukset ja idempotentin käyttöönoton. Käyttöönoton provider-testeissä käytetään mock-palvelua.
- Oikeasta paikallisesta sovelluksesta `/api/admin/shop/settings` palautti kirjautumattomalle **403**.
- Käyttöönoton tilapalvelu tarkistettiin oikeaa nykyistä Supabasea vasten vain lukemalla: tuotantoaktivointi pysyy estettynä paikallisessa testitilassa; ympäristökytkentää ei luotu.
- TypeScript ja muutettujen kauppatiedostojen ESLint läpäisty. Next.js-tuotantobuild läpäisty.
- Julkiset ehdot tarkistettiin selaimessa: uusi osoite näkyy. Avoin Safari-istunto ei antanut nykyisen admin-sivun käyttöoikeutta; kirjautuneen adminin uuden välilehden visuaalista tarkistusta ei väitetä suoritetuksi.
- Koko projektin aiempi linttaus ei ole puhdas; katso `SHOP-LINT-REMAINING.md`. Tuotantomaksua, oikeiden tuotantotunnusten provider-varmennusta, julkista callbackia tai sähköpostin saapumista ei tässä vaiheessa testattu.
