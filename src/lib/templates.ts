// Each card is a [title, dotColor] tuple. These drive the hero demo + tabs.
export type Card = [title: string, dot: string];
export interface TemplateStage { name: string; color: string; cards: Card[]; }
export interface Template { chip: string; emoji: string; label: string; accent: string; stages: TemplateStage[]; }

export const TEMPLATES: Record<string, Template> = {
  grooming: {
    chip: "Dog grooming", emoji: "🐾", label: "Appointment", accent: "#10B981",
    stages: [
      { name: "Booked", color: "#8B5CF6", cards: [["Max — Full Groom", "#F59E0B"]] },
      { name: "Checked In", color: "#6366F1", cards: [["Bella — Bath & Trim", "#6366F1"]] },
      { name: "Grooming", color: "#F59E0B", cards: [["Charlie — Full Groom", "#EF4444"]] },
      { name: "Ready", color: "#10B981", cards: [["Luna — Nail Trim", "#6366F1"]] },
    ],
  },
  landscaping: {
    chip: "Landscaping", emoji: "🌳", label: "Job", accent: "#22C55E",
    stages: [
      { name: "Quoted", color: "#8B5CF6", cards: [["Park Estates — Mow", "#CBD5E1"]] },
      { name: "Scheduled", color: "#6366F1", cards: [["Miller — Irrigation", "#6366F1"]] },
      { name: "In Progress", color: "#F59E0B", cards: [["Johnson — Cleanup", "#F59E0B"]] },
      { name: "Complete", color: "#10B981", cards: [["Rivera — Fence", "#6366F1"]] },
    ],
  },
  consulting: {
    chip: "Consulting", emoji: "💼", label: "Project", accent: "#6366F1",
    stages: [
      { name: "Proposal", color: "#8B5CF6", cards: [["RetailCo — Ops Review", "#CBD5E1"]] },
      { name: "Kickoff", color: "#6366F1", cards: [["FinCo — Pricing Audit", "#F59E0B"]] },
      { name: "In Progress", color: "#F59E0B", cards: [["TechCorp — Brand", "#EF4444"]] },
      { name: "Invoiced", color: "#06B6D4", cards: [["Agency — Content", "#6366F1"]] },
    ],
  },
  cleaning: {
    chip: "Cleaning", emoji: "🧹", label: "Job", accent: "#06B6D4",
    stages: [
      { name: "Booked", color: "#8B5CF6", cards: [["Acme Office — Weekly", "#6366F1"]] },
      { name: "Scheduled", color: "#6366F1", cards: [["Dr. Lee — Deep Clean", "#F59E0B"]] },
      { name: "Cleaning", color: "#F59E0B", cards: [["Harbor Loft — Move-out", "#EF4444"]] },
      { name: "Inspected", color: "#10B981", cards: [["Cedar Café — Nightly", "#6366F1"]] },
    ],
  },
};
export const TKEYS = Object.keys(TEMPLATES);
