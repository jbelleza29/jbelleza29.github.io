const experiences = [
  {
    years: "Dec 2020 - Present",
    title: "Software Engineer, Front-End",
    company: "Huckberry",
    description:
      "Building React/Redux features for a high-traffic outdoor retail platform. The biggest thing I've shipped here: stood up Storybook from scratch (config, CI pipeline, full component library) and brought in Chromatic so no UI change lands without a screenshot review. Co-led a company-wide rebrand, wiring design tokens from Figma all the way through to component migration across checkout, nav, and core UI. Also contributed to the Rails backend and ran A/B tests that moved conversion metrics.",
    tech: ["React", "Redux", "TypeScript", "Storybook", "Chromatic", "Figma", "GraphQL", "Ruby on Rails"],
  },
  {
    years: "Mar 2020 - Jun 2020",
    title: "Full-Stack Developer",
    company: "Iona & Co.",
    description:
      "Short contract for a Finnish client. Built a reservation management platform with separate admin and consumer portals, plus a CMS. Also shipped a cross-platform app for machine rental and purchasing services.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    years: "May 2017 - Nov 2019",
    title: "Software Engineer",
    company: "Appen",
    description:
      "Two and a half years at an Australian AI/data company. Architected the centralized data collection platform that became core infrastructure: a multi-format client/API model that drove tens of millions in AUD revenue. Also built a global telephony app handling ISDN/VoIP calls across multi-million-dollar projects, a time-tracking system with role-based access, and Python automation that cut a significant chunk of manual project-manager work.",
    tech: ["Python", "Flask", "Django", "JavaScript", "REST APIs", "PostgreSQL", "GraphQL"],
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
                <div className="sm:w-40 shrink-0 mb-3 sm:mb-0 sm:pt-0.5">
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
