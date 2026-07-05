import type { ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  variant: "solid" | "outline";
  children: ReactNode;
}

export default function LinkButton({ href, variant, children }: LinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-button cta-button-${variant}`}
    >
      {children}
    </a>
  );
}
