import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import GuardianCard from "@/components/GuardianCard";
import { useState } from "react";

const guardians = [
  {
    id: "zapsol",
    name: "ZapSol",
    title: {
     en: "      The Lightning Guardian",
     es: "      El guardián del rayo",
    },
    aura: "⚡",
    image: "/images/guardians/Zap.png",
    description: {
      en: "    Master of electrical energy, speed, and lightning...",
      es: "    Maestro de la energía eléctrica, la velocidad y el rayo...",
    },
  },
  {
    id: "monkesol",
    name: "MonkeSol",
    title:  {
      en: "      The Ancient Sage",
      es: "      El antiguo sabio",
    },
    aura: "🔥",
    image: "/images/guardians/Monk.png",
    description: {
      en: "    Guardian of ancient wisdom and blockchain secrets...",
      es: "    Guardián de la sabiduría antigua y los secretos del blockchain...",
    },
  },
  {
    id: "chipisol",
    name: "ChipiSol",
    title: {
      en: "      The Cosmic Spirit",
      es: "      El Espíritu Cósmico",
    },
    aura: "❄️",
    image: "/images/guardians/Chip.png",
    description: {
      en: "    Mystical entity that connects all dimensions and portals...",
      es: "    Entidad mística que conecta todas las dimensiones y portales...",
    },
  },
];

export default function GuardiansPortal() {
  const { t } = useLanguage();
  const [exit, setExit] = useState(false);

  return (
    <section className="px-4 py-12 md:py-20 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      {/* 🔹 Header con cambio de idioma y volver a home */}
      <div className="flex justify-between items-center mb-8">
        <LanguageSwitcher />

        <Link
          to="/"
          onClick={() => setExit(true)}
          className={`flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-lg text-lg transition ${
            exit ? "animate-slideOutLeftGlow" : "animate-slideInLeftGlow"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          {t("common.backHome")}
        </Link>
      </div>

      {/* 🔹 Breadcrumb ritualizado con animación */}
      <nav
        className="text-sm text-blue-300 mb-6 flex items-center gap-2 px-1 md:px-0 opacity-0 translate-y-3 animate-fadeInUp"
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

      {/* 🔹 Encabezado ritualizado con animación */}
      <div className="max-w-6xl mx-auto text-center opacity-0 translate-y-3 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          {t("hero.viewGuardians")}
        </h1>
        <p className="text-lg md:text-xl text-blue-300 mb-10">
          {t("hero.tagline")}
        </p>
      </div>

      {/* 🔹 Grid de guardianes con animación de entrada y hover intensificado */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {guardians.map((g, index) => (
          <div
            key={g.id}
            className="opacity-0 translate-y-6 animate-fadeInUp hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: `${index * 0.3 + 0.6}s` }}
          >
            <GuardianCard {...g} />
          </div>
        ))}
      </div>

      {/* 🔹 Pie de página con fondo y hover */}
      <p className="text-center text-sm text-blue-300 mt-10 italic bg-slate-900 py-4 hover:bg-slate-800 hover:text-blue-200 transition">
        {t("characters.telegramNote")}
      </p>
    </section>
  );
}
