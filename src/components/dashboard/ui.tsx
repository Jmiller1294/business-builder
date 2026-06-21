import type { ReactNode, CSSProperties } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import type { AvatarLike } from "@/lib/types";

export function Card({ children, className = "", pad = "p-[18px]", style }: {
  children: ReactNode; className?: string; pad?: string; style?: CSSProperties;
}) {
  return <div className={`rounded-[14px] border border-edge bg-white ${pad} ${className}`} style={style}>{children}</div>;
}

export function SectionTitle({ children, right }: { children: ReactNode; right?: ReactNode }) {
  return (
    <div className="mb-3.5 flex items-center justify-between">
      <h3 className="m-0 text-sm font-bold tracking-[-0.2px] text-head">{children}</h3>
      {right}
    </div>
  );
}

// member.color is data-driven, so the color bits stay inline.
export function Avatar({ m, size = 26 }: { m: AvatarLike; size?: number }) {
  return (
    <div className="flex shrink-0 items-center justify-center rounded-full font-bold"
      style={{ width: size, height: size, fontSize: size * 0.36, background: `${m.color}22`, border: `1.5px solid ${m.color}44`, color: m.color }}>
      {m.initials}
    </div>
  );
}

// color/bg passed in from data, so they stay inline.
export function Tag({ text, color, bg }: { text: string; color: string; bg: string }) {
  return (
    <span className="rounded px-[7px] py-0.5 text-[10px] font-bold uppercase tracking-[0.04em]" style={{ color, background: bg }}>
      {text}
    </span>
  );
}

export function StatCard({ label, value, sub, trend, accent }: {
  label: string; value: string; sub?: string; trend?: number; accent?: string;
}) {
  return (
    <Card pad="p-4" className="min-w-0 flex-1">
      <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">{label}</div>
      <div className="flex items-baseline gap-2">
        <span className="text-[26px] font-extrabold tracking-[-1px] tabular-nums text-head">{value}</span>
        {trend != null && (
          <span className={`inline-flex items-center gap-0.5 text-xs font-bold ${trend >= 0 ? "text-emerald-500" : "text-red-500"}`}>
            {trend >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}{Math.abs(trend)}%
          </span>
        )}
      </div>
      {sub && <div className="mt-1 text-xs text-sub">{sub}</div>}
      {accent && <div className="mt-3 h-[3px] rounded" style={{ background: accent }} />}
    </Card>
  );
}

// Table cell helpers — replace the old shared th/td style objects.
export function Th({ children }: { children: ReactNode }) {
  return <th className="px-[18px] py-3 text-left text-[10px] font-bold uppercase tracking-[0.06em] text-muted">{children}</th>;
}
export function Td({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <td className={`px-[18px] py-3 text-[13px] ${className}`}>{children}</td>;
}
