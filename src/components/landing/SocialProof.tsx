import { Star } from "lucide-react";

const quotes = [
  { q: "I answered five questions and had a board that actually matched my business. We stopped losing track of jobs that week.", n: "Maria S.", r: "Owner, Bright & Clean" },
  { q: "Every other tool I tried sat empty because I never set it up. This one was just… ready. My crew actually uses it.", n: "Devin R.", r: "Evergreen Grounds" },
  { q: "Onboarding a new tech used to take days. Now they follow the checklist on each job and nothing gets missed.", n: "Priya K.", r: "Apex Home Services" },
];
const stats: [string, string][] = [
  ["2,400+", "businesses running on OpBase"],
  ["190k", "jobs tracked this month"],
  ["4.8★", "average rating"],
];

export function SocialProof() {
  return (
    <section className="border-t border-line bg-ink">
      <div className="mx-auto max-w-[1120px] px-6 py-[78px]">
        <div className="mb-14 flex flex-wrap justify-center gap-7">
          {stats.map(([v, l]) => (
            <div key={l} className="text-center">
              <div className="text-[40px] font-[850] tracking-[-1.5px] text-chalk">{v}</div>
              <div className="text-[13px] text-mist">{l}</div>
            </div>
          ))}
        </div>
        <div className="grid gap-[18px] [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {quotes.map((t) => (
            <div key={t.n} className="rounded-2xl border border-line bg-panel p-6">
              <div className="mb-3 flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />)}
              </div>
              <p className="mb-4 text-[14.5px] leading-relaxed text-chalk">&ldquo;{t.q}&rdquo;</p>
              <div className="text-[13px] font-bold text-chalk">{t.n}</div>
              <div className="text-[12.5px] text-mist">{t.r}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
