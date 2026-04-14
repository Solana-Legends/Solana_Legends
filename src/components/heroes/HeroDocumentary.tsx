import { useLanguage } from "@/contexts/LanguageContext";
import VideoWithControls from "@/components/VideoWithControls";

export default function HeroDocumentary() {
  const { language } = useLanguage();

  return (
    <section className="relative w-full h-screen bg-[#0F0B1E] overflow-hidden flex flex-col items-center p-4 md:p-8">
      
      {/* Decoración de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] h-full mx-auto flex flex-col justify-between py-2">
        
        {/* 1. Cabecera - Textos más grandes */}
        <div className="w-full flex flex-col md:flex-row items-end justify-between gap-4 shrink-0 px-4">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-10 h-[1px] bg-[#FFA908]"></span>
              {/* TAMAÑO SUBIDO: de text-[10px] a text-sm */}
              <span className="text-[#FFA908] font-mono text-xs md:text-sm tracking-[0.4em] uppercase">
                {language === 'es' ? 'Archivo Audiovisual' : 'Audiovisual Archive'}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              {language === 'es' ? 'El Documental' : 'The Documentary'}
            </h2>
          </div>
          {/* TAMAÑO SUBIDO: de text-[10px] a text-xs/sm */}
          <p className="hidden md:block text-indigo-200/50 font-mono text-xs md:text-sm max-w-sm text-right leading-tight border-r border-white/10 pr-4">
            {language === 'es' 
              ? 'Inmersión profunda en las raíces de la tríada original.' 
              : 'Deep dive into the roots of the original triad.'}
          </p>
        </div>

        {/* 2. El Marco del Vídeo - Forzamos el llenado total */}
        <div className="relative group w-full flex-grow flex items-center justify-center min-h-0 py-6">
          <div className="absolute inset-4 bg-gradient-to-r from-purple-600/20 via-[#FFA908]/10 to-blue-600/20 rounded-2xl blur-3xl opacity-40"></div>
          
          <div className="relative w-full h-full max-h-full aspect-video bg-black rounded-xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
            {/* IMPORTANTE: Si tu componente VideoWithControls permite className, 
                añadimos w-full h-full para que el vídeo no flote en el centro. 
            */}
            <div className="w-full h-full">
               <VideoWithControls 
                src="/assets/Documental_Solana_Legends.mp4" 
                glowColor="#FFA908"
              />
            </div>
            
            <div className="absolute top-6 left-6 flex items-center gap-2 pointer-events-none opacity-60">
              <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_15px_red]"></div>
              <span className="text-xs font-mono text-white tracking-widest uppercase shadow-black drop-shadow-md">REC</span>
            </div>
          </div>
        </div>

        {/* 3. Mensaje inferior - TAMAÑO SUBIDO: de text-[10px] a text-xs/sm */}
        <div className="w-full flex justify-center items-center pb-2 shrink-0">
          <div className="inline-flex items-center justify-center gap-4 px-10 py-4 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl">
            <span className="text-xs md:text-sm font-mono text-[#FFA908] tracking-[0.2em] uppercase text-center font-bold">
              {language === 'es' ? 'Capítulo: 01 — Filosofía de la Paciencia' : 'Chapter: 01 — Philosophy of Patience'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
