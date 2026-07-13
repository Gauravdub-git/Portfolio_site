import type { ReactNode } from "react";

type Props = {
  number: string;
  title: string;
  aside?: ReactNode;
};

export function SectionLabel({ number, title, aside }: Props) {
  return (
    <div className="hairline-b flex items-baseline justify-between gap-6 pb-3">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          {number}
        </span>
        <h2 className="font-display text-[13px] font-medium uppercase tracking-[0.18em]">
          {title}
        </h2>
      </div>
      {aside ? (
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {aside}
        </div>
      ) : null}
    </div>
  );
}
