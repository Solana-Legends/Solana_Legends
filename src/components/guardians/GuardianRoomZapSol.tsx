import { useLanguage } from "@/contexts/LanguageContext";

export default function GuardianRoomZapSol() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[640px] px-6 py-16 bg-gradient-to-b from-slate-950 to-slate-900 rounded-xl shadow-lg overflow-hidden flex flex-col justify-center">
      {/* ✨ Fondo eléctrico animado */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e3a8a,#0f172a)] animate-pulse opacity-70" />

      {/* ⚡ Rayos estilizados */}
      <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-yellow-500 to-transparent animate-[pulse_2s_infinite]" />
      <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-orange-500 to-transparent animate-[pulse_3s_infinite]" />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center space-y-6">
        <h3 className="text-4xl md:text-5xl font-bold text-yellow-400 animate-fadeInUp">
          {t("zapsol.title")}
        </h3>
        <p
          className="text-lg md:text-xl text-blue-300 animate-fadeInUp"
          style={{ animationDelay: "0.3s" }}
        >
          {t("zapsol.subtitle")}
        </p>

        {/* Imagen ritualizada */}
        <img
          src="/images/guardians/Zap1.png"
          alt="ZapSol"
          className="w-64 h-64 object-contain drop-shadow-[0_0_25px_#facc15] animate-fadeInUp"
          style={{ animationDelay: "0.6s" }}
        />

        {/* Imagen ZapSol con aura centrada */}
        <div className="relative flex justify-center items-center animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative z-10 flex justify-center items-center w-80 h-80 group">
            {/* Aura dorada pulsante por defecto, cambia a azul en hover */}
            <div className="absolute w-80 h-80 rounded-full blur-3xl hero-zapsol-aura pointer-events-none z-0 transition-colors duration-500 group-hover:bg-orange-500/40"></div>
            {/* Imagen del héroe ZapSol */}
            <img
              src="/assets/ZapSolVol.png"
              alt="ZapSol Hero"
              className="relative z-10 h-64 w-auto md:h-72 object-contain mix-blend-overlay opacity-90 symbol-hero-zapsol"
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
