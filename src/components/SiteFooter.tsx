import { Link } from "@tanstack/react-router";
import { profile } from "@/content/profile";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="hairline mt-32">
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="max-w-md font-display text-[22px] leading-[1.2] tracking-tight">
              {profile.availability}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="link-accent mt-6 inline-block border-b border-foreground/60 pb-0.5 font-display text-[18px] hover:border-accent"
            >
              {profile.email}
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Elsewhere
            </p>
            <ul className="mt-4 space-y-2 font-body text-[15px]">
              <li>
                <a className="link-accent" href={profile.socials.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              </li>
              <li>
                <a className="link-accent" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <Link to="/resume" className="link-accent">Résumé</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Navigate
            </p>
            <ul className="mt-4 space-y-2 font-body text-[15px]">
              <li><Link to="/" className="link-accent">Home</Link></li>
              <li><Link to="/work" className="link-accent">Work</Link></li>
              <li><Link to="/about" className="link-accent">About</Link></li>
              <li><Link to="/contact" className="link-accent">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-14 pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          © {year} {profile.name}
        </div>
      </div>
    </footer>
  );
}
