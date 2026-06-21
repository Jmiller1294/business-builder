import { TEAM } from "@/lib/data";
import { Card, Avatar } from "../ui";

export default function Team() {
  return (
    <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
      {TEAM.map((m) => (
        <Card key={m.id}>
          <div className="mb-3.5 flex items-center gap-3">
            <Avatar m={m} size={44} />
            <div><div className="text-sm font-bold text-head">{m.name}</div><div className="text-[11.5px] text-muted">{m.role}</div></div>
          </div>
          <div className="mb-[5px] text-[10px] font-bold uppercase tracking-[0.06em] text-muted">Access</div>
          <div className="rounded-lg bg-wash px-2.5 py-2 text-[12.5px] text-head">{m.access}</div>
        </Card>
      ))}
    </div>
  );
}
