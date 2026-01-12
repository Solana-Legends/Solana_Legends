// src/components/heroes/HeroRoomZapSol.tsx
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
    <section className="relative px-6 py-16 bg-gradient-to-b from-slate-950 to-slate-900 rounded-xl shadow-lg overflow-hidden">
      {/* ✨ Fondo eléctrico animado */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e3a8a,#0f172a)] animate-pulse opacity-70" />

      {/* ⚡ Rayos + ⚪ Puntos eléctricos */}
      <div className="absolute inset-0 pointer-events-none">
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
            <LightningParticle
              key={i}
              animationClass={animationClass}
              cycleKey={cycleKey}
            />
          ) : (
            <PointParticleZapSol
              key={i}
              animationClass={animationClass}
              cycleKey={cycleKey}
            />
          );
        })}
      </div>

      {/* ⚡ Rayos estilizados verticales */}
      <div className="absolute top-0 left-[26%] w-1 h-full bg-gradient-to-b from-yellow-400 to-transparent animate-[pulse_2s_infinite]" />
      <div className="absolute top-0 left-[74%] w-1 h-full bg-gradient-to-b from-orange-600 to-transparent animate-[pulse_3s_infinite]" />

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4 animate-fadeInUp">
          {t("zapsol.title")}
        </h3>

        <p className="text-lg md:text-xl text-blue-300 mb-6 animate-fadeInUp [animation-delay:300ms]">
          {t("zapsol.subtitle")}
        </p>

        {/* Imagen ritualizada */}
        <div className="flex justify-center mb-8 animate-fadeInUp [animation-delay:600ms]">
          <img
            src="/images/guardians/Zap2.png"
            alt="ZapSol"
            className="w-80 h-80 object-contain drop-shadow-[0_0_25px_#facc15]"
          />
        </div>

        {/* Imagen ZapSol con aura lateral derecha */}
        <div
          className="
            absolute 
            bottom-[5rem] right-[-8.5rem]
            md:bottom-0 md:right-0
            mb-[4rem] mr-[2rem]
            animate-in fade-in slide-in-from-left duration-1000"
        >
          <div className="relative z-10 flex justify-center items-center w-80 h-80 group">
            <div className="absolute w-80 h-80 rounded-full blur-3xl hero-zapsol-aura pointer-events-none z-0 transition-colors duration-500 group-hover:bg-orange-500/40"></div>

            <img
              src="/assets/ZapSolVol.png"
              alt="ZapSol Hero"
              className="relative z-10 h-44 w-auto md:h-72 object-contain mix-blend-overlay opacity-90 symbol-hero-zapsol-flicker"
            />
          </div>
        </div>

        {/* Frase ritualizada */}
        <blockquote className="italic text-yellow-300 text-lg md:text-xl animate-fadeInUp [animation-delay:900ms]">
          {t("zapsol.quote")}
        </blockquote>
      </div>
    </section>
  );
}
