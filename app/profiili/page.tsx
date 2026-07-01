'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { User } from '@supabase/supabase-js'
import { createClient } from '@/utils/supabase/client'

const feedbackEmail = 'info@valintaguru.fi'

type ProfileRow = {
  id?: string
  user_id?: string
  email?: string
  full_name?: string | null
  name?: string | null
  created_at?: string | null
  updated_at?: string | null
}

type CourseAccess = {
  id?: string
  user_id?: string
  email?: string
  course_id?: string
  course_slug?: string
  course_title?: string
  title?: string
  status?: string
  created_at?: string
}

type ProgressRow = {
  id?: string
  user_id?: string
  course_id?: string | null
  course_slug?: string | null
  subject?: string | null
  lesson_id?: string | null
  theory_id?: string | null
  task_id?: string | null
  completed?: boolean | null
  score?: number | null
  correct_count?: number | null
  total_count?: number | null
  minutes?: number | null
  created_at?: string | null
  updated_at?: string | null
}

type Stats = {
  completedItems: number
  totalMinutes: number
  averageScore: number
  attempts: number
  activeCourses: number
}

export default function ProfilePage() {
  const router = useRouter()
  const supabase = useMemo(() => createClient(), [])

  const [loading, setLoading] = useState(true)
  const [pageError, setPageError] = useState('')
  const [savingPassword, setSavingPassword] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const [profile, setProfile] = useState<ProfileRow | null>(null)
  const [courses, setCourses] = useState<CourseAccess[]>([])
  const [progress, setProgress] = useState<ProgressRow[]>([])

  const [newPassword, setNewPassword] = useState('')
  const [newPasswordAgain, setNewPasswordAgain] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const [passwordError, setPasswordError] = useState('')

  useEffect(() => {
    loadProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function loadProfile() {
    setLoading(true)
    setPageError('')

    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser()

      if (error || !user) {
        router.replace('/kirjaudu?next=/profiili')
        return
      }

      setUser(user)

      const [profileData, courseData, progressData] = await Promise.all([
        fetchProfile(user),
        fetchCourseAccess(user),
        fetchProgress(user),
      ])

      setProfile(profileData)
      setCourses(courseData)
      setProgress(progressData)
    } catch (error) {
      console.error('Profile loading failed:', error)
      setPageError('Profiilin lataaminen epäonnistui. Yritä päivittää sivu.')
    } finally {
      setLoading(false)
    }
  }

  async function fetchProfile(user: User): Promise<ProfileRow | null> {
    try {
      const byId = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .maybeSingle()

      if (!byId.error && byId.data) {
        return byId.data
      }

      const byUserId = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle()

      if (!byUserId.error && byUserId.data) {
        return byUserId.data
      }
    } catch (error) {
      console.warn('Profile table fetch failed:', error)
    }

    return {
      id: user.id,
      email: user.email ?? '',
      full_name:
        typeof user.user_metadata?.full_name === 'string'
          ? user.user_metadata.full_name
          : null,
      created_at: user.created_at,
    }
  }

  async function fetchCourseAccess(user: User): Promise<CourseAccess[]> {
    const found: CourseAccess[] = []

    try {
      const byUserId = await supabase
        .from('student_courses')
        .select('*')
        .eq('user_id', user.id)

      if (!byUserId.error && byUserId.data) {
        found.push(...byUserId.data)
      }
    } catch (error) {
      console.warn('Course access by user_id failed:', error)
    }

    if (user.email) {
      try {
        const byEmail = await supabase
          .from('student_courses')
          .select('*')
          .eq('email', user.email.toLowerCase())

        if (!byEmail.error && byEmail.data) {
          found.push(...byEmail.data)
        }
      } catch (error) {
        console.warn('Course access by email failed:', error)
      }
    }

    const visibleCourses = found.filter((item) => {
      if (!item.status) return true

      const normalizedStatus = item.status.toLowerCase()

      return (
        normalizedStatus === 'active' ||
        normalizedStatus === 'käytössä' ||
        normalizedStatus === 'kaytossa'
      )
    })

    const unique = new Map<string, CourseAccess>()

    visibleCourses.forEach((item, index) => {
      const key =
        item.id ??
        item.course_id ??
        item.course_slug ??
        item.course_title ??
        item.title ??
        `${item.email ?? 'course'}-${index}`

      unique.set(key, item)
    })

    return Array.from(unique.values())
  }

  async function fetchProgress(user: User): Promise<ProgressRow[]> {
    const progressTables = [
      'user_progress',
      'course_progress',
      'student_progress',
      'practice_results',
      'quiz_attempts',
    ]

    const rows: ProgressRow[] = []

    for (const table of progressTables) {
      try {
        const result = await supabase
          .from(table)
          .select('*')
          .eq('user_id', user.id)

        if (!result.error && result.data) {
          rows.push(...result.data)
        }
      } catch (error) {
        console.warn(`Progress fetch failed from ${table}:`, error)
      }
    }

    return rows.sort((a, b) => {
      const dateA = new Date(a.created_at || a.updated_at || 0).getTime()
      const dateB = new Date(b.created_at || b.updated_at || 0).getTime()

      return dateB - dateA
    })
  }

  async function handlePasswordChange(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setPasswordMessage('')
    setPasswordError('')

    if (newPassword.length < 8) {
      setPasswordError('Salasanan pitää olla vähintään 8 merkkiä.')
      return
    }

    if (newPassword !== newPasswordAgain) {
      setPasswordError('Salasanat eivät täsmää.')
      return
    }

    setSavingPassword(true)

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      })

      if (error) {
        setPasswordError(error.message)
        return
      }

      setNewPassword('')
      setNewPasswordAgain('')
      setPasswordMessage('Salasana vaihdettu onnistuneesti.')
    } catch {
      setPasswordError('Salasanan vaihto epäonnistui.')
    } finally {
      setSavingPassword(false)
    }
  }

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.replace('/kirjaudu')
    router.refresh()
  }

  function formatCourseStatus(status?: string) {
    if (!status) return 'Käytössä'

    const normalizedStatus = status.toLowerCase()

    if (
      normalizedStatus === 'active' ||
      normalizedStatus === 'käytössä' ||
      normalizedStatus === 'kaytossa'
    ) {
      return 'Käytössä'
    }

    return status
  }

  const stats: Stats = useMemo(() => {
    const completedItems = progress.filter((item) => item.completed === true).length

    const totalMinutes = progress.reduce((sum, item) => {
      return sum + Number(item.minutes ?? 0)
    }, 0)

    const scoreRows = progress.filter((item) => {
      return typeof item.score === 'number' || typeof item.correct_count === 'number'
    })

    const scoreTotal = scoreRows.reduce((sum, item) => {
      if (typeof item.score === 'number') {
        return sum + item.score
      }

      if (
        typeof item.correct_count === 'number' &&
        typeof item.total_count === 'number' &&
        item.total_count > 0
      ) {
        return sum + (item.correct_count / item.total_count) * 100
      }

      return sum
    }, 0)

    const averageScore =
      scoreRows.length > 0 ? Math.round(scoreTotal / scoreRows.length) : 0

    return {
      completedItems,
      totalMinutes,
      averageScore,
      attempts: progress.length,
      activeCourses: courses.length,
    }
  }, [progress, courses])

  const displayName =
    profile?.full_name ||
    profile?.name ||
    user?.user_metadata?.full_name ||
    user?.email ||
    'Opiskelija'

  const joinedDate = user?.created_at
    ? new Date(user.created_at).toLocaleDateString('fi-FI')
    : '-'

  if (loading) {
    return (
      <main style={styles.page}>
        <section style={styles.loadingCard}>
          <div style={styles.spinner} />
          <p style={styles.loadingText}>Ladataan profiilia...</p>
        </section>
      </main>
    )
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
            onClick={() => router.push('/')}
            style={{
              ...styles.secondaryButton,
              marginTop: 12,
              color: '#0A46D9',
              border: '1px solid rgba(36,107,255,0.25)',
              background: '#EEF4FF',
            }}
          >
            Etusivulle
          </button>
        </section>
      </main>
    )
  }

  return (
    <main style={styles.page}>
      <section style={styles.container}>
        <div style={styles.hero}>
          <div>
            <p style={styles.eyebrow}>Oma profiili</p>
            <h1 style={styles.title}>{displayName}</h1>
            <p style={styles.subtitle}>
              Näet täältä omat tiedot, kurssioikeudet, etenemisen ja voit vaihtaa salasanan.
            </p>
          </div>

          <div style={styles.heroActions}>
            <button onClick={() => router.push('/')} style={styles.secondaryButton}>
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
              <InfoRow label="Sähköposti" value={user?.email ?? '-'} />
              <InfoRow label="Käyttäjä ID" value={user?.id ?? '-'} />
              <InfoRow label="Liittynyt" value={joinedDate} />
              <InfoRow
                label="Vahvistettu"
                value={user?.email_confirmed_at ? 'Kyllä' : 'Ei vielä'}
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
                {savingPassword ? 'Tallennetaan...' : 'Vaihda salasana'}
              </button>
            </form>
          </article>
        </section>

        <section style={styles.statsGrid}>
          <StatCard label="Kurssioikeudet" value={stats.activeCourses.toString()} />
          <StatCard label="Suorituksia" value={stats.completedItems.toString()} />
          <StatCard label="Yrityksiä" value={stats.attempts.toString()} />
          <StatCard label="Keskiarvo" value={`${stats.averageScore} %`} />
          <StatCard label="Opiskeluaika" value={`${stats.totalMinutes} min`} />
        </section>

        <section style={styles.grid}>
          <article style={styles.card}>
            <div style={styles.sectionHeader}>
              <div>
                <h2 style={styles.cardTitle}>Kurssit</h2>
                <p style={styles.smallText}>Kurssit, joihin käyttäjällä on oikeus.</p>
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
                    'Kurssi'

                  return (
                    <div key={`${title}-${index}`} style={styles.listItem}>
                      <div>
                        <h3 style={styles.itemTitle}>{title}</h3>
                        <p style={styles.itemMeta}>
                          Tila: {formatCourseStatus(course.status)}
                        </p>
                      </div>

                      <span style={styles.badge}>Käytössä</span>
                    </div>
                  )
                })}
              </div>
            )}
          </article>

          <article style={styles.card}>
            <div style={styles.sectionHeader}>
              <div>
                <h2 style={styles.cardTitle}>Viimeisin eteneminen</h2>
                <p style={styles.smallText}>Viimeisimmät tehtävät, teoriat ja harjoitukset.</p>
              </div>
            </div>

            {progress.length === 0 ? (
              <EmptyState text="Edistymistietoja ei löytynyt vielä." />
            ) : (
              <div style={styles.list}>
                {progress.slice(0, 8).map((item, index) => {
                  const title =
                    item.subject ||
                    item.course_slug ||
                    item.lesson_id ||
                    item.theory_id ||
                    item.task_id ||
                    'Suoritus'

                  const date =
                    item.created_at || item.updated_at
                      ? new Date(item.created_at || item.updated_at || '').toLocaleDateString(
                          'fi-FI',
                        )
                      : '-'

                  const score =
                    typeof item.score === 'number'
                      ? `${item.score} %`
                      : typeof item.correct_count === 'number' &&
                          typeof item.total_count === 'number'
                        ? `${item.correct_count}/${item.total_count}`
                        : item.completed
                          ? 'Valmis'
                          : 'Kesken'

                  return (
                    <div key={`${title}-${index}`} style={styles.listItem}>
                      <div>
                        <h3 style={styles.itemTitle}>{title}</h3>
                        <p style={styles.itemMeta}>{date}</p>
                      </div>

                      <span style={styles.badge}>{score}</span>
                    </div>
                  )
                })}
              </div>
            )}
          </article>
        </section>
      </section>
    </main>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={styles.infoRow}>
      <span style={styles.infoLabel}>{label}</span>
      <span style={styles.infoValue}>{value}</span>
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <article style={styles.statCard}>
      <p style={styles.statLabel}>{label}</p>
      <h3 style={styles.statValue}>{value}</h3>
    </article>
  )
}

