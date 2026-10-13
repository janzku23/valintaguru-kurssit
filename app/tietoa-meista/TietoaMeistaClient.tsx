"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";
import logo from "../../assets/logo.png";
import styles from "./TietoaMeista.module.css";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  description: string;
  image?: string;
};

/**
 * MUOKKAA TÄHÄN OIKEAT HENKILÖT.
 * Kuvat: public/tiimi/etunimi.webp -> image: "/tiimi/etunimi.webp"
 * Voit lisätä tai poistaa henkilöitä. Karuselli toimii myös 1–2 henkilöllä.
 * Nimet ja tehtävät ovat esimerkkitekstejä, eivät oikeita henkilöesittelyjä.
 */
const team: TeamMember[] = [
  {
    id: "henkilo-1",
    name: "Jani Tuomaala",
    role: "ValintaGurun tiimi",
    description: "Sairaanhoitaja, käynnissä Yamk terveysteknologian tutkinto-ohjelma, Tekninen tuki, vastaa myös alustasta ja kehityksestä",
     image: "/tiimi/jani.jpeg",
  },
  {
    id: "henkilo-2",
    name: "Julianna Lintukangas",
    role: "ValintaGurun tiimi",
    description: "Vastaa myynnistä, asiakaspalvelusta ja markkinoinnista.",
    // image: "/tiimi/henkilo-2.webp",
  },
  {
    id: "henkilo-3",
    name: "Iina Lindholm",
    role: "ValintaGurun tiimi",
    description: "ValintaGurun opettaja. Oikeustieteiden maisteri ja tradenomi.",
    // image: "/tiimi/henkilo-3.webp",
  },
  /*
  {
    id: "henkilo-4",
    name: "Henkilö 4",
    role: "ValintaGurun tiimi",
    description: "Esittele tässä henkilön työ, tausta ja yksi asia, joka tekee hänestä tärkeän osan tiimiä.",
    // image: "/tiimi/henkilo-4.webp",
  },
  {
    id: "henkilo-5",
    name: "Henkilö 5",
    role: "ValintaGurun tiimi",
    description: "Kirjoita tähän muutama helposti lähestyttävä lause henkilöstä ja hänen tehtävästään.",
    // image: "/tiimi/henkilo-5.webp",
  },
  */
];

const navLinks = [
  { label: "Ota yhteyttä", href: "/kysy" },
  { label: "Valintakoe G", href: "/valintakoe-g" },
  { label: "Oikeustiede", href: "/oikeustiede" },
  { label: "Pisterajat", href: "/valintakoe-g-pisterajat" },
  { label: "Tietoa meistä", href: "/tietoa-meista" },
];

const mod = (n: number, length: number) => ((n % length) + length) % length;

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
    <span className={styles.portrait}>
      {showPhoto ? (
        <Image
          src={person.image!}
          alt={`Valokuva: ${person.name}`}
          fill
          sizes="(max-width: 600px) 260px, 350px"
          className={styles.portraitPhoto}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span className={styles.portraitEmpty} aria-label="Henkilökuva lisätään myöhemmin">
          <svg viewBox="0 0 140 140" fill="none" aria-hidden="true" className={styles.personIllustration}>
            <circle cx="70" cy="70" r="68" fill="#EFF0FF" />
            <circle cx="70" cy="52" r="24" fill="#AAB3FF" />
            <path d="M24 121c4-27 22-41 46-41s42 14 46 41" fill="#7989F2" />
          </svg>
          <span>Henkilökuva tähän</span>
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
    const measure = () => setWidth(element.getBoundingClientRect().width || 1100);
    measure();
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
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
      transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotate}deg) scale(${scale})`,
      opacity,
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

          <div className={styles.carouselContainer}>
            <div
              ref={stageRef}
              className={`${styles.carouselStage} ${dragging ? styles.stageDragging : ""}`}
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
                  className={`${styles.memberCard} ${index === active ? styles.memberActive : ""}`}
                  style={cardStyle(index)}
                  aria-label={`Näytä ${person.name}: ${person.role}`}
                  aria-current={index === active ? "true" : undefined}
                  tabIndex={index === active ? 0 : -1}
                  onClick={() => {
                    if (Date.now() < preventCardClickUntil.current) return;
                    goTo(index);
                  }}
                >
                  <PersonPortrait person={person} />
                  <span className={styles.memberInfo}>
                    <span className={styles.memberRole}>{person.role}</span>
                    <span className={styles.memberName}>{person.name}</span>
                    <span className={styles.memberDescription}>{person.description}</span>
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
