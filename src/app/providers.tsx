"use client";

import NextLink from "next/link";
import { Theme } from "@astryxdesign/core/theme";
import { LinkProvider } from "@astryxdesign/core/Link";
import { y2kTheme } from "@astryxdesign/theme-y2k/built";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Theme theme={y2kTheme} mode="dark">
      <LinkProvider component={NextLink}>
        <div className="page-shell">{children}</div>
      </LinkProvider>
    </Theme>
  );
}
