/**
 * GuruPeli / ranking -nimimerkkien moderointi.
 *
 * Käytä tätä aina myös serverillä, ei vain käyttöliittymässä.
 *
 * Sisältää:
 * - suomen- ja englanninkielisiä estotermejä
 * - leetspeak-normalisoinnin
 * - Unicode-lookalike-normalisoinnin
 * - toistettujen kirjainten kierron eston
 * - ylläpidon / ValintaGurun imitoinnin eston
 */

const BLOCKED_SUBSTRINGS = [
  // ============================================================
  // SUOMI – KIROSANAT / TÖRKEÄ SISÄLTÖ
  // ============================================================
  "vittu",
  "vitun",
  "vittuun",
  "vituttaa",
  "saatana",
  "saatanan",
  "perkele",
  "perkeleen",
  "helvetti",
  "helvetin",
  "jumalauta",
  "jumalauta",
  "jumankauta",

  // Seksuaalisesti törkeät
  "kyrpa",
  "kyrpä",
  "kullipaa",
  "kullipää",
  "pillu",
  "pillupaa",
  "pillupää",
  "runkkari",
  "runkku",
  "runkata",
  "runkkaaja",
  "nussia",
  "nussija",
  "nussitaan",
  "panomies",
  "panonainen",
  "seksiorja",
  "raiskaaja",
  "raiskaus",
  "raiskata",
  "raiskari",
  "lapsiporno",
  "lapsipornografia",
  "pedofiili",
  "pedofilia",
  "lastenhyvaksikaytto",
  "lastenhyväksikäyttö",

  // Halventavat / loukkaavat
  "huora",
  "huorapoika",
  "huoranpenikka",
  "lutka",
  "kusipaa",
  "kusipää",
  "paskapaa",
  "paskapää",
  "idiootti",
  "vajakki",
  "kehitysvammainen", // nimimerkissä yleensä loukkaava käyttö
  "kehari",
  "hinttari",
  "hintti",

  // Etniset / rasistiset halventavat termit
  "neekeri",
  "mutakuono",
  "rattipaa",
  "rättipää",
  "vinosilma",
  "vinosilmä",
  "ryssa",
  "ryssä",
  "manne",

  // Väkivalta / uhkailu / yllytys
  "tappakaikki",
  "tapanSinut",
  "tapansinun",
  "tapaItsesi",
  "tapaittesi",
  "kuolepois",
  "hirttaydy",
  "hirttäydy",
  "ammuItsesi",
  "ammuittesi",
  "joukkomurhaaja",
  "kouluampuja",
  "kouluammunta",
  "massamurhaaja",

  // Itsetuhoon yllytys
  "tapaItsesi",
  "kuole",
  "hirttaydy",
  "hirttäydy",
  "viillaitseasi",
  "vahingoitaitseasi",

  // ============================================================
  // ENGLANTI – NATSISMI / VALKOINEN YLIVALTA
  // ============================================================
  "nazi",
  "nazism",
  "neonazi",
  "hitler",
  "adolfhitler",
  "heilhitler",
  "siegheil",
  "whitepower",
  "whitepride",
  "whitesupremacy",
  "whitesupremacist",
  "aryanpower",
  "aryanpride",
  "aryanrace",
  "racewar",
  "racialholywar",
  "kukluxklan",
  "fourteenwords",
  "14words",

  // Terrorismi / joukkoväkivallan ihannointi
  "terrorist",
  "terrorism",
  "suicidebomber",
  "masskiller",
  "massmurder",
  "massshooter",
  "massshooting",
  "schoolshooter",
  "schoolshooting",
  "killall",
  "killthem",
  "killpeople",
  "killeveryone",
  "killyourself",
  "killurself",
  "hangyourself",
  "gasthem",
  "murderall",

  // Seksuaalinen väkivalta / alaikäisiin kohdistuva sisältö
  "rapist",
  "raping",
  "sexslave",
  "molester",
  "pedophile",
  "paedophile",
  "pedophilia",
  "paedophilia",
  "childporn",
  "childporno",
  "childsexualabuse",
  "childabusematerial",
  "groomingchildren",

  // Pornografinen / eksplisiittinen sisältö
  "pornhub",
  "onlyfans",
  "hardcoreporn",
  "pornstar",
  "sexcam",
  "camgirl",
  "camboy",

  // Itsensä vahingoittaminen / itsemurhaan yllytys
  "selfharm",
  "cutmyself",
  "cutyourself",
  "kmsnow",
  "kysnow",
  "suicideclub",
  "suicidecult",

  // Rikollisuuden / huumekaupan promo
  "drugdealer",
  "druglord",
  "cocainedealer",
  "cokedealer",
  "methdealer",
  "heroindealer",
  "fentanyldealer",

  // ============================================================
  // VALINTAGURU / YLLÄPIDON IMITOINTI
  // ============================================================
  "valintaguruadmin",
  "valintagurumod",
  "valintagurumoderator",
  "valintagurustaff",
  "valintagurusupport",
  "valintaguruofficial",
  "valintaguruverified",
  "officialvalintaguru",
  "verifiedvalintaguru",
  "valintagurusystem",
  "valintagurutiimi",
  "valintaguruyllapito",
  "valintaguruylläpito",
  "valintaguruasiakaspalvelu",
  "valintaguruvirallinen",
  "siteadministrator",
  "systemadministrator",
  "officialadministrator",
  "verifiedadministrator",
  "officialmoderator",
  "verifiedmoderator",
  "officialsupport",
  "verifiedsupport",
] as const;

