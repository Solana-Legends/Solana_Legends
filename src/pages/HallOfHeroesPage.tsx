import HallOfHeroesPortal from "../components/heroes/HallOfHeroesPortal";
import HeroDocumentary from "../components/heroes/HeroDocumentary";
import HeroesGallery from "../components/heroes/HeroesGallery";
import LanguageSwitcher from "@/components/LanguageSwitcher"; // Recomendado para que puedan cambiar el idioma aquí también

export default function HallOfHeroesPage() {
  return (
    <main className="min-h-screen bg-[#0F0B1E] overflow-x-hidden selection:bg-purple-500/30">
      
      {/* Selector de idioma flotante por si el usuario quiere leer el lore en otro idioma */}
      <div className="absolute top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* 1. El Atrio / Entrada */}
      <HallOfHeroesPortal />

      {/* 2. El Puente Narrativo (Vídeo Central) */}
      <HeroDocumentary />

      {/* 3. Las Cámaras de Contención y Cronología */}
      <HeroesGallery />

    </main>
  );
}