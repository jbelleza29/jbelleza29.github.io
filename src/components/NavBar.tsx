// Nav images — swap these out per item once you have the real assets
const NORMAL = "https://i.imgur.com/dEjjgFK.png";
const ACTIVE  = "https://i.imgur.com/x39xRIo.png";

const navItems = [
  { label: "About",      href: "#about",      normal: NORMAL, active: ACTIVE },
  { label: "Projects",   href: "#projects",   normal: NORMAL, active: ACTIVE },
  { label: "Experience", href: "#experience", normal: NORMAL, active: ACTIVE },
];

const shapes = [
  { red: "19.5,0 110.7,0 80.1,32.7 3.1,47",   cyan: "11,3 85.1,0 118.8,45.6 14.3,29" },
  { red: "0,7.1 127.3,0 32.3,64 4.8,58.2",     cyan: "14,0.5 127.4,0 77.4,164 2.3,61.1" },
  { red: "15.5,0 70.7,0 118.1,32.7 43.1,47",   cyan: "17.3,0 105.1,0 68.8,45.6 24.3,39" },
];

export default function NavBar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-stroke bg-canvas/90 backdrop-blur-md jnav-overflow"
    >
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between jnav-overflow">
        <a
          href="#about"
          className="text-xl font-bold tracking-widest text-lime hover:opacity-80 transition-opacity duration-200"
        >
          JP
        </a>

        <div className="hidden sm:flex items-center jnav-overflow">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={`jnav-link${i % 2 !== 0 ? " jnav-even" : ""}`}
            >
              <span className="jnav-fallback">{item.label}</span>
              <div className="jnav-img-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="jnav-img jnav-normal" src={item.normal} alt={item.label} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="jnav-img jnav-active" src={item.active} alt="" />
              </div>
              <div className="jnav-shape-wrapper">
                <div className="jnav-shape jnav-red jnav-jelly">
                  <svg viewBox="0 0 108.1 47" xmlns="http://www.w3.org/2000/svg">
                    <polygon fill="#FF0000" points={shapes[i].red} />
                  </svg>
                </div>
                <div className="jnav-shape jnav-cyan jnav-jelly">
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
