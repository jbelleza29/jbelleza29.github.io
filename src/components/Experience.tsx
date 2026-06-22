const experiences = [
  {
    years: "2021 — Present",
    title: "Lead Front-End Engineer",
    company: "Huckberry",
    description:
      "Brought Storybook and Chromatic into the stack — component-driven development with visual regression tests running in CI on every PR. Co-led a ground-up design-system rebrand in 2026, from token strategy through to full component rollout across the product.",
    tech: ["React", "TypeScript", "Next.js", "Storybook", "Chromatic", "Tailwind CSS", "GraphQL"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold text-lime mb-2">Experience</h2>
        <p className="text-sage mb-10">Where I&apos;ve worked and what I&apos;ve shipped.</p>
        <div className="flex flex-col gap-5">
          {experiences.map((exp) => (
            <div
              key={exp.title + exp.company}
              className="bg-canvas border border-olive/40 rounded-xl p-6 hover:border-olive transition-colors duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:gap-10">
                <div className="sm:w-32 shrink-0 mb-3 sm:mb-0 sm:pt-0.5">
                  <p className="text-xs font-mono text-sage/60 uppercase tracking-widest">
                    {exp.years}
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="text-lime font-semibold text-lg leading-tight mb-0.5">
                    {exp.title}
                  </h3>
                  <p className="text-sage/60 text-sm mb-3">{exp.company}</p>
                  <p className="text-sage text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-md bg-olive/20 border border-olive/40 text-sage"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
