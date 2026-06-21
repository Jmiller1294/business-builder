import type { ReactNode } from "react";

export function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className={`mb-3.5 text-xs font-bold uppercase tracking-[0.14em] ${dark ? "text-brand2" : "text-brand"}`}>
      {children}
    </div>
  );
}

export function Btn({ children, primary, big, onClick }: {
  children: ReactNode; primary?: boolean; big?: boolean; onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2 rounded-xl font-bold",
        big ? "px-[26px] py-[15px] text-[15px]" : "px-5 py-[11px] text-sm",
        primary
          ? "border-none bg-gradient-to-br from-brand to-violet text-white shadow-[0_12px_30px_-8px_rgba(79,70,229,0.6)]"
          : "border border-line bg-transparent text-chalk",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