/**
 * Lyhyet sanat tarkistetaan vain täsmälleen kokonaisena nimimerkkinä.
 * Näin vältetään turhia osumia pidemmissä tavallisissa nimissä.
 */
const BLOCKED_EXACT = [
  // Suomi
  "paska",
  "perse",
  "kulli",
  "kyrpa",
  "kyrpä",
  "pillu",
  "huora",
  "lutka",
  "runkku",
  "pedo",

  // Englanti / symbolit
  "kkk",
  "1488",
  "88hh",
  "hh88",
  "kys",
  "kms",
  "xxx",
  "porn",
  "porno",
  "rape",
  "suicide",
  "terror",
] as const;

/**
 * Varatut / ylläpitoa imitoivat nimet.
 */
const RESERVED_EXACT = [
  // Englanti
  "admin",
  "administrator",
  "mod",
  "moderator",
  "staff",
  "support",
  "system",
  "official",
  "verified",
  "root",
  "superuser",
  "superadmin",
  "webmaster",

  // Suomi
  "ylläpito",
  "yllapito",
  "ylläpitäjä",
  "yllapitaja",
  "moderaattori",
  "tuki",
  "asiakaspalvelu",
  "järjestelmä",
  "jarjestelma",
  "virallinen",
  "vahvistettu",
  "valintaguru",
  "valintagurutiimi",
] as const;

const RESERVED_PREFIXES = [
  "admin",
  "administrator",
  "moderator",
  "support",
  "system",
  "yllapito",
  "ylläpito",
  "moderaattori",
  "asiakaspalvelu",
  "virallinen",
  "valintaguruadmin",
  "valintagurumod",
  "valintagurustaff",
  "valintagurusupport",
  "valintaguruyllapito",
  "valintaguruylläpito",
] as const;

const LEET: Record<string, string> = {
  "0": "o",
  "1": "i",
  "2": "z",
  "3": "e",
  "4": "a",
  "5": "s",
  "6": "g",
  "7": "t",
  "8": "b",
  "9": "g",
  "@": "a",
  "$": "s",
  "!": "i",
  "|": "i",
  "+": "t",
};

const CONFUSABLES: Record<string, string> = {
  // Cyrillic
  "а": "a",
  "А": "a",
  "е": "e",
  "Е": "e",
  "о": "o",
  "О": "o",
  "р": "p",
  "Р": "p",
  "с": "c",
  "С": "c",
  "у": "y",
  "У": "y",
  "х": "x",
  "Х": "x",
  "і": "i",
  "І": "i",
  "ј": "j",
  "Ј": "j",
  "к": "k",
  "К": "k",
  "м": "m",
  "М": "m",
  "т": "t",
  "Т": "t",
  "в": "b",
  "В": "b",
  "н": "h",
  "Н": "h",

  // Greek
  "Α": "a",
  "α": "a",
  "Β": "b",
  "Ε": "e",
  "ε": "e",
  "Ι": "i",
  "ι": "i",
  "Κ": "k",
  "κ": "k",
  "Μ": "m",
  "Ν": "n",
  "Ο": "o",
  "ο": "o",
  "Ρ": "p",
  "ρ": "p",
  "Τ": "t",
  "Υ": "y",
  "Χ": "x",
  "χ": "x",
};

