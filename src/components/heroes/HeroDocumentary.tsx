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
        {/* 1. Cabecera (Se mantiene fija arriba) */}
        <div className="w-full flex flex-col md:flex-row items-end justify-between gap-4 shrink-0 px-4 pt-2">
          <div className="max-w-[80%] text-left">
            <div className="flex items-center gap-3 mb-1">
              <span className="w-10 h-[1px] bg-[#FFA908]"></span>
              <span className="text-[#FFA908] font-mono text-sm md:text-base tracking-[0.4em] uppercase">
                {language === "es"
                  ? "Archivo Audiovisual"
                  : "Audiovisual Archive"}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none whitespace-nowrap">
              {language === "es" ? "El Documental" : "The Documentary"}
            </h2>
          </div>

          <p className="hidden md:block text-indigo-200/40 font-mono text-sm max-w-xs text-right leading-tight border-r border-white/10 pr-6">
            {language === "es"
              ? "Inmersión profunda en las raíces de la tríada original."
              : "Deep dive into the roots of the original triad."}
          </p>
        </div>

        {/* 2. Área del Vídeo (Ocupa todo el espacio central) */}
        <div className="relative w-full flex-grow min-h-0">
          {/* Este div es el que evita la "línea vertical". 
              Se posiciona de forma absoluta para forzar el alto y que el aspect-ratio calcule el ancho. */}
          <div className="absolute inset-0 flex items-center justify-center p-2 md:p-4">
            <div className="relative h-full aspect-video bg-black rounded-xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.9)]">
              <div className="absolute inset-0 w-full h-full">
                <VideoWithControls src="/assets/Documental_Solana_Legends.mp4" />
              </div>

              {/* Nuevo Indicador: PLAY / Reproduciendo */}
              <div className="absolute top-6 left-6 flex items-center gap-2.5 pointer-events-none z-20 bg-black/40 backdrop-blur-md py-1.5 px-3.5 rounded-full border border-white/10">
                <Play className="w-3 h-3 text-white fill-white" />
                <span className="text-[10px] md:text-xs font-mono text-white tracking-[0.2em] uppercase opacity-90">
                  {language === "es" ? "Reproduciendo" : "Now Playing"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Mensaje inferior (Se mantiene fijo abajo) */}
        <div className="w-full flex flex-col justify-center items-center pb-2 shrink-0">
          <span className="text-base md:text-xl font-mono text-[#FFA908]/60 tracking-[0.3em] uppercase text-center font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            {language === "es"
              ? "Capítulo: 01 — Filosofía de la Paciencia"
              : "Chapter: 01 — Philosophy of Patience"}
          </span>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#FFA908]/20 to-transparent mt-2"></div>
        </div>
      </div>
    </section>
  );
}
