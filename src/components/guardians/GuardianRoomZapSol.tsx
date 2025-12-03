// src/components/guardians/GuardianRoomZapSol.tsx
import { useLanguage } from "@/contexts/LanguageContext";

export default function GuardianRoomZapSol() {
  const { t } = useLanguage();

  return (
    <section className="relative px-6 py-16 bg-gradient-to-b from-slate-950 to-slate-900 rounded-xl shadow-lg overflow-hidden">
      {/* ✨ Fondo eléctrico animado */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e3a8a,#0f172a)] animate-pulse opacity-70" />

      {/* ⚡ Rayos estilizados */}
      <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-yellow-400 to-transparent animate-[pulse_2s_infinite]" />
      <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-blue-400 to-transparent animate-[pulse_3s_infinite]" />

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

        {/* Imagen ritualizada */}
        <div
          className="flex justify-center mb-8 animate-fadeInUp"
          style={{ animationDelay: "0.6s" }}
        >
          <img
            src="/images/guardians/Zap1.png"
            alt="ZapSol"
            className="w-64 h-64 object-contain drop-shadow-[0_0_25px_#facc15]"
          />
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
