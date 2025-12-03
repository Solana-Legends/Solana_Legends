import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import GuardianCard from "@/components/guardians/GuardianCard";
import GuardianGallery from "./GuardianGallery";
import BackHomeButton from "@/components/guardians/BackHomeButton";

const guardians = [
  {
    id: "zapsol",
    name: "ZapSol",
    title: {
      en: "The Lightning Guardian",
      es: "El guardián del rayo",
    },
    aura: "⚡",
    image: "/images/guardians/Zap.png",
    description: {
      en: "Zap is the Master of electrical energy, speed, and lightning...",
      es: "Zap es el Maestro de la energía eléctrica, la velocidad y el rayo...",
    },
  },
  {
    id: "monkesol",
    name: "MonkeSol",
    title: {
      en: "The Ancient Sage",
      es: "El antiguo sabio",
    },
    aura: "🔥",
    image: "/images/guardians/Monk.png",
    description: {
      en: "Monk is the Guardian of ancient wisdom and blockchain secrets...",
      es: "Monk es el Guardián de la sabiduría antigua y los secretos del blockchain...",
    },
  },
  {
    id: "chipisol",
    name: "ChipiSol",
    title: {
      en: "The Cosmic Spirit",
      es: "El Espíritu Cósmico",
    },
    aura: "❄️",
    image: "/images/guardians/Chip.png",
    description: {
      en: "Chip is the mystical Entity that connects all dimensions and portals...",
      es: "Chip es la Entidad mística que conecta todas las dimensiones y portales...",
    },
  },
];

export default function GuardiansPortal() {
  const { t } = useLanguage();

  return (
    <section className="relative mt-[-3rem] px-4 py-12 md:py-20 min-h-[600px] bg-gradient-to-b from-slate-950 to-slate-900 text-white aura-pulsante aura-hover-gold">
      {/* ✨ Capa envolvente para aura completa */}
      <div className="absolute inset-0 z-0 pointer-events-none aura-pulsante aura-hover-gold" />

      {/* ✨ Aura cósmica dorada detrás del contenido */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-[#FFA908]/20 animate-pulse pointer-events-none z-0" />

      {/* Header con cambio de idioma y volver a home */}
      <div className="relative z-10 flex justify-between items-center mb-8">
        <LanguageSwitcher />
        <BackHomeButton />
      </div>

      {/* Breadcrumb ritualizado con animación */}
      <nav
        className="relative z-10 text-sm text-blue-300 mb-6 flex items-center gap-2 px-1 md:px-0 opacity-0 translate-y-3 animate-fadeInUp"
        style={{ animationDelay: "0.2s" }}
      >
        <Link
          to="/"
          className="hover:text-blue-200 transition font-medium hover:shadow-[0_0_12px_#3B82F6] rounded px-1"
        >
          {t("common.home")}
        </Link>
        <span className="text-gray-400">›</span>
        <span className="text-purple-300 font-semibold tracking-wide hover:shadow-[0_0_12px_#A020F0] rounded px-1 transition">
          {t("hero.viewGuardians")}
        </span>
      </nav>

      {/* Encabezado ritualizado con animación */}
      <div
        className="relative z-10 max-w-6xl mx-auto text-center opacity-0 translate-y-3 animate-fadeInUp"
        style={{ animationDelay: "0.4s" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          {t("hero.viewGuardians")}
        </h1>
        <p className="text-lg md:text-xl text-blue-300 mb-10">
          {t("hero.tagline")}
        </p>
      </div>

      {/* Grid de guardianes */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {guardians.map((g, index) => (
          <div
            key={g.id}
            className="opacity-0 translate-y-6 animate-fadeInUp"
            style={{ animationDelay: `${index * 0.3 + 0.6}s` }}
          >
            <GuardianCard {...g} />
          </div>
        ))}
      </div>

      {/* Pie de sección con aura ritualizada y franja expansiva debajo */}
      <footer className="relative z-10 mt-10 py-4">
        <p className="text-center text-sm text-yellow-500 italic footer-aura">
          {t("characters.telegramNote")}
        </p>
      </footer>
      <GuardianGallery />
    </section>
  );
}
