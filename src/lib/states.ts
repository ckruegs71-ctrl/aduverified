// ADUVerified — state metadata for the MVP landing page.
// One entry per state we cover at launch. Used by <StateBlock>, the lead form's
// state dropdown, and the JSON-LD schema generator.
//
// Distribution mode + per-lead pricing comes from the project plan's Decision Log.
// These are stub values for the MVP — the full directory build (Phase 4) will load
// them from the `states` Supabase table, which carries the same shape.

export type DistributionMode = "compete" | "hybrid" | "exclusive";

export interface PreApprovedProgram {
  city: string;
  programName: string;
  url?: string;
}

/** A section of original, plain-English state-page content (heading + body).
 *  Rendered as H2 + paragraph for clean AIO/GEO extractability. */
export interface OverviewSection {
  heading: string;
  body: string;
}

export interface StateInfo {
  code: "CA" | "OR" | "WA" | "CO" | "TX" | "AZ";
  name: string;
  slug: string;
  /** ~50-80 words for the homepage state block */
  shortLawSummary: string;
  /** Longer original content for the /[state] page (the rankable/citable value-add). */
  lawOverview: OverviewSection[];
  /** Authoritative official source we link to (we summarize; they maintain the law). */
  officialLawUrl: string;
  officialLawLabel: string;
  /** "Last reviewed" date shown on the state page (trust + freshness signal). */
  lastReviewed: string;
  /** Named pre-approved / permit-ready ADU programs in this state */
  preApprovedPrograms: PreApprovedProgram[];
  /** Default lead distribution mode at launch */
  distributionMode: DistributionMode;
  /** Builders per lead in compete/hybrid mode */
  competeBuilderCount: number;
  /** Cents per builder for shared/compete leads */
  pricePerLeadSharedCents: number;
  /** Cents per builder for exclusive leads */
  pricePerLeadExclusiveCents: number;
}

// NOTE: officialLawUrl values point to stable state/department landing pages.
// Verify exact deep links before launch — agencies reorganize URLs periodically.
// We intentionally summarize the law in our own words and LINK to these sources
// for the authoritative, always-current detail (low upkeep, no thin-content risk).

