import { ProgressBar } from "./ProgressBar";
import { useLanguage } from "../contexts/LanguageContext";
import { useMetrics } from "@/hooks/useMetrics";

export default function ProgressSection() {
  const { t } = useLanguage();
  const {
    metrics,
    goal,
    twitterReady,
    telegramReady,
    communityReady,
    votingEnabled,
    isLoading,
    mainProgress,
    remaining,
    topSource,
  } = useMetrics();

  return (
    <section className="relative w-full max-w-[960px] mx-auto px-6 pt-10 pb-16 text-center bg-gradient-to-br from-[#0F0B1E] via-[#1A1530] to-[#0F0B1E] rounded-xl shadow-xl animate-in fade-in slide-in-from-bottom duration-700">
      
      <h2 className="text-2xl font-bold text-white mb-2">
        {t("progress.title")}
      </h2>
      <p className="text-sm text-indigo-200 mb-6">{t("progress.subtitle")}</p>

      {!isLoading && (
        <div className="mb-8">
          <p className="text-indigo-200 mb-1">
            {t("progress.mainProgressLabel")
              .replace("{source}", topSource)
              .replace("{current}", mainProgress.toString())
              .replace("{goal}", goal.toString())}
          </p>

          <ProgressBar
            percent={(mainProgress / goal) * 100}
            aura={mainProgress >= goal}
          />

          <p className="text-amber-400 font-medium mt-2">
            {mainProgress < goal
              ? t("progress.remainingFollowers").replace(
                  "{remaining}",
                  remaining.toString()
                )
              : t("progress.fireActivated").replace("{source}", topSource)}
          </p>
        </div>
      )}

      {/* Twitter */}
      <div className="mb-6">
        <p className="text-indigo-200 mb-1">
          {t("progress.twitterLabel")
            .replace("{current}", metrics.twitter.toString())
            .replace("{goal}", goal.toString())}
        </p>
        <ProgressBar percent={(metrics.twitter / goal) * 100} aura={twitterReady} />
      </div>

      {/* Telegram */}
      <div className="mb-6">
        <p className="text-indigo-200 mb-1">
          {t("progress.telegramLabel")
            .replace("{current}", metrics.telegram.toString())
            .replace("{goal}", goal.toString())}
        </p>
        <ProgressBar percent={(metrics.telegram / goal) * 100} aura={telegramReady} />
      </div>

      {/* Comunidad */}
      <div className="mb-6">
        <p className="text-indigo-200 mb-1">
          {t("progress.communityLabel")
            .replace("{current}", metrics.community.toString())
            .replace("{goal}", goal.toString())}
        </p>
        <ProgressBar percent={(metrics.community / goal) * 100} aura={communityReady} />
      </div>

      {/* Botones */}
      {votingEnabled && !isLoading && (
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-4 py-2 rounded-md bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-all shadow-md shadow-amber-700">
            {t("progress.voteButton")}
          </button>
          <button className="px-4 py-2 rounded-md bg-zinc-800 text-zinc-100 border border-zinc-600 hover:border-amber-400 transition-all">
            {t("progress.proposeLegend")}
          </button>
        </div>
      )}

      {!isLoading && (
        <div className="mt-8 text-sm text-indigo-200 italic animate-fadeIn animate-pulseSlow">
          {t("progress.renewalMessage")}
        </div>
      )}
    </section>
  );
}
