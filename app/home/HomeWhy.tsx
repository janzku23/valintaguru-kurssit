import Image from "next/image";
import uudetkurssit from "../../assets/uudetkurssit.png";

export default function HomeWhy() {
  return (
      <section id="miksi" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-[#eee9df] p-3 shadow-xl shadow-slate-900/10">
            <Image
              src={uudetkurssit}
              alt="Opiskelua ValintaGurun avulla"
              sizes="(max-width: 1024px) 100vw, 520px"
              className="aspect-square w-full rounded-[1.4rem] object-cover"
            />
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-[#3f51e7]">Miksi ValintaGuru?</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">Tavoitteellista opiskelua ilman turhaa säätöä</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Selkeä kokonaisuus", "Teoriat, harjoitukset ja materiaalit löytyvät samalta alustalta."],
                ["Kokeen taidot", "Harjoittele päättelyä, tekstianalyysiä ja ajankäytön hallintaa."],
                ["Oma eteneminen", "Tunnista vahvuutesi ja keskity niihin aiheisiin, joissa kehitystä tarvitaan."],
                ["Joustava opiskelu", "Kaikki kurssit ovat verkossa ja käytettävissä omassa aikataulussasi."],
              ].map(([title, description], index) => (
                <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 font-black text-[#3f51e7]">{index + 1}</span>
                  <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}
