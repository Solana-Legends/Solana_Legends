// src/components/guardians/GuardianRoomMonkeSol.tsx
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

export default function GuardianRoomMonkeSol() {
  const { t } = useLanguage();
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    // ⏱️ Reinicia las animaciones cada 24s
    // - 0–16% (≈4s) → fade in progresivo
    // - 16–83% (≈16s) → tramo intermedio con pulsos, flotaciones, parpadeos y expansiones
    // - 83–100% (≈4s) → fade out progresivo
    // Esto asegura que el ciclo CSS (24s) y el reinicio en React estén sincronizados.
    const interval = setInterval(() => {
      setCycleKey((prev) => prev + 1);
    }, 24000); // ciclo completo de 24s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative px-6 py-16 bg-gradient-to-b from-slate-900 to-slate-800 rounded-xl shadow-lg overflow-hidden">
      {/* ✨ Fondo ritualizado con aura cálida */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7f1d1d,#0f172a)] opacity-70 animate-pulse" />

      {/* 🔥 Llamas + ⚪ Puntos */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => {
          const isFlame = i % 2 === 0;

          // Alterna entre animaciones de llamas y puntos
          const flameAnimations = [
            "animate-flamePulse",
            "animate-flameFlicker",
            "animate-flameFloat",
          ];
          const pointAnimations = [
            "animate-pointPulse",
            "animate-pointFloat",
            "animate-pointPing",
          ];

          const animationClass = isFlame
            ? flameAnimations[i % flameAnimations.length]
            : pointAnimations[i % pointAnimations.length];

          return isFlame ? (
            <div
              key={`${cycleKey}-${i}`} // 🔑 fuerza reinicio cada 24s
              className={`absolute text-xl text-red-500 drop-shadow-[0_0_12px_#ef4444] ${animationClass}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
              🔥
            </div>
          ) : (
            <div
              key={`${cycleKey}-${i}`} // 🔑 fuerza reinicio cada 24s
              className={`absolute w-2 h-2 rounded-full bg-orange-400 opacity-80 drop-shadow-[0_0_8px_#ef4444] ${animationClass}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          );
        })}
      </div>

      {/* ⚡ Rayos estilizados verticales */}
      <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-red-600 to-transparent animate-[pulse_2s_infinite]" />
      <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-orange-400 to-transparent animate-[pulse_3s_infinite]" />

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-red-400 mb-4 animate-fadeInUp">
          {t("monkesol.title")}
        </h3>
        <p
          className="text-lg md:text-xl text-orange-300 mb-6 animate-fadeInUp"
          style={{ animationDelay: "0.3s" }}
        >
          {t("monkesol.subtitle")}
        </p>

        {/* Imagen ritualizada */}
        <div
          className="flex justify-center mb-8 animate-fadeInUp"
          style={{ animationDelay: "0.6s" }}
        >
          <img
            src="/images/guardians/Monk2.png"
            alt="MonkeSol"
            className="w-80 h-80 object-contain drop-shadow-[0_0_25px_#f87171]"
          />
        </div>

        {/* Imagen MonkeSol anclada y fija abajo a la izquierda */}
        <div className="absolute bottom-0 left-0 ml-[0rem] animate-in fade-in slide-in-from-left duration-1000">
          <div className="relative z-10 flex justify-center items-center w-80 h-80 group">
            <div className="absolute w-80 h-80 rounded-full blur-3xl hero-monkesol-aura pointer-events-none z-0 transition-colors duration-500 group-hover:bg-red-400/40"></div>
            <img
              src="/assets/MonkeSolVol.png"
              alt="MonkeSol Hero"
              className="relative z-10 h-64 w-auto md:h-72 object-contain mix-blend-overlay opacity-90 symbol-hero-monkesol-pulse"
            />
          </div>
        </div>

        {/* Frase ritualizada */}
        <blockquote
          className="italic text-orange-400 text-lg md:text-xl animate-fadeInUp"
          style={{ animationDelay: "0.9s" }}
        >
          {t("monkesol.quote")}
        </blockquote>
      </div>
    </section>
  );
}
