// src/components/guardians/GuardianRoomMonkeSol.tsx
import { useLanguage } from "@/contexts/LanguageContext";

export default function GuardianRoomMonkeSol() {
  const { t } = useLanguage();

  return (
    <section className="relative px-6 py-16 bg-gradient-to-b from-slate-900 to-slate-800 rounded-xl shadow-lg overflow-hidden">
      {/* ✨ Fondo ritualizado con aura cálida */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7f1d1d,#0f172a)] opacity-70 animate-pulse" />

      {/* 🔥💥 Partículas de fuego y explosiones */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => {
          const isFire = i % 2 === 0; // alterna entre fuego 🔥 y explosiones 💥

          // Alterna animaciones: pulso, flicker, spin
          const animationClass =
            i % 3 === 0
              ? "animate-pulse" // brillo suave
              : i % 3 === 1
              ? "animate-flicker" // parpadeo irregular
              : "animate-spin"; // giro constante

          // Aura ligera alrededor (drop-shadow)
          const auraClass = isFire
            ? "drop-shadow-[0_0_12px_#ef4444]" // rojo para fuego
            : "drop-shadow-[0_0_12px_#facc15]"; // dorado para explosiones

          return (
            <div
              key={i}
              className={`absolute text-3xl ${
                isFire ? "text-red-500" : "text-yellow-400"
              } ${animationClass} ${auraClass}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${2 + Math.random() * 3}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              {isFire ? "🔥" : "💥"}
            </div>
          );
        })}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
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
            src="/images/guardians/Monk1.png"
            alt="MonkeSol"
            className="w-64 h-64 object-contain drop-shadow-[0_0_25px_#f87171]"
          />
        </div>

        {/* Imagen MonkeSol anclada y fija abajo a la izquierda */}
        <div className="absolute bottom-0 left-0 mb-0 ml-[-4rem] animate-in fade-in slide-in-from-left duration-1000">
          <div className="relative z-10 flex justify-center items-center w-80 h-80 group">
            {/* Aura dorada pulsante por defecto, cambia a rojo en hover */}
            <div className="absolute w-80 h-80 rounded-full blur-3xl hero-monkesol-aura pointer-events-none z-0 transition-colors duration-500 group-hover:bg-red-400/40"></div>
            {/* Imagen del héroe MonkeSol */}
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
