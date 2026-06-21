import { MessageSquare, Mail } from "lucide-react";
import { MESSAGES } from "@/lib/data";
import { Card } from "../ui";

export default function Messages() {
  return (
    <Card pad="p-0">
      {MESSAGES.map((m, i) => (
        <div key={i} className={`flex gap-3 px-[18px] py-3.5 ${i ? "border-t border-wash" : ""}`}>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-wash">
            {m.channel === "SMS" ? <MessageSquare size={15} className="text-brand2" /> : <Mail size={15} className="text-brand2" />}
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <span className="text-[13px] font-bold text-head">{m.who}</span>
              <span className="text-[11px] text-muted">{m.time}</span>
            </div>
            <div className="mt-0.5 text-[12.5px] text-sub">
              {m.out && <span className="font-semibold text-emerald-500">Sent · </span>}{m.preview}
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
}
