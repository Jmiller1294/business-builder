import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink2">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-3.5 px-6 py-8">
        <div className="flex items-center gap-2.5">
          <div className="flex h-[26px] w-[26px] items-center justify-center rounded-[7px] bg-gradient-to-br from-brand to-violet">
            <Zap size={14} color="#fff" />
          </div>
          <span className="text-[15px] font-extrabold text-chalk">OpBase</span>
        </div>
        <div className="flex flex-wrap gap-5">
          {["Product", "Pricing", "Security", "Privacy", "Contact"].map((l) => (
            <a key={l} href="#" className="text-[13px] text-dim no-underline">{l}</a>
          ))}
        </div>
        <span className="text-[12.5px] text-dim">© 2026 OpBase</span>
      </div>
    </footer>
  );
}
