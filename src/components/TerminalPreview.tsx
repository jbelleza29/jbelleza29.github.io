export type TerminalLine = {
  kind?: "cmd" | "out" | "ok" | "muted";
  text: string;
};

interface TerminalPreviewProps {
  title: string;
  lines: readonly TerminalLine[];
}

function Line({ kind = "out", text }: TerminalLine) {
  if (kind === "cmd") {
    return (
      <p className="whitespace-pre-wrap text-white/90">
        <span className="text-green-400">$ </span>
        {text}
      </p>
    );
  }
  if (kind === "ok") {
    return <p className="whitespace-pre-wrap text-green-400">{`✓ ${text}`}</p>;
  }
  if (kind === "muted") {
    return <p className="whitespace-pre-wrap text-white/40">{text}</p>;
  }
  return <p className="whitespace-pre-wrap text-white/60">{text}</p>;
}

export default function TerminalPreview({ title, lines }: TerminalPreviewProps) {
  return (
    <div className="w-full h-full bg-black flex flex-col font-mono text-[11px] leading-[1.6]">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-2 text-white/40">{title}</span>
      </div>
      <div className="flex-1 px-3 py-2 overflow-hidden">
        {lines.map((line, i) => (
          <Line key={i} {...line} />
        ))}
      </div>
    </div>
  );
}
