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
      en: "Monke is the Guardian of ancient wisdom and blockchain secrets...",
      es: "Monke es el Guardián de la sabiduría antigua y los secretos del blockchain...",
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
      en: "Chipi is the mystical Entity that connects all dimensions and portals...",
      es: "Chipi es la Entidad mística que conecta todas las dimensiones y portales...",
    },
  },
];

export default function GuardiansPortal() {
  const { t } = useLanguage();

  return (
    <GuardiansLayout titleKey="hero.viewGuardians" subtitleKey="hero.tagline">
      {/* ✅ Grid de guardianes en flujo normal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-screen-2xl mx-auto px-4">
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

      {/* ✅ Galería ritualizada */}
      <GuardianGallery />
    </GuardiansLayout>
  );
}
