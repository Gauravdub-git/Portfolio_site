import type { SkillGroup } from "@/content/skills";

export function SkillCategory({ group }: { group: SkillGroup }) {
  return (
    <div className="hairline-b py-6">
      <div className="grid grid-cols-12 gap-4">
        <h3 className="col-span-12 font-display text-[13px] font-medium uppercase tracking-[0.18em] md:col-span-3">
          {group.title}
        </h3>
        <ul className="col-span-12 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px] text-foreground md:col-span-9">
          {group.items.map((item) => (
            <li key={item} className="transition-colors hover:text-accent">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