export const STATES: StateInfo[] = [
  {
    code: "CA",
    name: "California",
    slug: "california",
    shortLawSummary:
      "California leads the country on ADU legalization. State law SB-9 and SB-1211 require cities to allow ADUs on most single-family lots and limit owner-occupancy restrictions. Many cities run their own pre-approved plan programs that compress the permit timeline from months to weeks.",
    officialLawUrl:
      "https://www.hcd.ca.gov/policy-and-research/accessory-dwelling-units",
    officialLawLabel: "California HCD — Accessory Dwelling Units",
    lastReviewed: "2026-05-29",
    lawOverview: [
      {
        heading: "Are ADUs legal in California?",
        body:
          "Yes. California has the most ADU-friendly laws in the country. A series of state bills now require cities to permit at least one ADU and one Junior ADU (JADU) on most single-family lots, cap how much cities can restrict them, and force faster permit review. SB-9 opened lot splits and duplex conversions on many single-family parcels, and SB-1211 (effective 2025) further expanded how many detached ADUs are allowed on multifamily properties. The practical result: if you own a typical California home, you can almost certainly build an ADU.",
      },
      {
        heading: "Key rules that affect your build",
        body:
          "Cities must approve or deny a complete ADU application within 60 days. Owner-occupancy requirements are limited for many ADUs. There are statewide size allowances (commonly up to 800–1,200 sq ft depending on configuration) that cities cannot zone below, and reduced or waived parking requirements near transit. Impact fees are limited or waived for smaller units. Exact setbacks, height, and design standards still vary city to city — which is why a builder who knows your specific city's rules matters.",
      },
      {
        heading: "Cost and timeline in California",
        body:
          "A permitted, turnkey detached ADU in California typically runs $200K–$450K depending on size, finishes, and site conditions; garage conversions and JADUs can come in lower. From signed contract to final sign-off, plan on roughly 8–14 months. Choosing one of the city pre-approved plans below can cut the permit phase from months to weeks and save $15K–$25K in design fees.",
      },
    ],
    preApprovedPrograms: [
      { city: "Los Angeles", programName: "LA Standard Plan Program" },
      { city: "San Jose", programName: "San Jose Pre-Approved ADU Program" },
      { city: "San Diego", programName: "Permit-Ready ADU Program (PRADU)" },
      { city: "Sacramento", programName: "Permit-Ready ADU" },
      { city: "Oakland", programName: "Pre-Approved ADU" },
    ],
    distributionMode: "compete",
    competeBuilderCount: 3,
    pricePerLeadSharedCents: 12900,
    pricePerLeadExclusiveCents: 39900,
  },
  {
    code: "OR",
    name: "Oregon",
    slug: "oregon",
    shortLawSummary:
      "Oregon's HB 2001 made ADUs legal statewide on single-family lots. Portland has its own ADU permitting process with streamlined options for detached ADUs. Smaller cities are catching up with their own pre-approved plan offerings.",
    officialLawUrl:
      "https://www.oregon.gov/lcd/UP/Pages/Housing-Choices.aspx",
    officialLawLabel: "Oregon DLCD — Housing Choices",
    lastReviewed: "2026-05-29",
    lawOverview: [
      {
        heading: "Are ADUs legal in Oregon?",
        body:
          "Yes. Oregon's HB 2001 required cities of a certain size to allow ADUs and other 'middle housing' on land zoned for single-family homes. In practice, most Oregon homeowners in and around metro areas can add an ADU. Portland goes further than the state minimum, with established detached-ADU rules and a track record of approved projects.",
      },
      {
        heading: "Key rules that affect your build",
        body:
          "Oregon limits owner-occupancy requirements and parking mandates for many ADUs, and Portland has waived or reduced system development charges (SDCs) for ADUs at various points — a meaningful cost saver. Size limits, height, and setbacks are set locally, so the exact envelope you can build depends on your city and lot.",
      },
      {
        heading: "Cost and timeline in Oregon",
        body:
          "A permitted detached ADU in the Portland area generally runs $180K–$380K turnkey; garage conversions cost less. Expect roughly 8–13 months from contract to final inspection. A builder familiar with your city's process will navigate SDC waivers and design review far faster than a generalist.",
      },
    ],
    preApprovedPrograms: [
      { city: "Portland", programName: "Portland ADU Permitting" },
    ],
    distributionMode: "compete",
    competeBuilderCount: 3,
    pricePerLeadSharedCents: 9900,
    pricePerLeadExclusiveCents: 34900,
  },
  {
    code: "WA",
    name: "Washington",
    slug: "washington",
    shortLawSummary:
      "Washington's HB 1110 requires cities with more than 25,000 residents to allow at least two ADUs per lot. Seattle's DADU (Detached ADU) program leads the state with clear permit pathways and growing builder participation.",
    officialLawUrl:
      "https://www.commerce.wa.gov/growing-the-economy/growth-management/middle-housing/",
    officialLawLabel: "WA Dept. of Commerce — Middle Housing",
    lastReviewed: "2026-05-29",
    lawOverview: [
      {
        heading: "Are ADUs legal in Washington?",
        body:
          "Yes. HB 1110 and related middle-housing laws require larger Washington cities to allow ADUs — generally up to two per lot — and to ease the parking and owner-occupancy rules that used to block them. Seattle's Detached ADU (DADU) program is the most mature in the state, with pre-reviewed plan options and a clear permit path.",
      },
      {
        heading: "Key rules that affect your build",
        body:
          "Washington cities are phasing in the new allowances, so exact timelines and standards vary by jurisdiction. Seattle reduced parking requirements and offers pre-approved DADU plans that speed review. Outside Seattle, check whether your city has adopted its HB 1110 code updates yet — a local builder will know.",
      },
      {
        heading: "Cost and timeline in Washington",
        body:
          "A permitted detached ADU in the Seattle area typically runs $200K–$420K turnkey. Plan on 9–14 months end to end. Using Seattle's pre-approved DADU plans can shave months off permitting and cut design costs significantly.",
      },
    ],
    preApprovedPrograms: [
      { city: "Seattle", programName: "Seattle DADU Program" },
    ],
    distributionMode: "compete",
    competeBuilderCount: 3,
    pricePerLeadSharedCents: 9900,
    pricePerLeadExclusiveCents: 34900,
  },
  {
    code: "CO",
    name: "Colorado",
    slug: "colorado",
    shortLawSummary:
      "Colorado HB24-1152 (2024) requires major cities to allow ADUs. Denver and Boulder are leading the state with city-specific ADU programs, and Front Range builder activity is growing fast as homeowners take advantage of the new rules.",
    officialLawUrl: "https://cdola.colorado.gov/accessory-dwelling-units",
    officialLawLabel: "Colorado DOLA — Accessory Dwelling Units",
    lastReviewed: "2026-05-29",
    lawOverview: [
      {
        heading: "Are ADUs legal in Colorado?",
        body:
          "Increasingly, yes. Colorado's HB24-1152 (2024) requires many larger municipalities — especially along the Front Range — to allow ADUs on single-family lots and removes some of the local barriers that blocked them. Denver and Boulder already have established ADU programs, and other cities are updating their codes to comply.",
      },
      {
        heading: "Key rules that affect your build",
        body:
          "Because HB24-1152 is recent, cities are still adopting compliant zoning. That means the specific allowances — size, setbacks, parking, and whether your city offers pre-approved plans yet — vary a lot by jurisdiction right now. Denver and Boulder are the most builder-ready today.",
      },
      {
        heading: "Cost and timeline in Colorado",
        body:
          "A permitted detached ADU on the Front Range generally runs $190K–$400K turnkey, with modular/prefab options (Colorado has several) often coming in lower. Plan on 8–13 months. Local builder knowledge matters here more than usual because the rules are actively changing.",
      },
    ],
    preApprovedPrograms: [
      { city: "Denver", programName: "Denver ADU Permitting" },
      { city: "Boulder", programName: "Boulder ADU Program" },
    ],
    distributionMode: "hybrid",
    competeBuilderCount: 2,
    pricePerLeadSharedCents: 9900,
    pricePerLeadExclusiveCents: 29900,
  },
  {
    code: "TX",
    name: "Texas",
    slug: "texas",
    shortLawSummary:
      "Texas doesn't have a statewide ADU mandate, but most cities allow ADUs subject to local zoning. Austin has the most ADU-friendly rules in the state. Texas is also the country's barndominium capital — a unique build category that overlaps with ADU and pre-fab markets.",
    officialLawUrl:
      "https://www.austintexas.gov/department/accessory-dwelling-units",
    officialLawLabel: "City of Austin — Accessory Dwelling Units",
    lastReviewed: "2026-05-29",
    lawOverview: [
      {
        heading: "Are ADUs legal in Texas?",
        body:
          "It depends on your city — Texas has no statewide ADU law, so rules are set locally. Austin is the most ADU-friendly major city and has actively loosened its rules to encourage them. Houston, Dallas, San Antonio, and Fort Worth all allow ADUs under their own zoning, with varying ease. Texas is also the national capital of the barndominium — a steel-framed home/shop hybrid that overlaps with the ADU and pre-fab world.",
      },
      {
        heading: "Key rules that affect your build",
        body:
          "Because everything is local in Texas, the single most important question is what your specific city and (if applicable) HOA allow. Lot size, setbacks, and whether short-term rental of the ADU is permitted all vary widely. A builder who regularly pulls permits in your city is worth far more than a statewide generalization.",
      },
      {
        heading: "Cost and timeline in Texas",
        body:
          "Texas tends to be more affordable to build than the coasts: a permitted detached ADU often runs $140K–$320K, and barndominium-style builds can vary widely based on finish-out. Plan on 7–12 months. Pre-fab and modular options are popular and can compress the schedule.",
      },
    ],
    preApprovedPrograms: [
      { city: "Austin", programName: "Austin ADU Permits" },
    ],
    distributionMode: "hybrid",
    competeBuilderCount: 2,
    pricePerLeadSharedCents: 9900,
    pricePerLeadExclusiveCents: 29900,
  },
  {
    code: "AZ",
    name: "Arizona",
    slug: "arizona",
    shortLawSummary:
      "Arizona is an emerging ADU market, with Phoenix and Tucson leading on permit pathways. Most builds happen as detached ADUs or casitas on larger suburban lots. Builder density is lower than the coasts, so leads are matched to the most relevant specialist rather than auctioned to multiple.",
    officialLawUrl: "https://www.phoenix.gov/pdd",
    officialLawLabel: "City of Phoenix — Planning & Development",
    lastReviewed: "2026-05-29",
    lawOverview: [
      {
        heading: "Are ADUs legal in Arizona?",
        body:
          "Yes, with rules set locally. Arizona has no statewide ADU mandate, but Phoenix and Tucson have both moved to make ADUs (often called 'casitas' or 'guest houses' here) easier to permit, and the market is growing quickly. Larger suburban lots across the Valley make detached casitas a natural fit.",
      },
      {
        heading: "Key rules that affect your build",
        body:
          "Phoenix and Tucson each set their own size limits, setbacks, and whether the unit can be rented. Because adoption is newer and builder density is lower than on the coasts, the most important step is matching with a builder who has actually permitted casitas in your specific city.",
      },
      {
        heading: "Cost and timeline in Arizona",
        body:
          "A permitted detached casita in the Phoenix or Tucson metro generally runs $160K–$330K turnkey. Plan on 7–12 months. Because qualified ADU builders are more limited here, we match Arizona leads to the single best-fit specialist rather than auctioning to several.",
      },
    ],
    preApprovedPrograms: [
      { city: "Phoenix", programName: "Phoenix Casita Permitting" },
      { city: "Tucson", programName: "Tucson ADU Permitting" },
    ],
    distributionMode: "exclusive",
    competeBuilderCount: 1,
    pricePerLeadSharedCents: 0,
    pricePerLeadExclusiveCents: 29900,
  },
];

export function getStateBySlug(slug: string): StateInfo | undefined {
  return STATES.find((s) => s.slug === slug);
}

export function getStateByCode(code: string): StateInfo | undefined {
  return STATES.find((s) => s.code === code);
}
