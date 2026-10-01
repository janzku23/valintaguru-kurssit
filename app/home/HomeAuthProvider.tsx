"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import type { CourseId } from "../../data/courses";

type StudentCourseRow = {
  id?: string;
  user_id?: string | null;
  email?: string | null;
  course_id?: string | null;
  course_slug?: string | null;
  course_title?: string | null;
  title?: string | null;
  status?: string | null;
  created_at?: string | null;
};

type HomeAuthContextValue = {
  loading: boolean;
  user: User | null;
  isLoggedIn: boolean;
  ownedCourseIds: CourseId[];
};

const HomeAuthContext = createContext<HomeAuthContextValue | null>(null);

export function HomeAuthProvider({ children }: { children: ReactNode }) {
  const supabase = useMemo(() => createClient(), []);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [ownedCourseIds, setOwnedCourseIds] = useState<CourseId[]>([]);

  const loadUserAndCourses = useCallback(async () => {
    setLoading(true);

    const {
      data: { user: currentUser },
      error,
    } = await supabase.auth.getUser();

    if (error || !currentUser) {
      setUser(null);
      setOwnedCourseIds([]);
      setLoading(false);
      return;
    }

    setUser(currentUser);

    const rows: StudentCourseRow[] = [];

    const byUserId = await supabase
      .from("student_courses")
      .select("*")
      .eq("user_id", currentUser.id);

    if (!byUserId.error && byUserId.data) {
      rows.push(...byUserId.data);
    }

    if (currentUser.email) {
      const normalizedEmail = currentUser.email.trim().toLowerCase();

      const byEmail = await supabase
        .from("student_courses")
        .select("*")
        .eq("email", normalizedEmail);

      if (!byEmail.error && byEmail.data) {
        rows.push(...byEmail.data);
      }
    }

    const ids = rows
      .filter((row) => {
        if (!row.status) return true;
        const normalizedStatus = row.status.trim().toLowerCase();
        return (
          normalizedStatus === "active" ||
          normalizedStatus === "käytössä" ||
          normalizedStatus === "enabled"
        );
      })
      .map((row) => row.course_id || row.course_slug)
      .filter((id): id is string => Boolean(id))
      .map((id) => id.toLowerCase() as CourseId);

    setOwnedCourseIds(Array.from(new Set(ids)));
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    void loadUserAndCourses();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      void loadUserAndCourses();
    });

    return () => subscription.unsubscribe();
  }, [loadUserAndCourses, supabase]);

  const value = useMemo<HomeAuthContextValue>(
    () => ({
      loading,
      user,
      isLoggedIn: Boolean(user),
      ownedCourseIds,
    }),
    [loading, user, ownedCourseIds],
  );

  return (
    <HomeAuthContext.Provider value={value}>
      {children}
    </HomeAuthContext.Provider>
  );
}

export function useHomeAuth() {
  const value = useContext(HomeAuthContext);
  if (!value) {
    throw new Error("useHomeAuth must be used inside HomeAuthProvider");
  }
  return value;
}
