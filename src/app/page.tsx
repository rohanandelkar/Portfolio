import { Achievements } from "@/components/achievements";
import { Contact } from "@/components/contact";
import { CustomCursor } from "@/components/cursor";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className="min-h-screen" style={{ background: "var(--bg)", color: "var(--foreground)" }}>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
