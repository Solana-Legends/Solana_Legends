import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, Users, Vote, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import VideoWithControls from "@/components/VideoWithControls";

export default function HeroSection() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#0F0B1E] via-[#1A1530] to-[#0F0B1E] overflow-hidden aura-pulsante aura-hover-gold">
      {/* Fondo cósmico */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 md:w-32 md:h-32 bg-purple-500 rounded-full blur-xl md:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-28 h-28 md:w-48 md:h-48 bg-blue-600 rounded-full blur-xl md:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 md:w-24 md:h-24 bg-indigo-400 rounded-full blur-lg md:blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-6 md:mb-8 flex justify-center relative group">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full blur-xl md:blur-3xl aura-pulsante-gold-strong"></div>
          </div>

          <a
            href="https://x.com/EligeTuMeme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/LogoPremium1.png"
              alt="Solana Legends Logo"
              className="h-20 w-auto md:h-32 object-contain opacity-90 logo-respirando"
            />
          </a>
        </div>

        {/* Título */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-4">
          {t("hero.title")}
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-2xl text-indigo-200 mb-3 md:mb-4">
          {t("hero.subtitle")}
        </p>

        {/* Tagline */}
        <p className="text-base md:text-xl text-purple-300 mb-2 md:mb-3 font-medium">
          {t("hero.tagline")}
        </p>

        {/* Logo Voltra */}
        <div className="flex justify-center md:justify-end mb-2 md:mb-3">
          <div className="relative flex justify-center items-center w-28 h-28 md:w-44 md:h-44 group">
            <div className="absolute w-full h-full rounded-full blur-xl md:blur-3xl aura-pulsante-gold-strong"></div>

            <a
              href="https://x.com/Voltrastudio"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10"
            >
              <img
                src="/assets/Voltra.png"
                alt="Voltra Studio Logo"
                className="h-16 w-auto md:h-28 object-contain opacity-90 logo-respirando"
              />
            </a>
          </div>
        </div>

        {/* MonkeSol flotante corregido */}
        <div className="absolute bottom-0 left-0 ml-[-4rem] animate-in fade-in slide-in-from-left duration-1000">
          <div className="relative z-10 flex justify-center items-center w-80 h-80 group">
            <div className="absolute w-80 h-80 rounded-full blur-3xl hero-monkesol-aura pointer-events-none z-0 transition-colors duration-500 group-hover:bg-red-400/40"></div>
            <img
              src="/assets/MonkeSol.png"
              alt="MonkeSol Hero"
              className="relative z-10 h-64 w-auto md:h-72 object-contain mix-blend-overlay opacity-90 symbol-hero-monkesol-pulse"
            />
          </div>
        </div>

        {/* Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 w-full max-w-screen-lg mx-auto px-2">
          <div>
            <div className="relative group rounded-xl overflow-hidden border border-purple-500/40 aura-pulsante">
              <VideoWithControls
                src="/assets/HeroesLevitan.mp4"
                glowColor="#A020F0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            </div>
          </div>

          <div>
            <div className="relative group rounded-xl overflow-hidden border border-blue-400/40 aura-pulsante-blue">
              <VideoWithControls
                src="/assets/HéroesProgramandoEn.mp4"
                glowColor="#00BFFF"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-4">
          <Badge className="text-green-400 border-green-400 bg-green-400/10 px-4 py-2">
            <Rocket className="w-4 h-4 mr-2" />
            {t("hero.activeProject")}
          </Badge>

          <Badge className="text-blue-300 border-blue-300 bg-blue-300/10 px-4 py-2">
            <Users className="w-4 h-4 mr-2" />
            {t("hero.growingCommunity")}
          </Badge>

          <Badge className="text-purple-300 border-purple-300 bg-purple-300/10 px-4 py-2">
            <Vote className="w-4 h-4 mr-2" />
            {t("hero.upcomingVote")}
          </Badge>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/guardians")}
            className="border-[#FFA908] text-[#FFA908] hover:bg-[#FFA908] hover:text-[#0F0B1E]"
          >
            <Shield className="w-5 h-5" />
            {t("hero.viewGuardians")}
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const section = document.getElementById("community");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-[#0F0B1E]"
          >
            <Users className="w-5 h-5" />
            {t("hero.joinCommunity")}
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open("https://voltra.studio", "_blank")}
            className="border-[#FFA908] text-[#FFA908] hover:bg-[#FFA908] hover:text-[#0F0B1E] flex flex-col leading-tight"
          >
            <span className="text-lg font-bold">Voltra.Studio</span>
            <span className="text-sm text-[#FFD966]">Official partners</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
