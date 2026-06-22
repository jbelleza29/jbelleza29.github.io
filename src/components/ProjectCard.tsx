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
    <div className="group bg-card border border-stroke rounded-xl p-6 flex flex-col gap-4 hover:border-sage/40 transition-colors duration-200">
      <div>
        {/* Card heading — lime on card (#252a13): ~9.5:1 ✓ */}
        <h3 className="text-lime font-semibold text-lg mb-2">{name}</h3>
        {/* Card body — sage on card: ~7.1:1 ✓ */}
        <p className="text-sage text-sm leading-relaxed">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((t) => (
          /*
           * Badge: bg-canvas (#0f1208) + border-stroke gives sage text ~7.8:1 ✓
           * Previously bg-stroke (#3D4127) + sage was ~4.3:1 — just under AA.
           */
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-md bg-canvas border border-stroke text-sage"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-2 border-t border-stroke">
        {liveUrl && (
          /*
           * "Live ↗" is the accent CTA — lime with an animated underline to
           * distinguish it visually from the secondary GitHub link.
           * lime on card bg: ~9.5:1 ✓
           */
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-lime underline-offset-2 decoration-lime/40 hover:decoration-lime underline transition-all duration-200"
          >
            Live ↗
          </a>
        )}
        {/* Secondary link — sage on card: ~7.1:1 ✓ */}
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-sage hover:text-lime transition-colors duration-200"
        >
          GitHub ↗
        </a>
      </div>
    </div>
  );
}
