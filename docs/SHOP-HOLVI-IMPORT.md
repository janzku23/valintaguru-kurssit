# Holvi-tuotteiden tuonti 3.11.2026

Virallinen projekti: `/Users/janituomaala/Guruverkkosivu/valintaguru-kurssit`.

## Tietokantaan tallennettu ja julkaistu

Lähde: https://holvi.com/shop/ValintaGuru/ ja sen viisi tuotesivua, tarkistettu 3.11.2026. Tuotesivujen osoitteet, kuvaukset, sisältö, hinnat ja lähdekuvat on tallennettu tiedostoon `data/shop/holvi-products-20261103.json`. Kaupan toiminnalliset hinnat haetaan Supabasesta, eivät tästä lähdetiedostosta.

| Tuote | Hinta sis. ALV | Kurssitunnisteet |
| --- | --- | --- |
| Oikis Tiivis | 129,00 € | oikis-tiivis |
| Oikis Tehokurssi | 199,00 € | oikis-teho, oikis-tiivis, valintakoe-g |
| Oikis Teho + etäopetus | 379,00 € | oikis-teho-etaope, oikis-tiivis, valintakoe-g-etaope |
| Valintakoe G Tehokurssi | 120,00 € | valintakoe-g |
| Valintakoe G Tehokurssi + etäopetus | 279,00 € | valintakoe-g-etaope |

Kaikkien valuutta EUR, ALV 25,5 % ja käyttöoikeus ilman päättymispäivää käyttäjän nimenomaisen vahvistuksen perusteella. Etäopetustuotteet luokiteltiin palveluiksi, muut digitaaliseksi sisällöksi. Luokitus ja opetuksen ajantasaiset toimitusehdot vaativat edelleen yrityksen oikeudellisen tarkistuksen ennen oikeaa rahaliikennettä. Etäopetuksen kalenteri on erillinen käyttöoikeuden kestosta.

`shop_products` oli aluksi tyhjä. Viisi tuotetta tallennettiin ensin luonnoksina ja julkaistiin vasta jatkomigraation jälkeen. Julkaisun lukuvarmennus: kaikki viisi `published=true`, `visible=true`, `reviewed=true`, `archived=false`, `access_days=null`. Ei tuontiristiriitoja. Vanhoja tuotteita tai asiakastietoja ei poistettu. Pakettien oikeudet perustuvat Holvissa ilmoitettuun sisältöön ja projektin todellisiin kurssitunnisteisiin. Kuvat ovat projektin olemassa olevia `/public/holvi/kuvat/`-kuvia.

## Hyväksytty tietokantamuutos

Supabase: `xymsfvgzfkoolxejfbxi`, dashboardin PRODUCTION-kanta. Erillistä testiprojektia ei ole. Ensimmäinen ajamisyritys pysäytettiin automaattisessa hyväksyntätarkistuksessa. Käyttäjä hyväksyi sen jälkeen nimenomaisesti tuotantokantamuutoksen ja viiden tuotteen julkaisun. SQL-editorissa suoritus palautti `Success. No rows returned`. Julkaisu tehtiin vasta tämän jälkeen.

Ajetun SQL:n sisältö on `supabase/migrations/20261103000100_shop_unlimited_access.sql`. Suoritushetkellä tiedoston nimi oli `20261103_shop_unlimited_access.sql`; nimi muutettiin yksilölliseksi migraatioversioksi, koska perusmigraatiolla oli sama `20261103`-versionumero. SQL-sisältöä ei muutettu eikä nimenvaihto edellytä uutta ajoa. Migraatio ajetaan perusmigraation jälkeen.

Ennen muutosta nykyiset rajoitteet, kolme funktiota ja RLS-politiikat vietiin vain lukemalla varmuuskopioon:
`/Users/janituomaala/Documents/ChatGPT/valintaguruverkkosivu/output/holvi-import/supabase-schema-before-unlimited.json`.
Tämä on muutettujen skeemamäärittelyjen varmuuskopio, ei koko tietokannan palautusvarmuuskopio. Ennen muutosta tilauksia 0, kaupan käyttöoikeuslähteitä 0, tuotteita 5.

Muutos sallii NULL-arvon ostorivin kestolle ja kaupan käyttöoikeuslähteen päättymisajalle, päivittää julkaisurajoitteen sekä kolme toimitus-/oikeusfunktiota ja rajoittavan RLS-politiikan. NULL tarkoittaa päättymätöntä ostettua oikeutta; sähköpostin vahvistus ja omistajatarkistus säilyvät. Määräaikaiset oikeudet vanhenevat edelleen. Palautus ei poista toisen tilauksen tai ylläpitäjän myöntämää oikeutta. Vanhojen käyttäjien tunnuksia, kurssiaineistoja tai GuruPathia ei muutettu.

## Sovelluksen jatkomuutokset

- `lib/shop/types.ts`: päättymätön ostorivin kesto ja yhteinen kestoteksti.
- `lib/shop/admin.ts`, `components/shop/AdminShop.tsx`: päättymätön kesto vaatii ylläpitäjän erillisen valinnan.
- `components/shop/Catalog.tsx`, `Checkout.tsx`, `OrderStatus.tsx`, `app/kauppa/[slug]/page.tsx`, `lib/shop/email.ts`: selkeä päättymättömän oikeuden ilmoitus.
- `scripts/test-shop.cjs`, `scripts/test-shop-sql.cjs`: päättymättömän oikeuden validointi, toimitus, RLS ja eri lähteiden säilyminen palautuksessa.
- Uudet tiedostot: yllä mainittu jatkomigraatio, JSON-lähdeaineisto ja tämä raportti. Myös tiedostoluettelo ja käyttöönotto-ohje on päivitetty.

## Todennetut tulokset ja rajat

- `npm test`: 20 kaupan JS-testiä, 24 PGlite SQL-testiä ja 17 nykyistä admin-testiä, yhteensä 61 läpäistyä. Auth- ja sähköpostitestit käyttävät mock-palveluita.
- TypeScript-tyyppitarkistus ja muutettujen kauppatiedostojen ESLint läpäisty.
- `npm run build`: Next.js-tuotantobuild läpäisty virallisessa projektissa.
- Koko projektin aiempi linttaus sisältää edelleen muuhun koodiin liittyviä virheitä; katso `SHOP-LINT-REMAINING.md`. Koko projektin linttausta ei väitetä puhtaaksi.
- Virallisen projektin käynnissä oleva `http://localhost:3000/kauppa` tarkistettiin oikeilla Supabase-tuotteilla: viisi oikeaa nimeä ja hintaa, päättymätön kesto ja toimivat Lisää ostoskoriin -painikkeet.
- Todellinen Paytrailin päästä päähän -maksu, julkinen callback, uuden käyttäjän luonti ja sähköpostin saapuminen eivät ole tämän tuonnin yhteydessä testattuja. Ei luotu tilauksia tai käyttäjiä.
- Ei Vercel-julkaisua, tuotantomaksujen käynnistystä tai maksuasetusten muutoksia. Tuotteet näkyvät nykyisessä kannassa, mutta koodimuutokset tarvitsevat oman julkaisunsa julkiselle sivustolle.

Tuotteita ja hintoja voi jatkossa muokata nykyisen ylläpidon `/admin/kauppa`-näkymässä. Päivitä sivu, jos se oli auki ennen julkaisua.
