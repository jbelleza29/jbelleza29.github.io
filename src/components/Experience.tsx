import { Card } from "@astryxdesign/core/Card";
import { VStack } from "@astryxdesign/core/VStack";
import { HStack } from "@astryxdesign/core/HStack";
import { Text, Heading } from "@astryxdesign/core/Text";
import { Token } from "@astryxdesign/core/Token";
import { techColor } from "@/lib/tech-colors";

const experiences = [
  {
    years: "Dec 2020 - Present",
    title: "Software Engineer, Front-End",
    company: "Huckberry",
    description:
      "Building React/Redux features for a high-traffic outdoor retail platform. The biggest thing I've shipped here: stood up Storybook from scratch (config, CI pipeline, full component library) and brought in Chromatic so no UI change lands without a screenshot review. Co-led a company-wide rebrand, wiring design tokens from Figma all the way through to component migration across checkout, nav, and core UI. Also contributed to the Rails backend and ran A/B tests that moved conversion metrics.",
    tech: ["React", "Redux", "TypeScript", "Storybook", "Chromatic", "GraphQL", "Ruby on Rails"],
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
    tech: ["Python", "Flask", "Django", "JavaScript", "REST APIs", "PostgreSQL", "GraphQL", "React"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <VStack gap={2}>
          <Heading level={2}>Experience</Heading>
          <Text type="body" color="secondary">
            Where I&apos;ve worked and what I&apos;ve shipped.
          </Text>
        </VStack>
        <div className="flex flex-col gap-5 mt-6">
          {experiences.map((exp) => (
            <Card key={exp.title + exp.company} padding={6}>
              <div className="flex flex-col sm:flex-row sm:gap-10">
                <div className="sm:w-40 shrink-0 mb-3 sm:mb-0">
                  <Text type="supporting" as="p">
                    {exp.years}
                  </Text>
                </div>
                <VStack gap={3}>
                  <VStack gap={0.5}>
                    <Heading level={3}>{exp.title}</Heading>
                    <Text type="body" color="secondary">
                      {exp.company}
                    </Text>
                  </VStack>
                  <Text type="body" color="secondary">
                    {exp.description}
                  </Text>
                  <HStack gap={2} wrap="wrap">
                    {exp.tech.map((t) => (
                      <Token key={t} label={t} color={techColor(t)} />
                    ))}
                  </HStack>
                </VStack>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
