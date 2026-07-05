import { VStack } from "@astryxdesign/core/VStack";
import { Text, Heading } from "@astryxdesign/core/Text";
import { Grid } from "@astryxdesign/core/Grid";
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
    description: "Recipe discovery and meal planning app. 1-day Take-home project",
    tech: ["TypeScript", "React"],
    repoUrl: "https://github.com/jbelleza29/just-cook",
  },
  {
    name: "persona-5-font-gen",
    description: "Type text, get a Persona 5 calling-card style SVG graphic. Pure SVG generator core.",
    tech: ["TypeScript", "React", "SVG"],
    repoUrl: "https://github.com/jbelleza29/persona-5-font-gen",
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <VStack gap={2}>
          <Heading level={2}>Projects</Heading>
          <Text type="body" color="secondary">
            A selection of things I&apos;ve built.
          </Text>
        </VStack>
        <div className="mt-6">
          <Grid columns={{ minWidth: 280 }} gap={5}>
            {projects.map((p) => (
              <ProjectCard key={p.name} {...p} />
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
}
