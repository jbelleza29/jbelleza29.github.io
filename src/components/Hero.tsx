export default function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-[calc(100vh-3.5rem)] pt-14 px-6">
      <div className="mx-auto max-w-5xl w-full">
        <p className="text-lime text-sm font-mono mb-3">Hi, I&apos;m</p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-lime mb-4">
          Pritz Belleza
        </h1>
        <p className="text-xl sm:text-2xl text-sage mb-6">
          Senior Front-End Engineer
        </p>
        <p className="max-w-xl text-sage leading-relaxed mb-8">
          I introduced Storybook and Chromatic at Huckberry, co-led a 2026
          design-system rebrand, and I&apos;m building toward full-stack. I care
          deeply about component quality, visual regression testing, and tooling
          that makes teams move faster.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="https://github.com/jbelleza29"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-lime hover:bg-sage text-canvas font-medium rounded-lg text-sm transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jbelleza29"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-stroke hover:border-olive text-sage font-medium rounded-lg text-sm transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
