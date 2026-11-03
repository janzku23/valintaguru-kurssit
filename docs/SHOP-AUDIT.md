# ValintaGuru – lähtötilan tutkimus 3.11.2026

Tämä raportti kuvaa valmisteluvaiheen tutkimusta. Toteutus on sen jälkeen siirretty viralliseen Git-projektiin; katso `SHOP-TRANSFER.md`.

Tutkimus tehtiin ennen lähdekoodimuutoksia. Sovelluksen juurihakemisto on `admin-uudistus/`; ylempi hakemisto sisältää aiempien päivitysten tiedostoja ja artefakteja. Tässä kopiosta puuttuu Git-metatieto. Lähtötilanteessa `node_modules` oli symbolinen linkki alkuperäisen projektin riippuvuuksiin; tämän kopion lopulliset tarkistukset tehtiin myöhemmin omalla lukitulla asennuksella. Asennettu Next-versio ja package.json tarkistetaan testiraportissa.

- App Router: `app/`, julkiset esittelyreitit `/`, `/valintakoe-g`, `/oikeustiede`; kurssit `/kurssi/[courseId]`; nykyinen kauppa `/kauppa` ohjaa Holviin. Ylläpito `/admin` ja sen layoutin palvelinpuolen tarkistus.
- Auth: `utils/supabase/server.ts`, `client.ts`, `admin.ts`; SSR-evästeet, salasanalähtöinen kirjautuminen, `/aseta-salasana` käsittelee Supabasen sähköpostilinkin implicit-istunnon. `/auth/callback` käsittelee PKCE-koodit. Näitä ei korvata.
- Oikeudet: `utils/supabase/provisionStudent.ts` kutsuu Admin APIa ja upsertoi `student_courses` avaimella `(user_id,course_id)`. Aktiivinen status `käytössä`; lukijat hyväksyvät myös `active` ja `enabled`. Lisäksi vanha `course_entitlements` sähköpostin/kurssislugin perusteella. Ylläpidon rights-PUT poisti aiemmin kaikki käyttäjän student_courses-rivit ennen uudelleenkirjoitusta.
- Todelliset kurssit: `oikis`, `oikis-tiivis`, `oikis-teho`, `oikis-teho-etaope`, `valintakoe-g`, `valintakoe-g-etaope`, `yo`. Erillisiä YoGuru-ainekohtaisia myyntitunnisteita ei tässä kurssirekisterissä ole. YO ei ole myynnissä. Oikis-yleiskurssin hintaa ei ole määritelty.
- Profiili: `components/ProfilePage.tsx` lukee `profiles` ensin `id`, sitten `user_id`; fallback Auth-metadataan. Täydellistä skeemaa ei toimitettu.
- Muut koodista havaitut taulut: `student_progress_attempts`, `student_flashcard_progress`, `practice_exam_attempts`, `valintakoe_g_exercise_attempts`, `valintakoe_g_question_metadata`, `free_course_signups`, `free_course_exam_attempts`, `newsletter_preferences`, `support_inquiries`, kalenteritaulut ja GuruPathin taulut. Ainoa toimitettu migraatio on `20261028_admin_workspace.sql`.
- Admin: `lib/adminAccess.ts` varmistaa käyttäjän Supabase Authilla ja vertaa `VALINTAGURU_ADMIN_EMAIL`-asetukseen (nykyinen fallback admin@valintaguru.fi). Uusi kauppahallinta käyttää samaa vartijaa. Nykyiset käyttäjä-, oikeus-, edistymis- ja tiedustelutoiminnot säilytetään.
- Resend: tiedusteluvastausten reitti käyttää suoraan Resend HTTP APIa; muuttujat `RESEND_API_KEY` ja `SUPPORT_FROM_EMAIL`. Kirjastoriippuvuutta ei ole. Kauppa käyttää samoja asetuksia.
- Design: indigo #3f51e7, sininen gradientti, slate-sävyt, serif-otsikot, pyöristetyt 2rem-kortit ja pillipainikkeet. Logo `public/logo.png` ja `assets/logo.png`. `HomeHeaderClient` käyttää `HomeAuthProvider`-kontekstia. Globaali tumma teema käyttää prefers-color-schemeä; monet vanhat sivut määrittävät vaalean taustan paikallisesti.
- Asetukset: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `SUPPORT_FROM_EMAIL`. Tässä projektikopiossa ei ole paikallista .env-tiedostoa. Myöhemmin riippuvuuslinkin alkuperäisestä checkoutista löytyivät nykyiset asetukset; niiden arvoja ei kopioitu eikä tulostettu.

## Todentamatta jäävä lähtötila

Supabasen nykyinen PostgREST OpenAPI tarkistettiin myöhemmin lukutilassa alkuperäisen checkoutin asetuksilla. Asiakasrivejä ei haettu eikä kantaa muutettu. Sanitisoitu taulurakenne on tiedostossa `SHOP-SOURCE-SCHEMA.json`.

Todennetut taulut: student_courses sisältää odotetut UUID/text-sarakkeet ja created_at/updated_at-aikaleimat; status-oletus on active. course_entitlements sisältää sähköpostin, kurssislugin, tilan sekä vanhat Shopify-tunnisteet. profiles-taulua ei ole julkaistussa OpenAPI-skeemassa. Nykyisiä tuote-, tilaus-, maksu-, palautus- tai alennustauluja ei ole julkaistussa skeemassa, joten kauppataulut eivät korvaa havaittua olemassa olevaa kaupankäyntirakennetta.

PostgREST-kuvaus ei paljasta kaikkia indeksejä, rajoitteita, triggereitä tai RLS-politiikkoja. Niitä ei ole vielä vahvistettu. Ei erillisen testiympäristön tunnuksia, suoraa SQL-yhteyttä, Vercel-julkaisuyhteyttä tai GitHub-checkoutin metatietoa tässä kansiossa. Migraatio sisältää ennakkotarkistuksen ja pysähtyy, jos tunnettu oikeusrakenne puuttuu. Migraatiota ei saa ajaa tuotantoon ennen skeemavertailua, varmuuskopiota ja testiympäristön integraatiotestiä.

## Tarkistetut ulkoiset lähteet

- Paytrail Payment API: https://docs.paytrail.com/ ja virallinen lähde https://github.com/paytrail/api-documentation/blob/main/docs/README.md (HMAC, payment GET, callbackit, refund).
- Supabase Admin generateLink/createUser: https://supabase.com/docs/reference/javascript/auth-admin-generatelink ja https://supabase.com/docs/reference/javascript/auth-admin-createuser.
- KKV: https://www.kkv.fi/kuluttaja-asiat/tietoa-ja-ohjeita-yrityksille/verkkokauppiaille/peruuttamisoikeus-ja-peruuttamisaika/ ; peruuttamistoiminto 19.6.2026 alkaen. Digitaalista sisältöä ja palvelua ei käsitellä automaattisesti samana asiana.
- Nextin paikalliset ohjeet `node_modules/next/dist/docs/`: route handlers ja use server.
