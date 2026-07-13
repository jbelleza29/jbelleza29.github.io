import { TopNav, TopNavHeading, TopNavItem } from "@astryxdesign/core/TopNav";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export default function NavBar() {
  return (
    <div className="site-header fixed top-0 inset-x-0 z-50 px-6">
      <div className="mx-auto w-full max-w-5xl">
        <TopNav
          label="Primary"
          heading={
            <TopNavHeading
              logo={
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/brand/jp-logo-white.svg" alt="JP" className="h-5 sm:h-7 w-auto" />
              }
              headingHref="#about"
            />
          }
          startContent={navItems.map((item) => (
            <TopNavItem key={item.href} label={item.label} href={item.href} />
          ))}
        />
      </div>
    </div>
  );
}
