import HeroSection from "@/components/HeroSection";
import CharacterGallery from "@/components/CharacterGallery";
import FollowerCounter from "@/components/FollowerCounter";
import ProgressSection from "@/components/ProgressSection";
import ProjectInfo from "@/components/ProjectInfo";
import SocialLinks from "@/components/SocialLinks";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Index() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* ❌ Eliminado el max-w que creaba bandas laterales */}
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
