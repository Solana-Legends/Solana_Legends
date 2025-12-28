import { useEffect, useState } from 'react';

export interface CommunityMembersResponse {
  members: number;
  cached: boolean;
  error?: string;
}

// 🔹 Hook para Comunidad de X (modo manual = frontend, modo api = backend)
export function useCommunityMembers() {
  const [data, setData] = useState<CommunityMembersResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const mode = import.meta.env.VITE_COMMUNITY_FOLLOWERS_MODE;
  const manualCount = Number(import.meta.env.VITE_COMMUNITY_FOLLOWERS_COUNT);

  useEffect(() => {
    async function fetchMembers() {
      setIsLoading(true);

      // 🔥 MODO MANUAL → SOLO FRONTEND (sin backend)
      if (mode === 'manual') {
        console.log(`[Comunidad X:hook] → modo manual: ${manualCount} miembros`);
        setData({ members: manualCount, cached: true });
        setIsLoading(false);
        return;
      }

      // 🔥 MODO API → BACKEND (para el futuro)
      if (mode === 'api') {
        try {
          const res = await fetch(`/api/community-members`);
          const json: CommunityMembersResponse = await res.json();

          if (res.ok) {
            console.log(`[Comunidad X:hook] → ${json.members} miembros (cached=${json.cached})`);
            setData({
              members: json.members,
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
        return;
      }

      // 🔥 Modo inválido
      const errMsg = 'Modo no soportado para Comunidad X';
      setError(errMsg);
      setData({ members: 0, cached: false, error: errMsg });
      setIsLoading(false);
    }

    fetchMembers();
  }, [mode, manualCount]);

  return { data, isLoading, error };
}
