import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, Users, Copy, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import VideoWithControls from "@/components/VideoWithControls";
import { useState } from "react";

export default function HeroSection() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // Dirección del contrato (CA real de ZapSol)
  const contractAddress = "GmPDuwtYuMUpCrzGwYasxmo6vSmWvaHSg1Kf7skipump";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0F0B1E] via-[#1A1530] to-[#0F0B1E] overflow-hidden aura-pulsante py-6 md:py-10 min-h-[90vh]">
      {/* Fondo Cósmico */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-28 h-28 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 text-center flex flex-col items-center">
        
        {/* Logo Principal (Escala reducida para ahorrar espacio) */}
        <div className="mb-3 flex justify-center relative group scale-100">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-24 h-24 md:w-36 md:h-36 rounded-full blur-2xl bg-yellow-500/20 aura-pulsante-gold-strong"></div>
          </div>
          <a href="https://x.com/EligeTuMeme" target="_blank" rel="noopener noreferrer" className="relative z-10">
            <img
              src="/assets/LogoPremium2.png"
              alt="Solana Legends Logo"
              className="h-16 md:h-24 object-contain opacity-95 logo-respirando"
            />
          </a>
        </div>

        {/* Título (Tamaño ajustado) */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">
          {t("hero.title")}
        </h1>
        
        {/* Subtítulo + Logo de Poco Bot integrado (Ahorro masivo de espacio vertical) */}
        <div className="flex flex-row items-center justify-center gap-3 mb-4">
          <p className="text-base md:text-xl text-indigo-200">
            {t("hero.subtitle")}
          </p>
          <a href="https://poco-mod-web.vercel.app" target="_blank" rel="noopener noreferrer" className="relative group flex-shrink-0">
            <div className="absolute inset-0 rounded-full blur-md aura-pulsante-gold-strong"></div>
            <img src="/assets/$Poco.png" alt="$Poco Logo" className="relative z-10 h-8 md:h-12 object-contain logo-respirando" />
          </a>
        </div>

        {/* --- SECCIÓN CONTRACT ADDRESS (CA) --- */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 bg-black/40 border border-indigo-500/30 rounded-full px-4 py-1.5 backdrop-blur-sm group hover:border-indigo-400 transition-colors cursor-pointer" onClick={copyToClipboard}>
            <span className="text-indigo-300 font-mono text-xs md:text-sm">
              CA: {contractAddress.slice(0, 6)}...{contractAddress.slice(-4)}
            </span>
            <Button size="icon" variant="ghost" className="h-6 w-6 text-indigo-400">
              {copied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
        </div>

        {/* Videos de Héroes (Escala reducida para pantallas pequeñas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 max-w-3xl mx-auto w-full">
          <div className="relative rounded-xl overflow-hidden border border-purple-500/40 shadow-xl shadow-purple-500/10 transition-transform hover:scale-[1.02]">
            <VideoWithControls src="/assets/HeroesLevitan.mp4" glowColor="#A020F0" />
          </div>
          <div className="relative rounded-xl overflow-hidden border border-blue-400/40 shadow-xl shadow-blue-500/10 transition-transform hover:scale-[1.02]">
            <VideoWithControls src="/assets/HéroesProgramandoEn.mp4" glowColor="#00BFFF" />
          </div>
        </div>

        {/* Badges de Estado */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <Badge className="bg-green-500/10 text-green-400 border-green-500/30 px-3 py-0.5">
            <Rocket className="w-3.5 h-3.5 mr-1.5" /> {t("hero.activeProject")}
          </Badge>
          <Badge className="bg-blue-500/10 text-blue-300 border-blue-500/30 px-3 py-0.5">
            <Users className="w-3.5 h-3.5 mr-1.5" /> {t("hero.growingCommunity")}
          </Badge>
        </div>

        {/* Botones de Acción Principal (Todos unificados en estilo Outline) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pb-4">
          
          {/* CTA PRIMARIO: COMPRAR (Estilo Outline Dorado) */}
          <Button
            size="default"
            variant="outline"
            className="w-full sm:w-56 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#0F0B1E] font-semibold text-base py-2"
            onClick={() => window.open("https://pump.fun/coin/GmPDuwtYuMUpCrzGwYasxmo6vSmWvaHSg1Kf7skipump", "_blank")}
          >
            <Rocket className="mr-2 h-4 w-4" />
            Buy on pump.fun
          </Button>

          {/* CTA SECUNDARIO: COMUNIDAD */}
          <Button
            size="default"
            variant="outline"
            className="w-full sm:w-56 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-[#0F0B1E] text-base py-2"
            onClick={() => document.getElementById("community")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Users className="mr-2 h-4 w-4" />
            {t("hero.joinCommunity")}
          </Button>

          {/* ACCESO A HALL OF HEROES */}
          <Button
            size="default"
            variant="outline"
            className="w-full sm:w-56 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-[#0F0B1E] text-base py-2"
            onClick={() => navigate("/hall-of-heroes")}
          >
            🔥 {t("hero.hallOfHeroes").split("✨")[0]}
          </Button>
        </div>
      </div>

      {/* Personaje Decorativo Flotante (MonkeSol) - Tamaño reducido */}
      <div className="absolute bottom-2 left-2 md:bottom-6 md:left-6 opacity-30 md:opacity-60 pointer-events-none">
        <img
          src="/assets/MonkeSol.png"
          alt="MonkeSol"
          className="h-24 md:h-40 object-contain animate-float"
        />
      </div>
    </section>
  );
}