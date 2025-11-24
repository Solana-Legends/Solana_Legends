import { useEffect, useState } from 'react';

// 🔹 Hook para Comunidad de X
export function useCommunityMembers() {
  const [members, setMembers] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

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
        const data = await res.json();
        setMembers(data.members ?? 0);
      } catch {
        setMembers(0);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMembers();
  }, [mode, manualCount]);

  return { members, isLoading };
}
