import type { TeamMember } from "@/lib/config-schema/schema";

export function Avatar({
  member,
  size = 28,
}: {
  member: TeamMember;
  size?: number;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: member.color + "22",
        border: `1.5px solid ${member.color}44`,
        color: member.color,
        fontSize: size * 0.36,
      }}
      className="flex items-center justify-center font-bold shrink-0"
    >
      {member.initials}
    </div>
  );
}
