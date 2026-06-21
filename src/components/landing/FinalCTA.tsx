import { ArrowRight, ShieldCheck, Plug, Sparkles } from "lucide-react";
import { Btn } from "./ui";

const trust: [typeof ShieldCheck, string][] = [
  [ShieldCheck, "Encrypted & secure"],
  [Plug, "Connects to your tools"],
  [Sparkles, "Set up by AI"],
];

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute -bottom-[200px] left-1/2 h-[500px] w-[1000px] -translate-x-1/2"
        style={{ background: "radial-gradient(ellipse at center, rgba(124,58,237,0.3), transparent 70%)" }} />
      <div className="relative mx-auto max-w-[760px] px-6 py-24 text-center">
        <h2 className="mb-[18px] text-[clamp(30px,4.5vw,46px)] font-[850] leading-[1.1] tracking-[-1.5px] text-chalk">
          Stop configuring software.<br />Start running your business.
        </h2>
        <p className="mb-[30px] text-[17.5px] leading-relaxed text-mist">
          Answer a few questions and watch your operations board build itself. Free to start, no credit card.
        </p>
        <Btn primary big>Build my board free <ArrowRight size={18} /></Btn>
        <div className="mt-[26px] flex flex-wrap justify-center gap-[22px]">
          {trust.map(([Icon, t]) => (
            <span key={t} className="inline-flex items-center gap-[7px] text-[13px] text-mist">
              <Icon size={15} className="text-brand2" /> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
