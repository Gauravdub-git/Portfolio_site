import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ThemeProvider, themeBootstrapScript } from "@/components/ThemeProvider";
import { PageTransition } from "@/components/PageTransition";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col items-start justify-center px-6 py-24 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          404 — Page not found
        </p>
        <h1 className="mt-4 font-display text-[64px] leading-[0.95] tracking-tight md:text-[96px]">
          This page is not in the archive.
        </h1>
        <p className="mt-6 max-w-lg text-[16px] text-muted-foreground">
          The address you followed doesn't match anything in this edition. Try the work archive, or head back to the masthead.
        </p>
        <div className="mt-8 flex gap-4 font-mono text-[12px] uppercase tracking-[0.16em]">
          <Link to="/" className="border-b border-foreground pb-0.5 hover:text-accent">Home →</Link>
          <Link to="/work" className="border-b border-foreground pb-0.5 hover:text-accent">Work →</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col items-start justify-center px-6 py-24 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          Error
        </p>
        <h1 className="mt-4 font-display text-[48px] leading-[1] tracking-tight md:text-[64px]">
          This page didn't load.
        </h1>
        <p className="mt-4 max-w-lg text-[15px] text-muted-foreground">
          Something went wrong. You can retry, or return to the home page.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 font-mono text-[12px] uppercase tracking-[0.16em]">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border-b border-foreground pb-0.5 hover:text-accent"
          >
            Try again →
          </button>
          <a href="/" className="border-b border-foreground pb-0.5 hover:text-accent">
            Go home →
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

const siteTitle =
  "Gaurav Dubey — Software Engineer | AI & Full Stack Developer";
const siteDescription =
  "Portfolio of Gaurav Dubey — a software engineer building AI-powered applications, scalable backend systems, and modern web experiences.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: siteTitle },
      { name: "description", content: siteDescription },
      { name: "author", content: "Gaurav Dubey" },
      { property: "og:title", content: siteTitle },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Gaurav Dubey" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: siteTitle },
      { name: "twitter:description", content: siteDescription },
      { name: "theme-color", content: "#F5F3EE" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Gaurav Dubey",
          jobTitle: "Software Engineer | AI & Full Stack Developer",
          url: "/",
          sameAs: [
            "https://github.com/Gauravdub-git",
            "https://www.linkedin.com/in/gaurav-dubey-1a1b2b1b2/",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <SiteHeader />
          <main className="flex-1">
            <PageTransition>
              <Outlet />
            </PageTransition>
          </main>
          <SiteFooter />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
