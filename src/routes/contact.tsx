import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/content/profile";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Gaurav Dubey" },
      {
        name: "description",
        content:
          "Get in touch with Gaurav Dubey about software engineering, AI, and full-stack opportunities.",
      },
      { property: "og:title", content: "Contact — Gaurav Dubey" },
      {
        property: "og:description",
        content:
          "Currently open to software engineering and AI-focused opportunities.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10">
      <section className="hairline-b pb-14 pt-10 md:pt-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          Section — Contact
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-[56px] leading-[0.95] tracking-[-0.02em] md:text-[104px]">
          Let's talk.
        </h1>
        <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-muted-foreground md:text-[19px]">
          {profile.availability}
        </p>
      </section>

      <section className="pt-16">
        <SectionLabel number="01" title="Direct" />
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Email
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="link-accent mt-3 inline-block border-b border-foreground/60 pb-1 font-display text-[36px] leading-[1] tracking-tight hover:border-accent md:text-[56px]"
            >
              {profile.email}
            </a>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Phone
                </p>
                <p className="mt-2 font-display text-[20px]">{profile.phone}</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Based in
                </p>
                <p className="mt-2 font-display text-[20px]">{profile.location}</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Elsewhere
            </p>
            <ul className="mt-4 space-y-3 font-body text-[16px]">
              <li>
                <a className="link-accent" href={profile.socials.github} target="_blank" rel="noreferrer">
                  github.com/Gauravdub-git ↗
                </a>
              </li>
              <li>
                <a className="link-accent" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
                  linkedin.com/in/gaurav-dubey ↗
                </a>
              </li>
              <li>
                <a className="link-accent" href={profile.resumeUrl}>
                  Résumé (PDF) ↓
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pt-24">
        <SectionLabel number="02" title="Availability" />
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12">
          <p className="col-span-1 max-w-3xl font-display text-[28px] leading-[1.25] tracking-tight md:col-span-9 md:text-[38px]">
            Currently interning at MPOnline Limited and open to full-time Software Engineering and AI-focused roles from mid-2026. Happy to talk about backend systems, retrieval-augmented AI, or full-stack products.
          </p>
          <div className="md:col-span-3">
            <ul className="space-y-3 font-mono text-[12px] uppercase tracking-[0.14em]">
              <li className="hairline-b pb-3"><span className="text-muted-foreground">Full time</span> · Yes</li>
              <li className="hairline-b pb-3"><span className="text-muted-foreground">Contract</span> · Selective</li>
              <li className="hairline-b pb-3"><span className="text-muted-foreground">Remote</span> · Yes</li>
              <li className="pb-3"><span className="text-muted-foreground">Relocation</span> · Open</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
