import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/content/projects";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectRow } from "@/components/ProjectRow";
import { ProjectCard } from "@/components/ProjectCard";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Gaurav Dubey" },
      {
        name: "description",
        content:
          "A complete archive of projects by Gaurav Dubey — AI, backend, and full-stack engineering case studies.",
      },
      { property: "og:title", content: "Work — Gaurav Dubey" },
      {
        property: "og:description",
        content:
          "A complete archive of projects — AI, backend, and full-stack engineering case studies.",
      },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10">
      <section className="hairline-b pb-14 pt-10 md:pt-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          Section — Work Archive
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-[56px] leading-[0.95] tracking-[-0.02em] md:text-[88px]">
          Projects, in full.
        </h1>
        <p className="mt-6 max-w-xl text-[16px] leading-[1.6] text-muted-foreground md:text-[17px]">
          A running archive of engineering work — from deep-learning classifiers to full-stack platforms. Each entry links to a case study with problem, architecture, tradeoffs, and results.
        </p>
      </section>

      <section className="pt-16">
        <SectionLabel number="01" title="Featured" />
        <div className="mt-12 space-y-20">
          {projects
            .filter((p) => p.featured)
            .map((p, i) => (
              <RevealOnScroll key={p.slug} delay={i * 60}>
                <ProjectCard project={p} index={i} />
              </RevealOnScroll>
            ))}
        </div>
      </section>

      <section className="pt-24">
        <SectionLabel number="02" title="All Projects" aside={<span>{projects.length} entries</span>} />
        <div className="mt-4">
          {projects.map((p) => (
            <ProjectRow key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
