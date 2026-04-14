import { useLanguage } from "@/contexts/LanguageContext";
import VideoWithControls from "@/components/VideoWithControls";
// ❌ ELIMINADO: import { PlayCircle } from "lucide-react";

export default function HeroDocumentary() {
  const { language } = useLanguage();

  return (
    <section className="relative w-full min-h-screen bg-[#0F0B1E] py-12 md:py-20 px-4 overflow-hidden flex flex-col justify-center items-center">
      
      {/* Decoración de fondo: Luces de estudio/teatro */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      {/* ❌ CORREGIDO: Eliminado el w-full duplicado al final del className */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col justify-center">
        
        {/* Cabecera de la sección */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-6 px-4 md:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-12 h-[1px] bg-[#FFA908]"></span>
              <span className="text-[#FFA908] font-mono text-xs tracking-[0.4em] uppercase">
                {language === 'es' ? 'Archivo Audiovisual' : 'Audiovisual Archive'}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-none drop-shadow-lg">
              {language === 'es' ? 'El Documental' : 'The Documentary'}
            </h2>
          </div>
          
          <p className="text-indigo-200/60 font-mono text-xs md:text-sm max-w-sm md:text-right leading-relaxed border-l md:border-l-0 md:border-r border-white/10 pl-4 md:pl-0 md:pr-4">
            {language === 'es' 
              ? 'Una inmersión profunda en las raíces y la filosofía que dieron vida a la tríada original.' 
              : 'A deep dive into the roots and philosophy that brought the original triad to life.'}
          </p>
        </div>

        {/* El Marco del Vídeo (16:9) */}
        <div className="relative group animate-in fade-in zoom-in-95 duration-1000 w-full aspect-video">
          
          {/* Brillo perimetral dinámico ajustado */}
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/30 via-[#FFA908]/30 to-blue-600/30 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-500"></div>
          
          <div className="relative w-full h-full bg-black rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <VideoWithControls 
              src="/assets/Documental_Solana_Lengends.mp4" 
              glowColor="#FFA908" 
            />
            
            {/* Superposición estética de "Grabación" */}
            <div className="absolute top-6 left-6 flex items-center gap-2 pointer-events-none opacity-50">
              <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_red]"></div>
              <span className="text-xs font-mono text-white tracking-[0.3em] uppercase drop-shadow-md">REC</span>
            </div>
          </div>
        </div>

        {/* Footer de la sección */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md shadow-lg">
            <span className="text-[10px] md:text-xs font-mono text-[#FFA908] tracking-widest uppercase">
              {language === 'es' ? 'Capítulo: 01 — Filosofía de la Paciencia' : 'Chapter: 01 — Philosophy of Patience'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}