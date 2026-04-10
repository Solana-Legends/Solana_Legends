import HeroCard from "@/components/heroes/HeroCard";
import HeroesLayout from "@/components/heroes/HeroesLayout";
import HeroesGallery from "./HeroesGallery";

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
    actions: [
      { label: "Pump.fun", url: "https://pump.fun/coin/GmPDuwtYuMUpCrzGwYasxmo6vSmWvaHSg1Kf7skipump", color: "bg-yellow-400" },
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
    actions: []
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
    actions: []
  },
];

export default function HallOfHeroesPortal() {
  return (
    <HeroesLayout titleKey="hero.hallOfHeroes" subtitleKey="hero.tagline">
      
      {/* Contenedor comprimido verticalmente */}
      <div className="flex-grow flex flex-col justify-center items-center py-2 md:py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-[980px] mx-auto px-4 place-items-stretch">
          {guardians.map((g) => (
            <HeroCard key={g.id} {...g} />
          ))}
        </div>
      </div>

      <footer className="mt-auto py-3 border-t border-white/5 bg-black/20 w-full">
        <p className="text-center text-[10px] md:text-xs text-yellow-500/60 font-mono tracking-[0.4em] uppercase">
           Ritual Status: Zap Sol Ascended ⚡
        </p>
      </footer>

      {/* La galería queda debajo, fuera del impacto visual inicial del h-screen */}
      <HeroesGallery />
    </HeroesLayout>
  );
}