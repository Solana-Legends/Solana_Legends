import express from 'express';
const router = express.Router();

let cache: { followers: number; timestamp: number } | null = null;
const CACHE_DURATION = 60 * 60 * 1000; // 60 min

function getBearerToken(): string {
  const raw = process.env.X_BEARER_TOKEN;
  if (!raw) throw new Error('❌ No se encontró X_BEARER_TOKEN en .env');
  return decodeURIComponent(raw); // Decodifica %2B y %3D
}

router.get('/', async (req, res) => {
  const username = req.query.username as string;
  const force = req.query.force === 'true';
  const token = getBearerToken();

  if (!username) {
    return res.status(400).json({ error: 'Falta el username' });
  }

  // Cache de 60 min (salta si force=true)
  if (!force && cache && Date.now() - cache.timestamp < CACHE_DURATION) {
    return res.json({ followers: cache.followers, cached: true });
  }

  try {
    // Obtener ID
    const userResp = await fetch(
      `https://api.twitter.com/2/users/by/username/${username}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const userData = await userResp.json();
    console.log('[X:api] userData:', userData);

    const userId = userData?.data?.id;
    if (!userId) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Obtener métricas
    const metricsResp = await fetch(
      `https://api.twitter.com/2/users/${userId}?user.fields=public_metrics`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const metricsData = await metricsResp.json();
    console.log('[X:api] metricsData:', metricsData);

    const followers = metricsData?.data?.public_metrics?.followers_count ?? 0;
    cache = { followers, timestamp: Date.now() };

    res.json({ followers, cached: false });
  } catch (e: any) {
    console.error('❌ Twitter API Error:', e);
    res.status(500).json({ error: e.message });
  }
});

export default router;
