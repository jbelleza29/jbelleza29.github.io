import { ClickableCard } from "@astryxdesign/core/ClickableCard";
import { VStack } from "@astryxdesign/core/VStack";
import { HStack } from "@astryxdesign/core/HStack";
import { Text, Heading } from "@astryxdesign/core/Text";
import { Token } from "@astryxdesign/core/Token";
import { Link } from "@astryxdesign/core/Link";
import { techColor } from "@/lib/tech-colors";

interface ProjectCardProps {
  name: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl: string;
  image?: string;
}

export default function ProjectCard({
  name,
  description,
  tech,
  liveUrl,
  repoUrl,
  image,
}: ProjectCardProps) {
  const primaryUrl = liveUrl ?? repoUrl;

  return (
    <ClickableCard
      href={primaryUrl}
      target="_blank"
      label={`View ${name}${liveUrl ? "" : " on GitHub"}`}
      padding={0}
      className="h-full flex flex-col"
    >
      <div className="aspect-video overflow-hidden rounded-t-xl border border-black">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={`${name} screenshot`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="relative w-full h-full bg-black">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/starva.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover scale-110 opacity-25 blur-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Text type="label" color="secondary">
                Preview coming soon
              </Text>
            </div>
          </div>
        )}
      </div>
      <VStack gap={4} padding={6} className="flex-1">
        <VStack gap={2}>
          <Heading level={3}>{name}</Heading>
          <Text type="body" color="secondary">
            {description}
          </Text>
        </VStack>
        <HStack gap={2} wrap="wrap">
          {tech.map((t) => (
            <Token key={t} label={t} color={techColor(t)} />
          ))}
        </HStack>
        <HStack gap={4} className="mt-auto">
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
    </ClickableCard>
  );
}
