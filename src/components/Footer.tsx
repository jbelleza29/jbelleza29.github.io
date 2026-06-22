export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-800 px-6 py-8">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <span>© 2026 John Pritz Belleza</span>
        <div className="flex gap-4">
          <a
            href="https://github.com/jbelleza29"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jbelleza29"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-100 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
