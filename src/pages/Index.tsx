import HeroSection from "@/components/HeroSection";
import CharacterGallery from "@/components/CharacterGallery";
import FollowerCounter from "@/components/FollowerCounter";
import ProgressSection from "@/components/ProgressSection";
import ProjectInfo from "@/components/ProjectInfo";
import SocialLinks from "@/components/SocialLinks";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Index() {
  console.log("Renderizando Index.tsx - Cortafuegos activado");
  return (
    <div className="min-h-screen bg-black overflow-x-hidden border-8 border-red-500">
      <div className="w-full overflow-x-hidden">
        <LanguageSwitcher />
        <HeroSection />
        <CharacterGallery />
        <FollowerCounter />
        <ProgressSection />
        <ProjectInfo />
        <SocialLinks />
      </div>
    </div>
  );
}