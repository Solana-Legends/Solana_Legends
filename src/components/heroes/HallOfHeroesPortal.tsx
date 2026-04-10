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
      { label: "pump.fun", url: "https://pump.fun/coin/GmPDuwtYuMUpCrzGwYasxmo6vSmWvaHSg1Kf7skipump", color: "border-yellow-400 text-yellow-400 hover:bg-yellow-400" },
      { label: "Jupiter", url: "https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=GmPDuwtYuMUpCrzGwYasxmo6vSmWvaHSg1Kf7skipump", color: "border-green-500 text-green-500 hover:bg-green-500" }
    ]
  },
  {
    id: "monkesol",
    name: "MonkeSol",
    title: { en: "ARCHIVED BLUEPRINT", es: "BLUEPRINT ARCHIVADO" },
    aura: "🔥",
    image: "/images/guardians/Monk.png",
    description: {
      en: "The Urban Fire remains in the archive.",
      es: "El Fuego Urbano permanece en el archivo.",
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
      en: "The Icy Strategy is preserved in the portal.",
      es: "La Estrategia Gélida se preserva en el portal.",
    },
    actions: []
  },
];

export default function HallOfHeroesPortal() {
  return (
    <HeroesLayout titleKey="hero.hallOfHeroes" subtitleKey="hero.tagline">
      
      {/* Grid de héroes con espaciado controlado */}
      <div className="w-full flex justify-center py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-[1100px] px-6">
          {guardians.map((g) => (
            <HeroCard key={g.id} {...g} />
          ))}
        </div>
      </div>

      <footer className="mt-8 py-6 border-t border-white/5 bg-black/20 w-full">
        <p className="text-center text-[10px] md:text-xs text-yellow-500/50 font-mono tracking-[0.5em] uppercase">
           Ritual Status: Zap Sol Ascended ⚡
        </p>
      </footer>

      <HeroesGallery />
    </HeroesLayout>
  );
}