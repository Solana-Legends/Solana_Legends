// src/components/guardians/GuardianRoomZapSol.tsx
import { useLanguage } from "@/contexts/LanguageContext";

export default function GuardianRoomZapSol() {
  const { t } = useLanguage();

  return (
    <section className="relative px-6 py-16 bg-gradient-to-b from-slate-950 to-slate-900 rounded-xl shadow-lg overflow-hidden">
      {/* ✨ Fondo eléctrico animado */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e3a8a,#0f172a)] animate-pulse opacity-70" />

      {/* ⚡ + puntos eléctricos */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => {
          const isRay = i % 2 === 0; // alterna entre rayos y puntos

          const animationClass = isRay
            ? i % 2 === 0
              ? "animate-pulse"
              : "animate-flicker"
            : i % 3 === 0
            ? "animate-float"
            : i % 3 === 1
            ? "animate-bounce"
            : "animate-ping";

          return isRay ? (
            <div
              key={i}
              className={`absolute text-xl text-yellow-400 ${animationClass} drop-shadow-[0_0_12px_#facc15]`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${2 + Math.random() * 3}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              ⚡
            </div>
          ) : (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 opacity-80 ${animationClass} drop-shadow-[0_0_8px_#facc15]`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${2 + Math.random() * 3}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          );
        })}
      </div>

      {/* ⚡ Rayos estilizados verticales */}
      <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-yellow-500 to-transparent animate-[pulse_2s_infinite]" />
      <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-orange-500 to-transparent animate-[pulse_3s_infinite]" />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4 animate-fadeInUp">
          {t("zapsol.title")}
        </h3>
        <p
          className="text-lg md:text-xl text-blue-300 mb-6 animate-fadeInUp"
          style={{ animationDelay: "0.3s" }}
        >
          {t("zapsol.subtitle")}
        </p>

        {/* Imagen ritualizada (rostro centrado) */}
        <div
          className="flex justify-center mb-8 animate-fadeInUp"
          style={{ animationDelay: "0.6s" }}
        >
          <img
            src="/images/guardians/Zap2.png"
            alt="ZapSol"
            className="w-80 h-80 object-contain drop-shadow-[0_0_25px_#facc15]"
          />
        </div>

        {/* Imagen ZapSol con aura lateral derecha */}
        <div className="absolute bottom-0 right-0 mb-[-4rem] mr-[-14rem] animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative z-10 flex justify-center items-center w-80 h-80 group">
            {/* Aura dorada pulsante por defecto, cambia a naranja en hover */}
            <div className="absolute w-80 h-80 rounded-full blur-3xl hero-zapsol-aura pointer-events-none z-0 transition-colors duration-500 group-hover:bg-orange-500/40"></div>
            {/* Imagen del héroe ZapSol */}
            <img
              src="/assets/ZapSolVol.png"
              alt="ZapSol Hero"
              className="relative z-10 h-64 w-auto md:h-72 object-contain mix-blend-overlay opacity-90 symbol-hero-zapsol-flicker"
            />
          </div>
        </div>

        {/* Frase ritualizada */}
        <blockquote
          className="italic text-yellow-300 text-lg md:text-xl animate-fadeInUp"
          style={{ animationDelay: "0.9s" }}
        >
          {t("zapsol.quote")}
        </blockquote>
      </div>
    </section>
  );
}
