const POINTS = [
  { num: "I",   label: "Pre-approved plan literate", desc: "Matched builders know your city's plan program" },
  { num: "II",  label: "You compare and choose",     desc: "Up to 3 matched introductions, no obligation" },
  { num: "III", label: "No spam",                    desc: "Up to 3 matched builders. You control follow-up." },
  { num: "IV",  label: "Free for homeowners",        desc: "Builders pay us — never you." },
];

export function TrustBar() {
  return (
    <section className="border-y border-rule bg-paper-soft">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((p) => (
            <div key={p.label} className="flex flex-col">
              <span className="font-mono text-xs text-terracotta-600 tracking-widest">
                {p.num}.
              </span>
              <div className="rule-short mt-2 mb-3 bg-terracotta-600" />
              <div className="text-base font-semibold text-ink leading-snug">
                {p.label}
              </div>
              <div className="mt-1 text-sm text-ink-muted leading-snug">
                {p.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
