import { EXPENSES } from "@/lib/data";
import { Card, SectionTitle, Tag, Th, Td } from "../ui";

const catColor: Record<string, string> = {
  Materials: "#6366F1", Vehicle: "#F59E0B", Equipment: "#10B981", Disposal: "#8B5CF6",
};

export default function Expenses() {
  const total = EXPENSES.reduce((s, e) => s + e.amount, 0);
  return (
    <Card pad="p-0">
      <div className="flex items-center justify-between border-b border-wash px-[18px] py-4">
        <SectionTitle>This Month&apos;s Expenses</SectionTitle>
        <span className="text-[13px] font-bold text-head">${total.toLocaleString()} total</span>
      </div>
      <table className="w-full border-collapse">
        <thead><tr>{["Item", "Category", "Date", "Amount"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
        <tbody>
          {EXPENSES.map((e, i) => (
            <tr key={i} className="border-t border-wash">
              <Td className="font-semibold text-head">{e.item}</Td>
              <Td><Tag text={e.category} color={catColor[e.category]} bg={`${catColor[e.category]}18`} /></Td>
              <Td className="text-sub">{e.date}</Td>
              <Td className="font-bold text-head">${e.amount}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
