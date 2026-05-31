"use client";

import { useEffect, useRef, useState } from "react";
import { STATES } from "@/lib/states";

type FormData = {
  // Step 1
  state: string;
  zip: string;
  lot_size: string;
  property_owned: "i_own" | "i_am_buying" | "researching_for_someone" | "";
  hoa_present: "yes" | "no" | "unsure" | "";
  // Step 2
  build_type: string;
  sqft_range: string;
  bedrooms: string;
  bathrooms: string;
  pre_approved_plan_interest: string;
  // Step 3
  budget_range: string;
  timeline: string;
  financing: string;
  // Step 4
  primary_use: string;
  prior_quotes: string;
  permit_status: string;
  // Step 5
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  best_contact_time: string;
  project_notes: string;
  consent_contact: boolean;
  consent_marketing: boolean;
  source_referrer: string;
  // Honeypot — invisible to humans, attractive to bots. If non-empty on submit,
  // the API silently drops the request. Always defaults to "".
  website: string;
};

const INITIAL: FormData = {
  state: "",
  zip: "",
  lot_size: "",
  property_owned: "",
  hoa_present: "",
  build_type: "",
  sqft_range: "",
  bedrooms: "",
  bathrooms: "",
  pre_approved_plan_interest: "",
  budget_range: "",
  timeline: "",
  financing: "",
  primary_use: "",
  prior_quotes: "",
  permit_status: "",
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  best_contact_time: "",
  project_notes: "",
  consent_contact: false,
  consent_marketing: false,
  source_referrer: "",
  website: "",
};

type Status = "idle" | "submitting" | "success" | "error" | "ineligible";

const TOTAL_STEPS = 5;

