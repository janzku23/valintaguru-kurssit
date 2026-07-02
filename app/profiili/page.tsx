"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";

const feedbackEmail = "info@valintaguru.fi";

type ProfileRow = {
  id?: string;
  user_id?: string;
  email?: string;
  full_name?: string | null;
  name?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
};

type CourseAccess = {
  id?: string;
  user_id?: string;
  email?: string;
  course_id?: string;
  course_slug?: string;
  course_title?: string;
  title?: string;
  status?: string;
  created_at?: string;
};

type QuizAttemptRow = {
  id: string;
  user_id: string;
  course_id: string;
  question_id: string;
  question: string;
  area: string;
  selected_answer_ids: string[];
  correct_answer_ids: string[];
  is_correct: boolean;
  answered_at: string;
};

type FlashcardProgressRow = {
  id?: string;
  user_id?: string;
  course_id: string;
  flashcard_id: string;
  status: "known" | "needs_practice";
  updated_at: string;
};

type CourseProgressSummary = {
  courseId: string;
  title: string;
  attempts: number;
  correct: number;
  accuracy: number;
  knownFlashcards: number;
  practiceFlashcards: number;
  latestAt: string | null;
};

type Stats = {
  activeCourses: number;
  quizAttempts: number;
  correctAnswers: number;
  averageScore: number;
  knownFlashcards: number;
  practiceFlashcards: number;
};

