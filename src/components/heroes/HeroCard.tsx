import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

interface Action {
  label: string;
  url: string;
  color: string;
}

interface HeroCardProps {
  id: string; // Lo hacemos obligatorio para las animaciones
  name: string;
  title: { en: string; es: string };
  aura: string;
  image: string;
  description: { en: string; es: string };
  actions?: Action[]; // Nueva prop para los botones de trading
}

export default function HeroCard({
  id,
  name,
  title,
  aura,
  image,
  description,
  actions = []
}: HeroCardProps) {
  const { language } = useLanguage();

  // Mantenemos tus lógicas de clases ritualizadas
  const auraClass = id === "zapsol" ? "aura-zapsol" : id === "monkesol" ? "aura-monkesol" : id === "chipisol" ? "aura-chipisol" : "";
  const heroAnimation = id === "zapsol" ? "hero-zapsol" : id === "monkesol" ? "hero-monkesol" : id === "chipisol" ? "hero-chipisol" : "";
  const heroAura = id === "zapsol" ? "hero-zapsol-aura" : id === "monkesol" ? "hero-monkesol-aura" : id === "chipisol" ? "hero-chipisol-aura" : "";
  const elementalSymbol = id === "zapsol" ? "⚡️" : id === "monkesol" ? "🔥" : id === "chipisol" ? "❄️" : "";
  const symbolColor = id === "zapsol" ? "text-yellow-400" : id === "monkesol" ? "text-red-500" : id === "chipisol" ? "text-blue-300" : "";
  const symbolAnimation = id === "zapsol" ? "symbol-hero-zapsol-flicker" : id === "monkesol" ? "symbol-monkesol" : id === "chipisol" ? "symbol-chipisol" : "";
  const symbolAura = id === "zapsol" ? "symbol-zapsol-aura" : id === "monkesol" ? "symbol-monkesol-aura" : id === "chipisol" ? "symbol-chipisol-aura" : "";

  return (
    <div
      data-id={id}
      className={`relative bg-[#1A1530]/80 rounded-xl p-5 shadow-lg text-left transition-all duration-500 border border-white/5 flex flex-col h-full max-w-[320px] ${auraClass}`}
    >
      {/* Cabecera: Imagen y Símbolo */}
      <div className="relative h-20 mb-4">
        <img
          src={image}
          alt={name}
          className={`absolute top-0 left-0 w-20 h-20 object-contain rounded-md ${heroAnimation} ${heroAura}`}
        />
        <div className={`absolute top-0 right-0 text-3xl drop-shadow-lg ${symbolColor} ${symbolAnimation} ${symbolAura}`}>
          {elementalSymbol}
        </div>
      </div>

      {/* Cuerpo: Textos */}
      <div className="flex-grow">
        <h2 className="text-xl font-bold text-white uppercase tracking-tight">
          {aura} {name}
        </h2>
        <p className="text-[#FFA908] text-[10px] font-mono tracking-widest uppercase mb-2">
          {title[language]}
        </p>
        <p className="text-indigo-200/80 text-xs leading-relaxed line-clamp-4">
          {description[language]}
        </p>
      </div>

      {/* Acciones: Solo se muestran si existen (ZapSol) */}
      {actions.length > 0 ? (
        <div className="mt-4 flex flex-col gap-2">
          {actions.map((action, index) => (
            <Button
              key={index}
              className={`w-full ${action.color} text-[#0F0B1E] font-bold text-[10px] uppercase tracking-tighter hover:scale-[1.02] transition-transform`}
              onClick={() => window.open(action.url, "_blank")}
            >
              Trade ${name} on {action.label}
            </Button>
          ))}
        </div>
      ) : (
        /* Espaciador para mantener equilibrio visual si es necesario, 
           o simplemente nada para que la tarjeta sea más corta */
        <div className="mt-2 text-[10px] text-white/20 font-mono italic">
          ARCHIVE DATA ONLY
        </div>
      )}
    </div>
  );
}