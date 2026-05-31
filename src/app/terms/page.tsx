import type { Metadata } from "next";
import { LegalPage, LegalH2 } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="2026-05-29 (draft)">
      <p>
        These Terms govern your use of aduverified.com (the &ldquo;Site&rdquo;).
        By using the Site or submitting an inquiry, you agree to these Terms.
      </p>

      <LegalH2>What ADUVerified is — and isn&apos;t</LegalH2>
      <p>
        ADUVerified is an advertising and lead-matching service. We connect
        homeowners with independent, third-party ADU builders. We are{" "}
        <strong>
          not a general contractor, real estate broker, mortgage lender,
          architect, or settlement-service provider
        </strong>
        , and we do not perform construction, design, or financing services. Any
        contract you enter is solely between you and the builder.
      </p>

      <LegalH2>No guarantees</LegalH2>
      <p>
        We use reasonable efforts to verify builder licensing and to match you
        with relevant builders, but we do not guarantee the quality, pricing,
        availability, licensing status, workmanship, or conduct of any builder.
        You are responsible for performing your own due diligence — including
        verifying licenses, insurance, references, and contracts — before hiring
        any builder.
      </p>

      <LegalH2>Builder matching &amp; contact</LegalH2>
      <p>
        When you submit an inquiry and provide consent, your information is shared
        with <strong>at least two and up to three</strong> matched builders who
        may contact you directly. We do not send your inquiry to a single builder
        — you will always have multiple options to evaluate and choose from. The
        specific number of matches and distribution timing may vary by state and
        demand.
      </p>

      <LegalH2>Acceptable use</LegalH2>
      <p>
        You agree to provide accurate information, to use the Site only for
        lawful purposes, and not to submit inquiries on behalf of others without
        authorization or for properties you do not own.
      </p>

      <LegalH2>Limitation of liability</LegalH2>
      <p>
        To the maximum extent permitted by law, ADVUerified and its affiliates
        are not liable for any indirect, incidental, or consequential damages
        arising from your use of the Site or your dealings with any builder. The
        Site is provided &ldquo;as is&rdquo; without warranties of any kind.
      </p>

      <LegalH2>Governing law</LegalH2>
      <p>
        These Terms are governed by the laws of [insert state of formation]
        without regard to conflict-of-law rules. [Insert dispute-resolution /
        arbitration clause after attorney review.]
      </p>

      <LegalH2>Contact</LegalH2>
      <p>Questions: hello@aduverified.com.</p>
    </LegalPage>
  );
}
