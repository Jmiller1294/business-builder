import { Eyebrow } from "./ui";

const steps = [
  { t: "Tell us about your business", d: "Five quick questions — what you do, what you call a job, how your work comes in." },
  { t: "AI builds your board", d: "Your stages, checklists, team roles, and example jobs — generated for your exact business." },
  { t: "Run your business", d: "Move work through stages, never miss a step, and see what needs attention. From day one." },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-white">
      <div className="mx-auto max-w-[1120px] px-6 py-[84px]">
        <div className="mb-[52px] text-center">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-[-1px] text-head">From signup to running in three steps</h2>
        </div>
        <div className="flex flex-wrap gap-[22px]">
          {steps.map((s, i) => (
            <div key={i} className="flex-[1_1_280px] rounded-2xl border border-edge bg-paper p-7">
              <div className="mb-[18px] flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-gradient-to-br from-brand to-violet text-base font-extrabold text-white">{i + 1}</div>
              <h3 className="mb-2 text-lg font-bold tracking-[-0.3px] text-head">{s.t}</h3>
              <p className="m-0 text-[14.5px] leading-relaxed text-copy">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
