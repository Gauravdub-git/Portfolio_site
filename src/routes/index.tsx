import { createFileRoute, Link } from "@tanstack/react-router";
import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { experience, certifications } from "@/content/experience";
import { skills, coreCS } from "@/content/skills";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceRow } from "@/components/ExperienceRow";
import { SkillCategory } from "@/components/SkillCategory";
import { Plate } from "@/components/Plate";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import portrait from "@/assets/portrait.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gaurav Dubey — Software Engineer | AI & Full Stack Developer" },
      {
        name: "description",
        content:
          "Software engineer building AI-powered applications, scalable backend systems, and modern web experiences. Selected work, experience, and case studies.",
      },
      {
        property: "og:title",
        content: "Gaurav Dubey — Software Engineer",
      },
      {
        property: "og:description",
        content:
          "Software engineer building AI-powered applications, scalable backend systems, and modern web experiences.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10">
      <Hero />
      <FeaturedWork />
      <ExperienceSection />
      <SkillsSection />
      <AboutContactStrip />

    </div>
  );
}

function Hero() {
  return (
    <section className="hairline-b pb-14 pt-10 md:pt-16">
      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        <span>Portfolio — Edition 01</span>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            The masthead
          </p>
          <h1 className="mt-4 font-display text-[56px] font-medium leading-[0.92] tracking-[-0.03em] md:text-[104px]">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl font-display text-[19px] leading-[1.35] tracking-tight text-foreground md:text-[22px]">
            {profile.title}
          </p>
          <p className="mt-5 max-w-xl text-[16px] leading-[1.6] text-muted-foreground md:text-[17px]">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[12px] uppercase tracking-[0.16em]">
            <a
              href={profile.resumeUrl}
              className="border border-foreground px-4 py-2 transition-colors hover:bg-foreground hover:text-primary-foreground"
            >
              Résumé
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="link-accent border-b border-foreground/60 pb-0.5 hover:border-accent"
            >
              GitHub ↗
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="link-accent border-b border-foreground/60 pb-0.5 hover:border-accent"
            >
              LinkedIn ↗
            </a>
            <Link
              to="/contact"
              className="link-accent border-b border-foreground/60 pb-0.5 hover:border-accent"
            >
              Contact →
            </Link>
          </div>
        </div>

        <div className="md:col-span-4">
          <Plate
            src={portrait}
            alt={`${profile.name}, portrait`}
            shape="circle"
            priority
            focus="center 20%"
            className="md:mt-2 bg-surface [&_img]:scale-125"
          />
        </div>

      </div>
    </section>
  );
}

function FeaturedWork() {
  return (
    <section id="work" className="pt-20">
      <SectionLabel
        number="01"
        title="Featured Work"
        aside={<Link to="/work" className="link-accent hover:text-accent">All projects →</Link>}
      />

      <div className="mt-14 space-y-24">
        {featuredProjects.map((p, i) => (
          <RevealOnScroll key={p.slug} delay={i * 60} as="div">
            <ProjectCard project={p} index={i} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="pt-24">
      <SectionLabel number="02" title="Experience & Education" />

      <div className="mt-8">
        {experience.map((item) => (
          <ExperienceRow key={`${item.role}-${item.org}`} item={item} />
        ))}
      </div>

      <div className="hairline-b grid grid-cols-12 gap-4 py-8 md:gap-8">
        <div className="col-span-12 md:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Certifications
          </p>
        </div>
        <ul className="col-span-12 space-y-2 text-[14.5px] text-foreground md:col-span-9">
          {certifications.map((c) => (
            <li key={c} className="hairline-b pb-2 last:border-b-0">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="pt-24">
      <SectionLabel number="03" title="Skills" />

      <div className="mt-6">
        {skills.map((g) => (
          <SkillCategory key={g.title} group={g} />
        ))}

        <div className="hairline-b py-6">
          <div className="grid grid-cols-12 gap-4">
            <h3 className="col-span-12 font-display text-[13px] font-medium uppercase tracking-[0.18em] md:col-span-3">
              Core CS
            </h3>
            <ul className="col-span-12 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px] md:col-span-9">
              {coreCS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutContactStrip() {
  return (
    <section id="about" className="pt-24">
      <SectionLabel
        number="04"
        title="About & Contact"
        aside={<Link to="/about" className="link-accent hover:text-accent">Full biography →</Link>}
      />
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-8">
          <p className="max-w-2xl font-display text-[24px] leading-[1.3] tracking-tight md:text-[30px]">
            Computer Science graduate from Rewa Engineering College. I build backend systems with FastAPI and Node, ship AI features with modern retrieval architectures, and care about clean interfaces on top of both.
          </p>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.65] text-muted-foreground">
            Currently interning as a Software Developer at MPOnline Limited, where I build FastAPI services for AI chatbots and government grievance-management portals — document processing, knowledge bases, and RAG-style query handling.
          </p>
        </div>
        <div className="md:col-span-4">
          <dl className="space-y-4 font-mono text-[12px] uppercase tracking-[0.16em]">
            <div>
              <dt className="text-muted-foreground">Based</dt>
              <dd className="mt-1">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Interests</dt>
              <dd className="mt-1 leading-[1.6]">RAG systems · Backend architecture · Open source · Volleyball · E-Cell</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Status</dt>
              <dd className="mt-1 leading-[1.6] normal-case tracking-normal font-body text-[14px] text-foreground">
                {profile.availability}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div id="contact" className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="max-w-2xl font-display text-[32px] leading-[1.1] tracking-tight md:text-[48px]">
            The best way to start something is to write.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="link-accent mt-6 inline-block border-b border-foreground/60 pb-1 font-display text-[22px] hover:border-accent md:text-[28px]"
          >
            {profile.email} →
          </a>
        </div>
        <div className="md:col-span-4">
          <ul className="space-y-3 font-mono text-[13px]">
            <li><a className="link-accent" href={profile.socials.github} target="_blank" rel="noreferrer">GitHub ↗</a></li>
            <li><a className="link-accent" href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
            <li><a className="link-accent" href={profile.resumeUrl}>Résumé (PDF)</a></li>
            <li><Link to="/contact" className="link-accent">Full contact page →</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

