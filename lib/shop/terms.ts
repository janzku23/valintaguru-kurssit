import "server-only";
import { SHOP_SELLER } from "@/data/shop/seller";
const sellerAddress =
  process.env.SHOP_SELLER_POSTAL_ADDRESS?.trim() || SHOP_SELLER.postalAddress;
export const SHOP_TERMS = {
  version: "2026-11-03.2",
  paragraphs: [
    `Myyjä: ValintaGuru Oy, Y-tunnus 3573013-4. Asiakaspalvelu: info@valintaguru.com.${sellerAddress ? ` Postiosoite: ${sellerAddress}.` : ""} Tuotekohtaiset hinnat sisältävät ilmoitetun arvonlisäveron. Toimitus tapahtuu sähköisesti ilman toimituskuluja.`,
    "Tuotteen sisältö, soveltuvuus, käyttöoikeuden kesto ja toimituksen luonne ilmoitetaan tuotesivulla ja tilausyhteenvedossa. Käyttöoikeuden kesto alkaa maksun vahvistamisesta. Kurssioikeus on henkilökohtainen. Aiempi omistus ei pidennä aikaisemman tilauksen oikeutta: uusi oikeus on voimassa oman tilauksensa mukaisen ajan.",
    "Maksunvälittäjänä toimii Paytrail Oyj (Y-tunnus 2122839-7), Innova 2, Lutakonaukio 7, 40100 Jyväskylä. Paytrail Oyj näkyy maksunsaajana ja välittää maksun myyjälle. Maksutavat esitetään Paytrailin maksusivulla. Reklamaatioissa ota ensin yhteyttä ValintaGuruun.",
    "Kurssioikeudet toimitetaan vasta palvelimella vahvistetun maksun jälkeen. Uusi käyttäjätili luodaan tarvittaessa samalla sähköpostilla. Kirjautuminen edellyttää sähköpostilinkin avaamista tai aiempaa turvallista kirjautumista. Maksu ei itsessään kirjaa asiakasta sisään. Viivästyneen maksun toimitus odottaa vahvistusta.",
    "Kuluttajalla on lähtökohtaisesti 14 päivän peruuttamisoikeus sopimuksen tekemisestä. Digitaalisen sisällön peruuttamisoikeus voi päättyä, kun toimitus on aloitettu asiakkaan nimenomaisella ennakkosuostumuksella ja asiakas on hyväksynyt oikeuden menettämisen; hyväksyntä vahvistetaan tilausvahvistuksessa. Pelkkä kirjautuminen ei itsessään poista oikeutta.",
    "Palvelun, kuten opetusta sisältävän kurssin, aloittamispyyntö ei yksin poista peruuttamisoikeutta. Jos palvelu peruutetaan aloittamisen jälkeen, suorituksesta voidaan lain edellytysten täyttyessä veloittaa kohtuullinen suhteellinen osuus. Oikeuden menettäminen kokonaan suoritetun palvelun kohdalla edellyttää lain mukaista suostumusta ja hyväksyntää. Paketin osat arvioidaan erikseen.",
    "Voit lähettää peruuttamisilmoituksen osoitteessa /kauppa/peruuta tai sähköpostilla info@valintaguru.com. Ilmoita nimesi, tilausnumero ja sähköpostiosoite. Verkkotoiminnossa ilmoitus vahvistetaan erikseen. Vastaanottovahvistus lähetetään sähköpostitse. Pyynnön vastaanotto ei estä lakisääteisten oikeuksiesi käyttämistä, eikä sitä hylätä automaattisesti sisältöluokituksen perusteella.",
    "Hyväksytty palautus maksetaan alkuperäisen maksutavan kautta Paytrailin tukemalla tavalla. Osapalautuksen yhteydessä kerrotaan, mitkä oikeudet päättyvät. Muusta tilauksesta tai ylläpidolta saadut oikeudet säilyvät. Virhevastuu ja muut pakottavan kuluttajansuojan mukaiset oikeudet säilyvät. Riidassa voit kääntyä kuluttajaneuvonnan ja kuluttajariitalautakunnan puoleen.",
    "Tilaus-, suostumus- ja maksutietoja käsitellään sopimuksen toteuttamiseen, tietoturvaan ja lakisääteisiin velvoitteisiin. Palveluntarjoajat ovat Supabase, Vercel, Resend ja Paytrail. Tarkemmat tiedot: /ehdot/tietosuojakaytanto. Markkinointi ei ole ostamisen ehto.",
  ],
};
