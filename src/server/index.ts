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
    const twitterRouter = (await import('./twitter-followers.api')).default;
    app.use('/api/twitter-followers', twitterRouter);
  } else {
    console.log('🔁 Twitter: fuente manual (.env)');
    const twitterRouter = (await import('./twitter-followers.manual')).default;
    app.use('/api/twitter-followers', twitterRouter);
  }

  // --- Telegram (solo API, sin manual) ---
  console.log('🔁 Telegram: fuente API');
  const telegramRouter = (await import('./telegram-members.api')).default;
  app.use('/api/telegram-members', telegramRouter);

  app.listen(port, () => {
    console.log(`🔥 Servidor ritual escuchando en el puerto ${port}`);
  });
}

start();
