import { Check } from "lucide-react";
import { Eyebrow } from "./ui";

const tiers = [
  { name: "Starter", price: "$0", sub: "For trying it out", features: ["1 board", "Up to 3 team members", "AI setup", "Core operations"], cta: "Start free", hot: false },
  { name: "Pro", price: "$29", sub: "per month", features: ["Unlimited boards", "Up to 15 members", "Checklists & SOPs", "Integrations", "Client & invoice tracking"], cta: "Start free trial", hot: true },
  { name: "Team", price: "$79", sub: "per month", features: ["Everything in Pro", "Unlimited members", "Roles & permissions", "Reports & insights", "Priority support"], cta: "Start free trial", hot: false },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-paper">
      <div className="mx-auto max-w-[1120px] px-6 py-[84px]">
        <div className="mb-[50px] text-center">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mb-2.5 text-[clamp(28px,4vw,40px)] font-extrabold tracking-[-1px] text-head">Simple pricing. Start free.</h2>
          <p className="text-base text-copy">No credit card to start. Cancel anytime.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          {tiers.map((t) => (
            <div key={t.name}
              className={`relative max-w-[340px] flex-[1_1_280px] rounded-[18px] bg-white p-7 ${t.hot ? "border-2 border-brand shadow-[0_30px_60px_-28px_rgba(79,70,229,0.5)]" : "border border-edge"}`}>
              {t.hot && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-br from-brand to-violet px-3 py-1 text-[11px] font-bold tracking-[0.04em] text-white">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-1.5 text-[15px] font-bold text-head">{t.name}</div>
              <div className="mb-0.5 flex items-baseline gap-1.5">
                <span className="text-[38px] font-[850] tracking-[-1.5px] text-head">{t.price}</span>
                <span className="text-[13px] text-faint">{t.sub}</span>
              </div>
              <div className="my-5 h-px bg-edge" />
              <div className="mb-6 flex flex-col gap-[11px]">
                {t.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-[13.5px] text-copy">
                    <Check size={15} className="text-brand" /> {f}
                  </div>
                ))}
              </div>
              <button className={`w-full rounded-xl py-3 text-sm font-bold ${t.hot ? "border-none bg-gradient-to-br from-brand to-violet text-white" : "border border-edge bg-white text-head"}`}>
                {t.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
