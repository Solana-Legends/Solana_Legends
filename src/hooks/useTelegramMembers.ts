import { useEffect, useState } from 'react';

interface TelegramMembersResponse {
  members: number;
  cached: boolean;
}

export function useTelegramMembers(group?: string) {
  const [data, setData] = useState<TelegramMembersResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMembers() {
      try {
        setIsLoading(true);
        const url = group
          ? `/api/telegram-members?group=${group}`
          : '/api/telegram-members';
        const resp = await fetch(url);
        const json = await resp.json();

        if (resp.ok) {
          console.log(`[Telegram:hook] → ${json.members} miembros (cached=${json.cached})`);
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

    fetchMembers();
  }, [group]);

  return { data, isLoading, error };
}
