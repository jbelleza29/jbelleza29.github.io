"use client";

import NextLink from "next/link";
import { Theme } from "@astryxdesign/core/theme";
import { LinkProvider } from "@astryxdesign/core/Link";
import { portfolioTheme } from "@/themes/portfolio";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Theme theme={portfolioTheme} mode="dark">
      <LinkProvider component={NextLink}>{children}</LinkProvider>
    </Theme>
  );
}
