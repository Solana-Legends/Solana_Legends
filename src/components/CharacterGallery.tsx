import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Brain, Sparkles, Lock, Rocket, Activity, ArrowRightLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useMetrics } from "@/hooks/useMetrics";

type Character = {
  id: number;
  name: string;
  title: string;
  description: string;
  element: string;
  color: string;
  borderColor: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  stats: {
    power: number;
    speed: number;
    intelligence: number;
  };
};

export default function CharacterGallery() {
  const { t } = useLanguage();
  const { isLoading } = useMetrics();

  // Enlaces de Acción Táctica
  const pumpFunURL = "https://pump.fun/coin/GmPDuwtYuMUpCrzGwYasxmo6vSmWvaHSg1Kf7skipump";
  const jupiterURL = "https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=GmPDuwtYuMUpCrzGwYasxmo6vSmWvaHSg1Kf7skipump";
  const dexScreenerURL = "https://dexscreener.com/solana/7yxrb1wzpeknlj2yfjm3p8qy4ytsmq1vzuts1dpkhmsh";

  const characters: Character[] = [
    {
      id: 1,
      name: t("characters.zapsol.name"),
      title: t("characters.zapsol.title"),
      description: t("characters.zapsol.description"),
      element: t("characters.zapsol.element"),
      color: "from-yellow-400 to-orange-500",
      borderColor: "border-yellow-400",
      icon: Zap,
      image: "/ZapSol.png",
      stats: { power: 95, speed: 98, intelligence: 87 },
    },
    {
      id: 2,
      name: t("characters.monkesol.name"),
      title: t("characters.monkesol.title"),
      description: t("characters.monkesol.description"),
      element: t("characters.monkesol.element"),
      color: "from-green-400 to-emerald-500",
      borderColor: "border-green-400",
      icon: Brain,
      image: "/MonkeSol.png",
      stats: { power: 94, speed: 84, intelligence: 99 },
    },
    {
      id: 3,
      name: t("characters.chipisol.name"),
      title: t("characters.chipisol.title"),
      description: t("characters.chipisol.description"),
      element: t("characters.chipisol.element"),
      color: "from-purple-400 to-pink-500",
      borderColor: "border-purple-400",
      icon: Sparkles,
      image: "/ChipiSol.png",
      stats: { power: 92, speed: 85, intelligence: 94 },
    },
  ];

  // La red está 100% activa. Ignición completada.
  const progressPercentage = 100;

  return (
    <section className="relative py-16 px-6 min-h-[520px] bg-gradient-to-br from-[#0F0B1E] via-[#1A1530] to-[#0F0B1E] aura-pulsante aura-hover-gold">
      <div className="absolute inset-0 z-0 pointer-events-none aura-pulsante aura-hover-gold" />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-48 h-48 md:w-64 md:h-64 rounded-full blur-3xl 
                   bg-[#FFA908]/20 animate-pulse pointer-events-none z-0"
      />

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {t("characters.title")}
          </h2>

          <p className="text-base md:text-lg text-white w-full max-w-screen-lg mx-auto mb-3 px-4">
            {t("characters.subtitle")}
          </p>

          <p className="text-base text-[#FFA908] font-semibold">
            {isLoading ? "Synchronizing Network..." : t("characters.votingActive")}
          </p>

          {/* PROGRESS BAR (Representando la Energía de la Red operando al 100%) */}
          <div className="relative w-full max-w-lg mx-auto h-2.5 rounded-full border border-[#FFA908]/40 bg-[#1A1530] overflow-hidden mt-3 shadow-[0_0_15px_rgba(255,169,8,0.3)]">
            <div
              className="progress-bar absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-[pulse_2s_infinite] rounded-full"
              style={{ width: `${progressPercentage}%` } as React.CSSProperties}
            />
          </div>
        </div>

        {/* CARDS */}
        <div className="flex flex-wrap justify-center gap-6">
          {characters.map((character) => {
            const IconComponent = character.icon;
            // Lógica Central: ZapSol (ID 1) es el token activo
            const isActive = character.id === 1; 

            return (
              <Card
                key={character.id}
                className={`w-[340px] bg-[#1A1530]/40 border-4 rounded-xl transition-all duration-300 hover:scale-[1.02] group ${
                  isActive ? character.borderColor : "border-[#2A1F40] opacity-80 hover:opacity-100"
                } aura-pulsante aura-hover relative overflow-hidden flex flex-col`}
              >
                {/* Resplandor de fondo solo para el activo */}
                {isActive && (
                  <div className="absolute inset-0 bg-yellow-500/5 pointer-events-none z-0"></div>
                )}

                <CardHeader className="text-center pb-3 relative z-10">
                  <div className="relative mb-5">
                    {/* AURA HORIZONTAL */}
                    <div
                      className={`
                        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                        w-20 h-6 md:w-24 md:h-8 rounded-full blur-xl z-0 transition-opacity
                        ${isActive ? `bg-gradient-to-r ${character.color} opacity-60 group-hover:opacity-80` : "bg-gray-600 opacity-20"}
                      `}
                    />

                    {/* AVATAR */}
                    <div
                      className={`inline-block rounded-2xl border-4 overflow-hidden p-1 z-20 relative transition-colors duration-300
                        ${isActive ? `${character.borderColor} shadow-[0_0_20px_rgba(255,169,8,0.3)]` : "border-[#3A2F50] filter grayscale-[30%]"}
                      `}
                    >
                      <img
                        src={character.image}
                        alt={character.name}
                        className="h-36 md:h-40 w-full object-cover rounded-xl transition-all duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* BADGE */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-30">
                      <Badge
                        className={`text-white border-0 px-3 py-1 shadow-lg ${
                          isActive ? `bg-gradient-to-r ${character.color}` : "bg-gray-700"
                        }`}
                      >
                        <IconComponent className="w-4 h-4 mr-1" />
                        {character.element}
                      </Badge>
                    </div>
                  </div>

                  <CardTitle className="text-xl text-white mb-1">
                    {character.name}
                  </CardTitle>

                  <CardDescription className={`text-base font-medium ${isActive ? "text-[#FFA908]" : "text-gray-400"}`}>
                    {character.title}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 relative z-10 flex flex-col flex-grow">
                  <p className="text-gray-300 leading-relaxed text-sm flex-grow">
                    {character.description}
                  </p>

                  {/* STATS */}
                  <div className="space-y-2 mt-auto">
                    <h4 className="text-white font-semibold text-xs uppercase tracking-wide">
                      {t("characters.stats")}
                    </h4>

                    {Object.entries(character.stats).map(([stat, value], index) => (
                      <div key={stat} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className={`${isActive ? "text-[#FFA908]" : "text-gray-400"} capitalize`}>
                            {t(`characters.${stat}`)}
                          </span>
                          <span className="text-white font-medium">{value}%</span>
                        </div>
                        <div className={`w-full h-1.5 rounded-full border ${isActive ? character.borderColor : "border-gray-600"} bg-black/50`}>
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ease-out ${
                              isActive ? `bg-gradient-to-r ${character.color}` : "bg-gray-500"
                            }`}
                            style={{ width: `${value}%`, transitionDelay: `${index * 100}ms` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* BOTONES DINÁMICOS (Activo vs Standby) */}
                  <div className="pt-2">
                    {isActive ? (
                      <div className="flex flex-col gap-2">
                        {/* PUMP.FUN - Outline Dorado */}
                        <Button
                          variant="outline"
                          className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#0F0B1E] font-bold py-5 text-sm transition-transform hover:scale-[1.02]"
                          onClick={() => window.open(pumpFunURL, "_blank")}
                        >
                          <Rocket className="w-4 h-4 mr-2" />
                          {t("characters.buyOnPump")}
                        </Button>

                        {/* JUPITER - Outline Verde */}
                        <Button
                          variant="outline"
                          className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-[#0F0B1E] font-bold py-5 text-sm transition-transform hover:scale-[1.02]"
                          onClick={() => window.open(jupiterURL, "_blank")}
                        >
                          <ArrowRightLeft className="w-4 h-4 mr-2" />
                          {t("characters.buyOnJupiter")}
                        </Button>
                      </div>
                    ) : (
                      <Button
                        className="w-full bg-gradient-to-r from-[#1A1530] to-[#2A1F40] text-gray-500 border border-gray-700 pointer-events-none transition-all duration-300 py-5 text-sm"
                      >
                        <Lock className="w-4 h-4 mr-2 opacity-50" />
                        {t("characters.votingLocked")}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* FOOTER: Botón de Gráfico Funcional -> Apunta a DexScreener */}
        <div className="text-center mt-12 mb-4">
          <p className="text-white text-base mb-6 font-medium">
            {t("characters.question")}
          </p>

          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open(dexScreenerURL, "_blank")}
            className="group max-w-xs mx-auto bg-black/40 
                       hover:bg-yellow-500
                       text-yellow-400 hover:text-black font-bold border border-yellow-500/50 
                       shadow-[0_0_15px_rgba(234,179,8,0.1)] cursor-pointer
                       transition-all duration-300 px-8
                       group-hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:scale-105"
          >
            <Activity className="w-5 h-5 mr-2" />
            {t("characters.viewResults")}
          </Button>
        </div>
      </div>
    </section>
  );
}