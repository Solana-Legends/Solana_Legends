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
    <div className={`relative bg-[#1A1530]/90 rounded-xl p-5 shadow-2xl text-left border border-white/5 flex flex-col h-full max-w-[320px] transition-all z-10 ${auraClass}`}>
      
      <div className="relative h-16 mb-4">
        <img src={image} alt={name} className={`absolute top-0 left-0 w-16 h-16 object-contain rounded-md z-20 ${heroAnimation} ${heroAura}`} />
        <div className="absolute top-0 right-0 text-2xl opacity-50">{aura}</div>
      </div>

      <div className="flex-grow">
        <h2 className="text-lg font-bold text-white uppercase">{aura} {name}</h2>
        <p className="text-[#FFA908] text-[9px] font-mono tracking-widest uppercase mb-2">{title[language]}</p>
        <p className="text-indigo-200/90 text-[11px] leading-relaxed line-clamp-3">{description[language]}</p>
      </div>

      {actions.length > 0 ? (
        <div className="mt-4 flex flex-col gap-2 relative z-30">
          {actions.map((action, index) => (
            <Button
              key={index}
              className={`w-full h-8 ${action.color} text-[#0F0B1E] font-black text-[9px] uppercase tracking-tighter hover:opacity-90 active:scale-95 transition-all shadow-lg`}
              onClick={(e) => {
                e.stopPropagation();
                window.open(action.url, "_blank");
              }}
            >
              TRADE {name} ON {action.label}
            </Button>
          ))}
        </div>
      ) : (
        <div className="mt-4 text-[9px] text-white/20 font-mono italic">ARCHIVE DATA ONLY</div>
      )}
    </div>
  );
}