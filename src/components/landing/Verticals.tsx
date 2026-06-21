"use client";
import { useState } from "react";
import { Eyebrow } from "./ui";
import { MiniBoard } from "./MiniBoard";
import { TEMPLATES, TKEYS } from "@/lib/templates";

export function Verticals() {
  const [active, setActive] = useState("grooming");
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1120px] px-6 py-[84px]">
        <div className="mx-auto mb-9 max-w-[600px] text-center">
          <Eyebrow>Built for your business</Eyebrow>
          <h2 className="mb-3 text-[clamp(28px,4vw,40px)] font-extrabold tracking-[-1px] text-head">One product. Shaped to how you work.</h2>
          <p className="text-[16.5px] leading-relaxed text-copy">A groomer and a consultant get boards that look nothing alike — because they don&apos;t work alike.</p>
        </div>
        <div className="mb-[26px] flex flex-wrap justify-center gap-2">
          {TKEYS.map((k) => {
            const on = active === k;
            return (
              <button key={k} onClick={() => setActive(k)}
                className={`rounded-full border px-4 py-[9px] text-[13.5px] font-bold ${on ? "border-brand bg-brand text-white" : "border-edge bg-white text-copy"}`}>
                {TEMPLATES[k].emoji} {TEMPLATES[k].chip}
              </button>
            );
          })}
        </div>
        <div className="mx-auto max-w-[760px] rounded-2xl border border-edge bg-white p-[22px] shadow-[0_20px_50px_-30px_rgba(15,23,42,0.3)]">
          <MiniBoard tpl={TEMPLATES[active]} />
        </div>
      </div>
    </section>
  );
}
