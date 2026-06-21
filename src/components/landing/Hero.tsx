import { Sparkles, ArrowRight } from "lucide-react";
import { Btn } from "./ui";
import { LiveDemo } from "./LiveDemo";

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      {/* ambient glow — radial gradient stays inline (no Tailwind utility) */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2"
        style={{ background: "radial-gradient(ellipse at center, rgba(124,58,237,0.28), transparent 70%)" }} />
      <div className="relative mx-auto max-w-[1120px] px-6 pb-14 pt-16">
        <div className="mx-auto mb-10 max-w-[760px] text-center">
          <div className="mb-[26px] inline-flex items-center gap-[7px] rounded-full border border-line bg-white/[0.04] px-3.5 py-1.5">
            <Sparkles size={13} className="text-brand2" />
            <span className="text-[12.5px] font-semibold text-mist">AI builds your operations system in minutes</span>
          </div>
          <h1 className="mb-5 text-[clamp(38px,6vw,62px)] font-[850] leading-[1.04] tracking-[-2px] text-chalk">
            Your entire operation,<br />
            <span className="bg-gradient-to-br from-[#818CF8] to-[#C084FC] bg-clip-text text-transparent">
              built for your business.
            </span>
          </h1>
          <p className="mx-auto mb-7 max-w-[560px] text-[clamp(16px,2vw,19px)] leading-relaxed text-mist">
            Answer a few questions and get a complete operations board — your stages, your checklists, your team — ready on day one. Not a blank template. Yours.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Btn primary big>Build my board free <ArrowRight size={17} /></Btn>
            <Btn big>See a live demo</Btn>
          </div>
          <div className="mt-4 text-[12.5px] text-dim">Free to start · No credit card · Setup in 5 minutes</div>
        </div>

        {/* signature: the live demo */}
        <div className="mx-auto max-w-[720px]">
          <LiveDemo />
          <div className="mt-3 text-center text-[12.5px] text-dim">
            ↑ This is the real thing. Pick a business and watch your board build itself.
          </div>
        </div>
      </div>
    </header>
  );
}