export function LeadForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Scroll the form section back to the top whenever the step changes,
  // so the next step's first question is visible without the user scrolling up.
  // Skip the first render so initial page-load doesn't fight the user's scroll.
  const skipFirstScroll = useRef(true);
  useEffect(() => {
    if (skipFirstScroll.current) {
      skipFirstScroll.current = false;
      return;
    }
    document
      .getElementById("lead-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step]);

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function canAdvance(): boolean {
    if (step === 1) {
      return Boolean(data.state && data.zip.length >= 5 && data.lot_size && data.property_owned && data.hoa_present);
    }
    if (step === 2) {
      return Boolean(data.build_type && data.sqft_range && data.bedrooms && data.bathrooms && data.pre_approved_plan_interest);
    }
    if (step === 3) {
      return Boolean(data.budget_range && data.timeline && data.financing);
    }
    if (step === 4) {
      return Boolean(data.primary_use && data.prior_quotes && data.permit_status);
    }
    if (step === 5) {
      return Boolean(
        data.first_name &&
          data.last_name &&
          data.email &&
          data.phone &&
          data.best_contact_time &&
          data.consent_contact, // consent_marketing + project_notes are optional
      );
    }
    return false;
  }

  async function handleNext() {
    if (step === 1 && data.property_owned !== "i_own") {
      // RESPA gate: only "I own" can submit a lead.
      setStatus("ineligible");
      return;
    }
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
      return;
    }
    // Final submit
    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? `Request failed (${res.status})`);
      }
      setStatus("success");
    } catch (e: unknown) {
      setStatus("error");
      setErrorMessage(e instanceof Error ? e.message : "Submission failed.");
    }
  }

  function handleBack() {
    if (step > 1) setStep(step - 1);
    if (status === "ineligible") setStatus("idle");
  }

  if (status === "success") {
    return (
      <FormShell>
        <div className="text-center py-12">
          <p className="kicker">Submitted</p>
          <h3 className="display mt-4 text-4xl text-ink">
            We&apos;ll be in touch <em>within 24 hours.</em>
          </h3>
          <div className="rule-short mt-8 mx-auto" />
          <p className="mt-8 text-base text-ink-soft max-w-md mx-auto leading-relaxed">
            Check your email for confirmation. We&apos;ll match you with up to
            three verified ADU builders in your area and they&apos;ll reach
            out directly.
          </p>
        </div>
      </FormShell>
    );
  }

  if (status === "ineligible") {
    return (
      <FormShell>
        <div className="text-center py-12">
          <p className="kicker">Not yet a match</p>
          <h3 className="display-sm mt-4 text-2xl">Thanks for stopping by.</h3>
          <p className="mt-5 text-base text-ink-soft max-w-md mx-auto leading-relaxed">
            ADUVerified currently matches homeowners who already own the
            property where the ADU will be built. If you&apos;re still
            shopping for the right lot, we&apos;d love to reconnect once you
            close.
          </p>
          <button
            onClick={handleBack}
            className="mt-8 text-sm font-medium text-sage-600 underline-grow hover:text-sage-700"
          >
            ← Go back
          </button>
        </div>
      </FormShell>
    );
  }

  return (
    <FormShell>
      <ProgressBar current={step} total={TOTAL_STEPS} />

      {/* Honeypot — humans never see this; bots that auto-fill DOM inputs do.
          The API silently drops any submission where `website` is non-empty. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        <label>
          Website (leave blank)
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={data.website}
            onChange={(e) => update("website", e.target.value)}
          />
        </label>
      </div>

      <div className="mt-8">
        {step === 1 && <Step1 data={data} update={update} />}
        {step === 2 && <Step2 data={data} update={update} />}
        {step === 3 && <Step3 data={data} update={update} />}
        {step === 4 && <Step4 data={data} update={update} />}
        {step === 5 && <Step5 data={data} update={update} />}
      </div>

      {status === "error" ? (
        <div className="mt-4 rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-900">
          {errorMessage}
        </div>
      ) : null}

      <div className="mt-10 pt-8 border-t border-rule flex items-center justify-between">
        <button
          type="button"
          onClick={handleBack}
          disabled={step === 1 || status === "submitting"}
          className="text-sm font-medium text-ink-muted underline-grow hover:text-ink disabled:opacity-30 disabled:cursor-not-allowed disabled:no-underline"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={!canAdvance() || status === "submitting"}
          className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-3 text-sm tracking-wide font-medium transition hover:bg-sage-700 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-ink"
        >
          {status === "submitting"
            ? "Submitting…"
            : step === TOTAL_STEPS
            ? "Submit inquiry"
            : "Continue"}
          {status !== "submitting" ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-x-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5l5 5-5 5" />
            </svg>
          ) : null}
        </button>
      </div>
    </FormShell>
  );
}

function FormShell({ children }: { children: React.ReactNode }) {
  return (
    <section id="lead-form" className="bg-paper-soft border-y border-rule">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-2xl">
          <p className="kicker">№ 05 — Inquiry</p>
          <h2 className="display mt-3 text-[clamp(2rem,4.5vw,3.25rem)]">
            Tell us about your <em>project.</em>
          </h2>
          <p className="mt-5 text-base text-ink-soft leading-relaxed max-w-md">
            Takes about two minutes. We&apos;ll match you with up to three
            vetted builders for free — no obligation, no spam.
          </p>
        </div>
        <div className="mt-14 bg-paper-card text-ink p-8 sm:p-12 border border-rule shadow-[0_20px_50px_-30px_rgba(26,23,20,0.18)]">
          {children}
        </div>
      </div>
    </section>
  );
}

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div>
      <div className="flex items-center justify-between font-mono text-xs tracking-widest uppercase text-ink-muted">
        <span>Step {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
        <span>{Math.round((current / total) * 100)}%</span>
      </div>
      <div className="mt-3 flex gap-1.5">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={`flex-1 h-1 transition-colors duration-300 ${
              i < current ? "bg-sage-600" : "bg-rule"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ── Step components ─────────────────────────────────────────

function Step1({ data, update }: StepProps) {
  return (
    <div className="space-y-6">
      <StepHeader title="Where's your property?" subtitle="We start with location and ownership." />
      <Field label="State">
        <select
          required
          value={data.state}
          onChange={(e) => update("state", e.target.value)}
          className="select"
        >
          <option value="">Select a state…</option>
          {STATES.map((s) => (
            <option key={s.code} value={s.code}>
              {s.name}
            </option>
          ))}
        </select>
      </Field>
      <Field label="ZIP code">
        <input
          required
          inputMode="numeric"
          pattern="[0-9]{5}"
          maxLength={5}
          value={data.zip}
          onChange={(e) => update("zip", e.target.value.replace(/\D/g, ""))}
          className="input"
          placeholder="94101"
        />
      </Field>
      <RadioGroup
        label="Lot size?"
        name="lot_size"
        value={data.lot_size}
        onChange={(v) => update("lot_size", v)}
        options={[
          { value: "lt_5k", label: "Under 5,000 sqft" },
          { value: "5_10k", label: "5,000–10,000 sqft" },
          { value: "gt_10k", label: "Over 10,000 sqft" },
          { value: "unsure", label: "Not sure" },
        ]}
      />
      <RadioGroup
        label="Do you own the property?"
        name="property_owned"
        value={data.property_owned}
        onChange={(v) => update("property_owned", v as FormData["property_owned"])}
        options={[
          { value: "i_own", label: "Yes, I own it" },
          { value: "i_am_buying", label: "I'm in the process of buying" },
          { value: "researching_for_someone", label: "I'm researching for someone else" },
        ]}
      />
      <RadioGroup
        label="Is the property in an HOA?"
        name="hoa_present"
        value={data.hoa_present}
        onChange={(v) => update("hoa_present", v as FormData["hoa_present"])}
        options={[
          { value: "no", label: "No" },
          { value: "yes", label: "Yes" },
          { value: "unsure", label: "Not sure" },
        ]}
      />
    </div>
  );
}

function Step2({ data, update }: StepProps) {
  return (
    <div className="space-y-6">
      <StepHeader title="Tell us about the build" subtitle="Type, size, and pre-approved plan interest." />
      <RadioGroup
        label="What kind of build?"
        name="build_type"
        value={data.build_type}
        onChange={(v) => update("build_type", v)}
        options={[
          { value: "detached", label: "Detached ADU (backyard cottage)" },
          { value: "garage_conversion", label: "Garage conversion" },
          { value: "attached", label: "Attached ADU (addition)" },
          { value: "jadu", label: "Junior ADU (carved from existing home)" },
          { value: "tiny_home", label: "Tiny home" },
          { value: "prefab_modular", label: "Pre-fab / modular" },
          { value: "unsure", label: "Not sure yet" },
        ]}
      />
      <RadioGroup
        label="Approximate square footage?"
        name="sqft_range"
        value={data.sqft_range}
        onChange={(v) => update("sqft_range", v)}
        options={[
          { value: "lt_600", label: "Under 600 sqft" },
          { value: "600_900", label: "600–900 sqft" },
          { value: "900_1200", label: "900–1,200 sqft" },
          { value: "gt_1200", label: "1,200+ sqft" },
          { value: "unsure", label: "Not sure" },
        ]}
      />
      <RadioGroup
        label="Bedrooms?"
        name="bedrooms"
        value={data.bedrooms}
        onChange={(v) => update("bedrooms", v)}
        options={[
          { value: "studio", label: "Studio" },
          { value: "1br", label: "1 BR" },
          { value: "2br", label: "2 BR" },
          { value: "3br_plus", label: "3+ BR" },
          { value: "unsure", label: "Not sure" },
        ]}
      />
      <RadioGroup
        label="Bathrooms?"
        name="bathrooms"
        value={data.bathrooms}
        onChange={(v) => update("bathrooms", v)}
        options={[
          { value: "1", label: "1" },
          { value: "1_5", label: "1.5" },
          { value: "2", label: "2" },
          { value: "2plus", label: "2+" },
        ]}
      />
      <RadioGroup
        label="Interested in a pre-approved city plan?"
        name="pre_approved_plan_interest"
        value={data.pre_approved_plan_interest}
        onChange={(v) => update("pre_approved_plan_interest", v)}
        options={[
          { value: "want", label: "Yes — I want to use one" },
          { value: "open", label: "Open to it" },
          { value: "no_custom", label: "No, I want fully custom" },
          { value: "dont_know", label: "What's a pre-approved plan?" },
        ]}
      />
    </div>
  );
}

function Step3({ data, update }: StepProps) {
  return (
    <div className="space-y-6">
      <StepHeader title="Budget & timing" subtitle="Helps us match to the right builder tier." />
      <RadioGroup
        label="Project budget?"
        name="budget_range"
        value={data.budget_range}
        onChange={(v) => update("budget_range", v)}
        options={[
          { value: "lt_100k", label: "Under $100K" },
          { value: "100_200k", label: "$100K–$200K" },
          { value: "200_350k", label: "$200K–$350K" },
          { value: "350k_plus", label: "$350K+" },
          { value: "unsure", label: "Not sure yet" },
        ]}
      />
      <RadioGroup
        label="When do you want to break ground?"
        name="timeline"
        value={data.timeline}
        onChange={(v) => update("timeline", v)}
        options={[
          { value: "ready_now", label: "Ready now (0–3 months)" },
          { value: "3_6mo", label: "3–6 months" },
          { value: "6_12mo", label: "6–12 months" },
          { value: "over_year", label: "Over a year away" },
          { value: "researching", label: "Just researching" },
        ]}
      />
      <RadioGroup
        label="How will you finance it?"
        name="financing"
        value={data.financing}
        onChange={(v) => update("financing", v)}
        options={[
          { value: "cash", label: "Cash" },
          { value: "heloc", label: "HELOC / home equity" },
          { value: "adu_loan", label: "ADU-specific construction loan" },
          { value: "need_help", label: "Need help finding financing" },
          { value: "undecided", label: "Not decided yet" },
        ]}
      />
    </div>
  );
}

function Step4({ data, update }: StepProps) {
  return (
    <div className="space-y-6">
      <StepHeader title="Intent" subtitle="Helps builders understand fit." />
      <RadioGroup
        label="Primary use for the ADU?"
        name="primary_use"
        value={data.primary_use}
        onChange={(v) => update("primary_use", v)}
        options={[
          { value: "rental_income", label: "Rental income" },
          { value: "family_member", label: "Family member moving in" },
          { value: "office_studio", label: "Home office or studio" },
          { value: "aging_in_place", label: "Aging in place / accessibility" },
          { value: "future_flex", label: "Future flexibility" },
          { value: "sell_later", label: "Sell the property later" },
        ]}
      />
      <RadioGroup
        label="Have you gotten quotes already?"
        name="prior_quotes"
        value={data.prior_quotes}
        onChange={(v) => update("prior_quotes", v)}
        options={[
          { value: "yes", label: "Yes, a few" },
          { value: "no_first", label: "No — you're my first" },
          { value: "starting", label: "Just starting to look" },
        ]}
      />
      <RadioGroup
        label="Where are you in the permit process?"
        name="permit_status"
        value={data.permit_status}
        onChange={(v) => update("permit_status", v)}
        options={[
          { value: "not_started", label: "Haven't started" },
          { value: "talked_to_city", label: "Talked to my city" },
          { value: "plans_in_progress", label: "Plans in progress" },
          { value: "permits_approved", label: "Permits approved" },
        ]}
      />
    </div>
  );
}

function Step5({ data, update }: StepProps) {
  return (
    <div className="space-y-6">
      <StepHeader title="Contact info" subtitle="We'll share with up to 3 matched builders only." />
      <div className="grid grid-cols-2 gap-4">
        <Field label="First name">
          <input
            required
            value={data.first_name}
            onChange={(e) => update("first_name", e.target.value)}
            className="input"
            autoComplete="given-name"
          />
        </Field>
        <Field label="Last name">
          <input
            required
            value={data.last_name}
            onChange={(e) => update("last_name", e.target.value)}
            className="input"
            autoComplete="family-name"
          />
        </Field>
      </div>
      <Field label="Email">
        <input
          required
          type="email"
          value={data.email}
          onChange={(e) => update("email", e.target.value)}
          className="input"
          autoComplete="email"
        />
      </Field>
      <Field label="Phone">
        <input
          required
          type="tel"
          value={data.phone}
          onChange={(e) => update("phone", e.target.value)}
          className="input"
          autoComplete="tel"
          placeholder="(555) 123-4567"
        />
      </Field>
      <RadioGroup
        label="Best time to reach you?"
        name="best_contact_time"
        value={data.best_contact_time}
        onChange={(v) => update("best_contact_time", v)}
        options={[
          { value: "morning", label: "Morning" },
          { value: "afternoon", label: "Afternoon" },
          { value: "evening", label: "Evening" },
          { value: "anytime", label: "Anytime" },
        ]}
      />
      <Field label="Anything else about your project? (optional)">
        <textarea
          value={data.project_notes}
          onChange={(e) => update("project_notes", e.target.value)}
          className="input"
          rows={3}
          maxLength={2000}
          placeholder="Slope, deadlines, specific needs — anything builders should know."
        />
      </Field>
      <Field label="How did you hear about us? (optional)">
        <select
          value={data.source_referrer}
          onChange={(e) => update("source_referrer", e.target.value)}
          className="select"
        >
          <option value="">—</option>
          <option value="google">Google search</option>
          <option value="reddit">Reddit</option>
          <option value="facebook">Facebook</option>
          <option value="friend">Friend / referral</option>
          <option value="other">Other</option>
        </select>
      </Field>

      <div className="rounded-lg border border-rule bg-paper-card p-5 mt-2 shadow-[0_2px_8px_-4px_rgba(26,23,20,0.08)]">
        <p className="kicker mb-3">Before you submit</p>
        <p className="text-sm text-ink-soft leading-relaxed">
          <strong className="text-ink">ADUVerified is an advertising and matching service</strong>{" "}
          that connects homeowners with independent ADU builders.{" "}
          <strong className="text-ink">We are not a contractor, broker, or party to any agreement</strong>{" "}
          between you and a builder. We don&apos;t employ or supervise builders, and we
          don&apos;t guarantee their pricing, timelines, licensing status, work quality, or
          any project outcome. <strong className="text-ink">You are solely responsible</strong>{" "}
          for verifying each builder&apos;s license, references, insurance, and contract
          before hiring. Submitting this form is an introduction, not an agreement to hire
          anyone — you&apos;ll receive at least two builder options and you choose.
        </p>
      </div>

      <div className="space-y-4 border-t border-rule pt-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={data.consent_contact}
            onChange={(e) => update("consent_contact", e.target.checked)}
            className="mt-1 size-4 rounded border-rule accent-[var(--sage-600)]"
          />
          <span className="text-sm text-ink-soft leading-relaxed">
            I agree that ADUVerified and up to 3 matched ADU builders may contact
            me about my project at the phone number and email I provided — by
            phone call, text message (SMS), and email, including via automated
            technology. Consent is not a condition of any purchase. Message
            frequency varies; msg &amp; data rates may apply. Reply STOP to opt
            out, HELP for help. I&apos;ve read the{" "}
            <a href="/privacy" className="text-sage-600 underline">Privacy Policy</a>{" "}
            and <a href="/terms" className="text-sage-600 underline">Terms</a>, and I
            acknowledge that ADUVerified is an advertising service and is{" "}
            <strong className="text-ink">not responsible for builder performance, contracts, or project outcomes</strong>.{" "}
            <span className="text-ink-muted font-medium">(Required)</span>
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={data.consent_marketing}
            onChange={(e) => update("consent_marketing", e.target.checked)}
            className="mt-1 size-4 rounded border-rule accent-[var(--sage-600)]"
          />
          <span className="text-sm text-ink-soft leading-relaxed">
            Send me ADU tips, financing options, and occasional updates from
            ADUVerified by email and text.{" "}
            <span className="text-ink-muted">(Optional — unsubscribe anytime.)</span>
          </span>
        </label>
      </div>
    </div>
  );
}

// ── Sub-components ──────────────────────────────────────────

interface StepProps {
  data: FormData;
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
}

function StepHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <h3 className="display-sm text-2xl">{title}</h3>
      <p className="mt-2 text-sm text-ink-muted">{subtitle}</p>
      <div className="rule-short mt-5" />
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="kicker">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

interface RadioOption {
  value: string;
  label: string;
}

function RadioGroup({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: RadioOption[];
}) {
  return (
    <fieldset>
      <legend className="kicker mb-3">{label}</legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((o) => {
          const isSelected = value === o.value;
          return (
            <label
              key={o.value}
              className={`group cursor-pointer border px-4 py-3 text-sm transition flex items-center gap-3 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-sage-600 ${
                isSelected
                  ? "border-sage-600 bg-sage-50 text-ink shadow-[inset_3px_0_0_0_var(--sage-600)]"
                  : "border-rule hover:border-sage-400 text-ink-soft hover:bg-paper-soft"
              }`}
            >
              <span
                className={`size-3 rounded-full border-2 flex-shrink-0 transition ${
                  isSelected ? "border-sage-600 bg-sage-600" : "border-ink-faint"
                }`}
                aria-hidden
              />
              <input
                type="radio"
                name={name}
                value={o.value}
                checked={isSelected}
                onChange={(e) => onChange(e.target.value)}
                className="sr-only"
              />
              <span>{o.label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
