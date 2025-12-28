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

  const progressPercentage = goal > 0 ? (mainProgress / goal) * 100 : 0;

  return (
    <section className="relative py-20 px-6 min-h-[600px] bg-gradient-to-br from-[#0F0B1E] via-[#1A1530] to-[#0F0B1E] aura-pulsante aura-hover-gold">
      <div className="absolute inset-0 z-0 pointer-events-none aura-pulsante aura-hover-gold" />

      {/* AURA VERTICAL REDUCIDA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-56 h-56 md:w-72 md:h-72 rounded-full blur-3xl 
                      bg-[#FFA908]/20 animate-pulse pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("characters.title")}
          </h2>

          <p className="text-xl text-white w-full max-w-screen-lg mx-auto mb-4 px-4">
            {t("characters.subtitle")}
          </p>

          <p className="text-lg text-[#FFA908] font-semibold">
            {isLoading
              ? "..."
              : `${mainProgress} / ${goal} ${t("progress.followers")}`}
          </p>

          <div className="relative w-full max-w-lg mx-auto h-3 rounded-full border border-[#FFA908]/40 bg-[#1A1530] overflow-hidden mt-4">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-[pulse_2s_infinite] rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <p className="text-indigo-200 text-sm mt-2">
            🔮 {t("progress.missing")} {remaining} {t("progress.forVoting")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {characters.map((character) => {
            const IconComponent = character.icon;

            return (
              <Card
                key={character.id}
                className={`bg-[#1A1530]/40 border-4 rounded-xl transition-all duration-300 hover:scale-105 group ${character.borderColor} aura-pulsante aura-hover`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-6">

                    {/* AURA HORIZONTAL ESTRECHA (MODIFICADA) */}
                    <div
                      className={`
                        absolute left-1/2 top-1/2 
                        -translate-x-1/2 -translate-y-1/2
                        w-20 h-6 md:w-24 md:h-8
                        bg-gradient-to-r ${character.color}
                        rounded-full blur-xl opacity-40 
                        group-hover:opacity-60 transition-opacity
                      `}
                    />

                    {/* Avatar (AURA AJUSTADA) */}
                    <div
                      className={`relative mx-auto rounded-full border-4 ${character.borderColor}
                                  group-hover:scale-110 transition-transform overflow-visible
                                  flex justify-center items-center p-0.5 aura-pulsante aura-hover`}
                    >
                      <img
                        src={character.image}
                        alt={character.name}
                        className="h-36 md:h-40 w-auto object-contain transition-all duration-300"
                      />
                    </div>

                    {/* Badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                      <Badge
                        className={`bg-gradient-to-r ${character.color} text-white border-0 px-3 py-1`}
                      >
                        <IconComponent className="w-4 h-4 mr-1" />
                        {character.element}
                      </Badge>
                    </div>
                  </div>

                  <CardTitle className="text-2xl text-white mb-2">
                    {character.name}
                  </CardTitle>

                  <CardDescription className="text-lg text-[#FFA908] font-medium">
                    {character.title}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-white leading-relaxed text-sm">
                    {character.description}
                  </p>

                  {/* Stats */}
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold text-sm">
                      {t("characters.stats")}
                    </h4>

                    {Object.entries(character.stats).map(
                      ([stat, value], index) => (
                        <div key={stat} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-[#FFA908] capitalize">
                              {t(`characters.${stat}`)}
                            </span>
                            <span className="text-white font-medium">
                              {value}%
                            </span>
                          </div>

                          <div
                            className={`w-full h-2 rounded-full border ${character.borderColor}`}
                          >
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

                  {/* Voting */}
                  {votingEnabled ? (
                    <Button
                      className="w-full bg-[#FFA908] hover:bg-[#D27F00] text-[#0F0B1E] font-semibold border-0 hover:shadow-[0_0_25px_#FFA908] hover:scale-105 transition-all duration-300"
                      size="lg"
                      onClick={() => handleVote(character.name)}
                    >
                      {t("characters.voteFor")} {character.name}
                    </Button>
                  ) : (
                    <Button
                      className="w-full bg-gradient-to-r from-[#1A1530] to-[#2A1F40] text-[#FFA908] font-semibold border border-[#FFA908]/30 shadow-[0_0_15px_#FFA908]/40 pointer-events-none cursor-not-allowed transition-all duration-300"
                      size="lg"
                    >
                      <Lock className="w-4 h-4 mr-2" />
                      {t("characters.votingLocked")}
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          {votingEnabled ? (
            <>
              <p className="text-white text-lg mb-6 footer-aura">
                {t("characters.votingActive")}
              </p>

              <Button
                size="lg"
                variant="outline"
                className="border-[#FFA908] text-[#FFA908] hover:bg-[#D27F00] hover:text-[#0F0B1E] hover:shadow-[0_0_25px_#FFA908] hover:scale-105 transition-all duration-300"
                onClick={handleViewResults}
              >
                {t("characters.viewResults")}
              </Button>
            </>
          ) : (
            <>
              <p className="text-white text-lg mb-4 footer-aura">
                {t("characters.question")}
              </p>

              <div className="flex items-center justify-center gap-2 mb-6">
                <Lock className="w-5 h-5 text-[#FFA908]" />
                <p className="text-[#FFA908] font-semibold footer-aura">
                  {t("characters.votingUnlocked")} {remaining}{" "}
                  {t("characters.followersMore")}
                </p>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="w-full bg-gradient-to-r from-[#1A1530] to-[#2A1F40] text-[#FFA908] font-semibold border border-[#FFA908]/30 shadow-[0_0_15px_#FFA908]/40 pointer-events-none cursor-not-allowed transition-all duration-300"
              >
                {t("characters.viewResults")}
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
