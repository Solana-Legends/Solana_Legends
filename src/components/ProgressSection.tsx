import { useLanguage } from "../contexts/LanguageContext";
import { useMetrics } from "@/hooks/useMetrics";
import ProgressDisplay from "./ProgressDisplay";

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
    <section data-testid="progress-section" className="relative max-w-2xl mx-auto px-4 pt-4 pb-16 ">
      <h2 className="text-xl font-bold text-zinc-100 mb-2">
        {t("progress.title")}
      </h2>
      <p className="text-sm text-zinc-400 mb-6">{t("progress.subtitle")}</p>

      {/* 🔥 Progreso Principal */}
      {!isLoading && (
        <ProgressDisplay
          isMain
          label={t("progress.mainProgressLabel")
            .replace("{source}", topSource)
            .replace("{current}", mainProgress.toString())
            .replace("{goal}", goal.toString())}
          current={mainProgress}
          goal={goal}
          aura={mainProgress >= goal}
          isLoading={isLoading}
          remaining={remaining}
          topSource={topSource}
          remainingFollowersText={t("progress.remainingFollowers")}
          fireActivatedText={t("progress.fireActivated")}
          fireUnleashedText={t("progress.fireUnleashed")}
        />
      )}
      <ProgressDisplay
        label={t("progress.twitterLabel")
          .replace("{current}", metrics.twitter.toString())
          .replace("{goal}", goal.toString())}
        current={metrics.twitter}
        goal={goal}
        aura={twitterReady}
        isLoading={isLoading}
        fireUnleashedText={t("progress.fireUnleashed")}
        remainingFollowersText={""}
        fireActivatedText={""}
      />
      <ProgressDisplay
        label={t("progress.telegramLabel")
          .replace("{current}", metrics.telegram.toString())
          .replace("{goal}", goal.toString())}
        current={metrics.telegram}
        goal={goal}
        aura={telegramReady}
        isLoading={isLoading}
        fireUnleashedText={t("progress.fireUnleashed")}
        remainingFollowersText={""}
        fireActivatedText={""}
      />
      <ProgressDisplay
        label={t("progress.communityLabel")
          .replace("{current}", metrics.community.toString())
          .replace("{goal}", goal.toString())}
        current={metrics.community}
        goal={goal}
        aura={communityReady}
        isLoading={isLoading}
        fireUnleashedText={t("progress.fireUnleashed")}
        remainingFollowersText={""}
        fireActivatedText={""}
      />

      {/* Botones ritualizados */}
      {votingEnabled && !isLoading && (
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
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

      {/* 🕰️ Mensaje ritualizado centrado */}
      {!isLoading && (
        <div className="mt-6 text-sm text-center text-zinc-400 italic animate-fadeIn animate-pulseSlow">
          {t("progress.renewalMessage")}
        </div>
      )}

      {/* 🔮 Cierre ritual (solo cuando se alcanza la meta) */}
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

      {/* Imagen ZapSol con aura perfectamente centrada y alineada a la izquierda */}
      <div className="relative flex justify-end items-center mt-[-6rem] mr-[-4rem] mb-[-8rem] translate-y-[-10rem] animate-in fade-in slide-in-from-right duration-1000">
        <div className="relative z-10 flex justify-center items-center w-80 h-80 group">
          {/* Aura dorada pulsante por defecto, cambia a azul en hover */}
          <div className="absolute w-80 h-80 rounded-full blur-3xl hero-zapsol-aura pointer-events-none z-0 transition-colors duration-500 group-hover:bg-blue-500/40"></div>
          {/* Imagen del héroe ZapSol */}
          <img
            src="/assets/ZapSol.png"
            alt="ZapSol Hero"
            className="relative z-10 h-64 w-auto md:h-72 object-contain mix-blend-overlay opacity-90 symbol-hero-zapsol-flicker"
          />
        </div>
      </div>
    </section>
  );
}
