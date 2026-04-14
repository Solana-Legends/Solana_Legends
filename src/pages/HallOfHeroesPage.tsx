// src/pages/HallOfHeroesPage.tsx
import HallOfHeroesPortal from "../components/heroes/HallOfHeroesPortal";
import HeroDocumentary from "../components/heroes/HeroDocumentary";
import HeroesGallery from "../components/heroes/HeroesGallery";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function HallOfHeroesPage() {
  return (
    <main className="min-h-screen bg-[#0F0B1E] overflow-x-hidden selection:bg-purple-500/30">
      
      <div className="absolute top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* 1. La Entrada Mística */}
      <HallOfHeroesPortal />

      {/* 2. El Documental (Evento Principal) */}
      <HeroDocumentary />

      {/* 3. El Gran Contenedor (Vídeos extra + Salas + Timeline) */}
      <HeroesGallery />

    </main>
  );
}