import express from 'express';
const router = express.Router();

function getManualCount(): number {
  const raw = process.env.TELEGRAM_MEMBERS_COUNT;
  if (!raw) throw new Error('❌ No se encontró TELEGRAM_MEMBERS_COUNT en .env');
  const parsed = parseInt(raw, 10);
  if (isNaN(parsed)) throw new Error('❌ TELEGRAM_MEMBERS_COUNT no es un número válido');
  return parsed;
}

router.get('/', async (_req, res) => {
  try {
    const count = getManualCount();
    console.log(`[Telegram:manual] → ${count} miembros`);
    return res.json({ members: count, cached: true });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Error desconocido';
    console.error('❌ Telegram Manual Error:', message);
    return res.status(500).json({ error: message });
  }
});

export default router;
