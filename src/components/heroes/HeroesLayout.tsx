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
      
      {/* ✨ Capas de Aura fijas para profundidad cósmica */}
      <div className="fixed inset-0 z-0 pointer-events-none aura-pulsante opacity-50" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] bg-[#FFA908]/10 pointer-events-none z-0" />

      {/* 🛡️ INTERFAZ PERSISTENTE (Fixed) */}
      <div className="fixed top-4 left-4 z-50 animate-fadeIn">
        <BackHomeButton />
      </div>

      <div className="fixed top-4 right-4 z-50 animate-fadeIn">
        <LanguageSwitcher />
      </div>

      {/* ✅ CONTENIDO RITUALIZADO */}
      <div className="relative z-10 flex-grow flex flex-col pt-20 md:pt-24 pb-12">
        
        {/* Navegación y Breadcrumb (Centrado y elegante) */}
        <div className="w-full max-w-screen-2xl mx-auto px-6 mb-8">
          <div className="flex justify-center md:justify-start opacity-70 hover:opacity-100 transition-opacity">
            <GuardiansBreadcrumb />
          </div>
        </div>

        {/* Encabezado Principal */}
        <header
          className="
            w-full max-w-screen-2xl mx-auto px-4 text-center mb-10
            opacity-0 translate-y-3 animate-fadeInUp 
            [animation-delay:400ms]
          "
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
            {t(titleKey)}
          </h1>
          <p className="text-lg md:text-xl text-[#FFA908] font-mono tracking-widest uppercase opacity-80">
            {t(subtitleKey)}
          </p>
        </header>

        {/* Slot para el Grid de Héroes y Galería */}
        <main className="w-full flex-grow flex flex-col">
          {children}
        </main>
      </div>
    </section>
  );
}