export default function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-[calc(100vh-3.5rem)] pt-14 px-6">
      <div className="mx-auto max-w-5xl w-full">
        {/* Mono label — lime on canvas: ~10.5:1 ✓ */}
        <p className="text-lime/70 text-sm font-mono mb-3 tracking-widest uppercase">
          Hi, I&apos;m
        </p>
        {/* Display heading — lime on canvas: ~10.5:1 ✓ */}
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-lime mb-4">
          Pritz Belleza
        </h1>
        {/* Subtitle — sage on canvas: ~7.8:1 ✓ */}
        <p className="text-xl sm:text-2xl text-sage mb-6">
          Senior Front-End Engineer
        </p>
        {/* Body — sage on canvas: ~7.8:1 ✓ */}
        <p className="max-w-xl text-sage leading-relaxed mb-8">
          I introduced Storybook and Chromatic at Huckberry, co-led a 2026
          design-system rebrand, and I&apos;m building toward full-stack. I care
          deeply about component quality, visual regression testing, and tooling
          that makes teams move faster.
        </p>
        <div className="flex gap-4 flex-wrap">
          {/* Primary CTA — canvas on lime: ~10.5:1 ✓ */}
          <a
            href="https://github.com/jbelleza29"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-lime hover:bg-sage text-canvas font-medium rounded-lg text-sm transition-colors duration-200"
          >
            GitHub
          </a>
          {/* Ghost CTA — sage text on canvas: ~7.8:1 ✓; border uses sage/40 so outline is visible */}
          <a
            href="https://linkedin.com/in/jbelleza29"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-sage/40 hover:border-sage/70 text-sage hover:text-lime font-medium rounded-lg text-sm transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
