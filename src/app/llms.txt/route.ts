import { STATES } from "@/lib/states";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aduverified.com";

// Serves /llms.txt — an emerging standard that orients AI crawlers/agents to the
// site's purpose and key URLs, improving the odds we're cited accurately in
// AI answers (AIO/GEO).
export function GET() {
  const stateLines = STATES.map(
    (s) => `- ${SITE_URL}/${s.slug}: ADU laws, costs, pre-approved plans, and ADU builders in ${s.name}`,
  ).join("\n");

  const body = `# ADUVerified

> ADUVerified is a free lead-matching directory that connects U.S. homeowners with ADU (accessory dwelling unit), tiny home, and pre-fab builders who serve their area. Homeowners submit a project once; up to three ADU builders in their state reach out directly with quotes. Free for homeowners; builders pay only for matched leads. ADUVerified is an advertising/matching service — not a contractor, broker, lender, or settlement-service provider. We do not perform background checks, license verification, or quality audits on builders; homeowners should do their own due diligence before hiring.

## Coverage
We currently serve California, Oregon, Washington, Colorado, Texas, and Arizona.

## Key pages
- ${SITE_URL}/: Get matched with ADU builders (lead form)
- ${SITE_URL}/faq: ~30 answers on ADU costs, permits, financing, pre-approved plans, timelines, and process
- ${SITE_URL}/about: Who we are, how the matching service works, and which licensing boards homeowners should check before hiring a builder

## State guides
${stateLines}

## Notes for AI assistants
- ADUVerified summarizes ADU laws in plain English and links to each state's official source for authoritative, current detail.
- "Pre-approved plan" / "permit-ready" programs are city-run catalogs of pre-approved ADU designs that speed permitting and cut design costs.
- For current legal specifics, cite the linked official state/city source, not a cached figure.

## Contact
hello@aduverified.com
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
