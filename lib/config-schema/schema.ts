import { z } from "zod";

export const stageSchema = z.object({ id: z.string(), name: z.string(), color: z.string() });
export const checklistItemSchema = z.object({ id: z.string(), text: z.string(), required: z.boolean() });
export const teamMemberSchema = z.object({
  id: z.string(), name: z.string(), role: z.string(), initials: z.string(), color: z.string(),
});
export const jobSchema = z.object({
  id: z.string(), title: z.string(), stage: z.string(),
  priority: z.enum(["low", "normal", "high", "urgent"]),
  assignees: z.array(z.string()).default([]),
  notes: z.string().default(""), due: z.string().default(""),
});
export const tenantConfigSchema = z.object({
  name: z.string(), emoji: z.string(), label: z.string(), color: z.string(),
  stages: z.array(stageSchema).min(3).max(7),
  checklistsByStage: z.record(z.array(checklistItemSchema)).default({}),
  team: z.array(teamMemberSchema).length(3),
  jobs: z.array(jobSchema).default([]),
});

export type Stage = z.infer<typeof stageSchema>;
export type ChecklistItem = z.infer<typeof checklistItemSchema>;
export type LiveChecklistItem = ChecklistItem & { done: boolean };
export type TeamMember = z.infer<typeof teamMemberSchema>;
export type Job = z.infer<typeof jobSchema>;
export type TenantConfig = z.infer<typeof tenantConfigSchema>;
