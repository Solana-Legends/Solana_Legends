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
    <section className="relative w-full min-h-screen bg-[#0F0B1E] bg-gradient-to-b from-[#0F0B1E] to-[#1A1530] text-white overflow-x-hidden flex flex-col">
      <div className="fixed inset-0 z-0 pointer-events-none aura-pulsante opacity-30" />

      {/* 🛡️ INTERFAZ FIJA PERSISTENTE */}
      <div className="fixed top-4 left-4 z-50 flex flex-col gap-2 w-40 md:w-48 scale-90 md:scale-100 origin-top-left">
        {/* Botón Ghost de ancho completo */}
        <BackHomeButton />
        
        {/* Breadcrumb en dos líneas, centrado y con mejor legibilidad */}
        <div className="bg-black/60 backdrop-blur-md rounded-lg p-2 border border-white/10 shadow-lg flex justify-center">
            <div className="max-w-[120px] md:max-w-[150px] leading-tight text-center">
                <GuardiansBreadcrumb />
            </div>
        </div>
      </div>

      <div className="fixed top-4 right-4 z-50 scale-90 md:scale-100 origin-top-right">
        <LanguageSwitcher />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 flex-grow flex flex-col pt-24 md:pt-28">
        <header className="w-full max-w-4xl mx-auto px-4 text-center mb-6">
          <h1 className="text-4xl md:text-6xl font-black mb-1 tracking-tighter text-white uppercase">
            {t(titleKey)}
          </h1>
          <p className="text-xs md:text-sm text-[#FFA908] font-mono tracking-[0.3em] uppercase opacity-90">
            {t(subtitleKey)}
          </p>
        </header>

        {/* El children (Portal) se inyecta aquí */}
        <div className="w-full flex-grow">
          {children}
        </div>
      </div>
    </section>
  );
}