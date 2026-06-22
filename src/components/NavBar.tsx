export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-stroke bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        <span className="font-semibold tracking-tight text-lime">pritz.dev</span>
        <div className="flex items-center gap-5 text-sm text-sage">
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
    </nav>
  );
}
