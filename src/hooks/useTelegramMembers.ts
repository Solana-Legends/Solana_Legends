import { useEffect, useState } from 'react';

export interface TelegramMembersResponse {
  members: number;
  cached: boolean;
  error?: string;
}

export function useTelegramMembers() {
  const [data, setData] = useState<TelegramMembersResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const mode = import.meta.env.VITE_TELEGRAM_MEMBERS_MODE;
  const manualCount = Number(import.meta.env.VITE_TELEGRAM_MEMBERS_COUNT || 0);

  useEffect(() => {
    async function fetchMembers() {
      setIsLoading(true);

      if (mode === 'manual') {
        console.log(`[Telegram:hook] → modo manual: ${manualCount} miembros`);
        setData({ members: manualCount, cached: true });
        setIsLoading(false);
        return;
      }

      if (mode === 'api') {
        try {
          const resp = await fetch(`/api/telegram-members`);
          const json: TelegramMembersResponse = await resp.json();

          if (resp.ok) {
            console.log(`[Telegram:hook] → ${json.members} miembros (cached=${json.cached})`);
            setData({
              members: json.members ?? 0,
              cached: json.cached ?? false,
              error: json.error,
            });
          } else {
            const errMsg = json.error ?? 'Error desconocido';
            setError(errMsg);
            setData({ members: 0, cached: false, error: errMsg });
          }
        } catch (e: unknown) {
          const errMsg = e instanceof Error ? e.message : 'Error desconocido';
          setError(errMsg);
          setData({ members: 0, cached: false, error: errMsg });
        } finally {
          setIsLoading(false);
        }
      } else {
        const errMsg = 'Modo no soportado para Telegram';
        setError(errMsg);
        setData({ members: 0, cached: false, error: errMsg });
        setIsLoading(false);
      }
    }

    fetchMembers();
  }, [mode, manualCount]);

  return { data, isLoading, error };
}
