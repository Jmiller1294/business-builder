"use client";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import { QUESTIONS, type OnboardingAnswers } from "@/lib/questions";
import { QuestionCard } from "./QuestionCard";

export function OnboardingFlow({ onComplete }: { onComplete: (a: OnboardingAnswers) => void }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<OnboardingAnswers>>({});
  const q = QUESTIONS[step];
  const isLast = step === QUESTIONS.length - 1;
  const pct = Math.round((step / QUESTIONS.length) * 100);

  function handleAnswer(value: string) {
    const updated = { ...answers, [q.id]: value };
    setAnswers(updated);
    if (isLast) onComplete(updated as OnboardingAnswers);
    else setStep((s) => s + 1);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="mb-12 max-w-xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-panel2 px-4 py-1.5">
          <Sparkles size={12} className="text-brand2" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ghost">AI Configuration Engine</span>
        </div>
        <h1 className="mb-2.5 text-4xl font-extrabold tracking-tight text-chalk">Tell us about your business</h1>
        <p className="text-[15px] text-ghost">We use your answers to build a custom operations board — not a template.</p>
      </div>

      <div className="mb-9 w-full max-w-lg">
        <div className="mb-2 flex items-center justify-between text-[11px] font-semibold text-ghost">
          <span>Question {step + 1} of {QUESTIONS.length}</span><span>{pct}% complete</span>
        </div>
        <div className="h-[3px] rounded bg-line">
          <div className="h-full rounded transition-[width] duration-400"
            style={{ width: `${pct}%`, background: "linear-gradient(90deg,#6366F1,#8B5CF6)" }} />
        </div>
      </div>

      <QuestionCard
        question={q} value={(answers[q.id] as string) ?? ""} onSubmit={handleAnswer}
        onBack={() => setStep((s) => Math.max(0, s - 1))} canGoBack={step > 0} isLast={isLast}
      />

      <div className="mt-6 flex gap-1.5">
        {QUESTIONS.map((_, i) => (
          <span key={i} className="h-1.5 rounded-full transition-all duration-300"
            style={{ width: i === step ? 20 : 6, background: i <= step ? "#6366F1" : "#1E2D45" }} />
        ))}
      </div>
    </main>
  );
}
