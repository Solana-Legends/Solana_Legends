import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import SnowParticle from "@/components/particles/SnowParticle";
import PointParticle from "@/components/particles/PointParticle";

export default function HeroRoomChipiSol() {
  const { t } = useLanguage();
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCycleKey((prev) => prev + 1);
    }, 24000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative px-6 py-16 bg-gradient-to-b from-slate-800 to-slate-700 rounded-xl shadow-lg overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0ea5e9,#0f172a)] opacity-70 animate-pulse" />

      {/* Partículas encapsuladas */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => {
          const isSnow = i % 2 === 0;

          const snowAnimations = [
            "animate-flamePulse",
            "animate-flameFlicker",
            "animate-flameFloat",
          ];
          const pointAnimations = [
            "animate-pointPulse",
            "animate-pointFloat",
            "animate-pointPing",
          ];

          const animationClass = isSnow
            ? snowAnimations[i % snowAnimations.length]
            : pointAnimations[i % pointAnimations.length];

          return isSnow ? (
            <SnowParticle key={i} animationClass={animationClass} cycleKey={cycleKey} />
          ) : (
            <PointParticle key={i} animationClass={animationClass} cycleKey={cycleKey} />
          );
        })}
      </div>

      <div className="absolute top-0 left-[26%] w-1 h-full bg-gradient-to-b from-blue-500 to-transparent animate-[pulse_2s_infinite]" />
      <div className="absolute top-0 left-[74%] w-1 h-full bg-gradient-to-b from-blue-100 to-transparent animate-[pulse_3s_infinite]" />

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4 animate-fadeInUp">
          {t("chipisol.title")}
        </h3>

        <p className="text-lg md:text-xl text-blue-200 mb-6 animate-fadeInUp [animation-delay:300ms]">
          {t("chipisol.subtitle")}
        </p>

        <div className="flex justify-center mb-8 animate-fadeInUp [animation-delay:600ms]">
          <img
            src="/images/guardians/Chip2.png"
            alt="ChipiSol"
            className="w-80 h-80 object-contain drop-shadow-[0_0_25px_#22d3ee]"
          />
        </div>

        <div
          className="
            absolute 
            bottom-[6rem] right-[-8.5rem]
            md:bottom-0 md:right-0
            mb-[4rem] mr-[2rem]
            animate-in fade-in slide-in-from-left duration-1000"
        >
          <div className="relative z-10 flex justify-center items-center w-80 h-80 group">
            <div className="absolute w-80 h-80 rounded-full blur-3xl hero-chipisol-aura pointer-events-none z-0 transition-colors duration-500 group-hover:bg-cyan-400/40"></div>

            <img
              src="/assets/ChipiSolVol.png"
              alt="ChipiSol Hero"
              className="relative z-10 h-44 w-auto md:h-72 object-contain mix-blend-overlay opacity-90 symbol-hero-chipisol"
            />
          </div>
        </div>

        <blockquote className="italic text-cyan-300 text-lg md:text-xl animate-fadeInUp [animation-delay:900ms]">
          {t("chipisol.quote")}
        </blockquote>
      </div>
    </section>
  );
}
