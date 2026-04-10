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
    <section className="relative w-full h-screen bg-[#0F0B1E] bg-gradient-to-b from-[#0F0B1E] to-[#1A1530] text-white overflow-hidden flex flex-col">
      
      {/* Aura de fondo fija */}
      <div className="fixed inset-0 z-0 pointer-events-none aura-pulsante opacity-30" />

      {/* 🛡️ INTERFAZ PERSISTENTE */}
      <div className="fixed top-4 left-4 z-50 flex flex-col gap-2 scale-90 md:scale-100 origin-top-left">
        <BackHomeButton />
        <div className="bg-black/60 backdrop-blur-md rounded-lg p-1.5 border border-white/10 shadow-lg">
            <GuardiansBreadcrumb />
        </div>
      </div>

      <div className="fixed top-4 right-4 z-50 scale-90 md:scale-100 origin-top-right">
        <LanguageSwitcher />
      </div>

      {/* CONTENIDO - Ajustado PT para maximizar espacio vertical */}
      <div className="relative z-10 flex-grow flex flex-col pt-20 md:pt-24 pb-2">
        <header className="w-full max-w-screen-2xl mx-auto px-4 text-center mb-4">
          <h1 className="text-3xl md:text-5xl font-black mb-1 tracking-tighter text-white uppercase">
            {t(titleKey)}
          </h1>
          <p className="text-xs md:text-sm text-[#FFA908] font-mono tracking-[0.3em] uppercase opacity-90">
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