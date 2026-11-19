import Image from "next/image";

export default function HomeWhy() {
  return (
      <section id="miksi" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
         
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
          <div className="min-w-0 lg:justify-self-center">
            <h3 className="text-2xl font-extrabold">ValintaGuru mukana arjessa</h3>
            <p className="mt-3 max-w-sm leading-7 text-slate-600">
              Lataa sovellus ja opiskele myös puhelimella.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 lg:flex-col lg:items-start">
              <a
                href="https://apps.apple.com/fi/app/valintaguru/id6756317593?l=fi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lataa ValintaGuru App Storesta (uusi välilehti)"
                className="flex h-16 w-56 shrink-0 items-center rounded-lg transition hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f51e7]"
              >
                <Image src="/app-store-badge-fi.svg" alt="Lataa App Storesta" width={224} height={64} className="h-16 w-56 object-fill" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=fi.gona.valintaguru&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lataa ValintaGuru Google Playsta (uusi välilehti)"
                className="flex h-16 w-56 shrink-0 items-center rounded-lg transition hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f51e7]"
              >
                {/* The visible badge is 192px tall inside a 250px image: scale it to the same 64px height as Apple. */}
                <Image src="/google-play-badge-fi.png" alt="Saatavilla Google Playsta" width={646} height={250} className="h-[83.333px] w-56 object-fill" />
              </a>
            </div>
          </div>
        </div>
      </section>
  );
}
