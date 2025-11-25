import { useEffect, useState } from 'react';

// 🔹 Hook para Twitter
export function useTwitterFollowers(username: string) {
  const [followers, setFollowers] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const mode = import.meta.env.VITE_TWITTER_FOLLOWERS_MODE;
  const manualCount = Number(import.meta.env.VITE_TWITTER_FOLLOWERS_COUNT);

  useEffect(() => {
    async function fetchFollowers() {
      setIsLoading(true);

      if (mode === 'manual') {
        console.log(`[Twitter:hook] → modo manual: ${manualCount} seguidores`);
        setFollowers(manualCount);
        setIsLoading(false);
        return;
      }

      try {
        const res = await fetch(`/api/twitter-followers?username=${encodeURIComponent(username)}`);
        const data: { followers?: number } = await res.json();
        setFollowers(data.followers ?? 0);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('Error desconocido');
        }
        setFollowers(0);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFollowers();
  }, [username, mode, manualCount]);

  return { followers, isLoading, error };
}

// 🔹 Hook para Telegram (solo API disponible)
export function useTelegramMembers() {
  const [members, setMembers] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
  const dataSource = import.meta.env.VITE_TELEGRAM_DATA_SOURCE;

  useEffect(() => {
    async function fetchMembers() {
      setIsLoading(true);

      if (dataSource !== 'api') {
        console.error('[Telegram:hook] → modo no soportado');
        setMembers(0);
        setIsLoading(false);
        return;
      }

      try {
        const res = await fetch(`/api/telegram-members?group=${encodeURIComponent(chatId)}`);
        const data: { members?: number } = await res.json();
        setMembers(data.members ?? 0);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('Error desconocido');
        }
        setMembers(0);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMembers();
  }, [chatId, dataSource]);

  return { members, isLoading, error };
}

// 🔹 Hook para Comunidad de X
export function useCommunityMembers() {
  const [members, setMembers] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const mode = import.meta.env.VITE_COMMUNITY_FOLLOWERS_MODE;
  const manualCount = Number(import.meta.env.VITE_COMMUNITY_FOLLOWERS_COUNT);

  useEffect(() => {
    async function fetchMembers() {
      setIsLoading(true);

      if (mode === 'manual') {
        console.log(`[Comunidad X:hook] → modo manual: ${manualCount} miembros`);
        setMembers(manualCount);
        setIsLoading(false);
        return;
      }

      try {
        const res = await fetch(`/api/community-members`);
        const data: { members?: number } = await res.json();
        setMembers(data.members ?? 0);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('Error desconocido');
        }
        setMembers(0);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMembers();
  }, [mode, manualCount]);

  return { members, isLoading, error };
}

// 🔮 Hook principal que devuelve todas las métricas
export function useMetrics() {
  const { followers: twitterFollowers, isLoading: twitterLoading } = useTwitterFollowers('EligeTuMeme');
  const { members: telegramMembers, isLoading: telegramLoading } = useTelegramMembers();
  const { members: communityMembers, isLoading: communityLoading } = useCommunityMembers();

  const goal = 500;

  // 🔹 Progreso principal: red con más seguidores
  const mainProgress = Math.max(twitterFollowers, telegramMembers, communityMembers);
  const remaining = Math.max(0, goal - mainProgress);

  // 🔹 Fuente dominante
  const topSource = (() => {
    const sources = [
      { name: 'Twitter', value: twitterFollowers },
      { name: 'Telegram', value: telegramMembers },
      { name: 'Comunidad X', value: communityMembers },
    ];
    return sources.sort((a, b) => b.value - a.value)[0].name;
  })();

  // ✅ Estados individuales
  const twitterReady = twitterFollowers >= goal;
  const telegramReady = telegramMembers >= goal;
  const communityReady = communityMembers >= goal;

  // 🔥 La votación se activa si cualquiera llega al objetivo
  const votingEnabled = twitterReady || telegramReady || communityReady;

  // Estado de carga global
  const isLoading = twitterLoading || telegramLoading || communityLoading;

  return {
    metrics: {
      twitter: twitterFollowers,
      telegram: telegramMembers,
      community: communityMembers,
    },
    goal,
    mainProgress,
    remaining,
    topSource,
    twitterReady,
    telegramReady,
    communityReady,
    votingEnabled,
    isLoading,
  };
}
