"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Eyebrow } from "./ui";

const qs = [
  { q: "How long does setup actually take?", a: "About five minutes. You answer a handful of questions, the AI builds your board, and you can start adding jobs immediately. You can adjust anything it creates." },
  { q: "What if the AI gets my business wrong?", a: "It's a starting point, not a cage. Every stage, checklist, and role is editable — rename, add, or remove anything. The more specific your answers, the closer the first draft." },
  { q: "Does it replace my existing tools?", a: "It runs your operations and connects to the tools you keep — QuickBooks for accounting, Stripe for payments, your calendar and email. You don't have to rip anything out." },
  { q: "Is my business data secure?", a: "Yes. Your data is encrypted in transit and at rest, isolated per business, and never shared. You can export or delete it at any time." },
  { q: "Can my whole team use it?", a: "Yes. Invite your team and each person sees what's relevant to their role — field crew see their jobs, office sees billing, you see everything." },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[760px] px-6 py-[84px]">
        <div className="mb-11 text-center">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="text-[clamp(26px,4vw,36px)] font-extrabold tracking-[-1px] text-head">Everything else you&apos;re wondering</h2>
        </div>
        {qs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="border-b border-edge">
              <button onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-3 border-none bg-transparent px-1 py-5 text-left">
                <span className="text-base font-bold text-head">{item.q}</span>
                <ChevronDown size={18} className={`shrink-0 text-faint transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && <p className="mx-1 mb-[22px] mt-0 text-[14.5px] leading-[1.65] text-copy">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
