import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-stroke bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        <a href="#about">
          <Image
            src="/jp-logo.png"
            alt="JP"
            width={100}
            height={32}
            className="h-8 w-auto object-contain"
          />
        </a>

        <div className="hidden sm:flex items-center gap-6 text-sm text-sage">
          <a href="#about" className="hover:text-lime transition-colors duration-200">
            About
          </a>
          <a href="#projects" className="hover:text-lime transition-colors duration-200">
            Projects
          </a>
          <a href="#experience" className="hover:text-lime transition-colors duration-200">
            Experience
          </a>
        </div>
      </div>
    </nav>
  );
}
