export default function Footer() {
  return (
    <footer className="mt-auto border-t border-stroke px-6 py-8">
      {/*
       * olive (#636b2f) on canvas (#0f1208) = ~3.2:1 — fails WCAG AA for small text.
       * sage (#bac095) on canvas = ~7.8:1 ✓ — used for all footer text.
       * Hover lifts to lime (~10.5:1) for a responsive feel.
       */}
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-sage/70">
        <span>© 2026 John Pritz Belleza</span>
        <div className="flex gap-4">
          <a
            href="https://github.com/jbelleza29"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jbelleza29"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
