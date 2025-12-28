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
      <div className="w-full max-w-screen-2xl mx-auto px-4 overflow-x-hidden">
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
