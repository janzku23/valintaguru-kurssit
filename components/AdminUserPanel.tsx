"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { courses } from "@/data/courses";

type CreatedUserResult = {
  success?: boolean;
  message?: string;
  error?: string;
  user?: { id: string; email: string };
  courses?: Array<{ id: string; title: string }>;
};

type SignupListResult = {
  success?: boolean;
  error?: string;
  totalSignups?: number;
  marketingConsentCount?: number;
  marketingEmails?: string[];
};

export default function AdminUserPanel() {
  const supabase = useMemo(() => createClient(), []);
  const [email, setEmail] = useState("");
  const [selectedCourseIds, setSelectedCourseIds] = useState<string[]>([]);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [marketingEmails, setMarketingEmails] = useState<string[]>([]);
  const [totalSignups, setTotalSignups] = useState(0);
  const [listLoading, setListLoading] = useState(true);
  const [listError, setListError] = useState("");
  const [copyMessage, setCopyMessage] = useState("");

  useEffect(() => {
    void loadSignupList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleCourse(courseId: string) {
    setSelectedCourseIds((current) =>
      current.includes(courseId)
        ? current.filter((id) => id !== courseId)
        : [...current, courseId]
    );
  }

  function selectAllCourses() {
    setSelectedCourseIds(courses.map((course) => course.id));
  }

  function clearCourses() {
    setSelectedCourseIds([]);
  }

  async function getAccessToken() {
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    if (sessionError || !session?.access_token) {
      throw new Error("Admin-kirjautuminen ei ole enää voimassa.");
    }
    return session.access_token;
  }

  async function loadSignupList() {
    setListLoading(true);
    setListError("");
    setCopyMessage("");
    try {
      const accessToken = await getAccessToken();
      const response = await fetch("/api/admin/free-course-signups", {
        headers: { Authorization: `Bearer ${accessToken}` },
        cache: "no-store",
      });
      const result = (await response.json()) as SignupListResult;
      if (!response.ok) {
        setListError(result.error ?? "Uutiskirjelistan hakeminen epäonnistui.");
        return;
      }
      setMarketingEmails(result.marketingEmails ?? []);
      setTotalSignups(result.totalSignups ?? 0);
    } catch (requestError) {
      console.error("Uutiskirjelistan haku epäonnistui:", requestError);
      setListError(
        requestError instanceof Error ? requestError.message : "Uutiskirjelistan haku epäonnistui."
      );
    } finally {
      setListLoading(false);
    }
  }

  async function copyEmails() {
    setCopyMessage("");
    const value = marketingEmails.join("; ");
    if (!value) {
      setCopyMessage("Kopioitavia osoitteita ei vielä ole.");
      return;
    }

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = value;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      }
      setCopyMessage(`${marketingEmails.length} sähköpostiosoitetta kopioitu.`);
    } catch {
      setCopyMessage("Kopiointi epäonnistui. Kopioi lista käsin tekstikentästä.");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setError("Kirjoita käyttäjän sähköpostiosoite.");
      return;
    }
    if (selectedCourseIds.length === 0) {
      setError("Valitse vähintään yksi käyttäjälle avattava kurssi.");
      return;
    }

    setSending(true);
    try {
      const accessToken = await getAccessToken();
      const response = await fetch("/api/admin/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ email: normalizedEmail, courseIds: selectedCourseIds }),
      });
      const result = (await response.json()) as CreatedUserResult;
      if (!response.ok) {
        setError(result.error ?? "Käyttäjän luominen epäonnistui.");
        return;
      }
      setSuccess(
        result.message ?? `Käyttäjä luotiin ja kutsu lähetettiin osoitteeseen ${normalizedEmail}.`
      );
      setEmail("");
      setSelectedCourseIds([]);
    } catch (requestError) {
      console.error("Admin-kutsu epäonnistui:", requestError);
      setError(requestError instanceof Error ? requestError.message : "Palvelimeen ei saatu yhteyttä.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section style={styles.panel}>
      <div style={styles.header}>
        <div>
          <p style={styles.eyebrow}>Admin-paneeli</p>
          <h2 style={styles.title}>Käyttäjät ja uutiskirje</h2>
          <p style={styles.description}>
            Luo kurssikäyttäjiä kuten ennen ja hallitse yhdestä paikasta
            kaikkia käyttäjiä, jotka ovat ottaneet ValintaGurun uutiskirjeen käyttöön.
          </p>
        </div>
        <span style={styles.adminBadge}>ADMIN</span>
      </div>

      <div style={styles.adminGrid}>
        <form onSubmit={handleSubmit} style={styles.subPanel}>
          <div>
            <p style={styles.subEyebrow}>Kurssioikeudet</p>
            <h3 style={styles.subTitle}>Luo uusi käyttäjä</h3>
          </div>

          <label style={styles.label}>
            Käyttäjän sähköposti
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="opiskelija@example.com"
              autoComplete="email"
              required
              style={styles.input}
            />
          </label>

          <div>
            <div style={styles.courseHeader}>
              <div>
                <p style={styles.courseTitle}>Avattavat kurssit</p>
                <p style={styles.muted}>Valittuna {selectedCourseIds.length}/{courses.length}</p>
              </div>
              <div style={styles.actions}>
                <button type="button" onClick={selectAllCourses} style={styles.smallButton}>Valitse kaikki</button>
                <button type="button" onClick={clearCourses} style={styles.smallButton}>Tyhjennä</button>
              </div>
            </div>

            <div style={styles.courseGrid}>
              {courses.map((course) => {
                const selected = selectedCourseIds.includes(course.id);
                return (
                  <label key={course.id} style={{ ...styles.courseCard, ...(selected ? styles.courseCardSelected : {}) }}>
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={() => toggleCourse(course.id)}
                      style={styles.checkbox}
                    />
                    <div>
                      <p style={styles.courseName}>{course.title}</p>
                      <p style={styles.courseId}>{course.id}</p>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {error && <div style={styles.error}>{error}</div>}
          {success && <div style={styles.success}>{success}</div>}

          <button
            type="submit"
            disabled={sending}
            style={{ ...styles.primaryButton, opacity: sending ? 0.65 : 1 }}
          >
            {sending ? "Luodaan käyttäjää..." : "Luo käyttäjä ja lähetä sähköposti"}
          </button>
        </form>

        <div style={styles.subPanel}>
          <div style={styles.listHeader}>
            <div>
              <p style={styles.subEyebrow}>Uutiskirje</p>
              <h3 style={styles.subTitle}>Uutiskirjeen tilaajat</h3>
              <p style={styles.muted}>
                {listLoading
                  ? "Ladataan listaa..."
                  : `${totalSignups} ilmaiskurssille ilmoittautunutta · ${marketingEmails.length} uutiskirjeen tilaajaa`}
              </p>
            </div>
            <button type="button" onClick={() => void loadSignupList()} style={styles.smallButton}>
              Päivitä
            </button>
          </div>

          {listError && <div style={styles.error}>{listError}</div>}

          <label style={styles.label}>
            Uutiskirjeen tilanneiden sähköpostit
            <textarea
              readOnly
              value={marketingEmails.join("\n")}
              placeholder="Lista ilmestyy tähän, kun ensimmäinen käyttäjä ottaa uutiskirjeen käyttöön."
              style={styles.textarea}
            />
          </label>

          <p style={styles.muted}>
            Kopioi-painike muodostaa osoitteet puolipisteillä eroteltuna, jolloin
            lista on helppo liittää BCC/piilokopio-kenttään.
          </p>

          <button
            type="button"
            onClick={() => void copyEmails()}
            disabled={marketingEmails.length === 0}
            style={{ ...styles.primaryButton, opacity: marketingEmails.length === 0 ? 0.55 : 1 }}
          >
            Kopioi kaikki sähköpostit ({marketingEmails.length})
          </button>

          {copyMessage && <div style={styles.copyMessage}>{copyMessage}</div>}
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  panel: { marginBottom: 18, padding: 24, borderRadius: 28, background: "linear-gradient(145deg, rgba(7,52,160,.98), rgba(36,107,255,.96))", color: "#fff", boxShadow: "0 22px 55px rgba(10,70,190,.24)" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 20, flexWrap: "wrap" },
  eyebrow: { margin: 0, fontSize: 13, fontWeight: 900, letterSpacing: .8, textTransform: "uppercase", color: "#DCE9FF" },
  title: { margin: "7px 0 8px", fontSize: 28, fontWeight: 950 },
  description: { maxWidth: 760, margin: 0, fontSize: 15, lineHeight: 1.55, color: "#EAF1FF" },
  adminBadge: { padding: "9px 13px", borderRadius: 999, background: "rgba(255,255,255,.17)", border: "1px solid rgba(255,255,255,.28)", fontSize: 12, fontWeight: 950 },
  adminGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,430px),1fr))", gap: 16, marginTop: 24 },
  subPanel: { display: "grid", alignContent: "start", gap: 18, padding: 20, borderRadius: 22, background: "#fff", color: "#0B1633", boxShadow: "0 12px 30px rgba(0,0,0,.12)" },
  subEyebrow: { margin: 0, color: "#0A46D9", fontSize: 11, fontWeight: 950, letterSpacing: .7, textTransform: "uppercase" },
  subTitle: { margin: "5px 0 0", fontSize: 22, fontWeight: 950 },
  label: { display: "grid", gap: 8, color: "#25324D", fontSize: 14, fontWeight: 850 },
  input: { width: "100%", boxSizing: "border-box", padding: "14px 15px", borderRadius: 15, border: "1px solid rgba(20,60,130,.18)", background: "#F8FBFF", color: "#0B1633", fontSize: 15, fontWeight: 700, outline: "none" },
  courseHeader: { display: "flex", justifyContent: "space-between", gap: 14, alignItems: "center", flexWrap: "wrap", marginBottom: 10 },
  courseTitle: { margin: 0, fontSize: 15, fontWeight: 900 },
  muted: { margin: "5px 0 0", color: "#687894", fontSize: 12, lineHeight: 1.5, fontWeight: 650 },
  actions: { display: "flex", gap: 7, flexWrap: "wrap" },
  smallButton: { padding: "8px 11px", borderRadius: 999, border: "1px solid rgba(36,107,255,.20)", background: "#EEF4FF", color: "#0A46D9", fontSize: 11, fontWeight: 850, cursor: "pointer" },
  courseGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 9 },
  courseCard: { display: "grid", gridTemplateColumns: "auto 1fr", alignItems: "center", gap: 9, padding: 12, borderRadius: 15, border: "1px solid rgba(30,80,180,.12)", background: "#F7FAFF", cursor: "pointer" },
  courseCardSelected: { background: "#EAF1FF", border: "1px solid rgba(36,107,255,.35)" },
  checkbox: { width: 18, height: 18, accentColor: "#246BFF", cursor: "pointer" },
  courseName: { margin: 0, fontSize: 13, fontWeight: 900 },
  courseId: { margin: "3px 0 0", fontSize: 10, fontWeight: 700, opacity: .65 },
  error: { padding: "12px 14px", borderRadius: 14, border: "1px solid #FECACA", background: "#FEF2F2", color: "#B91C1C", fontSize: 13, fontWeight: 850 },
  success: { padding: "12px 14px", borderRadius: 14, border: "1px solid #BBF7D0", background: "#F0FDF4", color: "#15803D", fontSize: 13, fontWeight: 850 },
  primaryButton: { width: "100%", padding: "13px 16px", border: 0, borderRadius: 15, background: "#0A46D9", color: "#fff", fontSize: 14, fontWeight: 950, cursor: "pointer", boxShadow: "0 10px 24px rgba(10,70,217,.20)" },
  listHeader: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" },
  textarea: { width: "100%", minHeight: 220, resize: "vertical", boxSizing: "border-box", padding: 14, borderRadius: 15, border: "1px solid rgba(20,60,130,.18)", background: "#F8FBFF", color: "#0B1633", fontSize: 13, lineHeight: 1.6, fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace", outline: "none" },
  copyMessage: { padding: "10px 12px", borderRadius: 12, background: "#F0FDF4", color: "#15803D", fontSize: 12, fontWeight: 800 },
};
