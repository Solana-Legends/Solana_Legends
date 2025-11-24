import { useEffect, useState } from 'react';

// 🔹 Hook para Comunidad de X
export function useCommunityMembers() {
  const [members, setMembers] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMembers() {
      try {
        setIsLoading(true);
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
  }, []);

  return { members, isLoading };
}
