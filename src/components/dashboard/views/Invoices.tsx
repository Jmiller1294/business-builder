import { INVOICES } from "@/lib/data";
import { Card, StatCard, Tag, Th, Td } from "../ui";

const sColor: Record<string, [string, string]> = {
  Paid: ["#059669", "#D1FAE5"], Sent: ["#4F46E5", "#EEF2FF"], Overdue: ["#DC2626", "#FEF2F2"],
};

export default function Invoices() {
  const outstanding = INVOICES.filter((i) => i.status !== "Paid").reduce((s, i) => s + i.amount, 0);
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex gap-3.5">
        <StatCard label="Outstanding" value={`$${outstanding.toLocaleString()}`} sub="2 unpaid" accent="#F59E0B" />
        <StatCard label="Paid · Jun" value="$5,800" sub="2 invoices" accent="#10B981" />
        <StatCard label="Overdue" value="$1,450" sub="INV-1042" accent="#EF4444" />
      </div>
      <Card pad="p-0">
        <table className="w-full border-collapse">
          <thead><tr>{["Invoice", "Client", "Amount", "Due", "Status"].map((h) => <Th key={h}>{h}</Th>)}</tr></thead>
          <tbody>
            {INVOICES.map((inv) => (
              <tr key={inv.id} className="border-t border-wash">
                <Td className="font-bold text-head">{inv.id}</Td>
                <Td className="text-sub">{inv.client}</Td>
                <Td className="font-bold text-head">${inv.amount.toLocaleString()}</Td>
                <Td className="text-sub">{inv.due}</Td>
                <Td><Tag text={inv.status} color={sColor[inv.status][0]} bg={sColor[inv.status][1]} /></Td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
