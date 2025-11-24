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

  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
  const dataSource = import.meta.env.VITE_TELEGRAM_DATA_SOURCE;

  useEffect(() => {
    async function fetchMembers() {
      setIsLoading(true);

      if (dataSource !== 'api') {
        setError('Modo no soportado para Telegram');
        setIsLoading(false);
        return;
      }

      try {
        const url = `/api/telegram-members`;
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
  }, [chatId, dataSource]);

  return { data, isLoading, error };
}
