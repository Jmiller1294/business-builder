// Data-driven color map: priority -> colors, applied via inline style on cards.
export const PRIORITY: Record<string, { label: string; border: string; badge: string; text: string }> = {
  urgent: { label: "Urgent", border: "#EF4444", badge: "#FEF2F2", text: "#DC2626" },
  high:   { label: "High",   border: "#F59E0B", badge: "#FFFBEB", text: "#D97706" },
  normal: { label: "Normal", border: "#6366F1", badge: "#EEF2FF", text: "#4F46E5" },
  low:    { label: "Low",    border: "#CBD5E1", badge: "#F8FAFC", text: "#94A3B8" },
};

// recharts needs raw color values (it can't take Tailwind classes), so the few
// colors used inside charts live here as hex.
export const CHART = { line: "#4F46E5", axis: "#94A3B8" };
