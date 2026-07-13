import { Link } from "@tanstack/react-router";
import type { Project } from "@/content/projects";
import { Plate } from "./Plate";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="group grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-7">
        <Link
          to="/work/$slug"
          params={{ slug: project.slug }}
          className="block"
          aria-label={`${project.title} — case study`}
        >
          <Plate
            src={project.cover}
            alt={`${project.title} cover`}
            aspect="16 / 10"
          />
        </Link>
      </div>

      <div className="md:col-span-5 md:pt-4">
        <div className="flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <span>Plate No. {String(index + 1).padStart(2, "0")}</span>
          <span>{project.year}</span>
        </div>

        <h3 className="mt-4 font-display text-[28px] leading-[1.05] tracking-tight md:text-[32px]">
          <Link
            to="/work/$slug"
            params={{ slug: project.slug }}
            className="link-accent"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-3 max-w-lg text-[15px] leading-[1.55] text-muted-foreground">
          {project.oneLiner}
        </p>

        <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          {project.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px]">
          <Link
            to="/work/$slug"
            params={{ slug: project.slug }}
            className="link-accent border-b border-foreground/60 pb-0.5 font-mono uppercase tracking-[0.16em] hover:border-accent"
          >
            Read case study →
          </Link>
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="link-accent font-mono uppercase tracking-[0.16em] text-muted-foreground hover:text-accent"
            >
              GitHub ↗
            </a>
          ) : null}
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="link-accent font-mono uppercase tracking-[0.16em] text-muted-foreground hover:text-accent"
            >
              Live demo ↗
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
