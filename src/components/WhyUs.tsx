const REASONS = [
  {
    no: "I",
    title: "Pre-approved plan literate",
    body:
      "Cities like LA, San Jose, San Diego, Sacramento, Portland, and Seattle offer pre-approved ADU plans that can save you $20K and six months. Most directories ignore them. We match you with builders who actually know how to use them.",
  },
  {
    no: "II",
    title: "License verified, not self-reported",
    body:
      "Every builder is cross-checked with their state contractor board — CSLB in CA, CCB in OR, L&I in WA. Active license, no major complaints, real address. The badge means something.",
  },
  {
    no: "III",
    title: "No bait-and-switch pricing",
    body:
      "We surface starting prices where builders publish them — most directories let builders hide pricing entirely. You start the conversation with realistic numbers, not vague promises.",
  },
  {
    no: "IV",
    title: "Built for buyers, paid by builders",
    body:
      "Homeowners never pay us. Builders pay only when they receive a matched lead. Our incentive is to send great leads, not to upsell you on services you didn't ask for.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-paper-soft border-y border-rule">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div>
            <p className="kicker">№ 03 — Editor&apos;s Note</p>
            <h2 className="display mt-3 text-[clamp(2rem,4.5vw,3.25rem)]">
              Why we&apos;re <em>different.</em>
            </h2>
            <div className="rule-short mt-8" />
            <p className="pull-quote mt-8">
              &ldquo;Most ADU directories are link farms or thinly veiled
              paid-listing sites. We made the opposite.&rdquo;
            </p>
          </div>

          <div className="space-y-12">
            {REASONS.map((r) => (
              <article key={r.title} className="grid grid-cols-[auto_1fr] gap-6">
                <span className="font-mono text-xs tracking-widest text-terracotta-600 pt-1">
                  {r.no}.
                </span>
                <div>
                  <h3 className="display-sm text-2xl">{r.title}</h3>
                  <p className="mt-3 text-base text-ink-soft leading-relaxed max-w-prose">
                    {r.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
