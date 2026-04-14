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
    <section className="relative w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0F0B1E] via-[#1A1530] to-[#0F0B1E] overflow-hidden aura-pulsante py-4 md:py-8 min-h-screen">
      <NavigationHall />

      {/* Fondo Cósmico */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 text-center flex flex-col items-center flex-grow justify-center">
        {/* Contenedor de Logos */}
        <div className="relative w-full flex flex-col md:flex-row items-center justify-center mb-4 min-h-[120px]">
          <div className="relative group z-10">
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full blur-2xl bg-yellow-500/20 aura-pulsante-gold-strong"></div>
            </div>
            <a
              href="https://x.com/EligeTuMeme"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10"
            >
              <img
                src="/assets/LogoPremium2.png"
                alt="Logo"
                className="h-28 md:h-40 object-contain logo-respirando"
              />
            </a>
          </div>

          <div className="md:absolute md:right-8 lg:right-16 md:top-1/2 md:-translate-y-1/2 mt-4 md:mt-0 flex flex-col items-center z-20">
            <a
              href="https://poco-mod-web.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/$Poco.png"
                alt="$Poco Logo"
                className="h-16 md:h-24 object-contain transition-transform hover:scale-110"
              />
            </a>
          </div>
        </div>

        {/* Título y Subtítulo - Respetando Capitalización Natural */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-none">
          {t("hero.title")}
        </h1>
        <p className="text-base md:text-xl text-indigo-200/80 mb-6 max-w-2xl mx-auto leading-tight">
          {t("hero.subtitle")}
        </p>

        {/* CA Section */}
        <div className="flex justify-center mb-6">
          <div
            className="flex items-center gap-3 bg-black/40 border border-indigo-500/30 rounded-full px-5 py-1.5 backdrop-blur-sm cursor-pointer hover:border-indigo-500/60 transition-all shadow-lg"
            onClick={copyToClipboard}
          >
            <span className="text-indigo-300 font-mono text-xs md:text-sm">
              CA: {contractAddress.slice(0, 6)}...{contractAddress.slice(-4)}
            </span>
            <div className="text-indigo-400">
              {copied ? (
                <Check className="h-4 w-4 text-green-400" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </div>
          </div>
        </div>

        {/* Videos Section - Grid 16:9 con glowColor incluido */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 max-w-6xl mx-auto w-full px-4">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-purple-500/30 bg-black/50 shadow-2xl">
            <VideoWithControls
              src="/assets/MorfeoGuía_Completo_1.mp4"
              glowColor="#A020F0"
            />
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-blue-400/30 bg-black/50 shadow-2xl">
            <VideoWithControls
              src="/assets/Zapsol_The_Chosen_Hero_música.mp4"
              glowColor="#00BFFF"
            />
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Badge className="bg-green-500/10 text-green-400 border-green-500/20 px-4 py-1">
            <Rocket className="w-4 h-4 mr-2" /> {t("hero.activeProject")}
          </Badge>
          <Badge className="bg-blue-500/10 text-blue-300 border-blue-500/20 px-4 py-1">
            <Users className="w-4 h-4 mr-2" /> {t("hero.growingCommunity")}
          </Badge>
        </div>

        {/* Matriz de Compra */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto w-full px-4 mb-12">
          <Button
            variant="outline"
            className="w-full border-yellow-400/50 text-yellow-400 hover:bg-yellow-400 hover:text-[#0F0B1E] font-bold text-lg py-7 transition-all duration-300 shadow-xl"
            onClick={() =>
              window.open(
                "https://pump.fun/coin/GmPDuwtYuMUpCrzGwYasxmo6vSmWvaHSg1Kf7skipump",
                "_blank",
              )
            }
          >
            <Rocket className="mr-3 h-6 w-6" />
            {t("characters.buyOnPump")}
          </Button>

          <Button
            variant="outline"
            className="w-full border-green-400/50 text-green-400 hover:bg-green-400 hover:text-[#0F0B1E] font-bold text-lg py-7 transition-all duration-300 shadow-xl"
            onClick={() =>
              window.open(
                "https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=GmPDuwtYuMUpCrzGwYasxmo6vSmWvaHSg1Kf7skipump",
                "_blank",
              )
            }
          >
            <ArrowRightLeft className="mr-3 h-6 w-6" />
            {t("characters.buyOnJupiter")}
          </Button>
        </div>
      </div>

      {/* Personaje Decorativo */}
      <div className="absolute bottom-12 left-12 md:left-24 pointer-events-none z-20 hidden sm:block">
        <img
          src="/assets/MonkeSol.png"
          alt="MonkeSol"
          className="h-32 md:h-64 object-contain animate-float symbol-hero-monkesol-pulse"
        />
      </div>
    </section>
  );
}
