import type {
  TeamMember, Stage, Job, Client, Invoice, Expense, TimeEntry,
  ActivityItem, FileItem, MessageItem, Integration, RevenuePoint,
} from "./types";

export const TEAM: TeamMember[] = [
  { id: "t1", name: "Mike Torres", role: "Crew Lead",      initials: "MT", color: "#6366F1", access: "Full field + scheduling" },
  { id: "t2", name: "Sarah Kim",   role: "Office Manager", initials: "SK", color: "#10B981", access: "Billing, clients, reports" },
  { id: "t3", name: "Tom Walsh",   role: "Field Tech",     initials: "TW", color: "#F59E0B", access: "Assigned jobs only" },
  { id: "t4", name: "Dana Reyes",  role: "Field Tech",     initials: "DR", color: "#EC4899", access: "Assigned jobs only" },
];
export const team = (id: string): TeamMember => TEAM.find((t) => t.id === id)!;

export const STAGES: Stage[] = [
  { id: "quoted", name: "Quoted", color: "#8B5CF6" },
  { id: "scheduled", name: "Scheduled", color: "#6366F1" },
  { id: "in_progress", name: "In Progress", color: "#F59E0B" },
  { id: "punch_list", name: "Punch List", color: "#EF4444" },
  { id: "complete", name: "Complete", color: "#10B981" },
  { id: "invoiced", name: "Invoiced", color: "#06B6D4" },
];

export const JOBS: Job[] = [
  { id: "j1", title: "Johnson — Spring Cleanup", stage: "in_progress", priority: "high", assignees: ["t1","t3"], due: "Today", client: "Johnson Residence" },
  { id: "j2", title: "Miller — Irrigation Install", stage: "scheduled", priority: "normal", assignees: ["t1"], due: "Jun 22", client: "Miller Family" },
  { id: "j3", title: "Park Estates — Monthly Mow", stage: "quoted", priority: "low", assignees: [], due: "Jun 25", client: "Park Estates HOA" },
  { id: "j4", title: "Chen — Tree Trimming", stage: "punch_list", priority: "urgent", assignees: ["t2","t4"], due: "Overdue", client: "Chen Property" },
  { id: "j5", title: "Rivera — Fence Install", stage: "complete", priority: "normal", assignees: ["t1","t4"], due: "Jun 10", client: "Rivera Home" },
  { id: "j6", title: "Davis — Sprinkler Repair", stage: "invoiced", priority: "normal", assignees: ["t3"], due: "Jun 9", client: "Davis Residence" },
  { id: "j7", title: "Greenway — Sod Replacement", stage: "scheduled", priority: "high", assignees: ["t4"], due: "Jun 23", client: "Greenway Office Park" },
];

export const CLIENTS: Client[] = [
  { name: "Johnson Residence", contact: "Bill Johnson", phone: "(555) 201-3345", jobs: 8, ltv: 9400, status: "Active" },
  { name: "Park Estates HOA", contact: "Lena Cho", phone: "(555) 778-1180", jobs: 24, ltv: 31200, status: "Recurring" },
  { name: "Chen Property", contact: "Wei Chen", phone: "(555) 442-9087", jobs: 3, ltv: 2750, status: "Active" },
  { name: "Greenway Office Park", contact: "Facilities Dept", phone: "(555) 909-5521", jobs: 16, ltv: 27800, status: "Recurring" },
  { name: "Rivera Home", contact: "Ana Rivera", phone: "(555) 330-2214", jobs: 2, ltv: 4100, status: "Active" },
  { name: "Miller Family", contact: "Greg Miller", phone: "(555) 612-7788", jobs: 1, ltv: 1850, status: "New" },
];

export const INVOICES: Invoice[] = [
  { id: "INV-1042", client: "Chen Property", amount: 1450, status: "Overdue", due: "Jun 5" },
  { id: "INV-1041", client: "Davis Residence", amount: 680, status: "Sent", due: "Jun 24" },
  { id: "INV-1040", client: "Park Estates HOA", amount: 2600, status: "Paid", due: "Jun 1" },
  { id: "INV-1039", client: "Rivera Home", amount: 3200, status: "Paid", due: "May 28" },
  { id: "INV-1038", client: "Greenway Office Park", amount: 4150, status: "Sent", due: "Jun 26" },
];

