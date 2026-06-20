"use client";
import { useState } from "react";
import { useBoard } from "@/src/lib/hooks/useBoard";
import { useJobs } from "@/src/lib/hooks/useJobs";
import { Sidebar } from "@/src/app/components/shared/Sidebar";
import { BoardView } from "@/components/board/BoardView";
import { JobDetailPanel } from "@/components/board/JobDetailPanel";
import type { Job } from "@/src/lib/config-schema/schema";
import { Board } from "@/src/app/components/board/Board";

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
   <Board
    config={config}
    jobs={jobs}
    selected={selected}
    onSelect={setSelected}
    onAdvance={advanceStage}
    onToggleAssignee={toggleAssignee}
   />
  );
}

function CenteredNote({ text }: { text: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center text-ghost">
      {text}
    </div>
  );
}
