"use client";
import { usePathname } from "next/navigation";
import { Search, Bell, Sparkles } from "lucide-react";
import { Avatar } from "./ui";

const TITLES: Record<string, string> = {
  overview: "Overview", board: "Job Board", schedule: "Schedule",
  checklists: "Checklists & SOPs", time: "Time Tracking", team: "Team",
  clients: "Clients", messages: "Messages", invoices: "Invoices",
  expenses: "Expenses", reports: "Reports & Insights", files: "Files",
  activity: "Activity", settings: "Settings",
};

export function Topbar() {
  const seg = usePathname().split("/").pop() ?? "overview";
  const title = TITLES[seg] ?? "Overview";
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-edge bg-white px-6">
      <h1 className="m-0 text-base font-extrabold tracking-[-0.4px] text-head">{title}</h1>
      <div className="flex items-center gap-3.5">
        <div className="flex w-[220px] items-center gap-[7px] rounded-lg border border-edge bg-wash px-3 py-1.5">
          <Search size={14} className="text-muted" />
          <input placeholder="Search jobs, clients..." className="w-full border-none bg-transparent text-[12.5px] text-head outline-none" />
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-[#C7D2FE] bg-[#EEF2FF] px-[11px] py-[5px]">
          <Sparkles size={11} className="text-brand2" /><span className="text-[11px] font-semibold text-brand">AI-configured</span>
        </div>
        <div className="relative">
          <Bell size={18} className="text-sub" />
          <span className="absolute -right-[3px] -top-[3px] h-[7px] w-[7px] rounded-full border-[1.5px] border-white bg-red-500" />
        </div>
        <Avatar m={{ initials: "JL", color: "#6366F1" }} size={30} />
      </div>
    </header>
  );
}
