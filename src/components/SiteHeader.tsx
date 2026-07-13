import { Link } from "@tanstack/react-router";
import { profile } from "@/content/profile";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="hairline-b sticky top-0 z-40 bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <Link
          to="/"
          className="font-display text-[15px] font-medium tracking-tight"
          aria-label={`${profile.name} — home`}
        >
          {profile.name}
          <span className="ml-2 hidden text-muted-foreground md:inline">
            / Software Engineer
          </span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-1 md:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: false }}
              activeProps={{
                className:
                  "text-foreground after:scale-x-100",
              }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="relative px-3 py-2 font-mono text-[12px] uppercase tracking-[0.14em] transition-colors hover:text-foreground after:absolute after:inset-x-3 after:-bottom-[1px] after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={profile.resumeUrl}
            className="ml-1 rounded-none border border-foreground px-3 py-2 font-mono text-[12px] uppercase tracking-[0.14em] transition-colors hover:bg-foreground hover:text-primary-foreground md:ml-3"
          >
            Résumé
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
