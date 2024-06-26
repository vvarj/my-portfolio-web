import ProjectSection from "@/components/ProjectSection";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
      <FooterSection />
    </main>
  );
}
