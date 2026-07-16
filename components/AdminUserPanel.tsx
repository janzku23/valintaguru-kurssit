"use client";

import { FormEvent, useMemo, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { courses } from "@/data/courses";

type CreatedUserResult = {
  success?: boolean;
  message?: string;
  error?: string;
  user?: {
    id: string;
    email: string;
  };
  courses?: Array<{
    id: string;
    title: string;
  }>;
};

export default function AdminUserPanel() {
  const supabase = useMemo(() => createClient(), []);

  const [email, setEmail] = useState("");
  const [selectedCourseIds, setSelectedCourseIds] = useState<string[]>([]);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function toggleCourse(courseId: string) {
    setSelectedCourseIds((current) => {
      if (current.includes(courseId)) {
        return current.filter((id) => id !== courseId);
      }

      return [...current, courseId];
    });
  }

  function selectAllCourses() {
    setSelectedCourseIds(courses.map((course) => course.id));
  }

  function clearCourses() {
    setSelectedCourseIds([]);
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
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError || !session?.access_token) {
        setError("Admin-kirjautuminen ei ole enää voimassa.");
        return;
      }

      const response = await fetch("/api/admin/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          email: normalizedEmail,
          courseIds: selectedCourseIds,
        }),
      });

      const result = (await response.json()) as CreatedUserResult;

      if (!response.ok) {
        setError(result.error ?? "Käyttäjän luominen epäonnistui.");
        return;
      }

      setSuccess(
        result.message ??
          `Käyttäjä luotiin ja kutsu lähetettiin osoitteeseen ${normalizedEmail}.`
      );

      setEmail("");
      setSelectedCourseIds([]);
    } catch (requestError) {
      console.error("Admin-kutsu epäonnistui:", requestError);
      setError("Palvelimeen ei saatu yhteyttä.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section style={styles.panel}>
      <div style={styles.header}>
        <div>
          <p style={styles.eyebrow}>Admin-paneeli</p>

          <h2 style={styles.title}>Luo uusi käyttäjä</h2>

          <p style={styles.description}>
            Kirjoita käyttäjän sähköposti ja valitse kurssit, jotka avataan
            käyttäjälle. Käyttäjä saa sähköpostin, jonka kautta hän voi asettaa
            salasanansa.
          </p>
        </div>

        <span style={styles.adminBadge}>ADMIN</span>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
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

              <p style={styles.courseDescription}>
                Valittuna {selectedCourseIds.length}/{courses.length}
              </p>
            </div>

            <div style={styles.courseActions}>
              <button
                type="button"
                onClick={selectAllCourses}
                style={styles.textButton}
              >
                Valitse kaikki
              </button>

              <button
                type="button"
                onClick={clearCourses}
                style={styles.textButton}
              >
                Tyhjennä
              </button>
            </div>
          </div>

          <div style={styles.courseGrid}>
            {courses.map((course) => {
              const selected = selectedCourseIds.includes(course.id);

              return (
                <label
                  key={course.id}
                  style={{
                    ...styles.courseCard,
                    ...(selected ? styles.courseCardSelected : {}),
                  }}
                >
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

                  <span
                    style={{
                      ...styles.selectionBadge,
                      ...(selected ? styles.selectionBadgeSelected : {}),
                    }}
                  >
                    {selected ? "Valittu" : "Ei valittu"}
                  </span>
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
          style={{
            ...styles.submitButton,
            opacity: sending ? 0.65 : 1,
            cursor: sending ? "not-allowed" : "pointer",
          }}
        >
          {sending
            ? "Luodaan käyttäjää..."
            : "Luo käyttäjä ja lähetä sähköposti"}
        </button>
      </form>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  panel: {
    marginBottom: 18,
    padding: 24,
    borderRadius: 28,
    background:
      "linear-gradient(145deg, rgba(7, 52, 160, 0.98), rgba(36, 107, 255, 0.96))",
    color: "#FFFFFF",
    boxShadow: "0 22px 55px rgba(10, 70, 190, 0.24)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 20,
    flexWrap: "wrap",
  },
  eyebrow: {
    margin: 0,
    fontSize: 13,
    fontWeight: 900,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    color: "#DCE9FF",
  },
  title: {
    margin: "7px 0 8px",
    fontSize: 28,
    fontWeight: 950,
  },
  description: {
    maxWidth: 700,
    margin: 0,
    fontSize: 15,
    lineHeight: 1.55,
    color: "#EAF1FF",
  },
  adminBadge: {
    padding: "9px 13px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.17)",
    border: "1px solid rgba(255,255,255,0.28)",
    fontSize: 12,
    fontWeight: 950,
    letterSpacing: 0.6,
  },
  form: {
    display: "grid",
    gap: 22,
    marginTop: 24,
  },
  label: {
    display: "grid",
    gap: 9,
    fontSize: 14,
    fontWeight: 850,
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "15px 16px",
    borderRadius: 17,
    border: "1px solid rgba(255,255,255,0.34)",
    background: "#FFFFFF",
    color: "#0B1633",
    fontSize: 16,
    fontWeight: 700,
    outline: "none",
  },
  courseHeader: {
    display: "flex",
    justifyContent: "space-between",
    gap: 14,
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 12,
  },
  courseTitle: {
    margin: 0,
    fontSize: 17,
    fontWeight: 900,
  },
  courseDescription: {
    margin: "4px 0 0",
    color: "#DCE9FF",
    fontSize: 13,
    fontWeight: 700,
  },
  courseActions: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
  },
  textButton: {
    padding: "8px 12px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.28)",
    background: "rgba(255,255,255,0.12)",
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: 850,
    cursor: "pointer",
  },
  courseGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(235px, 1fr))",
    gap: 11,
  },
  courseCard: {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
    gap: 11,
    padding: 14,
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.20)",
    background: "rgba(255,255,255,0.10)",
    cursor: "pointer",
  },
  courseCardSelected: {
    background: "#FFFFFF",
    color: "#0B1633",
    border: "1px solid #FFFFFF",
  },
  checkbox: {
    width: 19,
    height: 19,
    accentColor: "#246BFF",
    cursor: "pointer",
  },
  courseName: {
    margin: 0,
    fontSize: 14,
    fontWeight: 900,
  },
  courseId: {
    margin: "4px 0 0",
    fontSize: 11,
    fontWeight: 700,
    opacity: 0.7,
  },
  selectionBadge: {
    padding: "6px 8px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.14)",
    fontSize: 10,
    fontWeight: 900,
    whiteSpace: "nowrap",
  },
  selectionBadgeSelected: {
    background: "#EAF1FF",
    color: "#0A46D9",
  },
  error: {
    padding: "13px 15px",
    borderRadius: 16,
    border: "1px solid rgba(255, 190, 190, 0.65)",
    background: "rgba(120, 0, 0, 0.25)",
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: 850,
  },
  success: {
    padding: "13px 15px",
    borderRadius: 16,
    border: "1px solid rgba(185, 255, 215, 0.55)",
    background: "rgba(0, 100, 55, 0.24)",
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: 850,
  },
  submitButton: {
    width: "100%",
    padding: "15px 18px",
    border: 0,
    borderRadius: 18,
    background: "#FFFFFF",
    color: "#0A46D9",
    fontSize: 15,
    fontWeight: 950,
    boxShadow: "0 12px 30px rgba(0,0,0,0.16)",
  },
};