import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import SnowParticle from "@/components/particles/SnowParticle";

export default function HeroRoomChipiSol() {
  const { t } = useLanguage();
  const [cycleKey, setCycleKey] = useState(0);

  // El ciclo dura 24 segundos exactos
  useEffect(() => {
    const interval = setInterval(() => {
      setCycleKey((prev) => prev + 1);
    }, 24000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-[#0F0B1E] overflow-hidden">
      
      {/* INYECCIÓN DE CSS: Ciclo de vida suave para las partículas (24 segundos) */}
      <style>{`
        @keyframes fade-ciclo {
          0% { opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; }
        }
        .animacion-ciclo-suave {
          animation: fade-ciclo 24s linear infinite;
        }
      `}</style>

      {/* ✨ Fondo ritualizado con aura gélida */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_60%)] opacity-70 animate-pulse pointer-events-none" />

      {/* ❄️ Haces de Contención Gélidos (Láseres verticales) */}
      <div className="absolute top-0 left-[15%] md:left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent shadow-[0_0_15px_#06b6d4] animate-[pulse_2s_infinite] pointer-events-none" />
      <div className="absolute top-0 right-[15%] md:right-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent shadow-[0_0_15px_#3b82f6] animate-[pulse_3s_infinite] pointer-events-none" />

      {/* ❄️ SOLO COPOS: 44 Partículas con ciclo de fade in/out suave */}
      <div className="absolute inset-0 pointer-events-none z-0 animacion-ciclo-suave">
        {Array.from({ length: 44 }).map((_, i) => {
          // Mantengo las animaciones que tenías en tu código original
          const snowAnimations = [
            "animate-flamePulse",
            "animate-flameFlicker",
            "animate-flameFloat",
          ];
          
          const sizeTypes = [
            "scale-50", 
            "scale-75", 
            "scale-100", 
            "scale-125", 
            "scale-150"
          ];

          const animationClass = `${snowAnimations[i % snowAnimations.length]} ${sizeTypes[i % sizeTypes.length]}`;

          return (
            <SnowParticle key={i} animationClass={animationClass} cycleKey={cycleKey} />
          );
        })}
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center flex-grow">
        
        <div className="mb-10 flex flex-col items-center">
          {/* Título: Escrito "ChipiSol", icono grande a la derecha */}
          <h3 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter flex items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            ChipiSol
            <span className="text-cyan-400 text-6xl md:text-8xl drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">❄️</span>
          </h3>
          <p className="text-sm md:text-base text-cyan-200 font-mono tracking-widest uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            {t("chipisol.subtitle")}
          </p>
        </div>

        {/* Imagen Central Ritualizada (Con efecto FLOTANTE) */}
        <div className="relative flex justify-center mb-12 animate-in zoom-in-95 duration-1000 delay-300">
          <div className="absolute inset-0 rounded-full blur-3xl bg-cyan-500/20 animate-[pulse_4s_infinite]"></div>
          
          <div className="animate-float">
            <img
              src="/images/guardians/Chip4.png"
              alt="ChipiSol"
              className="relative z-10 w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-contain drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]"
            />
          </div>
        </div>

        {/* Frase ritualizada */}
        <blockquote className="italic text-cyan-300 text-xs md:text-sm font-mono tracking-[0.2em] max-w-2xl px-4 uppercase opacity-80 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          "{t("chipisol.quote")}"
        </blockquote>
      </div>

      {/* Imagen ChipiSol anclada a la derecha (Con efecto FLOTANTE) */}
      <div className="absolute bottom-4 right-4 md:bottom-20 md:right-10 w-32 h-32 md:w-56 md:h-56 pointer-events-none z-20 animate-in fade-in slide-in-from-right-8 duration-1000 delay-700">
        <div className="relative w-full h-full flex justify-center items-center group animate-float">
          
          <div className="absolute inset-0 rounded-full blur-3xl bg-cyan-500/20 animate-[pulse_4s_infinite] transition-colors duration-500 group-hover:bg-cyan-500/30"></div>

          <img
            src="/assets/ChipiSolVol_1.png"
            alt="ChipiSol Hero"
            className="relative z-10 w-full h-full object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] symbol-hero-chipisol"
          />
        </div>
      </div>

    </section>
  );
}