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

      {/* Contenedor principal - py-2 para permitir que los elementos toquen los bordes */}
      <div className="relative z-10 w-full max-w-[1400px] h-full mx-auto flex flex-col justify-between py-2">
        {/* 1. Cabecera - Ajustada para subir y ser más pequeña */}
        <div className="w-full flex flex-col md:flex-row items-end justify-between gap-4 shrink-0 px-6 pt-1 md:pt-2">
          <div className="max-w-[80%] text-left">
            <div className="flex items-center gap-3 mb-1">
              <span className="w-8 h-[1px] bg-[#FFA908]"></span>
              <span className="text-[#FFA908] font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase">
                {language === "es"
                  ? "Archivo Audiovisual"
                  : "Audiovisual Archive"}
              </span>
            </div>
            {/* Título Reducido: de 7xl a 5xl/6xl para que no sea tan masivo */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter leading-none whitespace-nowrap">
              {language === "es" ? "El Documental" : "The Documentary"}
            </h2>
          </div>

          {/* Subtítulo subido ligeramente con mb-1 o mb-2 */}
          <p className="hidden md:block text-indigo-200/40 font-mono text-[10px] md:text-xs max-w-xs text-right leading-tight border-r border-white/10 pr-6 mb-1 md:mb-2 transition-all">
            {language === "es"
              ? "Inmersión profunda en las raíces de la tríada original."
              : "Deep dive into the roots of the original triad."}
          </p>
        </div>

        {/* 2. Área del Vídeo - Ahora tiene más espacio para crecer */}
        <div className="relative w-full flex-grow min-h-0">
          <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6 lg:p-10">
            <div className="relative h-full aspect-video bg-black rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.9)]">
              <div className="absolute inset-0 w-full h-full">
                <VideoWithControls
                  src="/assets/Documental_Solana_Legends.mp4"
                  glowColor="#FFA908"
                />
              </div>

              {/* Indicador Now Playing */}
              <div className="absolute top-4 left-4 md:top-8 md:left-8 flex items-center gap-3 pointer-events-none z-30 bg-black/60 backdrop-blur-md py-1.5 px-4 rounded-full border border-white/10 shadow-2xl">
                <Play className="w-3 h-3 text-white fill-white animate-pulse" />
                <span className="text-[10px] md:text-xs font-mono text-white tracking-[0.2em] uppercase font-bold">
                  {language === "es" ? "Reproduciendo" : "Now Playing"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Mensaje inferior - Bajado casi al borde con pb-1 */}
        <div className="w-full flex flex-col justify-center items-center pb-1 md:pb-2 shrink-0">
          <span className="text-sm md:text-lg lg:text-xl font-mono text-[#FFA908]/60 tracking-[0.3em] uppercase text-center font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
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
