export type Priority = "low" | "normal" | "high" | "urgent";

export interface TeamMember { id: string; name: string; role: string; initials: string; color: string; access: string; }
export interface Stage { id: string; name: string; color: string; }
export interface Job { id: string; title: string; stage: string; priority: Priority; assignees: string[]; due: string; client: string; }
export interface Client { name: string; contact: string; phone: string; jobs: number; ltv: number; status: "Active" | "Recurring" | "New"; }
export interface Invoice { id: string; client: string; amount: number; status: "Paid" | "Sent" | "Overdue"; due: string; }
export interface Expense { item: string; category: string; amount: number; date: string; }
export interface TimeEntry { member: string; job: string; hours: number; day: string; }
export interface ActivityItem { actor: string; action: string; time: string; }
export interface FileItem { name: string; job: string; kind: string; size: string; }
export interface MessageItem { who: string; preview: string; channel: "SMS" | "Email"; time: string; out: boolean; }
export interface Integration { name: string; desc: string; on: boolean; }
export interface RevenuePoint { m: string; v: number; }

// Minimal shape an Avatar needs — works for full members and ad-hoc avatars.
export interface AvatarLike { initials: string; color: string; }
