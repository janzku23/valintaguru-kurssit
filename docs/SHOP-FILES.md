# Tiedostoluettelo

Sovelluksen juurihakemisto: `/Users/janituomaala/Guruverkkosivu/valintaguru-kurssit`. Alkuperäisessä siirrossa uusia tiedostoja 58 ja muutettuja olemassa olevia 14. Holvi-tuonnin jatkomuutokset on eritelty raportissa `SHOP-HOLVI-IMPORT.md`. Virallisen projektin Git-työhakemisto oli ennen siirtoa puhdas (HEAD `0f48e61`). Siirtotiedot: `SHOP-TRANSFER.md`.

Hienosäädön jatkomuutokset ja paikalliset kehitysasetukset: `SHOP-POLISH.md`.

Oman kauppiaan käyttöönoton muutokset: `SHOP-PRODUCTION.md`.

## Luodut tiedostot

- `.env.example`
- `app/admin/kauppa/page.tsx`
- `app/api/admin/shop/route.ts`
- `app/api/shop/callback/route.ts`
- `app/api/shop/cancel/route.ts`
- `app/api/shop/checkout/route.ts`
- `app/api/shop/quote/route.ts`
- `app/api/shop/refund-callback/route.ts`
- `app/api/shop/retry/route.ts`
- `app/api/shop/return/route.ts`
- `app/api/shop/status/route.ts`
- `app/api/shop/worker/route.ts`
- `app/kauppa/[slug]/page.tsx`
- `app/kauppa/ehdot/page.tsx`
- `app/kauppa/kassa/page.tsx`
- `app/kauppa/layout.tsx`
- `app/kauppa/ostoskori/page.tsx`
- `app/kauppa/peruuta/page.tsx`
- `app/kauppa/shop.css`
- `app/kauppa/tilaus/page.tsx`
- `components/shop/AdminShop.tsx`
- `components/shop/Cancellation.tsx`
- `components/shop/Catalog.tsx`
- `components/shop/Checkout.tsx`
- `components/shop/OrderStatus.tsx`
- `components/shop/PrivacyAnalytics.tsx`
- `components/shop/ShopNav.tsx`
- `components/shop/ShopTheme.tsx`
- `components/shop/cart.ts`
- `components/shop/client-api.ts`
- `docs/SHOP-AUDIT.md`
- `docs/SHOP-FILES.md`
- `docs/SHOP-IMPLEMENTATION.md`
- `docs/SHOP-LINT-REMAINING.md`
- `docs/SHOP-SOURCE-SCHEMA.json`
- `docs/SHOP-TEST-REPORT.md`
- `docs/shop-qa/desktop-light.jpg`
- `lib/shop/admin.ts`
- `lib/shop/cart-model.ts`
- `lib/shop/config.ts`
- `lib/shop/core.ts`
- `lib/shop/email.ts`
- `lib/shop/jobs.ts`
- `lib/shop/paytrail.ts`
- `lib/shop/refunds.ts`
- `lib/shop/server.ts`
- `lib/shop/terms.ts`
- `lib/shop/types.ts`
- `docs/SHOP-TRANSFER.md`
- `sahkopostipohjat/shop-magic-link.html`
- `scripts/check-shop-environment.cjs`
- `scripts/shop-preflight.sql`
- `scripts/shop-test-loader.cjs`
- `scripts/smoke-paytrail.cjs`
- `scripts/test-shop-sql.cjs`
- `scripts/test-shop.cjs`
- `supabase/migrations/20261103_paytrail_shop.sql`
- `supabase/migrations/20261103000100_shop_unlimited_access.sql`
- `data/shop/holvi-products-20261103.json`
- `docs/SHOP-HOLVI-IMPORT.md`
- `docs/SHOP-POLISH.md`
- `docs/SHOP-PRODUCTION.md`
- `components/shop/PaymentSettings.tsx`
- `app/api/admin/shop/settings/route.ts`
- `lib/shop/settings-model.ts`
- `lib/shop/readiness.ts`
- `data/shop/seller.ts`
- `app/home/CoursesSection.tsx`
- `lib/shop/offers.ts`
- `vercel.json`

## Muutetut olemassa olevat tiedostot

- `.gitignore` – Sallii .env.example-esimerkin versionhallinnassa.
- `package.json` – Testi- ja tarkistusskriptit, vain kehityksen PostgreSQL-testiriippuvuus.
- `package-lock.json` – Lukitsee lisätyn testiriippuvuuden.
- `eslint.config.mjs` – CJS-testien sallittu require-syntaksi ja generoidun .next-sisällön rajaus myös QA-projektissa.
- `app/layout.tsx` – Kaupan tilaustunnisteita sisältävien sivujen analytiikan esto.
- `app/kauppa/page.tsx` – Vanhan Holvi-ohjaussivun tilalle nykyinen Supabase-kurssikatalogi.
- `app/admin/layout.tsx` – Kauppahallinta nykyisen Admin Centerin navigaatioon.
- `app/api/admin/users/[userId]/rights/route.ts` – Atominen manuaalisten oikeuksien muokkaus ostolähteitä säilyttäen; ennen migraatiota rajattu yhteensopivuus nykyiseen työnkulkuun.
- `app/home/HomeHeaderClient.tsx` – Kauppalinkki ja eri sivuilla toimiva yhteinen navigaatio.
- `app/home/HomeFooterClient.tsx` – Kauppalinkki nykyiseen kauppaan.
- `components/CourseShowcase.tsx` – Ostolinkit omaan kauppaan; vanha staattinen hinta ei kilpaile tietokannan hinnan kanssa.
- `components/admin/AdminWorkspace.tsx` – Nykyisen työtilan kauppahallinnan pikalinkki.
- `data/courses/purchase.ts` – Nykyisten kurssien ostolinkit omaan kauppaan. Vanha hintadata jää vain aiempaan admin-arvostukseen.
- `data/legalPages.ts` – Nykyisten ehtoreittien peruuttamis- ja toimitustietojen sovitus kauppaan.

## Paikallinen ympäristö

Viralliseen projektiin asennettiin yksi uusi kehitysriippuvuus (@electric-sql/pglite) lukitustiedoston mukaan. Valmistelukansion paikallisen riippuvuuslinkin käsittely on kuvattu aiemmassa testiraportissa. Virallisen projektin .env.local säilytettiin. `.next` ja TypeScriptin generoidut välimuistit eivät ole toimitettavaa lähdekoodia.

Supabase Authin nykyisiä lähdekooditiedostoja, kurssimateriaaleja, harjoituksia, GuruPathia ja vanhoja käyttäjiä ei muutettu. Päättymättömien käyttöoikeuksien jatkomigraatio on ajettu tuotantokantaan käyttäjän erillisellä hyväksynnällä. Viisi Holvi-tuotetta on julkaistu; katso `SHOP-HOLVI-IMPORT.md`.
