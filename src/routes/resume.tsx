import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/content/profile";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: `Résumé — ${profile.name}` },
      {
        name: "description",
        content: `Résumé of ${profile.name} — ${profile.title}.`,
      },
      { property: "og:title", content: `Résumé — ${profile.name}` },
      {
        property: "og:description",
        content: `Résumé of ${profile.name}.`,
      },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  const pdfUrl = "/resume.pdf";
  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-24 pt-10 md:px-10 md:pt-16">
      <div className="hairline-b flex flex-col gap-6 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            06 — Résumé
          </p>
          <h1 className="mt-4 font-display text-[48px] leading-[0.95] tracking-tight md:text-[72px]">
            Résumé
          </h1>
          <p className="mt-4 max-w-lg text-[15px] leading-[1.6] text-muted-foreground">
            The full, printable version. Preview inline below or open the PDF in a new tab.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 font-mono text-[12px] uppercase tracking-[0.16em]">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="border border-foreground px-4 py-2 transition-colors hover:bg-foreground hover:text-primary-foreground"
          >
            Open PDF ↗
          </a>
          <a
            href={pdfUrl}
            download="Gaurav-Dubey-Resume.pdf"
            className="link-accent border-b border-foreground/60 pb-0.5 hover:border-accent"
          >
            Download ↓
          </a>
        </div>
      </div>

      <div className="mt-10 hairline overflow-hidden bg-surface">
        <object
          data={`${pdfUrl}#view=FitH`}
          type="application/pdf"
          className="block h-[85vh] min-h-[720px] w-full"
          aria-label="Gaurav Dubey résumé PDF"
        >
          <iframe
            src={pdfUrl}
            title="Gaurav Dubey résumé"
            className="block h-[85vh] min-h-[720px] w-full border-0"
          />
          <div className="p-8 text-center text-[14px] text-muted-foreground">
            Your browser can't preview the PDF inline.{" "}
            <a href={pdfUrl} className="link-accent underline">
              Open the résumé here
            </a>
            .
          </div>
        </object>
      </div>
    </div>
  );
}
