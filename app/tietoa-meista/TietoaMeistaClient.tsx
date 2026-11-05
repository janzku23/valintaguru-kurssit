"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";
import logo from "../../assets/logo.png";
import styles from "./TietoaMeista.module.css";
import cardLayout from "./TietoaMeistaCards.module.css";

type TeamMember = {
  id: string;
  name: string;
  description: string;
  image?: string;
};

/**
 * MUOKKAA TÄHÄN OIKEAT HENKILÖT.
 * Kuvat: public/tiimi/etunimi.webp -> image: "/tiimi/etunimi.webp"
 * Voit lisätä tai poistaa henkilöitä. Karuselli toimii myös 1–2 henkilöllä.
 * Kuvaukset näkyvät kokonaisuudessaan kortin sisällä.
 */
const team: TeamMember[] = [
  {
    id: "henkilo-3",
    name: "Iina Lindholm",
    description: "ValintaGurun opettaja. Oikeustieteiden maisteri ja tradenomi.",
    // image: "/tiimi/henkilo-3.webp",
  },
  {
    id: "henkilo-1",
    name: "Jani Tuomaala",
    description: "Tekninen tuki, vastaa myös alustasta ja kehityksestä.",
   image: "/tiimi/jani1.png",
  },
  {
    id: "henkilo-2",
    name: "Julianna Lintukangas",
    description: "Vastaa myynnistä, asiakaspalvelusta ja markkinoinnista.",
    // image: "/tiimi/henkilo-2.webp",
  },
  
  
  {
    id: "henkilo-4",
    name: "Juulia Tuominen",
    description: "Juulia on viestinnän ammattilainen, joka opettaa kurssilla kriittistä ja analyyttistä lukemista, tehokasta lukutekniikkaa aineistokokeessa sekä usean aineiston soveltamista ja vertailua.",
    // image: "/tiimi/henkilo-4.webp",
  },
  {
    id: "henkilo-5",
    name: "Päivi Huovinen",
    description: "Päivi on juuri valmistuva kasvatustieteiden maisteri, jolle tieteelliset tekstit ja niiden parissa työskentely ovat aina olleet sydämenasia. Hän haluaa jakaa osaamistaan ja auttaa opiskelijoita kehittämään erityisesti tieteellisten tekstien tulkinta- ja analysointitaitoja sekä valintakokeessa tarvittavaa vastaustekniikkaa.",
     image: "/tiimi/paivihuovinen.jpg",
  },
  
];

const navLinks = [
  { label: "Ota yhteyttä", href: "/kysy" },
  { label: "Valintakoe G", href: "/valintakoe-g" },
  { label: "Oikeustiede", href: "/oikeustiede" },
  { label: "Pisterajat", href: "/valintakoe-g-pisterajat" },
  { label: "Tietoa meistä", href: "/tietoa-meista" },
];

const mod = (n: number, length: number) => ((n % length) + length) % length;

// Palvelin ja selain muodostavat saman transform-merkkijonon.
const cssNumber = (n: number) => n.toFixed(4);

