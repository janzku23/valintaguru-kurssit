# ValintaGuru Paytrail-kauppa – toteutus ja käyttöönotto

Tilanne 3.11.2026: toteutus on siirretty viralliseen projektikansioon `/Users/janituomaala/Guruverkkosivu/valintaguru-kurssit`. Tuotantovalmiutta tai päästä päähän toimivaa toimitusta ei ole vielä vahvistettu. Nykyisessä Supabase-kannassa on nyt kaupan perusrakenne. Käyttäjän erillisellä hyväksynnällä siihen ajettiin päättymättömien käyttöoikeuksien jatkomigraatio ja julkaistiin viisi Holvi-tuotetta; katso `SHOP-HOLVI-IMPORT.md`. Käyttäjän mukaan erillistä testiympäristöä ei vielä ole. Oikeaa rahaliikennettä ei ole käynnistetty eikä Verceliin julkaistu muutoksia.

Viimeisin ulkoasu-, etusivuhinta- ja kassakorjaus sekä 63 testin tulokset: `SHOP-POLISH.md`.

Oman Paytrail-kauppiaan itsepalvelukäyttöönotto ja käyttäjän itse tekemän tuotantojulkaisun ohje: `SHOP-PRODUCTION.md`. Uusi Maksuasetukset-välilehti tarkistaa tunnusten olemassaolon ja sallii omistajan nimenomaisen tuotantokytkennän; kytkentä ei tapahdu automaattisesti. Yrityksen osoite on nyt vahvistettu.

## Toteutettu

- `/kauppa`, tuotesivut, kategoriasuodatus, yhden kappaleen kurssioikeusostoskori, päällekkäisten pakettien esto, palvelimella laskettu alennus ja kassa ilman ennakkorekisteröitymistä.
- Nykyisen ValintaGuru-ulkoasun värit, serif-otsikot, kortit, navigaatio ja logo. Mobiiliasettelu sekä järjestelmän asetuksia automaattisesti seuraava vaalea/tumma teema.
- Paytrailin virallinen Payment API: maksu luodaan palvelimella, maksutavat valitaan Paytrailin omalla maksusivulla. Maksutapoja ei ole kovakoodattu selaimeen. HTTP-pyynnön ja vastauksen HMAC, callbackin kaikkien checkout-parametrien allekirjoitus ja maksun GET-varmennus ennen paid-tilaa.
- Selaimen paluu ei yksin avaa kurssia. Tilauksen tila, summa, EUR, maksutunniste, stamp ja viite varmistetaan. Pending/delayed eivät toimita oikeutta. Peruttu/hylätty maksu voidaan yrittää uudelleen.
- Tilaus, alennuskoodivaraus ja ostohetken tuoterivit tehdään SQL-transaktiossa. Toimitusjonoon lisääminen on osa vahvistetun maksun tietokantatransaktiota. Työjonossa on yksilölliset avaimet, vuokralukitus ja kasvava uudelleenyritysviive.
- Käyttäjä luodaan vasta vahvistetun maksun jälkeen Admin APIlla. Sähköpostia ei merkitä vahvistetuksi maksun perusteella. Olemassa oleva tunnus käytetään uudelleen; samanaikainen käyttäjänluonti käsitellään uudella haulla.
- Kirjautumislinkki lähetetään Supabase Authin `signInWithOtp`-toiminnolla nykyisen Resend-SMTP:n kautta. `shouldCreateUser: false`. Maksajan selaimeen ei palauteta istuntoa tai linkkiä. Nykyinen `/aseta-salasana` käsittelee sähköpostilinkin. Salasanoja ei lähetetä.
- Tilaus-, odotus-, peruuttamisilmoitus- ja palautusviestit käyttävät projektin nykyistä Resend HTTP APIa ja muuttujanimiä. Ehdot ja suostumukset liitetään vahvistukseen ostohetken tilannekuvasta. Lähetyshäiriö ei kumoa tilausta tai oikeuksia.
- Kurssioikeudet tallennetaan nykyiseen `student_courses`-tauluun. `shop_entitlement_grants` säilyttää ainoastaan ostolähteiden alkuperätiedot: sitä ei käytetä rinnakkaisena käyttöoikeustarkistuksena. Aiemmat aktiiviset rivit jäävät manuaalisiksi lähteiksi. Vanhaa `course_entitlements`-taulua ei muuteta.
- Kaupan oikeuksien omistaja, sähköpostin vahvistus ja vanheneminen tarkistetaan tietokannan rajoittavalla RLS-politiikalla. Manuaaliset oikeudet säilyvät nykyisten politiikkojensa mukaisina. Vanhan ylläpidon tuhoava poista-ja-lisää-oikeusmuokkaus korvataan atomisella RPC:llä, joka säilyttää ostolähteet. Ennen migraatiota nykyinen manuaalinen työnkulku säilyy vain, jos sekä kaupan RPC että tilaustaulu puuttuvat. Epäselvässä tietokantatilassa vanhaan käsittelyyn ei siirrytä.
- Nykyiseen Admin Centeriin lisätty `/admin/kauppa`: oikeat myyntiluvut ja 30 päivän kuvaaja, tuotehallinta, paketit, hinnat/ALV, julkaisu/arkistointi, alennuskoodit, sivutetut tilaukset, sähköpostilla rajattava ostohistoria, oikeudet, maksutunnisteet, suostumukset, toimitusjono ja uudelleenkäsittely.
- Kokonaiset ja osittaiset rajapintapalautukset. Ylläpitäjä valitsee nimenomaisesti tästä tilauksesta päätettävät tuoterivien oikeudet; muun tilauksen ja manuaalisen lähteen oikeudet säilyvät. Palautussumma varataan ennen API-kutsua, eikä epäselvää pyyntöä lähetetä automaattisesti uudelleen.
- Julkinen kaksivaiheinen `/kauppa/peruuta` vastaanottaa ilmoituksen myös toisessa selaimessa tilausnumerolla ja sähköpostilla. Sama vastaus palautetaan löytymättömään tilaukseen; vahvistus menee vain tallennetulle sähköpostille. Peruuttamispyyntö ei käynnistä automaattista rahansiirtoa.
- Tietokantaan tallennettava ympäristömerkintä suojaa testi-/tuotantokannan sekoittamiselta. Salaiset avaimet eivät ole NEXT_PUBLIC-muuttujia. IP-osoitteiden sijaan rajoituslaskureihin tallennetaan palvelinsalaisuudella laskettu HMAC. Tilaustiedot vaativat 256-bittisen HttpOnly-selainistunnon. Tilaustunniste yksin ei anna tietoja. Kaupan sivut eivät lähetä Vercelin analytiikka- tai Speed Insights -tapahtumia.

