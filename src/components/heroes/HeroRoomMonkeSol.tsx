import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

import FireParticle from "@/components/particles/FireParticle";
// Eliminamos PointParticleMonkeSol para dejar solo llamas

export default function HeroRoomMonkeSol() {
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

      {/* ✨ Fondo ritualizado con aura cálida */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(248,113,113,0.1),transparent_60%)] opacity-70 animate-pulse pointer-events-none" />

      {/* 🔥 Haces de Contención Ígneos (Láseres verticales) */}
      <div className="absolute top-0 left-[15%] md:left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-red-500/50 to-transparent shadow-[0_0_15px_#ef4444] animate-[pulse_2s_infinite] pointer-events-none" />
      <div className="absolute top-0 right-[15%] md:right-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-orange-500/50 to-transparent shadow-[0_0_15px_#f97316] animate-[pulse_3s_infinite] pointer-events-none" />

      {/* 🔥 SOLO LLAMAS: 44 Partículas con diferentes tamaños y efectos */}
      <div className="absolute inset-0 pointer-events-none z-0 animacion-ciclo-suave">
        {Array.from({ length: 44 }).map((_, i) => {
          const flameAnimations = [
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

          const animationClass = `${flameAnimations[i % flameAnimations.length]} ${sizeTypes[i % sizeTypes.length]}`;

          return (
            <FireParticle key={i} animationClass={animationClass} cycleKey={cycleKey} />
          );
        })}
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center flex-grow">
        
        <div className="mb-10 flex flex-col items-center">
          <h3 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter flex items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            MonkeSol
            <span className="text-[#f87171] text-6xl md:text-8xl drop-shadow-[0_0_20px_rgba(248,113,113,0.8)]">🔥</span>
          </h3>
          <p className="text-sm md:text-base text-red-200 font-mono tracking-widest uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            {t("monkesol.subtitle")}
          </p>
        </div>

        {/* Imagen Central Ritualizada (Unificada con el pulso) */}
        <div className="relative flex justify-center mb-12 animate-in zoom-in-95 duration-1000 delay-300">
          <div className="absolute inset-0 rounded-full blur-3xl bg-red-500/20 animate-[pulse_3s_infinite]"></div>
          
          <div>
            <img
              src="/images/guardians/Monk2.png"
              alt="MonkeSol"
              className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_0_25px_rgba(248,113,113,0.5)] symbol-hero-monkesol-pulse"
            />
          </div>
        </div>

        {/* Frase ritualizada */}
        <blockquote className="italic text-[#f87171] text-xs md:text-sm font-mono tracking-[0.2em] max-w-2xl px-4 uppercase opacity-80 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          "{t("monkesol.quote")}"
        </blockquote>
      </div>

      {/* Imagen MonkeSol anclada (Volador archivado) */}
      <div className="absolute bottom-10 left-4 md:bottom-20 md:left-10 w-48 h-48 md:w-80 md:h-80 pointer-events-none z-20 animate-in fade-in slide-in-from-left-8 duration-1000 delay-700">
        <div className="relative w-full h-full flex justify-center items-center group">
          
          <div className="absolute inset-0 rounded-full blur-3xl bg-red-500/20 animate-[pulse_3s_infinite] transition-colors duration-500 group-hover:bg-red-500/30"></div>

          <img
            src="/assets/MonkeSolVol.png"
            alt="MonkeSol Hero"
            className="relative z-10 w-full h-full object-contain mix-blend-screen opacity-90 symbol-hero-monkesol-pulse drop-shadow-[0_0_25px_rgba(248,113,113,0.5)]"
          />
        </div>
      </div>

    </section>
  );
}