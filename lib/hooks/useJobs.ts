"use client";
import { createClient } from "@/lib/supabase/client";
import type { Job, TenantConfig } from "@/lib/config-schema/schema";

// Job mutations. Skeleton: optimistic update + persist to Supabase.
export function useJobs(
  config: TenantConfig | null,
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>,
) {
  const supabase = createClient();

  async function advanceStage(job: Job) {
    if (!config) return;
    const idx = config.stages.findIndex((s) => s.id === job.stage);
    if (idx < 0 || idx >= config.stages.length - 1) return;
    const next = config.stages[idx + 1].id;

    setJobs((prev) =>
      prev.map((j) => (j.id === job.id ? { ...j, stage: next } : j)),
    );
    await supabase.from("jobs").update({ stage: next }).eq("id", job.id);
  }

  async function toggleAssignee(job: Job, memberId: string) {
    const has = job.assignees.includes(memberId);
    const assignees = has
      ? job.assignees.filter((a) => a !== memberId)
      : [...job.assignees, memberId];

    setJobs((prev) =>
      prev.map((j) => (j.id === job.id ? { ...j, assignees } : j)),
    );
    await supabase.from("jobs").update({ assignees }).eq("id", job.id);
  }

  return { advanceStage, toggleAssignee };
}
