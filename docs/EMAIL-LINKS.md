# Kutsulinkkien tarkistus 10.11.2026

Admin (`utils/supabase/provisionStudent.ts`) ja ilmaiskurssi
(`app/api/free-course-signup/route.ts`) lähettävät uuden käyttäjän kutsun
Supabasen `inviteUserByEmail`-toiminnolla. Molempien `redirectTo` on
`${NEXT_PUBLIC_SITE_URL}/aseta-salasana`. Paytrail ei osallistu näihin kutsuihin.
Olemassa olevalle käyttäjälle nämä toiminnot eivät lähetä uutta kutsua.

## Tuotannossa tarkistettavat asetukset

1. Vercel Production: `NEXT_PUBLIC_SITE_URL=https://www.valintaguru.fi`.
2. Supabase Authentication → URL Configuration: Site URL on
   `https://www.valintaguru.fi`. Redirect URLs sisältää täsmälliset osoitteet:
   - `https://www.valintaguru.fi/aseta-salasana`
   - `https://www.valintaguru.fi/auth/callback?next=/aseta-salasana`
   Lisää vastaavat ilman www:tä vain, jos sitä käytetään kutsuissa.
3. Supabase Authentication → Email Templates → Invite user:
   kutsupainikkeen ja tekstilinkin kohde on `{{ .ConfirmationURL }}`.
   Pelkkä `{{ .SiteURL }}` tai `{{ .RedirectTo }}` ei vahvista kutsua.
4. Reset password -pohjan linkki on myös `{{ .ConfirmationURL }}`.
   Säilytä nykyiset SMTP-asetukset.

Supabase-ohje: https://supabase.com/docs/guides/auth/redirect-urls

## Koodin varmistus

Root-layoutin ennen hydraatiota ajettava skripti tunnistaa etusivulle
saapuvan `type=invite`- tai `type=recovery`-fragmentin ja siirtää sen
sellaisenaan `/aseta-salasana`-sivulle. Näin selainasiakas ei ehdi poistaa
kutsun fragmenttia etusivulla. Kohde on kiinteä saman sivuston polku.
Tämä varmistus ei korjaa sähköpostipohjaa, josta vahvistuslinkki puuttuu,
eikä se voi palauttaa vanhentunutta tai jo käytettyä kutsua.

Testit: `node --test scripts/test-email-links.cjs`.

## Lopullinen toimintatesti

Lähetä uusi admin-kutsu omalle uudelle testiosoitteelle ja avaa linkki
uloskirjautuneessa yksityisessä selainikkunassa. Varmista salasanan asetus,
kirjautuminen ja valittujen kurssien avautuminen. Tee sama ilmaiskurssin
lomakkeella toisella uudella osoitteella. Vanha kutsu ei kelpaa tähän testiin.
Sähköpostilinkkejä, tokeneita tai salasanoja ei tallenneta raportteihin.

Tuotannon Supabase-asetuksia tai oikeiden sähköpostien vastaanottoa ei ole
vahvistettu tämän paikallisen kooditarkistuksen perusteella.
