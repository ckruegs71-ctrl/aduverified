import { STATES } from "@/lib/states";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule bg-paper-soft">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        {/* Masthead row */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between border-b border-rule pb-8">
          <div>
            <p className="kicker">№ 07 — Colophon</p>
            <div className="display text-5xl mt-3">ADUVerified</div>
          </div>
          <p className="font-mono text-xs text-ink-muted">
            Vol. I · Issue 01 · Est. 2026
          </p>
        </div>

        {/* Link columns */}
        <div className="grid gap-10 mt-12 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <p className="kicker mb-4">About</p>
            <p className="text-sm text-ink-soft leading-relaxed">
              Connecting homeowners with verified ADU builders across CA, OR,
              WA, CO, TX, and AZ. Free for homeowners. Paid by builders.
            </p>
          </div>
          <FooterCol
            title="Explore"
            links={[
              { href: "/#how-it-works", label: "How it works" },
              { href: "/about", label: "About us" },
              { href: "/faq", label: "FAQ" },
              { href: "/#lead-form", label: "Get matched" },
            ]}
          />
          <FooterCol
            title="State guides"
            links={STATES.map((s) => ({ href: `/${s.slug}`, label: s.name }))}
          />
          <FooterCol
            title="For builders"
            links={[
              { href: "mailto:hello@aduverified.com", label: "Get listed" },
              { href: "mailto:hello@aduverified.com", label: "How leads work" },
              { href: "mailto:hello@aduverified.com", label: "Pricing" },
            ]}
          />
          <FooterCol
            title="Legal"
            links={[
              { href: "/privacy", label: "Privacy policy" },
              { href: "/terms", label: "Terms of service" },
              { href: "/sms-terms", label: "SMS terms" },
              { href: "/disclosures", label: "Disclosures" },
            ]}
          />
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-rule flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-start">
          <p className="font-mono text-xs text-ink-muted">
            © {year} ADUVerified
          </p>
          <p className="text-xs text-ink-muted max-w-2xl leading-relaxed italic">
            ADUVerified is an advertising service. We are compensated by
            builders for connecting them with homeowners. We do not provide
            construction, real estate, mortgage, or legal services.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="kicker mb-4">{title}</p>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-ink-soft hover:text-ink underline-grow"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
