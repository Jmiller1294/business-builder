import Link from "next/link";
import type { TenantConfig } from "@/lib/config-schema/schema";

const NAV = [
  { id: "board", label: "Board", href: "/board" },
  { id: "team", label: "Team", href: "/team" },
  { id: "activity", label: "Activity", href: "/activity" },
];

export function Sidebar({
  config,
  active,
}: {
  config: TenantConfig;
  active: string;
}) {
  return (
    <aside className="w-[215px] bg-ink border-r border-line flex flex-col shrink-0">
      <div className="p-4">
        <div className="bg-panel2 border border-line rounded-lg px-3 py-2">
          <div className="text-lg">{config.emoji}</div>
          <div className="text-chalk text-sm font-bold">{config.name}</div>
          <div className="text-ghost text-[10px]">
            {config.label} operations
          </div>
        </div>
      </div>
      <nav className="px-2 flex-1">
        {NAV.map((n) => (
          <Link
            key={n.id}
            href={n.href}
            className={`block px-3 py-2 rounded-lg text-sm mb-0.5 ${
              active === n.id
                ? "bg-panel2 text-chalk font-semibold"
                : "text-ghost"
            }`}
          >
            {n.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}