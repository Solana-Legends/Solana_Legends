import express from 'express';
const router = express.Router();

function getMode(): string {
  const raw = process.env.TWITTER_FOLLOWERS_MODE;
  if (!raw) throw new Error('❌ No se encontró TWITTER_FOLLOWERS_MODE en .env');
  return raw;
}

function getManualCount(): number {
  const raw = process.env.TWITTER_FOLLOWERS_COUNT;
  if (!raw) throw new Error('❌ No se encontró TWITTER_FOLLOWERS_COUNT en .env');
  const parsed = parseInt(raw);
  if (isNaN(parsed)) throw new Error('❌ TWITTER_FOLLOWERS_COUNT no es un número válido');
  return parsed;
}

router.get('/', async (req, res) => {
  const mode = getMode();

  if (mode === 'manual') {
    const count = getManualCount();
    console.log(`[Twitter:api] modo manual → ${count} seguidores`);
    return res.json({ followers: count, cached: true });
  }

  if (mode === 'api') {
    // Aquí iría la lógica real de fetch a la API de Twitter si estuviera activa
    console.log(`[Twitter:api] modo api → aún no implementado`);
    return res.json({ followers: 0, cached: false });
  }

  return res.status(400).json({ error: 'Modo inválido en TWITTER_FOLLOWERS_MODE' });
});

export default router;
