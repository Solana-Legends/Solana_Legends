import { useEffect, useState } from 'react';

export interface TwitterFollowersResponse {
  followers: number;
  cached?: boolean;
  error?: string;
}

export function useTwitterFollowers(username: string) {
  const [data, setData] = useState<TwitterFollowersResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFollowers() {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/twitter-followers?username=${encodeURIComponent(username)}`);
        const json = await res.json();

        if (res.ok) {
          console.log(`[Twitter:hook] → ${json.followers} seguidores`);
          setData(json);
        } else {
          setError(json.error ?? 'Error desconocido');
        }
      } catch (e: any) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFollowers();
  }, [username]);

  return { data, isLoading, error };
}
