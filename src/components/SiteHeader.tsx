"use client";

import { useState } from "react";
import Link from "next/link";
import { STATES } from "@/lib/states";

// Global site header — mounted in layout.tsx so it appears on every page.
// Provides site-wide internal linking (SEO/crawl paths), a logo-home link,
// a States dropdown (6 internal links), and the primary "Get matched" CTA.
export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [statesOpen, setStatesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="display text-2xl tracking-tight text-ink">
            ADU<span className="text-sage-600">Verified</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            <Link href="/#how-it-works" className="text-sm font-medium text-ink-soft hover:text-ink underline-grow">
              How it works
            </Link>

            {/* States dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setStatesOpen(true)}
              onMouseLeave={() => setStatesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-ink-soft hover:text-ink"
                aria-expanded={statesOpen}
                aria-haspopup="true"
                onClick={() => setStatesOpen((v) => !v)}
              >
                States
                <svg viewBox="0 0 20 20" fill="none" className="size-4" aria-hidden>
                  <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {/* Always rendered in the DOM (crawlable internal links); visibility toggled via CSS. */}
              <div
                className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-opacity duration-150 ${
                  statesOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
                }`}
              >
                <div className="w-56 border border-rule bg-paper-card shadow-[0_20px_50px_-30px_rgba(26,23,20,0.3)] py-2">
                  {STATES.map((s) => (
                    <Link
                      key={s.code}
                      href={`/${s.slug}`}
                      tabIndex={statesOpen ? 0 : -1}
                      className="flex items-center justify-between px-4 py-2 text-sm text-ink-soft hover:bg-paper-soft hover:text-ink"
                    >
                      {s.name}
                      <span className="font-mono text-[10px] text-ink-faint">{s.code}</span>
                    </Link>
                  ))}
                  <div className="border-t border-rule mt-2 pt-2">
                    <Link
                      href="/#states"
                      tabIndex={statesOpen ? 0 : -1}
                      className="block px-4 py-1.5 text-sm font-medium text-sage-600 hover:text-sage-700"
                    >
                      All states →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/faq" className="text-sm font-medium text-ink-soft hover:text-ink underline-grow">
              FAQ
            </Link>
            <Link href="/about" className="text-sm font-medium text-ink-soft hover:text-ink underline-grow">
              About
            </Link>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/#lead-form"
              className="hidden sm:inline-flex items-center bg-ink px-5 py-2.5 text-sm font-medium tracking-wide text-paper transition hover:bg-sage-700"
            >
              Get matched
            </Link>
            <button
              type="button"
              className="md:hidden inline-flex size-10 items-center justify-center text-ink"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6" aria-hidden>
                {mobileOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen ? (
        <nav className="md:hidden border-t border-rule bg-paper" aria-label="Mobile">
          <div className="mx-auto max-w-7xl px-6 py-4 space-y-1">
            <MobileLink href="/#how-it-works" onNavigate={() => setMobileOpen(false)}>How it works</MobileLink>
            <MobileLink href="/faq" onNavigate={() => setMobileOpen(false)}>FAQ</MobileLink>
            <MobileLink href="/about" onNavigate={() => setMobileOpen(false)}>About</MobileLink>
            <div className="pt-2">
              <p className="kicker px-3 pb-1">States</p>
              {STATES.map((s) => (
                <MobileLink key={s.code} href={`/${s.slug}`} onNavigate={() => setMobileOpen(false)}>
                  {s.name}
                </MobileLink>
              ))}
            </div>
            <Link
              href="/#lead-form"
              onClick={() => setMobileOpen(false)}
              className="mt-3 block bg-ink px-4 py-3 text-center text-sm font-medium text-paper"
            >
              Get matched
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function MobileLink({
  href,
  children,
  onNavigate,
}: {
  href: string;
  children: React.ReactNode;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="block px-3 py-2 text-base text-ink-soft hover:text-ink"
    >
      {children}
    </Link>
  );
}
