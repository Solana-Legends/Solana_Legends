import express from 'express';
const router = express.Router();

function getBotToken(): string {
  const raw = process.env.TELEGRAM_BOT_TOKEN;
  if (!raw) throw new Error('❌ No se encontró TELEGRAM_BOT_TOKEN en .env');
  return raw;
}

function getChatId(): string {
  const raw = process.env.TELEGRAM_CHAT_ID;
  if (!raw) throw new Error('❌ No se encontró TELEGRAM_CHAT_ID en .env');
  return raw.startsWith('@') ? raw : `@${raw}`;
}

router.get('/', async (req, res) => {
  const group = req.query.group as string | undefined;
  const token = getBotToken();
  const chatId = group ? `@${group}` : getChatId();

  try {
    const resp = await fetch(
      `https://api.telegram.org/bot${token}/getChatMembersCount?chat_id=${chatId}`
    );
    const data: { ok: boolean; result?: number; description?: string } = await resp.json();

    if (!data.ok) {
      return res.status(500).json({ error: 'Telegram API error', details: data });
    }

    const members = data.result ?? 0;
    console.log(`[Telegram:api] ${chatId} → ${members} miembros`);

    res.json({ members, cached: false });
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error('❌ Telegram API Error:', e);
      res.status(500).json({ error: e.message });
    } else {
      console.error('❌ Telegram API Error: Unknown error', e);
      res.status(500).json({ error: 'Error desconocido' });
    }
  }
});

export default router;
