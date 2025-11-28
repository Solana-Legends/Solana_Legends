import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import GuardianCard from "@/components/GuardianCard";
import { useState } from "react";

const guardians = [
  {
    id: "zapsol",
    name: "ZapSol",
    title: "The Lightning Guardian",
    aura: "⚡",
    image: "/images/guardians/Zap.png", // 🔹 ruta corregida
    description: {
      en: "Master of electrical energy and speed...",
      es: "Maestro de la energía eléctrica y la velocidad...",
    },
  },
  {
    id: "monkesol",
    name: "MonkeSol",
    title: "The Ancient Sage",
    aura: "🧠",
    image: "/images/guardians/Monk.png", // 🔹 ruta corregida
    description: {
      en: "Guardian of ancient wisdom and blockchain secrets...",
      es: "Guardián de la sabiduría antigua y los secretos del blockchain...",
    },
  },
  {
    id: "chipisol",
    name: "ChipiSol",
    title: "The Cosmic Spirit",
    aura: "🪐",
    image: "/images/guardians/Chip.png", // 🔹 ruta corregida
    description: {
      en: "Mystical entity that connects all dimensions...",
      es: "Entidad mística que conecta todas las dimensiones...",
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

      {/* 🔹 Encabezado ritualizado */}
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          {t("hero.viewGuardians")}
        </h1>
        <p className="text-lg md:text-xl text-blue-300 mb-10">
          {t("hero.tagline")}
        </p>
      </div>

      {/* 🔹 Grid de guardianes SIN animaciones (para probar) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {guardians.map((g) => (
          <div
            key={g.id}
            className="hover:scale-105 transition-transform duration-300"
          >
            <GuardianCard {...g} />
          </div>
        ))}
      </div>

      {/* 🔹 Pie de página */}
      <p className="text-center text-sm text-blue-300 mt-10 italic bg-slate-900 py-4 hover:bg-slate-800 hover:text-blue-200 transition">
        {t("characters.telegramNote")}
      </p>
    </section>
  );
}
