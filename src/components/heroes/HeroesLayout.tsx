import { ReactNode } from "react";
import { useLanguage, TranslationKeys } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import BackHomeButton from "@/components/heroes/BackHomeButton";
import GuardiansBreadcrumb from "@/components/heroes/HeroesBreadcrumb";

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
    <section className="relative w-full min-h-screen bg-[#0F0B1E] bg-gradient-to-b from-[#0F0B1E] to-[#1A1530] text-white overflow-hidden flex flex-col">
      
      {/* Fondo de aura fijo */}
      <div className="fixed inset-0 z-0 pointer-events-none aura-pulsante opacity-30" />

      {/* 🛡️ INTERFAZ FIJA */}
      <div className="fixed top-4 left-4 z-50 flex flex-col gap-2 scale-90 md:scale-100 origin-top-left">
        <BackHomeButton />
        <div className="bg-black/60 backdrop-blur-md rounded-lg p-1.5 border border-white/10 shadow-lg">
            <GuardiansBreadcrumb />
        </div>
      </div>

      <div className="fixed top-4 right-4 z-50 scale-90 md:scale-100 origin-top-right">
        <LanguageSwitcher />
      </div>

      {/* CONTENIDO PRINCIPAL - Reducido el PT para que el título entre en escena rápido */}
      <div className="relative z-10 flex-grow flex flex-col pt-24 md:pt-28">
        <header className="w-full max-w-screen-2xl mx-auto px-4 text-center mb-6">
          <h1 className="text-4xl md:text-6xl font-black mb-2 tracking-tighter text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            {t(titleKey)}
          </h1>
          <p className="text-sm md:text-base text-[#FFA908] font-mono tracking-[0.3em] uppercase font-bold">
            {t(subtitleKey)}
          </p>
        </header>

        <main className="w-full flex-grow flex flex-col justify-center">
          {children}
        </main>
      </div>
    </section>
  );
}