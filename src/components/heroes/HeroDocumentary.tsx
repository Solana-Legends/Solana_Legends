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

      <div className="relative z-10 w-full max-w-[1400px] h-full mx-auto flex flex-col justify-between py-2">
        {/* 1. Cabecera - MÁS ALTA Y TÍTULO MÁS PEQUEÑO 
            Añadimos 'pt-10' para subir el título y alejarlo del vídeo.
        */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-4 shrink-0 px-6 pt-10">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <span className="w-8 h-[1px] bg-[#FFA908]"></span>
              <span className="text-[#FFA908] font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase">
                {language === "es"
                  ? "Archivo Audiovisual"
                  : "Audiovisual Archive"}
              </span>
            </div>
            {/* Título reducido: de 7xl a 4xl/5xl */}
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none whitespace-nowrap">
              {language === "es" ? "El Documental" : "The Documentary"}
            </h2>
          </div>

          {/* CAMBIO AQUÍ: He quitado 'hidden md:block' y he añadido 'block text-center md:text-right' */}
          <p className="block text-center md:text-right text-indigo-200/40 font-mono text-[10px] md:text-xs max-w-xs leading-tight border-r-0 md:border-r border-white/10 md:pr-6 md:-mt-2">
            {language === "es"
              ? "Inmersión profunda en las raíces de la tríada original."
              : "Deep dive into the roots of the original triad."}
          </p>
        </div>

        {/* 2. Área del Vídeo - AQUÍ ESTÁ EL CAMBIO CLAVE */}
        <div className="relative w-full flex-grow flex items-center justify-center min-h-0 py-2 pb-2 md:py-6 px-4">
          {/* Eliminamos el GRID y usamos un contenedor único con max-w-[1100px] o el que prefieras */}
          <div className="relative w-full max-w-[1100px] aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.9)] group">
            <VideoWithControls
              src="/assets/Documental_Solana_Legends.mp4"
              glowColor="#A020F0"
            />

            {/* Indicador de Reproducción - Ajustado para estar más esquinado y ser más pequeño en móvil */}
            <div className="absolute top-1.5 left-1.5 md:top-4 md:left-4 flex items-center gap-1.5 md:gap-2.5 pointer-events-none z-20 bg-black/40 backdrop-blur-sm py-0.5 px-2 md:py-1.5 md:px-4 rounded-full border border-white/10 shadow-2xl">
              <Play className="w-2 h-2 md:w-3 md:h-3 text-white fill-white animate-pulse" />
              <span className="text-[8px] md:text-xs font-mono text-white tracking-[0.1em] md:tracking-[0.2em] font-bold">
                {language === "es" ? "Reproduciendo" : "Now Playing"}
              </span>
            </div>
          </div>
        </div>

        {/* 3. Mensaje inferior - BAJADO AL MÁXIMO 
            Cambiamos 'pb-6' por 'pb-4' y ajustamos el margen.
        */}
        <div className="w-full flex flex-col justify-center items-center pb-4 shrink-0">
          <span className="text-sm md:text-lg font-mono text-[#FFA908]/50 tracking-[0.3em] text-center font-bold">
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
