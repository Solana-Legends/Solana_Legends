import React from 'react';
import { ProgressBar } from './ProgressBar';
import { useLanguage } from '../contexts/LanguageContext';
import { useMetrics } from '@/hooks/useMetrics';

export default function ProgressSection({ goal = 500 }: { goal?: number }) {
  const { t } = useLanguage();
  const {
    metrics,
    goal: target,
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
    <section className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-xl font-bold text-zinc-100 mb-2">{t('progress.title')}</h2>
      <p className="text-sm text-zinc-400 mb-6">{t('progress.subtitle')}</p>

      {/* 🔥 Progreso Principal */}
      {!isLoading && (
        <div className="mb-6">
          <p className="text-zinc-300 mb-1">
            Progreso Principal ({topSource}): {mainProgress} / {target}
          </p>
          <ProgressBar percent={(mainProgress / target) * 100} aura={mainProgress >= target} />
          {mainProgress < target ? (
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
          Twitter/X: {isLoading ? '...' : `${metrics.twitter} / ${target} seguidores`}
        </p>
        <ProgressBar percent={(metrics.twitter / target) * 100} aura={twitterReady} />
        {twitterReady && !isLoading && (
          <p className="text-amber-400 font-medium mt-1">🔥 {t('progress.fireUnleashed')}</p>
        )}
      </div>

      {/* Telegram */}
      <div className="mb-4">
        <p className="text-zinc-300 mb-1">
          Telegram: {isLoading ? '...' : `${metrics.telegram} / ${target} miembros`}
        </p>
        <ProgressBar percent={(metrics.telegram / target) * 100} aura={telegramReady} />
        {telegramReady && !isLoading && (
          <p className="text-amber-400 font-medium mt-1">🔥 {t('progress.fireUnleashed')}</p>
        )}
      </div>

      {/* Comunidad X */}
      <div className="mb-4">
        <p className="text-zinc-300 mb-1">
          Comunidad X: {isLoading ? '...' : `${metrics.community} / ${target} miembros`}
        </p>
        <ProgressBar percent={(metrics.community / target) * 100} aura={communityReady} />
        {communityReady && !isLoading && (
          <p className="text-amber-400 font-medium mt-1">🔥 {t('progress.fireUnleashed')}</p>
        )}
      </div>

      {/* Botones ritualizados */}
      {votingEnabled && !isLoading && (
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button className="px-4 py-2 rounded-md bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-all shadow-md shadow-amber-700">
            {t('progress.voteButton')}
          </button>
          <button className="px-4 py-2 rounded-md bg-zinc-800 text-zinc-100 border border-zinc-600 hover:border-amber-400 transition-all">
            {t('progress.proposeLegend')}
          </button>
        </div>
      )}

      {!isLoading && (
        <p className="mt-6 text-sm text-zinc-300">
          <span className="inline-block mr-2 h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          {t('progress.voteMessageRitual')}
        </p>
      )}
    </section>
  );
}
