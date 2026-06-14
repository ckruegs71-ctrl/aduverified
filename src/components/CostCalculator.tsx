"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type StateCode = "CA" | "OR" | "WA" | "CO" | "TX" | "AZ";
type BuildType = "detached" | "garage_conv" | "attached" | "jadu" | "prefab";
type Finish = "basic" | "mid" | "premium";

const STATES: { code: StateCode; slug: string; name: string }[] = [
  { code: "CA", slug: "california", name: "California" },
  { code: "OR", slug: "oregon", name: "Oregon" },
  { code: "WA", slug: "washington", name: "Washington" },
  { code: "CO", slug: "colorado", name: "Colorado" },
  { code: "TX", slug: "texas", name: "Texas" },
  { code: "AZ", slug: "arizona", name: "Arizona" },
];

const BUILD_TYPES: { id: BuildType; label: string; sub: string }[] = [
  { id: "detached", label: "Detached", sub: "New standalone unit" },
  { id: "garage_conv", label: "Garage conversion", sub: "Convert existing garage" },
  { id: "attached", label: "Attached", sub: "Addition to main house" },
  { id: "jadu", label: "Junior ADU", sub: "Carved from main house, ≤500 sqft" },
  { id: "prefab", label: "Prefab / modular", sub: "Factory-built" },
];

const FINISH_LEVELS: { id: Finish; label: string; sub: string }[] = [
  { id: "basic", label: "Basic", sub: "Builder-grade materials" },
  { id: "mid", label: "Mid-grade", sub: "Quality finishes, typical" },
  { id: "premium", label: "Premium", sub: "Custom or high-end" },
];

const SIZES: { sqft: number; label: string }[] = [
  { sqft: 400, label: "400 sqft (studio)" },
  { sqft: 600, label: "600 sqft (1BR)" },
  { sqft: 800, label: "800 sqft (1BR)" },
  { sqft: 1000, label: "1,000 sqft (2BR)" },
  { sqft: 1200, label: "1,200 sqft (2BR)" },
];

// LA baseline per-sqft cost (2026 dollars), at mid-grade finish.
// Sourced from the Los Angeles cost page research.
const BASE_PER_SQFT: Record<BuildType, [number, number]> = {
  detached: [280, 400],
  garage_conv: [250, 375],
  attached: [260, 380],
  jadu: [200, 350],
  prefab: [250, 350],
};

// State construction-cost multiplier vs LA baseline.
// Derived from published construction-cost indexes (RSMeans-style ratios).
const STATE_MULT: Record<StateCode, number> = {
  CA: 1.00,
  WA: 0.95,
  OR: 0.85,
  CO: 0.85,
  TX: 0.75,
  AZ: 0.75,
};

// Finish level multiplier on hard construction cost.
const FINISH_MULT: Record<Finish, number> = {
  basic: 0.85,
  mid: 1.00,
  premium: 1.20,
};

// Soft costs (design + permits + plan check + utility hookups + school fees)
// — typical range per state in 2026 dollars.
const SOFT_COST_RANGE: Record<StateCode, [number, number]> = {
  CA: [15_000, 35_000],
  WA: [12_000, 30_000],
  OR: [10_000, 25_000],
  CO: [10_000, 24_000],
  TX: [8_000, 22_000],
  AZ: [8_000, 20_000],
};

