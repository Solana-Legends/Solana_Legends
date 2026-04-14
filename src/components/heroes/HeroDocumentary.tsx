import { useLanguage } from "@/contexts/LanguageContext";
import VideoWithControls from "@/components/VideoWithControls";
import { PlayCircle } from "lucide-react";

export default function HeroDocumentary() {
  const { language } = useLanguage();

  return (
    <section className="relative w-full bg-[#0F0B1E] py-20 px-4 overflow-hidden">
      {/* Decoración de fondo: Luces de estudio/teatro */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Cabecera de la sección */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-12 h-[1px] bg-[#FFA908]"></span>
              <span className="text-[#FFA908] font-mono text-xs tracking-[0.4em] uppercase">
                {language === 'es' ? 'Archivo Audiovisual' : 'Audiovisual Archive'}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
              {language === 'es' ? 'El Documental' : 'The Documentary'}
            </h2>
          </div>
          
          <p className="text-indigo-200/60 font-mono text-xs md:text-sm max-w-xs md:text-right leading-relaxed border-l md:border-l-0 md:border-r border-white/10 pl-4 md:pl-0 md:pr-4">
            {language === 'es' 
              ? 'Una inmersión profunda en las raíces y la filosofía que dieron vida a la tríada original.' 
              : 'A deep dive into the roots and philosophy that brought the original triad to life.'}
          </p>
        </div>

        {/* El Marco del Vídeo (Cinemascope) */}
        <div className="relative group animate-in fade-in zoom-in-95 duration-1000">
          {/* Brillo perimetral dinámico */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-[#FFA908]/20 to-blue-600/20 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-black rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <VideoWithControls 
              src="/assets/Documental_Solana_Legends.mp4" 
              glowColor="#FFA908" 
            />
            
            {/* Superposición estética de "Grabación" */}
            <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none opacity-40">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-mono text-white tracking-widest uppercase">REC</span>
            </div>
            <div className="absolute bottom-4 right-4 pointer-events-none opacity-20">
              <PlayCircle className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Footer de la sección */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
            <span className="text-[10px] font-mono text-[#FFA908] tracking-widest uppercase">Chapter: 01 — Philosophy of Patience</span>
          </div>
        </div>
      </div>
    </section>
  );
}