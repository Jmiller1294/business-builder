// Shared display helpers used across the board UI.

export const PRIORITY: Record<
  string,
  { label: string; border: string; badge: string; text: string }
> = {
  urgent: {
    label: "Urgent",
    border: "#EF4444",
    badge: "#FEF2F2",
    text: "#DC2626",
  },
  high: { label: "High", border: "#F59E0B", badge: "#FFFBEB", text: "#D97706" },
  normal: {
    label: "Normal",
    border: "#6366F1",
    badge: "#EEF2FF",
    text: "#4F46E5",
  },
  low: { label: "Low", border: "#CBD5E1", badge: "#F8FAFC", text: "#94A3B8" },
};

export type Due = {
  label: string;
  type: "overdue" | "today" | "soon" | "ok";
  color: string;
} | null;

export function getDue(dateStr: string): Due {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  const now = new Date();
  d.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  const diff = Math.ceil((d.getTime() - now.getTime()) / 86_400_000);
  if (diff < 0)
    return {
      label: `${Math.abs(diff)}d overdue`,
      type: "overdue",
      color: "#EF4444",
    };
  if (diff === 0)
    return { label: "Due today", type: "today", color: "#F59E0B" };
  if (diff === 1)
    return { label: "Due tomorrow", type: "soon", color: "#F59E0B" };
  return {
    label: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    type: "ok",
    color: "#94A3B8",
  };
}
