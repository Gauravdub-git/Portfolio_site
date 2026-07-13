import { createFileRoute, Link } from "@tanstack/react-router";
import { profile } from "@/content/profile";
import { experience, certifications } from "@/content/experience";
import { SectionLabel } from "@/components/SectionLabel";
import { ExperienceRow } from "@/components/ExperienceRow";
import { Plate } from "@/components/Plate";
import portrait from "@/assets/portrait.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Gaurav Dubey" },
      {
        name: "description",
        content:
          "About Gaurav Dubey — a software engineer working across AI, backend, and full-stack systems. Background, timeline, and interests.",
      },
      { property: "og:title", content: "About — Gaurav Dubey" },
      {
        property: "og:description",
        content:
          "About Gaurav Dubey — a software engineer working across AI, backend, and full-stack systems.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10">
      <section className="hairline-b pb-14 pt-10 md:pt-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          Section — About
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-[56px] leading-[0.95] tracking-[-0.02em] md:text-[88px]">
          The engineer, in longer form.
        </h1>
      </section>

      <section className="grid grid-cols-1 gap-12 pt-16 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-8">
          <p className="max-w-2xl font-display text-[24px] leading-[1.3] tracking-tight md:text-[30px]">
            I'm {profile.name} — a Computer Science graduate from Rewa Engineering College, currently interning as a Software Developer at MPOnline Limited in Bhopal.
          </p>

          <div className="mt-8 max-w-2xl space-y-5 text-[16.5px] leading-[1.7] text-foreground">
            <p>
              I like building things that sit at the intersection of AI, backend systems, and honest interfaces. Most of my work lives in Python (FastAPI, scikit-learn, TensorFlow) and the JavaScript ecosystem (React, Node, TypeScript), with a growing tilt toward retrieval-augmented systems.
            </p>
            <p>
              At MPOnline I ship FastAPI endpoints that power an AI chatbot and grievance-management workflows for government portals — document processing, text chunking, and knowledge-base construction for intelligent query handling.
            </p>
            <p>
              Outside of the day job I care about clean data structures, well-drawn architecture diagrams, and the small typography choices that make a page feel calm. I play volleyball, help run E-Cell events at college, and try to keep learning in public through GitHub.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 font-mono text-[12px] uppercase tracking-[0.16em]">
            <a
              href={profile.resumeUrl}
              className="border border-foreground px-4 py-2 transition-colors hover:bg-foreground hover:text-primary-foreground"
            >
              Résumé (PDF)
            </a>
            <Link to="/contact" className="link-accent border-b border-foreground/60 pb-0.5 hover:border-accent">
              Get in touch →
            </Link>
          </div>
        </div>

        <aside className="md:col-span-4">
          <Plate src={portrait} alt={`${profile.name}, portrait`} shape="circle" contain focus="center top" className="bg-surface" />
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Fig. 02 — Portrait. {profile.location}.
          </p>
        </aside>
      </section>

      <section className="pt-24">
        <SectionLabel number="01" title="Experience & Education" />
        <div className="mt-8">
          {experience.map((item) => (
            <ExperienceRow key={`${item.role}-${item.org}`} item={item} />
          ))}
        </div>
      </section>

      <section className="pt-20">
        <SectionLabel number="02" title="Certifications" />
        <ul className="mt-8 max-w-2xl">
          {certifications.map((c) => (
            <li key={c} className="hairline-b py-4 text-[15.5px]">
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section className="pt-20">
        <SectionLabel number="03" title="Off the clock" />
        <div className="mt-10 grid grid-cols-1 gap-8 text-[15.5px] leading-[1.6] md:grid-cols-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Reading</p>
            <p className="mt-3">System design write-ups, engineering blogs from Vercel, Stripe, and Linear, and the occasional ML paper.</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Playing</p>
            <p className="mt-3">Volleyball with the college side. Long, sweaty, useful for context switching.</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Organizing</p>
            <p className="mt-3">E-Cell workshops — helping students who want to start something ship a first version.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