## Tiedostot ja tutkimus

Täydellinen uusien/muutettujen tiedostojen luettelo: `SHOP-FILES.md`. Lähtötilan tutkimus: `SHOP-AUDIT.md`. Nykyisen Supabasen taulukuvaus tarkistettiin vain lukemalla PostgREST OpenAPIa; sanitisoitu rakenne on `SHOP-SOURCE-SCHEMA.json`. Asiakasrivejä ei haettu eikä salaisia avaimia kopioitu.

## Tietokanta

Perusmigraatio: `supabase/migrations/20261103_paytrail_shop.sql`. Sen jälkeen tarvitaan `supabase/migrations/20261103000100_shop_unlimited_access.sql`; päättymätön käyttöoikeus tallennetaan NULL-kestona. Ylläpitäjä valitsee sen erillisellä valintaruudulla. Aiemmat määräaikaiset ja manuaaliset oikeudet säilyvät.

Uudet taulut: `shop_environment`, `shop_products`, `shop_discounts`, `shop_orders`, `shop_order_items`, `shop_payments`, `shop_refunds`, `shop_entitlement_grants`, `shop_jobs`, `shop_events`, `shop_rate_limits`.

`student_courses` saa sarakkeet `shop_manual_access` ja `shop_access_until`, rajoittavan lukupolitiikan ja manuaalisten lähteiden säilytystriggerin. Selaimen kirjoitusoikeudet poistetaan tästä taulusta; nykyiset palvelinpuolen ylläpitoreitit säilyvät. Kurssioikeustaulun nykyisiä sarakkeita tai käyttäjiä ei poisteta.

