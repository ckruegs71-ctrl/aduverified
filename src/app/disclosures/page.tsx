import type { Metadata } from "next";
import { LegalPage, LegalH2 } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Disclosures",
  robots: { index: false, follow: true },
};

export default function DisclosuresPage() {
  return (
    <LegalPage title="Disclosures" lastUpdated="2026-05-29 (draft)">
      <LegalH2>Paid relationship disclosure (FTC)</LegalH2>
      <p>
        ADUVerified is an advertising service. We are compensated by ADU builders
        when we connect them with homeowners — typically a per-lead fee or a paid
        listing. This means the builders you are matched with pay to participate.
        Homeowners never pay ADUVerified. Our compensation may influence which
        builders appear, but does not change our commitment to matching you with
        builders relevant to your project and location.
      </p>

      <LegalH2>Do Not Sell or Share My Personal Information (California)</LegalH2>
      <p>
        California residents may opt out of the &ldquo;sale&rdquo; or
        &ldquo;sharing&rdquo; of their personal information. Because we share your
        inquiry details with matched builders, this opt-out applies to you. To
        opt out, email privacy@aduverified.com with the subject &ldquo;Do Not
        Sell or Share&rdquo;, or [insert opt-out form/link before launch]. Note:
        opting out means we cannot match you with builders, since matching
        requires sharing your details.
      </p>

      <LegalH2>Always multiple builder options</LegalH2>
      <p>
        When we send your inquiry to builders, we send it to{" "}
        <strong>at least two — never just one</strong>. If we don&apos;t yet
        have at least two suitable ADU builders in your area, we&apos;ll
        contact you directly before any builder does, rather than send your
        information to a lone builder. ADUVerified does not pick a builder for
        you. You evaluate the options and decide who, if anyone, to hire.
      </p>

      <LegalH2>Not professional advice</LegalH2>
      <p>
        Content on this Site about ADU laws, costs, timelines, and financing is
        general information, not legal, financial, or construction advice. Verify
        all details with your city, a licensed contractor, and appropriate
        professionals before making decisions.
      </p>

      <LegalH2>Contact</LegalH2>
      <p>Questions: privacy@aduverified.com.</p>
    </LegalPage>
  );
}
