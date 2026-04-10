import HeroCard from "@/components/heroes/HeroCard";
import HeroesLayout from "@/components/heroes/HeroesLayout";
import HeroesGallery from "./HeroesGallery";

const guardians = [
  {
    id: "zapsol",
    name: "ZapSol",
    title: { 
      en: "👑 ENTHRONED LEGEND", 
      es: "👑 LEYENDA ENTRONIZADA" 
    },
    aura: "⚡",
    image: "/images/guardians/Zap.png", 
    description: {
      en: "The community has spoken. ZapSol is the official catalyst of the cosmic energy on the Solana network.",
      es: "La comunidad ha hablado. ZapSol es el catalizador oficial de la energía cósmica en la red de Solana.",
    },
    // Configuración de botones con estilo Ghost y textos precisos
    actions: [
      { 
        label: "pump.fun", 
        url: "https://pump.fun/coin/GmPDuwtYuMUpCrzGwYasxmo6vSmWvaHSg1Kf7skipump", 
        color: "border-yellow-400 text-yellow-400 hover:bg-yellow-400" 
      },
      { 
        label: "Jupiter", 
        url: "https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=GmPDuwtYuMUpCrzGwYasxmo6vSmWvaHSg1Kf7skipump", 
        color: "border-green-500 text-green-500 hover:bg-green-500" 
      }
    ]
  },
  {
    id: "monkesol",
    name: "MonkeSol",
    title: { 
      en: "ARCHIVED BLUEPRINT", 
      es: "BLUEPRINT ARCHIVADO" 
    },
    aura: "🔥",
    image: "/images/guardians/Monk.png",
    description: {
      en: "The Urban Fire remains in the archive, ready to be summoned if the ritual demands a new flame.",
      es: "El Fuego Urbano permanece en el archivo, listo para ser invocado si el ritual exige una nueva llama.",
    },
    actions: [] // Sin botones para personajes archivados
  },
  {
    id: "chipisol",
    name: "ChipiSol",
    title: { 
      en: "ARCHIVED BLUEPRINT", 
      es: "BLUEPRINT ARCHIVADO" 
    },
    aura: "❄️",
    image: "/images/guardians/Chip.png",
    description: {
      en: "The Icy Strategy is preserved in the narrative portal as part of the foundational myth.",
      es: "La Estrategia Gélida se preserva en el portal narrativo como parte del mito fundacional.",
    },
    actions: [] // Sin botones para personajes archivados
  },
];

export default function HallOfHeroesPortal() {
  return (
    <HeroesLayout titleKey="hero.hallOfHeroes" subtitleKey="hero.tagline">
      
      {/* Contenedor principal con centrado vertical para ocupar la pantalla */}
      <div className="flex-grow flex flex-col justify-center items-center py-4 md:py-6">
        {/* Rejilla expandida para tarjetas monumentales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full max-w-[1200px] mx-auto px-6 place-items-stretch">
          {guardians.map((g) => (
            <HeroCard key={g.id} {...g} />
          ))}
        </div>
      </div>

      {/* Footer minimalista de la sección */}
      <footer className="mt-auto py-4 border-t border-white/5 bg-black/20 w-full backdrop-blur-sm">
        <p className="text-center text-[10px] md:text-xs text-yellow-500/50 font-mono tracking-[0.5em] uppercase">
           Ritual Status: Zap Sol Ascended ⚡
        </p>
      </footer>

      {/* Galería que se activa con el scroll fuera del viewport inicial */}
      <HeroesGallery />
    </HeroesLayout>
  );
}