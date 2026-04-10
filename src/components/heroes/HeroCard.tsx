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
  
  // TÁCTICO: Configuración de animaciones individuales
  let iconAnimation = "absolute top-0 right-0 text-3xl opacity-90 ";
  let iconStyle = {};

  if (id === "chipisol") {
    iconAnimation += "animate-float"; // Flotación suave
  } else if (id === "monkesol") {
    iconAnimation += "animate-pulse";
    iconStyle = { animationDuration: "2.5s" }; // Llama: Pulso muy lento y constante
  } else if (id === "zapsol") {
    // Usamos la animación personalizada "chispa" inyectada abajo.
    // Mantenemos 1.5s como tiempo total del ciclo.
    iconStyle = { animation: "chisporroteo 1.5s infinite" };
  }

  return (
    <>
      {/* Inyección de CSS para el efecto neón/chispa sin tocar tailwind.config */}
      <style>{`
        @keyframes chisporroteo {
          /* --- FASE ESTABLE: 30% del tiempo --- */
          0%, 30% { opacity: 0.9; }   

          /* --- FASE CHISPORROTEO: 70% restante, muy caótico --- */
          32% { opacity: 0.1; }       /* Empieza el caos */
          34% { opacity: 0.9; }
          37% { opacity: 0.2; }
          40% { opacity: 0.9; }
          44% { opacity: 0.1; }
          48% { opacity: 0.9; }
          53% { opacity: 0.3; }
          58% { opacity: 0.9; }
          63% { opacity: 0.2; }
          68% { opacity: 0.9; }
          74% { opacity: 0.1; }
          80% { opacity: 0.9; }
          86% { opacity: 0.4; }
          93% { opacity: 0.9; }
          97% { opacity: 0.2; }
          100% { opacity: 0.9; }      /* Vuelve a estabilizarse al final del ciclo y repite */
        }
      `}</style>

      <div className={`relative bg-[#1A1530]/90 rounded-2xl p-6 shadow-2xl text-left border border-white/5 flex flex-col h-full transition-all z-10 ${auraClass}`}>
        
        <div className="relative h-20 mb-5">
          <img src={image} alt={name} className={`absolute top-0 left-0 w-20 h-20 object-contain rounded-xl z-20 ${heroAnimation} ${heroAura}`} />
          
          {/* ICONO */}
          <div className={iconAnimation} style={iconStyle}>
            {aura}
          </div>
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
          <div className="mt-5 text-[10px] text-white/30 font-mono italic uppercase">ARCHIVE DATA ONLY</div>
        )}
      </div>
    </>
  );
}