function Arrow({ backwards = false }: { backwards?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrowIcon}>
      <path
        d={backwards ? "M18 12H6m0 0 5-5m-5 5 5 5" : "M6 12h12m0 0-5-5m5 5-5 5"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PersonPortrait({ person }: { person: TeamMember }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showPhoto = Boolean(person.image) && !imageFailed;

  return (
    <span className={`${styles.portrait} ${cardLayout.portrait}`} data-team-portrait>
      {showPhoto ? (
        <Image
          src={person.image!}
          alt={`Valokuva: ${person.name}`}
          fill
          sizes="(max-width: 600px) 70vw, 300px"
          className={styles.portraitPhoto}
          loading={person.id === "henkilo-1" ? "eager" : "lazy"}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span className={styles.portraitEmpty} aria-label="Henkilökuva lisätään myöhemmin">
          <svg viewBox="0 0 140 140" fill="none" aria-hidden="true" className={styles.personIllustration}>
            <circle cx="70" cy="70" r="68" fill="#EFF0FF" />
            <circle cx="70" cy="52" r="24" fill="#AAB3FF" />
            <path d="M24 121c4-27 22-41 46-41s42 14 46 41" fill="#7989F2" />
          </svg>
          <span></span>
        </span>
      )}
      <span className={styles.portraitBadge} aria-hidden="true">
        <Image src={logo} alt="" width={48} height={48} className={styles.badgeImage} />
      </span>
    </span>
  );
}

export default function TietoaMeistaClient() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [width, setWidth] = useState(1100);
  const [cardHeight, setCardHeight] = useState(660);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<{ id: number; startX: number; startY: number } | null>(null);
  const preventCardClickUntil = useRef(0);
  const lastHorizontalWheelAt = useRef(0);

  const count = team.length;
  const goTo = useCallback((index: number) => {
    if (count < 2) return;
    setActive(mod(index, count));
  }, [count]);
  const next = useCallback(() => setActive((index) => mod(index + 1, count)), [count]);
  const previous = useCallback(() => setActive((index) => mod(index - 1, count)), [count]);

  useEffect(() => {
    const element = stageRef.current;
    if (!element) return;

    // Mittaa näkyvien ja sivussa olevien korttien sisältö ilman transform-skaalausta.
    // Korkein kuvaus määrää yhteisen korkeuden kaikille korteille.
    const measure = () => {
      const stageWidth = element.getBoundingClientRect().width;
      if (stageWidth) setWidth(stageWidth);

      let required = 630;
      element.querySelectorAll<HTMLButtonElement>("[data-team-card]").forEach((card) => {
        const portrait = card.querySelector<HTMLElement>("[data-team-portrait]");
        const info = card.querySelector<HTMLElement>("[data-team-info]");
        if (!portrait || !info) return;

        const computed = window.getComputedStyle(card);
        const padding =
          (Number.parseFloat(computed.paddingTop) || 0) +
          (Number.parseFloat(computed.paddingBottom) || 0);
        const gap = Number.parseFloat(computed.rowGap || computed.gap) || 0;
        const needed = Math.ceil(
          portrait.offsetHeight + info.scrollHeight + padding + gap + 18
        );
        required = Math.max(required, needed);
      });
      setCardHeight((old) => old === required ? old : required);
    };

    measure();
    const observer = typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(measure)
      : null;
    observer?.observe(element);
    window.addEventListener("resize", measure);
    // Fonttien lataus voi muuttaa tekstien rivittymistä.
    void document.fonts?.ready.then(measure);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || (event.pointerType === "mouse" && event.button !== 0)) return;
    pointerRef.current = { id: event.pointerId, startX: event.clientX, startY: event.clientY };
    setDragX(0);
    setDragging(true);
    // Ei oteta pointer capturea vielä klikkauksessa, jotta sivukortteja voi klikata.
    // Hiirivedon aikana capture otetaan vasta liikkeen alettua.
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const start = pointerRef.current;
    if (!start || start.id !== event.pointerId) return;
    const deltaX = event.clientX - start.startX;
    const deltaY = event.clientY - start.startY;
    // Pystyvieritys ei koskaan vaihda henkilökorttia.
    if (Math.abs(deltaY) > Math.abs(deltaX) * 1.4 && event.pointerType !== "mouse") return;
    if (event.pointerType === "mouse" && Math.abs(deltaX) > 8 && !event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    setDragX(Math.max(-190, Math.min(190, deltaX)));
  };

  const finishPointer = (event: ReactPointerEvent<HTMLDivElement>, cancelled = false) => {
    const start = pointerRef.current;
    if (!start || start.id !== event.pointerId) return;
    pointerRef.current = null;
    const deltaX = event.clientX - start.startX;
    const deltaY = event.clientY - start.startY;
    setDragging(false);
    setDragX(0);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (!cancelled && Math.abs(deltaX) >= 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.1) {
      // Pidempi veto voi vaihtaa kaksi korttia kerralla.
      const steps = Math.min(2, Math.max(1, Math.round(Math.abs(deltaX) / 135)));
      goTo(active + (deltaX < 0 ? steps : -steps));
      preventCardClickUntil.current = Date.now() + 350;
    }
  };

  const onKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") { event.preventDefault(); next(); }
    else if (event.key === "ArrowLeft") { event.preventDefault(); previous(); }
  };

  const onWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    // Vain SELVÄ vaakasuuntainen trackpad-vieritys; pystyscroll kuuluu sivulle.
    if (Math.abs(event.deltaX) < 14 || Math.abs(event.deltaX) <= Math.abs(event.deltaY) * 1.3) return;
    const now = Date.now();
    if (now - lastHorizontalWheelAt.current < 480) return;
    lastHorizontalWheelAt.current = now;
    if (event.deltaX > 0) next();
    else previous();
  };

  const cardStyle = (index: number) => {
    // Kortit ovat oikeasti ympyräkaarella eivätkä peräkkäin vieritettävässä janassa.
    let position = index - active;
    if (position > count / 2) position -= count;
    if (position < -count / 2) position += count;
    // Hiirellä ja sormella vetäminen kääntää kaarta jo vedon aikana.
    position += dragX / 140;
    if (position > count / 2) position -= count;
    if (position < -count / 2) position += count;

    const radians = position * 0.77;
    const spread = width < 600 ? Math.min(width * 0.40, 168) : Math.min(width * 0.48, 420);
    const x = Math.sin(radians) * spread;
    const y = (1 - Math.cos(radians)) * (width < 600 ? 48 : 75);
    const z = Math.cos(radians) * 100 - 100;
    const scale = Math.max(0.57, 1 - Math.abs(position) * 0.19);
    const rotate = -position * 19;
    const opacity = Math.max(0.45, 1 - Math.abs(position) * 0.20);

    return {
      transform: `translate(-50%, -50%) translate3d(${cssNumber(x)}px, ${cssNumber(y)}px, ${cssNumber(z)}px) rotateY(${cssNumber(rotate)}deg) scale(${cssNumber(scale)})`,
      opacity: Number(opacity.toFixed(3)),
      zIndex: 100 - Math.round(Math.abs(position) * 10),
      pointerEvents: Math.abs(position) > 2.6 ? "none" as const : "auto" as const,
    };
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.headerBrand} aria-label="ValintaGuru – etusivu">
            <span className={styles.headerLogoWrap}><Image src={logo} alt="ValintaGuru" width={44} height={44} /></span>
            <span className={styles.headerBrandText}>ValintaGuru</span>
          </Link>
          <nav className={styles.navDesktop} aria-label="Päänavigaatio">
            {navLinks.map(({ label, href }) => (
              <Link key={href} href={href} aria-current={href === "/tietoa-meista" ? "page" : undefined}>{label}</Link>
            ))}
          </nav>
          <div className={styles.headerActions}>
            <Link href="/" className={styles.headerSecondary}>Tutustu kursseihin</Link>
            <Link href="/kirjaudu" className={styles.headerPrimary}>Kirjaudu</Link>
            <button type="button" className={styles.menuToggle} aria-label={mobileOpen ? "Sulje valikko" : "Avaa valikko"} aria-expanded={mobileOpen} aria-controls="about-navigation-mobile" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <nav className={styles.navMobile} id="about-navigation-mobile" aria-label="Mobiilivalikko">
            {navLinks.map(({ label, href }) => <Link key={href} href={href} onClick={() => setMobileOpen(false)}>{label}</Link>)}
            <Link href="/" onClick={() => setMobileOpen(false)}>Tutustu kursseihin</Link>
            <Link href="/kirjaudu" onClick={() => setMobileOpen(false)}>Kirjaudu</Link>
          </nav>
        )}
      </header>

      <main>
        <section className={styles.intro} aria-labelledby="about-heading">
          <div className={styles.introInner}>
            <p className={styles.eyebrow}>VALINTAGURU · TIIMI</p>
            <h1 id="about-heading">Tietoa <span>meistä</span></h1>
            <p className={styles.introText}>
              ValintaGurun takana on oikeita ihmisiä, osaamista ja halu auttaa opiskelijoita eteenpäin.
              Tutustu meihin ja siihen, keitä valmennusten takana on.
            </p>
          </div>
        </section>

        <section id="tiimi" className={styles.teamSection} aria-label="ValintaGurun tiimi">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>TUTUSTU MEIHIN</p>
            <h2>Ihmiset ValintaGurun takana</h2>
          </div>

          <div
            className={`${styles.carouselContainer} ${cardLayout.container}`}
            style={{
              "--team-card-height": `${cardHeight}px`,
              "--team-stage-height": `${cardHeight + 140}px`,
            } as CSSProperties}
          >
            <div
              ref={stageRef}
              className={`${styles.carouselStage} ${cardLayout.stage} ${dragging ? styles.stageDragging : ""}`}
              role="region"
              aria-roledescription="karuselli"
              aria-label="ValintaGurun henkilöt, kaareva karuselli"
              tabIndex={0}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={(event) => finishPointer(event)}
              onPointerCancel={(event) => finishPointer(event, true)}
              onKeyDown={onKeyDown}
              onWheel={onWheel}
            >
              {team.map((person, index) => (
                <button
                  type="button"
                  key={person.id}
                  className={`${styles.memberCard} ${cardLayout.card} ${index === active ? styles.memberActive : ""}`}
                  style={cardStyle(index)}
                  data-team-card
                  aria-label={`Näytä ${person.name}`}
                  aria-current={index === active ? "true" : undefined}
                  tabIndex={index === active ? 0 : -1}
                  onClick={() => {
                    if (Date.now() < preventCardClickUntil.current) return;
                    goTo(index);
                  }}
                >
                  <PersonPortrait person={person} />
                  <span className={`${styles.memberInfo} ${cardLayout.info}`} data-team-info>
                    <span className={`${styles.memberName} ${cardLayout.name}`}>{person.name}</span>
                    <span className={`${styles.memberDescription} ${cardLayout.description}`}>
                      {person.description}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            <div className={styles.controls}>
              <button type="button" onClick={previous} className={styles.arrowButton} aria-label="Edellinen henkilö" disabled={count < 2}>
                <Arrow backwards />
              </button>
              <div className={styles.positionControls}>
                <span className={styles.counter} aria-live="polite">{String(active + 1).padStart(2, "0")} <span>/</span> {String(count).padStart(2, "0")}</span>
                <div className={styles.dots} aria-label="Valitse henkilö">
                  {team.map((person, index) => (
                    <button
                      type="button"
                      key={person.id}
                      className={`${styles.dot} ${index === active ? styles.dotActive : ""}`}
                      aria-label={`Näytä ${person.name}`}
                      aria-current={index === active ? "true" : undefined}
                      onClick={() => goTo(index)}
                    />
                  ))}
                </div>
              </div>
              <button type="button" onClick={next} className={styles.arrowButton} aria-label="Seuraava henkilö" disabled={count < 2}>
                <Arrow />
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <span>© 2026 ValintaGuru Oy</span>
        <Link href="/">Takaisin etusivulle <span aria-hidden="true">→</span></Link>
      </footer>
    </div>
  );
}
