const STEPS = [
  {
    n: "01",
    title: "Tell us about your project",
    body:
      "Two-minute form covering your state, build type, budget, and timeline. We're nosy on purpose — better matches start with better questions.",
  },
  {
    n: "02",
    title: "We match you with verified builders",
    body:
      "Up to three builders who specialize in your city, your build type, and (where it applies) your city's pre-approved plan program.",
  },
  {
    n: "03",
    title: "Compare free quotes in 24 hours",
    body:
      "Builders contact you directly. You compare scope, timeline, and price. Pick the one who feels right — or none. No obligation.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeader
          kicker="№ 02 — Process"
          title="How it works"
          subtitle="We're a matching service, not a marketplace. You stay in the driver's seat the whole way."
        />

        <ol className="mt-16 grid gap-y-12 lg:gap-y-0 lg:grid-cols-3 lg:gap-x-12 relative">
          {/* Horizontal line connecting the step numbers on desktop */}
          <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-px bg-rule" />

          {STEPS.map((s) => (
            <li key={s.n} className="relative">
              <div className="flex items-center gap-4">
                <span className="display text-5xl text-sage-600 select-none leading-none">
                  {s.n}
                </span>
                <div className="flex-1 h-px bg-rule" />
              </div>
              <h3 className="display-sm mt-6 text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed max-w-sm">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function SectionHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="kicker">{kicker}</p>
      <h2 className="display mt-3 text-[clamp(2rem,5vw,3.75rem)]">{title}</h2>
      {subtitle ? (
        <p className="mt-5 text-lg text-ink-soft leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}