function formatUSD(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${Math.round(n)}`;
}

function calculate(
  stateCode: StateCode | "",
  buildType: BuildType | "",
  sqft: number,
  finish: Finish,
) {
  if (!stateCode || !buildType) return null;
  const [baseLow, baseHigh] = BASE_PER_SQFT[buildType];
  const sMult = STATE_MULT[stateCode];
  const fMult = FINISH_MULT[finish];

  const perSqftLow = Math.round(baseLow * sMult * fMult);
  const perSqftHigh = Math.round(baseHigh * sMult * fMult);
  const hardLow = perSqftLow * sqft;
  const hardHigh = perSqftHigh * sqft;

  const [softLow, softHigh] = SOFT_COST_RANGE[stateCode];
  // Soft costs scale somewhat with size, but mostly flat — use base range.
  const totalLow = hardLow + softLow;
  const totalHigh = hardHigh + softHigh;

  const feeWaiverEligible = sqft < 750;

  return {
    perSqftLow,
    perSqftHigh,
    hardLow,
    hardHigh,
    softLow,
    softHigh,
    totalLow,
    totalHigh,
    feeWaiverEligible,
  };
}

export function CostCalculator() {
  const [stateCode, setStateCode] = useState<StateCode | "">("");
  const [buildType, setBuildType] = useState<BuildType | "">("");
  const [sqft, setSqft] = useState<number>(800);
  const [finish, setFinish] = useState<Finish>("mid");

  const result = useMemo(
    () => calculate(stateCode, buildType, sqft, finish),
    [stateCode, buildType, sqft, finish],
  );

  const stateInfo = STATES.find((s) => s.code === stateCode);
  const buildInfo = BUILD_TYPES.find((b) => b.id === buildType);

  return (
    <div className="border border-rule bg-paper-soft px-6 py-8 lg:px-10 lg:py-10">
      {/* Inputs */}
      <div className="space-y-8">
        {/* 1. State */}
        <Field label="1. Which state?" hint="Construction costs vary 25%+ by region.">
          <select
            value={stateCode}
            onChange={(e) => setStateCode(e.target.value as StateCode | "")}
            className="input w-full"
            aria-label="State"
          >
            <option value="">Select state…</option>
            {STATES.map((s) => (
              <option key={s.code} value={s.code}>
                {s.name}
              </option>
            ))}
          </select>
        </Field>

        {/* 2. Build type */}
        <Field label="2. What kind of ADU?" hint="Cost varies dramatically by type.">
          <div className="grid gap-2 sm:grid-cols-2">
            {BUILD_TYPES.map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setBuildType(b.id)}
                className={`text-left border-2 px-4 py-3 transition-colors ${
                  buildType === b.id
                    ? "border-sage-600 bg-sage-50 text-ink"
                    : "border-rule bg-paper-card text-ink-soft hover:border-sage-400 hover:text-ink"
                }`}
                aria-pressed={buildType === b.id}
              >
                <span className={`block text-sm ${buildType === b.id ? "font-semibold" : "font-medium"}`}>
                  {b.label}
                </span>
                <span className="block text-xs text-ink-muted mt-1">{b.sub}</span>
              </button>
            ))}
          </div>
        </Field>

        {/* 3. Size */}
        <Field
          label="3. How big?"
          hint={
            sqft < 750
              ? "✓ Under 750 sqft — qualifies for impact fee waivers in many areas."
              : "Over 750 sqft — local impact fees typically apply ($5K–$15K extra)."
          }
        >
          <div className="grid grid-cols-5 gap-2">
            {SIZES.map((s) => (
              <button
                key={s.sqft}
                type="button"
                onClick={() => setSqft(s.sqft)}
                className={`border-2 px-2 py-3 text-xs transition-colors ${
                  sqft === s.sqft
                    ? "border-sage-600 bg-sage-50 text-ink font-semibold"
                    : "border-rule bg-paper-card text-ink-soft hover:border-sage-400 hover:text-ink"
                }`}
                aria-pressed={sqft === s.sqft}
              >
                <span className="block">{s.sqft.toLocaleString()}</span>
                <span className={`block mt-1 ${sqft === s.sqft ? "text-ink-soft" : "text-ink-muted"}`}>
                  sqft
                </span>
              </button>
            ))}
          </div>
        </Field>

        {/* 4. Finish */}
        <Field label="4. Finish level?" hint="Cabinets, counters, flooring, appliances.">
          <div className="grid grid-cols-3 gap-2">
            {FINISH_LEVELS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFinish(f.id)}
                className={`text-left border-2 px-3 py-3 transition-colors ${
                  finish === f.id
                    ? "border-sage-600 bg-sage-50 text-ink"
                    : "border-rule bg-paper-card text-ink-soft hover:border-sage-400 hover:text-ink"
                }`}
                aria-pressed={finish === f.id}
              >
                <span className={`block text-sm ${finish === f.id ? "font-semibold" : "font-medium"}`}>
                  {f.label}
                </span>
                <span className="block text-xs text-ink-muted mt-1">{f.sub}</span>
              </button>
            ))}
          </div>
        </Field>
      </div>

      {/* Result */}
      <div className="mt-10 pt-8 border-t border-rule">
        {!result ? (
          <p className="text-sm text-ink-muted italic">
            Pick a state and build type to see your estimate.
          </p>
        ) : (
          <div>
            <p className="kicker text-terracotta-600 mb-3">
              Estimated all-in cost · {stateInfo?.name} · {buildInfo?.label}
            </p>
            <p className="display text-4xl text-ink">
              {formatUSD(result.totalLow)}
              <span className="text-ink-muted"> – </span>
              {formatUSD(result.totalHigh)}
            </p>
            <p className="mt-2 font-mono text-xs text-ink-muted">
              {sqft.toLocaleString()} sqft · {finish} finish ·{" "}
              ${result.perSqftLow.toLocaleString()}–${result.perSqftHigh.toLocaleString()}/sqft
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="border border-rule px-4 py-3">
                <p className="kicker text-sage-600 text-xs">Hard construction</p>
                <p className="mt-1 text-base text-ink font-medium">
                  {formatUSD(result.hardLow)} – {formatUSD(result.hardHigh)}
                </p>
                <p className="mt-1 text-xs text-ink-muted">
                  Foundation, framing, finishes, fixtures
                </p>
              </div>
              <div className="border border-rule px-4 py-3">
                <p className="kicker text-terracotta-600 text-xs">Soft costs</p>
                <p className="mt-1 text-base text-ink font-medium">
                  {formatUSD(result.softLow)} – {formatUSD(result.softHigh)}
                </p>
                <p className="mt-1 text-xs text-ink-muted">
                  Design, permits, plan check, school fees, utility hookups
                </p>
              </div>
            </div>

            {result.feeWaiverEligible ? (
              <p className="mt-5 text-sm text-sage-700 leading-relaxed">
                <strong>✓ Fee-waiver eligible.</strong> California waives most
                local impact and utility-connection fees on ADUs under 750
                sqft; under 500 sqft, school fees go away too. Other states have
                similar programs — your builder can confirm.
              </p>
            ) : (
              <p className="mt-5 text-sm text-ink-muted leading-relaxed">
                Over 750 sqft — local impact fees (typically $5K–$15K) and
                school fees usually apply on top of the soft costs shown.
              </p>
            )}

            {/* CTA */}
            <div className="mt-8 border-t border-rule pt-6">
              <p className="text-sm text-ink-soft leading-relaxed max-w-xl">
                Real bids vary 20–40% between builders for identical scopes.
                Want actual quotes for your specific lot? We&apos;ll connect you
                with up to 3 {stateInfo?.name ?? "local"} ADU builders.
              </p>
              <Link
                href={`/?state=${stateInfo ? stateInfo.code.toLowerCase() : ""}#lead-form`}
                className="mt-4 inline-flex items-center gap-3 bg-ink text-paper px-7 py-3 text-sm font-medium tracking-wide transition hover:bg-sage-700"
              >
                Get matched with up to 3
                {stateInfo ? ` ${stateInfo.name}` : ""} ADU builders
                <span aria-hidden>→</span>
              </Link>
              <p className="mt-3 text-xs text-ink-muted">
                Free for homeowners. Builders pay us, never you.
              </p>
            </div>

            <p className="mt-6 text-xs text-ink-muted italic max-w-prose leading-relaxed">
              Estimates only — based on 2026 construction-cost indexes and
              public fee schedules. Actual costs depend on your lot conditions,
              local labor markets, and finish choices. Always get written bids
              from licensed builders before making decisions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-sm text-ink font-medium mb-1">{label}</p>
      {hint ? <p className="text-xs text-ink-muted mb-3">{hint}</p> : null}
      {children}
    </div>
  );
}
