import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyUs } from "@/components/WhyUs";
import { StateBlocks } from "@/components/StateBlock";
import { LeadForm } from "@/components/LeadForm";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <TrustBar />
      <HowItWorks />
      <WhyUs />
      <StateBlocks />
      <LeadForm />
      <FAQ />
    </main>
  );
}
