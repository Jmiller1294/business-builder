"use client";
import { useState } from "react";
import { useBoard } from "@/lib/hooks/useBoard";
import { useJobs } from "@/lib/hooks/useJobs";
import { Sidebar } from "@/components/shared/Sidebar";
import { BoardView } from "@/components/board/BoardView";
import { JobDetailPanel } from "@/components/board/JobDetailPanel";
import type { Job } from "@/lib/config-schema/schema";

export default function BoardPage() {
  const { config, jobs, setJobs, loading } = useBoard();
  const { advanceStage, toggleAssignee } = useJobs(config, setJobs);
  const [selected, setSelected] = useState<Job | null>(null);

  if (loading) return <CenteredNote text="Loading your board..." />;
  if (!config)
    return (
      <CenteredNote text="No board yet. Finish onboarding to build one." />
    );

  return (
    <div className="flex h-screen">
      <Sidebar config={config} active="board" />
      <main className="flex-1 overflow-hidden flex">
        <BoardView config={config} jobs={jobs} onSelect={setSelected} selectedId={selected?.id} />
        {selected && (
          <JobDetailPanel
            job={selected}
            config={config}
            onClose={() => setSelected(null)}
            onAdvance={() => advanceStage(selected)}
            onToggleAssignee={(m) => toggleAssignee(selected, m)}
          />
        )}
      </main>
    </div>
  );
}

function CenteredNote({ text }: { text: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center text-ghost">
      {text}
    </div>
  );
}
