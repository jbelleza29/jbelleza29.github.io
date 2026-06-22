export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-stroke bg-canvas/90 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        <span className="font-semibold text-lime">pritz.dev</span>
        <div className="flex items-center gap-4 text-sm text-sage">
          <a
            href="https://github.com/jbelleza29"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jbelleza29"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}