export const EXPENSES: Expense[] = [
  { item: "Bulk mulch — 12 yards", category: "Materials", amount: 540, date: "Jun 16" },
  { item: "Fuel — fleet", category: "Vehicle", amount: 218, date: "Jun 15" },
  { item: "Irrigation parts", category: "Materials", amount: 384, date: "Jun 14" },
  { item: "Mower blade replacement", category: "Equipment", amount: 96, date: "Jun 12" },
  { item: "Dump fees", category: "Disposal", amount: 140, date: "Jun 11" },
];

export const TIME_ENTRIES: TimeEntry[] = [
  { member: "t1", job: "Johnson — Spring Cleanup", hours: 6.5, day: "Mon" },
  { member: "t3", job: "Johnson — Spring Cleanup", hours: 6.5, day: "Mon" },
  { member: "t4", job: "Chen — Tree Trimming", hours: 8, day: "Mon" },
  { member: "t1", job: "Miller — Irrigation Install", hours: 4, day: "Tue" },
  { member: "t2", job: "Office — Scheduling & billing", hours: 7, day: "Tue" },
];

export const ACTIVITY: ActivityItem[] = [
  { actor: "Mike Torres", action: "moved Johnson — Spring Cleanup to In Progress", time: "12m ago" },
  { actor: "Sarah Kim", action: "sent invoice INV-1042 to Chen Property", time: "1h ago" },
  { actor: "Dana Reyes", action: "completed checklist on Chen — Tree Trimming", time: "2h ago" },
  { actor: "System", action: "flagged INV-1042 as overdue", time: "3h ago" },
  { actor: "Sarah Kim", action: "added new client Miller Family", time: "Yesterday" },
];

export const FILES: FileItem[] = [
  { name: "Chen_contract.pdf", job: "Chen — Tree Trimming", kind: "Contract", size: "240 KB" },
  { name: "Johnson_before.jpg", job: "Johnson — Spring Cleanup", kind: "Photo", size: "1.8 MB" },
  { name: "Johnson_after.jpg", job: "Johnson — Spring Cleanup", kind: "Photo", size: "2.1 MB" },
  { name: "Greenway_quote.pdf", job: "Greenway — Sod", kind: "Quote", size: "180 KB" },
  { name: "Rivera_signoff.pdf", job: "Rivera — Fence Install", kind: "Signature", size: "96 KB" },
];

export const MESSAGES: MessageItem[] = [
  { who: "Johnson Residence", preview: "Reminder sent: crew arriving today 8–10am", channel: "SMS", time: "7:02 AM", out: true },
  { who: "Wei Chen", preview: "Can we reschedule the tree work to Friday?", channel: "SMS", time: "Yesterday", out: false },
  { who: "Park Estates HOA", preview: "Invoice INV-1040 receipt — thank you!", channel: "Email", time: "Jun 1", out: true },
  { who: "Greg Miller", preview: "Sounds great, see you next week.", channel: "SMS", time: "Jun 14", out: false },
];

export const INTEGRATIONS: Integration[] = [
  { name: "QuickBooks", desc: "Sync invoices & expenses", on: true },
  { name: "Stripe", desc: "Collect card payments", on: true },
  { name: "Google Calendar", desc: "Two-way schedule sync", on: true },
  { name: "Twilio SMS", desc: "Client text reminders", on: true },
  { name: "Gmail", desc: "Send invoices & quotes", on: false },
  { name: "Mailchimp", desc: "Seasonal client campaigns", on: false },
];

export const REVENUE: RevenuePoint[] = [
  { m: "Jan", v: 18 }, { m: "Feb", v: 16 }, { m: "Mar", v: 24 },
  { m: "Apr", v: 31 }, { m: "May", v: 38 }, { m: "Jun", v: 42 },
];

export const STAGE_LOAD = STAGES.map((s) => ({
  name: s.name, count: JOBS.filter((j) => j.stage === s.id).length, color: s.color,
}));