Kauppataulut ovat RLS-suojattuja ja service role -käyttöisiä. Julkinen tuotehaku kulkee palvelimen suodatuksen kautta. Privilegioidut RPC:t eivät ole selaimelle avoimia. Vahvistetun sähköpostin tarkistusfunktio on poikkeuksena authenticated-roolin kutsuttavissa; se palauttaa ainoastaan nykyisen käyttäjän vahvistustilan.

Ennen asennusta suorita `scripts/shop-preflight.sql` vain lukutilassa ja vertaile indeksejä, rajoitteita, triggereitä ja politiikkoja. OpenAPI ei paljasta niitä kaikkia. Migraatio pysähtyy, jos odotettu oikeustaulu tai yksilöllinen `(user_id,course_id)`-indeksi puuttuu. Tee varmuuskopio ja harjoittele migraatio erillisessä ympäristössä ennen tuotantoa.

Testikantaan merkitään tietoisesti ympäristö (korvaa viite oikealla TESTIprojektin viitteellä):

```sql
insert into public.shop_environment(id,mode,project_ref,merchant_id)
values(true,'test','TESTIPROJEKTIN_VIITE','375917');
```

Sovellus ei luo tai muuta tätä merkintää automaattisesti. Maksuasetukset-välilehti voi omistajan nimenomaisella toiminnolla alustaa puuttuvan tuotantokytkennän tunnusvarmennuksen jälkeen; katso `SHOP-PRODUCTION.md`. Tuotteet julkaistaan hallinnasta. Viisi nykyistä tuotetta tuotiin erikseen Holvista käyttäjän pyynnöstä; hinnoittelu ja ALV perustuvat Holviin, päättymätön kesto käyttäjän vahvistukseen.

## Ympäristömuuttujat

`.env.example` sisältää viralliset julkiset testitunnukset. `.env.local` on Gitistä poissuljettu.

Nykyiset: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `SUPPORT_FROM_EMAIL`, `VALINTAGURU_ADMIN_EMAIL`.

Uudet: `PAYTRAIL_MERCHANT_ID`, `PAYTRAIL_SECRET_KEY`, `PAYTRAIL_MODE`, `SHOP_SUPABASE_PROJECT_REF`, `SHOP_INTERNAL_SECRET`, `CRON_SECRET`, `SHOP_LIVE_ENABLED`, `SHOP_LEGAL_REVIEWED`, `SHOP_SELLER_POSTAL_ADDRESS`.

`SHOP_INTERNAL_SECRET` ja `CRON_SECRET` ovat erillisiä satunnaisia vähintään 32 merkin palvelinsalaisuuksia. Postiosoite on myyjän julkinen, todellinen osoite; sitä ei päätellä tai keksitä. `SUPPORT_FROM_EMAIL`-lähettäjän on oltava Resendissä hyväksytty.

## Testikaupan kokeilu

1. Luo erillinen Supabase-testiympäristö nykyisen skeeman pohjalta. Älä käytä nykyistä tuotantokantaa Paytrail-testitilausten käyttäjä- ja oikeusluonteihin.
2. Tarkista skeema yllä mainitulla SQL:llä, asenna migraatio ja lisää testikannan ympäristömerkintä.
3. Määritä tämän kopion `.env.local` esimerkin mukaan. Supabasen osoitteen, service role -avaimen, anon-avaimen, projektiviitteen ja tietokannan ympäristömerkinnän on kuuluttava samaan testiprojektiin. Pidä `PAYTRAIL_MODE=test`, `SHOP_LIVE_ENABLED=false`.
4. Aseta Authin Site URL ja sallitut redirect-osoitteet testidomainille, erityisesti `/aseta-salasana`. Säilytä nykyinen Resend SMTP. Tarvittaessa käytä mukana olevaa `sahkopostipohjat/shop-magic-link.html`-pohjaa Supabasen Magic Link -sähköpostissa.
5. Suorita `node --env-file=.env.local scripts/check-shop-environment.cjs`. Tarkistus on lukutilainen: se varmistaa asetukset, tietokannan ympäristömerkinnän ja allekirjoitetun Paytrail-maksutapalistan. Se ei korvaa SMTP:n tai callbackien testaamista.
6. Käynnistä `npm run dev` sovelluksen juuressa. Avaa `/admin/kauppa` nykyisellä ylläpitotunnuksella, lisää tuote todellisista kurssitunnisteista ja vahvista hinta, ALV, sisältö, kesto ja toimitusluokitus ennen julkaisua.
7. Avaa `/kauppa`, lisää tuote ja siirry kassalle. Paytrailin pankki-/korttivalinta tapahtuu sen omalla maksusivulla. Käytä hallinnassasi olevaa testisähköpostiosoitetta ja Paytrailin maksutapakohtaisia testiohjeita.
8. Oikea callback vaatii julkisesti saavutettavan HTTPS-testidomainin ja `NEXT_PUBLIC_SITE_URL`-arvon, joka vastaa sitä. Paikallinen localhost ei ole Paytrailista saavutettavissa. Kirjautumista vaativa Vercel-preview ei kelpaa callbackien kohteeksi.
9. Tarkista oikea testimaksu myös sulkemalla selain ennen paluuta. Varmista callback, käyttäjä, oikeus, SMTP-viesti, sähköpostin vahvistus ja kurssille pääsy. Testaa sama aiemmalla tunnuksella sekä toistettu callback. Testaa palvelun häiriö, ylläpidon toimitusuusinta ja sekä koko- että osapalautus.

