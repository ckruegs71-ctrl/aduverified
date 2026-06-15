import type { Metadata } from "next";
import { LegalPage, LegalH2 } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="2026-05-30 (draft)">
      <p>
        This Privacy Policy explains how ADUVerified (&ldquo;ADUVerified,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses,
        shares, and protects information when you visit{" "}
        <strong>aduverified.com</strong> (the &ldquo;Site&rdquo;) or submit an
        inquiry through our form. ADUVerified is an advertising and matching
        service that connects U.S. homeowners with independent, third-party ADU
        builders. <strong>We are not a contractor, real estate broker, mortgage
        lender, architect, or settlement-service provider.</strong>
      </p>
      <p>
        By using the Site or submitting an inquiry, you confirm that you have
        read and understood this Privacy Policy. If you do not agree, please do
        not use the Site or submit an inquiry.
      </p>

      <LegalH2>1. Information we collect</LegalH2>
      <p>
        We collect personal information in three ways: directly from you,
        automatically when you use the Site, and from limited third-party
        sources (described below).
      </p>

      <h3 className="display-sm text-lg text-ink mt-6 mb-2">
        a. Information you provide
      </h3>
      <p>When you submit the inquiry form, you provide:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Identity &amp; contact:</strong> first name, last name, email
          address, phone number, best time to be reached.
        </li>
        <li>
          <strong>Property location (approximate):</strong> U.S. state and ZIP
          code. We do <em>not</em> collect your exact street address.
        </li>
        <li>
          <strong>Project details:</strong> property ownership status, whether
          your property is in an HOA, lot size band, build type, square footage
          band, bedrooms, bathrooms, interest in pre-approved city plans,
          permit-process status, budget band, target timeline, financing
          approach, intended primary use, and whether you have received quotes
          previously.
        </li>
        <li>
          <strong>Optional notes:</strong> any free-text you add in the
          &ldquo;anything else about your project&rdquo; field (capped at 2,000
          characters server-side).
        </li>
        <li>
          <strong>Consent records:</strong> the contact-consent checkbox you
          must check, the optional marketing-consent checkbox, the version
          identifier of the consent language you saw, and the timestamp.
        </li>
        <li>
          <strong>Attribution (optional):</strong> how you heard about us.
        </li>
      </ul>

      <h3 className="display-sm text-lg text-ink mt-6 mb-2">
        b. Information collected automatically
      </h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Technical / device data:</strong> IP address, browser
          user-agent string, referring URL, and timestamps. We use this for
          security, fraud prevention, rate limiting, and operational
          troubleshooting.
        </li>
        <li>
          <strong>Site analytics:</strong> we use Google Analytics 4 to
          understand aggregate site usage (page views, country, browser family,
          referrer, time on page, scroll depth). Google Analytics sets cookies
          (such as <code>_ga</code> and <code>_ga_*</code>) and collects an
          anonymized version of your IP address. We do not use the data for
          ad-personalization or retargeting. California residents can request
          we exclude their data — see the &ldquo;Do Not Sell or Share My
          Personal Information&rdquo; section on our{" "}
          <a href="/disclosures" className="underline">Disclosures page</a>.
        </li>
      </ul>

      <h3 className="display-sm text-lg text-ink mt-6 mb-2">
        c. Information from third parties
      </h3>
      <p>
        We currently do not purchase or receive personal information about you
        from data brokers or other third parties. If that ever changes, we will
        update this Policy and notify users where required by law.
      </p>

      <LegalH2>2. How we use your information</LegalH2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Match you with builders.</strong> The primary purpose: to
          identify up to three ADU builders in your state and forward your
          inquiry to them so they can reach out with quotes.
        </li>
        <li>
          <strong>Communicate with you about your inquiry.</strong> Confirmation
          email after submission, plus follow-up about your match.
        </li>
        <li>
          <strong>Marketing (only if you opt in).</strong> Send tips, financing
          options, and updates if (and only if) you checked the optional
          marketing-consent box. You can unsubscribe at any time.
        </li>
        <li>
          <strong>Operate, secure, and improve the Site.</strong> Detect
          fraudulent or abusive activity, enforce our rate limits, fix bugs,
          and measure aggregate Site usage.
        </li>
        <li>
          <strong>Maintain consent records.</strong> Store the exact consent
          language you agreed to, with timestamp, IP, and user-agent, to comply
          with TCPA, CCPA/CPRA, and similar laws.
        </li>
        <li>
          <strong>Comply with law.</strong> Respond to legal process, enforce
          our Terms, and protect our rights and the rights and safety of
          others.
        </li>
      </ul>

      <LegalH2>3. How we share your information</LegalH2>

      <h3 className="display-sm text-lg text-ink mt-6 mb-2">
        a. With matched ADU builders (third parties)
      </h3>
      <p>
        <strong>
          When you submit the inquiry form and provide consent, we share the
          information you provided — including identifiers (name, email, phone),
          approximate location (state, ZIP), and project details — with up to
          three matched ADU builders.
        </strong>{" "}
        Those builders receive your inquiry by email and may contact you
        directly. The builders are independent businesses, not ADUVerified
        employees or contractors; we do not control their privacy practices or
        their work. Builders pay us a per-lead fee in exchange for receiving
        your inquiry. Under the California Consumer Privacy Act (CCPA) as
        amended by the CPRA, this transfer is treated as a{" "}
        <strong>&ldquo;sale&rdquo; and &ldquo;sharing&rdquo;</strong> of
        personal information, and you have the right to opt out. See{" "}
        <em>Section 6 — Your California privacy rights</em> below.
      </p>

      <h3 className="display-sm text-lg text-ink mt-6 mb-2">
        b. With our service providers
      </h3>
      <p>
        We use third-party service providers who process information on our
        behalf under contract. They are not permitted to use your information
        for their own purposes. Current providers include:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Supabase</strong> — secure database hosting (where your
          inquiry is stored).
        </li>
        <li>
          <strong>Resend</strong> — transactional email delivery (the messages
          to you and to matched builders).
        </li>
        <li>
          <strong>Vercel</strong> — Site hosting and edge infrastructure.
        </li>
        <li>
          <strong>Google Analytics 4</strong> — aggregate site analytics
          (cookie-based, anonymized IP).
        </li>
      </ul>
      <p>
        These providers receive only the information necessary to perform their
        function on our behalf.
      </p>

      <h3 className="display-sm text-lg text-ink mt-6 mb-2">
        c. For legal or safety reasons
      </h3>
      <p>
        We may disclose information when we reasonably believe it is necessary
        to comply with law, respond to lawful requests by public authorities,
        enforce our Terms, protect our rights or property, or protect the
        safety of any person.
      </p>

      <h3 className="display-sm text-lg text-ink mt-6 mb-2">
        d. In a business transfer
      </h3>
      <p>
        If ADUVerified is involved in a merger, acquisition, financing, or sale
        of assets, your information may be transferred as part of that
        transaction. We will notify you of any change in ownership or material
        change in use of your information.
      </p>

      <h3 className="display-sm text-lg text-ink mt-6 mb-2">
        e. With your consent
      </h3>
      <p>
        We may share your information for any other purpose disclosed to you
        at the time of collection or with your separate consent.
      </p>

      <LegalH2>4. Data retention</LegalH2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Inquiry &amp; consent records:</strong> retained for as long
          as your record is needed for the matching service, dispute
          resolution, fraud prevention, or to meet legal obligations
          (typically up to 7 years for consent records under TCPA), and then
          deleted or anonymized.
        </li>
        <li>
          <strong>Marketing list:</strong> retained until you unsubscribe; after
          unsubscribe, kept only as a suppression record so we don&apos;t
          contact you again.
        </li>
        <li>
          <strong>Server logs &amp; IP addresses:</strong> retained for
          approximately 30 days unless needed longer to investigate abuse.
        </li>
        <li>
          <strong>Analytics:</strong> Google Analytics 4 retains
          event-level data for 14 months by default; aggregate reports are
          kept indefinitely. We do not store personal identifiers in Google
          Analytics.
        </li>
      </ul>
      <p>
        You can request deletion at any time (see <em>Section 6</em>). We will
        delete or anonymize your record unless we have a legal obligation to
        retain it (for example, to evidence consent for already-sent
        communications).
      </p>

      <LegalH2>5. Communications &amp; your choices</LegalH2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Transactional emails</strong> (confirmation of your inquiry,
          builder match information): you receive these as part of the service
          you requested. You may unsubscribe by replying to ask us to stop, but
          we may not be able to complete the match if you do.
        </li>
        <li>
          <strong>Marketing emails &amp; texts:</strong> you receive these only
          if you checked the optional marketing-consent box. Reply{" "}
          <strong>STOP</strong> to any SMS to opt out; click{" "}
          <strong>unsubscribe</strong> in any marketing email. We process
          opt-out requests within 10 business days and will honor them for at
          least 30 days as required by CAN-SPAM. See our{" "}
          <a href="/sms-terms" className="text-sage-600 underline">SMS Terms</a>{" "}
          for SMS-specific details.
        </li>
        <li>
          <strong>Update or correct your information:</strong> email{" "}
          <a href="mailto:privacy@aduverified.com" className="text-sage-600 underline">
            privacy@aduverified.com
          </a>{" "}
          (or{" "}
          <a href="mailto:chad@prismagentsolutions.com" className="text-sage-600 underline">
            chad@prismagentsolutions.com
          </a>
          ) with the correction. Please use the email you submitted with so we
          can verify identity.
        </li>
      </ul>

      <LegalH2>6. Your California privacy rights (CCPA / CPRA)</LegalH2>
      <p>
        If you are a California resident, the California Consumer Privacy Act
        (as amended by the California Privacy Rights Act) gives you the rights
        described in this section. Other states with similar laws (e.g.,
        Virginia, Colorado, Connecticut, Utah, Texas) provide analogous rights;
        we extend the same options to all U.S. residents as a matter of
        practice.
      </p>

      <h3 className="display-sm text-lg text-ink mt-6 mb-2">
        a. Categories of personal information we collect
      </h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Identifiers</strong> (CCPA § 1798.140(v)(1)(A)) — name, email,
          phone, IP address, online identifier.
        </li>
        <li>
          <strong>Customer records</strong> (§ 1798.80(e)) — name, telephone
          number.
        </li>
        <li>
          <strong>Commercial information</strong> (§ 1798.140(v)(1)(D)) — your
          stated interest in obtaining ADU construction services, project
          intent, budget band, timeline.
        </li>
        <li>
          <strong>Internet or other electronic network activity</strong> (§
          1798.140(v)(1)(F)) — referring URL, browser user-agent.
        </li>
        <li>
          <strong>Geolocation data — approximate only</strong> (§
          1798.140(v)(1)(G)) — your state and ZIP code. We do not collect
          precise (GPS-level) geolocation.
        </li>
        <li>
          <strong>Inferences</strong> (§ 1798.140(v)(1)(K)) — we may derive
          basic lead-quality inferences (e.g., project size band) from the
          information you provide.
        </li>
      </ul>
      <p>
        We do not knowingly collect <strong>sensitive personal information</strong>{" "}
        as defined in § 1798.140(ae) (e.g., Social Security number,
        government-issued IDs, financial-account credentials, precise
        geolocation, racial or ethnic origin, religious beliefs, biometric
        data, health data, sexual orientation, or contents of mail/email/SMS
        not sent to ADUVerified). You should not include such information in
        your project notes.
      </p>

      <h3 className="display-sm text-lg text-ink mt-6 mb-2">
        b. Sources and purposes
      </h3>
      <p>
        <strong>Sources:</strong> directly from you (the inquiry form), and
        automatically from your device (logs and analytics).{" "}
        <strong>Purposes:</strong> to provide the matching service, communicate
        with you, market to you if you opted in, secure the Site, and comply
        with law (as detailed in <em>Section 2</em>).
      </p>

      <h3 className="display-sm text-lg text-ink mt-6 mb-2">
        c. Categories we &ldquo;sell&rdquo; or &ldquo;share&rdquo;
      </h3>
      <p>
        We <strong>sell and share</strong> the following categories with matched
        ADU builders, because builders pay us per matched lead:{" "}
        <strong>identifiers, customer records, commercial information,</strong>{" "}
        and <strong>approximate geolocation</strong>. We do not sell or share
        sensitive personal information. We do not use or disclose information
        for cross-context behavioral advertising on third-party platforms.
      </p>

      <h3 className="display-sm text-lg text-ink mt-6 mb-2">
        d. Categories disclosed for business purposes
      </h3>
      <p>
        We disclose all of the categories above to our service providers (see
        <em> Section 3.b</em>) under contractual restrictions limiting their
        use to providing services to us. Such disclosures are not &ldquo;sales&rdquo;
        under the CCPA.
      </p>

      <h3 className="display-sm text-lg text-ink mt-6 mb-2">
        e. Your rights
      </h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Right to know</strong> what personal information we have
          collected about you, the sources, the business or commercial
          purposes, and the categories of third parties with whom we shared it.
        </li>
        <li>
          <strong>Right to delete</strong> personal information we collected
          from you, subject to legal exceptions.
        </li>
        <li>
          <strong>Right to correct</strong> inaccurate personal information.
        </li>
        <li>
          <strong>Right to opt out of the sale or sharing</strong> of your
          personal information. (See <em>Section 6.f</em> — this is the most
          relevant right for our service.)
        </li>
        <li>
          <strong>Right to limit use of sensitive personal information</strong>{" "}
          — we do not collect sensitive PI as defined by CPRA, so there is
          nothing to limit. If you believe we are processing sensitive PI about
          you, please contact us.
        </li>
        <li>
          <strong>Right to non-discrimination</strong> — we will not deny you
          service, charge you a different price, or provide a different quality
          of service because you exercised any of these rights.
        </li>
      </ul>

      <h3 className="display-sm text-lg text-ink mt-6 mb-2">
        f. How to opt out of the sale or sharing of your information
      </h3>
      <p>
        Email{" "}
        <a href="mailto:privacy@aduverified.com" className="text-sage-600 underline">
          privacy@aduverified.com
        </a>{" "}
        with the subject &ldquo;Do Not Sell or Share My Personal
        Information.&rdquo; In the body, include the email address you used to
        submit your inquiry so we can verify and locate your record.
      </p>
      <p>
        <strong>We honor the Global Privacy Control (GPC) signal</strong> sent
        by your browser as a valid opt-out of sale and sharing for the
        browser/device that sent it.
      </p>
      <p>
        <strong>Important practical note:</strong> the core service we provide
        — matching you with ADU builders — necessarily involves transferring
        your inquiry to those builders. If you opt out of sharing,{" "}
        <strong>we cannot complete the match</strong>, and the only useful
        thing we can do with your record is delete it. Opting out is therefore
        functionally equivalent to canceling your inquiry.
      </p>

      <h3 className="display-sm text-lg text-ink mt-6 mb-2">
        g. How to exercise your other rights
      </h3>
      <p>
        Email{" "}
        <a href="mailto:privacy@aduverified.com" className="text-sage-600 underline">
          privacy@aduverified.com
        </a>{" "}
        from the email address you used to submit your inquiry. We will respond
        within 45 days as required by the CCPA (we may extend once by another
        45 days where reasonably necessary and will tell you). We will verify
        your identity by matching the email and, for sensitive requests, by
        asking a small number of additional questions about your inquiry.
      </p>

      <h3 className="display-sm text-lg text-ink mt-6 mb-2">
        h. Authorized agents
      </h3>
      <p>
        You may designate an authorized agent to make a request on your behalf.
        We will require the agent to provide written, signed authorization and
        we may also contact you directly to verify the request.
      </p>

      <LegalH2>7. Children&apos;s privacy</LegalH2>
      <p>
        The Site is intended for adults (18+) who own or are purchasing
        residential property. We do not knowingly collect personal information
        from children under 16. If you believe a minor has submitted
        information, please email{" "}
        <a href="mailto:privacy@aduverified.com" className="text-sage-600 underline">
          privacy@aduverified.com
        </a>{" "}
        and we will delete the record promptly. Under CPRA, we do not sell or
        share personal information of consumers we know to be under 16 without
        affirmative opt-in consent.
      </p>

      <LegalH2>8. Security</LegalH2>
      <p>
        We use reasonable administrative and technical safeguards designed to
        protect your information, including:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>HTTPS / TLS encryption for all Site traffic.</li>
        <li>
          Row-level security on our database tables (the public can{" "}
          <em>insert</em> a single inquiry but cannot read, update, or delete
          any data).
        </li>
        <li>
          Strict separation between public (anon) and administrative
          (service-role) credentials; administrative credentials are never
          exposed to the browser.
        </li>
        <li>
          Per-IP rate limiting and an anti-bot honeypot on the inquiry
          endpoint.
        </li>
        <li>
          Same-origin checks on form submissions to reduce cross-site abuse.
        </li>
        <li>Secrets and API keys stored outside the source repository.</li>
      </ul>
      <p>
        No method of transmission or storage is 100% secure. We cannot
        guarantee absolute security, but we will notify you and any required
        authorities if we learn of a security incident affecting your personal
        information, as required by law.
      </p>

      <LegalH2>9. International users</LegalH2>
      <p>
        ADUVerified is a U.S. service intended for U.S. homeowners in the
        states we currently cover (California, Oregon, Washington, Colorado,
        Texas, Arizona). The Site and our data are hosted in the United
        States. If you access the Site from outside the U.S., you understand
        that your information will be transferred to and processed in the
        United States, which may have different data-protection rules than
        your home country.
      </p>

      <LegalH2>10. Cookies and similar technologies</LegalH2>
      <p>
        We use a minimal set of strictly-necessary cookies and local-storage
        items required to operate the Site (for example, to remember that you
        successfully submitted the inquiry). We also use Google Analytics 4,
        which sets analytics cookies (such as <code>_ga</code> and{" "}
        <code>_ga_*</code>) to measure aggregate site usage. We do not use
        third-party advertising cookies, retargeting pixels, or cross-site
        trackers. You can opt out of Google Analytics tracking site-wide by
        installing the{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener"
          className="underline"
        >
          Google Analytics Opt-out Browser Add-on
        </a>
        , or by setting your browser to block third-party cookies.
      </p>

      <LegalH2>11. Third-party links</LegalH2>
      <p>
        The Site links to third-party websites (e.g., state ADU-program pages,
        official licensing boards). We are not responsible for the privacy
        practices or content of those sites. Read the privacy policies of any
        third-party site you visit.
      </p>

      <LegalH2>12. Changes to this Privacy Policy</LegalH2>
      <p>
        We may update this Privacy Policy from time to time. The &ldquo;Last
        updated&rdquo; date at the top reflects the most recent revision. If
        we make material changes (for example, adding new third-party
        recipients of your information, or new categories of data we collect),
        we will notify you by email (to the address you used to submit your
        inquiry) or by a prominent notice on the Site before the changes take
        effect.
      </p>

      <LegalH2>13. Contact us</LegalH2>
      <p>
        Questions, requests, or concerns about this Policy or your information:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Email:{" "}
          <a href="mailto:privacy@aduverified.com" className="text-sage-600 underline">
            privacy@aduverified.com
          </a>
        </li>
        <li>
          Alternate email:{" "}
          <a href="mailto:chad@prismagentsolutions.com" className="text-sage-600 underline">
            chad@prismagentsolutions.com
          </a>
        </li>
        <li>
          Mailing address: [Insert business mailing address before launch — required for CAN-SPAM compliance on marketing emails.]
        </li>
      </ul>

      <LegalH2>14. Effective date</LegalH2>
      <p>This Privacy Policy is effective as of the &ldquo;Last updated&rdquo; date shown above.</p>
    </LegalPage>
  );
}
