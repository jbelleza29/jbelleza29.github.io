import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Starva",
    description:
      "Full-stack Strava analytics app. Visualize training data with a Next.js + GraphQL + MongoDB stack, authenticated via Strava OAuth. 27 Storybook stories with Chromatic visual regression in CI.",
    tech: ["Next.js 16", "Apollo", "GraphQL", "MongoDB", "Strava OAuth"],
    liveUrl: "https://starvingstarva.vercel.app",
    repoUrl: "https://github.com/jbelleza29/starva",
  },
  {
    name: "clipforge",
    description: "Video clip management and processing tool.",
    tech: ["TypeScript", "React"],
    repoUrl: "https://github.com/jbelleza29/clipforge",
  },
  {
    name: "just-cook",
    description: "Recipe discovery and meal planning app.",
    tech: ["TypeScript", "React"],
    repoUrl: "https://github.com/jbelleza29/just-cook",
  },
  {
    name: "nba-playerhub",
    description: "NBA player stats and analytics hub.",
    tech: ["TypeScript", "React"],
    repoUrl: "https://github.com/jbelleza29/nba-playerhub",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="px-6 py-20 bg-card">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold text-lime mb-2">Projects</h2>
        <p className="text-sage mb-10">A selection of things I&apos;ve built.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