Valmisteluvaiheen ulkoasutesti tehtiin valmistelukansion olemassa olevassa `qa/admin-preview`-sovelluksessa. Testisivua ei siirretty viralliseen projektiin, koska siellä ei ole tätä QA-sovellusta. Tuotantokomponentit ja kuva `docs/shop-qa/desktop-light.jpg` siirrettiin. Kuvan esimerkkituotteet eivät ole tietokantaan lisättyjä myyntituotteita.

## Jonon ajo ja häiriöt

Vahvistettu callback ja selaimen paluu käynnistävät toimitusjonon `after`-työnä. Jonot säilyvät kannassa myös prosessin keskeytyessä. `vercel.json` kutsuu `/api/shop/worker`-reittiä viiden minuutin välein `CRON_SECRET`-suojauksella. Tarkista Vercel-tilauksen soveltuvuus: Hobby sallii vain päivittäisen cron-ajon; tämä ajo vaatii Pro-/Enterprise-tason tai vastaavan luotettavan ulkoisen ajastimen. Vercelin cron ei normaalisti aja preview-julkaisuja, joten testiin tarvitaan myös hallittu työjonon kutsu tai oma ajastin. Lähde: https://vercel.com/docs/cron-jobs/usage-and-pricing .

Worker yrittää epäonnistuneita töitä uudelleen, tarkistaa keskeneräisiä tunnettuja Paytrail-maksuja ja päivittää vanhentuneiden shop-oikeuksien materialisoidun tilan. RLS estää vanhentuneen oikeuden käytön välittömästi ajastimesta riippumatta. Epäonnistuneet työt näkyvät hallinnassa, eivät katoa jonosta. Ajastimen ja epäonnistuneiden töiden valvonta on otettava käyttöön julkaisuympäristössä.

Jos maksun luominen aikakatkaistaan ennen maksutunnisteen tallennusta, tila jää `unknown`-tilaan. Paytrailin allekirjoitettu callback pystyy liittämään tapahtuman tallennettuun stampiin. Muussa tapauksessa ylläpitäjä hakee maksutunnisteen kauppiaspaneelista ja tarkistaa sen hallinnan allekirjoitetulla GET-toiminnolla. Epäselvää maksua ei veloiteta uudella automaattisella yrityksellä.

Epäselvä palautus varaa summan. Sen tila on varmistettava Paytrailista; onnistumista ei voi merkitä vapaalla ylläpitäjän syötteellä. Maksutapa, joka ei tue API-palautusta, vaatii Paytrailin tukeman manuaalisen menettelyn. Sähköpostipalautuksen automaattista fallbackia ei käytetä, koska sen hyväksymiskuittaus ei kaikissa tapauksissa todista rahansiirron valmistumista.

