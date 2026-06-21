import { Layers, CheckSquare, Users, Bell } from "lucide-react";
import { Eyebrow } from "./ui";

const items = [
  { Icon: Layers, t: "Nothing falls through the cracks", d: "Every job has a place. See at a glance what's in progress, what's stuck, and what's done — no more 'where did that go?'" },
  { Icon: CheckSquare, t: "Quality stays consistent", d: "Stage checklists make sure the right steps happen every time — even with a brand-new hire on the job." },
  { Icon: Users, t: "Everyone knows what's theirs", d: "Assign work, and each person sees exactly what they need — field crew, office, and owner views." },
  { Icon: Bell, t: "The important things find you", d: "Overdue, unassigned, waiting on a client — OpBase surfaces what needs you instead of making you hunt." },
];

export function Benefits() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1120px] px-6 py-[84px]">
        <div className="mb-[50px] text-center">
          <Eyebrow>What you get</Eyebrow>
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-[-1px] text-head">Run the whole operation from one place</h2>
        </div>
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {items.map(({ Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-edge bg-paper p-[26px]">
              <div className="mb-4 flex h-[42px] w-[42px] items-center justify-center rounded-[11px] bg-[#EEF2FF]">
                <Icon size={20} className="text-brand" />
              </div>
              <h3 className="mb-2 text-[17px] font-bold tracking-[-0.3px] text-head">{t}</h3>
              <p className="m-0 text-sm leading-relaxed text-copy">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
