// src/components/heroes/HeroesGallery.tsx
import { useLanguage } from "@/contexts/LanguageContext";
import GuardianRoomZapSol from "./HeroRoomZapSol";
import GuardianRoomMonkeSol from "./HeroRoomMonkeSol";
import GuardianRoomChipiSol from "./HeroRoomChipiSol";
import GuardianTimeline from "./HeroTimeline";
import VideoWithControls from "@/components/VideoWithControls";
import { ChevronDown } from "lucide-react";

export default function HeroesGallery() {
  const { t, language } = useLanguage();

  return (
    <section className="relative w-full bg-[#0F0B1E] text-white z-10">
      
      {/* =========================================
          FASE 1: LOS 2 VÍDEOS (Archivos de Simulación)
          ========================================= */}
      <div className="relative flex flex-col justify-center items-center px-4 py-20 bg-gradient-to-b from-[#0F0B1E] via-[#1A1530]/40 to-[#0F0B1E]">
        
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter text-white">
            {language === 'es' ? 'Archivos de Simulación' : 'Simulation Archives'}
          </h3>
          <p className="text-indigo-200/60 font-light text-sm md:text-base">
            {language === 'es' 
              ? 'Antes de descender a las cámaras físicas, revisa los registros de las primeras simulaciones de convergencia.' 
              : 'Before descending into the physical chambers, review the logs of the first convergence simulations.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-6xl mx-auto px-4 mb-12">
          {/* Video 1 */}
          <div className="relative group rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] border border-purple-500/30 shadow-[0_0_30px_rgba(160,32,240,0.15)]">
            <VideoWithControls src="/assets/Héroes_Guía_Salón_futurista_3_música.mp4" glowColor="#A020F0" />
          </div>
          {/* Video 2 */}
          <div className="relative group rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] border border-blue-400/30 shadow-[0_0_30px_rgba(0,191,255,0.15)]">
            <VideoWithControls src="/assets/NFT_Héroes_0x_2.mp4" glowColor="#00BFFF" />
          </div>
        </div>

        <div className="flex flex-col items-center opacity-60 animate-bounce mt-4">
          <ChevronDown className="w-6 h-6 text-[#FFA908]" />
        </div>
      </div>

      {/* =========================================
          FASE 2: LAS 3 CÁMARAS DE CONTENCIÓN
          ========================================= */}
      <div className="relative bg-[#0F0B1E]">
        <GuardianRoomZapSol />
        <GuardianRoomMonkeSol />
        <GuardianRoomChipiSol />
      </div>

      {/* =========================================
          FASE 3: CRONOLOGÍA Y CIERRE
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