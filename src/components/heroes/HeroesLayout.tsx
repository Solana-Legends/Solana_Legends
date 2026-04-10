import { ReactNode } from "react";
import { useLanguage, TranslationKeys } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import BackHomeButton from "@/components/heroes/BackHomeButton";

interface GuardiansLayoutProps {
  children: ReactNode;
  titleKey?: TranslationKeys;
  subtitleKey?: TranslationKeys;
}

export default function GuardiansLayout({
  children,
  titleKey = "hero.hallOfHeroes",
  subtitleKey = "hero.tagline",
}: GuardiansLayoutProps) {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-screen bg-[#0F0B1E] bg-gradient-to-b from-[#0F0B1E] to-[#1A1530] text-white overflow-x-hidden flex flex-col">
      {/* Fondo de aura fijo */}
      <div className="fixed inset-0 z-0 pointer-events-none aura-pulsante opacity-30" />

      {/* 🛡️ INTERFAZ FIJA - Back (Izquierda) */}
      <div className="fixed top-6 left-6 z-50 scale-90 md:scale-100 origin-top-left">
        <BackHomeButton />
      </div>

      {/* 🛡️ INTERFAZ FIJA - Idioma (Derecha - ¡Fijo y Clavado!) */}
      <div className="fixed top-6 right-6 md:right-10 z-50 scale-90 md:scale-100 origin-top-right">
        <LanguageSwitcher />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 flex-grow flex flex-col pt-24 md:pt-28">
        <header className="w-full max-w-4xl mx-auto px-4 text-center mb-6">
          <h1 className="text-4xl md:text-6xl font-black mb-1 tracking-tighter text-white uppercase break-words leading-none">
            {t(titleKey)}
          </h1>
          <p className="text-xs md:text-sm text-[#FFA908] font-mono tracking-[0.3em] uppercase opacity-90 leading-tight">
            {t(subtitleKey)}
          </p>
        </header>

        <main className="w-full flex-grow flex flex-col justify-center overflow-hidden">
          {children}
        </main>
      </div>
    </section>
  );
}