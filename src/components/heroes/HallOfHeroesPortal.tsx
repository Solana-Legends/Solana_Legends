import { useLanguage } from "@/contexts/LanguageContext";
import HeroCard from "@/components/heroes/HeroCard";
import HeroesGallery from "./HeroesGallery";
import HeroesLayout from "@/components/heroes/HeroesLayout";

const guardians = [
  {
    id: "zapsol",
    name: "ZapSol",
    title: {
      en: "Cosmic Ignition Protocol",
      es: "Protocolo de Ignición Cósmica",
    },
    aura: "⚡",
    // TÁCTICO: Ruta corregida a PNG transparente para que brille la aura
    image: "/assets/ZapSol.png", 
    description: {
      en: "Activated in the Technical Altar, ZapSol represents expansion and electric movement. It is the spark that connects dimensions.",
      es: "Activado en el Altar Técnico, ZapSol representa expansión y movimiento eléctrico. Es la chispa que conecta dimensiones.",
    },
  },
  {
    id: "monkesol",
    name: "MonkeSol",
    title: {
      en: "Urban Fire Core",
      es: "Núcleo de Fuego Urbano",
    },
    aura: "🔥",
    // TÁCTICO: Ruta corregida a PNG transparente
    image: "/assets/MonkeSol.png",
    description: {
      en: "Stored in the Blueprint, MonkeSol embodies street fire and spontaneous tribal energy that ignites the community.",
      es: "Almacenado en el Blueprint, MonkeSol encarna el fuego callejero y la energía tribal espontánea que enciende a la comunidad.",
    },
  },
  {
    id: "chipisol",
    name: "ChipiSol",
    title: {
      en: "Icy Strategy Blueprint",
      es: "Blueprint de Estrategia Gélida",
    },
    aura: "❄️",
    // TÁCTICO: Ruta corregida a PNG transparente
    image: "/assets/ChipiSol.png",
    description: {
      en: "The blueprint of a cold mind that sustains. Represents the strategy and emotional intelligence needed to build a legend.",
      es: "El blueprint de una mente fría que sostiene. Representa la estrategia y la inteligencia emocional necesaria para construir una leyenda.",
    },
  },
];

export default function HallOfHeroesPortal() {
  const { t } = useLanguage();

  return (
    // HeroesLayout debe manejar el BackButton como mirror del LangSwitcher
    <HeroesLayout titleKey="hero.hallOfHeroes" subtitleKey="hero.tagline">
      
      {/* Grid de héroes (Sección Principal comprimida para que quepa en pantalla) */}
      <div className="flex-grow flex flex-col justify-center items-center py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full max-w-[1000px] mx-auto px-4 place-items-center">
          {guardians.map((g, index) => {
            const delay = index * 0.3 + 0.6; // segundos

            return (
              <div
                key={g.id}
                className={`
                  opacity-0 translate-y-6 animate-fadeInUp
                  [animation-delay:${delay}s]
                `}
              >
                <HeroCard {...g} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Pie ritualizado (Movido fuera del Grid para equilibrio visual) */}
      <footer className="mt-auto py-6 md:py-8 border-t border-[#FFA908]/10 bg-[#0F0B1E]/60 w-full">
        <p className="text-center text-xs md:text-sm text-yellow-500/80 italic font-mono tracking-wide footer-aura">
          {t("characters.telegramNote")}
        </p>
      </footer>

      {/* Galería ritualizada */}
      <HeroesGallery />
    </HeroesLayout>
  );
}