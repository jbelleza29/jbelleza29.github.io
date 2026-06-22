export default function Footer() {
  return (
    <footer className="mt-auto bg-card border-t border-stroke px-6 py-8">
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
            href="https://www.linkedin.com/in/john-pritz-belleza-a651b6126/"
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
