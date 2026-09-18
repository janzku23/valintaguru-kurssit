const BLOCKED_TERMS = [
  // Keep this list intentionally server-side as well.
  // Add your own Finnish/English terms here when necessary.
  "nazi",
  "hitler",
  "kkk",
  "whitepower",
  "heilhitler",
  "1488",
  "88hh",
  "terrorist",
];

const BLOCKED_PATTERNS: RegExp[] = [
  /n[\W_]*a[\W_]*z[\W_]*i/i,
  /h[\W_]*i[\W_]*t[\W_]*l[\W_]*e[\W_]*r/i,
  /w[\W_]*h[\W_]*i[\W_]*t[\W_]*e[\W_]*p[\W_]*o[\W_]*w[\W_]*e[\W_]*r/i,
];

const LEET: Record<string, string> = {
  "0": "o",
  "1": "i",
  "3": "e",
  "4": "a",
  "5": "s",
  "7": "t",
  "@": "a",
  "$": "s",
};

export function normalizeGuruName(input: string) {
  return input
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .split("")
    .map((c) => LEET[c] ?? c)
    .join("")
    .replace(/[^a-z0-9åäö]/gi, "");
}

export function validateGuruName(input: unknown) {
  if (typeof input !== "string") {
    return { ok: false as const, error: "Nimimerkki puuttuu." };
  }

  const name = input.trim().replace(/\s+/g, " ");

  if (name.length < 3 || name.length > 24) {
    return {
      ok: false as const,
      error: "Nimimerkin pitää olla 3–24 merkkiä pitkä.",
    };
  }

  // Letters/numbers + spaces + . _ -
  // Unicode letters are supported.
  if (!/^[\p{L}\p{N} ._-]+$/u.test(name)) {
    return {
      ok: false as const,
      error: "Nimimerkissä voi käyttää kirjaimia, numeroita, välilyöntiä sekä . _ - merkkejä.",
    };
  }

  if (/^[\s._-]+$/.test(name)) {
    return { ok: false as const, error: "Nimimerkki ei kelpaa." };
  }

  const normalized = normalizeGuruName(name);

  if (BLOCKED_TERMS.some((term) => normalized.includes(normalizeGuruName(term)))) {
    return {
      ok: false as const,
      error: "Tätä nimimerkkiä ei voi käyttää.",
    };
  }

  if (BLOCKED_PATTERNS.some((pattern) => pattern.test(name))) {
    return {
      ok: false as const,
      error: "Tätä nimimerkkiä ei voi käyttää.",
    };
  }

  return {
    ok: true as const,
    name,
    normalized,
  };
}
