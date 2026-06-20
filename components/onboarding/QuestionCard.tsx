"use client";
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import type { Question } from "@/lib/questions";

export function QuestionCard({
  question, value, onSubmit, onBack, canGoBack, isLast,
}: {
  question: Question; value: string; onSubmit: (v: string) => void;
  onBack: () => void; canGoBack: boolean; isLast: boolean;
}) {
  const [local, setLocal] = useState(value);
  const ready = question.type === "text" ? local.trim().length > 2 : !!local;

  return (
    <div className="w-full max-w-lg rounded-2xl border border-line bg-panel p-8">
      <div className="mb-6">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-chalk">{question.label}</h2>
        <p className="text-sm text-ghost">{question.hint}</p>
      </div>

      {question.type === "text" ? (
        <textarea
          autoFocus rows={3} value={local} placeholder={question.placeholder}
          onChange={(e) => setLocal(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey && ready) { e.preventDefault(); onSubmit(local); } }}
          className="w-full resize-none rounded-xl border border-line bg-ink px-3.5 py-3 text-sm leading-relaxed
                     text-chalk outline-none transition-colors focus:border-brand2"
        />
      ) : (
        <div className="flex flex-col gap-2">
          {question.options!.map((opt) => {
            const selected = local === opt;
            return (
              <button
                key={opt} onClick={() => setLocal(opt)}
                className={`flex items-center gap-2.5 rounded-lg border px-3.5 py-2.5 text-left text-sm transition-all
                  ${selected ? "border-brand2 bg-panel2 font-semibold text-chalk" : "border-line text-ghost hover:border-line/80"}`}
              >
                <span className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-2
                  ${selected ? "border-brand2 bg-brand2" : "border-line"}`}>
                  {selected && <Check size={10} color="white" strokeWidth={3} />}
                </span>
                {opt}
              </button>
            );
          })}
        </div>
      )}

      <div className="mt-6 flex gap-2.5">
        {canGoBack && (
          <button onClick={onBack}
            className="rounded-lg border border-line px-4 py-3 text-sm font-semibold text-ghost transition-colors hover:text-chalk">
            Back
          </button>
        )}
        <button
          disabled={!ready} onClick={() => onSubmit(local)}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg py-3 text-sm font-bold text-white
                     transition-all disabled:cursor-default disabled:opacity-40"
          style={{ background: ready ? "linear-gradient(135deg,#4F46E5,#7C3AED)" : "#1E2D45" }}
        >
          {isLast ? "Build my board" : "Continue"} <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}
