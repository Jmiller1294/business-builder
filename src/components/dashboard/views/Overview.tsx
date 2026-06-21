"use client";
import Link from "next/link";
import { ChevronRight, AlertTriangle, Receipt, Circle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { PRIORITY, CHART } from "@/lib/theme";
import { JOBS, ACTIVITY, REVENUE, team } from "@/lib/data";
import { Card, SectionTitle, StatCard, Avatar } from "../ui";

const link = "inline-flex items-center gap-0.5 text-xs font-semibold text-brand2 no-underline";

export default function Overview() {
  const todays = JOBS.filter((j) => ["in_progress", "scheduled"].includes(j.stage)).slice(0, 4);
  const attention = [
    { Icon: AlertTriangle, color: "#EF4444", text: "Chen — Tree Trimming is overdue", sub: "Punch List · 2 days late" },
    { Icon: Receipt, color: "#F59E0B", text: "INV-1042 unpaid — $1,450", sub: "Chen Property · 14 days overdue" },
    { Icon: Circle, color: "#8B5CF6", text: "Park Estates quote awaiting reply", sub: "Sent 6 days ago" },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3.5">
        <StatCard label="Active Jobs" value="7" sub="2 in progress" trend={12} accent="#6366F1" />
        <StatCard label="Overdue" value="1" sub="needs attention" accent="#EF4444" />
        <StatCard label="Revenue · Jun" value="$42k" sub="vs $38k in May" trend={11} accent="#10B981" />
        <StatCard label="Outstanding" value="$6.2k" sub="2 unpaid invoices" accent="#F59E0B" />
      </div>

      <div className="flex items-start gap-4">
        <div className="flex flex-[2] flex-col gap-4">
          <Card>
            <SectionTitle right={<Link href="/dashboard/schedule" className={link}>View schedule <ChevronRight size={13} /></Link>}>Today&apos;s Schedule</SectionTitle>
            {todays.map((j) => (
              <div key={j.id} className="flex items-center gap-3 border-b border-wash py-2.5">
                <div className="h-[34px] w-[3px] rounded" style={{ background: PRIORITY[j.priority].border }} />
                <div className="flex-1">
                  <div className="text-[13px] font-semibold text-head">{j.title}</div>
                  <div className="text-[11px] text-muted">{j.client} · due {j.due}</div>
                </div>
                <div className="flex gap-1">{j.assignees.map((a:any) => <Avatar key={a} m={team(a)} size={24} />)}</div>
              </div>
            ))}
          </Card>

          <Card>
            <SectionTitle right={<Link href="/dashboard/reports" className={link}>Reports <ChevronRight size={13} /></Link>}>Revenue Trend</SectionTitle>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={REVENUE} margin={{ top: 5, right: 8, left: -22, bottom: 0 }}>
                <XAxis dataKey="m" tick={{ fontSize: 11, fill: CHART.axis }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: CHART.axis }} axisLine={false} tickLine={false} />
                <Tooltip formatter={(v: any) => [`$${v}k`, "Revenue"]} />
                <Line type="monotone" dataKey="v" stroke={CHART.line} strokeWidth={2.5} dot={{ r: 3, fill: CHART.line }} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <Card>
            <SectionTitle>Needs Attention</SectionTitle>
            {attention.map((a, i) => (
              <div key={i} className={`flex gap-2.5 py-2 ${i < 2 ? "border-b border-wash" : ""}`}>
                <a.Icon size={15} color={a.color} className="mt-0.5 shrink-0" />
                <div>
                  <div className="text-[12.5px] font-semibold leading-snug text-head">{a.text}</div>
                  <div className="text-[11px] text-muted">{a.sub}</div>
                </div>
              </div>
            ))}
          </Card>
          <Card>
            <SectionTitle right={<Link href="/dashboard/activity" className={link}>All <ChevronRight size={13} /></Link>}>Recent Activity</SectionTitle>
            {ACTIVITY.slice(0, 4).map((a, i) => (
              <div key={i} className="flex gap-2 py-[7px]">
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand2" />
                <div className="text-xs leading-snug text-sub">
                  <strong className="text-head">{a.actor}</strong> {a.action}
                  <div className="text-[10.5px] text-muted">{a.time}</div>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
