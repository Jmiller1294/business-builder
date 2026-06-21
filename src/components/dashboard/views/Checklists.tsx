import { Card } from "../ui";

const SOPS = [
  { stage: "In Progress", color: "#F59E0B", items: ["Take before photo", "Confirm gate code with client", "Equipment & safety check", "Mark arrival time"] },
  { stage: "Punch List", color: "#EF4444", items: ["Take after photo", "Client walkthrough completed", "All debris removed", "Client sign-off captured"] },
  { stage: "Complete", color: "#10B981", items: ["Final quality inspection", "Photos uploaded to job", "Ready to invoice"] },
];

export default function Checklists() {
  return (
    <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
      {SOPS.map((sop) => (
        <Card key={sop.stage}>
          <div className="mb-3.5 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full" style={{ background: sop.color }} />
            <span className="text-[13px] font-bold text-head">{sop.stage}</span>
            <span className="ml-auto text-[11px] text-muted">{sop.items.length} steps</span>
          </div>
          {sop.items.map((it, i) => (
            <div key={i} className={`flex items-center gap-2.5 py-2 ${i < sop.items.length - 1 ? "border-b border-wash" : ""}`}>
              <span className="h-4 w-4 shrink-0 rounded border-[1.5px] border-edge" />
              <span className="text-[12.5px] text-head">{it}</span>
            </div>
          ))}
        </Card>
      ))}
    </div>
  );
}
