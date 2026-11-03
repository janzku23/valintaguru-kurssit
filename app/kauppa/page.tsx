import Catalog from "@/components/shop/Catalog";
import { catalog } from "@/lib/shop/server";
export const dynamic = "force-dynamic";
export const metadata = { title: "Kurssikauppa" };
export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ course?: string }>;
}) {
  const { course } = await searchParams;
  let products: Awaited<ReturnType<typeof catalog>> = [];
  let unavailable = false;
  try {
    products = await catalog();
  } catch {
    unavailable = true;
  }
  return (
    <main>
      <section className="vg-shop-hero">
        <span className="vg-shop-eyebrow">ValintaGuru · Kurssikauppa</span>
        <h1>
          Kohti seuraavaa
          <br />
          omaa onnistumistasi.
        </h1>
        <p>
          Valitse tavoitteeseesi sopiva valmennus. Osta ilman rekisteröitymistä
          ja aloita opiskelu omassa oppimisympäristössäsi maksun vahvistamisen
          jälkeen.
        </p>
        <div className="vg-shop-chips">
          <span>Ei ennakkorekisteröitymistä</span>
          <span>Henkilökohtainen käyttöoikeus</span>
          <span>Paytrail-maksut</span>
        </div>
      </section>
      {unavailable ? (
        <div className="vg-shop-note" role="status">
          <h2>Kaupan valikoimaa ei saatu ladattua</h2>
          <p>
            Yritä hetken kuluttua uudelleen. Asiakaspalvelu:
            info@valintaguru.com.
          </p>
        </div>
      ) : (
        <Catalog products={products} selected={course} />
      )}
      <section className="vg-shop-section">
        <h2>Valinnasta opiskeluun</h2>
        <div className="vg-shop-steps">
          <div>
            <span>01 / VALITSE</span>
            <strong>Löydä sopiva kurssi</strong>
            <p>
              Tutustu kurssien sisältöön. Voit valita myös usean kurssin
              kokonaisuuden.
            </p>
          </div>
          <div>
            <span>02 / MAKSA</span>
            <strong>Maksa turvallisesti</strong>
            <p>
              Anna sähköpostisi kassalla ja valitse maksutapa Paytrailin
              suojatulla maksusivulla.
            </p>
          </div>
          <div>
            <span>03 / ALOITA</span>
            <strong>Kurssisi odottavat sinua</strong>
            <p>
              Vahvistamme maksun ja lähetämme sähköpostiisi kirjautumisohjeet.
              Aiemmat kurssisi säilyvät samalla tunnuksella.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
