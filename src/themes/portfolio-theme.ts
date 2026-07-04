import { defineTheme } from "@astryxdesign/core/theme";

const canvas = "#0f1208";
const card = "#252a13";
const stroke = "#3d4127";
const olive = "#636b2f";
const sage = "#bac095";
const lime = "#d4de95";

export const portfolioTheme = defineTheme({
  name: "portfolio",
  color: { accent: lime, neutralStyle: "warm" },
  tokens: {
    "--color-background-body": [canvas, canvas],
    "--color-background-surface": [card, card],
    "--color-background-card": [card, card],
    "--color-background-popover": [card, card],
    "--color-border": [stroke, stroke],
    "--color-border-emphasized": [olive, olive],
    "--color-text-primary": [lime, lime],
    "--color-text-secondary": [sage, sage],
    "--color-text-accent": [lime, lime],
    "--color-icon-accent": [lime, lime],
    "--color-accent": [lime, lime],
    "--color-on-accent": [canvas, canvas],
    "--font-family-body": "var(--font-space)",
    "--font-family-heading": "var(--font-space)",
    "--font-family-code": "var(--font-geist-mono)",
  },
});
