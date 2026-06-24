import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyUs } from "@/components/WhyUs";
import { StateBlocks } from "@/components/StateBlock";
import { LeadForm } from "@/components/LeadForm";
import { FAQ } from "@/components/FAQ";
import { ParallaxBand } from "@/components/ParallaxBand";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <TrustBar />
      <HowItWorks />

      {/* Photo band — the honest-voice answer to inflated competitor claims */}
      <ParallaxBand src="/homes/home-palms-day.webp" scrimClassName="bg-ink/55">
        <p className="kicker text-paper/75">The honest version</p>
        <p className="font-display italic text-paper text-[clamp(1.6rem,3.4vw,2.6rem)] leading-snug mt-5">
          No inflated value promises. Just real costs, real local builders, and
          straight answers.
        </p>
      </ParallaxBand>

      <WhyUs />
      <StateBlocks />

      {/* Photo band — emotional lead-in to the form */}
      <ParallaxBand src="/homes/home-oregon.webp" scrimClassName="bg-ink/50">
        <p className="kicker text-paper/75">Your project</p>
        <p className="font-display italic text-paper text-[clamp(1.6rem,3.4vw,2.6rem)] leading-snug mt-5">
          Picture it in your backyard. Then get real numbers and the right
          builders to make it happen.
        </p>
        <a
          href="#lead-form"
          className="mt-8 inline-flex items-center gap-3 bg-paper text-ink px-7 py-3.5 text-sm tracking-wide font-medium transition hover:bg-paper-soft"
        >
          Get matched
        </a>
      </ParallaxBand>

      <LeadForm />
      <FAQ />

      {/* Closing photo band */}
      <ParallaxBand
        src="/homes/home-palms-dusk.webp"
        scrimClassName="bg-ink/55"
        minHeight="58vh"
      >
        <p className="font-display italic text-paper text-[clamp(1.5rem,3vw,2.3rem)] leading-snug">
          Straight answers on ADU costs. Local builders who know your city.
        </p>
        <a
          href="#lead-form"
          className="mt-7 inline-flex items-center gap-3 bg-paper text-ink px-7 py-3.5 text-sm tracking-wide font-medium transition hover:bg-paper-soft"
        >
          Get matched
        </a>
      </ParallaxBand>
    </main>
  );
}
