import { Link } from "@tanstack/react-router";
import type { Project } from "@/content/projects";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className="group hairline-b grid grid-cols-12 items-baseline gap-4 py-6 transition-colors hover:bg-surface/40"
    >
      <div className="col-span-2 font-mono text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
        {project.year}
      </div>
      <div className="col-span-10 md:col-span-5">
        <h3 className="font-display text-[20px] tracking-tight transition-colors group-hover:text-accent md:text-[22px]">
          {project.title}
        </h3>
        <p className="mt-1 text-[13.5px] text-muted-foreground">
          {project.oneLiner}
        </p>
      </div>
      <div className="col-span-8 mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground md:col-span-4 md:mt-0">
        {project.stack.slice(0, 4).join(" · ")}
      </div>
      <div className="col-span-4 mt-2 text-right font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-accent md:col-span-1 md:mt-0">
        View →
      </div>
    </Link>
  );
}