Resendin idempotenssiavain on vakaa työkohtaisesti. Palvelun avainten säilytysaika on 24 tuntia, joten erittäin pitkässä epäselvässä lähetyshäiriössä sähköposti voi tulla useammin kuin kerran. Supabasen SMTP-kutsun ja työjonon kuittauksen välisessä kaatumisessa myös kirjautumisviesti voidaan lähettää uudelleen. Maksut ja kurssioikeuksien toimitus pysyvät idempotentteina. Lähde: https://resend.com/docs/dashboard/emails/idempotency-keys .

## Oikeudelliset tiedot ja tuotanto

Yrityksen nimi, Y-tunnus ja asiakaspalveluosoite on otettu nykyisestä projektista, ei keksitty. Myyjän postiosoite on vahvistettu 3.11.2026: Purolantie 3, 65300 Vaasa. Se tulee yhteisestä julkisesta yritystiedosta; ympäristömuuttujalla voi tarvittaessa korvata osoitteen. Vahvista myös yritystietojen ajantasaisuus, tuotekohtainen ALV, käyttöoikeuden ehdot (näille viidelle tuotteelle käyttäjä vahvisti päättymättömän keston), opetuksen aikataulut, palvelu-/sisältöluokitus, mahdolliset paketinosat ja kuluttajaoikeudet.

Nykyisten ehtosivujen virheellinen automaattinen kirjautumiseen sidottu peruuttamisoikeuden menetys on poistettu. Kassalla on erilliset hyväksynnät välittömästä toimituksesta ja digitaalisen sisällön peruuttamisoikeuden menettämisestä soveltuvin osin. Opetusta sisältävä palvelu arvioidaan erikseen. Peruuttamistoiminto on näkyvissä navigaatiossa ja vahvistuksessa. Ehdot tallennetaan tilaukseen ja lähetetään pysyvällä tavalla.

Tarkistetut viranomaislähteet:
- https://www.kkv.fi/kuluttaja-asiat/tietoa-ja-ohjeita-yrityksille/verkkokauppiaille/peruuttamisoikeus-ja-peruuttamisaika/
- https://www.finlex.fi/fi/lainsaadanto/1978/38

Tuotantoon siirryttäessä käytetään vastaavasti tarkistettua tuotantoskeemaa ja `shop_environment`-riviä, tuotantoprojektin Supabase-asetuksia, oikeita suojattuja Paytrail-tunnuksia, `PAYTRAIL_MODE=production` ja oikeaa HTTPS-domainia. Omistaja ottaa `SHOP_LEGAL_REVIEWED=true` ja `SHOP_LIVE_ENABLED=true` käyttöön vasta todentamisen jälkeen. Preview-ympäristössä tuotantomaksut estetään. Integraation lähdekoodia ei tarvitse muuttaa. Tunnusten vaihto tehdään Vercelin suojatuissa ympäristömuuttujissa ja julkaisu käännetään uudelleen. Vanhat testitilaukset eivät muutu tuotantotilauksiksi; ympäristöt erotetaan omiin kantoihin.

## Henkilötiedot ja säilytys

Tilaukselle kerätään nimi ja sähköposti, mutta ei tarpeettomia osoite-, henkilötunnus- tai korttitietoja. IP-osoitteita, maksujen raakavastauksia, salasanoja tai kirjautumislinkkejä ei tallenneta tapahtumalokiin. Rajoituslaskurit siivotaan vuorokauden kuluttua vanhenemisesta. Kaupan selainistunto vanhenee 30 päivässä.

Yrityksen on vahvistettava kirjanpitotietojen lakisääteinen säilytysaika, tukilokien säilytysaika, rekisteröityjen pyyntöjen käsittely ja palveluntarjoajien tietojenkäsittelyehdot. Toteutus ei poista automaattisesti lakisääteisiä tilaus-/maksutositteita tai vanhoja käyttäjiä. Nämä eivät saa kadota teknisen siivouksen yhteydessä.

## Todentamisen raja

Tarkat ajetut komennot ja tulokset: `SHOP-TEST-REPORT.md`. Paytrailin aito testimaksupyynnön luonti ja tilan haku on ajettu. Maksun suorittamista, julkista callbackia, todellista Supabase-käyttäjän luontia, sähköpostin saapumista tai asiakkaan koko kirjautumisketjua ei ole ajettu tässä työssä. Tuotantokelpoisuutta ei pidä päätellä paikallisista sopimus-/fixture-testeistä.
