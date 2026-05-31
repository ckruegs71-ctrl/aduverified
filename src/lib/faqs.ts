// ADUVerified FAQ content.
// `FAQ_CATEGORIES` powers the deep /faq page (AIO/GEO citation asset).
// `HOMEPAGE_FAQS` is a trimmed subset shown on the landing page (conversion support).
// Answers are written to be self-contained + extractable so AI engines can cite them.

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    category: "ADU basics",
    items: [
      {
        q: "What is an ADU?",
        a: "An Accessory Dwelling Unit (ADU) is a smaller, secondary dwelling on the same lot as a single-family home. It has its own kitchen, bathroom, and entrance. ADUs can be detached (a backyard cottage), attached (an addition to the main house), converted from an existing garage, or a Junior ADU carved out of the existing home.",
      },
      {
        q: "What's the difference between an ADU and a JADU?",
        a: "A Junior ADU (JADU) is carved out of the existing house — usually 500 sq ft or smaller, with its own entrance and sometimes a shared bathroom or kitchen with the main home. JADUs have looser permit requirements but tighter size and use limits. A full ADU is a separate, self-contained unit (detached or attached) with its own kitchen and bath.",
      },
      {
        q: "What types of ADUs can I build?",
        a: "The main types are: detached ADU (a standalone backyard cottage), attached ADU (an addition connected to the main house), garage conversion (turning an existing garage into living space), Junior ADU (a small unit within the existing home), and pre-fab/modular ADUs (built in a factory and assembled on site). Tiny homes on a permanent foundation also qualify in many areas.",
      },
      {
        q: "What is a 'casita' or 'granny flat'?",
        a: "These are just regional names for an ADU. 'Casita' is common in the Southwest (Arizona, parts of California and Texas), 'granny flat' is common nationally, and 'backyard cottage' or 'DADU' (detached ADU) is common in the Pacific Northwest. They all refer to a secondary dwelling on a single-family lot.",
      },
    ],
  },
  {
    category: "Cost",
    items: [
      {
        q: "How much does an ADU cost to build?",
        a: "Most fully-permitted, turnkey ADUs cost between $150,000 and $450,000 depending on size, finishes, site conditions, and your state. Garage conversions and Junior ADUs are typically cheaper; large or high-end detached units cost more. Pre-fab and modular options often come in lower than site-built custom homes.",
      },
      {
        q: "What drives ADU cost up or down?",
        a: "The biggest cost drivers are size (square footage), site access (a steep slope or narrow backyard access raises cost significantly), utility connections (running new sewer, water, and electrical), finishes, and whether you use a custom design versus a pre-approved or pre-fab plan. Choosing a pre-approved city plan can save $15,000–$25,000 in design and permitting.",
      },
      {
        q: "Does an ADU add value to my property?",
        a: "Usually, yes. A legal, permitted ADU adds rentable square footage and can increase property value and appraisal — especially in high-cost markets. The exact return depends on local rents, your build cost, and how appraisers in your area treat ADUs. Treat any specific number as an estimate to verify with a local appraiser.",
      },
    ],
  },
  {
    category: "Permits & pre-approved plans",
    items: [
      {
        q: "What is a pre-approved ADU plan?",
        a: "A pre-approved (or 'permit-ready') ADU plan is a design that a city's building department has already reviewed and approved. If you choose one of these plans, your permit review is dramatically faster — often weeks instead of months — and you skip most custom design fees. Cities like Los Angeles, San Jose, San Diego, Sacramento, Portland, and Seattle run these programs.",
      },
      {
        q: "Do I need a permit to build an ADU?",
        a: "Yes. A legal ADU requires building permits, and the unit must pass inspections before it can be occupied. Building without a permit can lead to fines, forced removal, and problems when you sell or refinance. A good builder handles the permit process for you.",
      },
      {
        q: "How long does ADU permitting take?",
        a: "With a fully custom design, permitting can take several months. Using a city pre-approved plan can cut that to a few weeks because the design has already been reviewed. The exact timeline depends on your city's workload and how complete your application is.",
      },
      {
        q: "Can a builder help me get permits?",
        a: "Yes — most ADU builders handle permitting as part of a turnkey design-build contract, including drawings, submittals, and inspections. When we match you with builders, we prioritize ones experienced with your city's specific process and pre-approved plan program.",
      },
    ],
  },
  {
    category: "Financing",
    items: [
      {
        q: "How do I finance an ADU?",
        a: "Common options include paying cash, a HELOC (home equity line of credit), a cash-out refinance, a specialized ADU/renovation construction loan (lenders like RenoFi and others), or — for income-producing ADUs — loans that count projected rental income. The right choice depends on your equity, rate environment, and whether the ADU will generate rent.",
      },
      {
        q: "Are there loans designed specifically for ADUs?",
        a: "Yes. Some lenders offer renovation or construction loans built for ADUs that base the loan amount on your home's future value (after the ADU is built) rather than its current value, which helps if you don't have much existing equity. We can flag financing options when we match you with builders.",
      },
      {
        q: "Can rental income help me qualify for financing?",
        a: "In some cases, yes. Certain ADU-specific loan products let you count a portion of the projected rental income toward qualifying. Requirements vary by lender, so confirm details with a loan officer before counting on it.",
      },
    ],
  },
  {
    category: "Design, size & types",
    items: [
      {
        q: "How big can my ADU be?",
        a: "Size limits are set by state and local rules. In California, statewide allowances commonly reach 800–1,200 sq ft depending on configuration, and cities can't zone below certain minimums. Other states set limits locally. Your lot size, setbacks, and the main house also affect what fits.",
      },
      {
        q: "Can I convert my garage into an ADU?",
        a: "Often yes — garage conversions are one of the most cost-effective ADU types because the foundation and structure already exist. Rules on parking replacement and setbacks vary by city, and some pre-approved plan programs include garage-conversion options.",
      },
      {
        q: "Are pre-fab or modular ADUs any good?",
        a: "Modern pre-fab and modular ADUs can be high quality and are often faster to build and more predictable in cost than fully site-built units, since the structure is built in a controlled factory. Site work (foundation, utilities, permitting) still happens locally. They're a strong option in many markets.",
      },
    ],
  },
  {
    category: "Process & timeline",
    items: [
      {
        q: "How long does an ADU take to build?",
        a: "From signed contract to certificate of occupancy, a typical detached ADU takes 8–14 months. Using a pre-approved plan can shave 3–6 months off the permit phase. Pre-fab/modular units shorten construction time but still require site work and permitting in parallel.",
      },
      {
        q: "What are the steps to building an ADU?",
        a: "The usual path: (1) confirm your city allows an ADU on your lot, (2) choose a build type and a custom or pre-approved design, (3) get quotes from builders, (4) finalize design and submit for permits, (5) build and pass inspections, and (6) receive your certificate of occupancy. A design-build firm can manage most of these steps for you.",
      },
      {
        q: "What happens after I submit the form on ADUVerified?",
        a: "We review your inquiry, then match you with up to three verified builders who fit your project type, location, and (where it applies) your city's pre-approved plan program. Those builders contact you directly — usually within 24 hours — with quotes. You compare and choose; there's no obligation.",
      },
    ],
  },
  {
    category: "Renting & use",
    items: [
      {
        q: "Can I rent out my ADU?",
        a: "In most states yes, including California, Oregon, Washington, and Colorado. Long-term rentals are almost always permitted. Short-term rental rules (under 30 days) vary by city and are sometimes restricted, and HOAs may have their own rules. Check your local short-term rental ordinance before counting on Airbnb-style income.",
      },
      {
        q: "Can I use an ADU for a family member?",
        a: "Yes — housing aging parents, adult children, or guests is one of the most common reasons people build ADUs. Many buyers choose accessible, single-level designs for aging-in-place. Tell us this on the form so we can match you with builders experienced in accessible design.",
      },
    ],
  },
  {
    category: "Working with ADUVerified",
    items: [
      {
        q: "Do you charge homeowners anything?",
        a: "Never. ADUVerified is 100% free for homeowners. Builders pay us a referral fee only when we match them with a qualified lead. Your information is never sold for unrelated advertising; only the builders we match you with receive it, and only with your consent.",
      },
      {
        q: "How do you verify builders?",
        a: "We cross-check every builder against their state contractor licensing board — CSLB in California, CCB in Oregon, L&I in Washington, and the equivalent in Colorado, Texas, and Arizona — for an active license and clean complaint record. We also confirm the business address, niche specialty, and participation in city pre-approved plan programs.",
      },
      {
        q: "How many builders will contact me?",
        a: "Up to three, depending on your state and builder availability. In markets with fewer ADU specialists (like Arizona), we may match you with the single best-fit builder rather than several. You're always in control of who you respond to.",
      },
      {
        q: "What if I'm just researching and not ready to build?",
        a: "Submit anyway and choose 'just researching' on the timeline question. We'll connect you with a builder or two for early conversations without pushy follow-up. Most ADU projects begin with months of research — we'd rather be your first call than your last.",
      },
      {
        q: "Which states does ADUVerified cover?",
        a: "We currently serve California, Oregon, Washington, Colorado, Texas, and Arizona, with the deepest coverage in the cities that run pre-approved ADU plan programs. We're expanding to additional states over time.",
      },
    ],
  },
];

// Flattened full list (used for FAQPage JSON-LD on the /faq page).
export const ALL_FAQS: FaqItem[] = FAQ_CATEGORIES.flatMap((c) => c.items);

// Trimmed, high-traffic subset for the homepage (conversion support).
export const HOMEPAGE_FAQS: FaqItem[] = [
  FAQ_CATEGORIES[0].items[0], // What is an ADU?
  FAQ_CATEGORIES[1].items[0], // How much does an ADU cost?
  FAQ_CATEGORIES[5].items[0], // How long does an ADU take to build?
  FAQ_CATEGORIES[2].items[0], // What is a pre-approved ADU plan?
  FAQ_CATEGORIES[6].items[0], // Can I rent out my ADU?
  FAQ_CATEGORIES[3].items[0], // How do I finance an ADU?
  FAQ_CATEGORIES[7].items[0], // Do you charge homeowners anything?
  FAQ_CATEGORIES[7].items[3], // What if I'm just researching?
];
