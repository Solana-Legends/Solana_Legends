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
      
      {/* Fondo de aura fijo */}
      <div className="fixed inset-0 z-0 pointer-events-none aura-pulsante opacity-40" />

      {/* 🛡️ INTERFAZ FIJA */}
      <div className="fixed top-6 left-6 z-50 flex flex-col gap-3">
        <BackHomeButton />
        <div className="bg-black/60 backdrop-blur-md rounded-lg p-2 border border-white/10 shadow-xl">
            <GuardiansBreadcrumb />
        </div>
      </div>

      <div className="fixed top-6 right-6 z-50">
        <LanguageSwitcher />
      </div>

      {/* Título Principal - Ajustado el Padding Top para que aparezca debajo de los botones */}
      <div className="relative z-10 flex-grow flex flex-col pt-40 md:pt-48 pb-10">
        <header
          className="w-full max-w-screen-2xl mx-auto px-4 text-center mb-10 opacity-0 animate-fadeIn"
          style={{ animationFillMode: 'forwards' }}
        >
          <h1 className="text-5xl md:text-8xl font-black mb-3 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-600 uppercase">
            {t(titleKey)}
          </h1>
          <p className="text-xl md:text-2xl text-[#FFA908] font-mono tracking-[0.3em] uppercase opacity-90 drop-shadow-lg">
            {t(subtitleKey)}
          </p>
        </header>

        <main className="w-full flex-grow flex flex-col">
          {children}
        </main>
      </div>
    </section>
  );
}