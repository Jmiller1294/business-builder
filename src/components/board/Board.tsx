"use client";
import { useMemo, useState } from "react";
import { Plus, Sparkles } from "lucide-react";
import type { Job, TenantConfig, LiveChecklistItem } from "@/src/lib/config-schema/schema";
import { getDue } from "@/src/lib/utils";
import { Sidebar } from "../shared/Sidebar";


type View = "board" | "team" | "activity";
type Priority = Job["priority"];



export function Board({ config, onReset }: { config: TenantConfig; onReset: () => void }) {
  const [view, setView] = useState<View>("board");
  const [jobs, setJobs] = useState<Job[]>(config.jobs);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showAddJob, setShowAddJob] = useState(false);

  const selected = jobs.find((j) => j.id === selectedId) ?? null;
  const overdue = useMemo(() => jobs.filter((j) => getDue(j.due)?.type === "overdue").length, [jobs]);



  

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

        
      </div>

      
    </div>
  );
}
