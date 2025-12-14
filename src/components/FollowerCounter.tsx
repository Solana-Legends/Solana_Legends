import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useMetrics } from "@/hooks/useMetrics";
import SocialCard from "./SocialCard";

export default function FollowerCounter() {
  const { t } = useLanguage();
  const { metrics, goal, isLoading, mainProgress, remaining } = useMetrics();

  const progressPercentage = goal > 0 ? (mainProgress / goal) * 100 : 0;

  return (
    <section data-testid="follower-counter" className="relative py-20 px-6 bg-gradient-to-br from-[#0F0B1E] via-[#1A1530] to-[#0F0B1E] aura-pulsante aura-hover-gold">
      {/* Aura cósmica detrás */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-[#FFA908]/20 animate-pulse pointer-events-none z-0" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("progress.title")}
          </h2>
          <p className="text-indigo-200 text-lg">{t("progress.subtitle")}</p>
        </div>

        {/* Progreso principal */}
        <Card className="bg-[#1A1530]/40 border-2 border-[#FFA908]/30 rounded-xl hover:shadow-[0_0_25px_#FFA908] transition-all duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
              <Twitter className="h-6 w-6 text-blue-400" />
              {t("progress.mainProgressLabel").replace("{source}", "X/Twitter")}
            </CardTitle>
            <CardDescription className="text-purple-300">
              {isLoading
                ? "..."
                : `${mainProgress} / ${goal} ${t(
                    "progress.followers"
                  )} (${progressPercentage.toFixed(1)}%)`}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-purple-300">
                  {t("progress.towardsVoting")}
                </span>
                <span className="text-[#FFA908] font-semibold">
                  {isLoading ? "..." : `${mainProgress}/${goal}`}
                </span>
              </div>
              <div className="relative w-full h-3 rounded-full border border-[#FFA908]/40 bg-[#1A1530] overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-[pulse_2s_infinite] rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <div className="text-center">
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 px-4 py-2 shadow-[0_0_15px_#FFA908] text-lg">
                🔥 {t("progress.missing")} {remaining} {t("progress.forVoting")}{" "}
                — {t("progress.ritualSoon")}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Tarjetas de redes sociales */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <SocialCard
            icon={Twitter}
            platformName={t("progress.twitter")}
            handle="@EligeTuMeme"
            metric={metrics.twitter}
            metricLabel={t("progress.followers")}
            link="https://x.com/EligeTuMeme"
            ctaText={t("progress.follow")}
            isLoading={isLoading}
            iconColorClass="text-blue-400"
            buttonColorClass="bg-blue-600"
            hoverButtonColorClass="hover:bg-blue-700"
          />
          <SocialCard
            icon={Users}
            platformName={t("progress.community")}
            handle="Solana Legends"
            metric={metrics.community}
            metricLabel={t("progress.members")}
            link="https://x.com/i/communities/1976865385971360174"
            ctaText={t("progress.joinCommunity")}
            isLoading={isLoading}
            iconColorClass="text-purple-400"
            buttonColorClass="bg-purple-600"
            hoverButtonColorClass="hover:bg-purple-700"
          />
          <SocialCard
            icon={MessageCircle}
            platformName={t("progress.telegram")}
            handle={t("progress.officialGroup")}
            metric={metrics.telegram}
            metricLabel={t("progress.members")}
            link="https://t.me/EligeTuMeme/1"
            ctaText={t("progress.joinTelegram")}
            isLoading={isLoading}
            iconColorClass="text-cyan-400"
            buttonColorClass="bg-cyan-600"
            hoverButtonColorClass="hover:bg-cyan-700"
          />
        </div>

        {/* 🔮 Mensaje ritualizado centrado */}
        <div className="text-center mt-8">
          <p className="text-sm text-zinc-400 italic animate-fadeIn animate-pulseSlow">
            {t("progress.renewalMessage")}
          </p>
        </div>

        {/* Cierre ritual condicionado */}
        <div className="text-center mt-4">
          {!isLoading && mainProgress < goal && (
            <p className="text-indigo-200 text-sm italic">
              🔥 {t("progress.ritualSoon")}
            </p>
          )}
          {!isLoading && mainProgress >= goal && (
            <p className="text-indigo-200 text-sm italic">
              🔮 {t("progress.voteMessageRitual")}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
