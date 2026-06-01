export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 lg:px-10 lg:pt-24 lg:pb-32 grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-20 items-end">
        {/* ── Left: editorial cover ────────────────────────── */}
        <div>
          <p className="kicker rise delay-100">№ 01 — ADU Directory</p>
          <h1 className="display rise delay-200 mt-5 text-[clamp(2.75rem,7.5vw,5.5rem)]">
            Find ADU builders who <em>know</em> your city.
          </h1>

          <div className="rule-short mt-10 rise delay-300" />

          <p className="rise delay-400 mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            Share your project in one quick form. Up to three ADU builders in
            your area will reach out so you can compare options on{" "}
            <em className="italic font-serif">your</em> terms — no fee, no
            spam, no pressure.
          </p>

          <div className="rise delay-500 mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#lead-form"
              className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-3.5 text-sm tracking-wide font-medium transition hover:bg-sage-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage-600"
            >
              Get matched
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-x-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5l5 5-5 5" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-ink-soft underline-grow hover:text-ink"
            >
              How it works
            </a>
          </div>

          <p className="rise delay-600 mt-12 max-w-md text-xs text-ink-muted font-mono leading-relaxed">
            Pre-approved plan literate · Up to 3 matched introductions · Builders pay us, never you.
          </p>
        </div>

        {/* ── Right: specimen card ────────────────────────── */}
        <div className="fade delay-500">
          <BuilderSpecimen />
        </div>
      </div>
    </section>
  );
}

function BuilderSpecimen() {
  return (
    <figure className="relative bg-paper-card border border-rule p-7 sm:p-9 shadow-[0_30px_60px_-30px_rgba(26,23,20,0.18)]">
      {/* Corner ticks — like a print mark */}
      <CornerTick className="absolute -top-1 -left-1" />
      <CornerTick className="absolute -top-1 -right-1 rotate-90" />
      <CornerTick className="absolute -bottom-1 -left-1 -rotate-90" />
      <CornerTick className="absolute -bottom-1 -right-1 rotate-180" />

      <div className="flex items-center justify-between">
        <span className="kicker">Specimen № 14</span>
        <span className="font-mono text-[10px] text-ink-faint">CSLB · ACTIVE</span>
      </div>

      <h3 className="display-sm mt-4 text-3xl">Acton ADU</h3>
      <p className="font-mono text-xs text-ink-muted mt-1">San Jose, California</p>

      <div className="mt-6 space-y-3 text-sm">
        <SpecRow label="License" value="CSLB № 976432" />
        <SpecRow label="Specialty" value="Detached · JADU" />
        <SpecRow label="Pre-approved" value="San Jose · Sacramento" />
        <SpecRow label="Starting at" value="$185K · 600 sqft" />
        <SpecRow label="Service radius" value="40 mi" />
      </div>

      <div className="rule mt-8 opacity-60" />

      <p className="mt-5 text-xs italic text-ink-muted leading-relaxed">
        Example listing only. Real builder profiles launch with the full
        directory after MVP demand validation. Specimens are not paid
        placements.
      </p>
    </figure>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="text-ink-muted text-xs uppercase tracking-wider font-mono whitespace-nowrap">
        {label}
      </span>
      <span className="flex-1 dot-leader self-end" />
      <span className="text-ink font-medium whitespace-nowrap">{value}</span>
    </div>
  );
}

function CornerTick({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`size-3 text-ink ${className}`}
      aria-hidden
    >
      <path d="M0 0 L8 0 M0 0 L0 8" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
