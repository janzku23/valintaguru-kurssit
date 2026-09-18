export type CalendarVisibility = "shared" | "busy_only" | "private";
export type CalendarRepeat =
  | "none"
  | "daily"
  | "weekly"
  | "biweekly"
  | "monthly"
  | "yearly";

export type CalendarGroup = {
  id: string;
  name: string;
  owner_id: string;
  kind: "personal" | "family";
  created_at: string;
};

export type CalendarMember = {
  calendar_id: string;
  user_id: string;
  role: "owner" | "editor" | "viewer";
  display_name: string | null;
  email: string | null;
};

export type CalendarCategory = {
  id: string;
  user_id: string;
  name: string;
  kind: "study" | "work" | "family" | "exercise" | "sleep" | "travel" | "home" | "free" | "other";
  color_key: string;
  created_at: string;
};

export type CalendarEvent = {
  id: string;
  calendar_id: string;
  owner_id: string;
  category_id: string | null;
  title: string;
  description: string | null;
  start_at: string;
  end_at: string;
  all_day: boolean;
  visibility: CalendarVisibility;
  importance: "normal" | "important" | "critical";
  recurrence: CalendarRepeat;
  recurrence_until: string | null;
  reminder_minutes: number | null;
  is_study: boolean;
  study_subject: string | null;
  actual_minutes: number | null;
  completed: boolean;
  created_at: string;
  updated_at: string;
};

export type CalendarNote = {
  id: string;
  user_id: string;
  text: string;
  due_at: string | null;
  important: boolean;
  completed: boolean;
  created_at: string;
};

export type CalendarInvite = {
  id: string;
  calendar_id: string;
  inviter_id: string;
  invitee_email: string;
  role: "editor" | "viewer";
  status: "pending" | "accepted" | "declined" | "cancelled";
  created_at: string;
  calendar_groups?: { name?: string } | null;
};

export type StudyGoal = {
  id: string;
  user_id: string;
  weekly_minutes: number;
};
