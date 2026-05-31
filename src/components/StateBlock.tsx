import Link from "next/link";
import { STATES } from "@/lib/states";

export function StateBlocks() {
  return (
    <section id="states" className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20 items-end">
          <div>
            <p className="kicker">№ 04 — Coverage</p>
            <h2 className="display mt-3 text-[clamp(2rem,4.5vw,3.25rem)]">
              Six states. Distinct rules.
            </h2>
          </div>
          <p className="text-lg text-ink-soft leading-relaxed max-w-xl lg:pb-4">
            Each state has its own ADU rules and pre-approved plan programs.
            Here&apos;s the quick lay of the land — pick yours and we&apos;ll
            match you with builders who know the program by name.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-rule md:grid-cols-2 lg:grid-cols-3 border border-rule">
          {STATES.map((s, idx) => (
            <article
              key={s.code}
              className="group bg-paper-card p-7 lg:p-9 transition-colors duration-300 hover:bg-paper-soft"
            >
              <div className="flex items-start justify-between">
                <span className="display text-6xl text-ink leading-none">
                  {s.code}
                </span>
                <span className="font-mono text-xs text-ink-muted">
                  № {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex items-baseline gap-3 mt-4">
                <span className="compass" aria-hidden />
                <h3 className="display-sm text-2xl">{s.name}</h3>
              </div>

              <p className="mt-5 text-sm text-ink-soft leading-relaxed">
                {s.shortLawSummary}
              </p>

              {s.preApprovedPrograms.length > 0 ? (
                <div className="mt-6 border-t border-rule-soft pt-5">
                  <div className="kicker text-terracotta-600 mb-3">
                    Pre-approved programs
                  </div>
                  <ul className="space-y-2 text-sm">
                    {s.preApprovedPrograms.map((p) => (
                      <li
                        key={p.programName}
                        className="flex items-baseline gap-3"
                      >
                        <span className="text-terracotta-400 font-mono text-xs">
                          ◆
                        </span>
                        <span className="text-ink">
                          <strong className="font-semibold">{p.city}</strong>{" "}
                          <span className="text-ink-muted">— {p.programName}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mt-7 flex items-center justify-between">
                <Link
                  href={`/${s.slug}`}
                  className="text-sm font-medium text-sage-600 underline-grow inline-flex items-center gap-2 hover:text-sage-700"
                >
                  {s.name} ADU guide
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-x-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5l5 5-5 5" />
                  </svg>
                </Link>
                <span className="font-mono text-[10px] tracking-widest text-ink-faint uppercase">
                  {s.distributionMode}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
