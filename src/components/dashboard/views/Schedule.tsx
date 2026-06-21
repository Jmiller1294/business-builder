import { PRIORITY } from "@/lib/theme";
import { JOBS, team } from "@/lib/data";
import { Card, Avatar } from "../ui";

export default function Schedule() {
  const days = ["Monday Jun 19", "Tuesday Jun 20", "Wednesday Jun 21", "Thursday Jun 22"];
  const byDay = [[JOBS[0], JOBS[3]], [JOBS[1]], [JOBS[6]], [JOBS[2]]];
  return (
    <div className="flex gap-3.5 overflow-x-auto">
      {days.map((d, i) => (
        <div key={d} className="min-w-[220px] flex-1">
          <div className="mb-2.5 text-xs font-bold text-head">{d}</div>
          {byDay[i].map((j) => (
            <Card key={j.id} pad="p-3" className="mb-2" style={{ borderLeft: `3px solid ${PRIORITY[j.priority].border}` }}>
              <div className="mb-1.5 text-[12.5px] font-semibold text-head">{j.title}</div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-muted">{j.assignees.length ? "Crew assigned" : "Unassigned"}</span>
                <div className="flex gap-[3px]">{j.assignees.map((a) => <Avatar key={a} m={team(a)} size={20} />)}</div>
              </div>
            </Card>
          ))}
          {byDay[i].length === 0 && <div className="text-xs text-[#CBD5E1]">No jobs</div>}
        </div>
      ))}
    </div>
  );
}
