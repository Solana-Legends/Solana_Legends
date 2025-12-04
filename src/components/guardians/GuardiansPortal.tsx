// src/components/guardians/GuardiansPortal.tsx
import { useLanguage } from "@/contexts/LanguageContext";
import GuardianCard from "@/components/guardians/GuardianCard";
import GuardianGallery from "./GuardianGallery";
import GuardiansLayout from "@/components/guardians/GuardiansLayout";

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
    <GuardiansLayout titleKey="hero.viewGuardians" subtitleKey="hero.tagline">
      {/* ✅ Grid de guardianes en flujo normal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

      {/* ✅ Pie de sección ritualizado */}
      <footer className="mt-10 py-4">
        <p className="text-center text-sm text-yellow-500 italic footer-aura">
          {t("characters.telegramNote")}
        </p>
      </footer>

      {/* 🔀 Transición hacia GuardianGallery */}
      <div className="relative w-full h-24 bg-gradient-to-b from-yellow-400/30 via-orange-400/30 to-cyan-400/40 animate-pulse mt-4 mb-8 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center">
          {/* Halo multicolor que conecta guardianes con la galería */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-cyan-400 blur-3xl opacity-70 animate-ping"></div>
        </div>
      </div>

      {/* ✅ Galería ritualizada */}
      <GuardianGallery />
    </GuardiansLayout>
  );
}
