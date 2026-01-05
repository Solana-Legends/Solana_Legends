// src/components/guardians/GuardianRoomChipiSol.tsx
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

export default function GuardianRoomChipiSol() {
  const { t } = useLanguage();
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    // ⏱️ Reinicia las animaciones cada 24s
    // - 0–16% (≈4s) → fade in progresivo
    // - 16–83% (≈16s) → tramo intermedio con pulsos, flotaciones, parpadeos y expansiones
    // - 83–100% (≈4s) → fade out progresivo
    const interval = setInterval(() => {
      setCycleKey((prev) => prev + 1);
    }, 24000); // ciclo completo de 24s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative px-6 py-16 bg-gradient-to-b from-slate-800 to-slate-700 rounded-xl shadow-lg overflow-hidden">
      {/* ✨ Fondo cósmico con aura fría */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0ea5e9,#0f172a)] opacity-70 animate-pulse" />

      {/* ❄️ Copos + ⚪ Puntos */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => {
          const isSnow = i % 2 === 0;

          // Animaciones equivalentes a las de MonkeSol
          const snowAnimations = [
            "animate-flamePulse", // ❄️ → pulso rápido
            "animate-flameFlicker", // ❄️ → parpadeo más lento
            "animate-flameFloat", // ❄️ → flotación con rebote
          ];
          const pointAnimations = [
            "animate-pointPulse", // ⚪ → pulso rápido
            "animate-pointFloat", // ⚪ → flotación con rebote
            "animate-pointPing", // ⚪ → 4 apariciones
          ];

          const animationClass = isSnow
            ? snowAnimations[i % snowAnimations.length]
            : pointAnimations[i % pointAnimations.length];

          return isSnow ? (
            <div
              key={`${cycleKey}-${i}`}
              className={`absolute text-xl text-blue-200 drop-shadow-[0_0_12px_#22d3ee] ${animationClass}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
              ❄️
            </div>
          ) : (
            <div
              key={`${cycleKey}-${i}`}
              className={`absolute w-2 h-2 rounded-full bg-white opacity-80 drop-shadow-[0_0_8px_#22d3ee] ${animationClass}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          );
        })}
      </div>

      {/* ⚡ Rayos estilizados verticales */}
      <div className="absolute top-0 left-[26%] w-1 h-full bg-gradient-to-b from-blue-500 to-transparent animate-[pulse_2s_infinite]" />
      <div className="absolute top-0 left-[74%] w-1 h-full bg-gradient-to-b from-blue-100 to-transparent animate-[pulse_3s_infinite]" />

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4 animate-fadeInUp">
          {t("chipisol.title")}
        </h3>
        <p
          className="text-lg md:text-xl text-blue-200 mb-6 animate-fadeInUp"
          style={{ animationDelay: "0.3s" }}
        >
          {t("chipisol.subtitle")}
        </p>

        {/* Imagen ritualizada */}
        <div
          className="flex justify-center mb-8 animate-fadeInUp"
          style={{ animationDelay: "0.6s" }}
        >
          <img
            src="/images/guardians/Chip2.png"
            alt="ChipiSol"
            className="w-80 h-80 object-contain drop-shadow-[0_0_25px_#22d3ee]"
          />
        </div>

        {/* Imagen ChipiSol con aura lateral derecha */}
        <div
          className="
    absolute 
    bottom-[6rem] right-[-8rem]     /* 📱 móvil: más arriba y más a la derecha */
    md:bottom-0 md:right-0         /* 🖥️ desktop: posición original */
    mb-[4rem] mr-[2rem]
    animate-in fade-in slide-in-from-left duration-1000"
        >
          <div className="relative z-10 flex justify-center items-center w-80 h-80 group">
            {/* Aura azul pulsante por defecto */}
            <div className="absolute w-80 h-80 rounded-full blur-3xl hero-chipisol-aura pointer-events-none z-0 transition-colors duration-500 group-hover:bg-cyan-400/40"></div>
            {/* Imagen del héroe ChipiSol */}
            <img
              src="/assets/ChipiSolVol.png"
              alt="ChipiSol Hero"
              className="relative z-10 h-48 w-auto md:h-72 object-contain mix-blend-overlay opacity-90 symbol-hero-chipisol"
            />
          </div>
        </div>

        {/* Frase ritualizada */}
        <blockquote
          className="italic text-cyan-300 text-lg md:text-xl animate-fadeInUp"
          style={{ animationDelay: "0.9s" }}
        >
          {t("chipisol.quote")}
        </blockquote>
      </div>
    </section>
  );
}
