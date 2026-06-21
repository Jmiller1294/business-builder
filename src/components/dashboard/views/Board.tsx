import { ChevronRight } from "lucide-react";
import { PRIORITY } from "@/lib/theme";
import { STAGES, JOBS, team } from "@/lib/data";
import { Tag, Avatar } from "../ui";

export default function Board() {
  return (
    <div className="flex items-start gap-0 overflow-x-auto pb-2">
      {STAGES.map((stage, si) => {
        const jobs = JOBS.filter((j) => j.stage === stage.id);
        return (
          <div key={stage.id} className="flex shrink-0 items-stretch">
            <div className="w-[240px]">
              <div className="relative mb-2.5 overflow-hidden rounded-[10px] border border-edge bg-white px-3 py-2.5"
                style={{ borderTop: `3px solid ${stage.color}` }}>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[46px] font-black leading-none"
                  style={{ color: stage.color, opacity: 0.08 }}>{jobs.length}</span>
                <div className="relative flex items-center gap-[7px]">
                  <span className="text-xs font-bold text-head">{stage.name}</span>
                  <span className="rounded-lg px-1.5 text-[10px] font-bold" style={{ color: stage.color, background: `${stage.color}18` }}>{jobs.length}</span>
                </div>
              </div>
              {jobs.length === 0 ? (
                <div className="rounded-[10px] border-[1.5px] border-dashed border-edge p-4 text-center text-xs text-[#CBD5E1]">Empty</div>
              ) : jobs.map((j) => {
                const p = PRIORITY[j.priority];
                return (
                  <div key={j.id} className="mb-2 rounded-[10px] border border-edge bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                    style={{ borderLeft: `3px solid ${p.border}` }}>
                    <div className="mb-[7px] flex justify-between">
                      <Tag text={p.label} color={p.text} bg={p.badge} />
                      <span className="text-[10px] font-semibold" style={{ color: j.due === "Overdue" ? "#EF4444" : j.due === "Today" ? "#F59E0B" : "#94A3B8" }}>{j.due}</span>
                    </div>
                    <div className="mb-[9px] text-[13px] font-semibold leading-snug text-head">{j.title}</div>
                    {j.assignees.length > 0 && <div className="flex gap-1">{j.assignees.map((a) => <Avatar key={a} m={team(a)} size={22} />)}</div>}
                  </div>
                );
              })}
            </div>
            {si < STAGES.length - 1 && <div className="flex w-7 justify-center pt-4"><ChevronRight size={13} color="#CBD5E1" /></div>}
          </div>
        );
      })}
    </div>
  );
}
