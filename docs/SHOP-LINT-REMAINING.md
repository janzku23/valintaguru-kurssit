# Koko projektin jäljellä olevat lint-havainnot

Viimeinen koko lähdekoodin ajo: 61 virhettä ja 17 varoitusta. Kaupan uusissa tiedostoissa ei havaintoja. Näihin vanhojen näkymien havaintoihin sisältyy myös käyttäjän muutoksilta rajaamia GuruPath- ja harjoitusnäkymiä. Niitä ei korjattu tämän maksutoteutuksen yhteydessä.

| Tiedosto | Virheet | Varoitukset | Säännöt |
|---|---:|---:|---|
| `app/admin/edistyminen/[userId]/page.tsx` | 1 | 0 | @next/next/no-html-link-for-pages |
| `app/admin/layout.tsx` | 3 | 0 | @next/next/no-html-link-for-pages |
| `app/admin/page.tsx` | 1 | 0 | react-hooks/error-boundaries |
| `app/admin/raportit/page.tsx` | 3 | 0 | @next/next/no-html-link-for-pages, react-hooks/purity |
| `app/admin/tiedustelut/page.tsx` | 1 | 0 | @next/next/no-html-link-for-pages |
| `app/aseta-salasana/page.tsx` | 0 | 1 | react-hooks/exhaustive-deps |
| `app/gurupath/layout.tsx` | 1 | 0 | @next/next/no-html-link-for-pages |
| `app/home/FreeCourseAccessCard.tsx` | 2 | 0 | @next/next/no-html-link-for-pages |
| `app/home/HomeAuthProvider.tsx` | 1 | 0 | react-hooks/set-state-in-effect |
| `app/home/HomeSocialClient.tsx` | 0 | 1 | @next/next/no-img-element |
| `app/home/OwnedCoursesClient.tsx` | 1 | 0 | @next/next/no-html-link-for-pages |
| `app/kalenteri/layout.tsx` | 1 | 0 | @next/next/no-html-link-for-pages |
| `app/kirjaudu/KirjauduClient.tsx` | 1 | 0 | react-hooks/set-state-in-effect |
| `app/kurssi/[courseId]/edistyminen/page.tsx` | 1 | 0 | @next/next/no-html-link-for-pages |
| `app/kurssi/[courseId]/flashcardit/page.tsx` | 1 | 0 | @next/next/no-html-link-for-pages |
| `app/kurssi/[courseId]/harjoitukset/page.tsx` | 1 | 0 | @next/next/no-html-link-for-pages |
| `app/kurssi/[courseId]/layout.tsx` | 2 | 1 | @next/next/no-html-link-for-pages, @next/next/no-img-element |
| `app/kurssi/[courseId]/page.tsx` | 1 | 0 | @next/next/no-html-link-for-pages |
| `app/kurssi/[courseId]/podcast/page.tsx` | 1 | 0 | @next/next/no-html-link-for-pages |
| `app/kurssi/[courseId]/teoria/page.tsx` | 1 | 0 | @next/next/no-html-link-for-pages |
| `app/kurssi/ilmais-kurssi/page.tsx` | 4 | 0 | @next/next/no-html-link-for-pages |
| `app/kysy/page.tsx` | 1 | 0 | @next/next/no-html-link-for-pages |
| `app/profiili/page.tsx` | 0 | 2 | react-hooks/exhaustive-deps |
| `app/valintakoe-g-pisterajat/page.tsx` | 4 | 0 | @next/next/no-html-link-for-pages |
| `app/webinaari/page.tsx` | 2 | 0 | @next/next/no-html-link-for-pages |
| `components/CourseShowcase.tsx` | 2 | 1 | @next/next/no-img-element, react-hooks/set-state-in-effect |
| `components/FlashcardView.tsx` | 1 | 0 | react-hooks/set-state-in-effect |
| `components/FreeCourseLawPracticeClient.tsx` | 2 | 0 | @next/next/no-html-link-for-pages |
| `components/FreeCourseNav.tsx` | 1 | 0 | @next/next/no-html-link-for-pages |
| `components/FreeCoursePracticeClient.tsx` | 0 | 1 | react-hooks/exhaustive-deps |
| `components/FreeCourseScrollButton.tsx` | 0 | 1 | @next/next/no-location-assign-relative-destination |
| `components/FreeCourseSidebar.tsx` | 4 | 0 | @next/next/no-html-link-for-pages |
| `components/FreeCourseTopBar.tsx` | 1 | 0 | @next/next/no-html-link-for-pages |
| `components/PodcastView.tsx` | 1 | 0 | react-hooks/set-state-in-effect |
| `components/PracticeExamRunner.tsx` | 0 | 2 | react-hooks/exhaustive-deps |
| `components/ProfilePage.tsx` | 0 | 2 | react-hooks/exhaustive-deps |
| `components/ProgressView.tsx` | 2 | 0 | react-hooks/purity, react-hooks/set-state-in-effect |
| `components/TheoryCard.tsx` | 0 | 1 | @next/next/no-img-element |
| `components/TheorySidebar.tsx` | 0 | 1 | @typescript-eslint/no-unused-vars |
| `components/ValintakoeGExerciseRunner.tsx` | 1 | 1 | react-hooks/exhaustive-deps, react-hooks/set-state-in-effect |
| `components/ValintakoeGQuestionBankAdmin.tsx` | 1 | 0 | react-hooks/set-state-in-effect |
| `components/ValintakoeGReadingProfile.tsx` | 1 | 0 | react-hooks/set-state-in-effect |
| `components/admin/AdminWorkspace.tsx` | 1 | 0 | @next/next/no-html-link-for-pages |
| `components/calendar/CalendarApp.tsx` | 1 | 1 | @next/next/no-img-element, react-hooks/set-state-in-effect |
| `components/gurupath/GuruGameTopbar.tsx` | 3 | 1 | @next/next/no-html-link-for-pages, @next/next/no-img-element |
| `components/gurupath/GuruLeaderboard.tsx` | 1 | 0 | react-hooks/set-state-in-effect |
| `components/gurupath/GuruPathChallenge.tsx` | 1 | 0 | react-hooks/set-state-in-effect |
| `components/inquiries/MyInquiries.tsx` | 1 | 0 | react-hooks/set-state-in-effect |
| `lib/courseNavigation.ts` | 1 | 0 | @next/next/no-assign-module-variable |
