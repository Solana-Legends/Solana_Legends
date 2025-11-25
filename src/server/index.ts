import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

async function start() {
  const app = express();
  const port = process.env.PORT ?? 3001;

  // --- Twitter ---
  const twitterSource = (process.env.TWITTER_DATA_SOURCE ?? 'manual').toLowerCase();
  if (twitterSource === 'api') {
    console.log('🔁 Twitter: fuente API');
    const twitterRouter = (await import('./twitter/twitter-followers.api')).default;
    app.use('/api/twitter-followers', twitterRouter);
  } else {
    console.log('🔁 Twitter: fuente manual (.env)');
    const twitterRouter = (await import('./twitter/twitter-followers.manual')).default;
    app.use('/api/twitter-followers', twitterRouter);
  }

  // --- Telegram ---
  const telegramSource = (process.env.TELEGRAM_DATA_SOURCE ?? 'manual').toLowerCase();
  if (telegramSource === 'api') {
    console.log('🔁 Telegram: fuente API');
    const telegramRouter = (await import('./telegram/telegram-members.api')).default;
    app.use('/api/telegram-members', telegramRouter);
  } else {
    console.log('🔁 Telegram: fuente manual (.env)');
    const telegramRouter = (await import('./telegram/telegram-members.manual')).default;
    app.use('/api/telegram-members', telegramRouter);
  }

  // --- Comunidad X ---
  const communitySource = (process.env.COMMUNITY_DATA_SOURCE ?? 'manual').toLowerCase();
  if (communitySource === 'api') {
    console.log('🔁 Comunidad X: fuente API');
    const communityRouter = (await import('./community/community-members.api')).default;
    app.use('/api/community-members', communityRouter);
  } else {
    console.log('🔁 Comunidad X: fuente manual (.env)');
    const communityRouter = (await import('./community/community-members.manual')).default;
    app.use('/api/community-members', communityRouter);
  }

  // --- Healthcheck ---
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', message: '🔥 Server activo y ritualizado' });
  });

  app.listen(port, () => {
    console.log(`🔥 Servidor ritual escuchando en el puerto ${port}`);
  });
}

start();
