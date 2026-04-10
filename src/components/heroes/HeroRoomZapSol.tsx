import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

import LightningParticle from "@/components/particles/LightningParticle";
import PointParticleZapSol from "@/components/particles/PointParticleZapSol";

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
      
      {/* ✨ Fondo eléctrico / Aura de la sala */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,169,8,0.1),transparent_60%)] animate-pulse opacity-80 pointer-events-none" />

      {/* ⚡ Haces de Contención (Rayos verticales mejorados) */}
      <div className="absolute top-0 left-[15%] md:left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#FFA908]/50 to-transparent shadow-[0_0_15px_#FFA908] animate-[pulse_2s_infinite] pointer-events-none" />
      <div className="absolute top-0 right-[15%] md:right-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#FFA908]/50 to-transparent shadow-[0_0_15px_#FFA908] animate-[pulse_3s_infinite] pointer-events-none" />

      {/* ⚡ Rayos + ⚪ Puntos eléctricos (Se mantiene tu lógica) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {Array.from({ length: 36 }).map((_, i) => {
          const isRay = i % 2 === 0;

          const rayAnimations = [
            "animate-flamePulse",
            "animate-flameFlicker",
            "animate-flameFloat",
          ];
          const pointAnimations = [
            "animate-pointPulse",
            "animate-pointFloat",
            "animate-pointPing",
          ];

          const animationClass = isRay
            ? rayAnimations[i % rayAnimations.length]
            : pointAnimations[i % pointAnimations.length];

          return isRay ? (
            <LightningParticle key={i} animationClass={animationClass} cycleKey={cycleKey} />
          ) : (
            <PointParticleZapSol key={i} animationClass={animationClass} cycleKey={cycleKey} />
          );
        })}
      </div>

      {/* Contenido Principal (Centrado vertical y horizontalmente) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center flex-grow">
        
        {/* Título y Subtítulo */}
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
          {/* Brillo de fondo para la imagen */}
          <div className="absolute inset-0 rounded-full blur-3xl bg-[#FFA908]/20 animate-pulse"></div>
          <img
            src="/images/guardians/Zap2.png"
            alt="ZapSol"
            className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_0_25px_rgba(255,169,8,0.5)] animate-float"
          />
        </div>

        {/* Frase ritualizada */}
        <blockquote className="italic text-[#FFA908] text-xs md:text-sm font-mono tracking-[0.2em] max-w-2xl px-4 uppercase opacity-80 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          "{t("zapsol.quote")}"
        </blockquote>
      </div>

      {/* ZapSol Volador (Corregido para no romper la pantalla) */}
      <div className="absolute bottom-10 right-4 md:bottom-20 md:right-10 w-48 h-48 md:w-80 md:h-80 pointer-events-none z-20 animate-in fade-in slide-in-from-right-8 duration-1000 delay-700">
        <div className="relative w-full h-full flex justify-center items-center group">
          {/* Aura vinculada a la animación */}
          <div className="absolute w-full h-full rounded-full blur-2xl hero-zapsol-aura transition-colors duration-500 group-hover:bg-[#FFA908]/30"></div>
          
          <img
            src="/assets/ZapSolVol.png"
            alt="ZapSol Hovering"
            className="relative z-10 w-full h-full object-contain mix-blend-screen opacity-90 symbol-hero-zapsol-flicker"
          />
        </div>
      </div>

    </section>
  );
}