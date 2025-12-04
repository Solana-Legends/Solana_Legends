// src/components/guardians/GuardianRoomChipiSol.tsx
import { useLanguage } from "@/contexts/LanguageContext";

export default function GuardianRoomChipiSol() {
  const { t } = useLanguage();

  return (
    <section className="relative px-6 py-16 bg-gradient-to-b from-slate-800 to-slate-700 rounded-xl shadow-lg overflow-hidden">
      {/* ✨ Fondo cósmico con aura fría */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0ea5e9,#0f172a)] opacity-70 animate-pulse" />

      {/* ❄️ Copos y puntos blancos */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => {
          const isSnow = i % 2 === 0; // alterna entre copos y puntos
          const animationClass = isSnow
            ? i % 3 === 0
              ? "animate-pulse"
              : i % 3 === 1
              ? "animate-flicker"
              : "animate-float"
            : i % 3 === 0
            ? "animate-float"
            : i % 3 === 1
            ? "animate-bounce"
            : "animate-ping";

          return isSnow ? (
            <div
              key={i}
              className={`absolute text-xl text-blue-200 ${animationClass} drop-shadow-[0_0_12px_#22d3ee]`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 4}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              ❄️
            </div>
          ) : (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-white rounded-full opacity-70 ${animationClass}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 4}s`,
                animationDelay: `${Math.random() * 2}s`,
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
            src="/images/guardians/Chip1.png"
            alt="ChipiSol"
            className="w-64 h-64 object-contain drop-shadow-[0_0_25px_#22d3ee]"
          />
        </div>

        {/* Imagen ChipiSol con aura lateral derecha */}
        <div className="absolute bottom-0 right-0 mb-[4rem] mr-[-4rem] animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative z-10 flex justify-center items-center w-80 h-80 group">
            {/* Aura azul pulsante por defecto */}
            <div className="absolute w-80 h-80 rounded-full blur-3xl hero-chipisol-aura pointer-events-none z-0 transition-colors duration-500 group-hover:bg-cyan-400/40"></div>
            {/* Imagen del héroe ChipiSol */}
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

      {/* 🔀 Transición hacia GuardianTimeline */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-cyan-400/40 via-blue-500/40 to-slate-900 animate-pulse">
        <div className="absolute inset-0 flex justify-center items-center">
          {/* Portal cósmico */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 blur-3xl opacity-70 animate-ping"></div>
        </div>
      </div>
    </section>
  );
}
