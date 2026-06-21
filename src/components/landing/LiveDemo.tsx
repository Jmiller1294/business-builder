"use client";
import { useState, useEffect, useRef } from "react";
import { Sparkles, Check } from "lucide-react";
import { TEMPLATES, TKEYS } from "@/lib/templates";
import { MiniBoard } from "./MiniBoard";

const GEN_LINES = ["Reading your business…", "Designing your stages…", "Writing your checklists…", "Adding your team…"];

export function LiveDemo() {
  const [tkey, setTkey] = useState("grooming");
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"ready" | "generating" | "done">("done");
  const [genIdx, setGenIdx] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const tpl = TEMPLATES[tkey];
  const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  useEffect(() => () => clearTimers(), []);

  const build = (key: string) => {
    clearTimers();
    setTkey(key);
    setPhase("generating");
    setGenIdx(0);
    GEN_LINES.forEach((_, i) => timers.current.push(setTimeout(() => setGenIdx(i), i * 360)));
    timers.current.push(setTimeout(() => setPhase("done"), GEN_LINES.length * 360 + 220));
  };

  // Maps typed input to the closest template. Swap for a POST to
  // /api/generate-config to generate a real board from any input.
  const buildFromInput = () => {
    const t = typed.toLowerCase();
    const match =
      /clean/.test(t) ? "cleaning" :
      /(consult|agency|freelance|design|market)/.test(t) ? "consulting" :
      /(lawn|landscap|garden|tree|yard)/.test(t) ? "landscaping" :
      /(groom|pet|dog|salon)/.test(t) ? "grooming" : tkey;
    build(match);
  };

  return (
    <div className="rounded-[18px] border border-line bg-white/[0.04] p-3.5 shadow-[0_30px_80px_-30px_rgba(79,70,229,0.45)] backdrop-blur-md">
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 px-1.5 pb-3 pt-0.5">
        {["#EF4444", "#F59E0B", "#10B981"].map((c) => (
          <span key={c} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
        ))}
        <div className="ml-2 flex h-[22px] flex-1 items-center rounded-md border border-line bg-white/5 px-2.5 text-[11px] text-dim">
          app.opbase.com/build
        </div>
      </div>

      {/* input row */}
      <div className="mb-3 flex gap-2">
        <input
          value={typed}
          onChange={(e) => setTyped(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") buildFromInput(); }}
          placeholder="What kind of business do you run?"
          className="flex-1 rounded-[10px] border border-line bg-ink2 px-3 py-[11px] text-[13.5px] text-chalk outline-none"
        />
        <button onClick={buildFromInput}
          className="flex items-center gap-1.5 whitespace-nowrap rounded-[10px] border-none bg-gradient-to-br from-brand to-violet px-4 text-[13.5px] font-bold text-white">
          <Sparkles size={14} /> Build
        </button>
      </div>

      {/* preset chips */}
      <div className="mb-3.5 flex flex-wrap gap-[7px]">
        <span className="self-center text-[11.5px] text-dim">Try:</span>
        {TKEYS.map((k) => {
          const on = tkey === k;
          return (
            <button key={k} onClick={() => build(k)}
              className={`rounded-full border px-[11px] py-[5px] text-xs font-semibold ${on ? "border-brand2 bg-brand2/15 text-chalk" : "border-line bg-transparent text-mist"}`}>
              {TEMPLATES[k].emoji} {TEMPLATES[k].chip}
            </button>
          );
        })}
      </div>

      {/* result surface */}
      <div className="min-h-[188px] rounded-xl bg-paper p-3.5">
        {phase === "generating" ? (
          <div className="px-1.5 py-5">
            {GEN_LINES.map((line, i) => {
              const done = i < genIdx, active = i === genIdx;
              return (
                <div key={line} className="flex items-center gap-2.5 py-[7px] transition-opacity"
                  style={{ opacity: i > genIdx ? 0.35 : 1 }}>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full"
                    style={{ background: done ? "#10B981" : active ? "#4F46E5" : "#E2E8F0" }}>
                    {done ? <Check size={11} color="#fff" strokeWidth={3} />
                      : <span className="h-[7px] w-[7px] rounded-full" style={{ background: active ? "#fff" : "#94A3B8" }} />}
                  </span>
                  <span className={`text-[13px] ${active ? "font-semibold" : "font-medium"} ${done ? "text-faint" : "text-head"}`}>{line}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <>
            <div className="mb-[11px] flex items-center gap-2">
              <span className="text-lg">{tpl.emoji}</span>
              <span className="text-[13px] font-extrabold text-head">{tpl.chip} board</span>
              <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-[#EEF2FF] px-2 py-[3px] text-[10.5px] font-bold text-brand">
                <Sparkles size={10} /> Built by AI
              </span>
            </div>
            <MiniBoard tpl={tpl} compact />
          </>
        )}
      </div>
    </div>
  );
}
