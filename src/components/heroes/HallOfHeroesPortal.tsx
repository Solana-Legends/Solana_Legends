import HeroCard from "@/components/heroes/HeroCard";
import HeroesGallery from "./HeroesGallery";
import HeroesLayout from "@/components/heroes/HeroesLayout";

const guardians = [
  {
    id: "zapsol",
    name: "ZapSol",
    title: {
      en: "👑 ENTHRONED LEGEND",
      es: "👑 LEYENDA ENTRONIZADA",
    },
    aura: "⚡",
    image: "/images/guardians/Zap.png", 
    description: {
      en: "The community has spoken. ZapSol is the official catalyst of the cosmic energy on the Solana network.",
      es: "La comunidad ha hablado. ZapSol es el catalizador oficial de la energía cósmica en la red de Solana.",
    },
  },
  {
    id: "monkesol",
    name: "MonkeSol",
    title: {
      en: "ARCHIVED BLUEPRINT",
      es: "BLUEPRINT ARCHIVADO",
    },
    aura: "🔥",
    image: "/images/guardians/Monk.png",
    description: {
      en: "The Urban Fire remains in the archive, ready to be summoned if the ritual demands a new flame.",
      es: "El Fuego Urbano permanece en el archivo, listo para ser invocado si el ritual exige una nueva llama.",
    },
  },
  {
    id: "chipisol",
    name: "ChipiSol",
    title: {
      en: "ARCHIVED BLUEPRINT",
      es: "BLUEPRINT ARCHIVADO",
    },
    aura: "❄️",
    image: "/images/guardians/Chip.png",
    description: {
      en: "The Icy Strategy is preserved in the narrative portal as part of the foundational myth.",
      es: "La Estrategia Gélida se preserva en el portal narrativo como parte del mito fundacional.",
    },
  },
];

export default function HallOfHeroesPortal() {

  return (
    <HeroesLayout titleKey="hero.hallOfHeroes" subtitleKey="hero.tagline">
      
      <div className="flex-grow flex flex-col justify-center items-center py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full max-w-[1000px] mx-auto px-4 place-items-center">
          {guardians.map((g, index) => {
            const delay = index * 0.2 + 0.4;
            return (
              <div
                key={g.id}
                className="opacity-0 translate-y-6 animate-fadeInUp"
                style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
              >
                <HeroCard {...g} />
              </div>
            );
          })}
        </div>
      </div>

      <footer className="mt-auto py-8 border-t border-[#FFA908]/10 bg-[#0F0B1E]/60 w-full">
        <p className="text-center text-xs md:text-sm text-yellow-500/80 italic font-mono tracking-widest">
           RITUAL STATUS: ZAP SOL ASCENDED ⚡
        </p>
      </footer>

      <HeroesGallery />
    </HeroesLayout>
  );
}