import Image from "next/image";

export function Hero() {
  return (
    <section className="parallax flex items-center" style={{ minHeight: "88vh" }}>
      {/* Photographic backdrop — fixed-parallax on desktop, static on mobile */}
      <div className="parallax__img">
        <Image
          src="/homes/home-mountains.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center right" }}
        />
      </div>
      {/* Light overall scrim to deepen the photo */}
      <div className="parallax__scrim bg-ink/15" />

      <div className="parallax__content mx-auto w-full max-w-7xl px-6 lg:px-10 py-20">
        {/* Translucent paper panel keeps the headline crisp over photography */}
        <div className="max-w-2xl bg-paper/85 backdrop-blur-[2px] p-8 sm:p-10 lg:p-12 shadow-[0_30px_70px_-40px_rgba(26,23,20,0.45)]">
          <p className="kicker rise delay-100">№ 01 — ADU Directory</p>
          <h1 className="display rise delay-200 mt-5 text-[clamp(2.4rem,6vw,4.75rem)]">
            Know what your ADU will <em>really</em> cost, before you talk to a
            builder.
          </h1>

          <div className="rule-short mt-8 rise delay-300" />

          <p className="rise delay-400 mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
            No inflated value promises. Just real costs, local builders who know
            your city, and straight answers. Free for homeowners, always.
          </p>

          <div className="rise delay-500 mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#lead-form"
              className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-3.5 text-sm tracking-wide font-medium transition hover:bg-sage-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage-600"
            >
              Get matched
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-x-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5l5 5-5 5" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-ink-soft underline-grow hover:text-ink"
            >
              How it works
            </a>
          </div>

          <p className="rise delay-600 mt-10 max-w-md text-xs text-ink-muted font-mono leading-relaxed">
            Real city cost data · Up to 3 matched introductions · Builders pay us, never you.
          </p>
        </div>
      </div>
    </section>
  );
}
