import { ProgressBar } from './ProgressBar';
import { useLanguage } from '../contexts/LanguageContext';
import { useMetrics } from '@/hooks/useMetrics';

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
    <section className="relative max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-xl font-bold text-zinc-100 mb-2">{t('progress.title')}</h2>
      <p className="text-sm text-zinc-400 mb-6">{t('progress.subtitle')}</p>

      {/* 🔥 Progreso Principal */}
      {!isLoading && (
        <div className="mb-6">
          <p className="text-zinc-300 mb-1">
            Progreso Principal ({topSource}): {mainProgress} / {goal}
          </p>
          <ProgressBar percent={(mainProgress / goal) * 100} aura={mainProgress >= goal} />
          {mainProgress < goal ? (
            <p className="text-amber-400 font-medium mt-1">
              ¡Faltan {remaining} seguidores para la votación! — El fuego se activará pronto
            </p>
          ) : (
            <p className="text-amber-400 font-medium mt-1">
              ✨ ¡{topSource} ha encendido el fuego ritual! La votación está activa
            </p>
          )}
        </div>
      )}

      {/* Twitter */}
      <div className="mb-4">
        <p className="text-zinc-300 mb-1">
          Twitter/X: {isLoading ? '...' : `${metrics.twitter} / ${goal} seguidores`}
        </p>
        <ProgressBar percent={(metrics.twitter / goal) * 100} aura={twitterReady} />
        {twitterReady && !isLoading && (
          <p className="text-amber-400 font-medium mt-1">🔥 {t('progress.fireUnleashed')}</p>
        )}
      </div>

      {/* Telegram */}
      <div className="mb-4">
        <p className="text-zinc-300 mb-1">
          Telegram: {isLoading ? '...' : `${metrics.telegram} / ${goal} miembros`}
        </p>
        <ProgressBar percent={(metrics.telegram / goal) * 100} aura={telegramReady} />
        {telegramReady && !isLoading && (
          <p className="text-amber-400 font-medium mt-1">🔥 {t('progress.fireUnleashed')}</p>
        )}
      </div>

      {/* Comunidad X */}
      <div className="mb-4">
        <p className="text-zinc-300 mb-1">
          Comunidad X: {isLoading ? '...' : `${metrics.community} / ${goal} miembros`}
        </p>
        <ProgressBar percent={(metrics.community / goal) * 100} aura={communityReady} />
        {communityReady && !isLoading && (
          <p className="text-amber-400 font-medium mt-1">🔥 {t('progress.fireUnleashed')}</p>
        )}
      </div>

      {/* Botones ritualizados */}
      {votingEnabled && !isLoading && (
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button
            aria-label="Votar en la ritualización"
            className="px-4 py-2 rounded-md bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-all shadow-md shadow-amber-700"
          >
            {t('progress.voteButton')}
          </button>
          <button
            aria-label="Proponer una nueva leyenda"
            className="px-4 py-2 rounded-md bg-zinc-800 text-zinc-100 border border-zinc-600 hover:border-amber-400 transition-all"
          >
            {t('progress.proposeLegend')}
          </button>
        </div>
      )}

      {/* 🕰️ Mensaje ritualizado centrado */}
      {!isLoading && (
        <div className="mt-6 text-sm text-center text-zinc-400 italic animate-fadeIn animate-pulseSlow">
          {t('progress.renewalMessage')}
        </div>
      )}

      {/* 🔮 Cierre ritual */}
      {!isLoading && (
        <p className="mt-4 text-sm text-zinc-300 text-center">
          <span className="inline-block mr-2 h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          {t('progress.voteMessageRitual')}
        </p>
      )}

      {/* ⚡ Imagen del héroe ZapSol alineada a la derecha de las barras de progreso */}
      <div className="fixed top-[320px] right-[40px] z-10 flex justify-center items-center">
        {/* Aura dorada pulsante */}
        <div className="absolute w-80 h-80 rounded-full blur-3xl aura-pulsante-gold-strong pointer-events-none"></div>
        {/* Imagen del héroe */}
        <img
          src="/assets/ZapSol.png"
          alt="ZapSol Hero"
          className="relative h-64 w-auto object-contain animate-in fade-in slide-in-from-right duration-1000 mix-blend-overlay opacity-90 logo-respirando"
        />
      </div>
    </section>
  );
}
