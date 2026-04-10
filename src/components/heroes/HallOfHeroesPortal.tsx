import HeroCard from "@/components/heroes/HeroCard";
import HeroesLayout from "@/components/heroes/HeroesLayout";

const guardians = [
  {
    id: "zapsol",
    name: "ZapSol",
    title: { en: "👑 ENTHRONED", es: "👑 ENTRONIZADO" },
    aura: "⚡",
    image: "/images/guardians/Zap.png", 
    description: {
      en: "The community catalyst. Official energy of Solana.",
      es: "El catalizador de la comunidad. Energía oficial de Solana.",
    },
    actions: [
      { label: "PUMPFUN", url: "https://pump.fun/coin/GmPDuwtYuMUpCrzGwYasxmo6vSmWvaHSg1Kf7skipump", color: "bg-yellow-400" },
      { label: "JUPITER", url: "https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=GmPDuwtYuMUpCrzGwYasxmo6vSmWvaHSg1Kf7skipump", color: "bg-green-500" }
    ]
  },
  {
    id: "monkesol",
    name: "MonkeSol",
    title: { en: "ARCHIVED", es: "ARCHIVADO" },
    aura: "🔥",
    image: "/images/guardians/Monk.png",
    description: {
      en: "Urban Fire stored in the vault.",
      es: "Fuego Urbano guardado en la bóveda.",
    },
    actions: []
  },
  {
    id: "chipisol",
    name: "ChipiSol",
    title: { en: "ARCHIVED", es: "ARCHIVADO" },
    aura: "❄️",
    image: "/images/guardians/Chip.png",
    description: {
      en: "Icy Strategy preserved in the portal.",
      es: "Estrategia Gélida preservada en el portal.",
    },
    actions: []
  },
];

export default function HallOfHeroesPortal() {
  return (
    <HeroesLayout titleKey="hero.hallOfHeroes" subtitleKey="hero.tagline">
      {/* Contenedor central con py mínimo */}
      <div className="flex-grow flex flex-col justify-center items-center py-2">
        {/* TÁCTICO: max-w aumentado a 1300px y gap ajustado para tarjetas GRANDES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full max-w-[1300px] mx-auto px-4 place-items-stretch">
          {guardians.map((g) => (
            <HeroCard key={g.id} {...g} />
          ))}
        </div>
      </div>

      <footer className="mt-auto py-3 bg-black/40 border-t border-white/5 w-full">
        <p className="text-center text-[10px] md:text-xs text-yellow-500/50 font-mono tracking-[0.5em] uppercase">
           STATUS: ZAP SOL ASCENDED
        </p>
      </footer>
    </HeroesLayout>
  );
}