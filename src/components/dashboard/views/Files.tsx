import { FileText } from "lucide-react";
import { FILES } from "@/lib/data";
import { Card, Tag } from "../ui";

const kindColor: Record<string, string> = {
  Contract: "#6366F1", Photo: "#10B981", Quote: "#F59E0B", Signature: "#8B5CF6",
};

export default function Files() {
  return (
    <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fill,minmax(220px,1fr))]">
      {FILES.map((f) => (
        <Card key={f.name} pad="p-3.5">
          <div className="mb-2.5 flex items-center gap-2.5">
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg" style={{ background: `${kindColor[f.kind]}18` }}>
              <FileText size={16} color={kindColor[f.kind]} />
            </div>
            <Tag text={f.kind} color={kindColor[f.kind]} bg={`${kindColor[f.kind]}18`} />
          </div>
          <div className="mb-[3px] break-all text-[13px] font-semibold text-head">{f.name}</div>
          <div className="text-[11px] text-muted">{f.job} · {f.size}</div>
        </Card>
      ))}
    </div>
  );
}
