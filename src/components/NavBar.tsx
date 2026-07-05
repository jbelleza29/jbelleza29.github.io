import { TopNav, TopNavHeading, TopNavItem } from "@astryxdesign/core/TopNav";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export default function NavBar() {
  return (
    <div className="site-header fixed top-0 inset-x-0 z-50">
      <TopNav
        label="Primary"
        heading={<TopNavHeading heading="JP" headingHref="#about" />}
        startContent={navItems.map((item) => (
          <TopNavItem key={item.href} label={item.label} href={item.href} />
        ))}
      />
    </div>
  );
}
