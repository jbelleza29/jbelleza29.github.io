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
    <div className="bg-card border border-stroke rounded-xl p-6 flex flex-col gap-4 hover:border-olive transition-colors">
      <div>
        <h3 className="text-lime font-semibold text-lg mb-2">{name}</h3>
        <p className="text-sage text-sm leading-relaxed">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-md bg-stroke text-sage"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4 pt-2 border-t border-stroke">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-lime hover:text-sage transition-colors"
          >
            Live ↗
          </a>
        )}
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-sage hover:text-lime transition-colors"
        >
          GitHub ↗
        </a>
      </div>
    </div>
  );
}
