import { Card } from "@astryxdesign/core/Card";
import { VStack } from "@astryxdesign/core/VStack";
import { HStack } from "@astryxdesign/core/HStack";
import { Text, Heading } from "@astryxdesign/core/Text";
import { Badge } from "@astryxdesign/core/Badge";
import { Link } from "@astryxdesign/core/Link";

interface ProjectCardProps {
  name: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl: string;
}

export default function ProjectCard({
  name,
  description,
  tech,
  liveUrl,
  repoUrl,
}: ProjectCardProps) {
  return (
    <Card padding={6}>
      <VStack gap={4}>
        <VStack gap={2}>
          <Heading level={3}>{name}</Heading>
          <Text type="body" color="secondary">
            {description}
          </Text>
        </VStack>
        <HStack gap={2} wrap="wrap">
          {tech.map((t) => (
            <Badge key={t} label={t} />
          ))}
        </HStack>
        <HStack gap={4}>
          {liveUrl && (
            <Link href={liveUrl} isExternalLink hasUnderline>
              Live
            </Link>
          )}
          <Link href={repoUrl} isExternalLink hasUnderline>
            GitHub
          </Link>
        </HStack>
      </VStack>
    </Card>
  );
}
