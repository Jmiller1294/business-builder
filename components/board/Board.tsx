"use client";
import { useMemo, useState } from "react";
import { Plus, Sparkles } from "lucide-react";
import type { Job, TenantConfig, LiveChecklistItem } from "@/lib/config-schema/schema";
import { getDue } from "@/lib/utils";
import { Sidebar } from "./Sidebar";
import { BoardView } from "./BoardView";
import { JobDetailPanel, type PanelTab } from "./JobDetailPanel";
import { TeamView } from "./TeamView";
import { ActivityView, type ActivityEvent } from "./ActivityView";
import { AddJobModal } from "./AddJobModal";

type View = "board" | "team" | "activity";
type Priority = Job["priority"];

function initChecklists(config: TenantConfig, jobs: Job[]): Record<string, LiveChecklistItem[]> {
  const out: Record<string, LiveChecklistItem[]> = {};
  for (const job of jobs) {
    const items = config.checklistsByStage[job.stage] ?? [];
    if (items.length) out[job.id] = items.map((i) => ({ ...i, done: false }));
  }
  return out;
}

// Seed a few plausible past events so the feed and per-job History aren't empty.
function seedActivity(config: TenantConfig): ActivityEvent[] {
  const acts = ["was created", "moved to next stage", "was assigned", "checklist started", "updated"];
  const times = ["4m ago", "22m ago", "1h ago", "2h ago", "3h ago"];
  return config.jobs.slice(0, 5).map((job, i) => ({
    id: `seed${i}`, jobId: job.id, jobTitle: job.title,
    action: acts[i], time: times[i],
    actor: config.team[i % config.team.length]?.name ?? "Owner",
  }));
}

export function Board({ config, onReset }: { config: TenantConfig; onReset: () => void }) {
  const [view, setView] = useState<View>("board");
  const [jobs, setJobs] = useState<Job[]>(config.jobs);
  const [checklists, setChecklists] = useState(() => initChecklists(config, config.jobs));
  const [activity, setActivity] = useState<ActivityEvent[]>(() => seedActivity(config));
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [panelTab, setPanelTab] = useState<PanelTab>("details");
  const [showAddJob, setShowAddJob] = useState(false);

  const selected = jobs.find((j) => j.id === selectedId) ?? null;
  const overdue = useMemo(() => jobs.filter((j) => getDue(j.due)?.type === "overdue").length, [jobs]);
  const jobActivity = useMemo(() => activity.filter((a) => a.jobId === selectedId), [activity, selectedId]);

  function logEvent(jobId: string, jobTitle: string, action: string, actor = "Owner") {
    setActivity((prev) =>
      [{ id: `a${Date.now()}`, jobId, jobTitle, action, actor, time: "Just now" }, ...prev].slice(0, 30));
  }

  function selectJob(job: Job) { setSelectedId(job.id); setPanelTab("details"); }

  function advanceStage(job: Job) {
    const idx = config.stages.findIndex((s) => s.id === job.stage);
    if (idx >= config.stages.length - 1) return;
    const next = config.stages[idx + 1];
    setJobs((prev) => prev.map((j) => (j.id === job.id ? { ...j, stage: next.id } : j)));
    const items = config.checklistsByStage[next.id] ?? [];
    if (items.length) setChecklists((prev) => ({ ...prev, [job.id]: items.map((i) => ({ ...i, done: false })) }));
    const actor = job.assignees[0] ? config.team.find((t) => t.id === job.assignees[0])?.name : "Owner";
    logEvent(job.id, job.title, `moved to ${next.name}`, actor ?? "Owner");
  }

  function toggleChecklist(jobId: string, itemId: string) {
    setChecklists((prev) => ({
      ...prev,
      [jobId]: (prev[jobId] ?? []).map((i) => (i.id === itemId ? { ...i, done: !i.done } : i)),
    }));
  }

  function toggleAssignee(job: Job, memberId: string) {
    const has = job.assignees.includes(memberId);
    const assignees = has ? job.assignees.filter((a) => a !== memberId) : [...job.assignees, memberId];
    setJobs((prev) => prev.map((j) => (j.id === job.id ? { ...j, assignees } : j)));
    const m = config.team.find((t) => t.id === memberId);
    logEvent(job.id, job.title, has ? `unassigned ${m?.name}` : `assigned ${m?.name}`);
  }

  function addJob(title: string, priority: Priority) {
    const newJob: Job = {
      id: `j${Date.now()}`, title, stage: config.stages[0].id,
      priority, assignees: [], notes: "", due: "",
    };
    setJobs((prev) => [newJob, ...prev]);
    logEvent(newJob.id, title, "was created");
    setShowAddJob(false);
  }

  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar config={config} view={view} overdueCount={overdue} onReset={onReset}
        setView={(v) => { setView(v); setSelectedId(null); }} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-[54px] shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6">
          <div className="flex items-center gap-3">
            <span className="text-[15px] font-bold tracking-tight text-slate-800">
              {view === "board" ? `${config.label} Board` : view === "team" ? "Team" : "Activity"}
            </span>
            {view === "board" && (
              <span className="text-xs text-slate-400">
                {jobs.length} {config.label.toLowerCase()}s · {overdue > 0 ? `${overdue} overdue` : "all on track"}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1">
              <Sparkles size={11} className="text-brand2" />
              <span className="text-[11px] font-semibold text-brand">AI-configured</span>
            </div>
            {view === "board" && (
              <button onClick={() => setShowAddJob(true)}
                className="flex items-center gap-1.5 rounded-lg bg-brand px-3.5 py-1.5 text-[13px] font-semibold text-white">
                <Plus size={14} /> Add {config.label}
              </button>
            )}
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {view === "board" && (
            <BoardView config={config} jobs={jobs} checklists={checklists}
              onSelect={selectJob} selectedId={selectedId ?? undefined} />
          )}
          {view === "team" && <TeamView config={config} jobs={jobs} />}
          {view === "activity" && <ActivityView log={activity} />}

          {selected && view === "board" && (
            <JobDetailPanel
              job={selected} config={config} checklist={checklists[selected.id] ?? []}
              jobActivity={jobActivity} tab={panelTab} setTab={setPanelTab}
              onClose={() => setSelectedId(null)}
              onAdvance={() => advanceStage(selected)}
              onToggleChecklist={(itemId) => toggleChecklist(selected.id, itemId)}
              onToggleAssignee={(memberId) => toggleAssignee(selected, memberId)}
            />
          )}
        </div>
      </div>

      {showAddJob && <AddJobModal config={config} onAdd={addJob} onClose={() => setShowAddJob(false)} />}
    </div>
  );
}
