import { useEffect, useState } from 'react';

interface TelegramMembersResponse {
  members: number;
  cached: boolean;
  error?: string;
}

export function useTelegramMembers() {
  const [data, setData] = useState<TelegramMembersResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const dataSource = import.meta.env.VITE_TELEGRAM_DATA_SOURCE;
  const manualCount = Number(import.meta.env.VITE_TELEGRAM_MEMBERS_COUNT || 0);

  useEffect(() => {
    async function fetchMembers() {
      setIsLoading(true);

      if (dataSource === 'manual') {
        // 🔹 modo manual: usamos el valor de .env
        console.log(`[Telegram:hook] → modo manual: ${manualCount} miembros`);
        setData({ members: manualCount, cached: true });
        setIsLoading(false);
        return;
      }

      if (dataSource === 'api') {
        try {
          const url = `/api/telegram-members`;
          const resp = await fetch(url);
          const json: TelegramMembersResponse = await resp.json();

          if (resp.ok) {
            console.log(`[Telegram:hook] → ${json.members} miembros (cached=${json.cached})`);
            setData(json);
          } else {
            setError(json.error ?? 'Error desconocido');
          }
        } catch (e: unknown) {
          if (e instanceof Error) {
            setError(e.message);
          } else {
            setError('Error desconocido');
          }
        } finally {
          setIsLoading(false);
        }
      } else {
        setError('Modo no soportado para Telegram');
        setIsLoading(false);
      }
    }

    fetchMembers();
  }, [dataSource, manualCount]);

  return { data, isLoading, error };
}
