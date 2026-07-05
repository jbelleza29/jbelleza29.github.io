export type TokenColor =
  | "default"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "cyan"
  | "blue"
  | "purple"
  | "pink"
  | "gray";

const TECH_COLORS: Record<string, TokenColor> = {
  TypeScript: "blue",
  JavaScript: "yellow",
  React: "cyan",
  "Next.js 16": "gray",
  "Node.js": "green",
  GraphQL: "pink",
  Apollo: "purple",
  MongoDB: "teal",
  "Strava OAuth": "orange",
  Redux: "purple",
  Storybook: "pink",
  Chromatic: "purple",
  Figma: "orange",
  "Ruby on Rails": "red",
  PostgreSQL: "blue",
  Python: "blue",
  Flask: "teal",
  Django: "green",
  "REST APIs": "gray",
  SVG: "orange",
};

const FALLBACK_COLORS: TokenColor[] = [
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "cyan",
  "blue",
  "purple",
  "pink",
  "gray",
];

export function techColor(tech: string): TokenColor {
  const known = TECH_COLORS[tech];
  if (known) return known;

  let hash = 0;
  for (let i = 0; i < tech.length; i++) {
    hash = (hash * 31 + tech.charCodeAt(i)) | 0;
  }
  return FALLBACK_COLORS[Math.abs(hash) % FALLBACK_COLORS.length];
}
