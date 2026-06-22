import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <ProjectsGrid />
      <Footer />
    </main>
  );
}
