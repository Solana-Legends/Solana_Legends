import { useLanguage } from "@/contexts/LanguageContext";
import VideoWithControls from "@/components/VideoWithControls";
import { Play } from "lucide-react";

export default function HeroDocumentary() {
  const { language } = useLanguage();

  return (
    <section className="relative w-full h-screen bg-[#0F0B1E] overflow-hidden flex flex-col items-center px-4 md:px-6">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] h-full mx-auto flex flex-col justify-between py-2 md:py-4">
        {/* 1. Cabecera 
            - Móvil: pt-4 (Subimos el título)
            - PC: pt-10 (Se mantiene exactamente igual)
        */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-2 md:gap-4 shrink-0 px-6 pt-4 md:pt-10">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-1 md:mb-2">
              <span className="w-8 h-[1px] bg-[#FFA908]"></span>
              <span className="text-[#FFA908] font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase">
                {language === "es"
                  ? "Archivo Audiovisual"
                  : "Audiovisual Archive"}
              </span>
            </div>
            <h2 className="text-2xl md:text-5xl font-black text-white tracking-tighter leading-none whitespace-nowrap">
              {language === "es" ? "El Documental" : "The Documentary"}
            </h2>
          </div>

          <p className="hidden md:block text-indigo-200/40 font-mono text-[10px] md:text-xs max-w-xs text-right leading-tight border-r border-white/10 pr-6 md:-mt-2">
            {language === "es"
              ? "Inmersión profunda en las raíces de la tríada original."
              : "Deep dive into the roots of the original triad."}
          </p>
        </div>

        {/* 2. Área del Vídeo 
            - Móvil: mb-4 (Cierra el hueco con el mensaje de abajo)
            - PC: mb-16 md:mb-24 (Se mantiene igual)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-6xl mx-auto px-4 mb-4 md:mb-24 z-10">
          <div className="animate-in fade-in slide-in-from-left duration-1000">
            <div className="relative group rounded-xl overflow-hidden aspect-video transition-all duration-500 hover:scale-[1.02] border border-purple-500/30 shadow-[0_0_30px_rgba(160,32,240,0.15)]">
              <VideoWithControls
                src="/assets/Documental_Solana_Legends.mp4"
                glowColor="#A020F0"
              />

              {/* ✅ INDICADOR DENTRO DEL VÍDEO: Para que no se pierda en móvil */}
              <div className="absolute top-3 left-3 md:top-6 md:left-6 flex items-center gap-2 pointer-events-none z-20 bg-black/40 backdrop-blur-sm py-1 px-3 rounded-full border border-white/10">
                <Play className="w-2.5 h-2.5 text-white fill-white" />
                <span className="text-[9px] md:text-xs font-mono text-white tracking-widest uppercase opacity-90">
                  {language === "es" ? "Reproduciendo" : "Now Playing"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Mensaje inferior 
            - Móvil: pb-2 (Bajamos el mensaje al límite inferior)
            - PC: pb-4 (Se mantiene igual)
        */}
        <div className="w-full flex flex-col justify-center items-center pb-2 md:pb-4 shrink-0">
          <span className="text-xs md:text-lg font-mono text-[#FFA908]/50 tracking-[0.3em] uppercase text-center font-bold">
            {language === "es"
              ? "Capítulo: 01 — Filosofía de la Paciencia"
              : "Chapter: 01 — Philosophy of Patience"}
          </span>
          <div className="w-20 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#FFA908]/20 to-transparent mt-2"></div>
        </div>
      </div>
    </section>
  );
}
