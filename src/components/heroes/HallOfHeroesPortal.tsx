import HeroCard from "@/components/heroes/HeroCard";
import HeroesGallery from "./HeroesGallery";
import HeroesLayout from "@/components/heroes/HeroesLayout";

const guardians = [
  {
    id: "zapsol",
    name: "ZapSol",
    title: { en: "👑 ENTHRONED LEGEND", es: "👑 LEYENDA ENTRONIZADA" },
    aura: "⚡",
    image: "/images/guardians/Zap.png", 
    description: {
      en: "The community has spoken. ZapSol is the official catalyst of the cosmic energy.",
      es: "La comunidad ha hablado. ZapSol es el catalizador oficial de la energía cósmica.",
    },
  },
  {
    id: "monkesol",
    name: "MonkeSol",
    title: { en: "ARCHIVED BLUEPRINT", es: "BLUEPRINT ARCHIVADO" },
    aura: "🔥",
    image: "/images/guardians/Monk.png",
    description: {
      en: "The Urban Fire remains in the archive, ready to be summoned if the ritual demands it.",
      es: "El Fuego Urbano permanece en el archivo, listo para ser invocado si el ritual lo exige.",
    },
  },
  {
    id: "chipisol",
    name: "ChipiSol",
    title: { en: "ARCHIVED BLUEPRINT", es: "BLUEPRINT ARCHIVADO" },
    aura: "❄️",
    image: "/images/guardians/Chip.png",
    description: {
      en: "The Icy Strategy is preserved in the portal as part of the foundational myth.",
      es: "La Estrategia Gélida se preserva en el portal como parte del mito fundacional.",
    },
  },
];

export default function HallOfHeroesPortal() {
  return (
    <HeroesLayout titleKey="hero.hallOfHeroes" subtitleKey="hero.tagline">
      
      {/* Reducimos el py y ajustamos el min-h para que el footer no se escape */}
      <div className="flex-grow flex flex-col justify-center items-center py-2 md:py-4 min-h-[calc(100vh-400px)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-[980px] mx-auto px-4 place-items-center">
          {guardians.map((g, index) => {
            const delay = index * 0.15 + 0.3;
            return (
              <div
                key={g.id}
                className="opacity-0 translate-y-4 animate-fadeInUp scale-90 md:scale-100"
                style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
              >
                <HeroCard {...g} />
              </div>
            );
          })}
        </div>
      </div>

      <footer className="mt-auto py-4 border-t border-[#FFA908]/10 bg-[#0F0B1E]/60 w-full">
        <p className="text-center text-[10px] md:text-xs text-yellow-500/60 font-mono tracking-widest uppercase">
           Ritual Status: Zap Sol Ascended ⚡
        </p>
      </footer>

      <HeroesGallery />
    </HeroesLayout>
  );
}