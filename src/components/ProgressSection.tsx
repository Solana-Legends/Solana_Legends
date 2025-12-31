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
    <section className="relative w-full max-w-xl mx-auto px-4 pt-4 pb-16 text-center">
      <h2 className="text-xl font-bold text-zinc-100 mb-2">
        {t("progress.title")}
      </h2>
      <p className="text-sm text-zinc-400 mb-6">{t("progress.subtitle")}</p>

      {!isLoading && (
        <div className="mb-6">
          <p className="text-zinc-300 mb-1">
            {t("progress.mainProgressLabel")
              .replace("{source}", topSource)
              .replace("{current}", mainProgress.toString())
              .replace("{goal}", goal.toString())}
          </p>
          <ProgressBar
            percent={(mainProgress / goal) * 100}
            aura={mainProgress >= goal}
          />
          <p className="text-amber-400 font-medium mt-1">
            {mainProgress < goal
              ? t("progress.remainingFollowers").replace(
                  "{remaining}",
                  remaining.toString()
                )
              : t("progress.fireActivated").replace("{source}", topSource)}
          </p>
        </div>
      )}

      <div className="mb-4">
        <p className="text-zinc-300 mb-1">
          {t("progress.twitterLabel")
            .replace("{current}", metrics.twitter.toString())
            .replace("{goal}", goal.toString())}
        </p>
        <ProgressBar percent={(metrics.twitter / goal) * 100} aura={twitterReady} />
        {twitterReady && !isLoading && (
          <p className="text-amber-400 font-medium mt-1">
            🔥 {t("progress.fireUnleashed")}
          </p>
        )}
      </div>

      <div className="mb-4">
        <p className="text-zinc-300 mb-1">
          {t("progress.telegramLabel")
            .replace("{current}", metrics.telegram.toString())
            .replace("{goal}", goal.toString())}
        </p>
        <ProgressBar percent={(metrics.telegram / goal) * 100} aura={telegramReady} />
        {telegramReady && !isLoading && (
          <p className="text-amber-400 font-medium mt-1">
            🔥 {t("progress.fireUnleashed")}
          </p>
        )}
      </div>

      <div className="mb-4">
        <p className="text-zinc-300 mb-1">
          {t("progress.communityLabel")
            .replace("{current}", metrics.community.toString())
            .replace("{goal}", goal.toString())}
        </p>
        <ProgressBar
          percent={(metrics.community / goal) * 100}
          aura={communityReady}
        />
        {communityReady && !isLoading && (
          <p className="text-amber-400 font-medium mt-1">
            🔥 {t("progress.fireUnleashed")}
          </p>
        )}
      </div>

      {votingEnabled && !isLoading && (
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            aria-label={t("progress.voteButton")}
            className="px-4 py-2 rounded-md bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-all shadow-md shadow-amber-700"
          >
            {t("progress.voteButton")}
          </button>
          <button
            aria-label={t("progress.proposeLegend")}
            className="px-4 py-2 rounded-md bg-zinc-800 text-zinc-100 border border-zinc-600 hover:border-amber-400 transition-all"
          >
            {t("progress.proposeLegend")}
          </button>
        </div>
      )}

      {!isLoading && (
        <div className="mt-6 text-sm text-center text-zinc-400 italic animate-fadeIn animate-pulseSlow">
          {t("progress.renewalMessage")}
        </div>
      )}

      {!isLoading && mainProgress < goal && (
        <p className="mt-1 text-sm text-zinc-300 text-center">
          <span className="inline-block mr-2 h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          {t("progress.ritualSoon")}
        </p>
      )}

      {!isLoading && mainProgress >= goal && (
        <p className="mt-1 text-sm text-zinc-300 text-center">
          <span className="inline-block mr-2 h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          {t("progress.voteMessageRitual")}
        </p>
      )}
    </section>
  );
}
