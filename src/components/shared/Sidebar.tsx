"use client";
import { Layers, Users, Activity, Zap, RefreshCw } from "lucide-react";
import type { TenantConfig } from "@/src/lib/config-schema/schema";
type View = "board" | "team" | "activity";

export function Sidebar({
  config, view, setView, overdueCount, onReset,
}: { config: TenantConfig; view: View; setView: (v: View) => void; overdueCount: number; onReset: () => void }) {
  const NAV: { id: View; label: string; Icon: typeof Layers }[] = [
    { id: "board", label: "Board", Icon: Layers },
    { id: "team", label: "Team", Icon: Users },
    { id: "activity", label: "Activity", Icon: Activity },
  ];
  return (
    <aside className="flex w-[215px] shrink-0 flex-col border-r border-line bg-ink">
      <div className="p-4">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-lg"
            style={{ background: "linear-gradient(135deg,#4F46E5,#7C3AED)" }}>
            <Zap size={15} color="white" />
          </div>
          <span className="text-sm font-bold tracking-tight text-chalk">OpBase</span>
        </div>
        <div className="rounded-lg border border-line bg-panel2 px-3 py-2">
          <div className="text-lg">{config.emoji}</div>
          <div className="text-sm font-bold text-slate-300">{config.name}</div>
          <div className="text-[10px] text-ghost">{config.label} operations · AI generated</div>
        </div>
      </div>

      <nav className="flex-1 px-2">
        {NAV.map(({ id, label, Icon }) => {
          const active = view === id;
          return (
            <button key={id} onClick={() => setView(id)}
              className={`mb-0.5 flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13px] transition-all
                ${active ? "border-l-2 border-brand2 bg-panel2 font-semibold text-chalk" : "border-l-2 border-transparent text-ghost"}`}>
              <Icon size={15} /> {label}
              {id === "board" && overdueCount > 0 && (
                <span className="ml-auto rounded-full bg-red-500/20 px-1.5 text-[10px] font-bold text-red-400">{overdueCount}</span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-2.5">
        <button onClick={onReset}
          className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] font-medium text-slate-600 hover:text-ghost">
          <RefreshCw size={12} /> Start over
        </button>
      </div>
    </aside>
  );
}
