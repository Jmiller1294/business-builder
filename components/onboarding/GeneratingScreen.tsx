"use client";
import { useEffect, useState } from "react";
import { Sparkles, Check, AlertCircle, RefreshCw } from "lucide-react";
import type { OnboardingAnswers } from "@/lib/questions";
import type { TenantConfig } from "@/lib/config-schema/schema";

const STEPS = [
  "Analyzing your workflow...", "Designing your stages...", "Writing your checklists...",
  "Building your team roles...", "Creating example jobs...", "Finishing up...",
];

export function GeneratingScreen({
  answers, onDone, onError,
}: { answers: OnboardingAnswers; onDone: (c: TenantConfig) => void; onError: () => void }) {
  const [stepIdx, setStepIdx] = useState(0);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ticker = setInterval(() => setStepIdx((i) => Math.min(i + 1, STEPS.length - 1)), 900);
    (async () => {
      try {
        const res = await fetch("/api/generate-config", {
          method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(answers),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? "Generation failed");
        setDone(true);
        setTimeout(() => onDone(data.config as TenantConfig), 600);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally { clearInterval(ticker); }
    })();
    return () => clearInterval(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <AlertCircle size={40} className="mb-4 text-red-500" />
        <h2 className="mb-2.5 text-2xl font-bold text-chalk">Couldn&apos;t generate your board</h2>
        <p className="mb-7 max-w-sm text-sm text-ghost">{error}. Please try again.</p>
        <button onClick={onError}
          className="flex items-center gap-2 rounded-lg border border-line bg-panel2 px-6 py-2.5 text-sm font-semibold text-chalk">
          <RefreshCw size={14} /> Try again
        </button>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="mb-12 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full shadow-[0_0_40px_#6366F130]"
          style={{ background: "linear-gradient(135deg,#4F46E5,#7C3AED)" }}>
          {done ? <Check size={28} color="white" strokeWidth={3} /> : <Sparkles size={28} color="white" />}
        </div>
        <h2 className="mb-2 text-2xl font-extrabold tracking-tight text-chalk">
          {done ? "Your board is ready." : "Building your board..."}
        </h2>
        <p className="text-sm text-ghost">
          {done ? "Launching now" : `Customizing for: ${answers.businessType}`}
        </p>
      </div>

      <div className="w-full max-w-sm">
        {STEPS.map((label, i) => {
          const active = i === stepIdx && !done;
          const complete = i < stepIdx || done;
          return (
            <div key={i} className="flex items-center gap-3 border-b border-panel2 py-2.5 last:border-0 transition-opacity"
              style={{ opacity: i > stepIdx && !done ? 0.3 : 1 }}>
              <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full transition-all"
                style={{ background: complete ? "#10B981" : active ? "#6366F1" : "#1E2D45" }}>
                {complete ? <Check size={12} color="white" strokeWidth={3} />
                  : active ? <span className="h-2 w-2 animate-pulse-dot rounded-full bg-white" />
                  : <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />}
              </span>
              <span className="text-sm transition-all"
                style={{ color: complete ? "#94A3B8" : active ? "#F0F4FF" : "#334155",
                         textDecoration: complete ? "line-through" : "none" }}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