function EmptyState({ text }: { text: string }) {
  return (
    <div style={styles.emptyState}>
      <p>{text}</p>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    background:
      'radial-gradient(circle at top left, rgba(44, 110, 255, 0.18), transparent 34%), linear-gradient(180deg, #F6F9FF 0%, #EEF4FF 100%)',
    padding: '32px 18px 70px',
    color: '#0B1633',
  },
  container: {
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',
  },
  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 18,
    alignItems: 'center',
    background: 'linear-gradient(135deg, #0A46D9 0%, #246BFF 55%, #55A0FF 100%)',
    borderRadius: 30,
    padding: 28,
    color: '#FFFFFF',
    boxShadow: '0 24px 60px rgba(20, 70, 180, 0.22)',
    marginBottom: 22,
    flexWrap: 'wrap',
  },
  heroActions: {
    display: 'flex',
    gap: 10,
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  eyebrow: {
    margin: 0,
    fontSize: 14,
    fontWeight: 800,
    letterSpacing: 0.5,
    opacity: 0.86,
    textTransform: 'uppercase',
  },
  title: {
    margin: '8px 0 8px',
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
    border: '1px solid rgba(255,255,255,0.38)',
    background: 'rgba(255,255,255,0.22)',
    color: '#FFFFFF',
    borderRadius: 999,
    padding: '12px 18px',
    fontWeight: 800,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
  },
  contactButton: {
    border: '1px solid rgba(255,255,255,0.38)',
    background: 'rgba(255,255,255,0.22)',
    color: '#FFFFFF',
    borderRadius: 999,
    padding: '12px 18px',
    fontWeight: 800,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
  },
  logoutButton: {
    border: '1px solid rgba(255,255,255,0.38)',
    background: 'rgba(255,255,255,0.14)',
    color: '#FFFFFF',
    borderRadius: 999,
    padding: '12px 18px',
    fontWeight: 800,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
    gap: 18,
    marginBottom: 18,
  },
  card: {
    background: 'rgba(255,255,255,0.92)',
    border: '1px solid rgba(30, 80, 180, 0.10)',
    borderRadius: 26,
    padding: 22,
    boxShadow: '0 16px 45px rgba(25, 70, 150, 0.10)',
  },
  cardTitle: {
    margin: 0,
    fontSize: 22,
    fontWeight: 900,
    color: '#0B1633',
  },
  infoList: {
    display: 'grid',
    gap: 12,
    marginTop: 18,
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 16,
    padding: '13px 0',
    borderBottom: '1px solid rgba(10, 35, 85, 0.08)',
  },
  infoLabel: {
    color: '#62708C',
    fontSize: 14,
    fontWeight: 700,
  },
  infoValue: {
    color: '#0B1633',
    fontSize: 14,
    fontWeight: 800,
    textAlign: 'right',
    wordBreak: 'break-word',
  },
  form: {
    marginTop: 18,
    display: 'grid',
    gap: 14,
  },
  label: {
    display: 'grid',
    gap: 8,
    fontSize: 14,
    fontWeight: 800,
    color: '#25324D',
  },
  input: {
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid rgba(20, 60, 130, 0.16)',
    background: '#F8FBFF',
    borderRadius: 16,
    padding: '14px 15px',
    fontSize: 15,
    outline: 'none',
  },
  primaryButton: {
    border: 0,
    background: 'linear-gradient(135deg, #0A46D9 0%, #2F75FF 100%)',
    color: '#FFFFFF',
    borderRadius: 18,
    padding: '14px 18px',
    fontWeight: 900,
    cursor: 'pointer',
    boxShadow: '0 12px 28px rgba(35, 105, 255, 0.25)',
  },
  error: {
    margin: 0,
    color: '#C62828',
    fontSize: 14,
    fontWeight: 800,
  },
  success: {
    margin: 0,
    color: '#12804C',
    fontSize: 14,
    fontWeight: 800,
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
    gap: 14,
    marginBottom: 18,
  },
  statCard: {
    background: '#FFFFFF',
    border: '1px solid rgba(30, 80, 180, 0.10)',
    borderRadius: 22,
    padding: 18,
    boxShadow: '0 12px 35px rgba(25, 70, 150, 0.08)',
  },
  statLabel: {
    margin: 0,
    color: '#62708C',
    fontSize: 13,
    fontWeight: 800,
  },
  statValue: {
    margin: '8px 0 0',
    color: '#0A46D9',
    fontSize: 30,
    lineHeight: 1,
    fontWeight: 950,
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 14,
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  smallText: {
    margin: '6px 0 0',
    color: '#687894',
    fontSize: 14,
    lineHeight: 1.45,
  },
  list: {
    display: 'grid',
    gap: 12,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 14,
    alignItems: 'center',
    background: '#F7FAFF',
    border: '1px solid rgba(40, 90, 180, 0.08)',
    borderRadius: 18,
    padding: 15,
  },
  itemTitle: {
    margin: 0,
    color: '#0B1633',
    fontSize: 15,
    fontWeight: 900,
  },
  itemMeta: {
    margin: '5px 0 0',
    color: '#6B7891',
    fontSize: 13,
    fontWeight: 650,
  },
  badge: {
    background: 'rgba(36, 107, 255, 0.10)',
    color: '#0A46D9',
    borderRadius: 999,
    padding: '8px 11px',
    fontSize: 12,
    fontWeight: 900,
    whiteSpace: 'nowrap',
  },
  emptyState: {
    background: '#F7FAFF',
    border: '1px dashed rgba(40, 90, 180, 0.22)',
    color: '#66758F',
    borderRadius: 18,
    padding: 18,
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1.5,
  },
  loadingCard: {
    width: '100%',
    maxWidth: 420,
    margin: '120px auto',
    background: '#FFFFFF',
    borderRadius: 26,
    padding: 28,
    textAlign: 'center',
    boxShadow: '0 16px 45px rgba(25, 70, 150, 0.12)',
  },
  spinner: {
    width: 34,
    height: 34,
    borderRadius: '50%',
    border: '4px solid rgba(36, 107, 255, 0.14)',
    borderTopColor: '#246BFF',
    margin: '0 auto 14px',
  },
  loadingText: {
    margin: 0,
    color: '#31405F',
    fontWeight: 800,
  },
}