import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, Users, Vote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import VideoWithControls from "@/components/VideoWithControls";
import { useRef, useLayoutEffect, useState } from "react";

export default function HeroSection() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Botones con ancho dinámico
  const longestButtonRef = useRef<HTMLButtonElement | null>(null);
  const [maxWidth, setMaxWidth] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (longestButtonRef.current) {
      const width = longestButtonRef.current.getBoundingClientRect().width;
      setMaxWidth(width);
    }
  }, [t]);

  return (
    <section className="relative min-h-[70vh] flex justify-center bg-gradient-to-br from-[#0F0B1E] via-[#1A1530] to-[#0F0B1E] overflow-hidden aura-pulsante aura-hover-gold">
      {/* Fondo cósmico */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 md:w-28 md:h-28 bg-purple-500 rounded-full blur-xl md:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 md:w-40 md:h-40 bg-blue-600 rounded-full blur-xl md:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 md:w-20 md:h-20 bg-indigo-400 rounded-full blur-lg md:blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 text-center md:pt-2">
        {/* Logo */}
        <div className="mb-4 md:mb-6 flex justify-center relative group origin-bottom scale-125 md:scale-125 mt-4">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
            <div className="w-24 h-24 md:w-44 md:h-44 rounded-full blur-lg md:blur-3xl aura-pulsante-gold-strong aura-hover-white"></div>
          </div>

          <a
            href="https://x.com/EligeTuMeme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/LogoPremium2.png"
              alt="Solana Legends Logo"
              className="h-16 w-auto md:h-28 object-contain opacity-90 logo-respirando"
            />
          </a>
        </div>

        {/* Título */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
          {t("hero.title")}
        </h1>

        {/* Subtítulo */}
        <p className="text-base md:text-xl text-indigo-200 mb-2">
          {t("hero.subtitle")}
        </p>

        {/* Tagline */}
        <p className="text-sm md:text-lg text-purple-300 mb-1 font-medium">
          {t("hero.tagline")}
        </p>

        {/* Logo Voltra */}
        <div className="flex justify-center md:justify-end mb-2">
          <div className="relative flex justify-center items-center w-24 h-24 md:w-36 md:h-36 group md:-translate-x-6">
            <div className="absolute w-full h-full rounded-full blur-xl md:blur-3xl aura-pulsante-gold-strong aura-hover-white"></div>

            <a
              href="https://x.com/Voltrastudio"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10"
            >
              <img
                src="/assets/Voltra.png"
                alt="Voltra Studio Logo"
                className="h-18 w-auto md:h-28 object-contain opacity-90 logo-respirando"
              />
            </a>
          </div>
        </div>

        {/* MonkeSol flotante */}
        <div
          className="
            absolute 
            bottom-[-2rem] left-[-0.8rem]
            md:bottom-0 md:left-0
            ml-[-3rem]
            animate-in fade-in slide-in-from-left duration-1000"
        >
          <div className="relative z-10 flex justify-center items-center w-64 h-64 group">
            <div className="absolute w-64 h-64 rounded-full blur-3xl hero-monkesol-aura pointer-events-none z-0 transition-colors duration-500 group-hover:bg-red-400/40"></div>
            <img
              src="/assets/MonkeSol.png"
              alt="MonkeSol Hero"
              className="relative z-10 h-44 w-auto md:h-60 object-contain mix-blend-overlay opacity-90 symbol-hero-monkesol-pulse"
            />
          </div>
        </div>

        {/* Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 w-full max-w-screen-lg mx-auto px-2">
          <div className="animate-in fade-in slide-in-from-left duration-1000">
            <div className="relative group rounded-xl overflow-hidden transition-shadow duration-300 hover:scale-[1.02] border border-purple-500/40 aura-pulsante aura-hover-white">
              <VideoWithControls
                src="/assets/HeroesLevitan.mp4"
                glowColor="#A020F0"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right duration-1000">
            <div className="relative group rounded-xl overflow-hidden transition-shadow duration-300 hover:scale-[1.02] border border-blue-400/40 aura-pulsante-blue aura-hover-gold">
              <VideoWithControls
                src="/assets/HéroesProgramandoEn.mp4"
                glowColor="#00BFFF"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-3">
          <Badge className="text-green-400 border-green-400 bg-green-400/10 px-3 py-1.5">
            <Rocket className="w-4 h-4 mr-2" />
            {t("hero.activeProject")}
          </Badge>

          <Badge className="text-blue-300 border-blue-300 bg-blue-300/10 px-3 py-1.5">
            <Users className="w-4 h-4 mr-2" />
            {t("hero.growingCommunity")}
          </Badge>

          <Badge className="text-purple-300 border-purple-300 bg-purple-300/10 px-3 py-1.5">
            <Vote className="w-4 h-4 mr-2" />
            {t("hero.upcomingVote")}
          </Badge>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4">
          {/* Botón 1 — Hall of Heroes */}
          <Button
            size="default"
            variant="outline"
            onClick={() => navigate("/hall-of-heroes")}
            className="
    w-[200px]
    flex flex-row items-center gap-3
    text-left
    border-[#FFA908] text-[#FFA908]
    hover:bg-[#FFA908] hover:text-[#0F0B1E]
    py-2 px-4
  "
          >
            {/* ICONO IZQUIERDA — CENTRADO VERTICALMENTE */}
            <span className="text-yellow-400 text-xl flex items-center">
              🔥
            </span>

            {/* TEXTO DERECHA (2 líneas) */}
            <div className="flex flex-col leading-tight">
              <span className="font-semibold">
                {t("hero.hallOfHeroes").split("✨")[0].trim()} ✨
              </span>
              <span className="text-sm opacity-90">
                {t("hero.hallOfHeroes").split("✨")[1].trim()}
              </span>
            </div>
          </Button>

          {/* Botón 2 */}
          <Button
            ref={longestButtonRef}
            size="default"
            variant="outline"
            onClick={() => {
              const section = document.getElementById("community");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-fit border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-[#0F0B1E] py-2 px-4"
          >
            <Users className="w-5 h-5" />
            {t("hero.joinCommunity")}
          </Button>

          {/* Botón 3 */}
          <Button
            size="default"
            variant="outline"
            onClick={() => window.open("https://voltra.studio", "_blank")}
            style={{ width: maxWidth ?? "auto" }}
            className="
    w-[220px]
    flex flex-row items-center gap-3
    border-[#FFA908] text-[#FFA908]
    hover:bg-[#FFA908] hover:text-[#0F0B1E]
    py-2 px-4
  "
          >
            {/* ICONO A LA IZQUIERDA */}
            <span className="text-yellow-400 text-xl flex items-center">
              ⚡
            </span>

            {/* TEXTO A LA DERECHA EN DOS LÍNEAS */}
            <div className="flex flex-col leading-tight text-left">
              <span className="text-base font-bold">Voltra.studio</span>
              <span className="text-xs text-[#FFD966]">
                {t("hero.voltraPartners")}
              </span>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
