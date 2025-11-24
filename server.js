import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const CACHE_DURATION = 60 * 60 * 1000; // 60 min

/* ------------------ 🔹 Twitter Followers ------------------ */
let twitterCache = null;

app.get('/api/twitter-followers', async (req, res) => {
  const mode = process.env.VITE_TWITTER_FOLLOWERS_MODE || 'manual';
  const force = req.query.force === 'true';

  try {
    if (mode === 'manual') {
      const followers = parseInt(process.env.VITE_TWITTER_FOLLOWERS_COUNT || '0', 10);
      return res.json({ followers, cached: false, source: 'manual' });
    }

    if (mode === 'api') {
      const token = process.env.X_BEARER_TOKEN; // 🔹 backend seguro
      const username = req.query.username;

      if (!token || !username) {
        return res.status(400).json({ error: 'Faltan token o username' });
      }

      if (!force && twitterCache && Date.now() - twitterCache.timestamp < CACHE_DURATION) {
        return res.json({ followers: twitterCache.followers, cached: true, source: 'cache' });
      }

      const userResp = await fetch(
        `https://api.twitter.com/2/users/by/username/${username}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const userData = await userResp.json();
      const userId = userData?.data?.id;
      if (!userId) return res.status(404).json({ error: 'Usuario no encontrado' });

      const metricsResp = await fetch(
        `https://api.twitter.com/2/users/${userId}?user.fields=public_metrics`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const metricsData = await metricsResp.json();
      const followers = metricsData?.data?.public_metrics?.followers_count ?? 0;

      twitterCache = { followers, timestamp: Date.now() };
      return res.json({ followers, cached: false, source: 'api' });
    }

    return res.status(400).json({ error: 'Modo inválido' });
  } catch (e) {
    console.error('❌ Twitter API Error:', e);
    res.status(500).json({ error: e.message });
  }
});

/* ------------------ 🔹 Telegram Members ------------------ */
app.get('/api/telegram-members', async (req, res) => {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN; // 🔹 backend seguro
    const chatId = process.env.TELEGRAM_CHAT_ID;  // 🔹 backend seguro

    if (!token || !chatId) {
      return res.status(400).json({ error: 'Faltan token o chatId de Telegram' });
    }

    const url = `https://api.telegram.org/bot${token}/getChatMembersCount?chat_id=${chatId}`;
    const tgResp = await fetch(url);
    const tgData = await tgResp.json();

    if (!tgData.ok) {
      return res.status(500).json({ error: tgData.description });
    }

    return res.json({ members: tgData.result, cached: false, source: 'api' });
  } catch (e) {
    console.error('❌ Telegram API Error:', e);
    res.status(500).json({ error: e.message });
  }
});

/* ------------------ 🔹 Comunidad de X Members ------------------ */
let communityCache = null;

app.get('/api/community-members', async (req, res) => {
  const mode = process.env.VITE_COMMUNITY_FOLLOWERS_MODE || 'manual';
  const force = req.query.force === 'true';

  try {
    if (mode === 'manual') {
      const members = parseInt(process.env.VITE_COMMUNITY_FOLLOWERS_COUNT || '0', 10);
      return res.json({ members, cached: false, source: 'manual' });
    }

    if (mode === 'api') {
      const token = process.env.COMMUNITY_BEARER_TOKEN; // 🔹 backend seguro
      const communityId = req.query.communityId || process.env.COMMUNITY_ID;

      if (!token || !communityId) {
        return res.status(400).json({ error: 'Faltan token o communityId' });
      }

      if (!force && communityCache && Date.now() - communityCache.timestamp < CACHE_DURATION) {
        return res.json({ members: communityCache.members, cached: true, source: 'cache' });
      }

      const resp = await fetch(
        `https://api.twitter.com/2/communities/${communityId}?community.fields=member_count`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const data = await resp.json();
      const members = data?.data?.member_count ?? 0;

      communityCache = { members, timestamp: Date.now() };
      return res.json({ members, cached: false, source: 'api' });
    }

    return res.status(400).json({ error: 'Modo inválido' });
  } catch (e) {
    console.error('❌ Comunidad API Error:', e);
    res.status(500).json({ error: e.message });
  }
});

/* ------------------ 🔹 Servir frontend compilado ------------------ */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist')));

// Redirigir cualquier ruta no-API al frontend
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

/* ------------------ 🔹 Arranque ------------------ */
app.listen(PORT, () => {
  console.log(`Backend + Frontend activo en http://localhost:${PORT}`);
});
