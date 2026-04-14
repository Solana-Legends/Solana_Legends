import { useLanguage } from "@/contexts/LanguageContext";
import VideoWithControls from "@/components/VideoWithControls";

export default function HeroDocumentary() {
  const { language } = useLanguage();

  return (
    <section className="relative w-full h-screen bg-[#0F0B1E] overflow-hidden flex flex-col items-center px-4 md:px-6">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      {/* Contenedor principal: 
          - py-2 para reducir el margen superior/inferior al mínimo.
          - justify-between para empujar cabecera arriba y mensaje abajo.
      */}
      <div className="relative z-10 w-full max-w-[1400px] h-full mx-auto flex flex-col justify-between py-2 md:py-4">
        {/* 1. Cabecera - Ajustada para ocupar el mínimo alto posible */}
        <div className="w-full flex flex-col md:flex-row items-end justify-between gap-4 shrink-0 px-4 pt-2">
          <div className="max-w-[80%] text-left">
            <div className="flex items-center gap-3 mb-1">
              <span className="w-10 h-[1px] bg-[#FFA908]"></span>
              <span className="text-[#FFA908] font-mono text-xs md:text-sm tracking-[0.4em] uppercase">
                {language === "es"
                  ? "Archivo Audiovisual"
                  : "Audiovisual Archive"}
              </span>
            </div>
            {/* Título en una línea y con capitalización natural */}
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none whitespace-nowrap">
              {language === "es" ? "El Documental" : "The Documentary"}
            </h2>
          </div>

          <p className="hidden md:block text-indigo-200/40 font-mono text-xs md:text-sm max-w-xs text-right leading-tight border-r border-white/10 pr-6">
            {language === "es"
              ? "Inmersión profunda en las raíces de la tríada original."
              : "Deep dive into the roots of the original triad."}
          </p>
        </div>

        {/* 2. El Marco del Vídeo: 
            - flex-grow para que absorba todo el espacio liberado.
            - py-2 para mantener una separación mínima con los textos.
        */}
        <div className="relative group w-full flex-grow flex items-center justify-center min-h-0 py-2">
          {/* Aura de luz centralizada */}
          <div className="absolute inset-8 bg-gradient-to-r from-purple-600/10 via-[#FFA908]/5 to-blue-600/10 rounded-full blur-3xl opacity-30"></div>

          {/* Contenedor del reproductor:
              - h-full y w-auto para que el alto dicte el tamaño.
              - aspect-video para forzar el 1.77 (16:9).
          */}
          <div className="relative h-full max-h-full w-auto aspect-video bg-black rounded-xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.9)]">
            <div className="absolute inset-0">
              <VideoWithControls src="/assets/Documental_Solana_Legends.mp4" />
            </div>

            {/* Superposición estética REC */}
            <div className="absolute top-6 left-6 flex items-center gap-2 pointer-events-none z-20">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_red]"></div>
              <span className="text-[10px] md:text-xs font-mono text-white tracking-widest uppercase opacity-60 drop-shadow-md">
                REC
              </span>
            </div>
          </div>
        </div>

        {/* 3. Mensaje inferior - Empujado casi al borde de la sección (pb-2) */}
        <div className="w-full flex flex-col justify-center items-center pb-2 shrink-0">
          <span className="text-sm md:text-lg font-mono text-[#FFA908]/60 tracking-[0.3em] uppercase text-center font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
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
