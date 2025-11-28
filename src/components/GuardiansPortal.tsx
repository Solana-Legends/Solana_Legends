import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import GuardianCard from "@/components/GuardianCard";

const guardians = [
  {
    id: "zapsol",
    name: "ZapSol",
    title: "The Lightning Guardian",
    aura: "⚡",
    image: "/images/zapsol.png",
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
    image: "/images/monkesol.png",
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
    image: "/images/chipisol.png",
    description: {
      en: "Mystical entity that connects all dimensions...",
      es: "Entidad mística que conecta todas las dimensiones...",
    },
  },
];

export default function GuardiansPortal() {
  const { t } = useLanguage();

  return (
    <section className="px-4 py-12 md:py-20 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      {/* 🔹 Header con cambio de idioma y volver a home */}
      <div className="flex justify-between items-center mb-8">
        <LanguageSwitcher />
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
        >
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

      {/* 🔹 Grid de guardianes usando GuardianCard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {guardians.map((g) => (
          <GuardianCard key={g.id} {...g} />
        ))}
      </div>

      {/* 🔹 Mensaje ritual final */}
      <p className="text-center text-sm text-blue-400 mt-10 italic">
        {t("characters.telegramNote")}
      </p>
    </section>
  );
}
