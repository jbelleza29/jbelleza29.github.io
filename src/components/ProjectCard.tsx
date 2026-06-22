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
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col gap-4 hover:border-zinc-600 transition-colors">
      <div>
        <h3 className="text-zinc-100 font-semibold text-lg mb-2">{name}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-400"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4 pt-2 border-t border-zinc-800">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-orange-500 hover:text-orange-400 transition-colors"
          >
            Live ↗
          </a>
        )}
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          GitHub ↗
        </a>
      </div>
    </div>
  );
}
