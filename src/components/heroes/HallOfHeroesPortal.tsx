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
    // TÁCTICO: Solo ZapSol tiene acciones de trading activas
    actions: [
      { label: "Pump.fun", url: "https://pump.fun/coin/GmPDuwtYuMUpCrzGwYasxmo6vSmWvaHSg1Kf7skipump", color: "bg-yellow-500" },
      { label: "Jupiter", url: "https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=GmPDuwtYuMUpCrzGwYasxmo6vSmWvaHSg1Kf7skipump", color: "bg-green-500" }
    ]
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
    actions: [] // Sin botones para archivados
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
    actions: [] // Sin botones para archivados
  },
];

export default function HallOfHeroesPortal() {
  return (
    <HeroesLayout titleKey="hero.hallOfHeroes" subtitleKey="hero.tagline">
      
      {/* Forzamos el min-h para que la siguiente sección no asome */}
      <div className="flex-grow flex flex-col justify-center items-center py-4 md:py-8 min-h-[70vh]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 w-full max-w-[1100px] mx-auto px-4 place-items-start">
          {guardians.map((g) => (
            <div key={g.id} className="w-full transition-all duration-500">
              <HeroCard {...g} />
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-auto py-6 border-t border-[#FFA908]/10 bg-[#0F0B1E]/80 w-full backdrop-blur-sm">
        <p className="text-center text-[10px] md:text-xs text-yellow-500/60 font-mono tracking-[0.4em] uppercase">
           Ritual Status: Zap Sol Ascended ⚡
        </p>
      </footer>

      <HeroesGallery />
    </HeroesLayout>
  );
}