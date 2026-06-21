"use client";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";
import { CHART } from "@/lib/theme";
import { REVENUE, STAGE_LOAD } from "@/lib/data";
import { Card, SectionTitle, StatCard } from "../ui";

export default function Reports() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3.5">
        <StatCard label="Jobs Completed · Jun" value="14" trend={8} accent="#10B981" />
        <StatCard label="Avg Job Duration" value="2.3 days" sub="down from 2.8" accent="#6366F1" />
        <StatCard label="On-time Rate" value="86%" trend={4} accent="#F59E0B" />
        <StatCard label="Repeat Clients" value="62%" sub="of revenue" accent="#8B5CF6" />
      </div>
      <div className="flex gap-4">
        <Card className="flex-1">
          <SectionTitle>Revenue (last 6 months)</SectionTitle>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={REVENUE} margin={{ top: 5, right: 8, left: -22, bottom: 0 }}>
              <XAxis dataKey="m" tick={{ fontSize: 11, fill: CHART.axis }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: CHART.axis }} axisLine={false} tickLine={false} />
              <Tooltip formatter={(v: number) => [`$${v}k`, "Revenue"]} />
              <Line type="monotone" dataKey="v" stroke={CHART.line} strokeWidth={2.5} dot={{ r: 3, fill: CHART.line }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        <Card className="flex-1">
          <SectionTitle>Where jobs sit right now</SectionTitle>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={STAGE_LOAD} margin={{ top: 5, right: 8, left: -22, bottom: 0 }}>
              <XAxis dataKey="name" tick={{ fontSize: 9, fill: CHART.axis }} axisLine={false} tickLine={false} interval={0} />
              <YAxis tick={{ fontSize: 11, fill: CHART.axis }} axisLine={false} tickLine={false} allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                {STAGE_LOAD.map((s, i) => <Cell key={i} fill={s.color} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
