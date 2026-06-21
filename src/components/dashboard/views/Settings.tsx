import { Zap, Sparkles } from "lucide-react";
import { INTEGRATIONS } from "@/lib/data";
import { Card, SectionTitle } from "../ui";

export default function Settings() {
  return (
    <div className="flex max-w-[720px] flex-col gap-4">
      <Card>
        <SectionTitle>Integrations</SectionTitle>
        {INTEGRATIONS.map((it, i) => (
          <div key={it.name} className={`flex items-center gap-3 py-3 ${i < INTEGRATIONS.length - 1 ? "border-b border-wash" : ""}`}>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-wash"><Zap size={16} className="text-brand2" /></div>
            <div className="flex-1">
              <div className="text-[13px] font-bold text-head">{it.name}</div>
              <div className="text-[11.5px] text-muted">{it.desc}</div>
            </div>
            <div className={`relative h-[22px] w-[38px] rounded-full transition-colors ${it.on ? "bg-brand" : "bg-[#CBD5E1]"}`}>
              <div className="absolute top-0.5 h-[18px] w-[18px] rounded-full bg-white transition-all" style={{ left: it.on ? 18 : 2 }} />
            </div>
          </div>
        ))}
      </Card>
      <Card>
        <SectionTitle>Business Profile</SectionTitle>
        <div className="text-[13px] leading-[1.7] text-sub">
          <div><strong className="text-head">Evergreen Grounds</strong> · Landscaping &amp; grounds maintenance</div>
          <div>Unit of work: <strong className="text-head">Job</strong> · 4 team members · Pacific timezone</div>
          <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#EEF2FF] px-2.5 py-1.5 text-xs font-semibold text-brand">
            <Sparkles size={12} /> Configured by AI from onboarding
          </div>
        </div>
      </Card>
    </div>
  );
}
