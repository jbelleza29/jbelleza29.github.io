export default function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-[calc(100vh-3.5rem)] pt-14 px-6">
      <div className="mx-auto max-w-5xl w-full">
        <span className="inline-block border border-olive/60 text-sage text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded-sm mb-6">
          Hi, I&apos;m
        </span>
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
            className="px-5 py-2.5 bg-lime hover:bg-sage text-canvas font-medium rounded-lg text-sm transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/john-pritz-belleza-a651b6126/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-olive hover:border-sage text-sage hover:text-lime font-medium rounded-lg text-sm transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
