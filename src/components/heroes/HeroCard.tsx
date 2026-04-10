import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

interface Action {
  label: string;
  url: string;
  color: string;
}

interface HeroCardProps {
  id: string;
  name: string;
  title: { en: string; es: string };
  aura: string;
  image: string;
  description: { en: string; es: string };
  actions?: Action[];
}

export default function HeroCard({ id, name, title, aura, image, description, actions = [] }: HeroCardProps) {
  const { language } = useLanguage();

  const auraClass = id === "zapsol" ? "aura-zapsol" : id === "monkesol" ? "aura-monkesol" : id === "chipisol" ? "aura-chipisol" : "";
  const heroAnimation = id === "zapsol" ? "hero-zapsol" : id === "monkesol" ? "hero-monkesol" : id === "chipisol" ? "hero-chipisol" : "";
  const heroAura = id === "zapsol" ? "hero-zapsol-aura" : id === "monkesol" ? "hero-monkesol-aura" : id === "chipisol" ? "hero-chipisol-aura" : "";
  
  return (
    <div className={`relative bg-[#1A1530]/90 rounded-2xl p-6 shadow-2xl text-left border border-white/5 flex flex-col h-full transition-all z-10 ${auraClass}`}>
      
      <div className="relative h-20 mb-5">
        <img src={image} alt={name} className={`absolute top-0 left-0 w-20 h-20 object-contain rounded-xl z-20 ${heroAnimation} ${heroAura}`} />
        <div className="absolute top-0 right-0 text-3xl opacity-60">{aura}</div>
      </div>

      <div className="flex-grow">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">{aura} {name}</h2>
        <p className="text-[#FFA908] text-[10px] font-mono tracking-widest uppercase mb-3">{title[language]}</p>
        <p className="text-indigo-100 text-[13px] leading-relaxed line-clamp-3">{description[language]}</p>
      </div>

      {actions.length > 0 ? (
        <div className="mt-5 flex flex-col gap-3 relative z-30">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              // TÁCTICO: Estilo Ghost. Borde y texto con color, fondo transparente.
              // En hover se rellena con el color y el texto pasa a negro.
              className={`w-full h-11 bg-transparent border-2 font-bold text-[11px] transition-all duration-300 hover:text-[#0F0B1E] rounded-xl ${action.color}`}
              onClick={(e) => {
                e.stopPropagation();
                window.open(action.url, "_blank");
              }}
            >
              Trade ${name} en {action.label}
            </Button>
          ))}
        </div>
      ) : (
        <div className="mt-5 text-[10px] text-white/30 font-mono italic">ARCHIVE DATA ONLY</div>
      )}
    </div>
  );
}