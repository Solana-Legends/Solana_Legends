// src/components/guardians/GuardianRoomChipiSol.tsx
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

export default function GuardianRoomChipiSol() {
  const { t } = useLanguage();

  // 🔁 Estado para forzar reposicionamiento cada ciclo
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Cada 16s reinicia posiciones
      setCycleKey((prev) => prev + 1);
    }, 16000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative px-6 py-16 bg-gradient-to-b from-slate-800 to-slate-700 rounded-xl shadow-lg overflow-hidden">
      {/* ✨ Fondo cósmico con aura fría */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0ea5e9,#0f172a)] opacity-70 animate-pulse" />

      {/* ❄️ Copos y puntos blancos */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => {
          const isSnow = i % 2 === 0; // alterna ❄️ y puntos

          return isSnow ? (
            <div
              key={`${cycleKey}-${i}`}
              className="absolute text-xl text-blue-200 drop-shadow-[0_0_12px_#22d3ee] animate-snow-cycle"
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
              className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-snow-cycle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          );
        })}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
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
        <div className="absolute bottom-0 right-0 mb-[4rem] mr-[-4rem] animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative z-10 flex justify-center items-center w-80 h-80 group">
            {/* Aura azul pulsante */}
            <div className="absolute w-80 h-80 rounded-full blur-3xl hero-chipisol-aura pointer-events-none z-0 transition-colors duration-500 group-hover:bg-cyan-400/40"></div>
            <img
              src="/assets/ChipiSolVol.png"
              alt="ChipiSol Hero"
              className="relative z-10 h-64 w-auto md:h-72 object-contain mix-blend-overlay opacity-90 symbol-hero-chipisol"
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
