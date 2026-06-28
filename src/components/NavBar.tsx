const navItems = [
  { label: "About",      href: "#about" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
];

const shapes = [
  { red: "29.5,8.5 108.1,0 108.1,32.7 3.1,47",  cyan: "0.3,17 108.1,0 68.8,45.6 24.3,39" },
  { red: "0,7.1 108.1,0 32.3,47 4.8,47",          cyan: "14,0.5 108.1,0 77.4,47 2.3,47" },
  { red: "15.5,0 70.7,0 108.1,32.7 43.1,47",      cyan: "17.3,0 105.1,0 68.8,45.6 24.3,39" },
];

export default function NavBar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-stroke bg-canvas/90 backdrop-blur-md"
      style={{ overflow: "visible" }}
    >
      <div
        className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between"
        style={{ overflow: "visible" }}
      >
        {/* Logo — font will be updated when provided */}
        <a
          href="#about"
          className="text-xl font-bold tracking-widest text-lime hover:opacity-80 transition-opacity duration-200"
        >
          JP
        </a>

        <div className="hidden sm:flex items-center gap-6" style={{ overflow: "visible" }}>
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link-wrapper ${i % 2 !== 0 ? "nav-even" : ""}`}
            >
              <span className="nav-text text-sm text-sage relative z-10">
                {item.label}
              </span>
              <div className="nav-shape-wrapper">
                <div className="nav-shape nav-shape-red nav-jelly">
                  <svg viewBox="0 0 108.1 47" xmlns="http://www.w3.org/2000/svg">
                    <polygon fill="#FF0000" points={shapes[i].red} />
                  </svg>
                </div>
                <div className="nav-shape nav-shape-cyan nav-jelly">
                  <svg viewBox="0 0 108.1 47" xmlns="http://www.w3.org/2000/svg">
                    <polygon fill="#00FFFF" points={shapes[i].cyan} />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
