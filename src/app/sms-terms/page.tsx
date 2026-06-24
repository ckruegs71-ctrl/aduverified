import type { Metadata } from "next";
import { LegalPage, LegalH2 } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "SMS Terms",
  robots: { index: false, follow: true },
};

export default function SmsTermsPage() {
  return (
    <LegalPage title="SMS Terms &amp; Conditions" lastUpdated="2026-05-28 (draft)">
      <p>
        These SMS Terms apply to text messages sent by ADUVerified and the ADU
        builders we match you with.
      </p>

      <LegalH2>Program description</LegalH2>
      <p>
        When you submit our inquiry form and check the contact-consent box, you
        agree to receive text messages from ADUVerified and up to three matched
        ADU builders regarding your project inquiry, including via automated
        messaging technology. If you also opt into marketing, you may receive
        occasional ADU tips and updates from ADUVerified.
      </p>

      <LegalH2>Message frequency &amp; cost</LegalH2>
      <p>
        Message frequency varies based on your inquiry and the builders who
        respond. Message and data rates may apply, depending on your mobile
        carrier and plan.
      </p>

      <LegalH2>Opt-out &amp; help</LegalH2>
      <p>
        Reply <strong>STOP</strong> to any message to stop receiving texts from
        that sender. Reply <strong>HELP</strong> for help. Opting out of texts
        does not opt you out of email or phone contact; manage those separately.
      </p>

      <LegalH2>Carriers</LegalH2>
      <p>
        Carriers are not liable for delayed or undelivered messages. Supported
        carriers may change without notice.
      </p>

      <LegalH2>Privacy</LegalH2>
      <p>
        Your mobile information is handled per our{" "}
        <a href="/privacy" className="text-sage-600 underline">Privacy Policy</a>.
        [Before launch: confirm carrier 10DLC registration and align this
        language with the registered campaign, accounting for the fact that
        inquiry details are shared with matched builders.]
      </p>

      <LegalH2>Contact</LegalH2>
      <p>Questions? See the contact details in our <a href="/privacy" className="text-sage-600 underline">Privacy Policy</a>.</p>
    </LegalPage>
  );
}
