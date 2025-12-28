import { useEffect, useState } from 'react';

export interface TwitterFollowersResponse {
  followers: number;
  cached: boolean;
  error?: string;
}

export function useTwitterFollowers(username: string) {
  const [data, setData] = useState<TwitterFollowersResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const mode = import.meta.env.VITE_TWITTER_FOLLOWERS_MODE;
  const manualCount = Number(import.meta.env.VITE_TWITTER_FOLLOWERS_COUNT);

  useEffect(() => {
    async function fetchFollowers() {
      setIsLoading(true);

      if (mode === 'manual') {
        console.log(`[Twitter:hook] → modo manual: ${manualCount} seguidores`);
        setData({ followers: manualCount, cached: true });
        setIsLoading(false);
        return;
      }

      if (mode === 'api') {
        try {
          const res = await fetch(`/api/twitter-followers?username=${encodeURIComponent(username)}`);
          const json: TwitterFollowersResponse = await res.json();

          if (res.ok) {
            console.log(`[Twitter:hook] → modo api: ${json.followers} seguidores`);
            setData({
              followers: json.followers ?? 0,
              cached: json.cached ?? false,
              error: json.error,
            });
          } else {
            const errMsg = json.error ?? 'Error desconocido';
            setError(errMsg);
            setData({ followers: 0, cached: false, error: errMsg });
          }
        } catch (e: unknown) {
          const message = e instanceof Error ? e.message : 'Error desconocido';
          setError(message);
          setData({ followers: 0, cached: false, error: message });
        } finally {
          setIsLoading(false);
        }
      } else {
        const errMsg = 'Modo no soportado para Twitter';
        setError(errMsg);
        setData({ followers: 0, cached: false, error: errMsg });
        setIsLoading(false);
      }
    }

    fetchFollowers();
  }, [username, mode, manualCount]);

  return { data, isLoading, error };
}
