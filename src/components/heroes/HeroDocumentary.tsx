import { useLanguage } from "@/contexts/LanguageContext";
import VideoWithControls from "@/components/VideoWithControls";

export default function HeroDocumentary() {
  const { language } = useLanguage();

  return (
    <section className="relative w-full h-screen bg-[#0F0B1E] overflow-hidden flex flex-col items-center p-4 md:p-6">
      
      {/* Decoración de fondo cósmica */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] h-full mx-auto flex flex-col justify-between py-6">
        
        {/* Cabecera - Respetando mayúsculas/minúsculas y evitando salto de línea */}
        <div className="w-full flex flex-col md:flex-row items-end justify-between gap-6 shrink-0 px-4">
          <div className="max-w-[80%] text-left">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-12 h-[1px] bg-[#FFA908]"></span>
              <span className="text-[#FFA908] font-mono text-sm md:text-base tracking-[0.4em] uppercase">
                {language === 'es' ? 'Archivo Audiovisual' : 'Audiovisual Archive'}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none whitespace-nowrap">
              {language === 'es' ? 'El Documental' : 'The Documentary'}
            </h2>
          </div>
          
          <p className="hidden md:block text-indigo-200/50 font-mono text-sm md:text-base max-w-sm text-right leading-tight border-r border-white/10 pr-6">
            {language === 'es' 
              ? 'Inmersión profunda en las raíces de la tríada original.' 
              : 'Deep dive into the roots of the original triad.'}
          </p>
        </div>

        {/* Marco del Vídeo - 16:9 Expandido al máximo vertical */}
        <div className="relative group w-full flex-grow flex items-center justify-center min-h-0 py-4">
          <div className="absolute inset-4 bg-gradient-to-r from-purple-600/10 via-[#FFA908]/10 to-blue-600/10 rounded-2xl blur-3xl opacity-30"></div>
          
          <div className="relative w-full h-full max-h-full aspect-video bg-black rounded-xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.9)]">
            <div className="absolute inset-0 w-full h-full">
               <VideoWithControls src="/assets/Documental_Solana_Legends.mp4" />
            </div>
            
            <div className="absolute top-8 left-8 flex items-center gap-3 pointer-events-none z-20">
              <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_15px_red]"></div>
              <span className="text-sm font-mono text-white tracking-widest uppercase opacity-70 drop-shadow-md">REC</span>
            </div>
          </div>
        </div>

        {/* Mensaje inferior - Integrado en el fondo y más grande */}
        <div className="w-full flex flex-col justify-center items-center pt-2 pb-4 shrink-0">
          <span className="text-base md:text-xl font-mono text-[#FFA908]/70 tracking-[0.3em] uppercase text-center font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            {language === 'es' ? 'Capítulo: 01 — Filosofía de la Paciencia' : 'Chapter: 01 — Philosophy of Patience'}
          </span>
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#FFA908]/40 to-transparent mt-3"></div>
        </div>

      </div>
    </section>
  );
}
