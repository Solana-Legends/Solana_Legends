import { ReactNode } from "react";
import { useLanguage, TranslationKeys } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import BackHomeButton from "@/components/guardians/BackHomeButton";
import GuardiansBreadcrumb from "@/components/guardians/GuardiansBreadcrumb";

interface GuardiansLayoutProps {
  children: ReactNode;
  titleKey?: TranslationKeys;
  subtitleKey?: TranslationKeys;
}

export default function GuardiansLayout({
  children,
  titleKey = "hero.viewGuardians",
  subtitleKey = "hero.tagline",
}: GuardiansLayoutProps) {
  const { t } = useLanguage();

  return (
    <section className="relative mt-[-3rem] px-4 py-12 md:py-20 min-h-[600px] bg-gradient-to-b from-slate-950 to-slate-900 text-white aura-pulsante aura-hover-gold">
      {/* ✨ Capas absolutas de aura */}
      <div className="absolute inset-0 z-0 pointer-events-none aura-pulsante aura-hover-gold" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-[#FFA908]/20 animate-pulse pointer-events-none z-0" />

      {/* ✅ Contenido en flujo normal */}
      <div className="relative z-10">
        {/* Encabezado con cambio de idioma y botón de regreso */}
        <div className="mb-8 space-y-4">
          <div className="flex justify-between items-center">
            <LanguageSwitcher />
            <BackHomeButton className="back-home-btn" />
          </div>
          <GuardiansBreadcrumb />
        </div>

        {/* Título y subtítulo ritualizados */}
        <header
          className="max-w-6xl mx-auto text-center opacity-0 translate-y-3 animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-2">{t(titleKey)}</h1>
          <p className="text-lg md:text-xl text-blue-300 mb-10">
            {t(subtitleKey)}
          </p>
        </header>

        {/* Contenido específico de cada vista */}
        {children}
      </div>
    </section>
  );
}
