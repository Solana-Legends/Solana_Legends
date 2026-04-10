import { useLanguage } from "@/contexts/LanguageContext";
import GuardianRoomZapSol from "@/components/heroes/HeroRoomZapSol";
import GuardianRoomMonkeSol from "@/components/heroes/HeroRoomMonkeSol";
import GuardianRoomChipiSol from "@/components/heroes/HeroRoomChipiSol";
import GuardianTimeline from "@/components/heroes/HeroTimeline";
import VideoWithControls from "@/components/VideoWithControls";
import { ChevronDown } from "lucide-react";

export default function HeroesGallery() {
  const { t, language } = useLanguage();

  return (
    <section className="relative w-full bg-[#0F0B1E] text-white">
      
      {/* =========================================
          Fase 1: EL LOBBY CINEMÁTICO (Pantalla Completa)
          ========================================= */}
      <div className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center px-4 py-12 md:py-20 bg-gradient-to-b from-transparent via-[#1A1530]/50 to-[#0F0B1E]">
        
        {/* Introducción */}
        <div className="text-center mb-10 md:mb-16 max-w-4xl mx-auto mt-8 md:mt-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tighter text-white">
            {t("gallery.title")}
          </h2>
          <p className="text-base md:text-lg text-[#FFA908] font-mono tracking-widest uppercase mb-6">
            {t("gallery.subtitle")}
          </p>
          
          {/* NUEVO: Lore descriptivo para rellenar espacio visual y dar contexto */}
          <p className="text-sm md:text-base text-indigo-200/80 leading-relaxed max-w-2xl mx-auto px-4 font-light">
            {language === 'es' 
              ? 'Los registros audiovisuales revelan la convergencia de las tres arquitecturas elementales. Analiza las simulaciones antes de descender a las cámaras de los guardianes.' 
              : 'The audiovisual logs reveal the convergence of the three elemental architectures. Analyze the simulations before descending into the guardian chambers.'}
          </p>
        </div>

        {/* Videos Expandidos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-6xl mx-auto px-4 mb-16 md:mb-24 z-10">
          <div className="animate-in fade-in slide-in-from-left duration-1000">
            <div className="relative group rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] border border-purple-500/30 shadow-[0_0_30px_rgba(160,32,240,0.15)] hover:shadow-[0_0_40px_rgba(160,32,240,0.3)] aura-pulsante">
              <VideoWithControls src="/assets/Héroes_Guía_Salón_futurista_3_música.mp4" glowColor="#A020F0" />
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right duration-1000">
            <div className="relative group rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] border border-blue-400/30 shadow-[0_0_30px_rgba(0,191,255,0.15)] hover:shadow-[0_0_40px_rgba(0,191,255,0.3)] aura-pulsante-blue">
              <VideoWithControls src="/assets/NFT_Héroes_0x_2.mp4" glowColor="#00BFFF" />
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* NUEVO: Indicador de Scroll hacia las salas */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60 animate-bounce">
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-[#FFA908] mb-2">
            {language === 'es' ? 'Acceder a las Cámaras' : 'Access Chambers'}
          </span>
          <ChevronDown className="w-5 h-5 text-[#FFA908]" />
        </div>
      </div>

      {/* =========================================
          Fase 2: LAS CÁMARAS DE CONTENCIÓN
          ========================================= */}
      <div className="relative z-10 bg-[#0F0B1E]">
        <GuardianRoomZapSol />
        <GuardianRoomMonkeSol />
        <GuardianRoomChipiSol />
      </div>

      {/* =========================================
          Fase 3: CRONOLOGÍA Y CIERRE
          ========================================= */}
      <div className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0B1E] via-[#1A1530]/30 to-[#0F0B1E] pointer-events-none" />
        <GuardianTimeline />
      </div>

      <footer className="pb-16 text-center">
        <p className="text-[#FFA908]/40 italic text-xs font-mono tracking-widest uppercase">
          {t("gallery.footer")}
        </p>
      </footer>
      
    </section>
  );
}