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
      
      <div className="fixed inset-0 z-0 pointer-events-none aura-pulsante opacity-40" />

      {/* 🛡️ INTERFAZ PERSISTENTE (BOTONES + BREADCRUMB) */}
      <div className="fixed top-4 left-4 z-50 flex flex-col gap-2">
        <BackHomeButton />
        <div className="bg-black/40 backdrop-blur-md rounded-lg p-1.5 border border-white/5">
            <GuardiansBreadcrumb />
        </div>
      </div>

      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      <div className="relative z-10 flex-grow flex flex-col pt-32 md:pt-36 pb-12">
        <header
          className="w-full max-w-screen-2xl mx-auto px-4 text-center mb-12 opacity-0 animate-fadeIn"
          style={{ animationFillMode: 'forwards' }}
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 uppercase">
            {t(titleKey)}
          </h1>
          <p className="text-lg md:text-xl text-[#FFA908] font-mono tracking-widest uppercase opacity-80">
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