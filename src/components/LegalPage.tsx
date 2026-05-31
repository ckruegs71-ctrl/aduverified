// Shared wrapper for all legal pages. Renders a prominent DRAFT banner
// (these are starter drafts that MUST be reviewed by an attorney before launch),
// a title, last-updated date, and the body content, styled to match the site.

export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 bg-paper">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-24">
        {/* DRAFT banner */}
        <div className="mb-10 border border-terracotta-600 bg-[rgba(197,138,95,0.10)] px-5 py-4">
          <p className="font-mono text-xs uppercase tracking-widest text-terracotta-600 font-semibold">
            Draft — not legal advice
          </p>
          <p className="mt-1 text-sm text-ink-soft">
            This is a starter draft generated for planning purposes. It must be
            reviewed and finalized by a licensed attorney before ADUVerified
            collects real user data or launches.
          </p>
        </div>

        <p className="kicker">Legal</p>
        <h1 className="display mt-3 text-[clamp(2rem,5vw,3.25rem)]">{title}</h1>
        <p className="mt-4 font-mono text-xs text-ink-muted">
          Last updated: {lastUpdated}
        </p>
        <div className="rule mt-8 mb-10" />

        <div className="legal-body space-y-6 text-ink-soft leading-relaxed">
          {children}
        </div>
      </div>
    </main>
  );
}

// Small helper for section headings inside legal copy.
export function LegalH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="display-sm text-xl text-ink mt-10 mb-2">{children}</h2>
  );
}
