import type { Template } from "@/lib/templates";

// Structure via Tailwind; the per-stage/per-card colors come from the template
// data at runtime, so they stay as inline style (Tailwind can't pre-generate them).
export function MiniBoard({ tpl, compact }: { tpl: Template; compact?: boolean }) {
  return (
    <div className="flex gap-2.5 overflow-x-auto p-0.5">
      {tpl.stages.map((s) => (
        <div key={s.name} className={compact ? "w-[132px] shrink-0" : "w-[150px] shrink-0"}>
          <div className="relative mb-2 overflow-hidden rounded-lg border border-edge bg-white px-2.5 py-[7px]"
            style={{ borderTop: `3px solid ${s.color}` }}>
            <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-[30px] font-black leading-none"
              style={{ color: s.color, opacity: 0.09 }}>{s.cards.length}</span>
            <span className="relative text-[11px] font-bold text-head">{s.name}</span>
          </div>
          {s.cards.map(([title, dot]) => (
            <div key={title}
              className="mb-[7px] rounded-lg border border-edge bg-white px-2.5 py-2 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              style={{ borderLeft: `3px solid ${dot}` }}>
              <div className="text-[11px] font-semibold leading-tight text-head">{title}</div>
              <div className="mt-[7px] flex gap-[3px]">
                {["#6366F1", s.color].map((c, i) => (
                  <span key={i} className="h-[15px] w-[15px] rounded-full" style={{ background: `${c}22`, border: `1px solid ${c}44` }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
