import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, Users, Copy, Check, ArrowRightLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import VideoWithControls from "@/components/VideoWithControls";
import NavigationHall from "@/components/NavigationHall"; 
import { useState } from "react";

export default function HeroSection() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const contractAddress = "GmPDuwtYuMUpCrzGwYasxmo6vSmWvaHSg1Kf7skipump";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0F0B1E] via-[#1A1530] to-[#0F0B1E] overflow-hidden aura-pulsante py-2 md:py-4 min-h-screen">
      
      <NavigationHall />

      {/* Fondo Cósmico */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-28 h-28 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 text-center flex flex-col items-center flex-grow justify-center">
        
        {/* Contenedor de Logos */}
        <div className="relative w-full flex flex-col md:flex-row items-center justify-center mb-1 md:mb-2 min-h-[100px]">
          <div className="relative group z-10">
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full blur-2xl bg-yellow-500/20 aura-pulsante-gold-strong"></div>
            </div>
            <a href="https://x.com/EligeTuMeme" target="_blank" rel="noopener noreferrer" className="relative z-10">
              <img src="/assets/LogoPremium2.png" alt="Logo" className="h-28 md:h-40 object-contain logo-respirando" />
            </a>
          </div>

          <div className="md:absolute md:right-8 lg:right-16 md:top-1/2 md:-translate-y-1/2 mt-2 md:mt-0 flex flex-col items-center z-20">
            <a href="https://poco-mod-web.vercel.app" target="_blank" rel="noopener noreferrer">
              <img src="/assets/$Poco.png" alt="$Poco Logo" className="h-16 md:h-24 object-contain transition-transform hover:scale-110" />
            </a>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-1 leading-none uppercase">{t("hero.title")}</h1>
        <p className="text-base md:text-lg text-indigo-200 mb-3 max-w-2xl mx-auto leading-tight">{t("hero.subtitle")}</p>

        {/* CA Section */}
        <div className="flex justify-center mb-3 md:mb-4">
          <div className="flex items-center gap-2 bg-black/40 border border-indigo-500/30 rounded-full px-4 py-1 backdrop-blur-sm cursor-pointer" onClick={copyToClipboard}>
            <span className="text-indigo-300 font-mono text-xs">CA: {contractAddress.slice(0, 6)}...{contractAddress.slice(-4)}</span>
            <Button size="icon" variant="ghost" className="h-6 w-6 text-indigo-400">
              {copied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
        </div>

        {/* Videos Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-3 max-w-4xl mx-auto w-full px-2">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-purple-500/40 bg-black/50">
            <VideoWithControls src="/assets/MorfeoGuía_Completo_1.mp4" glowColor="#A020F0" />
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-blue-400/40 bg-black/50">
            <VideoWithControls src="/assets/Zapsol_The_Chosen_Hero_música.mp4" glowColor="#00BFFF" />
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <Badge className="bg-green-500/10 text-green-400 border-green-500/30 px-3 py-0.5">
            <Rocket className="w-3.5 h-3.5 mr-1.5" /> {t("hero.activeProject")}
          </Badge>
          <Badge className="bg-blue-500/10 text-blue-300 border-blue-500/30 px-3 py-0.5">
            <Users className="w-3.5 h-3.5 mr-1.5" /> {t("hero.growingCommunity")}
          </Badge>
        </div>

        {/* --- MATRIZ DE COMPRA (Solo 2 botones centrados y equilibrados) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-2xl mx-auto w-full px-4 mb-8 md:mb-12">
          
          <Button
            variant="outline"
            className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#0F0B1E] font-bold text-base py-6 transition-all duration-300 shadow-[0_0_15px_rgba(250,204,21,0.1)] hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]"
            onClick={() => window.open("https://pump.fun/coin/GmPDuwtYuMUpCrzGwYasxmo6vSmWvaHSg1Kf7skipump", "_blank")}
          >
            <Rocket className="mr-2 h-6 w-6" /> 
            {t("characters.buyOnPump")}
          </Button>

          <Button
            variant="outline"
            className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-[#0F0B1E] font-bold text-base py-6 transition-all duration-300 shadow-[0_0_15px_rgba(74,222,128,0.1)] hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]"
            onClick={() => window.open("https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=GmPDuwtYuMUpCrzGwYasxmo6vSmWvaHSg1Kf7skipump", "_blank")}
          >
            <ArrowRightLeft className="mr-2 h-6 w-6" /> 
            {t("characters.buyOnJupiter")}
          </Button>

        </div>
      </div>

      {/* Personaje Decorativo Restaurado */}
      <div className="absolute top-12 left-12 md:top-auto md:bottom-12 md:left-16 pointer-events-none z-20">
        <img
          src="/assets/MonkeSol.png"
          alt="MonkeSol"
          className="h-24 md:h-56 object-contain animate-float symbol-hero-monkesol-pulse"
        />
      </div>

    </section>
  );
}