export default function ProfilePage() {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);

  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState("");
  const [savingPassword, setSavingPassword] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const [profile, setProfile] = useState<ProfileRow | null>(null);
  const [courses, setCourses] = useState<CourseAccess[]>([]);
  const [quizAttempts, setQuizAttempts] = useState<QuizAttemptRow[]>([]);
  const [flashcardProgress, setFlashcardProgress] = useState<
    FlashcardProgressRow[]
  >([]);

  const [newPassword, setNewPassword] = useState("");
  const [newPasswordAgain, setNewPasswordAgain] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    void loadProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadProfile() {
    setLoading(true);
    setPageError("");

    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        router.replace("/kirjaudu?next=/profiili");
        return;
      }

      setUser(user);

      const [profileData, courseData, quizData, flashcardData] =
        await Promise.all([
          fetchProfile(user),
          fetchCourseAccess(user),
          fetchQuizAttempts(user),
          fetchFlashcardProgress(user),
        ]);

      setProfile(profileData);
      setCourses(courseData);
      setQuizAttempts(quizData);
      setFlashcardProgress(flashcardData);
    } catch (error) {
      console.error("Profile loading failed:", error);
      setPageError("Profiilin lataaminen epäonnistui. Yritä päivittää sivu.");
    } finally {
      setLoading(false);
    }
  }

  async function fetchProfile(user: User): Promise<ProfileRow | null> {
    try {
      const byId = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .maybeSingle();

      if (!byId.error && byId.data) {
        return byId.data;
      }

      const byUserId = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (!byUserId.error && byUserId.data) {
        return byUserId.data;
      }
    } catch (error) {
      console.warn("Profile table fetch failed:", error);
    }

    return {
      id: user.id,
      email: user.email ?? "",
      full_name:
        typeof user.user_metadata?.full_name === "string"
          ? user.user_metadata.full_name
          : null,
      created_at: user.created_at,
    };
  }

  async function fetchCourseAccess(user: User): Promise<CourseAccess[]> {
    const found: CourseAccess[] = [];

    try {
      const byUserId = await supabase
        .from("student_courses")
        .select("*")
        .eq("user_id", user.id);

      if (!byUserId.error && byUserId.data) {
        found.push(...byUserId.data);
      }
    } catch (error) {
      console.warn("Course access by user_id failed:", error);
    }

    if (user.email) {
      try {
        const byEmail = await supabase
          .from("student_courses")
          .select("*")
          .eq("email", user.email.toLowerCase());

        if (!byEmail.error && byEmail.data) {
          found.push(...byEmail.data);
        }
      } catch (error) {
        console.warn("Course access by email failed:", error);
      }
    }

    const visibleCourses = found.filter((item) => {
      if (!item.status) return true;

      const normalizedStatus = item.status.toLowerCase();

      return (
        normalizedStatus === "active" ||
        normalizedStatus === "käytössä" ||
        normalizedStatus === "kaytossa"
      );
    });

    const unique = new Map<string, CourseAccess>();

    visibleCourses.forEach((item, index) => {
      const key =
        item.course_id ??
        item.course_slug ??
        item.id ??
        item.course_title ??
        item.title ??
        `${item.email ?? "course"}-${index}`;

      unique.set(key, item);
    });

    return Array.from(unique.values());
  }

  async function fetchQuizAttempts(user: User): Promise<QuizAttemptRow[]> {
    try {
      const result = await supabase
        .from("student_progress_attempts")
        .select(
          "id, user_id, course_id, question_id, question, area, selected_answer_ids, correct_answer_ids, is_correct, answered_at"
        )
        .eq("user_id", user.id)
        .order("answered_at", { ascending: false });

      if (result.error) {
        console.warn("Quiz attempts fetch failed:", result.error);
        return [];
      }

      return (result.data ?? []) as QuizAttemptRow[];
    } catch (error) {
      console.warn("Quiz attempts fetch failed:", error);
      return [];
    }
  }

  async function fetchFlashcardProgress(
    user: User
  ): Promise<FlashcardProgressRow[]> {
    try {
      const result = await supabase
        .from("student_flashcard_progress")
        .select("id, user_id, course_id, flashcard_id, status, updated_at")
        .eq("user_id", user.id)
        .order("updated_at", { ascending: false });

      if (result.error) {
        console.warn("Flashcard progress fetch failed:", result.error);
        return [];
      }

      return (result.data ?? []) as FlashcardProgressRow[];
    } catch (error) {
      console.warn("Flashcard progress fetch failed:", error);
      return [];
    }
  }

  async function handlePasswordChange(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setPasswordMessage("");
    setPasswordError("");

    if (newPassword.length < 8) {
      setPasswordError("Salasanan pitää olla vähintään 8 merkkiä.");
      return;
    }

    if (newPassword !== newPasswordAgain) {
      setPasswordError("Salasanat eivät täsmää.");
      return;
    }

    setSavingPassword(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        setPasswordError(error.message);
        return;
      }

      setNewPassword("");
      setNewPasswordAgain("");
      setPasswordMessage("Salasana vaihdettu onnistuneesti.");
    } catch {
      setPasswordError("Salasanan vaihto epäonnistui.");
    } finally {
      setSavingPassword(false);
    }
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.replace("/kirjaudu");
    router.refresh();
  }

  function formatCourseStatus(status?: string) {
    if (!status) return "Käytössä";

    const normalizedStatus = status.toLowerCase();

    if (
      normalizedStatus === "active" ||
      normalizedStatus === "käytössä" ||
      normalizedStatus === "kaytossa"
    ) {
      return "Käytössä";
    }

    return status;
  }

  function getCourseKey(course: CourseAccess) {
    return course.course_id ?? course.course_slug ?? course.id ?? "";
  }

  function getCourseTitleById(courseId: string) {
    const match = courses.find((course) => {
      return course.course_id === courseId || course.course_slug === courseId;
    });

    return (
      match?.course_title ??
      match?.title ??
      match?.course_slug ??
      match?.course_id ??
      courseId
    );
  }

  const stats: Stats = useMemo(() => {
    const correctAnswers = quizAttempts.filter((item) => item.is_correct).length;

    const averageScore =
      quizAttempts.length > 0
        ? Math.round((correctAnswers / quizAttempts.length) * 100)
        : 0;

    const knownFlashcards = flashcardProgress.filter(
      (item) => item.status === "known"
    ).length;

    const practiceFlashcards = flashcardProgress.filter(
      (item) => item.status === "needs_practice"
    ).length;

    return {
      activeCourses: courses.length,
      quizAttempts: quizAttempts.length,
      correctAnswers,
      averageScore,
      knownFlashcards,
      practiceFlashcards,
    };
  }, [courses, quizAttempts, flashcardProgress]);

  const courseSummaries: CourseProgressSummary[] = useMemo(() => {
    const courseIds = new Set<string>();

    courses.forEach((course) => {
      const key = getCourseKey(course);
      if (key) courseIds.add(key);
    });

    quizAttempts.forEach((attempt) => {
      if (attempt.course_id) courseIds.add(attempt.course_id);
    });

    flashcardProgress.forEach((card) => {
      if (card.course_id) courseIds.add(card.course_id);
    });

    return Array.from(courseIds).map((courseId) => {
      const courseQuizAttempts = quizAttempts.filter(
        (attempt) => attempt.course_id === courseId
      );

      const correct = courseQuizAttempts.filter(
        (attempt) => attempt.is_correct
      ).length;

      const courseFlashcards = flashcardProgress.filter(
        (card) => card.course_id === courseId
      );

      const knownFlashcards = courseFlashcards.filter(
        (card) => card.status === "known"
      ).length;

      const practiceFlashcards = courseFlashcards.filter(
        (card) => card.status === "needs_practice"
      ).length;

      const latestQuizAt = courseQuizAttempts[0]?.answered_at ?? null;
      const latestFlashcardAt = courseFlashcards[0]?.updated_at ?? null;

      const latestAt =
        [latestQuizAt, latestFlashcardAt]
          .filter(Boolean)
          .sort((a, b) => {
            return new Date(b ?? 0).getTime() - new Date(a ?? 0).getTime();
          })[0] ?? null;

      return {
        courseId,
        title: getCourseTitleById(courseId),
        attempts: courseQuizAttempts.length,
        correct,
        accuracy:
          courseQuizAttempts.length > 0
            ? Math.round((correct / courseQuizAttempts.length) * 100)
            : 0,
        knownFlashcards,
        practiceFlashcards,
        latestAt,
      };
    });
  }, [courses, quizAttempts, flashcardProgress]);

  const latestActivity = useMemo(() => {
    const quizItems = quizAttempts.map((item) => ({
      id: item.id,
      type: "Monivalinta",
      title: item.question,
      courseId: item.course_id,
      meta: item.area,
      result: item.is_correct ? "Oikein" : "Väärin",
      date: item.answered_at,
      isPositive: item.is_correct,
    }));

    const flashcardItems = flashcardProgress.map((item) => ({
      id: item.id ?? `${item.course_id}-${item.flashcard_id}`,
      type: "Flashcard",
      title: item.flashcard_id,
      courseId: item.course_id,
      meta: getCourseTitleById(item.course_id),
      result: item.status === "known" ? "Osaan" : "Kertaa",
      date: item.updated_at,
      isPositive: item.status === "known",
    }));

    return [...quizItems, ...flashcardItems]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 10);
  }, [quizAttempts, flashcardProgress, courses]);

  const displayName =
    profile?.full_name ||
    profile?.name ||
    user?.user_metadata?.full_name ||
    user?.email ||
    "Opiskelija";

  const joinedDate = user?.created_at
    ? new Date(user.created_at).toLocaleDateString("fi-FI")
    : "-";

  if (loading) {
    return (
      <main style={styles.page}>
        <section style={styles.loadingCard}>
          <div style={styles.spinner} />
          <p style={styles.loadingText}>Ladataan profiilia...</p>
        </section>
      </main>
    );
  }

  if (pageError) {
    return (
      <main style={styles.page}>
        <section style={styles.loadingCard}>
          <p style={styles.error}>{pageError}</p>

          <button onClick={loadProfile} style={styles.primaryButton}>
            Yritä uudelleen
          </button>

          <button
            onClick={() => router.push("/")}
            style={{
              ...styles.secondaryButton,
              marginTop: 12,
              color: "#0A46D9",
              border: "1px solid rgba(36,107,255,0.25)",
              background: "#EEF4FF",
            }}
          >
            Etusivulle
          </button>
        </section>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      <section style={styles.container}>
        <div style={styles.hero}>
          <div>
            <p style={styles.eyebrow}>Oma profiili</p>
            <h1 style={styles.title}>{displayName}</h1>
            <p style={styles.subtitle}>
              Näet täältä omat tiedot, kurssioikeudet, tehtäväedistymisen,
              flashcardit ja voit vaihtaa salasanan.
            </p>
          </div>

          <div style={styles.heroActions}>
            <button onClick={() => router.push("/")} style={styles.secondaryButton}>
              Etusivulle
            </button>

            <a
              href={`mailto:${feedbackEmail}?subject=Palautetta ValintaGurusta`}
              style={styles.contactButton}
            >
              Ota yhteyttä
            </a>

            <button onClick={handleSignOut} style={styles.logoutButton}>
              Kirjaudu ulos
            </button>
          </div>
        </div>

        <section style={styles.grid}>
          <article style={styles.card}>
            <h2 style={styles.cardTitle}>Omat tiedot</h2>

            <div style={styles.infoList}>
              <InfoRow label="Sähköposti" value={user?.email ?? "-"} />
              <InfoRow label="Käyttäjä ID" value={user?.id ?? "-"} />
              <InfoRow label="Liittynyt" value={joinedDate} />
              <InfoRow
                label="Vahvistettu"
                value={user?.email_confirmed_at ? "Kyllä" : "Ei vielä"}
              />
            </div>
          </article>

          <article style={styles.card}>
            <h2 style={styles.cardTitle}>Salasanan vaihto</h2>

            <form onSubmit={handlePasswordChange} style={styles.form}>
              <label style={styles.label}>
                Uusi salasana
                <input
                  type="password"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                  placeholder="Vähintään 8 merkkiä"
                  style={styles.input}
                />
              </label>

              <label style={styles.label}>
                Toista uusi salasana
                <input
                  type="password"
                  value={newPasswordAgain}
                  onChange={(event) => setNewPasswordAgain(event.target.value)}
                  placeholder="Kirjoita salasana uudelleen"
                  style={styles.input}
                />
              </label>

              {passwordError && <p style={styles.error}>{passwordError}</p>}
              {passwordMessage && <p style={styles.success}>{passwordMessage}</p>}

              <button
                type="submit"
                disabled={savingPassword}
                style={{
                  ...styles.primaryButton,
                  opacity: savingPassword ? 0.7 : 1,
                }}
              >
                {savingPassword ? "Tallennetaan..." : "Vaihda salasana"}
              </button>
            </form>
          </article>
        </section>

        <section style={styles.statsGrid}>
          <StatCard label="Kurssioikeudet" value={stats.activeCourses.toString()} />
          <StatCard label="Monivalintoja" value={stats.quizAttempts.toString()} />
          <StatCard label="Oikein" value={stats.correctAnswers.toString()} />
          <StatCard label="Keskiarvo" value={`${stats.averageScore} %`} />
          <StatCard label="Flashcardit osaan" value={stats.knownFlashcards.toString()} />
          <StatCard label="Kerrattavaa" value={stats.practiceFlashcards.toString()} />
        </section>

        <section style={styles.grid}>
          <article style={styles.card}>
            <div style={styles.sectionHeader}>
              <div>
                <h2 style={styles.cardTitle}>Kurssit</h2>
                <p style={styles.smallText}>
                  Kurssit, joihin käyttäjällä on oikeus.
                </p>
              </div>
            </div>

            {courses.length === 0 ? (
              <EmptyState text="Kurssioikeuksia ei löytynyt vielä tälle käyttäjälle." />
            ) : (
              <div style={styles.list}>
                {courses.map((course, index) => {
                  const title =
                    course.course_title ||
                    course.title ||
                    course.course_slug ||
                    course.course_id ||
                    "Kurssi";

                  const courseId = getCourseKey(course);

                  return (
                    <div key={`${title}-${index}`} style={styles.listItem}>
                      <div>
                        <h3 style={styles.itemTitle}>{title}</h3>
                        <p style={styles.itemMeta}>
                          Tila: {formatCourseStatus(course.status)}
                        </p>
                      </div>

                      <div style={styles.itemActions}>
                        <span style={styles.badge}>Käytössä</span>

                        {courseId && (
                          <button
                            type="button"
                            onClick={() => router.push(`/kurssi/${courseId}`)}
                            style={styles.smallButton}
                          >
                            Avaa
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </article>

          <article style={styles.card}>
            <div style={styles.sectionHeader}>
              <div>
                <h2 style={styles.cardTitle}>Kurssikohtainen edistyminen</h2>
                <p style={styles.smallText}>
                  Monivalintojen ja flashcardien tilanne Supabasesta.
                </p>
              </div>
            </div>

            {courseSummaries.length === 0 ? (
              <EmptyState text="Edistymistietoja ei löytynyt vielä." />
            ) : (
              <div style={styles.list}>
                {courseSummaries.map((summary) => (
                  <div key={summary.courseId} style={styles.progressItem}>
                    <div style={styles.progressHeader}>
                      <div>
                        <h3 style={styles.itemTitle}>{summary.title}</h3>
                        <p style={styles.itemMeta}>
                          Viimeksi:{" "}
                          {summary.latestAt
                            ? new Date(summary.latestAt).toLocaleDateString("fi-FI")
                            : "-"}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          router.push(`/kurssi/${summary.courseId}/edistyminen`)
                        }
                        style={styles.smallButton}
                      >
                        Edistyminen
                      </button>
                    </div>

                    <div style={styles.progressStats}>
                      <MiniStat label="Yrityksiä" value={summary.attempts.toString()} />
                      <MiniStat label="Oikein" value={summary.correct.toString()} />
                      <MiniStat label="Tarkkuus" value={`${summary.accuracy} %`} />
                      <MiniStat
                        label="Osaan"
                        value={summary.knownFlashcards.toString()}
                      />
                      <MiniStat
                        label="Kertaa"
                        value={summary.practiceFlashcards.toString()}
                      />
                    </div>

                    <div style={styles.progressBarTrack}>
                      <div
                        style={{
                          ...styles.progressBarFill,
                          width: `${summary.accuracy}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </article>
        </section>

        <section style={styles.card}>
          <div style={styles.sectionHeader}>
            <div>
              <h2 style={styles.cardTitle}>Viimeisin eteneminen</h2>
              <p style={styles.smallText}>
                Viimeisimmät monivalintavastaukset ja flashcard-merkinnät.
              </p>
            </div>

            <button type="button" onClick={loadProfile} style={styles.refreshButton}>
              Päivitä
            </button>
          </div>

          {latestActivity.length === 0 ? (
            <EmptyState text="Edistymistietoja ei löytynyt vielä. Kun käyttäjä tekee tehtäviä tai flashcardeja, ne näkyvät täällä." />
          ) : (
            <div style={styles.list}>
              {latestActivity.map((item) => (
                <div key={`${item.type}-${item.id}`} style={styles.listItem}>
                  <div>
                    <p style={styles.activityType}>{item.type}</p>
                    <h3 style={styles.itemTitle}>{item.title}</h3>
                    <p style={styles.itemMeta}>
                      {item.meta} · {getCourseTitleById(item.courseId)} ·{" "}
                      {new Date(item.date).toLocaleString("fi-FI")}
                    </p>
                  </div>

                  <span
                    style={{
                      ...styles.badge,
                      background: item.isPositive
                        ? "rgba(18,128,76,0.10)"
                        : "rgba(230,126,34,0.12)",
                      color: item.isPositive ? "#12804C" : "#C06416",
                    }}
                  >
                    {item.result}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={styles.infoRow}>
      <span style={styles.infoLabel}>{label}</span>
      <span style={styles.infoValue}>{value}</span>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <article style={styles.statCard}>
      <p style={styles.statLabel}>{label}</p>
      <h3 style={styles.statValue}>{value}</h3>
    </article>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div style={styles.miniStat}>
      <p style={styles.miniStatLabel}>{label}</p>
      <p style={styles.miniStatValue}>{value}</p>
    </div>
  );
}

function EmptyState({ text }: { text: string }) {
  return (
    <div style={styles.emptyState}>
      <p>{text}</p>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, rgba(44, 110, 255, 0.18), transparent 34%), linear-gradient(180deg, #F6F9FF 0%, #EEF4FF 100%)",
    padding: "32px 18px 70px",
    color: "#0B1633",
  },
  container: {
    width: "100%",
    maxWidth: 1180,
    margin: "0 auto",
  },
  hero: {
    display: "flex",
    justifyContent: "space-between",
    gap: 18,
    alignItems: "center",
    background:
      "linear-gradient(135deg, #0A46D9 0%, #246BFF 55%, #55A0FF 100%)",
    borderRadius: 30,
    padding: 28,
    color: "#FFFFFF",
    boxShadow: "0 24px 60px rgba(20, 70, 180, 0.22)",
    marginBottom: 22,
    flexWrap: "wrap",
  },
  heroActions: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  eyebrow: {
    margin: 0,
    fontSize: 14,
    fontWeight: 800,
    letterSpacing: 0.5,
    opacity: 0.86,
    textTransform: "uppercase",
  },
  title: {
    margin: "8px 0 8px",
    fontSize: 38,
    lineHeight: 1.05,
    fontWeight: 900,
  },
  subtitle: {
    margin: 0,
    maxWidth: 650,
    fontSize: 16,
    lineHeight: 1.55,
    opacity: 0.92,
  },
  secondaryButton: {
    border: "1px solid rgba(255,255,255,0.38)",
    background: "rgba(255,255,255,0.22)",
    color: "#FFFFFF",
    borderRadius: 999,
    padding: "12px 18px",
    fontWeight: 800,
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
  },
  contactButton: {
    border: "1px solid rgba(255,255,255,0.38)",
    background: "rgba(255,255,255,0.22)",
    color: "#FFFFFF",
    borderRadius: 999,
    padding: "12px 18px",
    fontWeight: 800,
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
  },
  logoutButton: {
    border: "1px solid rgba(255,255,255,0.38)",
    background: "rgba(255,255,255,0.14)",
    color: "#FFFFFF",
    borderRadius: 999,
    padding: "12px 18px",
    fontWeight: 800,
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
    gap: 18,
    marginBottom: 18,
  },
  card: {
    background: "rgba(255,255,255,0.92)",
    border: "1px solid rgba(30, 80, 180, 0.10)",
    borderRadius: 26,
    padding: 22,
    boxShadow: "0 16px 45px rgba(25, 70, 150, 0.10)",
    marginBottom: 18,
  },
  cardTitle: {
    margin: 0,
    fontSize: 22,
    fontWeight: 900,
    color: "#0B1633",
  },
  infoList: {
    display: "grid",
    gap: 12,
    marginTop: 18,
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: 16,
    padding: "13px 0",
    borderBottom: "1px solid rgba(10, 35, 85, 0.08)",
  },
  infoLabel: {
    color: "#62708C",
    fontSize: 14,
    fontWeight: 700,
  },
  infoValue: {
    color: "#0B1633",
    fontSize: 14,
    fontWeight: 800,
    textAlign: "right",
    wordBreak: "break-word",
  },
  form: {
    marginTop: 18,
    display: "grid",
    gap: 14,
  },
  label: {
    display: "grid",
    gap: 8,
    fontSize: 14,
    fontWeight: 800,
    color: "#25324D",
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    border: "1px solid rgba(20, 60, 130, 0.16)",
    background: "#F8FBFF",
    borderRadius: 16,
    padding: "14px 15px",
    fontSize: 15,
    outline: "none",
  },
  primaryButton: {
    border: 0,
    background: "linear-gradient(135deg, #0A46D9 0%, #2F75FF 100%)",
    color: "#FFFFFF",
    borderRadius: 18,
    padding: "14px 18px",
    fontWeight: 900,
    cursor: "pointer",
    boxShadow: "0 12px 28px rgba(35, 105, 255, 0.25)",
  },
  error: {
    margin: 0,
    color: "#C62828",
    fontSize: 14,
    fontWeight: 800,
  },
  success: {
    margin: 0,
    color: "#12804C",
    fontSize: 14,
    fontWeight: 800,
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: 14,
    marginBottom: 18,
  },
  statCard: {
    background: "#FFFFFF",
    border: "1px solid rgba(30, 80, 180, 0.10)",
    borderRadius: 22,
    padding: 18,
    boxShadow: "0 12px 35px rgba(25, 70, 150, 0.08)",
  },
  statLabel: {
    margin: 0,
    color: "#62708C",
    fontSize: 13,
    fontWeight: 800,
  },
  statValue: {
    margin: "8px 0 0",
    color: "#0A46D9",
    fontSize: 30,
    lineHeight: 1,
    fontWeight: 950,
  },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    gap: 14,
    alignItems: "flex-start",
    marginBottom: 16,
    flexWrap: "wrap",
  },
  smallText: {
    margin: "6px 0 0",
    color: "#687894",
    fontSize: 14,
    lineHeight: 1.45,
  },
  list: {
    display: "grid",
    gap: 12,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    gap: 14,
    alignItems: "center",
    background: "#F7FAFF",
    border: "1px solid rgba(40, 90, 180, 0.08)",
    borderRadius: 18,
    padding: 15,
  },
  itemActions: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  itemTitle: {
    margin: 0,
    color: "#0B1633",
    fontSize: 15,
    fontWeight: 900,
  },
  itemMeta: {
    margin: "5px 0 0",
    color: "#6B7891",
    fontSize: 13,
    fontWeight: 650,
  },
  activityType: {
    margin: "0 0 5px",
    color: "#0A46D9",
    fontSize: 12,
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: 0.4,
  },
  badge: {
    background: "rgba(36, 107, 255, 0.10)",
    color: "#0A46D9",
    borderRadius: 999,
    padding: "8px 11px",
    fontSize: 12,
    fontWeight: 900,
    whiteSpace: "nowrap",
  },
  smallButton: {
    border: 0,
    background: "#0A46D9",
    color: "#FFFFFF",
    borderRadius: 999,
    padding: "8px 12px",
    fontSize: 12,
    fontWeight: 900,
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  refreshButton: {
    border: "1px solid rgba(36, 107, 255, 0.20)",
    background: "#EEF4FF",
    color: "#0A46D9",
    borderRadius: 999,
    padding: "10px 14px",
    fontSize: 13,
    fontWeight: 900,
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  progressItem: {
    background: "#F7FAFF",
    border: "1px solid rgba(40, 90, 180, 0.08)",
    borderRadius: 18,
    padding: 15,
  },
  progressHeader: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  progressStats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(88px, 1fr))",
    gap: 10,
  },
  miniStat: {
    background: "#FFFFFF",
    border: "1px solid rgba(40, 90, 180, 0.08)",
    borderRadius: 14,
    padding: 10,
  },
  miniStatLabel: {
    margin: 0,
    color: "#687894",
    fontSize: 11,
    fontWeight: 850,
  },
  miniStatValue: {
    margin: "4px 0 0",
    color: "#0A46D9",
    fontSize: 18,
    fontWeight: 950,
  },
  progressBarTrack: {
    marginTop: 12,
    height: 9,
    background: "rgba(36, 107, 255, 0.10)",
    borderRadius: 999,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    background: "linear-gradient(135deg, #0A46D9 0%, #55A0FF 100%)",
    borderRadius: 999,
  },
  emptyState: {
    background: "#F7FAFF",
    border: "1px dashed rgba(40, 90, 180, 0.22)",
    color: "#66758F",
    borderRadius: 18,
    padding: 18,
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1.5,
  },
  loadingCard: {
    width: "100%",
    maxWidth: 420,
    margin: "120px auto",
    background: "#FFFFFF",
    borderRadius: 26,
    padding: 28,
    textAlign: "center",
    boxShadow: "0 16px 45px rgba(25, 70, 150, 0.12)",
  },
  spinner: {
    width: 34,
    height: 34,
    borderRadius: "50%",
    border: "4px solid rgba(36, 107, 255, 0.14)",
    borderTopColor: "#246BFF",
    margin: "0 auto 14px",
  },
  loadingText: {
    margin: 0,
    color: "#31405F",
    fontWeight: 800,
  },
};