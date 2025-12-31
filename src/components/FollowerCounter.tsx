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

export default function FollowerCounter() {
  const { t } = useLanguage();
  const { metrics, goal, isLoading, mainProgress, remaining } = useMetrics();

  const progressPercentage = goal > 0 ? (mainProgress / goal) * 100 : 0;

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-[#0F0B1E] via-[#1A1530] to-[#0F0B1E] aura-pulsante aura-hover-gold">
      {/* Aura cósmica detrás */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-[#FFA908]/20 animate-pulse pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("progress.title")}
          </h2>
          <p className="text-indigo-200 text-lg">{t("progress.subtitle")}</p>
        </div>

        {/* Progreso principal */}
        <div className="w-full max-w-[960px] mx-auto">
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
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 px-3 py-1.5 shadow-[0_0_15px_#FFA908] text-base">
                  🔥 {t("progress.missing")} {remaining} {t("progress.forVoting")} —{" "}
                  {t("progress.ritualSoon")}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tarjetas de redes sociales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-[960px] mx-auto">
          {/* Twitter */}
          <Card className="w-full bg-[#1A1530]/40 border border-[#FFA908]/30 rounded-xl hover:shadow-[0_0_25px_#FFA908] hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-2">
                <Twitter className="h-8 w-8 text-blue-400" />
              </div>
              <CardTitle className="text-white">
                {t("progress.twitter")}
              </CardTitle>
              <CardDescription className="text-purple-300">
                @EligeTuMeme
              </CardDescription>
            </CardHeader>

            <CardContent className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">
                {isLoading ? "..." : metrics.twitter}
              </div>
              <p className="text-sm text-purple-300 mb-2">
                {t("progress.followers")}
              </p>
              <a
                href="https://x.com/EligeTuMeme"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg transition-all duration-300 aura-hover aura-pulsante"
              >
                {t("progress.follow")}
              </a>
            </CardContent>
          </Card>

          {/* Comunidad X */}
          <Card className="w-full bg-[#1A1530]/40 border border-[#FFA908]/30 rounded-xl hover:shadow-[0_0_25px_#FFA908] hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <CardTitle className="text-white">
                {t("progress.community")}
              </CardTitle>
              <CardDescription className="text-purple-300">
                Solana Legends
              </CardDescription>
            </CardHeader>

            <CardContent className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">
                {isLoading ? "..." : metrics.community}
              </div>
              <p className="text-sm text-purple-300 mb-2">
                {t("progress.members")}
              </p>
              <a
                href="https://x.com/i/communities/1976865385971360174"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-lg transition-all duration-300 aura-hover aura-pulsante"
              >
                {t("progress.joinCommunity")}
              </a>
            </CardContent>
          </Card>

          {/* Telegram */}
          <Card className="w-full bg-[#1A1530]/40 border border-[#FFA908]/30 rounded-xl hover:shadow-[0_0_25px_#FFA908] hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-2">
                <MessageCircle className="h-8 w-8 text-cyan-400" />
              </div>
              <CardTitle className="text-white">
                {t("progress.telegram")}
              </CardTitle>
              <CardDescription className="text-purple-300">
                {t("progress.officialGroup")}
              </CardDescription>
            </CardHeader>

            <CardContent className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-2">
                {isLoading ? "..." : metrics.telegram}
              </div>
              <p className="text-sm text-purple-300 mb-2">
                {t("progress.members")}
              </p>
              <a
                href="https://t.me/EligeTuMeme/1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-1.5 rounded-lg transition-all duration-300 aura-hover aura-pulsante"
              >
                {t("progress.joinTelegram")}
              </a>
            </CardContent>
          </Card>
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
