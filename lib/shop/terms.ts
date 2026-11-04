import "server-only";
import { SHOP_SELLER } from "@/data/shop/seller";
const sellerAddress =
  process.env.SHOP_SELLER_POSTAL_ADDRESS?.trim() || SHOP_SELLER.postalAddress;
export const SHOP_TERMS = {
  version: "2026-11-04.2",
  paragraphs: [
    `Myyjä: ValintaGuru Oy, Y-tunnus 3573013-4. Asiakaspalvelu: info@valintaguru.com.${sellerAddress ? ` Postiosoite: ${sellerAddress}.` : ""} Tuotekohtaiset hinnat sisältävät ilmoitetun arvonlisäveron. Toimitus tapahtuu sähköisesti ilman toimituskuluja.`,
    "Tuotteen sisältö, soveltuvuus, käyttöoikeuden kesto ja toimituksen luonne ilmoitetaan tuotesivulla ja tilausyhteenvedossa. Käyttöoikeuden kesto alkaa maksun vahvistamisesta. Kurssioikeus ja materiaalit on tarkoitettu vain henkilökohtaiseen käyttöön. Materiaaleja tai käyttäjätunnuksia ei saa jakaa ulkopuolisille. Aiempi omistus ei pidennä aikaisemman tilauksen oikeutta: uusi oikeus on voimassa oman tilauksensa mukaisen ajan.",
    "Maksunvälittäjänä toimii Paytrail Oyj (Y-tunnus 2122839-7), Innova 2, Lutakonaukio 7, 40100 Jyväskylä. Paytrail Oyj näkyy maksunsaajana ja välittää maksun myyjälle. Maksutavat esitetään Paytrailin maksusivulla. Reklamaatioissa ota ensin yhteyttä ValintaGuruun.",
    "Kurssioikeudet toimitetaan vasta palvelimella vahvistetun maksun jälkeen. Uusi käyttäjätili luodaan tarvittaessa samalla sähköpostilla. Kirjautuminen edellyttää sähköpostilinkin avaamista tai aiempaa turvallista kirjautumista. Maksu ei itsessään kirjaa asiakasta sisään. Viivästyneen maksun toimitus odottaa vahvistusta.",
    "Kuluttajalla on lähtökohtaisesti 14 päivän peruuttamisoikeus sopimuksen tekemisestä. Digitaalisen kurssin peruuttamisoikeus päättyy ennen määräaikaa vasta, kun asiakas aloittaa opiskelun esimerkiksi avaamalla kurssimateriaalin tai aloittamalla tehtävän, jos hän on antanut ennakkosuostumuksensa toimitukseen ja hyväksynyt peruuttamisoikeuden menettämisen. Suostumus ja hyväksyntä vahvistetaan tilausvahvistuksessa. Kurssioikeuden automaattinen avaaminen tai pelkkä kirjautuminen ei päätä peruuttamisoikeutta.",
    "Opetusta sisältävän palvelun peruuttamisoikeus päättyy ennen määräaikaa vain, jos asiakas on käyttänyt palvelua, palvelu suoritetaan kokonaan peruuttamisaikana ja asiakas on pyytänyt välitöntä aloittamista sekä hyväksynyt peruuttamisoikeuden menettämisen. Paketin osat arvioidaan erikseen.",
    "Voit lähettää peruuttamisilmoituksen osoitteessa /kauppa/peruuta tai sähköpostilla info@valintaguru.com. Ilmoita nimesi, tilausnumero ja sähköpostiosoite. Verkkotoiminnossa ilmoitus vahvistetaan erikseen. Vastaanottovahvistus lähetetään sähköpostitse. Pyynnön vastaanotto ei estä lakisääteisten oikeuksiesi käyttämistä, eikä sitä hylätä automaattisesti sisältöluokituksen perusteella.",
    "Hyväksytty palautus maksetaan alkuperäisen maksutavan kautta Paytrailin tukemalla tavalla. Osapalautuksen yhteydessä kerrotaan, mitkä oikeudet päättyvät. Muusta tilauksesta tai ylläpidolta saadut oikeudet säilyvät. Virhevastuu ja muut pakottavan kuluttajansuojan mukaiset oikeudet säilyvät. Riidassa voit kääntyä kuluttajaneuvonnan ja kuluttajariitalautakunnan puoleen.",
    "Tilaus-, suostumus- ja maksutietoja käsitellään sopimuksen toteuttamiseen, tietoturvaan ja lakisääteisiin velvoitteisiin. Palveluntarjoajat ovat Supabase, Vercel, Resend ja Paytrail. Tarkemmat tiedot: /ehdot/tietosuojakaytanto. Markkinointi ei ole ostamisen ehto.",
  ],
};
