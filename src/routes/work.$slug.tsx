import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getAdjacentProjects, getProject } from "@/content/projects";
import { SectionLabel } from "@/components/SectionLabel";
import { Plate } from "@/components/Plate";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Gaurav Dubey" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Case Study`;
    return {
      meta: [
        { title },
        { name: "description", content: project.oneLiner },
        { property: "og:title", content: title },
        { property: "og:description", content: project.oneLiner },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
        { property: "og:image", content: project.cover },
        { name: "twitter:image", content: project.cover },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: project.title,
            description: project.oneLiner,
            author: { "@type": "Person", name: "Gaurav Dubey" },
            datePublished: project.year,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        404 — Case study not found
      </p>
      <h1 className="mt-4 font-display text-[56px] leading-[0.95] tracking-tight md:text-[80px]">
        No entry at this slug.
      </h1>
      <Link to="/work" className="link-accent mt-8 inline-block border-b border-foreground pb-0.5 font-mono text-[12px] uppercase tracking-[0.16em] hover:border-accent">
        Back to archive →
      </Link>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <article className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10">
      {/* Header */}
      <header className="hairline-b pb-10 pt-10 md:pt-14">
        <div className="flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <Link to="/work" className="hover:text-accent">← Work</Link>
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h1 className="mt-8 max-w-4xl font-display text-[56px] leading-[0.95] tracking-[-0.02em] md:text-[96px]">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-[18px] leading-[1.5] text-muted-foreground md:text-[20px]">
          {project.oneLiner}
        </p>

        <dl className="hairline mt-10 grid grid-cols-2 gap-6 pt-8 font-mono text-[12px] uppercase tracking-[0.14em] md:grid-cols-4">
          <div>
            <dt className="text-muted-foreground">Role</dt>
            <dd className="mt-1">{project.role}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Year</dt>
            <dd className="mt-1">{project.year}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Stack</dt>
            <dd className="mt-1 leading-[1.5]">{project.stack.join(" · ")}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Links</dt>
            <dd className="mt-1 flex flex-col gap-1">
              {project.links.github ? (
                <a className="link-accent hover:text-accent" href={project.links.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              ) : null}
              {project.links.demo ? (
                <a className="link-accent hover:text-accent" href={project.links.demo} target="_blank" rel="noreferrer">
                  Live demo ↗
                </a>
              ) : null}
              {!project.links.github && !project.links.demo ? (
                <span className="text-muted-foreground">Private</span>
              ) : null}
            </dd>
          </div>
        </dl>
      </header>

      {/* Hero image */}
      <div className="mt-12">
        <Plate src={project.cover} alt={`${project.title} cover`} aspect="16 / 9" priority />
      </div>

      {/* Body */}
      <div className="mt-24 grid grid-cols-1 gap-16 md:grid-cols-12">
        <div className="md:col-span-12 md:col-start-1 lg:col-span-10 lg:col-start-2">
          <CaseSection number="01" title="Overview">
            <Prose>{project.overview}</Prose>
          </CaseSection>

          <CaseSection number="02" title="Problem statement">
            <Prose>{project.problem}</Prose>
          </CaseSection>

          <CaseSection number="03" title="Architecture">
            <ul className="space-y-4 text-[16px] leading-[1.65] text-foreground">
              {project.architecture.map((line: string, i: number) => (
                <li key={i} className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection number="04" title="Tech stack">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13.5px]">
              {project.stack.map((s: string) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection number="05" title="Features">
            <BulletList items={project.features} />
          </CaseSection>

          <CaseSection number="06" title="Challenges">
            <BulletList items={project.challenges} />
          </CaseSection>

          <CaseSection number="07" title="Results">
            <BulletList items={project.results} />
          </CaseSection>

          <CaseSection number="08" title="Lessons learned">
            <BulletList items={project.lessons} />
          </CaseSection>

          <CaseSection number="09" title="Links">
            <div className="flex flex-wrap gap-4">
              {project.links.github ? (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-foreground px-5 py-3 font-mono text-[12px] uppercase tracking-[0.16em] transition-colors hover:bg-foreground hover:text-primary-foreground"
                >
                  GitHub ↗
                </a>
              ) : null}
              {project.links.demo ? (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-foreground px-5 py-3 font-mono text-[12px] uppercase tracking-[0.16em] transition-colors hover:bg-foreground hover:text-primary-foreground"
                >
                  Live demo ↗
                </a>
              ) : null}
              <Link
                to="/contact"
                className="border border-foreground px-5 py-3 font-mono text-[12px] uppercase tracking-[0.16em] transition-colors hover:bg-foreground hover:text-primary-foreground"
              >
                Discuss this project →
              </Link>
            </div>
          </CaseSection>
        </div>
      </div>

      {/* Prev / next */}
      <nav className="hairline mt-24 grid grid-cols-1 gap-8 pt-10 md:grid-cols-2 md:gap-16" aria-label="Project navigation">
        <div>
          {prev ? (
            <Link
              to="/work/$slug"
              params={{ slug: prev.slug }}
              className="group block"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">← Previous</p>
              <p className="mt-2 font-display text-[24px] tracking-tight transition-colors group-hover:text-accent md:text-[28px]">
                {prev.title}
              </p>
            </Link>
          ) : null}
        </div>
        <div className="md:text-right">
          {next ? (
            <Link
              to="/work/$slug"
              params={{ slug: next.slug }}
              className="group block"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Next →</p>
              <p className="mt-2 font-display text-[24px] tracking-tight transition-colors group-hover:text-accent md:text-[28px]">
                {next.title}
              </p>
            </Link>
          ) : null}
        </div>
      </nav>
    </article>
  );
}

function CaseSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-14 first:pt-0">
      <SectionLabel number={number} title={title} />
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-3xl text-[16.5px] leading-[1.7] text-foreground md:text-[17.5px]">
      {children}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="max-w-3xl space-y-3 text-[16px] leading-[1.65]">
      {items.map((it, i) => (
        <li key={i} className="hairline-b pb-3 last:border-b-0">
          {it}
        </li>
      ))}
    </ul>
  );
}
