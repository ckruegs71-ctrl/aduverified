import Image from "next/image";

/**
 * Full-width photographic divider band with an iOS-safe fixed-parallax effect
 * (see .parallax in globals.css). The image stays put while the band scrolls
 * over it; on mobile / reduced-motion it falls back to a clean static image.
 *
 * `alt=""` by default — these are decorative hero imagery, not content. Never
 * caption them as real projects.
 */
export function ParallaxBand({
  src,
  alt = "",
  minHeight = "70vh",
  scrimClassName = "bg-ink/45",
  objectPosition = "center",
  children,
}: {
  src: string;
  alt?: string;
  minHeight?: string;
  scrimClassName?: string;
  objectPosition?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      className="parallax flex items-center justify-center"
      style={{ minHeight }}
    >
      <div className="parallax__img">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition }}
        />
      </div>
      <div className={`parallax__scrim ${scrimClassName}`} />
      {children ? (
        <div className="parallax__content w-full max-w-4xl px-6 text-center">
          {children}
        </div>
      ) : null}
    </section>
  );
}
