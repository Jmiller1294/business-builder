"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid, Layers, Calendar, CheckSquare, Clock, Users, Contact,
  MessageSquare, Receipt, Wallet, BarChart3, FolderOpen, Activity, Settings, Zap,
} from "lucide-react";

type Item = { href: string; label: string; Icon: typeof LayoutGrid; badge?: string };
const NAV: { group: string | null; items: Item[] }[] = [
  { group: null, items: [{ href: "/dashboard/overview", label: "Overview", Icon: LayoutGrid, badge: "1" }] },
  { group: "Work", items: [
    { href: "/dashboard/board", label: "Board", Icon: Layers },
    { href: "/dashboard/schedule", label: "Schedule", Icon: Calendar },
    { href: "/dashboard/checklists", label: "Checklists & SOPs", Icon: CheckSquare },
    { href: "/dashboard/time", label: "Time Tracking", Icon: Clock },
  ]},
  { group: "People", items: [
    { href: "/dashboard/team", label: "Team", Icon: Users },
    { href: "/dashboard/clients", label: "Clients", Icon: Contact },
    { href: "/dashboard/messages", label: "Messages", Icon: MessageSquare },
  ]},
  { group: "Money", items: [
    { href: "/dashboard/invoices", label: "Invoices", Icon: Receipt },
    { href: "/dashboard/expenses", label: "Expenses", Icon: Wallet },
  ]},
  { group: "Insights", items: [
    { href: "/dashboard/reports", label: "Reports", Icon: BarChart3 },
    { href: "/dashboard/files", label: "Files", Icon: FolderOpen },
    { href: "/dashboard/activity", label: "Activity", Icon: Activity },
  ]},
];

export function Sidebar() {
  const pathname = usePathname();
  const itemCls = (on: boolean) =>
    `mb-px flex w-full items-center gap-2.5 rounded-lg  px-2.5 py-2 text-[12.5px] no-underline ${
      on ? "border-brand2 bg-panel2 font-semibold text-chalk border-l-2" : "text-white"
    }`;

  return (
    <aside className="flex w-[224px] shrink-0 flex-col overflow-y-auto border-r border-line bg-ink">
      <div className="px-4 pb-2.5 pt-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-gradient-to-br from-brand to-violet">
            <Zap size={15} color="#fff" />
          </div>
          <div>
            <div className="text-[13px] font-extrabold tracking-[-0.3px] text-chalk">Evergreen Grounds</div>
            <div className="text-[10px] text-ghost">Operations</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-2.5 py-1.5">
        {NAV.map((sec, si) => (
          <div key={si} className="mb-2.5">
            {sec.group && <div className="px-2.5 pb-1 pt-1.5 text-[9.5px] font-bold uppercase tracking-[0.1em] text-[#3A4A66]">{sec.group}</div>}
            {sec.items.map(({ href, label, Icon, badge }) => {
              const on = pathname === href;
              return (
                <Link key={href} href={href} className={itemCls(on)}>
                  <Icon size={15} /><span className={on ? "font-semibold" : "font-medium"}>{label}</span>
                  {badge && <span className="ml-auto rounded-full bg-red-500/20 px-1.5 text-[9.5px] font-bold text-red-400">{badge}</span>}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="border-t border-line p-2.5">
        <Link href="/dashboard/settings" className={itemCls(pathname === "/dashboard/settings")}>
          <Settings size={15} /><span className="font-medium">Settings</span>
        </Link>
      </div>
    </aside>
  );
}
