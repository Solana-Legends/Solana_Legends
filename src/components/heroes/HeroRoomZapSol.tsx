import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

import LightningParticle from "@/components/particles/LightningParticle";
// Eliminamos PointParticleZapSol como solicitaste

export default function HeroRoomZapSol() {
  const { t } = useLanguage();
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCycleKey((prev) => prev + 1);
    }, 24000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-[#0F0B1E] overflow-hidden">
      
      {/* INYECCIÓN DE CSS: Efectos de chisporroteo (Neón roto) para los rayos */}
      <style>{`
        @keyframes chispa-rapida {
          0%, 50%, 100% { opacity: 0.9; }
          52% { opacity: 0.1; }
          54% { opacity: 0.8; }
          56% { opacity: 0.1; }
          58% { opacity: 0.9; }
        }
        @keyframes chispa-latido {
          0%, 80% { opacity: 0.6; transform: scale(1); }
          85% { opacity: 1; transform: scale(1.1); }
          88% { opacity: 0.1; transform: scale(0.9); }
          92% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 0.6; transform: scale(1); }
        }
        @keyframes chispa-caos {
          0%, 20% { opacity: 0.9; }
          22% { opacity: 0.1; }
          25% { opacity: 0.8; }
          28% { opacity: 0.2; }
          30% { opacity: 0.9; }
          70%, 100% { opacity: 0.9; }
        }
        
        /* Clases utilitarias que mezclan las animaciones con tiempos distintos */
        .fx-ray-1 { animation: chispa-rapida 1s infinite; }
        .fx-ray-2 { animation: chispa-latido 2.5s infinite; }
        .fx-ray-3 { animation: chispa-caos 1.8s infinite; }
        .fx-ray-4 { animation: chispa-rapida 0.7s infinite; }
        .fx-ray-5 { animation: chispa-caos 2.2s infinite; }
        .fx-ray-6 { animation: chispa-latido 1.5s infinite; }
      `}</style>

      {/* ✨ Fondo eléctrico / Aura de la sala */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,169,8,0.1),transparent_60%)] animate-pulse opacity-80 pointer-events-none" />

      {/* ⚡ Haces de Contención (Rayos verticales) */}
      <div className="absolute top-0 left-[15%] md:left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#FFA908]/50 to-transparent shadow-[0_0_15px_#FFA908] animate-[pulse_2s_infinite] pointer-events-none" />
      <div className="absolute top-0 right-[15%] md:right-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#FFA908]/50 to-transparent shadow-[0_0_15px_#FFA908] animate-[pulse_3s_infinite] pointer-events-none" />

      {/* ⚡ SOLO RAYOS: 36 Partículas con diferentes tamaños y ritmos de chisporroteo */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {Array.from({ length: 36 }).map((_, i) => {
          // Asignar 6 efectos de parpadeo distintos basados en el índice
          const effectTypes = [
            "fx-ray-1 opacity-80", 
            "fx-ray-2 opacity-100", 
            "fx-ray-3 opacity-70", 
            "fx-ray-4 opacity-90", 
            "fx-ray-5 opacity-60", 
            "fx-ray-6 opacity-100"
          ];
          
          // Asignar diferentes tamaños (escalas)
          const sizeTypes = [
            "scale-50", 
            "scale-75", 
            "scale-100", 
            "scale-125", 
            "scale-150"
          ];

          const animationClass = `${effectTypes[i % effectTypes.length]} ${sizeTypes[i % sizeTypes.length]}`;

          // TODO son LightningParticle ahora
          return (
            <LightningParticle 
              key={i} 
              animationClass={animationClass} 
              cycleKey={cycleKey} 
            />
          );
        })}
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center flex-grow">
        
        <div className="mb-10">
          <h3 className="text-4xl md:text-6xl font-black text-white mb-2 uppercase tracking-tighter animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="text-[#FFA908]">⚡</span> {t("zapsol.title")}
          </h3>
          <p className="text-sm md:text-base text-indigo-200 font-mono tracking-widest uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            {t("zapsol.subtitle")}
          </p>
        </div>

        {/* Imagen Central Ritualizada */}
        <div className="relative flex justify-center mb-12 animate-in zoom-in-95 duration-1000 delay-300">
          
          {/* AURA CENTRAL UNIFICADA: Exactamente igual que la del volador */}
          <div className="absolute inset-0 rounded-full blur-3xl bg-[#FFA908]/20 animate-[pulse_2s_infinite]"></div>
          
          {/* Añadido animate-float al contenedor, y el chisporroteo a la imagen */}
          <div className="animate-float">
            <img
              src="/images/guardians/Zap2.png"
              alt="ZapSol"
              className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_0_25px_rgba(255,169,8,0.5)] symbol-hero-zapsol-flicker"
            />
          </div>
        </div>

        {/* Frase ritualizada */}
        <blockquote className="italic text-[#FFA908] text-xs md:text-sm font-mono tracking-[0.2em] max-w-2xl px-4 uppercase opacity-80 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          "{t("zapsol.quote")}"
        </blockquote>
      </div>

      {/* ZapSol Volador */}
      <div className="absolute bottom-10 right-4 md:bottom-20 md:right-10 w-48 h-48 md:w-80 md:h-80 pointer-events-none z-20 animate-in fade-in slide-in-from-right-8 duration-1000 delay-700">
        <div className="relative w-full h-full flex justify-center items-center group animate-float">
          
          {/* AURA VOLADOR UNIFICADA: Exactamente igual que la central */}
          <div className="absolute inset-0 rounded-full blur-3xl bg-[#FFA908]/20 animate-[pulse_2s_infinite] transition-colors duration-500 group-hover:bg-[#FFA908]/30"></div>
          
          <img
            src="/assets/ZapSolVol.png"
            alt="ZapSol Hovering"
            className="relative z-10 w-full h-full object-contain mix-blend-screen opacity-90 symbol-hero-zapsol-flicker drop-shadow-[0_0_25px_rgba(255,169,8,0.5)]"
          />
        </div>
      </div>

    </section>
  );
}