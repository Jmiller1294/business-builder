import { Activity } from "lucide-react";
import { ACTIVITY } from "@/lib/data";
import { Card } from "../ui";

export default function ActivityFeed() {
  return (
    <Card>
      <div className="relative">
        <div className="absolute bottom-1.5 left-[13px] top-3.5 w-px bg-wash" />
        {ACTIVITY.map((a, i) => (
          <div key={i} className="relative mb-[18px] flex gap-3.5">
            <div className="z-[1] flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#EEF2FF]">
              <Activity size={12} className="text-brand2" />
            </div>
            <div className="flex-1">
              <div className="text-[13px] leading-snug text-head"><strong>{a.actor}</strong> <span className="text-sub">{a.action}</span></div>
              <div className="mt-0.5 text-[11px] text-muted">{a.time}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
