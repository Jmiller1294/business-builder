import { Sparkles } from "lucide-react";
import { Eyebrow } from "./ui";
import { MiniBoard } from "./MiniBoard";
import { TEMPLATES } from "@/lib/templates";

export function Differentiator() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1120px] px-6 py-[84px]">
        <div className="mx-auto mb-[50px] max-w-[640px] text-center">
          <Eyebrow>Why OpBase</Eyebrow>
          <h2 className="mb-3.5 text-[clamp(28px,4vw,40px)] font-extrabold leading-[1.12] tracking-[-1px] text-head">
            Every other tool hands you an empty board and wishes you luck.
          </h2>
          <p className="text-[17px] leading-relaxed text-copy">
            Most ops tools are blank canvases. Most owners never finish setting them up — and quietly abandon them. OpBase is built for your business before you ever log a job.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-[22px]">
          {/* the usual way */}
          <div className="max-w-[460px] flex-[1_1_340px] rounded-2xl border border-edge bg-white p-[26px] opacity-85">
            <div className="mb-4 text-[12.5px] font-bold uppercase tracking-[0.08em] text-faint">The usual way</div>
            <div className="mb-[18px] flex gap-2">
              {["To do", "Doing", "Done"].map((s) => (
                <div key={s} className="flex-1 rounded-lg border-[1.5px] border-dashed border-edge px-2 py-[26px] text-center text-xs text-faint">{s}</div>
              ))}
            </div>
            <ul className="m-0 list-disc pl-[18px] text-sm leading-[1.9] text-copy">
              <li>Generic columns you have to design</li>
              <li>Hours of setup before any value</li>
              <li>Abandoned within the first month</li>
            </ul>
          </div>
          {/* with OpBase */}
          <div className="max-w-[460px] flex-[1_1_340px] rounded-2xl border-2 border-brand2 bg-white p-[26px] shadow-[0_24px_60px_-24px_rgba(79,70,229,0.4)]">
            <div className="mb-4 flex items-center gap-1.5 text-[12.5px] font-bold uppercase tracking-[0.08em] text-brand">
              <Sparkles size={13} /> With OpBase
            </div>
            <div className="mb-[18px]"><MiniBoard tpl={TEMPLATES.landscaping} compact /></div>
            <ul className="m-0 list-disc pl-[18px] text-sm font-medium leading-[1.9] text-head">
              <li>Stages in your industry&apos;s language</li>
              <li>Checklists &amp; team ready on day one</li>
              <li>Useful in five minutes, not five weeks</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
