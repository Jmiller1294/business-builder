import { TIME_ENTRIES, team } from "@/lib/data";
import { Card, SectionTitle, Avatar, Th, Td } from "../ui";

export default function TimeTracking() {
  const total = TIME_ENTRIES.reduce((s, e) => s + e.hours, 0);
  return (
    <Card pad="p-0">
      <div className="flex items-center justify-between border-b border-wash px-[18px] py-4">
        <SectionTitle>Hours This Week</SectionTitle>
        <span className="text-[13px] font-bold text-brand">{total} hrs logged</span>
      </div>
      <table className="w-full border-collapse">
        <thead><tr>{["Team member", "Job", "Day", "Hours"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
        <tbody>
          {TIME_ENTRIES.map((e, i) => (
            <tr key={i} className="border-t border-wash">
              <Td><div className="flex items-center gap-2"><Avatar m={team(e.member)} size={24} /><span className="font-semibold text-head">{team(e.member).name}</span></div></Td>
              <Td className="text-sub">{e.job}</Td>
              <Td className="text-sub">{e.day}</Td>
              <Td className="font-bold text-head">{e.hours}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
