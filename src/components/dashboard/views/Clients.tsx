import { CLIENTS } from "@/lib/data";
import { Card, Tag, Th, Td } from "../ui";

const sColor: Record<string, [string, string]> = {
  Active: ["#4F46E5", "#EEF2FF"], Recurring: ["#059669", "#D1FAE5"], New: ["#D97706", "#FFFBEB"],
};

export default function Clients() {
  return (
    <Card pad="p-0">
      <table className="w-full border-collapse">
        <thead><tr>{["Client", "Contact", "Phone", "Jobs", "Lifetime value", "Status"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
        <tbody>
          {CLIENTS.map((c) => (
            <tr key={c.name} className="border-t border-wash">
              <Td className="font-bold text-head">{c.name}</Td>
              <Td className="text-sub">{c.contact}</Td>
              <Td className="text-sub">{c.phone}</Td>
              <Td className="text-head">{c.jobs}</Td>
              <Td className="font-bold text-head">${c.ltv.toLocaleString()}</Td>
              <Td><Tag text={c.status} color={sColor[c.status][0]} bg={sColor[c.status][1]} /></Td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