export function compactGuruName(input: string) {
  return input
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .split("")
    .map((c) => CONFUSABLES[c] ?? c)
    .join("")
    .toLowerCase()
    .replace(/[^a-z0-9åäö]/gi, "");
}

export function normalizeGuruName(input: string) {
  return compactGuruName(input)
    .split("")
    .map((c) => LEET[c] ?? c)
    .join("")
    .replace(/[^a-z0-9åäö]/gi, "");
}

function collapseRepeatedCharacters(input: string) {
  return input.replace(/(.)\1{1,}/g, "$1");
}

function containsBlockedSubstring(
  normalized: string,
  collapsed: string
) {
  return BLOCKED_SUBSTRINGS.some((term) => {
    const normalizedTerm = normalizeGuruName(term);
    const collapsedTerm = collapseRepeatedCharacters(normalizedTerm);

    return (
      normalized.includes(normalizedTerm) ||
      collapsed.includes(collapsedTerm)
    );
  });
}

function isReservedName(
  normalized: string,
  collapsed: string
) {
  if (
    RESERVED_EXACT.some((term) => {
      const normalizedTerm = normalizeGuruName(term);

      return (
        normalized === normalizedTerm ||
        collapsed === collapseRepeatedCharacters(normalizedTerm)
      );
    })
  ) {
    return true;
  }

  return RESERVED_PREFIXES.some((term) => {
    const normalizedTerm = normalizeGuruName(term);

    return (
      normalized.startsWith(normalizedTerm) ||
      collapsed.startsWith(
        collapseRepeatedCharacters(normalizedTerm)
      )
    );
  });
}

export function validateGuruName(input: unknown) {
  if (typeof input !== "string") {
    return {
      ok: false as const,
      error: "Nimimerkki puuttuu.",
    };
  }

  const name = input
    .trim()
    .replace(/\s+/g, " ");

  if (name.length < 3 || name.length > 24) {
    return {
      ok: false as const,
      error: "Nimimerkin pitää olla 3–24 merkkiä pitkä.",
    };
  }

  if (!/^[\p{L}\p{N} ._-]+$/u.test(name)) {
    return {
      ok: false as const,
      error:
        "Nimimerkissä voi käyttää kirjaimia, numeroita, välilyöntiä sekä . _ - merkkejä.",
    };
  }

  if (/^[\s._-]+$/.test(name)) {
    return {
      ok: false as const,
      error: "Nimimerkki ei kelpaa.",
    };
  }

  if (!/[\p{L}\p{N}]/u.test(name)) {
    return {
      ok: false as const,
      error: "Nimimerkki ei kelpaa.",
    };
  }

  const compact = compactGuruName(name);
  const normalized = normalizeGuruName(name);
  const collapsed = collapseRepeatedCharacters(normalized);

  const blockedExactCompact = BLOCKED_EXACT.some(
    (term) => compact === compactGuruName(term)
  );

  if (blockedExactCompact) {
    return {
      ok: false as const,
      error: "Tätä nimimerkkiä ei voi käyttää.",
    };
  }

  const blockedExactNormalized = BLOCKED_EXACT.some((term) => {
    const normalizedTerm = normalizeGuruName(term);

    return (
      normalized === normalizedTerm ||
      collapsed === collapseRepeatedCharacters(normalizedTerm)
    );
  });

  if (blockedExactNormalized) {
    return {
      ok: false as const,
      error: "Tätä nimimerkkiä ei voi käyttää.",
    };
  }

  if (containsBlockedSubstring(normalized, collapsed)) {
    return {
      ok: false as const,
      error: "Tätä nimimerkkiä ei voi käyttää.",
    };
  }

  if (isReservedName(normalized, collapsed)) {
    return {
      ok: false as const,
      error: "Tämä nimimerkki on varattu.",
    };
  }

  return {
    ok: true as const,
    name,
    normalized,
  };
}
