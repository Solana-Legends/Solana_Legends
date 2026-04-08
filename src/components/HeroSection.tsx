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

  // Dirección del contrato (Asegúrate de cambiar esto por el CA de ZapSol)
  const contractAddress = "GmPDuwtYuMUpCrzGwYasxmo6vSmWvaHSg1Kf7skipump";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-[#0F0B1E] via-[#1A1530] to-[#0F0B1E] overflow-hidden aura-pulsante pt-6 md:pt-12">
      {/* Fondo Cósmico */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-28 h-28 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 text-center">
        {/* Logo Principal */}
        <div className="mb-6 flex justify-center relative group scale-110 md:scale-125">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full blur-3xl bg-yellow-500/20 aura-pulsante-gold-strong"></div>
          </div>
          <img
            src="/assets/LogoPremium2.png"
            alt="Solana Legends Logo"
            className="h-20 md:h-32 object-contain opacity-95 logo-respirando"
          />
        </div>

        {/* Título y Subtítulo */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
          {t("hero.title")}
        </h1>
        <p className="text-lg md:text-2xl text-indigo-200 mb-6 max-w-2xl mx-auto">
          {t("hero.subtitle")}
        </p>

        {/* --- SECCIÓN CONTRACT ADDRESS (CA) --- */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 bg-black/40 border border-indigo-500/30 rounded-full px-4 py-2 backdrop-blur-sm group hover:border-indigo-400 transition-colors cursor-pointer" onClick={copyToClipboard}>
            <span className="text-indigo-300 font-mono text-xs md:text-sm">
              CA: {contractAddress.slice(0, 6)}...{contractAddress.slice(-4)}
            </span>
            <Button size="icon" variant="ghost" className="h-6 w-6 text-indigo-400">
              {copied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
        </div>

        {/* Videos de Héroes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-purple-500/40 shadow-2xl shadow-purple-500/10">
            <VideoWithControls src="/assets/HeroesLevitan.mp4" glowColor="#A020F0" />
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-blue-400/40 shadow-2xl shadow-blue-500/10">
            <VideoWithControls src="/assets/HéroesProgramandoEn.mp4" glowColor="#00BFFF" />
          </div>
        </div>

        {/* Badges de Estado */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Badge className="bg-green-500/10 text-green-400 border-green-500/30 px-4 py-1">
            <Rocket className="w-4 h-4 mr-2" /> {t("hero.activeProject")}
          </Badge>
          <Badge className="bg-blue-500/10 text-blue-300 border-blue-500/30 px-4 py-1">
            <Users className="w-4 h-4 mr-2" /> {t("hero.growingCommunity")}
          </Badge>
        </div>

        {/* Botones de Acción Principal */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pb-12">
          
          {/* CTA PRIMARIO: COMPRAR */}
          <Button
            size="lg"
            className="w-full sm:w-64 bg-yellow-500 text-black hover:bg-yellow-400 font-bold text-lg shadow-[0_0_20px_rgba(234,179,8,0.3)]"
            onClick={() => window.open("https://pump.fun", "_blank")}
          >
            <Rocket className="mr-2 h-5 w-5" />
            BUY ON PUMP.FUN
          </Button>

          {/* CTA SECUNDARIO: COMUNIDAD */}
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-64 border-indigo-400 text-indigo-400 hover:bg-indigo-400/10"
            onClick={() => document.getElementById("community")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Users className="mr-2 h-5 w-5" />
            {t("hero.joinCommunity")}
          </Button>

          {/* ACCESO A HALL OF HEROES */}
          <Button
            size="lg"
            variant="ghost"
            className="w-full sm:w-64 text-yellow-500 hover:bg-yellow-500/10 border border-yellow-500/20"
            onClick={() => navigate("/hall-of-heroes")}
          >
            🔥 {t("hero.hallOfHeroes").split("✨")[0]}
          </Button>
        </div>
      </div>

      {/* Personaje Decorativo Flotante (MonkeSol) */}
      <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 opacity-40 md:opacity-80 pointer-events-none">
        <img
          src="/assets/MonkeSol.png"
          alt="MonkeSol"
          className="h-32 md:h-56 object-contain animate-float"
        />
      </div>
    </section>
  );
}