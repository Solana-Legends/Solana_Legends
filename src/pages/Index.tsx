import HeroSection from '@/components/HeroSection';
import CharacterGallery from '@/components/CharacterGallery';
import FollowerCounter from '@/components/FollowerCounter';
import ProgressSection from '@/components/ProgressSection'; // 🔥 bloque corregido
import ProjectInfo from '@/components/ProjectInfo';
import SocialLinks from '@/components/SocialLinks';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Index() {
  return (
    <div className="min-h-screen bg-black">
      <LanguageSwitcher />
      <HeroSection />
      <CharacterGallery />
      <FollowerCounter />
      <ProgressSection /> {/* 🔥 ahora sin prop followers */}
      <ProjectInfo />
      <SocialLinks />
    </div>
  );
}
