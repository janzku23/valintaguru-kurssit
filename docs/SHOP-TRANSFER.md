# Siirto viralliseen projektiin 3.11.2026

Kohde: `/Users/janituomaala/Guruverkkosivu/valintaguru-kurssit`.
Lähde: `/Users/janituomaala/Documents/ChatGPT/valintaguruverkkosivu/admin-uudistus`.

Ennen siirtoa virallisen projektin Git-työhakemisto oli puhdas, HEAD `0f48e61`. Siirrettiin 71 lähdetiedostoa: 57 uutta ja 14 päivitettyä. Tämän siirtoraportin kanssa uusia tiedostoja on yhteensä 58. Valmistelukansion erillistä QA-sivua ei siirretty, koska virallisessa projektissa ei ole kyseistä QA-sovellusta. Sovelluksen varsinaiset komponentit siirrettiin kokonaan.

Kaikkien siirrettyjen tiedostojen SHA-256-tiivisteet tarkistettiin. Korvattavien tiedostojen varmuuskopio ja siirtomanifesti ovat hakemistossa `/Users/janituomaala/Documents/ChatGPT/valintaguruverkkosivu/output/shop-official-transfer`. Raporttien kansioviittaukset sovitettiin viralliseen projektiin.

Nykyistä `.env.local`-tiedostoa ei muutettu eikä korvattu. Kaupan SQL-migraatiota ei ajettu, tietokannan rivejä ei muutettu eikä oikeaa rahaliikennettä käynnistetty. Muutoksia ei commitoitu, pushattu tai julkaistu Verceliin.

Viralliseen node_modules-kansioon lisättiin yksi lukitustiedoston mukainen kehitysriippuvuus, @electric-sql/pglite. Se mahdollistaa SQL-testit erillisessä PostgreSQL-testimoottorissa ilman yhteyttä Supabaseen.

Siirron yhteydessä säilytettiin nykyisen manuaalisen oikeushallinnan toiminta ennen migraatiota: vanhaa työnkulkua käytetään ainoastaan, jos sekä uusi RPC että shop_orders-taulu puuttuvat. Kun kaupan skeema on olemassa tai skeeman tila on epäselvä, ostolähteitä suojaavaa RPC:tä ei ohiteta. Tämä ehto testataan ilman oikeita käyttäjiä.

## Todentaminen

Ensimmäinen siirron jälkeinen ajo: TypeScript, rajattu ESLint, 57/57 testiä ja tavallinen Turbopack-tuotantobuild hyväksyttiin virallisessa kansiossa sen nykyisillä ympäristöasetuksilla. Yhteensopivuusvarmistuksen lopulliset tarkistustulokset ovat alla.

Täyden maksuketjun testaus odottaa edelleen erillistä Supabase-testiympäristöä ja migraation skeemavertailua. Katso `SHOP-IMPLEMENTATION.md` ennen käyttöönottoa.

## Lopulliset tulokset virallisessa kansiossa

- `npm run typecheck`: hyväksytty.
- `npm test`: 19/19 sovellus- ja rajapintasopimustestiä, 22/22 eristettyä PostgreSQL-testiä, 17/17 nykyisen ylläpidon regressiotestiä. Yhteensä 58/58.
- Kaupan ja muutettujen oikeusrajapinnan/headerin rajattu ESLint: hyväksytty ilman virheitä tai varoituksia.
- `npm run build`: hyväksytty, Next.js 16.3.5 / Turbopack, virallisen projektin nykyisellä `.env.local`-tiedostolla. Käännös ei varmista oikeaa maksuketjua.
- `git diff --check`: hyväksytty.
- Muutoksia yhteensä 72 tiedostossa: 58 uutta ja 14 päivitettyä. Gitissä ei ole tämän työn ulkopuolisia muutoksia.
- Nykyinen `.env.local`, käyttäjät ja Supabase-kanta säilyivät. Vercel-julkaisua tai Git-pushia ei tehty.

Koko projektin aiemmat lint-havainnot on eritelty `SHOP-LINT-REMAINING.md`-raportissa. Tuotantovalmiutta ei ole vielä vahvistettu: migraatio, oikea callback, oikea käyttäjän luonti, sähköpostin saapuminen ja ostetulle kurssille kirjautuminen on testattava yhdessä erillisessä ympäristössä ennen julkaisua.
