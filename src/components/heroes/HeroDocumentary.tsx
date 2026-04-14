import { useLanguage } from "@/contexts/LanguageContext";
import VideoWithControls from "@/components/VideoWithControls";

export default function HeroDocumentary() {
  const { language } = useLanguage();

  return (
    // h-screen (en lugar de min-h) fija la sección al tamaño exacto de la ventana
    <section className="relative w-full h-screen bg-[#0F0B1E] overflow-hidden flex flex-col items-center p-4 md:p-8">
      
      {/* Decoración de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      {/* Contenedor principal: Ocupa el 100% de la altura disponible */}
      <div className="relative z-10 w-full max-w-[1400px] h-full mx-auto flex flex-col justify-between">
        
        {/* 1. Cabecera - Reducimos márgenes para dar aire al vídeo */}
        <div className="w-full flex flex-col md:flex-row items-end justify-between pt-4 md:pt-0 gap-4 shrink-0 px-4">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-[#FFA908]"></span>
              <span className="text-[#FFA908] font-mono text-[10px] tracking-[0.4em] uppercase">
                {language === 'es' ? 'Archivo Audiovisual' : 'Audiovisual Archive'}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none">
              {language === 'es' ? 'El Documental' : 'The Documentary'}
            </h2>
          </div>
          <p className="hidden md:block text-indigo-200/40 font-mono text-[10px] max-w-xs text-right leading-tight border-r border-white/10 pr-4">
            {language === 'es' 
              ? 'Inmersión profunda en las raíces de la tríada original.' 
              : 'Deep dive into the roots of the original triad.'}
          </p>
        </div>

        {/* 2. El Marco del Vídeo: La clave es 'flex-grow' para que chupe todo el espacio libre */}
        <div className="relative group w-full flex-grow flex items-center justify-center min-h-0 py-4">
          
          {/* Brillo dinámico */}
          <div className="absolute inset-4 bg-gradient-to-r from-purple-600/20 via-[#FFA908]/10 to-blue-600/20 rounded-2xl blur-2xl opacity-40"></div>
          
          {/* Contenedor del vídeo con aspect-video pero limitado por el alto del padre */}
          <div className="relative w-full h-full max-h-full aspect-video bg-black rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
            <VideoWithControls 
              src="/assets/Documental_Solana_Legends.mp4" 
              glowColor="#FFA908" 
            />
            
            <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none opacity-40">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_red]"></div>
              <span className="text-[10px] font-mono text-white tracking-widest uppercase">REC</span>
            </div>
          </div>
        </div>

        {/* 3. Mensaje inferior - Pegado abajo para no empujar el vídeo */}
        <div className="w-full flex justify-center items-center pb-4 shrink-0">
          <div className="inline-flex items-center justify-center gap-4 px-6 py-2 rounded-full border border-white/5 bg-black/40 backdrop-blur-md">
            <span className="text-[10px] font-mono text-[#FFA908] tracking-[0.2em] uppercase text-center">
              {language === 'es' ? 'Capítulo: 01 — Filosofía de la Paciencia' : 'Chapter: 01 — Philosophy of Patience'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
