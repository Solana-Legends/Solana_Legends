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
import { Zap, Brain, Sparkles, Lock } from "lucide-react";
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
  const { votingEnabled, remaining, mainProgress, goal, isLoading } =
    useMetrics();

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

  const handleVote = (characterName: string) => {
    if (!votingEnabled) return;
    console.log("[VOTE]", characterName);
  };

  const handleViewResults = () => {
    if (!votingEnabled) return;
    console.log("[VIEW_RESULTS]");
  };

  void handleVote;
  void handleViewResults;

  const progressPercentage = goal > 0 ? (mainProgress / goal) * 100 : 0;

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
            {isLoading ? "..." : `${mainProgress} / ${goal} ${t("progress.followers")}`}
          </p>

          <div className="relative w-full max-w-lg mx-auto h-2.5 rounded-full border border-[#FFA908]/40 bg-[#1A1530] overflow-hidden mt-3">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-[pulse_2s_infinite] rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <p className="text-indigo-200 text-xs mt-2">
            🔮 {t("progress.missing")} {remaining} {t("progress.forVoting")}
          </p>
        </div>

        {/* CARDS */}
        <div className="flex flex-wrap justify-center gap-6">
          {characters.map((character) => {
            const IconComponent = character.icon;

            return (
              <Card
                key={character.id}
                className={`w-[340px] bg-[#1A1530]/40 border-4 rounded-xl transition-all duration-300 hover:scale-105 group ${character.borderColor} aura-pulsante aura-hover`}
              >
                <CardHeader className="text-center pb-3">
                  <div className="relative mb-5">

                    {/* AURA HORIZONTAL */}
                    <div
                      className={`
                        absolute left-1/2 top-1/2 
                        -translate-x-1/2 -translate-y-1/2
                        w-20 h-6 md:w-24 md:h-8
                        bg-gradient-to-r ${character.color}
                        rounded-full blur-xl opacity-40 
                        group-hover:opacity-60 transition-opacity
                        z-0
                      `}
                    />

                    {/* AVATAR — BORDE AJUSTADO EXACTO */}
                    <div
                      className={`inline-block rounded-2xl border-4 ${character.borderColor}
                                  overflow-hidden p-1 aura-pulsante aura-hover z-20`}
                    >
                      <img
                        src={character.image}
                        alt={character.name}
                        className="h-36 md:h-40 w-full object-cover rounded-xl transition-all duration-300"
                      />
                    </div>

                    {/* BADGE */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-30">
                      <Badge
                        className={`bg-gradient-to-r ${character.color} text-white border-0 px-3 py-1`}
                      >
                        <IconComponent className="w-4 h-4 mr-1" />
                        {character.element}
                      </Badge>
                    </div>
                  </div>

                  <CardTitle className="text-xl text-white mb-1">
                    {character.name}
                  </CardTitle>

                  <CardDescription className="text-base text-[#FFA908] font-medium">
                    {character.title}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-white leading-relaxed text-sm">
                    {character.description}
                  </p>

                  {/* STATS */}
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold text-xs uppercase tracking-wide">
                      {t("characters.stats")}
                    </h4>

                    {Object.entries(character.stats).map(
                      ([stat, value], index) => (
                        <div key={stat} className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-[#FFA908] capitalize">
                              {t(`characters.${stat}`)}
                            </span>
                            <span className="text-white font-medium">
                              {value}%
                            </span>
                          </div>

                          <div className={`w-full h-1.5 rounded-full border ${character.borderColor}`}>
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${character.color} transition-all duration-1000 ease-out`}
                              style={{
                                width: `${value}%`,
                                transitionDelay: `${index * 200}ms`,
                              }}
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  {/* BOTÓN BLOQUEADO — AURA */}
                  <Button
                    className="group w-full bg-gradient-to-r from-[#1A1530] to-[#2A1F40] 
                               text-[#FFA908] font-semibold border border-[#FFA908]/30 
                               shadow-[0_0_15px_#FFA908]/40 pointer-events-none cursor-not-allowed 
                               transition-all duration-300 py-2 text-sm
                               hover:scale-[1.02] aura-pulsante-blue aura-hover-gold
                               group-hover:shadow-[0_0_35px_#FFA908] group-hover:scale-105"
                    size="default"
                  >
                    <Lock className="w-4 h-4 mr-2" />
                    {t("characters.votingLocked")}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="text-center mt-8">
          <p className="text-white text-base mb-3 footer-aura">
            {t("characters.question")}
          </p>

          <div className="flex items-center justify-center gap-2 mb-4">
            <Lock className="w-4 h-4 text-[#FFA908]" />
            <p className="text-[#FFA908] font-semibold footer-aura text-sm">
              {t("characters.votingUnlocked")} {remaining}{" "}
              {t("characters.followersMore")}
            </p>
          </div>

          {/* BOTÓN INFERIOR — AURA PULSANTE */}
          <Button
            size="default"
            variant="outline"
            className="group w-full max-w-xs mx-auto bg-gradient-to-r from-[#1A1530] to-[#2A1F40] 
                       text-[#FFA908] font-semibold border border-[#FFA908]/30 
                       shadow-[0_0_15px_#FFA908]/40 pointer-events-none cursor-not-allowed 
                       transition-all duration-300 px-6 py-2 text-sm
                       hover:scale-[1.02] aura-pulsante aura-hover-white
                       group-hover:shadow-[0_0_35px_#FFA908] group-hover:scale-105"
          >
            <Lock className="w-4 h-4 mr-2" />
            {t("characters.viewResults")}
          </Button>
        </div>
      </div>
    </section>
  );
}
