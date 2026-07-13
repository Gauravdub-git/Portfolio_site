import type { Experience } from "@/content/experience";

const kindLabel: Record<Experience["kind"], string> = {
  work: "Current",
  internship: "Internship",
  education: "Education",
  activity: "Activities",
};

export function ExperienceRow({ item }: { item: Experience }) {
  return (
    <article className="hairline-b grid grid-cols-12 gap-4 py-8 md:gap-8">
      <div className="col-span-12 md:col-span-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {kindLabel[item.kind]}
        </p>
        <p className="mt-1 font-mono text-[13px] uppercase tracking-[0.14em]">
          {item.period}
        </p>
      </div>
      <div className="col-span-12 md:col-span-9">
        <h3 className="font-display text-[22px] tracking-tight md:text-[24px]">
          {item.role}
        </h3>
        <p className="mt-1 text-[14px] text-muted-foreground">
          {item.org}
          {item.location ? ` · ${item.location}` : ""}
        </p>
        <p className="mt-4 max-w-2xl text-[15px] leading-[1.6]">
          {item.summary}
        </p>
        {item.bullets ? (
          <ul className="mt-4 max-w-2xl list-disc space-y-1.5 pl-4 text-[14.5px] leading-[1.55] text-muted-foreground marker:text-foreground/40">
            {item.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        ) : null}
        {item.stack ? (
          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {item.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
